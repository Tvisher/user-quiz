(function(){"use strict";var e={1821:function(e,t,s){var n=s(3396),i=s(9242),o=s(7139);const r={key:0},a={class:"poll-app quiz-app"},l={key:0,class:"quiz-app-bg"},p=["src"],u={class:"quiz-block"},d={key:1,class:"poll-items"},c={class:"sub-btn__wrap"},h=(0,n._)("div",{class:"quiz-app__footer"},[(0,n._)("div",{class:"quiz-app__footer-content"},[(0,n._)("div",{class:"quiz-app__footer-text"},"Создано в"),(0,n._)("div",{class:"quiz-app__footer-logo"})])],-1),m={key:1,class:"page-has-errors"},g=(0,n._)("br",null,null,-1);function w(e,t,s,w,I,v){const f=(0,n.up)("app-start-page"),_=(0,n.up)("app-poll-element"),y=(0,n.up)("app-end-page");return I.pageHasProblems?((0,n.wg)(),(0,n.iD)("div",m,[(0,n.Uk)(" 404"),g,(0,n.Uk)(" Викторина имеет проблемы ")])):((0,n.wg)(),(0,n.iD)("div",r,[e.appLoaded?((0,n.wg)(),(0,n.iD)("div",{key:0,class:(0,o.C_)(["quiz-page",{"screen-loaded":I.screenLoaded}])},[(0,n._)("div",a,[v.hasQuizBg?((0,n.wg)(),(0,n.iD)("div",l,[(0,n._)("img",{src:e.appSettings.appQuizBg.path,alt:"quiz-bg"},null,8,p)])):(0,n.kq)("",!0),(0,n._)("div",u,[(0,n.Wm)(i.uT,{name:"low-fade",mode:"out-in"},{default:(0,n.w5)((()=>[I.startPage?((0,n.wg)(),(0,n.j4)(f,{key:0,appSettings:e.appSettings,onStartQuiz:v.startQuiz},null,8,["appSettings","onStartQuiz"])):v.showQuizAnswers?((0,n.wg)(),(0,n.iD)("div",d,[(0,n.Wm)(i.uT,{mode:"out-in",name:"low-fade"},{default:(0,n.w5)((()=>[((0,n.wg)(),(0,n.j4)(_,{key:I.answerNumber,pollItemId:v.quizQuestion.id,pollItemType:v.quizQuestion.type,pollItemDescr:v.quizQuestion.typeDescr,pollItemName:v.quizQuestion.typeName,pollItemData:v.quizQuestion.data,pollNumber:I.answerNumber,pollsLength:e.quizQuestionsList.length,onNextQuestion:v.nextQuestion},{default:(0,n.w5)((()=>[(0,n._)("div",c,[(0,n.Wm)(i.uT,{mode:"out-in",name:"btn-fade"},{default:(0,n.w5)((()=>[v.userReplied?((0,n.wg)(),(0,n.iD)("button",{key:I.nextBtnText,class:"btn app-btn sub-btn",onClick:t[0]||(t[0]=(...e)=>v.nextQuestion&&v.nextQuestion(...e))},(0,o.zw)(I.nextBtnText),1)):(0,n.kq)("",!0)])),_:1})])])),_:1},8,["pollItemId","pollItemType","pollItemDescr","pollItemName","pollItemData","pollNumber","pollsLength","onNextQuestion"]))])),_:1})])):I.endPage?((0,n.wg)(),(0,n.j4)(y,{key:2,appSettings:e.appSettings},null,8,["appSettings"])):(0,n.kq)("",!0)])),_:1})])]),h],2)):(0,n.kq)("",!0)]))}var I=s(65);const v={class:"poll-item"},f={class:"poll-item__head"},_={class:"poll-item__counter"};function y(e,t,s,i,r,a){const l=(0,n.up)("app-visual-poll-body");return(0,n.wg)(),(0,n.iD)("div",v,[(0,n._)("div",f,[(0,n._)("div",_," Вопрос "+(0,o.zw)(a.indexNumber)+" из "+(0,o.zw)(s.pollsLength),1)]),(0,n.Wm)(l,{pollItemId:s.pollItemId,pollItemType:s.pollItemType,pollItemData:s.pollItemData},null,8,["pollItemId","pollItemType","pollItemData"]),(0,n.WI)(e.$slots,"default")])}const A=["src","alt"];function C(e,t,s,i,r,a){const l=(0,n.up)("app-text-from-editor"),p=(0,n.up)("app-single-choise-variant"),u=(0,n.up)("app-multi-choise-variant"),d=(0,n.up)("app-single-select"),c=(0,n.up)("app-multi-select"),h=(0,n.up)("app-ranging-visual"),m=(0,n.up)("app-custom-fields-visual");return(0,n.wg)(),(0,n.iD)("div",{class:(0,o.C_)(["poll-body",{"only-view":a.viewOnly}])},[a.isHasImageInPoll?((0,n.wg)(),(0,n.iD)("div",{key:0,class:(0,o.C_)(["poll-body__image-block",a.imagePositionType])},[(0,n._)("img",{src:s.pollItemData.pollImage.path,alt:s.pollItemData.pollImage.name,onLoad:t[0]||(t[0]=(...e)=>a.imageLoaded&&a.imageLoaded(...e))},null,40,A)],2)):(0,n.kq)("",!0),(0,n.Wm)(l,{editorValue:s.pollItemData.editorValue},null,8,["editorValue"]),"single-choice"===s.pollItemType?((0,n.wg)(),(0,n.j4)(p,{key:1,optionsData:s.pollItemData.optionsData,pollItemId:s.pollItemId},null,8,["optionsData","pollItemId"])):(0,n.kq)("",!0),"multiple-choice"===s.pollItemType?((0,n.wg)(),(0,n.j4)(u,{key:2,optionsData:s.pollItemData.optionsData,pollItemId:s.pollItemId},null,8,["optionsData","pollItemId"])):(0,n.kq)("",!0),"drop-down-list"===s.pollItemType?((0,n.wg)(),(0,n.j4)(d,{key:3,optionsData:s.pollItemData.optionsData,pollItemId:s.pollItemId},null,8,["optionsData","pollItemId"])):(0,n.kq)("",!0),"multiple-drop-down-list"===s.pollItemType?((0,n.wg)(),(0,n.j4)(c,{key:4,optionsData:s.pollItemData.optionsData,pollItemId:s.pollItemId},null,8,["optionsData","pollItemId"])):(0,n.kq)("",!0),"ranging"===s.pollItemType?((0,n.wg)(),(0,n.j4)(h,{key:5,optionsData:s.pollItemData.optionsData,pollItemId:s.pollItemId},null,8,["optionsData","pollItemId"])):(0,n.kq)("",!0),"custom-fields"===s.pollItemType?((0,n.wg)(),(0,n.j4)(m,{key:6,optionsData:s.pollItemData.optionsData,pollItemId:s.pollItemId},null,8,["optionsData","pollItemId"])):(0,n.kq)("",!0)],2)}const b=["innerHTML"];function D(e,t,s,i,o,r){return(0,n.wg)(),(0,n.iD)("div",null,[(0,n._)("div",{class:"poll-item__answer",innerHTML:r.deltaToHtml},null,8,b)])}var k=s(7412),L={props:{editorValue:{type:Object}},computed:{deltaToHtml(){const e=this.editorValue.ops,t=new k.bc(e,{});return t.convert()}}},q=s(89);const S=(0,q.Z)(L,[["render",D]]);var z=S;const x={class:"single-choise-visual"},F=["name","onInput"],O={class:"single-choise-visual__text"};function T(e,t,s,i,r,a){return(0,n.wg)(),(0,n.iD)("div",x,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(s.optionsData.optionsList,(e=>((0,n.wg)(),(0,n.iD)("label",{class:(0,o.C_)(["single-choise-visual__label",{checked:e.id===r.checkedInputId,current:e.id===a.correctAnswerId}]),key:e.id},[(0,n._)("input",{class:"single-choise-visual__input",type:"radio",name:s.pollItemId,onInput:t=>a.getChecket(e.id)},null,40,F),(0,n._)("p",O,(0,o.zw)(e.value),1)],2)))),128))])}var Q={props:{optionsData:Object,pollItemId:String},data(){return{checkedInputId:""}},computed:{...(0,I.rn)({showCurrentAnswer:e=>e.showCurrentAnswer}),correctAnswerId(){return this.optionsData.currentAnswerId.length<1||!0===!this.showCurrentAnswer?null:this.optionsData.currentAnswerId[0]}},methods:{...(0,I.OI)(["setUserAnswer"]),getChecket(e){this.checkedInputId=e,this.setUserAnswer({questionId:this.pollItemId,userAnswer:e})}}};const P=(0,q.Z)(Q,[["render",T]]);var V=P;const N={class:"multiple-choise-visual"},j=["name","onInput"],H={class:"single-choise-visual__text"};function U(e,t,s,i,r,a){return(0,n.wg)(),(0,n.iD)("div",N,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(s.optionsData.optionsList,(e=>((0,n.wg)(),(0,n.iD)("label",{class:(0,o.C_)(["single-choise-visual__label",{checked:r.checkedInputs.includes(e.id),correct:a.correctAnswerId.includes(e.id)}]),key:e.id},[(0,n._)("input",{class:"single-choise-visual__input",type:"checkbox",name:s.pollItemId,onInput:t=>a.getChecket(t,e.id)},null,40,j),(0,n._)("p",H,(0,o.zw)(e.value),1)],2)))),128))])}s(7658);var M={props:{optionsData:Object,pollItemId:String},data(){return{checkedInputs:[]}},computed:{...(0,I.rn)({showCurrentAnswer:e=>e.showCurrentAnswer}),hasCorrectAnswer(){return this.optionsData.currentAnswerId.length>0&&!0===this.showCurrentAnswer},correctAnswerId(){return this.hasCorrectAnswer?this.optionsData.currentAnswerId:[]}},methods:{...(0,I.OI)(["setUserAnswer"]),getChecket(e,t){const s=e.target.checked;s?this.checkedInputs.push(t):this.checkedInputs=this.checkedInputs.filter((e=>e!==t)),this.setUserAnswer({questionId:this.pollItemId,userAnswer:[...this.checkedInputs]})}}};const Z=(0,q.Z)(M,[["render",U]]);var E=Z;function B(e,t,s,i,r,a){const l=(0,n.up)("v-select");return(0,n.wg)(),(0,n.j4)(l,{class:(0,o.C_)(a.isCorretnAnswer),options:r.optionsListForSelect,reduce:e=>e.id,modelValue:r.selectedOptionId,"onUpdate:modelValue":t[0]||(t[0]=e=>r.selectedOptionId=e),placeholder:r.placeholder,"append-to-body":"","calculate-position":a.withPopper},{"no-options":(0,n.w5)((()=>[(0,n.Uk)(" Ничего не найдено ")])),_:1},8,["class","options","reduce","modelValue","placeholder","calculate-position"])}var $=s(3910),R={data(){return{selectedOptionId:"",placeholder:"Выберите один из вариантов ответа",placement:"bottom",optionsListForSelect:[]}},props:{optionsData:{type:Object},pollItemId:{type:String}},computed:{...(0,I.rn)({showCurrentAnswer:e=>e.showCurrentAnswer}),isCorretnAnswer(){if(this.optionsData.currentAnswerId.length>0&&this.showCurrentAnswer)return this.optionsData.currentAnswerId==this.selectedOptionId?"correct":"uncorrect"}},methods:{withPopper(e,t,{width:s}){e.style.width=s;const n=(0,$.fi)(t.$refs.toggle,e,{placement:this.placement,modifiers:[{name:"offset",options:{offsetX:[0,-1]}},{name:"toggleClass",enabled:!0,phase:"write",fn({state:e}){t.$el.classList.toggle("drop-up","top"===e.placement)}}]});return()=>n.destroy()},...(0,I.OI)(["setUserAnswer"])},watch:{selectedOptionId(){const e=this.selectedOptionId?this.selectedOptionId:[];this.setUserAnswer({questionId:this.pollItemId,userAnswer:e})}},mounted(){this.optionsListForSelect=this.optionsData.optionsList.reduce(((e,t)=>{const s={label:t.value,id:t.id};return e.push(s),e}),[])}};const W=(0,q.Z)(R,[["render",B]]);var G=W;function J(e,t,s,i,o,r){const a=(0,n.up)("v-select");return(0,n.wg)(),(0,n.j4)(a,{class:"multi-select",multiple:"",pushTags:!0,options:o.optionsListForSelect,reduce:e=>e.id,modelValue:o.selectedOptionId,"onUpdate:modelValue":t[0]||(t[0]=e=>o.selectedOptionId=e),placeholder:o.placeholder,"append-to-body":"","calculate-position":r.withPopper},{"no-options":(0,n.w5)((()=>[(0,n.Uk)(" Ничего не найдено ")])),_:1},8,["options","reduce","modelValue","placeholder","calculate-position"])}var K={data(){return{selectedOptionId:[],placeholder:"Выберите один или несколько вариантов ответа",placement:"bottom",optionsListForSelect:[]}},props:{optionsData:{type:Object},pollItemId:{type:String}},computed:{...(0,I.rn)({showCurrentAnswer:e=>e.showCurrentAnswer})},methods:{withPopper(e,t,{width:s}){e.style.width=s;const n=(0,$.fi)(t.$refs.toggle,e,{placement:this.placement,modifiers:[{name:"offset",options:{offsetX:[0,-1]}},{name:"toggleClass",enabled:!0,phase:"write",fn({state:e}){t.$el.classList.toggle("drop-up","top"===e.placement)}}]});return()=>n.destroy()},...(0,I.OI)(["setUserAnswer"])},watch:{showCurrentAnswer(){if(this.optionsData.currentAnswerId.length>0){const e=this.optionsListForSelect.filter((e=>{if(this.optionsData.currentAnswerId.includes(e.id))return e})).map((e=>e.label.toLowerCase())),t=document.querySelectorAll(".vs__selected");t.forEach((t=>{const s=t.textContent.toLowerCase();e.includes(s)?t.classList.add("correct"):t.classList.add("uncorrect")}))}},selectedOptionId(){this.setUserAnswer({questionId:this.pollItemId,userAnswer:[...this.selectedOptionId]})}},mounted(){this.optionsListForSelect=this.optionsData.optionsList.reduce(((e,t)=>{const s={label:t.value,id:t.id};return e.push(s),e}),[])}};const Y=(0,q.Z)(K,[["render",J]]);var X=Y;const ee=e=>((0,n.dD)("data-v-d260dd54"),e=e(),(0,n.Cn)(),e),te={class:"rangin-visual"},se={class:"rangin-visual__content"},ne=ee((()=>(0,n._)("div",{class:"rangin-visual__dragg"},[(0,n._)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[(0,n._)("path",{d:"M12 4.00003C13.1046 4.00003 14 3.10459 14 2.00002C14 0.895438 13.1046 0 12 0C10.8954 0 10 0.895438 10 2.00002C10 3.10459 10.8954 4.00003 12 4.00003Z",fill:"#C2CFE0"}),(0,n._)("path",{d:"M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z",fill:"#C2CFE0"}),(0,n._)("path",{d:"M12 24.0001C13.1046 24.0001 14 23.1046 14 22C14 20.8954 13.1046 20 12 20C10.8954 20 10 20.8954 10 22C10 23.1046 10.8954 24.0001 12 24.0001Z",fill:"#C2CFE0"})])],-1))),ie={class:"rangin-visual__num"},oe={class:"rangin-visual__text"},re={class:"rangin-visual__btns"},ae=["onClick"],le=ee((()=>(0,n._)("svg",{width:"33",height:"33",viewBox:"0 0 33 33",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[(0,n._)("path",{d:"M11.4138 20.586H22.5858C22.7836 20.586 22.9769 20.5273 23.1413 20.4174C23.3057 20.3075 23.4339 20.1514 23.5095 19.9687C23.5852 19.786 23.605 19.5849 23.5664 19.391C23.5279 19.197 23.4327 19.0189 23.2928 18.879L17.7068 13.293C17.5193 13.1056 17.265 13.0002 16.9998 13.0002C16.7347 13.0002 16.4804 13.1056 16.2928 13.293L10.7068 18.879C10.567 19.0189 10.4718 19.197 10.4333 19.391C10.3947 19.5849 10.4145 19.786 10.4902 19.9687C10.5658 20.1514 10.694 20.3075 10.8584 20.4174C11.0228 20.5273 11.2161 20.586 11.4138 20.586Z",fill:"#868DA4"}),(0,n._)("rect",{x:"1",y:"1",width:"31",height:"31",rx:"7",stroke:"#868DA4","stroke-width":"2"})],-1))),pe=[le],ue=["onClick"],de=ee((()=>(0,n._)("svg",{width:"33",height:"33",viewBox:"0 0 33 33",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[(0,n._)("path",{d:"M11.4138 14H22.5858C22.7836 14 22.9769 14.0587 23.1413 14.1686C23.3057 14.2785 23.4339 14.4346 23.5095 14.6173C23.5852 14.8 23.605 15.0011 23.5664 15.195C23.5279 15.389 23.4327 15.5671 23.2928 15.707L17.7068 21.293C17.5193 21.4805 17.265 21.5858 16.9998 21.5858C16.7347 21.5858 16.4804 21.4805 16.2928 21.293L10.7068 15.707C10.567 15.5671 10.4718 15.389 10.4333 15.195C10.3947 15.0011 10.4145 14.8 10.4902 14.6173C10.5658 14.4346 10.694 14.2785 10.8584 14.1686C11.0228 14.0587 11.2161 14 11.4138 14Z",fill:"#868DA4"}),(0,n._)("rect",{x:"1",y:"1",width:"31",height:"31",rx:"7",stroke:"#868DA4","stroke-width":"2"})],-1))),ce=[de];function he(e,t,s,r,a,l){const p=(0,n.up)("draggable");return(0,n.wg)(),(0,n.iD)("div",te,[(0,n.Wm)(p,(0,n.dG)({modelValue:a.optionsList,"onUpdate:modelValue":t[0]||(t[0]=e=>a.optionsList=e)},l.pollItemsDragOptionsInSidebar,{handle:".rangin-visual__content",onStart:t[1]||(t[1]=e=>a.isDraggingOption=!0),onEnd:t[2]||(t[2]=e=>a.isDraggingOption=!1)}),{default:(0,n.w5)((()=>[(0,n.Wm)(i.W3,{type:"transition",name:a.isDraggingOption?"flip-option-list":"fade-range"},{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(a.optionsList,((t,s)=>((0,n.wg)(),(0,n.iD)("div",{class:(0,o.C_)(["rangin-visual__item",{correct:e.showCurrentAnswer&&l.correctOrderId[s]==t.id,wrong:e.showCurrentAnswer&&l.correctOrderId[s]!=t.id}]),key:t.id},[(0,n._)("div",se,[ne,(0,n._)("div",ie,(0,o.zw)(s+1),1),(0,n._)("div",oe,(0,o.zw)(t.value),1)]),(0,n._)("div",re,[(0,n._)("div",{class:"rangin-visual__top-btn",onClick:e=>l.rangeVariant(s,"top")},pe,8,ae),(0,n._)("div",{class:"rangin-visual__bottom-btn",onClick:e=>l.rangeVariant(s,"bottom")},ce,8,ue)])],2)))),128))])),_:1},8,["name"])])),_:1},16,["modelValue"])])}var me=s(8249),ge={components:{draggable:me.J},props:{optionsData:{type:Object},pollItemId:{type:String}},data(){return{optionsList:[],isDraggingOption:!1}},computed:{...(0,I.rn)({showCurrentAnswer:e=>e.showCurrentAnswer}),pollItemsDragOptionsInSidebar(){return{animation:200,group:`rangeGroup-${this.pollItemId}`,scrollSensitivity:200,forceFallback:!0,disabled:!1,ghostClass:"ghost-potion",sort:!0}},correctOrder(){return this.optionsList.every(((e,t)=>e.id==this.optionsData.optionsList[t].id))},correctOrderId(){return this.optionsData.optionsList.map((e=>e.id))}},methods:{...(0,I.OI)(["setUserAnswer"]),rangeVariant(e,t){let s;function n(e,t,s){const n=e[t];e[t]=e[s],e[s]=n}"bottom"==t&&(s=e===this.optionsList.length-1?0:e+1),"top"==t&&(s=0===e?this.optionsList.length-1:e-1),n(this.optionsList,e,s)}},watch:{optionsList(e,t){if(t.length>0){const t=e.map((e=>e.id));this.setUserAnswer({questionId:this.pollItemId,userAnswer:[...t]})}}},beforeMount(){const e=()=>{this.optionsList=[...this.optionsData.optionsList].sort((()=>Math.random()-.5))};while(this.correctOrder)e()}};const we=(0,q.Z)(ge,[["render",he],["__scopeId","data-v-d260dd54"]]);var Ie=we;const ve={class:"editor-descr"},fe={key:0,class:"variant-item__label"},_e=["value","onAccept"],ye=(0,n._)("span",{class:"err-mess"},"Необходимо запонить это поле",-1),Ae={key:1,class:"variant-item__label"},Ce=["value","placeholder","onInput"],be=(0,n._)("span",{class:"err-mess"},"Необходимо запонить это поле",-1),De={key:2,class:"variant-item__label"},ke=["value","placeholder","onInput"],Le=(0,n._)("span",{class:"err-mess"},"Необходимо запонить это поле",-1),qe={key:3,class:"variant-item__label"},Se=["value","placeholder","onInput"],ze=(0,n._)("span",{class:"err-mess"},"Необходимо запонить это поле",-1);function xe(e,t,s,i,r,a){const l=(0,n.Q2)("imask");return(0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(r.customFields,((s,i)=>((0,n.wg)(),(0,n.iD)("div",{class:(0,o.C_)(["custom-field-item",{"error-field":!s.filled&&e.getValidate}]),key:s.id},[(0,n._)("span",ve,(0,o.zw)(s.value||`Поле № ${i+1}`),1),"phone"===s.type?((0,n.wg)(),(0,n.iD)("label",fe,[(0,n.wy)((0,n._)("input",{class:"variant-item__filed",value:s.answer,onAccept:e=>a.onAcceptPhone(e,s.id),onFocus:t[0]||(t[0]=(...e)=>a.removeErr&&a.removeErr(...e))},null,40,_e),[[l,r.phoneMask]]),ye])):(0,n.kq)("",!0),"email"===s.type?((0,n.wg)(),(0,n.iD)("label",Ae,[(0,n._)("input",{class:"variant-item__filed",value:s.answer,placeholder:r.emailPlaceholder,onInput:e=>a.emailCheck(e,s.id),onFocus:t[1]||(t[1]=(...e)=>a.removeErr&&a.removeErr(...e))},null,40,Ce),be])):(0,n.kq)("",!0),"text"===s.type?((0,n.wg)(),(0,n.iD)("label",De,[(0,n._)("input",{class:"variant-item__filed",value:s.answer,placeholder:r.textFieldPlaceholder,onInput:e=>a.textFieldCheck(e,s.id),onFocus:t[2]||(t[2]=(...e)=>a.removeErr&&a.removeErr(...e))},null,40,ke),Le])):(0,n.kq)("",!0),"textarea"===s.type?((0,n.wg)(),(0,n.iD)("label",qe,[(0,n._)("textarea",{class:"variant-item__filed",value:s.answer,placeholder:r.textAreaPlaceholder,onInput:e=>a.textFieldCheck(e,s.id),onFocus:t[3]||(t[3]=(...e)=>a.removeErr&&a.removeErr(...e))},null,40,Se),ze])):(0,n.kq)("",!0)],2)))),128)}var Fe=s(2566);function Oe(e){const t=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return t.test(String(e).toLowerCase())}var Te={directives:{imask:Fe.An},props:{pollItemId:{type:String},optionsData:{type:Object}},data(){return{customFields:[],phoneMask:{mask:"+{7}(000)000-00-00",lazy:!1},emailPlaceholder:"example@mail.ru",textFieldPlaceholder:"Ваш ответ",textAreaPlaceholder:"Сообщение"}},computed:{...(0,I.rn)(["getValidate"])},methods:{removeErr(e){e.target.closest(".error-field")},onAcceptPhone(e,t){const s=this.customFields.find((e=>e.id===t)),n=e.detail.value.trim();s.answer=n;const i=String(n).replace(/[^0-9]/g,"");i.length<11?s.filled=!1:s.filled=!0},emailCheck(e,t){const s=e.target.value.trim(),n=this.customFields.find((e=>e.id===t));n.answer=s,Oe(s)?n.filled=!0:n.filled=!1},textFieldCheck(e,t){const s=e.target.value.trim(),n=this.customFields.find((e=>e.id===t));n.answer=s,s.length>0?n.filled=!0:n.filled=!1},...(0,I.OI)(["setUserAnswer","setCustomFildsValid"])},beforeMount(){this.customFields=this.optionsData.optionsList.map((e=>({id:e.id,type:e.type,value:e.value,answer:"",filled:!1})))},watch:{customFields:{handler(){const e=this.customFields.map((e=>e.filled)).every((e=>!0===e));e?(this.setUserAnswer({questionId:this.pollItemId,userAnswer:[...this.customFields]}),this.setCustomFildsValid(!0)):(this.setUserAnswer({questionId:this.pollItemId,userAnswer:[]}),this.setCustomFildsValid(!1))},deep:!0}}};const Qe=(0,q.Z)(Te,[["render",xe]]);var Pe=Qe,Ve={components:{AppTextFromEditor:z,AppSingleChoiseVariant:V,AppMultiChoiseVariant:E,AppSingleSelect:G,AppMultiSelect:X,AppRangingVisual:Ie,AppCustomFieldsVisual:Pe},props:{pollItemId:{type:[Number,String]},pollItemType:{type:String},pollItemData:{type:Object}},computed:{...(0,I.rn)({showCurrentAnswer:e=>e.showCurrentAnswer}),isHasImageInPoll(){const e=this.pollItemData.pollImage;return e&&0!==Object.keys(e).length},imagePositionType(){if(this.isHasImageInPoll)return this.pollItemData.pollImage.stretchImage?"_cover":"_contain"},viewOnly(){return!0===this.showCurrentAnswer}},methods:{imageLoaded(e){console.log("image loaded")}}};const Ne=(0,q.Z)(Ve,[["render",C]]);var je=Ne,He={components:{AppVisualPollBody:je},props:{pollItemId:{type:[Number,String]},pollItemType:{type:String},pollItemName:{type:String},pollItemData:{type:Object},pollNumber:{type:Number},pollsLength:{type:Number}},data(){return{}},computed:{indexNumber(){return this.pollNumber+1}},methods:{}};const Ue=(0,q.Z)(He,[["render",y]]);var Me=Ue;const Ze={class:"quiz-start"},Ee={class:"quiz-start__head"},Be={key:0,class:"quiz-start__logo"},$e=["src"],Re={class:"quiz-start__title"},We={class:"quiz-start__descr"},Ge={class:"quiz-start-btn__wrapper"};function Je(e,t,s,i,r,a){return(0,n.wg)(),(0,n.iD)("div",Ze,[(0,n._)("div",Ee,[a.appLogo?((0,n.wg)(),(0,n.iD)("div",Be,[(0,n._)("img",{style:(0,o.j5)({objectFit:a.stretchAppLogo}),src:a.appLogo,alt:""},null,12,$e)])):(0,n.kq)("",!0),(0,n._)("div",Re,(0,o.zw)(a.appTitle),1)]),(0,n._)("div",We,(0,o.zw)(a.appDescription),1),(0,n._)("div",Ge,[(0,n._)("button",{class:"btn quiz-start-btn app-btn",onClick:t[0]||(t[0]=(...e)=>a.startQuiz&&a.startQuiz(...e))}," Пройти Викторину ")])])}var Ke=s(4161),Ye={props:{appSettings:{type:Object}},computed:{appLogo(){const e=this.appSettings.appLogo.path;return e||!1},stretchAppLogo(){return this.appSettings.appLogo.stretchImage&&1==this.appSettings.appLogo.stretchImage?"cover":"contain"},appTitle(){return this.appSettings.appTitle},appDescription(){return this.appSettings.appDescription}},methods:{startQuiz(){this.$store.commit("setStartTime"),this.$emit("startQuiz");const e=document.querySelector("#app").dataset.pollId,t=document.querySelector("#app").dataset.user;Ke.Z.post("/bitrix/templates/quiz/startitem.php",{id:e,user:t},{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then((function(e){console.log("Начало прохождения викторины!")})).catch((function(e){console.log("Ошибка:",e)}))}}};const Xe=(0,q.Z)(Ye,[["render",Je]]);var et=Xe;const tt={class:"quiz-end"},st={key:0,class:"quiz-end-precent"},nt={class:"quiz-end-precent__img"},it=(0,n.uE)('<svg width="204" height="203" viewBox="0 0 204 203" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="102.5" cy="102" r="92" fill="var(--app-color)"></circle><path d="M194.5 102C194.5 89.9184 192.12 77.9551 187.497 66.7931C182.873 55.6312 176.097 45.4892 167.554 36.9462C159.011 28.4032 148.869 21.6265 137.707 17.0031C126.545 12.3796 114.582 10 102.5 10L102.5 102H194.5Z" fill="url(#paint0_linear_1181_55336)"></path><path d="M10.4996 102L102.5 194L194.5 102L10.4996 102Z" fill="url(#paint1_linear_1181_55336)"></path><defs><linearGradient id="paint0_linear_1181_55336" x1="-10.7307" y1="-53.532" x2="253.033" y2="-20.3577" gradientUnits="userSpaceOnUse"><stop offset="0.0261371" stop-color="white" stop-opacity="0.81"></stop><stop offset="1" stop-color="white" stop-opacity="0"></stop></linearGradient><linearGradient id="paint1_linear_1181_55336" x1="72.3191" y1="119.942" x2="219.688" y2="75.4972" gradientUnits="userSpaceOnUse"><stop stop-color="white" stop-opacity="0"></stop><stop offset="1" stop-color="white"></stop></linearGradient></defs></svg>',1),ot={class:"quiz-end-precent__value"},rt=(0,n._)("div",{class:"quiz-end-precent__title"},"Правильных ответов",-1),at={key:1,class:"quiz-end-message"},lt={class:"quiz-end-btns"},pt={key:0,class:"quiz-end-btn"},ut=["href"],dt={key:1,class:"quiz-end-btn"};function ct(e,t,s,i,r,a){return(0,n.wg)(),(0,n.iD)("div",tt,[a.appHasCurrentAnswers?((0,n.wg)(),(0,n.iD)("div",st,[(0,n._)("div",nt,[it,(0,n._)("div",ot,(0,o.zw)(a.truePrecentValue)+"%",1)]),rt])):(0,n.kq)("",!0),a.isHasAppFinalMessage?((0,n.wg)(),(0,n.iD)("div",at,(0,o.zw)(s.appSettings.appFinalMessage),1)):(0,n.kq)("",!0),(0,n._)("div",lt,[a.isHasCustomLink?((0,n.wg)(),(0,n.iD)("div",pt,[(0,n._)("a",{href:a.customFinishLinkUrl,class:"btn app-btn"},(0,o.zw)(a.customFinishLinkText),9,ut)])):(0,n.kq)("",!0),a.takeTheQuizagain?((0,n.wg)(),(0,n.iD)("div",dt,[(0,n._)("a",{href:"#",class:"btn app-btn",onClick:t[0]||(t[0]=(...e)=>a.pageReload&&a.pageReload(...e))},"Пройти викторину повторно")])):(0,n.kq)("",!0)])])}function ht(e,t){const s=e.filter((e=>t.includes(e)));return s.length>t.length/2}function mt(e,t){const s=Math.min(e.length,t.length),n=e.slice(0,s).filter(((e,s)=>e===t[s]));return n.length>s/2}function gt(e){const t=e.reduce(((e,t)=>e+ +t),0),s=e.length;return Math.round(t/s*100)}var wt={props:{appSettings:{type:Object}},computed:{...(0,I.rn)({userAnswers:e=>e.userAnswers}),isHasAppFinalMessage(){return""!=this.appSettings.appFinalMessage.trim()},isHasCustomLink(){return this.appSettings.customFinishLink.enable},customFinishLinkUrl(){return this.appSettings.customFinishLink.data.linkUrl},customFinishLinkText(){return this.appSettings.customFinishLink.data.linkText},takeTheQuizagain(){return this.appSettings.takeTheQuizagain},appHasCurrentAnswers(){return this.userAnswers.filter((e=>e.hasOwnProperty("correctAnswer")&&e.correctAnswer.length>0)).length>0},truePrecentValue(){const e=this.userAnswers.filter((e=>e.hasOwnProperty("correctAnswer")&&e.correctAnswer.length>0)).map((e=>"single-choice"==e.questionType||"drop-down-list"==e.questionType?e.userAnswer[0]==e.correctAnswer[0]:"multiple-drop-down-list"==e.questionType||"multiple-choice"==e.questionType?ht(e.userAnswer,e.correctAnswer):"ranging"==e.questionType?mt(e.userAnswer,e.correctAnswer):void 0));return gt(e)}},methods:{pageReload(){window.location.reload()}}};const It=(0,q.Z)(wt,[["render",ct]]);var vt=It,ft={components:{AppPollElement:Me,AppStartPage:et,AppEndPage:vt},name:"App",data(){return{answerNumber:0,startPage:!0,endPage:!1,screenLoaded:!1,nextBtnText:"",pageHasProblems:!1}},computed:{...(0,I.rn)({appLoaded:e=>e.appLoaded,quizQuestionsList:e=>e.quizQuestionsList,appSettings:e=>e.appSettings,showCurrentAnswer:e=>e.showCurrentAnswer,userAnswers:e=>e.userAnswers,customFildsValid:e=>e.customFildsValid}),...(0,I.Se)(["questionHasUserAnswer"]),quizQuestionsListLength(){return this.quizQuestionsList.length},showQuizAnswers(){return!this.startPage&&!this.endPage},hasQuizBg(){return this.appSettings.appQuizBg.path},quizQuestion(){return this.quizQuestionsList[this.answerNumber]},userReplied(){return this.questionHasUserAnswer(this.answerNumber).userAnswer.length>0||this.questionTypeIsCustomFields},questionHasCorrectAnswer(){return this.userAnswers[this.answerNumber].correctAnswer.length>0},questionTypeIsCustomFields(){return"custom-fields"===this.quizQuestionsList[this.answerNumber].type}},methods:{...(0,I.OI)(["toggleShowCurrentAnswer","setValidate","setCustomFildsValid"]),startQuiz(){this.startPage=!1},nextQuestion(){if(this.userReplied)if(this.customFildsValid||!this.questionTypeIsCustomFields){if(this.setCustomFildsValid(!1),this.setValidate(!1),this.answerNumber<this.quizQuestionsListLength-1){if(!this.questionHasCorrectAnswer)return void this.answerNumber++;if(!0===this.showCurrentAnswer)return this.toggleShowCurrentAnswer(),void this.answerNumber++;this.toggleShowCurrentAnswer()}if(this.answerNumber==this.quizQuestionsListLength-1){if(!this.questionHasCorrectAnswer)return this.$store.dispatch("setAppDataOnServer"),void(this.endPage=!0);if(this.questionHasCorrectAnswer&&!1===this.showCurrentAnswer)return void this.toggleShowCurrentAnswer();this.questionHasCorrectAnswer&&!0===this.showCurrentAnswer&&(this.$store.dispatch("setAppDataOnServer"),this.endPage=!0)}}else this.setValidate(!0)}},watch:{showCurrentAnswer(){!0===this.showCurrentAnswer?this.nextBtnText="Далее":this.nextBtnText="Ответить"},appLoaded(){this.questionHasCorrectAnswer?this.nextBtnText="Ответить":this.nextBtnText="Далее"},answerNumber(){this.questionHasCorrectAnswer?this.nextBtnText="Ответить":this.nextBtnText="Далее"}},beforeCreate(){this.$store.dispatch("getAppDataFromServer").then((e=>{})).catch((e=>{console.log("Ошибка:",e)})),window.addEventListener("load",(()=>{console.log("page-load"),setTimeout((()=>{this.screenLoaded=!0}),200)}))}};const _t=(0,q.Z)(ft,[["render",w]]);var yt=_t;const At={resState:'{"appId":"129","appType":"quiz","applicationReady":false,"pollTypesList":[],"currentPageId":"1","pagesLimit":5,"pollsInPageLimit":10,"pagesMinLength":1,"colors":[],"textColors":[{"name":"Белый","value":"#FFFFFF"},{"name":"Чёрный","value":"#000000"}],"appSettings":{"appTitle":"форма","appDescription":"форма","appPromo":"","appFinalMessage":"","hasCorrectAnswers":true,"takeTheQuizagain":false,"customFinishLink":{"enable":false,"data":{"linkText":"","linkUrl":""}},"appColor":{"name":"Intercom","value":"#FA0056"},"appTextColor":{"name":"Белый","value":"#FFFFFF"},"appLogo":{},"appQuizBg":{}},"pollPages":[{"id":"1","pageComment":"","pollList":[{"type":"custom-fields","typeName":"Кастомные поля","typeDescr":"Описание для элемента опроса Кастомные поля","data":{"pollImage":{},"editorValue":{"ops":[{"insert":"Вопрос кастомный 1\\n"}]},"optionsData":{"minOptionsLength":1,"maxOptionsLength":10,"optionsList":[{"id":"1","type":"text","value":"имя"},{"id":"c34c0793-3a9b-4131-9178-e132d4a73502","type":"phone","value":"Телефон"},{"id":"97bdc95e-3516-4ac7-bf94-e5ef01862feb","type":"email","value":"Емэйл"},{"id":"8550fd35-ff7e-468d-9dc4-90a97daa42d6","type":"textarea","value":"Текст"}]}},"id":"f2708516-64b1-421c-a766-66f8da0f766c"},{"type":"single-choice","typeName":"Одиночный выбор","typeDescr":"Описание для элемента опроса Одиночный выбор","data":{"pollImage":{},"editorValue":{"ops":[{"insert":"Rrrrr\\n"}]},"optionsData":{"minOptionsLength":2,"maxOptionsLength":10,"currentAnswerId":[],"optionsList":[{"id":"1","value":"1"},{"id":"2","value":"2"}]}},"id":"aceb44ff-7b32-4144-8846-47ac2f85aa9c"},{"type":"custom-fields","typeName":"Кастомные поля","typeDescr":"Описание для элемента опроса Кастомные поля","data":{"pollImage":{},"editorValue":{"ops":[{"insert":"Вопрос кастомный 1\\n"}]},"optionsData":{"minOptionsLength":1,"maxOptionsLength":10,"optionsList":[{"id":"1","type":"text","value":"Имя"},{"id":"731f66f5-1f71-4c5f-8b31-e9ec3cb3cd3f","type":"phone","value":"Телефон"},{"id":"188c122a-ac61-419a-ad95-b8cbe4d0c41f","type":"email","value":"мэйл"},{"id":"40b398c4-5363-42fc-bd07-51cc6f265998","type":"textarea","value":"Поле ввода"}]}},"id":"16799722-ae3c-450f-a781-2cb3f236ad62"}]}]}'};var Ct=At;const bt=document.querySelector("#app").dataset.pollId,Dt=document.querySelector("#app").dataset.user;var kt=(0,I.MT)({state:{appLoaded:!1,showCurrentAnswer:!1,quizQuestionsList:[],appSettings:{},userAnswers:[],startTime:0,getValidate:!1,customFildsValid:!1},getters:{questionHasUserAnswer:e=>t=>e.userAnswers.find(((e,s)=>s==t))},mutations:{setValidate(e,t){e.getValidate=t},setCustomFildsValid(e,t){e.customFildsValid=t},toggleShowCurrentAnswer(e){e.showCurrentAnswer=!e.showCurrentAnswer},setQuizQuestionsList(e,t){e.quizQuestionsList=t;const s=t.map((e=>{const t=e.data.optionsData.hasOwnProperty("currentAnswerId")&&e.data.optionsData.currentAnswerId.length>0;let s=t?e.data.optionsData.currentAnswerId:[];return"ranging"===e.type&&(s=e.data.optionsData.optionsList.map((e=>e.id))),{questionType:e.type,questionId:e.id,optionsList:e.data.optionsData.optionsList,correctAnswer:s,userAnswer:[]}}));e.userAnswers=s},setQuizAppSettings(e,t){e.appSettings=t,document.body.style.setProperty("--app-color",e.appSettings.appColor.value),document.body.style.setProperty("--app-text-color",e.appSettings.appTextColor.value),e.appLoaded=!0},setUserAnswer(e,{questionId:t,userAnswer:s}){const n=e.userAnswers.find((e=>e.questionId===t));n.userAnswer="string"==typeof s?[s]:[...s]},setStartTime(e){e.startTime=new Date}},actions:{getAppDataFromServer({commit:e}){return new Promise(((t,s)=>{Ke.Z.get("/bitrix/templates/quiz/itemjson.php",{params:{id:bt,type:"quiz"}}).then((function(s){console.log(s.data);const n=JSON.parse(s.data.resState),i=n.pollPages[0].pollList;e("setQuizQuestionsList",i);const o=n.appSettings;e("setQuizAppSettings",o),t(s)})).catch((function(t){console.log(t);const n=JSON.parse(Ct.resState),i=n.pollPages[0].pollList;e("setQuizQuestionsList",i);const o=n.appSettings;e("setQuizAppSettings",o),s(t)}))}))},setAppDataOnServer({state:e}){return new Promise(((t,s)=>{const n={};n.informationAboutPassage=JSON.parse(JSON.stringify(e.userAnswers)),n.completionTimeInMilliseconds=new Date-e.startTime,Ke.Z.post("/bitrix/templates/quiz/resultjson.php",{id:bt,user:Dt,json:n},{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then((function(e){console.log(e),t(e)})).catch((function(e){console.log(e),s(e)}))}))}}}),Lt=s(3636);Lt.Z.props.components.default=()=>({OpenIndicator:{render:()=>(0,n.h)("span",{class:{"toggle-arrow":!0}})},Deselect:{render:()=>(0,n.h)("span",{class:{"deselect-btn":!0},title:""})}});(0,i.ri)(yt).component("vSelect",Lt.Z).use(kt).mount("#app")}},t={};function s(n){var i=t[n];if(void 0!==i)return i.exports;var o=t[n]={id:n,loaded:!1,exports:{}};return e[n].call(o.exports,o,o.exports,s),o.loaded=!0,o.exports}s.m=e,function(){var e=[];s.O=function(t,n,i,o){if(!n){var r=1/0;for(u=0;u<e.length;u++){n=e[u][0],i=e[u][1],o=e[u][2];for(var a=!0,l=0;l<n.length;l++)(!1&o||r>=o)&&Object.keys(s.O).every((function(e){return s.O[e](n[l])}))?n.splice(l--,1):(a=!1,o<r&&(r=o));if(a){e.splice(u--,1);var p=i();void 0!==p&&(t=p)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[n,i,o]}}(),function(){s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,{a:t}),t}}(),function(){s.d=function(e,t){for(var n in t)s.o(t,n)&&!s.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){s.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){var e={143:0};s.O.j=function(t){return 0===e[t]};var t=function(t,n){var i,o,r=n[0],a=n[1],l=n[2],p=0;if(r.some((function(t){return 0!==e[t]}))){for(i in a)s.o(a,i)&&(s.m[i]=a[i]);if(l)var u=l(s)}for(t&&t(n);p<r.length;p++)o=r[p],s.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return s.O(u)},n=self["webpackChunkquiz_tmp"]=self["webpackChunkquiz_tmp"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=s.O(void 0,[998],(function(){return s(1821)}));n=s.O(n)})();