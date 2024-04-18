import{j as e,r as E,R as ie}from"./react-BsEMT7Jt.js";import{c as re}from"./react-dom-BeE_72Gm.js";import{B as oe}from"./react-router-dom-H0glpzZ-.js";import{F as q,f as ce,a as le,b as Ee}from"./@fortawesome-C7ZrGE5f.js";import{u as x,a as L,P as Ae}from"./react-redux-pOGY8bTx.js";import{c as z,a as de}from"./@reduxjs-CJetLCaM.js";import{u as Oe,a as Ne,b as k}from"./react-router-B-ZdAFQc.js";import{p as Se}from"./dompurify-BuFh49mM.js";import{W as w,s as me}from"./@arvidbt-_UtwSn1N.js";import{S as ue}from"./react-singleton-hook-BPMA_dso.js";import"./prop-types-BiVUseAU.js";import"./scheduler-CzFDRTuY.js";import"./@remix-run-Dql683DL.js";import"./use-sync-external-store-BhvSfXh4.js";import"./redux-DITMfSWq.js";import"./immer-D6jAg06p.js";import"./reselect-DJRGOWkq.js";import"./redux-thunk-ClJT1hhx.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(n){if(n.ep)return;n.ep=!0;const s=t(n);fetch(n.href,s)}})();const ge="/",Re="/search-word",Le="/dialog",pe="/debug",M={START_APP_ROUTE:ge,BASE_ROUTE:Re,DIALOG_ROUTE:Le,DEBUG_ROUTE:pe},Ie={menuOption:""},Y=z({name:"menuState",initialState:Ie,reducers:{setMenuOption:(a,t)=>{a.menuOption=t.payload}}}),{setMenuOption:ve}=Y.actions,Te=Y.reducer,he=()=>{const a=Oe(),t=x();return{onClickNavigateToPath:(i,n)=>{t(ve(n)),a(i)}}},j=({id:a,classStyle:t,children:i,path:n,type:s,onClick:o})=>{const{onClickNavigateToPath:A}=he();return e.jsx(e.Fragment,{children:s==="button"&&o?e.jsx("button",{id:a,type:"button",className:"btn btn-active-color "+t,onTouchEnd:o,children:i}):s==="button"&&!o?e.jsx("button",{id:a,type:"button",className:"btn btn-active-color "+t,onTouchEnd:()=>A(n,a),children:i}):e.jsx("button",{id:a,type:s,className:"btn btn-active-color "+t,children:i})})},$=({navBrand:a,navBtns:t})=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"navbar-wrapper",children:e.jsx("nav",{className:"navbar navbar-custom navbar-expand-sm",children:e.jsxs("div",{className:"container-fluid",children:[e.jsx("div",{className:"navbar-brand",children:e.jsx("div",{className:"navbar-brand-grid-container",children:a.name?e.jsx(e.Fragment,{children:e.jsx("div",{className:"nameGrid align-items-center",children:e.jsx("div",{className:"name",children:a.name})})}):e.jsx(e.Fragment,{children:e.jsx("div",{className:"onlyIconGrid",children:e.jsx("div",{className:"icon",children:a.icon})})})})}),e.jsx("div",{className:"collapse navbar-collapse",id:"navbarNav",children:e.jsx("div",{className:"navbar-nav ms-auto mb-2 mb-lg-0",children:t.map((i,n)=>e.jsx("div",{className:"nav-btn-item",children:e.jsx(j,{id:i.name,path:i.path,type:"button",children:e.jsx(q,{className:"nav-btn-icon",icon:i.icon})})},n))})})]})})})}),De=a=>({__html:Se.sanitize(a)}),Ce=({msg:a,icon:t})=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"footer-wrapper",children:e.jsx("div",{className:"footer-custom",children:e.jsx("div",{className:"container-fluid",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-1 icon",children:e.jsx("div",{children:t})}),e.jsx("div",{className:"col-11 text",children:e.jsx("div",{dangerouslySetInnerHTML:De(a)})})]})})})})}),xe="/search-word/assets/avatar-not-speaking-BwFjj1a-.gif",Pe="/search-word/assets/avatar-speaking-DQHi02TP.gif",be="/search-word/assets/load-icon-4INARmNJ.gif",v={avatarNotSpeakingIcon:{imageSrc:xe,imageAlt:"avatar normal",imageAttribution:"Avatar Not Speaking Icon created by Raquel Arcaz Arias",searchLink:""},avatarSpeakingIcon:{imageSrc:Pe,imageAlt:"avatar hablando",imageAttribution:"Avatar Speaking Icon created by Raquel Arcaz Arias",searchLink:""},loadingIcon:{imageSrc:be,imageAlt:"cargando",imageAttribution:"Avatar Speaking Icon created by Raquel Arcaz Arias",searchLink:""}};var g=(a=>(a.SEND_SPEECH="send-msg",a.START_SPEECH="start-saying-msg",a.END_SPEECH="end-saying-msg",a.NONE="none",a))(g||{}),S=(a=>(a.LOADING="loading",a.OK="ok",a.NOT_OK="not-ok",a))(S||{}),y=(a=>(a.MICROPHONE_OPENED="opened",a.MICROPHONE_CLOSED="closed",a))(y||{});const J={data:{intentType:"",userRequest:""},voiceAPIStatus:S.LOADING,voiceMicroStatus:y.MICROPHONE_CLOSED,voiceMsgProps:{body:"",status:g.NONE},deviceId:"1",processingUserRequest:!1},K=z({name:"voiceState",initialState:J,reducers:{setVoiceAPIStatus:(a,t)=>{a.voiceAPIStatus=t.payload},setVoiceMicroStatus:(a,t)=>{a.voiceMicroStatus=t.payload},setVoiceMsgBody:(a,t)=>{a.voiceMsgProps.body=t.payload},setVoiceMsgStatus:(a,t)=>{a.voiceMsgProps.status=t.payload},setDeviceId:(a,t)=>{a.deviceId=t.payload},setProcessingUserRequest:(a,t)=>{a.processingUserRequest=t.payload},setUserSpeechData:(a,t)=>{a.data=t.payload},resetUserSpeechData:a=>{a.data=J.data}}}),{setVoiceAPIStatus:f,setVoiceMicroStatus:W,setVoiceMsgBody:Aa,setVoiceMsgStatus:P,setDeviceId:Ue,setProcessingUserRequest:Z,setUserSpeechData:Me,resetUserSpeechData:X}=K.actions,je=K.reducer,ye=()=>{const a=L(A=>{var O;return(O=A.voiceState)==null?void 0:O.voiceAPIStatus}),t=x(),{printDebug:i,sendTextToAlexa:n}=E.useContext(G),s=async A=>{const O=o(A);await n(a,O),t(Z(!1))},o=A=>{let O="<voice name='Lucia'>";return O+=A,O+="</voice>",O};return{speechResponseToUserRequest:s}},fe=(a,t)=>{const i=Array(a.length+1).fill(null).map(()=>Array(t.length+1).fill(0));for(let s=0;s<=a.length;s++)for(let o=0;o<=t.length;o++)s===0?i[s][o]=o:o===0?i[s][o]=s:a[s-1]===t[o-1]?i[s][o]=i[s-1][o-1]:i[s][o]=1+Math.min(i[s-1][o],i[s][o-1],i[s-1][o-1]);const n=Math.max(a.length,t.length);return 1-i[a.length][t.length]/n},Be=["ES M\xC1S A\xD1EJO QUE EL VINAGRE","ES M\xC1S BUENO QUE EL PAN","TIEMPO QUE SE VA, NO VUELVE M\xC1S","TODO TIEMPO PASADO, FUE MEJOR","LO QUIERO, PARA AYER","SIEMBRA VIENTOS Y COSECHA TEMPESTADES","AL PA\xCDS QUE FUERES, HAZ LO QUE VIERES","SI LA MONTA\xD1A NO VIENE A MAHOMA, MAHOMA VA A LA MONTA\xD1A","QUIEN TE QUIERE TE APORREA","SI SE RASCA, ES PORQUE LE PICA","QUED\xD3 PARA VESTIR SANTOS","QUEDO MIRANDO PARA EL NORTE","DESVESTIR UN SANTO PARA VESTIR OTRO","QUE LE HACE EL AGUA AL PESCADO","QUE M\xC1S LE HACE UNA RAYA AL TIGRE","DE LO BUENO, POCO","POR LA BOCA MUERE EL PEZ","PREGUNTANDO, SE LLEGA A ROMA","PALOS PORQUE BOGAS Y PALOS PORQUE NO BOGAS","PARA MUESTRA, UN BOTON","LA EXCEPCION CONFIRMA LA REGLA","EL LEON NO ES TAN BRAVO COMO LO PINTAN","NO HAY MAL QUE DURE CIEN A\xD1OS, NI CUERPO QUE LO RESISTA","NO HAGAS LE\xD1A DEL ARBOL CAIDO","EN EL PAIS DE LOS CIEGOS, EL TUERTO ES REY","ROMA NO SE HIZO EN UN D\xCDA","NO HAY PEOR SORDO, QUE EL QUE NO QUIERE OIR","NO HAY PEOR CIEGO, QUE EL QUE NO QUIERE VER","A BUEN ENTENDEDOR, POCAS PALABRAS","A FALTA DE PAN, BUENAS SON LAS TORTAS","NO ME PICOTEE LAS UVAS","ALGO ES ALGO, PEOR ES NADA","A OTRO PERRO CON ESE HUESO","COMO TRAJE A LA MEDIDA","CUANDO UN BURRO REBUZNA, LOS DEMAS SE CALLAN","DONDE MANDA CAPITAN, NO MANDA MARINERO","EN BOCA CERRADA NO ENTRAN MOSCAS","CUANDO EL RIO SUENA, ES PORQUE PIEDRAS TRAE","CUANDO MENOS SE PIENSA, SALTA LA LIEBRE","AL QUE DA Y QUITA, LE SALE UNA CORCOBITA","EL QUE TERMINA PRIMERO, LE AYUDA A SU COMPA\xD1ERO","EL PEZ M\xC1S GRANDE, SE COME AL M\xC1S CHICO","LA NECESIDAD TIENE CARA DE HEREJE","LAS COSAS CLARAS Y EL CHOCOLATE ESPESO","AMOR CON AMOR SE PAGA","EL QUE LA HACE LA PAGA","DE TAL PALO, TAL ASTILLA","JUNTOS, PERO NO REVUELTOS","LE DAN LA MANO Y SE TOMA EL PIE","A RIO REVUELTO, GANANCIA DE PESCADORES","BARRIGUITA LLENA, CORAZON CONTENTO","CUENTAS CLARAS, CONSERVAN LA AMISTAD","DE NOCHE TODOS LOS GATOS SON NEGROS","DEL DICHO AL HECHO, HAY MUCHO TRECHO","MAS VALE DAR QUE RECIBIR","AL OJO DEL AMO, ENGORDA EL CABALLO","EL QUE BUSCA ENCUENTRA","EN LO AJENO, REINA LA DESGRACIA","EL QUE NO ARRIESGA, NO PASA EL RIO","HOMBRE PREVENIDO, VALE POR DOS","EN MENOS QUE CANTE UN GALLO","JUAN PALOMO, YO ME LO TRAIGO, YO ME LO COMO","EN CUESTION DE GUSTOS, NO HAY NADA ESCRITO","FUE POR LANA Y SALIO TRASQUILADO","AVISADO, DISCULPADO","HABLANDO, SE ENTIENDE LA GENTE","DONDE COMEN DOS, COMEN TRES","DONDE FUEGO HUBO, CENIZAS QUEDAN","EN TODAS PARTES SE CUECEN HABAS","HOY POR TI, MA\xD1ANA POR M\xCD","LE OFRECIO EL ORO Y EL MORO","NADA CONTRA LA CORRIENTE","POBRE, PERO HONRADO","PIANO, PIANO, VA LONTANO","SONO COMO ARPA VIEJA","CALIENTE, CALIENTE, COMO EL AGUA ARDIENTE","FRIO, FRIO, COMO EL AGUA DEL RIO","NO ES NI CHICHA, NO LIMONADA","TIENE QUE PEDIRLE PERMISO A UN PIE PARA MOVER EL OTRO","NO HAY PEOR ASTILLA QUE LA DEL MISMO PALO","NADIE SABE PARA QUIEN TRABAJA","MAS VALE UN DIABLO CONOCIDO, QUE OTRO POR CONOCER","EL QUE ARRANCA, ESCAPA","LO MEJOR ES, CORTAR POR LO SANO","NO TIENE MADRE, NI PADRE, NI PERRO QUE LE LADRE","MUERTO EL PERRO, SE ACABO LA RABIA","EST\xC1, MAS LOCO QUE UNA CABRA","TIENE MAS CUENTAS QUE UN ROSARIO","SE SACAN LOS TRAPITOS AL SOL","LAS APARIENCIAS ENGA\xD1AN","LE DIERON SU MERECIDO","LA OPORTUNIDAD LA PINTAN CALVA","LA PROCESI\xD3N SE LLEVA POR DENTRO","LA CODICIA ROMPE EL SACO","LA CURIOSIDAD MATA AL GATO","SE FUE POR LAS RAMAS","EL QUE LA SIGUE LA CONSIGUE","CADA UNO CON SU CADA UNO","TIENE GUSTO A POCO","CUANDO LLUEVE, TODOS SE MOJAN"],ee=a=>a.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^\w\s]/gi,"").replace(/\./g,"").toLowerCase(),He=["Liarlo parda","Costar mogoll\xF3n","Estar al loro","Pasarse tres pueblos","Tener mala leche","Que te den morcilla","Se te ve el plumero","Darse con un canto en los dientes","Hablar por los codos","Tener una empanada mental","A fre\xEDr esp\xE1rragos","Comerse el coco","Estirar la pata","Tener la mosca detr\xE1s de la oreja","Planchar la oreja","Dar calabazas a alguien","Dar la vuelta a la tortilla","Estar hasta las narices","Tener la negra","Hacerse un l\xEDo","Llueve sobre mojado","Echar una mano","Tener mucho morro","Estar flipando en colores","Me lo estoy currando","Comerse un marr\xF3n","Comerse el tarro","Dormir a pierna suelta","Ser un mel\xF3n","Andar con pies de plomo","Ponerse morado","Estar sin blanca","Estar como una cabra","Tener vista de lince","Dar plant\xF3n","Otro gallo cantar\xEDa","Muy cutre","Liarse con alguien","Ser sujetavelas","Estar a dos velas","Se le va la pinza","No estar rayando","Montar un pollo","A tomar por saco","Estar cotilleando","Poner los cuernos","Hincar los codos"],ke=()=>{const a=`<voice name='Lucia'><amazon:emotion name="excited" intensity="high"> 
                          \xA1Hola! Mi nombre es Alexa. D\xEDme una palabra </amazon:emotion><break strength='strong'/></voice>`,t=`<voice name='Lucia'><amazon:emotion name="excited" intensity="high"> 
                                \xA1Hola! Mi nombre es Alexa. D\xEDme un refr\xE1n </amazon:emotion><break strength='strong'/></voice>`,i=`<voice name='Lucia'><amazon:emotion name="excited" intensity="high"> 
                              \xA1Hola! Mi nombre es Alexa. D\xEDme una frase </amazon:emotion><break strength='strong'/></voice>`,[n,s]=E.useState(!1),[o,A]=E.useState(!1),[O,d]=E.useState(!0),[b,T]=E.useState(),[B,h]=E.useState("Esperando consulta..."),m=L(l=>{var c;return(c=l.voiceState)==null?void 0:c.voiceAPIStatus}),p=L(l=>{var c;return(c=l.voiceState)==null?void 0:c.voiceMsgProps}),H=L(l=>{var c;return(c=l.voiceState)==null?void 0:c.processingUserRequest}),D=L(l=>{var c,N;return(N=(c=l.voiceState)==null?void 0:c.data)==null?void 0:N.intentType}),r=L(l=>{var c,N;return(N=(c=l.voiceState)==null?void 0:c.data)==null?void 0:N.userRequest}),u=L(l=>l.menuState.menuOption),ae=x(),{speechResponseToUserRequest:C}=ye(),{printDebug:R}=E.useContext(G),Q=E.useCallback(()=>{switch(u){case"words":T(new w(me)),C(a);break;case"proverbs":T(new w(Be)),C(t);break;case"phrases":T(new w(He)),C(i);break}},[m]),V=E.useCallback(()=>{R(`+++ INSIDE loading() - voiceAPIStatus => ${m}`),R(`+++ INSIDE loading() - voiceMsgStatus => ${p.status}`),m===S.LOADING||H?s(!0):s(!1)},[m,p]),_=E.useCallback(()=>{p.status===g.START_SPEECH?A(!0):A(!1)},[p]),F=E.useCallback(async()=>{R("+++ INSIDE handleVoiceAPIIntents() +++ "),R(`+++ VOICE API STATUS => ${m} `),R(`+++ INTENT TYPE => ${D} `),D==="word-intent"&&await se(r),ae(X())},[D,m]),se=async l=>{let c="";d(!0),h("Consulta recibida. Buscando..."),setTimeout(async()=>{c=await te(r),R(`Inside handleNewWord - wordFound 1 => ${c}`),c?(h(`Recibida: ${l} - Encontrada: ${c}`),C(`La consulta que he entendido es ${l}, y el resultado que he encontrado en el diccionario es ${c}
        <break strength='strong'/> D\xEDme otra consulta.`)):(h(`Recibida: ${l} - Encontrada: sin resultados`),C("Lo siento, la consulta que me has dicho no existe. Por favor, vuelva a repetirla o utilice una distinta.")),d(!1)},2e3)},te=async l=>{let c="";if(b){let N=[];b.getDictionaryWords().map(I=>{const U=fe(ee(I),ee(l));U>=.8&&(N.push({result:I,lvn:U}),console.log(`LVN DISTANCE between ${I} and ${l} is ${U}`),R(`LVN DISTANCE between ${I} and ${l} is ${U}`))}),c=ne(N)}return c},ne=l=>{if(l.length>0){const c=l.slice().sort((N,I)=>I.lvn-N.lvn);return console.log("+++ Inside getWordWithMaxLvn - listNoOrdered  => "+JSON.stringify(l)),console.log("+++ Inside getWordWithMaxLvn - listOrdered => "+JSON.stringify(c)),c[0].result}return""};return E.useEffect(()=>{Q()},[Q]),E.useEffect(()=>{V()},[V]),E.useEffect(()=>{_()},[_]),E.useEffect(()=>{F()},[F]),{searchingText:B,isLoading:n,isSpeechOn:o,isSearching:O}},we=()=>{const{searchingText:a,isLoading:t,isSpeechOn:i,isSearching:n}=ke();return e.jsx(e.Fragment,{children:e.jsx("div",{className:"container-fluid",children:e.jsx("div",{className:"container-menu",children:e.jsxs("div",{className:"grid-container",children:[i?e.jsx("div",{className:"grid-item item-avatar",children:e.jsx("img",{src:v.avatarSpeakingIcon.imageSrc,alt:v.avatarSpeakingIcon.imageAlt,className:"d-inline-block align-center"})}):e.jsx("div",{className:"grid-item item-avatar",children:e.jsx("img",{src:v.avatarNotSpeakingIcon.imageSrc,alt:v.avatarNotSpeakingIcon.imageAlt,className:"d-inline-block align-center"})}),e.jsx("div",{className:"grid-item item-input-wrapper-menu-view",children:t?e.jsx("div",{className:"grid-item item-icon-load-alexa-loading-view",children:e.jsx("img",{src:v.loadingIcon.imageSrc,alt:v.loadingIcon.imageAlt,className:"d-inline-block align-center"})}):n?e.jsx("div",{className:"grid-item item-waiting-text-alexa-loading-view item-waiting-text-alexa-loading-view-animation",children:a}):e.jsx("div",{className:"grid-item item-waiting-text-alexa-loading-view",children:a})})]})})})})},Ge=()=>{const a={navBrand:{name:"Buscar Palabras"},navBtns:[{name:"debug-btn",icon:ce,path:"/debug"}],disableNavButton:!1},t={icon:e.jsx(q,{icon:le,size:"lg"}),msg:"Ejemplo: Alexa, manzana"};return e.jsxs(e.Fragment,{children:[e.jsx($,{navBrand:a.navBrand,navBtns:a.navBtns,disableNavButton:a.disableNavButton}),e.jsx(we,{}),e.jsx(Ce,{msg:t.msg,icon:t.icon})]})},Qe=()=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"container-fluid",children:e.jsx("div",{className:"container-menu-start-app-view",children:e.jsxs("div",{className:"grid-container-start-app-view",children:[e.jsx("div",{className:"item-logo-start-app-view",children:"Buscar similitud"}),e.jsxs("div",{className:"item-button-start-app-view",children:[e.jsx(j,{id:"words",path:"/dialog",classStyle:"btn-primary item-button",type:"button",children:"Palabras"}),e.jsx(j,{id:"proverbs",path:"/dialog",classStyle:"btn-primary item-button",type:"button",children:"Refranes"}),e.jsx(j,{id:"phrases",path:"/dialog",classStyle:"btn-primary item-button",type:"button",children:"Frases"})]})]})})})}),Ve=({msg:a})=>{const t={navBrand:{name:"En Modo Debug"},navBtns:[{name:"exit-btn",icon:Ee,path:"/dialog"}],disableNavButton:!1};return e.jsxs(e.Fragment,{children:[e.jsx($,{navBrand:t.navBrand,navBtns:t.navBtns,disableNavButton:t.disableNavButton}),e.jsx("div",{className:"debug-container",children:e.jsxs("div",{className:"debug-container-grid",children:[e.jsx("div",{className:"debug-container-grid-item-traza",children:e.jsx("ul",{children:a.map((i,n)=>i&&e.jsx("li",{children:i},n))})}),e.jsx("div",{className:"debug-container-grid-item-input-btns",children:e.jsx("div",{className:"debug-container-grid-item-input-field",children:e.jsxs("div",{className:"input-group mb-3",children:[e.jsx("div",{className:"input-group-prepend",children:e.jsx("span",{className:"input-group-text",id:"inputGroup-sizing-default",children:"UID"})}),e.jsx("input",{type:"number",name:"uid",placeholder:"UID del usuario que ha realizado test usabilidad",pattern:"^[0-9]+$",title:"Solo se permiten n\xFAmeros",className:"form-control","aria-label":"Default","aria-describedby":"inputGroup-sizing-default",required:!0})]})})})]})})]})},_e=()=>{const[a,t]=E.useState(null),[i,n]=E.useState([]),s=x(),o=E.useCallback(async()=>{d("Beginning Alexa.create"),window.Alexa?window.Alexa.create({version:"1.0"}).then(r=>{r.alexa?(t(r.alexa),r.alexa.skill.onMessage(B),r.alexa.speech.onStarted(h),r.alexa.speech.onStopped(m),r.alexa.voice.onMicrophoneOpened(p),r.alexa.voice.onMicrophoneClosed(H),d("Alexa is ready - newest version 5 :) Received initial data 45"),r.message.deviceId&&(d("Alexa Skill init data: "+r.message.deviceId),console.log("Alexa Skill init data: "+r.message.deviceId),s(Ue(r.message.deviceId))),s(f(S.OK))):(d(`Alexa failed to initialize, code: ${r.code}`),s(f(S.NOT_OK)))}).catch(r=>{d(`Alexa not ready :(. Error: ${r}`),s(f(S.NOT_OK))}):s(f(S.NOT_OK))},[]),A=r=>{n(u=>[...u,r]),console.log(r)},O=()=>{n([])},d=r=>{A(typeof r!="string"?JSON.stringify(r,null,2):r)},b=r=>{r.statusCode==200?d("message was sent to backend successfully"):(s(P(g.END_SPEECH)),d("failed to send message to skill backend:"))},T=E.useCallback(async r=>{try{d("sending message to skill endpoint ==> "+JSON.stringify(r)),d("+++ INSIDE sendMessage - alexaClient ==> "+a),await a.skill.sendMessage(r,b)}catch(u){s(P(g.END_SPEECH)),d("Alexa error ==> "+u)}},[a]),B=r=>{let u;d("Web APP received a message from the skill endpoint"),d(r),r&&(u={intentType:r.intentType,userRequest:r.userRequest},s(Z(!0)),s(Me(u)))},h=()=>{s(P(g.START_SPEECH))},m=()=>{s(P(g.END_SPEECH))},p=()=>{s(W(y.MICROPHONE_OPENED))},H=()=>{s(W(y.MICROPHONE_CLOSED))},D=E.useCallback(()=>{s(X())},[]);return E.useEffect(()=>{o()},[]),{debugMessages:i,printDebug:d,sendMessage:T,resetVoiceIntent:D,resetDebugMessages:O}},Fe=()=>{const a=x(),{debugMessages:t,printDebug:i,sendMessage:n,resetDebugMessages:s}=_e();return{debugMessages:t,printDebug:i,sendLogToAlexa:async(o,A)=>{o===S.OK&&await n({intentRequest:"log-text-intent",logTxt:A})},sendTextToAlexa:async(o,A,O)=>{o===S.OK&&(a(P(g.SEND_SPEECH)),await n({intentRequest:O||"text-to-speech-intent",speech:A}))},resetDebugMessages:s}},G=ie.createContext({});function qe(){const{debugMessages:a,printDebug:t,sendLogToAlexa:i,sendTextToAlexa:n,resetDebugMessages:s}=Fe();return e.jsx(e.Fragment,{children:e.jsx(G.Provider,{value:{debugMessages:a,printDebug:t,sendLogToAlexa:i,sendTextToAlexa:n,resetDebugMessages:s},children:e.jsx(oe,{basename:M.BASE_ROUTE,children:e.jsxs(Ne,{children:[e.jsx(k,{path:M.START_APP_ROUTE,element:e.jsx(Qe,{})}),e.jsx(k,{path:M.DIALOG_ROUTE,element:e.jsx(Ge,{})}),e.jsx(k,{path:M.DEBUG_ROUTE,element:e.jsx(Ve,{msg:a})})]})})})})}const ze=de({reducer:{voiceState:je,menuState:Te}});re.createRoot(document.getElementById("root")).render(e.jsx(Ae,{store:ze,children:e.jsxs(e.Fragment,{children:[e.jsx(ue,{}),e.jsx(qe,{})]})}));
