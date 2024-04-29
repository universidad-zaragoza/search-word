import{o as Lh}from"./idb-BXWtuYvb.js";import{_ as Qr}from"./tslib-BGVaTf34.js";var Ms={};/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const xs=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},Mh=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return t.join("")},Us={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],o=i+1<e.length,a=o?e[i+1]:0,c=i+2<e.length,h=c?e[i+2]:0,u=s>>2,d=(s&3)<<4|a>>4;let p=(a&15)<<2|h>>6,v=h&63;c||(v=64,o||(p=64)),r.push(n[u],n[d],n[p],n[v])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(xs(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Mh(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],o=i<e.length?n[e.charAt(i)]:0;++i;const a=i<e.length?n[e.charAt(i)]:64;++i;const c=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||o==null||a==null||c==null)throw new xh;const h=s<<2|o>>4;if(r.push(h),a!==64){const u=o<<4&240|a>>2;if(r.push(u),c!==64){const d=a<<6&192|c;r.push(d)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class xh extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Uh=function(e){const t=xs(e);return Us.encodeByteArray(t,!0)},kn=function(e){return Uh(e).replace(/\./g,"")},Fs=function(e){try{return Us.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Fh(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Vh=()=>Fh().__FIREBASE_DEFAULTS__,jh=()=>{if(typeof process>"u"||typeof Ms>"u")return;const e=Ms.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Bh=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Fs(e[1]);return t&&JSON.parse(t)},Nn=()=>{try{return Vh()||jh()||Bh()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Vs=e=>{var t,n;return(n=(t=Nn())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},$h=e=>{const t=Vs(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},js=()=>{var e;return(e=Nn())===null||e===void 0?void 0:e.config},Bs=e=>{var t;return(t=Nn())===null||t===void 0?void 0:t[`_${e}`]};/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class zh{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function qh(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e);return[kn(JSON.stringify(n)),kn(JSON.stringify(o)),""].join(".")}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function M(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Hh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(M())}function Gh(){var e;const t=(e=Nn())===null||e===void 0?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Kh(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Wh(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Qh(){const e=M();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Jh(){return!Gh()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function $s(){try{return typeof indexedDB=="object"}catch{return!1}}function Xh(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Yh="FirebaseError";class Ct extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Yh,Object.setPrototypeOf(this,Ct.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,xe.prototype.create)}}class xe{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],o=s?Zh(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Ct(i,a,r)}}function Zh(e,t){return e.replace(tu,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const tu=/\{\$([^}]+)}/g;function eu(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Dn(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],o=t[i];if(zs(s)&&zs(o)){if(!Dn(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function zs(e){return e!==null&&typeof e=="object"}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Ue(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function nu(e,t){const n=new ru(e,t);return n.subscribe.bind(n)}class ru{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");iu(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=Jr),i.error===void 0&&(i.error=Jr),i.complete===void 0&&(i.complete=Jr);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function iu(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Jr(){}/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function nt(e){return e&&e._delegate?e._delegate:e}class Jt{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Xt="[DEFAULT]";/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class su{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new zh;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(au(t))try{this.getOrInitializeService({instanceIdentifier:Xt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=Xt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Xt){return this.instances.has(t)}getOptions(t=Xt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&t(o,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:ou(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Xt){return this.component?this.component.multipleInstances?t:Xt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ou(e){return e===Xt?void 0:e}function au(e){return e.instantiationMode==="EAGER"}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class cu{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new su(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var T;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(T||(T={}));const hu={debug:T.DEBUG,verbose:T.VERBOSE,info:T.INFO,warn:T.WARN,error:T.ERROR,silent:T.SILENT},uu=T.INFO,lu={[T.DEBUG]:"log",[T.VERBOSE]:"log",[T.INFO]:"info",[T.WARN]:"warn",[T.ERROR]:"error"},du=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=lu[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Xr{constructor(t){this.name=t,this._logLevel=uu,this._logHandler=du,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in T))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?hu[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,T.DEBUG,...t),this._logHandler(this,T.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,T.VERBOSE,...t),this._logHandler(this,T.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,T.INFO,...t),this._logHandler(this,T.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,T.WARN,...t),this._logHandler(this,T.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,T.ERROR,...t),this._logHandler(this,T.ERROR,...t)}}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class fu{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(pu(t)){const n=t.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(t=>t).join(" ")}}function pu(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Yr="@firebase/app",qs="0.10.1";/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Yt=new Xr("@firebase/app"),gu="@firebase/app-compat",mu="@firebase/analytics-compat",yu="@firebase/analytics",vu="@firebase/app-check-compat",wu="@firebase/app-check",bu="@firebase/auth",Eu="@firebase/auth-compat",Iu="@firebase/database",Tu="@firebase/database-compat",_u="@firebase/functions",Su="@firebase/functions-compat",Au="@firebase/installations",Cu="@firebase/installations-compat",ku="@firebase/messaging",Nu="@firebase/messaging-compat",Du="@firebase/performance",Ru="@firebase/performance-compat",Ou="@firebase/remote-config",Pu="@firebase/remote-config-compat",Lu="@firebase/storage",Mu="@firebase/storage-compat",xu="@firebase/firestore",Uu="@firebase/firestore-compat",Fu="firebase",Vu="10.11.0";/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Zr="[DEFAULT]",ju={[Yr]:"fire-core",[gu]:"fire-core-compat",[yu]:"fire-analytics",[mu]:"fire-analytics-compat",[wu]:"fire-app-check",[vu]:"fire-app-check-compat",[bu]:"fire-auth",[Eu]:"fire-auth-compat",[Iu]:"fire-rtdb",[Tu]:"fire-rtdb-compat",[_u]:"fire-fn",[Su]:"fire-fn-compat",[Au]:"fire-iid",[Cu]:"fire-iid-compat",[ku]:"fire-fcm",[Nu]:"fire-fcm-compat",[Du]:"fire-perf",[Ru]:"fire-perf-compat",[Ou]:"fire-rc",[Pu]:"fire-rc-compat",[Lu]:"fire-gcs",[Mu]:"fire-gcs-compat",[xu]:"fire-fst",[Uu]:"fire-fst-compat","fire-js":"fire-js",[Fu]:"fire-js-all"};/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Rn=new Map,Bu=new Map,ti=new Map;function Hs(e,t){try{e.container.addComponent(t)}catch(n){Yt.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function le(e){const t=e.name;if(ti.has(t))return Yt.debug(`There were multiple attempts to register component ${t}.`),!1;ti.set(t,e);for(const n of Rn.values())Hs(n,e);for(const n of Bu.values())Hs(n,e);return!0}function ei(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function bt(e){return e.settings!==void 0}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const $u={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Rt=new xe("app","Firebase",$u);/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class zu{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Jt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Rt.create("app-deleted",{appName:this._name})}}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const de=Vu;function Gs(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Zr,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Rt.create("bad-app-name",{appName:String(i)});if(n||(n=js()),!n)throw Rt.create("no-options");const s=Rn.get(i);if(s){if(Dn(n,s.options)&&Dn(r,s.config))return s;throw Rt.create("duplicate-app",{appName:i})}const o=new cu(i);for(const c of ti.values())o.addComponent(c);const a=new zu(n,r,o);return Rn.set(i,a),a}function Ks(e=Zr){const t=Rn.get(e);if(!t&&e===Zr&&js())return Gs();if(!t)throw Rt.create("no-app",{appName:e});return t}function Ot(e,t,n){var r;let i=(r=ju[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${t}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Yt.warn(a.join(" "));return}le(new Jt(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const qu="firebase-heartbeat-database",Hu=1,Fe="firebase-heartbeat-store";let ni=null;function Ws(){return ni||(ni=Lh(qu,Hu,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Fe)}catch(n){console.warn(n)}}}}).catch(e=>{throw Rt.create("idb-open",{originalErrorMessage:e.message})})),ni}async function Gu(e){try{const t=(await Ws()).transaction(Fe),n=await t.objectStore(Fe).get(Js(e));return await t.done,n}catch(t){if(t instanceof Ct)Yt.warn(t.message);else{const n=Rt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Yt.warn(n.message)}}}async function Qs(e,t){try{const n=(await Ws()).transaction(Fe,"readwrite");await n.objectStore(Fe).put(t,Js(e)),await n.done}catch(n){if(n instanceof Ct)Yt.warn(n.message);else{const r=Rt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Yt.warn(r.message)}}}function Js(e){return`${e.name}!${e.options.appId}`}/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Ku=1024,Wu=30*24*60*60*1e3;class Qu{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Xu(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Xs();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const o=new Date(s.date).valueOf();return Date.now()-o<=Wu}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Xs(),{heartbeatsToSend:r,unsentEntries:i}=Ju(this._heartbeatsCache.heartbeats),s=kn(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Xs(){return new Date().toISOString().substring(0,10)}function Ju(e,t=Ku){const n=[];let r=e.slice();for(const i of e){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Ys(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ys(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Xu{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return $s()?Xh().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Gu(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Qs(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Qs(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function Ys(e){return kn(JSON.stringify({version:2,heartbeats:e})).length}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Yu(e){le(new Jt("platform-logger",t=>new fu(t),"PRIVATE")),le(new Jt("heartbeat",t=>new Qu(t),"PRIVATE")),Ot(Yr,qs,e),Ot(Yr,qs,"esm2017"),Ot("fire-js","")}Yu("");var Zu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},g,ri=ri||{},b=Zu||self;function On(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function Ve(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function tl(e){return Object.prototype.hasOwnProperty.call(e,ii)&&e[ii]||(e[ii]=++el)}var ii="closure_uid_"+(1e9*Math.random()>>>0),el=0;function nl(e,t,n){return e.call.apply(e.bind,arguments)}function rl(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function W(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?W=nl:W=rl,W.apply(null,arguments)}function Pn(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),e.apply(this,r)}}function U(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(r,o)}}function Pt(){this.s=this.s,this.o=this.o}var il=0;Pt.prototype.s=!1,Pt.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),il!=0)&&tl(this)},Pt.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Zs=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function si(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function to(e,t){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(On(r)){const i=e.length||0,s=r.length||0;e.length=i+s;for(let o=0;o<s;o++)e[i+o]=r[o]}else e.push(r)}}function Q(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}Q.prototype.h=function(){this.defaultPrevented=!0};var sl=function(){if(!b.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{const n=()=>{};b.addEventListener("test",n,t),b.removeEventListener("test",n,t)}catch{}return e}();function je(e){return/^[\s\xa0]*$/.test(e)}function Ln(){var e=b.navigator;return e&&(e=e.userAgent)?e:""}function lt(e){return Ln().indexOf(e)!=-1}function oi(e){return oi[" "](e),e}oi[" "]=function(){};function ol(e,t){var n=Zl;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}var al=lt("Opera"),fe=lt("Trident")||lt("MSIE"),eo=lt("Edge"),ai=eo||fe,no=lt("Gecko")&&!(Ln().toLowerCase().indexOf("webkit")!=-1&&!lt("Edge"))&&!(lt("Trident")||lt("MSIE"))&&!lt("Edge"),cl=Ln().toLowerCase().indexOf("webkit")!=-1&&!lt("Edge");function ro(){var e=b.document;return e?e.documentMode:void 0}var ci;t:{var hi="",ui=function(){var e=Ln();if(no)return/rv:([^\);]+)(\)|;)/.exec(e);if(eo)return/Edge\/([\d\.]+)/.exec(e);if(fe)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(cl)return/WebKit\/(\S+)/.exec(e);if(al)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(ui&&(hi=ui?ui[1]:""),fe){var li=ro();if(li!=null&&li>parseFloat(hi)){ci=String(li);break t}}ci=hi}var di;if(b.document&&fe){var hl=ro();di=hl||parseInt(ci,10)||void 0}else di=void 0;var ul=di;function Be(e,t){if(Q.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(no){t:{try{oi(t.nodeName);var i=!0;break t}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:ll[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Be.$.h.call(this)}}U(Be,Q);var ll={2:"touch",3:"pen",4:"mouse"};Be.prototype.h=function(){Be.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var $e="closure_listenable_"+(1e6*Math.random()|0),dl=0;function fl(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=i,this.key=++dl,this.fa=this.ia=!1}function Mn(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function fi(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function pl(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function io(e){const t={};for(const n in e)t[n]=e[n];return t}const so="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function oo(e,t){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)e[n]=r[n];for(let s=0;s<so.length;s++)n=so[s],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function xn(e){this.src=e,this.g={},this.h=0}xn.prototype.add=function(e,t,n,r,i){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=gi(e,t,r,i);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new fl(t,this.src,s,!!r,i),t.ia=n,e.push(t)),t};function pi(e,t){var n=t.type;if(n in e.g){var r=e.g[n],i=Zs(r,t),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Mn(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function gi(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.fa&&s.listener==t&&s.capture==!!n&&s.la==r)return i}return-1}var mi="closure_lm_"+(1e6*Math.random()|0),yi={};function ao(e,t,n,r,i){if(r&&r.once)return ho(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)ao(e,t[s],n,r,i);return null}return n=Ei(n),e&&e[$e]?e.O(t,n,Ve(r)?!!r.capture:!!r,i):co(e,t,n,!1,r,i)}function co(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=Ve(i)?!!i.capture:!!i,a=wi(e);if(a||(e[mi]=a=new xn(e)),n=a.add(t,n,r,o,s),n.proxy)return n;if(r=gl(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)sl||(i=o),i===void 0&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(lo(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function gl(){function e(n){return t.call(e.src,e.listener,n)}const t=ml;return e}function ho(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)ho(e,t[s],n,r,i);return null}return n=Ei(n),e&&e[$e]?e.P(t,n,Ve(r)?!!r.capture:!!r,i):co(e,t,n,!0,r,i)}function uo(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)uo(e,t[s],n,r,i);else r=Ve(r)?!!r.capture:!!r,n=Ei(n),e&&e[$e]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=gi(s,n,r,i),-1<n&&(Mn(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete e.g[t],e.h--)))):e&&(e=wi(e))&&(t=e.g[t.toString()],e=-1,t&&(e=gi(t,n,r,i)),(n=-1<e?t[e]:null)&&vi(n))}function vi(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[$e])pi(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(lo(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=wi(t))?(pi(n,e),n.h==0&&(n.src=null,t[mi]=null)):Mn(e)}}}function lo(e){return e in yi?yi[e]:yi[e]="on"+e}function ml(e,t){if(e.fa)e=!0;else{t=new Be(t,this);var n=e.listener,r=e.la||e.src;e.ia&&vi(e),e=n.call(r,t)}return e}function wi(e){return e=e[mi],e instanceof xn?e:null}var bi="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ei(e){return typeof e=="function"?e:(e[bi]||(e[bi]=function(t){return e.handleEvent(t)}),e[bi])}function F(){Pt.call(this),this.i=new xn(this),this.S=this,this.J=null}U(F,Pt),F.prototype[$e]=!0,F.prototype.removeEventListener=function(e,t,n,r){uo(this,e,t,n,r)};function z(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,typeof t=="string")t=new Q(t,e);else if(t instanceof Q)t.target=t.target||e;else{var i=t;t=new Q(r,e),oo(t,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=Un(o,r,!0,t)&&i}if(o=t.g=e,i=Un(o,r,!0,t)&&i,i=Un(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)o=t.g=n[s],i=Un(o,r,!1,t)&&i}F.prototype.N=function(){if(F.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)Mn(n[r]);delete e.g[t],e.h--}}this.J=null},F.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},F.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};function Un(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&pi(e.i,o),i=a.call(c,r)!==!1&&i}}return i&&!r.defaultPrevented}var Ii=b.JSON.stringify;class yl{constructor(t,n){this.i=t,this.j=n,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function vl(){var e=Ti;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class wl{constructor(){this.h=this.g=null}add(t,n){const r=fo.get();r.set(t,n),this.h?this.h.next=r:this.g=r,this.h=r}}var fo=new yl(()=>new bl,e=>e.reset());class bl{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function El(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function Il(e){b.setTimeout(()=>{throw e},0)}let ze,qe=!1,Ti=new wl,po=()=>{const e=b.Promise.resolve(void 0);ze=()=>{e.then(Tl)}};var Tl=()=>{for(var e;e=vl();){try{e.h.call(e.g)}catch(n){Il(n)}var t=fo;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}qe=!1};function Fn(e,t){F.call(this),this.h=e||1,this.g=t||b,this.j=W(this.qb,this),this.l=Date.now()}U(Fn,F),g=Fn.prototype,g.ga=!1,g.T=null,g.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),z(this,"tick"),this.ga&&(_i(this),this.start()))}},g.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function _i(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}g.N=function(){Fn.$.N.call(this),_i(this),delete this.g};function Si(e,t,n){if(typeof e=="function")n&&(e=W(e,n));else if(e&&typeof e.handleEvent=="function")e=W(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:b.setTimeout(e,t||0)}function go(e){e.g=Si(()=>{e.g=null,e.i&&(e.i=!1,go(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class _l extends Pt{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:go(this)}N(){super.N(),this.g&&(b.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function He(e){Pt.call(this),this.h=e,this.g={}}U(He,Pt);var mo=[];function yo(e,t,n,r){Array.isArray(n)||(n&&(mo[0]=n.toString()),n=mo);for(var i=0;i<n.length;i++){var s=ao(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function vo(e){fi(e.g,function(t,n){this.g.hasOwnProperty(n)&&vi(t)},e),e.g={}}He.prototype.N=function(){He.$.N.call(this),vo(this)},He.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Vn(){this.g=!0}Vn.prototype.Ea=function(){this.g=!1};function Sl(e,t,n,r,i,s){e.info(function(){if(e.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var h=a[c].split("=");if(1<h.length){var u=h[0];h=h[1];var d=u.split("_");o=2<=d.length&&d[1]=="type"?o+(u+"="+h+"&"):o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+`
`+n+`
`+o})}function Al(e,t,n,r,i,s,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+`
`+n+`
`+s+" "+o})}function pe(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+kl(e,n)+(r?" "+r:"")})}function Cl(e,t){e.info(function(){return"TIMEOUT: "+t})}Vn.prototype.info=function(){};function kl(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Ii(n)}catch{return t}}var Zt={},wo=null;function jn(){return wo=wo||new F}Zt.Ta="serverreachability";function bo(e){Q.call(this,Zt.Ta,e)}U(bo,Q);function Ge(e){const t=jn();z(t,new bo(t))}Zt.STAT_EVENT="statevent";function Eo(e,t){Q.call(this,Zt.STAT_EVENT,e),this.stat=t}U(Eo,Q);function tt(e){const t=jn();z(t,new Eo(t,e))}Zt.Ua="timingevent";function Io(e,t){Q.call(this,Zt.Ua,e),this.size=t}U(Io,Q);function Ke(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return b.setTimeout(function(){e()},t)}var Bn={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},To={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Ai(){}Ai.prototype.h=null;function _o(e){return e.h||(e.h=e.i())}function So(){}var We={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Ci(){Q.call(this,"d")}U(Ci,Q);function ki(){Q.call(this,"c")}U(ki,Q);var Ni;function $n(){}U($n,Ai),$n.prototype.g=function(){return new XMLHttpRequest},$n.prototype.i=function(){return{}},Ni=new $n;function Qe(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new He(this),this.P=Nl,e=ai?125:void 0,this.V=new Fn(e),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Ao}function Ao(){this.i=null,this.g="",this.h=!1}var Nl=45e3,Co={},Di={};g=Qe.prototype,g.setTimeout=function(e){this.P=e};function Ri(e,t,n){e.L=1,e.A=Gn(Et(t)),e.u=n,e.S=!0,ko(e,null)}function ko(e,t){e.G=Date.now(),Je(e),e.B=Et(e.A);var n=e.B,r=e.W;Array.isArray(r)||(r=[String(r)]),Fo(n.i,"t",r),e.o=0,n=e.l.J,e.h=new Ao,e.g=ca(e.l,n?t:null,!e.u),0<e.O&&(e.M=new _l(W(e.Pa,e,e.g),e.O)),yo(e.U,e.g,"readystatechange",e.nb),t=e.I?io(e.I):{},e.u?(e.v||(e.v="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.B,e.v,e.u,t)):(e.v="GET",e.g.ha(e.B,e.v,null,t)),Ge(),Sl(e.j,e.v,e.B,e.m,e.W,e.u)}g.nb=function(e){e=e.target;const t=this.M;t&&dt(e)==3?t.l():this.Pa(e)},g.Pa=function(e){try{if(e==this.g)t:{const u=dt(this.g);var t=this.g.Ia();const d=this.g.da();if(!(3>u)&&(u!=3||ai||this.g&&(this.h.h||this.g.ja()||Jo(this.g)))){this.J||u!=4||t==7||(t==8||0>=d?Ge(3):Ge(2)),zn(this);var n=this.g.da();this.ca=n;e:if(No(this)){var r=Jo(this.g);e="";var i=r.length,s=dt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){te(this),Xe(this);var o="";break e}this.h.i=new b.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.length=0,this.h.g+=e,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,Al(this.j,this.v,this.B,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!je(a)){var h=a;break e}}h=null}if(n=h)pe(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Oi(this,n);else{this.i=!1,this.s=3,tt(12),te(this),Xe(this);break t}}this.S?(Do(this,u,o),ai&&this.i&&u==3&&(yo(this.U,this.V,"tick",this.mb),this.V.start())):(pe(this.j,this.m,o,null),Oi(this,o)),u==4&&te(this),this.i&&!this.J&&(u==4?ia(this.l,this):(this.i=!1,Je(this)))}else Jl(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,tt(12)):(this.s=0,tt(13)),te(this),Xe(this)}}}catch{}finally{}};function No(e){return e.g?e.v=="GET"&&e.L!=2&&e.l.Ha:!1}function Do(e,t,n){let r=!0,i;for(;!e.J&&e.o<n.length;)if(i=Dl(e,n),i==Di){t==4&&(e.s=4,tt(14),r=!1),pe(e.j,e.m,null,"[Incomplete Response]");break}else if(i==Co){e.s=4,tt(15),pe(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else pe(e.j,e.m,i,null),Oi(e,i);No(e)&&e.o!=0&&(e.h.g=e.h.g.slice(e.o),e.o=0),t!=4||n.length!=0||e.h.h||(e.s=1,tt(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Vi(t),t.M=!0,tt(11))):(pe(e.j,e.m,n,"[Invalid Chunked Response]"),te(e),Xe(e))}g.mb=function(){if(this.g){var e=dt(this.g),t=this.g.ja();this.o<t.length&&(zn(this),Do(this,e,t),this.i&&e!=4&&Je(this))}};function Dl(e,t){var n=e.o,r=t.indexOf(`
`,n);return r==-1?Di:(n=Number(t.substring(n,r)),isNaN(n)?Co:(r+=1,r+n>t.length?Di:(t=t.slice(r,r+n),e.o=r+n,t)))}g.cancel=function(){this.J=!0,te(this)};function Je(e){e.Y=Date.now()+e.P,Ro(e,e.P)}function Ro(e,t){if(e.C!=null)throw Error("WatchDog timer not null");e.C=Ke(W(e.lb,e),t)}function zn(e){e.C&&(b.clearTimeout(e.C),e.C=null)}g.lb=function(){this.C=null;const e=Date.now();0<=e-this.Y?(Cl(this.j,this.B),this.L!=2&&(Ge(),tt(17)),te(this),this.s=2,Xe(this)):Ro(this,this.Y-e)};function Xe(e){e.l.H==0||e.J||ia(e.l,e)}function te(e){zn(e);var t=e.M;t&&typeof t.sa=="function"&&t.sa(),e.M=null,_i(e.V),vo(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function Oi(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||Pi(n.i,e))){if(!e.K&&Pi(n.i,e)&&n.H==3){try{var r=n.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){t:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)Zn(n),Xn(n);else break t;Fi(n),tt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=Ke(W(n.ib,n),6e3));if(1>=Bo(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else ne(n,11)}else if((e.K||n.g==e)&&Zn(n),!je(t))for(i=n.Ja.g.parse(t),t=0;t<i.length;t++){let h=i[t];if(n.V=h[0],h=h[1],n.H==2)if(h[0]=="c"){n.K=h[1],n.pa=h[2];const u=h[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const d=h[4];d!=null&&(n.Ga=d,n.l.info("SVER="+n.Ga));const p=h[5];p!=null&&typeof p=="number"&&0<p&&(r=1.5*p,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const v=e.g;if(v){const I=v.g?v.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(I){var s=r.i;s.g||I.indexOf("spdy")==-1&&I.indexOf("quic")==-1&&I.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Li(s,s.h),s.h=null))}if(r.F){const k=v.g?v.g.getResponseHeader("X-HTTP-Session-Id"):null;k&&(r.Da=k,D(r.I,r.F,k))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=e;if(r.wa=aa(r,r.J?r.pa:null,r.Y),o.K){$o(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.C&&(zn(a),Je(a)),r.g=o}else na(r);0<n.j.length&&Yn(n)}else h[0]!="stop"&&h[0]!="close"||ne(n,7);else n.H==3&&(h[0]=="stop"||h[0]=="close"?h[0]=="stop"?ne(n,7):Ui(n):h[0]!="noop"&&n.h&&n.h.Aa(h),n.A=0)}}Ge(4)}catch{}}function Rl(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(On(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}t=[],n=0;for(r in e)t[n++]=e[r];return t}function Ol(e){if(e.ta&&typeof e.ta=="function")return e.ta();if(!e.Z||typeof e.Z!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(On(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function Oo(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(On(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=Ol(e),r=Rl(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}var Po=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Pl(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function ee(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof ee){this.h=e.h,qn(this,e.j),this.s=e.s,this.g=e.g,Hn(this,e.m),this.l=e.l;var t=e.i,n=new tn;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Lo(this,n),this.o=e.o}else e&&(t=String(e).match(Po))?(this.h=!1,qn(this,t[1]||"",!0),this.s=Ye(t[2]||""),this.g=Ye(t[3]||"",!0),Hn(this,t[4]),this.l=Ye(t[5]||"",!0),Lo(this,t[6]||"",!0),this.o=Ye(t[7]||"")):(this.h=!1,this.i=new tn(null,this.h))}ee.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Ze(t,Mo,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(Ze(t,Mo,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(Ze(n,n.charAt(0)=="/"?xl:Ml,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Ze(n,Fl)),e.join("")};function Et(e){return new ee(e)}function qn(e,t,n){e.j=n?Ye(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Hn(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Lo(e,t,n){t instanceof tn?(e.i=t,Vl(e.i,e.h)):(n||(t=Ze(t,Ul)),e.i=new tn(t,e.h))}function D(e,t,n){e.i.set(t,n)}function Gn(e){return D(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Ye(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Ze(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,Ll),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Ll(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var Mo=/[#\/\?@]/g,Ml=/[#\?:]/g,xl=/[#\?]/g,Ul=/[#\?@]/g,Fl=/#/g;function tn(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Lt(e){e.g||(e.g=new Map,e.h=0,e.i&&Pl(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}g=tn.prototype,g.add=function(e,t){Lt(this),this.i=null,e=ge(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function xo(e,t){Lt(e),t=ge(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function Uo(e,t){return Lt(e),t=ge(e,t),e.g.has(t)}g.forEach=function(e,t){Lt(this),this.g.forEach(function(n,r){n.forEach(function(i){e.call(t,i,r,this)},this)},this)},g.ta=function(){Lt(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let s=0;s<i.length;s++)n.push(t[r])}return n},g.Z=function(e){Lt(this);let t=[];if(typeof e=="string")Uo(this,e)&&(t=t.concat(this.g.get(ge(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},g.set=function(e,t){return Lt(this),this.i=null,e=ge(this,e),Uo(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},g.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function Fo(e,t,n){xo(e,t),0<n.length&&(e.i=null,e.g.set(ge(e,t),si(n)),e.h+=n.length)}g.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")};function ge(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function Vl(e,t){t&&!e.j&&(Lt(e),e.i=null,e.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(xo(this,r),Fo(this,i,n))},e)),e.j=t}var jl=class{constructor(e,t){this.g=e,this.map=t}};function Vo(e){this.l=e||Bl,b.PerformanceNavigationTiming?(e=b.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(b.g&&b.g.Ka&&b.g.Ka()&&b.g.Ka().dc),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Bl=10;function jo(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function Bo(e){return e.h?1:e.g?e.g.size:0}function Pi(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function Li(e,t){e.g?e.g.add(t):e.h=t}function $o(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}Vo.prototype.cancel=function(){if(this.i=zo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function zo(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return si(e.i)}var $l=class{stringify(e){return b.JSON.stringify(e,void 0)}parse(e){return b.JSON.parse(e,void 0)}};function zl(){this.g=new $l}function ql(e,t,n){const r=n||"";try{Oo(e,function(i,s){let o=i;Ve(i)&&(o=Ii(i)),t.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function Hl(e,t){const n=new Vn;if(b.Image){const r=new Image;r.onload=Pn(Kn,n,r,"TestLoadImage: loaded",!0,t),r.onerror=Pn(Kn,n,r,"TestLoadImage: error",!1,t),r.onabort=Pn(Kn,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=Pn(Kn,n,r,"TestLoadImage: timeout",!1,t),b.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function Kn(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch{}}function Wn(e){this.l=e.ec||null,this.j=e.ob||!1}U(Wn,Ai),Wn.prototype.g=function(){return new Qn(this.l,this.j)},Wn.prototype.i=function(e){return function(){return e}}({});function Qn(e,t){F.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=Mi,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}U(Qn,F);var Mi=0;g=Qn.prototype,g.open=function(e,t){if(this.readyState!=Mi)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,nn(this)},g.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||b).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))},g.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,en(this)),this.readyState=Mi},g.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,nn(this)),this.g&&(this.readyState=3,nn(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof b.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;qo(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function qo(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}g.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?en(this):nn(this),this.readyState==3&&qo(this)}},g.Za=function(e){this.g&&(this.response=this.responseText=e,en(this))},g.Ya=function(e){this.g&&(this.response=e,en(this))},g.ka=function(){this.g&&en(this)};function en(e){e.readyState=4,e.l=null,e.j=null,e.A=null,nn(e)}g.setRequestHeader=function(e,t){this.v.append(e,t)},g.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},g.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function nn(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(Qn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var Gl=b.JSON.parse;function P(e){F.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Ho,this.L=this.M=!1}U(P,F);var Ho="",Kl=/^https?$/i,Wl=["POST","PUT"];g=P.prototype,g.Oa=function(e){this.M=e},g.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Ni.g(),this.C=this.u?_o(this.u):_o(Ni),this.g.onreadystatechange=W(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(s){Go(this,s);return}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=b.FormData&&e instanceof b.FormData,!(0<=Zs(Wl,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Qo(this),0<this.B&&((this.L=Ql(this.g))?(this.g.timeout=this.B,this.g.ontimeout=W(this.ua,this)):this.A=Si(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){Go(this,s)}};function Ql(e){return fe&&typeof e.timeout=="number"&&e.ontimeout!==void 0}g.ua=function(){typeof ri<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,z(this,"timeout"),this.abort(8))};function Go(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Ko(e),Jn(e)}function Ko(e){e.F||(e.F=!0,z(e,"complete"),z(e,"error"))}g.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,z(this,"complete"),z(this,"abort"),Jn(this))},g.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Jn(this,!0)),P.$.N.call(this)},g.La=function(){this.s||(this.G||this.v||this.l?Wo(this):this.kb())},g.kb=function(){Wo(this)};function Wo(e){if(e.h&&typeof ri<"u"&&(!e.C[1]||dt(e)!=4||e.da()!=2)){if(e.v&&dt(e)==4)Si(e.La,0,e);else if(z(e,"readystatechange"),dt(e)==4){e.h=!1;try{const o=e.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var r;if(r=o===0){var i=String(e.I).match(Po)[1]||null;!i&&b.self&&b.self.location&&(i=b.self.location.protocol.slice(0,-1)),r=!Kl.test(i?i.toLowerCase():"")}n=r}if(n)z(e,"complete"),z(e,"success");else{e.m=6;try{var s=2<dt(e)?e.g.statusText:""}catch{s=""}e.j=s+" ["+e.da()+"]",Ko(e)}}finally{Jn(e)}}}}function Jn(e,t){if(e.g){Qo(e);const n=e.g,r=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||z(e,"ready");try{n.onreadystatechange=r}catch{}}}function Qo(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(b.clearTimeout(e.A),e.A=null)}g.isActive=function(){return!!this.g};function dt(e){return e.g?e.g.readyState:0}g.da=function(){try{return 2<dt(this)?this.g.status:-1}catch{return-1}},g.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}},g.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),Gl(t)}};function Jo(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case Ho:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}function Jl(e){const t={};e=(e.g&&2<=dt(e)&&e.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<e.length;r++){if(je(e[r]))continue;var n=El(e[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=t[i]||[];t[i]=s,s.push(n)}pl(t,function(r){return r.join(", ")})}g.Ia=function(){return this.m},g.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Xo(e){let t="";return fi(e,function(n,r){t+=r,t+=":",t+=n,t+=`\r
`}),t}function xi(e,t,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=Xo(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):D(e,t,n))}function rn(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Yo(e){this.Ga=0,this.j=[],this.l=new Vn,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=rn("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=rn("baseRetryDelayMs",5e3,e),this.hb=rn("retryDelaySeedMs",1e4,e),this.eb=rn("forwardChannelMaxRetries",2,e),this.xa=rn("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new Vo(e&&e.concurrentRequestLimit),this.Ja=new zl,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}g=Yo.prototype,g.ra=8,g.H=1;function Ui(e){if(Zo(e),e.H==3){var t=e.W++,n=Et(e.I);if(D(n,"SID",e.K),D(n,"RID",t),D(n,"TYPE","terminate"),sn(e,n),t=new Qe(e,e.l,t),t.L=2,t.A=Gn(Et(n)),n=!1,b.navigator&&b.navigator.sendBeacon)try{n=b.navigator.sendBeacon(t.A.toString(),"")}catch{}!n&&b.Image&&(new Image().src=t.A,n=!0),n||(t.g=ca(t.l,null),t.g.ha(t.A)),t.G=Date.now(),Je(t)}oa(e)}function Xn(e){e.g&&(Vi(e),e.g.cancel(),e.g=null)}function Zo(e){Xn(e),e.u&&(b.clearTimeout(e.u),e.u=null),Zn(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&b.clearTimeout(e.m),e.m=null)}function Yn(e){if(!jo(e.i)&&!e.m){e.m=!0;var t=e.Na;ze||po(),qe||(ze(),qe=!0),Ti.add(t,e),e.C=0}}function Xl(e,t){return Bo(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.j=t.F.concat(e.j),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=Ke(W(e.Na,e,t),sa(e,e.C)),e.C++,!0)}g.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const i=new Qe(this,this.l,e);let s=this.s;if(this.U&&(s?(s=io(s),oo(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)t:{for(var t=0,n=0;n<this.j.length;n++){e:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break e}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=n;break t}if(t===4096||n===this.j.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=ea(this,i,t),n=Et(this.I),D(n,"RID",e),D(n,"CVER",22),this.F&&D(n,"X-HTTP-Session-Id",this.F),sn(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(Xo(s)))+"&"+t:this.o&&xi(n,this.o,s)),Li(this.i,i),this.bb&&D(n,"TYPE","init"),this.P?(D(n,"$req",t),D(n,"SID","null"),i.aa=!0,Ri(i,n,null)):Ri(i,n,t),this.H=2}}else this.H==3&&(e?ta(this,e):this.j.length==0||jo(this.i)||ta(this))};function ta(e,t){var n;t?n=t.m:n=e.W++;const r=Et(e.I);D(r,"SID",e.K),D(r,"RID",n),D(r,"AID",e.V),sn(e,r),e.o&&e.s&&xi(r,e.o,e.s),n=new Qe(e,e.l,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=ea(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),Li(e.i,n),Ri(n,r,t)}function sn(e,t){e.na&&fi(e.na,function(n,r){D(t,r,n)}),e.h&&Oo({},function(n,r){D(t,r,n)})}function ea(e,t,n){n=Math.min(e.j.length,n);var r=e.h?W(e.h.Va,e.h,e):null;t:{var i=e.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let c=0;c<n;c++){let h=i[c].g;const u=i[c].map;if(h-=s,0>h)s=Math.max(0,i[c].g-100),a=!1;else try{ql(u,o,"req"+h+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break t}}}return e=e.j.splice(0,n),t.F=e,r}function na(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;ze||po(),qe||(ze(),qe=!0),Ti.add(t,e),e.A=0}}function Fi(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=Ke(W(e.Ma,e),sa(e,e.A)),e.A++,!0)}g.Ma=function(){if(this.u=null,ra(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=Ke(W(this.jb,this),e)}},g.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,tt(10),Xn(this),ra(this))};function Vi(e){e.B!=null&&(b.clearTimeout(e.B),e.B=null)}function ra(e){e.g=new Qe(e,e.l,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=Et(e.wa);D(t,"RID","rpc"),D(t,"SID",e.K),D(t,"AID",e.V),D(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&D(t,"TO",e.qa),D(t,"TYPE","xmlhttp"),sn(e,t),e.o&&e.s&&xi(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.A=Gn(Et(t)),n.u=null,n.S=!0,ko(n,e)}g.ib=function(){this.v!=null&&(this.v=null,Xn(this),Fi(this),tt(19))};function Zn(e){e.v!=null&&(b.clearTimeout(e.v),e.v=null)}function ia(e,t){var n=null;if(e.g==t){Zn(e),Vi(e),e.g=null;var r=2}else if(Pi(e.i,t))n=t.F,$o(e.i,t),r=1;else return;if(e.H!=0){if(t.i)if(r==1){n=t.u?t.u.length:0,t=Date.now()-t.G;var i=e.C;r=jn(),z(r,new Io(r,n)),Yn(e)}else na(e);else if(i=t.s,i==3||i==0&&0<t.ca||!(r==1&&Xl(e,t)||r==2&&Fi(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:ne(e,5);break;case 4:ne(e,10);break;case 3:ne(e,6);break;default:ne(e,2)}}}function sa(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function ne(e,t){if(e.l.info("Error code "+t),t==2){var n=null;e.h&&(n=null);var r=W(e.pb,e);n||(n=new ee("//www.google.com/images/cleardot.gif"),b.location&&b.location.protocol=="http"||qn(n,"https"),Gn(n)),Hl(n.toString(),r)}else tt(2);e.H=0,e.h&&e.h.za(t),oa(e),Zo(e)}g.pb=function(e){e?(this.l.info("Successfully pinged google.com"),tt(2)):(this.l.info("Failed to ping google.com"),tt(1))};function oa(e){if(e.H=0,e.ma=[],e.h){const t=zo(e.i);(t.length!=0||e.j.length!=0)&&(to(e.ma,t),to(e.ma,e.j),e.i.i.length=0,si(e.j),e.j.length=0),e.h.ya()}}function aa(e,t,n){var r=n instanceof ee?Et(n):new ee(n);if(r.g!="")t&&(r.g=t+"."+r.g),Hn(r,r.m);else{var i=b.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new ee(null);r&&qn(s,r),t&&(s.g=t),i&&Hn(s,i),n&&(s.l=n),r=s}return n=e.F,t=e.Da,n&&t&&D(r,n,t),D(r,"VER",e.ra),sn(e,r),r}function ca(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=e.Ha&&!e.va?new P(new Wn({ob:n})):new P(e.va),t.Oa(e.J),t}g.isActive=function(){return!!this.h&&this.h.isActive(this)};function ha(){}g=ha.prototype,g.Ba=function(){},g.Aa=function(){},g.za=function(){},g.ya=function(){},g.isActive=function(){return!0},g.Va=function(){};function tr(){if(fe&&!(10<=Number(ul)))throw Error("Environmental error: no available transport.")}tr.prototype.g=function(e,t){return new st(e,t)};function st(e,t){F.call(this),this.g=new Yo(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!je(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!je(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new me(this)}U(st,F),st.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;tt(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=aa(e,null,e.Y),Yn(e)},st.prototype.close=function(){Ui(this.g)},st.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=Ii(e),e=n);t.j.push(new jl(t.fb++,e)),t.H==3&&Yn(t)},st.prototype.N=function(){this.g.h=null,delete this.j,Ui(this.g),delete this.g,st.$.N.call(this)};function ua(e){Ci.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}U(ua,Ci);function la(){ki.call(this),this.status=1}U(la,ki);function me(e){this.g=e}U(me,ha),me.prototype.Ba=function(){z(this.g,"a")},me.prototype.Aa=function(e){z(this.g,new ua(e))},me.prototype.za=function(e){z(this.g,new la)},me.prototype.ya=function(){z(this.g,"b")};function Yl(){this.blockSize=-1}function ft(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}U(ft,Yl),ft.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function ji(e,t,n){n||(n=0);var r=Array(16);if(typeof t=="string")for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var s=e.g[3],o=t+(s^n&(i^s))+r[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[1]+3905402710&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[5]+1200080426&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[9]+2336552879&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[13]+4254626195&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(i^s&(n^i))+r[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[6]+3225465664&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[10]+38016083&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[14]+3275163606&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[2]+4243563512&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(n^i^s)+r[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[8]+2272392833&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[4]+1272893353&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[0]+3936430074&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[12]+3873151461&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(i^(n|~s))+r[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[7]+1126891415&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[3]+2399980690&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[15]+4264355552&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[11]+3174756917&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+s&4294967295}ft.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,r=this.m,i=this.h,s=0;s<t;){if(i==0)for(;s<=n;)ji(this,e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[i++]=e.charCodeAt(s++),i==this.blockSize){ji(this,r),i=0;break}}else for(;s<t;)if(r[i++]=e[s++],i==this.blockSize){ji(this,r),i=0;break}}this.h=i,this.i+=t},ft.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};function C(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var s=e[i]|0;r&&s==t||(n[i]=s,r=!1)}this.g=n}var Zl={};function Bi(e){return-128<=e&&128>e?ol(e,function(t){return new C([t|0],0>t?-1:0)}):new C([e|0],0>e?-1:0)}function pt(e){if(isNaN(e)||!isFinite(e))return ye;if(0>e)return q(pt(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=$i;return new C(t,0)}function da(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return q(da(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=pt(Math.pow(t,8)),r=ye,i=0;i<e.length;i+=8){var s=Math.min(8,e.length-i),o=parseInt(e.substring(i,i+s),t);8>s?(s=pt(Math.pow(t,s)),r=r.R(s).add(pt(o))):(r=r.R(n),r=r.add(pt(o)))}return r}var $i=4294967296,ye=Bi(0),zi=Bi(1),fa=Bi(16777216);g=C.prototype,g.ea=function(){if(ct(this))return-q(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:$i+r)*t,t*=$i}return e},g.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(It(this))return"0";if(ct(this))return"-"+q(this).toString(e);for(var t=pt(Math.pow(e,6)),n=this,r="";;){var i=rr(n,t).g;n=er(n,i.R(t));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=i,It(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}},g.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function It(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function ct(e){return e.h==-1}g.X=function(e){return e=er(this,e),ct(e)?-1:It(e)?0:1};function q(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new C(n,~e.h).add(zi)}g.abs=function(){return ct(this)?q(this):this},g.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,i=0;i<=t;i++){var s=r+(this.D(i)&65535)+(e.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(e.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new C(n,n[n.length-1]&-2147483648?-1:0)};function er(e,t){return e.add(q(t))}g.R=function(e){if(It(this)||It(e))return ye;if(ct(this))return ct(e)?q(this).R(q(e)):q(q(this).R(e));if(ct(e))return q(this.R(q(e)));if(0>this.X(fa)&&0>e.X(fa))return pt(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<e.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=e.D(i)>>>16,c=e.D(i)&65535;n[2*r+2*i]+=o*c,nr(n,2*r+2*i),n[2*r+2*i+1]+=s*c,nr(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,nr(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,nr(n,2*r+2*i+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new C(n,0)};function nr(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function on(e,t){this.g=e,this.h=t}function rr(e,t){if(It(t))throw Error("division by zero");if(It(e))return new on(ye,ye);if(ct(e))return t=rr(q(e),t),new on(q(t.g),q(t.h));if(ct(t))return t=rr(e,q(t)),new on(q(t.g),t.h);if(30<e.g.length){if(ct(e)||ct(t))throw Error("slowDivide_ only works with positive integers.");for(var n=zi,r=t;0>=r.X(e);)n=pa(n),r=pa(r);var i=ve(n,1),s=ve(r,1);for(r=ve(r,2),n=ve(n,2);!It(r);){var o=s.add(r);0>=o.X(e)&&(i=i.add(n),s=o),r=ve(r,1),n=ve(n,1)}return t=er(e,i.R(t)),new on(i,t)}for(i=ye;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=pt(n),o=s.R(t);ct(o)||0<o.X(e);)n-=r,s=pt(n),o=s.R(t);It(s)&&(s=zi),i=i.add(s),e=er(e,o)}return new on(i,e)}g.gb=function(e){return rr(this,e).h},g.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new C(n,this.h&e.h)},g.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new C(n,this.h|e.h)},g.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new C(n,this.h^e.h)};function pa(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new C(n,e.h)}function ve(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,i=[],s=0;s<r;s++)i[s]=0<t?e.D(s+n)>>>t|e.D(s+n+1)<<32-t:e.D(s+n);return new C(i,e.h)}tr.prototype.createWebChannel=tr.prototype.g,st.prototype.send=st.prototype.u,st.prototype.open=st.prototype.m,st.prototype.close=st.prototype.close,Bn.NO_ERROR=0,Bn.TIMEOUT=8,Bn.HTTP_ERROR=6,To.COMPLETE="complete",So.EventType=We,We.OPEN="a",We.CLOSE="b",We.ERROR="c",We.MESSAGE="d",F.prototype.listen=F.prototype.O,P.prototype.listenOnce=P.prototype.P,P.prototype.getLastError=P.prototype.Sa,P.prototype.getLastErrorCode=P.prototype.Ia,P.prototype.getStatus=P.prototype.da,P.prototype.getResponseJson=P.prototype.Wa,P.prototype.getResponseText=P.prototype.ja,P.prototype.send=P.prototype.ha,P.prototype.setWithCredentials=P.prototype.Oa,ft.prototype.digest=ft.prototype.l,ft.prototype.reset=ft.prototype.reset,ft.prototype.update=ft.prototype.j,C.prototype.add=C.prototype.add,C.prototype.multiply=C.prototype.R,C.prototype.modulo=C.prototype.gb,C.prototype.compare=C.prototype.X,C.prototype.toNumber=C.prototype.ea,C.prototype.toString=C.prototype.toString,C.prototype.getBits=C.prototype.D,C.fromNumber=pt,C.fromString=da;var td=function(){return new tr},ed=function(){return jn()},qi=Bn,nd=To,rd=Zt,ga={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},ir=So,id=P,sd=C;const ma="@firebase/firestore";/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class J{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}J.UNAUTHENTICATED=new J(null),J.GOOGLE_CREDENTIALS=new J("google-credentials-uid"),J.FIRST_PARTY=new J("first-party-uid"),J.MOCK_USER=new J("mock-user");/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/let we="10.11.0";/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const re=new Xr("@firebase/firestore");function an(){return re.logLevel}function m(e,...t){if(re.logLevel<=T.DEBUG){const n=t.map(Hi);re.debug(`Firestore (${we}): ${e}`,...n)}}function Mt(e,...t){if(re.logLevel<=T.ERROR){const n=t.map(Hi);re.error(`Firestore (${we}): ${e}`,...n)}}function sr(e,...t){if(re.logLevel<=T.WARN){const n=t.map(Hi);re.warn(`Firestore (${we}): ${e}`,...n)}}function Hi(e){if(typeof e=="string")return e;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(e)}catch{return e}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function _(e="Unexpected state"){const t=`FIRESTORE (${we}) INTERNAL ASSERTION FAILED: `+e;throw Mt(t),new Error(t)}function V(e,t){e||_()}function R(e,t){return e}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const f={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class y extends Ct{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class xt{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class ya{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class od{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(J.UNAUTHENTICATED))}shutdown(){}}class ad{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class cd{constructor(t){this.t=t,this.currentUser=J.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const i=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let s=new xt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new xt,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=s;t.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{m("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(m("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new xt)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(m("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(V(typeof r.accessToken=="string"),new ya(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return V(t===null||typeof t=="string"),new J(t)}}class hd{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=J.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class ud{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new hd(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(J.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ld{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class dd{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){const r=s=>{s.error!=null&&m("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,m("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>r(s))};const i=s=>{m("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):m("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(V(typeof n.token=="string"),this.R=n.token,new ld(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function fd(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class va{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=fd(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=t.charAt(i[s]%t.length))}return r}}function N(e,t){return e<t?-1:e>t?1:0}function be(e,t,n){return e.length===t.length&&e.every((r,i)=>n(r,t[i]))}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class ${constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new y(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new y(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new y(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new y(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return $.fromMillis(Date.now())}static fromDate(t){return $.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*n));return new $(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?N(this.nanoseconds,t.nanoseconds):N(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class O{constructor(t){this.timestamp=t}static fromTimestamp(t){return new O(t)}static min(){return new O(new $(0,0))}static max(){return new O(new $(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class An{constructor(t,n,r){n===void 0?n=0:n>t.length&&_(),r===void 0?r=t.length-n:r>t.length-n&&_(),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return An.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof An?t.forEach(r=>{n.push(r)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let i=0;i<r;i++){const s=t.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class L extends An{construct(t,n,r){return new L(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new y(f.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new L(n)}static emptyPath(){return new L([])}}const pd=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class G extends An{construct(t,n,r){return new G(t,n,r)}static isValidIdentifier(t){return pd.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),G.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new G(["__name__"])}static fromServerFormat(t){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new y(f.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new y(f.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new y(f.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new y(f.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new G(n)}static emptyPath(){return new G([])}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class E{constructor(t){this.path=t}static fromPath(t){return new E(L.fromString(t))}static fromName(t){return new E(L.fromString(t).popFirst(5))}static empty(){return new E(L.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&L.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return L.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new E(new L(t.slice()))}}function gd(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=O.fromTimestamp(r===1e9?new $(n+1,0):new $(n,r));return new zt(i,E.empty(),t)}function md(e){return new zt(e.readTime,e.key,-1)}class zt{constructor(t,n,r){this.readTime=t,this.documentKey=n,this.largestBatchId=r}static min(){return new zt(O.min(),E.empty(),-1)}static max(){return new zt(O.max(),E.empty(),-1)}}function yd(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=E.comparator(e.documentKey,t.documentKey),n!==0?n:N(e.largestBatchId,t.largestBatchId))}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const vd="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class wd{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/async function wa(e){if(e.code!==f.FAILED_PRECONDITION||e.message!==vd)throw e;m("LocalStore","Unexpectedly lost primary lease")}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class l{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&_(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new l((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(t,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof l?n:l.resolve(n)}catch(n){return l.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):l.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):l.reject(n)}static resolve(t){return new l((n,r)=>{n(t)})}static reject(t){return new l((n,r)=>{r(t)})}static waitFor(t){return new l((n,r)=>{let i=0,s=0,o=!1;t.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},c=>r(c))}),o=!0,s===i&&n()})}static or(t){let n=l.resolve(!1);for(const r of t)n=n.next(i=>i?l.resolve(i):r());return n}static forEach(t,n){const r=[];return t.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(t,n){return new l((r,i)=>{const s=t.length,o=new Array(s);let a=0;for(let c=0;c<s;c++){const h=c;n(t[h]).next(u=>{o[h]=u,++a,a===s&&r(o)},u=>i(u))}})}static doWhile(t,n){return new l((r,i)=>{const s=()=>{t()===!0?n().next(()=>{s()},i):r()};s()})}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class ks{constructor(t,n){this.action=t,this.transaction=n,this.aborted=!1,this.V=new xt,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{n.error?this.V.reject(new cn(t,n.error)):this.V.resolve()},this.transaction.onerror=r=>{const i=Gi(r.target.error);this.V.reject(new cn(t,i))}}static open(t,n,r,i){try{return new ks(n,t.transaction(i,r))}catch(s){throw new cn(n,s)}}get m(){return this.V.promise}abort(t){t&&this.V.reject(t),this.aborted||(m("SimpleDb","Aborting transaction:",t?t.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const t=this.transaction;this.aborted||typeof t.commit!="function"||t.commit()}store(t){const n=this.transaction.objectStore(t);return new Ed(n)}}class ce{constructor(t,n,r){this.name=t,this.version=n,this.p=r,ce.S(M())===12.2&&Mt("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(t){return m("SimpleDb","Removing database:",t),ie(window.indexedDB.deleteDatabase(t)).toPromise()}static D(){if(!$s())return!1;if(ce.C())return!0;const t=M(),n=ce.S(t),r=0<n&&n<10,i=ce.v(t),s=0<i&&i<4.5;return!(t.indexOf("MSIE ")>0||t.indexOf("Trident/")>0||t.indexOf("Edge/")>0||r||s)}static C(){var t;return typeof process<"u"&&((t=process.__PRIVATE_env)===null||t===void 0?void 0:t.F)==="YES"}static M(t,n){return t.store(n)}static S(t){const n=t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static v(t){const n=t.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async O(t){return this.db||(m("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;n(o)},i.onblocked=()=>{r(new cn(t,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new y(f.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new y(f.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new cn(t,o))},i.onupgradeneeded=s=>{m("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.p.N(o,i.transaction,s.oldVersion,this.version).next(()=>{m("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.L&&(this.db.onversionchange=n=>this.L(n)),this.db}B(t){this.L=t,this.db&&(this.db.onversionchange=n=>t(n))}async runTransaction(t,n,r,i){const s=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.O(t);const a=ks.open(this.db,t,s?"readonly":"readwrite",r),c=i(a).next(h=>(a.g(),h)).catch(h=>(a.abort(h),l.reject(h))).toPromise();return c.catch(()=>{}),await a.m,c}catch(a){const c=a,h=c.name!=="FirebaseError"&&o<3;if(m("SimpleDb","Transaction failed with error:",c.message,"Retrying:",h),this.close(),!h)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}}class bd{constructor(t){this.k=t,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(t){this.k=t}done(){this.q=!0}U(t){this.K=t}delete(){return ie(this.k.delete())}}class cn extends y{constructor(t,n){super(f.UNAVAILABLE,`IndexedDB transaction '${t}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function or(e){return e.name==="IndexedDbTransactionError"}class Ed{constructor(t){this.store=t}put(t,n){let r;return n!==void 0?(m("SimpleDb","PUT",this.store.name,t,n),r=this.store.put(n,t)):(m("SimpleDb","PUT",this.store.name,"<auto-key>",t),r=this.store.put(t)),ie(r)}add(t){return m("SimpleDb","ADD",this.store.name,t,t),ie(this.store.add(t))}get(t){return ie(this.store.get(t)).next(n=>(n===void 0&&(n=null),m("SimpleDb","GET",this.store.name,t,n),n))}delete(t){return m("SimpleDb","DELETE",this.store.name,t),ie(this.store.delete(t))}count(){return m("SimpleDb","COUNT",this.store.name),ie(this.store.count())}W(t,n){const r=this.options(t,n),i=r.index?this.store.index(r.index):this.store;if(typeof i.getAll=="function"){const s=i.getAll(r.range);return new l((o,a)=>{s.onerror=c=>{a(c.target.error)},s.onsuccess=c=>{o(c.target.result)}})}{const s=this.cursor(r),o=[];return this.G(s,(a,c)=>{o.push(c)}).next(()=>o)}}j(t,n){const r=this.store.getAll(t,n===null?void 0:n);return new l((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}H(t,n){m("SimpleDb","DELETE ALL",this.store.name);const r=this.options(t,n);r.J=!1;const i=this.cursor(r);return this.G(i,(s,o,a)=>a.delete())}Y(t,n){let r;n?r=t:(r={},n=t);const i=this.cursor(r);return this.G(i,n)}Z(t){const n=this.cursor({});return new l((r,i)=>{n.onerror=s=>{const o=Gi(s.target.error);i(o)},n.onsuccess=s=>{const o=s.target.result;o?t(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}G(t,n){const r=[];return new l((i,s)=>{t.onerror=o=>{s(o.target.error)},t.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const c=new bd(a),h=n(a.primaryKey,a.value,c);if(h instanceof l){const u=h.catch(d=>(c.done(),l.reject(d)));r.push(u)}c.isDone?i():c.$===null?a.continue():a.continue(c.$)}}).next(()=>l.waitFor(r))}options(t,n){let r;return t!==void 0&&(typeof t=="string"?r=t:n=t),{index:r,range:n}}cursor(t){let n="next";if(t.reverse&&(n="prev"),t.index){const r=this.store.index(t.index);return t.J?r.openKeyCursor(t.range,n):r.openCursor(t.range,n)}return this.store.openCursor(t.range,n)}}function ie(e){return new l((t,n)=>{e.onsuccess=r=>{const i=r.target.result;t(i)},e.onerror=r=>{const i=Gi(r.target.error);n(i)}})}let ba=!1;function Gi(e){const t=ce.S(M());if(t>=12.2&&t<13){const n="An internal error was encountered in the Indexed Database server";if(e.message.indexOf(n)>=0){const r=new y("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return ba||(ba=!0,setTimeout(()=>{throw r},0)),r}}return e}/**
* @license
* Copyright 2018 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Ea{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.oe&&this.oe(t),t}}Ea._e=-1;function Ki(e){return e==null}function ar(e){return e===0&&1/e==-1/0}function Id(e){return typeof e=="number"&&Number.isInteger(e)&&!ar(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Ia(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Ee(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Ta(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class rt{constructor(t,n){this.comparator=t,this.root=n||K.EMPTY}insert(t,n){return new rt(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,K.BLACK,null,null))}remove(t){return new rt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,K.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,r)=>(t(n,r),!1))}toString(){const t=[];return this.inorderTraversal((n,r)=>(t.push(`${n}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new cr(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new cr(this.root,t,this.comparator,!1)}getReverseIterator(){return new cr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new cr(this.root,t,this.comparator,!0)}}class cr{constructor(t,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=n?r(t.key,n):1,n&&i&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(s===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class K{constructor(t,n,r,i,s){this.key=t,this.value=n,this.color=r??K.RED,this.left=i??K.EMPTY,this.right=s??K.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,i,s){return new K(t??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let i=this;const s=r(t,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(t,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(t,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return K.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,i=this;if(n(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(t,i.key)===0){if(i.right.isEmpty())return K.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,K.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,K.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw _();const t=this.left.check();if(t!==this.right.check())throw _();return t+(this.isRed()?0:1)}}K.EMPTY=null,K.RED=!0,K.BLACK=!1,K.EMPTY=new class{constructor(){this.size=0}get key(){throw _()}get value(){throw _()}get color(){throw _()}get left(){throw _()}get right(){throw _()}copy(e,t,n,r,i){return this}insert(e,t,n){return new K(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Z{constructor(t){this.comparator=t,this.data=new rt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,r)=>(t(n),!1))}forEachInRange(t,n){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;n(i.key)}}forEachWhile(t,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new _a(this.data.getIterator())}getIteratorFrom(t){return new _a(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(r=>{n=n.add(r)}),n}isEqual(t){if(!(t instanceof Z)||this.size!==t.size)return!1;const n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new Z(this.comparator);return n.data=t,n}}class _a{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class ot{constructor(t){this.fields=t,t.sort(G.comparator)}static empty(){return new ot([])}unionWith(t){let n=new Z(G.comparator);for(const r of this.fields)n=n.add(r);for(const r of t)n=n.add(r);return new ot(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return be(this.fields,t.fields,(n,r)=>n.isEqual(r))}}/**
* @license
* Copyright 2023 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Td extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class kt{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Td("Invalid base64 string: "+i):i}}(t);return new kt(n)}static fromUint8Array(t){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(t);return new kt(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return N(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}kt.EMPTY_BYTE_STRING=new kt("");const _d=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function se(e){if(V(!!e),typeof e=="string"){let t=0;const n=_d.exec(e);if(V(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:H(e.seconds),nanos:H(e.nanos)}}function H(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function hn(e){return typeof e=="string"?kt.fromBase64String(e):kt.fromUint8Array(e)}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Wi(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Sa(e){const t=e.mapValue.fields.__previous_value__;return Wi(t)?Sa(t):t}function hr(e){const t=se(e.mapValue.fields.__local_write_time__.timestampValue);return new $(t.seconds,t.nanos)}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Sd{constructor(t,n,r,i,s,o,a,c,h){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=h}}class qr{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new qr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof qr&&t.projectId===this.projectId&&t.database===this.database}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const ur={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ie(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Wi(e)?4:Ad(e)?9007199254740991:10:_()}function gt(e,t){if(e===t)return!0;const n=Ie(e);if(n!==Ie(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return hr(e).isEqual(hr(t));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=se(r.timestampValue),o=se(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(r,i){return hn(r.bytesValue).isEqual(hn(i.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(r,i){return H(r.geoPointValue.latitude)===H(i.geoPointValue.latitude)&&H(r.geoPointValue.longitude)===H(i.geoPointValue.longitude)}(e,t);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return H(r.integerValue)===H(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=H(r.doubleValue),o=H(i.doubleValue);return s===o?ar(s)===ar(o):isNaN(s)&&isNaN(o)}return!1}(e,t);case 9:return be(e.arrayValue.values||[],t.arrayValue.values||[],gt);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(Ia(s)!==Ia(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!gt(s[a],o[a])))return!1;return!0}(e,t);default:return _()}}function un(e,t){return(e.values||[]).find(n=>gt(n,t))!==void 0}function Te(e,t){if(e===t)return 0;const n=Ie(e),r=Ie(t);if(n!==r)return N(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return N(e.booleanValue,t.booleanValue);case 2:return function(i,s){const o=H(i.integerValue||i.doubleValue),a=H(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(e,t);case 3:return Aa(e.timestampValue,t.timestampValue);case 4:return Aa(hr(e),hr(t));case 5:return N(e.stringValue,t.stringValue);case 6:return function(i,s){const o=hn(i),a=hn(s);return o.compareTo(a)}(e.bytesValue,t.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let c=0;c<o.length&&c<a.length;c++){const h=N(o[c],a[c]);if(h!==0)return h}return N(o.length,a.length)}(e.referenceValue,t.referenceValue);case 8:return function(i,s){const o=N(H(i.latitude),H(s.latitude));return o!==0?o:N(H(i.longitude),H(s.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let c=0;c<o.length&&c<a.length;++c){const h=Te(o[c],a[c]);if(h)return h}return N(o.length,a.length)}(e.arrayValue,t.arrayValue);case 10:return function(i,s){if(i===ur.mapValue&&s===ur.mapValue)return 0;if(i===ur.mapValue)return 1;if(s===ur.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),c=s.fields||{},h=Object.keys(c);a.sort(),h.sort();for(let u=0;u<a.length&&u<h.length;++u){const d=N(a[u],h[u]);if(d!==0)return d;const p=Te(o[a[u]],c[h[u]]);if(p!==0)return p}return N(a.length,h.length)}(e.mapValue,t.mapValue);default:throw _()}}function Aa(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return N(e,t);const n=se(e),r=se(t),i=N(n.seconds,r.seconds);return i!==0?i:N(n.nanos,r.nanos)}function _e(e){return Qi(e)}function Qi(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(t){const n=se(t);return`time(${n.seconds},${n.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(t){return hn(t).toBase64()}(e.bytesValue):"referenceValue"in e?function(t){return E.fromName(t).toString()}(e.referenceValue):"geoPointValue"in e?function(t){return`geo(${t.latitude},${t.longitude})`}(e.geoPointValue):"arrayValue"in e?function(t){let n="[",r=!0;for(const i of t.values||[])r?r=!1:n+=",",n+=Qi(i);return n+"]"}(e.arrayValue):"mapValue"in e?function(t){const n=Object.keys(t.fields||{}).sort();let r="{",i=!0;for(const s of n)i?i=!1:r+=",",r+=`${s}:${Qi(t.fields[s])}`;return r+"}"}(e.mapValue):_()}function Ji(e){return!!e&&"integerValue"in e}function Xi(e){return!!e&&"arrayValue"in e}function lr(e){return!!e&&"mapValue"in e}function ln(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Ee(e.mapValue.fields,(n,r)=>t.mapValue.fields[n]=ln(r)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=ln(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Ad(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class at{constructor(t){this.value=t}static empty(){return new at({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!lr(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=ln(n)}setAll(t){let n=G.emptyPath(),r={},i=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=ln(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(t){const n=this.field(t.popLast());lr(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return gt(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=n.mapValue.fields[t.get(r)];lr(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(t,n,r){Ee(n,(i,s)=>t[i]=s);for(const i of r)delete t[i]}clone(){return new at(ln(this.value))}}function Ca(e){const t=[];return Ee(e.fields,(n,r)=>{const i=new G([n]);if(lr(r)){const s=Ca(r.mapValue).fields;if(s.length===0)t.push(i);else for(const o of s)t.push(i.child(o))}else t.push(i)}),new ot(t)}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class ht{constructor(t,n,r,i,s,o,a){this.key=t,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(t){return new ht(t,0,O.min(),O.min(),O.min(),at.empty(),0)}static newFoundDocument(t,n,r,i){return new ht(t,1,n,O.min(),r,i,0)}static newNoDocument(t,n){return new ht(t,2,n,O.min(),O.min(),at.empty(),0)}static newUnknownDocument(t,n){return new ht(t,3,n,O.min(),O.min(),at.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(O.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=at.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=at.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=O.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof ht&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new ht(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class dr{constructor(t,n){this.position=t,this.inclusive=n}}function ka(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(s.field.isKeyField()?r=E.comparator(E.fromName(o.referenceValue),n.key):r=Te(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Na(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!gt(e.position[n],t.position[n]))return!1;return!0}/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class fr{constructor(t,n="asc"){this.field=t,this.dir=n}}function Cd(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Da{}class B extends Da{constructor(t,n,r){super(),this.field=t,this.op=n,this.value=r}static create(t,n,r){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,r):new Nd(t,n,r):n==="array-contains"?new Od(t,r):n==="in"?new Pd(t,r):n==="not-in"?new Ld(t,r):n==="array-contains-any"?new Md(t,r):new B(t,n,r)}static createKeyFieldInFilter(t,n,r){return n==="in"?new Dd(t,r):new Rd(t,r)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Te(n,this.value)):n!==null&&Ie(this.value)===Ie(n)&&this.matchesComparison(Te(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return _()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Bt extends Da{constructor(t,n){super(),this.filters=t,this.op=n,this.ue=null}static create(t,n){return new Bt(t,n)}matches(t){return Ra(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function Ra(e){return e.op==="and"}function Oa(e){return kd(e)&&Ra(e)}function kd(e){for(const t of e.filters)if(t instanceof Bt)return!1;return!0}function Yi(e){if(e instanceof B)return e.field.canonicalString()+e.op.toString()+_e(e.value);if(Oa(e))return e.filters.map(t=>Yi(t)).join(",");{const t=e.filters.map(n=>Yi(n)).join(",");return`${e.op}(${t})`}}function Pa(e,t){return e instanceof B?function(n,r){return r instanceof B&&n.op===r.op&&n.field.isEqual(r.field)&&gt(n.value,r.value)}(e,t):e instanceof Bt?function(n,r){return r instanceof Bt&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((i,s,o)=>i&&Pa(s,r.filters[o]),!0):!1}(e,t):void _()}function La(e){return e instanceof B?function(t){return`${t.field.canonicalString()} ${t.op} ${_e(t.value)}`}(e):e instanceof Bt?function(t){return t.op.toString()+" {"+t.getFilters().map(La).join(" ,")+"}"}(e):"Filter"}class Nd extends B{constructor(t,n,r){super(t,n,r),this.key=E.fromName(r.referenceValue)}matches(t){const n=E.comparator(t.key,this.key);return this.matchesComparison(n)}}class Dd extends B{constructor(t,n){super(t,"in",n),this.keys=Ma("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class Rd extends B{constructor(t,n){super(t,"not-in",n),this.keys=Ma("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function Ma(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>E.fromName(r.referenceValue))}class Od extends B{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return Xi(n)&&un(n.arrayValue,this.value)}}class Pd extends B{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&un(this.value.arrayValue,n)}}class Ld extends B{constructor(t,n){super(t,"not-in",n)}matches(t){if(un(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!un(this.value.arrayValue,n)}}class Md extends B{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!Xi(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>un(this.value.arrayValue,r))}}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class xd{constructor(t,n=null,r=[],i=[],s=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ce=null}}function xa(e,t=null,n=[],r=[],i=null,s=null,o=null){return new xd(e,t,n,r,i,s,o)}function Zi(e){const t=R(e);if(t.ce===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(r=>Yi(r)).join(","),n+="|ob:",n+=t.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Ki(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>_e(r)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>_e(r)).join(",")),t.ce=n}return t.ce}function ts(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Cd(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!Pa(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Na(e.startAt,t.startAt)&&Na(e.endAt,t.endAt)}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class pr{constructor(t,n=null,r=[],i=[],s=null,o="F",a=null,c=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=c,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function Ud(e,t,n,r,i,s,o,a){return new pr(e,t,n,r,i,s,o,a)}function Fd(e){return new pr(e)}function Ua(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function Vd(e){return e.collectionGroup!==null}function dn(e){const t=R(e);if(t.le===null){t.le=[];const n=new Set;for(const i of t.explicitOrderBy)t.le.push(i),n.add(i.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(i){let s=new Z(G.comparator);return i.filters.forEach(o=>{o.getFlattenedFilters().forEach(a=>{a.isInequality()&&(s=s.add(a.field))})}),s})(t).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||t.le.push(new fr(i,r))}),n.has(G.keyField().canonicalString())||t.le.push(new fr(G.keyField(),r))}return t.le}function oe(e){const t=R(e);return t.he||(t.he=jd(t,dn(e))),t.he}function jd(e,t){if(e.limitType==="F")return xa(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new fr(i.field,s)});const n=e.endAt?new dr(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new dr(e.startAt.position,e.startAt.inclusive):null;return xa(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}function es(e,t,n){return new pr(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Fa(e,t){return ts(oe(e),oe(t))&&e.limitType===t.limitType}function Va(e){return`${Zi(oe(e))}|lt:${e.limitType}`}function fn(e){return`Query(target=${function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(r=>La(r)).join(", ")}]`),Ki(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>_e(r)).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>_e(r)).join(",")),`Target(${n})`}(oe(e))}; limitType=${e.limitType})`}function ns(e,t){return t.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):E.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(e,t)&&function(n,r){for(const i of dn(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(e,t)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(e,t)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=ka(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,dn(n),r)||n.endAt&&!function(i,s,o){const a=ka(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,dn(n),r))}(e,t)}function Bd(e){return(t,n)=>{let r=!1;for(const i of dn(e)){const s=$d(i,t,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function $d(e,t,n){const r=e.field.isKeyField()?E.comparator(t.key,n.key):function(i,s,o){const a=s.data.field(i),c=o.data.field(i);return a!==null&&c!==null?Te(a,c):_()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return _()}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Se{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,t))return s}}has(t){return this.get(t)!==void 0}set(t,n){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return void(i[s]=[t,n]);i.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){Ee(this.inner,(n,r)=>{for(const[i,s]of r)t(i,s)})}isEmpty(){return Ta(this.inner)}size(){return this.innerSize}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const zd=new rt(E.comparator);function gr(){return zd}const ja=new rt(E.comparator);function mr(...e){let t=ja;for(const n of e)t=t.insert(n.key,n);return t}function Ba(e){let t=ja;return e.forEach((n,r)=>t=t.insert(n,r.overlayedDocument)),t}function ae(){return pn()}function $a(){return pn()}function pn(){return new Se(e=>e.toString(),(e,t)=>e.isEqual(t))}const qd=new rt(E.comparator),Hd=new Z(E.comparator);function X(...e){let t=Hd;for(const n of e)t=t.add(n);return t}const Gd=new Z(N);function Kd(){return Gd}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function za(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ar(t)?"-0":t}}function qa(e){return{integerValue:""+e}}function Wd(e,t){return Id(t)?qa(t):za(e,t)}/**
* @license
* Copyright 2018 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class yr{constructor(){this._=void 0}}function Qd(e,t,n){return e instanceof vr?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&Wi(i)&&(i=Sa(i)),i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,t):e instanceof gn?Ga(e,t):e instanceof mn?Ka(e,t):function(r,i){const s=Ha(r,i),o=Wa(s)+Wa(r.Ie);return Ji(s)&&Ji(r.Ie)?qa(o):za(r.serializer,o)}(e,t)}function Jd(e,t,n){return e instanceof gn?Ga(e,t):e instanceof mn?Ka(e,t):n}function Ha(e,t){return e instanceof wr?function(n){return Ji(n)||function(r){return!!r&&"doubleValue"in r}(n)}(t)?t:{integerValue:0}:null}class vr extends yr{}class gn extends yr{constructor(t){super(),this.elements=t}}function Ga(e,t){const n=Qa(t);for(const r of e.elements)n.some(i=>gt(i,r))||n.push(r);return{arrayValue:{values:n}}}class mn extends yr{constructor(t){super(),this.elements=t}}function Ka(e,t){let n=Qa(t);for(const r of e.elements)n=n.filter(i=>!gt(i,r));return{arrayValue:{values:n}}}class wr extends yr{constructor(t,n){super(),this.serializer=t,this.Ie=n}}function Wa(e){return H(e.integerValue||e.doubleValue)}function Qa(e){return Xi(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function Xd(e,t){return e.field.isEqual(t.field)&&function(n,r){return n instanceof gn&&r instanceof gn||n instanceof mn&&r instanceof mn?be(n.elements,r.elements,gt):n instanceof wr&&r instanceof wr?gt(n.Ie,r.Ie):n instanceof vr&&r instanceof vr}(e.transform,t.transform)}class Yd{constructor(t,n){this.version=t,this.transformResults=n}}class wt{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new wt}static exists(t){return new wt(void 0,t)}static updateTime(t){return new wt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function br(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class Er{}function Ja(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new ec(e.key,wt.none()):new vn(e.key,e.data,wt.none());{const n=e.data,r=at.empty();let i=new Z(G.comparator);for(let s of t.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Ut(e.key,r,new ot(i.toArray()),wt.none())}}function Zd(e,t,n){e instanceof vn?function(r,i,s){const o=r.value.clone(),a=Za(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(e,t,n):e instanceof Ut?function(r,i,s){if(!br(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=Za(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(Ya(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(e,t,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,t,n)}function yn(e,t,n,r){return e instanceof vn?function(i,s,o,a){if(!br(i.precondition,s))return o;const c=i.value.clone(),h=tc(i.fieldTransforms,a,s);return c.setAll(h),s.convertToFoundDocument(s.version,c).setHasLocalMutations(),null}(e,t,n,r):e instanceof Ut?function(i,s,o,a){if(!br(i.precondition,s))return o;const c=tc(i.fieldTransforms,a,s),h=s.data;return h.setAll(Ya(i)),h.setAll(c),s.convertToFoundDocument(s.version,h).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(u=>u.field))}(e,t,n,r):function(i,s,o){return br(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(e,t,n)}function tf(e,t){let n=null;for(const r of e.fieldTransforms){const i=t.data.field(r.field),s=Ha(r.transform,i||null);s!=null&&(n===null&&(n=at.empty()),n.set(r.field,s))}return n||null}function Xa(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&be(n,r,(i,s)=>Xd(i,s))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class vn extends Er{constructor(t,n,r,i=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ut extends Er{constructor(t,n,r,i,s=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Ya(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function Za(e,t,n){const r=new Map;V(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,Jd(o,a,n[i]))}return r}function tc(e,t,n){const r=new Map;for(const i of e){const s=i.transform,o=n.data.field(i.field);r.set(i.field,Qd(s,o,t))}return r}class ec extends Er{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ef extends Er{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class nf{constructor(t,n,r,i){this.batchId=t,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(t.key)&&Zd(s,t,r[i])}}applyToLocalView(t,n){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(n=yn(r,t,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(n=yn(r,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const r=$a();return this.mutations.forEach(i=>{const s=t.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const c=Ja(o,a);c!==null&&r.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(O.min())}),r}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),X())}isEqual(t){return this.batchId===t.batchId&&be(this.mutations,t.mutations,(n,r)=>Xa(n,r))&&be(this.baseMutations,t.baseMutations,(n,r)=>Xa(n,r))}}class Ns{constructor(t,n,r,i){this.batch=t,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(t,n,r){V(t.mutations.length===r.length);let i=function(){return qd}();const s=t.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Ns(t,n,r,i)}}/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class rf{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var x,S;function sf(e){switch(e){default:return _();case f.CANCELLED:case f.UNKNOWN:case f.DEADLINE_EXCEEDED:case f.RESOURCE_EXHAUSTED:case f.INTERNAL:case f.UNAVAILABLE:case f.UNAUTHENTICATED:return!1;case f.INVALID_ARGUMENT:case f.NOT_FOUND:case f.ALREADY_EXISTS:case f.PERMISSION_DENIED:case f.FAILED_PRECONDITION:case f.ABORTED:case f.OUT_OF_RANGE:case f.UNIMPLEMENTED:case f.DATA_LOSS:return!0}}function of(e){if(e===void 0)return Mt("GRPC error has no .code"),f.UNKNOWN;switch(e){case x.OK:return f.OK;case x.CANCELLED:return f.CANCELLED;case x.UNKNOWN:return f.UNKNOWN;case x.DEADLINE_EXCEEDED:return f.DEADLINE_EXCEEDED;case x.RESOURCE_EXHAUSTED:return f.RESOURCE_EXHAUSTED;case x.INTERNAL:return f.INTERNAL;case x.UNAVAILABLE:return f.UNAVAILABLE;case x.UNAUTHENTICATED:return f.UNAUTHENTICATED;case x.INVALID_ARGUMENT:return f.INVALID_ARGUMENT;case x.NOT_FOUND:return f.NOT_FOUND;case x.ALREADY_EXISTS:return f.ALREADY_EXISTS;case x.PERMISSION_DENIED:return f.PERMISSION_DENIED;case x.FAILED_PRECONDITION:return f.FAILED_PRECONDITION;case x.ABORTED:return f.ABORTED;case x.OUT_OF_RANGE:return f.OUT_OF_RANGE;case x.UNIMPLEMENTED:return f.UNIMPLEMENTED;case x.DATA_LOSS:return f.DATA_LOSS;default:return _()}}(S=x||(x={}))[S.OK=0]="OK",S[S.CANCELLED=1]="CANCELLED",S[S.UNKNOWN=2]="UNKNOWN",S[S.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",S[S.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",S[S.NOT_FOUND=5]="NOT_FOUND",S[S.ALREADY_EXISTS=6]="ALREADY_EXISTS",S[S.PERMISSION_DENIED=7]="PERMISSION_DENIED",S[S.UNAUTHENTICATED=16]="UNAUTHENTICATED",S[S.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",S[S.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",S[S.ABORTED=10]="ABORTED",S[S.OUT_OF_RANGE=11]="OUT_OF_RANGE",S[S.UNIMPLEMENTED=12]="UNIMPLEMENTED",S[S.INTERNAL=13]="INTERNAL",S[S.UNAVAILABLE=14]="UNAVAILABLE",S[S.DATA_LOSS=15]="DATA_LOSS";/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/new sd([4294967295,4294967295],0);class af{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function rs(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function cf(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function hf(e,t){return rs(e,t.toTimestamp())}function Ae(e){return V(!!e),O.fromTimestamp(function(t){const n=se(t);return new $(n.seconds,n.nanos)}(e))}function nc(e,t){return is(e,t).canonicalString()}function is(e,t){const n=function(r){return new L(["projects",r.projectId,"databases",r.database])}(e).child("documents");return t===void 0?n:n.child(t)}function uf(e){const t=L.fromString(e);return V(vf(t)),t}function ss(e,t){return nc(e.databaseId,t.path)}function lf(e){const t=uf(e);return t.length===4?L.emptyPath():ff(t)}function df(e){return new L(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function ff(e){return V(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function rc(e,t,n){return{name:ss(e,t),fields:n.value.mapValue.fields}}function pf(e,t){let n;if(t instanceof vn)n={update:rc(e,t.key,t.value)};else if(t instanceof ec)n={delete:ss(e,t.key)};else if(t instanceof Ut)n={update:rc(e,t.key,t.data),updateMask:yf(t.fieldMask)};else{if(!(t instanceof ef))return _();n={verify:ss(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof vr)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof gn)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof mn)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof wr)return{fieldPath:s.field.canonicalString(),increment:o.Ie};throw _()}(0,r))),t.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:hf(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:_()}(e,t.precondition)),n}function gf(e,t){return e&&e.length>0?(V(t!==void 0),e.map(n=>function(r,i){let s=r.updateTime?Ae(r.updateTime):Ae(i);return s.isEqual(O.min())&&(s=Ae(i)),new Yd(s,r.transformResults||[])}(n,t))):[]}function mf(e){let t=lf(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){V(r===1);const u=n.from[0];u.allDescendants?i=u.collectionId:t=t.child(u.collectionId)}let s=[];n.where&&(s=function(u){const d=ic(u);return d instanceof Bt&&Oa(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(u){return u.map(d=>function(p){return new fr(Ce(p.field),function(v){switch(v){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(p.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(u){let d;return d=typeof u=="object"?u.value:u,Ki(d)?null:d}(n.limit));let c=null;n.startAt&&(c=function(u){const d=!!u.before,p=u.values||[];return new dr(p,d)}(n.startAt));let h=null;return n.endAt&&(h=function(u){const d=!u.before,p=u.values||[];return new dr(p,d)}(n.endAt)),Ud(t,i,o,s,a,"F",c,h)}function ic(e){return e.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=Ce(t.unaryFilter.field);return B.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=Ce(t.unaryFilter.field);return B.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ce(t.unaryFilter.field);return B.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Ce(t.unaryFilter.field);return B.create(s,"!=",{nullValue:"NULL_VALUE"});default:return _()}}(e):e.fieldFilter!==void 0?function(t){return B.create(Ce(t.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return _()}}(t.fieldFilter.op),t.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(t){return Bt.create(t.compositeFilter.filters.map(n=>ic(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return _()}}(t.compositeFilter.op))}(e):_()}function Ce(e){return G.fromServerFormat(e.fieldPath)}function yf(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function vf(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class wf{constructor(t){this.ct=t}}function bf(e){const t=mf({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?es(t,t.limit,"L"):t}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Ef{constructor(){this._n=new If}addToCollectionParentIndex(t,n){return this._n.add(n),l.resolve()}getCollectionParents(t,n){return l.resolve(this._n.getEntries(n))}addFieldIndex(t,n){return l.resolve()}deleteFieldIndex(t,n){return l.resolve()}deleteAllFieldIndexes(t){return l.resolve()}createTargetIndexes(t,n){return l.resolve()}getDocumentsMatchingTarget(t,n){return l.resolve(null)}getIndexType(t,n){return l.resolve(0)}getFieldIndexes(t,n){return l.resolve([])}getNextCollectionGroupToUpdate(t){return l.resolve(null)}getMinOffset(t,n){return l.resolve(zt.min())}getMinOffsetFromCollectionGroup(t,n){return l.resolve(zt.min())}updateCollectionGroup(t,n,r){return l.resolve()}updateIndexEntries(t,n){return l.resolve()}}class If{constructor(){this.index={}}add(t){const n=t.lastSegment(),r=t.popLast(),i=this.index[n]||new Z(L.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(t){const n=t.lastSegment(),r=t.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(t){return(this.index[t]||new Z(L.comparator)).toArray()}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Re{constructor(t){this.On=t}next(){return this.On+=2,this.On}static Nn(){return new Re(0)}static Ln(){return new Re(-1)}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Tf{constructor(){this.changes=new Se(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,ht.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?l.resolve(r):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*//**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class _f{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Sf{constructor(t,n,r,i){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,n){let r=null;return this.documentOverlayCache.getOverlay(t,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,n))).next(i=>(r!==null&&yn(r.mutation,i,ot.empty(),$.now()),i))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.getLocalViewOfDocuments(t,r,X()).next(()=>r))}getLocalViewOfDocuments(t,n,r=X()){const i=ae();return this.populateOverlays(t,i,n).next(()=>this.computeViews(t,n,i,r).next(s=>{let o=mr();return s.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const r=ae();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,X()))}populateOverlays(t,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(t,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,r,i){let s=gr();const o=pn(),a=function(){return pn()}();return n.forEach((c,h)=>{const u=r.get(h.key);i.has(h.key)&&(u===void 0||u.mutation instanceof Ut)?s=s.insert(h.key,h):u!==void 0?(o.set(h.key,u.mutation.getFieldMask()),yn(u.mutation,h,u.mutation.getFieldMask(),$.now())):o.set(h.key,ot.empty())}),this.recalculateAndSaveOverlays(t,s).next(c=>(c.forEach((h,u)=>o.set(h,u)),n.forEach((h,u)=>{var d;return a.set(h,new _f(u,(d=o.get(h))!==null&&d!==void 0?d:null))}),a))}recalculateAndSaveOverlays(t,n){const r=pn();let i=new rt((o,a)=>o-a),s=X();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const h=n.get(c);if(h===null)return;let u=r.get(c)||ot.empty();u=a.applyToLocalView(h,u),r.set(c,u);const d=(i.get(a.batchId)||X()).add(c);i=i.insert(a.batchId,d)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),h=c.key,u=c.value,d=$a();u.forEach(p=>{if(!s.has(p)){const v=Ja(n.get(p),r.get(p));v!==null&&d.set(p,v),s=s.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(t,h,d))}return l.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,n,r,i){return function(s){return E.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):Vd(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,r,i):this.getDocumentsMatchingCollectionQuery(t,n,r,i)}getNextDocuments(t,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,r.largestBatchId,i-s.size):l.resolve(ae());let a=-1,c=s;return o.next(h=>l.forEach(h,(u,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),s.get(u)?l.resolve():this.remoteDocumentCache.getEntry(t,u).next(p=>{c=c.insert(u,p)}))).next(()=>this.populateOverlays(t,h,s)).next(()=>this.computeViews(t,c,h,X())).next(u=>({batchId:a,changes:Ba(u)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new E(n)).next(r=>{let i=mr();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,n,r,i){const s=n.collectionGroup;let o=mr();return this.indexManager.getCollectionParents(t,s).next(a=>l.forEach(a,c=>{const h=function(u,d){return new pr(d,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,c.child(s));return this.getDocumentsMatchingCollectionQuery(t,h,r,i).next(u=>{u.forEach((d,p)=>{o=o.insert(d,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(t,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,r,s,i))).next(o=>{s.forEach((c,h)=>{const u=h.getKey();o.get(u)===null&&(o=o.insert(u,ht.newInvalidDocument(u)))});let a=mr();return o.forEach((c,h)=>{const u=s.get(c);u!==void 0&&yn(u.mutation,h,ot.empty(),$.now()),ns(n,h)&&(a=a.insert(c,h))}),a})}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Af{constructor(t){this.serializer=t,this.cr=new Map,this.lr=new Map}getBundleMetadata(t,n){return l.resolve(this.cr.get(n))}saveBundleMetadata(t,n){return this.cr.set(n.id,function(r){return{id:r.id,version:r.version,createTime:Ae(r.createTime)}}(n)),l.resolve()}getNamedQuery(t,n){return l.resolve(this.lr.get(n))}saveNamedQuery(t,n){return this.lr.set(n.name,function(r){return{name:r.name,query:bf(r.bundledQuery),readTime:Ae(r.readTime)}}(n)),l.resolve()}}/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Cf{constructor(){this.overlays=new rt(E.comparator),this.hr=new Map}getOverlay(t,n){return l.resolve(this.overlays.get(n))}getOverlays(t,n){const r=ae();return l.forEach(n,i=>this.getOverlay(t,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(t,n,r){return r.forEach((i,s)=>{this.ht(t,n,s)}),l.resolve()}removeOverlaysForBatchId(t,n,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(r)),l.resolve()}getOverlaysForCollection(t,n,r){const i=ae(),s=n.length+1,o=new E(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,h=c.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===s&&c.largestBatchId>r&&i.set(c.getKey(),c)}return l.resolve(i)}getOverlaysForCollectionGroup(t,n,r,i){let s=new rt((h,u)=>h-u);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let u=s.get(h.largestBatchId);u===null&&(u=ae(),s=s.insert(h.largestBatchId,u)),u.set(h.getKey(),h)}}const a=ae(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((h,u)=>a.set(h,u)),!(a.size()>=i)););return l.resolve(a)}ht(t,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new rf(n,r));let s=this.hr.get(n);s===void 0&&(s=X(),this.hr.set(n,s)),this.hr.set(n,s.add(r.key))}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class os{constructor(){this.Pr=new Z(j.Ir),this.Tr=new Z(j.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(t,n){const r=new j(t,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(t,n){t.forEach(r=>this.addReference(r,n))}removeReference(t,n){this.Ar(new j(t,n))}Rr(t,n){t.forEach(r=>this.removeReference(r,n))}Vr(t){const n=new E(new L([])),r=new j(n,t),i=new j(n,t+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Ar(o),s.push(o.key)}),s}mr(){this.Pr.forEach(t=>this.Ar(t))}Ar(t){this.Pr=this.Pr.delete(t),this.Tr=this.Tr.delete(t)}gr(t){const n=new E(new L([])),r=new j(n,t),i=new j(n,t+1);let s=X();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(t){const n=new j(t,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&t.isEqual(r.key)}}class j{constructor(t,n){this.key=t,this.pr=n}static Ir(t,n){return E.comparator(t.key,n.key)||N(t.pr,n.pr)}static Er(t,n){return N(t.pr,n.pr)||E.comparator(t.key,n.key)}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class kf{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new Z(j.Ir)}checkEmpty(t){return l.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,r,i){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new nf(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.wr=this.wr.add(new j(a.key,s)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return l.resolve(o)}lookupMutationBatch(t,n){return l.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(t,n){const r=n+1,i=this.br(r),s=i<0?0:i;return l.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return l.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(t){return l.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const r=new j(n,0),i=new j(n,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([r,i],o=>{const a=this.Sr(o.pr);s.push(a)}),l.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,n){let r=new Z(N);return n.forEach(i=>{const s=new j(i,0),o=new j(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,o],a=>{r=r.add(a.pr)})}),l.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(t,n){const r=n.path,i=r.length+1;let s=r;E.isDocumentKey(s)||(s=s.child(""));const o=new j(new E(s),0);let a=new Z(N);return this.wr.forEachWhile(c=>{const h=c.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(a=a.add(c.pr)),!0)},o),l.resolve(this.Dr(a))}Dr(t){const n=[];return t.forEach(r=>{const i=this.Sr(r);i!==null&&n.push(i)}),n}removeMutationBatch(t,n){V(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return l.forEach(n.mutations,i=>{const s=new j(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.wr=r})}Mn(t){}containsKey(t,n){const r=new j(n,0),i=this.wr.firstAfterOrEqual(r);return l.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,l.resolve()}Cr(t,n){return this.br(t)}br(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Sr(t){const n=this.br(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Nf{constructor(t){this.vr=t,this.docs=function(){return new rt(E.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const r=this.docs.get(n);return l.resolve(r?r.document.mutableCopy():ht.newInvalidDocument(n))}getEntries(t,n){let r=gr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():ht.newInvalidDocument(i))}),l.resolve(r)}getDocumentsMatchingQuery(t,n,r,i){let s=gr();const o=n.path,a=new E(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:h,value:{document:u}}=c.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||yd(md(u),r)<=0||(i.has(u.key)||ns(n,u))&&(s=s.insert(u.key,u.mutableCopy()))}return l.resolve(s)}getAllFromCollectionGroup(t,n,r,i){_()}Fr(t,n){return l.forEach(this.docs,r=>n(r))}newChangeBuffer(t){return new Df(this)}getSize(t){return l.resolve(this.size)}}class Df extends Tf{constructor(t){super(),this.ar=t}applyChanges(t){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ar.addEntry(t,i)):this.ar.removeEntry(r)}),l.waitFor(n)}getFromCache(t,n){return this.ar.getEntry(t,n)}getAllFromCache(t,n){return this.ar.getEntries(t,n)}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Rf{constructor(t){this.persistence=t,this.Mr=new Se(n=>Zi(n),ts),this.lastRemoteSnapshotVersion=O.min(),this.highestTargetId=0,this.Or=0,this.Nr=new os,this.targetCount=0,this.Lr=Re.Nn()}forEachTarget(t,n){return this.Mr.forEach((r,i)=>n(i)),l.resolve()}getLastRemoteSnapshotVersion(t){return l.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return l.resolve(this.Or)}allocateTargetId(t){return this.highestTargetId=this.Lr.next(),l.resolve(this.highestTargetId)}setTargetsMetadata(t,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),l.resolve()}qn(t){this.Mr.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Lr=new Re(n),this.highestTargetId=n),t.sequenceNumber>this.Or&&(this.Or=t.sequenceNumber)}addTargetData(t,n){return this.qn(n),this.targetCount+=1,l.resolve()}updateTargetData(t,n){return this.qn(n),l.resolve()}removeTargetData(t,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,l.resolve()}removeTargets(t,n,r){let i=0;const s=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),s.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),l.waitFor(s).next(()=>i)}getTargetCount(t){return l.resolve(this.targetCount)}getTargetData(t,n){const r=this.Mr.get(n)||null;return l.resolve(r)}addMatchingKeys(t,n,r){return this.Nr.dr(n,r),l.resolve()}removeMatchingKeys(t,n,r){this.Nr.Rr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(t,o))}),l.waitFor(s)}removeMatchingKeysForTargetId(t,n){return this.Nr.Vr(n),l.resolve()}getMatchingKeysForTargetId(t,n){const r=this.Nr.gr(n);return l.resolve(r)}containsKey(t,n){return l.resolve(this.Nr.containsKey(n))}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Of{constructor(t,n){this.Br={},this.overlays={},this.kr=new Ea(0),this.qr=!1,this.qr=!0,this.referenceDelegate=t(this),this.Qr=new Rf(this),this.indexManager=new Ef,this.remoteDocumentCache=function(r){return new Nf(r)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new wf(n),this.$r=new Af(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new Cf,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let r=this.Br[t.toKey()];return r||(r=new kf(n,this.referenceDelegate),this.Br[t.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(t,n,r){m("MemoryPersistence","Starting transaction:",t);const i=new Pf(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(s=>this.referenceDelegate.Wr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gr(t,n){return l.or(Object.values(this.Br).map(r=>()=>r.containsKey(t,n)))}}class Pf extends wd{constructor(t){super(),this.currentSequenceNumber=t}}class Ds{constructor(t){this.persistence=t,this.zr=new os,this.jr=null}static Hr(t){return new Ds(t)}get Jr(){if(this.jr)return this.jr;throw _()}addReference(t,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),l.resolve()}removeReference(t,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),l.resolve()}markPotentiallyOrphaned(t,n){return this.Jr.add(n.toString()),l.resolve()}removeTarget(t,n){this.zr.Vr(n.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,n.targetId).next(i=>{i.forEach(s=>this.Jr.add(s.toString()))}).next(()=>r.removeTargetData(t,n))}Ur(){this.jr=new Set}Wr(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return l.forEach(this.Jr,r=>{const i=E.fromPath(r);return this.Yr(t,i).next(s=>{s||n.removeEntry(i,O.min())})}).next(()=>(this.jr=null,n.apply(t)))}updateLimboDocument(t,n){return this.Yr(t,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(t){return 0}Yr(t,n){return l.or([()=>l.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Gr(t,n)])}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Rs{constructor(t,n,r,i){this.targetId=t,this.fromCache=n,this.qi=r,this.Qi=i}static Ki(t,n){let r=X(),i=X();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Rs(t,n.fromCache,r,i)}}/**
* @license
* Copyright 2023 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Lf{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Mf{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return Jh()?8:ce.v(M())>0?6:4}()}initialize(t,n){this.zi=t,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(t,n,r,i){const s={result:null};return this.ji(t,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Hi(t,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new Lf;return this.Ji(t,n,o).next(a=>{if(s.result=a,this.Ui)return this.Yi(t,n,o,a.size)})}).next(()=>s.result)}Yi(t,n,r,i){return r.documentReadCount<this.Wi?(an()<=T.DEBUG&&m("QueryEngine","SDK will not create cache indexes for query:",fn(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),l.resolve()):(an()<=T.DEBUG&&m("QueryEngine","Query:",fn(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(an()<=T.DEBUG&&m("QueryEngine","The SDK decides to create cache indexes for query:",fn(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,oe(n))):l.resolve())}ji(t,n){if(Ua(n))return l.resolve(null);let r=oe(n);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=es(n,null,"F"),r=oe(n)),this.indexManager.getDocumentsMatchingTarget(t,r).next(s=>{const o=X(...s);return this.zi.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,r).next(c=>{const h=this.Zi(n,a);return this.Xi(n,h,o,c.readTime)?this.ji(t,es(n,null,"F")):this.es(t,h,n,c)}))})))}Hi(t,n,r,i){return Ua(n)||i.isEqual(O.min())?l.resolve(null):this.zi.getDocuments(t,r).next(s=>{const o=this.Zi(n,s);return this.Xi(n,o,r,i)?l.resolve(null):(an()<=T.DEBUG&&m("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),fn(n)),this.es(t,o,n,gd(i,-1)).next(a=>a))})}Zi(t,n){let r=new Z(Bd(t));return n.forEach((i,s)=>{ns(t,s)&&(r=r.add(s))}),r}Xi(t,n,r,i){if(t.limit===null)return!1;if(r.size!==n.size)return!0;const s=t.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ji(t,n,r){return an()<=T.DEBUG&&m("QueryEngine","Using full collection scan to execute query:",fn(n)),this.zi.getDocumentsMatchingQuery(t,n,zt.min(),r)}es(t,n,r,i){return this.zi.getDocumentsMatchingQuery(t,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class xf{constructor(t,n,r,i){this.persistence=t,this.ts=n,this.serializer=i,this.ns=new rt(N),this.rs=new Se(s=>Zi(s),ts),this.ss=new Map,this.os=t.getRemoteDocumentCache(),this.Qr=t.getTargetCache(),this.$r=t.getBundleCache(),this._s(r)}_s(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Sf(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.ns))}}function Uf(e,t,n,r){return new xf(e,t,n,r)}async function sc(e,t){const n=R(e);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n._s(t),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let c=X();for(const h of i){o.push(h.batchId);for(const u of h.mutations)c=c.add(u.key)}for(const h of s){a.push(h.batchId);for(const u of h.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(r,c).next(h=>({us:h,removedBatchIds:o,addedBatchIds:a}))})})}function Ff(e,t){const n=R(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=t.batch.keys(),s=n.os.newChangeBuffer({trackRemovals:!0});return function(o,a,c,h){const u=c.batch,d=u.keys();let p=l.resolve();return d.forEach(v=>{p=p.next(()=>h.getEntry(a,v)).next(I=>{const k=c.docVersions.get(v);V(k!==null),I.version.compareTo(k)<0&&(u.applyToRemoteDocument(I,c),I.isValidDocument()&&(I.setReadTime(c.commitVersion),h.addEntry(I)))})}),p.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,r,t,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=X();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(t))).next(()=>n.localDocuments.getDocuments(r,i))})}function Vf(e){const t=R(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Qr.getLastRemoteSnapshotVersion(n))}function jf(e,t){const n=R(e);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}class oc{constructor(){this.activeTargetIds=Kd()}As(t){this.activeTargetIds=this.activeTargetIds.add(t)}Rs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ds(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Bf{constructor(){this.no=new oc,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,r){}addLocalQueryTarget(t){return this.no.As(t),this.ro[t]||"not-current"}updateQueryState(t,n,r){this.ro[t]=n}removeLocalQueryTarget(t){this.no.Rs(t)}isLocalQueryTarget(t){return this.no.activeTargetIds.has(t)}clearQueryState(t){delete this.ro[t]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(t){return this.no.activeTargetIds.has(t)}start(){return this.no=new oc,Promise.resolve()}handleUserChange(t,n,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class $f{io(t){}shutdown(){}}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class ac{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(t){this.uo.push(t)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){m("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.uo)t(0)}ao(){m("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.uo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
* @license
* Copyright 2023 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/let Ir=null;function as(){return Ir===null?Ir=function(){return 268435456+Math.round(2147483648*Math.random())}():Ir++,"0x"+Ir.toString(16)}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const zf={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class qf{constructor(t){this.lo=t.lo,this.ho=t.ho}Po(t){this.Io=t}To(t){this.Eo=t}onMessage(t){this.Ao=t}close(){this.ho()}send(t){this.lo(t)}Ro(){this.Io()}Vo(t){this.Eo(t)}mo(t){this.Ao(t)}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Y="WebChannelConnection";class Hf extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.fo=n+"://"+t.host,this.po=`projects/${r}/databases/${i}`,this.yo=this.databaseId.database==="(default)"?`project_id=${r}`:`project_id=${r}&database_id=${i}`}get wo(){return!1}So(t,n,r,i,s){const o=as(),a=this.bo(t,n.toUriEncodedString());m("RestConnection",`Sending RPC '${t}' ${o}:`,a,r);const c={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(c,i,s),this.Co(t,a,c,r).then(h=>(m("RestConnection",`Received RPC '${t}' ${o}: `,h),h),h=>{throw sr("RestConnection",`RPC '${t}' ${o} failed with error: `,h,"url: ",a,"request:",r),h})}vo(t,n,r,i,s,o){return this.So(t,n,r,i,s)}Do(t,n,r){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+we}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>t[s]=i),r&&r.headers.forEach((i,s)=>t[s]=i)}bo(t,n){const r=zf[t];return`${this.fo}/v1/${n}:${r}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Co(t,n,r,i){const s=as();return new Promise((o,a)=>{const c=new id;c.setWithCredentials(!0),c.listenOnce(nd.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case qi.NO_ERROR:const u=c.getResponseJson();m(Y,`XHR for RPC '${t}' ${s} received:`,JSON.stringify(u)),o(u);break;case qi.TIMEOUT:m(Y,`RPC '${t}' ${s} timed out`),a(new y(f.DEADLINE_EXCEEDED,"Request time out"));break;case qi.HTTP_ERROR:const d=c.getStatus();if(m(Y,`RPC '${t}' ${s} failed with status:`,d,"response text:",c.getResponseText()),d>0){let p=c.getResponseJson();Array.isArray(p)&&(p=p[0]);const v=p==null?void 0:p.error;if(v&&v.status&&v.message){const I=function(k){const A=k.toLowerCase().replace(/_/g,"-");return Object.values(f).indexOf(A)>=0?A:f.UNKNOWN}(v.status);a(new y(I,v.message))}else a(new y(f.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new y(f.UNAVAILABLE,"Connection failed."));break;default:_()}}finally{m(Y,`RPC '${t}' ${s} completed.`)}});const h=JSON.stringify(i);m(Y,`RPC '${t}' ${s} sending request:`,i),c.send(n,"POST",h,r,15)})}Fo(t,n,r){const i=as(),s=[this.fo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=td(),a=ed(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(c.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Do(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const u=s.join("");m(Y,`Creating RPC '${t}' stream ${i}: ${u}`,c);const d=o.createWebChannel(u,c);let p=!1,v=!1;const I=new qf({lo:A=>{v?m(Y,`Not sending because RPC '${t}' stream ${i} is closed:`,A):(p||(m(Y,`Opening RPC '${t}' stream ${i} transport.`),d.open(),p=!0),m(Y,`RPC '${t}' stream ${i} sending:`,A),d.send(A))},ho:()=>d.close()}),k=(A,et,it)=>{A.listen(et,Dt=>{try{it(Dt)}catch(ut){setTimeout(()=>{throw ut},0)}})};return k(d,ir.EventType.OPEN,()=>{v||m(Y,`RPC '${t}' stream ${i} transport opened.`)}),k(d,ir.EventType.CLOSE,()=>{v||(v=!0,m(Y,`RPC '${t}' stream ${i} transport closed`),I.Vo())}),k(d,ir.EventType.ERROR,A=>{v||(v=!0,sr(Y,`RPC '${t}' stream ${i} transport errored:`,A),I.Vo(new y(f.UNAVAILABLE,"The operation could not be completed")))}),k(d,ir.EventType.MESSAGE,A=>{var et;if(!v){const it=A.data[0];V(!!it);const Dt=it,ut=Dt.error||((et=Dt[0])===null||et===void 0?void 0:et.error);if(ut){m(Y,`RPC '${t}' stream ${i} received error:`,ut);const Le=ut.status;let Qt=function(Wr){const ue=x[Wr];if(ue!==void 0)return of(ue)}(Le),Me=ut.message;Qt===void 0&&(Qt=f.INTERNAL,Me="Unknown error status: "+Le+" with message "+ut.message),v=!0,I.Vo(new y(Qt,Me)),d.close()}else m(Y,`RPC '${t}' stream ${i} received:`,it),I.mo(it)}}),k(a,rd.STAT_EVENT,A=>{A.stat===ga.PROXY?m(Y,`RPC '${t}' stream ${i} detected buffering proxy`):A.stat===ga.NOPROXY&&m(Y,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{I.Ro()},0),I}}function cs(){return typeof document<"u"?document:null}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Tr(e){return new af(e,!0)}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class cc{constructor(t,n,r=1e3,i=1.5,s=6e4){this.oi=t,this.timerId=n,this.Mo=r,this.xo=i,this.Oo=s,this.No=0,this.Lo=null,this.Bo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(t){this.cancel();const n=Math.floor(this.No+this.Qo()),r=Math.max(0,Date.now()-this.Bo),i=Math.max(0,n-r);i>0&&m("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.No} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Lo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Bo=Date.now(),t())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){this.Lo!==null&&(this.Lo.skipDelay(),this.Lo=null)}cancel(){this.Lo!==null&&(this.Lo.cancel(),this.Lo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Gf{constructor(t,n,r,i,s,o,a,c){this.oi=t,this.$o=r,this.Uo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new cc(t,n)}Ho(){return this.state===1||this.state===5||this.Jo()}Jo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&this.Go===null&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,()=>this.e_()))}t_(t){this.n_(),this.stream.send(t)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(t,n){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,t!==4?this.jo.reset():n&&n.code===f.RESOURCE_EXHAUSTED?(Mt(n.toString()),Mt("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):n&&n.code===f.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.i_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.To(n)}i_(){}auth(){this.state=1;const t=this.s_(this.Wo),n=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Wo===n&&this.o_(r,i)},r=>{t(()=>{const i=new y(f.UNKNOWN,"Fetching auth token failed: "+r.message);return this.__(i)})})}o_(t,n){const r=this.s_(this.Wo);this.stream=this.a_(t,n),this.stream.Po(()=>{r(()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,()=>(this.Jo()&&(this.state=3),Promise.resolve())),this.listener.Po()))}),this.stream.To(i=>{r(()=>this.__(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Yo(){this.state=5,this.jo.qo(async()=>{this.state=0,this.start()})}__(t){return m("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}s_(t){return n=>{this.oi.enqueueAndForget(()=>this.Wo===t?n():(m("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Kf extends Gf{constructor(t,n,r,i,s,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.h_=!1}get P_(){return this.h_}start(){this.h_=!1,this.lastStreamToken=void 0,super.start()}i_(){this.h_&&this.I_([])}a_(t,n){return this.connection.Fo("Write",t,n)}onMessage(t){if(V(!!t.streamToken),this.lastStreamToken=t.streamToken,this.h_){this.jo.reset();const n=gf(t.writeResults,t.commitTime),r=Ae(t.commitTime);return this.listener.T_(r,n)}return V(!t.writeResults||t.writeResults.length===0),this.h_=!0,this.listener.E_()}d_(){const t={};t.database=df(this.serializer),this.t_(t)}I_(t){const n={streamToken:this.lastStreamToken,writes:t.map(r=>pf(this.serializer,r))};this.t_(n)}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Wf extends class{}{constructor(t,n,r,i){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.A_=!1}R_(){if(this.A_)throw new y(f.FAILED_PRECONDITION,"The client has already been terminated.")}So(t,n,r,i){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.So(t,is(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new y(f.UNKNOWN,s.toString())})}vo(t,n,r,i,s){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.vo(t,is(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new y(f.UNKNOWN,o.toString())})}terminate(){this.A_=!0,this.connection.terminate()}}class Qf{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){this.m_===0&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve())))}S_(t){this.state==="Online"?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.y_("Offline")))}set(t){this.b_(),this.m_=0,t==="Online"&&(this.g_=!1),this.y_(t)}y_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}w_(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(Mt(n),this.g_=!1):m("OnlineStateTracker",n)}b_(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Jf{constructor(t,n,r,i,s){this.localStore=t,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=s,this.M_.io(o=>{r.enqueueAndForget(async()=>{bn(this)&&(m("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=R(a);c.v_.add(4),await wn(c),c.x_.set("Unknown"),c.v_.delete(4),await _r(c)}(this))})}),this.x_=new Qf(r,i)}}async function _r(e){if(bn(e))for(const t of e.F_)await t(!0)}async function wn(e){for(const t of e.F_)await t(!1)}function bn(e){return R(e).v_.size===0}async function hc(e,t,n){if(!or(t))throw t;e.v_.add(1),await wn(e),e.x_.set("Offline"),n||(n=()=>Vf(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{m("RemoteStore","Retrying IndexedDB access"),await n(),e.v_.delete(1),await _r(e)})}function uc(e,t){return t().catch(n=>hc(e,n,t))}async function Sr(e){const t=R(e),n=Ft(t);let r=t.D_.length>0?t.D_[t.D_.length-1].batchId:-1;for(;Xf(t);)try{const i=await jf(t.localStore,r);if(i===null){t.D_.length===0&&n.Xo();break}r=i.batchId,Yf(t,i)}catch(i){await hc(t,i)}lc(t)&&dc(t)}function Xf(e){return bn(e)&&e.D_.length<10}function Yf(e,t){e.D_.push(t);const n=Ft(e);n.Jo()&&n.P_&&n.I_(t.mutations)}function lc(e){return bn(e)&&!Ft(e).Ho()&&e.D_.length>0}function dc(e){Ft(e).start()}async function Zf(e){Ft(e).d_()}async function tp(e){const t=Ft(e);for(const n of e.D_)t.I_(n.mutations)}async function ep(e,t,n){const r=e.D_.shift(),i=Ns.from(r,t,n);await uc(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await Sr(e)}async function np(e,t){t&&Ft(e).P_&&await async function(n,r){if(function(i){return sf(i)&&i!==f.ABORTED}(r.code)){const i=n.D_.shift();Ft(n).Zo(),await uc(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,r)),await Sr(n)}}(e,t),lc(e)&&dc(e)}async function fc(e,t){const n=R(e);n.asyncQueue.verifyOperationInProgress(),m("RemoteStore","RemoteStore received new credentials");const r=bn(n);n.v_.add(3),await wn(n),r&&n.x_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.v_.delete(3),await _r(n)}async function rp(e,t){const n=R(e);t?(n.v_.delete(2),await _r(n)):t||(n.v_.add(2),await wn(n),n.x_.set("Unknown"))}function Ft(e){return e.L_||(e.L_=function(t,n,r){const i=R(t);return i.R_(),new Kf(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(e.datastore,e.asyncQueue,{Po:Zf.bind(null,e),To:np.bind(null,e),E_:tp.bind(null,e),T_:ep.bind(null,e)}),e.F_.push(async t=>{t?(e.L_.Zo(),await Sr(e)):(await e.L_.stop(),e.D_.length>0&&(m("RemoteStore",`Stopping write stream with ${e.D_.length} pending writes`),e.D_=[]))})),e.L_}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Os{constructor(t,n,r,i,s){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new xt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,r,i,s){const o=Date.now()+r,a=new Os(t,n,o,i,s);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new y(f.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function pc(e,t){if(Mt("AsyncQueue",`${t}: ${e}`),or(e))return new y(f.UNAVAILABLE,`${t}: ${e}`);throw e}class ip{constructor(){this.queries=new Se(t=>Va(t),Fa),this.onlineState="Unknown",this.W_=new Set}}function sp(e){e.W_.forEach(t=>{t.next()})}var gc,mc;(mc=gc||(gc={})).j_="default",mc.Cache="cache";class op{constructor(t,n,r,i,s,o){this.localStore=t,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.ya={},this.wa=new Se(a=>Va(a),Fa),this.Sa=new Map,this.ba=new Set,this.Da=new rt(E.comparator),this.Ca=new Map,this.va=new os,this.Fa={},this.Ma=new Map,this.xa=Re.Ln(),this.onlineState="Unknown",this.Oa=void 0}get isPrimaryClient(){return this.Oa===!0}}async function ap(e,t,n){const r=lp(e);try{const i=await function(s,o){const a=R(s),c=$.now(),h=o.reduce((p,v)=>p.add(v.key),X());let u,d;return a.persistence.runTransaction("Locally write mutations","readwrite",p=>{let v=gr(),I=X();return a.os.getEntries(p,h).next(k=>{v=k,v.forEach((A,et)=>{et.isValidDocument()||(I=I.add(A))})}).next(()=>a.localDocuments.getOverlayedDocuments(p,v)).next(k=>{u=k;const A=[];for(const et of o){const it=tf(et,u.get(et.key).overlayedDocument);it!=null&&A.push(new Ut(et.key,it,Ca(it.value.mapValue),wt.exists(!0)))}return a.mutationQueue.addMutationBatch(p,c,A,o)}).next(k=>{d=k;const A=k.applyToLocalDocumentSet(u,I);return a.documentOverlayCache.saveOverlays(p,k.batchId,A)})}).then(()=>({batchId:d.batchId,changes:Ba(u)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let c=s.Fa[s.currentUser.toKey()];c||(c=new rt(N)),c=c.insert(o,a),s.Fa[s.currentUser.toKey()]=c}(r,i.batchId,n),await Ar(r,i.changes),await Sr(r.remoteStore)}catch(i){const s=pc(i,"Failed to persist write");n.reject(s)}}function yc(e,t,n){const r=R(e);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.wa.forEach((s,o)=>{const a=o.view.G_(t);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=R(s);a.onlineState=o;let c=!1;a.queries.forEach((h,u)=>{for(const d of u.Q_)d.G_(o)&&(c=!0)}),c&&sp(a)}(r.eventManager,t),i.length&&r.ya.u_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function cp(e,t){const n=R(e),r=t.batch.batchId;try{const i=await Ff(n.localStore,t);wc(n,r,null),vc(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ar(n,i)}catch(i){await wa(i)}}async function hp(e,t,n){const r=R(e);try{const i=await function(s,o){const a=R(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let h;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(V(u!==null),h=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,h,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,h)).next(()=>a.localDocuments.getDocuments(c,h))})}(r.localStore,t);wc(r,t,n),vc(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await Ar(r,i)}catch(i){await wa(i)}}function vc(e,t){(e.Ma.get(t)||[]).forEach(n=>{n.resolve()}),e.Ma.delete(t)}function wc(e,t,n){const r=R(e);let i=r.Fa[r.currentUser.toKey()];if(i){const s=i.get(t);s&&(n?s.reject(n):s.resolve(),i=i.remove(t)),r.Fa[r.currentUser.toKey()]=i}}async function Ar(e,t,n){const r=R(e),i=[],s=[],o=[];r.wa.isEmpty()||(r.wa.forEach((a,c)=>{o.push(r.Na(c,t,n).then(h=>{if((h||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,h!=null&&h.fromCache?"not-current":"current"),h){i.push(h);const u=Rs.Ki(c.targetId,h);s.push(u)}}))}),await Promise.all(o),r.ya.u_(i),await async function(a,c){const h=R(a);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>l.forEach(c,d=>l.forEach(d.qi,p=>h.persistence.referenceDelegate.addReference(u,d.targetId,p)).next(()=>l.forEach(d.Qi,p=>h.persistence.referenceDelegate.removeReference(u,d.targetId,p)))))}catch(u){if(!or(u))throw u;m("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const d=u.targetId;if(!u.fromCache){const p=h.ns.get(d),v=p.snapshotVersion,I=p.withLastLimboFreeSnapshotVersion(v);h.ns=h.ns.insert(d,I)}}}(r.localStore,s))}async function up(e,t){const n=R(e);if(!n.currentUser.isEqual(t)){m("SyncEngine","User change. New user:",t.toKey());const r=await sc(n.localStore,t);n.currentUser=t,function(i,s){i.Ma.forEach(o=>{o.forEach(a=>{a.reject(new y(f.CANCELLED,s))})}),i.Ma.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Ar(n,r.us)}}function lp(e){const t=R(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=cp.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=hp.bind(null,t),t}class bc{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=Tr(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,n){return null}createIndexBackfillerScheduler(t,n){return null}createLocalStore(t){return Uf(this.persistence,new Mf,t.initialUser,this.serializer)}createPersistence(t){return new Of(Ds.Hr,this.serializer)}createSharedClientState(t){return new Bf}async terminate(){var t,n;(t=this.gcScheduler)===null||t===void 0||t.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class dp{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>yc(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=up.bind(null,this.syncEngine),await rp(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new ip}()}createDatastore(t){const n=Tr(t.databaseInfo.databaseId),r=function(i){return new Hf(i)}(t.databaseInfo);return function(i,s,o,a){return new Wf(i,s,o,a)}(t.authCredentials,t.appCheckCredentials,r,n)}createRemoteStore(t){return function(n,r,i,s,o){return new Jf(n,r,i,s,o)}(this.localStore,this.datastore,t.asyncQueue,n=>yc(this.syncEngine,n,0),function(){return ac.D()?new ac:new $f}())}createSyncEngine(t,n){return function(r,i,s,o,a,c,h){const u=new op(r,i,s,o,a,c);return h&&(u.Oa=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}async terminate(){var t;await async function(n){const r=R(n);m("RemoteStore","RemoteStore shutting down."),r.v_.add(5),await wn(r),r.M_.shutdown(),r.x_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate()}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class fp{constructor(t,n,r,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=J.UNAUTHENTICATED,this.clientId=va.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{m("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(m("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new y(f.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new xt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=pc(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function hs(e,t){e.asyncQueue.verifyOperationInProgress(),m("FirestoreClient","Initializing OfflineComponentProvider");const n=e.configuration;await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async i=>{r.isEqual(i)||(await sc(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function Ec(e,t){e.asyncQueue.verifyOperationInProgress();const n=await gp(e);m("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener(r=>fc(t.remoteStore,r)),e.setAppCheckTokenChangeListener((r,i)=>fc(t.remoteStore,i)),e._onlineComponents=t}function pp(e){return e.name==="FirebaseError"?e.code===f.FAILED_PRECONDITION||e.code===f.UNIMPLEMENTED:!(typeof DOMException<"u"&&e instanceof DOMException)||e.code===22||e.code===20||e.code===11}async function gp(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){m("FirestoreClient","Using user provided OfflineComponentProvider");try{await hs(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!pp(n))throw n;sr("Error using user provided cache. Falling back to memory cache: "+n),await hs(e,new bc)}}else m("FirestoreClient","Using default OfflineComponentProvider"),await hs(e,new bc);return e._offlineComponents}async function mp(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(m("FirestoreClient","Using user provided OnlineComponentProvider"),await Ec(e,e._uninitializedComponentsProvider._online)):(m("FirestoreClient","Using default OnlineComponentProvider"),await Ec(e,new dp))),e._onlineComponents}function yp(e){return mp(e).then(t=>t.syncEngine)}/**
* @license
* Copyright 2023 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Ic(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Tc=new Map;/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function _c(e,t,n){if(!n)throw new y(f.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function vp(e,t,n,r){if(t===!0&&r===!0)throw new y(f.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Sc(e){if(!E.isDocumentKey(e))throw new y(f.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Ac(e){if(E.isDocumentKey(e))throw new y(f.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function us(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":_()}function Cr(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new y(f.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=us(e);throw new y(f.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Cc{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new y(f.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new y(f.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}vp("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ic((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new y(f.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new y(f.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new y(f.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(n,r){return n.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class kr{constructor(t,n,r,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Cc({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new y(f.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new y(f.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Cc(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new od;switch(n.type){case"firstParty":return new ud(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new y(f.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=Tc.get(t);n&&(m("ComponentProvider","Removing Datastore"),Tc.delete(t),n.terminate())}(this),Promise.resolve()}}function wp(e,t,n,r={}){var i;const s=(e=Cr(e,kr))._getSettings(),o=`${t}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&sr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=J.MOCK_USER;else{a=qh(r.mockUserToken,(i=e._app)===null||i===void 0?void 0:i.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new y(f.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new J(h)}e._authCredentials=new ad(new ya(a,c))}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Ps{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Ps(this.firestore,t,this._query)}}class vt{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new $t(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new vt(this.firestore,t,this._key)}}class $t extends Ps{constructor(t,n,r){super(t,n,Fd(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new vt(this.firestore,null,new E(t))}withConverter(t){return new $t(this.firestore,t,this._path)}}function bp(e,t,...n){if(e=nt(e),_c("collection","path",t),e instanceof kr){const r=L.fromString(t,...n);return Ac(r),new $t(e,null,r)}{if(!(e instanceof vt||e instanceof $t))throw new y(f.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(L.fromString(t,...n));return Ac(r),new $t(e.firestore,null,r)}}function Ep(e,t,...n){if(e=nt(e),arguments.length===1&&(t=va.newId()),_c("doc","path",t),e instanceof kr){const r=L.fromString(t,...n);return Sc(r),new vt(e,null,new E(r))}{if(!(e instanceof vt||e instanceof $t))throw new y(f.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(L.fromString(t,...n));return Sc(r),new vt(e.firestore,e instanceof $t?e.converter:null,new E(r))}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Ip{constructor(){this.nu=Promise.resolve(),this.ru=[],this.iu=!1,this.su=[],this.ou=null,this._u=!1,this.au=!1,this.uu=[],this.jo=new cc(this,"async_queue_retry"),this.cu=()=>{const n=cs();n&&m("AsyncQueue","Visibility state changed to "+n.visibilityState),this.jo.Ko()};const t=cs();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.cu)}get isShuttingDown(){return this.iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.lu(),this.hu(t)}enterRestrictedMode(t){if(!this.iu){this.iu=!0,this.au=t||!1;const n=cs();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.cu)}}enqueue(t){if(this.lu(),this.iu)return new Promise(()=>{});const n=new xt;return this.hu(()=>this.iu&&this.au?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.ru.push(t),this.Pu()))}async Pu(){if(this.ru.length!==0){try{await this.ru[0](),this.ru.shift(),this.jo.reset()}catch(t){if(!or(t))throw t;m("AsyncQueue","Operation failed with retryable error: "+t)}this.ru.length>0&&this.jo.qo(()=>this.Pu())}}hu(t){const n=this.nu.then(()=>(this._u=!0,t().catch(r=>{this.ou=r,this._u=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw Mt("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this._u=!1,r))));return this.nu=n,n}enqueueAfterDelay(t,n,r){this.lu(),this.uu.indexOf(t)>-1&&(n=0);const i=Os.createAndSchedule(this,t,n,r,s=>this.Iu(s));return this.su.push(i),i}lu(){this.ou&&_()}verifyOperationInProgress(){}async Tu(){let t;do t=this.nu,await t;while(t!==this.nu)}Eu(t){for(const n of this.su)if(n.timerId===t)return!0;return!1}du(t){return this.Tu().then(()=>{this.su.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.su)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.Tu()})}Au(t){this.uu.push(t)}Iu(t){const n=this.su.indexOf(t);this.su.splice(n,1)}}class ls extends kr{constructor(t,n,r,i){super(t,n,r,i),this.type="firestore",this._queue=function(){return new Ip}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||kc(this),this._firestoreClient.terminate()}}function Tp(e,t){const n=typeof e=="object"?e:Ks(),r=typeof e=="string"?e:t||"(default)",i=ei(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=$h("firestore");s&&wp(i,...s)}return i}function _p(e){return e._firestoreClient||kc(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function kc(e){var t,n,r;const i=e._freezeSettings(),s=function(o,a,c,h){return new Sd(o,a,c,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,Ic(h.experimentalLongPollingOptions),h.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,i);e._firestoreClient=new fp(e._authCredentials,e._appCheckCredentials,e._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Cn{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Cn(kt.fromBase64String(t))}catch(n){throw new y(f.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new Cn(kt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class ds{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new y(f.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new G(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class fs{constructor(t){this._methodName=t}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Nc{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new y(f.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new y(f.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return N(this._lat,t._lat)||N(this._long,t._long)}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Sp=/^__.*__$/;class Ap{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return this.fieldMask!==null?new Ut(t,this.data,this.fieldMask,n,this.fieldTransforms):new vn(t,this.data,n,this.fieldTransforms)}}class Dc{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return new Ut(t,this.data,this.fieldMask,n,this.fieldTransforms)}}function Rc(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw _()}}class Ls{constructor(t,n,r,i,s,o){this.settings=t,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Ru(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Vu(){return this.settings.Vu}mu(t){return new Ls(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}fu(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.mu({path:r,gu:!1});return i.pu(t),i}yu(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.mu({path:r,gu:!1});return i.Ru(),i}wu(t){return this.mu({path:void 0,gu:!0})}Su(t){return Dr(t,this.settings.methodName,this.settings.bu||!1,this.path,this.settings.Du)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}Ru(){if(this.path)for(let t=0;t<this.path.length;t++)this.pu(this.path.get(t))}pu(t){if(t.length===0)throw this.Su("Document fields must not be empty");if(Rc(this.Vu)&&Sp.test(t))throw this.Su('Document fields cannot begin and end with "__"')}}class Cp{constructor(t,n,r){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=r||Tr(t)}Cu(t,n,r,i=!1){return new Ls({Vu:t,methodName:n,Du:r,path:G.emptyPath(),gu:!1,bu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Oc(e){const t=e._freezeSettings(),n=Tr(e._databaseId);return new Cp(e._databaseId,!!t.ignoreUndefinedProperties,n)}function kp(e,t,n,r,i,s={}){const o=e.Cu(s.merge||s.mergeFields?2:0,t,n,i);ps("Data must be an object, but it was:",o,r);const a=Pc(r,o);let c,h;if(s.merge)c=new ot(o.fieldMask),h=o.fieldTransforms;else if(s.mergeFields){const u=[];for(const d of s.mergeFields){const p=gs(t,d,n);if(!o.contains(p))throw new y(f.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);xc(u,p)||u.push(p)}c=new ot(u),h=o.fieldTransforms.filter(d=>c.covers(d.field))}else c=null,h=o.fieldTransforms;return new Ap(new at(a),c,h)}class Hr extends fs{_toFieldTransform(t){if(t.Vu!==2)throw t.Vu===1?t.Su(`${this._methodName}() can only appear at the top level of your update data`):t.Su(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Hr}}function Np(e,t,n,r){const i=e.Cu(1,t,n);ps("Data must be an object, but it was:",i,r);const s=[],o=at.empty();Ee(r,(c,h)=>{const u=Mc(t,c,n);h=nt(h);const d=i.yu(u);if(h instanceof Hr)s.push(u);else{const p=Nr(h,d);p!=null&&(s.push(u),o.set(u,p))}});const a=new ot(s);return new Dc(o,a,i.fieldTransforms)}function Dp(e,t,n,r,i,s){const o=e.Cu(1,t,n),a=[gs(t,r,n)],c=[i];if(s.length%2!=0)throw new y(f.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<s.length;p+=2)a.push(gs(t,s[p])),c.push(s[p+1]);const h=[],u=at.empty();for(let p=a.length-1;p>=0;--p)if(!xc(h,a[p])){const v=a[p];let I=c[p];I=nt(I);const k=o.yu(v);if(I instanceof Hr)h.push(v);else{const A=Nr(I,k);A!=null&&(h.push(v),u.set(v,A))}}const d=new ot(h);return new Dc(u,d,o.fieldTransforms)}function Nr(e,t){if(Lc(e=nt(e)))return ps("Unsupported field value:",t,e),Pc(e,t);if(e instanceof fs)return function(n,r){if(!Rc(r.Vu))throw r.Su(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.Su(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.gu&&t.Vu!==4)throw t.Su("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=Nr(o,r.wu(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(e,t)}return function(n,r){if((n=nt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Wd(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=$.fromDate(n);return{timestampValue:rs(r.serializer,i)}}if(n instanceof $){const i=new $(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:rs(r.serializer,i)}}if(n instanceof Nc)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Cn)return{bytesValue:cf(r.serializer,n._byteString)};if(n instanceof vt){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.Su(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:nc(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.Su(`Unsupported field value: ${us(n)}`)}(e,t)}function Pc(e,t){const n={};return Ta(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Ee(e,(r,i)=>{const s=Nr(i,t.fu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function Lc(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof $||e instanceof Nc||e instanceof Cn||e instanceof vt||e instanceof fs)}function ps(e,t,n){if(!Lc(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=us(n);throw r==="an object"?t.Su(e+" a custom object"):t.Su(e+" "+r)}}function gs(e,t,n){if((t=nt(t))instanceof ds)return t._internalPath;if(typeof t=="string")return Mc(e,t);throw Dr("Field path arguments must be of type string or ",e,!1,void 0,n)}const Rp=new RegExp("[~\\*/\\[\\]]");function Mc(e,t,n){if(t.search(Rp)>=0)throw Dr(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new ds(...t.split("."))._internalPath}catch{throw Dr(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Dr(e,t,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new y(f.INVALID_ARGUMENT,a+e+c)}function xc(e,t){return e.some(n=>n.isEqual(t))}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Op(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}function Pp(e,t,n,...r){e=Cr(e,vt);const i=Cr(e.firestore,ls),s=Oc(i);let o;return o=typeof(t=nt(t))=="string"||t instanceof ds?Dp(s,"updateDoc",e._key,t,n,r):Np(s,"updateDoc",e._key,t),Uc(i,[o.toMutation(e._key,wt.exists(!0))])}function Lp(e,t){const n=Cr(e.firestore,ls),r=Ep(e),i=Op(e.converter,t);return Uc(n,[kp(Oc(e.firestore),"addDoc",r._key,i,e.converter!==null,{}).toMutation(r._key,wt.exists(!1))]).then(()=>r)}function Uc(e,t){return function(n,r){const i=new xt;return n.asyncQueue.enqueueAndForget(async()=>ap(await yp(n),r,i)),i.promise}(_p(e),t)}(function(e,t=!0){(function(n){we=n})(de),le(new Jt("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new ls(new cd(n.getProvider("auth-internal")),new dd(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new y(f.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new qr(a.options.projectId,c)}(s,r),s);return i=Object.assign({useFetchStreams:t},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Ot(ma,"4.6.0",e),Ot(ma,"4.6.0","esm2017")})();function Fc(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Mp=Fc,Vc=new xe("auth","Firebase",Fc());/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Rr=new Xr("@firebase/auth");function xp(e,...t){Rr.logLevel<=T.WARN&&Rr.warn(`Auth (${de}): ${e}`,...t)}function Or(e,...t){Rr.logLevel<=T.ERROR&&Rr.error(`Auth (${de}): ${e}`,...t)}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Tt(e,...t){throw ms(e,...t)}function mt(e,...t){return ms(e,...t)}function jc(e,t,n){const r=Object.assign(Object.assign({},Mp()),{[t]:n});return new xe("auth","Firebase",r).create(t,{appName:e.name})}function Vt(e){return jc(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ms(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Vc.create(e,...t)}function w(e,t,...n){if(!e)throw ms(t,...n)}function _t(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Or(t),new Error(t)}function St(e,t){e||_t(t)}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function ys(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function Up(){return Bc()==="http:"||Bc()==="https:"}function Bc(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Fp(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Up()||Kh()||"connection"in navigator)?navigator.onLine:!0}function Vp(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class En{constructor(t,n){this.shortDelay=t,this.longDelay=n,St(n>t,"Short delay should be less than long delay!"),this.isMobile=Hh()||Wh()}get(){return Fp()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function vs(e,t){St(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class $c{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;_t("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;_t("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;_t("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const jp={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Bp=new En(3e4,6e4);function Pr(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function ke(e,t,n,r,i={}){return zc(e,i,async()=>{let s={},o={};r&&(t==="GET"?o=r:s={body:JSON.stringify(r)});const a=Ue(Object.assign({key:e.config.apiKey},o)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),$c.fetch()(Hc(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},s))})}async function zc(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},jp),t);try{const i=new $p(e),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Lr(e,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,h]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Lr(e,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Lr(e,"email-already-in-use",o);if(c==="USER_DISABLED")throw Lr(e,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw jc(e,u,h);Tt(e,u)}}catch(i){if(i instanceof Ct)throw i;Tt(e,"network-request-failed",{message:String(i)})}}async function qc(e,t,n,r,i={}){const s=await ke(e,t,n,r,i);return"mfaPendingCredential"in s&&Tt(e,"multi-factor-auth-required",{_serverResponse:s}),s}function Hc(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?vs(e.config,i):`${e.config.apiScheme}://${i}`}class $p{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(mt(this.auth,"network-request-failed")),Bp.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Lr(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=mt(e,t,r);return i.customData._tokenResponse=n,i}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/async function zp(e,t){return ke(e,"POST","/v1/accounts:delete",t)}async function Gc(e,t){return ke(e,"POST","/v1/accounts:lookup",t)}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function In(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function qp(e,t=!1){const n=nt(e),r=await n.getIdToken(t),i=bs(r);w(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:In(ws(i.auth_time)),issuedAtTime:In(ws(i.iat)),expirationTime:In(ws(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function ws(e){return Number(e)*1e3}function bs(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return Or("JWT malformed, contained fewer than 3 sections"),null;try{const i=Fs(n);return i?JSON.parse(i):(Or("Failed to decode base64 JWT payload"),null)}catch(i){return Or("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Kc(e){const t=bs(e);return w(t,"internal-error"),w(typeof t.exp<"u","internal-error"),w(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/async function Tn(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof Ct&&Hp(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function Hp({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Gp{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Es{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=In(this.lastLoginAt),this.creationTime=In(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/async function Mr(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Tn(e,Gc(n,{idToken:r}));w(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=!((t=s.providerUserInfo)===null||t===void 0)&&t.length?Wc(s.providerUserInfo):[],a=Wp(e.providerData,o),c=e.isAnonymous,h=!(e.email&&s.passwordHash)&&!(a!=null&&a.length),u=c?h:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Es(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(e,d)}async function Kp(e){const t=nt(e);await Mr(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function Wp(e,t){return[...e.filter(n=>!t.some(r=>r.providerId===n.providerId)),...t]}function Wc(e){return e.map(t=>{var{providerId:n}=t,r=Qr(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/async function Qp(e,t){const n=await zc(e,{},async()=>{const r=Ue({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,o=Hc(e,i,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",$c.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Jp(e,t){return ke(e,"POST","/v2/accounts:revokeToken",Pr(e,t))}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Oe{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){w(t.idToken,"internal-error"),w(typeof t.idToken<"u","internal-error"),w(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):Kc(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){w(t.length!==0,"internal-error");const n=Kc(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(w(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await Qp(t,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Oe;return r&&(w(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),i&&(w(typeof i=="string","internal-error",{appName:t}),o.accessToken=i),s&&(w(typeof s=="number","internal-error",{appName:t}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Oe,this.toJSON())}_performRefresh(){return _t("not implemented")}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function jt(e,t){w(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class Nt{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,s=Qr(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Gp(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Es(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const n=await Tn(this,this.stsTokenManager.getToken(this.auth,t));return w(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return qp(this,t)}reload(){return Kp(this)}_assign(t){this!==t&&(w(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new Nt(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){w(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await Mr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(bt(this.auth.app))return Promise.reject(Vt(this.auth));const t=await this.getIdToken();return await Tn(this,zp(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,s,o,a,c,h,u;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(i=n.email)!==null&&i!==void 0?i:void 0,v=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,I=(o=n.photoURL)!==null&&o!==void 0?o:void 0,k=(a=n.tenantId)!==null&&a!==void 0?a:void 0,A=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,et=(h=n.createdAt)!==null&&h!==void 0?h:void 0,it=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:Dt,emailVerified:ut,isAnonymous:Le,providerData:Qt,stsTokenManager:Me}=n;w(Dt&&Me,t,"internal-error");const Wr=Oe.fromJSON(this.name,Me);w(typeof Dt=="string",t,"internal-error"),jt(d,t.name),jt(p,t.name),w(typeof ut=="boolean",t,"internal-error"),w(typeof Le=="boolean",t,"internal-error"),jt(v,t.name),jt(I,t.name),jt(k,t.name),jt(A,t.name),jt(et,t.name),jt(it,t.name);const ue=new Nt({uid:Dt,auth:t,email:p,emailVerified:ut,displayName:d,isAnonymous:Le,photoURL:I,phoneNumber:v,tenantId:k,stsTokenManager:Wr,createdAt:et,lastLoginAt:it});return Qt&&Array.isArray(Qt)&&(ue.providerData=Qt.map(Ph=>Object.assign({},Ph))),A&&(ue._redirectEventId=A),ue}static async _fromIdTokenResponse(t,n,r=!1){const i=new Oe;i.updateFromServerResponse(n);const s=new Nt({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await Mr(s),s}static async _fromGetAccountInfoResponse(t,n,r){const i=n.users[0];w(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Wc(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new Oe;a.updateFromIdToken(r);const c=new Nt({uid:i.localId,auth:t,stsTokenManager:a,isAnonymous:o}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Es(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(c,h),c}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Qc=new Map;function At(e){St(e instanceof Function,"Expected a class definition");let t=Qc.get(e);return t?(St(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Qc.set(e,t),t)}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Jc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}Jc.type="NONE";const Xc=Jc;/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function xr(e,t,n){return`firebase:${e}:${t}:${n}`}class Pe{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=xr(this.userKey,i.apiKey,s),this.fullPersistenceKey=xr("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Nt._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new Pe(At(Xc),t,r);const i=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||At(Xc);const o=xr(r,t.config.apiKey,t.name);let a=null;for(const h of n)try{const u=await h._get(o);if(u){const d=Nt._fromJSON(t,u);h!==s&&(a=d),s=h;break}}catch{}const c=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new Pe(s,t,r):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async h=>{if(h!==s)try{await h._remove(o)}catch{}})),new Pe(s,t,r))}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Yc(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(eh(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Zc(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(rh(t))return"Blackberry";if(ih(t))return"Webos";if(Is(t))return"Safari";if((t.includes("chrome/")||th(t))&&!t.includes("edge/"))return"Chrome";if(nh(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Zc(e=M()){return/firefox\//i.test(e)}function Is(e=M()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function th(e=M()){return/crios\//i.test(e)}function eh(e=M()){return/iemobile/i.test(e)}function nh(e=M()){return/android/i.test(e)}function rh(e=M()){return/blackberry/i.test(e)}function ih(e=M()){return/webos/i.test(e)}function Ur(e=M()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Xp(e=M()){var t;return Ur(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function Yp(){return Qh()&&document.documentMode===10}function sh(e=M()){return Ur(e)||nh(e)||ih(e)||rh(e)||/windows phone/i.test(e)||eh(e)}function Zp(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function oh(e,t=[]){let n;switch(e){case"Browser":n=Yc(M());break;case"Worker":n=`${Yc(M())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${de}/${r}`}/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class tg{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=s=>new Promise((o,a)=>{try{const c=t(s);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
* @license
* Copyright 2023 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/async function eg(e,t={}){return ke(e,"GET","/v2/passwordPolicy",Pr(e,t))}/**
* @license
* Copyright 2023 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const ng=6;class rg{constructor(t){var n,r,i,s;const o=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:ng,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=t.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,i,s,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,c),this.validatePasswordCharacterOptions(t,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsUppercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),i&&(n.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=s))}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class ig{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ah(this),this.idTokenSubscription=new ah(this),this.beforeStateQueue=new tg(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Vc,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=At(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Pe.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await Gc(this,{idToken:t}),r=await Nt._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var n;if(bt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(t);(!o||o===a)&&(c!=null&&c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return w(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Mr(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=Vp()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(bt(this.app))return Promise.reject(Vt(this));const n=t?nt(t):null;return n&&w(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&w(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return bt(this.app)?Promise.reject(Vt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return bt(this.app)?Promise.reject(Vt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(At(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await eg(this),n=new rg(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new xe("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Jp(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&At(t)||this._popupRedirectResolver;w(n,this,"argument-error"),this.redirectPersistenceManager=await Pe.create(this,[At(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(w(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const c=t.addObserver(n,r,i);return()=>{o=!0,c()}}else{const c=t.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return w(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=oh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&xp(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Fr(e){return nt(e)}class ah{constructor(t){this.auth=t,this.observer=null,this.addObserver=nu(n=>this.observer=n)}get next(){return w(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/let Ts={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function sg(e){Ts=e}function og(e){return Ts.loadJS(e)}function ag(){return Ts.gapiScript}function cg(e){return`__${e}${Math.floor(Math.random()*1e6)}`}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function hg(e,t){const n=ei(e,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(Dn(i,t??{}))return r;Tt(r,"already-initialized")}return n.initialize({options:t})}function ug(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(At);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function lg(e,t,n){const r=Fr(e);w(r._canInitEmulator,r,"emulator-config-failed"),w(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=ch(t),{host:o,port:a}=dg(t),c=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||fg()}function ch(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function dg(e){const t=ch(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:hh(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:hh(o)}}}function hh(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function fg(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class uh{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return _t("not implemented")}_getIdTokenResponse(t){return _t("not implemented")}_linkToIdToken(t,n){return _t("not implemented")}_getReauthenticationResolver(t){return _t("not implemented")}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/async function Ne(e,t){return qc(e,"POST","/v1/accounts:signInWithIdp",Pr(e,t))}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const pg="http://localhost";class he extends uh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new he(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Tt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,s=Qr(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new he(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return Ne(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,Ne(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Ne(t,n)}buildRequest(){const t={requestUri:pg,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Ue(n)}return t}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class lh{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class _n extends lh{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class qt extends _n{constructor(){super("facebook.com")}static credential(t){return he._fromParams({providerId:qt.PROVIDER_ID,signInMethod:qt.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return qt.credentialFromTaggedObject(t)}static credentialFromError(t){return qt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return qt.credential(t.oauthAccessToken)}catch{return null}}}qt.FACEBOOK_SIGN_IN_METHOD="facebook.com",qt.PROVIDER_ID="facebook.com";/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Ht extends _n{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return he._fromParams({providerId:Ht.PROVIDER_ID,signInMethod:Ht.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Ht.credentialFromTaggedObject(t)}static credentialFromError(t){return Ht.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return Ht.credential(n,r)}catch{return null}}}Ht.GOOGLE_SIGN_IN_METHOD="google.com",Ht.PROVIDER_ID="google.com";/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Gt extends _n{constructor(){super("github.com")}static credential(t){return he._fromParams({providerId:Gt.PROVIDER_ID,signInMethod:Gt.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Gt.credentialFromTaggedObject(t)}static credentialFromError(t){return Gt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Gt.credential(t.oauthAccessToken)}catch{return null}}}Gt.GITHUB_SIGN_IN_METHOD="github.com",Gt.PROVIDER_ID="github.com";/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Kt extends _n{constructor(){super("twitter.com")}static credential(t,n){return he._fromParams({providerId:Kt.PROVIDER_ID,signInMethod:Kt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Kt.credentialFromTaggedObject(t)}static credentialFromError(t){return Kt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return Kt.credential(n,r)}catch{return null}}}Kt.TWITTER_SIGN_IN_METHOD="twitter.com",Kt.PROVIDER_ID="twitter.com";/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/async function gg(e,t){return qc(e,"POST","/v1/accounts:signUp",Pr(e,t))}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Wt{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const s=await Nt._fromIdTokenResponse(t,r,i),o=dh(r);return new Wt({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=dh(r);return new Wt({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function dh(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/async function mg(e){var t;if(bt(e.app))return Promise.reject(Vt(e));const n=Fr(e);if(await n._initializationPromise,!((t=n.currentUser)===null||t===void 0)&&t.isAnonymous)return new Wt({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await gg(n,{returnSecureToken:!0}),i=await Wt._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Gr extends Ct{constructor(t,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Gr.prototype),this.customData={appName:t.name,tenantId:(s=t.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new Gr(t,n,r,i)}}function fh(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Gr._fromErrorAndOperation(e,i,t,r):i})}async function yg(e,t,n=!1){const r=await Tn(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Wt._forOperation(e,"link",r)}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/async function vg(e,t,n=!1){const{auth:r}=e;if(bt(r.app))return Promise.reject(Vt(r));const i="reauthenticate";try{const s=await Tn(e,fh(r,i,t,e),n);w(s.idToken,r,"internal-error");const o=bs(s.idToken);w(o,r,"internal-error");const{sub:a}=o;return w(e.uid===a,r,"user-mismatch"),Wt._forOperation(e,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Tt(r,"user-mismatch"),s}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/async function wg(e,t,n=!1){if(bt(e.app))return Promise.reject(Vt(e));const r="signIn",i=await fh(e,r,t),s=await Wt._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}function bg(e,t,n,r){return nt(e).onIdTokenChanged(t,n,r)}function Eg(e,t,n){return nt(e).beforeAuthStateChanged(t,n)}const Vr="__sak";/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class ph{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Vr,"1"),this.storage.removeItem(Vr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Ig(){const e=M();return Is(e)||Ur(e)}const Tg=1e3,_g=10;class gh extends ph{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Ig()&&Zp(),this.fallbackToPolling=sh(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(t.newValue!==o)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);Yp()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,_g):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},Tg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}gh.type="LOCAL";const Sg=gh;/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class mh extends ph{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}mh.type="SESSION";const yh=mh;/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Ag(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Kr{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new Kr(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async h=>h(n.origin,s)),c=await Ag(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Kr.receivers=[];/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function _s(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Cg{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const h=_s("",20);i.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const p=d;if(p.data.eventId===h)switch(p.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(p.data.response);break;default:clearTimeout(u),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:h,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function yt(){return window}function kg(e){yt().location.href=e}/**
* @license
* Copyright 2020 Google LLC.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function vh(){return typeof yt().WorkerGlobalScope<"u"&&typeof yt().importScripts=="function"}async function Ng(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Dg(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function Rg(){return vh()?self:null}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const wh="firebaseLocalStorageDb",Og=1,jr="firebaseLocalStorage",bh="fbase_key";class Sn{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Br(e,t){return e.transaction([jr],t?"readwrite":"readonly").objectStore(jr)}function Pg(){const e=indexedDB.deleteDatabase(wh);return new Sn(e).toPromise()}function Ss(){const e=indexedDB.open(wh,Og);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(jr,{keyPath:bh})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(jr)?t(r):(r.close(),await Pg(),t(await Ss()))})})}async function Eh(e,t,n){const r=Br(e,!0).put({[bh]:t,value:n});return new Sn(r).toPromise()}async function Lg(e,t){const n=Br(e,!1).get(t),r=await new Sn(n).toPromise();return r===void 0?null:r.value}function Ih(e,t){const n=Br(e,!0).delete(t);return new Sn(n).toPromise()}const Mg=800,xg=3;class Th{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ss(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>xg)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return vh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Kr._getInstance(Rg()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await Ng(),!this.activeServiceWorker)return;this.sender=new Cg(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||Dg()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Ss();return await Eh(t,Vr,"1"),await Ih(t,Vr),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Eh(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>Lg(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ih(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const s=Br(i,!1).getAll();return new Sn(s).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(t.length!==0)for(const{fbase_key:i,value:s}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Mg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Th.type="LOCAL";const Ug=Th;new En(3e4,6e4);/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Fg(e,t){return t?At(t):(w(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class As extends uh{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Ne(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Ne(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Ne(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function Vg(e){return wg(e.auth,new As(e),e.bypassAuthState)}function jg(e){const{auth:t,user:n}=e;return w(n,t,"internal-error"),vg(n,new As(e),e.bypassAuthState)}async function Bg(e){const{auth:t,user:n}=e;return w(n,t,"internal-error"),yg(n,new As(e),e.bypassAuthState)}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class _h{constructor(t,n,r,i,s=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=t;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(h){this.reject(h)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return Vg;case"linkViaPopup":case"linkViaRedirect":return Bg;case"reauthViaPopup":case"reauthViaRedirect":return jg;default:Tt(this.auth,"internal-error")}}resolve(t){St(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){St(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const $g=new En(2e3,1e4);class De extends _h{constructor(t,n,r,i,s){super(t,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,De.currentPopupAction&&De.currentPopupAction.cancel(),De.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return w(t,this.auth,"internal-error"),t}async onExecution(){St(this.filter.length===1,"Popup operations only handle one event");const t=_s();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(mt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(mt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,De.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(mt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,$g.get())};t()}}De.currentPopupAction=null;/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const zg="pendingRedirect",$r=new Map;class qg extends _h{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=$r.get(this.auth._key());if(!t){try{const n=await Hg(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(n)}catch(n){t=()=>Promise.reject(n)}$r.set(this.auth._key(),t)}return this.bypassAuthState||$r.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Hg(e,t){const n=Wg(t),r=Kg(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function Gg(e,t){$r.set(e._key(),t)}function Kg(e){return At(e._redirectPersistence)}function Wg(e){return xr(zg,e.config.apiKey,e.name)}async function Qg(e,t,n=!1){if(bt(e.app))return Promise.reject(Vt(e));const r=Fr(e),i=Fg(r,t),s=await new qg(r,i,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,t)),s}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Jg=10*60*1e3;class Xg{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!Yg(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!Ah(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(mt(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=Jg&&this.cachedEventUids.clear(),this.cachedEventUids.has(Sh(t))}saveEventToCache(t){this.cachedEventUids.add(Sh(t)),this.lastProcessedEventTime=Date.now()}}function Sh(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function Ah({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function Yg(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ah(e);default:return!1}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/async function Zg(e,t={}){return ke(e,"GET","/v1/projects",t)}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const tm=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,em=/^https?/;async function nm(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Zg(e);for(const n of t)try{if(rm(n))return}catch{}Tt(e,"unauthorized-domain")}function rm(e){const t=ys(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const s=new URL(e);return s.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!em.test(n))return!1;if(tm.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
* @license
* Copyright 2020 Google LLC.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const im=new En(3e4,6e4);function Ch(){const e=yt().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function sm(e){return new Promise((t,n)=>{var r,i,s;function o(){Ch(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Ch(),n(mt(e,"network-request-failed"))},timeout:im.get()})}if(!((i=(r=yt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((s=yt().gapi)===null||s===void 0)&&s.load)o();else{const a=cg("iframefcb");return yt()[a]=()=>{gapi.load?o():n(mt(e,"network-request-failed"))},og(`${ag()}?onload=${a}`).catch(c=>n(c))}}).catch(t=>{throw zr=null,t})}let zr=null;function om(e){return zr=zr||sm(e),zr}/**
* @license
* Copyright 2020 Google LLC.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const am=new En(5e3,15e3),cm="__/auth/iframe",hm="emulator/auth/iframe",um={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},lm=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function dm(e){const t=e.config;w(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?vs(t,hm):`https://${e.config.authDomain}/${cm}`,r={apiKey:t.apiKey,appName:e.name,v:de},i=lm.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ue(r).slice(1)}`}async function fm(e){const t=await om(e),n=yt().gapi;return w(n,e,"internal-error"),t.open({where:document.body,url:dm(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:um,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=mt(e,"network-request-failed"),a=yt().setTimeout(()=>{s(o)},am.get());function c(){yt().clearTimeout(a),i(r)}r.ping(c).then(c,()=>{s(o)})}))}/**
* @license
* Copyright 2020 Google LLC.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const pm={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},gm=500,mm=600,ym="_blank",vm="http://localhost";class kh{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function wm(e,t,n,r=gm,i=mm){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},pm),{width:r.toString(),height:i.toString(),top:s,left:o}),h=M().toLowerCase();n&&(a=th(h)?ym:n),Zc(h)&&(t=t||vm,c.scrollbars="yes");const u=Object.entries(c).reduce((p,[v,I])=>`${p}${v}=${I},`,"");if(Xp(h)&&a!=="_self")return bm(t||"",a),new kh(null);const d=window.open(t||"",a,u);w(d,e,"popup-blocked");try{d.focus()}catch{}return new kh(d)}function bm(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Em="__/auth/handler",Im="emulator/auth/handler",Tm=encodeURIComponent("fac");async function Nh(e,t,n,r,i,s){w(e.config.authDomain,e,"auth-domain-config-required"),w(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:de,eventId:i};if(t instanceof lh){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",eu(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[u,d]of Object.entries(s||{}))o[u]=d}if(t instanceof _n){const u=t.getScopes().filter(d=>d!=="");u.length>0&&(o.scopes=u.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await e._getAppCheckToken(),h=c?`#${Tm}=${encodeURIComponent(c)}`:"";return`${_m(e)}?${Ue(a).slice(1)}${h}`}function _m({config:e}){return e.emulator?vs(e,Im):`https://${e.authDomain}/${Em}`}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Cs="webStorageSupport";class Sm{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=yh,this._completeRedirectFn=Qg,this._overrideRedirectResult=Gg}async _openPopup(t,n,r,i){var s;St((s=this.eventManagers[t._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Nh(t,n,r,ys(),i);return wm(t,o,_s())}async _openRedirect(t,n,r,i){await this._originValidation(t);const s=await Nh(t,n,r,ys(),i);return kg(s),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(St(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await fm(t),r=new Xg(t);return n.register("authEvent",i=>(w(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Cs,{type:Cs},r=>{var i;const s=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[Cs];s!==void 0&&n(!!s),Tt(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=nm(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return sh()||Is()||Ur()}}const Am=Sm;var Dh="@firebase/auth",Rh="1.7.1";/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Cm{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){w(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function km(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Nm(e){le(new Jt("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;w(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:oh(e)},h=new ig(r,i,s,c);return ug(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),le(new Jt("auth-internal",t=>{const n=Fr(t.getProvider("auth").getImmediate());return(r=>new Cm(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ot(Dh,Rh,km(e)),Ot(Dh,Rh,"esm2017")}/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Dm=5*60,Rm=Bs("authIdTokenMaxAge")||Dm;let Oh=null;const Om=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Rm)return;const i=n==null?void 0:n.token;Oh!==i&&(Oh=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Pm(e=Ks()){const t=ei(e,"auth");if(t.isInitialized())return t.getImmediate();const n=hg(e,{popupRedirectResolver:Am,persistence:[Ug,Sg,yh]}),r=Bs("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=Om(s.toString());Eg(n,o,()=>o(n.currentUser)),bg(n,a=>o(a))}}const i=Vs("auth");return i&&lg(n,`http://${i}`),n}function Lm(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}sg({loadJS(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const s=mt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Lm().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="}),Nm("Browser");export{Lp as a,Pm as b,bp as c,Tp as g,Gs as i,Ot as r,mg as s,Pp as u};
