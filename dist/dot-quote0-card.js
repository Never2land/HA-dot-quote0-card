function e(e,t,i,s){var r,n=arguments.length,o=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(o=(n<3?r(o):n>3?r(t,i,o):r(t,i))||o);return n>3&&o&&Object.defineProperty(t,i,o),o}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,i=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),r=new WeakMap;let n=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(i&&void 0===e){const i=void 0!==t&&1===t.length;i&&(e=r.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&r.set(t,e))}return e}toString(){return this.cssText}};const o=(e,...t)=>{const i=1===e.length?e[0]:t.reduce((t,i,s)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[s+1],e[0]);return new n(i,e,s)},a=i?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return(e=>new n("string"==typeof e?e:e+"",void 0,s))(t)})(e):e,{is:d,defineProperty:c,getOwnPropertyDescriptor:l,getOwnPropertyNames:h,getOwnPropertySymbols:p,getPrototypeOf:u}=Object,v=globalThis,m=v.trustedTypes,f=m?m.emptyScript:"",g=v.reactiveElementPolyfillSupport,_=(e,t)=>e,x={toAttribute(e,t){switch(t){case Boolean:e=e?f:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},b=(e,t)=>!d(e,t),y={attribute:!0,type:String,converter:x,reflect:!1,useDefault:!1,hasChanged:b};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),v.litPropertyMetadata??=new WeakMap;let $=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=y){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(e,i,t);void 0!==s&&c(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){const{get:s,set:r}=l(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:s,set(t){const n=s?.call(this);r?.call(this,t),this.requestUpdate(e,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??y}static _$Ei(){if(this.hasOwnProperty(_("elementProperties")))return;const e=u(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(_("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(_("properties"))){const e=this.properties,t=[...h(e),...p(e)];for(const i of t)this.createProperty(i,e[i])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,i]of t)this.elementProperties.set(e,i)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const i=this._$Eu(e,t);void 0!==i&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(a(e))}else void 0!==e&&t.push(a(e));return t}static _$Eu(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,s)=>{if(i)e.adoptedStyleSheets=s.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const i of s){const s=document.createElement("style"),r=t.litNonce;void 0!==r&&s.setAttribute("nonce",r),s.textContent=i.cssText,e.appendChild(s)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){const i=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,i);if(void 0!==s&&!0===i.reflect){const r=(void 0!==i.converter?.toAttribute?i.converter:x).toAttribute(t,i.type);this._$Em=e,null==r?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(e,t){const i=this.constructor,s=i._$Eh.get(e);if(void 0!==s&&this._$Em!==s){const e=i.getPropertyOptions(s),r="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:x;this._$Em=s;const n=r.fromAttribute(t,e.type);this[s]=n??this._$Ej?.get(s)??n,this._$Em=null}}requestUpdate(e,t,i,s=!1,r){if(void 0!==e){const n=this.constructor;if(!1===s&&(r=this[e]),i??=n.getPropertyOptions(e),!((i.hasChanged??b)(r,t)||i.useDefault&&i.reflect&&r===this._$Ej?.get(e)&&!this.hasAttribute(n._$Eu(e,i))))return;this.C(e,t,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:s,wrapped:r},n){i&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,n??t??this[e]),!0!==r||void 0!==n)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),!0===s&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,i]of e){const{wrapped:e}=i,s=this[t];!0!==e||this._$AL.has(t)||void 0===s||this.C(t,void 0,i,s)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};$.elementStyles=[],$.shadowRootOptions={mode:"open"},$[_("elementProperties")]=new Map,$[_("finalized")]=new Map,g?.({ReactiveElement:$}),(v.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const w=globalThis,A=e=>e,S=w.trustedTypes,E=S?S.createPolicy("lit-html",{createHTML:e=>e}):void 0,k="$lit$",C=`lit$${Math.random().toFixed(9).slice(2)}$`,T="?"+C,P=`<${T}>`,O=document,M=()=>O.createComment(""),U=e=>null===e||"object"!=typeof e&&"function"!=typeof e,D=Array.isArray,N="[ \t\n\f\r]",z=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,I=/-->/g,R=/>/g,H=RegExp(`>|${N}(?:([^\\s"'>=/]+)(${N}*=${N}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),j=/'/g,L=/"/g,B=/^(?:script|style|textarea|title)$/i,q=(e=>(t,...i)=>({_$litType$:e,strings:t,values:i}))(1),F=Symbol.for("lit-noChange"),W=Symbol.for("lit-nothing"),V=new WeakMap,Q=O.createTreeWalker(O,129);function G(e,t){if(!D(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==E?E.createHTML(t):t}const J=(e,t)=>{const i=e.length-1,s=[];let r,n=2===t?"<svg>":3===t?"<math>":"",o=z;for(let t=0;t<i;t++){const i=e[t];let a,d,c=-1,l=0;for(;l<i.length&&(o.lastIndex=l,d=o.exec(i),null!==d);)l=o.lastIndex,o===z?"!--"===d[1]?o=I:void 0!==d[1]?o=R:void 0!==d[2]?(B.test(d[2])&&(r=RegExp("</"+d[2],"g")),o=H):void 0!==d[3]&&(o=H):o===H?">"===d[0]?(o=r??z,c=-1):void 0===d[1]?c=-2:(c=o.lastIndex-d[2].length,a=d[1],o=void 0===d[3]?H:'"'===d[3]?L:j):o===L||o===j?o=H:o===I||o===R?o=z:(o=H,r=void 0);const h=o===H&&e[t+1].startsWith("/>")?" ":"";n+=o===z?i+P:c>=0?(s.push(a),i.slice(0,c)+k+i.slice(c)+C+h):i+C+(-2===c?t:h)}return[G(e,n+(e[i]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),s]};class K{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let r=0,n=0;const o=e.length-1,a=this.parts,[d,c]=J(e,t);if(this.el=K.createElement(d,i),Q.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(s=Q.nextNode())&&a.length<o;){if(1===s.nodeType){if(s.hasAttributes())for(const e of s.getAttributeNames())if(e.endsWith(k)){const t=c[n++],i=s.getAttribute(e).split(C),o=/([.?@])?(.*)/.exec(t);a.push({type:1,index:r,name:o[2],strings:i,ctor:"."===o[1]?te:"?"===o[1]?ie:"@"===o[1]?se:ee}),s.removeAttribute(e)}else e.startsWith(C)&&(a.push({type:6,index:r}),s.removeAttribute(e));if(B.test(s.tagName)){const e=s.textContent.split(C),t=e.length-1;if(t>0){s.textContent=S?S.emptyScript:"";for(let i=0;i<t;i++)s.append(e[i],M()),Q.nextNode(),a.push({type:2,index:++r});s.append(e[t],M())}}}else if(8===s.nodeType)if(s.data===T)a.push({type:2,index:r});else{let e=-1;for(;-1!==(e=s.data.indexOf(C,e+1));)a.push({type:7,index:r}),e+=C.length-1}r++}}static createElement(e,t){const i=O.createElement("template");return i.innerHTML=e,i}}function Z(e,t,i=e,s){if(t===F)return t;let r=void 0!==s?i._$Co?.[s]:i._$Cl;const n=U(t)?void 0:t._$litDirective$;return r?.constructor!==n&&(r?._$AO?.(!1),void 0===n?r=void 0:(r=new n(e),r._$AT(e,i,s)),void 0!==s?(i._$Co??=[])[s]=r:i._$Cl=r),void 0!==r&&(t=Z(e,r._$AS(e,t.values),r,s)),t}class X{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,s=(e?.creationScope??O).importNode(t,!0);Q.currentNode=s;let r=Q.nextNode(),n=0,o=0,a=i[0];for(;void 0!==a;){if(n===a.index){let t;2===a.type?t=new Y(r,r.nextSibling,this,e):1===a.type?t=new a.ctor(r,a.name,a.strings,this,e):6===a.type&&(t=new re(r,this,e)),this._$AV.push(t),a=i[++o]}n!==a?.index&&(r=Q.nextNode(),n++)}return Q.currentNode=O,s}p(e){let t=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class Y{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,s){this.type=2,this._$AH=W,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Z(this,e,t),U(e)?e===W||null==e||""===e?(this._$AH!==W&&this._$AR(),this._$AH=W):e!==this._$AH&&e!==F&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>D(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==W&&U(this._$AH)?this._$AA.nextSibling.data=e:this.T(O.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:i}=e,s="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=K.createElement(G(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(t);else{const e=new X(s,this),i=e.u(this.options);e.p(t),this.T(i),this._$AH=e}}_$AC(e){let t=V.get(e.strings);return void 0===t&&V.set(e.strings,t=new K(e)),t}k(e){D(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const r of e)s===t.length?t.push(i=new Y(this.O(M()),this.O(M()),this,this.options)):i=t[s],i._$AI(r),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const t=A(e).nextSibling;A(e).remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class ee{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,s,r){this.type=1,this._$AH=W,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=W}_$AI(e,t=this,i,s){const r=this.strings;let n=!1;if(void 0===r)e=Z(this,e,t,0),n=!U(e)||e!==this._$AH&&e!==F,n&&(this._$AH=e);else{const s=e;let o,a;for(e=r[0],o=0;o<r.length-1;o++)a=Z(this,s[i+o],t,o),a===F&&(a=this._$AH[o]),n||=!U(a)||a!==this._$AH[o],a===W?e=W:e!==W&&(e+=(a??"")+r[o+1]),this._$AH[o]=a}n&&!s&&this.j(e)}j(e){e===W?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class te extends ee{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===W?void 0:e}}class ie extends ee{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==W)}}class se extends ee{constructor(e,t,i,s,r){super(e,t,i,s,r),this.type=5}_$AI(e,t=this){if((e=Z(this,e,t,0)??W)===F)return;const i=this._$AH,s=e===W&&i!==W||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,r=e!==W&&(i===W||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class re{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Z(this,e)}}const ne=w.litHtmlPolyfillSupport;ne?.(K,Y),(w.litHtmlVersions??=[]).push("3.3.2");const oe=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ae extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,i)=>{const s=i?.renderBefore??t;let r=s._$litPart$;if(void 0===r){const e=i?.renderBefore??null;s._$litPart$=r=new Y(t.insertBefore(M(),e),e,void 0,i??{})}return r._$AI(e),r})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return F}}ae._$litElement$=!0,ae.finalized=!0,oe.litElementHydrateSupport?.({LitElement:ae});const de=oe.litElementPolyfillSupport;de?.({LitElement:ae}),(oe.litElementVersions??=[]).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ce=e=>(t,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},le={attribute:!0,type:String,converter:x,reflect:!1,hasChanged:b},he=(e=le,t,i)=>{const{kind:s,metadata:r}=i;let n=globalThis.litPropertyMetadata.get(r);if(void 0===n&&globalThis.litPropertyMetadata.set(r,n=new Map),"setter"===s&&((e=Object.create(e)).wrapped=!0),n.set(i.name,e),"accessor"===s){const{name:s}=i;return{set(i){const r=t.get.call(this);t.set.call(this,i),this.requestUpdate(s,r,e,!0,i)},init(t){return void 0!==t&&this.C(s,void 0,e,t),t}}}if("setter"===s){const{name:s}=i;return function(i){const r=this[s];t.call(this,i),this.requestUpdate(s,r,e,!0,i)}}throw Error("Unsupported decorator location: "+s)};
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
function pe(e){return function(e){return(t,i)=>"object"==typeof i?he(e,t,i):((e,t,i)=>{const s=t.hasOwnProperty(i);return t.constructor.createProperty(i,e),s?Object.getOwnPropertyDescriptor(t,i):void 0})(e,t,i)}({...e,state:!0,attribute:!1})}const ue="dot_quote0",ve=o`
  /* ---- MD3 tokens ---- */
  :host {
    --md-primary: var(--primary-color, #6750a4);
    --md-on-primary: var(--text-primary-color, #fff);
    --md-surface: var(--ha-card-background, var(--card-background-color, #fff));
    --md-on-surface: var(--primary-text-color, #1c1b1f);
    --md-on-surface-var: var(--secondary-text-color, #49454f);
    --md-outline: var(--divider-color, rgba(0, 0, 0, 0.12));
    --md-surface-var: var(--secondary-background-color, #f5f5f5);
    --md-success: var(--success-color, #4caf50);
    --md-error: var(--error-color, #f44336);
    --md-r-sm: 8px;
    --md-r-md: 12px;
    --md-r-lg: 16px;
    --md-r-full: 50px;
  }

  ha-card {
    overflow: hidden;
  }

  /* ---- Header ---- */

  .md3-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px 16px 10px;
    background: color-mix(in srgb, var(--md-primary) 7%, var(--md-surface));
  }

  .header-info {
    display: flex;
    flex-direction: column;
    gap: 1px;
  }

  .device-name {
    font-size: 1.05em;
    font-weight: 600;
    color: var(--md-on-surface);
    letter-spacing: 0.01em;
  }

  .device-fw {
    font-size: 0.72em;
    color: var(--md-on-surface-var);
    letter-spacing: 0.03em;
  }

  /* Online pill — MD3 assist chip style */
  .online-pill {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    font-size: 0.68em;
    font-weight: 700;
    letter-spacing: 0.07em;
    text-transform: uppercase;
    padding: 4px 10px 4px 7px;
    border-radius: var(--md-r-full);
  }

  .online-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    flex-shrink: 0;
  }

  .online-pill.online {
    background: color-mix(in srgb, var(--md-success) 16%, transparent);
    color: var(--md-success);
  }

  .online-pill.online .online-dot {
    background: var(--md-success);
    box-shadow: 0 0 0 2px color-mix(in srgb, var(--md-success) 30%, transparent);
  }

  .online-pill.offline {
    background: color-mix(in srgb, var(--md-error) 14%, transparent);
    color: var(--md-error);
  }

  .online-pill.offline .online-dot {
    background: var(--md-error);
  }

  /* ---- Status grid — 3 equal columns ---- */

  .stat-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    border-top: 1px solid var(--md-outline);
  }

  .stat-cell {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 10px 6px 9px;
    gap: 3px;
    border-right: 1px solid var(--md-outline);
  }

  .stat-cell.no-border {
    border-right: none;
  }

  .stat-icon {
    --mdc-icon-size: 17px;
    color: var(--md-primary);
  }

  .stat-icon.battery {
    color: color-mix(in srgb, var(--md-success) 80%, var(--md-primary));
  }

  .stat-icon.wifi {
    color: color-mix(in srgb, var(--md-primary) 70%, var(--md-success));
  }

  .stat-label {
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 0.09em;
    color: var(--md-on-surface-var);
  }

  .stat-value {
    font-size: 0.8em;
    font-weight: 600;
    color: var(--md-on-surface);
    line-height: 1.2;
  }

  /* ---- Render-times row ---- */

  .render-row {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 4px;
    padding: 5px 14px 6px;
    font-size: 0.76em;
    color: var(--md-on-surface-var);
    border-top: 1px solid var(--md-outline);
    background: color-mix(in srgb, var(--md-surface-var) 55%, transparent);
  }

  .render-icon {
    --mdc-icon-size: 13px;
    color: var(--md-on-surface-var);
    flex-shrink: 0;
  }

  .render-item strong {
    font-weight: 600;
    color: var(--md-on-surface);
  }

  .render-sep {
    color: var(--md-outline);
    padding: 0 2px;
  }

  /* ---- Divider ---- */

  .divider {
    height: 1px;
    background: var(--md-outline);
  }

  /* ---- Preview ---- */

  .preview-section {
    padding: 10px 14px 12px;
  }

  .section-label {
    font-size: 0.62em;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--md-on-surface-var);
    margin-bottom: 7px;
  }

  .preview-frame {
    border-radius: var(--md-r-md);
    overflow: hidden;
    border: 1px solid var(--md-outline);
    width: 100%;
    aspect-ratio: 296 / 152;
    background: var(--md-surface-var);
  }

  .preview-frame img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
    image-rendering: pixelated;
  }

  .preview-fallback {
    display: block;
    width: 100%;
    height: 100%;
    color: var(--md-on-surface);
  }

  /* ---- Expand sections ---- */

  .expand-header {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 14px;
    cursor: pointer;
    user-select: none;
    transition: background 0.15s ease;
  }

  .expand-header:hover {
    background: color-mix(in srgb, var(--md-on-surface) 5%, transparent);
  }

  .expand-header.open {
    background: color-mix(in srgb, var(--md-primary) 8%, transparent);
  }

  .expand-lead-icon {
    --mdc-icon-size: 17px;
    color: var(--md-on-surface-var);
    flex-shrink: 0;
    transition: color 0.15s;
  }

  .expand-header.open .expand-lead-icon {
    color: var(--md-primary);
  }

  .expand-label {
    flex: 1;
    font-size: 0.78em;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.09em;
    color: var(--md-on-surface-var);
    transition: color 0.15s;
  }

  .expand-header.open .expand-label {
    color: var(--md-primary);
  }

  .expand-chevron {
    --mdc-icon-size: 18px;
    color: var(--md-on-surface-var);
    transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), color 0.15s;
    flex-shrink: 0;
  }

  .expand-chevron.open {
    transform: rotate(180deg);
    color: var(--md-primary);
  }

  .expand-content {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .expand-content.open {
    max-height: 640px;
  }

  .expand-body {
    padding: 2px 14px 16px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  /* ---- ha-textfield ---- */

  ha-textfield {
    display: block;
    width: 100%;
  }

  /* ---- File input ---- */

  .file-field {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .file-field-label {
    font-size: 0.7em;
    color: var(--md-on-surface-var);
    letter-spacing: 0.02em;
  }

  .file-input-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 9px 14px;
    border: 1.5px solid var(--md-outline);
    border-radius: var(--md-r-sm);
    font-size: 0.84em;
    color: var(--md-primary);
    cursor: pointer;
    background: transparent;
    transition: border-color 0.15s, background 0.15s;
  }

  .file-input-btn:hover {
    border-color: var(--md-primary);
    background: color-mix(in srgb, var(--md-primary) 6%, transparent);
  }

  .file-input-btn ha-icon {
    --mdc-icon-size: 16px;
    flex-shrink: 0;
  }

  .file-input-btn input[type="file"] {
    display: none;
  }

  /* ---- Native selects (MD3 outlined style) ---- */

  .two-col {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }

  .md3-field {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .md3-field-label {
    font-size: 0.7em;
    color: var(--md-on-surface-var);
    letter-spacing: 0.02em;
  }

  .md3-select {
    width: 100%;
    padding: 9px 32px 9px 11px;
    border: 1.5px solid var(--md-outline);
    border-radius: var(--md-r-sm);
    background: transparent;
    color: var(--md-on-surface);
    font-size: 0.875em;
    font-family: inherit;
    cursor: pointer;
    appearance: none;
    -webkit-appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24'%3E%3Cpath fill='%23888' d='M7 10l5 5 5-5z'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 7px center;
    box-sizing: border-box;
  }

  .md3-select:focus {
    border-color: var(--md-primary);
    outline: none;
  }

  /* ---- MD3 native buttons ---- */

  .action-row {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    padding-top: 2px;
  }

  .md3-btn {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    padding: 9px 20px;
    border-radius: var(--md-r-full);
    font-size: 0.84em;
    font-weight: 500;
    letter-spacing: 0.01em;
    font-family: inherit;
    cursor: pointer;
    border: none;
    transition: box-shadow 0.15s, filter 0.15s, background 0.15s;
    white-space: nowrap;
  }

  .md3-btn ha-icon {
    --mdc-icon-size: 16px;
    flex-shrink: 0;
  }

  .md3-btn.filled {
    background: var(--md-primary);
    color: var(--md-on-primary);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2), 0 1px 2px rgba(0, 0, 0, 0.12);
  }

  .md3-btn.filled:hover:not(:disabled) {
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.22), 0 1px 4px rgba(0, 0, 0, 0.14);
    filter: brightness(1.06);
  }

  .md3-btn.filled:active:not(:disabled) {
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.18);
    filter: brightness(0.96);
  }

  .md3-btn.tonal {
    background: color-mix(in srgb, var(--md-primary) 14%, var(--md-surface));
    color: var(--md-primary);
  }

  .md3-btn.tonal:hover:not(:disabled) {
    background: color-mix(in srgb, var(--md-primary) 22%, var(--md-surface));
  }

  .md3-btn:disabled {
    opacity: 0.38;
    cursor: not-allowed;
    box-shadow: none;
    filter: none;
  }

  /* ---- Toast ---- */

  .card-footer {
    padding: 0 14px 12px;
  }

  .toast {
    font-size: 0.78em;
    padding: 8px 12px;
    border-radius: var(--md-r-sm);
    text-align: center;
    letter-spacing: 0.02em;
  }

  .toast.success {
    background: color-mix(in srgb, var(--md-success) 15%, transparent);
    color: var(--md-success);
  }

  .toast.error {
    background: color-mix(in srgb, var(--md-error) 15%, transparent);
    color: var(--md-error);
  }
`;let me=null;async function fe(e){if(me&&Date.now()-me.ts<3e4)return me.devices;const[t,i]=await Promise.all([e.connection.sendMessagePromise({type:"config/entity_registry/list"}),e.connection.sendMessagePromise({type:"config/device_registry/list"})]),s=t.filter(e=>e.platform===ue),r=new Set(s.map(e=>e.device_id)),n=new Map;for(const e of i)r.has(e.id)&&n.set(e.id,e);const o=new Map;for(const e of s){const t=n.get(e.device_id);if(!t)continue;let i=o.get(e.device_id);if(!i){const s=t.identifiers.find(([e])=>e===ue)?.[1]??"";i={ha_device_id:e.device_id,dot_device_id:s,name:t.name||`Quote/0 ${s.slice(-4)}`,entities:{}},o.set(e.device_id,i)}const s=e.unique_id.replace(`${i.dot_device_id}_`,"");i.entities[s]=e.entity_id}const a=Array.from(o.values());return me={devices:a,ts:Date.now()},a}let ge=class extends ae{constructor(){super(...arguments),this._devices=[],this._loading=!0}set hass(e){const t=this._hass;this._hass=e,e&&e!==t&&this._loadDevices()}get hass(){return this._hass}async _loadDevices(){try{this._devices=await fe(this._hass)}catch{this._devices=[]}this._loading=!1}setConfig(e){this._config={...e}}_dispatchChange(e){const t=new CustomEvent("config-changed",{detail:{config:e},bubbles:!0,composed:!0});this.dispatchEvent(t)}_deviceChanged(e){const t=e.target.value;this._dispatchChange({...this._config,device_id:t})}_checkboxChanged(e,t){const i=t.target.checked;this._dispatchChange({...this._config,[e]:i})}render(){return this._config?q`
      <div class="editor">
        <div class="field">
          <label>Device</label>
          ${this._loading?q`<div class="hint">Loading devices...</div>`:q`
                <select @change=${this._deviceChanged}>
                  <option value="" ?selected=${!this._config.device_id}>
                    -- Select a Quote/0 device --
                  </option>
                  ${this._devices.map(e=>q`
                      <option
                        value=${e.dot_device_id}
                        ?selected=${this._config.device_id===e.dot_device_id}
                      >
                        ${e.name}
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
              @change=${e=>this._checkboxChanged("show_preview",e)}
            />
            Show e-ink preview
          </label>
        </div>
        <div class="field">
          <label>
            <input
              type="checkbox"
              .checked=${!1!==this._config.show_send_text}
              @change=${e=>this._checkboxChanged("show_send_text",e)}
            />
            Show Send Text controls
          </label>
        </div>
        <div class="field">
          <label>
            <input
              type="checkbox"
              .checked=${!1!==this._config.show_send_image}
              @change=${e=>this._checkboxChanged("show_send_image",e)}
            />
            Show Send Image controls
          </label>
        </div>
      </div>
    `:q``}};ge.styles=o`
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
  `,e([pe()],ge.prototype,"_config",void 0),e([pe()],ge.prototype,"_devices",void 0),e([pe()],ge.prototype,"_loading",void 0),ge=e([ce("dot-quote0-card-editor")],ge);let _e=class extends ae{constructor(){super(...arguments),this._resolved=!1,this._textTitle="",this._textMessage="",this._textSignature="",this._imageData="",this._ditherType="DIFFUSION",this._border=0,this._toast="",this._toastType="success",this._sending=!1,this._sendTextExpanded=!1,this._sendImageExpanded=!1}set hass(e){const t=this._hass;this._hass=e,this.requestUpdate("hass",t),e&&this._config?.device_id&&!this._resolved&&this._resolveDevice()}get hass(){return this._hass}async _resolveDevice(){try{const e=await fe(this._hass);this._device=function(e,t){return e.find(e=>e.dot_device_id===t)}(e,this._config.device_id),this._resolved=!0}catch{}}static getConfigElement(){return document.createElement("dot-quote0-card-editor")}static getStubConfig(){return{device_id:"",show_preview:!0,show_send_text:!0,show_send_image:!0}}setConfig(e){if(!e.device_id)throw new Error("Please select a device");this._config=e,this._resolved=!1,this._hass&&this._resolveDevice()}getCardSize(){return 8}getGridOptions(){return{rows:8,columns:12,min_rows:4,min_columns:6}}_eid(e){return this._device?.entities[e]}_stateOf(e){const t=this._eid(e);return t?this.hass?.states[t]?.state??"unavailable":"unavailable"}_isOnline(){return"on"===this._stateOf("online")}_getPreviewImages(){if(!this._device)return[];for(const e of Object.keys(this._device.entities)){const t=this._device.entities[e],i=this.hass?.states[t];if(i?.attributes?.current_images)return i.attributes.current_images}return[]}_batteryIcon(e){const t=parseInt(e);return isNaN(t)?"mdi:battery-unknown":t>=90?"mdi:battery":t>=70?"mdi:battery-80":t>=50?"mdi:battery-60":t>=30?"mdi:battery-40":t>=10?"mdi:battery-20":"mdi:battery-outline"}_wifiIcon(e){const t=parseFloat(e);return isNaN(t)?"mdi:wifi-off":t>=-50?"mdi:wifi-strength-4":t>=-60?"mdi:wifi-strength-3":t>=-70?"mdi:wifi-strength-2":"mdi:wifi-strength-1"}async _showToast(e,t){this._toast=e,this._toastType=t,await new Promise(e=>setTimeout(e,3e3)),this._toast=""}async _handleSendText(){if(!this._sending){this._sending=!0;try{await this.hass.callService(ue,"send_text",{title:this._textTitle||void 0,message:this._textMessage||void 0,signature:this._textSignature||void 0,refresh_now:!0},{device_id:this._device.ha_device_id}),this._showToast("Text sent!","success")}catch(e){this._showToast(e.message||"Failed to send","error")}finally{this._sending=!1}}}async _handleSendImage(){if(!this._sending&&this._imageData){this._sending=!0;try{await this.hass.callService(ue,"send_image",{image:this._imageData,dither_type:this._ditherType,border:this._border,refresh_now:!0},{device_id:this._device.ha_device_id}),this._showToast("Image sent!","success")}catch(e){this._showToast(e.message||"Failed to send","error")}finally{this._sending=!1}}}async _handleNextContent(){const e=this._eid("next_content");if(e)try{await this.hass.callService("button","press",{entity_id:e}),this._showToast("Switched to next content","success")}catch(e){this._showToast(e.message||"Failed","error")}}_handleFileSelect(e){const t=e.target,i=t.files?.[0];if(!i)return;const s=new FileReader;s.onload=()=>{const e=s.result;this._imageData=e.split(",")[1]||e},s.readAsDataURL(i)}_renderStatus(){const e=this._isOnline(),t=this._stateOf("power_state"),i=this._stateOf("battery_status"),s=this._stateOf("wifi_signal"),r=this._stateOf("firmware_version"),n=this._stateOf("last_render"),o=this._stateOf("next_render_power"),a=this._device?.name||`Quote/0 ${this._config.device_id.slice(-4)}`,d="unavailable"!==s?`${s} dBm`:"—",c="unavailable"!==i?i:"—";return q`
      <div class="md3-header">
        <div class="header-info">
          <span class="device-name">${a}</span>
          <span class="device-fw">FW&nbsp;${r}</span>
        </div>
        <span class="online-pill ${e?"online":"offline"}">
          <span class="online-dot"></span>
          ${e?"Online":"Offline"}
        </span>
      </div>

      <div class="stat-grid">
        <div class="stat-cell">
          <ha-icon icon="mdi:lightning-bolt" class="stat-icon power"></ha-icon>
          <span class="stat-label">Power</span>
          <span class="stat-value">${t}</span>
        </div>
        <div class="stat-cell">
          <ha-icon
            icon="${this._batteryIcon(i)}"
            class="stat-icon battery"
          ></ha-icon>
          <span class="stat-label">Battery</span>
          <span class="stat-value">${c}</span>
        </div>
        <div class="stat-cell no-border">
          <ha-icon
            icon="${this._wifiIcon(s)}"
            class="stat-icon wifi"
          ></ha-icon>
          <span class="stat-label">Wi-Fi</span>
          <span class="stat-value">${d}</span>
        </div>
      </div>

      <div class="render-row">
        <ha-icon icon="mdi:history" class="render-icon"></ha-icon>
        <span class="render-item">Last&nbsp;<strong>${n}</strong></span>
        <span class="render-sep">·</span>
        <ha-icon icon="mdi:timer-outline" class="render-icon"></ha-icon>
        <span class="render-item">Next&nbsp;<strong>${o}</strong></span>
      </div>
    `}_renderPreview(){if(!1===this._config.show_preview)return W;const e=this._getPreviewImages(),t=e.length>0?e[0]:null;return q`
      <div class="divider"></div>
      <div class="preview-section">
        <div class="section-label">Display Preview</div>
        <div class="preview-frame">
          ${t?q`<img src="${t}" alt="Current display" />`:q`
                <svg
                  class="preview-fallback"
                  viewBox="0 0 296 152"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="No preview available"
                >
                  <defs>
                    <pattern id="dotgrid" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                      <circle cx="1" cy="1" r="0.7" fill="currentColor" opacity="0.15" />
                    </pattern>
                  </defs>
                  <rect width="296" height="152" fill="url(#dotgrid)" />
                  <rect x="108" y="42" width="80" height="52" rx="5"
                    fill="none" stroke="currentColor" stroke-width="2.5" opacity="0.3" />
                  <rect x="113" y="47" width="70" height="38" rx="2"
                    fill="currentColor" opacity="0.07" />
                  <line x1="120" y1="58" x2="176" y2="58" stroke="currentColor" stroke-width="1.5" opacity="0.22" />
                  <line x1="120" y1="66" x2="166" y2="66" stroke="currentColor" stroke-width="1.5" opacity="0.22" />
                  <line x1="120" y1="74" x2="172" y2="74" stroke="currentColor" stroke-width="1.5" opacity="0.22" />
                  <line x1="138" y1="94" x2="158" y2="94" stroke="currentColor" stroke-width="2.5" opacity="0.3" />
                  <line x1="148" y1="94" x2="148" y2="104" stroke="currentColor" stroke-width="2.5" opacity="0.3" />
                  <line x1="140" y1="104" x2="156" y2="104" stroke="currentColor" stroke-width="2.5" opacity="0.3" />
                  <text x="148" y="124" text-anchor="middle" font-size="9"
                    font-family="Roboto, sans-serif" letter-spacing="0.5"
                    fill="currentColor" opacity="0.38">NO PREVIEW AVAILABLE</text>
                </svg>
              `}
        </div>
      </div>
    `}_renderSendText(){if(!1===this._config.show_send_text)return W;const e=this._sendTextExpanded;return q`
      <div class="divider"></div>
      <div class="expand-section">
        <div
          class="expand-header ${e?"open":""}"
          @click=${()=>this._sendTextExpanded=!this._sendTextExpanded}
          role="button"
          aria-expanded=${e}
        >
          <ha-icon class="expand-lead-icon" icon="mdi:card-text-outline"></ha-icon>
          <span class="expand-label">Send Text</span>
          <ha-icon class="expand-chevron ${e?"open":""}" icon="mdi:chevron-down"></ha-icon>
        </div>
        <div class="expand-content ${e?"open":""}">
          <div class="expand-body">
            <ha-textfield
              label="Title"
              .value=${this._textTitle}
              @input=${e=>this._textTitle=e.target.value}
              style="width:100%"
            ></ha-textfield>
            <ha-textfield
              label="Message"
              .value=${this._textMessage}
              @input=${e=>this._textMessage=e.target.value}
              helper="Use \\n for line breaks"
              style="width:100%"
            ></ha-textfield>
            <ha-textfield
              label="Signature"
              .value=${this._textSignature}
              @input=${e=>this._textSignature=e.target.value}
              placeholder="e.g. 2025-08-04 20:00"
              style="width:100%"
            ></ha-textfield>
            <div class="action-row">
              <button
                class="md3-btn filled"
                @click=${this._handleSendText}
                ?disabled=${this._sending||!this._textTitle&&!this._textMessage}
              >
                <ha-icon icon="mdi:send"></ha-icon>
                Send Text
              </button>
              <button
                class="md3-btn tonal"
                @click=${this._handleNextContent}
                ?disabled=${this._sending}
              >
                <ha-icon icon="mdi:skip-next-outline"></ha-icon>
                Next Content
              </button>
            </div>
          </div>
        </div>
      </div>
    `}_renderSendImage(){if(!1===this._config.show_send_image)return W;const e=this._sendImageExpanded;return q`
      <div class="divider"></div>
      <div class="expand-section">
        <div
          class="expand-header ${e?"open":""}"
          @click=${()=>this._sendImageExpanded=!this._sendImageExpanded}
          role="button"
          aria-expanded=${e}
        >
          <ha-icon class="expand-lead-icon" icon="mdi:image-outline"></ha-icon>
          <span class="expand-label">Send Image</span>
          <ha-icon class="expand-chevron ${e?"open":""}" icon="mdi:chevron-down"></ha-icon>
        </div>
        <div class="expand-content ${e?"open":""}">
          <div class="expand-body">
            <div class="file-field">
              <span class="file-field-label">Image (296 × 152 PNG)</span>
              <label class="file-input-btn">
                <ha-icon icon="mdi:image-plus"></ha-icon>
                <span>${this._imageData?"Image selected ✓":"Choose file…"}</span>
                <input type="file" accept="image/png" @change=${this._handleFileSelect} />
              </label>
            </div>
            <div class="two-col">
              <div class="md3-field">
                <label class="md3-field-label">Dither</label>
                <select
                  class="md3-select"
                  .value=${this._ditherType}
                  @change=${e=>this._ditherType=e.target.value}
                >
                  <option value="DIFFUSION">Diffusion</option>
                  <option value="ORDERED">Ordered</option>
                  <option value="NONE">None</option>
                </select>
              </div>
              <div class="md3-field">
                <label class="md3-field-label">Border</label>
                <select
                  class="md3-select"
                  .value=${String(this._border)}
                  @change=${e=>this._border=parseInt(e.target.value)}
                >
                  <option value="0">White</option>
                  <option value="1">Black</option>
                </select>
              </div>
            </div>
            <div class="action-row">
              <button
                class="md3-btn filled"
                @click=${this._handleSendImage}
                ?disabled=${this._sending||!this._imageData}
              >
                <ha-icon icon="mdi:image-send"></ha-icon>
                Send Image
              </button>
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
    `:q`<ha-card><div class="section">Device not found. Check the integration.</div></ha-card>`:q`<ha-card><div class="section">Discovering device…</div></ha-card>`:q`<ha-card>Loading...</ha-card>`}};_e.styles=ve,e([pe()],_e.prototype,"_config",void 0),e([pe()],_e.prototype,"_device",void 0),e([pe()],_e.prototype,"_resolved",void 0),e([pe()],_e.prototype,"_textTitle",void 0),e([pe()],_e.prototype,"_textMessage",void 0),e([pe()],_e.prototype,"_textSignature",void 0),e([pe()],_e.prototype,"_imageData",void 0),e([pe()],_e.prototype,"_ditherType",void 0),e([pe()],_e.prototype,"_border",void 0),e([pe()],_e.prototype,"_toast",void 0),e([pe()],_e.prototype,"_toastType",void 0),e([pe()],_e.prototype,"_sending",void 0),e([pe()],_e.prototype,"_sendTextExpanded",void 0),e([pe()],_e.prototype,"_sendImageExpanded",void 0),_e=e([ce("dot-quote0-card")],_e),window.customCards=window.customCards||[],window.customCards.push({type:"dot-quote0-card",name:"Dot. Quote/0",description:"Control and monitor your Dot. Quote/0 e-ink device",preview:!1});export{_e as DotQuote0Card};
