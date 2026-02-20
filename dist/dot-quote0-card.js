function t(t,e,s,i){var o,r=arguments.length,n=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,s,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(r<3?o(n):r>3?o(e,s,n):o(e,s))||n);return r>3&&n&&Object.defineProperty(e,s,n),n}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=globalThis,s=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),o=new WeakMap;let r=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(s&&void 0===t){const s=void 0!==e&&1===e.length;s&&(t=o.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&o.set(e,t))}return t}toString(){return this.cssText}};const n=(t,...e)=>{const s=1===t.length?t[0]:e.reduce((e,s,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1],t[0]);return new r(s,t,i)},a=s?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return(t=>new r("string"==typeof t?t:t+"",void 0,i))(e)})(t):t,{is:d,defineProperty:l,getOwnPropertyDescriptor:c,getOwnPropertyNames:h,getOwnPropertySymbols:p,getPrototypeOf:u}=Object,_=globalThis,g=_.trustedTypes,v=g?g.emptyScript:"",f=_.reactiveElementPolyfillSupport,$=(t,e)=>t,m={toAttribute(t,e){switch(e){case Boolean:t=t?v:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},b=(t,e)=>!d(t,e),y={attribute:!0,type:String,converter:m,reflect:!1,useDefault:!1,hasChanged:b};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),_.litPropertyMetadata??=new WeakMap;let x=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=y){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);void 0!==i&&l(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:o}=c(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:i,set(e){const r=i?.call(this);o?.call(this,e),this.requestUpdate(t,r,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??y}static _$Ei(){if(this.hasOwnProperty($("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty($("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty($("properties"))){const t=this.properties,e=[...h(t),...p(t)];for(const s of e)this.createProperty(s,t[s])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,s]of e)this.elementProperties.set(t,s)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const s=this._$Eu(t,e);void 0!==s&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eu(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,i)=>{if(s)t.adoptedStyleSheets=i.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const s of i){const i=document.createElement("style"),o=e.litNonce;void 0!==o&&i.setAttribute("nonce",o),i.textContent=s.cssText,t.appendChild(i)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(void 0!==i&&!0===s.reflect){const o=(void 0!==s.converter?.toAttribute?s.converter:m).toAttribute(e,s.type);this._$Em=t,null==o?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(t,e){const s=this.constructor,i=s._$Eh.get(t);if(void 0!==i&&this._$Em!==i){const t=s.getPropertyOptions(i),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:m;this._$Em=i;const r=o.fromAttribute(e,t.type);this[i]=r??this._$Ej?.get(i)??r,this._$Em=null}}requestUpdate(t,e,s,i=!1,o){if(void 0!==t){const r=this.constructor;if(!1===i&&(o=this[t]),s??=r.getPropertyOptions(t),!((s.hasChanged??b)(o,e)||s.useDefault&&s.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,s))))return;this.C(t,e,s)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:i,wrapped:o},r){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??e??this[t]),!0!==o||void 0!==r)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),!0===i&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,s]of t){const{wrapped:t}=s,i=this[e];!0!==t||this._$AL.has(e)||void 0===i||this.C(e,void 0,s,i)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[$("elementProperties")]=new Map,x[$("finalized")]=new Map,f?.({ReactiveElement:x}),(_.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const w=globalThis,A=t=>t,S=w.trustedTypes,E=S?S.createPolicy("lit-html",{createHTML:t=>t}):void 0,C="$lit$",T=`lit$${Math.random().toFixed(9).slice(2)}$`,P="?"+T,O=`<${P}>`,k=document,U=()=>k.createComment(""),M=t=>null===t||"object"!=typeof t&&"function"!=typeof t,N=Array.isArray,D="[ \t\n\f\r]",R=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,H=/-->/g,I=/>/g,z=RegExp(`>|${D}(?:([^\\s"'>=/]+)(${D}*=${D}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),j=/'/g,B=/"/g,L=/^(?:script|style|textarea|title)$/i,q=(t=>(e,...s)=>({_$litType$:t,strings:e,values:s}))(1),F=Symbol.for("lit-noChange"),W=Symbol.for("lit-nothing"),V=new WeakMap,Q=k.createTreeWalker(k,129);function G(t,e){if(!N(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==E?E.createHTML(e):e}const J=(t,e)=>{const s=t.length-1,i=[];let o,r=2===e?"<svg>":3===e?"<math>":"",n=R;for(let e=0;e<s;e++){const s=t[e];let a,d,l=-1,c=0;for(;c<s.length&&(n.lastIndex=c,d=n.exec(s),null!==d);)c=n.lastIndex,n===R?"!--"===d[1]?n=H:void 0!==d[1]?n=I:void 0!==d[2]?(L.test(d[2])&&(o=RegExp("</"+d[2],"g")),n=z):void 0!==d[3]&&(n=z):n===z?">"===d[0]?(n=o??R,l=-1):void 0===d[1]?l=-2:(l=n.lastIndex-d[2].length,a=d[1],n=void 0===d[3]?z:'"'===d[3]?B:j):n===B||n===j?n=z:n===H||n===I?n=R:(n=z,o=void 0);const h=n===z&&t[e+1].startsWith("/>")?" ":"";r+=n===R?s+O:l>=0?(i.push(a),s.slice(0,l)+C+s.slice(l)+T+h):s+T+(-2===l?e:h)}return[G(t,r+(t[s]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),i]};class K{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let o=0,r=0;const n=t.length-1,a=this.parts,[d,l]=J(t,e);if(this.el=K.createElement(d,s),Q.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=Q.nextNode())&&a.length<n;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(C)){const e=l[r++],s=i.getAttribute(t).split(T),n=/([.?@])?(.*)/.exec(e);a.push({type:1,index:o,name:n[2],strings:s,ctor:"."===n[1]?et:"?"===n[1]?st:"@"===n[1]?it:tt}),i.removeAttribute(t)}else t.startsWith(T)&&(a.push({type:6,index:o}),i.removeAttribute(t));if(L.test(i.tagName)){const t=i.textContent.split(T),e=t.length-1;if(e>0){i.textContent=S?S.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],U()),Q.nextNode(),a.push({type:2,index:++o});i.append(t[e],U())}}}else if(8===i.nodeType)if(i.data===P)a.push({type:2,index:o});else{let t=-1;for(;-1!==(t=i.data.indexOf(T,t+1));)a.push({type:7,index:o}),t+=T.length-1}o++}}static createElement(t,e){const s=k.createElement("template");return s.innerHTML=t,s}}function Z(t,e,s=t,i){if(e===F)return e;let o=void 0!==i?s._$Co?.[i]:s._$Cl;const r=M(e)?void 0:e._$litDirective$;return o?.constructor!==r&&(o?._$AO?.(!1),void 0===r?o=void 0:(o=new r(t),o._$AT(t,s,i)),void 0!==i?(s._$Co??=[])[i]=o:s._$Cl=o),void 0!==o&&(e=Z(t,o._$AS(t,e.values),o,i)),e}class X{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??k).importNode(e,!0);Q.currentNode=i;let o=Q.nextNode(),r=0,n=0,a=s[0];for(;void 0!==a;){if(r===a.index){let e;2===a.type?e=new Y(o,o.nextSibling,this,t):1===a.type?e=new a.ctor(o,a.name,a.strings,this,t):6===a.type&&(e=new ot(o,this,t)),this._$AV.push(e),a=s[++n]}r!==a?.index&&(o=Q.nextNode(),r++)}return Q.currentNode=k,i}p(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class Y{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=W,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Z(this,t,e),M(t)?t===W||null==t||""===t?(this._$AH!==W&&this._$AR(),this._$AH=W):t!==this._$AH&&t!==F&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>N(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==W&&M(this._$AH)?this._$AA.nextSibling.data=t:this.T(k.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:s}=t,i="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=K.createElement(G(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{const t=new X(i,this),s=t.u(this.options);t.p(e),this.T(s),this._$AH=t}}_$AC(t){let e=V.get(t.strings);return void 0===e&&V.set(t.strings,e=new K(t)),e}k(t){N(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const o of t)i===e.length?e.push(s=new Y(this.O(U()),this.O(U()),this,this.options)):s=e[i],s._$AI(o),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=A(t).nextSibling;A(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class tt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,o){this.type=1,this._$AH=W,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=W}_$AI(t,e=this,s,i){const o=this.strings;let r=!1;if(void 0===o)t=Z(this,t,e,0),r=!M(t)||t!==this._$AH&&t!==F,r&&(this._$AH=t);else{const i=t;let n,a;for(t=o[0],n=0;n<o.length-1;n++)a=Z(this,i[s+n],e,n),a===F&&(a=this._$AH[n]),r||=!M(a)||a!==this._$AH[n],a===W?t=W:t!==W&&(t+=(a??"")+o[n+1]),this._$AH[n]=a}r&&!i&&this.j(t)}j(t){t===W?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class et extends tt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===W?void 0:t}}class st extends tt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==W)}}class it extends tt{constructor(t,e,s,i,o){super(t,e,s,i,o),this.type=5}_$AI(t,e=this){if((t=Z(this,t,e,0)??W)===F)return;const s=this._$AH,i=t===W&&s!==W||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==W&&(s===W||i);i&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class ot{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){Z(this,t)}}const rt=w.litHtmlPolyfillSupport;rt?.(K,Y),(w.litHtmlVersions??=[]).push("3.3.2");const nt=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class at extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,s)=>{const i=s?.renderBefore??e;let o=i._$litPart$;if(void 0===o){const t=s?.renderBefore??null;i._$litPart$=o=new Y(e.insertBefore(U(),t),t,void 0,s??{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return F}}at._$litElement$=!0,at.finalized=!0,nt.litElementHydrateSupport?.({LitElement:at});const dt=nt.litElementPolyfillSupport;dt?.({LitElement:at}),(nt.litElementVersions??=[]).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const lt=t=>(e,s)=>{void 0!==s?s.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},ct={attribute:!0,type:String,converter:m,reflect:!1,hasChanged:b},ht=(t=ct,e,s)=>{const{kind:i,metadata:o}=s;let r=globalThis.litPropertyMetadata.get(o);if(void 0===r&&globalThis.litPropertyMetadata.set(o,r=new Map),"setter"===i&&((t=Object.create(t)).wrapped=!0),r.set(s.name,t),"accessor"===i){const{name:i}=s;return{set(s){const o=e.get.call(this);e.set.call(this,s),this.requestUpdate(i,o,t,!0,s)},init(e){return void 0!==e&&this.C(i,void 0,t,e),e}}}if("setter"===i){const{name:i}=s;return function(s){const o=this[i];e.call(this,s),this.requestUpdate(i,o,t,!0,s)}}throw Error("Unsupported decorator location: "+i)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function pt(t){return(e,s)=>"object"==typeof s?ht(t,e,s):((t,e,s)=>{const i=e.hasOwnProperty(s);return e.constructor.createProperty(s,t),i?Object.getOwnPropertyDescriptor(e,s):void 0})(t,e,s)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ut(t){return pt({...t,state:!0,attribute:!1})}const _t=n`
  :host {
    --dot-card-bg: var(--ha-card-background, var(--card-background-color, #fff));
    --dot-text: var(--primary-text-color, #212121);
    --dot-secondary: var(--secondary-text-color, #727272);
    --dot-accent: var(--primary-color, #03a9f4);
    --dot-divider: var(--divider-color, #e0e0e0);
    --dot-success: #4caf50;
    --dot-error: #f44336;
  }

  ha-card {
    overflow: hidden;
  }

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
  }

  .device-meta {
    font-size: 0.85em;
    color: var(--dot-secondary);
  }

  .online-badge {
    font-size: 0.75em;
    font-weight: 600;
    padding: 2px 8px;
    border-radius: 10px;
    text-transform: uppercase;
  }

  .online-badge.online {
    background: var(--dot-success);
    color: #fff;
  }

  .online-badge.offline {
    background: var(--dot-error);
    color: #fff;
  }

  .section {
    padding: 8px 16px;
  }

  .section-title {
    font-size: 0.8em;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
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
    font-size: 0.9em;
  }

  .status-label {
    color: var(--dot-secondary);
  }

  .status-value {
    color: var(--dot-text);
    font-weight: 500;
  }

  .divider {
    border: none;
    border-top: 1px solid var(--dot-divider);
    margin: 8px 16px;
  }

  .preview-section {
    padding: 8px 16px;
    text-align: center;
  }

  .preview-frame {
    display: inline-block;
    border: 2px solid var(--dot-text);
    border-radius: 4px;
    overflow: hidden;
    background: #fff;
    max-width: 100%;
  }

  .preview-frame img {
    display: block;
    width: 296px;
    height: 152px;
    max-width: 100%;
    height: auto;
    image-rendering: pixelated;
  }

  .preview-placeholder {
    width: 296px;
    height: 152px;
    max-width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--dot-secondary);
    font-size: 0.85em;
    background: #f5f5f5;
  }

  .input-group {
    margin-bottom: 8px;
  }

  .input-group label {
    display: block;
    font-size: 0.8em;
    color: var(--dot-secondary);
    margin-bottom: 2px;
  }

  .input-group input,
  .input-group textarea,
  .input-group select {
    width: 100%;
    box-sizing: border-box;
    padding: 8px;
    border: 1px solid var(--dot-divider);
    border-radius: 4px;
    font-size: 0.9em;
    font-family: inherit;
    background: var(--dot-card-bg);
    color: var(--dot-text);
    outline: none;
  }

  .input-group input:focus,
  .input-group textarea:focus,
  .input-group select:focus {
    border-color: var(--dot-accent);
  }

  .input-group textarea {
    resize: vertical;
    min-height: 60px;
  }

  .input-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
  }

  .button-row {
    display: flex;
    gap: 8px;
    margin-top: 8px;
    padding-bottom: 4px;
  }

  .btn {
    flex: 1;
    padding: 8px 12px;
    border: none;
    border-radius: 4px;
    font-size: 0.85em;
    font-weight: 500;
    cursor: pointer;
    transition: opacity 0.2s;
  }

  .btn:hover {
    opacity: 0.85;
  }

  .btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .btn-primary {
    background: var(--dot-accent);
    color: #fff;
  }

  .btn-secondary {
    background: var(--dot-divider);
    color: var(--dot-text);
  }

  .btn-send {
    background: var(--dot-success);
    color: #fff;
  }

  .toast {
    font-size: 0.8em;
    padding: 4px 8px;
    border-radius: 4px;
    margin-top: 4px;
    text-align: center;
  }

  .toast.success {
    background: #e8f5e9;
    color: var(--dot-success);
  }

  .toast.error {
    background: #ffebee;
    color: var(--dot-error);
  }

  .card-footer {
    padding: 0 16px 12px;
  }
`;let gt=class extends at{setConfig(t){this._config={...t}}_dispatchChange(t){const e=new CustomEvent("config-changed",{detail:{config:t},bubbles:!0,composed:!0});this.dispatchEvent(e)}_valueChanged(t,e){const s=e.target,i="checkbox"===s.type?s.checked:s.value;this._dispatchChange({...this._config,[t]:i})}render(){return this._config?q`
      <div class="editor">
        <div class="field">
          <label>Device ID (serial number from Dot. App)</label>
          <input
            type="text"
            .value=${this._config.device_id||""}
            @input=${t=>this._valueChanged("device_id",t)}
            placeholder="e.g. ABCD1234ABCD"
          />
        </div>
        <div class="field">
          <label>
            <input
              type="checkbox"
              .checked=${!1!==this._config.show_preview}
              @change=${t=>this._valueChanged("show_preview",t)}
            />
            Show e-ink preview
          </label>
        </div>
        <div class="field">
          <label>
            <input
              type="checkbox"
              .checked=${!1!==this._config.show_send_text}
              @change=${t=>this._valueChanged("show_send_text",t)}
            />
            Show Send Text controls
          </label>
        </div>
        <div class="field">
          <label>
            <input
              type="checkbox"
              .checked=${!1!==this._config.show_send_image}
              @change=${t=>this._valueChanged("show_send_image",t)}
            />
            Show Send Image controls
          </label>
        </div>
      </div>
    `:q``}};gt.styles=n`
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
    .field input[type="text"] {
      width: 100%;
      box-sizing: border-box;
      padding: 8px;
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 4px;
    }
    .field label input[type="checkbox"] {
      margin-right: 6px;
    }
  `,t([pt({attribute:!1})],gt.prototype,"hass",void 0),t([ut()],gt.prototype,"_config",void 0),gt=t([lt("dot-quote0-card-editor")],gt);const vt="dot_quote0";let ft=class extends at{constructor(){super(...arguments),this._textTitle="",this._textMessage="",this._textSignature="",this._imageData="",this._ditherType="DIFFUSION",this._border=0,this._toast="",this._toastType="success",this._sending=!1}static getConfigElement(){return document.createElement("dot-quote0-card-editor")}static getStubConfig(){return{device_id:"",show_preview:!0,show_send_text:!0,show_send_image:!0}}setConfig(t){if(!t.device_id)throw new Error("Please set device_id");this._config=t}getCardSize(){return 8}getGridOptions(){return{rows:8,columns:12,min_rows:4,min_columns:6}}_entityId(t){return`sensor.${vt}_${this._config.device_id}_${t}`}_getState(t){const e=this._entityId(t),s=this.hass?.states[e];return s?.state??"unavailable"}_getOnline(){const t=`binary_sensor.${vt}_${this._config.device_id}_online`,e=this.hass?.states[t];return"on"===e?.state}_getPreviewImages(){const t=this._entityId("last_render");this.hass?.states[t];for(const t in this.hass?.states)if(t.startsWith(`sensor.${vt}_${this._config.device_id}`)){const e=this.hass.states[t];if(e.attributes.current_images)return e.attributes.current_images}return[]}async _showToast(t,e){this._toast=t,this._toastType=e,await new Promise(t=>setTimeout(t,3e3)),this._toast=""}async _handleSendText(){if(!this._sending){this._sending=!0;try{await this.hass.callService(vt,"send_text",{device_id:this._config.device_id,title:this._textTitle||void 0,message:this._textMessage||void 0,signature:this._textSignature||void 0,refresh_now:!0}),this._showToast("Text sent!","success")}catch(t){this._showToast(t.message||"Failed to send","error")}finally{this._sending=!1}}}async _handleSendImage(){if(!this._sending&&this._imageData){this._sending=!0;try{await this.hass.callService(vt,"send_image",{device_id:this._config.device_id,image:this._imageData,dither_type:this._ditherType,border:this._border,refresh_now:!0}),this._showToast("Image sent!","success")}catch(t){this._showToast(t.message||"Failed to send","error")}finally{this._sending=!1}}}async _handleNextContent(){const t=`button.${vt}_${this._config.device_id}_next_content`;try{await this.hass.callService("button","press",{entity_id:t}),this._showToast("Switched to next content","success")}catch(t){this._showToast(t.message||"Failed","error")}}_handleFileSelect(t){const e=t.target,s=e.files?.[0];if(!s)return;const i=new FileReader;i.onload=()=>{const t=i.result;this._imageData=t.split(",")[1]||t},i.readAsDataURL(s)}_renderStatus(){const t=this._getOnline(),e=this._getState("power_state"),s=this._getState("battery_status"),i=this._getState("wifi_signal"),o=this._getState("firmware_version"),r=this._getState("last_render"),n=this._getState("next_render_power");return q`
      <div class="card-header">
        <div class="device-info">
          <span class="device-name">Quote/0 ${this._config.device_id.slice(-4)}</span>
          <span class="device-meta">FW ${o}</span>
        </div>
        <span class="online-badge ${t?"online":"offline"}">
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
            <span class="status-value">${i} dBm</span>
          </div>
          <div class="status-item">
            <span class="status-label">Last render</span>
            <span class="status-value">${r}</span>
          </div>
          <div class="status-item">
            <span class="status-label">Next render</span>
            <span class="status-value">${n}</span>
          </div>
        </div>
      </div>
    `}_renderPreview(){if(!1===this._config.show_preview)return W;const t=this._getPreviewImages(),e=t.length>0?t[0]:null;return q`
      <hr class="divider" />
      <div class="preview-section">
        <div class="section-title">Display Preview</div>
        <div class="preview-frame">
          ${e?q`<img src="${e}" alt="Current display" />`:q`<div class="preview-placeholder">No preview available</div>`}
        </div>
      </div>
    `}_renderSendText(){return!1===this._config.show_send_text?W:q`
      <hr class="divider" />
      <div class="section">
        <div class="section-title">Send Text</div>
        <div class="input-group">
          <label>Title</label>
          <input
            type="text"
            .value=${this._textTitle}
            @input=${t=>this._textTitle=t.target.value}
            placeholder="Enter title"
          />
        </div>
        <div class="input-group">
          <label>Message</label>
          <textarea
            .value=${this._textMessage}
            @input=${t=>this._textMessage=t.target.value}
            placeholder="Enter message (use \\n for line breaks)"
          ></textarea>
        </div>
        <div class="input-group">
          <label>Signature</label>
          <input
            type="text"
            .value=${this._textSignature}
            @input=${t=>this._textSignature=t.target.value}
            placeholder="e.g. 2025-08-04 20:00"
          />
        </div>
        <div class="button-row">
          <button
            class="btn btn-send"
            @click=${this._handleSendText}
            ?disabled=${this._sending||!this._textTitle&&!this._textMessage}
          >
            Send Text
          </button>
          <button
            class="btn btn-secondary"
            @click=${this._handleNextContent}
            ?disabled=${this._sending}
          >
            Next Content
          </button>
        </div>
      </div>
    `}_renderSendImage(){return!1===this._config.show_send_image?W:q`
      <hr class="divider" />
      <div class="section">
        <div class="section-title">Send Image</div>
        <div class="input-group">
          <label>Image (296×152 PNG)</label>
          <input type="file" accept="image/png" @change=${this._handleFileSelect} />
        </div>
        <div class="input-row">
          <div class="input-group">
            <label>Dither</label>
            <select
              .value=${this._ditherType}
              @change=${t=>this._ditherType=t.target.value}
            >
              <option value="DIFFUSION">Diffusion</option>
              <option value="ORDERED">Ordered</option>
              <option value="NONE">None</option>
            </select>
          </div>
          <div class="input-group">
            <label>Border</label>
            <select
              .value=${String(this._border)}
              @change=${t=>this._border=parseInt(t.target.value)}
            >
              <option value="0">White</option>
              <option value="1">Black</option>
            </select>
          </div>
        </div>
        <div class="button-row">
          <button
            class="btn btn-send"
            @click=${this._handleSendImage}
            ?disabled=${this._sending||!this._imageData}
          >
            Send Image
          </button>
        </div>
      </div>
    `}render(){return this._config&&this.hass?q`
      <ha-card>
        ${this._renderStatus()} ${this._renderPreview()}
        ${this._renderSendText()} ${this._renderSendImage()}
        ${this._toast?q`<div class="card-footer">
              <div class="toast ${this._toastType}">${this._toast}</div>
            </div>`:W}
      </ha-card>
    `:q`<ha-card>Loading...</ha-card>`}};ft.styles=_t,t([pt({attribute:!1})],ft.prototype,"hass",void 0),t([ut()],ft.prototype,"_config",void 0),t([ut()],ft.prototype,"_textTitle",void 0),t([ut()],ft.prototype,"_textMessage",void 0),t([ut()],ft.prototype,"_textSignature",void 0),t([ut()],ft.prototype,"_imageData",void 0),t([ut()],ft.prototype,"_ditherType",void 0),t([ut()],ft.prototype,"_border",void 0),t([ut()],ft.prototype,"_toast",void 0),t([ut()],ft.prototype,"_toastType",void 0),t([ut()],ft.prototype,"_sending",void 0),ft=t([lt("dot-quote0-card")],ft),window.customCards=window.customCards||[],window.customCards.push({type:"dot-quote0-card",name:"Dot. Quote/0",description:"Control and monitor your Dot. Quote/0 e-ink device",preview:!1});export{ft as DotQuote0Card};
