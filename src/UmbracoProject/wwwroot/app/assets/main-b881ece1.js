const Bt="/assets/typescript-f6ead1af.svg",Ft="/assets/vite-4a748afd.svg";function Wt(r){let t=0;const e=o=>{t=o,r.innerHTML=`count is ${t}`};r.addEventListener("click",()=>e(t+1)),e(0)}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const j=window,ot=j.ShadowRoot&&(j.ShadyCSS===void 0||j.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,rt=Symbol(),nt=new WeakMap;let Ht=class{constructor(t,e,o){if(this._$cssResult$=!0,o!==rt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(ot&&t===void 0){const o=e!==void 0&&e.length===1;o&&(t=nt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&nt.set(e,t))}return t}toString(){return this.cssText}};const T=r=>new Ht(typeof r=="string"?r:r+"",void 0,rt),L=(r,...t)=>{const e=r.length===1?r[0]:t.reduce((o,i,n)=>o+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[n+1],r[0]);return new Ht(e,r,rt)},Kt=(r,t)=>{ot?r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const o=document.createElement("style"),i=j.litNonce;i!==void 0&&o.setAttribute("nonce",i),o.textContent=e.cssText,r.appendChild(o)})},st=ot?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const o of t.cssRules)e+=o.cssText;return T(e)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var F;const R=window,at=R.trustedTypes,Xt=at?at.emptyScript:"",lt=R.reactiveElementPolyfillSupport,tt={toAttribute(r,t){switch(t){case Boolean:r=r?Xt:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},Nt=(r,t)=>t!==r&&(t==t||r==r),W={attribute:!0,type:String,converter:tt,reflect:!1,hasChanged:Nt};let x=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,o)=>{const i=this._$Ep(o,e);i!==void 0&&(this._$Ev.set(i,o),t.push(i))}),t}static createProperty(t,e=W){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const o=typeof t=="symbol"?Symbol():"__"+t,i=this.getPropertyDescriptor(t,o,e);i!==void 0&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,o){return{get(){return this[e]},set(i){const n=this[t];this[e]=i,this.requestUpdate(t,n,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||W}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,o=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const i of o)this.createProperty(i,e[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const i of o)e.unshift(st(i))}else t!==void 0&&e.push(st(t));return e}static _$Ep(t,e){const o=e.attribute;return o===!1?void 0:typeof o=="string"?o:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,o;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((o=t.hostConnected)===null||o===void 0||o.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Kt(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var o;return(o=e.hostConnected)===null||o===void 0?void 0:o.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var o;return(o=e.hostDisconnected)===null||o===void 0?void 0:o.call(e)})}attributeChangedCallback(t,e,o){this._$AK(t,o)}_$EO(t,e,o=W){var i;const n=this.constructor._$Ep(t,o);if(n!==void 0&&o.reflect===!0){const s=(((i=o.converter)===null||i===void 0?void 0:i.toAttribute)!==void 0?o.converter:tt).toAttribute(e,o.type);this._$El=t,s==null?this.removeAttribute(n):this.setAttribute(n,s),this._$El=null}}_$AK(t,e){var o;const i=this.constructor,n=i._$Ev.get(t);if(n!==void 0&&this._$El!==n){const s=i.getPropertyOptions(n),c=typeof s.converter=="function"?{fromAttribute:s.converter}:((o=s.converter)===null||o===void 0?void 0:o.fromAttribute)!==void 0?s.converter:tt;this._$El=n,this[n]=c.fromAttribute(e,s.type),this._$El=null}}requestUpdate(t,e,o){let i=!0;t!==void 0&&(((o=o||this.constructor.getPropertyOptions(t)).hasChanged||Nt)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),o.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,o))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((i,n)=>this[n]=i),this._$Ei=void 0);let e=!1;const o=this._$AL;try{e=this.shouldUpdate(o),e?(this.willUpdate(o),(t=this._$ES)===null||t===void 0||t.forEach(i=>{var n;return(n=i.hostUpdate)===null||n===void 0?void 0:n.call(i)}),this.update(o)):this._$Ek()}catch(i){throw e=!1,this._$Ek(),i}e&&this._$AE(o)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(o=>{var i;return(i=o.hostUpdated)===null||i===void 0?void 0:i.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,o)=>this._$EO(o,this[o],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};x.finalized=!0,x.elementProperties=new Map,x.elementStyles=[],x.shadowRootOptions={mode:"open"},lt==null||lt({ReactiveElement:x}),((F=R.reactiveElementVersions)!==null&&F!==void 0?F:R.reactiveElementVersions=[]).push("1.6.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var K;const D=window,A=D.trustedTypes,ut=A?A.createPolicy("lit-html",{createHTML:r=>r}):void 0,et="$lit$",_=`lit$${(Math.random()+"").slice(9)}$`,Tt="?"+_,Jt=`<${Tt}>`,k=document,U=()=>k.createComment(""),H=r=>r===null||typeof r!="object"&&typeof r!="function",Lt=Array.isArray,Yt=r=>Lt(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",X=`[ 	
\f\r]`,z=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ct=/-->/g,dt=/>/g,y=RegExp(`>|${X}(?:([^\\s"'>=/]+)(${X}*=${X}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ht=/'/g,pt=/"/g,It=/^(?:script|style|textarea|title)$/i,Mt=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),b=Mt(1),Vt=Mt(2),C=Symbol.for("lit-noChange"),h=Symbol.for("lit-nothing"),vt=new WeakMap,E=k.createTreeWalker(k,129,null,!1),Zt=(r,t)=>{const e=r.length-1,o=[];let i,n=t===2?"<svg>":"",s=z;for(let a=0;a<e;a++){const l=r[a];let g,u,d=-1,f=0;for(;f<l.length&&(s.lastIndex=f,u=s.exec(l),u!==null);)f=s.lastIndex,s===z?u[1]==="!--"?s=ct:u[1]!==void 0?s=dt:u[2]!==void 0?(It.test(u[2])&&(i=RegExp("</"+u[2],"g")),s=y):u[3]!==void 0&&(s=y):s===y?u[0]===">"?(s=i??z,d=-1):u[1]===void 0?d=-2:(d=s.lastIndex-u[2].length,g=u[1],s=u[3]===void 0?y:u[3]==='"'?pt:ht):s===pt||s===ht?s=y:s===ct||s===dt?s=z:(s=y,i=void 0);const M=s===y&&r[a+1].startsWith("/>")?" ":"";n+=s===z?l+Jt:d>=0?(o.push(g),l.slice(0,d)+et+l.slice(d)+_+M):l+_+(d===-2?(o.push(void 0),a):M)}const c=n+(r[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return[ut!==void 0?ut.createHTML(c):c,o]};class N{constructor({strings:t,_$litType$:e},o){let i;this.parts=[];let n=0,s=0;const c=t.length-1,a=this.parts,[l,g]=Zt(t,e);if(this.el=N.createElement(l,o),E.currentNode=this.el.content,e===2){const u=this.el.content,d=u.firstChild;d.remove(),u.append(...d.childNodes)}for(;(i=E.nextNode())!==null&&a.length<c;){if(i.nodeType===1){if(i.hasAttributes()){const u=[];for(const d of i.getAttributeNames())if(d.endsWith(et)||d.startsWith(_)){const f=g[s++];if(u.push(d),f!==void 0){const M=i.getAttribute(f.toLowerCase()+et).split(_),V=/([.?@])?(.*)/.exec(f);a.push({type:1,index:n,name:V[2],strings:M,ctor:V[1]==="."?Qt:V[1]==="?"?ee:V[1]==="@"?oe:q})}else a.push({type:6,index:n})}for(const d of u)i.removeAttribute(d)}if(It.test(i.tagName)){const u=i.textContent.split(_),d=u.length-1;if(d>0){i.textContent=A?A.emptyScript:"";for(let f=0;f<d;f++)i.append(u[f],U()),E.nextNode(),a.push({type:2,index:++n});i.append(u[d],U())}}}else if(i.nodeType===8)if(i.data===Tt)a.push({type:2,index:n});else{let u=-1;for(;(u=i.data.indexOf(_,u+1))!==-1;)a.push({type:7,index:n}),u+=_.length-1}n++}}static createElement(t,e){const o=k.createElement("template");return o.innerHTML=t,o}}function O(r,t,e=r,o){var i,n,s,c;if(t===C)return t;let a=o!==void 0?(i=e._$Co)===null||i===void 0?void 0:i[o]:e._$Cl;const l=H(t)?void 0:t._$litDirective$;return(a==null?void 0:a.constructor)!==l&&((n=a==null?void 0:a._$AO)===null||n===void 0||n.call(a,!1),l===void 0?a=void 0:(a=new l(r),a._$AT(r,e,o)),o!==void 0?((s=(c=e)._$Co)!==null&&s!==void 0?s:c._$Co=[])[o]=a:e._$Cl=a),a!==void 0&&(t=O(r,a._$AS(r,t.values),a,o)),t}class Gt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:o},parts:i}=this._$AD,n=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:k).importNode(o,!0);E.currentNode=n;let s=E.nextNode(),c=0,a=0,l=i[0];for(;l!==void 0;){if(c===l.index){let g;l.type===2?g=new I(s,s.nextSibling,this,t):l.type===1?g=new l.ctor(s,l.name,l.strings,this,t):l.type===6&&(g=new re(s,this,t)),this._$AV.push(g),l=i[++a]}c!==(l==null?void 0:l.index)&&(s=E.nextNode(),c++)}return n}v(t){let e=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(t,o,e),e+=o.strings.length-2):o._$AI(t[e])),e++}}class I{constructor(t,e,o,i){var n;this.type=2,this._$AH=h,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=o,this.options=i,this._$Cp=(n=i==null?void 0:i.isConnected)===null||n===void 0||n}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=O(this,t,e),H(t)?t===h||t==null||t===""?(this._$AH!==h&&this._$AR(),this._$AH=h):t!==this._$AH&&t!==C&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):Yt(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==h&&H(this._$AH)?this._$AA.nextSibling.data=t:this.$(k.createTextNode(t)),this._$AH=t}g(t){var e;const{values:o,_$litType$:i}=t,n=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=N.createElement(i.h,this.options)),i);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===n)this._$AH.v(o);else{const s=new Gt(n,this),c=s.u(this.options);s.v(o),this.$(c),this._$AH=s}}_$AC(t){let e=vt.get(t.strings);return e===void 0&&vt.set(t.strings,e=new N(t)),e}T(t){Lt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let o,i=0;for(const n of t)i===e.length?e.push(o=new I(this.k(U()),this.k(U()),this,this.options)):o=e[i],o._$AI(n),i++;i<e.length&&(this._$AR(o&&o._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var o;for((o=this._$AP)===null||o===void 0||o.call(this,!1,!0,e);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class q{constructor(t,e,o,i,n){this.type=1,this._$AH=h,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=h}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,o,i){const n=this.strings;let s=!1;if(n===void 0)t=O(this,t,e,0),s=!H(t)||t!==this._$AH&&t!==C,s&&(this._$AH=t);else{const c=t;let a,l;for(t=n[0],a=0;a<n.length-1;a++)l=O(this,c[o+a],e,a),l===C&&(l=this._$AH[a]),s||(s=!H(l)||l!==this._$AH[a]),l===h?t=h:t!==h&&(t+=(l??"")+n[a+1]),this._$AH[a]=l}s&&!i&&this.j(t)}j(t){t===h?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Qt extends q{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===h?void 0:t}}const te=A?A.emptyScript:"";class ee extends q{constructor(){super(...arguments),this.type=4}j(t){t&&t!==h?this.element.setAttribute(this.name,te):this.element.removeAttribute(this.name)}}class oe extends q{constructor(t,e,o,i,n){super(t,e,o,i,n),this.type=5}_$AI(t,e=this){var o;if((t=(o=O(this,t,e,0))!==null&&o!==void 0?o:h)===C)return;const i=this._$AH,n=t===h&&i!==h||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,s=t!==h&&(i===h||n);n&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,o;typeof this._$AH=="function"?this._$AH.call((o=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&o!==void 0?o:this.element,t):this._$AH.handleEvent(t)}}class re{constructor(t,e,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){O(this,t)}}const ft=D.litHtmlPolyfillSupport;ft==null||ft(N,I),((K=D.litHtmlVersions)!==null&&K!==void 0?K:D.litHtmlVersions=[]).push("2.7.3");const ie=(r,t,e)=>{var o,i;const n=(o=e==null?void 0:e.renderBefore)!==null&&o!==void 0?o:t;let s=n._$litPart$;if(s===void 0){const c=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:null;n._$litPart$=s=new I(t.insertBefore(U(),c),c,void 0,e??{})}return s._$AI(r),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var J,Y;class S extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const o=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=o.firstChild),o}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=ie(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return C}}S.finalized=!0,S._$litElement$=!0,(J=globalThis.litElementHydrateSupport)===null||J===void 0||J.call(globalThis,{LitElement:S});const bt=globalThis.litElementPolyfillSupport;bt==null||bt({LitElement:S});((Y=globalThis.litElementVersions)!==null&&Y!==void 0?Y:globalThis.litElementVersions=[]).push("3.3.2");function jt(r,t){return e=>{if(r.indexOf("-")>0===!1){console.error(`${r} is not a valid custom element name. A custom element name should consist of at least two words separated by a hyphen.`);return}window.customElements.get(r)||window.customElements.define(r,e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ne=(r,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(e){e.createProperty(t.key,r)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,r)}};function p(r){return(t,e)=>e!==void 0?((o,i,n)=>{i.constructor.createProperty(n,o)})(r,t,e):ne(r,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function it(r){return p({...r,state:!0})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const se=({finisher:r,descriptor:t})=>(e,o)=>{var i;if(o===void 0){const n=(i=e.originalKey)!==null&&i!==void 0?i:e.key,s=t!=null?{kind:"method",placement:"prototype",key:n,descriptor:t(e.key)}:{...e,key:n};return r!=null&&(s.finisher=function(c){r(c,n)}),s}{const n=e.constructor;t!==void 0&&Object.defineProperty(e,o,t(o)),r==null||r(n,o)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ae(r,t){return se({descriptor:e=>{const o={get(){var i,n;return(n=(i=this.renderRoot)===null||i===void 0?void 0:i.querySelector(r))!==null&&n!==void 0?n:null},enumerable:!0,configurable:!0};if(t){const i=typeof e=="symbol"?Symbol():"__"+e;o.get=function(){var n,s;return this[i]===void 0&&(this[i]=(s=(n=this.renderRoot)===null||n===void 0?void 0:n.querySelector(r))!==null&&s!==void 0?s:null),this[i]}}return o}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Z;((Z=window.HTMLSlotElement)===null||Z===void 0?void 0:Z.prototype.assignedElements)!=null;var le=`.uui-text {
  font-family: 'Lato', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 15px;
  line-height: calc(var(--uui-size-2,6px) * 4);
  -webkit-font-smoothing: antialiased;
}

.uui-text h1,
.uui-text .uui-h1 {
  font-size: var(--uui-type-h1-size,60px);
  line-height: var(--uui-size-layout-4,66px);
  font-weight: 300;
  margin-left: -5px;
  margin-top: var(--uui-size-layout-1,24px);
  margin-bottom: var(--uui-size-layout-1,24px);
}
.uui-text p + h1,
.uui-text p + .uui-h1 {
  margin-top: var(--uui-size-layout-4,66px);
}
.uui-text h1.--no-top-margin,
.uui-text h1:first-child,
.uui-text .uui-h1.--no-top-margin,
.uui-text .uui-h1:first-child {
  margin-top: 0;
}

.uui-text h2,
.uui-text .uui-h2 {
  font-size: var(--uui-type-h2-size,42px);
  line-height: var(--uui-size-layout-3,42px);
  font-weight: 300;
  margin-left: -3px;
  margin-top: var(--uui-size-layout-1,24px);
  margin-bottom: var(--uui-size-layout-1,24px);
}
.uui-text p + h2,
.uui-text p + .uui-h2 {
  margin-top: var(--uui-size-layout-3,42px);
}
.uui-text h2.--no-top-margin,
.uui-text h2:first-child,
.uui-text .uui-h2.--no-top-margin,
.uui-text .uui-h2:first-child {
  margin-top: 0;
}

.uui-text h3,
.uui-text .uui-h3 {
  font-size: var(--uui-type-h3-size,30px);
  line-height: var(--uui-size-large);
  font-weight: 300;
  margin-left: -2px;
  margin-top: var(--uui-size-layout-1,24px);
  margin-bottom: var(--uui-size-layout-1,24px);
}
.uui-text h3.--no-top-margin,
.uui-text h3:first-child,
.uui-text .uui-h3.--no-top-margin,
.uui-text .uui-h3:first-child {
  margin-top: 0;
}

.uui-text h4,
.uui-text .uui-h4 {
  font-size: var(--uui-type-h4-size,21px);
  line-height: 21px;
  font-weight: 400;
  margin-left: -1px;
  margin-top: var(--uui-size-layout-1,24px);
  margin-bottom: var(--uui-size-layout-1,24px);
}
.uui-text h4.--no-top-margin,
.uui-text h4:first-child,
.uui-text .uui-h4.--no-top-margin,
.uui-text .uui-h4:first-child {
  margin-top: 0;
}

.uui-text h5,
.uui-text .uui-h5 {
  font-size: var(--uui-type-h5-size,15px);
  line-height: inherit;
  font-weight: 700;
  margin-left: 0;
  margin-top: var(--uui-size-layout-1,24px);
  margin-bottom: 0;
}

.uui-text h5.--no-top-margin,
.uui-text h5:first-child,
.uui-text .uui-h5.--no-top-margin,
.uui-text .uui-h5:first-child {
  margin-top: 0;
}

.uui-text p {
  margin-top: var(--uui-size-layout-1,24px);
  margin-bottom: var(--uui-size-layout-1,24px);
}
.uui-text p.uui-lead {
  font-size: var(--uui-size-6,18px);
}

.uui-text a:link,
.uui-text a:active {
  color: var(--uui-color-interactive,#1b264f);
}
.uui-text a:hover {
  color: var(--uui-color-interactive-emphasis,#3544b1);
}

.uui-text small {
  display: inline-block;
  font-size: var(--uui-type-small-size,12px);
  line-height: calc(var(--uui-size-2,6px) * 3);
  margin-bottom: var(--uui-size-layout-1,24px);
}

.uui-text blockquote {
  float: right;
  font-size: 15px;
  font-weight: 700;
  font-style: italic;
  margin-top: 0;
  margin-bottom: var(--uui-size-layout-1,24px);
  margin-right: -0.035em;
  max-width: 16em;
  quotes: '“' '”' '‘' '’';
  line-height: inherit;
}

.uui-text blockquote:before {
  content: open-quote;
  margin-left: -0.4em;
  margin-right: 0.08em;
  vertical-align: bottom;
  font-weight: 400;
  font-size: 2em;
}

.uui-text blockquote:after {
  content: close-quote;
  margin-left: 0.04em;
  margin-right: -0.4em;
  vertical-align: bottom;
  font-weight: 400;
  font-size: 2em;
  margin-bottom: -2px;
  display: inline-block;
}

.uui-text ul {
  list-style-type: square;
  padding-left: var(--uui-size-layout-1,24px);
  margin-top: var(--uui-size-layout-1,24px);
  margin-bottom: var(--uui-size-layout-1,24px);
}

.uui-text ol {
  padding-left: var(--uui-size-layout-1,24px);
  margin-top: var(--uui-size-layout-1,24px);
  margin-bottom: var(--uui-size-layout-1,24px);
}
`;const ue=T(le);var ce=Object.defineProperty,de=Object.getOwnPropertyDescriptor,B=(r,t,e,o)=>{for(var i=o>1?void 0:o?de(t,e):t,n=r.length-1,s;n>=0;n--)(s=r[n])&&(i=(o?s(t,e,i):s(i))||i);return o&&i&&ce(t,e,i),i};let P=class extends S{constructor(){super(...arguments),this.headline=null,this._headlineSlotHasContent=!1,this._headlineSlotChanged=r=>{this._headlineSlotHasContent=r.target.assignedNodes({flatten:!0}).length>0},this._headerSlotHasContent=!1,this._headerSlotChanged=r=>{this._headerSlotHasContent=r.target.assignedNodes({flatten:!0}).length>0}}renderHeader(){return b`<div
      id="header"
      class="uui-text"
      style=${this._headerSlotHasContent||this._headlineSlotHasContent||this.headline!==null?"":"display: none"}>
      <h5
        id="headline"
        style=${this._headlineSlotHasContent||this.headline!==null?"":"display: none"}>
        ${this.headline}
        <slot name="headline" @slotchange=${this._headlineSlotChanged}></slot>
      </h5>
      <slot name="header" @slotchange=${this._headerSlotChanged}></slot>
    </div>`}render(){return b`
      ${this.renderHeader()}
      <slot></slot>
    `}};P.styles=[ue,L`
      :host {
        display: block;
        box-shadow: var(--uui-shadow-depth-1,0 1px 3px rgba(0,0,0,0.12) , 0 1px 2px rgba(0,0,0,0.24));
        border-radius: var(--uui-border-radius,3px);
        background-color: var(--uui-color-surface,#fff);
      }

      #header {
        display: block;
        border-bottom: 1px solid var(--uui-color-divider-standalone,#e9e9eb);
        padding: var(--uui-size-space-4,12px) var(--uui-size-space-5,18px);
      }

      slot:not([name]) {
        display: block;
        padding: var(--uui-box-default-padding, var(--uui-size-space-5,18px));
      }
    `];B([p({type:String})],P.prototype,"headline",2);B([it()],P.prototype,"_headlineSlotHasContent",2);B([it()],P.prototype,"_headerSlotHasContent",2);P=B([jt("uui-box")],P);L`
  @keyframes uui-blink {
    0%,
    100% {
      opacity: 0.5;
    }
    50% {
      opacity: 1;
    }
  }
`;T("uui-blink 0.9s infinite both");L`
  @keyframes pulse {
    0% {
      -webkit-transform: translate(-50%, -50%) scale(0.2);
      transform: translate(-50%, -50%) scale(0.2);
      opacity: 0.9;
    }
    80% {
      -webkit-transform: translate(-50%, -50%) scale(1.2);
      transform: translate(-50%, -50%) scale(1.2);
      opacity: 0;
    }
    100% {
      -webkit-transform: translate(-50%, -50%) scale(2.2);
      transform: translate(-50%, -50%) scale(2.2);
      opacity: 0;
    }
  }
`;T("pulse 0.8s ease-in-out infinite both");const he=L`
  @keyframes uui-horizontal-shake {
    10%,
    90% {
      transform: translateX(-1px);
    }

    20%,
    80% {
      transform: translateX(1px);
    }

    30%,
    50%,
    70% {
      transform: translateX(-2px);
    }

    40%,
    60% {
      transform: translateX(2px);
    }
  }
`,pe=T("uui-horizontal-shake 600ms ease backwards"),G=(r,t,e=`This element has to be present for ${r.nodeName} to work appropriate.`)=>{customElements.get(t)||console.warn(`%c ${r.nodeName} requires ${t} element to be registered!`,"font-weight: bold;",e,r)};var ve=Object.defineProperty,fe=Object.getOwnPropertyDescriptor,mt=(r,t,e,o)=>{for(var i=o>1?void 0:o?fe(t,e):t,n=r.length-1,s;n>=0;n--)(s=r[n])&&(i=(o?s(t,e,i):s(i))||i);return o&&i&&ve(t,e,i),i};const be=(r,t)=>{class e extends t{constructor(){super(...arguments),this._labelSlotHasContent=!1}connectedCallback(){super.connectedCallback(),this.label||console.warn(this.tagName+" needs a `label`",this)}labelSlotChanged(i){this._labelSlotHasContent=i.target.assignedNodes({flatten:!0}).length>0}renderLabel(){return b`
        ${this._labelSlotHasContent===!1?b`<span class="label">${this.label}</span>`:""}
        <slot
          class="label"
          style=${this._labelSlotHasContent?"":"visibility: hidden"}
          name=${r||""}
          @slotchange=${this.labelSlotChanged}></slot>
      `}}return mt([p({type:String})],e.prototype,"label",2),mt([it()],e.prototype,"_labelSlotHasContent",2),e};var me=Object.defineProperty,gt=Object.getOwnPropertySymbols,ge=Object.prototype.hasOwnProperty,_e=Object.prototype.propertyIsEnumerable,_t=(r,t,e)=>t in r?me(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,yt=(r,t)=>{for(var e in t||(t={}))ge.call(t,e)&&_t(r,e,t[e]);if(gt)for(var e of gt(t))_e.call(t,e)&&_t(r,e,t[e]);return r};const ye={composed:!0,bubbles:!0};let $e=class extends Event{constructor(t,e={}){super(t,yt(yt({},ye),e)),this.detail=e.detail||{}}};var xe=Object.defineProperty,$t=Object.getOwnPropertySymbols,we=Object.prototype.hasOwnProperty,Ee=Object.prototype.propertyIsEnumerable,xt=(r,t,e)=>t in r?xe(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,wt=(r,t)=>{for(var e in t||(t={}))we.call(t,e)&&xt(r,e,t[e]);if($t)for(var e of $t(t))Ee.call(t,e)&&xt(r,e,t[e]);return r};let Rt=class extends $e{constructor(t,e={}){super(t,wt(wt({},{bubbles:!0}),e))}};Rt.SELECTED="selected";Rt.UNSELECTED="unselected";var Se=Object.defineProperty,Et=Object.getOwnPropertySymbols,Ae=Object.prototype.hasOwnProperty,ke=Object.prototype.propertyIsEnumerable,St=(r,t,e)=>t in r?Se(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,At=(r,t)=>{for(var e in t||(t={}))Ae.call(t,e)&&St(r,e,t[e]);if(Et)for(var e of Et(t))ke.call(t,e)&&St(r,e,t[e]);return r};const Ce={composed:!0,bubbles:!0};class Dt extends Event{constructor(t,e={}){super(t,At(At({},Ce),e)),this.detail=e.detail||{}}}var Oe=Object.defineProperty,kt=Object.getOwnPropertySymbols,Pe=Object.prototype.hasOwnProperty,ze=Object.prototype.propertyIsEnumerable,Ct=(r,t,e)=>t in r?Oe(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,Ot=(r,t)=>{for(var e in t||(t={}))Pe.call(t,e)&&Ct(r,e,t[e]);if(kt)for(var e of kt(t))ze.call(t,e)&&Ct(r,e,t[e]);return r};class w extends Dt{constructor(t,e={}){super(t,Ot(Ot({},{bubbles:!0}),e))}}w.VALID="valid";w.INVALID="invalid";var Ue=Object.defineProperty,Pt=Object.getOwnPropertySymbols,He=Object.prototype.hasOwnProperty,Ne=Object.prototype.propertyIsEnumerable,zt=(r,t,e)=>t in r?Ue(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,Ut=(r,t)=>{for(var e in t||(t={}))He.call(t,e)&&zt(r,e,t[e]);if(Pt)for(var e of Pt(t))Ne.call(t,e)&&zt(r,e,t[e]);return r};class qt extends Dt{constructor(t,e={}){super(t,Ut(Ut({},{bubbles:!0}),e))}}qt.SELECTED="selected";qt.UNSELECTED="unselected";var Te=Object.defineProperty,Le=Object.getOwnPropertyDescriptor,$=(r,t,e,o)=>{for(var i=o>1?void 0:o?Le(t,e):t,n=r.length-1,s;n>=0;n--)(s=r[n])&&(i=(o?s(t,e,i):s(i))||i);return o&&i&&Te(t,e,i),i};const Ie=r=>{class t extends r{constructor(...o){super(...o),this.name="",this._validityState={},this.pristine=!0,this.required=!1,this.requiredMessage="This field is required",this.error=!1,this.errorMessage="This field is invalid",this._value="",this._form=null,this._validators=[],this._formCtrlElements=[],this._onFormSubmit=()=>{this.pristine=!1},this._internals=this.attachInternals(),this.addValidator("valueMissing",()=>this.requiredMessage,()=>this.hasAttribute("required")&&this.hasValue()===!1),this.addValidator("customError",()=>this.errorMessage,()=>this.error),this.addEventListener("blur",()=>{this.pristine=!1})}get value(){return this._value}set value(o){const i=this._value;this._value=o,"ElementInternals"in window&&"setFormValue"in window.ElementInternals.prototype&&this._internals.setFormValue(this._value),this.requestUpdate("value",i)}hasValue(){return this.value!==""}disconnectedCallback(){super.disconnectedCallback(),this._removeFormListeners()}_removeFormListeners(){this._form&&this._form.removeEventListener("submit",this._onFormSubmit)}addValidator(o,i,n){const s={flagKey:o,getMessageMethod:i,checkMethod:n};return this._validators.push(s),s}removeValidator(o){const i=this._validators.indexOf(o);i!==-1&&this._validators.splice(i,1)}addFormControlElement(o){this._formCtrlElements.push(o)}setCustomValidity(o){this._customValidityObject&&this.removeValidator(this._customValidityObject),o!=null&&o!==""&&(this._customValidityObject=this.addValidator("customError",()=>o,()=>!0)),this._runValidators()}_runValidators(){this._validityState={},this._formCtrlElements.forEach(i=>{for(const n in i.validity)n!=="valid"&&i.validity[n]&&(this._validityState[n]=!0,this._internals.setValidity(this._validityState,i.validationMessage,i))}),this._validators.forEach(i=>{i.checkMethod()&&(this._validityState[i.flagKey]=!0,this._internals.setValidity(this._validityState,i.getMessageMethod(),this.getFormElement()))});const o=Object.values(this._validityState).includes(!0);this._validityState.valid=!o,o?this.dispatchEvent(new w(w.INVALID)):(this._internals.setValidity({}),this.dispatchEvent(new w(w.VALID)))}updated(o){super.updated(o),this._runValidators()}submit(){var o;(o=this._form)==null||o.requestSubmit()}formAssociatedCallback(){this._removeFormListeners(),this._form=this._internals.form,this._form&&(this._form.hasAttribute("submit-invalid")&&(this.pristine=!1),this._form.addEventListener("submit",this._onFormSubmit))}formResetCallback(){this.pristine=!0,this.value=this.getAttribute("value")||""}checkValidity(){var o;for(const i in this._formCtrlElements)if(this._formCtrlElements[i].checkValidity()===!1)return!1;return(o=this._internals)==null?void 0:o.checkValidity()}get validity(){return this._validityState}get validationMessage(){var o;return(o=this._internals)==null?void 0:o.validationMessage}}return t.formAssociated=!0,$([p({type:String})],t.prototype,"name",2),$([p()],t.prototype,"value",1),$([p({type:Boolean,reflect:!0})],t.prototype,"pristine",2),$([p({type:Boolean,reflect:!0})],t.prototype,"required",2),$([p({type:String,attribute:"required-message"})],t.prototype,"requiredMessage",2),$([p({type:Boolean,reflect:!0})],t.prototype,"error",2),$([p({type:String,attribute:"error-message"})],t.prototype,"errorMessage",2),t},Me=Vt`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
<path d="M461.884 68.14c-132.601 81.297-228.817 183.87-272.048 235.345l-105.874-82.95-46.751 37.691 182.941 186.049c31.485-80.646 131.198-238.264 252.956-350.252L461.884 68.14z"/>
</svg>`,Ve=Vt`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
<path d="M422.952 371.305L307.064 255.418l115.884-115.887-51.722-51.723L255.34 203.693 139.457 87.812l-51.726 51.719 115.885 115.885L87.731 371.305l51.726 51.721L255.344 307.14l115.884 115.882z"/>
</svg>`;/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Q=r=>r??h;var je=Object.defineProperty,Re=Object.getOwnPropertyDescriptor,m=(r,t,e,o)=>{for(var i=o>1?void 0:o?Re(t,e):t,n=r.length-1,s;n>=0;n--)(s=r[n])&&(i=(o?s(t,e,i):s(i))||i);return o&&i&&je(t,e,i),i};let v=class extends Ie(be("",S)){constructor(){super(),this.type="button",this.disabled=!1,this.look="default",this.color="default",this.compact=!1,this.state=void 0,this.addEventListener("click",this._onHostClick)}getFormElement(){return this._button}_onHostClick(r){var t;if(this.disabled){r.preventDefault(),r.stopImmediatePropagation();return}if((t=this._internals)!=null&&t.form)switch(this.type){case"reset":this._internals.form.reset();break;case"button":break;default:this._internals.form.requestSubmit?this._internals.form.requestSubmit():this._internals.form.dispatchEvent(new SubmitEvent("submit"));break}}updated(r){super.updated(r),r.has("state")&&(clearTimeout(this._resetStateTimeout),(this.state==="success"||this.state==="failed")&&(this._resetStateTimeout=setTimeout(()=>this.state=void 0,2e3)))}renderState(){let r=b``;switch(this.state){case"waiting":G(this,"uui-loader-circle"),r=b`<uui-loader-circle id="loader"></uui-loader-circle>`;break;case"success":G(this,"uui-icon"),r=b`<uui-icon
          name="check"
          .fallback=${Me.strings[0]}></uui-icon>`;break;case"failed":G(this,"uui-icon"),r=b`<uui-icon
          name="wrong"
          .fallback=${Ve.strings[0]}></uui-icon>`;break;default:return""}return b`<div id="state">${r}</div>`}render(){return this.href?b`
          <a
            id="button"
            aria-label=${this.label}
            href=${Q(this.disabled?void 0:this.href)}
            target=${Q(this.target||void 0)}
            rel=${Q(this.target==="_blank"?"noopener noreferrer":void 0)}>
            ${this.renderState()} ${this.renderLabel()}
            <slot name="extra"></slot>
          </a>
        `:b`
          <button
            id="button"
            ?disabled=${this.disabled}
            aria-label=${this.label}>
            ${this.renderState()} ${this.renderLabel()}
            <slot name="extra"></slot>
          </button>
        `}};v.styles=[he,L`
      :host {
        position: relative;
        display: inline-flex;
        margin-left: calc(var(--uui-button-merge-border-left, 0) * -1px);
        --uui-button-padding-left-factor: 3;
        --uui-button-padding-right-factor: 3;
        --uui-button-padding-top-factor: 1;
        --uui-button-padding-bottom-factor: 1;

        min-height: var(--uui-button-height, var(--uui-size-11,33px));
        max-height: 100%;
        cursor: pointer;

        text-align: center;
        font-size: var(--uui-button-font-size, inherit);
        font-weight: var(--uui-button-font-weight, 500);
        transition: background-color 80ms, border-color 80ms, color 80ms;
      }

      :host([compact]) {
        --uui-button-padding-left-factor: 1;
        --uui-button-padding-right-factor: 1;
        --uui-button-padding-top-factor: 0;
        --uui-button-padding-bottom-factor: 0;
      }

      .label {
        line-height: normal; /** needed to reset 'a > span' */
        display: block;
        transition: opacity 120ms;
      }
      :host([state]:not([state=''])) .label {
        opacity: 0;
      }

      #state {
        position: absolute;
        opacity: 0;
        animation-name: fadeIn;
        animation-delay: 40ms;
        animation-duration: 360ms;
        animation-fill-mode: forwards;
        display: flex;
        justify-content: center;
        width: 100%;
        height: 100%;
        align-items: center;
      }

      #button {
        width: 100%;
        background-color: transparent;
        color: inherit;
        font-size: inherit;
        border-radius: inherit;
        font-family: inherit;
        font-weight: inherit;
        text-align: inherit;
        border: none;
        cursor: inherit;

        display: inline-flex;
        align-items: center;
        justify-content: center;

        /* for anchor tag: */
        text-decoration: none;
        color: currentColor;
        line-height: inherit;

        border-width: var(--uui-button-border-width, 1px);
        border-style: solid;
        border-radius: var(
          --uui-button-border-radius,
          var(--uui-border-radius,3px)
        );
        cursor: pointer;

        padding: calc(var(--uui-size-2,6px) * var(--uui-button-padding-top-factor))
          calc(var(--uui-size-2,6px) * var(--uui-button-padding-right-factor))
          calc(var(--uui-size-2,6px) * var(--uui-button-padding-bottom-factor))
          calc(var(--uui-size-2,6px) * var(--uui-button-padding-left-factor));

        box-shadow: none;
      }
      button[disabled]:active,
      a:not([href]):active {
        animation: ${pe};
      }
      #icon-check,
      #icon-wrong {
        fill: currentColor;
        display: grid;
        place-items: center;
        width: 1.5em;
      }

      #loader {
        font-size: 1.5em;
      }
      :host([look]:not([look=''])) #loader {
        color: inherit;
      }

      /* ANIMATIONS */
      @keyframes fadeIn {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }

      @keyframes fadeOut {
        0% {
          opacity: 1;
        }
        100% {
          opacity: 0;
        }
      }

      /* edge case for default color */
      :host(:not([color]):not([look='primary'])) #button,
      :host([color='']:not([look='primary'])) #button,
      :host([color='default']:not([look='primary'])) #button {
        --uui-button-contrast-hover: var(--uui-color-default-emphasis,#3544b1);
      }

      :host([color='warning'][look='outline']) #button,
      :host([color='warning'][look='placeholder']) #button {
        --uui-button-contrast-hover: var(--color-standalone);
      }

      /** Button color attribute: */
      #button {
        --color: var(--uui-color-default,#1b264f);
        --color-standalone: var(--uui-color-default-standalone,rgb(28, 35, 59));
        --color-emphasis: var(--uui-color-default-emphasis,#3544b1);
        --color-contrast: var(--uui-color-default-contrast,#fff);
      }
      :host([color='positive']) #button {
        --color: var(--uui-color-positive,#25aa60);
        --color-standalone: var(--uui-color-positive-standalone,rgb(38, 156, 91));
        --color-emphasis: var(--uui-color-positive-emphasis,rgb(43, 197, 112));
        --color-contrast: var(--uui-color-positive-contrast,#fff);
      }
      :host([color='warning']) #button {
        --color: var(--uui-color-warning,#fad634);
        --color-standalone: var(--uui-color-warning-standalone,rgb(224, 193, 51));
        --color-emphasis: var(--uui-color-warning-emphasis,rgb(251, 224, 101));
        --color-contrast: var(--uui-color-warning-contrast,#000);
      }
      :host([color='danger']) #button {
        --color: var(--uui-color-danger,#d42054);
        --color-standalone: var(--uui-color-danger-standalone,rgb(191, 33, 78));
        --color-emphasis: var(--uui-color-danger-emphasis,rgb(226, 60, 107));
        --color-contrast: var(--uui-color-danger-contrast,white);
      }
      :host([disabled]) #button {
        --color: var(--uui-color-disabled,#f3f3f5);
        --color-standalone: var(--uui-color-disabled-contrast,#c4c4c4);
        --color-emphasis: var(--uui-color-disabled,#f3f3f5);
        --color-contrast: var(--uui-color-disabled-contrast,#c4c4c4);

        cursor: default;
      }

      /** Button look attribute: */
      /* DEFAULT */
      #button {
        background-color: var(--uui-button-background-color, transparent);
        color: var(--uui-button-contrast, var(--color-standalone));
        border-color: var(--uui-button-border-color, transparent);
      }
      :host(:not([disabled]):hover) #button {
        background-color: var(
          --uui-button-background-color-hover,
          var(--uui-color-surface-emphasis,rgb(250, 250, 250))
        );
        color: var(--uui-button-contrast-hover, var(--color-standalone));
        border-color: var(--uui-button-border-color-hover, transparent);
      }
      :host([disabled]) #button {
        background-color: var(
          --uui-button-background-color-disabled,
          transparent
        );
        color: var(--uui-button-contrast-disabled, var(--color-contrast));
        border-color: var(--uui-button-border-color-disabled, transparent);
      }

      /* PRIMARY */
      :host([look='primary']) #button {
        background-color: var(--uui-button-background-color, var(--color));
        color: var(--uui-button-contrast, var(--color-contrast));
        border-color: var(--uui-button-border-color, transparent);

        /* special for primary: */
        font-weight: var(--uui-button-font-weight, 700);
      }
      :host([look='primary']:hover) #button {
        background-color: var(
          --uui-button-background-color-hover,
          var(--color-emphasis)
        );
        color: var(--uui-button-contrast-hover, var(--color-contrast));
        border-color: var(--uui-button-border-color-hover, transparent);
      }
      :host([look='primary'][disabled]) #button {
        background-color: var(
          --uui-button-background-color-disabled,
          var(--color)
        );
        color: var(--uui-button-contrast-disabled, var(--color-contrast));
        border-color: var(--uui-button-border-color-disabled, var(--color));
      }
      /* SECONDARY */
      :host([look='secondary']) #button {
        background-color: var(
          --uui-button-background-color,
          var(--uui-color-surface-alt,#f3f3f5)
        );
        color: var(--uui-button-contrast, var(--color-standalone));
        border-color: var(--uui-button-border-color, transparent);

        /* special for secondary: */
        font-weight: var(--uui-button-font-weight, 700);
      }
      :host([look='secondary']:hover) #button {
        background-color: var(
          --uui-button-background-color-hover,
          var(--uui-color-surface-emphasis,rgb(250, 250, 250))
        );
        color: var(--uui-button-contrast-hover, var(--color-standalone));
        border-color: var(--uui-button-border-color-hover, transparent);
      }
      :host([look='secondary'][disabled]) #button {
        background-color: var(
          --uui-button-background-color-disabled,
          var(--color)
        );
        color: var(--uui-button-contrast-disabled, var(--color-contrast));
        border-color: var(--uui-button-border-color-disabled, var(--color));
      }

      /* OUTLINE */
      :host([look='outline']) #button {
        background-color: var(--uui-button-background-color, transparent);
        color: var(--uui-button-contrast, var(--color-standalone));
        border-color: var(--uui-button-border-color, --color-standalone);

        /* special for outline: */
        font-weight: var(--uui-button-font-weight, 700);
      }
      :host([look='outline']:not([disabled]):hover) #button {
        background-color: var(--uui-button-background-color-hover, transparent);
        color: var(--uui-button-contrast-hover, var(--color-emphasis));
        border-color: var(
          --uui-button-border-color-hover,
          var(--color-emphasis)
        );
      }
      :host([look='outline'][disabled]) #button {
        background-color: var(
          --uui-button-background-color-disabled,
          transparent
        );
        color: var(--uui-button-contrast-disabled, var(--color-standalone));
        border-color: var(
          --uui-button-border-color-disabled,
          var(--color-standalone)
        );
      }

      /* PLACEHOLDER */
      :host([look='placeholder']) #button {
        border-style: dashed;
        background-color: var(--uui-button-background-color, transparent);
        color: var(--uui-button-contrast, var(--color-standalone));
        border-color: var(
          --uui-button-border-color,
          var(--uui-color-border-standalone,#c2c2c2)
        );
      }
      :host([look='placeholder']:not([disabled]):hover) #button {
        background-color: var(--uui-button-background-color-hover, transparent);
        color: var(--uui-button-contrast-hover, var(--color-standalone));
        border-color: var(--uui-button-border-color-hover, --color-standalone);
      }
      :host([look='placeholder'][disabled]) #button {
        background-color: var(
          --uui-button-background-color-disabled,
          var(--color)
        );
        color: var(--uui-button-contrast-disabled, var(--color-standalone));
        border-color: var(
          --uui-button-border-color-disabled,
          var(--color-standalone)
        );
      }
    `];m([p({type:String,reflect:!0})],v.prototype,"type",2);m([p({type:Boolean,reflect:!0})],v.prototype,"disabled",2);m([p({reflect:!0})],v.prototype,"look",2);m([p({reflect:!0})],v.prototype,"color",2);m([p({type:Boolean,reflect:!0})],v.prototype,"compact",2);m([p({type:String,reflect:!0})],v.prototype,"state",2);m([p({type:String})],v.prototype,"href",2);m([p({type:String})],v.prototype,"target",2);m([ae("#button")],v.prototype,"_button",2);v=m([jt("uui-button")],v);let De=document.querySelector("#app").innerText;document.querySelector("#app").innerHTML=`
  <uui-box headline="${De}">
    <a href="https://vitejs.dev" target="_blank">
      <img src="/app${Ft}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="/app${Bt}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <div class="card">
      <uui-button look="primary" id="counter" type="button"></uui-button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </uui-box>
`;Wt(document.querySelector("#counter"));
