import{j as e,r as l,R as J}from"./react-ePaza90U.js";import{c as ge}from"./react-dom-ClCCcWrb.js";import{B as pe}from"./react-router-dom-DLKOTzUC.js";import{F as Y,f as he,a as ve,b as be,c as xe}from"./@fortawesome-BfRvrLNQ.js";import{u as f,a as b,P as Se}from"./react-redux-Ce23xZ5m.js";import{c as $,a as Ne}from"./@reduxjs-CJetLCaM.js";import{u as Q,a as je,b as M}from"./react-router-DHtK1h3G.js";import{p as De}from"./dompurify-BuFh49mM.js";import{W as z}from"./@arvidbt-BEE_Uiwc.js";import{c as Ee,a as Ie,u as fe,b as ye,g as X,i as Ae,d as we,s as Te}from"./@firebase-DVeb_vw8.js";import"./firebase-BMfLM1MP.js";import{F as P,B as Oe}from"./react-bootstrap-DcixykKE.js";import{S as Be}from"./react-singleton-hook-C2tOxsmn.js";import"./classnames-C9FZUsQl.js";import"./scheduler-CzFDRTuY.js";import"./@remix-run-Dql683DL.js";import"./prop-types-ZMHxiqrO.js";import"./use-sync-external-store-R5Bn9tbY.js";import"./redux-DITMfSWq.js";import"./immer-D6jAg06p.js";import"./reselect-DJRGOWkq.js";import"./redux-thunk-ClJT1hhx.js";import"./idb-BXWtuYvb.js";import"./tslib-BGVaTf34.js";import"./@restart-B8PZbm5N.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const t of n)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function s(n){const t={};return n.integrity&&(t.integrity=n.integrity),n.referrerPolicy&&(t.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?t.credentials="include":n.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(n){if(n.ep)return;n.ep=!0;const t=s(n);fetch(n.href,t)}})();const _e="/",Re="/search-word",Ce="/menu",Me="/dialog",Pe="/debug",y={START_APP_ROUTE:_e,BASE_ROUTE:Re,MENU_ROUTE:Ce,DIALOG_ROUTE:Me,DEBUG_ROUTE:Pe},ke={menuOption:""},Z=$({name:"menuState",initialState:ke,reducers:{setMenuOption:(a,s)=>{a.menuOption=s.payload}}}),{setMenuOption:Ue}=Z.actions,qe=Z.reducer,Le=()=>{const a=Q(),s=f();return{onClickNavigateToPath:(i,n)=>{s(Ue(n)),a(i)}}},k=({id:a,classStyle:s,children:i,path:n,type:t,onClick:r})=>{const{onClickNavigateToPath:g}=Le();return e.jsx(e.Fragment,{children:t==="button"&&r?e.jsx("button",{id:a,type:"button",className:"btn btn-active-color "+s,onTouchEnd:r,children:i}):t==="button"&&!r?e.jsx("button",{id:a,type:"button",className:"btn btn-active-color "+s,onTouchEnd:()=>g(n,a),children:i}):e.jsx("button",{id:a,type:t,className:"btn btn-active-color "+s,children:i})})},ee=({navBrand:a,navBtns:s})=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"navbar-wrapper",children:e.jsx("nav",{className:"navbar navbar-custom navbar-expand-sm",children:e.jsxs("div",{className:"container-fluid",children:[e.jsx("div",{className:"navbar-brand",children:e.jsx("div",{className:"navbar-brand-grid-container",children:a.name?e.jsx(e.Fragment,{children:e.jsx("div",{className:"nameGrid align-items-center",children:e.jsx("div",{className:"name",children:a.name})})}):e.jsx(e.Fragment,{children:e.jsx("div",{className:"onlyIconGrid",children:e.jsx("div",{className:"icon",children:a.icon})})})})}),e.jsx("div",{className:"collapse navbar-collapse",id:"navbarNav",children:e.jsx("div",{className:"navbar-nav ms-auto mb-2 mb-lg-0",children:s.map((i,n)=>e.jsx("div",{className:"nav-btn-item",children:e.jsx(k,{id:i.name,path:i.path,type:"button",children:e.jsx(Y,{className:"nav-btn-icon",icon:i.icon})})},n))})})]})})})}),Fe=a=>({__html:De.sanitize(a)}),$e=({msg:a,icon:s})=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"footer-wrapper",children:e.jsx("div",{className:"footer-custom",children:e.jsx("div",{className:"container-fluid",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-1 icon",children:e.jsx("div",{children:s})}),e.jsx("div",{className:"col-11 text",children:e.jsx("div",{dangerouslySetInnerHTML:Fe(a)})})]})})})})}),ze="/search-word/assets/avatar-not-speaking-BwFjj1a-.gif",He="/search-word/assets/avatar-speaking-DQHi02TP.gif",Ge="/search-word/assets/load-icon-4INARmNJ.gif",A={avatarNotSpeakingIcon:{imageSrc:ze,imageAlt:"avatar normal",imageAttribution:"Avatar Not Speaking Icon created by Raquel Arcaz Arias",searchLink:""},avatarSpeakingIcon:{imageSrc:He,imageAlt:"avatar hablando",imageAttribution:"Avatar Speaking Icon created by Raquel Arcaz Arias",searchLink:""},loadingIcon:{imageSrc:Ge,imageAlt:"cargando",imageAttribution:"Avatar Speaking Icon created by Raquel Arcaz Arias",searchLink:""}};var j=(a=>(a.SEND_SPEECH="send-msg",a.START_SPEECH="start-saying-msg",a.END_SPEECH="end-saying-msg",a.NONE="none",a))(j||{}),x=(a=>(a.LOADING="loading",a.OK="ok",a.NOT_OK="not-ok",a))(x||{}),U=(a=>(a.MICROPHONE_OPENED="opened",a.MICROPHONE_CLOSED="closed",a))(U||{});const ae={data:{intentType:"",userRequest:""},voiceAPIStatus:x.LOADING,voiceMicroStatus:U.MICROPHONE_CLOSED,voiceMsgProps:{body:"",status:j.NONE},deviceId:"1",processingUserRequest:!1},se=$({name:"voiceState",initialState:ae,reducers:{setVoiceAPIStatus:(a,s)=>{a.voiceAPIStatus=s.payload},setVoiceMicroStatus:(a,s)=>{a.voiceMicroStatus=s.payload},setVoiceMsgBody:(a,s)=>{a.voiceMsgProps.body=s.payload},setVoiceMsgStatus:(a,s)=>{a.voiceMsgProps.status=s.payload},setDeviceId:(a,s)=>{a.deviceId=s.payload},setProcessingUserRequest:(a,s)=>{a.processingUserRequest=s.payload},setUserSpeechData:(a,s)=>{a.data=s.payload},resetUserSpeechData:a=>{a.data=ae.data}}}),{setVoiceAPIStatus:q,setVoiceMicroStatus:te,setVoiceMsgBody:Ja,setVoiceMsgStatus:B,setDeviceId:Ke,setProcessingUserRequest:ne,setUserSpeechData:Ve,resetUserSpeechData:ie}=se.actions,We=se.reducer,Je=()=>{const a=b(g=>{var u;return(u=g.voiceState)==null?void 0:u.voiceAPIStatus}),s=f(),{printDebug:i,sendTextToAlexa:n}=l.useContext(_),t=async g=>{const u=r(g);await n(a,u),s(ne(!1))},r=g=>{let u="<voice name='Lucia'>";return u+=g,u+="</voice>",u};return{speechResponseToUserRequest:t}},Ye=(a,s)=>{const i=Array(a.length+1).fill(null).map(()=>Array(s.length+1).fill(0));for(let t=0;t<=a.length;t++)for(let r=0;r<=s.length;r++)t===0?i[t][r]=r:r===0?i[t][r]=t:a[t-1]===s[r-1]?i[t][r]=i[t-1][r-1]:i[t][r]=1+Math.min(i[t-1][r],i[t][r-1],i[t-1][r-1]);const n=Math.max(a.length,s.length);return 1-i[a.length][s.length]/n},Qe=["es m\xE1s a\xF1ejo que el vinagre","es m\xE1s bueno que el pan","tiempo que se va, no vuelve m\xE1s","todo tiempo pasado, fue mejor","lo quiero, para ayer","siembra vientos y cosecha tempestades","al pa\xEDs que fueres, haz lo que vieres","quien te quiere te aporrea","si se rasca, es porque le pica","qued\xF3 para vestir santos","quedo mirando para el norte","desvestir un santo para vestir otro","que le hace el agua al pescado","que m\xE1s le hace una raya al tigre","de lo bueno, poco","por la boca muere el pez","preguntando, se llega a roma","para muestra, un boton","la excepcion confirma la regla","el leon no es tan bravo como lo pintan","no hagas le\xF1a del arbol caido","roma no se hizo en un d\xEDa","no me picotee las uvas","algo es algo, peor es nada","a otro perro con ese hueso","como traje a la medida","amor con amor se paga","el que la hace la paga","de tal palo, tal astilla","juntos, pero no revueltos"],re=a=>a.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^\w\s]/gi,"").replace(/\./g,"").toLowerCase(),Xe=["c\xE1lido","qu\xEDmica","coraz\xF3n","cultura","garaje","guiso","guion","jazm\xEDn","jersey","jirafa","jornada","jugador","acuerdo","conquista","casa","quemar","coco","cuello","gato","guerrero","ping\xFCino","golpear","guitarra","jard\xEDn","juego","fijaci\xF3n","joya","juguete","carro","agua"],Ze=["casa","perro","gato","l\xE1piz","sol","mesa","silla","flor","agua","pan","\xE1rbol","libro","puerta","calle","hola","amigo","luna","ni\xF1o","mam\xE1","pap\xE1","lluvia","azul","verde","r\xEDo","mar","nube","tren","carro","juego","huevo"],oe=()=>{const a=b(i=>i.speechDBState.speechData.docRef),{getFirebaseDb:s}=l.useContext(le);return l.useContext(_),{createSpeechInFirebaseDB:async i=>{let n=null;try{const t=await s();if(t){const r=Ee(t,"users");n=await Ie(r,i)}else throw new Error("Failed adding new user to Firebase collection. DETAILS: Could not get database instance.")}catch(t){throw new Error(`Failed adding new user to Firebase collection. DETAILS: ${t}`)}return n||null},addSpeechToFirebaseDB:async i=>{try{if(await s()&&a)await fe(a,{speechs:ye(i)});else throw new Error("Failed adding user answers to initial questionnaire to Firebase collection. DETAILS: Could not get database instance.")}catch(n){throw new Error(`Failed adding user answers to initial questionnaire to Firebase collection. DETAILS: ${n}`)}}}},ea=()=>{const a=`<voice name='Lucia'><amazon:emotion name="excited" intensity="high"> 
                       D\xEDme una palabra </amazon:emotion><break strength='strong'/></voice>`,s=`<voice name='Lucia'><amazon:emotion name="excited" intensity="high"> 
                          D\xEDme un refr\xE1n </amazon:emotion><break strength='strong'/></voice>`,[i,n]=l.useState(!1),[t,r]=l.useState(!1),[g,u]=l.useState(!0),[m,h]=l.useState(),[L,w]=l.useState("Esperando consulta..."),S=b(d=>{var c;return(c=d.voiceState)==null?void 0:c.voiceAPIStatus}),E=b(d=>{var c;return(c=d.voiceState)==null?void 0:c.voiceMsgProps}),F=b(d=>{var c;return(c=d.voiceState)==null?void 0:c.processingUserRequest}),T=b(d=>{var c,p;return(p=(c=d.voiceState)==null?void 0:c.data)==null?void 0:p.intentType}),R=b(d=>{var c,p;return(p=(c=d.voiceState)==null?void 0:c.data)==null?void 0:p.userRequest}),o=b(d=>d.menuState.menuOption),N=f(),{speechResponseToUserRequest:O}=Je(),{addSpeechToFirebaseDB:H}=oe(),{printDebug:v}=l.useContext(_),G=l.useCallback(()=>{switch(o){case"normal-words":h(new z(Ze)),O(a);break;case"phonetic-words":h(new z(Xe)),O(a);break;case"proverbs":h(new z(Qe)),O(s);break}},[S]),K=l.useCallback(()=>{v(`+++ INSIDE loading() - voiceAPIStatus => ${S}`),v(`+++ INSIDE loading() - voiceMsgStatus => ${E.status}`),S===x.LOADING||F?n(!0):n(!1)},[S,E]),V=l.useCallback(()=>{E.status===j.START_SPEECH?r(!0):r(!1)},[E]),W=l.useCallback(async()=>{v("+++ INSIDE handleVoiceAPIIntents() +++ "),v(`+++ VOICE API STATUS => ${S} `),v(`+++ INTENT TYPE => ${T} `),T==="word-intent"&&await de(R),N(ie())},[T,S]),de=async d=>{let c="";u(!0),w("Consulta recibida. Buscando..."),c=await ue(R),v(`Inside handleNewWord - wordFound 1 => ${c}`),c?(w(`Recibida: ${d} - Encontrada: ${c}`),await H({userSpeech:d,algorithmAnswer:c}).then(()=>{v("Consulta agrgada correctamente")}).catch(p=>{v(`Error al agregar la consulta: ${p}`)}),O(`La consulta que he entendido es ${d}, y el resultado que he encontrado en el diccionario es ${c}
        <break strength='strong'/> D\xEDme otra consulta.`)):(w(`Recibida: ${d} - Encontrada: sin resultados`),await H({userSpeech:d,algorithmAnswer:"sin resultados"}).then(()=>{v("Consulta agrgada correctamente")}).catch(p=>{v(`Error al agregar la consulta: ${p}`)}),O("Lo siento, la consulta que me has dicho no existe. Por favor, vuelva a repetirla o utilice una distinta.")),u(!1)},ue=async d=>{let c="";if(m){let p=[];m.getDictionaryWords().map(I=>{const C=Ye(re(I),re(d));C>=.8&&(p.push({result:I,lvn:C}),console.log(`LVN DISTANCE between ${I} and ${d} is ${C}`),v(`LVN DISTANCE between ${I} and ${d} is ${C}`))}),c=me(p)}return c},me=d=>{if(d.length>0){const c=d.slice().sort((p,I)=>I.lvn-p.lvn);return console.log("+++ Inside getWordWithMaxLvn - listNoOrdered  => "+JSON.stringify(d)),console.log("+++ Inside getWordWithMaxLvn - listOrdered => "+JSON.stringify(c)),c[0].result}return""};return l.useEffect(()=>{G()},[G]),l.useEffect(()=>{K()},[K]),l.useEffect(()=>{V()},[V]),l.useEffect(()=>{W()},[W]),{searchingText:L,isLoading:i,isSpeechOn:t,isSearching:g}},aa=()=>{const{searchingText:a,isLoading:s,isSpeechOn:i,isSearching:n}=ea();return e.jsx(e.Fragment,{children:e.jsx("div",{className:"container-fluid",children:e.jsx("div",{className:"container-menu",children:e.jsxs("div",{className:"grid-container",children:[i?e.jsx("div",{className:"grid-item item-avatar",children:e.jsx("img",{src:A.avatarSpeakingIcon.imageSrc,alt:A.avatarSpeakingIcon.imageAlt,className:"d-inline-block align-center"})}):e.jsx("div",{className:"grid-item item-avatar",children:e.jsx("img",{src:A.avatarNotSpeakingIcon.imageSrc,alt:A.avatarNotSpeakingIcon.imageAlt,className:"d-inline-block align-center"})}),e.jsx("div",{className:"grid-item item-input-wrapper-menu-view",children:s?e.jsx("div",{className:"grid-item item-icon-load-alexa-loading-view",children:e.jsx("img",{src:A.loadingIcon.imageSrc,alt:A.loadingIcon.imageAlt,className:"d-inline-block align-center"})}):n?e.jsx("div",{className:"grid-item item-waiting-text-alexa-loading-view item-waiting-text-alexa-loading-view-animation",children:a}):e.jsx("div",{className:"grid-item item-waiting-text-alexa-loading-view",children:a})})]})})})})},sa=()=>{const a={navBrand:{name:"Buscar similitud"},navBtns:[{name:"back-btn",icon:he,path:"/"},{name:"debug-btn",icon:ve,path:"/debug"}],disableNavButton:!1},s={icon:e.jsx(Y,{icon:be,size:"lg"}),msg:"Ejemplo: Alexa, manzana"};return e.jsxs(e.Fragment,{children:[e.jsx(ee,{navBrand:a.navBrand,navBtns:a.navBtns,disableNavButton:a.disableNavButton}),e.jsx(aa,{}),e.jsx($e,{msg:s.msg,icon:s.icon})]})},ta=()=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"container-fluid",children:e.jsx("div",{className:"container-menu-start-app-view",children:e.jsxs("div",{className:"grid-container-start-app-view",children:[e.jsx("div",{className:"item-logo-start-app-view",children:"Buscar similitud"}),e.jsxs("div",{className:"item-button-start-app-view",children:[e.jsx(k,{id:"normal-words",path:"/dialog",classStyle:"btn-primary item-button",type:"button",children:"Palabras Normales"})," ",e.jsx(k,{id:"phonetic-words",path:"/dialog",classStyle:"btn-primary item-button",type:"button",children:"Palabras F\xF3netica"}),e.jsx(k,{id:"proverbs",path:"/dialog",classStyle:"btn-primary item-button",type:"button",children:"Refranes"})]})]})})})}),na=({msg:a})=>{const s={navBrand:{name:"En Modo Debug"},navBtns:[{name:"exit-btn",icon:xe,path:"/dialog"}],disableNavButton:!1};return e.jsxs(e.Fragment,{children:[e.jsx(ee,{navBrand:s.navBrand,navBtns:s.navBtns,disableNavButton:s.disableNavButton}),e.jsx("div",{className:"debug-container",children:e.jsxs("div",{className:"debug-container-grid",children:[e.jsx("div",{className:"debug-container-grid-item-traza",children:e.jsx("ul",{children:a.map((i,n)=>i&&e.jsx("li",{children:i},n))})}),e.jsx("div",{className:"debug-container-grid-item-input-btns",children:e.jsx("div",{className:"debug-container-grid-item-input-field",children:e.jsxs("div",{className:"input-group mb-3",children:[e.jsx("div",{className:"input-group-prepend",children:e.jsx("span",{className:"input-group-text",id:"inputGroup-sizing-default",children:"UID"})}),e.jsx("input",{type:"number",name:"uid",placeholder:"UID del usuario que ha realizado test usabilidad",pattern:"^[0-9]+$",title:"Solo se permiten n\xFAmeros",className:"form-control","aria-label":"Default","aria-describedby":"inputGroup-sizing-default",required:!0})]})})})]})})]})},ia=()=>{const[a,s]=l.useState(null),[i,n]=l.useState([]),t=f(),r=l.useCallback(async()=>{m("Beginning Alexa.create"),window.Alexa?window.Alexa.create({version:"1.0"}).then(o=>{o.alexa?(s(o.alexa),o.alexa.skill.onMessage(w),o.alexa.speech.onStarted(S),o.alexa.speech.onStopped(E),o.alexa.voice.onMicrophoneOpened(F),o.alexa.voice.onMicrophoneClosed(T),m("Alexa is ready - newest version 5 :) Received initial data 45"),o.message.deviceId&&(m("Alexa Skill init data: "+o.message.deviceId),console.log("Alexa Skill init data: "+o.message.deviceId),t(Ke(o.message.deviceId))),t(q(x.OK))):(m(`Alexa failed to initialize, code: ${o.code}`),t(q(x.NOT_OK)))}).catch(o=>{m(`Alexa not ready :(. Error: ${o}`),t(q(x.NOT_OK))}):t(q(x.NOT_OK))},[]),g=o=>{n(N=>[...N,o]),console.log(o)},u=()=>{n([])},m=o=>{g(typeof o!="string"?JSON.stringify(o,null,2):o)},h=o=>{o.statusCode==200?m("message was sent to backend successfully"):(t(B(j.END_SPEECH)),m("failed to send message to skill backend:"))},L=l.useCallback(async o=>{try{m("sending message to skill endpoint ==> "+JSON.stringify(o)),m("+++ INSIDE sendMessage - alexaClient ==> "+a),await a.skill.sendMessage(o,h)}catch(N){t(B(j.END_SPEECH)),m("Alexa error ==> "+N)}},[a]),w=o=>{let N;m("Web APP received a message from the skill endpoint"),m(o),o&&(N={intentType:o.intentType,userRequest:o.userRequest},t(ne(!0)),t(Ve(N)))},S=()=>{t(B(j.START_SPEECH))},E=()=>{t(B(j.END_SPEECH))},F=()=>{t(te(U.MICROPHONE_OPENED))},T=()=>{t(te(U.MICROPHONE_CLOSED))},R=l.useCallback(()=>{t(ie())},[]);return l.useEffect(()=>{r()},[]),{debugMessages:i,printDebug:m,sendMessage:L,resetVoiceIntent:R,resetDebugMessages:u}},ra=()=>{const a=f(),{debugMessages:s,printDebug:i,sendMessage:n,resetDebugMessages:t}=ia();return{debugMessages:s,printDebug:i,sendLogToAlexa:async(r,g)=>{r===x.OK&&await n({intentRequest:"log-text-intent",logTxt:g})},sendTextToAlexa:async(r,g,u)=>{r===x.OK&&(a(B(j.SEND_SPEECH)),await n({intentRequest:u||"text-to-speech-intent",speech:g}))},resetDebugMessages:t}},oa="AIzaSyClHLApMEpY_mkWaB-1hPRk2Cgicfjsnrc",ca="searchword-38b23.firebaseapp.com",la="searchword-38b23",da="searchword-38b23.appspot.com",ua="578864658516",ma="1:578864658516:web:0a2acaab6a2cbd65ac95c1",ga="G-B4Q9N7DFM0",D={DB_API_KEY:oa,DB_AUTH_DOMAIN:ca,DB_PROJECT_ID:la,DB_STORAGE_BUCKET:da,DB_MESSAGING_SENDER_ID:ua,DB_APP_ID:ma,DB_MEASUREMENT_ID:ga},pa=()=>{const[a,s]=l.useState(null),i=()=>{const t={apiKey:D.DB_API_KEY,authDomain:D.DB_AUTH_DOMAIN,projectId:D.DB_PROJECT_ID,storageBucket:D.DB_STORAGE_BUCKET,messagingSenderId:D.DB_MESSAGING_SENDER_ID,appId:D.DB_APP_ID,measurementId:D.DB_MEASUREMENT_ID},r=Ae(t);return r?(s(r),r):null},n=async()=>{const t=we();try{return!await Te(t)}catch(r){throw new Error(`Anonymously sign in failed. DETAILS: ${r}.`)}};return{getFirebaseDb:async()=>{let t=null;if(a)t=X(a);else{const r=i();r&&(await n()||(t=X(r)))}return t}}},ha={speechData:{docRef:null,userId:"",speechs:[]}},ce=$({name:"speechDBState",initialState:ha,reducers:{setUserDocRef:(a,s)=>{a.speechData.docRef=s.payload},setUserId:(a,s)=>{a.speechData.userId=s.payload},addSpeech:(a,s)=>{a.speechData.speechs.push(s.payload)}}}),{setUserDocRef:va,setUserId:ba,addSpeech:Ya}=ce.actions,xa=ce.reducer,Sa=()=>{const[a,s]=l.useState({userId:""}),i=b(u=>u.speechDBState.speechData),n=f(),t=Q(),{createSpeechInFirebaseDB:r}=oe(),{printDebug:g}=l.useContext(_);return{formData:a,handleUserIdChange:u=>{const m=u.target.value;s({...a,userId:m})},onSubmitHandler:async u=>{u.preventDefault();let m={...i};m.userId=a.userId,n(ba(a.userId)),g(`Usuario con nombre: ${a.userId}`),await r(m).then(h=>{g(`Usuario agregado con docRefId: ${h==null?void 0:h.id}`),n(va(h)),t(y.MENU_ROUTE)}).catch(h=>{g(`Error al agregar el nuevo usuario: ${h}`)})}}},Na=()=>{const{formData:a,handleUserIdChange:s,onSubmitHandler:i}=Sa();return e.jsx(e.Fragment,{children:e.jsx("div",{className:"container-fluid",children:e.jsx("div",{className:"container-menu-start-app-view",children:e.jsxs("div",{className:"grid-container-start-app-view",children:[e.jsx("div",{className:"item-logo-start-app-view",children:"Buscar similitud"}),e.jsxs(P,{onSubmit:i,children:[e.jsxs(P.Group,{className:"mb-3",controlId:"formBasicEmail",children:[e.jsx(P.Label,{children:"Identificador Usuario"}),e.jsx(P.Control,{type:"string",placeholder:"Introduzca un identificador v\xE1lido del usuario",value:a.userId,onChange:s})]}),e.jsx(Oe,{variant:"primary",type:"submit",children:"Acceder"})]})]})})})})},le=J.createContext({}),_=J.createContext({});function ja(){const{getFirebaseDb:a}=pa(),{debugMessages:s,printDebug:i,sendLogToAlexa:n,sendTextToAlexa:t,resetDebugMessages:r}=ra();return e.jsx(e.Fragment,{children:e.jsx(le.Provider,{value:{getFirebaseDb:a},children:e.jsx(_.Provider,{value:{debugMessages:s,printDebug:i,sendLogToAlexa:n,sendTextToAlexa:t,resetDebugMessages:r},children:e.jsx(pe,{basename:y.BASE_ROUTE,children:e.jsxs(je,{children:[e.jsx(M,{path:y.START_APP_ROUTE,element:e.jsx(Na,{})}),e.jsx(M,{path:y.MENU_ROUTE,element:e.jsx(ta,{})}),e.jsx(M,{path:y.DIALOG_ROUTE,element:e.jsx(sa,{})}),e.jsx(M,{path:y.DEBUG_ROUTE,element:e.jsx(na,{msg:s})})]})})})})})}const Da={serializableCheck:{ignoredActions:["speechDBState/setUserDocRef"],ignoredPaths:["speechDBState.speechData.docRef"]}},Ea=Ne({reducer:{voiceState:We,menuState:qe,speechDBState:xa},middleware:a=>a(Da)});ge.createRoot(document.getElementById("root")).render(e.jsx(Se,{store:Ea,children:e.jsxs(e.Fragment,{children:[e.jsx(Be,{}),e.jsx(ja,{})]})}));