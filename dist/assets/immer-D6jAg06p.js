var x=Symbol.for("immer-nothing"),K=Symbol.for("immer-draftable"),s=Symbol.for("immer-state");function f(t,...r){throw new Error(`[Immer] minified error nr: ${t}. Full error at: https://bit.ly/3cXEKWf`)}var h=Object.getPrototypeOf;function _(t){return!!t&&!!t[s]}function l(t){var r;return t?W(t)||Array.isArray(t)||!!t[K]||!!((r=t.constructor)!=null&&r[K])||P(t)||w(t):!1}var V=Object.prototype.constructor.toString();function W(t){if(!t||typeof t!="object")return!1;const r=h(t);if(r===null)return!0;const e=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return e===Object?!0:typeof e=="function"&&Function.toString.call(e)===V}function v(t,r){g(t)===0?Reflect.ownKeys(t).forEach(e=>{r(e,t[e],t)}):t.forEach((e,n)=>r(n,e,t))}function g(t){const r=t[s];return r?r.type_:Array.isArray(t)?1:P(t)?2:w(t)?3:0}function j(t,r){return g(t)===2?t.has(r):Object.prototype.hasOwnProperty.call(t,r)}function U(t,r,e){const n=g(t);n===2?t.set(r,e):n===3?t.add(e):t[r]=e}function Y(t,r){return t===r?t!==0||1/t===1/r:t!==t&&r!==r}function P(t){return t instanceof Map}function w(t){return t instanceof Set}function p(t){return t.copy_||t.base_}function F(t,r){if(P(t))return new Map(t);if(w(t))return new Set(t);if(Array.isArray(t))return Array.prototype.slice.call(t);if(!r&&W(t))return h(t)?{...t}:Object.assign(Object.create(null),t);const e=Object.getOwnPropertyDescriptors(t);delete e[s];let n=Reflect.ownKeys(e);for(let o=0;o<n.length;o++){const i=n[o],c=e[i];c.writable===!1&&(c.writable=!0,c.configurable=!0),(c.get||c.set)&&(e[i]={configurable:!0,writable:!0,enumerable:c.enumerable,value:t[i]})}return Object.create(h(t),e)}function A(t,r=!1){return S(t)||_(t)||!l(t)||(g(t)>1&&(t.set=t.add=t.clear=t.delete=Z),Object.freeze(t),r&&Object.entries(t).forEach(([e,n])=>A(n,!0))),t}function Z(){f(2)}function S(t){return Object.isFrozen(t)}var q={};function y(t){const r=q[t];return r||f(0,t),r}var b;function I(){return b}function J(t,r){return{drafts_:[],parent_:t,immer_:r,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function L(t,r){r&&(y("Patches"),t.patches_=[],t.inversePatches_=[],t.patchListener_=r)}function D(t){C(t),t.drafts_.forEach(tt),t.drafts_=null}function C(t){t===b&&(b=t.parent_)}function X(t){return b=J(b,t)}function tt(t){const r=t[s];r.type_===0||r.type_===1?r.revoke_():r.revoked_=!0}function $(t,r){r.unfinalizedDrafts_=r.drafts_.length;const e=r.drafts_[0];return t!==void 0&&t!==e?(e[s].modified_&&(D(r),f(4)),l(t)&&(t=z(r,t),r.parent_||O(r,t)),r.patches_&&y("Patches").generateReplacementPatches_(e[s].base_,t,r.patches_,r.inversePatches_)):t=z(r,e,[]),D(r),r.patches_&&r.patchListener_(r.patches_,r.inversePatches_),t!==x?t:void 0}function z(t,r,e){if(S(r))return r;const n=r[s];if(!n)return v(r,(o,i)=>B(t,n,r,o,i,e)),r;if(n.scope_!==t)return r;if(!n.modified_)return O(t,n.base_,!0),n.base_;if(!n.finalized_){n.finalized_=!0,n.scope_.unfinalizedDrafts_--;const o=n.copy_;let i=o,c=!1;n.type_===3&&(i=new Set(o),o.clear(),c=!0),v(i,(a,d)=>B(t,n,o,a,d,e,c)),O(t,o,!1),e&&t.patches_&&y("Patches").generatePatches_(n,e,t.patches_,t.inversePatches_)}return n.copy_}function B(t,r,e,n,o,i,c){if(_(o)){const a=i&&r&&r.type_!==3&&!j(r.assigned_,n)?i.concat(n):void 0,d=z(t,o,a);if(U(e,n,d),_(d))t.canAutoFreeze_=!1;else return}else c&&e.add(o);if(l(o)&&!S(o)){if(!t.immer_.autoFreeze_&&t.unfinalizedDrafts_<1)return;z(t,o),(!r||!r.scope_.parent_)&&typeof n!="symbol"&&Object.prototype.propertyIsEnumerable.call(e,n)&&O(t,o)}}function O(t,r,e=!1){!t.parent_&&t.immer_.autoFreeze_&&t.canAutoFreeze_&&A(r,e)}function rt(t,r){const e=Array.isArray(t),n={type_:e?1:0,scope_:r?r.scope_:I(),modified_:!1,finalized_:!1,assigned_:{},parent_:r,base_:t,draft_:null,copy_:null,revoke_:null,isManual_:!1};let o=n,i=M;e&&(o=[n],i=m);const{revoke:c,proxy:a}=Proxy.revocable(o,i);return n.draft_=a,n.revoke_=c,a}var M={get(t,r){if(r===s)return t;const e=p(t);if(!j(e,r))return et(t,e,r);const n=e[r];return t.finalized_||!l(n)?n:n===E(t.base_,r)?(N(t),t.copy_[r]=R(n,t)):n},has(t,r){return r in p(t)},ownKeys(t){return Reflect.ownKeys(p(t))},set(t,r,e){const n=G(p(t),r);if(n!=null&&n.set)return n.set.call(t.draft_,e),!0;if(!t.modified_){const o=E(p(t),r),i=o==null?void 0:o[s];if(i&&i.base_===e)return t.copy_[r]=e,t.assigned_[r]=!1,!0;if(Y(e,o)&&(e!==void 0||j(t.base_,r)))return!0;N(t),k(t)}return t.copy_[r]===e&&(e!==void 0||r in t.copy_)||Number.isNaN(e)&&Number.isNaN(t.copy_[r])||(t.copy_[r]=e,t.assigned_[r]=!0),!0},deleteProperty(t,r){return E(t.base_,r)!==void 0||r in t.base_?(t.assigned_[r]=!1,N(t),k(t)):delete t.assigned_[r],t.copy_&&delete t.copy_[r],!0},getOwnPropertyDescriptor(t,r){const e=p(t),n=Reflect.getOwnPropertyDescriptor(e,r);return n&&{writable:!0,configurable:t.type_!==1||r!=="length",enumerable:n.enumerable,value:e[r]}},defineProperty(){f(11)},getPrototypeOf(t){return h(t.base_)},setPrototypeOf(){f(12)}},m={};v(M,(t,r)=>{m[t]=function(){return arguments[0]=arguments[0][0],r.apply(this,arguments)}}),m.deleteProperty=function(t,r){return m.set.call(this,t,r,void 0)},m.set=function(t,r,e){return M.set.call(this,t[0],r,e,t[0])};function E(t,r){const e=t[s];return(e?p(e):t)[r]}function et(t,r,e){var o;const n=G(r,e);return n?"value"in n?n.value:(o=n.get)==null?void 0:o.call(t.draft_):void 0}function G(t,r){if(!(r in t))return;let e=h(t);for(;e;){const n=Object.getOwnPropertyDescriptor(e,r);if(n)return n;e=h(e)}}function k(t){t.modified_||(t.modified_=!0,t.parent_&&k(t.parent_))}function N(t){t.copy_||(t.copy_=F(t.base_,t.scope_.immer_.useStrictShallowCopy_))}var nt=class{constructor(t){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(r,e,n)=>{if(typeof r=="function"&&typeof e!="function"){const i=e;e=r;const c=this;return function(a=i,...d){return c.produce(a,T=>e.call(this,T,...d))}}typeof e!="function"&&f(6),n!==void 0&&typeof n!="function"&&f(7);let o;if(l(r)){const i=X(this),c=R(r,void 0);let a=!0;try{o=e(c),a=!1}finally{a?D(i):C(i)}return L(i,n),$(o,i)}else if(!r||typeof r!="object"){if(o=e(r),o===void 0&&(o=r),o===x&&(o=void 0),this.autoFreeze_&&A(o,!0),n){const i=[],c=[];y("Patches").generateReplacementPatches_(r,o,i,c),n(i,c)}return o}else f(1,r)},this.produceWithPatches=(r,e)=>{if(typeof r=="function")return(i,...c)=>this.produceWithPatches(i,a=>r(a,...c));let n,o;return[this.produce(r,e,(i,c)=>{n=i,o=c}),n,o]},typeof(t==null?void 0:t.autoFreeze)=="boolean"&&this.setAutoFreeze(t.autoFreeze),typeof(t==null?void 0:t.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(t.useStrictShallowCopy)}createDraft(t){l(t)||f(8),_(t)&&(t=H(t));const r=X(this),e=R(t,void 0);return e[s].isManual_=!0,C(r),e}finishDraft(t,r){const e=t&&t[s];(!e||!e.isManual_)&&f(9);const{scope_:n}=e;return L(n,r),$(void 0,n)}setAutoFreeze(t){this.autoFreeze_=t}setUseStrictShallowCopy(t){this.useStrictShallowCopy_=t}applyPatches(t,r){let e;for(e=r.length-1;e>=0;e--){const o=r[e];if(o.path.length===0&&o.op==="replace"){t=o.value;break}}e>-1&&(r=r.slice(e+1));const n=y("Patches").applyPatches_;return _(t)?n(t,r):this.produce(t,o=>n(o,r))}};function R(t,r){const e=P(t)?y("MapSet").proxyMap_(t,r):w(t)?y("MapSet").proxySet_(t,r):rt(t,r);return(r?r.scope_:I()).drafts_.push(e),e}function H(t){return _(t)||f(10,t),Q(t)}function Q(t){if(!l(t)||S(t))return t;const r=t[s];let e;if(r){if(!r.modified_)return r.base_;r.finalized_=!0,e=F(t,r.scope_.immer_.useStrictShallowCopy_)}else e=F(t,!0);return v(e,(n,o)=>{U(e,n,Q(o))}),r&&(r.finalized_=!1),e}var u=new nt,ot=u.produce;u.produceWithPatches.bind(u),u.setAutoFreeze.bind(u),u.setUseStrictShallowCopy.bind(u),u.applyPatches.bind(u),u.createDraft.bind(u),u.finishDraft.bind(u);export{l as a,H as c,_ as i,ot as p};