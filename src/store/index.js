import { createStore } from 'vuex'
import axios from "axios";
import devJson from "./dev-api.js";

const quizID = document.querySelector('#app').dataset.pollId;

export default createStore({
  state: {
    quizQuestionsList: [],
    appSettings: {}
  },
  getters: {

  },
  mutations: {
    setQuizQuestionsList(state, payload) {
      state.quizQuestionsList = payload;
    },
    setQuizAppSettings(state, payload) {
      state.appSettings = payload;
      document.body.style.setProperty("--app-color", state.appSettings.appColor.value);
      document.body.style.setProperty("--app-text-color", state.appSettings.appTextColor.value);
    }
  },
  actions: {
    getAppDataFromServer({ commit }) {
      const appData = JSON.parse(devJson.resState);
      console.log(appData);

      const quizQuestionsList = appData.pollPages[0].pollList;
      commit('setQuizQuestionsList', quizQuestionsList);

      const appSettings = appData.appSettings;
      console.log(appSettings);
      commit('setQuizAppSettings', appSettings);

    }
  }
});



