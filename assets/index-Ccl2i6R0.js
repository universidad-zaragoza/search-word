import{j as e,r as d,R as Q}from"./react-ePaza90U.js";import{c as ve}from"./react-dom-ClCCcWrb.js";import{B as be}from"./react-router-dom-DLKOTzUC.js";import{F as X,f as xe,a as Se,b as Ne,c as Ee}from"./@fortawesome-BfRvrLNQ.js";import{u as I,a as b,P as De}from"./react-redux-Ce23xZ5m.js";import{c as H,a as je}from"./@reduxjs-CJetLCaM.js";import{u as Z,a as Ie,b as P}from"./react-router-DHtK1h3G.js";import{p as fe}from"./dompurify-BuFh49mM.js";import{W as G,s as ee}from"./@arvidbt-_UtwSn1N.js";import{c as ye,a as Ae,u as we,b as Te,g as ae,i as Oe,d as Be,s as Re}from"./@firebase-DVeb_vw8.js";import"./firebase-BMfLM1MP.js";import{F as M,B as _e}from"./react-bootstrap-DcixykKE.js";import{S as Pe}from"./react-singleton-hook-C2tOxsmn.js";import"./classnames-C9FZUsQl.js";import"./scheduler-CzFDRTuY.js";import"./@remix-run-Dql683DL.js";import"./prop-types-ZMHxiqrO.js";import"./use-sync-external-store-R5Bn9tbY.js";import"./redux-DITMfSWq.js";import"./immer-D6jAg06p.js";import"./reselect-DJRGOWkq.js";import"./redux-thunk-ClJT1hhx.js";import"./idb-BXWtuYvb.js";import"./tslib-BGVaTf34.js";import"./@restart-B8PZbm5N.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const t of n)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function s(n){const t={};return n.integrity&&(t.integrity=n.integrity),n.referrerPolicy&&(t.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?t.credentials="include":n.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(n){if(n.ep)return;n.ep=!0;const t=s(n);fetch(n.href,t)}})();const Me="/",Ce="/search-word",ke="/menu",Ue="/dialog",qe="/debug",f={START_APP_ROUTE:Me,BASE_ROUTE:Ce,MENU_ROUTE:ke,DIALOG_ROUTE:Ue,DEBUG_ROUTE:qe},Le={menuOption:""},se=H({name:"menuState",initialState:Le,reducers:{setMenuOption:(a,s)=>{a.menuOption=s.payload}}}),{setMenuOption:Fe}=se.actions,$e=se.reducer,ze=()=>{const a=Z(),s=I();return{onClickNavigateToPath:(i,n)=>{s(Fe(n)),a(i)}}},C=({id:a,classStyle:s,children:i,path:n,type:t,onClick:r})=>{const{onClickNavigateToPath:g}=ze();return e.jsx(e.Fragment,{children:t==="button"&&r?e.jsx("button",{id:a,type:"button",className:"btn btn-active-color "+s,onTouchEnd:r,children:i}):t==="button"&&!r?e.jsx("button",{id:a,type:"button",className:"btn btn-active-color "+s,onTouchEnd:()=>g(n,a),children:i}):e.jsx("button",{id:a,type:t,className:"btn btn-active-color "+s,children:i})})},te=({navBrand:a,navBtns:s})=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"navbar-wrapper",children:e.jsx("nav",{className:"navbar navbar-custom navbar-expand-sm",children:e.jsxs("div",{className:"container-fluid",children:[e.jsx("div",{className:"navbar-brand",children:e.jsx("div",{className:"navbar-brand-grid-container",children:a.name?e.jsx(e.Fragment,{children:e.jsx("div",{className:"nameGrid align-items-center",children:e.jsx("div",{className:"name",children:a.name})})}):e.jsx(e.Fragment,{children:e.jsx("div",{className:"onlyIconGrid",children:e.jsx("div",{className:"icon",children:a.icon})})})})}),e.jsx("div",{className:"collapse navbar-collapse",id:"navbarNav",children:e.jsx("div",{className:"navbar-nav ms-auto mb-2 mb-lg-0",children:s.map((i,n)=>e.jsx("div",{className:"nav-btn-item",children:e.jsx(C,{id:i.name,path:i.path,type:"button",children:e.jsx(X,{className:"nav-btn-icon",icon:i.icon})})},n))})})]})})})}),He=a=>({__html:fe.sanitize(a)}),Ge=({msg:a,icon:s})=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"footer-wrapper",children:e.jsx("div",{className:"footer-custom",children:e.jsx("div",{className:"container-fluid",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-1 icon",children:e.jsx("div",{children:s})}),e.jsx("div",{className:"col-11 text",children:e.jsx("div",{dangerouslySetInnerHTML:He(a)})})]})})})})}),Ke="/search-word/assets/avatar-not-speaking-BwFjj1a-.gif",Ve="/search-word/assets/avatar-speaking-DQHi02TP.gif",We="/search-word/assets/load-icon-4INARmNJ.gif",y={avatarNotSpeakingIcon:{imageSrc:Ke,imageAlt:"avatar normal",imageAttribution:"Avatar Not Speaking Icon created by Raquel Arcaz Arias",searchLink:""},avatarSpeakingIcon:{imageSrc:Ve,imageAlt:"avatar hablando",imageAttribution:"Avatar Speaking Icon created by Raquel Arcaz Arias",searchLink:""},loadingIcon:{imageSrc:We,imageAlt:"cargando",imageAttribution:"Avatar Speaking Icon created by Raquel Arcaz Arias",searchLink:""}};var E=(a=>(a.SEND_SPEECH="send-msg",a.START_SPEECH="start-saying-msg",a.END_SPEECH="end-saying-msg",a.NONE="none",a))(E||{}),x=(a=>(a.LOADING="loading",a.OK="ok",a.NOT_OK="not-ok",a))(x||{}),k=(a=>(a.MICROPHONE_OPENED="opened",a.MICROPHONE_CLOSED="closed",a))(k||{});const ne={data:{intentType:"",userRequest:""},voiceAPIStatus:x.LOADING,voiceMicroStatus:k.MICROPHONE_CLOSED,voiceMsgProps:{body:"",status:E.NONE},deviceId:"1",processingUserRequest:!1},ie=H({name:"voiceState",initialState:ne,reducers:{setVoiceAPIStatus:(a,s)=>{a.voiceAPIStatus=s.payload},setVoiceMicroStatus:(a,s)=>{a.voiceMicroStatus=s.payload},setVoiceMsgBody:(a,s)=>{a.voiceMsgProps.body=s.payload},setVoiceMsgStatus:(a,s)=>{a.voiceMsgProps.status=s.payload},setDeviceId:(a,s)=>{a.deviceId=s.payload},setProcessingUserRequest:(a,s)=>{a.processingUserRequest=s.payload},setUserSpeechData:(a,s)=>{a.data=s.payload},resetUserSpeechData:a=>{a.data=ne.data}}}),{setVoiceAPIStatus:U,setVoiceMicroStatus:re,setVoiceMsgBody:Ya,setVoiceMsgStatus:B,setDeviceId:Je,setProcessingUserRequest:oe,setUserSpeechData:Ye,resetUserSpeechData:ce}=ie.actions,Qe=ie.reducer,Xe=()=>{const a=b(g=>{var m;return(m=g.voiceState)==null?void 0:m.voiceAPIStatus}),s=I(),{printDebug:i,sendTextToAlexa:n}=d.useContext(R),t=async g=>{const m=r(g);await n(a,m),s(oe(!1))},r=g=>{let m="<voice name='Lucia'>";return m+=g,m+="</voice>",m};return{speechResponseToUserRequest:t}},Ze=(a,s)=>{const i=Array(a.length+1).fill(null).map(()=>Array(s.length+1).fill(0));for(let t=0;t<=a.length;t++)for(let r=0;r<=s.length;r++)t===0?i[t][r]=r:r===0?i[t][r]=t:a[t-1]===s[r-1]?i[t][r]=i[t-1][r-1]:i[t][r]=1+Math.min(i[t-1][r],i[t][r-1],i[t-1][r-1]);const n=Math.max(a.length,s.length);return 1-i[a.length][s.length]/n},ea=["El elefante es un animal muy grande","Mi nombre es Robot y me gusta ayudar","a otro perro con ese hueso","al pais que fueres, haz lo que vieres","algo es algo, peor es nada","amor con amor se paga","como traje a la medida","de lo bueno, poco","de tal palo, tal astilla","desvestir un santo para vestir otro","el leon no es tan bravo como lo pintan","el que la hace la paga","es mas a\xF1ejo que el vinagre","es mas bueno que el pan","juntos, pero no revueltos","la excepcion confirma la regla","lo quiero, para ayer","no hagas le\xF1a del arbol caido","no me picotee las uvas","para muestra, un boton","por la boca muere el pez","preguntando, se llega a roma","quedo para vestir santos","quedo mirando para el norte","que le hace el agua al pescado","que mas le hace una raya al tigre","quien te quiere te aporrea","roma no se hizo en un dia","si se rasca, es porque le pica","siembra vientos y cosecha tempestades","tiempo que se va, no vuelve mas","todo tiempo pasado, fue mejor"],q=a=>a.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^\w\s]/gi,"").replace(/\./g,"").toLowerCase(),le=()=>{const a=b(i=>i.speechDBState.speechData.docRef),{getFirebaseDb:s}=d.useContext(ue);return d.useContext(R),{createSpeechInFirebaseDB:async i=>{let n=null;try{const t=await s();if(t){const r=ye(t,"users");n=await Ae(r,i)}else throw new Error("Failed adding new user to Firebase collection. DETAILS: Could not get database instance.")}catch(t){throw new Error(`Failed adding new user to Firebase collection. DETAILS: ${t}`)}return n||null},addSpeechToFirebaseDB:async i=>{try{if(await s()&&a)await we(a,{speechs:Te(i)});else throw new Error("Failed adding user answers to initial questionnaire to Firebase collection. DETAILS: Could not get database instance.")}catch(n){throw new Error(`Failed adding user answers to initial questionnaire to Firebase collection. DETAILS: ${n}`)}}}},aa=()=>{const a=`<voice name='Lucia'><amazon:emotion name="excited" intensity="high"> 
                       D\xEDme una palabra </amazon:emotion><break strength='strong'/></voice>`,s=`<voice name='Lucia'><amazon:emotion name="excited" intensity="high"> 
                          D\xEDme un refr\xE1n </amazon:emotion><break strength='strong'/></voice>`,[i,n]=d.useState(!1),[t,r]=d.useState(!1),[g,m]=d.useState(!0),[u,h]=d.useState(),[L,A]=d.useState("Esperando consulta..."),S=b(l=>{var c;return(c=l.voiceState)==null?void 0:c.voiceAPIStatus}),j=b(l=>{var c;return(c=l.voiceState)==null?void 0:c.voiceMsgProps}),F=b(l=>{var c;return(c=l.voiceState)==null?void 0:c.processingUserRequest}),w=b(l=>{var c,p;return(p=(c=l.voiceState)==null?void 0:c.data)==null?void 0:p.intentType}),$=b(l=>{var c,p;return(p=(c=l.voiceState)==null?void 0:c.data)==null?void 0:p.userRequest}),o=b(l=>l.menuState.menuOption),N=I(),{speechResponseToUserRequest:T}=Xe(),{addSpeechToFirebaseDB:K}=le(),{printDebug:v}=d.useContext(R),V=d.useCallback(async()=>{switch(o){case"normal-words":h(new G(ee)),await T(a);break;case"phonetic-words":h(new G(ee)),await T(a);break;case"proverbs":h(new G(ea)),await T(s);break}},[S]),W=d.useCallback(()=>{v(`+++ INSIDE 2 loading() - voiceAPIStatus => ${S}`),v(`+++ INSIDE loading() - voiceMsgStatus => ${j.status}`),S===x.LOADING||F?n(!0):n(!1)},[S,j]),J=d.useCallback(()=>{j.status===E.START_SPEECH?r(!0):r(!1)},[j]),Y=d.useCallback(async()=>{v("+++ INSIDE handleVoiceAPIIntents() +++ "),v(`+++ VOICE API STATUS => ${S} `),v(`+++ INTENT TYPE => ${w} `),w==="word-intent"&&await me($),N(ce())},[w,S]),me=async l=>{let c="";m(!0),A("Consulta recibida. Buscando..."),c=await ge(l),v(`Inside handleNewWord - wordFound 1 => ${c}`),c?(A(`Recibida: ${l} - Encontrada: ${c}`),await K({userSpeech:l,algorithmAnswer:c}).then(()=>{v("Consulta agrgada correctamente")}).catch(p=>{v(`Error al agregar la consulta: ${p}`)}),await T(`La consulta que he entendido es ${l}, y el resultado que he encontrado en el diccionario es ${c}
        <break strength='strong'/> D\xEDme otra consulta.`)):(A(`Recibida: ${l} - Encontrada: sin resultados`),await K({userSpeech:l,algorithmAnswer:"sin resultados"}).then(()=>{v("Consulta agrgada correctamente")}).catch(p=>{v(`Error al agregar la consulta: ${p}`)}),await T("Lo siento, la consulta que me has dicho no existe. Por favor, vuelva a repetirla o utilice una distinta.")),m(!1)},ge=async l=>{let c=[],p="";if(u){let _=[];if(o==="proverbs")c=u.getDictionaryWords();else{const O=pe(l);c=u.startsWith(O)}c.map(O=>{const z=Ze(q(O),q(l));z>=.8&&(_.push({result:O,lvn:z}),v(`LVN DISTANCE between ${q(O)} and ${q(l)} is ${z}`))}),p=he(_)}return p},pe=l=>{const c=Math.floor(l.length/2);return l.substring(0,c)},he=l=>{if(l.length>0){const c=l.slice().sort((p,_)=>_.lvn-p.lvn);return console.log("+++ Inside getWordWithMaxLvn - listNoOrdered  => "+JSON.stringify(l)),console.log("+++ Inside getWordWithMaxLvn - listOrdered => "+JSON.stringify(c)),c[0].result}return""};return d.useEffect(()=>{V()},[V]),d.useEffect(()=>{W()},[W]),d.useEffect(()=>{J()},[J]),d.useEffect(()=>{Y()},[Y]),{searchingText:L,isLoading:i,isSpeechOn:t,isSearching:g}},sa=()=>{const{searchingText:a,isLoading:s,isSpeechOn:i,isSearching:n}=aa();return e.jsx(e.Fragment,{children:e.jsx("div",{className:"container-fluid",children:e.jsx("div",{className:"container-menu",children:e.jsxs("div",{className:"grid-container",children:[i?e.jsx("div",{className:"grid-item item-avatar",children:e.jsx("img",{src:y.avatarSpeakingIcon.imageSrc,alt:y.avatarSpeakingIcon.imageAlt,className:"d-inline-block align-center"})}):e.jsx("div",{className:"grid-item item-avatar",children:e.jsx("img",{src:y.avatarNotSpeakingIcon.imageSrc,alt:y.avatarNotSpeakingIcon.imageAlt,className:"d-inline-block align-center"})}),e.jsx("div",{className:"grid-item item-input-wrapper-menu-view",children:s?e.jsx("div",{className:"grid-item item-icon-load-alexa-loading-view",children:e.jsx("img",{src:y.loadingIcon.imageSrc,alt:y.loadingIcon.imageAlt,className:"d-inline-block align-center"})}):n?e.jsx("div",{className:"grid-item item-waiting-text-alexa-loading-view item-waiting-text-alexa-loading-view-animation",children:a}):e.jsx("div",{className:"grid-item item-waiting-text-alexa-loading-view",children:a})})]})})})})},ta=()=>{const a={navBrand:{name:"Buscar similitud"},navBtns:[{name:"back-btn",icon:xe,path:"/menu"},{name:"debug-btn",icon:Se,path:"/debug"}],disableNavButton:!1},s={icon:e.jsx(X,{icon:Ne,size:"lg"}),msg:"Ejemplo: Alexa, manzana"};return e.jsxs(e.Fragment,{children:[e.jsx(te,{navBrand:a.navBrand,navBtns:a.navBtns,disableNavButton:a.disableNavButton}),e.jsx(sa,{}),e.jsx(Ge,{msg:s.msg,icon:s.icon})]})},na=()=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"container-fluid",children:e.jsx("div",{className:"container-menu-start-app-view",children:e.jsxs("div",{className:"grid-container-start-app-view",children:[e.jsx("div",{className:"item-logo-start-app-view",children:"Buscar similitud"}),e.jsxs("div",{className:"item-button-start-app-view",children:[e.jsx(C,{id:"normal-words",path:"/dialog",classStyle:"btn-primary item-button",type:"button",children:"Palabras Normales"})," ",e.jsx(C,{id:"phonetic-words",path:"/dialog",classStyle:"btn-primary item-button",type:"button",children:"Palabras F\xF3netica"}),e.jsx(C,{id:"proverbs",path:"/dialog",classStyle:"btn-primary item-button",type:"button",children:"Refranes"})]})]})})})}),ia=({msg:a})=>{const s={navBrand:{name:"En Modo Debug"},navBtns:[{name:"exit-btn",icon:Ee,path:"/dialog"}],disableNavButton:!1};return e.jsxs(e.Fragment,{children:[e.jsx(te,{navBrand:s.navBrand,navBtns:s.navBtns,disableNavButton:s.disableNavButton}),e.jsx("div",{className:"debug-container",children:e.jsxs("div",{className:"debug-container-grid",children:[e.jsx("div",{className:"debug-container-grid-item-traza",children:e.jsx("ul",{children:a.map((i,n)=>i&&e.jsx("li",{children:i},n))})}),e.jsx("div",{className:"debug-container-grid-item-input-btns",children:e.jsx("div",{className:"debug-container-grid-item-input-field",children:e.jsxs("div",{className:"input-group mb-3",children:[e.jsx("div",{className:"input-group-prepend",children:e.jsx("span",{className:"input-group-text",id:"inputGroup-sizing-default",children:"UID"})}),e.jsx("input",{type:"number",name:"uid",placeholder:"UID del usuario que ha realizado test usabilidad",pattern:"^[0-9]+$",title:"Solo se permiten n\xFAmeros",className:"form-control","aria-label":"Default","aria-describedby":"inputGroup-sizing-default",required:!0})]})})})]})})]})},ra=()=>{const[a,s]=d.useState(null),[i,n]=d.useState([]),t=I(),r=d.useCallback(async()=>{u("Beginning Alexa.create"),window.Alexa?window.Alexa.create({version:"1.0"}).then(o=>{o.alexa?(s(o.alexa),o.alexa.skill.onMessage(A),o.alexa.speech.onStarted(S),o.alexa.speech.onStopped(j),o.alexa.voice.onMicrophoneOpened(F),o.alexa.voice.onMicrophoneClosed(w),u("Alexa is ready - newest version 5 :) Received initial data 45"),o.message.deviceId&&(u("Alexa Skill init data: "+o.message.deviceId),console.log("Alexa Skill init data: "+o.message.deviceId),t(Je(o.message.deviceId))),t(U(x.OK))):(u(`Alexa failed to initialize, code: ${o.code}`),t(U(x.NOT_OK)))}).catch(o=>{u(`Alexa not ready :(. Error: ${o}`),t(U(x.NOT_OK))}):t(U(x.NOT_OK))},[]),g=o=>{n(N=>[...N,o]),console.log(o)},m=()=>{n([])},u=o=>{g(typeof o!="string"?JSON.stringify(o,null,2):o)},h=o=>{o.statusCode==200?u("message was sent to backend successfully"):(t(B(E.END_SPEECH)),u("failed to send message to skill backend:"))},L=d.useCallback(async o=>{try{u("sending message to skill endpoint ==> "+JSON.stringify(o)),u("+++ INSIDE sendMessage - alexaClient ==> "+a),await a.skill.sendMessage(o,h)}catch(N){t(B(E.END_SPEECH)),u("Alexa error ==> "+N)}},[a]),A=o=>{let N;u("Web APP received a message from the skill endpoint"),u(o),o&&(N={intentType:o.intentType,userRequest:o.userRequest},t(oe(!0)),t(Ye(N)))},S=()=>{t(B(E.START_SPEECH))},j=()=>{t(B(E.END_SPEECH))},F=()=>{t(re(k.MICROPHONE_OPENED))},w=()=>{t(re(k.MICROPHONE_CLOSED))},$=d.useCallback(()=>{t(ce())},[]);return d.useEffect(()=>{r()},[]),{debugMessages:i,printDebug:u,sendMessage:L,resetVoiceIntent:$,resetDebugMessages:m}},oa=()=>{const a=I(),{debugMessages:s,printDebug:i,sendMessage:n,resetDebugMessages:t}=ra();return{debugMessages:s,printDebug:i,sendLogToAlexa:async(r,g)=>{r===x.OK&&await n({intentRequest:"log-text-intent",logTxt:g})},sendTextToAlexa:async(r,g,m)=>{r===x.OK&&(a(B(E.SEND_SPEECH)),await n({intentRequest:m||"text-to-speech-intent",speech:g}))},resetDebugMessages:t}},ca="AIzaSyClHLApMEpY_mkWaB-1hPRk2Cgicfjsnrc",la="searchword-38b23.firebaseapp.com",da="searchword-38b23",ua="searchword-38b23.appspot.com",ma="578864658516",ga="1:578864658516:web:0a2acaab6a2cbd65ac95c1",pa="G-B4Q9N7DFM0",D={DB_API_KEY:ca,DB_AUTH_DOMAIN:la,DB_PROJECT_ID:da,DB_STORAGE_BUCKET:ua,DB_MESSAGING_SENDER_ID:ma,DB_APP_ID:ga,DB_MEASUREMENT_ID:pa},ha=()=>{const[a,s]=d.useState(null),i=()=>{const t={apiKey:D.DB_API_KEY,authDomain:D.DB_AUTH_DOMAIN,projectId:D.DB_PROJECT_ID,storageBucket:D.DB_STORAGE_BUCKET,messagingSenderId:D.DB_MESSAGING_SENDER_ID,appId:D.DB_APP_ID,measurementId:D.DB_MEASUREMENT_ID},r=Oe(t);return r?(s(r),r):null},n=async()=>{const t=Be();try{return!await Re(t)}catch(r){throw new Error(`Anonymously sign in failed. DETAILS: ${r}.`)}};return{getFirebaseDb:async()=>{let t=null;if(a)t=ae(a);else{const r=i();r&&(await n()||(t=ae(r)))}return t}}},va={speechData:{docRef:null,userId:"",speechs:[]}},de=H({name:"speechDBState",initialState:va,reducers:{setUserDocRef:(a,s)=>{a.speechData.docRef=s.payload},setUserId:(a,s)=>{a.speechData.userId=s.payload},addSpeech:(a,s)=>{a.speechData.speechs.push(s.payload)}}}),{setUserDocRef:ba,setUserId:xa,addSpeech:Qa}=de.actions,Sa=de.reducer,Na=()=>{const[a,s]=d.useState({userId:""}),i=b(m=>m.speechDBState.speechData),n=I(),t=Z(),{createSpeechInFirebaseDB:r}=le(),{printDebug:g}=d.useContext(R);return{formData:a,handleUserIdChange:m=>{const u=m.target.value;s({...a,userId:u})},onSubmitHandler:async m=>{m.preventDefault();let u={...i};u.userId=a.userId,n(xa(a.userId)),g(`Usuario con nombre: ${a.userId}`),await r(u).then(h=>{g(`Usuario agregado con docRefId: ${h==null?void 0:h.id}`),n(ba(h)),t(f.MENU_ROUTE)}).catch(h=>{g(`Error al agregar el nuevo usuario: ${h}`)})}}},Ea=()=>{const{formData:a,handleUserIdChange:s,onSubmitHandler:i}=Na();return e.jsx(e.Fragment,{children:e.jsx("div",{className:"container-fluid",children:e.jsx("div",{className:"container-menu-start-app-view",children:e.jsxs("div",{className:"grid-container-start-app-view",children:[e.jsx("div",{className:"item-logo-start-app-view",children:"Buscar similitud"}),e.jsxs(M,{onSubmit:i,children:[e.jsxs(M.Group,{className:"mb-3",controlId:"formBasicEmail",children:[e.jsx(M.Label,{children:"Identificador Usuario"}),e.jsx(M.Control,{type:"string",placeholder:"Introduzca un identificador v\xE1lido del usuario",value:a.userId,onChange:s})]}),e.jsx(_e,{variant:"primary",type:"submit",children:"Acceder"})]})]})})})})},ue=Q.createContext({}),R=Q.createContext({});function Da(){const{getFirebaseDb:a}=ha(),{debugMessages:s,printDebug:i,sendLogToAlexa:n,sendTextToAlexa:t,resetDebugMessages:r}=oa();return e.jsx(e.Fragment,{children:e.jsx(ue.Provider,{value:{getFirebaseDb:a},children:e.jsx(R.Provider,{value:{debugMessages:s,printDebug:i,sendLogToAlexa:n,sendTextToAlexa:t,resetDebugMessages:r},children:e.jsx(be,{basename:f.BASE_ROUTE,children:e.jsxs(Ie,{children:[e.jsx(P,{path:f.START_APP_ROUTE,element:e.jsx(Ea,{})}),e.jsx(P,{path:f.MENU_ROUTE,element:e.jsx(na,{})}),e.jsx(P,{path:f.DIALOG_ROUTE,element:e.jsx(ta,{})}),e.jsx(P,{path:f.DEBUG_ROUTE,element:e.jsx(ia,{msg:s})})]})})})})})}const ja={serializableCheck:{ignoredActions:["speechDBState/setUserDocRef"],ignoredPaths:["speechDBState.speechData.docRef"]}},Ia=je({reducer:{voiceState:Qe,menuState:$e,speechDBState:Sa},middleware:a=>a(ja)});ve.createRoot(document.getElementById("root")).render(e.jsx(De,{store:Ia,children:e.jsxs(e.Fragment,{children:[e.jsx(Pe,{}),e.jsx(Da,{})]})}));