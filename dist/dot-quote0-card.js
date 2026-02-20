function t(t,e,s,i){var n,o=arguments.length,r=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,s,i);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(o<3?n(r):o>3?n(e,s,r):n(e,s))||r);return o>3&&r&&Object.defineProperty(e,s,r),r}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=globalThis,s=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),n=new WeakMap;let o=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(s&&void 0===t){const s=void 0!==e&&1===e.length;s&&(t=n.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&n.set(e,t))}return t}toString(){return this.cssText}};const r=(t,...e)=>{const s=1===t.length?t[0]:e.reduce((e,s,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1],t[0]);return new o(s,t,i)},a=s?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return(t=>new o("string"==typeof t?t:t+"",void 0,i))(e)})(t):t,{is:d,defineProperty:c,getOwnPropertyDescriptor:l,getOwnPropertyNames:h,getOwnPropertySymbols:p,getPrototypeOf:u}=Object,_=globalThis,v=_.trustedTypes,g=v?v.emptyScript:"",f=_.reactiveElementPolyfillSupport,m=(t,e)=>t,x={toAttribute(t,e){switch(e){case Boolean:t=t?g:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},y=(t,e)=>!d(t,e),$={attribute:!0,type:String,converter:x,reflect:!1,useDefault:!1,hasChanged:y};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),_.litPropertyMetadata??=new WeakMap;let b=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=$){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);void 0!==i&&c(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:n}=l(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:i,set(e){const o=i?.call(this);n?.call(this,e),this.requestUpdate(t,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??$}static _$Ei(){if(this.hasOwnProperty(m("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(m("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(m("properties"))){const t=this.properties,e=[...h(t),...p(t)];for(const s of e)this.createProperty(s,t[s])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,s]of e)this.elementProperties.set(t,s)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const s=this._$Eu(t,e);void 0!==s&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eu(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,i)=>{if(s)t.adoptedStyleSheets=i.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const s of i){const i=document.createElement("style"),n=e.litNonce;void 0!==n&&i.setAttribute("nonce",n),i.textContent=s.cssText,t.appendChild(i)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(void 0!==i&&!0===s.reflect){const n=(void 0!==s.converter?.toAttribute?s.converter:x).toAttribute(e,s.type);this._$Em=t,null==n?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(t,e){const s=this.constructor,i=s._$Eh.get(t);if(void 0!==i&&this._$Em!==i){const t=s.getPropertyOptions(i),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:x;this._$Em=i;const o=n.fromAttribute(e,t.type);this[i]=o??this._$Ej?.get(i)??o,this._$Em=null}}requestUpdate(t,e,s,i=!1,n){if(void 0!==t){const o=this.constructor;if(!1===i&&(n=this[t]),s??=o.getPropertyOptions(t),!((s.hasChanged??y)(n,e)||s.useDefault&&s.reflect&&n===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,s))))return;this.C(t,e,s)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:i,wrapped:n},o){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??e??this[t]),!0!==n||void 0!==o)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),!0===i&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,s]of t){const{wrapped:t}=s,i=this[e];!0!==t||this._$AL.has(e)||void 0===i||this.C(e,void 0,s,i)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[m("elementProperties")]=new Map,b[m("finalized")]=new Map,f?.({ReactiveElement:b}),(_.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const w=globalThis,A=t=>t,S=w.trustedTypes,E=S?S.createPolicy("lit-html",{createHTML:t=>t}):void 0,C="$lit$",k=`lit$${Math.random().toFixed(9).slice(2)}$`,T="?"+k,P=`<${T}>`,O=document,M=()=>O.createComment(""),U=t=>null===t||"object"!=typeof t&&"function"!=typeof t,D=Array.isArray,N="[ \t\n\f\r]",I=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,R=/-->/g,H=/>/g,z=RegExp(`>|${N}(?:([^\\s"'>=/]+)(${N}*=${N}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),j=/'/g,L=/"/g,B=/^(?:script|style|textarea|title)$/i,q=(t=>(e,...s)=>({_$litType$:t,strings:e,values:s}))(1),F=Symbol.for("lit-noChange"),W=Symbol.for("lit-nothing"),V=new WeakMap,Q=O.createTreeWalker(O,129);function G(t,e){if(!D(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==E?E.createHTML(e):e}const J=(t,e)=>{const s=t.length-1,i=[];let n,o=2===e?"<svg>":3===e?"<math>":"",r=I;for(let e=0;e<s;e++){const s=t[e];let a,d,c=-1,l=0;for(;l<s.length&&(r.lastIndex=l,d=r.exec(s),null!==d);)l=r.lastIndex,r===I?"!--"===d[1]?r=R:void 0!==d[1]?r=H:void 0!==d[2]?(B.test(d[2])&&(n=RegExp("</"+d[2],"g")),r=z):void 0!==d[3]&&(r=z):r===z?">"===d[0]?(r=n??I,c=-1):void 0===d[1]?c=-2:(c=r.lastIndex-d[2].length,a=d[1],r=void 0===d[3]?z:'"'===d[3]?L:j):r===L||r===j?r=z:r===R||r===H?r=I:(r=z,n=void 0);const h=r===z&&t[e+1].startsWith("/>")?" ":"";o+=r===I?s+P:c>=0?(i.push(a),s.slice(0,c)+C+s.slice(c)+k+h):s+k+(-2===c?e:h)}return[G(t,o+(t[s]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),i]};class K{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let n=0,o=0;const r=t.length-1,a=this.parts,[d,c]=J(t,e);if(this.el=K.createElement(d,s),Q.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=Q.nextNode())&&a.length<r;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(C)){const e=c[o++],s=i.getAttribute(t).split(k),r=/([.?@])?(.*)/.exec(e);a.push({type:1,index:n,name:r[2],strings:s,ctor:"."===r[1]?et:"?"===r[1]?st:"@"===r[1]?it:tt}),i.removeAttribute(t)}else t.startsWith(k)&&(a.push({type:6,index:n}),i.removeAttribute(t));if(B.test(i.tagName)){const t=i.textContent.split(k),e=t.length-1;if(e>0){i.textContent=S?S.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],M()),Q.nextNode(),a.push({type:2,index:++n});i.append(t[e],M())}}}else if(8===i.nodeType)if(i.data===T)a.push({type:2,index:n});else{let t=-1;for(;-1!==(t=i.data.indexOf(k,t+1));)a.push({type:7,index:n}),t+=k.length-1}n++}}static createElement(t,e){const s=O.createElement("template");return s.innerHTML=t,s}}function Z(t,e,s=t,i){if(e===F)return e;let n=void 0!==i?s._$Co?.[i]:s._$Cl;const o=U(e)?void 0:e._$litDirective$;return n?.constructor!==o&&(n?._$AO?.(!1),void 0===o?n=void 0:(n=new o(t),n._$AT(t,s,i)),void 0!==i?(s._$Co??=[])[i]=n:s._$Cl=n),void 0!==n&&(e=Z(t,n._$AS(t,e.values),n,i)),e}class X{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??O).importNode(e,!0);Q.currentNode=i;let n=Q.nextNode(),o=0,r=0,a=s[0];for(;void 0!==a;){if(o===a.index){let e;2===a.type?e=new Y(n,n.nextSibling,this,t):1===a.type?e=new a.ctor(n,a.name,a.strings,this,t):6===a.type&&(e=new nt(n,this,t)),this._$AV.push(e),a=s[++r]}o!==a?.index&&(n=Q.nextNode(),o++)}return Q.currentNode=O,i}p(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class Y{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=W,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Z(this,t,e),U(t)?t===W||null==t||""===t?(this._$AH!==W&&this._$AR(),this._$AH=W):t!==this._$AH&&t!==F&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>D(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==W&&U(this._$AH)?this._$AA.nextSibling.data=t:this.T(O.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:s}=t,i="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=K.createElement(G(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{const t=new X(i,this),s=t.u(this.options);t.p(e),this.T(s),this._$AH=t}}_$AC(t){let e=V.get(t.strings);return void 0===e&&V.set(t.strings,e=new K(t)),e}k(t){D(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const n of t)i===e.length?e.push(s=new Y(this.O(M()),this.O(M()),this,this.options)):s=e[i],s._$AI(n),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=A(t).nextSibling;A(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class tt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,n){this.type=1,this._$AH=W,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=W}_$AI(t,e=this,s,i){const n=this.strings;let o=!1;if(void 0===n)t=Z(this,t,e,0),o=!U(t)||t!==this._$AH&&t!==F,o&&(this._$AH=t);else{const i=t;let r,a;for(t=n[0],r=0;r<n.length-1;r++)a=Z(this,i[s+r],e,r),a===F&&(a=this._$AH[r]),o||=!U(a)||a!==this._$AH[r],a===W?t=W:t!==W&&(t+=(a??"")+n[r+1]),this._$AH[r]=a}o&&!i&&this.j(t)}j(t){t===W?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class et extends tt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===W?void 0:t}}class st extends tt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==W)}}class it extends tt{constructor(t,e,s,i,n){super(t,e,s,i,n),this.type=5}_$AI(t,e=this){if((t=Z(this,t,e,0)??W)===F)return;const s=this._$AH,i=t===W&&s!==W||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==W&&(s===W||i);i&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class nt{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){Z(this,t)}}const ot=w.litHtmlPolyfillSupport;ot?.(K,Y),(w.litHtmlVersions??=[]).push("3.3.2");const rt=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class at extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,s)=>{const i=s?.renderBefore??e;let n=i._$litPart$;if(void 0===n){const t=s?.renderBefore??null;i._$litPart$=n=new Y(e.insertBefore(M(),t),t,void 0,s??{})}return n._$AI(t),n})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return F}}at._$litElement$=!0,at.finalized=!0,rt.litElementHydrateSupport?.({LitElement:at});const dt=rt.litElementPolyfillSupport;dt?.({LitElement:at}),(rt.litElementVersions??=[]).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ct=t=>(e,s)=>{void 0!==s?s.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},lt={attribute:!0,type:String,converter:x,reflect:!1,hasChanged:y},ht=(t=lt,e,s)=>{const{kind:i,metadata:n}=s;let o=globalThis.litPropertyMetadata.get(n);if(void 0===o&&globalThis.litPropertyMetadata.set(n,o=new Map),"setter"===i&&((t=Object.create(t)).wrapped=!0),o.set(s.name,t),"accessor"===i){const{name:i}=s;return{set(s){const n=e.get.call(this);e.set.call(this,s),this.requestUpdate(i,n,t,!0,s)},init(e){return void 0!==e&&this.C(i,void 0,t,e),e}}}if("setter"===i){const{name:i}=s;return function(s){const n=this[i];e.call(this,s),this.requestUpdate(i,n,t,!0,s)}}throw Error("Unsupported decorator location: "+i)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function pt(t){return function(t){return(e,s)=>"object"==typeof s?ht(t,e,s):((t,e,s)=>{const i=e.hasOwnProperty(s);return e.constructor.createProperty(s,t),i?Object.getOwnPropertyDescriptor(e,s):void 0})(t,e,s)}({...t,state:!0,attribute:!1})}const ut="dot_quote0",_t=r`
  :host {
    --dot-card-bg: var(--ha-card-background, var(--card-background-color, #fff));
    --dot-text: var(--primary-text-color, #212121);
    --dot-secondary: var(--secondary-text-color, #727272);
    --dot-accent: var(--primary-color, #03a9f4);
    --dot-divider: var(--divider-color, rgba(0, 0, 0, 0.12));
    --dot-success: var(--success-color, #4caf50);
    --dot-error: var(--error-color, #f44336);
    --dot-surface: var(--secondary-background-color, #f5f5f5);
    --dot-ripple: var(--primary-color, #03a9f4);
  }

  ha-card {
    overflow: hidden;
  }

  /* ---- Header ---- */

  .card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 16px 8px;
  }

  .device-info {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .device-name {
    font-size: 1.1em;
    font-weight: 500;
    color: var(--dot-text);
    letter-spacing: 0.01em;
  }

  .device-meta {
    font-size: 0.8em;
    color: var(--dot-secondary);
    letter-spacing: 0.02em;
  }

  /* Material Design chip-style online badge */
  .status-chip {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    font-size: 0.72em;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    padding: 4px 10px 4px 8px;
    border-radius: 16px;
  }

  .status-chip-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    flex-shrink: 0;
  }

  .status-chip.online {
    background: color-mix(in srgb, var(--dot-success) 15%, transparent);
    color: var(--dot-success);
  }

  .status-chip.online .status-chip-dot {
    background: var(--dot-success);
  }

  .status-chip.offline {
    background: color-mix(in srgb, var(--dot-error) 15%, transparent);
    color: var(--dot-error);
  }

  .status-chip.offline .status-chip-dot {
    background: var(--dot-error);
  }

  /* ---- Section / Status grid ---- */

  .section {
    padding: 8px 16px 12px;
  }

  .section-title {
    font-size: 0.72em;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--dot-secondary);
    margin-bottom: 8px;
  }

  .status-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6px 16px;
  }

  .status-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.875em;
    padding: 2px 0;
  }

  .status-label {
    color: var(--dot-secondary);
  }

  .status-value {
    color: var(--dot-text);
    font-weight: 500;
  }

  /* ---- Divider ---- */

  .divider {
    height: 1px;
    background: var(--dot-divider);
    margin: 0 16px;
  }

  /* ---- Preview ---- */

  .preview-section {
    padding: 12px 16px;
  }

  .preview-frame {
    border-radius: 8px;
    overflow: hidden;
    border: 1.5px solid var(--dot-divider);
    display: block;
    width: 100%;
    aspect-ratio: 296 / 152;
    position: relative;
    background: var(--dot-surface);
  }

  .preview-frame img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
    image-rendering: pixelated;
  }

  /* SVG fallback inherits color for monochromatic theming */
  .preview-fallback {
    display: block;
    width: 100%;
    height: 100%;
    color: var(--dot-text);
  }

  /* ---- Expandable sections ---- */

  .expand-section {
    /* no extra padding; header handles it */
  }

  .expand-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 16px;
    cursor: pointer;
    user-select: none;
    border-radius: 4px;
    transition: background 0.15s ease;
  }

  .expand-header:hover {
    background: color-mix(in srgb, var(--dot-accent) 8%, transparent);
  }

  .expand-header .section-title {
    margin-bottom: 0;
  }

  .expand-chevron {
    color: var(--dot-secondary);
    transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    flex-shrink: 0;
  }

  .expand-chevron.open {
    transform: rotate(180deg);
  }

  /* Animate height via max-height trick */
  .expand-content {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .expand-content.open {
    max-height: 600px;
  }

  .expand-body {
    padding: 4px 16px 16px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  /* ---- Material text field / select sizing ---- */

  ha-textfield,
  ha-select {
    display: block;
    width: 100%;
  }

  /* ---- Two-column row for selects ---- */

  .md-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
  }

  /* ---- File input styled as Material outlined button ---- */

  .file-input-group {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .file-input-label {
    font-size: 0.75em;
    color: var(--dot-secondary);
    letter-spacing: 0.02em;
  }

  .file-input-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 14px;
    border: 1.5px solid var(--dot-divider);
    border-radius: 4px;
    font-size: 0.875em;
    color: var(--dot-text);
    cursor: pointer;
    transition: border-color 0.15s, background 0.15s;
    background: transparent;
  }

  .file-input-btn:hover {
    border-color: var(--dot-accent);
    background: color-mix(in srgb, var(--dot-accent) 6%, transparent);
  }

  .file-input-btn ha-icon {
    color: var(--dot-accent);
    --mdc-icon-size: 18px;
  }

  .file-input-btn input[type="file"] {
    display: none;
  }

  /* ---- Button row (mwc-button) ---- */

  .md-button-row {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    padding-top: 4px;
  }

  .md-button-row mwc-button {
    --mdc-theme-primary: var(--dot-accent);
  }

  /* ---- Toast ---- */

  .card-footer {
    padding: 0 16px 12px;
  }

  .toast {
    font-size: 0.8em;
    padding: 8px 12px;
    border-radius: 4px;
    text-align: center;
    letter-spacing: 0.02em;
  }

  .toast.success {
    background: color-mix(in srgb, var(--dot-success) 15%, transparent);
    color: var(--dot-success);
  }

  .toast.error {
    background: color-mix(in srgb, var(--dot-error) 15%, transparent);
    color: var(--dot-error);
  }
`;let vt=null;async function gt(t){if(vt&&Date.now()-vt.ts<3e4)return vt.devices;const[e,s]=await Promise.all([t.connection.sendMessagePromise({type:"config/entity_registry/list"}),t.connection.sendMessagePromise({type:"config/device_registry/list"})]),i=e.filter(t=>t.platform===ut),n=new Set(i.map(t=>t.device_id)),o=new Map;for(const t of s)n.has(t.id)&&o.set(t.id,t);const r=new Map;for(const t of i){const e=o.get(t.device_id);if(!e)continue;let s=r.get(t.device_id);if(!s){const i=e.identifiers.find(([t])=>t===ut)?.[1]??"";s={ha_device_id:t.device_id,dot_device_id:i,name:e.name||`Quote/0 ${i.slice(-4)}`,entities:{}},r.set(t.device_id,s)}const i=t.unique_id.replace(`${s.dot_device_id}_`,"");s.entities[i]=t.entity_id}const a=Array.from(r.values());return vt={devices:a,ts:Date.now()},a}let ft=class extends at{constructor(){super(...arguments),this._devices=[],this._loading=!0}set hass(t){const e=this._hass;this._hass=t,t&&t!==e&&this._loadDevices()}get hass(){return this._hass}async _loadDevices(){try{this._devices=await gt(this._hass)}catch{this._devices=[]}this._loading=!1}setConfig(t){this._config={...t}}_dispatchChange(t){const e=new CustomEvent("config-changed",{detail:{config:t},bubbles:!0,composed:!0});this.dispatchEvent(e)}_deviceChanged(t){const e=t.target.value;this._dispatchChange({...this._config,device_id:e})}_checkboxChanged(t,e){const s=e.target.checked;this._dispatchChange({...this._config,[t]:s})}render(){return this._config?q`
      <div class="editor">
        <div class="field">
          <label>Device</label>
          ${this._loading?q`<div class="hint">Loading devices...</div>`:q`
                <select @change=${this._deviceChanged}>
                  <option value="" ?selected=${!this._config.device_id}>
                    -- Select a Quote/0 device --
                  </option>
                  ${this._devices.map(t=>q`
                      <option
                        value=${t.dot_device_id}
                        ?selected=${this._config.device_id===t.dot_device_id}
                      >
                        ${t.name}
                      </option>
                    `)}
                </select>
                ${0===this._devices.length?q`<div class="hint">
                      No Dot. Quote/0 devices found. Make sure the integration
                      is installed and configured.
                    </div>`:""}
              `}
        </div>
        <div class="field">
          <label>
            <input
              type="checkbox"
              .checked=${!1!==this._config.show_preview}
              @change=${t=>this._checkboxChanged("show_preview",t)}
            />
            Show e-ink preview
          </label>
        </div>
        <div class="field">
          <label>
            <input
              type="checkbox"
              .checked=${!1!==this._config.show_send_text}
              @change=${t=>this._checkboxChanged("show_send_text",t)}
            />
            Show Send Text controls
          </label>
        </div>
        <div class="field">
          <label>
            <input
              type="checkbox"
              .checked=${!1!==this._config.show_send_image}
              @change=${t=>this._checkboxChanged("show_send_image",t)}
            />
            Show Send Image controls
          </label>
        </div>
      </div>
    `:q``}};ft.styles=r`
    .editor {
      padding: 8px;
    }
    .field {
      margin-bottom: 12px;
    }
    .field > label {
      display: block;
      font-size: 0.85em;
      margin-bottom: 4px;
      color: var(--secondary-text-color);
    }
    .field select {
      width: 100%;
      box-sizing: border-box;
      padding: 8px;
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 4px;
      background: var(
        --ha-card-background,
        var(--card-background-color, #fff)
      );
      color: var(--primary-text-color);
      font-size: 0.9em;
    }
    .field label input[type="checkbox"] {
      margin-right: 6px;
    }
    .hint {
      font-size: 0.8em;
      color: var(--error-color, #db4437);
      margin-top: 4px;
    }
  `,t([pt()],ft.prototype,"_config",void 0),t([pt()],ft.prototype,"_devices",void 0),t([pt()],ft.prototype,"_loading",void 0),ft=t([ct("dot-quote0-card-editor")],ft);let mt=class extends at{constructor(){super(...arguments),this._resolved=!1,this._textTitle="",this._textMessage="",this._textSignature="",this._imageData="",this._ditherType="DIFFUSION",this._border=0,this._toast="",this._toastType="success",this._sending=!1,this._sendTextExpanded=!1,this._sendImageExpanded=!1}set hass(t){const e=this._hass;this._hass=t,this.requestUpdate("hass",e),t&&this._config?.device_id&&!this._resolved&&this._resolveDevice()}get hass(){return this._hass}async _resolveDevice(){try{const t=await gt(this._hass);this._device=function(t,e){return t.find(t=>t.dot_device_id===e)}(t,this._config.device_id),this._resolved=!0}catch{}}static getConfigElement(){return document.createElement("dot-quote0-card-editor")}static getStubConfig(){return{device_id:"",show_preview:!0,show_send_text:!0,show_send_image:!0}}setConfig(t){if(!t.device_id)throw new Error("Please select a device");this._config=t,this._resolved=!1,this._hass&&this._resolveDevice()}getCardSize(){return 8}getGridOptions(){return{rows:8,columns:12,min_rows:4,min_columns:6}}_eid(t){return this._device?.entities[t]}_stateOf(t){const e=this._eid(t);return e?this.hass?.states[e]?.state??"unavailable":"unavailable"}_attrOf(t,e){const s=this._eid(t);if(s)return this.hass?.states[s]?.attributes?.[e]}_isOnline(){return"on"===this._stateOf("online")}_getPreviewImages(){if(!this._device)return[];for(const t of Object.keys(this._device.entities)){const e=this._device.entities[t],s=this.hass?.states[e];if(s?.attributes?.current_images)return s.attributes.current_images}return[]}async _showToast(t,e){this._toast=t,this._toastType=e,await new Promise(t=>setTimeout(t,3e3)),this._toast=""}async _handleSendText(){if(!this._sending){this._sending=!0;try{await this.hass.callService(ut,"send_text",{device_id:this._config.device_id,title:this._textTitle||void 0,message:this._textMessage||void 0,signature:this._textSignature||void 0,refresh_now:!0}),this._showToast("Text sent!","success")}catch(t){this._showToast(t.message||"Failed to send","error")}finally{this._sending=!1}}}async _handleSendImage(){if(!this._sending&&this._imageData){this._sending=!0;try{await this.hass.callService(ut,"send_image",{device_id:this._config.device_id,image:this._imageData,dither_type:this._ditherType,border:this._border,refresh_now:!0}),this._showToast("Image sent!","success")}catch(t){this._showToast(t.message||"Failed to send","error")}finally{this._sending=!1}}}async _handleNextContent(){const t=this._eid("next_content");if(t)try{await this.hass.callService("button","press",{entity_id:t}),this._showToast("Switched to next content","success")}catch(t){this._showToast(t.message||"Failed","error")}}_handleFileSelect(t){const e=t.target,s=e.files?.[0];if(!s)return;const i=new FileReader;i.onload=()=>{const t=i.result;this._imageData=t.split(",")[1]||t},i.readAsDataURL(s)}_renderStatus(){const t=this._isOnline(),e=this._stateOf("power_state"),s=this._stateOf("battery_status"),i=this._stateOf("wifi_signal"),n=this._stateOf("firmware_version"),o=this._stateOf("last_render"),r=this._stateOf("next_render_power"),a=this._device?.name||`Quote/0 ${this._config.device_id.slice(-4)}`;return q`
      <div class="card-header">
        <div class="device-info">
          <span class="device-name">${a}</span>
          <span class="device-meta">FW ${n}</span>
        </div>
        <span class="status-chip ${t?"online":"offline"}">
          <span class="status-chip-dot"></span>
          ${t?"Online":"Offline"}
        </span>
      </div>
      <div class="section">
        <div class="section-title">Status</div>
        <div class="status-grid">
          <div class="status-item">
            <span class="status-label">Power</span>
            <span class="status-value">${e}</span>
          </div>
          <div class="status-item">
            <span class="status-label">Battery</span>
            <span class="status-value">${s}</span>
          </div>
          <div class="status-item">
            <span class="status-label">Wi-Fi</span>
            <span class="status-value">${"unavailable"!==i?i+" dBm":i}</span>
          </div>
          <div class="status-item">
            <span class="status-label">Last render</span>
            <span class="status-value">${o}</span>
          </div>
          <div class="status-item">
            <span class="status-label">Next render</span>
            <span class="status-value">${r}</span>
          </div>
        </div>
      </div>
    `}_renderPreview(){if(!1===this._config.show_preview)return W;const t=this._getPreviewImages(),e=t.length>0?t[0]:null;return q`
      <div class="divider"></div>
      <div class="preview-section">
        <div class="section-title">Display Preview</div>
        <div class="preview-frame">
          ${e?q`<img src="${e}" alt="Current display" />`:q`
                <svg class="preview-fallback" viewBox="0 0 296 152" xmlns="http://www.w3.org/2000/svg" aria-label="No preview available">
                  <defs>
                    <pattern id="dotgrid" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                      <circle cx="1" cy="1" r="0.7" fill="currentColor" opacity="0.15"/>
                    </pattern>
                  </defs>
                  <rect width="296" height="152" fill="url(#dotgrid)"/>
                  <!-- Monitor frame -->
                  <rect x="108" y="44" width="80" height="52" rx="5" ry="5"
                    fill="none" stroke="currentColor" stroke-width="2.5" opacity="0.35"/>
                  <!-- Screen area -->
                  <rect x="113" y="49" width="70" height="38" rx="2" ry="2"
                    fill="currentColor" opacity="0.08"/>
                  <!-- Horizontal lines inside screen (text lines) -->
                  <line x1="120" y1="60" x2="176" y2="60" stroke="currentColor" stroke-width="1.5" opacity="0.25"/>
                  <line x1="120" y1="68" x2="166" y2="68" stroke="currentColor" stroke-width="1.5" opacity="0.25"/>
                  <line x1="120" y1="76" x2="172" y2="76" stroke="currentColor" stroke-width="1.5" opacity="0.25"/>
                  <!-- Stand -->
                  <line x1="138" y1="96" x2="158" y2="96" stroke="currentColor" stroke-width="2.5" opacity="0.35"/>
                  <line x1="148" y1="96" x2="148" y2="106" stroke="currentColor" stroke-width="2.5" opacity="0.35"/>
                  <line x1="140" y1="106" x2="156" y2="106" stroke="currentColor" stroke-width="2.5" opacity="0.35"/>
                  <!-- Label -->
                  <text x="148" y="126" text-anchor="middle"
                    font-size="9" font-family="Roboto, sans-serif" letter-spacing="0.5"
                    fill="currentColor" opacity="0.4">NO PREVIEW AVAILABLE</text>
                </svg>
              `}
        </div>
      </div>
    `}_renderSendText(){return!1===this._config.show_send_text?W:q`
      <div class="divider"></div>
      <div class="expand-section">
        <div
          class="expand-header"
          @click=${()=>this._sendTextExpanded=!this._sendTextExpanded}
          role="button"
          aria-expanded=${this._sendTextExpanded}
        >
          <span class="section-title">Send Text</span>
          <ha-icon
            class="expand-chevron ${this._sendTextExpanded?"open":""}"
            icon="mdi:chevron-down"
          ></ha-icon>
        </div>
        <div class="expand-content ${this._sendTextExpanded?"open":""}">
          <div class="expand-body">
            <ha-textfield
              label="Title"
              .value=${this._textTitle}
              @input=${t=>this._textTitle=t.target.value}
              style="width:100%"
            ></ha-textfield>
            <ha-textfield
              label="Message"
              .value=${this._textMessage}
              @input=${t=>this._textMessage=t.target.value}
              helper="Use \\n for line breaks"
              style="width:100%"
            ></ha-textfield>
            <ha-textfield
              label="Signature"
              .value=${this._textSignature}
              @input=${t=>this._textSignature=t.target.value}
              placeholder="e.g. 2025-08-04 20:00"
              style="width:100%"
            ></ha-textfield>
            <div class="md-button-row">
              <mwc-button
                raised
                label="Send Text"
                @click=${this._handleSendText}
                ?disabled=${this._sending||!this._textTitle&&!this._textMessage}
              ></mwc-button>
              <mwc-button
                outlined
                label="Next Content"
                @click=${this._handleNextContent}
                ?disabled=${this._sending}
              ></mwc-button>
            </div>
          </div>
        </div>
      </div>
    `}_renderSendImage(){return!1===this._config.show_send_image?W:q`
      <div class="divider"></div>
      <div class="expand-section">
        <div
          class="expand-header"
          @click=${()=>this._sendImageExpanded=!this._sendImageExpanded}
          role="button"
          aria-expanded=${this._sendImageExpanded}
        >
          <span class="section-title">Send Image</span>
          <ha-icon
            class="expand-chevron ${this._sendImageExpanded?"open":""}"
            icon="mdi:chevron-down"
          ></ha-icon>
        </div>
        <div class="expand-content ${this._sendImageExpanded?"open":""}">
          <div class="expand-body">
            <div class="file-input-group">
              <span class="file-input-label">Image (296×152 PNG)</span>
              <label class="file-input-btn">
                <ha-icon icon="mdi:image-plus"></ha-icon>
                <span>${this._imageData?"Image selected":"Choose file…"}</span>
                <input
                  type="file"
                  accept="image/png"
                  @change=${this._handleFileSelect}
                />
              </label>
            </div>
            <div class="md-row">
              <ha-select
                label="Dither"
                .value=${this._ditherType}
                @selected=${t=>{const e=t.target;e.value&&(this._ditherType=e.value)}}
                @closed=${t=>t.stopPropagation()}
                fixedMenuPosition
                naturalMenuWidth
              >
                <ha-list-item value="DIFFUSION">Diffusion</ha-list-item>
                <ha-list-item value="ORDERED">Ordered</ha-list-item>
                <ha-list-item value="NONE">None</ha-list-item>
              </ha-select>
              <ha-select
                label="Border"
                .value=${String(this._border)}
                @selected=${t=>{const e=t.target;void 0!==e.value&&(this._border=parseInt(e.value))}}
                @closed=${t=>t.stopPropagation()}
                fixedMenuPosition
                naturalMenuWidth
              >
                <ha-list-item value="0">White</ha-list-item>
                <ha-list-item value="1">Black</ha-list-item>
              </ha-select>
            </div>
            <div class="md-button-row">
              <mwc-button
                raised
                label="Send Image"
                @click=${this._handleSendImage}
                ?disabled=${this._sending||!this._imageData}
              ></mwc-button>
            </div>
          </div>
        </div>
      </div>
    `}render(){return this._config&&this.hass?this._resolved?this._device?q`
      <ha-card>
        ${this._renderStatus()} ${this._renderPreview()}
        ${this._renderSendText()} ${this._renderSendImage()}
        ${this._toast?q`<div class="card-footer">
              <div class="toast ${this._toastType}">${this._toast}</div>
            </div>`:W}
      </ha-card>
    `:q`<ha-card><div class="section">Device not found. Check the integration.</div></ha-card>`:q`<ha-card><div class="section">Discovering device...</div></ha-card>`:q`<ha-card>Loading...</ha-card>`}};mt.styles=_t,t([pt()],mt.prototype,"_config",void 0),t([pt()],mt.prototype,"_device",void 0),t([pt()],mt.prototype,"_resolved",void 0),t([pt()],mt.prototype,"_textTitle",void 0),t([pt()],mt.prototype,"_textMessage",void 0),t([pt()],mt.prototype,"_textSignature",void 0),t([pt()],mt.prototype,"_imageData",void 0),t([pt()],mt.prototype,"_ditherType",void 0),t([pt()],mt.prototype,"_border",void 0),t([pt()],mt.prototype,"_toast",void 0),t([pt()],mt.prototype,"_toastType",void 0),t([pt()],mt.prototype,"_sending",void 0),t([pt()],mt.prototype,"_sendTextExpanded",void 0),t([pt()],mt.prototype,"_sendImageExpanded",void 0),mt=t([ct("dot-quote0-card")],mt),window.customCards=window.customCards||[],window.customCards.push({type:"dot-quote0-card",name:"Dot. Quote/0",description:"Control and monitor your Dot. Quote/0 e-ink device",preview:!1});export{mt as DotQuote0Card};
