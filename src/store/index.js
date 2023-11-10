import { createStore } from 'vuex'
import axios from "axios";
import devJson from "./dev-api.js";

const quizID = document.querySelector('#app').dataset.pollId;
const userID = document.querySelector('#app').dataset.user;
const isAdmin = document.querySelector('#app').dataset.asdmin ? true : false;
console.log(isAdmin);
export default createStore({
  state: {
    isAdmin,
    quizID,
    appLoaded: false,
    showCurrentAnswer: false,
    quizQuestionsList: [],
    appSettings: {},
    userAnswers: [],
    startTime: 0,
    getValidate: false,
    customFildsValid: false,
  },
  getters: {
    questionHasUserAnswer: state => index => state.userAnswers
      .find((item, itemIndex) => itemIndex == index),

  },
  mutations: {
    setValidate(state, data) {
      state.getValidate = data;
    },
    setCustomFildsValid(state, data) {
      state.customFildsValid = data;
    },
    toggleShowCurrentAnswer(state) {
      state.showCurrentAnswer = !state.showCurrentAnswer
    },
    setQuizQuestionsList(state, payload) {
      state.quizQuestionsList = payload;
      // console.log(payload);
      const userAnswersList = payload.map(item => {
        const hasCurrentAnswers = item.data.optionsData.hasOwnProperty('currentAnswerId') && item.data.optionsData.currentAnswerId.length > 0;
        let currentAnswers = hasCurrentAnswers ? item.data.optionsData.currentAnswerId : [];
        if (item.type === 'ranging') {
          currentAnswers = item.data.optionsData.optionsList.map(item => item.id);
        }
        return {
          questionType: item.type,
          questionId: item.id,
          optionsList: item.data.optionsData.optionsList,
          correctAnswer: currentAnswers,
          userAnswer: [],
        }
      });
      state.userAnswers = userAnswersList;
    },

    setQuizAppSettings(state, payload) {
      state.appSettings = payload;
      document.body.style.setProperty("--app-color", state.appSettings.appColor.value);
      document.body.style.setProperty("--app-text-color", state.appSettings.appTextColor.value);
      state.appLoaded = true;
    },

    setUserAnswer(state, { questionId, userAnswer }) {
      const questionItem = state.userAnswers.find(item => item.questionId === questionId);
      if (typeof userAnswer == 'string') {
        questionItem.userAnswer = [userAnswer];
      } else {
        questionItem.userAnswer = [...userAnswer];
      }
    },

    setStartTime(state) {
      state.startTime = new Date();
    }

  },
  actions: {
    getAppDataFromServer({ commit }) {
      return new Promise((resolve, reject) => {
        axios.get('/local/templates/quiz/itemjson.php', {
          params: {
            id: quizID,
            type: 'quiz',
          }
        })
          .then(function (response) {
            console.log(response.data);
            const appData = JSON.parse(response.data.resState);
            const quizQuestionsList = appData.pollPages[0].pollList;
            commit('setQuizQuestionsList', quizQuestionsList);
            const appSettings = appData.appSettings;

            commit('setQuizAppSettings', appSettings);
            resolve(response);

          })
          .catch(function (error) {
            console.log(error);
            // DEV
            const appData = JSON.parse(devJson.resState);
            const quizQuestionsList = appData.pollPages[0].pollList;
            commit('setQuizQuestionsList', quizQuestionsList);
            const appSettings = appData.appSettings;
            commit('setQuizAppSettings', appSettings);
            reject(error);
          });
      });

    },
    setAppDataOnServer({ state }) {
      return new Promise((resolve, reject) => {
        const serverData = {};
        serverData.informationAboutPassage = JSON.parse(JSON.stringify(state.userAnswers));
        serverData.completionTimeInMilliseconds = new Date() - state.startTime;
        axios.post('/local/templates/quiz/resultjson.php',
          {
            id: quizID,
            user: userID,
            json: serverData,
          },
          {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
          })
          .then(function (response) {
            console.log(response);
            resolve(response);
          })
          .catch(function (error) {
            console.log(error);
            reject(error);
          });
      });
    },


  }
});



