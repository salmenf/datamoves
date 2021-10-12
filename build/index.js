var Q1=Object.defineProperty;var en=(i,t)=>{for(var e in t)Q1(i,e,{get:t[e],enumerable:!0})};var Xt,Qt,mt=globalThis.trustedTypes,_s=mt?mt.createPolicy("lit-html",{createHTML:i=>i}):void 0,te=`lit$${(Math.random()+"").slice(9)}$`,ws="?"+te,tn=`<${ws}>`,Fe=document,Re=(i="")=>Fe.createComment(i),Ve=i=>i===null||typeof i!="object"&&typeof i!="function",bs=Array.isArray,sn=i=>{var t;return bs(i)||typeof((t=i)===null||t===void 0?void 0:t[Symbol.iterator])=="function"},$e=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ys=/-->/g,zs=/>/g,pe=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,xs=/'/g,Ms=/"/g,Fs=/^(?:script|style|textarea)$/i,rn=i=>(t,...e)=>({_$litType$:i,strings:t,values:e}),m=rn(1),Y=Symbol.for("lit-noChange"),D=Symbol.for("lit-nothing"),As=new WeakMap,Hs=(i,t,e)=>{var s,r;let n=(s=e==null?void 0:e.renderBefore)!==null&&s!==void 0?s:t,l=n._$litPart$;if(l===void 0){let a=(r=e==null?void 0:e.renderBefore)!==null&&r!==void 0?r:null;n._$litPart$=l=new Ae(t.insertBefore(Re(),a),a,void 0,e??{})}return l._$AI(i),l},He=Fe.createTreeWalker(Fe,129,null,!1),nn=(i,t)=>{let e=i.length-1,s=[],r,n=t===2?"<svg>":"",l=$e;for(let o=0;o<e;o++){let h=i[o],d,c,p=-1,f=0;for(;f<h.length&&(l.lastIndex=f,c=l.exec(h),c!==null);)f=l.lastIndex,l===$e?c[1]==="!--"?l=ys:c[1]!==void 0?l=zs:c[2]!==void 0?(Fs.test(c[2])&&(r=RegExp("</"+c[2],"g")),l=pe):c[3]!==void 0&&(l=pe):l===pe?c[0]===">"?(l=r??$e,p=-1):c[1]===void 0?p=-2:(p=l.lastIndex-c[2].length,d=c[1],l=c[3]===void 0?pe:c[3]==='"'?Ms:xs):l===Ms||l===xs?l=pe:l===ys||l===zs?l=$e:(l=pe,r=void 0);let v=l===pe&&i[o+1].startsWith("/>")?" ":"";n+=l===$e?h+tn:p>=0?(s.push(d),h.slice(0,p)+"$lit$"+h.slice(p)+te+v):h+te+(p===-2?(s.push(void 0),o):v)}let a=n+(i[e]||"<?>")+(t===2?"</svg>":"");return[_s!==void 0?_s.createHTML(a):a,s]},Ce=class{constructor({strings:t,_$litType$:e},s){let r;this.parts=[];let n=0,l=0,a=t.length-1,o=this.parts,[h,d]=nn(t,e);if(this.el=Ce.createElement(h,s),He.currentNode=this.el.content,e===2){let c=this.el.content,p=c.firstChild;p.remove(),c.append(...p.childNodes)}for(;(r=He.nextNode())!==null&&o.length<a;){if(r.nodeType===1){if(r.hasAttributes()){let c=[];for(let p of r.getAttributeNames())if(p.endsWith("$lit$")||p.startsWith(te)){let f=d[l++];if(c.push(p),f!==void 0){let v=r.getAttribute(f.toLowerCase()+"$lit$").split(te),w=/([.?@])?(.*)/.exec(f);o.push({type:1,index:n,name:w[2],strings:v,ctor:w[1]==="."?Cs:w[1]==="?"?Ss:w[1]==="@"?Ds:je})}else o.push({type:6,index:n})}for(let p of c)r.removeAttribute(p)}if(Fs.test(r.tagName)){let c=r.textContent.split(te),p=c.length-1;if(p>0){r.textContent=mt?mt.emptyScript:"";for(let f=0;f<p;f++)r.append(c[f],Re()),He.nextNode(),o.push({type:2,index:++n});r.append(c[p],Re())}}}else if(r.nodeType===8)if(r.data===ws)o.push({type:2,index:n});else{let c=-1;for(;(c=r.data.indexOf(te,c+1))!==-1;)o.push({type:7,index:n}),c+=te.length-1}n++}}static createElement(t,e){let s=Fe.createElement("template");return s.innerHTML=t,s}};function Se(i,t,e=i,s){var r,n,l,a;if(t===Y)return t;let o=s!==void 0?(r=e._$Cl)===null||r===void 0?void 0:r[s]:e._$Cu,h=Ve(t)?void 0:t._$litDirective$;return(o==null?void 0:o.constructor)!==h&&((n=o==null?void 0:o._$AO)===null||n===void 0||n.call(o,!1),h===void 0?o=void 0:(o=new h(i),o._$AT(i,e,s)),s!==void 0?((l=(a=e)._$Cl)!==null&&l!==void 0?l:a._$Cl=[])[s]=o:e._$Cu=o),o!==void 0&&(t=Se(i,o._$AS(i,t.values),o,s)),t}var Es=class{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;let{el:{content:s},parts:r}=this._$AD,n=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:Fe).importNode(s,!0);He.currentNode=n;let l=He.nextNode(),a=0,o=0,h=r[0];for(;h!==void 0;){if(a===h.index){let d;h.type===2?d=new Ae(l,l.nextSibling,this,t):h.type===1?d=new h.ctor(l,h.name,h.strings,this,t):h.type===6&&(d=new Ps(l,this,t)),this.v.push(d),h=r[++o]}a!==(h==null?void 0:h.index)&&(l=He.nextNode(),a++)}return n}m(t){let e=0;for(let s of this.v)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}},Ae=class{constructor(t,e,s,r){var n;this.type=2,this._$AH=D,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=r,this._$Cg=(n=r==null?void 0:r.isConnected)===null||n===void 0||n}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Se(this,t,e),Ve(t)?t===D||t==null||t===""?(this._$AH!==D&&this._$AR(),this._$AH=D):t!==this._$AH&&t!==Y&&this.$(t):t._$litType$!==void 0?this.T(t):t.nodeType!==void 0?this.S(t):sn(t)?this.M(t):this.$(t)}A(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}S(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t))}$(t){this._$AH!==D&&Ve(this._$AH)?this._$AA.nextSibling.data=t:this.S(Fe.createTextNode(t)),this._$AH=t}T(t){var e;let{values:s,_$litType$:r}=t,n=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=Ce.createElement(r.h,this.options)),r);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===n)this._$AH.m(s);else{let l=new Es(n,this),a=l.p(this.options);l.m(s),this.S(a),this._$AH=l}}_$AC(t){let e=As.get(t.strings);return e===void 0&&As.set(t.strings,e=new Ce(t)),e}M(t){bs(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,s,r=0;for(let n of t)r===e.length?e.push(s=new Ae(this.A(Re()),this.A(Re()),this,this.options)):s=e[r],s._$AI(n),r++;r<e.length&&(this._$AR(s&&s._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)===null||s===void 0||s.call(this,!1,!0,e);t&&t!==this._$AB;){let r=t.nextSibling;t.remove(),t=r}}setConnected(t){var e;this._$AM===void 0&&(this._$Cg=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},je=class{constructor(t,e,s,r,n){this.type=1,this._$AH=D,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=n,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=D}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,s,r){let n=this.strings,l=!1;if(n===void 0)t=Se(this,t,e,0),l=!Ve(t)||t!==this._$AH&&t!==Y,l&&(this._$AH=t);else{let a=t,o,h;for(t=n[0],o=0;o<n.length-1;o++)h=Se(this,a[s+o],e,o),h===Y&&(h=this._$AH[o]),l||(l=!Ve(h)||h!==this._$AH[o]),h===D?t=D:t!==D&&(t+=(h??"")+n[o+1]),this._$AH[o]=h}l&&!r&&this.k(t)}k(t){t===D?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Cs=class extends je{constructor(){super(...arguments),this.type=3}k(t){this.element[this.name]=t===D?void 0:t}},Ss=class extends je{constructor(){super(...arguments),this.type=4}k(t){t&&t!==D?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}},Ds=class extends je{constructor(t,e,s,r,n){super(t,e,s,r,n),this.type=5}_$AI(t,e=this){var s;if((t=(s=Se(this,t,e,0))!==null&&s!==void 0?s:D)===Y)return;let r=this._$AH,n=t===D&&r!==D||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,l=t!==D&&(r===D||n);n&&this.element.removeEventListener(this.name,this,r),l&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;typeof this._$AH=="function"?this._$AH.call((s=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&s!==void 0?s:this.element,t):this._$AH.handleEvent(t)}},Ps=class{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){Se(this,t)}};(Xt=globalThis.litHtmlPlatformSupport)===null||Xt===void 0||Xt.call(globalThis,Ce,Ae),((Qt=globalThis.litHtmlVersions)!==null&&Qt!==void 0?Qt:globalThis.litHtmlVersions=[]).push("2.0.0-rc.5");var ei=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ti=Symbol(),Bs=new Map,Ge=class{constructor(t,e){if(this._$cssResult$=!0,e!==ti)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=Bs.get(this.cssText);return ei&&t===void 0&&(Bs.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}},ln=i=>new Ge(typeof i=="string"?i:i+"",ti),z=(i,...t)=>{let e=i.length===1?i[0]:t.reduce((s,r,n)=>s+(l=>{if(l._$cssResult$===!0)return l.cssText;if(typeof l=="number")return l;throw Error("Value passed to 'css' function must be a 'css' function result: "+l+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+i[n+1],i[0]);return new Ge(e,ti)},an=(i,t)=>{ei?i.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{let s=document.createElement("style");s.textContent=e.cssText,i.appendChild(s)})},ks=ei?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(let s of t.cssRules)e+=s.cssText;return ln(e)})(i):i;var ii,si,ri={toAttribute(i,t){switch(t){case Boolean:i=i?"":null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch(s){e=null}}return e}},Ts=(i,t)=>t!==i&&(t==t||i==i),ni={attribute:!0,type:String,converter:ri,reflect:!1,hasChanged:Ts},fe=class extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;(e=this.l)!==null&&e!==void 0||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();let t=[];return this.elementProperties.forEach((e,s)=>{let r=this._$Eh(s,e);r!==void 0&&(this._$Eu.set(r,s),t.push(r))}),t}static createProperty(t,e=ni){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){let s=typeof t=="symbol"?Symbol():"__"+t,r=this.getPropertyDescriptor(t,s,e);r!==void 0&&Object.defineProperty(this.prototype,t,r)}}static getPropertyDescriptor(t,e,s){return{get(){return this[e]},set(r){let n=this[t];this[e]=r,this.requestUpdate(t,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||ni}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;let t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){let e=this.properties,s=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(let r of s)this.createProperty(r,e[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let s=new Set(t.flat(1/0).reverse());for(let r of s)e.unshift(ks(r))}else t!==void 0&&e.push(ks(t));return e}static _$Eh(t,e){let s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}o(){var t;this._$Ev=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Ep(),this.requestUpdate(),(t=this.constructor.l)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,s;((e=this._$Em)!==null&&e!==void 0?e:this._$Em=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((s=t.hostConnected)===null||s===void 0||s.call(t))}removeController(t){var e;(e=this._$Em)===null||e===void 0||e.splice(this._$Em.indexOf(t)>>>0,1)}_$Ep(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;let e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return an(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$Em)===null||t===void 0||t.forEach(e=>{var s;return(s=e.hostConnected)===null||s===void 0?void 0:s.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$Em)===null||t===void 0||t.forEach(e=>{var s;return(s=e.hostDisconnected)===null||s===void 0?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$Eg(t,e,s=ni){var r,n;let l=this.constructor._$Eh(t,s);if(l!==void 0&&s.reflect===!0){let a=((n=(r=s.converter)===null||r===void 0?void 0:r.toAttribute)!==null&&n!==void 0?n:ri.toAttribute)(e,s.type);this._$Ei=t,a==null?this.removeAttribute(l):this.setAttribute(l,a),this._$Ei=null}}_$AK(t,e){var s,r,n;let l=this.constructor,a=l._$Eu.get(t);if(a!==void 0&&this._$Ei!==a){let o=l.getPropertyOptions(a),h=o.converter,d=(n=(r=(s=h)===null||s===void 0?void 0:s.fromAttribute)!==null&&r!==void 0?r:typeof h=="function"?h:null)!==null&&n!==void 0?n:ri.fromAttribute;this._$Ei=a,this[a]=d(e,o.type),this._$Ei=null}}requestUpdate(t,e,s){let r=!0;t!==void 0&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||Ts)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),s.reflect===!0&&this._$Ei!==t&&(this._$ES===void 0&&(this._$ES=new Map),this._$ES.set(t,s))):r=!1),!this.isUpdatePending&&r&&(this._$Ev=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ev}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach((r,n)=>this[n]=r),this._$Et=void 0);let e=!1,s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),(t=this._$Em)===null||t===void 0||t.forEach(r=>{var n;return(n=r.hostUpdate)===null||n===void 0?void 0:n.call(r)}),this.update(s)):this._$ET()}catch(r){throw e=!1,this._$ET(),r}e&&this._$AE(s)}willUpdate(t){}_$AE(t){var e;(e=this._$Em)===null||e===void 0||e.forEach(s=>{var r;return(r=s.hostUpdated)===null||r===void 0?void 0:r.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ev}shouldUpdate(t){return!0}update(t){this._$ES!==void 0&&(this._$ES.forEach((e,s)=>this._$Eg(s,this[s],e)),this._$ES=void 0),this._$ET()}updated(t){}firstUpdated(t){}};fe.finalized=!0,fe.elementProperties=new Map,fe.elementStyles=[],fe.shadowRootOptions={mode:"open"},(ii=globalThis.reactiveElementPlatformSupport)===null||ii===void 0||ii.call(globalThis,{ReactiveElement:fe}),((si=globalThis.reactiveElementVersions)!==null&&si!==void 0?si:globalThis.reactiveElementVersions=[]).push("1.0.0-rc.4");var li,ai,oi,C=class extends fe{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;let s=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=s.firstChild),s}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=Hs(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!1)}render(){return Y}};C.finalized=!0,C._$litElement$=!0,(li=globalThis.litElementHydrateSupport)===null||li===void 0||li.call(globalThis,{LitElement:C}),(ai=globalThis.litElementPlatformSupport)===null||ai===void 0||ai.call(globalThis,{LitElement:C});((oi=globalThis.litElementVersions)!==null&&oi!==void 0?oi:globalThis.litElementVersions=[]).push("3.0.0-rc.4");var k=i=>t=>typeof t=="function"?((e,s)=>(window.customElements.define(e,s),s))(i,t):((e,s)=>{let{kind:r,elements:n}=s;return{kind:r,elements:n,finisher(l){window.customElements.define(e,l)}}})(i,t);var on=(i,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(e){e.createProperty(t.key,i)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,i)}};function _(i){return(t,e)=>e!==void 0?((s,r,n)=>{r.constructor.createProperty(n,s)})(i,t,e):on(i,t)}function V(i){return _({...i,state:!0})}var Is=({finisher:i,descriptor:t})=>(e,s)=>{var r;if(s===void 0){let n=(r=e.originalKey)!==null&&r!==void 0?r:e.key,l=t!=null?{kind:"method",placement:"prototype",key:n,descriptor:t(e.key)}:{...e,key:n};return i!=null&&(l.finisher=function(a){i(a,n)}),l}{let n=e.constructor;t!==void 0&&Object.defineProperty(e,s,t(s)),i==null||i(n,s)}};function ge(i,t){return Is({descriptor:e=>{let s={get(){var r,n;return(n=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(i))!==null&&n!==void 0?n:null},enumerable:!0,configurable:!0};if(t){let r=typeof e=="symbol"?Symbol():"__"+e;s.get=function(){var n,l;return this[r]===void 0&&(this[r]=(l=(n=this.renderRoot)===null||n===void 0?void 0:n.querySelector(i))!==null&&l!==void 0?l:null),this[r]}}return s}})}function Ls(i){return Is({descriptor:t=>({get(){var e,s;return(s=(e=this.renderRoot)===null||e===void 0?void 0:e.querySelectorAll(i))!==null&&s!==void 0?s:[]},enumerable:!0,configurable:!0})})}import"https://cdn.jsdelivr.net/pyodide/v0.18.0/full/pyodide.js";var Os=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function Ns(i,t,e){return e={path:t,exports:{},require:function(s,r){return hn(s,r??e.path)}},i(e,e.exports),e.exports}function hn(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}var vt=function(i){return i&&i.Math==Math&&i},T=vt(typeof globalThis=="object"&&globalThis)||vt(typeof window=="object"&&window)||vt(typeof self=="object"&&self)||vt(typeof Os=="object"&&Os)||function(){return this}()||Function("return this")(),We=function(i){try{return!!i()}catch(t){return!0}},ie=!We(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!=7}),Rs={}.propertyIsEnumerable,Vs=Object.getOwnPropertyDescriptor,dn=Vs&&!Rs.call({1:2},1),cn=dn?function(t){var e=Vs(this,t);return!!e&&e.enumerable}:Rs,un={f:cn},$s=function(i,t){return{enumerable:!(i&1),configurable:!(i&2),writable:!(i&4),value:t}},pn={}.toString,fn=function(i){return pn.call(i).slice(8,-1)},gn="".split,mn=We(function(){return!Object("z").propertyIsEnumerable(0)})?function(i){return fn(i)=="String"?gn.call(i,""):Object(i)}:Object,js=function(i){if(i==null)throw TypeError("Can't call method on "+i);return i},hi=function(i){return mn(js(i))},U=function(i){return typeof i=="function"},X=function(i){return typeof i=="object"?i!==null:U(i)},vn=function(i){return U(i)?i:void 0},_t=function(i,t){return arguments.length<2?vn(T[i]):T[i]&&T[i][t]},di=_t("navigator","userAgent")||"",Gs=T.process,Ws=T.Deno,Us=Gs&&Gs.versions||Ws&&Ws.version,qs=Us&&Us.v8,J,wt;qs?(J=qs.split("."),wt=J[0]<4?1:J[0]+J[1]):di&&(J=di.match(/Edge\/(\d+)/),(!J||J[1]>=74)&&(J=di.match(/Chrome\/(\d+)/),J&&(wt=J[1])));var Ys=wt&&+wt,ci=!!Object.getOwnPropertySymbols&&!We(function(){var i=Symbol();return!String(i)||!(Object(i)instanceof Symbol)||!Symbol.sham&&Ys&&Ys<41}),Ks=ci&&!Symbol.sham&&typeof Symbol.iterator=="symbol",ui=Ks?function(i){return typeof i=="symbol"}:function(i){var t=_t("Symbol");return U(t)&&Object(i)instanceof t},_n=function(i){try{return String(i)}catch(t){return"Object"}},Zs=function(i){if(U(i))return i;throw TypeError(_n(i)+" is not a function")},wn=function(i,t){var e=i[t];return e==null?void 0:Zs(e)},bn=function(i,t){var e,s;if(t==="string"&&U(e=i.toString)&&!X(s=e.call(i))||U(e=i.valueOf)&&!X(s=e.call(i))||t!=="string"&&U(e=i.toString)&&!X(s=e.call(i)))return s;throw TypeError("Can't convert object to primitive value")},pi=function(i,t){try{Object.defineProperty(T,i,{value:t,configurable:!0,writable:!0})}catch(e){T[i]=t}return t},Js="__core-js_shared__",yn=T[Js]||pi(Js,{}),se=yn,Xs=Ns(function(i){(i.exports=function(t,e){return se[t]||(se[t]=e!==void 0?e:{})})("versions",[]).push({version:"3.18.2",mode:"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})}),Qs=function(i){return Object(js(i))},zn={}.hasOwnProperty,q=Object.hasOwn||function(t,e){return zn.call(Qs(t),e)},xn=0,Mn=Math.random(),er=function(i){return"Symbol("+String(i===void 0?"":i)+")_"+(++xn+Mn).toString(36)},Ue=Xs("wks"),qe=T.Symbol,Fn=Ks?qe:qe&&qe.withoutSetter||er,tr=function(i){return(!q(Ue,i)||!(ci||typeof Ue[i]=="string"))&&(ci&&q(qe,i)?Ue[i]=qe[i]:Ue[i]=Fn("Symbol."+i)),Ue[i]},An=tr("toPrimitive"),Hn=function(i,t){if(!X(i)||ui(i))return i;var e=wn(i,An),s;if(e){if(t===void 0&&(t="default"),s=e.call(i,t),!X(s)||ui(s))return s;throw TypeError("Can't convert object to primitive value")}return t===void 0&&(t="number"),bn(i,t)},ir=function(i){var t=Hn(i,"string");return ui(t)?t:String(t)},fi=T.document,Cn=X(fi)&&X(fi.createElement),sr=function(i){return Cn?fi.createElement(i):{}},rr=!ie&&!We(function(){return Object.defineProperty(sr("div"),"a",{get:function(){return 7}}).a!=7}),nr=Object.getOwnPropertyDescriptor,Sn=ie?nr:function(t,e){if(t=hi(t),e=ir(e),rr)try{return nr(t,e)}catch(s){}if(q(t,e))return $s(!un.f.call(t,e),t[e])},lr={f:Sn},Ye=function(i){if(X(i))return i;throw TypeError(String(i)+" is not an object")},ar=Object.defineProperty,Dn=ie?ar:function(t,e,s){if(Ye(t),e=ir(e),Ye(s),rr)try{return ar(t,e,s)}catch(r){}if("get"in s||"set"in s)throw TypeError("Accessors not supported");return"value"in s&&(t[e]=s.value),t},bt={f:Dn},yt=ie?function(i,t,e){return bt.f(i,t,$s(1,e))}:function(i,t,e){return i[t]=e,i},En=Function.toString;U(se.inspectSource)||(se.inspectSource=function(i){return En.call(i)});var or=se.inspectSource,hr=T.WeakMap,Pn=U(hr)&&/native code/.test(or(hr)),dr=Xs("keys"),cr=function(i){return dr[i]||(dr[i]=er(i))},gi={},ur="Object already initialized",Bn=T.WeakMap,zt,Ke,xt,kn=function(i){return xt(i)?Ke(i):zt(i,{})},Tn=function(i){return function(t){var e;if(!X(t)||(e=Ke(t)).type!==i)throw TypeError("Incompatible receiver, "+i+" required");return e}};Pn||se.state?(re=se.state||(se.state=new Bn),pr=re.get,mi=re.has,fr=re.set,zt=function(i,t){if(mi.call(re,i))throw new TypeError(ur);return t.facade=i,fr.call(re,i,t),t},Ke=function(i){return pr.call(re,i)||{}},xt=function(i){return mi.call(re,i)}):(me=cr("state"),gi[me]=!0,zt=function(i,t){if(q(i,me))throw new TypeError(ur);return t.facade=i,yt(i,me,t),t},Ke=function(i){return q(i,me)?i[me]:{}},xt=function(i){return q(i,me)});var re,pr,mi,fr,me,gr={set:zt,get:Ke,has:xt,enforce:kn,getterFor:Tn},mr=Function.prototype,In=ie&&Object.getOwnPropertyDescriptor,vi=q(mr,"name"),Ln=vi&&function(){}.name==="something",On=vi&&(!ie||ie&&In(mr,"name").configurable),Nn={EXISTS:vi,PROPER:Ln,CONFIGURABLE:On},Rn=Ns(function(i){var t=Nn.CONFIGURABLE,e=gr.get,s=gr.enforce,r=String(String).split("String");(i.exports=function(n,l,a,o){var h=o?!!o.unsafe:!1,d=o?!!o.enumerable:!1,c=o?!!o.noTargetGet:!1,p=o&&o.name!==void 0?o.name:l,f;if(U(a)&&(String(p).slice(0,7)==="Symbol("&&(p="["+String(p).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!q(a,"name")||t&&a.name!==p)&&yt(a,"name",p),f=s(a),f.source||(f.source=r.join(typeof p=="string"?p:""))),n===T){d?n[l]=a:pi(l,a);return}else h?!c&&n[l]&&(d=!0):delete n[l];d?n[l]=a:yt(n,l,a)})(Function.prototype,"toString",function(){return U(this)&&e(this).source||or(this)})}),Vn=Math.ceil,$n=Math.floor,_i=function(i){var t=+i;return t!==t||t===0?0:(t>0?$n:Vn)(t)},jn=Math.max,Gn=Math.min,Wn=function(i,t){var e=_i(i);return e<0?jn(e+t,0):Gn(e,t)},Un=Math.min,qn=function(i){return i>0?Un(_i(i),9007199254740991):0},vr=function(i){return qn(i.length)},_r=function(i){return function(t,e,s){var r=hi(t),n=vr(r),l=Wn(s,n),a;if(i&&e!=e){for(;n>l;)if(a=r[l++],a!=a)return!0}else for(;n>l;l++)if((i||l in r)&&r[l]===e)return i||l||0;return!i&&-1}},Yn={includes:_r(!0),indexOf:_r(!1)},Kn=Yn.indexOf,wr=function(i,t){var e=hi(i),s=0,r=[],n;for(n in e)!q(gi,n)&&q(e,n)&&r.push(n);for(;t.length>s;)q(e,n=t[s++])&&(~Kn(r,n)||r.push(n));return r},Mt=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],Zn=Mt.concat("length","prototype"),Jn=Object.getOwnPropertyNames||function(t){return wr(t,Zn)},Xn={f:Jn},Qn=Object.getOwnPropertySymbols,el={f:Qn},tl=_t("Reflect","ownKeys")||function(t){var e=Xn.f(Ye(t)),s=el.f;return s?e.concat(s(t)):e},il=function(i,t){for(var e=tl(t),s=bt.f,r=lr.f,n=0;n<e.length;n++){var l=e[n];q(i,l)||s(i,l,r(t,l))}},sl=/#|\.prototype\./,Ze=function(i,t){var e=nl[rl(i)];return e==al?!0:e==ll?!1:U(t)?We(t):!!t},rl=Ze.normalize=function(i){return String(i).replace(sl,".").toLowerCase()},nl=Ze.data={},ll=Ze.NATIVE="N",al=Ze.POLYFILL="P",ol=Ze,hl=lr.f,dl=function(i,t){var e=i.target,s=i.global,r=i.stat,n,l,a,o,h,d;if(s?l=T:r?l=T[e]||pi(e,{}):l=(T[e]||{}).prototype,l)for(a in t){if(h=t[a],i.noTargetGet?(d=hl(l,a),o=d&&d.value):o=l[a],n=ol(s?a:e+(r?".":"#")+a,i.forced),!n&&o!==void 0){if(typeof h==typeof o)continue;il(h,o)}(i.sham||o&&o.sham)&&yt(h,"sham",!0),Rn(l,a,h,i)}},cl=Object.keys||function(t){return wr(t,Mt)},ul=ie?Object.defineProperties:function(t,e){Ye(t);for(var s=cl(e),r=s.length,n=0,l;r>n;)bt.f(t,l=s[n++],e[l]);return t},pl=_t("document","documentElement"),br=">",yr="<",wi="prototype",bi="script",zr=cr("IE_PROTO"),yi=function(){},xr=function(i){return yr+bi+br+i+yr+"/"+bi+br},Mr=function(i){i.write(xr("")),i.close();var t=i.parentWindow.Object;return i=null,t},fl=function(){var i=sr("iframe"),t="java"+bi+":",e;return i.style.display="none",pl.appendChild(i),i.src=String(t),e=i.contentWindow.document,e.open(),e.write(xr("document.F=Object")),e.close(),e.F},Ft,At=function(){try{Ft=new ActiveXObject("htmlfile")}catch(t){}At=typeof document!="undefined"?document.domain&&Ft?Mr(Ft):fl():Mr(Ft);for(var i=Mt.length;i--;)delete At[wi][Mt[i]];return At()};gi[zr]=!0;var gl=Object.create||function(t,e){var s;return t!==null?(yi[wi]=Ye(t),s=new yi,yi[wi]=null,s[zr]=t):s=At(),e===void 0?s:ul(s,e)},zi=tr("unscopables"),xi=Array.prototype;xi[zi]==null&&bt.f(xi,zi,{configurable:!0,value:gl(null)});var ml=function(i){xi[zi][i]=!0};dl({target:"Array",proto:!0},{at:function(t){var e=Qs(this),s=vr(e),r=_i(t),n=r>=0?r:s+r;return n<0||n>=s?void 0:e[n]}});ml("at");var vl=function(i,t,e){if(Zs(i),t===void 0)return i;switch(e){case 0:return function(){return i.call(t)};case 1:return function(s){return i.call(t,s)};case 2:return function(s,r){return i.call(t,s,r)};case 3:return function(s,r,n){return i.call(t,s,r,n)}}return function(){return i.apply(t,arguments)}},_l=Function.call,wl=function(i,t,e){return vl(_l,T[i].prototype[t],e)},kc=wl("Array","at");var bl={"Amazon Silk":"amazon_silk","Android Browser":"android",Bada:"bada",BlackBerry:"blackberry",Chrome:"chrome",Chromium:"chromium",Electron:"electron",Epiphany:"epiphany",Firefox:"firefox",Focus:"focus",Generic:"generic","Google Search":"google_search",Googlebot:"googlebot","Internet Explorer":"ie","K-Meleon":"k_meleon",Maxthon:"maxthon","Microsoft Edge":"edge","MZ Browser":"mz","NAVER Whale Browser":"naver",Opera:"opera","Opera Coast":"opera_coast",PhantomJS:"phantomjs",Puffin:"puffin",QupZilla:"qupzilla",QQ:"qq",QQLite:"qqlite",Safari:"safari",Sailfish:"sailfish","Samsung Internet for Android":"samsung_internet",SeaMonkey:"seamonkey",Sleipnir:"sleipnir",Swing:"swing",Tizen:"tizen","UC Browser":"uc",Vivaldi:"vivaldi","WebOS Browser":"webos",WeChat:"wechat","Yandex Browser":"yandex",Roku:"roku"},Fr={amazon_silk:"Amazon Silk",android:"Android Browser",bada:"Bada",blackberry:"BlackBerry",chrome:"Chrome",chromium:"Chromium",electron:"Electron",epiphany:"Epiphany",firefox:"Firefox",focus:"Focus",generic:"Generic",googlebot:"Googlebot",google_search:"Google Search",ie:"Internet Explorer",k_meleon:"K-Meleon",maxthon:"Maxthon",edge:"Microsoft Edge",mz:"MZ Browser",naver:"NAVER Whale Browser",opera:"Opera",opera_coast:"Opera Coast",phantomjs:"PhantomJS",puffin:"Puffin",qupzilla:"QupZilla",qq:"QQ Browser",qqlite:"QQ Browser Lite",safari:"Safari",sailfish:"Sailfish",samsung_internet:"Samsung Internet for Android",seamonkey:"SeaMonkey",sleipnir:"Sleipnir",swing:"Swing",tizen:"Tizen",uc:"UC Browser",vivaldi:"Vivaldi",webos:"WebOS Browser",wechat:"WeChat",yandex:"Yandex Browser"},E={tablet:"tablet",mobile:"mobile",desktop:"desktop",tv:"tv"},N={WindowsPhone:"Windows Phone",Windows:"Windows",MacOS:"macOS",iOS:"iOS",Android:"Android",WebOS:"WebOS",BlackBerry:"BlackBerry",Bada:"Bada",Tizen:"Tizen",Linux:"Linux",ChromeOS:"Chrome OS",PlayStation4:"PlayStation 4",Roku:"Roku"},ne={EdgeHTML:"EdgeHTML",Blink:"Blink",Trident:"Trident",Presto:"Presto",Gecko:"Gecko",WebKit:"WebKit"},u=class{static getFirstMatch(t,e){let s=e.match(t);return s&&s.length>0&&s[1]||""}static getSecondMatch(t,e){let s=e.match(t);return s&&s.length>1&&s[2]||""}static matchAndReturnConst(t,e,s){if(t.test(e))return s}static getWindowsVersionName(t){switch(t){case"NT":return"NT";case"XP":return"XP";case"NT 5.0":return"2000";case"NT 5.1":return"XP";case"NT 5.2":return"2003";case"NT 6.0":return"Vista";case"NT 6.1":return"7";case"NT 6.2":return"8";case"NT 6.3":return"8.1";case"NT 10.0":return"10";default:return}}static getMacOSVersionName(t){let e=t.split(".").splice(0,2).map(s=>parseInt(s,10)||0);if(e.push(0),e[0]===10)switch(e[1]){case 5:return"Leopard";case 6:return"Snow Leopard";case 7:return"Lion";case 8:return"Mountain Lion";case 9:return"Mavericks";case 10:return"Yosemite";case 11:return"El Capitan";case 12:return"Sierra";case 13:return"High Sierra";case 14:return"Mojave";case 15:return"Catalina";default:return}}static getAndroidVersionName(t){let e=t.split(".").splice(0,2).map(s=>parseInt(s,10)||0);if(e.push(0),!(e[0]===1&&e[1]<5)){if(e[0]===1&&e[1]<6)return"Cupcake";if(e[0]===1&&e[1]>=6)return"Donut";if(e[0]===2&&e[1]<2)return"Eclair";if(e[0]===2&&e[1]===2)return"Froyo";if(e[0]===2&&e[1]>2)return"Gingerbread";if(e[0]===3)return"Honeycomb";if(e[0]===4&&e[1]<1)return"Ice Cream Sandwich";if(e[0]===4&&e[1]<4)return"Jelly Bean";if(e[0]===4&&e[1]>=4)return"KitKat";if(e[0]===5)return"Lollipop";if(e[0]===6)return"Marshmallow";if(e[0]===7)return"Nougat";if(e[0]===8)return"Oreo";if(e[0]===9)return"Pie"}}static getVersionPrecision(t){return t.split(".").length}static compareVersions(t,e,s=!1){let r=u.getVersionPrecision(t),n=u.getVersionPrecision(e),l=Math.max(r,n),a=0,o=u.map([t,e],h=>{let d=l-u.getVersionPrecision(h),c=h+new Array(d+1).join(".0");return u.map(c.split("."),p=>new Array(20-p.length).join("0")+p).reverse()});for(s&&(a=l-Math.min(r,n)),l-=1;l>=a;){if(o[0][l]>o[1][l])return 1;if(o[0][l]===o[1][l]){if(l===a)return 0;l-=1}else if(o[0][l]<o[1][l])return-1}}static map(t,e){let s=[],r;if(Array.prototype.map)return Array.prototype.map.call(t,e);for(r=0;r<t.length;r+=1)s.push(e(t[r]));return s}static find(t,e){let s,r;if(Array.prototype.find)return Array.prototype.find.call(t,e);for(s=0,r=t.length;s<r;s+=1){let n=t[s];if(e(n,s))return n}}static assign(t,...e){let s=t,r,n;if(Object.assign)return Object.assign(t,...e);for(r=0,n=e.length;r<n;r+=1){let l=e[r];typeof l=="object"&&l!==null&&Object.keys(l).forEach(o=>{s[o]=l[o]})}return t}static getBrowserAlias(t){return bl[t]}static getBrowserTypeByAlias(t){return Fr[t]||""}},F=/version\/(\d+(\.?_?\d+)+)/i,yl=[{test:[/googlebot/i],describe(i){let t={name:"Googlebot"},e=u.getFirstMatch(/googlebot\/(\d+(\.\d+))/i,i)||u.getFirstMatch(F,i);return e&&(t.version=e),t}},{test:[/opera/i],describe(i){let t={name:"Opera"},e=u.getFirstMatch(F,i)||u.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i,i);return e&&(t.version=e),t}},{test:[/opr\/|opios/i],describe(i){let t={name:"Opera"},e=u.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i,i)||u.getFirstMatch(F,i);return e&&(t.version=e),t}},{test:[/SamsungBrowser/i],describe(i){let t={name:"Samsung Internet for Android"},e=u.getFirstMatch(F,i)||u.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i,i);return e&&(t.version=e),t}},{test:[/Whale/i],describe(i){let t={name:"NAVER Whale Browser"},e=u.getFirstMatch(F,i)||u.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i,i);return e&&(t.version=e),t}},{test:[/MZBrowser/i],describe(i){let t={name:"MZ Browser"},e=u.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i,i)||u.getFirstMatch(F,i);return e&&(t.version=e),t}},{test:[/focus/i],describe(i){let t={name:"Focus"},e=u.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i,i)||u.getFirstMatch(F,i);return e&&(t.version=e),t}},{test:[/swing/i],describe(i){let t={name:"Swing"},e=u.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i,i)||u.getFirstMatch(F,i);return e&&(t.version=e),t}},{test:[/coast/i],describe(i){let t={name:"Opera Coast"},e=u.getFirstMatch(F,i)||u.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i,i);return e&&(t.version=e),t}},{test:[/opt\/\d+(?:.?_?\d+)+/i],describe(i){let t={name:"Opera Touch"},e=u.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i,i)||u.getFirstMatch(F,i);return e&&(t.version=e),t}},{test:[/yabrowser/i],describe(i){let t={name:"Yandex Browser"},e=u.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i,i)||u.getFirstMatch(F,i);return e&&(t.version=e),t}},{test:[/ucbrowser/i],describe(i){let t={name:"UC Browser"},e=u.getFirstMatch(F,i)||u.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i,i);return e&&(t.version=e),t}},{test:[/Maxthon|mxios/i],describe(i){let t={name:"Maxthon"},e=u.getFirstMatch(F,i)||u.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i,i);return e&&(t.version=e),t}},{test:[/epiphany/i],describe(i){let t={name:"Epiphany"},e=u.getFirstMatch(F,i)||u.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i,i);return e&&(t.version=e),t}},{test:[/puffin/i],describe(i){let t={name:"Puffin"},e=u.getFirstMatch(F,i)||u.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i,i);return e&&(t.version=e),t}},{test:[/sleipnir/i],describe(i){let t={name:"Sleipnir"},e=u.getFirstMatch(F,i)||u.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i,i);return e&&(t.version=e),t}},{test:[/k-meleon/i],describe(i){let t={name:"K-Meleon"},e=u.getFirstMatch(F,i)||u.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i,i);return e&&(t.version=e),t}},{test:[/micromessenger/i],describe(i){let t={name:"WeChat"},e=u.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i,i)||u.getFirstMatch(F,i);return e&&(t.version=e),t}},{test:[/qqbrowser/i],describe(i){let t={name:/qqbrowserlite/i.test(i)?"QQ Browser Lite":"QQ Browser"},e=u.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i,i)||u.getFirstMatch(F,i);return e&&(t.version=e),t}},{test:[/msie|trident/i],describe(i){let t={name:"Internet Explorer"},e=u.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i,i);return e&&(t.version=e),t}},{test:[/\sedg\//i],describe(i){let t={name:"Microsoft Edge"},e=u.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i,i);return e&&(t.version=e),t}},{test:[/edg([ea]|ios)/i],describe(i){let t={name:"Microsoft Edge"},e=u.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i,i);return e&&(t.version=e),t}},{test:[/vivaldi/i],describe(i){let t={name:"Vivaldi"},e=u.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i,i);return e&&(t.version=e),t}},{test:[/seamonkey/i],describe(i){let t={name:"SeaMonkey"},e=u.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i,i);return e&&(t.version=e),t}},{test:[/sailfish/i],describe(i){let t={name:"Sailfish"},e=u.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i,i);return e&&(t.version=e),t}},{test:[/silk/i],describe(i){let t={name:"Amazon Silk"},e=u.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i,i);return e&&(t.version=e),t}},{test:[/phantom/i],describe(i){let t={name:"PhantomJS"},e=u.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i,i);return e&&(t.version=e),t}},{test:[/slimerjs/i],describe(i){let t={name:"SlimerJS"},e=u.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i,i);return e&&(t.version=e),t}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe(i){let t={name:"BlackBerry"},e=u.getFirstMatch(F,i)||u.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i,i);return e&&(t.version=e),t}},{test:[/(web|hpw)[o0]s/i],describe(i){let t={name:"WebOS Browser"},e=u.getFirstMatch(F,i)||u.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i,i);return e&&(t.version=e),t}},{test:[/bada/i],describe(i){let t={name:"Bada"},e=u.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i,i);return e&&(t.version=e),t}},{test:[/tizen/i],describe(i){let t={name:"Tizen"},e=u.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i,i)||u.getFirstMatch(F,i);return e&&(t.version=e),t}},{test:[/qupzilla/i],describe(i){let t={name:"QupZilla"},e=u.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i,i)||u.getFirstMatch(F,i);return e&&(t.version=e),t}},{test:[/firefox|iceweasel|fxios/i],describe(i){let t={name:"Firefox"},e=u.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i,i);return e&&(t.version=e),t}},{test:[/electron/i],describe(i){let t={name:"Electron"},e=u.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i,i);return e&&(t.version=e),t}},{test:[/MiuiBrowser/i],describe(i){let t={name:"Miui"},e=u.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i,i);return e&&(t.version=e),t}},{test:[/chromium/i],describe(i){let t={name:"Chromium"},e=u.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i,i)||u.getFirstMatch(F,i);return e&&(t.version=e),t}},{test:[/chrome|crios|crmo/i],describe(i){let t={name:"Chrome"},e=u.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i,i);return e&&(t.version=e),t}},{test:[/GSA/i],describe(i){let t={name:"Google Search"},e=u.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i,i);return e&&(t.version=e),t}},{test(i){let t=!i.test(/like android/i),e=i.test(/android/i);return t&&e},describe(i){let t={name:"Android Browser"},e=u.getFirstMatch(F,i);return e&&(t.version=e),t}},{test:[/playstation 4/i],describe(i){let t={name:"PlayStation 4"},e=u.getFirstMatch(F,i);return e&&(t.version=e),t}},{test:[/safari|applewebkit/i],describe(i){let t={name:"Safari"},e=u.getFirstMatch(F,i);return e&&(t.version=e),t}},{test:[/.*/i],describe(i){let t=/^(.*)\/(.*) /,e=/^(.*)\/(.*)[ \t]\((.*)/,r=i.search("\\(")!==-1?e:t;return{name:u.getFirstMatch(r,i),version:u.getSecondMatch(r,i)}}}],zl=[{test:[/Roku\/DVP/],describe(i){let t=u.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i,i);return{name:N.Roku,version:t}}},{test:[/windows phone/i],describe(i){let t=u.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i,i);return{name:N.WindowsPhone,version:t}}},{test:[/windows /i],describe(i){let t=u.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i,i),e=u.getWindowsVersionName(t);return{name:N.Windows,version:t,versionName:e}}},{test:[/Macintosh(.*?) FxiOS(.*?)\//],describe(i){let t={name:N.iOS},e=u.getSecondMatch(/(Version\/)(\d[\d.]+)/,i);return e&&(t.version=e),t}},{test:[/macintosh/i],describe(i){let t=u.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i,i).replace(/[_\s]/g,"."),e=u.getMacOSVersionName(t),s={name:N.MacOS,version:t};return e&&(s.versionName=e),s}},{test:[/(ipod|iphone|ipad)/i],describe(i){let t=u.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i,i).replace(/[_\s]/g,".");return{name:N.iOS,version:t}}},{test(i){let t=!i.test(/like android/i),e=i.test(/android/i);return t&&e},describe(i){let t=u.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i,i),e=u.getAndroidVersionName(t),s={name:N.Android,version:t};return e&&(s.versionName=e),s}},{test:[/(web|hpw)[o0]s/i],describe(i){let t=u.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i,i),e={name:N.WebOS};return t&&t.length&&(e.version=t),e}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe(i){let t=u.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i,i)||u.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i,i)||u.getFirstMatch(/\bbb(\d+)/i,i);return{name:N.BlackBerry,version:t}}},{test:[/bada/i],describe(i){let t=u.getFirstMatch(/bada\/(\d+(\.\d+)*)/i,i);return{name:N.Bada,version:t}}},{test:[/tizen/i],describe(i){let t=u.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i,i);return{name:N.Tizen,version:t}}},{test:[/linux/i],describe(){return{name:N.Linux}}},{test:[/CrOS/],describe(){return{name:N.ChromeOS}}},{test:[/PlayStation 4/],describe(i){let t=u.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i,i);return{name:N.PlayStation4,version:t}}}],xl=[{test:[/googlebot/i],describe(){return{type:"bot",vendor:"Google"}}},{test:[/huawei/i],describe(i){let t=u.getFirstMatch(/(can-l01)/i,i)&&"Nova",e={type:E.mobile,vendor:"Huawei"};return t&&(e.model=t),e}},{test:[/nexus\s*(?:7|8|9|10).*/i],describe(){return{type:E.tablet,vendor:"Nexus"}}},{test:[/ipad/i],describe(){return{type:E.tablet,vendor:"Apple",model:"iPad"}}},{test:[/Macintosh(.*?) FxiOS(.*?)\//],describe(){return{type:E.tablet,vendor:"Apple",model:"iPad"}}},{test:[/kftt build/i],describe(){return{type:E.tablet,vendor:"Amazon",model:"Kindle Fire HD 7"}}},{test:[/silk/i],describe(){return{type:E.tablet,vendor:"Amazon"}}},{test:[/tablet(?! pc)/i],describe(){return{type:E.tablet}}},{test(i){let t=i.test(/ipod|iphone/i),e=i.test(/like (ipod|iphone)/i);return t&&!e},describe(i){let t=u.getFirstMatch(/(ipod|iphone)/i,i);return{type:E.mobile,vendor:"Apple",model:t}}},{test:[/nexus\s*[0-6].*/i,/galaxy nexus/i],describe(){return{type:E.mobile,vendor:"Nexus"}}},{test:[/[^-]mobi/i],describe(){return{type:E.mobile}}},{test(i){return i.getBrowserName(!0)==="blackberry"},describe(){return{type:E.mobile,vendor:"BlackBerry"}}},{test(i){return i.getBrowserName(!0)==="bada"},describe(){return{type:E.mobile}}},{test(i){return i.getBrowserName()==="windows phone"},describe(){return{type:E.mobile,vendor:"Microsoft"}}},{test(i){let t=Number(String(i.getOSVersion()).split(".")[0]);return i.getOSName(!0)==="android"&&t>=3},describe(){return{type:E.tablet}}},{test(i){return i.getOSName(!0)==="android"},describe(){return{type:E.mobile}}},{test(i){return i.getOSName(!0)==="macos"},describe(){return{type:E.desktop,vendor:"Apple"}}},{test(i){return i.getOSName(!0)==="windows"},describe(){return{type:E.desktop}}},{test(i){return i.getOSName(!0)==="linux"},describe(){return{type:E.desktop}}},{test(i){return i.getOSName(!0)==="playstation 4"},describe(){return{type:E.tv}}},{test(i){return i.getOSName(!0)==="roku"},describe(){return{type:E.tv}}}],Ml=[{test(i){return i.getBrowserName(!0)==="microsoft edge"},describe(i){if(/\sedg\//i.test(i))return{name:ne.Blink};let e=u.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i,i);return{name:ne.EdgeHTML,version:e}}},{test:[/trident/i],describe(i){let t={name:ne.Trident},e=u.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i,i);return e&&(t.version=e),t}},{test(i){return i.test(/presto/i)},describe(i){let t={name:ne.Presto},e=u.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i,i);return e&&(t.version=e),t}},{test(i){let t=i.test(/gecko/i),e=i.test(/like gecko/i);return t&&!e},describe(i){let t={name:ne.Gecko},e=u.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i,i);return e&&(t.version=e),t}},{test:[/(apple)?webkit\/537\.36/i],describe(){return{name:ne.Blink}}},{test:[/(apple)?webkit/i],describe(i){let t={name:ne.WebKit},e=u.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i,i);return e&&(t.version=e),t}}],Mi=class{constructor(t,e=!1){if(t==null||t==="")throw new Error("UserAgent parameter can't be empty");this._ua=t,this.parsedResult={},e!==!0&&this.parse()}getUA(){return this._ua}test(t){return t.test(this._ua)}parseBrowser(){this.parsedResult.browser={};let t=u.find(yl,e=>{if(typeof e.test=="function")return e.test(this);if(e.test instanceof Array)return e.test.some(s=>this.test(s));throw new Error("Browser's test function is not valid")});return t&&(this.parsedResult.browser=t.describe(this.getUA())),this.parsedResult.browser}getBrowser(){return this.parsedResult.browser?this.parsedResult.browser:this.parseBrowser()}getBrowserName(t){return t?String(this.getBrowser().name).toLowerCase()||"":this.getBrowser().name||""}getBrowserVersion(){return this.getBrowser().version}getOS(){return this.parsedResult.os?this.parsedResult.os:this.parseOS()}parseOS(){this.parsedResult.os={};let t=u.find(zl,e=>{if(typeof e.test=="function")return e.test(this);if(e.test instanceof Array)return e.test.some(s=>this.test(s));throw new Error("Browser's test function is not valid")});return t&&(this.parsedResult.os=t.describe(this.getUA())),this.parsedResult.os}getOSName(t){let{name:e}=this.getOS();return t?String(e).toLowerCase()||"":e||""}getOSVersion(){return this.getOS().version}getPlatform(){return this.parsedResult.platform?this.parsedResult.platform:this.parsePlatform()}getPlatformType(t=!1){let{type:e}=this.getPlatform();return t?String(e).toLowerCase()||"":e||""}parsePlatform(){this.parsedResult.platform={};let t=u.find(xl,e=>{if(typeof e.test=="function")return e.test(this);if(e.test instanceof Array)return e.test.some(s=>this.test(s));throw new Error("Browser's test function is not valid")});return t&&(this.parsedResult.platform=t.describe(this.getUA())),this.parsedResult.platform}getEngine(){return this.parsedResult.engine?this.parsedResult.engine:this.parseEngine()}getEngineName(t){return t?String(this.getEngine().name).toLowerCase()||"":this.getEngine().name||""}parseEngine(){this.parsedResult.engine={};let t=u.find(Ml,e=>{if(typeof e.test=="function")return e.test(this);if(e.test instanceof Array)return e.test.some(s=>this.test(s));throw new Error("Browser's test function is not valid")});return t&&(this.parsedResult.engine=t.describe(this.getUA())),this.parsedResult.engine}parse(){return this.parseBrowser(),this.parseOS(),this.parsePlatform(),this.parseEngine(),this}getResult(){return u.assign({},this.parsedResult)}satisfies(t){let e={},s=0,r={},n=0;if(Object.keys(t).forEach(a=>{let o=t[a];typeof o=="string"?(r[a]=o,n+=1):typeof o=="object"&&(e[a]=o,s+=1)}),s>0){let a=Object.keys(e),o=u.find(a,d=>this.isOS(d));if(o){let d=this.satisfies(e[o]);if(d!==void 0)return d}let h=u.find(a,d=>this.isPlatform(d));if(h){let d=this.satisfies(e[h]);if(d!==void 0)return d}}if(n>0){let a=Object.keys(r),o=u.find(a,h=>this.isBrowser(h,!0));if(o!==void 0)return this.compareVersion(r[o])}}isBrowser(t,e=!1){let s=this.getBrowserName().toLowerCase(),r=t.toLowerCase(),n=u.getBrowserTypeByAlias(r);return e&&n&&(r=n.toLowerCase()),r===s}compareVersion(t){let e=[0],s=t,r=!1,n=this.getBrowserVersion();if(typeof n=="string")return t[0]===">"||t[0]==="<"?(s=t.substr(1),t[1]==="="?(r=!0,s=t.substr(2)):e=[],t[0]===">"?e.push(1):e.push(-1)):t[0]==="="?s=t.substr(1):t[0]==="~"&&(r=!0,s=t.substr(1)),e.indexOf(u.compareVersions(n,s,r))>-1}isOS(t){return this.getOSName(!0)===String(t).toLowerCase()}isPlatform(t){return this.getPlatformType(!0)===String(t).toLowerCase()}isEngine(t){return this.getEngineName(!0)===String(t).toLowerCase()}is(t,e=!1){return this.isBrowser(t,e)||this.isOS(t)||this.isPlatform(t)}some(t=[]){return t.some(e=>this.is(e))}};var Ar=class{static getParser(t,e=!1){if(typeof t!="string")throw new Error("UserAgent should be a string");return new Mi(t,e)}static parse(t){return new Mi(t).getResult()}static get BROWSER_MAP(){return Fr}static get ENGINE_MAP(){return ne}static get OS_MAP(){return N}static get PLATFORMS_MAP(){return E}},Hr=Ar;var Ht={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},De=i=>(...t)=>({_$litDirective$:i,values:t}),Je=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};var Ee=class extends Je{constructor(t){if(super(t),this.it=D,t.type!==Ht.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===D||t==null)return this.ft=void 0,this.it=t;if(t===Y)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this.ft;this.it=t;let e=[t];return e.raw=e,this.ft={_$litType$:this.constructor.resultType,strings:e,values:[]}}};Ee.directiveName="unsafeHTML",Ee.resultType=1;var Ct=De(Ee);var Cr=De(class extends Je{constructor(i){var t;if(super(i),i.type!==Ht.ATTRIBUTE||i.name!=="class"||((t=i.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(i){return" "+Object.keys(i).filter(t=>i[t]).join(" ")+" "}update(i,[t]){var e,s;if(this.st===void 0){this.st=new Set,i.strings!==void 0&&(this.et=new Set(i.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(let n in t)t[n]&&!((e=this.et)===null||e===void 0?void 0:e.has(n))&&this.st.add(n);return this.render(t)}let r=i.element.classList;this.st.forEach(n=>{n in t||(r.remove(n),this.st.delete(n))});for(let n in t){let l=!!t[n];l===this.st.has(n)||((s=this.et)===null||s===void 0?void 0:s.has(n))||(l?(r.add(n),this.st.add(n)):(r.remove(n),this.st.delete(n)))}return Y}});var Sr={DE:{variable:/variables?/gi,identifier:/namen?s?/gi,oldIdentifier:/alten?r? namen?s?/gi,newIdentifier:/neuen?r? namen?s?/gi,expression:/(?:ausdrucks?)|(?:ausdrücke)/gi,value:/werte?s?n?/gi,dataset:/(?:datensatz(?:es)?)|(?:datensätzen?)/gi,condition:/bedingung(?:en)?/gi,resultOfSelection:/ergebnis des auswählens/gi,func:/funktion(?:en)?/gi,assign:/assign/gi,funcApply:/funktion(?:en)?/gi,attribute:/\s+attribute?s?[\s,]+/gi,aggAttribute:/zusammenzufassendes?n? attribute?/gi,groupbyAll:/\.groupby\(.*''\)/gi,groupingAttribute:/Gruppierungs-Attribute?/gi,append:/append/gi,dropDuplicates:/\.drop_duplicates\(\)/gi,resetIndex:/reset_index\(drop=True\)/gi,merge:/merge/gi,datasetOneTwo:/\s+(ersten)|(zweiten datensatz)\s+/gi},GB:{variable:/variables?/gi,identifier:/names?/gi,oldIdentifier:/old names?/gi,newIdentifier:/new names?/gi,expression:/expressions?/gi,value:/values?/gi,dataset:/datasets?/gi,condition:/conditions?/gi,resultOfSelection:/result of selecting/gi,func:/functions?/gi,assign:/assign/gi,funcApply:/functions?/gi,attribute:/\s+attributes?\s+/gi,aggAttribute:/attributes? to summarize/gi,groupbyAll:/\.groupby\(.*\)/gi,groupingAttribute:/grouping attributes?/gi,append:/append/gi,dropDuplicates:/\.drop_duplicates\(\)/gi,resetIndex:/reset_index\(drop=True\)/gi,merge:/merge/gi,datasetOneTwo:/\s+(first)|(second dataset)\s+/gi}},g={DE:{heading:"Data Moves",welcomeMessage1:"Willkommen! Diese Seite bietet eine Übersicht und erste Einführung von Data Moves. Data Moves sind im Bereich der Datenanalyse Aktionen, die die Werte, den Inhalt und/oder die Struktur eines Datensatzes ändern.",welcomeMessage2:"Es wird eine mögliche Auswahl von Data Moves interaktiv gezeigt, anhand der Programmiersprache Python und der zugehörigen Bibliothek Pandas. Grundkenntnisse in Python und Pandas werden vorausgesetzt.",welcomeMessage3:"Alle Beispieldatensätze sind echte Daten, wurden in ihrer Form aber stellenweise aufbereitet und angepasst, um die Übersichtlichkeit zu verbessern.",basicScenario:"Grundlagen",importScenario:"laden",selectScenario:"auswählen",mapScenario:"abbilden",calculateScenario:"berechnen",aggregateScenario:"sammeln",combineScenario:"verschmelzen",relateScenario:"beziehen",sandboxScenario:"frei erkunden",stu:"Studierende an Universitäten und Kunsthochschulen nach Fachsemestern, Hochschulsemestern und den 15 am stärksten besetzten Studienbereichen im Wintersemester 2019/2020",hau:"Hauptschulen in Dortmund: Anzahl, Klassen, Schüler*innen und Lehrkräfte seit 1990",rea:"Realschulen in Dortmund: Anzahl, Klassen, Schüler*innen und Lehrkräfte seit 1990",ges:"Gesamtschulen in Dortmund: Anzahl, Klassen, Schüler*innen und Lehrkräfte seit 1990",gym:"Gymnasien in Dortmund: Anzahl, Klassen, Schüler*innen und Lehrkräfte seit 1990",bet:"Schüler-Lehrer-Relation (Betreuungsverhältnis) an allgemeinbildenden Schulen nach Bildungsbereichen, Schularten und Ländern seit 1990",BMBFAttribution:"Daten extrahiert aus Original-Datensatz vom Bundesministerium für Bildung und Forschung (BMBF), Datenlizenz Deutschland Namensnennung 2.0 (www.govdata.de/dl-de/by-2-0)",openNRWDortmundAttribution:"Daten extrahiert aus Original-Datensatz von open.NRW Dortmund, Datenlizenz Deutschland Namensnennung 2.0 (www.govdata.de/dl-de/by-2-0)",reset:"zurücksetzen",back:"zurück",play:"abspielen",pause:"pausieren",skip:"zum Ende springen",stop:"stoppen",identifierPlaceholder:"Name",expressionPlaceholder:"Ausdruck",identifierInvalid:"Ungültiger Name: Der Name darf nur die Buchstaben a/A - z/Z, den Unterstrich _ und die Ziffern 0 - 9 enthalten. Das erste Zeichen darf keine Ziffer sein. Außerdem ist der Großbuchstabe 'D' reserviert.",noIdentifierOrExpression:"Kann Code nicht ausführen, zuerst muss ein Name und ein Ausdruck eingegeben werden.",runCode:"Code ausführen",choicePlay:"Erklärung Schritt für Schritt",choiceSkip:"sofort zur Übersicht",choiceExperiment:"Selbst experimentieren",choiceExperimentElaborate:"Ermöglicht es, neue Variablen zu erstellen und bestehende zu verändern",choiceNext:"Weiter",withPython:"mit Python",loadingPyodide:"Python wird geladen...",loadingPandas:"Pandas wird geladen...",loadingDatasets:"Beispiel-Datensätze werden geladen...",pyodideReady:"Python ist bereit.",pyodideError:"Fehler beim Laden von Python! Hinweis: Nutzen Sie Firefox und haben Sie die Seite mehrmals neu geladen? Dann ist wahrscheinlich ein bekannter Fehler von Firefox aufgetreten (Speicherleck). In dem Fall hilft, Firefox komplett zu schließen und neu zu starten.",studentDatasetHeader:"Beispiel: Studierende","studentDatasetInfo1-1":"Betrachten wir als einfaches Beispiel den Datensatz 'D.stu'.","studentDatasetInfo1-2":"Betrachten wir als einfaches Beispiel den Datensatz 'D.stu'. Gegeben sind 15 Fälle, die die Anzahl von Studierenden in den 15 beliebtesten Fachbereichen an deutschen Universitäten 2019/2020 repräsentieren. Jeder Fall liefert zusätzlich die Studierendenzahlen aufgeteilt nach Fachsemester (Anzahl der Erst- und Zweitsemester, etc.).",gymDatasetHeader:"Beispiel: Dortmunder Gymnasien","gymDatasetInfo1-1":"Betrachten wir als Beispiel den Datensatz 'D.gym'.","gymDatasetInfo1-2":"Betrachten wir als Beispiel den Datensatz 'D.gym'. Gegeben sind 29 Fälle, die Auskunft über Lehrer, Lerner und Klassen an Dortmunder Gymnasien von 1990 bis 2018 bieten. Jeder Fall liefert zusätzlich Angaben zu Geschlecht und Herkunft der Lerner.",gesDatasetHeader:"Beispiel: Dortmunder Gesamtschulen","gesDatasetInfo1-1":"Betrachten wir als Beispiel den Datensatz 'D.ges'.","gesDatasetInfo1-2":"Betrachten wir als Beispiel den Datensatz 'D.ges'. Gegeben sind 29 Fälle, die Auskunft über Lehrer, Lerner und Klassen an Dortmunder Gesamtschulen von 1990 bis 2018 bieten. Jeder Fall liefert zusätzlich Angaben zu Geschlecht und Herkunft der Lerner.",reaDatasetHeader:"Beispiel: Dortmunder Realschulen","reaDatasetInfo1-1":"Betrachten wir als Beispiel den Datensatz 'D.rea'.","reaDatasetInfo1-2":"Betrachten wir als Beispiel den Datensatz 'D.rea'. Gegeben sind 29 Fälle, die Auskunft über Lehrer, Lerner und Klassen an Dortmunder Realschulen von 1990 bis 2018 bieten. Jeder Fall liefert zusätzlich Angaben zu Geschlecht und Herkunft der Lerner.",hauDatasetHeader:"Beispiel: Dortmunder Hauptschulen","hauDatasetInfo1-1":"Betrachten wir zusätzlich den Datensatz 'D.hau'.","hauDatasetInfo1-2":"Betrachten wir zusätzlich den Datensatz 'D.hau'. Gegeben sind 29 Fälle, die Auskunft über Lehrer, Lerner und Klassen an Dortmunder Hauptschulen von 1990 bis 2018 bieten. Jeder Fall liefert zusätzlich Angaben zu Geschlecht und Herkunft der Lerner.",betDatasetHeader:"Beispiel: Betreuungsverhältnis","betDatasetInfo1-1":"Betrachten wir den Datensatz 'D.bet'.","betDatasetInfo1-2":"Betrachten wir den Datensatz 'D.bet'. Gegeben sind 30 Fälle, die Auskunft über das durchschnittliche Betreuungsverhältnis (Lerner pro Lehrer) von 1990 bis 2018 bieten. Der Datensatz enthält für jede Schulform ein entsprechendes Attribut. Stellenweise fehlen Daten, was mit einem Wert von 0 vermerkt wurde.",sandboxExplainer:"Hier kannst du beliebige Data Moves probieren.",basicExplainer1:"Klick den grün markierten Teil der Seite an, um fortzufahren.","basicExplainer2-1":"Rechts sehen wir verfügbare Datensätze.","basicExplainer2-2":"Rechts sehen wir verfügbare Datensätze. Unten definieren wir Variablen, um Datensätze zu analysieren.",basicHeader0:"Variablen","basicInfo0-1":"Das ist eine Variable. Sie hat einen Namen und einen Ausdruck.","basicInfo0-2":"Das ist eine Variable. Sie hat einen Namen und einen Ausdruck. Wenn beides gegeben ist, kann aus dem Ausdruck ein Wert berechnet werden. Solange die Variable ausgewählt ist, wird der berechnete Wert angezeigt.",basicHeader1:"Datensätze","basicInfo1-1":"Datensätze können betrachtet werden, indem sie einer Variable zugewiesen werden.","basicInfo1-2":"Datensätze können betrachtet werden, indem sie einer Variable zugewiesen werden. Sie bestehen aus Fällen (angezeigt als Zeilen), Attributen (angezeigt als Spalten) und Werten (angezeigt als Zellen).",basicHeader2:"Attribute umbenennen","basicInfo2-1":"Die Attribute (Spalten) von Datensätzen können umbenannt werden.","basicInfo2-2":"Die Attribute (Spalten) von Datensätzen können umbenannt werden. Dazu geben wir einfach die alten Namen an, außerdem die neuen Namen.",selectHeader1:"Auswählen von Fällen nach Werten",selectExplainer1:"Auswählen heißt, einen Datensatz auf diejenigen Fälle oder Attribute einzuschränken, die eine bestimmte Bedingung erfüllen.","selectInfo1-1":"Auswählen erfordert immer eine Bedingung.","selectInfo1-2":"Auswählen erfordert immer eine Bedingung. Hier wählen wir nach Fällen aus, erstellen also einen neuen Datensatz, der nur diejenigen Fälle enthält, die die Bedingung erfüllen.",selectHeader2:"Auswählen von Attributen nach Namen","selectInfo2-1":"Die Bedingung kann aus einer Liste von Attribut-Namen bestehen.","selectInfo2-2":"Die Bedingung kann aus einer Liste von Attribut-Namen bestehen. Geben wir eine solche Liste an, wird ein neuer Datensatz erstellt, der nur die festgelegten Attribute enthält.",selectHeader3:"Auswählen mit mehreren Bedingungen","selectInfo3-1":"Es kann mehr als eine Bedingung angegeben werden.","selectInfo3-2":"Es kann mehr als eine Bedingung angegeben werden. So können wir auch gleichzeitig Attribute und Fälle eingeschränken.",selectHeader4:"Auswählen verketten","selectInfo4-1":"Das Ergebnis des Auswählens ist ein Datensatz. ","selectInfo4-2":"Das Ergebnis des Auswählens ist ein Datensatz. Deshalb lässt sich Auswählen auch wiederum auf das Ergebnis anwenden. Das können wir ausnutzen, um Analysen übersichtlicher zu machen.",mapExplainer:"Abbilden heißt, bestimmte Werte eines Datensatzes mit einer gegebenen Funktion zu verändern.",mapHeader1:"Funktion definieren","mapInfo1-1":"Abbilden erfordert zunächst eine Funktion.","mapInfo1-2":"Abbilden erfordert zunächst eine Funktion. Die Funktion wenden wir später auf ein bestimmtes Attribut an.",mapHeader2:"Attribut abbilden","mapInfo2-1":"Zum Abbilden muss eine Funktion und ein Attribut angegeben werden.","mapInfo2-2":"Zum Abbilden muss eine Funktion und ein Attribut angegeben werden. In diesem Fall schreiben wir 'assign', um das vorhandene Attribut zu ersetzen und ein neuer Datensatz mit entsprechend verändertem Attribut zu erhalten.",mapHeader3:"Bereinigung mittels Abbilden","mapInfo3-1":"Abbilden kann zur Bereinigung von Daten genutzt werden.","mapInfo3-2":"Abbilden kann zur Bereinigung von Daten genutzt werden. Dadurch können wir bestimmte Analysen sehr erleichtern.",calculateExplainer:"Berechnen heißt, aus bestehenden Werten eines Datensatzes neue Werte zu bilden.",calculateHeader1:"Attribut berechnen","calculateInfo1-1":"Es kann ein neues Attribut aus den vorhandenen berechnet werden.","calculateInfo1-2":"Es kann ein neues Attribut aus den vorhandenen berechnet werden. Dazu müssen wir dem neuen Attribut einen Namen geben und einen Ausdruck zur Berechnung des Werts angeben.",calculateHeader2:"Zusammenfassenden Wert berechnen","calculateInfo2-1":"Es können alle Werte eines bestimmten Attributs zu einem Gesamtwert zusammengefasst werden.","calculateInfo2-2":"Es können alle Werte eines bestimmten Attributs zu einem Gesamtwert zusammengefasst werden. Dazu schreiben wir ein zusammenzufassendes Attribut und eine Funktion auf. Außerdem schreiben wir '.groupby(lambda g: '')', um festzulegen, dass keine Gruppierung stattfindet.",calculateHeader3:"Gruppieren, dann zusammenfassen","calculateInfo3-1":"Statt alle Werte eines Attributs zusammenfassen, lassen sich auch Gruppen von Fällen bilden, die dann einzeln zusammengefasst werden. Hier wollen wir zunächst ein Attribut erstellen, wonach gruppiert werden kann.","calculateInfo3-2":"Statt alle Werte eines Attributs zusammenfassen, lassen sich auch Gruppen von Fällen bilden, die dann einzeln zusammengefasst werden. Hier wollen wir zunächst ein Attribut erstellen, wonach gruppiert werden kann. Dazu definieren wir hier eine entsprechende Funktion.","calculateInfo4-1":"Dann wenden wir die vorige Funktion an.","calculateInfo4-2":"Dann wenden wir die vorige Funktion an. Bei diesen beiden Schritten führen wir also wieder nur ein Abbilden durch.","calculateInfo5-1":"Schließlich können die Gesamtwerte für die Gruppen berechnet werden.","calculateInfo5-2":"Schließlich können die Gesamtwerte für die Gruppen berechnet werden. Dazu geben wir zusätzlich zum zusammenzufassenden Attribut und zur Funktion auch das Gruppierungs-Attribut an.",combineExplainer:"Verschmelzen heißt, aus zwei gleichartigen Datensätzen einen neuen Datensatz zu bilden.","combineInfo1-1":"Für dieses Beispiel bereinigen wir zuerst der Datensatz mittels Abbilden.","combineInfo1-2":"Für dieses Beispiel bereinigen wir zuerst der Datensatz mittels Abbilden. Dazu definieren wir hier zuerst wieder eine Funktion.","combineInfo2-1":"Anschließend wenden wir die Funktion an.","combineInfo2-2":"Anschließend wenden wir die Funktion an. Nun ist das Auswählen bestimmter Fälle im Datensatz für uns leichter.","combineInfo3-1":"Hier soll eine Teilmenge von Fällen ausgewählt werden.","combineInfo3-2":"Hier soll eine Teilmenge von Fällen ausgewählt werden. Dazu wählen wir eine entsprechende Bedingung.","combineInfo4-1":"Zusätzlich soll noch eine weitere Teilmenge von Fällen ausgewählt werden.","combineInfo4-2":"Zusätzlich soll noch eine weitere Teilmenge von Fällen ausgewählt werden. Dazu wählen wir absichtlich eine Bedingung, dass diese Teilmenge mit der vorigen Teilmenge überlappt.",combineHeader5:"Vereinigen zweier Datensätze","combineInfo5-1":"Eine mögliche Art des Verschmelzens ist das Vereinigen.","combineInfo5-2":"Eine mögliche Art des Verschmelzens ist das Vereinigen. Dazu bilden wir mittels 'append' zunächst ein Datensatz, der alle Fälle der Datensätze enthält, und dann entfernen wir mit '.drop_duplicates()' und 'reset_index(drop=True)' doppelt vorkommende Fälle. Das Ergebnis ist ein Datensatz, in dem alle Fälle aus beiden Datensätzen vorkommen.",combineHeader6:"Schneiden zweier Datensätze","combineInfo6-1":"Eine andere Art des Verschmelzens ist das Schneiden.","combineInfo6-2":"Eine andere Art des Verschmelzens ist das Schneiden. Dabei übernehmen wir mittels 'merge' nur diejenigen Fälle in den Ergebnis-Datensatz, die in beiden Datensätzen vorkommen.",combineHeader7:"Differenz zweier Datensätze bilden (fortgeschritten)","combineInfo7-1":"Die letzte Art des Verschmelzens ist die Differenz.","combineInfo7-2":"Die letzte Art des Verschmelzens ist die Differenz. Hier bilden wir einen neuen Datensatz, der nur genau die Fälle des ersten Datensatzes enthält, die nicht im zweiten Datensatz vorkommen (anders gesagt: Erster Datensatz ohne Fälle des zweiten Datensatzes).",relateExplainer:"Beziehen heißt, verschiedenartige Datensätze zu verbinden und so neue Verknüpfungen herzustellen.",relateHeader2:"Vorbereitung der Datensätze","relateInfo2-1":"In diesem Beispiel wollen wir das durchschnittliche Betreuungsverhältnis zwischen den Dortmunder Hauptschulen und ganz Deutschland vergleichen.","relateInfo2-2":"In diesem Beispiel wollen wir das durchschnittliche Betreuungsverhältnis zwischen den Dortmunder Hauptschulen und ganz Deutschland vergleichen. Dazu müssen wir, ähnlich wie zuvor, zuerst die Datensätze vorbereiten. Hier definieren wir dafür wieder eine Funktion.","relateInfo3-1":"Nun wenden wir die Funktion an.","relateInfo3-2":"Nun wenden wir die Funktion an. Wir erhalten einen bereinigter Datensatz, der weitere Berechnungen vereinfacht.","relateInfo4-1":"Als nächstes wollen wir durch Berechnen das Betreuungsverhältnis pro Jahr feststellen.","relateInfo4-2":"Als nächstes wollen wir durch Berechnen das Betreuungsverhältnis pro Jahr feststellen. Nun haben wir dem Datensatz ein neues Attribut 'bet' mit dem Betreuungsverhältnis hinzugefügt.","relateInfo5-1":"Schließlich wollen wir den Datensatz noch auf die für uns wichtigen Attribute beschränken.","relateInfo5-2":"Schließlich wollen wir den Datensatz noch auf die für uns wichtigen Attribute beschränken. Das erreichen wir mit Auswählen.","relateInfo6-1":"Entsprechend wollen wir auch den anderen Datensatz beschränken.","relateInfo6-2":"Entsprechend wollen wir auch den andere Datensatz beschränken. Das geschieht wieder durch Auswählen.",relateHeader7:"Beziehen zweier Datensätze","relateInfo7-1":"Jetzt sollen beide vorbereiteten Datensätze verknüpft werden.","relateInfo7-2":"Jetzt sollen beide vorbereiteten Datensätze verknüpft werden. Dazu geben wir den ersten und zweiten Datensatz an, außerdem noch ein Attribut, das den Zusammenhang herstellt. Wir erhalten einen Datensatz, der Fälle mit Attributen aus beiden Datensätzen enthält.","relateInfo8-1":"Der verknüpfte Datensatz kann wiederum neue Analysen ermöglichen.","relateInfo8-2":"Der verknüpfte Datensatz kann wiederum neue Analysen ermöglichen. Zum Beispiel können wir nun die Entwicklung des Betreuungsverhältnisses von 1990 bis 2018 im Verhältnis zum Bundesdurchschnitt betrachten."},GB:{heading:"Data Moves",welcomeMessage1:"Welcome! This page is an overview of data moves. In data analysis, data moves are actions that change the values, content and/or structure of a dataset.",welcomeMessage2:"This cheat sheet presents some possible data moves in an interactive manner, using the programming language Python and the Python library Pandas.",welcomeMessage3:"All example datasets consist of real data, but were cleaned and renamed to improve readability.",basicScenario:"Basics",importScenario:"loading",selectScenario:"selecting",mapScenario:"mapping",calculateScenario:"calculating",aggregateScenario:"aggregating",combineScenario:"combining",relateScenario:"relating",sandboxScenario:"free exploring",stu:"Studierende an Universitäten und Kunsthochschulen nach Fachsemestern, Hochschulsemestern und den 15 am stärksten besetzten Studienbereichen im Wintersemester 2019/2020",hau:"Hauptschulen in Dortmund: Anzahl, Klassen, Schüler*innen und Lehrkräfte seit 1990",rea:"Realschulen in Dortmund: Anzahl, Klassen, Schüler*innen und Lehrkräfte seit 1990",ges:"Gesamtschulen in Dortmund: Anzahl, Klassen, Schüler*innen und Lehrkräfte seit 1990",gym:"Gymnasien in Dortmund: Anzahl, Klassen, Schüler*innen und Lehrkräfte seit 1990",bet:"Schüler-Lehrer-Relation (Betreuungsverhältnis) an allgemeinbildenden Schulen nach Bildungsbereichen, Schularten und Ländern seit 1990",BMBFAttribution:"Data extracted from original dataset by Bundesministerium für Bildung und Forschung (BMBF), Datenlizenz Deutschland Namensnennung 2.0 (www.govdata.de/dl-de/by-2-0)",openNRWDortmundAttribution:"Data extracted from original dataset by open.NRW Dortmund, Datenlizenz Deutschland Namensnennung 2.0 (www.govdata.de/dl-de/by-2-0)",reset:"reset",back:"back",play:"play",pause:"pause",skip:"skip to end",stop:"stop",identifierPlaceholder:"name",expressionPlaceholder:"expression",identifierInvalid:"Invalid name: name may only contain the letters a/A - z/Z, underscore _ , and numbers 0 - 9. The first character must not be a number. Also, the capital letter 'D' is reserved.",noIdentifierOrExpression:"Can't run code, enter an identifier and expression first.",runCode:"run code",choicePlay:"step-by-step explanation",choiceSkip:"skip to summary",withPython:"with Python",choiceExperiment:"experiment yourself",choiceExperimentElaborate:"Allows you to add your own variables and change existing ones",choiceNext:"next",loadingPyodide:"Loading Python...",loadingPandas:"Loading Pandas...",loadingDatasets:"Loading example datasets...",pyodideReady:"Python is ready.",pyodideError:"Error loading Python! Hint: Do you use Firefox and reloaded the page multiple times? Then it is likely a common error in Firefox occured (memory leak). To solve this, completely close and restart Firefox.",studentDatasetHeader:"Example dataset (students)","studentDatasetInfo1-1":"As an easy example, let us look at the dataset 'D.stu'.","studentDatasetInfo1-2":"As an easy example, let us look at the dataset 'D.stu'. It contains 15 cases representing the number of students in the 15 most popular subjects at German universities 2019/2020. Each case also has the number of students by semester (students in the first or second semester, etc.).",gymDatasetHeader:"Example: Higher secondary schools","gymDatasetInfo1-1":"As an example, consider the dataset 'D.gym'.","gymDatasetInfo1-2":"As an example, consider the dataset 'D.gym'. It contains 29 cases, one for each school year between 1990 and 2018, with information about teachers, pupils, and classes. Additionally, each case has information about the gender and heritage of students.",gesDatasetHeader:"Example: Combined secondary schools","gesDatasetInfo1-1":"As an example, consider the dataset 'D.ges'.","gesDatasetInfo1-2":"As an example, consider the dataset 'D.ges'. It contains 29 cases, one for each school year between 1990 and 2018, with information about teachers, pupils, and classes. Additionally, each case has information about the gender and heritage of students.",reaDatasetHeader:"Example: Middle secondary schools","reaDatasetInfo1-1":"As an example, consider the dataset 'D.rea'.","reaDatasetInfo1-2":"As an example, consider the dataset 'D.rea'. It contains 29 cases, one for each school year between 1990 and 2018, with information about teachers, pupils, and classes. Additionally, each case has information about the gender and heritage of students.",hauDatasetHeader:"Example: Lower secondary schools","hauDatasetInfo1-1":"As an example, consider the dataset 'D.hau'.","hauDatasetInfo1-2":"Additionally, consider the dataset 'D.hau'. It contains 29 cases, one for each school year between 1990 and 2018, with information about teachers, pupils, and classes. Additionally, each case has information about the gender and heritage of students.",betDatasetHeader:"Example: Student-teacher-ratio","betDatasetInfo1-1":"Consider the dataset 'D.bet'.","betDatasetInfo1-2":"Consider the dataset 'D.bet'. It has 30 cases with information about the average student-teacher-ratio from 1990 to 2018. For each type of school, there is a matching attribute. At some points, data is missing, which is noted with a value of 0.",sandboxExplainer:"Try any data move below.",basicExplainer1:"Click the part of the site marked in green to continue.","basicExplainer2-1":"On the right side is a list of available datasets.","basicExplainer2-2":"On the right side is a list of available datasets. Below, variables can be defined to analyze the datasets.",basicHeader0:"Variables","basicInfo0-1":"This is a variable. It has a name, and an expression.","basicInfo0-2":"This is a variable. It has a name, and an expression. Once both are written, the expression can be resolved to a value. As long as the variable is focused, the computed value is shown.",basicHeader1:"Datasets","basicInfo1-1":"Datasets can be viewed by assigning them to a variable.","basicInfo1-2":"Datasets can be viewed by assigning them to a variable. They consist of cases (displayed as rows), attributes (displayed as columns) und values (displayed as cells).",basicHeader2:"Renaming attributes","basicInfo2-1":"The attributes (columns) of datasets can be renamed.","basicInfo2-2":"The attributes (columns) of datasets can be renamed. For this, note the old names and the new names.",selectExplainer1:"Selecting means reducing a dataset to those cases or attributes which match a certain condition.",selectHeader1:"Select cases by value","selectInfo1-1":"Selecting always requires a condition.","selectInfo1-2":"Selecting always requires a condition. This kind of selection is per case, making a new dataset only containing those cases matching the condition.",selectHeader2:"Select attributes by name","selectInfo2-1":"The condition may also specify attribute names.","selectInfo2-2":"The condition may also specify attribute names. In that instance, a new dataset only containing the specified columns is created.",selectHeader3:"Selecting with multiple conditions","selectInfo3-1":"More than one condition can be added.","selectInfo3-2":"More than one condition can be added. That way, for example, selections can be done both by attribute and by case.",selectHeader4:"Chain selecting","selectInfo4-1":"The result of selection is a dataset.","selectInfo4-2":"The result of selection is a dataset. Because of that, selecting may also be applied to that result. That way, analyses can be made more readable.",mapExplainer:"Mapping means changing certain values of a dataset with a function.",mapHeader1:"Defining a function","mapInfo1-1":"First, mapping requires a function.","mapInfo1-2":"First, mapping requires a function. The function will be applied to an attribute later.",mapHeader2:"Mapping an attribute","mapInfo2-1":"For mapping, a function and an attribute must be specified.","mapInfo2-2":"For mapping, a function and an attribute must be specified. Here, 'assign' is used to replace the existing attribute and return the changed dataset.",mapHeader3:"Data cleaning by mapping","mapInfo3-1":"Mapping can be used to clean data.","mapInfo3-2":"Mapping can be used to clean data. This can simplify many analyses.",calculateExplainer:"Calculating means creating new values out of existing ones.",calculateHeader1:"Calculating an attribute","calculateInfo1-1":"New attributes can be calculated based on existing values.","calculateInfo1-2":"New attributes can be calculated based on existing values. For this, the new attribute needs a name and an expression to calculate the value.",calculateHeader2:"Calculate a summarizing value","calculateInfo2-1":"The entire values of an attribute can be summarized as a single value.","calculateInfo2-2":"The entire values of an attribute can be summarized as a single value. For this, an attribute to summarize and a function to summarize with must be specified. To note that no grouping should happen, '.groupby(lambda g: '')' can be used.",calculateHeader3:"Grouping, then summarizing","calculateInfo3-1":"Instead of summarizing all values of an attribute, cases can be grouped first and then summarized separately. Often, this requires calculating an attribute to group by first.","calculateInfo3-2":"Instead of summarizing all values of an attribute, cases can be grouped first and then summarized separately. Often, this requires calculating an attribute to group by first. For this, a function is defined here.","calculateInfo4-1":"Then, that function is applied.","calculateInfo4-2":"Then, that function is applied. These steps are simply a calculating move again.","calculateInfo5-1":"Finally, summarizing values for each group can be calculated.","calculateInfo5-2":"Finally, summarizing values for each group can be calculated. In addition to the attribute to summarize and a function, a grouping attribute must also be specified.",combineExplainer:"Combining means creating a new dataset out of two similar ones.","combineInfo1-1":"Again, for this example, the dataset will first be cleaned by mapping.","combineInfo1-2":"Again, for this example, the dataset will first be cleaned by mapping. For this, a function is defined.","combineInfo2-1":"Next, the function is applied.","combineInfo2-2":"Next, the function is applied. Now, selecting specific cases in the dataset is easier.","combineInfo3-1":"Here, we want to select a subset of cases.","combineInfo3-2":"Here, we want to select a subset of cases. For this, we choose a fitting condition.","combineInfo4-1":"Additionally, we need another subset of cases.","combineInfo4-2":"Additionally, we need another subset of cases. Note that the condition is chosen such that both subsets overlap.",combineHeader5:"Uniting two datasets","combineInfo5-1":"One kind of combining is uniting.","combineInfo5-2":"One kind of combining is uniting. To do this, we first form a dataset containing all cases of both datasets with 'append', and then we remove duplicates with '.drop_duplicates()' and 'reset_index(drop=True)'. The result is a dataset containing all unique cases from both datasets.",combineHeader6:"Intersecting two datasets","combineInfo6-1":"Another kind of combining is intersecting.","combineInfo6-2":"Another kind of combining is intersecting. Here, using 'merge', we only keep those cases which appear in both datasets.",combineHeader7:"Getting the difference of two datasets (advanced)","combineInfo7-1":"The last kind of combining is getting the difference.","combineInfo7-2":"The last kind of combining is getting the difference. This forms a new dataset with only those cases which appear in the first dataset, but not in the second (getting the first dataset without the cases of the second).",relateExplainer:"Relating means connecting different kinds of datasets for new insights.",relateHeader2:"Preparing the datasets","relateInfo2-1":"In this example we want to compare the average teacher-student ratio in Dortmund with the average for all of Germany, over time.","relateInfo2-2":"In this example we want to compare the average teacher-student ratio in Dortmund with the average for all of Germany, over time. To do this, we need to prepare the datasets like before. Here, we define a function for this.","relateInfo3-1":"Now we apply that function.","relateInfo3-2":"Now we apply that function. The result is a cleaned dataset making computations easier.","relateInfo4-1":"Next, we calculate the student-teacher-ratio per year.","relateInfo4-2":"Next, we calculate the student-teacher-ratio per year. The dataset now contains an attribute 'bet' with the ratio.","relateInfo5-1":"Finally, we want to limit the dataset to the attributes relevant for our question.","relateInfo5-2":"Finally, we want to limit the dataset to the attributes relevant for our question. This is achieved by selecting.","relateInfo6-1":"Likewise, we want to limit the attributes of the other dataset.","relateInfo6-2":"Likewise, we want to limit the attributes of the other dataset. Again, this is done by selecting.",relateHeader7:"Relating two datasets","relateInfo7-1":"Now we can relate both prepared datasets.","relateInfo7-2":"Now we can relate both prepared datasets. For this we need the first and the second dataset, and additionally a connecting attribute. The result is a dataset containing cases with attributes from both datasets.","relateInfo8-1":"This connected dataset can allow for new analyses.","relateInfo8-2":"This connected dataset can allow for new analyses, for example the relation between local student-teacher-ratio and the national average."}};window.JSCompiler_renameProperty=function(i,t){return i};var Fl=/(url\()([^)]*)(\))/g,Al=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/,St,W;function Xe(i,t){if(i&&Al.test(i)||i==="//")return i;if(St===void 0){St=!1;try{let e=new URL("b","http://a");e.pathname="c%20d",St=e.href==="http://a/c%20d"}catch(e){}}if(t||(t=document.baseURI||window.location.href),St)try{return new URL(i,t).href}catch(e){return i}return W||(W=document.implementation.createHTMLDocument("temp"),W.base=W.createElement("base"),W.head.appendChild(W.base),W.anchor=W.createElement("a"),W.body.appendChild(W.anchor)),W.base.href=t,W.anchor.href=i,W.anchor.href||i}function Fi(i,t){return i.replace(Fl,function(e,s,r,n){return s+"'"+Xe(r.replace(/["']/g,""),t)+"'"+n})}function Ai(i){return i.substring(0,i.lastIndexOf("/")+1)}var Hl=!window.ShadyDOM||!window.ShadyDOM.inUse,Xc=Boolean(!window.ShadyCSS||window.ShadyCSS.nativeCss),Cl=Hl&&"adoptedStyleSheets"in Document.prototype&&"replaceSync"in CSSStyleSheet.prototype&&(()=>{try{let i=new CSSStyleSheet;i.replaceSync("");let t=document.createElement("div");return t.attachShadow({mode:"open"}),t.shadowRoot.adoptedStyleSheets=[i],t.shadowRoot.adoptedStyleSheets[0]===i}catch(i){return!1}})(),Sl=window.Polymer&&window.Polymer.rootPath||Ai(document.baseURI||window.location.href),Dt=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0,Dl=window.Polymer&&window.Polymer.setPassiveTouchGestures||!1,Hi=window.Polymer&&window.Polymer.strictTemplatePolicy||!1,El=window.Polymer&&window.Polymer.allowTemplateFromDomModule||!1,Pl=window.Polymer&&window.Polymer.legacyOptimizations||!1,Bl=window.Polymer&&window.Polymer.legacyWarnings||!1,kl=window.Polymer&&window.Polymer.syncInitialRender||!1,Ci=window.Polymer&&window.Polymer.legacyUndefined||!1,Tl=window.Polymer&&window.Polymer.orderedComputed||!1,Dr=window.Polymer&&window.Polymer.removeNestedTemplates||!1,Il=window.Polymer&&window.Polymer.fastDomIf||!1,Qc=window.Polymer&&window.Polymer.suppressTemplateNotifications||!1,e4=window.Polymer&&window.Polymer.legacyNoObservedAttributes||!1,Ll=window.Polymer&&window.Polymer.useAdoptedStyleSheetsWithBuiltCSS||!1;var Si={},Er={};function Pr(i,t){Si[i]=Er[i.toLowerCase()]=t}function Br(i){return Si[i]||Er[i.toLowerCase()]}function Ol(i){i.querySelector("style")&&console.warn("dom-module %s has style outside template",i.id)}var ve=class extends HTMLElement{static get observedAttributes(){return["id"]}static import(t,e){if(t){let s=Br(t);return s&&e?s.querySelector(e):s}return null}attributeChangedCallback(t,e,s,r){e!==s&&this.register()}get assetpath(){if(!this.__assetpath){let t=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,e=Xe(this.getAttribute("assetpath")||"",t.baseURI);this.__assetpath=Ai(e)}return this.__assetpath}register(t){if(t=t||this.id,t){if(Hi&&Br(t)!==void 0)throw Pr(t,null),new Error(`strictTemplatePolicy: dom-module ${t} re-registered`);this.id=t,Pr(t,this),Ol(this)}}};ve.prototype.modules=Si;customElements.define("dom-module",ve);var Nl="link[rel=import][type~=css]",Rl="include",kr="shady-unscoped";function Tr(i){return ve.import(i)}function Ir(i){let t=i.body?i.body:i,e=Fi(t.textContent,i.baseURI),s=document.createElement("style");return s.textContent=e,s}function $l(i){let t=i.trim().split(/\s+/),e=[];for(let s=0;s<t.length;s++)e.push(...Vl(t[s]));return e}function Vl(i){let t=Tr(i);if(!t)return console.warn("Could not find style data in module named",i),[];if(t._styles===void 0){let e=[];e.push(...Lr(t));let s=t.querySelector("template");s&&e.push(...Di(s,t.assetpath)),t._styles=e}return t._styles}function Di(i,t){if(!i._styles){let e=[],s=i.content.querySelectorAll("style");for(let r=0;r<s.length;r++){let n=s[r],l=n.getAttribute(Rl);l&&e.push(...$l(l).filter(function(a,o,h){return h.indexOf(a)===o})),t&&(n.textContent=Fi(n.textContent,t)),e.push(n)}i._styles=e}return i._styles}function jl(i){let t=Tr(i);return t?Lr(t):[]}function Lr(i){let t=[],e=i.querySelectorAll(Nl);for(let s=0;s<e.length;s++){let r=e[s];if(r.import){let n=r.import,l=r.hasAttribute(kr);if(l&&!n._unscopedStyle){let a=Ir(n);a.setAttribute(kr,""),n._unscopedStyle=a}else n._style||(n._style=Ir(n));t.push(l?n._unscopedStyle:n._style)}}return t}var Gl=0,Ei={},_e=(i,t,e)=>{let s=e&&e.moduleId||`custom-style-module-${Gl++}`;Array.isArray(t)||(t=t?[t]:[]);let r=t.map(a=>{if(!(a instanceof Ge))throw new Error("An item in styles is not of type CSSResult. Use `unsafeCSS` or `css`.");if(!Ei[a]){let o=document.createElement("template");o.innerHTML=`<style>${a.toString()}</style>`,Ei[a]=Di(o)[0]}return Ei[a].textContent}),n=document.createElement("dom-module");if(i){let a=customElements.get(i);a&&Object.prototype.hasOwnProperty.call(a,"__finalized")&&console.warn(`The custom element definition for "${i}"
      was finalized before a style module was registered.
      Make sure to add component specific style modules before
      importing the corresponding custom element.`),n.setAttribute("theme-for",i)}let l=e&&e.include||[];n.innerHTML=`
    <template>
      ${l.map(a=>`<style include=${a}></style>`)}
      ${r.length?`<style>${r.join(`
`)}</style>`:""}
    </template>
  `,n.register(s)};var Or=class extends HTMLElement{static get version(){return"21.0.0"}};customElements.define("vaadin-lumo-styles",Or);var Wl=z`
  :host {
    /* Base (background) */
    --lumo-base-color: #fff;

    /* Tint */
    --lumo-tint-5pct: hsla(0, 0%, 100%, 0.3);
    --lumo-tint-10pct: hsla(0, 0%, 100%, 0.37);
    --lumo-tint-20pct: hsla(0, 0%, 100%, 0.44);
    --lumo-tint-30pct: hsla(0, 0%, 100%, 0.5);
    --lumo-tint-40pct: hsla(0, 0%, 100%, 0.57);
    --lumo-tint-50pct: hsla(0, 0%, 100%, 0.64);
    --lumo-tint-60pct: hsla(0, 0%, 100%, 0.7);
    --lumo-tint-70pct: hsla(0, 0%, 100%, 0.77);
    --lumo-tint-80pct: hsla(0, 0%, 100%, 0.84);
    --lumo-tint-90pct: hsla(0, 0%, 100%, 0.9);
    --lumo-tint: #fff;

    /* Shade */
    --lumo-shade-5pct: hsla(214, 61%, 25%, 0.05);
    --lumo-shade-10pct: hsla(214, 57%, 24%, 0.1);
    --lumo-shade-20pct: hsla(214, 53%, 23%, 0.16);
    --lumo-shade-30pct: hsla(214, 50%, 22%, 0.26);
    --lumo-shade-40pct: hsla(214, 47%, 21%, 0.38);
    --lumo-shade-50pct: hsla(214, 45%, 20%, 0.5);
    --lumo-shade-60pct: hsla(214, 43%, 19%, 0.61);
    --lumo-shade-70pct: hsla(214, 42%, 18%, 0.72);
    --lumo-shade-80pct: hsla(214, 41%, 17%, 0.83);
    --lumo-shade-90pct: hsla(214, 40%, 16%, 0.94);
    --lumo-shade: hsl(214, 35%, 15%);

    /* Contrast */
    --lumo-contrast-5pct: var(--lumo-shade-5pct);
    --lumo-contrast-10pct: var(--lumo-shade-10pct);
    --lumo-contrast-20pct: var(--lumo-shade-20pct);
    --lumo-contrast-30pct: var(--lumo-shade-30pct);
    --lumo-contrast-40pct: var(--lumo-shade-40pct);
    --lumo-contrast-50pct: var(--lumo-shade-50pct);
    --lumo-contrast-60pct: var(--lumo-shade-60pct);
    --lumo-contrast-70pct: var(--lumo-shade-70pct);
    --lumo-contrast-80pct: var(--lumo-shade-80pct);
    --lumo-contrast-90pct: var(--lumo-shade-90pct);
    --lumo-contrast: var(--lumo-shade);

    /* Text */
    --lumo-header-text-color: var(--lumo-contrast);
    --lumo-body-text-color: var(--lumo-contrast-90pct);
    --lumo-secondary-text-color: var(--lumo-contrast-70pct);
    --lumo-tertiary-text-color: var(--lumo-contrast-50pct);
    --lumo-disabled-text-color: var(--lumo-contrast-30pct);

    /* Primary */
    --lumo-primary-color: hsl(214, 90%, 52%);
    --lumo-primary-color-50pct: hsla(214, 90%, 52%, 0.5);
    --lumo-primary-color-10pct: hsla(214, 90%, 52%, 0.1);
    --lumo-primary-text-color: var(--lumo-primary-color);
    --lumo-primary-contrast-color: #fff;

    /* Error */
    --lumo-error-color: hsl(3, 100%, 61%);
    --lumo-error-color-50pct: hsla(3, 100%, 60%, 0.5);
    --lumo-error-color-10pct: hsla(3, 100%, 60%, 0.1);
    --lumo-error-text-color: hsl(3, 92%, 53%);
    --lumo-error-contrast-color: #fff;

    /* Success */
    --lumo-success-color: hsl(145, 80%, 42%); /* hsl(144,82%,37%); */
    --lumo-success-color-50pct: hsla(145, 76%, 44%, 0.55);
    --lumo-success-color-10pct: hsla(145, 76%, 44%, 0.12);
    --lumo-success-text-color: hsl(145, 100%, 32%);
    --lumo-success-contrast-color: #fff;
  }
`,Nr=document.createElement("template");Nr.innerHTML=`<style>${Wl.toString().replace(":host","html")}</style>`;document.head.appendChild(Nr.content);var Ul=z`
  [theme~='dark'] {
    /* Base (background) */
    --lumo-base-color: hsl(214, 35%, 21%);

    /* Tint */
    --lumo-tint-5pct: hsla(214, 65%, 85%, 0.06);
    --lumo-tint-10pct: hsla(214, 60%, 80%, 0.14);
    --lumo-tint-20pct: hsla(214, 64%, 82%, 0.23);
    --lumo-tint-30pct: hsla(214, 69%, 84%, 0.32);
    --lumo-tint-40pct: hsla(214, 73%, 86%, 0.41);
    --lumo-tint-50pct: hsla(214, 78%, 88%, 0.5);
    --lumo-tint-60pct: hsla(214, 82%, 90%, 0.6);
    --lumo-tint-70pct: hsla(214, 87%, 92%, 0.7);
    --lumo-tint-80pct: hsla(214, 91%, 94%, 0.8);
    --lumo-tint-90pct: hsla(214, 96%, 96%, 0.9);
    --lumo-tint: hsl(214, 100%, 98%);

    /* Shade */
    --lumo-shade-5pct: hsla(214, 0%, 0%, 0.07);
    --lumo-shade-10pct: hsla(214, 4%, 2%, 0.15);
    --lumo-shade-20pct: hsla(214, 8%, 4%, 0.23);
    --lumo-shade-30pct: hsla(214, 12%, 6%, 0.32);
    --lumo-shade-40pct: hsla(214, 16%, 8%, 0.41);
    --lumo-shade-50pct: hsla(214, 20%, 10%, 0.5);
    --lumo-shade-60pct: hsla(214, 24%, 12%, 0.6);
    --lumo-shade-70pct: hsla(214, 28%, 13%, 0.7);
    --lumo-shade-80pct: hsla(214, 32%, 13%, 0.8);
    --lumo-shade-90pct: hsla(214, 33%, 13%, 0.9);
    --lumo-shade: hsl(214, 33%, 13%);

    /* Contrast */
    --lumo-contrast-5pct: var(--lumo-tint-5pct);
    --lumo-contrast-10pct: var(--lumo-tint-10pct);
    --lumo-contrast-20pct: var(--lumo-tint-20pct);
    --lumo-contrast-30pct: var(--lumo-tint-30pct);
    --lumo-contrast-40pct: var(--lumo-tint-40pct);
    --lumo-contrast-50pct: var(--lumo-tint-50pct);
    --lumo-contrast-60pct: var(--lumo-tint-60pct);
    --lumo-contrast-70pct: var(--lumo-tint-70pct);
    --lumo-contrast-80pct: var(--lumo-tint-80pct);
    --lumo-contrast-90pct: var(--lumo-tint-90pct);
    --lumo-contrast: var(--lumo-tint);

    /* Text */
    --lumo-header-text-color: var(--lumo-contrast);
    --lumo-body-text-color: var(--lumo-contrast-90pct);
    --lumo-secondary-text-color: var(--lumo-contrast-70pct);
    --lumo-tertiary-text-color: var(--lumo-contrast-50pct);
    --lumo-disabled-text-color: var(--lumo-contrast-30pct);

    /* Primary */
    --lumo-primary-color: hsl(214, 86%, 55%);
    --lumo-primary-color-50pct: hsla(214, 86%, 55%, 0.5);
    --lumo-primary-color-10pct: hsla(214, 90%, 63%, 0.1);
    --lumo-primary-text-color: hsl(214, 100%, 70%);
    --lumo-primary-contrast-color: #fff;

    /* Error */
    --lumo-error-color: hsl(3, 90%, 63%);
    --lumo-error-color-50pct: hsla(3, 90%, 63%, 0.5);
    --lumo-error-color-10pct: hsla(3, 90%, 63%, 0.1);
    --lumo-error-text-color: hsl(3, 100%, 67%);

    /* Success */
    --lumo-success-color: hsl(145, 65%, 42%);
    --lumo-success-color-50pct: hsla(145, 65%, 42%, 0.5);
    --lumo-success-color-10pct: hsla(145, 65%, 42%, 0.1);
    --lumo-success-text-color: hsl(145, 85%, 47%);
  }

  html {
    color: var(--lumo-body-text-color);
    background-color: var(--lumo-base-color);
  }

  [theme~='dark'] {
    color: var(--lumo-body-text-color);
    background-color: var(--lumo-base-color);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: var(--lumo-header-text-color);
  }

  a {
    color: var(--lumo-primary-text-color);
  }

  blockquote {
    color: var(--lumo-secondary-text-color);
  }

  code,
  pre {
    background-color: var(--lumo-contrast-10pct);
    border-radius: var(--lumo-border-radius-m);
  }
`;_e("",Ul,{moduleId:"lumo-color"});var ql=z`
  :host {
    color: var(--lumo-body-text-color) !important;
    background-color: var(--lumo-base-color) !important;
  }
`;_e("",ql,{moduleId:"lumo-color-legacy",include:["lumo-color"]});var Rr=document.createElement("template");Rr.innerHTML=`
  <style>
    @font-face {
      font-family: 'lumo-icons';
      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAABEcAAsAAAAAIiwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADsAAABUIIslek9TLzIAAAFEAAAAQwAAAFZAIUuKY21hcAAAAYgAAAD4AAADrsCU8d5nbHlmAAACgAAAC2MAABd4h9To2WhlYWQAAA3kAAAAMAAAADZa/6SsaGhlYQAADhQAAAAdAAAAJAbpA35obXR4AAAONAAAABAAAACspBAAAGxvY2EAAA5EAAAAWAAAAFh55IAsbWF4cAAADpwAAAAfAAAAIAFKAXBuYW1lAAAOvAAAATEAAAIuUUJZCHBvc3QAAA/wAAABKwAAAelm8SzVeJxjYGRgYOBiMGCwY2BycfMJYeDLSSzJY5BiYGGAAJA8MpsxJzM9kYEDxgPKsYBpDiBmg4gCACY7BUgAeJxjYGS+yDiBgZWBgamKaQ8DA0MPhGZ8wGDIyAQUZWBlZsAKAtJcUxgcXjG+0mIO+p/FEMUcxDANKMwIkgMABn8MLQB4nO3SWW6DMABF0UtwCEnIPM/zhLK8LqhfXRybSP14XUYtHV9hGYQwQBNIo3cUIPkhQeM7rib1ekqnXg981XuC1qvy84lzojleh3puxL0hPjGjRU473teloEefAUNGjJkwZcacBUtWrNmwZceeA0dOnLlw5cadB09elPGhGf+j0NTI/65KfXerT6JhqKnpRKtgOpuqaTrtKjPUlqHmhto21I7pL6i6hlqY3q7qGWrfUAeGOjTUkaGODXViqFNDnRnq3FAXhro01JWhrg11Y6hbQ90Z6t5QD4Z6NNSToZ4N9WKoV0O9GerdUB+G+jTUl6GWRvkL24BkEXictVh9bFvVFb/nxvbz+7Rf/N6zHcd2bCfP+Wgc1Z9N0jpNnEL6kbRVS6HA2hQYGh9TGR1CbCqa2rXrWOkQE/sHNJgmtZvoVNZqE1B1DNHxzTQxCehUTYiJTQyENui0qSLezr3PduyQfgmRWOfde8+9551z7rnn/O4jLoJ/bRP0UaKQMLFJjpBAvphLZC3Dk0ok7WBzR2/upJs7Ryw/nfFbln/uuN/apCvwrKLrSvUqRufbm5pn0fs0w4gYxnGVP6qHnO4bWiDQGQgwtS6lm3lB3QoX1M2vwEmuzirF39y+Es2+DJ8d1pkyqBIqoze3D1+Zz4DrFoazxI8dWwMrDlZ2DMqQAR9AROsJU+2cmlTPazTco52F1xTa2a2+K8vvq92dVHmtLoPeQX/AZPRYGthDYOeZjBjKoFsVGulR3lWU95WeCK44qHU7MhWUGUKZDT3oKUcG2GWuh+EDDfUYA/jhAhl0TOsJNYSEu7mQmi3UzfXwZKA4BsVsHLXQYGgRW95uEtpJ1Vfn9XiLriRBlFEqxsDjA09yCNUoQxxwd7KWSTt2y3GTKiflqHRSoWZc3m11Wa/fJdFgXD4sSYfleJBKd8GMz7J8dZn/cGRCcKGDnA2Ge3fKzcvlnTDNthGWLXzX/WaXtUAmRgeLlHSr30r0G9UTXMb0AtmwzOoy73fkSlHZkduw/TYuU9cAD4YutPoxTTsA3797wVr4Z/1NC5zARHr4vtxJjxIfiZMhMkbWk+14BnJZKwqGZwDfswLyxWDSg11rFLJF7Nopxjd1h1/QOT+oezgfu3Yq+Hk+duf5x+40o1GTkaIgikK/IEnC6aYxCUBaZJSN4XTYFjU/YMNIKqJwhDGOCCI8FDXnXmXjtGhGJyShqjAOnBOkW2JG9S7GgYeMWAU5JzhnWmBOaOM+CKEPoqSfFDC2Unq+DLlUgUVUFFLZGJg6jtlojsdsa8kPObPuJdi5dnBdBsLJMGTWDa4t2JvtwuPo9s+Y86suv/W33QG1rAaOAUV+vx4K6f2D04PVKlC7WLSrZzAi45ZV6lIC7WoXqmRyvUqoVwrzUoVsIjeTXWQv+RH5GTlBXiB/In8ln0IbBCAFOajAJrgZYyOHWqOfUe/aHjI12R6OQo1jCgt215l+4f6XPb+0MNou0V+43n2F77tSfRb24d7zitgnKmvYHs69zugaPvBwv6ioXkb2LdL65Atw51uLkXlu1bhMMRcXSPcYoqKIRlh34lQP8/5JbuUFye4vxD6/6MxFF11C0uVLr9Ulgw44tS3pMViNLUExbycFgLIct+QDMibRimx1ydUz8FXZiuOIDBOMVX2nUZc+huNE5XUJ81uiJoiabwqaVF0uacKbau/pl4R2VW0XXlJra6boVrYG646TF5NYzwy4vjENVrDlcNpZPl8DH6XX8XWCx0mvWVZY6KFLrvsY66/zPict5FnxaNUR/juvZCM3TvD60E2W1tZizbXTPDuabcm0nbbzpWKpmA1ayBQ8giedLUM+A0kNjBjQjmuYz7YrgIXYvmF63ZLBwSXrpn9Tb9wwdd/U1H0PMQK3XcO8ul3WT7PyPPdpy0TemKxNRcJNauiXJnnUDpUppQWs4SnUIy0EESGYqJYQLGHxzaGWwVIaS6Y7mQFM8ZjYDQ3axjf61SWjU33JwOZA1pwaG1L9mzf71aHRdX1JHw6Fp0aXhNwbqyeGNg4NbdzGCBxoz4ZXjy4Nu69Zr6sDY6vMrLU5nA1P8JkbdWXJ6ERfMryvNh1JfQ9+T4dIhGvK9w3dxjBBzatsQ/MlOHVIDnYpDz6odAXlQ01t2Pa5Iafd8MMpxAeDKP0C6CjgVLT5osB6icUx01lWjXxzT/GyRF2welEM5Z/7jG3VjQ1SrNn5IbyzOG5dobB3/QHxyZvsXcoz8IoEwS7plCg+zxHQk424q9BfEpkESJbFHQusDBSWFkuBkoPO0kLKwRVYjxGXlHTcTDQMJ/H6TX9afkO7mnraTO1feTnZAXLu4cp7HAXMmNG1yeFk9TgS/NHhZR/4QoBTr/ZB+6hCgyl15Nq1UbN6nE1/ZnP1U2cizCBpvs8cJQZJ4LkYx5N/yZPAUZNQQ0V4f3BQllWrK3YRzl30dOT6RVn2upNur6woSa8CqpdT/aKnBM4o3jNur9d9xqtUT6veBEt9Ca9at+ERzEEhUkR8sa5mQ4aVvJoVeEA8zI4ei5mULXFGyU7z/6TAeYLVcpzSWZY8PYYF5yrTV60sT0+XV141vX++Wf16V2bFeGVPZXxFpkvyeKTWLlzfW0mnKxsY6Y3294/0998SCfX1blm5pbcvFGlq/r07MRAMhYIDiW5JFKWW3vdrEpCsZSJG+om7Zu/PSScZJhNkLbmW5Wsr12pWqW5zKtlwRS4bFOxUw17mCzy6lskCDl1WYOGWDYrADrMA7BDDweWWNd5koiJnR1dz+ytLP2q0SqPB1lnK2ccB7RYe4FSoPks3iB3t4txTSHctb2sy1ivk0pvHuCNm6w1f6wxv3+OCgN78LqdQnUVh7R0oTAp0zOf2rbW770Vu5C2dIyGdTnHo8zSji7dppj0USoVCz+lhRMTh53Teq9VbGfbjuSbAooSdXayY4PYHg374C6f7gl1B/DXuJ4/QXxOBdJFJspFsI3egpoWUUCjlTIFnNYNl+ZyZKmBeYKGHkD1QyDlhaKbKwKcIJqJ4TLJ2OmdY/JWXae4DdGBw8HZ7eXcgFF2zr2SoalDry5iKqoa0Puhe3hPQ2s3elTYM+MI+n3rK0KgL7/La3GeMLt6m7u912vGnvtORiIa0qBmhqVi+XW9XNBmqb8eVgKzIHfGI5bNoG7X0UCzeISmqIcO/nY8FH7U8avX9fx/ST+hx0sezPw9Qy8Mum3GWf2N4Uy/yIYGVBXbJHWIZp7dfTcptdMTr9Qmq7DaiK/ukqCL4kt4RUfS5XPnMtmT22/mQFqF7emSqtrlu8SVElxDRJrZODkpuwe0VfTfjdEp1f7A7v+fozNBXUJ/6WTuK2TtFlpFVZAZ3LcFvUi1Z2p2YT+EMAkGJVStOzLTAPg4IqWIAlzRSjOBkl2zxj3TKycpzT/MnvX3uaSMWM+gU0rkXjohhefVRMaps3/kLMSKv23lT23uxQrkQjyOJleMDsdhAnD6ZGElWZ5MjCXzCE/hkWX+WF4knzGhVOyK2eQZekV3eyo0zL8kuYWCnDCvjjhAkcTPOBDXVdoav3HVcFnQjLvtV9S2p0zA6JegPwMQxt+yFb3ll9zGlq/5dRKb3cEyQYoaNYpharJ7xCB7AWxsLY3jjZXY0XsZj0Wjwc9I6PP/dKABnCZaqHpaZEACxk4ZeLZSKNgZABl+lYQX1sJQOSX3n6r410evcoud5JeAGUXVP9H1tZOKejTq4Ono0z0erro1FrnOpohva1d/hTdtVsQdKN5W9RlT3NjD0nznyKNTgKAMfWNWcyodV0IGLPIHOF0o4JyqufaK4z6WIIzuGh3d8c8cwQg8ER+OVxyrjdm8vNuhts4LoOihGxIMuUdgzwiYN7xhh1+oZnJNuTG7gQZvu4XWZ9GAZZjGEubwePqYhtKDTH+9VQkl17/iGybsnJ+8+sKtyPrcll9ty65Zsdst/9iqpEKh7M5VdBxh3csOdNc6tW3I1uyM1PzOXegSOrLFsFNI2O27M+TF2ApnN9MUv5ud6LjxIvEQnHRzxIu4IsA9MLFkJn2tcZoZ7ON7dXe7ujrc8HrusPKamlqXwd77lQUuLpilau4PUMapueBb7irU4RoUXEYXuVuIGlRGmOp+2lNkaRPVziOqmlaZvaqG4dFgSj0jxEJWrv12IUWntmw+rfQarRE0Aph4ocI6nlUlGqs+u3/+T/ethW62PpHp2eHbZstnh/wOO95yDAHicY2BkYGAA4pmJ6QHx/DZfGbiZXwBFGGpUNzQi6P+vmacy3QJyORiYQKIANoULVXicY2BkYGAO+p8FJF8wAAHzVAZGBlSgDQBW9gNvAAAAeJxjYGBgYH4xNDAAzwQmjwAAAAAATgCaAOgBCgEsAU4BcAGaAcQB7gIaApwC6ASaBLwE1gTyBQ4FKgV6BdAF/gZEBmYGtgcYB5AIGAhSCGoI/glGCb4J2goECjwKggq4CvALUAuWC7x4nGNgZGBg0GZMYRBlAAEmIOYCQgaG/2A+AwAYlAG8AHicbZE9TsMwGIbf9A/RSggEYmHxAgtq+jN2ZGj3Dt3T1GlTOXHkuBW9AyfgEByCgTNwCA7BW/NJlVBtyd/jx+8XKwmAa3whwnFE6Ib1OBq44O6Pm6Qb4Rb5QbiNHh6FO/RD4S6eMRHu4RaaT4halzR3eBVu4Apvwk36d+EW+UO4jXt8Cnfov4W7WOBHuIen6MXsCtvPU1vWc73emcSdxIkW2tW5LdUoHp7kTJfaJV6v1PKg6v167H2mMmcLNbWl18ZYVTm71amPN95Xk8EgEx+ntoDBDgUs+siRspaoMef7rukNEriziXNuwS7Hmoe9wggxv+e55IzJMqQTeNYV00scuNbY8+YxrUfGfcaMZb/CNPQe04bT0lThbEuT0sfYhK6K/23Amf3Lx+H24hcj4GScAAAAeJxtjtlugzAQRbkJUEJIuu/7vqR8lGNPAcWx0YAb5e/LklR96EgenSufGY038PqKvf9rhgGG8BEgxA4ijBBjjAQTTLGLPezjAIc4wjFOcIoznOMCl7jCNW5wizvc4wGPeMIzXvCKN7zjAzN8eonQRWZSSaYmjvug6ase98hFltexMJmmVNmV2WBvdNgZUc+ujAWzXW3UDnu1w43asStHc8GpzAXX/py0jqTQZJTgkcxJLpaCF0lD32xNt+43tAsn29Dft02uDKS2cjGUNgsk26qK2lFthYoU27INPqmiDqg5goe0pqR5qSoqMdek/CUZFywL46rEsiImleqiqoMyt4baXlu/1GLdNFf5zbcNmdr1YUWCZe47o+zUmb/DoStbw3cVsef9ALjjiPQA) format('woff');
      font-weight: normal;
      font-style: normal;
    }

    html {
      --lumo-icons-align-center: "\\ea01";
      --lumo-icons-align-left: "\\ea02";
      --lumo-icons-align-right: "\\ea03";
      --lumo-icons-angle-down: "\\ea04";
      --lumo-icons-angle-left: "\\ea05";
      --lumo-icons-angle-right: "\\ea06";
      --lumo-icons-angle-up: "\\ea07";
      --lumo-icons-arrow-down: "\\ea08";
      --lumo-icons-arrow-left: "\\ea09";
      --lumo-icons-arrow-right: "\\ea0a";
      --lumo-icons-arrow-up: "\\ea0b";
      --lumo-icons-bar-chart: "\\ea0c";
      --lumo-icons-bell: "\\ea0d";
      --lumo-icons-calendar: "\\ea0e";
      --lumo-icons-checkmark: "\\ea0f";
      --lumo-icons-chevron-down: "\\ea10";
      --lumo-icons-chevron-left: "\\ea11";
      --lumo-icons-chevron-right: "\\ea12";
      --lumo-icons-chevron-up: "\\ea13";
      --lumo-icons-clock: "\\ea14";
      --lumo-icons-cog: "\\ea15";
      --lumo-icons-cross: "\\ea16";
      --lumo-icons-download: "\\ea17";
      --lumo-icons-dropdown: "\\ea18";
      --lumo-icons-edit: "\\ea19";
      --lumo-icons-error: "\\ea1a";
      --lumo-icons-eye: "\\ea1b";
      --lumo-icons-eye-disabled: "\\ea1c";
      --lumo-icons-menu: "\\ea1d";
      --lumo-icons-minus: "\\ea1e";
      --lumo-icons-ordered-list: "\\ea1f";
      --lumo-icons-phone: "\\ea20";
      --lumo-icons-photo: "\\ea21";
      --lumo-icons-play: "\\ea22";
      --lumo-icons-plus: "\\ea23";
      --lumo-icons-redo: "\\ea24";
      --lumo-icons-reload: "\\ea25";
      --lumo-icons-search: "\\ea26";
      --lumo-icons-undo: "\\ea27";
      --lumo-icons-unordered-list: "\\ea28";
      --lumo-icons-upload: "\\ea29";
      --lumo-icons-user: "\\ea2a";
    }
  </style>
`;document.head.appendChild(Rr.content);var Yl=z`
  :host {
    --lumo-size-xs: 1.625rem;
    --lumo-size-s: 1.875rem;
    --lumo-size-m: 2.25rem;
    --lumo-size-l: 2.75rem;
    --lumo-size-xl: 3.5rem;

    /* Icons */
    --lumo-icon-size-s: 1.25em;
    --lumo-icon-size-m: 1.5em;
    --lumo-icon-size-l: 2.25em;
    /* For backwards compatibility */
    --lumo-icon-size: var(--lumo-icon-size-m);
  }
`,Vr=document.createElement("template");Vr.innerHTML=`<style>${Yl.toString().replace(":host","html")}</style>`;document.head.appendChild(Vr.content);var Kl=z`
  :host {
    /* Square */
    --lumo-space-xs: 0.25rem;
    --lumo-space-s: 0.5rem;
    --lumo-space-m: 1rem;
    --lumo-space-l: 1.5rem;
    --lumo-space-xl: 2.5rem;

    /* Wide */
    --lumo-space-wide-xs: calc(var(--lumo-space-xs) / 2) var(--lumo-space-xs);
    --lumo-space-wide-s: calc(var(--lumo-space-s) / 2) var(--lumo-space-s);
    --lumo-space-wide-m: calc(var(--lumo-space-m) / 2) var(--lumo-space-m);
    --lumo-space-wide-l: calc(var(--lumo-space-l) / 2) var(--lumo-space-l);
    --lumo-space-wide-xl: calc(var(--lumo-space-xl) / 2) var(--lumo-space-xl);

    /* Tall */
    --lumo-space-tall-xs: var(--lumo-space-xs) calc(var(--lumo-space-xs) / 2);
    --lumo-space-tall-s: var(--lumo-space-s) calc(var(--lumo-space-s) / 2);
    --lumo-space-tall-m: var(--lumo-space-m) calc(var(--lumo-space-m) / 2);
    --lumo-space-tall-l: var(--lumo-space-l) calc(var(--lumo-space-l) / 2);
    --lumo-space-tall-xl: var(--lumo-space-xl) calc(var(--lumo-space-xl) / 2);
  }
`,$r=document.createElement("template");$r.innerHTML=`<style>${Kl.toString().replace(":host","html")}</style>`;document.head.appendChild($r.content);var Zl=z`
  :host {
    /* Border radius */
    --lumo-border-radius-s: 0.25em; /* Checkbox, badge, date-picker year indicator, etc */
    --lumo-border-radius-m: var(--lumo-border-radius, 0.25em); /* Button, text field, menu overlay, etc */
    --lumo-border-radius-l: 0.5em; /* Dialog, notification, etc */
    --lumo-border-radius: 0.25em; /* Deprecated */

    /* Shadow */
    --lumo-box-shadow-xs: 0 1px 4px -1px var(--lumo-shade-50pct);
    --lumo-box-shadow-s: 0 2px 4px -1px var(--lumo-shade-20pct), 0 3px 12px -1px var(--lumo-shade-30pct);
    --lumo-box-shadow-m: 0 2px 6px -1px var(--lumo-shade-20pct), 0 8px 24px -4px var(--lumo-shade-40pct);
    --lumo-box-shadow-l: 0 3px 18px -2px var(--lumo-shade-20pct), 0 12px 48px -6px var(--lumo-shade-40pct);
    --lumo-box-shadow-xl: 0 4px 24px -3px var(--lumo-shade-20pct), 0 18px 64px -8px var(--lumo-shade-40pct);

    /* Clickable element cursor */
    --lumo-clickable-cursor: default;
  }
`,jr=document.createElement("template");jr.innerHTML=`<style>${Zl.toString().replace(":host","html")}</style>`;document.head.appendChild(jr.content);var Jl=z`
  :host {
    /* prettier-ignore */
    --lumo-font-family: -apple-system, BlinkMacSystemFont, 'Roboto', 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';

    /* Font sizes */
    --lumo-font-size-xxs: 0.75rem;
    --lumo-font-size-xs: 0.8125rem;
    --lumo-font-size-s: 0.875rem;
    --lumo-font-size-m: 1rem;
    --lumo-font-size-l: 1.125rem;
    --lumo-font-size-xl: 1.375rem;
    --lumo-font-size-xxl: 1.75rem;
    --lumo-font-size-xxxl: 2.5rem;

    /* Line heights */
    --lumo-line-height-xs: 1.25;
    --lumo-line-height-s: 1.375;
    --lumo-line-height-m: 1.625;
  }
`,Gr=document.createElement("template");Gr.innerHTML=`<style>${Jl.toString().replace(":host","html")}</style>`;document.head.appendChild(Gr.content);var Xl=z`
  html {
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size, var(--lumo-font-size-m));
    line-height: var(--lumo-line-height-m);
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Can’t combine with the above selector because that doesn’t work in browsers without native shadow dom */
  :host {
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size, var(--lumo-font-size-m));
    line-height: var(--lumo-line-height-m);
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  small,
  [theme~='font-size-s'] {
    font-size: var(--lumo-font-size-s);
    line-height: var(--lumo-line-height-s);
  }

  [theme~='font-size-xs'] {
    font-size: var(--lumo-font-size-xs);
    line-height: var(--lumo-line-height-xs);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 600;
    line-height: var(--lumo-line-height-xs);
    margin-top: 1.25em;
  }

  h1 {
    font-size: var(--lumo-font-size-xxxl);
    margin-bottom: 0.75em;
  }

  h2 {
    font-size: var(--lumo-font-size-xxl);
    margin-bottom: 0.5em;
  }

  h3 {
    font-size: var(--lumo-font-size-xl);
    margin-bottom: 0.5em;
  }

  h4 {
    font-size: var(--lumo-font-size-l);
    margin-bottom: 0.5em;
  }

  h5 {
    font-size: var(--lumo-font-size-m);
    margin-bottom: 0.25em;
  }

  h6 {
    font-size: var(--lumo-font-size-xs);
    margin-bottom: 0;
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }

  p,
  blockquote {
    margin-top: 0.5em;
    margin-bottom: 0.75em;
  }

  a {
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  hr {
    display: block;
    align-self: stretch;
    height: 1px;
    border: 0;
    padding: 0;
    margin: var(--lumo-space-s) calc(var(--lumo-border-radius-m) / 2);
    background-color: var(--lumo-contrast-10pct);
  }

  blockquote {
    border-left: 2px solid var(--lumo-contrast-30pct);
  }

  b,
  strong {
    font-weight: 600;
  }

  /* RTL specific styles */

  blockquote[dir='rtl'] {
    border-left: none;
    border-right: 2px solid var(--lumo-contrast-30pct);
  }
`;_e("",Xl,{moduleId:"lumo-typography"});_e("vaadin-checkbox",z`
    :host {
      -webkit-tap-highlight-color: transparent;
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
      cursor: default;
      outline: none;
    }

    [part='label']:not([empty]) {
      margin: 0.1875em 0.875em 0.1875em 0.375em;
    }

    [part='checkbox'] {
      width: calc(1em + 2px);
      height: calc(1em + 2px);
      margin: 0.1875em;
      position: relative;
      border-radius: var(--lumo-border-radius-s);
      background-color: var(--lumo-contrast-20pct);
      transition: transform 0.2s cubic-bezier(0.12, 0.32, 0.54, 2), background-color 0.15s;
      pointer-events: none;
      line-height: 1.2;
      cursor: var(--lumo-clickable-cursor);
    }

    :host([indeterminate]) [part='checkbox'],
    :host([checked]) [part='checkbox'] {
      background-color: var(--lumo-primary-color);
    }

    /* Needed to align the checkbox nicely on the baseline */
    [part='checkbox']::before {
      content: '\\2003';
    }

    /* Checkmark */
    [part='checkbox']::after {
      content: '';
      display: inline-block;
      width: 0;
      height: 0;
      border: 0 solid var(--lumo-primary-contrast-color);
      border-width: 0.1875em 0 0 0.1875em;
      box-sizing: border-box;
      transform-origin: 0 0;
      position: absolute;
      top: 0.8125em;
      left: 0.5em;
      transform: scale(0.55) rotate(-135deg);
      opacity: 0;
    }

    :host([checked]) [part='checkbox']::after {
      opacity: 1;
      width: 0.625em;
      height: 1.0625em;
    }

    /* Indeterminate checkmark */
    :host([indeterminate]) [part='checkbox']::after {
      transform: none;
      opacity: 1;
      top: 45%;
      height: 10%;
      left: 22%;
      right: 22%;
      width: auto;
      border: 0;
      background-color: var(--lumo-primary-contrast-color);
      transition: opacity 0.25s;
    }

    /* Focus ring */
    :host([focus-ring]) [part='checkbox'] {
      box-shadow: 0 0 0 3px var(--lumo-primary-color-50pct);
    }

    /* Disabled */
    :host([disabled]) {
      pointer-events: none;
      color: var(--lumo-disabled-text-color);
    }

    :host([disabled]) [part='label'] ::slotted(*) {
      color: inherit;
    }

    :host([disabled]) [part='checkbox'] {
      background-color: var(--lumo-contrast-10pct);
    }

    :host([disabled]) [part='checkbox']::after {
      border-color: var(--lumo-contrast-30pct);
    }

    :host([indeterminate][disabled]) [part='checkbox']::after {
      background-color: var(--lumo-contrast-30pct);
    }

    /* RTL specific styles */
    :host([dir='rtl']) [part='label']:not([empty]) {
      margin: 0.1875em 0.375em 0.1875em 0.875em;
    }

    /* Transition the checkmark if activated with the mouse (disabled for grid select-all this way) */
    :host(:hover) [part='checkbox']::after {
      transition: width 0.1s, height 0.25s;
    }

    /* Used for activation "halo" */
    [part='checkbox']::before {
      color: transparent;
      display: inline-block;
      width: 100%;
      height: 100%;
      border-radius: inherit;
      background-color: inherit;
      transform: scale(1.4);
      opacity: 0;
      transition: transform 0.1s, opacity 0.8s;
    }

    /* Hover */
    :host(:not([checked]):not([indeterminate]):not([disabled]):hover) [part='checkbox'] {
      background-color: var(--lumo-contrast-30pct);
    }

    /* Disable hover for touch devices */
    @media (pointer: coarse) {
      :host(:not([checked]):not([indeterminate]):not([disabled]):hover) [part='checkbox'] {
        background-color: var(--lumo-contrast-20pct);
      }
    }

    /* Active */
    :host([active]) [part='checkbox'] {
      transform: scale(0.9);
      transition-duration: 0.05s;
    }

    :host([active][checked]) [part='checkbox'] {
      transform: scale(1.1);
    }

    :host([active]:not([checked])) [part='checkbox']::before {
      transition-duration: 0.01s, 0.01s;
      transform: scale(0);
      opacity: 0.4;
    }
  `,{moduleId:"lumo-checkbox"});var Ql=0,we=function(i){let t=i.__mixinApplications;t||(t=new WeakMap,i.__mixinApplications=t);let e=Ql++;function s(r){let n=r.__mixinSet;if(n&&n[e])return r;let l=t,a=l.get(r);if(!a){a=i(r),l.set(r,a);let o=Object.create(a.__mixinSet||n||null);o[e]=!0,a.__mixinSet=o}return a}return s};var $=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?i=>ShadyDOM.patch(i):i=>i;function Pi(i){return i.indexOf(".")>=0}function be(i){let t=i.indexOf(".");return t===-1?i:i.slice(0,t)}function ea(i,t){return i.indexOf(t+".")===0}function Et(i,t){return t.indexOf(i+".")===0}function Pt(i,t,e){return t+e.slice(i.length)}function Qe(i){if(Array.isArray(i)){let t=[];for(let e=0;e<i.length;e++){let s=i[e].toString().split(".");for(let r=0;r<s.length;r++)t.push(s[r])}return t.join(".")}else return i}function Wr(i){return Array.isArray(i)?Qe(i).split("."):i.toString().split(".")}function j(i,t,e){let s=i,r=Wr(t);for(let n=0;n<r.length;n++){if(!s)return;let l=r[n];s=s[l]}return e&&(e.path=r.join(".")),s}function Ur(i,t,e){let s=i,r=Wr(t),n=r[r.length-1];if(r.length>1){for(let l=0;l<r.length-1;l++){let a=r[l];if(s=s[a],!s)return}s[n]=e}else s[t]=e;return r.join(".")}var Bt={},ta=/-[a-z]/g,ia=/([A-Z])/g;function qr(i){return Bt[i]||(Bt[i]=i.indexOf("-")<0?i:i.replace(ta,t=>t[1].toUpperCase()))}function kt(i){return Bt[i]||(Bt[i]=i.replace(ia,"-$1").toLowerCase())}var sa=0,Yr=0,Pe=[],ra=0,Bi=!1,Kr=document.createTextNode("");new window.MutationObserver(na).observe(Kr,{characterData:!0});function na(){Bi=!1;let i=Pe.length;for(let t=0;t<i;t++){let e=Pe[t];if(e)try{e()}catch(s){setTimeout(()=>{throw s})}}Pe.splice(0,i),Yr+=i}var et={after(i){return{run(t){return window.setTimeout(t,i)},cancel(t){window.clearTimeout(t)}}},run(i,t){return window.setTimeout(i,t)},cancel(i){window.clearTimeout(i)}},ki={run(i){return window.requestAnimationFrame(i)},cancel(i){window.cancelAnimationFrame(i)}},la={run(i){return window.requestIdleCallback?window.requestIdleCallback(i):window.setTimeout(i,16)},cancel(i){window.cancelIdleCallback?window.cancelIdleCallback(i):window.clearTimeout(i)}},Tt={run(i){return Bi||(Bi=!0,Kr.textContent=ra++),Pe.push(i),sa++},cancel(i){let t=i-Yr;if(t>=0){if(!Pe[t])throw new Error("invalid async handle: "+i);Pe[t]=null}}};var aa=Tt,Zr=we(i=>{class t extends i{static createProperties(s){let r=this.prototype;for(let n in s)n in r||r._createPropertyAccessor(n)}static attributeNameForProperty(s){return s.toLowerCase()}static typeForProperty(s){}_createPropertyAccessor(s,r){this._addPropertyToAttributeMap(s),this.hasOwnProperty(JSCompiler_renameProperty("__dataHasAccessor",this))||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[s]||(this.__dataHasAccessor[s]=!0,this._definePropertyAccessor(s,r))}_addPropertyToAttributeMap(s){this.hasOwnProperty(JSCompiler_renameProperty("__dataAttributes",this))||(this.__dataAttributes=Object.assign({},this.__dataAttributes));let r=this.__dataAttributes[s];return r||(r=this.constructor.attributeNameForProperty(s),this.__dataAttributes[r]=s),r}_definePropertyAccessor(s,r){Object.defineProperty(this,s,{get(){return this.__data[s]},set:r?function(){}:function(n){this._setPendingProperty(s,n,!0)&&this._invalidateProperties()}})}constructor(){super();this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__dataCounter=0,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let s in this.__dataHasAccessor)this.hasOwnProperty(s)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[s]=this[s],delete this[s])}_initializeInstanceProperties(s){Object.assign(this,s)}_setProperty(s,r){this._setPendingProperty(s,r)&&this._invalidateProperties()}_getProperty(s){return this.__data[s]}_setPendingProperty(s,r,n){let l=this.__data[s],a=this._shouldPropertyChange(s,r,l);return a&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),this.__dataOld&&!(s in this.__dataOld)&&(this.__dataOld[s]=l),this.__data[s]=r,this.__dataPending[s]=r),a}_isPropertyPending(s){return!!(this.__dataPending&&this.__dataPending.hasOwnProperty(s))}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,aa.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){this.__dataCounter++;let s=this.__data,r=this.__dataPending,n=this.__dataOld;this._shouldPropertiesChange(s,r,n)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(s,r,n)),this.__dataCounter--}_shouldPropertiesChange(s,r,n){return Boolean(r)}_propertiesChanged(s,r,n){}_shouldPropertyChange(s,r,n){return n!==r&&(n===n||r===r)}attributeChangedCallback(s,r,n,l){r!==n&&this._attributeToProperty(s,n),super.attributeChangedCallback&&super.attributeChangedCallback(s,r,n,l)}_attributeToProperty(s,r,n){if(!this.__serializing){let l=this.__dataAttributes,a=l&&l[s]||s;this[a]=this._deserializeValue(r,n||this.constructor.typeForProperty(a))}}_propertyToAttribute(s,r,n){this.__serializing=!0,n=arguments.length<3?this[s]:n,this._valueToNodeAttribute(this,n,r||this.constructor.attributeNameForProperty(s)),this.__serializing=!1}_valueToNodeAttribute(s,r,n){let l=this._serializeValue(r);(n==="class"||n==="name"||n==="slot")&&(s=$(s)),l===void 0?s.removeAttribute(n):s.setAttribute(n,l)}_serializeValue(s){switch(typeof s){case"boolean":return s?"":void 0;default:return s!=null?s.toString():void 0}}_deserializeValue(s,r){switch(r){case Boolean:return s!==null;case Number:return Number(s);default:return s}}}return t});var Jr={},It=HTMLElement.prototype;for(;It;){let i=Object.getOwnPropertyNames(It);for(let t=0;t<i.length;t++)Jr[i[t]]=!0;It=Object.getPrototypeOf(It)}function oa(i,t){if(!Jr[t]){let e=i[t];e!==void 0&&(i.__data?i._setPendingProperty(t,e):(i.__dataProto?i.hasOwnProperty(JSCompiler_renameProperty("__dataProto",i))||(i.__dataProto=Object.create(i.__dataProto)):i.__dataProto={},i.__dataProto[t]=e))}}var ha=we(i=>{let t=Zr(i);class e extends t{static createPropertiesForAttributes(){let r=this.observedAttributes;for(let n=0;n<r.length;n++)this.prototype._createPropertyAccessor(qr(r[n]))}static attributeNameForProperty(r){return kt(r)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(r){for(let n in r)this._setProperty(n,r[n])}_ensureAttribute(r,n){let l=this;l.hasAttribute(r)||this._valueToNodeAttribute(l,n,r)}_serializeValue(r){switch(typeof r){case"object":if(r instanceof Date)return r.toString();if(r)try{return JSON.stringify(r)}catch(n){return""}default:return super._serializeValue(r)}}_deserializeValue(r,n){let l;switch(n){case Object:try{l=JSON.parse(r)}catch(a){l=r}break;case Array:try{l=JSON.parse(r)}catch(a){l=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${r}`)}break;case Date:l=isNaN(r)?String(r):Number(r),l=new Date(l);break;default:l=super._deserializeValue(r,n);break}return l}_definePropertyAccessor(r,n){oa(this,r),super._definePropertyAccessor(r,n)}_hasAccessor(r){return this.__dataHasAccessor&&this.__dataHasAccessor[r]}_isPropertyPending(r){return Boolean(this.__dataPending&&r in this.__dataPending)}}return e});var da={"dom-if":!0,"dom-repeat":!0},Xr=!1,Qr=!1;function ca(){if(!Xr){Xr=!0;let i=document.createElement("textarea");i.placeholder="a",Qr=i.placeholder===i.textContent}return Qr}function ua(i){ca()&&i.localName==="textarea"&&i.placeholder&&i.placeholder===i.textContent&&(i.textContent=null)}function pa(i){let t=i.getAttribute("is");if(t&&da[t]){let e=i;for(e.removeAttribute("is"),i=e.ownerDocument.createElement(t),e.parentNode.replaceChild(i,e),i.appendChild(e);e.attributes.length;)i.setAttribute(e.attributes[0].name,e.attributes[0].value),e.removeAttribute(e.attributes[0].name)}return i}function e1(i,t){let e=t.parentInfo&&e1(i,t.parentInfo);if(e){for(let s=e.firstChild,r=0;s;s=s.nextSibling)if(t.parentIndex===r++)return s}else return i}function fa(i,t,e,s){s.id&&(t[s.id]=e)}function ga(i,t,e){if(e.events&&e.events.length)for(let s=0,r=e.events,n;s<r.length&&(n=r[s]);s++)i._addMethodEventListenerToNode(t,n.name,n.value,i)}function ma(i,t,e,s){e.templateInfo&&(t._templateInfo=e.templateInfo,t._parentTemplateInfo=s)}function va(i,t,e){return i=i._methodHost||i,function(r){i[e]?i[e](r,r.detail):console.warn("listener method `"+e+"` not defined")}}var _a=we(i=>{class t extends i{static _parseTemplate(s,r){if(!s._templateInfo){let n=s._templateInfo={};n.nodeInfoList=[],n.nestedTemplate=Boolean(r),n.stripWhiteSpace=r&&r.stripWhiteSpace||s.hasAttribute("strip-whitespace"),this._parseTemplateContent(s,n,{parent:null})}return s._templateInfo}static _parseTemplateContent(s,r,n){return this._parseTemplateNode(s.content,r,n)}static _parseTemplateNode(s,r,n){let l=!1,a=s;return a.localName=="template"&&!a.hasAttribute("preserve-content")?l=this._parseTemplateNestedTemplate(a,r,n)||l:a.localName==="slot"&&(r.hasInsertionPoint=!0),ua(a),a.firstChild&&this._parseTemplateChildNodes(a,r,n),a.hasAttributes&&a.hasAttributes()&&(l=this._parseTemplateNodeAttributes(a,r,n)||l),l||n.noted}static _parseTemplateChildNodes(s,r,n){if(!(s.localName==="script"||s.localName==="style"))for(let l=s.firstChild,a=0,o;l;l=o){if(l.localName=="template"&&(l=pa(l)),o=l.nextSibling,l.nodeType===Node.TEXT_NODE){let d=o;for(;d&&d.nodeType===Node.TEXT_NODE;)l.textContent+=d.textContent,o=d.nextSibling,s.removeChild(d),d=o;if(r.stripWhiteSpace&&!l.textContent.trim()){s.removeChild(l);continue}}let h={parentIndex:a,parentInfo:n};this._parseTemplateNode(l,r,h)&&(h.infoIndex=r.nodeInfoList.push(h)-1),l.parentNode&&a++}}static _parseTemplateNestedTemplate(s,r,n){let l=s,a=this._parseTemplate(l,r);return(a.content=l.content.ownerDocument.createDocumentFragment()).appendChild(l.content),n.templateInfo=a,!0}static _parseTemplateNodeAttributes(s,r,n){let l=!1,a=Array.from(s.attributes);for(let o=a.length-1,h;h=a[o];o--)l=this._parseTemplateNodeAttribute(s,r,n,h.name,h.value)||l;return l}static _parseTemplateNodeAttribute(s,r,n,l,a){return l.slice(0,3)==="on-"?(s.removeAttribute(l),n.events=n.events||[],n.events.push({name:l.slice(3),value:a}),!0):l==="id"?(n.id=a,!0):!1}static _contentForTemplate(s){let r=s._templateInfo;return r&&r.content||s.content}_stampTemplate(s,r){s&&!s.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(s),r=r||this.constructor._parseTemplate(s);let n=r.nodeInfoList,l=r.content||s.content,a=document.importNode(l,!0);a.__noInsertionPoint=!r.hasInsertionPoint;let o=a.nodeList=new Array(n.length);a.$={};for(let h=0,d=n.length,c;h<d&&(c=n[h]);h++){let p=o[h]=e1(a,c);fa(this,a.$,p,c),ma(this,p,c,r),ga(this,p,c)}return a=a,a}_addMethodEventListenerToNode(s,r,n,l){l=l||s;let a=va(l,r,n);return this._addEventListenerToNode(s,r,a),a}_addEventListenerToNode(s,r,n){s.addEventListener(r,n)}_removeEventListenerFromNode(s,r,n){s.removeEventListener(r,n)}}return t});var tt=0,it=[],b={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},t1="__computeInfo",wa=/[A-Z]/;function Ti(i,t,e){let s=i[t];if(!s)s=i[t]={};else if(!i.hasOwnProperty(t)&&(s=i[t]=Object.create(i[t]),e))for(let r in s){let n=s[r],l=s[r]=Array(n.length);for(let a=0;a<n.length;a++)l[a]=n[a]}return s}function st(i,t,e,s,r,n){if(t){let l=!1,a=tt++;for(let o in e){let h=r?be(o):o,d=t[h];if(d)for(let c=0,p=d.length,f;c<p&&(f=d[c]);c++)(!f.info||f.info.lastRun!==a)&&(!r||Ii(o,f.trigger))&&(f.info&&(f.info.lastRun=a),f.fn(i,o,e,s,f.info,r,n),l=!0)}return l}return!1}function ba(i,t,e,s,r,n,l,a){let o=!1,h=l?be(s):s,d=t[h];if(d)for(let c=0,p=d.length,f;c<p&&(f=d[c]);c++)(!f.info||f.info.lastRun!==e)&&(!l||Ii(s,f.trigger))&&(f.info&&(f.info.lastRun=e),f.fn(i,s,r,n,f.info,l,a),o=!0);return o}function Ii(i,t){if(t){let e=t.name;return e==i||!!(t.structured&&ea(e,i))||!!(t.wildcard&&Et(e,i))}else return!0}function i1(i,t,e,s,r){let n=typeof r.method=="string"?i[r.method]:r.method,l=r.property;n?n.call(i,i.__data[l],s[l]):r.dynamicFn||console.warn("observer method `"+r.method+"` not defined")}function za(i,t,e,s,r){let n=i[b.NOTIFY],l,a=tt++;for(let h in t)t[h]&&(n&&ba(i,n,a,h,e,s,r)||r&&ya(i,h,e))&&(l=!0);let o;l&&(o=i.__dataHost)&&o._invalidateProperties&&o._invalidateProperties()}function ya(i,t,e){let s=be(t);if(s!==t){let r=kt(s)+"-changed";return s1(i,r,e[t],t),!0}return!1}function s1(i,t,e,s){let r={value:e,queueProperty:!0};s&&(r.path=s),$(i).dispatchEvent(new CustomEvent(t,{detail:r}))}function xa(i,t,e,s,r,n){let a=(n?be(t):t)!=t?t:null,o=a?j(i,a):i.__data[t];a&&o===void 0&&(o=e[t]),s1(i,r.eventName,o,a)}function Ma(i,t,e,s,r){let n,l=i.detail,a=l&&l.path;a?(s=Pt(e,s,a),n=l&&l.value):n=i.currentTarget[e],n=r?!n:n,(!t[b.READ_ONLY]||!t[b.READ_ONLY][s])&&t._setPendingPropertyOrPath(s,n,!0,Boolean(a))&&(!l||!l.queueProperty)&&t._invalidateProperties()}function Fa(i,t,e,s,r){let n=i.__data[t];Dt&&(n=Dt(n,r.attrName,"attribute",i)),i._propertyToAttribute(t,r.attrName,n)}function Ha(i,t,e,s){let r=i[b.COMPUTE];if(r)if(Tl){tt++;let n=Aa(i),l=[];for(let o in t)r1(o,r,l,n,s);let a;for(;a=l.shift();)n1(i,"",t,e,a)&&r1(a.methodInfo,r,l,n,s);Object.assign(e,i.__dataOld),Object.assign(t,i.__dataPending),i.__dataPending=null}else{let n=t;for(;st(i,r,n,e,s);)Object.assign(e,i.__dataOld),Object.assign(t,i.__dataPending),n=i.__dataPending,i.__dataPending=null}}var Ca=(i,t,e)=>{let s=0,r=t.length-1,n=-1;for(;s<=r;){let l=s+r>>1,a=e.get(t[l].methodInfo)-e.get(i.methodInfo);if(a<0)s=l+1;else if(a>0)r=l-1;else{n=l;break}}n<0&&(n=r+1),t.splice(n,0,i)},r1=(i,t,e,s,r)=>{let n=r?be(i):i,l=t[n];if(l)for(let a=0;a<l.length;a++){let o=l[a];o.info.lastRun!==tt&&(!r||Ii(i,o.trigger))&&(o.info.lastRun=tt,Ca(o.info,e,s))}};function Aa(i){let t=i.constructor.__orderedComputedDeps;if(!t){t=new Map;let e=i[b.COMPUTE],{counts:s,ready:r,total:n}=Sa(i),l;for(;l=r.shift();){t.set(l,t.size);let a=e[l];a&&a.forEach(o=>{let h=o.info.methodInfo;--n,--s[h]==0&&r.push(h)})}n!==0&&console.warn(`Computed graph for ${i.localName} incomplete; circular?`),i.constructor.__orderedComputedDeps=t}return t}function Sa(i){let t=i[t1],e={},s=i[b.COMPUTE],r=[],n=0;for(let l in t){let a=t[l];n+=e[l]=a.args.filter(o=>!o.literal).length+(a.dynamicFn?1:0)}for(let l in s)t[l]||r.push(l);return{counts:e,ready:r,total:n}}function n1(i,t,e,s,r){let n=Li(i,t,e,s,r);if(n===it)return!1;let l=r.methodInfo;return i.__dataHasAccessor&&i.__dataHasAccessor[l]?i._setPendingProperty(l,n,!0):(i[l]=n,!1)}function Da(i,t,e){let s=i.__dataLinkedPaths;if(s){let r;for(let n in s){let l=s[n];Et(n,t)?(r=Pt(n,l,t),i._setPendingPropertyOrPath(r,e,!0,!0)):Et(l,t)&&(r=Pt(l,n,t),i._setPendingPropertyOrPath(r,e,!0,!0))}}}function Oi(i,t,e,s,r,n,l){e.bindings=e.bindings||[];let a={kind:s,target:r,parts:n,literal:l,isCompound:n.length!==1};if(e.bindings.push(a),Pa(a)){let{event:h,negate:d}=a.parts[0];a.listenerEvent=h||kt(r)+"-changed",a.listenerNegate=d}let o=t.nodeInfoList.length;for(let h=0;h<a.parts.length;h++){let d=a.parts[h];d.compoundIndex=h,Ea(i,t,a,d,o)}}function Ea(i,t,e,s,r){if(!s.literal)if(e.kind==="attribute"&&e.target[0]==="-")console.warn("Cannot set attribute "+e.target+' because "-" is not a valid attribute starting character');else{let n=s.dependencies,l={index:r,binding:e,part:s,evaluator:i};for(let a=0;a<n.length;a++){let o=n[a];typeof o=="string"&&(o=l1(o),o.wildcard=!0),i._addTemplatePropertyEffect(t,o.rootProperty,{fn:Ba,info:l,trigger:o})}}}function Ba(i,t,e,s,r,n,l){let a=l[r.index],o=r.binding,h=r.part;if(n&&h.source&&t.length>h.source.length&&o.kind=="property"&&!o.isCompound&&a.__isPropertyEffectsClient&&a.__dataHasAccessor&&a.__dataHasAccessor[o.target]){let d=e[t];t=Pt(h.source,o.target,t),a._setPendingPropertyOrPath(t,d,!1,!0)&&i._enqueueClient(a)}else{let d=r.evaluator._evaluateBinding(i,h,t,e,s,n);d!==it&&ka(i,a,o,h,d)}}function ka(i,t,e,s,r){if(r=Ta(t,r,e,s),Dt&&(r=Dt(r,e.target,e.kind,t)),e.kind=="attribute")i._valueToNodeAttribute(t,r,e.target);else{let n=e.target;t.__isPropertyEffectsClient&&t.__dataHasAccessor&&t.__dataHasAccessor[n]?(!t[b.READ_ONLY]||!t[b.READ_ONLY][n])&&t._setPendingProperty(n,r)&&i._enqueueClient(t):i._setUnmanagedPropertyToNode(t,n,r)}}function Ta(i,t,e,s){if(e.isCompound){let r=i.__dataCompoundStorage[e.target];r[s.compoundIndex]=t,t=r.join("")}return e.kind!=="attribute"&&(e.target==="textContent"||e.target==="value"&&(i.localName==="input"||i.localName==="textarea"))&&(t=t??""),t}function Pa(i){return Boolean(i.target)&&i.kind!="attribute"&&i.kind!="text"&&!i.isCompound&&i.parts[0].mode==="{"}function Oa(i,t){let{nodeList:e,nodeInfoList:s}=t;if(s.length)for(let r=0;r<s.length;r++){let n=s[r],l=e[r],a=n.bindings;if(a)for(let o=0;o<a.length;o++){let h=a[o];Ia(l,h),La(l,i,h)}l.__dataHost=i}}function Ia(i,t){if(t.isCompound){let e=i.__dataCompoundStorage||(i.__dataCompoundStorage={}),s=t.parts,r=new Array(s.length);for(let l=0;l<s.length;l++)r[l]=s[l].literal;let n=t.target;e[n]=r,t.literal&&t.kind=="property"&&(n==="className"&&(i=$(i)),i[n]=t.literal)}}function La(i,t,e){if(e.listenerEvent){let s=e.parts[0];i.addEventListener(e.listenerEvent,function(r){Ma(r,t,e.target,s.source,s.negate)})}}function a1(i,t,e,s,r,n){n=t.static||n&&(typeof n!="object"||n[t.methodName]);let l={methodName:t.methodName,args:t.args,methodInfo:r,dynamicFn:n};for(let a=0,o;a<t.args.length&&(o=t.args[a]);a++)o.literal||i._addPropertyEffect(o.rootProperty,e,{fn:s,info:l,trigger:o});return n&&i._addPropertyEffect(t.methodName,e,{fn:s,info:l}),l}function Li(i,t,e,s,r){let n=i._methodHost||i,l=n[r.methodName];if(l){let a=i._marshalArgs(r.args,t,e);return a===it?it:l.apply(n,a)}else r.dynamicFn||console.warn("method `"+r.methodName+"` not defined")}var Na=[],o1="(?:[a-zA-Z_$][\\w.:$\\-*]*)",Ra="(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)",Va="(?:'(?:[^'\\\\]|\\\\.)*')",$a='(?:"(?:[^"\\\\]|\\\\.)*")',ja="(?:"+Va+"|"+$a+")",h1="(?:("+o1+"|"+Ra+"|"+ja+")\\s*)",Ga="(?:"+h1+"(?:,\\s*"+h1+")*)",Wa="(?:\\(\\s*(?:"+Ga+"?)\\)\\s*)",Ua="("+o1+"\\s*"+Wa+"?)",qa="(\\[\\[|{{)\\s*",Ya="(?:]]|}})",Ka="(?:(!)\\s*)?",Za=qa+Ka+Ua+Ya,d1=new RegExp(Za,"g");function c1(i){let t="";for(let e=0;e<i.length;e++)t+=i[e].literal||"";return t}function Ni(i){let t=i.match(/([^\s]+?)\(([\s\S]*)\)/);if(t){let s={methodName:t[1],static:!0,args:Na};if(t[2].trim()){let r=t[2].replace(/\\,/g,"&comma;").split(",");return Ja(r,s)}else return s}return null}function Ja(i,t){return t.args=i.map(function(e){let s=l1(e);return s.literal||(t.static=!1),s},this),t}function l1(i){let t=i.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),e={name:t,value:"",literal:!1},s=t[0];switch(s==="-"&&(s=t[1]),s>="0"&&s<="9"&&(s="#"),s){case"'":case'"':e.value=t.slice(1,-1),e.literal=!0;break;case"#":e.value=Number(t),e.literal=!0;break}return e.literal||(e.rootProperty=be(t),e.structured=Pi(t),e.structured&&(e.wildcard=t.slice(-2)==".*",e.wildcard&&(e.name=t.slice(0,-2)))),e}function u1(i,t,e){let s=j(i,e);return s===void 0&&(s=t[e]),s}function p1(i,t,e,s){let r={indexSplices:s};Ci&&!i._overrideLegacyUndefined&&(t.splices=r),i.notifyPath(e+".splices",r),i.notifyPath(e+".length",t.length),Ci&&!i._overrideLegacyUndefined&&(r.indexSplices=[])}function rt(i,t,e,s,r,n){p1(i,t,e,[{index:s,addedCount:r,removed:n,object:t,type:"splice"}])}function Xa(i){return i[0].toUpperCase()+i.substring(1)}var Qa=we(i=>{let t=_a(ha(i));class e extends t{constructor(){super();this.__isPropertyEffectsClient=!0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__computeInfo,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo,this._overrideLegacyUndefined}get PROPERTY_EFFECT_TYPES(){return b}_initializeProperties(){super._initializeProperties(),this._registerHost(),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_registerHost(){if(nt.length){let r=nt[nt.length-1];r._enqueueClient(this),this.__dataHost=r}}_initializeProtoProperties(r){this.__data=Object.create(r),this.__dataPending=Object.create(r),this.__dataOld={}}_initializeInstanceProperties(r){let n=this[b.READ_ONLY];for(let l in r)(!n||!n[l])&&(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[l]=this.__dataPending[l]=r[l])}_addPropertyEffect(r,n,l){this._createPropertyAccessor(r,n==b.READ_ONLY);let a=Ti(this,n,!0)[r];a||(a=this[n][r]=[]),a.push(l)}_removePropertyEffect(r,n,l){let a=Ti(this,n,!0)[r],o=a.indexOf(l);o>=0&&a.splice(o,1)}_hasPropertyEffect(r,n){let l=this[n];return Boolean(l&&l[r])}_hasReadOnlyEffect(r){return this._hasPropertyEffect(r,b.READ_ONLY)}_hasNotifyEffect(r){return this._hasPropertyEffect(r,b.NOTIFY)}_hasReflectEffect(r){return this._hasPropertyEffect(r,b.REFLECT)}_hasComputedEffect(r){return this._hasPropertyEffect(r,b.COMPUTE)}_setPendingPropertyOrPath(r,n,l,a){if(a||be(Array.isArray(r)?r[0]:r)!==r){if(!a){let o=j(this,r);if(r=Ur(this,r,n),!r||!super._shouldPropertyChange(r,n,o))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(r,n,l))return Da(this,r,n),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[r])return this._setPendingProperty(r,n,l);this[r]=n}return!1}_setUnmanagedPropertyToNode(r,n,l){(l!==r[n]||typeof l=="object")&&(n==="className"&&(r=$(r)),r[n]=l)}_setPendingProperty(r,n,l){let a=this.__dataHasPaths&&Pi(r),o=a?this.__dataTemp:this.__data;return this._shouldPropertyChange(r,n,o[r])?(this.__dataPending||(this.__dataPending={},this.__dataOld={}),r in this.__dataOld||(this.__dataOld[r]=this.__data[r]),a?this.__dataTemp[r]=n:this.__data[r]=n,this.__dataPending[r]=n,(a||this[b.NOTIFY]&&this[b.NOTIFY][r])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[r]=l),!0):!1}_setProperty(r,n){this._setPendingProperty(r,n,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(r){this.__dataPendingClients=this.__dataPendingClients||[],r!==this&&this.__dataPendingClients.push(r)}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let r=this.__dataPendingClients;if(r){this.__dataPendingClients=null;for(let n=0;n<r.length;n++){let l=r[n];l.__dataEnabled?l.__dataPending&&l._flushProperties():l._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(r,n){for(let l in r)(n||!this[b.READ_ONLY]||!this[b.READ_ONLY][l])&&this._setPendingPropertyOrPath(l,r[l],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(r,n,l){let a=this.__dataHasPaths;this.__dataHasPaths=!1;let o;Ha(this,n,l,a),o=this.__dataToNotify,this.__dataToNotify=null,this._propagatePropertyChanges(n,l,a),this._flushClients(),st(this,this[b.REFLECT],n,l,a),st(this,this[b.OBSERVE],n,l,a),o&&za(this,o,n,l,a),this.__dataCounter==1&&(this.__dataTemp={})}_propagatePropertyChanges(r,n,l){this[b.PROPAGATE]&&st(this,this[b.PROPAGATE],r,n,l),this.__templateInfo&&this._runEffectsForTemplate(this.__templateInfo,r,n,l)}_runEffectsForTemplate(r,n,l,a){let o=(h,d)=>{st(this,r.propertyEffects,h,l,d,r.nodeList);for(let c=r.firstChild;c;c=c.nextSibling)this._runEffectsForTemplate(c,h,l,d)};r.runEffects?r.runEffects(o,n,a):o(n,a)}linkPaths(r,n){r=Qe(r),n=Qe(n),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[r]=n}unlinkPaths(r){r=Qe(r),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[r]}notifySplices(r,n){let l={path:""},a=j(this,r,l);p1(this,a,l.path,n)}get(r,n){return j(n||this,r)}set(r,n,l){l?Ur(l,r,n):(!this[b.READ_ONLY]||!this[b.READ_ONLY][r])&&this._setPendingPropertyOrPath(r,n,!0)&&this._invalidateProperties()}push(r,...n){let l={path:""},a=j(this,r,l),o=a.length,h=a.push(...n);return n.length&&rt(this,a,l.path,o,n.length,[]),h}pop(r){let n={path:""},l=j(this,r,n),a=Boolean(l.length),o=l.pop();return a&&rt(this,l,n.path,l.length,0,[o]),o}splice(r,n,l,...a){let o={path:""},h=j(this,r,o);n<0?n=h.length-Math.floor(-n):n&&(n=Math.floor(n));let d;return arguments.length===2?d=h.splice(n):d=h.splice(n,l,...a),(a.length||d.length)&&rt(this,h,o.path,n,a.length,d),d}shift(r){let n={path:""},l=j(this,r,n),a=Boolean(l.length),o=l.shift();return a&&rt(this,l,n.path,0,0,[o]),o}unshift(r,...n){let l={path:""},a=j(this,r,l),o=a.unshift(...n);return n.length&&rt(this,a,l.path,0,n.length,[]),o}notifyPath(r,n){let l;if(arguments.length==1){let a={path:""};n=j(this,r,a),l=a.path}else Array.isArray(r)?l=Qe(r):l=r;this._setPendingPropertyOrPath(l,n,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(r,n){this._addPropertyEffect(r,b.READ_ONLY),n&&(this["_set"+Xa(r)]=function(l){this._setProperty(r,l)})}_createPropertyObserver(r,n,l){let a={property:r,method:n,dynamicFn:Boolean(l)};this._addPropertyEffect(r,b.OBSERVE,{fn:i1,info:a,trigger:{name:r}}),l&&this._addPropertyEffect(n,b.OBSERVE,{fn:i1,info:a,trigger:{name:n}})}_createMethodObserver(r,n){let l=Ni(r);if(!l)throw new Error("Malformed observer expression '"+r+"'");a1(this,l,b.OBSERVE,Li,null,n)}_createNotifyingProperty(r){this._addPropertyEffect(r,b.NOTIFY,{fn:xa,info:{eventName:kt(r)+"-changed",property:r}})}_createReflectedProperty(r){let n=this.constructor.attributeNameForProperty(r);n[0]==="-"?console.warn("Property "+r+" cannot be reflected to attribute "+n+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(r,b.REFLECT,{fn:Fa,info:{attrName:n}})}_createComputedProperty(r,n,l){let a=Ni(n);if(!a)throw new Error("Malformed computed expression '"+n+"'");let o=a1(this,a,b.COMPUTE,n1,r,l);Ti(this,t1)[r]=o}_marshalArgs(r,n,l){let a=this.__data,o=[];for(let h=0,d=r.length;h<d;h++){let{name:c,structured:p,wildcard:f,value:v,literal:w}=r[h];if(!w)if(f){let P=Et(c,n),L=u1(a,l,P?n:c);v={path:P?n:c,value:L,base:P?j(a,c):L}}else v=p?u1(a,l,c):a[c];if(Ci&&!this._overrideLegacyUndefined&&v===void 0&&r.length>1)return it;o[h]=v}return o}static addPropertyEffect(r,n,l){this.prototype._addPropertyEffect(r,n,l)}static createPropertyObserver(r,n,l){this.prototype._createPropertyObserver(r,n,l)}static createMethodObserver(r,n){this.prototype._createMethodObserver(r,n)}static createNotifyingProperty(r){this.prototype._createNotifyingProperty(r)}static createReadOnlyProperty(r,n){this.prototype._createReadOnlyProperty(r,n)}static createReflectedProperty(r){this.prototype._createReflectedProperty(r)}static createComputedProperty(r,n,l){this.prototype._createComputedProperty(r,n,l)}static bindTemplate(r){return this.prototype._bindTemplate(r)}_bindTemplate(r,n){let l=this.constructor._parseTemplate(r),a=this.__preBoundTemplateInfo==l;if(!a)for(let o in l.propertyEffects)this._createPropertyAccessor(o);if(n)if(l=Object.create(l),l.wasPreBound=a,!this.__templateInfo)this.__templateInfo=l;else{let o=r._parentTemplateInfo||this.__templateInfo,h=o.lastChild;l.parent=o,o.lastChild=l,l.previousSibling=h,h?h.nextSibling=l:o.firstChild=l}else this.__preBoundTemplateInfo=l;return l}static _addTemplatePropertyEffect(r,n,l){let a=r.hostProps=r.hostProps||{};a[n]=!0;let o=r.propertyEffects=r.propertyEffects||{};(o[n]=o[n]||[]).push(l)}_stampTemplate(r,n){n=n||this._bindTemplate(r,!0),nt.push(this);let l=super._stampTemplate(r,n);if(nt.pop(),n.nodeList=l.nodeList,!n.wasPreBound){let a=n.childNodes=[];for(let o=l.firstChild;o;o=o.nextSibling)a.push(o)}return l.templateInfo=n,Oa(this,n),this.__dataClientsReady&&(this._runEffectsForTemplate(n,this.__data,null,!1),this._flushClients()),l}_removeBoundDom(r){let n=r.templateInfo,{previousSibling:l,nextSibling:a,parent:o}=n;l?l.nextSibling=a:o&&(o.firstChild=a),a?a.previousSibling=l:o&&(o.lastChild=l),n.nextSibling=n.previousSibling=null;let h=n.childNodes;for(let d=0;d<h.length;d++){let c=h[d];$($(c).parentNode).removeChild(c)}}static _parseTemplateNode(r,n,l){let a=t._parseTemplateNode.call(this,r,n,l);if(r.nodeType===Node.TEXT_NODE){let o=this._parseBindings(r.textContent,n);o&&(r.textContent=c1(o)||" ",Oi(this,n,l,"text","textContent",o),a=!0)}return a}static _parseTemplateNodeAttribute(r,n,l,a,o){let h=this._parseBindings(o,n);if(h){let d=a,c="property";wa.test(a)?c="attribute":a[a.length-1]=="$"&&(a=a.slice(0,-1),c="attribute");let p=c1(h);return p&&c=="attribute"&&(a=="class"&&r.hasAttribute("class")&&(p+=" "+r.getAttribute(a)),r.setAttribute(a,p)),c=="attribute"&&d=="disable-upgrade$"&&r.setAttribute(a,""),r.localName==="input"&&d==="value"&&r.setAttribute(d,""),r.removeAttribute(d),c==="property"&&(a=qr(a)),Oi(this,n,l,c,a,h,p),!0}else return t._parseTemplateNodeAttribute.call(this,r,n,l,a,o)}static _parseTemplateNestedTemplate(r,n,l){let a=t._parseTemplateNestedTemplate.call(this,r,n,l),o=r.parentNode,h=l.templateInfo,d=o.localName==="dom-if",c=o.localName==="dom-repeat";Dr&&(d||c)&&(o.removeChild(r),l=l.parentInfo,l.templateInfo=h,l.noted=!0,a=!1);let p=h.hostProps;if(Il&&d)p&&(n.hostProps=Object.assign(n.hostProps||{},p),Dr||(l.parentInfo.noted=!0));else{let f="{";for(let v in p){let w=[{mode:f,source:v,dependencies:[v],hostProp:!0}];Oi(this,n,l,"property","_host_"+v,w)}}return a}static _parseBindings(r,n){let l=[],a=0,o;for(;(o=d1.exec(r))!==null;){o.index>a&&l.push({literal:r.slice(a,o.index)});let h=o[1][0],d=Boolean(o[2]),c=o[3].trim(),p=!1,f="",v=-1;h=="{"&&(v=c.indexOf("::"))>0&&(f=c.substring(v+2),c=c.substring(0,v),p=!0);let w=Ni(c),P=[];if(w){let{args:L,methodName:B}=w;for(let ue=0;ue<L.length;ue++){let Ne=L[ue];Ne.literal||P.push(Ne)}let ee=n.dynamicFns;(ee&&ee[B]||w.static)&&(P.push(B),w.dynamicFn=!0)}else P.push(c);l.push({source:c,mode:h,negate:d,customEvent:p,signature:w,dependencies:P,event:f}),a=d1.lastIndex}if(a&&a<r.length){let h=r.substring(a);h&&l.push({literal:h})}return l.length?l:null}static _evaluateBinding(r,n,l,a,o,h){let d;return n.signature?d=Li(r,l,a,o,n.signature):l!=n.source?d=j(r,n.source):h&&Pi(l)?d=j(r,l):d=r.__data[l],n.negate&&(d=!d),d}}return e}),nt=[];function eo(i){}function to(i){let t={};for(let e in i){let s=i[e];t[e]=typeof s=="function"?{type:s}:s}return t}var io=we(i=>{let t=Zr(i);function e(n){let l=Object.getPrototypeOf(n);return l.prototype instanceof r?l:null}function s(n){if(!n.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",n))){let l=null;if(n.hasOwnProperty(JSCompiler_renameProperty("properties",n))){let a=n.properties;a&&(l=to(a))}n.__ownProperties=l}return n.__ownProperties}class r extends t{static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))){eo(this.prototype);let l=this._properties;this.__observedAttributes=l?Object.keys(l).map(a=>this.prototype._addPropertyToAttributeMap(a)):[]}return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){let l=e(this);l&&l.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){let l=s(this);l&&this.createProperties(l)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){let l=e(this);this.__properties=Object.assign({},l&&l._properties,s(this))}return this.__properties}static typeForProperty(l){let a=this._properties[l];return a&&a.type}_initializeProperties(){this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return r});var so="3.4.1",f1=window.ShadyCSS&&window.ShadyCSS.cssBuild,ro=we(i=>{let t=io(Qa(i));function e(o){if(!o.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",o))){o.__propertyDefaults=null;let h=o._properties;for(let d in h){let c=h[d];"value"in c&&(o.__propertyDefaults=o.__propertyDefaults||{},o.__propertyDefaults[d]=c)}}return o.__propertyDefaults}function s(o){return o.hasOwnProperty(JSCompiler_renameProperty("__ownObservers",o))||(o.__ownObservers=o.hasOwnProperty(JSCompiler_renameProperty("observers",o))?o.observers:null),o.__ownObservers}function r(o,h,d,c){d.computed&&(d.readOnly=!0),d.computed&&(o._hasReadOnlyEffect(h)?console.warn(`Cannot redefine computed property '${h}'.`):o._createComputedProperty(h,d.computed,c)),d.readOnly&&!o._hasReadOnlyEffect(h)?o._createReadOnlyProperty(h,!d.computed):d.readOnly===!1&&o._hasReadOnlyEffect(h)&&console.warn(`Cannot make readOnly property '${h}' non-readOnly.`),d.reflectToAttribute&&!o._hasReflectEffect(h)?o._createReflectedProperty(h):d.reflectToAttribute===!1&&o._hasReflectEffect(h)&&console.warn(`Cannot make reflected property '${h}' non-reflected.`),d.notify&&!o._hasNotifyEffect(h)?o._createNotifyingProperty(h):d.notify===!1&&o._hasNotifyEffect(h)&&console.warn(`Cannot make notify property '${h}' non-notify.`),d.observer&&o._createPropertyObserver(h,d.observer,c[d.observer]),o._addPropertyToAttributeMap(h)}function n(o,h,d,c){if(!f1){let p=h.content.querySelectorAll("style"),f=Di(h),v=jl(d),w=h.content.firstElementChild;for(let L=0;L<v.length;L++){let B=v[L];B.textContent=o._processStyleText(B.textContent,c),h.content.insertBefore(B,w)}let P=0;for(let L=0;L<f.length;L++){let B=f[L],ee=p[P];ee!==B?(B=B.cloneNode(!0),ee.parentNode.insertBefore(B,ee)):P++,B.textContent=o._processStyleText(B.textContent,c)}}if(window.ShadyCSS&&window.ShadyCSS.prepareTemplate(h,d),Ll&&f1&&Cl){let p=h.content.querySelectorAll("style");if(p){let f="";Array.from(p).forEach(v=>{f+=v.textContent,v.parentNode.removeChild(v)}),o._styleSheet=new CSSStyleSheet,o._styleSheet.replaceSync(f)}}}function l(o){let h=null;if(o&&(!Hi||El)&&(h=ve.import(o,"template"),Hi&&!h))throw new Error(`strictTemplatePolicy: expecting dom-module or null template for ${o}`);return h}class a extends t{static get polymerElementVersion(){return so}static _finalizeClass(){t._finalizeClass.call(this);let h=s(this);h&&this.createObservers(h,this._properties),this._prepareTemplate()}static _prepareTemplate(){let h=this.template;h&&(typeof h=="string"?(console.error("template getter must return HTMLTemplateElement"),h=null):Pl||(h=h.cloneNode(!0))),this.prototype._template=h}static createProperties(h){for(let d in h)r(this.prototype,d,h[d],h)}static createObservers(h,d){let c=this.prototype;for(let p=0;p<h.length;p++)c._createMethodObserver(h[p],d)}static get template(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_template",this))){let h=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:void 0;this._template=h!==void 0?h:this.hasOwnProperty(JSCompiler_renameProperty("is",this))&&l(this.is)||Object.getPrototypeOf(this.prototype).constructor.template}return this._template}static set template(h){this._template=h}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){let h=this.importMeta;if(h)this._importPath=Ai(h.url);else{let d=ve.import(this.is);this._importPath=d&&d.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super();this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=Sl,this.importPath=this.constructor.importPath;let h=e(this.constructor);if(!!h)for(let d in h){let c=h[d];if(this._canApplyPropertyDefault(d)){let p=typeof c.value=="function"?c.value.call(this):c.value;this._hasAccessor(d)?this._setPendingProperty(d,p,!0):this[d]=p}}}_canApplyPropertyDefault(h){return!this.hasOwnProperty(h)}static _processStyleText(h,d){return Fi(h,d)}static _finalizeTemplate(h){let d=this.prototype._template;if(d&&!d.__polymerFinalized){d.__polymerFinalized=!0;let c=this.importPath,p=c?Xe(c):"";n(this,d,h,p),this.prototype._bindTemplate(d)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(h){let d=$(this);if(d.attachShadow)return h?(d.shadowRoot||(d.attachShadow({mode:"open",shadyUpgradeFragment:h}),d.shadowRoot.appendChild(h),this.constructor._styleSheet&&(d.shadowRoot.adoptedStyleSheets=[this.constructor._styleSheet])),kl&&window.ShadyDOM&&window.ShadyDOM.flushInitial(d.shadowRoot),d.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(h){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,h)}resolveUrl(h,d){return!d&&this.importPath&&(d=Xe(this.importPath)),Xe(h,d)}static _parseTemplateContent(h,d,c){return d.dynamicFns=d.dynamicFns||this._properties,t._parseTemplateContent.call(this,h,d,c)}static _addTemplatePropertyEffect(h,d,c){return Bl&&!(d in this._properties)&&!(c.info.part.signature&&c.info.part.signature.static)&&!c.info.part.hostProp&&!h.nestedTemplate&&console.warn(`Property '${d}' used in template but not declared in 'properties'; attribute will not be observed.`),t._addTemplatePropertyEffect.call(this,h,d,c)}}return a});var Ri=class{constructor(t){this.value=t.toString()}toString(){return this.value}};function no(i){if(i instanceof Ri)return i.value;throw new Error(`non-literal value passed to Polymer's htmlLiteral function: ${i}`)}function lo(i){if(i instanceof HTMLTemplateElement)return i.innerHTML;if(i instanceof Ri)return no(i);throw new Error(`non-template value passed to Polymer's html function: ${i}`)}var g1=function(t,...e){let s=document.createElement("template");return s.innerHTML=e.reduce((r,n,l)=>r+lo(n)+t[l+1],t[0]),s};var Lt=ro(HTMLElement);var G=class{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(t,e){this._asyncModule=t,this._callback=e,this._timer=this._asyncModule.run(()=>{this._timer=null,Vi.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),Vi.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return this._timer!=null}static debounce(t,e,s){return t instanceof G?t._cancelAsync():t=new G,t.setConfig(e,s),t}},Vi=new Set,ao=function(i){Vi.add(i)};var $i=typeof document.head.style.touchAction=="string",Ot="__polymerGestures",Nt="__polymerGesturesHandled",ji="__polymerGesturesTouchAction",m1=25,v1=5,oo=2,ho=2500,_1=["mousedown","mousemove","mouseup","click"],co=[0,1,4,2],uo=function(){try{return new MouseEvent("test",{buttons:1}).buttons===1}catch(i){return!1}}();function Gi(i){return _1.indexOf(i)>-1}var Wi=!1;(function(){try{let i=Object.defineProperty({},"passive",{get(){Wi=!0}});window.addEventListener("test",null,i),window.removeEventListener("test",null,i)}catch(i){}})();function w1(i){if(!(Gi(i)||i==="touchend")&&$i&&Wi&&Dl)return{passive:!0}}var b1=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/),Ui=[],po={button:!0,input:!0,keygen:!0,meter:!0,output:!0,textarea:!0,progress:!0,select:!0},fo={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function go(i){return po[i.localName]||!1}function mo(i){let t=Array.prototype.slice.call(i.labels||[]);if(!t.length){t=[];let e=i.getRootNode();if(i.id){let s=e.querySelectorAll(`label[for = ${i.id}]`);for(let r=0;r<s.length;r++)t.push(s[r])}}return t}var y1=function(i){let t=i.sourceCapabilities;if(!(t&&!t.firesTouchEvents)&&(i[Nt]={skip:!0},i.type==="click")){let e=!1,s=Rt(i);for(let r=0;r<s.length;r++){if(s[r].nodeType===Node.ELEMENT_NODE){if(s[r].localName==="label")Ui.push(s[r]);else if(go(s[r])){let n=mo(s[r]);for(let l=0;l<n.length;l++)e=e||Ui.indexOf(n[l])>-1}}if(s[r]===O.mouse.target)return}if(e)return;i.preventDefault(),i.stopPropagation()}};function z1(i){let t=b1?["click"]:_1;for(let e=0,s;e<t.length;e++)s=t[e],i?(Ui.length=0,document.addEventListener(s,y1,!0)):document.removeEventListener(s,y1,!0)}function vo(i){O.mouse.mouseIgnoreJob||z1(!0);let t=function(){z1(),O.mouse.target=null,O.mouse.mouseIgnoreJob=null};O.mouse.target=Rt(i)[0],O.mouse.mouseIgnoreJob=G.debounce(O.mouse.mouseIgnoreJob,et.after(ho),t)}function ye(i){let t=i.type;if(!Gi(t))return!1;if(t==="mousemove"){let e=i.buttons===void 0?1:i.buttons;return i instanceof window.MouseEvent&&!uo&&(e=co[i.which]||0),Boolean(e&1)}else return(i.button===void 0?0:i.button)===0}function _o(i){if(i.type==="click"){if(i.detail===0)return!0;let t=le(i);if(!t.nodeType||t.nodeType!==Node.ELEMENT_NODE)return!0;let e=t.getBoundingClientRect(),s=i.pageX,r=i.pageY;return!(s>=e.left&&s<=e.right&&r>=e.top&&r<=e.bottom)}return!1}var O={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function wo(i){let t="auto",e=Rt(i);for(let s=0,r;s<e.length;s++)if(r=e[s],r[ji]){t=r[ji];break}return t}function x1(i,t,e){i.movefn=t,i.upfn=e,document.addEventListener("mousemove",t),document.addEventListener("mouseup",e)}function Be(i){document.removeEventListener("mousemove",i.movefn),document.removeEventListener("mouseup",i.upfn),i.movefn=null,i.upfn=null}document.addEventListener("touchend",vo,Wi?{passive:!0}:!1);var Rt=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:i=>i.composedPath&&i.composedPath()||[],lt={},ze=[];function bo(i,t){let e=document.elementFromPoint(i,t),s=e;for(;s&&s.shadowRoot&&!window.ShadyDOM;){let r=s;if(s=s.shadowRoot.elementFromPoint(i,t),r===s)break;s&&(e=s)}return e}function le(i){let t=Rt(i);return t.length>0?t[0]:i.target}function M1(i){let t,e=i.type,r=i.currentTarget[Ot];if(!r)return;let n=r[e];if(!!n){if(!i[Nt]&&(i[Nt]={},e.slice(0,5)==="touch")){i=i;let l=i.changedTouches[0];if(e==="touchstart"&&i.touches.length===1&&(O.touch.id=l.identifier),O.touch.id!==l.identifier)return;$i||(e==="touchstart"||e==="touchmove")&&yo(i)}if(t=i[Nt],!t.skip){for(let l=0,a;l<ze.length;l++)a=ze[l],n[a.name]&&!t[a.name]&&a.flow&&a.flow.start.indexOf(i.type)>-1&&a.reset&&a.reset();for(let l=0,a;l<ze.length;l++)a=ze[l],n[a.name]&&!t[a.name]&&(t[a.name]=!0,a[e](i))}}}function yo(i){let t=i.changedTouches[0],e=i.type;if(e==="touchstart")O.touch.x=t.clientX,O.touch.y=t.clientY,O.touch.scrollDecided=!1;else if(e==="touchmove"){if(O.touch.scrollDecided)return;O.touch.scrollDecided=!0;let s=wo(i),r=!1,n=Math.abs(O.touch.x-t.clientX),l=Math.abs(O.touch.y-t.clientY);i.cancelable&&(s==="none"?r=!0:s==="pan-x"?r=l>n:s==="pan-y"&&(r=n>l)),r?i.preventDefault():Vt("track")}}function qi(i,t,e){return lt[t]?(zo(i,t,e),!0):!1}function Mo(i,t,e){return lt[t]?(xo(i,t,e),!0):!1}function zo(i,t,e){let s=lt[t],r=s.deps,n=s.name,l=i[Ot];l||(i[Ot]=l={});for(let a=0,o,h;a<r.length;a++)o=r[a],!(b1&&Gi(o)&&o!=="click")&&(h=l[o],h||(l[o]=h={_count:0}),h._count===0&&i.addEventListener(o,M1,w1(o)),h[n]=(h[n]||0)+1,h._count=(h._count||0)+1);i.addEventListener(t,e),s.touchAction&&Fo(i,s.touchAction)}function xo(i,t,e){let s=lt[t],r=s.deps,n=s.name,l=i[Ot];if(l)for(let a=0,o,h;a<r.length;a++)o=r[a],h=l[o],h&&h[n]&&(h[n]=(h[n]||1)-1,h._count=(h._count||1)-1,h._count===0&&i.removeEventListener(o,M1,w1(o)));i.removeEventListener(t,e)}function Yi(i){ze.push(i);for(let t=0;t<i.emits.length;t++)lt[i.emits[t]]=i}function Ao(i){for(let t=0,e;t<ze.length;t++){e=ze[t];for(let s=0,r;s<e.emits.length;s++)if(r=e.emits[s],r===i)return e}return null}function Fo(i,t){$i&&i instanceof HTMLElement&&Tt.run(()=>{i.style.touchAction=t}),i[ji]=t}function Ki(i,t,e){let s=new Event(t,{bubbles:!0,cancelable:!0,composed:!0});if(s.detail=e,$(i).dispatchEvent(s),s.defaultPrevented){let r=e.preventer||e.sourceEvent;r&&r.preventDefault&&r.preventDefault()}}function Vt(i){let t=Ao(i);t.info&&(t.info.prevent=!0)}Yi({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset:function(){Be(this.info)},mousedown:function(i){if(!ye(i))return;let t=le(i),e=this,s=function(l){ye(l)||(at("up",t,l),Be(e.info))},r=function(l){ye(l)&&at("up",t,l),Be(e.info)};x1(this.info,s,r),at("down",t,i)},touchstart:function(i){at("down",le(i),i.changedTouches[0],i)},touchend:function(i){at("up",le(i),i.changedTouches[0],i)}});function at(i,t,e,s){!t||Ki(t,i,{x:e.clientX,y:e.clientY,sourceEvent:e,preventer:s,prevent:function(r){return Vt(r)}})}Yi({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove:function(i){this.moves.length>oo&&this.moves.shift(),this.moves.push(i)},movefn:null,upfn:null,prevent:!1},reset:function(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,Be(this.info)},mousedown:function(i){if(!ye(i))return;let t=le(i),e=this,s=function(l){let a=l.clientX,o=l.clientY;F1(e.info,a,o)&&(e.info.state=e.info.started?l.type==="mouseup"?"end":"track":"start",e.info.state==="start"&&Vt("tap"),e.info.addMove({x:a,y:o}),ye(l)||(e.info.state="end",Be(e.info)),t&&Zi(e.info,t,l),e.info.started=!0)},r=function(l){e.info.started&&s(l),Be(e.info)};x1(this.info,s,r),this.info.x=i.clientX,this.info.y=i.clientY},touchstart:function(i){let t=i.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchmove:function(i){let t=le(i),e=i.changedTouches[0],s=e.clientX,r=e.clientY;F1(this.info,s,r)&&(this.info.state==="start"&&Vt("tap"),this.info.addMove({x:s,y:r}),Zi(this.info,t,e),this.info.state="track",this.info.started=!0)},touchend:function(i){let t=le(i),e=i.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:e.clientX,y:e.clientY}),Zi(this.info,t,e))}});function F1(i,t,e){if(i.prevent)return!1;if(i.started)return!0;let s=Math.abs(i.x-t),r=Math.abs(i.y-e);return s>=v1||r>=v1}function Zi(i,t,e){if(!t)return;let s=i.moves[i.moves.length-2],r=i.moves[i.moves.length-1],n=r.x-i.x,l=r.y-i.y,a,o=0;s&&(a=r.x-s.x,o=r.y-s.y),Ki(t,"track",{state:i.state,x:e.clientX,y:e.clientY,dx:n,dy:l,ddx:a,ddy:o,sourceEvent:e,hover:function(){return bo(e.clientX,e.clientY)}})}Yi({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset:function(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown:function(i){ye(i)&&(this.info.x=i.clientX,this.info.y=i.clientY)},click:function(i){ye(i)&&A1(this.info,i)},touchstart:function(i){let t=i.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchend:function(i){A1(this.info,i.changedTouches[0],i)}});function A1(i,t,e){let s=Math.abs(t.clientX-i.x),r=Math.abs(t.clientY-i.y),n=le(e||t);!n||fo[n.localName]&&n.hasAttribute("disabled")||(isNaN(s)||isNaN(r)||s<=m1&&r<=m1||_o(t))&&(i.prevent||Ki(n,"tap",{x:t.clientX,y:t.clientY,sourceEvent:t,preventer:e}))}var Ji=we(i=>{class t extends i{_addEventListenerToNode(s,r,n){qi(s,r,n)||super._addEventListenerToNode(s,r,n)}_removeEventListenerFromNode(s,r,n){Mo(s,r,n)||super._removeEventListenerFromNode(s,r,n)}}return t}),Ho=i=>class extends i{static get properties(){return{theme:{type:String,readOnly:!0}}}attributeChangedCallback(e,s,r){super.attributeChangedCallback(e,s,r),e==="theme"&&this._setTheme(r)}},H1=i=>class extends Ho(i){static finalize(){super.finalize();let e=this.prototype._template,s=Object.getPrototypeOf(this.prototype)._template;s&&Array.from(s.content.querySelectorAll("style[include]")).forEach(r=>{this._includeStyle(r.getAttribute("include"),e)}),this._includeMatchingThemes(e)}static _includeMatchingThemes(e){let r=ve.prototype.modules,n=!1,l=this.is+"-default-theme";Object.keys(r).sort((a,o)=>{let h=a.indexOf("vaadin-")===0,d=o.indexOf("vaadin-")===0,c=["lumo-","material-"],p=c.filter(v=>a.indexOf(v)===0).length>0,f=c.filter(v=>o.indexOf(v)===0).length>0;return h!==d?h?-1:1:p!==f?p?-1:1:0}).forEach(a=>{if(a!==l){let o=r[a].getAttribute("theme-for");o&&o.split(" ").forEach(h=>{new RegExp("^"+h.split("*").join(".*")+"$").test(this.is)&&(n=!0,this._includeStyle(a,e))})}}),!n&&r[l]&&this._includeStyle(l,e)}static _includeStyle(e,s){if(s&&!s.content.querySelector(`style[include="${e}"]`)){let r=document.createElement("style");r.setAttribute("include",e),s.content.appendChild(r)}}};var Xi=!1;window.addEventListener("keydown",()=>{Xi=!0},{capture:!0});window.addEventListener("mousedown",()=>{Xi=!1},{capture:!0});var Co=i=>class extends i{static get properties(){return{tabindex:{type:Number,value:0,reflectToAttribute:!0,observer:"_tabindexChanged"}}}},So=i=>class extends Co(i){static get properties(){return{autofocus:{type:Boolean},_previousTabIndex:{type:Number},disabled:{type:Boolean,observer:"_disabledChanged",reflectToAttribute:!0},_isShiftTabbing:{type:Boolean}}}ready(){this.addEventListener("focusin",e=>{e.composedPath()[0]===this?this.contains(e.relatedTarget)||this._focus():e.composedPath().indexOf(this.focusElement)!==-1&&!this.disabled&&this._setFocused(!0)}),this.addEventListener("focusout",()=>this._setFocused(!1)),super.ready(),this.addEventListener("keydown",e=>{!e.defaultPrevented&&e.keyCode===9&&e.shiftKey&&(this._isShiftTabbing=!0,HTMLElement.prototype.focus.apply(this),this._setFocused(!1),setTimeout(()=>this._isShiftTabbing=!1,0))}),this.autofocus&&!this.disabled&&window.requestAnimationFrame(()=>{this._focus(),this._setFocused(!0),this.setAttribute("focus-ring","")})}disconnectedCallback(){super.disconnectedCallback(),this.hasAttribute("focused")&&this._setFocused(!1)}_setFocused(e){e?this.setAttribute("focused",""):this.removeAttribute("focused"),e&&Xi?this.setAttribute("focus-ring",""):this.removeAttribute("focus-ring")}get focusElement(){return window.console.warn(`Please implement the 'focusElement' property in <${this.localName}>`),this}_focus(){!this.focusElement||this._isShiftTabbing||(this.focusElement.focus(),this._setFocused(!0))}focus(){!this.focusElement||this.disabled||(this.focusElement.focus(),this._setFocused(!0))}blur(){!this.focusElement||(this.focusElement.blur(),this._setFocused(!1))}_disabledChanged(e){this.focusElement.disabled=e,e?(this.blur(),this._previousTabIndex=this.tabindex,this.tabindex=-1,this.setAttribute("aria-disabled","true")):(typeof this._previousTabIndex!="undefined"&&(this.tabindex=this._previousTabIndex),this.removeAttribute("aria-disabled"))}_tabindexChanged(e){e!==void 0&&(this.focusElement.tabIndex=e),this.disabled&&this.tabindex&&(this.tabindex!==-1&&(this._previousTabIndex=this.tabindex),this.tabindex=e=void 0)}click(){this.disabled||super.click()}},Do=/\/\*\*\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,$t=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function Eo(){function i(){return!0}return C1(i)}function To(){try{return Po()?!0:Bo()?$t?!ko():!Eo():!1}catch(i){return!1}}function Po(){return localStorage.getItem("vaadin.developmentmode.force")}function Bo(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function ko(){return!!($t&&Object.keys($t).map(t=>$t[t]).filter(t=>t.productionMode).length>0)}function C1(i,t){if(typeof i!="function")return;let e=Do.exec(i.toString());if(e)try{i=new Function(e[1])}catch(s){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",s)}return i(t)}window.Vaadin=window.Vaadin||{};var S1=function(i,t){if(window.Vaadin.developmentMode)return C1(i,t)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=To());function Io(){}var Lo=function(){if(typeof S1=="function")return S1(Io)};var jt=class{static detectScrollType(){let t=document.createElement("div");t.textContent="ABCD",t.dir="rtl",t.style.fontSize="14px",t.style.width="4px",t.style.height="1px",t.style.position="absolute",t.style.top="-1000px",t.style.overflow="scroll",document.body.appendChild(t);let e="reverse";return t.scrollLeft>0?e="default":(t.scrollLeft=2,t.scrollLeft<2&&(e="negative")),document.body.removeChild(t),e}static getNormalizedScrollLeft(t,e,s){let{scrollLeft:r}=s;if(e!=="rtl"||!t)return r;switch(t){case"negative":return s.scrollWidth-s.clientWidth+r;case"reverse":return s.scrollWidth-s.clientWidth-r}return r}static setNormalizedScrollLeft(t,e,s,r){if(e!=="rtl"||!t){s.scrollLeft=r;return}switch(t){case"negative":s.scrollLeft=s.clientWidth-s.scrollWidth+r;break;case"reverse":s.scrollLeft=s.scrollWidth-s.clientWidth-r;break;default:s.scrollLeft=r;break}}};var ae=[],Oo=function(){let i=es();ae.forEach(t=>{Qi(t,i)})},Gt,No=new MutationObserver(Oo);No.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]});var Qi=function(i,t,e=i.getAttribute("dir")){t?i.setAttribute("dir",t):e!=null&&i.removeAttribute("dir")},es=function(){return document.documentElement.getAttribute("dir")},D1=i=>class extends i{static get properties(){return{dir:{type:String,value:"",reflectToAttribute:!0}}}static finalize(){super.finalize(),Gt||(Gt=jt.detectScrollType())}connectedCallback(){super.connectedCallback(),this.hasAttribute("dir")||(this.__subscribe(),Qi(this,es(),null))}attributeChangedCallback(e,s,r){if(super.attributeChangedCallback(e,s,r),e!=="dir")return;let n=es(),l=r===n&&ae.indexOf(this)===-1,a=!r&&s&&ae.indexOf(this)===-1;l||a?(this.__subscribe(),Qi(this,n,r)):r!==n&&s===n&&this.__subscribe(!1)}disconnectedCallback(){super.disconnectedCallback(),this.__subscribe(!1),this.removeAttribute("dir")}_valueToNodeAttribute(e,s,r){r==="dir"&&s===""&&!e.hasAttribute("dir")||super._valueToNodeAttribute(e,s,r)}_attributeToProperty(e,s,r){e==="dir"&&!s?this.dir="":super._attributeToProperty(e,s,r)}__subscribe(e=!0){e?ae.indexOf(this)===-1&&ae.push(this):ae.indexOf(this)>-1&&ae.splice(ae.indexOf(this),1)}__getNormalizedScrollLeft(e){return jt.getNormalizedScrollLeft(Gt,this.getAttribute("dir")||"ltr",e)}__setNormalizedScrollLeft(e,s){return jt.setNormalizedScrollLeft(Gt,this.getAttribute("dir")||"ltr",e,s)}};window.Vaadin=window.Vaadin||{};window.Vaadin.registrations=window.Vaadin.registrations||[];window.Vaadin.developmentModeCallback=window.Vaadin.developmentModeCallback||{};window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]=function(){Lo()};var ts,E1=new Set,P1=i=>class extends D1(i){static finalize(){super.finalize();let{is:e}=this;e&&!E1.has(e)&&(window.Vaadin.registrations.push(this),E1.add(e),window.Vaadin.developmentModeCallback&&(ts=G.debounce(ts,la,()=>{window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]()}),ao(ts)))}constructor(){super();document.doctype===null&&console.warn('Vaadin components require the "standards mode" declaration. Please add <!DOCTYPE html> to the HTML document.')}};var is=class extends P1(So(H1(Ji(Lt)))){static get template(){return g1`
      <style>
        :host {
          display: inline-block;
        }

        :host([hidden]) {
          display: none !important;
        }

        label {
          display: inline-flex;
          align-items: baseline;
          outline: none;
        }

        [part='checkbox'] {
          position: relative;
          display: inline-block;
          flex: none;
        }

        input[type='checkbox'] {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          cursor: inherit;
          margin: 0;
        }

        :host([disabled]) {
          -webkit-tap-highlight-color: transparent;
        }
      </style>

      <label>
        <span part="checkbox">
          <input
            type="checkbox"
            checked="{{checked::change}}"
            disabled$="[[disabled]]"
            indeterminate="{{indeterminate::change}}"
            role="presentation"
            tabindex="-1"
          />
        </span>

        <span part="label">
          <slot></slot>
        </span>
      </label>
    `}static get is(){return"vaadin-checkbox"}static get version(){return"21.0.0"}static get properties(){return{checked:{type:Boolean,value:!1,notify:!0,observer:"_checkedChanged",reflectToAttribute:!0},indeterminate:{type:Boolean,notify:!0,observer:"_indeterminateChanged",reflectToAttribute:!0,value:!1},value:{type:String,value:"on"},_nativeCheckbox:{type:Object}}}constructor(){super();this.name}get name(){return this.checked?this._storedName:""}set name(t){this._storedName=t}ready(){super.ready(),this.setAttribute("role","checkbox"),this._nativeCheckbox=this.shadowRoot.querySelector('input[type="checkbox"]'),this.addEventListener("click",this._handleClick.bind(this)),this._addActiveListeners();let t=this.getAttribute("name");t&&(this.name=t),this.shadowRoot.querySelector('[part~="label"]').querySelector("slot").addEventListener("slotchange",this._updateLabelAttribute.bind(this)),this._updateLabelAttribute()}_updateLabelAttribute(){let t=this.shadowRoot.querySelector('[part~="label"]'),e=t.firstElementChild.assignedNodes();this._isAssignedNodesEmpty(e)?t.setAttribute("empty",""):t.removeAttribute("empty")}_isAssignedNodesEmpty(t){return t.length===0||t.length==1&&t[0].nodeType==Node.TEXT_NODE&&t[0].textContent.trim()===""}_checkedChanged(t){this.indeterminate?this.setAttribute("aria-checked","mixed"):this.setAttribute("aria-checked",Boolean(t))}_indeterminateChanged(t){t?this.setAttribute("aria-checked","mixed"):this.setAttribute("aria-checked",this.checked)}_addActiveListeners(){this._addEventListenerToNode(this,"down",t=>{this.__interactionsAllowed(t)&&this.setAttribute("active","")}),this._addEventListenerToNode(this,"up",()=>this.removeAttribute("active")),this.addEventListener("keydown",t=>{this.__interactionsAllowed(t)&&t.keyCode===32&&(t.preventDefault(),this.setAttribute("active",""))}),this.addEventListener("keyup",t=>{this.__interactionsAllowed(t)&&t.keyCode===32&&(t.preventDefault(),this._toggleChecked(),this.removeAttribute("active"),this.indeterminate&&(this.indeterminate=!1))})}get focusElement(){return this.shadowRoot.querySelector("input")}__interactionsAllowed(t){return!(this.disabled||t.target.localName==="a")}_handleClick(t){this.__interactionsAllowed(t)&&(this.indeterminate?(this.indeterminate=!1,t.preventDefault(),this._toggleChecked()):t.composedPath()[0]!==this._nativeCheckbox&&(t.preventDefault(),this._toggleChecked()))}_toggleChecked(){this.checked=!this.checked,this.dispatchEvent(new CustomEvent("change",{composed:!1,bubbles:!0}))}};customElements.define(is.is,is);_e("vaadin-grid",z`
    :host {
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-m);
      line-height: var(--lumo-line-height-s);
      color: var(--lumo-body-text-color);
      background-color: var(--lumo-base-color);
      box-sizing: border-box;
      -webkit-text-size-adjust: 100%;
      -webkit-tap-highlight-color: transparent;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;

      /* For internal use only */
      --_lumo-grid-border-color: var(--lumo-contrast-20pct);
      --_lumo-grid-secondary-border-color: var(--lumo-contrast-10pct);
      --_lumo-grid-border-width: 1px;
      --_lumo-grid-selected-row-color: var(--lumo-primary-color-10pct);
    }

    /* No (outer) border */

    :host(:not([theme~='no-border'])) {
      border: var(--_lumo-grid-border-width) solid var(--_lumo-grid-border-color);
    }

    /* Cell styles */

    [part~='cell'] {
      min-height: var(--lumo-size-m);
      background-color: var(--lumo-base-color);
    }

    [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      cursor: default;
      padding: var(--lumo-space-xs) var(--lumo-space-m);
    }

    /* Apply row borders by default and introduce the "no-row-borders" variant */
    :host(:not([theme~='no-row-borders'])) [part~='cell']:not([part~='details-cell']) {
      border-top: var(--_lumo-grid-border-width) solid var(--_lumo-grid-secondary-border-color);
    }

    /* Hide first body row top border */
    :host(:not([theme~='no-row-borders'])) [part='row'][first] [part~='cell']:not([part~='details-cell']) {
      border-top: 0;
      min-height: calc(var(--lumo-size-m) - var(--_lumo-grid-border-width));
    }

    /* Focus-ring */

    [part~='cell']:focus {
      outline: none;
    }

    :host([navigating]) [part~='cell']:focus::before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      pointer-events: none;
      box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
    }

    /* Drag and Drop styles */
    :host([dragover])::after {
      content: '';
      position: absolute;
      z-index: 100;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      pointer-events: none;
      box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
    }

    [part~='row'][dragover] {
      z-index: 100 !important;
    }

    [part~='row'][dragover] [part~='cell'] {
      overflow: visible;
    }

    [part~='row'][dragover] [part~='cell']::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      height: calc(var(--_lumo-grid-border-width) + 2px);
      pointer-events: none;
      background: var(--lumo-primary-color-50pct);
    }

    :host([theme~='no-row-borders']) [dragover] [part~='cell']::after {
      height: 2px;
    }

    [part~='row'][dragover='below'] [part~='cell']::after {
      top: 100%;
      bottom: auto;
      margin-top: -1px;
    }

    [part~='row'][dragover='above'] [part~='cell']::after {
      top: auto;
      bottom: 100%;
      margin-bottom: -1px;
    }

    [part~='row'][details-opened][dragover='below'] [part~='cell']:not([part~='details-cell'])::after,
    [part~='row'][details-opened][dragover='above'] [part~='details-cell']::after {
      display: none;
    }

    [part~='row'][dragover][dragover='on-top'] [part~='cell']::after {
      height: 100%;
    }

    [part~='row'][dragstart] {
      /* Add bottom-space to the row so the drag number doesn't get clipped. Needed for IE/Edge */
      border-bottom: 100px solid transparent;
      z-index: 100 !important;
      opacity: 0.9;
    }

    [part~='row'][dragstart] [part~='cell'] {
      border: none !important;
      box-shadow: none !important;
    }

    [part~='row'][dragstart] [part~='cell'][last-column] {
      border-radius: 0 var(--lumo-border-radius-s) var(--lumo-border-radius-s) 0;
    }

    [part~='row'][dragstart] [part~='cell'][first-column] {
      border-radius: var(--lumo-border-radius-s) 0 0 var(--lumo-border-radius-s);
    }

    [ios] [part~='row'][dragstart] [part~='cell'] {
      background: var(--lumo-primary-color-50pct);
    }

    #scroller:not([ios]) [part~='row'][dragstart]:not([dragstart=''])::after {
      display: block;
      position: absolute;
      left: var(--_grid-drag-start-x);
      top: var(--_grid-drag-start-y);
      z-index: 100;
      content: attr(dragstart);
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      padding: calc(var(--lumo-space-xs) * 0.8);
      color: var(--lumo-error-contrast-color);
      background-color: var(--lumo-error-color);
      border-radius: var(--lumo-border-radius-m);
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-xxs);
      line-height: 1;
      font-weight: 500;
      text-transform: initial;
      letter-spacing: initial;
      min-width: calc(var(--lumo-size-s) * 0.7);
      text-align: center;
    }

    /* Headers and footers */

    [part~='header-cell'] ::slotted(vaadin-grid-cell-content),
    [part~='footer-cell'] ::slotted(vaadin-grid-cell-content),
    [part~='reorder-ghost'] {
      font-size: var(--lumo-font-size-s);
      font-weight: 500;
    }

    [part~='footer-cell'] ::slotted(vaadin-grid-cell-content) {
      font-weight: 400;
    }

    [part='row']:only-child [part~='header-cell'] {
      min-height: var(--lumo-size-xl);
    }

    /* Header borders */

    /* Hide first header row top border */
    :host(:not([theme~='no-row-borders'])) [part='row']:first-child [part~='header-cell'] {
      border-top: 0;
    }

    [part='row']:last-child [part~='header-cell'] {
      border-bottom: var(--_lumo-grid-border-width) solid transparent;
    }

    :host(:not([theme~='no-row-borders'])) [part='row']:last-child [part~='header-cell'] {
      border-bottom-color: var(--_lumo-grid-secondary-border-color);
    }

    /* Overflow uses a stronger border color */
    :host([overflow~='top']) [part='row']:last-child [part~='header-cell'] {
      border-bottom-color: var(--_lumo-grid-border-color);
    }

    /* Footer borders */

    [part='row']:first-child [part~='footer-cell'] {
      border-top: var(--_lumo-grid-border-width) solid transparent;
    }

    :host(:not([theme~='no-row-borders'])) [part='row']:first-child [part~='footer-cell'] {
      border-top-color: var(--_lumo-grid-secondary-border-color);
    }

    /* Overflow uses a stronger border color */
    :host([overflow~='bottom']) [part='row']:first-child [part~='footer-cell'] {
      border-top-color: var(--_lumo-grid-border-color);
    }

    /* Column reordering */

    :host([reordering]) [part~='cell'] {
      background: linear-gradient(var(--lumo-shade-20pct), var(--lumo-shade-20pct)) var(--lumo-base-color);
    }

    :host([reordering]) [part~='cell'][reorder-status='allowed'] {
      background: var(--lumo-base-color);
    }

    :host([reordering]) [part~='cell'][reorder-status='dragging'] {
      background: linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct)) var(--lumo-base-color);
    }

    [part~='reorder-ghost'] {
      opacity: 0.85;
      box-shadow: var(--lumo-box-shadow-s);
      /* TODO Use the same styles as for the cell element (reorder-ghost copies styles from the cell element) */
      padding: var(--lumo-space-s) var(--lumo-space-m) !important;
    }

    /* Column resizing */

    [part='resize-handle'] {
      width: 3px;
      background-color: var(--lumo-primary-color-50pct);
      opacity: 0;
      transition: opacity 0.2s;
    }

    :host(:not([reordering])) *:not([column-resizing]) [part~='cell']:hover [part='resize-handle'],
    [part='resize-handle']:active {
      opacity: 1;
      transition-delay: 0.15s;
    }

    /* Column borders */

    :host([theme~='column-borders']) [part~='cell']:not([last-column]):not([part~='details-cell']) {
      border-right: var(--_lumo-grid-border-width) solid var(--_lumo-grid-secondary-border-color);
    }

    /* Frozen columns */

    [last-frozen] {
      border-right: var(--_lumo-grid-border-width) solid transparent;
      overflow: hidden;
    }

    :host([overflow~='left']) [part~='cell'][last-frozen]:not([part~='details-cell']) {
      border-right-color: var(--_lumo-grid-border-color);
    }

    /* Row stripes */

    :host([theme~='row-stripes']) [part~='row']:not([odd]) [part~='body-cell'],
    :host([theme~='row-stripes']) [part~='row']:not([odd]) [part~='details-cell'] {
      background-image: linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct));
      background-repeat: repeat-x;
    }

    /* Selected row */

    /* Raise the selected rows above unselected rows (so that box-shadow can cover unselected rows) */
    :host(:not([reordering])) [part~='row'][selected] {
      z-index: 1;
    }

    :host(:not([reordering])) [part~='row'][selected] [part~='body-cell']:not([part~='details-cell']) {
      background-image: linear-gradient(var(--_lumo-grid-selected-row-color), var(--_lumo-grid-selected-row-color));
      background-repeat: repeat;
    }

    /* Cover the border of an unselected row */
    :host(:not([theme~='no-row-borders'])) [part~='row'][selected] [part~='cell']:not([part~='details-cell']) {
      box-shadow: 0 var(--_lumo-grid-border-width) 0 0 var(--_lumo-grid-selected-row-color);
    }

    /* Compact */

    :host([theme~='compact']) [part='row']:only-child [part~='header-cell'] {
      min-height: var(--lumo-size-m);
    }

    :host([theme~='compact']) [part~='cell'] {
      min-height: var(--lumo-size-s);
    }

    :host([theme~='compact']) [part='row'][first] [part~='cell']:not([part~='details-cell']) {
      min-height: calc(var(--lumo-size-s) - var(--_lumo-grid-border-width));
    }

    :host([theme~='compact']) [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      padding: var(--lumo-space-xs) var(--lumo-space-s);
    }

    /* Wrap cell contents */

    :host([theme~='wrap-cell-content']) [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      white-space: normal;
    }

    /* RTL specific styles */

    :host([dir='rtl']) [part~='row'][dragstart] [part~='cell'][last-column] {
      border-radius: var(--lumo-border-radius-s) 0 0 var(--lumo-border-radius-s);
    }

    :host([dir='rtl']) [part~='row'][dragstart] [part~='cell'][first-column] {
      border-radius: 0 var(--lumo-border-radius-s) var(--lumo-border-radius-s) 0;
    }

    :host([dir='rtl'][theme~='column-borders']) [part~='cell']:not([last-column]):not([part~='details-cell']) {
      border-right: none;
      border-left: var(--_lumo-grid-border-width) solid var(--_lumo-grid-secondary-border-color);
    }

    :host([dir='rtl']) [last-frozen] {
      border-right: none;
      border-left: var(--_lumo-grid-border-width) solid transparent;
    }

    :host([dir='rtl'][overflow~='right']) [part~='cell'][last-frozen]:not([part~='details-cell']) {
      border-left-color: var(--_lumo-grid-border-color);
    }
  `,{moduleId:"lumo-grid"});_e("vaadin-checkbox",z`
    :host(.vaadin-grid-select-all-checkbox) {
      font-size: var(--lumo-font-size-m);
    }
  `,{moduleId:"vaadin-grid-select-all-checkbox-lumo"});var ss=!1,B1=[],Ro=[];function jo(){ss=!0,requestAnimationFrame(function(){ss=!1,Vo(B1),setTimeout(function(){$o(Ro)})})}function Vo(i){for(;i.length;)k1(i.shift())}function $o(i){for(let t=0,e=i.length;t<e;t++)k1(i.shift())}function k1(i){let t=i[0],e=i[1],s=i[2];try{e.apply(t,s)}catch(r){setTimeout(()=>{throw r})}}function Go(i,t,e){ss||jo(),B1.push([i,t,e])}function T1(i){if(window.Vaadin&&window.Vaadin.templateRendererCallback){window.Vaadin.templateRendererCallback(i);return}i.querySelector("template")&&console.warn(`WARNING: <template> inside <${i.localName}> is no longer supported. Import @vaadin/vaadin-template-renderer to enable compatibility (see https://vaad.in/template-renderer)`)}var Wo=i=>class extends i{static get observers(){return["_a11yUpdateGridSize(size, _columnTree, _columnTree.*)"]}_a11yGetHeaderRowCount(e){return e.filter(s=>s.some(r=>r.headerRenderer||r.path||r.header)).length}_a11yGetFooterRowCount(e){return e.filter(s=>s.some(r=>r.headerRenderer)).length}_a11yUpdateGridSize(e,s){if(e===void 0||s===void 0)return;let r=s[s.length-1];this.$.table.setAttribute("aria-rowcount",e+this._a11yGetHeaderRowCount(s)+this._a11yGetFooterRowCount(s)),this.$.table.setAttribute("aria-colcount",r&&r.length||0),this._a11yUpdateHeaderRows(),this._a11yUpdateFooterRows()}_a11yUpdateHeaderRows(){Array.from(this.$.header.children).forEach((e,s)=>e.setAttribute("aria-rowindex",s+1))}_a11yUpdateFooterRows(){Array.from(this.$.footer.children).forEach((e,s)=>e.setAttribute("aria-rowindex",this._a11yGetHeaderRowCount(this._columnTree)+this.size+s+1))}_a11yUpdateRowRowindex(e,s){e.setAttribute("aria-rowindex",s+this._a11yGetHeaderRowCount(this._columnTree)+1)}_a11yUpdateRowSelected(e,s){e.setAttribute("aria-selected",Boolean(s)),Array.from(e.children).forEach(r=>r.setAttribute("aria-selected",Boolean(s)))}_a11yUpdateRowLevel(e,s){e.setAttribute("aria-level",s+1)}_a11yUpdateRowDetailsOpened(e,s){let r=e.querySelector("[part~=details-cell]");Array.from(e.children).forEach(n=>{r?n.setAttribute("aria-expanded",s):n.removeAttribute("aria-expanded")})}_a11ySetRowDetailsCell(e,s){Array.from(e.children).forEach(r=>{r!==s&&r.setAttribute("aria-controls",s.id)})}_a11yUpdateCellColspan(e,s){e.setAttribute("aria-colspan",Number(s))}_a11yUpdateSorters(){Array.from(this.querySelectorAll("vaadin-grid-sorter")).forEach(e=>{let s=e.parentNode;for(;s&&s.localName!=="vaadin-grid-cell-content";)s=s.parentNode;s&&s.assignedSlot&&s.assignedSlot.parentNode.setAttribute("aria-sort",{asc:"ascending",desc:"descending"}[String(e.direction)]||"none")})}};var qo=i=>class extends i{static get properties(){return{activeItem:{type:Object,notify:!0,value:null}}}ready(){super.ready(),this.$.scroller.addEventListener("click",this._onClick.bind(this)),this.addEventListener("cell-activate",this._activateItem.bind(this))}_activateItem(e){let s=e.detail.model,r=s?s.item:null;r&&(this.activeItem=this._itemsEqual(this.activeItem,r)?null:r)}_onClick(e){if(e.defaultPrevented)return;let s=e.composedPath(),r=s[s.indexOf(this.$.table)-3];if(!r||r.getAttribute("part").indexOf("details-cell")>-1)return;let n=r._content,l=this.getRootNode().activeElement;!n.contains(l)&&!this._isFocusable(e.target)&&this.dispatchEvent(new CustomEvent("cell-activate",{detail:{model:this.__getRowModel(r.parentElement)}}))}_isFocusable(e){return Uo(e)}},Uo=i=>{if(!i.parentNode)return!1;let e=Array.from(i.parentNode.querySelectorAll("[tabindex], button, input, select, textarea, object, iframe, label, a[href], area[href]")).filter(s=>s.getAttribute("part")!=="cell body-cell").indexOf(i)!==-1;return!i.disabled&&e};function ke(i,t){return i.split(".").reduce((e,s)=>e[s],t)}function I1(i,t,e){if(e.length===0)return!1;let s=!0;for(let r in i){let n=i[r].path;if(!n||n.indexOf(".")===-1)continue;let l=n.replace(/\.[^.]*$/,"");ke(l,e[0])===void 0&&(console.warn(`Path "${n}" used for ${t} does not exist in all of the items, ${t} is disabled.`),s=!1)}return s}function Yo(i,t){return i.sort((e,s)=>t.map(r=>r.direction==="asc"?L1(ke(r.path,e),ke(r.path,s)):r.direction==="desc"?L1(ke(r.path,s),ke(r.path,e)):0).reduce((r,n)=>r!==0?r:n,0))}function Wt(i){return[void 0,null].indexOf(i)>=0?"":isNaN(i)?i.toString():i}function L1(i,t){return i=Wt(i),t=Wt(t),i<t?-1:i>t?1:0}function Ko(i,t){return i.filter(e=>t.every(s=>{let r=Wt(ke(s.path,e)),n=Wt(s.value).toString().toLowerCase();return r.toString().toLowerCase().includes(n)}))}var Zo=i=>(t,e)=>{let s=i?[...i]:[];t.filters&&I1(t.filters,"filtering",s)&&(s=Ko(s,t.filters)),Array.isArray(t.sortOrders)&&t.sortOrders.length&&I1(t.sortOrders,"sorting",s)&&(s=Yo(s,t.sortOrders));let r=Math.min(s.length,t.pageSize),n=t.page*r,l=n+r,a=s.slice(n,l);e(a,s.length)};var Jo=i=>class extends i{static get properties(){return{items:Array}}static get observers(){return["__dataProviderOrItemsChanged(dataProvider, items, isAttached, items.*, _filters, _sorters)"]}__setArrayDataProvider(e){let s=Zo(this.items);s.__items=e,this.setProperties({_arrayDataProvider:s,size:e.length,dataProvider:s})}__dataProviderOrItemsChanged(e,s,r){!r||(this._arrayDataProvider?e!==this._arrayDataProvider?this.setProperties({_arrayDataProvider:void 0,items:void 0}):s?this._arrayDataProvider.__items===s?(this.clearCache(),this.size=this._effectiveSize):this.__setArrayDataProvider(s):(this.setProperties({_arrayDataProvider:void 0,dataProvider:void 0,size:0}),this.clearCache()):s&&this.__setArrayDataProvider(s))}};var Xo=i=>class extends Ji(i){ready(){super.ready();let e=this.$.scroller;qi(e,"track",this._onHeaderTrack.bind(this)),e.addEventListener("touchmove",s=>e.hasAttribute("column-resizing")&&s.preventDefault()),e.addEventListener("contextmenu",s=>s.target.getAttribute("part")=="resize-handle"&&s.preventDefault()),e.addEventListener("mousedown",s=>s.target.getAttribute("part")==="resize-handle"&&s.preventDefault())}_onHeaderTrack(e){let s=e.target;if(s.getAttribute("part")==="resize-handle"){let n=s.parentElement._column;for(this._toggleAttribute("column-resizing",!0,this.$.scroller);n.localName==="vaadin-grid-column-group";)n=Array.prototype.slice.call(n._childColumns,0).sort(function(o,h){return o._order-h._order}).filter(function(o){return!o.hidden}).pop();let l=Array.from(this.$.header.querySelectorAll('[part~="row"]:last-child [part~="cell"]')),a=l.filter(o=>o._column===n)[0];if(a.offsetWidth){let o=window.getComputedStyle(a),h=10+parseInt(o.paddingLeft)+parseInt(o.paddingRight)+parseInt(o.borderLeftWidth)+parseInt(o.borderRightWidth)+parseInt(o.marginLeft)+parseInt(o.marginRight),d=a.offsetWidth+(this.__isRTL?a.getBoundingClientRect().left-e.detail.x:e.detail.x-a.getBoundingClientRect().right);n.width=Math.max(h,d)+"px",n.flexGrow=0}l.sort(function(o,h){return o._column._order-h._column._order}).forEach(function(o,h,d){h<d.indexOf(a)&&(o._column.width=o.offsetWidth+"px",o._column.flexGrow=0)}),e.detail.state==="end"&&(this._toggleAttribute("column-resizing",!1,this.$.scroller),this.dispatchEvent(new CustomEvent("column-resize",{detail:{resizedColumn:n}}))),this._resizeHandler()}}};var N1=class O1{constructor(t,e,s){this.grid=t,this.parentCache=e,this.parentItem=s,this.itemCaches={},this.items={},this.effectiveSize=0,this.size=0,this.pendingRequests={}}isLoading(){return Boolean(Object.keys(this.pendingRequests).length||Object.keys(this.itemCaches).filter(t=>this.itemCaches[t].isLoading())[0])}getItemForIndex(t){let{cache:e,scaledIndex:s}=this.getCacheAndIndex(t);return e.items[s]}updateSize(){this.effectiveSize=!this.parentItem||this.grid._isExpanded(this.parentItem)?this.size+Object.keys(this.itemCaches).reduce((t,e)=>{let s=this.itemCaches[e];return s.updateSize(),t+s.effectiveSize},0):0}ensureSubCacheForScaledIndex(t){if(!this.itemCaches[t]){let e=new O1(this.grid,this,this.items[t]);this.itemCaches[t]=e,this.grid._loadPage(0,e)}}getCacheAndIndex(t){let e=t,s=Object.keys(this.itemCaches);for(let r=0;r<s.length;r++){let n=Number(s[r]),l=this.itemCaches[n];if(e<=n)return{cache:this,scaledIndex:e};if(e<=n+l.effectiveSize)return l.getCacheAndIndex(e-n-1);e-=l.effectiveSize}return{cache:this,scaledIndex:e}}},Qo=i=>class extends i{static get properties(){return{size:{type:Number,notify:!0},pageSize:{type:Number,value:50,observer:"_pageSizeChanged"},dataProvider:{type:Object,notify:!0,observer:"_dataProviderChanged"},loading:{type:Boolean,notify:!0,readOnly:!0,reflectToAttribute:!0},_cache:{type:Object,value:function(){return new N1(this)}},_hasData:{type:Boolean,value:!1},itemIdPath:{type:String,value:null},expandedItems:{type:Object,notify:!0,value:()=>[]},__expandedKeys:{type:Object,value:()=>new Set}}}static get observers(){return["_sizeChanged(size)","_itemIdPathChanged(itemIdPath)","_expandedItemsChanged(expandedItems.*)"]}_sizeChanged(e){let s=e-this._cache.size;this._cache.size+=s,this._cache.effectiveSize+=s,this._effectiveSize=this._cache.effectiveSize}_getItem(e,s){if(e>=this._effectiveSize)return;s.index=e;let{cache:r,scaledIndex:n}=this._cache.getCacheAndIndex(e),l=r.items[n];l?(this._toggleAttribute("loading",!1,s),this._updateItem(s,l),this._isExpanded(l)&&r.ensureSubCacheForScaledIndex(n)):(this._toggleAttribute("loading",!0,s),this._loadPage(this._getPageForIndex(n),r))}getItemId(e){return this.itemIdPath?this.get(this.itemIdPath,e):e}_isExpanded(e){return this.__expandedKeys.has(this.getItemId(e))}_expandedItemsChanged(){this.__cacheExpandedKeys(),this._cache.updateSize(),this._effectiveSize=this._cache.effectiveSize,this.__updateVisibleRows()}_itemIdPathChanged(){this.__cacheExpandedKeys()}__cacheExpandedKeys(){this.expandedItems&&(this.__expandedKeys=new Set,this.expandedItems.forEach(e=>{this.__expandedKeys.add(this.getItemId(e))}))}expandItem(e){this._isExpanded(e)||(this.expandedItems=[...this.expandedItems,e])}collapseItem(e){this._isExpanded(e)&&(this.expandedItems=this.expandedItems.filter(s=>!this._itemsEqual(s,e)))}_getIndexLevel(e){let{cache:s}=this._cache.getCacheAndIndex(e),r=0;for(;s.parentCache;)s=s.parentCache,r++;return r}_loadPage(e,s){if(!s.pendingRequests[e]&&this.dataProvider){this._setLoading(!0),s.pendingRequests[e]=!0;let r={page:e,pageSize:this.pageSize,sortOrders:this._mapSorters(),filters:this._mapFilters(),parentItem:s.parentItem};this.dataProvider(r,(n,l)=>{l!==void 0?s.size=l:r.parentItem&&(s.size=n.length);let a=Array.from(this.$.items.children).map(o=>o._item);n.forEach((o,h)=>{let d=e*this.pageSize+h;s.items[d]=o,this._isExpanded(o)&&a.indexOf(o)>-1&&s.ensureSubCacheForScaledIndex(d)}),this._hasData=!0,delete s.pendingRequests[e],this._debouncerApplyCachedData=G.debounce(this._debouncerApplyCachedData,et.after(0),()=>{this._setLoading(!1),this._cache.updateSize(),this._effectiveSize=this._cache.effectiveSize,Array.from(this.$.items.children).filter(o=>!o.hidden).forEach(o=>{this._cache.getItemForIndex(o.index)&&this._getItem(o.index,o)}),this.__scrollToPendingIndex()}),this._cache.isLoading()||this._debouncerApplyCachedData.flush(),this.__itemsReceived()})}}_getPageForIndex(e){return Math.floor(e/this.pageSize)}clearCache(){this._cache=new N1(this),this._cache.size=this.size||0,this._cache.updateSize(),this._hasData=!1,this.__updateVisibleRows(),this._effectiveSize||this._loadPage(0,this._cache)}_pageSizeChanged(e,s){s!==void 0&&e!==s&&this.clearCache()}_checkSize(){this.size===void 0&&this._effectiveSize===0&&console.warn("The <vaadin-grid> needs the total number of items in order to display rows. Set the total number of items to the `size` property, or provide the total number of items in the second argument of the `dataProvider`’s `callback` call.")}_dataProviderChanged(e,s){s!==void 0&&this.clearCache(),this._ensureFirstPageLoaded(),this._debouncerCheckSize=G.debounce(this._debouncerCheckSize,et.after(2e3),this._checkSize.bind(this))}_ensureFirstPageLoaded(){this._hasData||this._loadPage(0,this._cache)}_itemsEqual(e,s){return this.getItemId(e)===this.getItemId(s)}_getItemIndexInArray(e,s){let r=-1;return s.forEach((n,l)=>{this._itemsEqual(n,e)&&(r=l)}),r}scrollToIndex(e){super.scrollToIndex(e),!isNaN(e)&&(this._cache.isLoading()||!this.clientHeight)&&(this.__pendingScrollToIndex=e)}__scrollToPendingIndex(){if(this.__pendingScrollToIndex&&this.$.items.children.length){let e=this.__pendingScrollToIndex;delete this.__pendingScrollToIndex,this.scrollToIndex(e)}}};function ot(i,t,e){return{index:i,removed:t,addedCount:e}}var R1=0,V1=1,rs=2,ns=3;function e2(i,t,e,s,r,n){let l=n-r+1,a=e-t+1,o=new Array(l);for(let h=0;h<l;h++)o[h]=new Array(a),o[h][0]=h;for(let h=0;h<a;h++)o[0][h]=h;for(let h=1;h<l;h++)for(let d=1;d<a;d++)if(ls(i[t+d-1],s[r+h-1]))o[h][d]=o[h-1][d-1];else{let c=o[h-1][d]+1,p=o[h][d-1]+1;o[h][d]=c<p?c:p}return o}function t2(i){let t=i.length-1,e=i[0].length-1,s=i[t][e],r=[];for(;t>0||e>0;){if(t==0){r.push(rs),e--;continue}if(e==0){r.push(ns),t--;continue}let n=i[t-1][e-1],l=i[t-1][e],a=i[t][e-1],o;l<a?o=l<n?l:n:o=a<n?a:n,o==n?(n==s?r.push(R1):(r.push(V1),s=n),t--,e--):o==l?(r.push(ns),t--,s=l):(r.push(rs),e--,s=a)}return r.reverse(),r}function r2(i,t,e,s,r,n){let l=0,a=0,o,h=Math.min(e-t,n-r);if(t==0&&r==0&&(l=i2(i,s,h)),e==i.length&&n==s.length&&(a=s2(i,s,h-l)),t+=l,r+=l,e-=a,n-=a,e-t==0&&n-r==0)return[];if(t==e){for(o=ot(t,[],0);r<n;)o.removed.push(s[r++]);return[o]}else if(r==n)return[ot(t,[],e-t)];let d=t2(e2(i,t,e,s,r,n));o=void 0;let c=[],p=t,f=r;for(let v=0;v<d.length;v++)switch(d[v]){case R1:o&&(c.push(o),o=void 0),p++,f++;break;case V1:o||(o=ot(p,[],0)),o.addedCount++,p++,o.removed.push(s[f]),f++;break;case rs:o||(o=ot(p,[],0)),o.addedCount++,p++;break;case ns:o||(o=ot(p,[],0)),o.removed.push(s[f]),f++;break}return o&&c.push(o),c}function i2(i,t,e){for(let s=0;s<e;s++)if(!ls(i[s],t[s]))return s;return e}function s2(i,t,e){let s=i.length,r=t.length,n=0;for(;n<e&&ls(i[--s],t[--r]);)n++;return n}function n2(i,t){return r2(i,0,i.length,t,0,t.length)}function ls(i,t){return i===t}function Te(i){return i.localName==="slot"}var as=class{static getFlattenedNodes(i){let t=$(i);return Te(i)?(i=i,t.assignedNodes({flatten:!0})):Array.from(t.childNodes).map(e=>Te(e)?(e=e,$(e).assignedNodes({flatten:!0})):[e]).reduce((e,s)=>e.concat(s),[])}constructor(i,t){this._shadyChildrenObserver=null,this._nativeChildrenObserver=null,this._connected=!1,this._target=i,this.callback=t,this._effectiveNodes=[],this._observer=null,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){Te(this._target)?this._listenSlots([this._target]):$(this._target).children&&(this._listenSlots($(this._target).children),window.ShadyDOM?this._shadyChildrenObserver=window.ShadyDOM.observeChildren(this._target,i=>{this._processMutations(i)}):(this._nativeChildrenObserver=new MutationObserver(i=>{this._processMutations(i)}),this._nativeChildrenObserver.observe(this._target,{childList:!0}))),this._connected=!0}disconnect(){Te(this._target)?this._unlistenSlots([this._target]):$(this._target).children&&(this._unlistenSlots($(this._target).children),window.ShadyDOM&&this._shadyChildrenObserver?(window.ShadyDOM.unobserveChildren(this._shadyChildrenObserver),this._shadyChildrenObserver=null):this._nativeChildrenObserver&&(this._nativeChildrenObserver.disconnect(),this._nativeChildrenObserver=null)),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,Tt.run(()=>this.flush()))}_processMutations(i){this._processSlotMutations(i),this.flush()}_processSlotMutations(i){if(i)for(let t=0;t<i.length;t++){let e=i[t];e.addedNodes&&this._listenSlots(e.addedNodes),e.removedNodes&&this._unlistenSlots(e.removedNodes)}}flush(){if(!this._connected)return!1;window.ShadyDOM&&ShadyDOM.flush(),this._nativeChildrenObserver?this._processSlotMutations(this._nativeChildrenObserver.takeRecords()):this._shadyChildrenObserver&&this._processSlotMutations(this._shadyChildrenObserver.takeRecords()),this._scheduled=!1;let i={target:this._target,addedNodes:[],removedNodes:[]},t=this.constructor.getFlattenedNodes(this._target),e=n2(t,this._effectiveNodes);for(let r=0,n;r<e.length&&(n=e[r]);r++)for(let l=0,a;l<n.removed.length&&(a=n.removed[l]);l++)i.removedNodes.push(a);for(let r=0,n;r<e.length&&(n=e[r]);r++)for(let l=n.index;l<n.index+n.addedCount;l++)i.addedNodes.push(t[l]);this._effectiveNodes=t;let s=!1;return(i.addedNodes.length||i.removedNodes.length)&&(s=!0,this.callback.call(this._target,i)),s}_listenSlots(i){for(let t=0;t<i.length;t++){let e=i[t];Te(e)&&e.addEventListener("slotchange",this._boundSchedule)}}_unlistenSlots(i){for(let t=0;t<i.length;t++){let e=i[t];Te(e)&&e.removeEventListener("slotchange",this._boundSchedule)}}};var l2=i=>class extends i{static get properties(){return{_columnTree:Object}}ready(){super.ready(),this._addNodeObserver()}_hasColumnGroups(e){for(let s=0;s<e.length;s++)if(e[s].localName==="vaadin-grid-column-group")return!0;return!1}_getChildColumns(e){return as.getFlattenedNodes(e).filter(this._isColumnElement)}_flattenColumnGroups(e){return e.map(s=>s.localName==="vaadin-grid-column-group"?this._getChildColumns(s):[s]).reduce((s,r)=>s.concat(r),[])}_getColumnTree(){let e=as.getFlattenedNodes(this).filter(this._isColumnElement),s=[];for(let r=e;s.push(r),!!this._hasColumnGroups(r);)r=this._flattenColumnGroups(r);return s}_updateColumnTree(){let e=this._getColumnTree();this._arrayEquals(e,this._columnTree)||(this._columnTree=e)}_addNodeObserver(){this._observer=new as(this,e=>{let s=r=>r.filter(this._isColumnElement).length>0;if(s(e.addedNodes)||s(e.removedNodes)){let r=e.removedNodes.flatMap(l=>l._allCells),n=l=>r.filter(a=>a._content.contains(l)).length;this.__removeSorters(this._sorters.filter(n)),this.__removeFilters(this._filters.filter(n)),this._updateColumnTree()}this._debouncerCheckImports=G.debounce(this._debouncerCheckImports,et.after(2e3),this._checkImports.bind(this)),this._ensureFirstPageLoaded()})}_arrayEquals(e,s){if(!e||!s||e.length!=s.length)return!1;for(let r=0,n=e.length;r<n;r++)if(e[r]instanceof Array&&s[r]instanceof Array){if(!this._arrayEquals(e[r],s[r]))return!1}else if(e[r]!=s[r])return!1;return!0}_checkImports(){["vaadin-grid-column-group","vaadin-grid-filter","vaadin-grid-filter-column","vaadin-grid-tree-toggle","vaadin-grid-selection-column","vaadin-grid-sort-column","vaadin-grid-sorter"].forEach(e=>{let s=this.querySelector(e);s&&!(s instanceof Lt)&&console.warn(`Make sure you have imported the required module for <${e}> element.`)})}_updateFirstAndLastColumn(){Array.from(this.shadowRoot.querySelectorAll("tr")).forEach(e=>this._updateFirstAndLastColumnForRow(e))}_updateFirstAndLastColumnForRow(e){Array.from(e.querySelectorAll('[part~="cell"]:not([part~="details-cell"])')).sort((s,r)=>s._column._order-r._column._order).forEach((s,r,n)=>{this._toggleAttribute("first-column",r===0,s),this._toggleAttribute("last-column",r===n.length-1,s)})}_isColumnElement(e){return e.nodeType===Node.ELEMENT_NODE&&/\bcolumn\b/.test(e.localName)}};var a2=i=>class extends i{getEventContext(e){let s={},r=e.composedPath(),n=r[r.indexOf(this.$.table)-3];return n&&(s.section=["body","header","footer","details"].filter(l=>n.getAttribute("part").indexOf(l)>-1)[0],n._column&&(s.column=n._column),(s.section==="body"||s.section==="details")&&Object.assign(s,this.__getRowModel(n.parentElement))),s}};var o2=i=>class extends i{static get properties(){return{_filters:{type:Array,value:function(){return[]}}}}ready(){super.ready(),this.addEventListener("filter-changed",this._filterChanged.bind(this))}_filterChanged(e){e.stopPropagation(),this.__addFilter(e.target),this.__applyFilters()}__removeFilters(e){e.length!=0&&(this._filters=this._filters.filter(s=>e.indexOf(s)<0),this.__applyFilters())}__addFilter(e){this._filters.indexOf(e)===-1&&this._filters.push(e)}__applyFilters(){this.dataProvider&&this.isAttached&&this.clearCache()}_mapFilters(){return this._filters.map(e=>({path:e.path,value:e.value}))}};var h2=i=>class extends i{static get properties(){return{detailsOpenedItems:{type:Array,value:function(){return[]}},rowDetailsRenderer:Function,_detailsCells:{type:Array}}}static get observers(){return["_detailsOpenedItemsChanged(detailsOpenedItems.*, rowDetailsRenderer)","_rowDetailsRendererChanged(rowDetailsRenderer)"]}ready(){super.ready(),this._detailsCellResizeObserver=new ResizeObserver(e=>{e.forEach(({target:s})=>{this._updateDetailsCellHeight(s.parentElement)}),this.__virtualizer.__adapter._resizeHandler()})}_rowDetailsRendererChanged(e){!e||this._columnTree&&Array.from(this.$.items.children).forEach(s=>{s.querySelector("[part~=details-cell]")||(this._updateRow(s,this._columnTree[this._columnTree.length-1]),this._a11yUpdateRowDetailsOpened(s,!1))})}_detailsOpenedItemsChanged(e,s){e.path==="detailsOpenedItems.length"||!e.value||[...this.$.items.children].forEach(r=>{if(r.hasAttribute("details-opened")){this._updateItem(r,r._item);return}if(s&&this._isDetailsOpened(r._item)){this._updateItem(r,r._item);return}})}_configureDetailsCell(e){e.setAttribute("part","cell details-cell"),this._toggleAttribute("frozen",!0,e),this._detailsCellResizeObserver.observe(e)}_toggleDetailsCell(e,s){let r=e.querySelector('[part~="details-cell"]');!r||(r.hidden=!s,!r.hidden&&this.rowDetailsRenderer&&(r._renderer=this.rowDetailsRenderer))}_updateDetailsCellHeight(e){let s=e.querySelector('[part~="details-cell"]');!s||(s.hidden?e.style.removeProperty("padding-bottom"):e.style.setProperty("padding-bottom",`${s.offsetHeight}px`))}_updateDetailsCellHeights(){[...this.$.items.children].forEach(e=>{this._updateDetailsCellHeight(e)})}_isDetailsOpened(e){return this.detailsOpenedItems&&this._getItemIndexInArray(e,this.detailsOpenedItems)!==-1}openItemDetails(e){this._isDetailsOpened(e)||(this.detailsOpenedItems=[...this.detailsOpenedItems,e])}closeItemDetails(e){this._isDetailsOpened(e)&&(this.detailsOpenedItems=this.detailsOpenedItems.filter(s=>!this._itemsEqual(s,e)))}};var d2={SCROLLING:500},c2=i=>class extends i{static get properties(){return{_frozenCells:{type:Array,value:()=>[]},_rowWithFocusedElement:Element,_useSticky:{type:Boolean,value:window.CSS&&window.CSS.supports&&(window.CSS.supports("position","sticky")||window.CSS.supports("position","-webkit-sticky"))}}}set _scrollTop(e){this.$.table.scrollTop=e}get _scrollTop(){return this.$.table.scrollTop}get _scrollLeft(){return this.$.table.scrollLeft}ready(){super.ready(),this.$.outerscroller=document.createElement("div"),this.scrollTarget=this.$.table,this.$.items.addEventListener("focusin",e=>{let s=e.composedPath().indexOf(this.$.items);this._rowWithFocusedElement=e.composedPath()[s-1]}),this.$.items.addEventListener("focusout",()=>this._rowWithFocusedElement=void 0),this.$.table.addEventListener("scroll",()=>this._afterScroll())}scrollToIndex(e){e=Math.min(this._effectiveSize-1,Math.max(0,e)),this.__virtualizer.scrollToIndex(e);let s=Array.from(this.$.items.children).find(r=>r.index===e);if(s){let r=s.getBoundingClientRect().top-this.$.header.getBoundingClientRect().bottom;Math.abs(r)>=1&&(this.$.table.scrollTop+=r)}}_scheduleScrolling(){this._scrollingFrame||(this._scrollingFrame=requestAnimationFrame(()=>this._toggleAttribute("scrolling",!0,this.$.scroller))),this._debounceScrolling=G.debounce(this._debounceScrolling,et.after(d2.SCROLLING),()=>{cancelAnimationFrame(this._scrollingFrame),delete this._scrollingFrame,this._toggleAttribute("scrolling",!1,this.$.scroller)})}_afterScroll(){this._translateStationaryElements(),this.hasAttribute("reordering")||this._scheduleScrolling(),this._updateOverflow()}_updateOverflow(){let e="",s=this.$.table;s.scrollTop<s.scrollHeight-s.clientHeight&&(e+=" bottom"),s.scrollTop>0&&(e+=" top"),s.scrollLeft<s.scrollWidth-s.clientWidth&&(e+=" right"),s.scrollLeft>0&&(e+=" left"),this._debounceOverflow=G.debounce(this._debounceOverflow,ki,()=>{let r=e.trim();r.length>0&&this.getAttribute("overflow")!==r?this.setAttribute("overflow",r):r.length==0&&this.hasAttribute("overflow")&&this.removeAttribute("overflow")})}_frozenCellsChanged(){this._debouncerCacheElements=G.debounce(this._debouncerCacheElements,Tt,()=>{Array.from(this.shadowRoot.querySelectorAll('[part~="cell"]')).forEach(function(e){e.style.transform=""}),this._frozenCells=Array.prototype.slice.call(this.$.table.querySelectorAll("[frozen]")),this._updateScrollerMeasurements(),this._translateStationaryElements()}),this._updateLastFrozen()}_updateScrollerMeasurements(){this._frozenCells.length>0&&this.__isRTL&&(this.__scrollerMetrics={scrollWidth:this.$.table.scrollWidth,clientWidth:this.$.table.clientWidth})}_updateLastFrozen(){if(!this._columnTree)return;let e=this._columnTree[this._columnTree.length-1].slice(0);e.sort((r,n)=>r._order-n._order);let s=e.reduce((r,n,l)=>(n._lastFrozen=!1,n.frozen&&!n.hidden?l:r),void 0);s!==void 0&&(e[s]._lastFrozen=!0)}_translateStationaryElements(){let e=Math.max(0,this._scrollLeft),s=Math.max(0,this._scrollTop),r=0,n=0,l=0;if(this._useSticky||(r=e,n=s,l=this.$.table.clientHeight-this.$.footer.offsetHeight-this.$.footer.offsetTop),this.$.header.style.transform=this._getTranslate(-e+r,n),this.$.footer.style.transform=this._getTranslate(-e+r,n+l),this.$.items.style.transform=this._getTranslate(-e+r,0),this._frozenCells.length>0){let a=this.__isRTL?this.__getNormalizedScrollLeft(this.$.table)+this.__scrollerMetrics.clientWidth-this.__scrollerMetrics.scrollWidth:this._scrollLeft,o=this._getTranslate(a,0);for(let h=0;h<this._frozenCells.length;h++)this._frozenCells[h].style.transform=o}}_getTranslate(e,s){return`translate(${e}px, ${s}px)`}};var u2=i=>class extends i{static get properties(){return{selectedItems:{type:Object,notify:!0,value:()=>[]}}}static get observers(){return["_selectedItemsChanged(selectedItems.*)"]}_isSelected(e){return this.selectedItems&&this._getItemIndexInArray(e,this.selectedItems)>-1}selectItem(e){this._isSelected(e)||(this.selectedItems=[...this.selectedItems,e])}deselectItem(e){this._isSelected(e)&&(this.selectedItems=this.selectedItems.filter(s=>!this._itemsEqual(s,e)))}_toggleItem(e){this._getItemIndexInArray(e,this.selectedItems)===-1?this.selectItem(e):this.deselectItem(e)}_selectedItemsChanged(e){this.$.items.children.length&&(e.path==="selectedItems"||e.path==="selectedItems.splices")&&Array.from(this.$.items.children).forEach(s=>{this._updateItem(s,s._item)})}};var p2=i=>class extends i{static get properties(){return{multiSort:{type:Boolean,value:!1},_sorters:{type:Array,value:function(){return[]}},_previousSorters:{type:Array,value:function(){return[]}}}}ready(){super.ready(),this.addEventListener("sorter-changed",this._onSorterChanged)}_onSorterChanged(e){let s=e.target;e.stopPropagation(),this.__updateSorter(s),this.__applySorters()}__removeSorters(e){e.length!=0&&(this._sorters=this._sorters.filter(s=>e.indexOf(s)<0),this.multiSort&&this.__updateSortOrders(),this.__applySorters())}__updateSortOrders(){this._sorters.forEach((e,s)=>e._order=this._sorters.length>1?s:null,this)}__updateSorter(e){if(!(!e.direction&&this._sorters.indexOf(e)===-1)){if(e._order=null,this.multiSort)this._removeArrayItem(this._sorters,e),e.direction&&this._sorters.unshift(e),this.__updateSortOrders();else if(e.direction){let s=this._sorters.filter(r=>r!=e);this._sorters=[e],s.forEach(r=>{r._order=null,r.direction=null})}}}__applySorters(){this.dataProvider&&this.isAttached&&JSON.stringify(this._previousSorters)!==JSON.stringify(this._mapSorters())&&this.clearCache(),this._a11yUpdateSorters(),this._previousSorters=this._mapSorters()}_mapSorters(){return this._sorters.map(e=>({path:e.path,direction:e.direction}))}_removeArrayItem(e,s){let r=e.indexOf(s);r>-1&&e.splice(r,1)}};var f2=i=>class extends i{static get properties(){return{cellClassNameGenerator:Function}}static get observers(){return["__cellClassNameGeneratorChanged(cellClassNameGenerator)"]}__cellClassNameGeneratorChanged(){this.generateCellClassNames()}generateCellClassNames(){Array.from(this.$.items.children).filter(e=>!e.hidden).forEach(e=>this._generateCellClassNames(e,this.__getRowModel(e)))}_generateCellClassNames(e,s){Array.from(e.children).forEach(r=>{if(r.__generatedClasses&&r.__generatedClasses.forEach(n=>r.classList.remove(n)),this.cellClassNameGenerator){let n=this.cellClassNameGenerator(r._column,s);r.__generatedClasses=n&&n.split(" ").filter(l=>l.length>0),r.__generatedClasses&&r.__generatedClasses.forEach(l=>r.classList.add(l))}})}};var ht={BETWEEN:"between",ON_TOP:"on-top",ON_TOP_OR_BETWEEN:"on-top-or-between",ON_GRID:"on-grid"},oe={ON_TOP:"on-top",ABOVE:"above",BELOW:"below",EMPTY:"empty"},g2=i=>class extends i{static get properties(){return{dropMode:String,rowsDraggable:Boolean,dragFilter:Function,dropFilter:Function,__dndAutoScrollThreshold:{value:50}}}static get observers(){return["_dragDropAccessChanged(rowsDraggable, dropMode, dragFilter, dropFilter)"]}ready(){super.ready(),this.$.table.addEventListener("dragstart",this._onDragStart.bind(this)),this.$.table.addEventListener("dragend",this._onDragEnd.bind(this)),this.$.table.addEventListener("dragover",this._onDragOver.bind(this)),this.$.table.addEventListener("dragleave",this._onDragLeave.bind(this)),this.$.table.addEventListener("drop",this._onDrop.bind(this)),this.$.table.addEventListener("dragenter",e=>{this.dropMode&&(e.preventDefault(),e.stopPropagation())})}_onDragStart(e){if(this.rowsDraggable){let s=e.target;if(s.localName==="vaadin-grid-cell-content"&&(s=s.assignedSlot.parentNode.parentNode),s.parentNode!==this.$.items)return;if(e.stopPropagation(),this._toggleAttribute("dragging-rows",!0,this),this._safari){let a=s.style.transform;s.style.top=/translateY\((.*)\)/.exec(a)[1],s.style.transform="none",requestAnimationFrame(()=>{s.style.top="",s.style.transform=a})}let r=s.getBoundingClientRect();this._ios?e.dataTransfer.setDragImage(s):e.dataTransfer.setDragImage(s,e.clientX-r.left,e.clientY-r.top);let n=[s];this._isSelected(s._item)&&(n=this.__getViewportRows().filter(a=>this._isSelected(a._item)).filter(a=>!this.dragFilter||this.dragFilter(this.__getRowModel(a)))),e.dataTransfer.setData("text",this.__formatDefaultTransferData(n)),s.setAttribute("dragstart",n.length>1?n.length:""),this.updateStyles({"--_grid-drag-start-x":`${e.clientX-r.left+20}px`,"--_grid-drag-start-y":`${e.clientY-r.top+10}px`}),requestAnimationFrame(()=>{s.removeAttribute("dragstart"),this.updateStyles({"--_grid-drag-start-x":"","--_grid-drag-start-y":""})});let l=new CustomEvent("grid-dragstart",{detail:{draggedItems:n.map(a=>a._item),setDragData:(a,o)=>e.dataTransfer.setData(a,o),setDraggedItemsCount:a=>s.setAttribute("dragstart",a)}});l.originalEvent=e,this.dispatchEvent(l)}}_onDragEnd(e){this._toggleAttribute("dragging-rows",!1,this),e.stopPropagation();let s=new CustomEvent("grid-dragend");s.originalEvent=e,this.dispatchEvent(s)}_onDragLeave(e){e.stopPropagation(),this._clearDragStyles()}_onDragOver(e){if(this.dropMode){if(this._dropLocation=void 0,this._dragOverItem=void 0,this.__dndAutoScroll(e.clientY)){this._clearDragStyles();return}let s=e.composedPath().filter(r=>r.localName==="tr")[0];if(!this._effectiveSize||this.dropMode===ht.ON_GRID)this._dropLocation=oe.EMPTY;else if(!s||s.parentNode!==this.$.items){if(s)return;if(this.dropMode===ht.BETWEEN||this.dropMode===ht.ON_TOP_OR_BETWEEN)s=Array.from(this.$.items.children).filter(r=>!r.hidden).pop(),this._dropLocation=oe.BELOW;else return}else{let r=s.getBoundingClientRect();if(this._dropLocation=oe.ON_TOP,this.dropMode===ht.BETWEEN){let n=e.clientY-r.top<r.bottom-e.clientY;this._dropLocation=n?oe.ABOVE:oe.BELOW}else this.dropMode===ht.ON_TOP_OR_BETWEEN&&(e.clientY-r.top<r.height/3?this._dropLocation=oe.ABOVE:e.clientY-r.top>r.height/3*2&&(this._dropLocation=oe.BELOW))}if(s&&s.hasAttribute("drop-disabled")){this._dropLocation=void 0;return}e.stopPropagation(),e.preventDefault(),this._dropLocation===oe.EMPTY?this._toggleAttribute("dragover",!0,this):s?(this._dragOverItem=s._item,s.getAttribute("dragover")!==this._dropLocation&&s.setAttribute("dragover",this._dropLocation)):this._clearDragStyles()}}__dndAutoScroll(e){if(this.__dndAutoScrolling)return!0;let s=this.$.header.getBoundingClientRect().bottom,r=this.$.footer.getBoundingClientRect().top,n=s-e+this.__dndAutoScrollThreshold,l=e-r+this.__dndAutoScrollThreshold,a=0;if(l>0?a=l*2:n>0&&(a=-n*2),a){let o=this.$.table.scrollTop;if(this.$.table.scrollTop+=a,o!==this.$.table.scrollTop)return this.__dndAutoScrolling=!0,setTimeout(()=>this.__dndAutoScrolling=!1,20),!0}}__getViewportRows(){let e=this.$.header.getBoundingClientRect().bottom,s=this.$.footer.getBoundingClientRect().top;return Array.from(this.$.items.children).filter(r=>{let n=r.getBoundingClientRect();return n.bottom>e&&n.top<s})}_clearDragStyles(){this.removeAttribute("dragover"),Array.from(this.$.items.children).forEach(e=>e.removeAttribute("dragover"))}_onDrop(e){if(this.dropMode){e.stopPropagation(),e.preventDefault();let s=e.dataTransfer.types&&Array.from(e.dataTransfer.types).map(n=>({type:n,data:e.dataTransfer.getData(n)}));this._clearDragStyles();let r=new CustomEvent("grid-drop",{bubbles:e.bubbles,cancelable:e.cancelable,detail:{dropTargetItem:this._dragOverItem,dropLocation:this._dropLocation,dragData:s}});r.originalEvent=e,this.dispatchEvent(r)}}__formatDefaultTransferData(e){return e.map(s=>Array.from(s.children).filter(r=>!r.hidden&&r.getAttribute("part").indexOf("details-cell")===-1).sort((r,n)=>r._column._order>n._column._order?1:-1).map(r=>r._content.textContent.trim()).filter(r=>r).join("	")).join(`
`)}_dragDropAccessChanged(){this.filterDragAndDrop()}filterDragAndDrop(){Array.from(this.$.items.children).filter(e=>!e.hidden).forEach(e=>{this._filterDragAndDrop(e,this.__getRowModel(e))})}_filterDragAndDrop(e,s){let r=!this.rowsDraggable||this.dragFilter&&!this.dragFilter(s),n=!this.dropMode||this.dropFilter&&!this.dropFilter(s);Array.from(e.children).map(a=>a._content).forEach(a=>{r?a.removeAttribute("draggable"):a.setAttribute("draggable",!0)}),this._toggleAttribute("drag-disabled",r,e),this._toggleAttribute("drop-disabled",n,e)}};var m2=i=>class extends i{static get properties(){return{_headerFocusable:{type:Object,observer:"_focusableChanged"},_itemsFocusable:{type:Object,observer:"_focusableChanged"},_footerFocusable:{type:Object,observer:"_focusableChanged"},_navigatingIsHidden:Boolean,_focusedItemIndex:{type:Number,value:0},_focusedColumnOrder:Number,interacting:{type:Boolean,value:!1,reflectToAttribute:!0,readOnly:!0,observer:"_interactingChanged"}}}ready(){super.ready(),!(this._ios||this._android)&&(this.addEventListener("keydown",this._onKeyDown),this.addEventListener("keyup",this._onKeyUp),this.addEventListener("focusin",this._onFocusIn),this.addEventListener("focusout",this._onFocusOut),this.$.table.addEventListener("focusin",this._onCellFocusIn.bind(this)),this.$.table.addEventListener("focusout",this._onCellFocusOut.bind(this)),this.addEventListener("mousedown",()=>{this._toggleAttribute("navigating",!1,this),this._isMousedown=!0}),this.addEventListener("mouseup",()=>this._isMousedown=!1))}_focusableChanged(e,s){s&&s.setAttribute("tabindex","-1"),e&&this._updateGridSectionFocusTarget(e)}_interactingChanged(){this._updateGridSectionFocusTarget(this._headerFocusable),this._updateGridSectionFocusTarget(this._itemsFocusable),this._updateGridSectionFocusTarget(this._footerFocusable)}_onKeyDown(e){let s=e.key,r;switch(s){case"ArrowUp":case"ArrowDown":case"ArrowLeft":case"ArrowRight":case"PageUp":case"PageDown":case"Home":case"End":r="Navigation";break;case"Enter":case"Escape":case"F2":r="Interaction";break;case"Tab":r="Tab";break;case" ":r="Space";break}this._detectInteracting(e),this.interacting&&r!=="Interaction"&&(r=void 0),r&&this[`_on${r}KeyDown`](e,s)}_ensureScrolledToIndex(e){Array.from(this.$.items.children).filter(r=>r.index===e)[0]||this.scrollToIndex(e)}_onNavigationKeyDown(e,s){e.preventDefault();function r(M){return Array.prototype.indexOf.call(M.parentNode.children,M)}let n=this._lastVisibleIndex-this._firstVisibleIndex-1,l=0,a=0;switch(s){case"ArrowRight":l=this.__isRTL?-1:1;break;case"ArrowLeft":l=this.__isRTL?1:-1;break;case"Home":l=-Infinity,e.ctrlKey&&(a=-Infinity);break;case"End":l=Infinity,e.ctrlKey&&(a=Infinity);break;case"ArrowDown":a=1;break;case"ArrowUp":a=-1;break;case"PageDown":a=n;break;case"PageUp":a=-n;break}let o=e.composedPath()[0],h=r(o),d=this._elementMatches(o,'[part~="details-cell"]'),c=o.parentNode,p=c.parentNode,f=(p===this.$.items?this._effectiveSize:p.children.length)-1,v=p===this.$.items?this._focusedItemIndex!==void 0?this._focusedItemIndex:c.index:r(c),w=Math.max(0,Math.min(v+a,f)),P=!1;if(p===this.$.items){let M=c._item,Z=this._cache.getItemForIndex(w);d?P=a===0:P=a===1&&this._isDetailsOpened(M)||a===-1&&w!==v&&this._isDetailsOpened(Z),P!==d&&(a===1&&P||a===-1&&!P)&&(w=v)}if(p!==this.$.items){if(w>v)for(;w<f&&p.children[w].hidden;)w++;else if(w<v)for(;w>0&&p.children[w].hidden;)w--}this._focusedColumnOrder===void 0&&(d?this._focusedColumnOrder=0:this._focusedColumnOrder=this._getColumns(p,v).filter(M=>!M.hidden)[h]._order);let L=this._getColumns(p,w).filter(M=>!M.hidden),B=L.map(M=>M._order).sort((M,Z)=>M-Z),ee=B.length-1,ue=B.indexOf(B.slice(0).sort((M,Z)=>Math.abs(M-this._focusedColumnOrder)-Math.abs(Z-this._focusedColumnOrder))[0]),Ne=a===0&&d?ue:Math.max(0,Math.min(ue+l,ee));Ne!==ue&&(this._focusedColumnOrder=void 0),p===this.$.items&&this._ensureScrolledToIndex(w),this._toggleAttribute("navigating",!0,this);let X1=L.reduce((M,Z,gt)=>(M[Z._order]=gt,M),{})[B[Ne]],Zt=p===this.$.items?Array.from(p.children).filter(M=>!M.hidden&&M.index===w)[0]:p.children[w];if(!Zt)return;let Jt=P?Array.from(Zt.children).filter(M=>this._elementMatches(M,'[part~="details-cell"]'))[0]:Zt.children[X1];if(this._scrollHorizontallyToCell(Jt),p===this.$.items&&(this._focusedItemIndex=w),p===this.$.items){let M=Jt.getBoundingClientRect(),Z=this.$.footer.getBoundingClientRect().top,gt=this.$.header.getBoundingClientRect().bottom;M.bottom>Z?this.$.table.scrollTop+=M.bottom-Z:M.top<gt&&(this.$.table.scrollTop-=gt-M.top)}Jt.focus()}_onInteractionKeyDown(e,s){let r=e.composedPath()[0],n=r.localName==="input"&&!/^(button|checkbox|color|file|image|radio|range|reset|submit)$/i.test(r.type),l;switch(s){case"Enter":l=this.interacting?!n:!0;break;case"Escape":l=!1;break;case"F2":l=!this.interacting;break}let{cell:a}=this._getGridEventLocation(e);if(this.interacting!==l&&a!==null)if(l){let o=a._content.querySelector("[focus-target]")||a._content.firstElementChild;o&&(e.preventDefault(),o.focus(),this._setInteracting(!0),this._toggleAttribute("navigating",!1,this))}else e.preventDefault(),this._focusedColumnOrder=void 0,a.focus(),this._setInteracting(!1),this._toggleAttribute("navigating",!0,this)}_predictFocusStepTarget(e,s){let r=[this.$.table,this._headerFocusable,this._itemsFocusable,this._footerFocusable,this.$.focusexit],n=r.indexOf(e);for(n+=s;n>=0&&n<=r.length-1&&(!r[n]||r[n].parentNode.hidden);)n+=s;return r[n]}_onTabKeyDown(e){let s=this._predictFocusStepTarget(e.composedPath()[0],e.shiftKey?-1:1);if(s===this.$.table)this.$.table.focus();else if(s===this.$.focusexit)this.$.focusexit.focus();else if(s===this._itemsFocusable){let r=s,n=this._itemsFocusable.parentNode;if(this._ensureScrolledToIndex(this._focusedItemIndex),n.index!==this._focusedItemIndex){let l=Array.from(n.children).indexOf(this._itemsFocusable),a=Array.from(this.$.items.children).filter(o=>o.index===this._focusedItemIndex)[0];a&&(r=a.children[l])}e.preventDefault(),r.focus()}else e.preventDefault(),s.focus();this._toggleAttribute("navigating",!0,this)}_onSpaceKeyDown(e){e.preventDefault();let s=e.composedPath()[0];(!s._content||!s._content.firstElementChild)&&this.dispatchEvent(new CustomEvent("cell-activate",{detail:{model:this.__getRowModel(s.parentElement)}}))}_onKeyUp(e){if(!/^( |SpaceBar)$/.test(e.key))return;e.preventDefault();let s=e.composedPath()[0];if(s._content&&s._content.firstElementChild){let r=this.hasAttribute("navigating");s._content.firstElementChild.click(),this._toggleAttribute("navigating",r,this)}}_onFocusIn(e){this._isMousedown||this._toggleAttribute("navigating",!0,this);let s=e.composedPath()[0];s===this.$.table||s===this.$.focusexit?(this._predictFocusStepTarget(s,s===this.$.table?1:-1).focus(),this._setInteracting(!1)):this._detectInteracting(e)}_onFocusOut(e){this._toggleAttribute("navigating",!1,this),this._detectInteracting(e)}_onCellFocusIn(e){let{section:s,cell:r}=this._getGridEventLocation(e);if(this._detectInteracting(e),s&&r){this._activeRowGroup=s,this.$.header===s?this._headerFocusable=r:this.$.items===s?this._itemsFocusable=r:this.$.footer===s&&(this._footerFocusable=r),r._content.dispatchEvent(new CustomEvent("cell-focusin",{bubbles:!1}));let n=this.getEventContext(e);r.dispatchEvent(new CustomEvent("cell-focus",{bubbles:!0,composed:!0,detail:{context:n}}))}this._detectFocusedItemIndex(e)}_onCellFocusOut(e){e.composedPath().indexOf(this.$.table)===3&&e.composedPath()[0]._content.dispatchEvent(new CustomEvent("cell-focusout",{bubbles:!1}))}_detectInteracting(e){let s=e.composedPath().some(r=>r.localName==="vaadin-grid-cell-content");this._setInteracting(s)}_detectFocusedItemIndex(e){let{section:s,row:r}=this._getGridEventLocation(e);s===this.$.items&&(this._focusedItemIndex=r.index)}_updateGridSectionFocusTarget(e){if(!e)return;let s=this._getGridSectionFromFocusTarget(e),r=this.interacting&&s===this._activeRowGroup;e.tabIndex=r?-1:0}_preventScrollerRotatingCellFocus(e,s){e.index===this._focusedItemIndex&&this.hasAttribute("navigating")&&this._activeRowGroup===this.$.items&&(this._navigatingIsHidden=!0,this._toggleAttribute("navigating",!1,this)),s===this._focusedItemIndex&&this._navigatingIsHidden&&(this._navigatingIsHidden=!1,this._toggleAttribute("navigating",!0,this))}_getColumns(e,s){let r=this._columnTree.length-1;return e===this.$.header?r=s:e===this.$.footer&&(r=this._columnTree.length-1-s),this._columnTree[r]}_resetKeyboardNavigation(){if(this.$.header.firstElementChild&&(this._headerFocusable=Array.from(this.$.header.firstElementChild.children).filter(e=>!e.hidden)[0]),this.$.items.firstElementChild){let e=this.__getFirstVisibleItem();e&&(this._itemsFocusable=Array.from(e.children).filter(s=>!s.hidden)[0])}this.$.footer.firstElementChild&&(this._footerFocusable=Array.from(this.$.footer.firstElementChild.children).filter(e=>!e.hidden)[0])}_scrollHorizontallyToCell(e){if(e.hasAttribute("frozen")||this._elementMatches(e,'[part~="details-cell"]'))return;let s=e.getBoundingClientRect(),r=e.parentNode,n=Array.from(r.children).indexOf(e),l=this.$.table.getBoundingClientRect(),a=l.left,o=l.right;for(let h=n-1;h>=0;h--){let d=r.children[h];if(!(d.hasAttribute("hidden")||this._elementMatches(d,'[part~="details-cell"]'))&&d.hasAttribute("frozen")){a=d.getBoundingClientRect().right;break}}for(let h=n+1;h<r.children.length;h++){let d=r.children[h];if(!(d.hasAttribute("hidden")||this._elementMatches(d,'[part~="details-cell"]'))&&d.hasAttribute("frozen")){o=d.getBoundingClientRect().left;break}}s.left<a&&(this.$.table.scrollLeft+=Math.round(s.left-a)),s.right>o&&(this.$.table.scrollLeft+=Math.round(s.right-o))}_elementMatches(e,s){return e.matches?e.matches(s):Array.from(e.parentNode.querySelectorAll(s)).indexOf(e)!==-1}_getGridEventLocation(e){let s=e.composedPath(),r=s.indexOf(this.$.table),n=r>=1?s[r-1]:null,l=r>=2?s[r-2]:null,a=r>=3?s[r-3]:null;return{section:n,row:l,cell:a}}_getGridSectionFromFocusTarget(e){return e===this._headerFocusable?this.$.header:e===this._itemsFocusable?this.$.items:e===this._footerFocusable?this.$.footer:null}};function v2(i,t,e){let s=1;i.forEach(r=>{s%10==0&&s++,r._order=e+s*t,s++})}var _2=i=>class extends Ji(i){static get properties(){return{columnReorderingAllowed:{type:Boolean,value:!1},_orderBaseScope:{type:Number,value:1e7}}}static get observers(){return["_updateOrders(_columnTree, _columnTree.*)"]}ready(){super.ready(),qi(this,"track",this._onTrackEvent),this._reorderGhost=this.shadowRoot.querySelector('[part="reorder-ghost"]'),this.addEventListener("touchstart",this._onTouchStart.bind(this)),this.addEventListener("touchmove",this._onTouchMove.bind(this)),this.addEventListener("touchend",this._onTouchEnd.bind(this)),this.addEventListener("contextmenu",this._onContextMenu.bind(this))}_onContextMenu(e){this.hasAttribute("reordering")&&e.preventDefault()}_onTouchStart(e){this._startTouchReorderTimeout=setTimeout(()=>{this._onTrackStart({detail:{x:e.touches[0].clientX,y:e.touches[0].clientY}})},100)}_onTouchMove(e){this._draggedColumn&&e.preventDefault(),clearTimeout(this._startTouchReorderTimeout)}_onTouchEnd(){clearTimeout(this._startTouchReorderTimeout),this._onTrackEnd()}_onTrackEvent(e){if(e.detail.state==="start"){let s=e.composedPath(),r=s[s.indexOf(this.$.header)-2];if(!r||!r._content||r._content.contains(this.getRootNode().activeElement)||this.$.scroller.hasAttribute("column-resizing"))return;this._touchDevice||this._onTrackStart(e)}else e.detail.state==="track"?this._onTrack(e):e.detail.state==="end"&&this._onTrackEnd(e)}_onTrackStart(e){if(!this.columnReorderingAllowed)return;let s=e.composedPath&&e.composedPath();if(s&&s.filter(n=>n.hasAttribute&&n.hasAttribute("draggable"))[0])return;let r=this._cellFromPoint(e.detail.x,e.detail.y);if(!(!r||r.getAttribute("part").indexOf("header-cell")===-1)){for(this._toggleAttribute("reordering",!0,this),this._draggedColumn=r._column;this._draggedColumn.parentElement.childElementCount===1;)this._draggedColumn=this._draggedColumn.parentElement;this._setSiblingsReorderStatus(this._draggedColumn,"allowed"),this._draggedColumn._reorderStatus="dragging",this._updateGhost(r),this._reorderGhost.style.visibility="visible",this._updateGhostPosition(e.detail.x,this._touchDevice?e.detail.y-50:e.detail.y),this._autoScroller()}}_onTrack(e){if(!this._draggedColumn)return;let s=this._cellFromPoint(e.detail.x,e.detail.y);if(!s)return;let r=this._getTargetColumn(s,this._draggedColumn);this._isSwapAllowed(this._draggedColumn,r)&&this._isSwappableByPosition(r,e.detail.x)&&this._swapColumnOrders(this._draggedColumn,r),this._updateGhostPosition(e.detail.x,this._touchDevice?e.detail.y-50:e.detail.y),this._lastDragClientX=e.detail.x}_onTrackEnd(){!this._draggedColumn||(this._toggleAttribute("reordering",!1,this),this._draggedColumn._reorderStatus="",this._setSiblingsReorderStatus(this._draggedColumn,""),this._draggedColumn=null,this._lastDragClientX=null,this._reorderGhost.style.visibility="hidden",this.dispatchEvent(new CustomEvent("column-reorder",{detail:{columns:this._getColumnsInOrder()}})))}_getColumnsInOrder(){return this._columnTree.slice(0).pop().filter(e=>!e.hidden).sort((e,s)=>e._order-s._order)}_cellFromPoint(e,s){e=e||0,s=s||0,this._draggedColumn||this._toggleAttribute("no-content-pointer-events",!0,this.$.scroller);let r=this.shadowRoot.elementFromPoint(e,s);if(this._toggleAttribute("no-content-pointer-events",!1,this.$.scroller),r&&r._column)return r}_updateGhostPosition(e,s){let r=this._reorderGhost.getBoundingClientRect(),n=e-r.width/2,l=s-r.height/2,a=parseInt(this._reorderGhost._left||0),o=parseInt(this._reorderGhost._top||0);this._reorderGhost._left=a-(r.left-n),this._reorderGhost._top=o-(r.top-l),this._reorderGhost.style.transform=`translate(${this._reorderGhost._left}px, ${this._reorderGhost._top}px)`}_updateGhost(e){let s=this._reorderGhost;s.textContent=e._content.innerText;let r=window.getComputedStyle(e);return["boxSizing","display","width","height","background","alignItems","padding","border","flex-direction","overflow"].forEach(n=>s.style[n]=r[n]),s}_updateOrders(e,s){e===void 0||s===void 0||(e[0].forEach(r=>r._order=0),v2(e[0],this._orderBaseScope,0))}_setSiblingsReorderStatus(e,s){Array.from(e.parentNode.children).filter(r=>/column/.test(r.localName)&&this._isSwapAllowed(r,e)).forEach(r=>r._reorderStatus=s)}_autoScroller(){if(this._lastDragClientX){let e=this._lastDragClientX-this.getBoundingClientRect().right+50,s=this.getBoundingClientRect().left-this._lastDragClientX+50;e>0?this.$.table.scrollLeft+=e/10:s>0&&(this.$.table.scrollLeft-=s/10)}this._draggedColumn&&setTimeout(()=>this._autoScroller(),10)}_isSwapAllowed(e,s){if(e&&s){let r=e!==s,n=e.parentElement===s.parentElement,l=e.frozen===s.frozen;return r&&n&&l}}_isSwappableByPosition(e,s){let r=Array.from(this.$.header.querySelectorAll('tr:not([hidden]) [part~="cell"]')).filter(a=>e.contains(a._column))[0],n=this.$.header.querySelector("tr:not([hidden]) [reorder-status=dragging]").getBoundingClientRect(),l=r.getBoundingClientRect();return l.left>n.left?s>l.right-n.width:s<l.left+n.width}_swapColumnOrders(e,s){let r=e._order;e._order=s._order,s._order=r,this._updateLastFrozen(),this._updateFirstAndLastColumn()}_getTargetColumn(e,s){if(e&&s){let r=e._column;for(;r.parentElement!==s.parentElement&&r!==this;)r=r.parentElement;return r.parentElement===s.parentElement?r:e._column}}};var w2=0,$1=0,Ie=[],b2=0,os=!1,j1=document.createTextNode("");new window.MutationObserver(y2).observe(j1,{characterData:!0});function y2(){os=!1;let i=Ie.length;for(let t=0;t<i;t++){let e=Ie[t];if(e)try{e()}catch(s){setTimeout(()=>{throw s})}}Ie.splice(0,i),$1+=i}var G1={after(i){return{run(t){return window.setTimeout(t,i)},cancel(t){window.clearTimeout(t)}}},run(i,t){return window.setTimeout(i,t)},cancel(i){window.clearTimeout(i)}},Ut={run(i){return window.requestAnimationFrame(i)},cancel(i){window.cancelAnimationFrame(i)}},z2={run(i){return window.requestIdleCallback?window.requestIdleCallback(i):window.setTimeout(i,16)},cancel(i){window.cancelIdleCallback?window.cancelIdleCallback(i):window.clearTimeout(i)}},W1={run(i){return os||(os=!0,j1.textContent=b2++),Ie.push(i),w2++},cancel(i){let t=i-$1;if(t>=0){if(!Ie[t])throw new Error("invalid async handle: "+i);Ie[t]=null}}};var he=class{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(t,e){this._asyncModule=t,this._callback=e,this._timer=this._asyncModule.run(()=>{this._timer=null,dt.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),dt.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return this._timer!=null}static debounce(t,e,s){return t instanceof he?t._cancelAsync():t=new he,t.setConfig(e,s),t}},dt=new Set,x2=function(i){dt.add(i)},M2=function(){let i=Boolean(dt.size);return dt.forEach(t=>{try{t.flush()}catch(e){setTimeout(()=>{throw e})}}),i},ct=()=>{let i;do i=M2();while(i)};var U1=navigator.userAgent.match(/iP(?:hone|ad;(?: U;)? CPU) OS (\d+)/),F2=U1&&U1[1]>=8,q1=3,A2={_ratio:.5,_scrollerPaddingTop:0,_scrollPosition:0,_physicalSize:0,_physicalAverage:0,_physicalAverageCount:0,_physicalTop:0,_virtualCount:0,_estScrollHeight:0,_scrollHeight:0,_viewportHeight:0,_viewportWidth:0,_physicalItems:null,_physicalSizes:null,_firstVisibleIndexVal:null,_lastVisibleIndexVal:null,_maxPages:2,_itemsPerRow:1,_itemWidth:0,_rowHeight:0,_templateCost:0,_parentModel:!0,get _physicalBottom(){return this._physicalTop+this._physicalSize},get _scrollBottom(){return this._scrollPosition+this._viewportHeight},get _virtualEnd(){return this._virtualStart+this._physicalCount-1},get _hiddenContentSize(){var i=this.grid?this._physicalRows*this._rowHeight:this._physicalSize;return i-this._viewportHeight},get _maxScrollTop(){return this._estScrollHeight-this._viewportHeight+this._scrollOffset},get _maxVirtualStart(){var i=this._convertIndexToCompleteRow(this._virtualCount);return Math.max(0,i-this._physicalCount)},set _virtualStart(i){i=this._clamp(i,0,this._maxVirtualStart),this.grid&&(i=i-i%this._itemsPerRow),this._virtualStartVal=i},get _virtualStart(){return this._virtualStartVal||0},set _physicalStart(i){i=i%this._physicalCount,i<0&&(i=this._physicalCount+i),this.grid&&(i=i-i%this._itemsPerRow),this._physicalStartVal=i},get _physicalStart(){return this._physicalStartVal||0},get _physicalEnd(){return(this._physicalStart+this._physicalCount-1)%this._physicalCount},set _physicalCount(i){this._physicalCountVal=i},get _physicalCount(){return this._physicalCountVal||0},get _optPhysicalSize(){return this._viewportHeight===0?Infinity:this._viewportHeight*this._maxPages},get _isVisible(){return Boolean(this.offsetWidth||this.offsetHeight)},get firstVisibleIndex(){var i=this._firstVisibleIndexVal;if(i==null){var t=this._physicalTop+this._scrollOffset;i=this._iterateItems(function(e,s){if(t+=this._getPhysicalSizeIncrement(e),t>this._scrollPosition)return this.grid?s-s%this._itemsPerRow:s;if(this.grid&&this._virtualCount-1===s)return s-s%this._itemsPerRow})||0,this._firstVisibleIndexVal=i}return i},get lastVisibleIndex(){var i=this._lastVisibleIndexVal;if(i==null){if(this.grid)i=Math.min(this._virtualCount,this.firstVisibleIndex+this._estRowsInView*this._itemsPerRow-1);else{var t=this._physicalTop+this._scrollOffset;this._iterateItems(function(e,s){t<this._scrollBottom&&(i=s),t+=this._getPhysicalSizeIncrement(e)})}this._lastVisibleIndexVal=i}return i},get _defaultScrollTarget(){return this},get _virtualRowCount(){return Math.ceil(this._virtualCount/this._itemsPerRow)},get _estRowsInView(){return Math.ceil(this._viewportHeight/this._rowHeight)},get _physicalRows(){return Math.ceil(this._physicalCount/this._itemsPerRow)},get _scrollOffset(){return this._scrollerPaddingTop+this.scrollOffset},_scrollHandler:function(){var i=Math.max(0,Math.min(this._maxScrollTop,this._scrollTop)),t=i-this._scrollPosition,e=t>=0;if(this._scrollPosition=i,this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,Math.abs(t)>this._physicalSize&&this._physicalSize>0){t=t-this._scrollOffset;var s=Math.round(t/this._physicalAverage)*this._itemsPerRow;this._virtualStart=this._virtualStart+s,this._physicalStart=this._physicalStart+s,this._physicalTop=Math.min(Math.floor(this._virtualStart/this._itemsPerRow)*this._physicalAverage,this._scrollPosition),this._update()}else if(this._physicalCount>0){var r=this._getReusables(e);e?(this._physicalTop=r.physicalTop,this._virtualStart=this._virtualStart+r.indexes.length,this._physicalStart=this._physicalStart+r.indexes.length):(this._virtualStart=this._virtualStart-r.indexes.length,this._physicalStart=this._physicalStart-r.indexes.length),this._update(r.indexes,e?null:r.indexes),this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,0),W1)}},_getReusables:function(i){var t,e,s,r=[],n=this._hiddenContentSize*this._ratio,l=this._virtualStart,a=this._virtualEnd,o=this._physicalCount,h=this._physicalTop+this._scrollOffset,d=this._physicalBottom+this._scrollOffset,c=this._scrollPosition,p=this._scrollBottom;for(i?(t=this._physicalStart,this._physicalEnd,e=c-h):(t=this._physicalEnd,this._physicalStart,e=d-p);s=this._getPhysicalSizeIncrement(t),e=e-s,!(r.length>=o||e<=n);)if(i){if(a+r.length+1>=this._virtualCount||h+s>=c-this._scrollOffset)break;r.push(t),h=h+s,t=(t+1)%o}else{if(l-r.length<=0||h+this._physicalSize-s<=p)break;r.push(t),h=h-s,t=t===0?o-1:t-1}return{indexes:r,physicalTop:h-this._scrollOffset}},_update:function(i,t){if(!(i&&i.length===0||this._physicalCount===0)){if(this._manageFocus(),this._assignModels(i),this._updateMetrics(i),t)for(;t.length;){var e=t.pop();this._physicalTop-=this._getPhysicalSizeIncrement(e)}this._positionItems(),this._updateScrollerSize()}},_isClientFull:function(){return this._scrollBottom!=0&&this._physicalBottom-1>=this._scrollBottom&&this._physicalTop<=this._scrollPosition},_increasePoolIfNeeded:function(i){var t=this._clamp(this._physicalCount+i,q1,this._virtualCount-this._virtualStart);if(t=this._convertIndexToCompleteRow(t),this.grid){var e=t%this._itemsPerRow;e&&t-e<=this._physicalCount&&(t+=this._itemsPerRow),t-=e}var s=t-this._physicalCount,r=Math.round(this._physicalCount*.5);if(!(s<0)){if(s>0){var n=window.performance.now();[].push.apply(this._physicalItems,this._createPool(s));for(var l=0;l<s;l++)this._physicalSizes.push(0);this._physicalCount=this._physicalCount+s,this._physicalStart>this._physicalEnd&&this._isIndexRendered(this._focusedVirtualIndex)&&this._getPhysicalIndex(this._focusedVirtualIndex)<this._physicalEnd&&(this._physicalStart=this._physicalStart+s),this._update(),this._templateCost=(window.performance.now()-n)/s,r=Math.round(this._physicalCount*.5)}this._virtualEnd>=this._virtualCount-1||r===0||(this._isClientFull()?this._physicalSize<this._optPhysicalSize&&this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,this._clamp(Math.round(50/this._templateCost),1,r)),z2):this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,r),W1))}},_render:function(){if(!(!this.isAttached||!this._isVisible))if(this._physicalCount!==0){var i=this._getReusables(!0);this._physicalTop=i.physicalTop,this._virtualStart=this._virtualStart+i.indexes.length,this._physicalStart=this._physicalStart+i.indexes.length,this._update(i.indexes),this._update(),this._increasePoolIfNeeded(0)}else this._virtualCount>0&&(this.updateViewportBoundaries(),this._increasePoolIfNeeded(q1))},_gridChanged:function(i,t){typeof t!="undefined"&&(this.notifyResize(),ct(),i&&this._updateGridMetrics())},_itemsChanged:function(i){if(i.path==="items")this._virtualStart=0,this._physicalTop=0,this._virtualCount=this.items?this.items.length:0,this._physicalIndexForKey={},this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,this._physicalCount=this._physicalCount||0,this._physicalItems=this._physicalItems||[],this._physicalSizes=this._physicalSizes||[],this._physicalStart=0,this._scrollTop>this._scrollOffset&&this._resetScrollPosition(0),this._removeFocusedItem(),this._debounce("_render",this._render,Ut);else if(i.path==="items.splices"){this._adjustVirtualIndex(i.value.indexSplices),this._virtualCount=this.items?this.items.length:0;var t=i.value.indexSplices.some(function(r){return r.addedCount>0||r.removed.length>0});if(t){var e=this._getActiveElement();this.contains(e)&&e.blur()}var s=i.value.indexSplices.some(function(r){return r.index+r.addedCount>=this._virtualStart&&r.index<=this._virtualEnd},this);(!this._isClientFull()||s)&&this._debounce("_render",this._render,Ut)}else i.path!=="items.length"&&this._forwardItemPath(i.path,i.value)},_iterateItems:function(i,t){var e,s,r,n;if(arguments.length===2&&t){for(n=0;n<t.length;n++)if(e=t[n],s=this._computeVidx(e),(r=i.call(this,e,s))!=null)return r}else{for(e=this._physicalStart,s=this._virtualStart;e<this._physicalCount;e++,s++)if((r=i.call(this,e,s))!=null)return r;for(e=0;e<this._physicalStart;e++,s++)if((r=i.call(this,e,s))!=null)return r}},_computeVidx:function(i){return i>=this._physicalStart?this._virtualStart+(i-this._physicalStart):this._virtualStart+(this._physicalCount-this._physicalStart)+i},_updateMetrics:function(i){ct();var t=0,e=0,s=this._physicalAverageCount,r=this._physicalAverage;this._iterateItems(function(n,l){e+=this._physicalSizes[n],this._physicalSizes[n]=this._physicalItems[n].offsetHeight,t+=this._physicalSizes[n],this._physicalAverageCount+=this._physicalSizes[n]?1:0},i),this.grid?(this._updateGridMetrics(),this._physicalSize=Math.ceil(this._physicalCount/this._itemsPerRow)*this._rowHeight):(e=this._itemsPerRow===1?e:Math.ceil(this._physicalCount/this._itemsPerRow)*this._rowHeight,this._physicalSize=this._physicalSize+t-e,this._itemsPerRow=1),this._physicalAverageCount!==s&&(this._physicalAverage=Math.round((r*s+t)/this._physicalAverageCount))},_updateGridMetrics:function(){this._itemWidth=this._physicalCount>0?this._physicalItems[0].getBoundingClientRect().width:200,this._rowHeight=this._physicalCount>0?this._physicalItems[0].offsetHeight:200,this._itemsPerRow=this._itemWidth?Math.floor(this._viewportWidth/this._itemWidth):this._itemsPerRow},_positionItems:function(){this._adjustScrollPosition();var i=this._physicalTop;if(this.grid){var t=this._itemsPerRow*this._itemWidth,e=(this._viewportWidth-t)/2;this._iterateItems(function(s,r){var n=r%this._itemsPerRow,l=Math.floor(n*this._itemWidth+e);this._isRTL&&(l=l*-1),this.translate3d(l+"px",i+"px",0,this._physicalItems[s]),this._shouldRenderNextRow(r)&&(i+=this._rowHeight)})}else{let s=[];this._iterateItems(function(r,n){let l=this._physicalItems[r];this.translate3d(0,i+"px",0,l),i+=this._physicalSizes[r];let a=l.id;a&&s.push(a)}),s.length&&this.setAttribute("aria-owns",s.join(" "))}},_getPhysicalSizeIncrement:function(i){return this.grid?this._computeVidx(i)%this._itemsPerRow!=this._itemsPerRow-1?0:this._rowHeight:this._physicalSizes[i]},_shouldRenderNextRow:function(i){return i%this._itemsPerRow==this._itemsPerRow-1},_adjustScrollPosition:function(){var i=this._virtualStart===0?this._physicalTop:Math.min(this._scrollPosition+this._physicalTop,0);if(i!==0){this._physicalTop=this._physicalTop-i;var t=this._scrollPosition;!F2&&t>0&&this._resetScrollPosition(t-i)}},_resetScrollPosition:function(i){this.scrollTarget&&i>=0&&(this._scrollTop=i,this._scrollPosition=this._scrollTop)},_updateScrollerSize:function(i){this.grid?this._estScrollHeight=this._virtualRowCount*this._rowHeight:this._estScrollHeight=this._physicalBottom+Math.max(this._virtualCount-this._physicalCount-this._virtualStart,0)*this._physicalAverage,i=i||this._scrollHeight===0,i=i||this._scrollPosition>=this._estScrollHeight-this._physicalSize,i=i||this.grid&&this.$.items.style.height<this._estScrollHeight,(i||Math.abs(this._estScrollHeight-this._scrollHeight)>=this._viewportHeight)&&(this.$.items.style.height=this._estScrollHeight+"px",this._scrollHeight=this._estScrollHeight)},scrollToIndex:function(i){if(!(typeof i!="number"||i<0||i>this.items.length-1)&&(ct(),this._physicalCount!==0)){i=this._clamp(i,0,this._virtualCount-1),(!this._isIndexRendered(i)||i>=this._maxVirtualStart)&&(this._virtualStart=this.grid?i-this._itemsPerRow*2:i-1),this._manageFocus(),this._assignModels(),this._updateMetrics(),this._physicalTop=Math.floor(this._virtualStart/this._itemsPerRow)*this._physicalAverage;for(var t=this._physicalStart,e=this._virtualStart,s=0,r=this._hiddenContentSize;e<i&&s<=r;)s=s+this._getPhysicalSizeIncrement(t),t=(t+1)%this._physicalCount,e++;this._updateScrollerSize(!0),this._positionItems(),this._resetScrollPosition(this._physicalTop+this._scrollOffset+s),this._increasePoolIfNeeded(0),this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null}},_resetAverage:function(){this._physicalAverage=0,this._physicalAverageCount=0},_resizeHandler:function(){this._debounce("_render",function(){this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,this._isVisible?(this.updateViewportBoundaries(),this.toggleScrollListener(!0),this._resetAverage(),this._render()):this.toggleScrollListener(!1)},Ut)},updateSizeForItem:function(i){return this.updateSizeForIndex(this.items.indexOf(i))},updateSizeForIndex:function(i){return this._isIndexRendered(i)&&(this._updateMetrics([this._getPhysicalIndex(i)]),this._positionItems()),null},_convertIndexToCompleteRow:function(i){return this._itemsPerRow=this._itemsPerRow||1,this.grid?Math.ceil(i/this._itemsPerRow)*this._itemsPerRow:i},_isIndexRendered:function(i){return i>=this._virtualStart&&i<=this._virtualEnd},_isIndexVisible:function(i){return i>=this.firstVisibleIndex&&i<=this.lastVisibleIndex},_getPhysicalIndex:function(i){return(this._physicalStart+(i-this._virtualStart))%this._physicalCount},_clamp:function(i,t,e){return Math.min(e,Math.max(t,i))},_debounce:function(i,t,e){this._debouncers=this._debouncers||{},this._debouncers[i]=he.debounce(this._debouncers[i],e,t.bind(this)),x2(this._debouncers[i])}},H2=1e5,hs=1e3,ds=class{constructor({createElements:t,updateElement:e,scrollTarget:s,scrollContainer:r,elementsContainer:n,reorderElements:l}){this.isAttached=!0,this._vidxOffset=0,this.createElements=t,this.updateElement=e,this.scrollTarget=s,this.scrollContainer=r,this.elementsContainer=n||r,this.reorderElements=l,this.__safari=/^((?!chrome|android).)*safari/i.test(navigator.userAgent),this.timeouts={SCROLL_REORDER:500,IGNORE_WHEEL:500},this.__resizeObserver=new ResizeObserver(()=>this._resizeHandler()),getComputedStyle(this.scrollTarget).overflow==="visible"&&(this.scrollTarget.style.overflow="auto"),getComputedStyle(this.scrollContainer).position==="static"&&(this.scrollContainer.style.position="relative"),this.__resizeObserver.observe(this.scrollTarget),this.scrollTarget.addEventListener("scroll",()=>this._scrollHandler()),this._scrollLineHeight=this._getScrollLineHeight(),this.scrollTarget.addEventListener("wheel",a=>this.__onWheel(a)),this.reorderElements&&(this.scrollTarget.addEventListener("mousedown",()=>this.__mouseDown=!0),this.scrollTarget.addEventListener("mouseup",()=>{this.__mouseDown=!1,this.__pendingReorder&&this.__reorderElements()}))}_manageFocus(){}_removeFocusedItem(){}get scrollOffset(){return 0}get adjustedFirstVisibleIndex(){return this.firstVisibleIndex+this._vidxOffset}get adjustedLastVisibleIndex(){return this.lastVisibleIndex+this._vidxOffset}scrollToIndex(t){if(typeof t!="number"||isNaN(t)||this.size===0||!this.scrollTarget.offsetHeight)return;t=this._clamp(t,0,this.size-1);let e=this.__getVisibleElements().length,s=Math.floor(t/this.size*this._virtualCount);this._virtualCount-s<e?(s=this._virtualCount-(this.size-t),this._vidxOffset=this.size-this._virtualCount):s<e?t<hs?(s=t,this._vidxOffset=0):(s=hs,this._vidxOffset=t-s):this._vidxOffset=t-s,this.__skipNextVirtualIndexAdjust=!0,super.scrollToIndex(s),this.firstVisibleIndex!==t-this._vidxOffset&&this._scrollTop<this._maxScrollTop&&!this.grid&&super.scrollToIndex(s),this._scrollHandler()}flush(){this.scrollTarget.offsetHeight!==0&&(this._resizeHandler(),ct(),this._scrollHandler(),this.__scrollReorderDebouncer&&this.__scrollReorderDebouncer.flush(),this.__debouncerWheelAnimationFrame&&this.__debouncerWheelAnimationFrame.flush())}update(t=0,e=this.size-1){this.__getVisibleElements().forEach(s=>{s.__virtualIndex>=t&&s.__virtualIndex<=e&&this.__updateElement(s,s.__virtualIndex)})}__updateElement(t,e){t.style.minHeight&&(t.style.minHeight=""),this.updateElement(t,e),t.offsetHeight===0&&(t.style.minHeight="200px")}__getIndexScrollOffset(t){let e=this.__getVisibleElements().find(s=>s.__virtualIndex===t);return e?this.scrollTarget.getBoundingClientRect().top-e.getBoundingClientRect().top:void 0}set size(t){if(t===this.size)return;let e,s;if(t>0&&(e=this.firstVisibleIndex+this._vidxOffset,s=this.__getIndexScrollOffset(e)),this.__size=t,this._itemsChanged({path:"items"}),ct(),t>0){e=Math.min(e,t-1),this.scrollToIndex(e);let r=this.__getIndexScrollOffset(e);s!==void 0&&r!==void 0&&(this._scrollTop+=s-r)}this.elementsContainer.children.length||requestAnimationFrame(()=>this._resizeHandler())}get size(){return this.__size}get _scrollTop(){return this.scrollTarget.scrollTop}set _scrollTop(t){this.scrollTarget.scrollTop=t}get items(){return{length:Math.min(this.size,H2)}}get offsetHeight(){return this.scrollTarget.offsetHeight}get $(){return{items:this.scrollContainer}}updateViewportBoundaries(){let t=window.getComputedStyle(this.scrollTarget);this._scrollerPaddingTop=this.scrollTarget===this?0:parseInt(t["padding-top"],10),this._isRTL=Boolean(t.direction==="rtl"),this._viewportWidth=this.elementsContainer.offsetWidth,this._viewportHeight=this.scrollTarget.offsetHeight,this._scrollPageHeight=this._viewportHeight-this._scrollLineHeight,this.grid&&this._updateGridMetrics()}setAttribute(){}_createPool(t){let e=this.createElements(t),s=document.createDocumentFragment();return e.forEach(r=>{r.style.position="absolute",s.appendChild(r),this.__resizeObserver.observe(r)}),this.elementsContainer.appendChild(s),e}_assignModels(t){this._iterateItems((e,s)=>{let r=this._physicalItems[e];r.hidden=s>=this.size,r.hidden||(r.__virtualIndex=s+(this._vidxOffset||0),this.__updateElement(r,r.__virtualIndex))},t)}_isClientFull(){return setTimeout(()=>this.__clientFull=!0),this.__clientFull||super._isClientFull()}translate3d(t,e,s,r){r.style.transform=`translateY(${e})`}toggleScrollListener(){}_scrollHandler(){this._adjustVirtualIndexOffset(this._scrollTop-(this.__previousScrollTop||0)),super._scrollHandler(),this.reorderElements&&(this.__scrollReorderDebouncer=he.debounce(this.__scrollReorderDebouncer,G1.after(this.timeouts.SCROLL_REORDER),()=>this.__reorderElements())),this.__previousScrollTop=this._scrollTop}__onWheel(t){if(t.ctrlKey||this._hasScrolledAncestor(t.target,t.deltaX,t.deltaY))return;let e=t.deltaY;if(t.deltaMode===WheelEvent.DOM_DELTA_LINE?e*=this._scrollLineHeight:t.deltaMode===WheelEvent.DOM_DELTA_PAGE&&(e*=this._scrollPageHeight),this._deltaYAcc=this._deltaYAcc||0,this._wheelAnimationFrame){this._deltaYAcc+=e,t.preventDefault();return}e+=this._deltaYAcc,this._deltaYAcc=0,this._wheelAnimationFrame=!0,this.__debouncerWheelAnimationFrame=he.debounce(this.__debouncerWheelAnimationFrame,Ut,()=>this._wheelAnimationFrame=!1);let s=Math.abs(t.deltaX)+Math.abs(e);this._canScroll(this.scrollTarget,t.deltaX,e)?(t.preventDefault(),this.scrollTarget.scrollTop+=e,this.scrollTarget.scrollLeft+=t.deltaX,this._hasResidualMomentum=!0,this._ignoreNewWheel=!0,this._debouncerIgnoreNewWheel=he.debounce(this._debouncerIgnoreNewWheel,G1.after(this.timeouts.IGNORE_WHEEL),()=>this._ignoreNewWheel=!1)):this._hasResidualMomentum&&s<=this._previousMomentum||this._ignoreNewWheel?t.preventDefault():s>this._previousMomentum&&(this._hasResidualMomentum=!1),this._previousMomentum=s}_hasScrolledAncestor(t,e,s){if(t===this.scrollTarget||t===this.scrollTarget.getRootNode().host)return!1;if(this._canScroll(t,e,s)&&["auto","scroll"].indexOf(getComputedStyle(t).overflow)!==-1)return!0;if(t!==this&&t.parentElement)return this._hasScrolledAncestor(t.parentElement,e,s)}_canScroll(t,e,s){return s>0&&t.scrollTop<t.scrollHeight-t.offsetHeight||s<0&&t.scrollTop>0||e>0&&t.scrollLeft<t.scrollWidth-t.offsetWidth||e<0&&t.scrollLeft>0}_getScrollLineHeight(){let t=document.createElement("div");t.style.fontSize="initial",t.style.display="none",document.body.appendChild(t);let e=window.getComputedStyle(t).fontSize;return document.body.removeChild(t),e?window.parseInt(e):void 0}__getVisibleElements(){return Array.from(this.elementsContainer.children).filter(t=>!t.hidden)}__reorderElements(){if(this.__mouseDown){this.__pendingReorder=!0;return}this.__pendingReorder=!1;let t=this._virtualStart+(this._vidxOffset||0),e=this.__getVisibleElements(),r=e.find(a=>a.contains(this.elementsContainer.getRootNode().activeElement)||a.contains(this.scrollTarget.getRootNode().activeElement))||e[0];if(!r)return;let n=r.__virtualIndex-t,l=e.indexOf(r)-n;if(l>0)for(let a=0;a<l;a++)this.elementsContainer.appendChild(e[a]);else if(l<0)for(let a=e.length+l;a<e.length;a++)this.elementsContainer.insertBefore(e[a],e[0]);if(this.__safari){let{transform:a}=this.scrollTarget.style;this.scrollTarget.style.transform="translateZ(0)",setTimeout(()=>this.scrollTarget.style.transform=a)}}_adjustVirtualIndexOffset(t){if(this._virtualCount>=this.size)this._vidxOffset=0;else if(this.__skipNextVirtualIndexAdjust){this.__skipNextVirtualIndexAdjust=!1;return}else if(Math.abs(t)>1e4){let e=this._scrollTop/(this.scrollTarget.scrollHeight-this.scrollTarget.offsetHeight),s=e*this.size;this._vidxOffset=Math.round(s-e*this._virtualCount)}else{let e=this._vidxOffset,s=hs,r=100;this._scrollTop===0?(this._vidxOffset=0,e!==this._vidxOffset&&super.scrollToIndex(0)):this.firstVisibleIndex<s&&this._vidxOffset>0&&(this._vidxOffset-=Math.min(this._vidxOffset,r),super.scrollToIndex(this.firstVisibleIndex+(e-this._vidxOffset)));let n=this.size-this._virtualCount;this._scrollTop>=this._maxScrollTop&&this._maxScrollTop>0?(this._vidxOffset=n,e!==this._vidxOffset&&super.scrollToIndex(this._virtualCount-1)):this.firstVisibleIndex>this._virtualCount-s&&this._vidxOffset<n&&(this._vidxOffset+=Math.min(n-this._vidxOffset,r),super.scrollToIndex(this.firstVisibleIndex-(this._vidxOffset-e)))}}};Object.setPrototypeOf(ds.prototype,A2);var Y1=class{constructor(t){this.__adapter=new ds(t)}set size(t){this.__adapter.size=t}get size(){return this.__adapter.size}scrollToIndex(t){this.__adapter.scrollToIndex(t)}update(t=0,e=this.size-1){this.__adapter.update(t,e)}flush(){this.__adapter.flush()}get firstVisibleIndex(){return this.__adapter.adjustedFirstVisibleIndex}get lastVisibleIndex(){return this.__adapter.adjustedLastVisibleIndex}};var C2=i=>class extends i{static get properties(){return{resizable:{type:Boolean,value:function(){if(this.localName==="vaadin-grid-column-group")return;let e=this.parentNode;return e&&e.localName==="vaadin-grid-column-group"&&e.resizable||!1}},frozen:{type:Boolean,value:!1},hidden:{type:Boolean,value:!1},header:{type:String},textAlign:{type:String},_lastFrozen:{type:Boolean,value:!1},_order:Number,_reorderStatus:Boolean,_emptyCells:Array,_headerCell:Object,_footerCell:Object,_grid:Object,__initialized:{type:Boolean,value:!0},headerRenderer:Function,_headerRenderer:{type:Function,computed:"_computeHeaderRenderer(headerRenderer, header, __initialized)"},footerRenderer:Function,_footerRenderer:{type:Function,computed:"_computeFooterRenderer(footerRenderer, __initialized)"},__gridColumnElement:{type:Boolean,value:!0}}}static get observers(){return["_widthChanged(width, _headerCell, _footerCell, _cells.*)","_frozenChanged(frozen, _headerCell, _footerCell, _cells.*)","_flexGrowChanged(flexGrow, _headerCell, _footerCell, _cells.*)","_textAlignChanged(textAlign, _cells.*, _headerCell, _footerCell)","_orderChanged(_order, _headerCell, _footerCell, _cells.*)","_lastFrozenChanged(_lastFrozen)","_onRendererOrBindingChanged(_renderer, _cells, _cells.*, path)","_onHeaderRendererOrBindingChanged(_headerRenderer, _headerCell, path, header)","_onFooterRendererOrBindingChanged(_footerRenderer, _footerCell)","_resizableChanged(resizable, _headerCell)","_reorderStatusChanged(_reorderStatus, _headerCell, _footerCell, _cells.*)","_hiddenChanged(hidden, _headerCell, _footerCell, _cells.*)"]}connectedCallback(){super.connectedCallback(),requestAnimationFrame(()=>{!this._grid||this._allCells.forEach(e=>{e._content.parentNode||this._grid.appendChild(e._content)})})}disconnectedCallback(){super.disconnectedCallback(),requestAnimationFrame(()=>{this._grid||this._allCells.forEach(e=>{e._content.parentNode&&e._content.parentNode.removeChild(e._content)})}),this._gridValue=void 0}ready(){super.ready(),T1(this)}_findHostGrid(){let e=this;for(;e&&!/^vaadin.*grid(-pro)?$/.test(e.localName);)e=e.assignedSlot?e.assignedSlot.parentNode:e.parentNode;return e||void 0}get _grid(){return this._gridValue||(this._gridValue=this._findHostGrid()),this._gridValue}get _allCells(){return[].concat(this._cells||[]).concat(this._emptyCells||[]).concat(this._headerCell).concat(this._footerCell).filter(e=>e)}_renderHeaderAndFooter(){this._renderHeaderCellContent(this._headerRenderer,this._headerCell),this._renderFooterCellContent(this._footerRenderer,this._footerCell)}_flexGrowChanged(e){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("flexGrow"),this._allCells.forEach(s=>s.style.flexGrow=e)}_orderChanged(e){this._allCells.forEach(s=>s.style.order=e)}_widthChanged(e){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("width"),this._allCells.forEach(s=>s.style.width=e),this._grid&&this._grid.__forceReflow&&this._grid.__forceReflow()}_frozenChanged(e){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("frozen",e),this._allCells.forEach(s=>this._toggleAttribute("frozen",e,s)),this._grid&&this._grid._frozenCellsChanged&&this._grid._frozenCellsChanged()}_lastFrozenChanged(e){this._allCells.forEach(s=>this._toggleAttribute("last-frozen",e,s)),this.parentElement&&this.parentElement._columnPropChanged&&(this.parentElement._lastFrozen=e)}_generateHeader(e){return e.substr(e.lastIndexOf(".")+1).replace(/([A-Z])/g,"-$1").toLowerCase().replace(/-/g," ").replace(/^./,s=>s.toUpperCase())}_toggleAttribute(e,s,r){r.hasAttribute(e)===!s&&(s?r.setAttribute(e,""):r.removeAttribute(e))}_reorderStatusChanged(e){this._allCells.forEach(s=>s.setAttribute("reorder-status",e))}_resizableChanged(e,s){e===void 0||s===void 0||s&&[s].concat(this._emptyCells).forEach(r=>{if(r){let n=r.querySelector('[part~="resize-handle"]');if(n&&r.removeChild(n),e){let l=document.createElement("div");l.setAttribute("part","resize-handle"),r.appendChild(l)}}})}_textAlignChanged(e){if(e===void 0)return;if(["start","end","center"].indexOf(e)===-1){console.warn('textAlign can only be set as "start", "end" or "center"');return}let s;getComputedStyle(this._grid).direction==="ltr"?e==="start"?s="left":e==="end"&&(s="right"):e==="start"?s="right":e==="end"&&(s="left"),this._allCells.forEach(r=>{r._content.style.textAlign=e,getComputedStyle(r._content).textAlign!==e&&(r._content.style.textAlign=s)})}_hiddenChanged(e){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("hidden",e),!!e!=!!this._previousHidden&&this._grid&&(e===!0&&this._allCells.forEach(s=>{s._content.parentNode&&s._content.parentNode.removeChild(s._content)}),this._grid._debouncerHiddenChanged=G.debounce(this._grid._debouncerHiddenChanged,ki,()=>{this._grid&&this._grid._renderColumnTree&&this._grid._renderColumnTree(this._grid._columnTree)}),this._grid._updateLastFrozen&&this._grid._updateLastFrozen(),this._grid.notifyResize&&this._grid.notifyResize(),this._grid._resetKeyboardNavigation&&this._grid._resetKeyboardNavigation()),this._previousHidden=e}_runRenderer(e,s,r){let n=[s._content,this];r&&r.item&&n.push(r),e.apply(this,n)}__renderCellsContent(e,s){this.hidden||!this._grid||s.forEach(r=>{let n=this._grid.__getRowModel(r.parentElement);!e||(r._renderer!==e&&this._clearCellContent(r),r._renderer=e,(n.item||e===this._headerRenderer||e===this._footerRenderer)&&this._runRenderer(e,r,n))})}_clearCellContent(e){e._content.innerHTML="",delete e._content._$litPart$}_renderHeaderCellContent(e,s){!s||!e||(this.__renderCellsContent(e,[s]),this._grid.__updateHeaderFooterRowVisibility(s.parentElement))}_onHeaderRendererOrBindingChanged(e,s,...r){this._renderHeaderCellContent(e,s)}_renderBodyCellsContent(e,s){!s||!e||this.__renderCellsContent(e,s)}_onRendererOrBindingChanged(e,s,...r){this._renderBodyCellsContent(e,s)}_renderFooterCellContent(e,s){!s||!e||(this.__renderCellsContent(e,[s]),this._grid.__updateHeaderFooterRowVisibility(s.parentElement))}_onFooterRendererOrBindingChanged(e,s){this._renderFooterCellContent(e,s)}__setTextContent(e,s){e.textContent!==s&&(e.textContent=s)}__textHeaderRenderer(){this.__setTextContent(this._headerCell._content,this.header)}_defaultHeaderRenderer(){!this.path||this.__setTextContent(this._headerCell._content,this._generateHeader(this.path))}_defaultRenderer(e,s,{item:r}){!this.path||this.__setTextContent(e,this.get(this.path,r))}_defaultFooterRenderer(){}_computeHeaderRenderer(e,s){return e||(s!=null?this.__textHeaderRenderer:this._defaultHeaderRenderer)}_computeRenderer(e){return e||this._defaultRenderer}_computeFooterRenderer(e){return e||this._defaultFooterRenderer}},cs=class extends C2(D1(Lt)){static get is(){return"vaadin-grid-column"}static get properties(){return{width:{type:String,value:"100px"},flexGrow:{type:Number,value:1},renderer:Function,_renderer:{type:Function,computed:"_computeRenderer(renderer, __initialized)"},path:{type:String},autoWidth:{type:Boolean,value:!1},_cells:Array}}};customElements.define(cs.is,cs);_e("vaadin-grid",z`
    @keyframes vaadin-grid-appear {
      to {
        opacity: 1;
      }
    }

    :host {
      display: block;
      animation: 1ms vaadin-grid-appear;
      height: 400px;
      flex: 1 1 auto;
      align-self: stretch;
      position: relative;
    }

    :host([hidden]) {
      display: none !important;
    }

    #scroller {
      display: block;
      transform: translateY(0);
      width: auto;
      height: auto;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }

    :host([all-rows-visible]) {
      height: auto;
      align-self: flex-start;
      flex-grow: 0;
      width: 100%;
    }

    :host([all-rows-visible]) #scroller {
      width: 100%;
      height: 100%;
      position: relative;
    }

    :host([all-rows-visible]) #items {
      min-height: 1px;
    }

    #table {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      overflow: auto;
      position: relative;
      outline: none;
      /* Workaround for a Desktop Safari bug: new stacking context here prevents the scrollbar from getting hidden */
      z-index: 0;
    }

    #header,
    #footer {
      display: block;
      position: -webkit-sticky;
      position: sticky;
      left: 0;
      overflow: visible;
      width: 100%;
      z-index: 1;
    }

    #header {
      top: 0;
    }

    th {
      text-align: inherit;
    }

    /* Safari doesn't work with "inherit" */
    [safari] th {
      text-align: initial;
    }

    #footer {
      bottom: 0;
    }

    #items {
      flex-grow: 1;
      flex-shrink: 0;
      display: block;
      position: -webkit-sticky;
      position: sticky;
      width: 100%;
      left: 0;
      overflow: visible;
    }

    [part~='row'] {
      display: flex;
      width: 100%;
      box-sizing: border-box;
      margin: 0;
    }

    [part~='row'][loading] [part~='body-cell'] ::slotted(vaadin-grid-cell-content) {
      opacity: 0;
    }

    #items [part~='row'] {
      position: absolute;
    }

    #items [part~='row']:empty {
      height: 100%;
    }

    [part~='cell']:not([part~='details-cell']) {
      flex-shrink: 0;
      flex-grow: 1;
      box-sizing: border-box;
      display: flex;
      width: 100%;
      position: relative;
      align-items: center;
      padding: 0;
      white-space: nowrap;
    }

    [part~='details-cell'] {
      position: absolute;
      bottom: 0;
      width: 100%;
      box-sizing: border-box;
      padding: 0;
    }

    [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      display: block;
      width: 100%;
      box-sizing: border-box;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    [hidden] {
      display: none !important;
    }

    [frozen] {
      z-index: 2;
      will-change: transform;
    }

    [no-scrollbars][safari] #table,
    [no-scrollbars][firefox] #table {
      overflow: hidden;
    }

    /* Reordering styles */
    :host([reordering]) [part~='cell'] ::slotted(vaadin-grid-cell-content),
    :host([reordering]) [part~='resize-handle'],
    #scroller[no-content-pointer-events] [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      pointer-events: none;
    }

    [part~='reorder-ghost'] {
      visibility: hidden;
      position: fixed;
      pointer-events: none;
      opacity: 0.5;

      /* Prevent overflowing the grid in Firefox */
      top: 0;
      left: 0;
    }

    :host([reordering]) {
      -moz-user-select: none;
      -webkit-user-select: none;
      user-select: none;
    }

    /* Resizing styles */
    [part~='resize-handle'] {
      position: absolute;
      top: 0;
      right: 0;
      height: 100%;
      cursor: col-resize;
      z-index: 1;
    }

    [part~='resize-handle']::before {
      position: absolute;
      content: '';
      height: 100%;
      width: 35px;
      transform: translateX(-50%);
    }

    [last-column] [part~='resize-handle']::before,
    [last-frozen] [part~='resize-handle']::before {
      width: 18px;
      transform: none;
      right: 0;
    }

    #scroller[column-resizing] {
      -ms-user-select: none;
      -moz-user-select: none;
      -webkit-user-select: none;
      user-select: none;
    }

    /* Sizer styles */
    #sizer {
      display: flex;
      position: absolute;
      visibility: hidden;
    }

    #sizer [part~='details-cell'] {
      display: none !important;
    }

    #sizer [part~='cell'][hidden] {
      display: none !important;
    }

    #sizer [part~='cell'] {
      display: block;
      flex-shrink: 0;
      line-height: 0;
      height: 0 !important;
      min-height: 0 !important;
      max-height: 0 !important;
      padding: 0 !important;
      border: none !important;
    }

    #sizer [part~='cell']::before {
      content: '-';
    }

    #sizer [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      display: none !important;
    }

    /* RTL specific styles */

    :host([dir='rtl']) #items,
    :host([dir='rtl']) #header,
    :host([dir='rtl']) #footer {
      left: auto;
    }

    :host([dir='rtl']) [part~='reorder-ghost'] {
      left: auto;
      right: 0;
    }

    :host([dir='rtl']) [part~='resize-handle'] {
      left: 0;
      right: auto;
    }

    :host([dir='rtl']) [part~='resize-handle']::before {
      transform: translateX(50%);
    }

    :host([dir='rtl']) [last-column] [part~='resize-handle']::before,
    :host([dir='rtl']) [last-frozen] [part~='resize-handle']::before {
      left: 0;
      right: auto;
    }
  `,{moduleId:"vaadin-grid-styles"});var S2=(()=>{try{return document.createEvent("TouchEvent"),!0}catch(i){return!1}})(),us=class extends P1(H1(Qo(Jo(l2(qo(c2(u2(p2(h2(m2(Wo(o2(_2(Xo(a2(g2(f2(Lt)))))))))))))))))){static get template(){return g1`
      <div
        id="scroller"
        safari$="[[_safari]]"
        ios$="[[_ios]]"
        loading$="[[loading]]"
        column-reordering-allowed$="[[columnReorderingAllowed]]"
      >
        <table id="table" role="grid" aria-multiselectable="true" tabindex="0">
          <caption id="sizer" part="row"></caption>
          <thead id="header" role="rowgroup"></thead>
          <tbody id="items" role="rowgroup"></tbody>
          <tfoot id="footer" role="rowgroup"></tfoot>
        </table>

        <div part="reorder-ghost"></div>
      </div>

      <div id="focusexit" tabindex="0"></div>
    `}static get is(){return"vaadin-grid"}static get version(){return"21.0.0"}static get observers(){return["_columnTreeChanged(_columnTree, _columnTree.*)","_effectiveSizeChanged(_effectiveSize, __virtualizer, _hasData, _columnTree)"]}static get properties(){return{_safari:{type:Boolean,value:/^((?!chrome|android).)*safari/i.test(navigator.userAgent)},_ios:{type:Boolean,value:/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1},_firefox:{type:Boolean,value:navigator.userAgent.toLowerCase().indexOf("firefox")>-1},_android:{type:Boolean,value:/android/i.test(navigator.userAgent)},_touchDevice:{type:Boolean,value:S2},allRowsVisible:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_allRowsVisibleChanged"},_recalculateColumnWidthOnceLoadingFinished:{type:Boolean,value:!0},isAttached:{value:!1},__gridElement:{type:Boolean,value:!0}}}constructor(){super();this.addEventListener("animationend",this._onAnimationEnd)}connectedCallback(){super.connectedCallback(),this.isAttached=!0,this.recalculateColumnWidths()}disconnectedCallback(){super.disconnectedCallback(),this.isAttached=!1}__getFirstVisibleItem(){return this._getVisibleRows().find(t=>this._isInViewport(t))}get _firstVisibleIndex(){let t=this.__getFirstVisibleItem();return t?t.index:void 0}__getLastVisibleItem(){return this._getVisibleRows().reverse().find(t=>this._isInViewport(t))}get _lastVisibleIndex(){let t=this.__getLastVisibleItem();return t?t.index:void 0}_isInViewport(t){let e=this.$.table.getBoundingClientRect(),s=t.getBoundingClientRect(),r=this.$.header.getBoundingClientRect().height,n=this.$.footer.getBoundingClientRect().height;return s.bottom>e.top+r&&s.top<e.bottom-n}_getVisibleRows(){return Array.from(this.$.items.children).filter(t=>!t.hidden).sort((t,e)=>t.index-e.index)}ready(){super.ready(),this.__virtualizer=new Y1({createElements:this._createScrollerRows.bind(this),updateElement:this._updateScrollerItem.bind(this),scrollContainer:this.$.items,scrollTarget:this.$.table,reorderElements:!0}),new ResizeObserver(()=>setTimeout(()=>this.__updateFooterPositioning())).observe(this.$.footer),T1(this)}attributeChangedCallback(t,e,s){super.attributeChangedCallback(t,e,s),t==="dir"&&(this.__isRTL=s==="rtl",this._updateScrollerMeasurements())}__getBodyCellCoordinates(t){if(this.$.items.contains(t)&&t.localName==="td")return{item:t.parentElement._item,column:t._column}}__focusBodyCell({item:t,column:e}){let s=this._getVisibleRows().find(n=>n._item===t),r=s&&[...s.children].find(n=>n._column===e);r&&r.focus()}_effectiveSizeChanged(t,e,s,r){if(e&&s&&r){let n=this.shadowRoot.activeElement,l=this.__getBodyCellCoordinates(n);e.size=t,e.flush(),l&&n.parentElement.hidden&&this.__focusBodyCell(l)}}__hasRowsWithClientHeight(){return!!Array.from(this.$.items.children).filter(t=>t.clientHeight).length}__itemsReceived(){this._recalculateColumnWidthOnceLoadingFinished&&!this._cache.isLoading()&&this.__hasRowsWithClientHeight()&&(this._recalculateColumnWidthOnceLoadingFinished=!1,this.recalculateColumnWidths())}_recalculateColumnWidths(t){t.forEach(e=>{e.width="auto",e._origFlexGrow=e.flexGrow,e.flexGrow=0}),t.forEach(e=>{e._currentWidth=0,e._allCells.filter(s=>!this.$.items.contains(s)||this._isInViewport(s.parentElement)).forEach(s=>{let r=s.offsetWidth+1;e._currentWidth=Math.max(e._currentWidth,r)})}),t.forEach(e=>{e.width=`${e._currentWidth}px`,e.flexGrow=e._origFlexGrow,e._currentWidth=void 0,e._origFlexGrow=void 0})}recalculateColumnWidths(){if(!!this._columnTree)if(this._cache.isLoading())this._recalculateColumnWidthOnceLoadingFinished=!0;else{let t=this._getColumns().filter(e=>!e.hidden&&e.autoWidth);this._recalculateColumnWidths(t)}}_createScrollerRows(t){let e=[];for(let s=0;s<t;s++){let r=document.createElement("tr");r.setAttribute("part","row"),r.setAttribute("role","row"),this._columnTree&&this._updateRow(r,this._columnTree[this._columnTree.length-1],"body",!1,!0),e.push(r)}return this._columnTree&&this._columnTree[this._columnTree.length-1].forEach(s=>s.isConnected&&s.notifyPath&&s.notifyPath("_cells.*",s._cells)),Go(this,()=>{this._updateFirstAndLastColumn(),this._resetKeyboardNavigation(),this._afterScroll(),this.__itemsReceived()}),e}_createCell(t){let e=this._contentIndex=this._contentIndex+1||0,s="vaadin-grid-cell-content-"+e,r=document.createElement("vaadin-grid-cell-content");r.setAttribute("slot",s);let n=document.createElement(t);n.id=s.replace("-content-","-"),n.setAttribute("tabindex","-1"),n.setAttribute("role",t==="td"?"gridcell":"columnheader");let l=document.createElement("slot");return l.setAttribute("name",s),n.appendChild(l),n._content=r,r.addEventListener("mousedown",()=>{if(window.chrome){let a=()=>{r.contains(this.getRootNode().activeElement)||n.focus(),document.removeEventListener("mouseup",a,!0)};document.addEventListener("mouseup",a,!0)}else setTimeout(()=>{r.contains(this.getRootNode().activeElement)||n.focus()})}),n}_updateRow(t,e,s,r,n){s=s||"body";let l=document.createDocumentFragment();Array.from(t.children).forEach(a=>a._vacant=!0),t.innerHTML="",e.filter(a=>!a.hidden).forEach((a,o,h)=>{let d;if(s==="body"){if(a._cells=a._cells||[],d=a._cells.filter(c=>c._vacant)[0],d||(d=this._createCell("td"),a._cells.push(d)),d.setAttribute("part","cell body-cell"),t.appendChild(d),o===h.length-1&&this.rowDetailsRenderer){this._detailsCells=this._detailsCells||[];let c=this._detailsCells.filter(p=>p._vacant)[0]||this._createCell("td");this._detailsCells.indexOf(c)===-1&&this._detailsCells.push(c),c._content.parentElement||l.appendChild(c._content),this._configureDetailsCell(c),t.appendChild(c),this._a11ySetRowDetailsCell(t,c),c._vacant=!1}a.notifyPath&&!n&&a.notifyPath("_cells.*",a._cells)}else{let c=s==="header"?"th":"td";r||a.localName==="vaadin-grid-column-group"?(d=a[`_${s}Cell`]||this._createCell(c),d._column=a,t.appendChild(d),a[`_${s}Cell`]=d):(a._emptyCells=a._emptyCells||[],d=a._emptyCells.filter(p=>p._vacant)[0]||this._createCell(c),d._column=a,t.appendChild(d),a._emptyCells.indexOf(d)===-1&&a._emptyCells.push(d)),d.setAttribute("part",`cell ${s}-cell`),this.__updateHeaderFooterRowVisibility(t)}d._content.parentElement||l.appendChild(d._content),d._vacant=!1,d._column=a}),this.appendChild(l),this._frozenCellsChanged(),this._updateFirstAndLastColumnForRow(t)}__updateHeaderFooterRowVisibility(t){if(!t)return;let e=Array.from(t.children).filter(s=>{let r=s._column;if(r._emptyCells&&r._emptyCells.indexOf(s)>-1)return!1;if(t.parentElement===this.$.header){if(r.headerRenderer)return!0;if(r.header===null)return!1;if(r.path||r.header!==void 0)return!0}else if(r.footerRenderer)return!0});t.hidden!==!e.length&&(t.hidden=!e.length,this.notifyResize())}_updateScrollerItem(t,e){this._preventScrollerRotatingCellFocus(t,e),!!this._columnTree&&(this._toggleAttribute("first",e===0,t),this._toggleAttribute("odd",e%2,t),this._a11yUpdateRowRowindex(t,e),this._getItem(e,t))}_columnTreeChanged(t){this._renderColumnTree(t),this.recalculateColumnWidths()}_renderColumnTree(t){for(Array.from(this.$.items.children).forEach(e=>this._updateRow(e,t[t.length-1],null,!1,!0));this.$.header.children.length<t.length;){let e=document.createElement("tr");e.setAttribute("part","row"),e.setAttribute("role","row"),this.$.header.appendChild(e);let s=document.createElement("tr");s.setAttribute("part","row"),s.setAttribute("role","row"),this.$.footer.appendChild(s)}for(;this.$.header.children.length>t.length;)this.$.header.removeChild(this.$.header.firstElementChild),this.$.footer.removeChild(this.$.footer.firstElementChild);Array.from(this.$.header.children).forEach((e,s)=>this._updateRow(e,t[s],"header",s===t.length-1)),Array.from(this.$.footer.children).forEach((e,s)=>this._updateRow(e,t[t.length-1-s],"footer",s===0)),this._updateRow(this.$.sizer,t[t.length-1]),this._resizeHandler(),this._frozenCellsChanged(),this._updateFirstAndLastColumn(),this._resetKeyboardNavigation(),this._a11yUpdateHeaderRows(),this._a11yUpdateFooterRows(),this.__updateFooterPositioning()}__updateFooterPositioning(){this._firefox&&(this.$.items.style.paddingBottom=0,this.allRowsVisible||(this.$.items.style.paddingBottom=`${this.$.footer.offsetHeight}px`))}_updateItem(t,e){t._item=e;let s=this.__getRowModel(t);this._toggleDetailsCell(t,s.detailsOpened),this._a11yUpdateRowLevel(t,s.level),this._a11yUpdateRowSelected(t,s.selected),this._a11yUpdateRowDetailsOpened(t,s.detailsOpened),this._toggleAttribute("expanded",s.expanded,t),this._toggleAttribute("selected",s.selected,t),this._toggleAttribute("details-opened",s.detailsOpened,t),this._generateCellClassNames(t,s),this._filterDragAndDrop(t,s),Array.from(t.children).forEach(r=>{if(r._renderer){let n=r._column||this;r._renderer.call(n,r._content,n,s)}}),this._updateDetailsCellHeight(t)}_resizeHandler(){this._updateDetailsCellHeights(),this._updateScrollerMeasurements(),this.__updateFooterPositioning()}_onAnimationEnd(t){t.animationName.indexOf("vaadin-grid-appear")===0&&(t.stopPropagation(),this.notifyResize(),this.__itemsReceived(),requestAnimationFrame(()=>{this.__scrollToPendingIndex(),this.$.table.style.webkitOverflowScrolling="touch"}))}_toggleAttribute(t,e,s){s.hasAttribute(t)===!e&&(e?s.setAttribute(t,""):s.removeAttribute(t))}__getRowModel(t){return{index:t.index,item:t._item,level:this._getIndexLevel(t.index),expanded:this._isExpanded(t._item),selected:this._isSelected(t._item),detailsOpened:!!this.rowDetailsRenderer&&this._isDetailsOpened(t._item)}}requestContentUpdate(){this._columnTree&&(this._columnTree.forEach(t=>{t.forEach(e=>{e._renderHeaderAndFooter()})}),this.__updateVisibleRows())}render(){console.warn("WARNING: Since Vaadin 21, render() is deprecated. Please use requestContentUpdate() instead."),this.requestContentUpdate()}__updateVisibleRows(t,e){this.__virtualizer&&this.__virtualizer.update(t,e)}notifyResize(){}_allRowsVisibleChanged(t,e){(t||e)&&this.notifyResize()}__forceReflow(){this._debouncerForceReflow=G.debounce(this._debouncerForceReflow,ki,()=>{this.$.scroller.style.overflow="hidden",setTimeout(()=>this.$.scroller.style.overflow="")})}};customElements.define(us.is,us);var D2=Object.defineProperty,E2=Object.getOwnPropertyDescriptor,y=(i,t,e,s)=>{for(var r=s>1?void 0:s?E2(t,e):t,n=i.length-1,l;n>=0;n--)(l=i[n])&&(r=(s?l(t,e,r):l(r))||r);return s&&r&&D2(t,e,r),r},qt=/\s*[a-zA-CE-Z_]\w*\s*/,P2=/.*/,B2=/a^/;var k2=i=>{if(console.log(i),i?.type==="DataFrame"||i?.type==="Series"){let t=null;if(i?.type==="DataFrame")t=JSON.parse(i.to_json(void 0,"records"));else{let e=JSON.parse(i.to_json(void 0,"split"));t=e.data.map(s=>({[e.name]:s}))}return t.map(e=>Object.fromEntries(Object.entries(e).map(([s,r])=>[s.replace(/\./g,"․"),r])))}else return i?.$$?.type==="PyProxy"?i.__repr__():i},R=class extends C{constructor(){super(...arguments);this.statements=[],this.availablePresets=I,this.scenarioContinueSelector=null,this.datasetsHidden=!1,this.scenarioStep=-1,this.scenarioStopped=!1,this.exitDismissed=!1,this.emitNextScenario=()=>{this.dispatchEvent(new CustomEvent("nextScenario",{bubbles:!0,composed:!0}))},this.querySelectorAllNodes=i=>[...this.shadowRoot.querySelectorAll(i),...[...this.operationNodes].flatMap(t=>[...t.shadowRoot.querySelectorAll(i)])],this.getOperationNode=i=>this.shadowRoot.querySelector(`[id='${i}']`),this.resetScenario=()=>{this.explainer=null,this.statements=[],this.scenarioStep=-1,this.scenarioStopped=!1,this.exitDismissed=!1,this.scenarioContinueSelector=null},this.stepScenario=async()=>{if(this.scenarioStep=this.scenarioStep+1,await Promise.all([...this.operationNodes].map(i=>i.updateComplete)),await this.updateComplete,this.scenarioStep<this.scenario.program.length){let i=this.scenario.program[this.scenarioStep];this.scenarioContinueSelector=await i(this),[...this.operationNodes].forEach(t=>t.recognizePreset()),this.scenarioContinueSelector===null&&await this.stepScenario()}else this.stopScenario()},this.stopScenario=()=>{let i=this.querySelectorAllNodes(this.scenarioContinueSelector);for(let t of i)"disabled"in t&&(t.disabled=!1);this.scenarioStopped=!0,this.scenarioContinueSelector=null},this.skipScenario=async()=>{for(let i=0;i<=this.scenario.program.length;i++)await this.stepScenario();window.scrollTo(0,0)},this.insertStatementButton=(i=0)=>m`<button
      class="insert"
      id=insert${i}
      .statements=${this.statements}
      ?disabled=${!this.scenario.isSandbox&&!this.exitDismissed}
      @click=${async t=>{this.insertStatement(["",""],i),await this.updateComplete,(this.getOperationNode(i+1)??this.getOperationNode(0)).focus()}}>
      <ion-icon style="pointer-events: none;" name="add-circle-outline"></ion-icon>
    </button>`,this.statementToNode=(i,t)=>{let[e,s]=i;return m`<dm-python-operation-node
      class="fade-in"
      id=${t}
      ?disabled=${!this.scenario.isSandbox&&!this.exitDismissed}
      .statement=${i}
      identifier=${e}
      expression=${s}
      .presets=${this.availablePresets}
      .pyodide=${this.pyodide}
      .lang=${this.lang}
      @identifierChange=${r=>this.setIdentifier(r.target.identifier,t)}
      @expressionChange=${r=>this.setExpression(r.target.expression,t)}
      @selectPrevious=${r=>this.getOperationNode(parseInt(r.target.id)-1)?.focus()}
      @selectNext=${r=>this.getOperationNode(parseInt(r.target.id)+1)?.focus()}
      @remove=${r=>this.removeStatement(t)}>
    </dm-python-operation-node>
    ${this.insertStatementButton(t)}
    `},this.skipButton=(i=!1,t=!0)=>m`<button title=${g[this.lang].skip} ?disabled=${!this.pyodide||t&&(this.scenarioStopped||this.scenarioStep===-1)} @click=${this.skipScenario}>
      <ion-icon style="pointer-events: none;" name="play-forward-circle-outline"></ion-icon>
      ${i?g[this.lang].choiceSkip:null}
    </button>`,this.playButton=(i=!1)=>m`<button title=${g[this.lang].play} ?disabled=${!this.pyodide} @click=${this.stepScenario}>
      <ion-icon style="pointer-events: none;" name="play-circle-outline"></ion-icon>
      ${i?g[this.lang].choicePlay:null}
    </button>`,this.experimentButton=()=>m`<button title=${g[this.lang].choiceExperimentElaborate} @click=${()=>this.exitDismissed=!0}>
      <ion-icon style="pointer-events: none;" name="flask-outline"></ion-icon>
      ${g[this.lang].choiceExperiment}
    </button>`,this.nextButton=()=>m`<button title=${g[this.lang].choiceNext} @click=${this.emitNextScenario}>
      <ion-icon style="pointer-events: none;" name="arrow-forward-circle-outline"></ion-icon>
      ${g[this.lang].choiceNext}
    </button>`}get sandboxExplainer(){return m`
    <span class="sign">★</span>
    <span class="text">${g[this.lang].sandboxExplainer}</span>
    `}firstUpdated(){this.explainer=this.scenario.isSandbox?this.sandboxExplainer:null}async updated(i){if(await Promise.all([...this.operationNodes].map(t=>t.updateComplete)),this.scenarioContinueSelector){let t=this.querySelectorAllNodes(this.scenarioContinueSelector).flatMap(e=>["identifier","expression"].includes(e.name)?[e,e.nextElementSibling]:[e]);for(let e of t)"disabled"in e&&(e.disabled=!1),e.addEventListener("mousedown",this.stepScenario,!0),e.classList.add("continue")}if(i.has("scenarioContinueSelector")){let t=i.get("scenarioContinueSelector"),e=this.querySelectorAllNodes(t).flatMap(s=>["identifier","expression"].includes(s.name)?[s,s.nextElementSibling]:[s]);for(let s of e)"disabled"in s&&(s.disabled=!0),s.removeEventListener("mousedown",this.stepScenario,!0),s.classList.remove("continue")}else i.has("lang")&&(this.resetScenario(),this.explainer=this.scenario.isSandbox?this.sandboxExplainer:null)}setIdentifier(i,t){let e=[...this.statements];e[t]=[i,this.statements[t][1]],this.statements=e}setExpression(i,t){let e=[...this.statements];e[t]=[this.statements[t][0],i],this.statements=e}removeStatement(i){let t=[...this.statements],[e]=t.splice(i,1)[0];try{this.pyodide.globals.delete(e)}catch(s){}this.statements=t}insertStatement(i,t=this.statements.length-1){let e=[...this.statements];e.splice(t+1,0,i),this.statements=e}get statementList(){return this.statements.length>0?this.statements.map(this.statementToNode):this.insertStatementButton()}get resetButton(){return m`<button title=${g[this.lang].reset} ?disabled=${this.scenarioStep===-1} @click=${this.resetScenario}>
      <ion-icon style="pointer-events: none;" name="play-back-circle-outline"></ion-icon>
    </button>`}get stopButton(){return m`<button title=${g[this.lang].stop} ?disabled=${this.scenarioStopped||this.scenarioStep===-1} @click=${this.stopScenario}>
      <ion-icon style="pointer-events: none;" name="stop-circle-outline"></ion-icon>
    </button>`}render(){return m`
      <header>
        <span id="explainer">${this.explainer}</span>
        ${!this.datasetsHidden&&this.scenarioStep>-1||this.scenario.isSandbox?m`<dm-dataset-list .datasets=${this.scenario.datasets} lang=${this.lang}></dm-dataset-list>`:null}
        <nav>
          ${!this.scenario.isSandbox&&this.scenarioStep>-1?this.resetButton:null}
          ${!this.scenario.isSandbox&&this.scenarioStep>-1?this.stopButton:null}
          ${!this.scenario.isSandbox&&this.scenarioStep>-1?this.skipButton():null}
        </nav>
      </header>
      <div id="play-or-skip">
        ${this.scenarioStopped||this.scenario.isSandbox||this.scenarioStep>-1?null:this.playButton(!0)}
        ${this.scenarioStopped||this.scenario.isSandbox||this.scenarioStep>-1?null:this.skipButton(!0,!1)}
      </div>
      <div id="statements">
        ${this.statementList}
      </div>
      <div id="experiment-or-next">
        ${!this.exitDismissed&&this.scenarioStopped?this.experimentButton():null}
        ${!this.exitDismissed&&this.scenarioStopped?this.nextButton():null}
      </div>
    `}};R.styles=z`
    :host, #statements {
      display: flex;
      flex-direction: column;
    }

    :host {
      gap: 0.5rem;
      font-family: 'Segoe UI', Tahoma, Verdana, sans-serif;
    }

    header {
      display: flex;
      margin-left: 32px;
      flex-direction: row;
      justify-content: flex-end;
      margin-bottom: 10px;
    }

    header > #explainer {
      flex-grow: 1;
    }

    header > dm-dataset-list {
      flex-grow: 1;
      flex-shrink: 0;
      justify-content: flex-end;
      align-items: center;
      flex-wrap: wrap;
      gap: 0;
      column-gap: 0.5rem;
      margin-left: 2rem;
    }

    #explainer span {
      max-width: 1000px;
      font-size: 0.9rem;
    }

    nav {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
      margin-left: 1rem;
    }

    #statements button {
      border: none;
      font-size: 24px;
      margin-left: 32px;
      width: 232.64px;
      display: inline-flex;
      opacity: 0;
      justify-content: flex-start;
      align-items: center;
      cursor: pointer;
      background: white;
    }

    #statements button:disabled {
      opacity: 0 !important;
      cursor: default;
    }

    #statements button:last-of-type:not(:first-child) {
      margin-top: 32px;
      height: 32px;
      opacity: 0.4;
    }

    #statements button:first-child {
      margin-top: 0;
      height: 32px;
      opacity: 0.4;
    }

    #statements button:not(:first-child):not(:last-of-type) {
      height: 32px;
      width: 40px;
      background: none;
    }

    button:hover:not(:disabled) {
      opacity: 1 !important;
      cursor: pointer;
      color: cornflowerblue;
    }

    button:active:not(:disabled) {
      color: darkblue;
    }

    nav button {
      display: inline-flex;
      font-size: 24px;
      width: 24px;
      height: 24px;
      border: none;
      background: none;
      padding: 0;
    }

    #play-or-skip, #experiment-or-next {
      display: flex;
      justify-content: center;
      gap: 2rem;
    }

    #play-or-skip button, #experiment-or-next button {
      font-size: 1rem;
      display: flex;
      align-items: center;
      border: none;
      padding: 0;
      background: none;
      cursor: pointer;
    }

    #play-or-skip ion-icon, #experiment-or-next ion-icon {
      font-size: 32px;
    }

    .continue {
      opacity: 1 !important;
      cursor: pointer !important;
      position: relative;
      animation: blinker 3s linear infinite !important; 
    }

    .continue * {
      cursor: pointer !important;
    }

    #explainer.continue {
      text-decoration: underline;
      text-underline-position: under;
      text-decoration-color: darkgreen;
    }

    #explainer.continue::before {
      display: none;
    }

    #explainer {
      display: flex;
      gap: 2rem;
      flex-direction: row;
    }

    #explainer .sign {
      font-size: 3rem;
      flex-shrink: 0;
      user-select: none;
    }

    #explainer .text {
      display: flex;
      align-items: center;
    }

    .continue::before {
      content: "";
      width: 8px;
      height: 8px;
      background: darkgreen;
      border-radius: 50%;
      display: inline-block;
      position: absolute;
      top: -6px;
      right: -6px;
      z-index: 100;
    }

    @keyframes blinker {
      0% {color: inherit}
      50% {color: darkgreen}
      100% {color: inherit}
    }
  `;y([Ls("dm-python-operation-node")],R.prototype,"operationNodes",2);y([_({attribute:!1})],R.prototype,"pyodide",2);y([_()],R.prototype,"lang",2);y([_({attribute:!1})],R.prototype,"explainer",2);y([_({attribute:!1})],R.prototype,"statements",2);y([_({attribute:!1})],R.prototype,"scenario",2);y([_({attribute:!1})],R.prototype,"availablePresets",2);y([_()],R.prototype,"scenarioContinueSelector",2);y([_({type:Boolean})],R.prototype,"datasetsHidden",2);y([V()],R.prototype,"scenarioStep",2);y([V()],R.prototype,"scenarioStopped",2);y([_({type:Boolean,reflect:!0})],R.prototype,"exitDismissed",2);R=y([k("dm-operation-sequence-editor")],R);var H=class extends C{constructor(){super(...arguments);this.identifier="",this.expression="",this.alwaysShowResult=!1,this.dynamicStyles=[],this.expressionActive=!1,this.selectedPresetName="none",this.recognizedPresetName="none",this.presets=I,this.jump=i=>{if(this.expression&&i.key==="ArrowDown")this.emitSelectNext();else if(this.expression&&i.key==="ArrowUp")this.emitSelectPrevious();else if(!this.expression&&["ArrowUp","ArrowDown","Enter","Escape"].includes(i.key))this.presetPickerJump(i);else if(this.disabled){i.preventDefault(),i.stopPropagation();return}},this.identifierFieldJump=i=>{if(!this.expression&&(i.key==="ArrowRight"||i.key==="Enter")&&i.currentTarget.selectionStart===this.identifier.length)this.expressionElement.focus(),this.expressionElement.setSelectionRange(0,0);else if(!this.expression&&!this.identifier&&i.key==="Backspace")this.emitRemove();else if(this.disabled){i.preventDefault(),i.stopPropagation();return}},this.expressionFieldJump=i=>{if(i.key==="ArrowLeft"&&i.currentTarget.selectionStart===0)this.identifierElement.focus(),this.identifierElement.setSelectionRange(this.identifier.length,this.identifier.length);else if(i.key==="Enter")this.expression?this.run():this.presetPickerJump(i);else if(i.key=="Escape")this.presetPickerJump(i);else if(this.disabled){i.preventDefault(),i.stopPropagation();return}},this.presetPickerJump=i=>{if(i.key==="Escape")i.target.blur();else if(i.key==="ArrowDown"||i.key==="ArrowUp"){let t=this.presets.findIndex(r=>r.name===this.selectedPresetName),e=t>0?t-1:this.presets.length-1,s=(t+1)%this.presets.length;this.selectedPresetName=this.presets[i.key==="ArrowDown"?s:e].name}else i.key==="Enter"&&this.handlePresetChange({target:{value:this.selectedPresetName}})},this.run=async()=>{if(this.result=null,!!this.code)try{this.pyodide.runPython(this.code),this.result=k2(this.pyodide.globals.get(this.identifier))}catch(i){this.pyodideError=/\w+Error:.*/.exec(i.message)?.at(0),!this.expression||!this.pyodideError?this.expressionElement.setCustomValidity(""):(this.expressionElement.setCustomValidity(this.pyodideError),window.browser.engine.name==="Gecko"?this.formElement:this.expressionElement.reportValidity())}},this.handlePresetChange=i=>{this.selectedPresetName=i.target.value,this.expression=this.presets.find(t=>t.name===this.selectedPresetName).template,this.emitExpressionChange(),this.recognizedPresetName=this.matchingPreset.name,this.pyodideError=null,(this.identifier?this.expressionElement:this.identifierElement).focus()},this.recognizePreset=()=>{this.recognizedPresetName=this.matchingPreset?this.matchingPreset.name:this.recognizedPresetName},this.emitIdentifierChange=()=>{this.dispatchEvent(new CustomEvent("identifierChange",{bubbles:!0,composed:!0}))},this.emitExpressionChange=()=>{this.dispatchEvent(new CustomEvent("expressionChange",{bubbles:!0,composed:!0}))},this.emitRemove=()=>{this.dispatchEvent(new CustomEvent("remove",{bubbles:!0,composed:!0}))},this.emitSelectPrevious=()=>{this.dispatchEvent(new CustomEvent("selectPrevious",{bubbles:!0,composed:!0}))},this.emitSelectNext=()=>{this.dispatchEvent(new CustomEvent("selectNext",{bubbles:!0,composed:!0}))}}get identifierPlaceholder(){return g[this.lang].identifierPlaceholder}get expressionPlaceholder(){return g[this.lang].expressionPlaceholder}get code(){return this.identifier&&this.expression?this.identifier+" = "+this.expression:""}get identifierFieldSize(){return this.identifier.length?this.identifier.length:this.identifierPlaceholder.length}get expressionFieldSize(){return this.expression.length?this.expression.length:this.expressionPlaceholder.length}focus(){this.identifierElement.focus()}get matchingPreset(){return this.presets.filter(i=>i.pattern.test(this.expression)).sort((i,t)=>i.pattern.source.length-t.pattern.source.length).at(-1)}get PresetPicker(){let i=this.presets.filter(s=>s.name!=="none"),t=this.presets.find(s=>s.name===this.recognizedPresetName),e=i.map(s=>m`
      <input
        type="radio"
        name="radio"
        ?disabled=${this.disabled}
        value=${s.name}
        id=${s.name}
        ?data-checked=${s.name===this.selectedPresetName}
        @change=${this.handlePresetChange}
      >
      <label data-selected=${s.name===this.selectedPresetName} for=${s.name}>
        <span class="sign" tabIndex=-1>${s.sign}</span>
        <span class="name" tabIndex=-1>${s.name}</span>
        <span class="template" tabIndex=-1>${s.template}</span>
      </label>
    `);return m`
      <div id="preset-sign">${t.sign}</div>
      <ul id="preset-list">
          ${this.expression?null:e}
      </ul>`}get infoMessageTextStyled(){return Ct(this.dynamicStyles.reduce((i,t)=>{let e=Sr[this.lang][t.textPatternName];return i.replaceAll(e??/a^/g,`<mark style="${t.style}">$&</mark>`)},this.info))}get infoMessage(){return this.info?m`<dm-message minimal class="message fade-in" id=${"message"+this.id}>
      ${this.infoMessageTextStyled}
    </dm-message>`:null}get resultView(){if(typeof this.result!="object")return m`<div class="primitive-result">${this.result}</div>`;if(this.result===null)return null;{console.log(this.result);let i=this.result.length?Object.keys(this.result[0]).map(t=>m`<vaadin-grid-column header=${t} path=${t} auto-width></vaadin-grid-column>`):null;return m`
      <vaadin-grid tabindex=-1 .items=${this.result}>
        ${i}
      </vaadin-grid>
      `}}get expressionInputTextStyled(){return Ct(this.dynamicStyles.reduce((i,t)=>(console.log(i),console.log(t.expressionPattern),i.replaceAll(t.expressionPattern??/a^/g,`<mark style="${t.style}">$&</mark>`)),this.expression))}get expressionInput(){return this.dynamicStyles.some(i=>i.expressionPattern)?m`
        <span
          class="expression"
          id=${"expression"+this.id}
          name="expression"
          ?disabled=${this.disabled}
          tabIndex=0
          @focus=${()=>!this.disabled&&(this.dynamicStyles=this.dynamicStyles.map(i=>({...i,expressionPattern:void 0})))}
          style="width: calc(${this.expressionFieldSize}ch + 14.75px); color: ${this.expression?"inherit":"#777777"}"
        ><span class="expression-content">
          ${this.expression?this.expressionInputTextStyled:this.expressionPlaceholder}
          </span>
        </span>
      `:m`
        <input
          class="expression"
          id=${"expression"+this.id}
          name="expression"
          pattern=${(this.pyodideError?B2:P2).source}
          placeholder=${this.expressionPlaceholder}
          spellcheck=${!1}
          autocomplete="off"
          ?disabled=${this.disabled}
          size=${this.expressionFieldSize}
          .value=${this.expression}
          @input=${i=>{this.expression=i.currentTarget.value,this.expression||(this.selectedPresetName="none"),this.recognizedPresetName=this.matchingPreset.name,this.pyodideError=null,this.expressionElement.setCustomValidity(""),this.result=null}}
          @keydown=${this.expressionFieldJump}
          @change=${i=>{this.expression=i.target.value,this.emitExpressionChange()}}
        />
        <label class="expression" for="expression"></label>
      `}get identifierInputStyles(){let i=this.dynamicStyles.find(t=>t.identifierPattern);return i?.identifierPattern?.test(this.identifier)?i.style:{}}updated(i){i.has("dynamicStyles")&&!this.dynamicStyles.some(t=>t.expressionPattern)&&this.expressionElement.focus()}render(){let i={result:!0,dataframe:Array.isArray(this.result),empty:!this.result,hidable:!this.alwaysShowResult,primitive:typeof this.result!="object"},t=m`
      <button
        class="remove"
        id=${"remove"+this.id}
        ?disabled=${this.disabled}
        @focus=${e=>e.preventDefault()}
        @mousedown=${this.emitRemove}>
        <ion-icon style="pointer-events: none;" name="close-circle-outline"></ion-icon>
      </button>
    `;return m`
      <div class="side-buttons" id=${"side-buttons"+this.id}>
        ${t}
      </div>
      ${this.header?m`<h4 class="header" id=${"header"+this.id}>${this.header}</h4>`:null}
      <form tabIndex=${this.disabled?-1:void 0} @submit=${e=>e.preventDefault()} class=${"main"+(this.header?" header":"")} id=${"main"+this.id} @keydown=${this.jump} @focusout=${e=>{e.relatedTarget?.click()}}>
        ${this.PresetPicker}
        <input
          class="identifier"
          id=${"identifier"+this.id}
          name="identifier"
          style=${this.identifierInputStyles}
          pattern=${qt.source}
          placeholder=${this.identifierPlaceholder}
          spellcheck=${!1}
          autocomplete="off"
          ?disabled=${this.disabled}
          size=${this.identifierFieldSize}
          .value=${this.identifier}
          @input=${e=>{this.pyodideError=null,this.identifier=this.identifierElement.value,this.identifierElement.setCustomValidity(qt.test(this.identifier)?"":g[this.lang].identifierInvalid)}}
          @change=${e=>{e.currentTarget.value=e.currentTarget.value.trim(),this.emitIdentifierChange(),this.identifier&&!qt.test(this.identifier)&&(this.identifierElement.setCustomValidity(g[this.lang].identifierInvalid),window.browser.engine.name==="Gecko"?this.formElement:this.identifierElement.reportValidity()),e.preventDefault(),e.stopPropagation()}}
          @keydown=${this.identifierFieldJump}
        />
        <label class="identifier" for="identifier"></label>
        <code>=</code>
        ${this.expressionInput}
        <button
          class="run"
          id=${"run"+this.id}
          @mousedown=${this.run}
          ?disabled=${this.disabled||!this.code||!this.pyodide||!qt.test(this.identifier)}
          title=${this.code?this.pyodide?g[this.lang].runCode:g[this.lang].loadingPyodide:g[this.lang].noIdentifierOrExpression}>
          <ion-icon style="pointer-events: none;" name="caret-forward-circle-outline"></ion-icon>
        </button>
      </form>
      ${this.infoMessage}
      <div class=${Cr(i)} id=${"result"+this.id}>
        ${this.resultView}
      </div>
    `}};H.shadowRootOptions={...C.shadowRootOptions,mode:"open"};H.styles=z`

    :host {
      font-family: 'Segoe UI', Tahoma, Verdana, sans-serif;
      width: 100%;
      height: fit-content;
      display: grid;
      grid-template-rows: minmax(32px, min-content) max-content;
      grid-template-columns: [buttons] 32px [input] max-content [output] 1fr;
      align-items: stretch;
      justify-content: flex-start;
      overflow-x: auto;
      scrollbar-width: thin;
    }

    :host::-webkit-scrollbar {
      width: 5px;
      height: 5px;
    }

    :host([header]) {
      grid-template-rows: minmax(64px, min-content) max-content;
    }

    :host(:not(:focus-within):not([alwaysShowResult])) .main {
      max-height: 32px;
    }

    :host(.fade-in) {
      opacity: 1;
      animation-name: fadeIn;
      animation-iteration-count: 1;
      animation-timing-function: ease-in;
      animation-duration: 0.5s;
    }

    @keyframes fadeIn {
      0% {opacity: 0}
      100% {opacity: 1}
    }

    .header {
      grid-row: 1;
      grid-column: input;
      margin: 0;
      line-height: 1em;
      height: 1em;
    }

    .main {
      font-stretch: inherit;
      box-sizing: border-box;
      border: 2px solid transparent;
      grid-row: 1;
      grid-column: input;
      background: white;
      width: fit-content;
      display: grid;
      min-height: 36px;
      max-height: 800px;
      overflow-x: hidden;
      overflow-y: hidden;
      transition: max-height 1s ease-out 0.1s;
      justify-content: flex-start;
      align-items: center;
      grid-template-rows: 36px repeat(auto-fill, auto);
      grid-template-columns: 
        [preset] max-content
        [identifier] max-content
        [equals] max-content
        [expression] max-content
        [run] max-content
    }

    .main.header {
      align-self: flex-end;
    }

    :host(:focus-within) .main {
      border: 2px solid cornflowerblue;
    }

    input {
      font-family: Inconsolata, Consolas, monospace;
      font-stretch: inherit;
      border: none;
      outline: none;
      padding-top: 0;
      padding-bottom: 0;
      font-size: 10pt;
    }

    input:disabled {
      color: inherit;
    }

    input::placeholder {
      color: #777777;
    }

    code {
      grid-row: 1;
      grid-column: equals;
      font-family: Inconsolata, Consolas, monospace;
      user-select: none;
      display: flex;
      align-items: center;
    }

    input.identifier {
      grid-row: 1;
      grid-column: identifier;
      padding-left: 0.4rem;
      font-weight: bold;
    }

    label.identifier {
      grid-row: 1;
      grid-column: identifier;
    }

    input:invalid {
      color: darkred;
    }

    input:disabled {
      background: none;
    }

    input::placeholder {
      user-select: none;
    }


    .expression {
      grid-row: 1;
      grid-column: expression;
      padding-right: 0.2rem;
      padding-left: 0.4rem;
      word-wrap: break-word;
      word-break: break-all;
      overflow-x: hidden;
      font-family: Inconsolata, Consolas, monospace;
      font-size: 10pt;
      min-height: 32px;
      display: flex;
      align-items: center;
    }

    input.expression {
      grid-row: 1;
      grid-column: expression;
      text-overflow: ellipsis;
    }

    button.run {
      padding: 1px;
      padding-right: 6px;
      opacity: 0;
      grid-row: 1;
      grid-column: run;
      display: flex;
      align-items: center;
      justify-content: center;
      background: none;
      border: none;
      font-size: 24px;
      cursor: pointer;
    }

    button.run.continue::before {
      top: 0px;
      right: 4px;
    }

    :host(:hover) button.run, :host(:focus-within) button.run {
      opacity: 1;
    }

    button.run:hover:not(:disabled) {
      color: cornflowerblue;
    }

    button.run:active:not(:disabled) {
      color: darkblue;
    }

    button.run:disabled {
      cursor: not-allowed;
    }


    #preset-sign {
      grid-row: 1;
      grid-column: preset;
      width: 32px;
      height: 100%;
      line-height: 100%;
      display: flex;
      color: cornflowerblue;
      align-items: center;
      justify-content: center;
      background: none;
      border: none;
      font: inherit;
      font-weight: bold;
      font-size: 0.9rem;
      user-select: none;
    }

    #preset-list {
      display: contents;
      background: white;
      font-size: 10pt;
    }

    #preset-list input[type="radio"] {
      position: absolute;
      width: 0;
      height: 0;
    }

    #preset-list label {
      display: contents;
      padding: 0;
      cursor: pointer;
      user-select: none;
    }

    #preset-list label[data-selected=true] > * {
      color: cornflowerblue;
    }

    #preset-list > *:hover {
      color: cornflowerblue;
    }

    #preset-list > *:active {
      color: darkblue;
    }

    #preset-list > * > * {
      padding-top: 0.2rem;
      padding-bottom: 0.2rem;
    }

    #preset-list > *:last-child > * {
      margin-bottom: 0.5rem;
    }

    #preset-list .sign {
      grid-column: preset;
      font-weight: bold;
      text-align: center;
      font-size: 0.75rem;
    }

    #preset-list .name {
      padding-left: 0.5rem;
      grid-column: identifier;
      font-family: Inconsolata, Consolas, monospace;
      font-weight: bold;
    }

    #preset-list .template {
      padding-left: 0.5rem;
      grid-column: expression;
      font-family: Inconsolata, Consolas, monospace;
      max-width: 50ch;
      word-wrap: break-word;
      text-overflow: ellipsis;
    }

    .side-buttons {
      height: 100%;
      width: 32px;
      align-self: stretch;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
    }

    .side-buttons button {
      opacity: 0;
      max-width: 32px;
      height: 36px;
      font-size: 24px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      background: none;
      border: none;
    }

    button.remove:disabled {
      cursor: not-allowed;
    }

    button.remove:hover:not(:disabled) {
      color: coral;
      cursor: pointer;
    }

    button.remove:active {
      color: darkred;
    }

    :host(:hover) .side-buttons button, :host(:focus-within) .side-buttons button {
      opacity: 1;
    }

    .message, .error-message {
      grid-row: 1;
      grid-column: output;
      display: inline-block;
      overflow-y: visible;
      align-self: flex-end;
    }

    .result {
      grid-row: 2;
      grid-column: input;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 8px;
      padding-left: 16px;
      padding-right: 16px;
      align-items: center;
      background: white;
      overflow-x: visible;
      overflow-y: hidden;
      font-size: 0.75rem;
      max-height: 0px;
      transition: max-height 1s ease-out 0.1s;
    }

    .result.dataframe {
      padding: 0;
      grid-row: 2;
      grid-column: input / -1;
    }

    .result vaadin-grid {
      font-size: 0.7rem;
      width: 100%;
    }

    .result.empty {
      outline: none;
    }

    .result:not(.hidable) {
      max-height: 800px;
    }

    .result:not(.empty) .primitive-result {
      height: 32px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      color: darkgreen;
      font-family: Inconsolata, Consolas, monospace;
    }

    .result:not(.empty):not(.dataframe)::before {
      content: "⇒";
      font-size: 1.25rem;
      user-select: none;
      color: darkgreen;
      transform: translateY(-2px);
    }

    :host(:focus-within) .result, :host[alwaysShowResult] .result {
      max-height: 1080px;
    }

    .continue {
      position: relative;
      opacity: 1 !important;
      cursor: pointer !important;
      animation: blinker 3s linear infinite !important; 
    }
  
    .continue * {
      cursor: pointer !important;
    }

    .continue::before {
      content: "";
      width: 8px;
      height: 8px;
      background: darkgreen;
      border-radius: 50%;
      position: absolute;
      top: -6px;
      right: -6px;
      z-index: 100;
    }

    label.continue::before {
      top: -9px;
      right: 6px;
    }

    .main.continue {
      border-color: darkgreen !important;
    }

    .main.continue::before {
      display: none;
    }

    .identifier.continue, .expression.continue {
      text-decoration: underline;
      text-underline-position: below;
    }

    @keyframes blinker {
      0% {color: inherit}
      50% {color: darkgreen}
      100% {color: inherit}
    }

    .message mark {
      background: none;
      padding-left: 3px;
      padding-right: 3px;
    }

    .expression mark {
      font-weight: inherit !important;
    }

    label {
      width: 0;
    }
  `;y([_({type:String})],H.prototype,"identifier",2);y([_({type:String})],H.prototype,"expression",2);y([_({attribute:!1})],H.prototype,"pyodide",2);y([_({type:String})],H.prototype,"lang",2);y([_()],H.prototype,"info",2);y([_({type:String,reflect:!0})],H.prototype,"header",2);y([_({type:Boolean})],H.prototype,"disabled",2);y([_({type:Boolean})],H.prototype,"alwaysShowResult",2);y([_({attribute:!1})],H.prototype,"dynamicStyles",2);y([V()],H.prototype,"expressionActive",2);y([V()],H.prototype,"pyodideError",2);y([V()],H.prototype,"selectedPresetName",2);y([V()],H.prototype,"recognizedPresetName",2);y([V()],H.prototype,"result",2);y([_({attribute:!1})],H.prototype,"presets",2);y([ge("input.expression")],H.prototype,"expressionElement",2);y([ge("input.identifier")],H.prototype,"identifierElement",2);y([ge("form")],H.prototype,"formElement",2);H=y([k("dm-python-operation-node")],H);var I=[{name:"function",sign:"f",pattern:/^\s*lambda ([a-zA-Z_]\w*)(,\s+([a-zA-Z_]\w*))?\w*:\w*.*\s*$/,template:"lambda x: expr"},{name:"view",sign:"⌗",pattern:/^\s*(?:D\.)?([a-zA-Z_]\w*)\s*$/,template:"D.a"},{name:"rename",sign:"ρ",pattern:/([a-zA-Z_]\w*)\.rename\(columns=\{(.*)\}\)/,template:"D.a.rename(columns={'name': 'newname'})"},{name:"select",sign:"σ",pattern:/([a-zA-Z_]\w*)(?:\[(.*)\])+/,template:"D.a[cond][attrs]"},{name:"map",sign:"λ",pattern:/([a-zA-Z_]\w*)\.assign\(.*=.*\.apply\(.*\)(,\s*.*=.*\.apply\(.*\))*\)/,template:"D.a.assign(attr=D.a['attr'].apply(func))"},{name:"calculate",sign:"κ",pattern:/([a-zA-Z_]\w*)\.assign\(.*=.*\)/,template:"D.a.assign(attr=expr)"},{name:"aggregate",sign:"γ",pattern:/([a-zA-Z_]\w*)\.groupby\((.*)\)(?:\[(.*)\])*\.agg\((.*)\)/,template:"D.a.groupby(lambda g: '').agg(aggfunc)"},{name:"add",sign:"⋃",pattern:/([a-zA-Z_]\w*)\.append\((?:D\.)?([a-zA-Z_]\w*)\)\.drop_duplicates\(\)\.reset_index\(drop=True\)/,template:"D.a.append(D.b).drop_duplicates().reset_index(drop=True)"},{name:"subtract",sign:"⎯",pattern:/([a-zA-Z_]\w*).merge\((?:D\.)?([a-zA-Z_]\w*),\s*indicator=True,\s*how='left'\)\[lambda\s+x:\s*x\._merge=='left_only'\]\.drop\('_merge',\s*1\)/,template:"D.a.merge(D.b, indicator=True, how='left')[lambda x: x._merge=='left_only'].drop('_merge', 1)"},{name:"intersect",sign:"⋂",pattern:/([a-zA-Z_]\w*).merge\((?:D\.)?([a-zA-Z_]\w*)\)/,template:"D.a.merge(D.b)"},{name:"relate",sign:"⋈",pattern:/([a-zA-Z_]\w*)\.merge\((?:D\.)?([a-zA-Z_]\w*),\s*on='\w+'\)/,template:"D.a.merge(D.b, on='attr')"},{name:"none",sign:"",pattern:/.*/,template:""}];var Yt=class extends Ee{};Yt.directiveName="unsafeSVG",Yt.resultType=2;var K1=De(Yt);var ps={};en(ps,{AC:()=>T2,AD:()=>I2,AE:()=>L2,AF:()=>O2,AG:()=>N2,AI:()=>R2,AL:()=>V2,AM:()=>$2,AO:()=>j2,AQ:()=>G2,AR:()=>W2,AS:()=>U2,AT:()=>q2,AU:()=>Y2,AW:()=>K2,AX:()=>Z2,AZ:()=>J2,BA:()=>X2,BB:()=>Q2,BD:()=>e3,BE:()=>t3,BF:()=>i3,BG:()=>s3,BH:()=>r3,BI:()=>n3,BJ:()=>l3,BL:()=>a3,BM:()=>o3,BN:()=>h3,BO:()=>d3,BQ:()=>c3,BR:()=>u3,BS:()=>p3,BT:()=>f3,BV:()=>g3,BW:()=>m3,BY:()=>v3,BZ:()=>_3,CA:()=>w3,CC:()=>b3,CD:()=>y3,CF:()=>z3,CG:()=>x3,CH:()=>M3,CI:()=>F3,CK:()=>A3,CL:()=>H3,CM:()=>C3,CN:()=>S3,CO:()=>D3,CR:()=>E3,CU:()=>P3,CV:()=>B3,CW:()=>k3,CX:()=>T3,CY:()=>I3,CZ:()=>L3,DE:()=>O3,DJ:()=>N3,DK:()=>R3,DM:()=>V3,DO:()=>$3,DZ:()=>j3,EC:()=>G3,EE:()=>W3,EG:()=>U3,EH:()=>q3,ER:()=>Y3,ES:()=>K3,ET:()=>Z3,FI:()=>J3,FJ:()=>X3,FK:()=>Q3,FM:()=>eh,FO:()=>th,FR:()=>ih,GA:()=>sh,GB:()=>rh,GD:()=>nh,GE:()=>lh,GF:()=>ah,GG:()=>oh,GH:()=>hh,GI:()=>dh,GL:()=>ch,GM:()=>uh,GN:()=>ph,GP:()=>fh,GQ:()=>gh,GR:()=>mh,GS:()=>vh,GT:()=>_h,GU:()=>wh,GW:()=>bh,GY:()=>yh,HK:()=>zh,HM:()=>xh,HN:()=>Mh,HR:()=>Fh,HT:()=>Ah,HU:()=>Hh,ID:()=>Ch,IE:()=>Sh,IL:()=>Dh,IM:()=>Eh,IN:()=>Ph,IO:()=>Bh,IQ:()=>kh,IR:()=>Th,IS:()=>Ih,IT:()=>Lh,JE:()=>Oh,JM:()=>Nh,JO:()=>Rh,JP:()=>Vh,KE:()=>$h,KG:()=>jh,KH:()=>Gh,KI:()=>Wh,KM:()=>Uh,KN:()=>qh,KP:()=>Yh,KR:()=>Kh,KW:()=>Zh,KY:()=>Jh,KZ:()=>Xh,LA:()=>Qh,LB:()=>e0,LC:()=>t0,LI:()=>i0,LK:()=>s0,LR:()=>r0,LS:()=>n0,LT:()=>l0,LU:()=>a0,LV:()=>o0,LY:()=>h0,MA:()=>d0,MC:()=>c0,MD:()=>u0,ME:()=>p0,MF:()=>f0,MG:()=>g0,MH:()=>m0,MK:()=>v0,ML:()=>_0,MM:()=>w0,MN:()=>b0,MO:()=>y0,MP:()=>z0,MQ:()=>x0,MR:()=>M0,MS:()=>F0,MT:()=>A0,MU:()=>H0,MV:()=>C0,MW:()=>S0,MX:()=>D0,MY:()=>E0,MZ:()=>P0,NA:()=>B0,NC:()=>k0,NE:()=>T0,NF:()=>I0,NG:()=>L0,NI:()=>O0,NL:()=>N0,NO:()=>R0,NP:()=>V0,NR:()=>$0,NU:()=>j0,NZ:()=>G0,OM:()=>W0,PA:()=>U0,PE:()=>q0,PF:()=>Y0,PG:()=>K0,PH:()=>Z0,PK:()=>J0,PL:()=>X0,PM:()=>Q0,PN:()=>ed,PR:()=>td,PS:()=>id,PT:()=>sd,PW:()=>rd,PY:()=>nd,QA:()=>ld,RE:()=>ad,RO:()=>od,RS:()=>hd,RU:()=>dd,RW:()=>cd,SA:()=>ud,SB:()=>pd,SC:()=>fd,SD:()=>gd,SE:()=>md,SG:()=>vd,SH:()=>_d,SI:()=>wd,SJ:()=>bd,SK:()=>yd,SL:()=>zd,SM:()=>xd,SN:()=>Md,SO:()=>Fd,SR:()=>Ad,SS:()=>Hd,ST:()=>Cd,SV:()=>Sd,SX:()=>Dd,SY:()=>Ed,SZ:()=>Pd,TA:()=>Bd,TC:()=>kd,TD:()=>Td,TF:()=>Id,TG:()=>Ld,TH:()=>Od,TJ:()=>Nd,TK:()=>Rd,TL:()=>Vd,TM:()=>$d,TN:()=>jd,TO:()=>Gd,TR:()=>Wd,TT:()=>Ud,TV:()=>qd,TW:()=>Yd,TZ:()=>Kd,UA:()=>Zd,UG:()=>Jd,US:()=>Xd,UY:()=>Qd,UZ:()=>ec,VA:()=>tc,VC:()=>ic,VE:()=>sc,VG:()=>rc,VI:()=>nc,VN:()=>lc,VU:()=>ac,WF:()=>oc,WS:()=>hc,XK:()=>dc,YE:()=>cc,YT:()=>uc,ZA:()=>pc,ZM:()=>fc,ZW:()=>gc});var T2='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 513 342"><path fill="#0052B4" d="M0 0h513v342H0z"/><path fill="#FFF" d="M440.1 181.1c-.1 39.2-6.4 81.4-57.4 101.5-51.1-20.1-57.3-62.3-57.4-101.5h114.8z"/><path fill="#29DBFF" d="M439.6 197.7c-2.8 34.9-12.4 67.4-57 85-44.4-17.6-54.5-51.2-56.9-84.9"/><path fill="#FFF" d="M437.8 214.1c-3.2 24.3-16.7 53.5-55.1 68.6-38.4-15.1-50.5-42.5-55.1-68.4"/><path fill="#29DBFF" d="M434.2 230.3c-5.7 17.7-19.3 39.4-51.3 52.8-32-12.6-45.2-33.8-51.4-53"/><path fill="#FFF" d="M426.7 246.9c-6.5 11.3-17.7 25.4-44 35.9-27.5-11.5-37.4-25.3-44-36.1"/><path fill="#29DBFF" d="M412.4 265.1c-8.1 7.2-12 11.2-29.6 17.9-20.1-7.9-22.6-11.6-29.2-17.5"/><path fill="#5CC85C" d="M383.3 231.6c-.2-.2-27.9 35.7-27.9 35.7-1.8-1.3-10-9.5-13.3-15l41.3-50.1 40.2 49.7c-3.9 6.5-11.4 13.6-13.2 15M382.6 85.3l-26.5 45h53z"/><ellipse transform="rotate(-82.3 291.431 225.686)" fill="#F7A226" cx="291.4" cy="225.7" rx="48.7" ry="15.7"/><ellipse transform="rotate(-68.099 303.087 164.67)" fill="#DDC7AB" cx="303.1" cy="164.7" rx="11.7" ry="7.2"/><ellipse transform="rotate(-81.738 291.697 271.697)" fill="#DDC7AB" cx="291.7" cy="271.7" rx="11.4" ry="3.3"/><ellipse transform="matrix(.9986 -.05353 .05353 .9986 -13.992 16.424)" fill="#DDC7AB" cx="299.6" cy="269.4" rx="3.3" ry="11"/><ellipse transform="rotate(-21.518 314.54 201.06)" fill="#DDC7AB" cx="314.5" cy="201.1" rx="4.1" ry="13.7"/><ellipse transform="rotate(-21.518 317.511 178.077)" fill="#DDC7AB" cx="317.5" cy="178.1" rx="13.7" ry="4.1"/><ellipse transform="rotate(-7.7 473.781 225.857)" fill="#F7A226" cx="473.6" cy="225.9" rx="15.7" ry="48.7"/><ellipse transform="rotate(-21.901 462.057 164.866)" fill="#DDC7AB" cx="462" cy="164.9" rx="7.2" ry="11.7"/><ellipse transform="rotate(-8.27 473.27 271.908)" fill="#DDC7AB" cx="473.4" cy="271.9" rx="3.3" ry="11.4"/><ellipse transform="matrix(.05353 -.9986 .9986 .05353 171.34 719.998)" fill="#DDC7AB" cx="465.5" cy="269.6" rx="11" ry="3.3"/><ellipse transform="rotate(-68.482 450.552 201.247)" fill="#DDC7AB" cx="450.6" cy="201.2" rx="13.7" ry="4.1"/><ellipse transform="rotate(-68.482 447.58 178.265)" fill="#DDC7AB" cx="447.6" cy="178.3" rx="4.1" ry="13.7"/><path fill="#B0C6CC" d="M373.3 130.3 356.1 155l17.8 26.1H396l4.7-25.4-5.4-25.4z"/><path fill="#FFF" d="M256 0v117.4h-46.1l46.1 30.7v22.6h-22.6L160 121.8v48.9H96v-48.9l-73.4 48.9H0v-22.6l46.1-30.7H0v-64h46.1L0 22.7V0h22.6L96 48.9V0h64v48.9L233.4 0z"/><path fill="#D80027" d="M144 0h-32v69.4H0v32h112v69.3h32v-69.3h112v-32H144z"/><path fill="#2E52B2" d="M256 22.7v30.7h-46.1z"/><g><path fill="#D80027" d="M0 170.7v-11l62.5-42.3h22.6L7.3 170.7z"/></g><path fill="#D80027" d="m7.3.1 77.8 53.2H62.5L0 11.1V.1zM256 .1v11l-62.5 42.3h-22.6L248.7.1zM248.7 170.7l-77.8-53.3h22.6l62.5 42.3v11z"/></svg>',I2='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 513 342"><style></style><path fill="#FFDA44" d="M0 0h513v342H0z"/><path fill="#0052B4" d="M0 0h171v342H0z"/><path fill="#D80027" d="M342 0h171v342H342zM198.9 113.6H256v64.8h-57.1z"/><g stroke="#D80027" stroke-width="7"><path d="M267.6 113.6v64.7M284.2 113.6v64.7M300.8 113.6v64.7"/></g><g stroke="#D80027" stroke-width="5"><path d="M247.4 178.4v64.7M234.1 178.4v64.7M220.8 178.5v53.9M207.1 178.5v47.1"/></g><path fill="#FFDA44" d="m199.9 146 27.6-32.4 28.5 32.3-28.1 32.4z"/><path fill="#BC8B00" d="M182.2 95.9v92.2c0 34.3 27.3 54.2 48.6 64.5-.8 1.4 25.1 8.3 25.1 8.3s25.9-6.9 25.1-8.3c21.4-10.3 48.6-30.1 48.6-64.5V95.9H182.2zm129.9 92.2c0 16.9-10 29.4-32.8 43.9-8.6 5.5-17.5 9-23.3 11-5.8-2-14.7-5.5-23.3-11-22.8-14.5-32.8-28-32.8-43.9v-74.5h112.2v74.5z"/><path fill="#D80027" d="M264.4 188.9h29.5v8.6h-29.5zM264.4 206.5h29.5v8.6h-29.5z"/></svg>',L2='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 513 342"><path fill="#FFF" d="M0 0h513v342H0z"/><path fill="#009e49" d="M0 0h513v114H0z"/><path d="M0 228h513v114H0z"/><path fill="#ce1126" d="M0 0h171v342H0z"/></svg>',O2='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 513 342"><path fill="#DB3E00" d="M0 0h513v342H0z"/><path fill="#479900" d="M331 0h182v342H331z"/><path d="M0 0h181.8v342H0z"/><path fill="#FFF" d="M256 126.7c-19.4 0-35.2 15.8-35.2 35.2v52.8h70.4v-52.8c0-19.5-15.8-35.2-35.2-35.2z"/><path fill="#FFF" d="M256 84.3c-47.7 0-86.4 38.7-86.4 86.4S208.3 257 256 257s86.4-38.7 86.4-86.4-38.7-86.3-86.4-86.3zm0 157.7c-39.4 0-71.4-32-71.4-71.4 0-39.4 32-71.4 71.4-71.4 39.4 0 71.4 32 71.4 71.4 0 39.5-32 71.4-71.4 71.4z"/></svg>',N2='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 513 342"><path d="M0 0h513v342H0z"/><path fill="#0072c6" d="M88.8 136.5c-2.2 12.9-3.4 26.2-3.4 39.8 0 13.6 1.2 27 3.4 39.8L256 228.3l167.2-12.1c2.2-12.9 3.4-26.2 3.4-39.8s-1.2-27-3.4-39.8"/><path fill="#FFF" d="M423.2 219H88.8c15.8 69.8 84.7 122.3 167.2 122.3S407.4 288.8 423.2 219z"/><path fill="#FFDA44" d="M365.9 136.5H146.1l44.9-21.1-23.9-43.5 48.8 9.4L222 32l34 36.2L290 32l6.1 49.3 48.8-9.4-23.9 43.5z"/><g fill="#ce1126"><path d="M256.5 342 0 0v342z"/><path d="M513 342V0L256 342z"/></g></svg>',R2='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 513 342"><path fill="#00318b" d="M0 0h513v342H0z"/><path fill="#FFF" d="M454.8 265.38c7.94-10.93 13.24-24.27 13.24-40.42V104.89a59.754 59.754 0 0 1-36.02 12.01c-19.64 0-37.07-9.43-48.03-24.01-10.95 14.58-28.39 24.01-48.03 24.01-13.52 0-25.99-4.47-36.02-12v120.06c0 16.16 5.3 29.5 13.24 40.42H454.8z"/><path fill="#8DCCFF" d="M310.23 260.98C332.65 296.96 384 309 384 309s51.35-12.04 73.77-48.02H310.23z"/><path fill="#D87B00" d="M396.66 172.21c.32 1.42 8.72 10.17 17.56 20.15 1.39 1.57-8.74 12.63-6.91 12.59 4.75-.12 19.27-17.26 19.34 6.65.05 15.94-30 27.51-30 27.51h17.47l.65 14.96s4.97-13.34 7.59-16.57c8.1-9.97 20.18-30.07 34.59-27.1 14.41 2.97-13.66-13.92-13.66-13.92s-5.2-15.19-16.63-16.97c-10.06-1.57-14.29-2.51-26.64-7.3-1.68-.65-3.88-2.32-3.36 0z"/><path fill="#D87B00" d="M359.69 198.69c1.07-.99 4.46-12.63 8.69-25.28.67-1.99 15.31 1.27 14.35-.3-2.47-4.06-24.58-8.08-3.9-20.08 13.79-8 38.82 12.27 38.82 12.27l-8.72-15.14 12.64-8.03s-14.05 2.35-18.14 1.69c-12.68-2.04-36.13-2.48-40.75-16.45-4.62-13.97-5.25 18.79-5.25 18.79s-10.56 12.08-6.4 22.88c3.66 9.5 4.96 13.64 6.97 26.73.29 1.79-.06 4.53 1.69 2.92z"/><path fill="#D87B00" d="M395.67 219.87c-1.39-.43-13.16 2.49-26.22 5.18-2.06.42-6.59-13.88-7.47-12.26-2.27 4.17 5.36 25.31-15.41 13.45-13.84-7.91-8.89-39.73-8.89-39.73l-8.71 15.14-13.29-6.9s9.09 10.96 10.57 14.84c4.6 11.99 16 32.49 6.24 43.49-9.76 11.01 18.88-4.9 18.88-4.9s15.76 3.07 23-5.96c6.38-7.94 9.3-11.14 19.61-19.45 1.43-1.12 3.97-2.19 1.69-2.9z"/><path fill="#FFF" d="M256.5 0h-23.1L160 48.9V0H96v48.9L22.6 0H0v22.7l46.1 30.7H0v64h46.1L0 148.1V171h22.6L96 121.8V171h64v-49.2l73.4 49.2h23.1v-22.9l-46.6-30.7h46.6v-64h-46.6l46.6-30.7z"/><path fill="#D80027" d="M144 0h-32v69.4H0v32h112V171h32v-69.6h112.5v-32H144z"/><path fill="#D80027" d="M0 171v-11.3l62.5-42.3h22.6L7.3 171zM7.3.1l77.8 53.2H62.5L0 11.1V.1zM256.5.1v11l-63 42.3h-22.6L248.7.1zM248.7 171l-77.8-53.6h22.6l63 42.3V171z"/></svg>',V2='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 60"><path fill="#ED2024" d="M0 0h90v60H0z"/><path fill="#212121" d="M32.5 12.2v16l7.1 2.5-5 4.9 2.4 3 5.3-5.5 1.2 2.3-3 4.9 3.6 5.6-1.8 2.6 2.8 3.6 2.7-3.7-1.5-2.6 3-5.8-2.7-4.6 1.2-2.3 5.2 5.5 2.5-2.9-5.2-5.1 7.2-2.6V12.2l-5.2 1.9-.1 3.8-3.3.3v-2.6l1.7-2.3 5.6-2.2-2.3-.4 1.4-1.2.9.4-.8-1.4L54 9l-1-1.1L47.5 9l1.4 1.1-3.8 4.9-3.8-4.8 1.3-1.1-5-1.2L36.2 9l-1.5-.4-.8 1.4.9-.6 1.6 1.1-2.3.5 5.5 2 1.6 2.3v2.9l-3.3-.3v-3.6z"/><g fill="#212121"><path d="M26.2 25h6.4v2.5h-6.4zM26.2 20.9h6.4v2.7h-6.4zM26.2 16.7h6.4v2.6h-6.4zM26.2 12.7h6.4v2.5h-6.4z"/></g><g fill="#212121"><path d="M57.4 25h6.4v2.5h-6.4zM57.4 20.9h6.4v2.7h-6.4zM57.4 16.7h6.4v2.6h-6.4zM57.4 12.7h6.4v2.5h-6.4z"/></g><path fill="#212121" d="M53.4 36.1h6.4V38h-6.4zM30.2 36.1h6.4V38h-6.4z"/></svg>',$2='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 513 342"><path fill="#0052B4" d="M0 0h513v342H0z"/><path fill="#D80027" d="M0 0h513v114H0z"/><path fill="#FF9811" d="M0 228h513v114H0z"/></svg>',j2='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 513 342"><path d="M0 171h513v171H0z"/><path fill="#D80027" class="st0" d="M0 0h513v171H0z"/><g fill="#FFDA44"><path d="m332.7 135.6 17.5-8.6-7.4-19-18.7 6.2zM287.1 79.6l5.5-18.8-19.1-7.2-8 18zM316.5 102.8l12.2-15.3-14.9-13.9-14.2 13.6zM335.9 171.7l19.5-.8v-21.3l-22.9.2zM323.3 209.8l18.8 5.5 7.3-19-18-8zM294.3 242.2l14.9 12.7 14.4-14.4-13.1-14.7zM247.3 94.5l9.8 19.9 21.9 3.3-15.9 15.5 3.6 21.9-19.6-10.4-19.7 10.2 3.8-21.9-15.8-15.5 22-3.1z"/><path d="m250.8 61.3-2.7 18.3c43.1 3.2 77 39.2 77 83.1 0 46-37.3 82.9-83.4 83.4-29.2.3-51.3-14.8-67-33.7l-13.9 12.3c15 19 40.8 39.9 80.9 39.9 56.3 0 101.9-45.6 101.9-101.9.1-53.2-40.7-96.9-92.8-101.4z"/><path fill="#000" d="m291.9 223.4-11.8 14s51.9 38.9 53.6 40.4c1.7 1.5 5.2 2 9.1-2.7 3.7-4.5 2.8-8.1.9-9.7-2-1.5-51.8-42-51.8-42z"/><path d="M206.1 157.2c-7.7 10.3-7.5 23.1 2.8 30.9 0 0 135.2 101.5 136.9 103 1.7 1.5 5.2 2 9.1-2.7 3.7-4.5 2.8-8.1.9-9.7-1.9-1.5-149.7-121.5-149.7-121.5zM253.8 256.3l7.3 18.2 19.5-6-4.8-19.1zM213.4 252.6l-2 19.5 20.1 3.6 4.5-19.1zM177.7 231.4 167.4 248l16.4 12.1 12.5-15.2z"/></g></svg>',G2='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 744 496"><path fill="#3A7DCE" d="M0 0h744v496H0V0z"/><path fill="#fff" d="m120 125 90 63 54-14 23-81 61-36 92 14 105 55 6 90 34 12v92l-65 115-78 24-72-17 18-30-8-32-10 9-162-25-49-85 20-46-49-62z"/></svg>',W2='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 513 342"><path fill="#FFF" d="M0 0h512v342H0z"/><path fill="#338AF3" d="M0 0h512v114H0zM0 228h512v114H0z"/><circle fill="#FFDA44" stroke="#d6ab00" stroke-width="5" cx="256.5" cy="171" r="40"/></svg>',U2='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 513 342"><path fill="#10338c" d="M0 0h513v342H0z"/><path fill="#D80027" d="M513 33 95.3 171 513 310.76v30.57L0 171 513 0z"/><path fill="#FFF" d="M513 287.18v24.58L81.72 171 513 30v24.16"/><path fill="#A2001D" d="m476.98 140.21-21.89 10.68-3.18-15.32 31.19-29.77s-9.42-40.65-13.75-44.98l-112.32 55.82-6.84 36.76-31.9 28.59-.4 34.2 34.29-22.76 67.23-2.66-1.51 38.11h22.23l11.9-44.64 31.55-24.61-6.6-19.42z"/><path fill="#EFC100" stroke="#231F20" stroke-miterlimit="10" d="m317.89 238.41-22.24-11.11 22.24-11.11h144.46v22.22z"/></svg>',q2='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 513 342"><path fill="#FFF" d="M0 114h513v114H0z"/><path fill="#D80027" d="M0 0h513v114H0zM0 228h513v114H0z"/></svg>',Y2='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 513 342"><path fill="#10338c" d="M0 0h513v342H0z"/><g fill="#FFF"><path d="M222.2 170.7c.3-.3.5-.6.8-.9-.2.3-.5.6-.8.9zM188 212.6l11 22.9 24.7-5.7-11 22.8 19.9 15.8-24.8 5.6.1 25.4-19.9-15.9-19.8 15.9.1-25.4-24.8-5.6 19.9-15.8-11.1-22.8 24.8 5.7zM385.9 241.1l5.2 10.9 11.8-2.7-5.3 10.9 9.5 7.5-11.8 2.6v12.2l-9.4-7.6-9.5 7.6.1-12.2-11.8-2.6 9.5-7.5-5.3-10.9 11.8 2.7zM337.3 125.1l5.2 10.9 11.8-2.7-5.3 10.9 9.5 7.5-11.8 2.7v12.1l-9.4-7.6-9.5 7.6.1-12.1-11.9-2.7 9.5-7.5-5.3-10.9L332 136zM385.9 58.9l5.2 10.9 11.8-2.7-5.3 10.9 9.5 7.5-11.8 2.7v12.1l-9.4-7.6-9.5 7.6.1-12.1-11.8-2.7 9.5-7.5-5.3-10.9 11.8 2.7zM428.4 108.6l5.2 10.9 11.8-2.7-5.3 10.9 9.5 7.5-11.8 2.6V150l-9.4-7.6-9.5 7.6v-12.2l-11.8-2.6 9.5-7.5-5.3-10.9 11.8 2.7zM398 166.5l4.1 12.7h13.3l-10.8 7.8 4.2 12.7-10.8-7.9-10.8 7.9 4.1-12.7-10.7-7.8h13.3z"/><path d="M254.8 0v30.6l-45.1 25.1h45.1V115h-59.1l59.1 32.8v22.9h-26.7l-73.5-40.9v40.9H99v-48.6l-87.4 48.6H-1.2v-30.6L44 115H-1.2V55.7h59.1L-1.2 22.8V0h26.7L99 40.8V0h55.6v48.6L242.1 0z"/></g><path fill="#D80027" d="M142.8 0h-32v69.3h-112v32h112v69.4h32v-69.4h112v-32h-112z"/><path fill="#0052B4" d="m154.6 115 100.2 55.7v-15.8L183 115z"/><path fill="#FFF" d="m154.6 115 100.2 55.7v-15.8L183 115z"/><g fill="#D80027"><path d="m154.6 115 100.2 55.7v-15.8L183 115zM70.7 115l-71.9 39.9v15.8L99 115z"/></g><path fill="#0052B4" d="M99 55.7-1.2 0v15.7l71.9 40z"/><path fill="#FFF" d="M99 55.7-1.2 0v15.7l71.9 40z"/><g fill="#D80027"><path d="M99 55.7-1.2 0v15.7l71.9 40zM183 55.7l71.8-40V0L154.6 55.7z"/></g></svg>',K2='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 363 242"><path fill="#338AF3" d="M0 0h363v242H0z"/><path fill="#FFF" d="M57 96.9 14.7 78.2 57 59.6l18.6-42.2 18.6 42.2 42.3 18.6-42.3 18.7-18.6 42.2z"/><path fill="#f30028" d="m75.6 40.6 11.5 26.1 26.1 11.5-26.1 11.5-11.5 26.1-11.5-26.1L38 78.2l26.1-11.5z"/><g fill="#FFDA44"><path d="M0 152.2h363v15.7H0zM0 183.6h363v15.7H0z"/></g></svg>',Z2='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 513 342"><path fill="#0052B4" d="M0 0h513v342H0z"/><path fill="#FFDA44" d="M513 210.9H202.2V342h-79.8V210.9H0V131.1h122.4V0h79.8v131.1H513v61.2z"/><path fill="#D80027" d="M513 149.7v42.6H183.7V342H141V192.3H0v-42.6h141V0h42.7v149.7z"/></svg>',J2='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 513 342"><path fill="#ef3340" d="M0 0h513v342H0z"/><path fill="#00b5e2" d="M0 0h513v114H0z"/><path fill="#509e2f" d="M0 228h513v114H0z"/><g fill="#FFF"><path d="M265.6 212.6c-23 0-41.6-18.6-41.6-41.6s18.6-41.6 41.6-41.6c7.2 0 13.9 1.8 19.8 5-9.2-9-21.9-14.6-35.8-14.6-28.3 0-51.2 22.9-51.2 51.2s22.9 51.2 51.2 51.2c13.9 0 26.6-5.6 35.8-14.6-5.9 3.2-12.6 5-19.8 5z"/><path d="m297.6 142.2 5.5 15.5 14.9-7.1-7.1 14.9 15.5 5.5-15.5 5.5 7.1 14.9-14.9-7.1-5.5 15.5-5.5-15.5-14.9 7.1 7.1-14.9-15.5-5.5 15.5-5.5-7.1-14.9 14.9 7.1z"/></g></svg>',X2='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 513 342"><path fill="#10338C" d="M0 0h513.1v342H0z"/><path fill="#F6C500" d="M99.9 0h342v342"/><g fill="#FFF"><path d="M19.9 21.1 40.3 6.2 60.9 21 54 0H26.7z"/><path d="M92.3 25.5 84.4 1.3l-7.8 24.2H51.3l20.5 14.8-7.8 24 20.4-14.8L105 64.3l-7.9-24 20.5-14.9z"/><path d="m136.3 69.2-7.8-24-7.8 24H95.5l20.4 14.9-7.8 24 20.4-14.8 20.6 14.8-7.8-24 20.4-14.9z"/><path d="m179.4 112.3-7.8-24.1-7.8 24.1h-25.3l20.5 14.9-7.8 24 20.4-14.8 20.6 14.8-7.9-24 20.5-15z"/><path d="m222.5 155.3-7.8-24-7.8 24h-25.4l20.6 15-7.8 24 20.4-14.9 20.4 14.9-7.8-24 20.6-15z"/><path d="m265.6 198.4-7.8-24-7.8 24h-25.4l20.6 14.9-7.8 24.1 20.4-14.9 20.4 14.9-7.8-24.2 20.5-14.8z"/><path d="m308.7 241.5-7.9-24-7.8 24h-25.3l20.5 14.8-7.9 24.2 20.6-14.9 20.4 14.8-7.8-24.1 20.5-14.8z"/><path d="m351.7 284.6-7.8-24.2-7.8 24.2h-25.3l20.4 14.8-7.8 24.1 20.5-14.9 20.5 14.9-7.8-24.1 20.4-14.8z"/><path d="m387 303.5-7.9 24.1-25.3.1 19.8 14.3h26.6l19.9-14.4h-25.3z"/></g></svg>',Q2='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 513 342"><path fill="#ffc726" d="M0 0h513v342H0z"/><g fill="#00267f"><path d="M0 0h171v342H0zM342 0h171v342H342z"/></g><path d="m325.74 101.02-31.97 12.4c-.68 1.35-5.79 7.54-8.18 53.06h-17.05v-60.42L256 78.68l-12.54 27v60.8H226.4c-2.39-45.53-7.8-52.48-8.47-53.84l-31.68-11.63c.15.31 15.4 31.34 15.4 78.01v12.54h41.81v71.07h25.08v-71.07h41.81v-12.54c0-24.13 4.17-44.02 7.68-56.46 3.82-13.57 7.7-21.49 7.74-21.57l-.03.03z"/></svg>',e3='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.333 513 342"><path fill="#2d6e41" d="M0 85.331h513v342H0z"/><circle fill="#F40B32" cx="218.902" cy="256.5" r="115"/></svg>',t3='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 513 342"><path fill="#fdda25" d="M0 0h513v342H0z"/><path d="M0 0h171v342H0z"/><path fill="#ef3340" d="M342 0h171v342H342z"/></svg>',i3='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 513 342"><path fill="#3d944f" d="M0 0h513v342H0z"/><path fill="#ef2b2d" d="M0 0h513v171H0z"/><path fill="#FFDA44" d="m256 102.6 16.9 52h54.7l-44.2 32.2 16.8 52-44.2-32.1-44.2 32.1 16.8-52-44.2-32.2h54.7z"/></svg>',s3='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.333 512 341.333"><path fill="#00966e" d="M0 85.337h512v341.326H0z"/><path fill="#FFF" d="M0 85.337h512v113.775H0z"/><path fill="#d62612" d="M0 312.888h512v113.775H0z"/></svg>',r3='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 341.3"><path fill="#D80027" d="M0 0h512v341.3H0z"/><path fill="#FFF" d="m222.8 34.3-85.2 34.2 85.2 34.1-85.2 34.1 85.2 34.1-85.2 34.1 85.2 34.1-85.2 34.1 85.2 34.1-85.2 34.1H0V0h137.6z"/></svg>',n3='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 513 342"><path fill="#D80027" d="M0 0h513v342H0z"/><g fill="#47a644"><path d="M215.9 170.7 0 314.6V26.8zM513 26.8v287.8L297.1 170.7z"/></g><path fill="#0052B4" d="M512 26.8 296.1 170.7 512 314.6v26.7h-40.1L256 197.4 40.1 341.3H0v-26.7l215.9-143.9L0 26.8V0h40.1L256 143.9 471.9 0H512z"/><path fill="#FFF" d="M513 26.8 297.1 170.7 513 314.6V342h-40L256 197.4 39 342H0v-27.4l215.9-143.9L0 26.8V0h40.1L256 143.9 471.9 0H513z"/><circle fill="#FFF" cx="251.6" cy="170.7" r="100.2"/><g fill="#D80027" stroke="#47a644" stroke-width="3"><path d="m251.4 103.6 7.4 12.9h14.8l-7.4 12.8 7.4 12.8h-14.8l-7.4 12.9-7.4-12.9h-14.8l7.4-12.8-7.4-12.8H244zM290.2 170.3l7.4 12.9h14.8L305 196l7.4 12.8h-14.8l-7.4 12.9-7.4-12.9h-14.9l7.4-12.8-7.4-12.8h14.9zM213 170.3l7.4 12.9h14.9l-7.4 12.8 7.4 12.8h-14.9l-7.4 12.9-7.4-12.9h-14.8l7.4-12.8-7.4-12.8h14.8z"/></g></svg>',l3='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.333 513 342"><path fill="#008751" d="M0 85.333h513v342H0z"/><path fill="#fcd116" d="M196.666 85.333H513v171H196.666z"/><path fill="#e8112d" d="M196.666 256H513v171H196.666z"/></svg>',a3='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 341.33"><path fill="#FFF" d="M0 0h512v341.33H0z"/><path fill="#E6BC00" d="M157.31 199.76s-9.04 43.93-19.31 40.39c-10.62-3.54-17.53-18.76-17.53-18.76l-14.52 21.24s38.18 8.48 41.01 5.47c1.22-1.14 8.21-15.1 10.34-26.05v-22.29zm-56.13 60.57s-2.48 20.18-1.06 22.66c1.24 2.3 39.48 11.33 39.48 11.33s-24.96 16.46-29.74 20.54L91.8 284.94l-.71-24.61h10.09zM112.51 94.64s39.65 41.6 40.36 45.5c.71 3.72-4.25 3.19-4.25 3.19s-44.79-37.53-49.92-41.07c-5.31-3.55 13.81-7.62 13.81-7.62z"/><path fill="#ADADAD" d="M99.41 104.73s16.99-.71 16.64-11.51c-.35-10.62-11.15-14.87-19.12-12.39-7.97 2.3-23.01 13.45-13.63 35.05 9.38 21.42 23.37 29.39 26.2 47.8 0 0-5.46 9.86-19.12.35-16.9-11.77-6.2-38.24-10.44-44.96-4.25-7.08-40.95-38.92-40.95-38.92s-30.24 39.37-18 74.92c16.95 49.21 51.74 31.98 64.61 36.76 0 0-42.13 61.96-49.57 67.09 0 0 24.08 8.32 47.8-18.76 0 0 5.84 9.74 7.08 20.18h10.27c4.78-26.2 51.51-64.26 49.92-82.32-1.77-21.25-49.21-49.39-51.69-73.29z"/><path fill="#E6BC00" d="M359.17 201.27s8.96 42.43 19.23 38.89c10.62-3.54 17.53-18.76 17.53-18.76l14.52 21.24s-37 8.48-39.83 5.47c-1.21-1.14-9.32-13.79-11.52-24.66l.07-22.18zm56.05 59.06s2.48 20.18 1.06 22.66c-1.24 2.3-39.48 11.33-39.48 11.33s24.96 16.46 29.74 20.54l18.06-29.92.71-24.61h-10.09zM403.89 94.64s-39.65 41.6-40.36 45.5c-.71 3.72 4.25 3.19 4.25 3.19s44.79-37.53 49.92-41.07c5.14-3.55-13.81-7.62-13.81-7.62z"/><path fill="#125ECC" d="M157.31 87.06H359.1v145.46c0 16.06-9.69 21.39-21.91 31.85l-45.92 39.41c-18.25 15.62-47.91 15.57-66.07 0l-46.01-39.43c-12.08-10.35-21.88-15.71-21.88-31.82V87.06z"/><path fill="#FFE600" d="M200.55 147.71c-7.96 0-14.41-6.45-14.41-14.41s6.45-14.41 14.41-14.41 14.41 6.45 14.41 14.41-6.45 14.41-14.41 14.41zm57.65-3c-7.96 0-14.41-6.45-14.41-14.41s6.45-14.41 14.41-14.41 14.41 6.45 14.41 14.41-6.45 14.41-14.41 14.41zm57.65 3c-7.96 0-14.41-6.45-14.41-14.41s6.45-14.41 14.41-14.41 14.41 6.45 14.41 14.41-6.45 14.41-14.41 14.41zM214.96 274.43c-7.96 0-14.41-6.45-14.41-14.41s6.45-14.41 14.41-14.41 14.41 6.45 14.41 14.41c.01 7.96-6.45 14.41-14.41 14.41zm43.24 14.42c-7.96 0-14.41-6.45-14.41-14.41s6.45-14.41 14.41-14.41 14.41 6.45 14.41 14.41c0 7.95-6.45 14.41-14.41 14.41zm43.24-14.42c-7.96 0-14.41-6.45-14.41-14.41s6.45-14.41 14.41-14.41 14.41 6.45 14.41 14.41-6.45 14.41-14.41 14.41z"/><path fill="#D60537" d="M157.31 175.36H359.1v57.65H157.31v-57.65z"/><path fill="#EACE00" d="M142.9 43.82s57.65-14.41 115.31-14.41 115.31 14.41 115.31 14.41l-14.41 57.65s-50.45-14.41-100.89-14.41-100.89 14.41-100.89 14.41L142.9 43.82z"/><path fill="#7A6920" d="M258.2 72.65c-7.96 0-14.41-6.45-14.41-14.41s6.45-14.41 14.41-14.41 14.41 6.45 14.41 14.41-6.45 14.41-14.41 14.41zm57.65 5c-7.96 0-14.41-6.45-14.41-14.41s6.45-14.41 14.41-14.41 14.41 6.45 14.41 14.41-6.45 14.41-14.41 14.41zm-115.3 0c-7.96 0-14.41-6.45-14.41-14.41s6.45-14.41 14.41-14.41 14.41 6.45 14.41 14.41-6.45 14.41-14.41 14.41z"/><path fill="#ADADAD" d="M365.08 178.02c-1.59 18.06 45.14 56.12 49.92 82.32h10.27c1.24-10.44 7.08-20.18 7.08-20.18 23.72 27.09 47.8 18.76 47.8 18.76-7.44-5.13-49.57-67.09-49.57-67.09 12.88-4.78 47.67 12.45 64.61-36.76 12.24-35.55-18-74.92-18-74.92s-36.7 31.84-40.95 38.92c-4.25 6.73 6.46 33.2-10.44 44.96-13.66 9.51-19.12-.35-19.12-.35 2.83-18.41 16.82-26.38 26.2-47.8 9.38-21.6-5.66-32.75-13.63-35.05-7.97-2.48-18.76 1.77-19.12 12.39-.35 10.8 16.64 11.51 16.64 11.51-2.48 23.9-49.92 52.04-51.69 73.29z"/><circle fill="#FFF" cx="258.2" cy="204.19" r="16.93"/></svg>',o3='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 513 342"><path fill="#c8102e" d="M0 0h513v342H0z"/><path fill="#012169" d="M0 .1h256.5v171H0z"/><path fill="#FFF" d="M256 0h-22.6L160 48.9V0H96v48.9L22.6 0H0v22.7l46.1 30.7H0v64h46.1L0 148.1v22.6h22.6L96 121.8v48.9h64v-48.9l73.4 48.9H256v-22.6l-46.1-30.7H256v-64h-46.1L256 22.7z"/><path fill="#c8102e" d="M144 0h-32v69.4H0v32h112v69.3h32v-69.3h112v-32H144z"/><path fill="#c8102e" d="M0 170.7v-11l62.5-42.3h22.6L7.3 170.7zM7.3.1l77.8 53.2H62.5L0 11.1V.1zM256 .1v11l-62.5 42.3h-22.6L248.7.1zM248.7 170.7l-77.8-53.3h22.6l62.5 42.3v11z"/><g transform="translate(13 5)"><path fill="#fff" d="M303.9 94.94v99.69c0 59.81 79.75 99.69 79.75 99.69s79.75-39.88 79.75-99.69V94.94H303.9z"/><path fill="#2F8F22" d="M436.37 254.44H330.93c23.13 25.08 52.72 39.88 52.72 39.88s29.59-14.8 52.72-39.88z"/><circle fill="#65B5D2" cx="383.65" cy="214.56" r="39.88"/><circle fill="#c8102e" cx="343.77" cy="194.63" r="19.94"/><circle fill="#c8102e" cx="423.52" cy="194.63" r="19.94"/><circle fill="#c8102e" cx="383.65" cy="154.75" r="19.94"/></g></svg>',h3='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 341.33"><path fill="#FFDA44" d="M0 0h512v341.33H0z"/><path d="m0 193.74 512 127.19V214.26L0 97.08z"/><path fill="#FFF" d="M512 234.26v-86.67L0 20.41v86.67"/><g fill="#D80027" stroke="#231F20" stroke-width="3" stroke-miterlimit="10"><path d="M306.4 134.01a50.28 50.28 0 0 1 6.07 24.02c0 21.55-13.51 39.94-32.52 47.19v-59.51c5.7-1.19 10-6.37 10-12.59 6.9 0 12.5-5.75 12.5-12.85h-.42c6.9 0 12.91-5.75 12.91-12.85h-34.99V76.58l-14.99-27.71-15 27.71v30.84h-34.99c0 7.1 6.01 12.85 12.91 12.85h-.42c0 7.1 5.6 12.85 12.5 12.85 0 6.22 4.29 11.4 9.99 12.59v61.37c-22.09-5.39-38.48-25.3-38.48-49.05 0-8.7 2.2-16.88 6.07-24.02-10.96 11.21-17.72 26.53-17.72 43.44 0 34.32 27.82 62.15 62.15 62.15s62.15-27.83 62.15-62.15c0-16.91-6.77-32.24-17.72-43.44z"/><path d="M198.46 226.81s20.69 27.71 66.5 27.71 66.5-27.71 66.5-27.71l13.47 28.37s-21.03 27.71-79.97 27.71-79.97-27.71-79.97-27.71l13.47-28.37zM129.24 133.18h20.88l24.93 27.26v73.45h-26.28v-68.37zM400 133.18h-20.88l-24.93 27.26v73.45h26.27v-68.37z"/></g></svg>',d3='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.333 512 341.333"><path fill="#007934" d="M0 85.337h512v341.326H0z"/><path fill="#d52b1e" d="M0 85.337h512v113.775H0z"/><path fill="#f9e300" d="M0 312.888h512v113.775H0z"/></svg>',c3='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 341.3"><path fill="#FFF" d="M0 0h512v341.3H0z"/><path fill="#012a87" d="M0 341.3h512V0z"/><path fill="#f9d90f" d="M250.4 0H0v166.9z"/><path fill="#dc171d" d="m140.4 118.3 12.2 21.2h24.5l-12.3 21.1 12.3 21.2h-24.5L140.4 203l-12.2-21.2h-24.5l12.3-21.2-12.3-21.1h24.5z"/><circle fill="none" stroke="#000" stroke-width="9" stroke-miterlimit="10" cx="140.4" cy="160.6" r="57.7"/></svg>',u3='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 513 342"><path fill="#009b3a" d="M0 0h513v342H0z"/><path fill="#fedf00" d="m256.5 19.3 204.9 151.4L256.5 322 50.6 170.7z"/><circle fill="#FFF" cx="256.5" cy="171" r="80.4"/><path fill="#002776" d="M215.9 165.7c-13.9 0-27.4 2.1-40.1 6 .6 43.9 36.3 79.3 80.3 79.3 27.2 0 51.3-13.6 65.8-34.3-24.9-31-63.2-51-106-51zM334.9 186c.9-5 1.5-10.1 1.5-15.4 0-44.4-36-80.4-80.4-80.4-33.1 0-61.5 20.1-73.9 48.6 10.9-2.2 22.1-3.4 33.6-3.4 46.8.1 89 19.5 119.2 50.6z"/></svg>',p3='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.333 512 341.333"><path fill="#ffc72c" d="M0 85.337h512v341.326H0z"/><g fill="#00778b"><path d="M0 85.337h512v113.775H0zM0 312.888h512v113.775H0z"/></g><path d="M256 256.006 0 426.668V85.331z"/></svg>',f3='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 341.3"><path fill="#FF7415" d="M0 0h512v341.3H0z"/><path fill="#FFDA44" d="M512 0H0v341.3"/><path fill="none" stroke="#FFF" stroke-width="42" stroke-miterlimit="10" d="M128.7 255.5s35 54 67.3 32.4c56.9-37.9-68.9-108.6-2.9-152.6 58.3-38.8 76.6 103.5 137.6 62.8 59-39.3-64.7-111.4-9.2-148.4 33.4-22.2 67.1 32.6 67.1 32.6"/></svg>',g3='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 33.333 1100 733.333"><path fill="#ef2b2d" d="M0 0h1100v800H0z"/><path fill="#fff" d="M300 0h200v800H300z"/><path fill="#fff" d="M0 300h1100v200H0z"/><path fill="#002868" d="M350 0h100v800H350z"/><path fill="#002868" d="M0 350h1100v100H0z"/></svg>',m3='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 513 342"><path fill="#FFF" d="M0 0h513v342H0z"/><g fill="#6da9d2"><path d="M0 238h513v104H0zM0 0h513v104H0z"/></g><path d="M0 125.5h513v89.656H0z"/></svg>',v3='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 513 342"><path fill="#007C30" d="M0 0h513v342H0z"/><path fill="#CE1720" d="M0 230h513V0H0"/><path fill="#FFF" d="M100 230V0H0v342h513-413z"/><g fill="#CE1720"><path d="M28 159.6 8.6 128.2 28 97.4l19.3 30.8zM72.6 159.6l-19.3-31.4 19.3-30.8L92 128.2zM28 241.2 8.6 209.8 28 179l19.3 30.8zM72.6 241.2l-19.3-31.4L72.6 179 92 209.8z"/></g><g fill="none" stroke="#CE1720" stroke-width="7"><path d="m28 73.8-16.1-26L28 22.2l16 25.6zM72.6 73.8l-16-26 16-25.6 16.1 25.6zM28 318l-16.1-26.1L28 266.3l16 25.6zM72.6 318l-16-26.1 16-25.6 16.1 25.6z"/></g></svg>',_3='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 341.3"><path fill="#003e87" d="M0 0h512v341.3H0z"/><circle fill="#FFF" cx="260.9" cy="170.9" r="118.9"/><circle fill="none" stroke="#6DA544" stroke-width="18" stroke-miterlimit="10" cx="261.9" cy="173.1" r="94.5"/><g stroke="#000"><path fill="#003e87" d="m261.9 151.5-50.6 23.4v20c0 11.8 6.1 22.8 16.2 28.9L262 239l34.5-15.2c10-6.2 16.2-17.1 16.2-28.9v-20l-50.8-23.4z"/><path fill="#FFDA44" d="M211.3 128.1h101.3v46.7H211.3z"/></g><g fill="#ce1127"><path d="M0 0h512v35H0zM0 306h512v35H0z"/></g></svg>',w3='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 513 342"><path fill="#FFF" d="M0 0h513v342H0z"/><g fill="red"><path d="M0 0h142v342H0zM371 0h142v342H371zM306.5 206l50.4-25.2-25.2-12.6V143l-50.4 25.2 25.2-50.4h-25.2L256.1 80l-25.2 37.8h-25.2l25.2 50.4-50.4-25.2v25.2l-25.2 12.6 50.4 25.2-12.6 25.2h50.4V269h25.2v-37.8h50.4z"/></g></svg>',b3='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 341.3"><path fill="green" d="M0 0h512v341.3H0z"/><g fill="#FFDA44"><path d="m422.7 252.4 6.2 12.8 13.8-3.2-6.2 12.8 11.2 8.8-13.9 3.2V301l-11.1-8.9-11.1 8.9v-14.2l-13.8-3.2 11.1-8.8-6.2-12.8 13.9 3.2zM376.1 116.1l6.2 12.9 13.8-3.2-6.2 12.8 11.2 8.8-13.9 3.1v14.3l-11.1-8.9-11.1 8.9.1-14.3-13.9-3.1 11.1-8.8-6.2-12.8L370 129zM413.1 38.3l6.2 12.8 13.8-3.2-6.2 12.8 11.2 8.9-13.9 3.1v14.2L413.1 78 402 86.9l.1-14.2-13.9-3.1 11.1-8.9-6.2-12.8 13.9 3.2zM464.9 96.7l6.2 12.8 13.9-3.2-6.3 12.8 11.2 8.9-13.9 3.1.1 14.2-11.2-8.9-11.1 8.9.1-14.2L440 128l11.2-8.9-6.3-12.8 13.9 3.2zM436.9 164.8l4.9 14.8h15.6l-12.6 9.2 4.8 14.9-12.7-9.2-12.6 9.2 4.8-14.9-12.6-9.2h15.6z"/></g><path fill="#FFDA44" d="M306.8 254.7c-49.2 0-89.1-39.9-89.1-89.1s39.9-89.1 89.1-89.1c15.3 0 29.8 3.9 42.4 10.7C329.4 67.9 302.3 56 272.5 56c-60.5 0-109.6 49.1-109.6 109.6S212 275.3 272.5 275.3c29.8 0 56.9-11.9 76.6-31.3-12.6 6.8-27 10.7-42.3 10.7zM140.4 59.5C129.7 41 109.7 28.6 86.8 28.6S44 41 33.3 59.5h107.1zM140.6 59.9l-53.8 53.8-53.7-53.8C28 68.9 25 79.3 25 90.5c0 34.2 27.7 61.9 61.9 61.9s61.9-27.7 61.9-61.9c-.1-11.2-3.1-21.6-8.2-30.6z"/><path fill="#A2001D" d="M71.4 98.2v52.2c4.9 1.3 10.1 1.9 15.5 1.9s10.5-.7 15.5-1.9V98.2h-31z"/></svg>',y3='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 341.3"><path fill="#338AF3" d="M0 0h512v341.3H0z"/><path fill="#FFDA44" d="M512 66.9V0H411.7L0 274.4v66.9h100.3z"/><path fill="#D80027" d="M512 0v40.1L60.2 341.3H0v-40.1L451.8 0z"/><path fill="#FFDA44" d="m93.6 31.2 16.3 50.4H163l-42.9 31.2 16.4 50.5-42.9-31.2-43 31.2L67 112.8 24.1 81.6h53.1z"/></svg>',z3='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 341.3"><path fill="#d21034" d="M0 0h512v341.3H0z"/><g fill="#3a9927"><path d="M0 170.7h211.5V256H0zM300.5 170.7H512V256H300.5z"/></g><path fill="#003082" d="M0 0v85.3h211.5V0h89v85.3H512V0z"/><g fill="#FFF"><path d="M300.5 85.3H512v85.3H300.5zM0 85.3h211.5v85.3H0z"/></g><g fill="#ffce00"><path d="M300.5 341.3h-89V256H0v85.3h512V256H300.5zM105.7 8.6l8.6 26.2h27.5L119.5 51l8.6 26.2L105.7 61 83.4 77.2 91.9 51 69.6 34.8h27.6z"/></g></svg>',x3='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.333 513 342"><path fill="#da1a35" d="M0 85.331h513v342H0z"/><path fill="#009543" d="M443.726 85.331 102.4 426.657H0V85.331z"/><path fill="#fbde4a" d="M500.124 85.331 158.798 426.657H11.876L353.202 85.331z"/></svg>',M3='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.333 513 342"><path fill="red" d="M0 85.337h513v342H0z"/><path fill="#FFF" d="M356.174 222.609h-66.783v-66.783h-66.782v66.783h-66.783v66.782h66.783v66.783h66.782v-66.783h66.783z"/></svg>',F3='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.333 512 341.333"><path fill="#FFF" d="M0 85.331h512v341.326H0z"/><path fill="#009e60" d="M330.207 85.331H512v341.337H330.207z"/><path fill="#f77f00" d="M0 85.331h181.793v341.337H0z"/></svg>',A3='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.333 513 342"><path fill="#01237a" d="M0 85.332h513v342H0z"/><g fill="#FFF"><path d="m384 156.705 5.283 16.254h17.089l-13.826 10.045 5.281 16.254L384 189.211l-13.825 10.047 5.28-16.254-13.825-10.045h17.089zM313.791 185.786l15.228 7.758 12.084-12.083-2.673 16.879 15.227 7.759-16.879 2.673-2.674 16.88-7.76-15.227-16.878 2.673 12.086-12.084zM284.71 255.995l16.254-5.281.001-17.089 10.044 13.825 16.254-5.282-10.046 13.827 10.046 13.826-16.254-5.28-10.044 13.825v-17.09zM313.791 326.204l7.759-15.229-12.084-12.084 16.881 2.674 7.757-15.227 2.674 16.879 16.879 2.672-15.227 7.759 2.673 16.882-12.084-12.087zM384 355.284l-5.281-16.253h-17.091l13.827-10.045-5.28-16.254L384 322.776l13.827-10.044-5.281 16.254 13.826 10.045h-17.089zM454.209 326.204l-15.229-7.758-12.083 12.084 2.673-16.882-15.227-7.756 16.879-2.675 2.675-16.879 7.756 15.227 16.881-2.674-12.086 12.085zM483.29 255.995l-16.254 5.281v17.09l-10.045-13.826-16.254 5.281 10.046-13.826-10.046-13.827 16.254 5.282 10.045-13.825v17.089zM454.209 185.788l-7.757 15.226 12.082 12.084-16.881-2.673-7.756 15.227-2.675-16.88-16.879-2.675 15.227-7.757-2.673-16.878 12.084 12.082zM0 186.665v16h46.069L0 233.377v7.539l57.377-38.252H80L0 255.998h112v-69.334H0zm96 69.331H22.628L96 207.083v48.913zM176 138.665l80-53.334H144v69.334h112v-16h-46.069L256 107.951v-7.539l-57.377 38.251H176v.002zm-16-53.332h73.372L160 134.246V85.333zM144 255.998h112l-80-53.334h22.623L256 240.917v-7.539l-46.069-30.713H256v-16H144v69.333zm16-48.915 73.372 48.913H160v-48.913zM112 85.331H0l80 53.334H57.377L0 100.413v7.539l46.069 30.712H0v16h112V85.331zm-16 48.915L22.628 85.333H96v48.913z"/></g><g fill="#D80027"><path d="M144 85.331h-32v69.334H0v32h112v69.333h32v-69.333h112v-32H144z"/><path d="M80 138.665 0 85.331v15.082l57.377 38.252zM176 138.665h22.623L256 100.413V85.331zM57.377 202.665 0 240.917v15.081l80-53.333zM176 202.665l80 53.333v-15.081l-57.377-38.252z"/></g></svg>',H3='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 513 342"><path fill="#D80027" d="M0 0h513v342H0z"/><path fill="#FFF" d="M196 0h317v171H196z"/><path fill="#0037A1" d="M0 0h196v171H0z"/><path fill="#FFF" d="M98 24.5 113.1 71H162l-39.6 28.7 15.2 46.5L98 117.5l-39.6 28.7 15.2-46.5L34 71h48.9z"/></svg>',C3='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 513 342"><path fill="#ce1126" d="M0 0h513v342H0z"/><path fill="#007a5e" d="M0 0h171v342H0z"/><g fill="#fcd116"><path d="M342 0h171v342H342zM256 102.2l17.2 53H329L283.9 188l17.2 53-45.1-32.7-45.1 32.7 17.2-53-45.1-32.8h55.8z"/></g></svg>',S3='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 513 342"><path fill="#D80027" d="M0 0h513v342H0z"/><g fill="#FFDA44"><path d="m226.8 239.2-9.7-15.6-17.9 4.4 11.9-14.1-9.7-15.6 17.1 6.9 11.8-14.1-1.3 18.4 17.1 6.9-17.9 4.4zM290.6 82l-10.1 15.4 11.6 14.3-17.7-4.8-10.1 15.5-1-18.4-17.7-4.8 17.2-6.6-1-18.4 11.6 14.3zM236.2 25.4l-2 18.3 16.8 7.6-18 3.8-2 18.3-9.2-16-17.9 3.8 12.3-13.7-9.2-15.9 16.8 7.5zM292.8 161.8l-14.9 10.9 5.8 17.5-14.9-10.8-14.9 11 5.6-17.6-14.9-10.7 18.4-.1 5.6-17.6 5.8 17.5zM115 46.3l17.3 53.5h56.2l-45.4 32.9 17.3 53.5-45.4-33-45.5 33 17.4-53.5-45.5-32.9h56.3z"/></g></svg>',D3='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.333 512 341.333"><path fill="#FFDA44" d="M0 85.337h512v341.326H0z"/><path fill="#D80027" d="M0 343.096h512v83.567H0z"/><path fill="#0052B4" d="M0 256h512v87.096H0z"/></svg>',E3='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.333 512 341.333"><path fill="#FFF" d="M0 85.331h512v341.326H0z"/><path fill="#D80027" d="M0 211.473h512v89.043H0z"/><g fill="#0052B4"><path d="M0 352.462h512v74.207H0zM0 85.331h512v74.207H0z"/></g></svg>',P3='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 341.3"><path fill="#FF9811" d="M0-40.8v422.9-211.4z"/><path fill="#FFF" d="M0 0h512v341.3H0z"/><g fill="#0052B4"><path d="M0 0h512v68.3H0zM0 136.5h512v68.3H0zM0 273.1h512v68.3H0z"/></g><path fill="#D80027" d="M256 170.7 0 341.3V0z"/><path fill="#FFF" d="m86.5 111.4 12.7 39.2h41.3l-33.4 24.2 12.8 39.3-33.4-24.2-33.4 24.2 12.8-39.3-33.4-24.2h41.2z"/></svg>',B3='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 513 342"><path fill="#003893" d="M0 0h513v342H0z"/><path fill="#cf2027" d="M0 182.2h513v41.4H0z"/><path fill="#FFF" d="M0 140.8h513v41.4H0zM0 223.6h513V265H0z"/><g fill="#f7d116" stroke="#000"><path d="m150.4 70 6.9 21.1h22.2l-18 13.1 6.9 21.1-18-13.1-17.9 13.1 6.8-21.1-17.9-13.1h22.2zM150.4 279.7l6.9 21.1h22.2l-18 13 6.9 21.2-18-13.1-17.9 13.1 6.8-21.2-17.9-13h22.2zM52.8 208.8l6.9 21.1h22.2l-18 13 6.9 21.2-18-13.1-17.9 13.1 6.8-21.2-17.9-13H46zM90.1 91l6.9 21.1h22.2l-18 13 6.9 21.2-18-13.1-17.9 13.1 6.8-21.2-18-13h22.3zM23.8 162H46l6.8-21.1 6.9 21.1h22.2l-18 13.1 6.9 21.1-18-13-17.9 13 6.8-21.1zM72.2 310.9l6.8-21.1-18-13h22.3l6.8-21.2 6.9 21.2h22.2l-18 13 6.9 21.1-18-13zM248 208.8l-6.9 21.1h-22.2l18 13-6.9 21.2 18-13.1 18 13.1-6.9-21.2 18-13h-22.2zM210.7 91l-6.8 21.1h-22.2l17.9 13-6.8 21.2 17.9-13.1 18 13.1-6.9-21.2 18-13h-22.2zM277.1 162h-22.2l-6.9-21.1-6.9 21.1h-22.2l18 13.1-6.9 21.1 18-13 18 13-6.9-21.1zM228.7 310.9l-6.9-21.1 18-13h-22.2l-6.9-21.2-6.8 21.2h-22.2l17.9 13-6.8 21.1 17.9-13z"/></g></svg>',k3='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 513 342"><path fill="#002b7f" d="M0 0h513v342H0z"/><path fill="#f9e814" d="M0 233.5h513v51H0z"/><g fill="#FFF"><path d="m168.7 86.5 12.9 39.8h41.8l-33.8 24.5 12.9 39.7-33.8-24.5-33.8 24.5 12.9-39.7-33.8-24.5h41.8zM85.4 32.5l7.8 23.9h25L97.9 71.1l7.8 23.8-20.3-14.7-20.3 14.7 7.8-23.8-20.3-14.7h25.1z"/></g></svg>',T3='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 341.3"><path fill="#0021ad" d="M0 0h512v341.3H0z"/><path fill="#1c8a42" d="M0 0h512v341.3"/><g fill="#FFF"><path d="m77.6 272 5.7 11.9 12.8-3-5.7 11.9 10.3 8.1-12.8 2.9V317l-10.3-8.3-10.2 8.3v-13.2l-12.8-2.9 10.3-8.1-5.8-11.9 12.9 3zM40.5 173.1l5.7 11.9 12.8-3-5.7 11.8 10.3 8.2-12.9 2.9.1 13.2-10.3-8.3-10.3 8.3.1-13.2-12.9-2.9 10.4-8.2L22 182l12.8 3zM77.6 92.2l5.7 11.8 12.8-2.9-5.7 11.8 10.3 8.2-12.8 2.9v13.1l-10.3-8.2-10.2 8.2V124l-12.8-2.9 10.3-8.2-5.8-11.8L72 104zM123.7 155.1l5.7 11.9 12.8-3-5.7 11.9 10.3 8.1-12.8 2.9v13.2l-10.3-8.2-10.2 8.2v-13.2l-12.8-2.9 10.3-8.1-5.7-11.9 12.8 3zM90.8 209.1l4.4 13.7h14.5L98 231.3l4.5 13.7-11.7-8.4-11.7 8.4 4.5-13.7-11.7-8.5h14.4z"/></g><circle fill="#ffc639" cx="267.1" cy="170.7" r="74.5"/><path fill="#1c8a42" d="M267.1 220.3h24.8s10.8-19 0-37.2l24.8-24.8-12.4-24.8h-12.4s-6.2 18.6-31 18.6-31-18.6-31-18.6h-12.4l12.4 24.8-12.4 24.8 12.4 12.4s12.4-24.8 37.2-12.4c0 0 10.5 15.5 0 37.2z"/><path fill="#ffc639" d="M464.4 92.2c.6-2.9-.2-17.6-.2-20.7 0-21.3-13.9-39.4-33.2-45.7 5.9 12 9.2 25.4 9.2 39.7 0 4.8-.4 9.5-1.1 14.1-2.9-4.7-6.6-8.9-11.2-12.6-17.1-13.6-40.6-14-57.9-2.5 13.4 2.9 26.3 8.9 37.7 18 9 7.1 16.2 16.8 21.7 26.1 0 0-17.8 10.9-31 15.1s-42.3 7.9-42.3 7.9c72 12 132-36 132-36-6.5-13.4-15.8-4-23.7-3.4z"/></svg>',I3='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 513 342"><path fill="#FFF" d="M0 0h513v342H0z"/><path fill="#DB7D00" d="M141.7 154.7s.2 67.1 74.7 65.3l4.5 13.9h8.9s-7.4-41.1 60.1-41.5c0 0 0-27.6 27.6-27.6H359s-66-51.8 58.9-118l1.8-13.1s-129.9 71-198.9 57.2c0 0 10.7 42.5-10.8 42.5-10.8 0-9.7-8.1-32.3-8.1-18.7 0-17.3 19.7-26.3 19.5-8.9-.2-18.8-12.3-19.6-10.2-.7 2.1 9.9 20.1 9.9 20.1z"/><g fill="#006651"><path d="M237.2 308.1c6.9-5 13-6.6 22.4-8.3s19.4-4.4 24.6-5.8-17.7 6.6-23.5 8.3c-5.8 1.6-23.5 5.8-23.5 5.8zM275.1 293.4c-1.9-11.9 2.8-24.3 13.5-29.3 2.5 8.6-5.2 23.2-13.5 29.3zM293.3 287.2c-5.8-9.8 4-22.6 11.1-28.8 3.3 6-2.5 23.7-11.1 28.8zM310.2 279.6c-6.2-8.4 1.1-23.2 8.8-29 3.1 8.2.1 23.2-8.8 29zM327.1 269c-5.6-8-1.7-20.4 6.3-28.4 5.8 6.6.9 21-6.3 28.4zM340.6 258.3c-4.7-7.5 1.1-25.4 8.6-30.4 3.3 6.6.8 25.4-8.6 30.4zM351.4 255.5c-1.4-10.8 17.4-22.7 25.2-22.4-.9 8.9-8.9 18.6-25.2 22.4zM340.9 267.7c8.8-9.1 26-9.1 32.1-7.2-1.7 5.3-21.9 16.9-32.1 7.2z"/><path d="M328.7 276.8c12.4-3.3 20.5-6.1 27.9 1.7-5.2 6.6-25.4 4.7-27.9-1.7zM311 284.8c11.9-6.4 26.3 3 28.5 8.6-13.3 5.5-28.7-7.2-28.5-8.6zM294.7 294c10.8-4.1 23.2 1.4 28.2 7.5-5.8 2.7-21 5.7-28.2-7.5zM279.8 298.7c12.4-1.4 24.4 8 27 13.4-15.9 1.5-22-3.2-27-13.4zM275.8 308.1c-6.9-5-13-6.6-22.4-8.3-9.4-1.7-19.4-4.4-24.6-5.8-5.3-1.4 17.7 6.6 23.5 8.3 5.8 1.6 23.5 5.8 23.5 5.8zM237.9 293.4c1.9-11.9-2.8-24.3-13.5-29.3-2.5 8.6 5.2 23.2 13.5 29.3zM219.7 287.2c5.8-9.8-4-22.6-11.1-28.8-3.3 6 2.5 23.7 11.1 28.8zM202.8 279.6c6.2-8.4-1.1-23.2-8.8-29-3.1 8.2-.1 23.2 8.8 29zM185.9 269c5.6-8 1.7-20.4-6.3-28.4-5.8 6.6-.9 21 6.3 28.4zM172.4 258.3c4.7-7.5-1.1-25.4-8.6-30.4-3.3 6.6-.8 25.4 8.6 30.4zM161.6 255.5c1.4-10.8-17.4-22.7-25.2-22.4.9 8.9 8.9 18.6 25.2 22.4zM172.1 267.7c-8.8-9.1-26-9.1-32.1-7.2 1.7 5.3 21.9 16.9 32.1 7.2z"/><path d="M184.3 276.8c-12.4-3.3-20.5-6.1-27.9 1.7 5.2 6.6 25.4 4.7 27.9-1.7zM202 284.8c-11.9-6.4-26.3 3-28.5 8.6 13.3 5.5 28.7-7.2 28.5-8.6zM218.3 294c-10.8-4.1-23.2 1.4-28.2 7.5 5.8 2.7 21 5.7 28.2-7.5zM233.2 298.7c-12.4-1.4-24.4 8-27 13.4 15.9 1.5 22-3.2 27-13.4z"/></g></svg>',L3='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.333 512 341.333"><path fill="#11457e" d="M0 85.337h512v341.326H0z"/><path fill="#d7141a" d="M512 256v170.663H0L215.185 256z"/><path fill="#FFF" d="M512 85.337V256H215.185L0 85.337z"/></svg>',O3='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.333 512 341.333"><path fill="#D80027" d="M0 85.331h512v341.337H0z"/><path d="M0 85.331h512v113.775H0z"/><path fill="#FFDA44" d="M0 312.882h512v113.775H0z"/></svg>',N3='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 341.3"><path fill="#12ad2b" d="M0 0h512v341.3H0z"/><path fill="#6ab2e7" d="M512 0v166.7L0 170.8V0z"/><path fill="#FFF" d="M256 170.7 0 341.3V0z"/><path fill="#d7141a" d="m89.8 92.5 17 52.4H162l-44.6 32.5 17 52.4-44.6-32.4-44.6 32.4 17-52.4-44.6-32.5h55.2z"/></svg>',R3='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 513 342"><path fill="#c60c30" d="M0 0h513v342H0z"/><path fill="#FFF" d="M190 0h-60v140H0v60h130v142h60V200h323v-60H190z"/></svg>',V3='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 341.3"><path fill="#496E2D" d="M0 0h512v341.3H0z"/><path d="M0 110.7v120h512v-120z"/><path fill="#FFDA44" d="M0 110.7h512v40H0z"/><path fill="#FFF" d="M0 190.7h512v40H0z"/><path d="M196 0h120v341.3H196z"/><path fill="#FFDA44" d="M196 0h40v341.3h-40z"/><path fill="#FFF" d="M274.7 0h40v341.3h-40z"/><circle fill="#D80027" cx="256" cy="170.7" r="123.1"/><g fill="#496E2D"><path d="m256 58.6 4.6 14.2h15l-12.1 8.9 4.6 14.2-12.1-8.8-12.1 8.8 4.6-14.2-12.1-8.9h15zM190.1 80l12.2 8.8 12.1-8.8-4.6 14.3 12.1 8.8h-15l-4.6 14.2-4.7-14.2h-15l12.1-8.8zM149.4 136h15l4.6-14.2 4.7 14.2h15l-12.2 8.8 4.7 14.3-12.2-8.8-12.1 8.8 4.6-14.3zM149.4 205.3l12.1-8.8-4.6-14.3L169 191l12.2-8.8-4.7 14.3 12.2 8.8h-15l-4.7 14.3-4.6-14.3zM190.1 261.4l4.6-14.3-12.1-8.8h15l4.7-14.3 4.6 14.3h15l-12.1 8.8 4.6 14.3-12.1-8.9zM256 282.8l-4.6-14.3h-15l12.1-8.8-4.6-14.3 12.1 8.8 12.1-8.8-4.6 14.3 12.1 8.8h-15zM321.9 261.4l-12.2-8.9-12.1 8.9 4.6-14.3-12.1-8.8h15l4.6-14.3 4.7 14.3h15l-12.1 8.8zM362.6 205.3h-15l-4.6 14.3-4.7-14.3h-15l12.2-8.8-4.7-14.3L343 191l12.1-8.8-4.6 14.3zM362.6 136l-12.1 8.8 4.6 14.3-12.1-8.8-12.2 8.8 4.7-14.3-12.2-8.8h15l4.7-14.2 4.6 14.2zM321.9 80l-4.6 14.3 12.1 8.8h-15l-4.7 14.2-4.6-14.2h-15l12.1-8.8-4.6-14.3 12.1 8.8z"/></g><path fill="#496E2D" d="M279.3 168.7c-11-21.1-14.5-25.1-14.5-25.1s.4-9.7.4-15.6c0-8.8-7.4-15.8-16.5-15.8-8.6 0-15.7 2.9-16.5 11-4.2.9-8.6 4.1-8.6 10.7 0 4.8 1 7.3 5.2 9.3 2.1-4.6 4.3-4.8 9.3-6.4.8.6 1.7 3 2.6 3.4l.3 1s-13.3 6.6-13.3 30.9c0 29.5 22 45.4 22 45.4l-1.8.3-1.9 7.1h22v-7.2l11 17.5c.3-.3 10.2-47.6.3-66.5z"/></svg>',$3='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 341.3"><path fill="#FFF" d="M0 0h512v341.3H0z"/><path fill="#D80027" d="M0 215.2h211.5v126.1H0z"/><path fill="#0052B4" d="M0 0h211.5v126.2H0z"/><path fill="#D80027" d="M300.5 0H512v126.2H300.5z"/><path fill="#0052B4" d="M300.5 215.2H512v126.1H300.5z"/><g stroke="#FFF" stroke-width="5" stroke-miterlimit="10"><path fill="#0052B4" d="M256 130h-49.9v49.4s19.5 6 49.9 6V130z"/><path fill="#D80027" d="M206.1 179.4v6c0 27.5 22.3 49.9 49.9 49.9v-49.9c-30.4 0-49.9-6-49.9-6z"/><path fill="#0052B4" d="M256 235.3c27.5 0 49.9-22.3 49.9-49.9v-6s-19.5 6-49.9 6v49.9z"/><path fill="#D80027" d="M256 130v55.4c30.4 0 49.9-6 49.9-6V130H256z"/></g></svg>',j3='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 341.3"><path fill="#41662E" d="M0 0h512v341.3H0z"/><path fill="#FFF" d="M256 0h256v341.3H256z"/><g fill="#D80027"><path d="m341.5 105.3-29.4 40.4-47.5-15.4 29.4 40.4-29.4 40.4 47.5-15.4 29.4 40.4v-50l47.5-15.5-47.5-15.4z"/><path d="M309.9 276.7c-58.5 0-106-47.5-106-106s47.5-106 106-106c18.3 0 35.4 4.6 50.4 12.7-23.5-23-55.7-37.2-91.2-37.2-72 0-130.4 58.4-130.4 130.4S197.1 301 269.1 301c35.5 0 67.7-14.2 91.2-37.2-14.9 8.2-32.1 12.9-50.4 12.9z"/></g></svg>',G3='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 341.3"><path fill="#FFDA44" d="M0 0h512v341.3H0z"/><path fill="#0052B4" d="M0 170.7h512V256H0z"/><path fill="#D80027" d="M0 256h512v85.3H0z"/><circle fill="#FFDA44" cx="256" cy="170.7" r="59.4"/><path fill="#4C1F00" d="M369.2 79.9s-27.2-13.8-33.9-16c-6.7-2.2-49.1-13.2-49.1-7 0 10.3-13.5 12-15.5 12s-2-5.3-14.8-5.3-13.7 4.8-15.8 4.8c-2.2 0-14.5-1-14.5-11.5 0-5.2-42.9 4-49.1 7-6.1 3.1-33.9 16-33.9 16s45.8 2.7 53.9 6.2 43.8 16.5 43.8 16.5l-2.8 13.3h37.8l-3.8-13.3s35.1-12.7 43.8-16.5 53.9-6.2 53.9-6.2z"/><path fill="#57BA17" d="M217.7 171.7c0 21.1 17.2 38.3 38.3 38.3 21.1 0 38.3-17.2 38.3-38.3v-11.5h-76.5v11.5z"/><path fill="#338AF3" d="M256 110.5c-21.1 0-38.3 17.2-38.3 38.3v11.5h76.5v-11.5c.1-21.1-17.1-38.3-38.2-38.3z"/></svg>',W3='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.333 512 341.333"><path fill="#111" d="M0 85.337h512v341.326H0z"/><path fill="#368FD8" d="M0 85.337h512v113.775H0z"/><path fill="#FFF" d="M0 312.888h512v113.775H0z"/></svg>',U3='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 341.3"><path fill="#FFF" d="M0 0h512v341.3H0z"/><path fill="#D80027" d="M0 0h512v113.8H0z"/><path d="M0 227.6h512v113.8H0z"/><path fill="#C09300" d="M220.3 204.4s0-58.4 4.5-64.7c3.1-4.3 16.8 5.2 22.7 4.5 0 0 4.2-7.5 4.5-12 .3-4.6-1.1-7.6-4.9-6.2 0 0-1.2-2.1.5-3.3 1.6-1.2 5.6.1 5.6.1s-.5-1 1.6-.9c2.9.2 7.2 1.4 7.4 5.6.2 3.1.3 7.7.4 8.7.7 6.8 2.7 8.7 2.7 8.7s18.4-9.2 22-5.2c3.3 3.8 4.5 64.7 4.5 64.7l-18.1-16.8 12.1 29.5s-14.4 2.4-28.9 2.4c-14.5 0-31.1-4.2-31.1-4.2l13.8-28.2-19.3 17.3z"/></svg>',q3='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 341.3"><path fill="#FFF" d="M0 0h512v341.3H0z"/><path d="M0 0h512v113.8H0z"/><path fill="#428823" d="M0 227.6h512v113.8H0z"/><g fill="#D80027"><path d="M256 170.7 0 341.3V0zM309.1 170.7c0-22.9 13.1-42.1 34.6-46.8-3.3-.7-6.7-1.1-10.3-1.1-26.4 0-47.9 21.4-47.9 47.9s21.4 47.9 47.9 47.9c3.5 0 7-.4 10.3-1.1-21.5-4.8-34.6-23.9-34.6-46.8z"/><path d="m365 129.2 10.3 31.7h33.3l-27 19.6 10.3 31.7-26.9-19.6-27 19.6 10.3-31.7-27-19.6h33.4z"/></g></svg>',Y3='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 341.3"><path fill="#338AF3" d="M0 0h512v341.3H0z"/><path fill="#56AF35" d="M0 0h512v170.7H0z"/><path fill="#D80027" d="m0 341.3 512-170.7L0 0v341.3z"/><g fill="#ffc945"><path d="M134.7 231.5c33.6 0 60.8-27.2 60.8-60.8s-27.2-60.8-60.8-60.8-60.8 27.2-60.8 60.8 27.2 60.8 60.8 60.8zm0 24.3c-47 0-85.2-38.1-85.2-85.2s38.1-85.2 85.2-85.2 85.2 38.1 85.2 85.2-38.2 85.2-85.2 85.2z"/><circle cx="119.5" cy="148.3" r="17.5"/><circle cx="148.9" cy="158.5" r="17.5"/><circle cx="134.7" cy="135.2" r="17.5"/><circle cx="119.5" cy="172.7" r="17.5"/><circle cx="149.9" cy="182.8" r="17.5"/><circle cx="122.5" cy="198" r="17.5"/><circle cx="145.9" cy="205.2" r="17.5"/></g></svg>',K3='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.333 512 341.333"><path fill="#FFDA44" d="M0 85.331h512v341.337H0z"/><g fill="#D80027"><path d="M0 85.331h512v113.775H0zM0 312.882h512v113.775H0z"/></g></svg>',Z3='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.5 15"><path fill="#20AA46" d="M0 0h22.5v5H0V0z"/><path fill="#E92F3B" d="M0 10h22.5v5H0v-5z"/><path fill="#FADF50" d="M0 5h22.5v5H0V5z"/><circle fill="#205CCA" cx="11.3" cy="7.5" r="5.2"/><g stroke="#FFDB3D" fill="none"><g stroke-width=".5"><path d="m11.3 8.8-2.1 1.5.8-2.4-2-1.5h2.5l.8-2.3.8 2.3h2.6l-2.1 1.5.8 2.4-2.1-1.5zM10.3 6.4h1.9M9.9 7.8l1.3 1M12 6.2l.7 1.8M10 7.9l.6-1.8M11 9l1.6-1.1"/></g><g stroke-width=".25"><path d="m8.7 3.9 1.1 1.6M13.8 3.8l-1 1.6M11.3 10.1V12M8.9 8.3 7.1 9M15.5 9l-1.8-.7"/></g></g></svg>',J3='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 341.3"><path fill="#FFF" d="M0 0h512v341.3H0z"/><path fill="#2E52B2" d="M512 129.3V212H203.7v129.3H121V212H0v-82.7h121V0h82.7v129.3z"/></svg>',X3='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 341.3"><path fill="#2E52B2" d="M0 0h512v341.3H0z"/><path fill="#FFF" d="M256 0v22.6l-46.1 30.7H256v64h-46.1L256 148v22.7h-22.6l-73.4-49v49H96v-49l-73.4 49H0V148l46.1-30.7H0v-64h46.1L0 22.6V0h22.6L96 48.9V0h64v48.9L233.4 0z"/><g fill="#D80027"><path d="M144 0h-32v69.3H0v32h112v69.4h32v-69.4h112v-32H144z"/><path d="M0 0v15.1l57.4 38.2H80zM256 0v15.1l-57.4 38.2H176z"/><path d="M0 0v15.1l57.4 38.2H80zM256 0v15.1l-57.4 38.2H176zM0 170.7v-15.1l57.4-38.3H80zM256 170.7v-15.1l-57.4-38.3H176z"/></g><path fill="#F3F3F3" d="M307.1 127.1v92c0 61.6 80.5 80.5 80.5 80.5s80.4-19 80.4-80.6v-92l-80.5-23-80.4 23.1z"/><path fill="#D80027" d="M468 132.8V98.3H307.1v34.5h69v69h-69v23h69V296c6.9 2.5 11.5 3.5 11.5 3.5s4.6-1.1 11.5-3.5v-71.2h69v-23h-69v-69H468z"/></svg>',Q3='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 341.3"><path fill="#0052B4" d="M0 0h512v341.3H0z"/><path fill="#FFF" d="M256 0v30.6l-45.2 25.1H256V115h-59.1l59.1 32.8v22.9h-26.7l-73.5-40.9v40.9h-55.6v-48.6l-87.5 48.6H0v-30.6L45.2 115H0V55.7h59.1L0 22.8V0h26.7l73.5 40.8V0h55.6v48.6L243.3 0z"/><path fill="#D80027" d="M144 0h-32v69.3H0v32h112v69.4h32v-69.4h112v-32H144z"/><path fill="#0052B4" d="M155.8 115 256 170.7v-15.8L184.2 115z"/><path fill="#FFF" d="M155.8 115 256 170.7v-15.8L184.2 115z"/><g fill="#D80027"><path d="M155.8 115 256 170.7v-15.8L184.2 115zM71.8 115 0 154.9v15.8L100.2 115z"/></g><path fill="#0052B4" d="M100.2 55.6 0 0v15.7l71.8 39.9z"/><path fill="#FFF" d="M100.2 55.6 0 0v15.7l71.8 39.9z"/><g fill="#D80027"><path d="M100.2 55.6 0 0v15.7l71.8 39.9zM184.2 55.6 256 15.7V0L155.8 55.6z"/></g><path fill="#1F8BDE" d="M312.2 194.2v-90c0-8.5 6.5-15.3 15-15.3h120.5c8.3 0 15 6.8 15 15.3v90c0 75.2-75.2 105.3-75.2 105.3s-75.3-30.1-75.3-105.3z"/><path fill="#FFF" d="M312.2 194.2v-90c0-8.5 6.5-15.3 15-15.3h120.5c8.3 0 15 6.8 15 15.3v90c0 75.2-75.2 105.3-75.2 105.3s-75.3-30.1-75.3-105.3zm79.6 86.3c7.9-4.5 15.9-10 23.2-16.7 20.5-18.5 32.6-41.4 32.6-69.7v-90c0-.3-120.4-.3-120.4-.3v90.3c0 28.3 12.1 51.2 32.6 69.7 8.3 7.5 17.6 13.9 27.6 19 1.4-.6 2.8-1.4 4.4-2.3z"/><path fill="#187536" d="M347.1 193.4c-2.6-7.9 1.7-14.3 10.1-14.3h60.5c8.2 0 12.8 6.3 10.1 14.3l-5.5 16.5c-2.6 7.9-8.9 9.2-15.8 4 0 0 2.6-4.8-19.1-4.8-21.7 0-19.1 4.8-19.1 4.8-6.1 5.7-13.1 4-15.8-4 .1.1-5.4-16.5-5.4-16.5z"/><path fill="#FFF" d="M357.4 179.1c8.1 1.6 17.8-15 30.1-15 13.1 0 21.8 17.1 30.1 15 7.4-1.8 15-22.2 15-30.1 0-16.6-20.2-30.1-45.1-30.1-24.9 0-45.1 13.5-45.1 30.1-.1 8.5 6.6 28.5 15 30.1zM356 270.7c6.2.4 12.5-1.8 17.2-6.5l9-9c2.9-2.9 7.5-2.9 10.4 0l9 9c4.7 4.7 11 6.9 17.1 6.5 5.3-.3 32.5-33.5 25.7-32.6-4.6.6-9.1 2.8-12.7 6.3l-.1.1-9 9c-2.9 2.9-7.5 2.9-10.4 0l-9-9c-8.7-8.8-22.9-8.8-31.7-.1l-.1.1-9 9c-2.9 2.9-7.5 2.9-10.4 0l-9-9c-3.5-3.5-7.8-5.6-12.3-6.3-6.7-1.1 20.1 32.2 25.3 32.5zM322.1 210c2.9-2.9 7.5-2.9 10.4 0l9 9c8.8 8.7 22.9 8.7 31.7 0l9-9c2.9-2.9 7.5-2.9 10.4 0l9 9c8.8 8.7 22.9 8.7 31.7 0l9-9c2.9-2.9 7.5-2.9 10.4 0 0 0 5.5-14.8 2.5-15.9-7.9-2.9-17.2-1.2-23.5 5.2l-.1.1-9 9c-2.9 2.9-7.5 2.9-10.4 0l-9-9c-8.7-8.8-22.9-8.8-31.7-.1l-.1.1-9 9c-2.9 2.9-7.5 2.9-10.4 0l-9-9c-6.2-6.2-15.1-8-22.8-5.5-3.1 1.1 1.9 16.1 1.9 16.1z"/></svg>',eh='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 341.3"><path fill="#338AF3" d="M0 0h512v341.3H0z"/><g fill="#FFF"><path d="m256 37.9 10.1 31.2H299l-26.6 19.3 10.2 31.2-26.6-19.3-26.6 19.3 10.2-31.2L213 69.1h32.9zM123.2 170.7l31.2-10.2v-32.8l19.3 26.6 31.2-10.2-19.3 26.6 19.3 26.5-31.2-10.1-19.3 26.5v-32.8zM256 303.5l-10.1-31.2H213l26.6-19.3-10.2-31.3L256 241l26.6-19.3-10.2 31.3 26.6 19.3h-32.9zM388.8 170.7l-31.2 10.1v32.8l-19.3-26.5-31.2 10.1 19.3-26.5-19.3-26.6 31.2 10.2 19.3-26.6v32.8z"/></g></svg>',th='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 341.3"><path fill="#FFF" d="M0 0h512v341.3H0z"/><path fill="#0F61A5" d="M512 214.5H206.2v126.8H118.4V214.5H0v-87.7h118.4V0H206.2v126.8H512V192z"/><path fill="#E50E3D" d="M512 149.3V192H183.7v149.3H141V192H0v-42.7h141V0h42.7v149.3z"/></svg>',ih='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.333 512 341.333"><path fill="#FFF" d="M0 85.331h512v341.337H0z"/><path fill="#0052B4" d="M0 85.331h170.663v341.337H0z"/><path fill="#D80027" d="M341.337 85.331H512v341.337H341.337z"/></svg>',sh='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.333 512 341.333"><path fill="#FFDA44" d="M0 85.337h512v341.326H0z"/><path fill="#6DA544" d="M0 85.337h512v113.775H0z"/><path fill="#0052B4" d="M0 312.888h512v113.775H0z"/></svg>',rh='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.333 512 341.333"><path fill="#FFF" d="M0 85.333h512V426.67H0z"/><path fill="#D80027" d="M288 85.33h-64v138.666H0v64h224v138.666h64V287.996h224v-64H288z"/><g fill="#0052B4"><path d="M393.785 315.358 512 381.034v-65.676zM311.652 315.358 512 426.662v-31.474l-143.693-79.83zM458.634 426.662l-146.982-81.664v81.664z"/></g><path fill="#FFF" d="M311.652 315.358 512 426.662v-31.474l-143.693-79.83z"/><path fill="#D80027" d="M311.652 315.358 512 426.662v-31.474l-143.693-79.83z"/><g fill="#0052B4"><path d="M90.341 315.356 0 365.546v-50.19zM200.348 329.51v97.151H25.491z"/></g><path fill="#D80027" d="M143.693 315.358 0 395.188v31.474l200.348-111.304z"/><g fill="#0052B4"><path d="M118.215 196.634 0 130.958v65.676zM200.348 196.634 0 85.33v31.474l143.693 79.83zM53.366 85.33l146.982 81.664V85.33z"/></g><path fill="#FFF" d="M200.348 196.634 0 85.33v31.474l143.693 79.83z"/><path fill="#D80027" d="M200.348 196.634 0 85.33v31.474l143.693 79.83z"/><g fill="#0052B4"><path d="M421.659 196.636 512 146.446v50.19zM311.652 182.482V85.331h174.857z"/></g><path fill="#D80027" d="M368.307 196.634 512 116.804V85.33L311.652 196.634z"/></svg>',nh='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 341.3"><path fill="#c60a0a" d="M0 0h512v341.3H0z"/><path fill="#3E8446" d="M256 170.7 44.5 296.8V44.5z"/><g fill="#FFDA44"><path d="m256 170.7 211.5 126.1h-423zM467.5 44.5 256 170.7 44.5 44.5z"/></g><path fill="#3E8446" d="M467.5 44.5v252.3L256 170.7z"/><g fill="#FFDA44"><path d="m256 10.4 3.3 10.2H270l-8.6 6.3 3.3 10.2-8.7-6.3-8.7 6.3 3.3-10.2-8.6-6.3h10.7zM170.1 10.4l3.3 10.2h10.7l-8.6 6.3 3.3 10.2-8.7-6.3-8.7 6.3 3.3-10.2-8.6-6.3h10.7zM341.9 10.4l3.3 10.2H356l-8.7 6.3 3.3 10.2-8.7-6.3-8.7 6.3 3.3-10.2-8.6-6.3h10.7zM256 304.2l3.3 10.2H270l-8.6 6.3 3.3 10.2-8.7-6.3-8.7 6.3 3.3-10.2-8.6-6.3h10.7zM170.1 304.2l3.3 10.2h10.7l-8.6 6.3 3.3 10.2-8.7-6.3-8.7 6.3 3.3-10.2-8.6-6.3h10.7zM341.9 304.2l3.3 10.2H356l-8.7 6.3 3.3 10.2-8.7-6.3-8.7 6.3 3.3-10.2-8.6-6.3h10.7z"/></g><circle fill="#c60a0a" cx="244.5" cy="170.7" r="76.2"/><path fill="#FFDA44" d="m244.5 110.1 13.6 41.8h44l-35.6 25.8 13.6 41.8-35.6-25.8-35.5 25.8 13.6-41.8-35.6-25.8h44zM107.7 167.8c4.4 6.9 2.3 16.1-4.6 20.5s-16.1 2.3-20.5-4.6c-7.9-12.5-3.3-33-3.3-33s20.4 4.6 28.4 17.1z"/><circle fill="#A2001D" cx="99.1" cy="182.1" r="7.4"/></svg>',lh='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.5 15"><path fill="#FFF" d="M.8 0h21v15H.8V0z"/><path fill="#eb000e" d="M9.8 6H0v3h9.8v6h3V9h9.8V6h-9.8V0h-3v6z"/><path fill="#eb000e" d="m17.3 2.7-.2-1.2h1l-.2 1.2 1.2-.2v1l-1.2-.2.2 1.2h-1l.2-1.2-1.2.2v-1l1.2.2zm-12.7 0-.2-1.2h1l-.2 1.2 1.2-.2v1l-1.2-.2.2 1.2h-1l.2-1.2-1.2.2v-1l1.2.2zm0 9-.2-1.2h1l-.2 1.2 1.2-.2v1l-1.2-.2.2 1.2h-1l.2-1.2-1.2.2v-1l1.2.2zm12.7 0-.2-1.2h1l-.2 1.2 1.2-.2v1l-1.2-.2.2 1.2h-1l.2-1.2-1.2.2v-1l1.2.2z"/></svg>',ah='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 60"><path fill="#FDEB01" d="m0 0 90 60H0z"/><path fill="#58A846" d="M90 0v60L0 0z"/><path fill="#ED3D24" d="m50.7 33.3 9.3-6.7H48.5L45 15.7l-3.5 10.9H30l9.3 6.7-3.6 11 9.3-6.7 9.3 6.7z"/></svg>',oh='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 513 342"><path fill="#FFF" d="M0 0h513v342H0z"/><path fill="#D80027" d="M308 0H204v118.7H0v104h204V342h104V222.7h205v-104H308z"/><path fill="#FFDA44" d="m368.6 188 26 17.3V136l-26 17.3h-95.3V58.1l17.3-26h-69.2l17.3 26v95.2h-95.3l-26-17.3v69.3l26-17.3h95.3v95.2l-17.3 26h69.2l-17.3-26V188z"/></svg>',hh='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.333 512 341.333"><path fill="#FFDA44" d="M0 85.337h512v341.326H0z"/><path fill="#D80027" d="M0 85.337h512v113.775H0z"/><path fill="#496E2D" d="M0 312.888h512v113.775H0z"/><path d="m255.883 199.111 14.119 43.458 40.366 3.2-36.969 26.861 19.453 40.259-36.969-26.859-36.97 26.859 14.123-43.459-36.969-26.861h45.696z"/></svg>',dh='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 513 342"><path fill="#FFF" d="M0 0h513v342H0z"/><path fill="#D80027" d="M0 230h513v112H0z"/><path fill="#D80027" stroke="#000" stroke-miterlimit="10" d="M363.1 131.8V99.1H374V77.3h-21.9v10.9h-21.8V77.3h-21.8v21.8h10.9v32.7h-21.8V55.5h10.9V33.7h-21.8v10.9h-10.9V33.7H254v10.9h-10.9V33.7h-21.8v21.8h10.9v76.3h-21.8V99.1h10.9V77.3h-21.8v10.9h-21.8V77.3h-21.8v21.8h10.9v32.7H145V219h239.9v-87.2z"/><path fill="#FFDA44" stroke="#000" stroke-miterlimit="10" d="m264.9 235.5-24.2 18.2 19.1 14.3v31.3h-23.2v9h23v7.9h-23v9.3H270V268l19.1-14.3-24.2-18.2zm0 25.3-10.1-7.1 10.1-7.1 10.1 7.1-10.1 7.1z"/><path d="M239.6 209.7v-27.9s.1-22.3 25-22.3c24.8 0 25.7 22 25.7 22v28.2h-50.7zM170.5 209.7v-24.3s.1-18.7 19.6-18.7 20.2 18.4 20.2 18.4v24.5h-39.8z"/><path d="M169.1 209.7v-24.3s.1-18.7 19.6-18.7 20.2 18.4 20.2 18.4v24.5h-39.8zM320.9 209.7v-24.3s.1-18.7 19.6-18.7 20.2 18.4 20.2 18.4v24.5h-39.8zM329.3 132v-15.7s.1-12.1 11.3-12.1c11.3 0 11.7 11.9 11.7 11.9V132h-23zM250.5 132v-23.7s.1-18.3 14.3-18.3c14.2 0 14.7 18 14.7 18v24h-29zM177.5 132v-15.7s.1-12.1 11.3-12.1 11.7 11.9 11.7 11.9V132h-23z"/></svg>',ch='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 513 342"><path fill="#D80027" d="M0 0h513v342H0z"/><path fill="#FFF" d="M513 0v171H0V0z"/><circle fill="#FFF" cx="185.8" cy="171.2" r="117.8"/><path fill="#D80027" d="M68 171c0-65.1 52.8-117.8 117.8-117.8 65.1 0 117.8 52.8 117.8 117.8"/></svg>',uh='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.333 512 341.333"><path fill="#FFF" d="M0 85.337h512v341.326H0z"/><path fill="#1a7e25" d="M0 322.783h512v103.88H0z"/><path fill="#cf0d19" d="M0 85.337h512v104.515H0z"/><path fill="#0052B4" d="M0 210.877h512v89.656H0z"/></svg>',ph='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 513 342"><path fill="#FFDA44" d="M0 0h512v342H0z"/><path fill="#6DA544" d="M342 0h171v342H342z"/><path fill="#D80027" d="M0 0h171v342H0z"/></svg>',fh='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.333 512 341.333"><path fill="#FFF" d="M0 85.331h512v341.337H0z"/><path fill="#0052B4" d="M0 85.331h170.663v341.337H0z"/><path fill="#D80027" d="M341.337 85.331H512v341.337H341.337z"/></svg>',gh='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 513 342"><path fill="#FFF" d="M0 0h513v342H0z"/><path fill="#6DA544" d="M0 0h513v113.8H0z"/><path fill="#D80027" d="M0 227.6h513V342H0z"/><path fill="#0070C8" d="M126 170.7 0 341.3V0z"/><path fill="none" stroke="#000" stroke-miterlimit="10" d="M233.8 139.4v40.4c0 35.6 35.6 35.6 35.6 35.6s35.6 0 35.6-35.6v-40.4h-71.2z"/><path fill="#786145" d="M264.5 179.8h9.8l4 25.8h-17.8z"/><path fill="#6DA544" d="M287.2 162c0-9.8-8-14.8-17.8-14.8s-17.8 5-17.8 14.8c-4.9 0-8.9 4-8.9 8.9s4 8.9 8.9 8.9h35.6c4.9 0 8.9-4 8.9-8.9s-4-8.9-8.9-8.9z"/><g fill="#FFDA00" stroke="#000" stroke-miterlimit="10"><path d="m230.7 120 1.9 3.3h3.8l-1.9 3.3 1.9 3.2h-3.8l-1.9 3.3-1.9-3.3H225l1.9-3.2-1.9-3.3h3.8zM246 120l1.9 3.3h3.7l-1.9 3.3 1.9 3.2h-3.7l-1.9 3.3-1.9-3.3h-3.8l1.9-3.2-1.9-3.3h3.8zM261.3 120l1.9 3.3h3.7l-1.9 3.3 1.9 3.2h-3.7l-1.9 3.3-1.9-3.3h-3.8l1.9-3.2-1.9-3.3h3.8zM277.1 120l1.9 3.3h3.8l-1.9 3.3 1.9 3.2H279l-1.9 3.3-1.9-3.3h-3.7l1.8-3.2-1.8-3.3h3.7zM293.1 120l1.9 3.3h3.8l-1.9 3.3 1.9 3.2H295l-1.9 3.3-1.9-3.3h-3.7l1.8-3.2-1.8-3.3h3.7zM308.1 120l1.9 3.3h3.7l-1.9 3.3 1.9 3.2H310l-1.9 3.3-1.9-3.3h-3.8l1.9-3.2-1.9-3.3h3.8z"/></g></svg>',mh='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 513 342"><path fill="#FFF" d="M0 0h513v342H0z"/><g fill="#0d5eaf"><path d="M0 0h513v38H0zM0 76h513v38H0zM0 152h513v38H0zM0 228h513v38H0zM0 304h513v38H0z"/><path d="M0 0h190v190H0z"/></g><g fill="#FFF"><path d="M0 76h190v38H0z"/><path d="M76 0h38v190H76z"/></g></svg>',vh='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 341.3"><path fill="#0052B4" d="M0 0h512v341.3H0z"/><path fill="#FFF" d="M256 0v117.4h-46.1l46.1 30.7v22.6h-22.6L160 121.8v48.9H96v-48.9l-73.4 48.9H0v-22.6l46.1-30.7H0v-64h46.1L0 22.7V0h22.6L96 48.9V0h64v48.9L233.4 0z"/><path fill="#D80027" d="M144 0h-32v69.4H0v32h112v69.3h32v-69.3h112v-32H144z"/><path fill="#2E52B2" d="M256 22.7v30.7h-46.1z"/><path fill="#D80027" d="M0 170.7v-11l62.5-42.3h22.6L7.3 170.7zM7.3.1l77.8 53.2H62.5L0 11.1V.1zM256 .1v11l-62.5 42.3h-22.6L248.7.1zM248.7 170.7l-77.8-53.3h22.6l62.5 42.3v11z"/><g><ellipse fill="#FFF" cx="443.4" cy="233.6" rx="29" ry="43.5"/><ellipse fill="#FFCE00" cx="406.9" cy="317.7" rx="22" ry="9.3"/><ellipse fill="#FFCE00" cx="364" cy="317.7" rx="22" ry="9.3"/><path fill="#39B200" d="m342 190.1 43.4 86.9 43.5-86.9z"/><ellipse fill="#9B9B9B" cx="327.5" cy="233.6" rx="29" ry="43.5"/><path fill="#757575" d="m371 175.6-14.5 14.5h57.9l-14.5-14.5 14.5-43.5s-13-29-29-29-29 29-29 29l14.6 43.5z"/><circle fill="#C6B56F" cx="385.4" cy="67" r="29"/><circle fill="#A54A00" cx="386" cy="88.7" r="29"/><circle fill="#FFF" cx="443.4" cy="117.7" r="29"/><circle fill="#0049FF" cx="342.2" cy="146.7" r="29"/><circle fill="#0041F9" cx="429.8" cy="146.7" r="29"/><circle fill="#F7D71E" cx="386" cy="233.6" r="29"/><circle fill="#CEC851" cx="457.9" cy="190.1" r="29"/><circle fill="#FFF" cx="385.4" cy="289.5" r="29"/><path fill="#7C0B29" d="m371 135.7 14.5-3.5 14.5 3.5c0 7.5-14.5 11-14.5 11s-14.5-3.5-14.5-11z"/><circle fill="#FFF" cx="327.5" cy="117.4" r="29"/></g></svg>',_h='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 513 342"><path fill="#FFF" d="M0 0h513v342H0z"/><g fill="#338AF3"><path d="M0 0h171v342H0zM342 0h171v342H342z"/></g><circle fill="#DCC26D" cx="256" cy="155.8" r="25.5"/><path fill="#628A40" d="M194.2 155.9c0 22.1 11.8 42.5 30.8 53.5 5.9 3.4 13.5 1.4 16.9-4.5 3.4-5.9 1.4-13.5-4.5-16.9-11.5-6.6-18.5-18.9-18.5-32.1 0-6.8-5.5-12.4-12.4-12.4s-12.3 5.5-12.3 12.4zm95.1 52.1c17.8-11.4 28.6-31 28.5-52.1 0-6.8-5.5-12.4-12.4-12.4-6.8 0-12.4 5.5-12.4 12.4 0 12.7-6.5 24.5-17.1 31.3-5.8 3.6-7.7 11.2-4.1 17 3.6 5.8 11.2 7.7 17 4.1.2-.1.3-.2.5-.3z"/></svg>',wh='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 513 342"><path fill="#D80027" d="M0 0h512v341.3H0z"/><path fill="#0052B4" d="M11.1 11.1h489.7v319.1H11.1z"/><path fill="#7DBEF1" d="M256 285.3s76.4-51.3 76.4-114.6S256 56 256 56s-76.4 51.3-76.4 114.6S256 285.3 256 285.3z"/><path fill="#1C8AE6" d="M179.8 180.7h152.6l-29.3 64.9h-95.2z"/><path fill="#FFF042" d="M192.3 205.9s40.5 38.2 51 38.2c12.4 0 12.6-18.4 25.5-25.5 20.2-11.1 51-12.7 51-12.7L297 248.7l-41 36.6-46.8-39.7-16.9-39.7z"/><path fill="#259C7B" d="m256 157.5-22.5 15.6 7.9-26.2-21.8-16.5 27.4-.5 9-25.9 9 25.9 27.4.5-21.8 16.6 7.9 26.2-22.5-15.7z"/><path fill="#8E5715" d="M249.7 144.6c-.9 9.2-1.5 18.4-1.7 27.6-.3 11.9.3 20.7 2 26 2.2 6.6 7.2 12.9 14.2 18.9 5.3 4.6 10.6 8.1 14.2 10.1 3.1 1.7 7 .6 8.7-2.4 1.7-3.1.6-7-2.4-8.7-4.3-2.5-8.4-5.4-12.2-8.7-5.4-4.6-9.1-9.2-10.4-13.3-1.1-3.4-1.6-11.3-1.4-21.7.2-8.9.8-17.8 1.7-26.6.4-3.5-2.2-6.6-5.7-7-3.6-.3-6.7 2.3-7 5.8z"/><path fill="#FFF" d="m217.8 170.7 25.5 38.2h-25.5v-38.2z"/><path fill="none" stroke="#D80027" stroke-width="12" stroke-miterlimit="10" d="M256 285.3s76.4-51.3 76.4-114.6S256 56 256 56s-76.4 51.3-76.4 114.6S256 285.3 256 285.3z"/></svg>',bh='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.333 512 341.333"><path fill="#6DA544" d="M0 85.331h512v341.337H0z"/><path fill="#FFDA44" d="M0 85.331h512v170.663H0z"/><path fill="#D80027" d="M0 85.331h181.793v341.337H0z"/><path d="m98.32 195.127 15.107 46.497h48.894l-39.555 28.74 15.108 46.498-39.554-28.737-39.556 28.737 15.111-46.498-39.554-28.74h48.891z"/></svg>',yh='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600"><path fill="#009E49" d="M0 0h900v600H0V0z"/><path fill="#FFF" d="m0 0 947 300L0 600V0z"/><path fill="#FFD00D" d="M0 26.1 870 300 0 573.9V26.1z"/><path fill="#2D2D2D" d="m0 0 450 300L0 600V0z"/><path fill="#D3132F" d="m0 35 397.5 265L0 565V35z"/></svg>',zh='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 513 342"><path fill="#D80027" d="M0 0h513v342H0z"/><g fill="#FFF"><path d="M274.2 119.8c-5.1 21.1-14.1 17.1-18.5 35.5-26.1-6.3-42.1-32.5-35.9-58.6 6.3-26.1 32.5-42.1 58.5-35.9-8.7 36.9.5 40.1-4.1 59zM206.6 135.4c18.5 11.3 11.9 18.7 28 28.6-14 22.9-43.9 30-66.8 16s-30-43.9-16-66.8c32.3 19.8 38.2 12.1 54.8 22.2zM200.6 204.6c16.5-14.1 21.4-5.5 35.8-17.8 17.4 20.4 15 51-5.4 68.4-20.4 17.4-51 15-68.4-5.4 28.7-24.6 23.2-32.6 38-45.2zM264.5 231.7c-8.3-20.1 1.4-22.1-5.9-39.6 24.8-10.3 53.2 1.5 63.4 26.3 10.3 24.8-1.5 53.2-26.3 63.4-14.5-35-23.8-32.2-31.2-50.1zM310 179.3c-21.6 1.7-20.6-8.1-39.5-6.6-2.1-26.7 17.9-50.1 44.6-52.2 26.7-2.1 50.1 17.9 52.2 44.6-37.7 2.9-37.9 12.7-57.3 14.2z"/></g></svg>',xh='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.333 512 341.333"><path fill="#0052B4" d="M0 85.333h512V426.67H0z"/><g fill="#FFF"><path d="M223.397 255.996c.273-.304.543-.609.813-.916-.27.308-.546.61-.82.916h.007zM189.217 297.923l10.958 22.913 24.747-5.718-11.083 22.853 19.9 15.781-24.776 5.585.069 25.398-19.815-15.89-19.814 15.89.069-25.398-24.776-5.585 19.9-15.781-11.083-22.853 24.746 5.718zM387.076 326.387l5.227 10.929 11.803-2.728-5.286 10.9 9.492 7.528-11.818 2.663.032 12.114-9.45-7.578-9.45 7.578.032-12.114-11.817-2.663 9.491-7.528-5.285-10.9 11.803 2.728zM338.453 210.448l5.227 10.93 11.803-2.729-5.286 10.901 9.491 7.528-11.817 2.663.032 12.115-9.45-7.58-9.451 7.58.033-12.115-11.818-2.663 9.491-7.528-5.284-10.901 11.802 2.729zM387.076 144.198l5.227 10.93 11.803-2.73-5.286 10.902 9.491 7.527-11.817 2.664.032 12.114-9.45-7.58-9.45 7.58.032-12.114-11.817-2.664 9.491-7.527-5.285-10.902 11.803 2.73zM429.547 193.886l5.227 10.929 11.802-2.728-5.284 10.9 9.491 7.527-11.818 2.664.033 12.114-9.451-7.578-9.45 7.578.032-12.114-11.817-2.664 9.491-7.527-5.286-10.9 11.803 2.728zM399.179 251.856l4.11 12.652h13.304l-10.763 7.82 4.112 12.652-10.763-7.819-10.765 7.819 4.112-12.652-10.763-7.82h13.304z"/><path d="M256 85.333v30.553l-45.167 25.099H256v59.359h-59.103L256 233.179v22.817h-26.68l-73.494-40.826v40.826h-55.652v-48.573l-87.43 48.573H0v-30.553l45.167-25.099H0v-59.359h59.103L0 108.139V85.333h26.68l73.494 40.827V85.333h55.652v48.573l87.43-48.573z"/></g><path fill="#D80027" d="M144 85.33h-32v69.332H0v32h112v69.334h32v-69.334h112v-32H144z"/><path fill="#0052B4" d="M155.826 200.344 256 255.996v-15.737l-71.847-39.915z"/><path fill="#FFF" d="M155.826 200.344 256 255.996v-15.737l-71.847-39.915z"/><g fill="#D80027"><path d="M155.826 200.344 256 255.996v-15.737l-71.847-39.915zM71.846 200.344 0 240.259v15.737l100.174-55.652z"/></g><path fill="#0052B4" d="M100.174 140.982 0 85.33v15.737l71.847 39.915z"/><path fill="#FFF" d="M100.174 140.982 0 85.33v15.737l71.847 39.915z"/><g fill="#D80027"><path d="M100.174 140.982 0 85.33v15.737l71.847 39.915zM184.154 140.982 256 101.067V85.33l-100.174 55.652z"/></g></svg>',Mh='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 513 342"><path fill="#FFF" d="M0 0h513v342H0z"/><g fill="#338AF3"><path d="M0 0h513v114H0zM0 228h513v114H0zM203.5 117.9l6.7 16.6 17.6 1-14 10.9 4.7 17.7-15-9.9-15 9.9 4.7-17.7-14-10.9 17.6-1zM308.5 117.9l6.7 16.6 17.6 1-14 10.9 4.7 17.7-15-9.9-15 9.9 4.7-17.7-14-10.9 17.6-1zM256 147.6l6.7 16.6 17.6 1-14 10.9 4.7 17.7-15-9.9-15 9.9 4.7-17.7-14-10.9 17.6-1zM203.5 177.3l6.7 16.6 17.6 1-14 10.9 4.7 17.6-15-9.9-15 9.9 4.7-17.6-14-10.9 17.6-1zM308.5 177.3l6.7 16.6 17.6 1-14 10.9 4.7 17.6-15-9.9-15 9.9 4.7-17.6-14-10.9 17.6-1z"/></g></svg>',Fh='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 513 342"><path fill="#FFF" d="M0 0h513v342H0z"/><path fill="#D80027" d="M0 0h513v114H0z"/><path fill="#0052B4" d="M0 228h513v114H0z"/><g fill="#338AF3"><path d="M309.3 113.2v-44l17.5-14.4 17.7 14.4v44zM203.7 113.2v-44l-17.3-14.4-17.9 14.4v44zM238.9 113.2v-44l17.6-14.4 17.6 14.4v44z"/></g><g fill="#0052B4"><path d="M309.3 113.2h-35.2v-44l17.5-14.4 17.7 14.4zM238.9 113.2h-35.2v-44l17.5-14.4 17.7 14.4z"/></g><path stroke="#D80027" fill="#FFF" d="M168.5 113.2v101.9c0 24.3 14.4 46.2 35.4 59.4 21.3 13.4 42.1 14.7 52.6 14.7s31.4-1.7 52.6-14.8c21-13 35.4-35.1 35.4-59.3V113.2h-176z"/><g fill="#D80027"><path d="M168.5 113.2h35.2v35.2h-35.2zM238.9 113.2h35.2v35.2h-35.2zM309.3 113.2h35.2v35.2h-35.2zM203.7 148.4h35.2v35.2h-35.2zM274.1 148.4h35.2v35.2h-35.2zM168.5 183.6h35.2v35.2h-35.2zM203.7 218.8h35.2V254h-35.2zM238.9 183.6h35.2v35.2h-35.2zM309.3 183.6h35.2v35.2h-35.2zM274.1 218.8h35.2V254h-35.2zM309.3 274.3c8.6-5.4 16.2-12.3 22-20.3h-22v20.3zM181.7 254c5.8 8 13.3 14.9 22 20.4V254h-22zM238.9 254v33.7c7.2 1.2 13.3 1.5 17.6 1.5 4.3 0 10.4-.3 17.6-1.6V254h-35.2z"/></g></svg>',Ah='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 513 342"><path fill="#A2001D" d="M0 0h513v172H0z"/><path fill="#0052B4" d="M0 172h513v172H0z"/><path fill="#FFF" d="m381.4 251.5-110.7-13.8-110.8 13.8V85.4h221.5z"/><circle fill="#0052B4" cx="270.7" cy="182.3" r="55.4"/><circle fill="#A2001D" cx="270.7" cy="182.3" r="27.7"/><path fill="#6DA544" d="M229.1 113.1h83.1l-41.5 41.5z"/><path fill="#FFDA44" d="M256.8 140.8h27.7v83h-27.7z"/><path fill="#6DA544" d="M314.9 215.5h-88.5l-66.5 36h221.5z"/></svg>',Hh='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.333 512 341.333"><path fill="#FFF" d="M0 85.337h512v341.326H0z"/><path fill="#D80027" d="M0 85.337h512v113.775H0z"/><path fill="#6DA544" d="M0 312.888h512v113.775H0z"/></svg>',Ch='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.333 512 341.333"><path fill="#FFF" d="M0 85.333h512v341.333H0z"/><path fill="#E00" d="M0 85.333h512V256H0z"/></svg>',Sh='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.333 512 341.333"><path fill="#FFF" d="M0 85.331h512v341.326H0z"/><path fill="#6DA544" d="M0 85.331h170.663v341.337H0z"/><path fill="#FF9811" d="M341.337 85.331H512v341.337H341.337z"/></svg>',Dh='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 513 342"><path fill="#FFF" d="M0 0h513v342H0z"/><g fill="#2E52B2"><path d="M340.6 122.4h-56.1l-28-48.6-28 48.6h-56.1l28 48.6-28 48.6h56.1l28 48.6 28-48.6h56.1l-28-48.6 28-48.6zM293.2 171 276 204.2h-38.9L219.8 171l17.2-33.2h38.9l17.3 33.2zm-36.7-71.8 11.9 23.3h-23.9l12-23.3zm-58.3 38.6h23.9l-10.8 21-13.1-21zm0 66.4 13-22.1 11.9 22.1h-24.9zm58.3 37.5-11.9-22.1h23.9l-12 22.1zm59.4-37.5h-25l11.9-22.1 13.1 22.1zm-26.1-66.4h26.1l-13 22.1-13.1-22.1zM0 21.3h512V64H0zM0 277.3h512V320H0z"/></g></svg>',Eh='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 513 342"><path fill="#E52D42" d="M0 0h513v342H0z"/><path fill="#FFF" d="M393.3 68.2h-45.8l-33.8 80.2-34.4-22.9s-24.7-59.1-34.4-68.2c-9.7-9.7-18.7-.6-48.9 7.8-29.6 8.4-30.8 18.7-42.2 18.7-4.8 0-19.9-17.5-27.7-22.3-12.1-7.8-16.9-4.2-13.9 7.2 1.2 4.8 10.9 10.9 16.9 19.9 7.8 11.5 12.7 25.9 12.7 25.9s10.9-10.3 16.9-12.1c9-2.4 19.3 1.8 31.4 0 15.1-2.4 31.4-10.9 31.4-10.9l4.2 43.4s-54.3 50.7-49.5 70.6 56.1 44.6 68.2 62.7c12.1 17.5-7.2 24.1-7.2 32.6s-1.8 19.9 7.2 16.3c9-3.6 10.3-18.1 18.7-31.4 6-9 10.3-13.9 11.5-17.5 1.8-9-23.5-32-37.4-48.9-6.6-7.8-19.9-18.7-19.9-18.7l39.2-29.6s67.6 27.7 82.6 18.7c15.1-9 19.3-98.3 19.3-98.3l47-11.5-12.1-11.7z"/><path fill="#F8DD4E" d="M279.3 262.4c-6 0-11.5-4.8-11.5-11.5s4.8-11.5 11.5-11.5c6 0 11.5 4.8 11.5 11.5s-5.5 11.5-11.5 11.5zm45.8-182.8c-6 0-11.5-4.8-11.5-11.5s4.8-11.5 11.5-11.5c6 0 11.5 4.8 11.5 11.5s-5.5 11.5-11.5 11.5zm0 91.1c-6 0-11.5-4.8-11.5-11.5 0-6 4.8-11.5 11.5-11.5 6 0 11.5 4.8 11.5 11.5-.6 6.7-5.5 11.5-11.5 11.5zm-136.9 45.8c-6 0-11.5-4.8-11.5-11.5 0-6 4.8-11.5 11.5-11.5 6.6 0 11.5 4.8 11.5 11.5s-5.5 11.5-11.5 11.5zm45.2-136.9c-6 0-11.5-4.8-11.5-11.5s4.8-11.5 11.5-11.5c6 0 11.5 4.8 11.5 11.5s-4.8 11.5-11.5 11.5zm22.9 91.1c-6 0-11.5-10.3-11.5-22.9s4.8-22.9 11.5-22.9c6 0 11.5 10.3 11.5 22.9s-4.8 22.9-11.5 22.9zm-114-45.2c-6 0-11.5-4.8-11.5-11.5 0-6.6 4.8-11.5 11.5-11.5 6.6 0 11.5 4.8 11.5 11.5 0 6.6-4.8 11.5-11.5 11.5z"/></svg>',Ph='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 513 342"><path fill="#181A93" d="M17.3 0h478.4v342H17.3V0z"/><path fill="#FFA44A" d="M0 0h513v114H0V0z"/><path fill="#1A9F0B" d="M0 228h513v114H0V228z"/><path fill="#FFF" d="M0 114h513v114H0V114z"/><circle fill="#FFF" cx="256.5" cy="171" r="34.2"/><path fill="#181A93" d="M256.5 216.6c-25.1 0-45.6-20.5-45.6-45.6s20.5-45.6 45.6-45.6 45.6 20.5 45.6 45.6-20.5 45.6-45.6 45.6zm0-11.4c18.2 0 34.2-16 34.2-34.2s-15.9-34.2-34.2-34.2-34.2 16-34.2 34.2 16 34.2 34.2 34.2z"/><circle fill="#181A93" cx="256.5" cy="171" r="22.8"/></svg>',Bh='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 513 342"><path fill="#FFF" d="M0-.3h513V342H0V-.3z"/><path fill="#0052B4" d="M462.9 198.1c-4 0-14-5-21-9-11-6-21-12-31.1-12s-20 6-31.1 12c-7 4-16 9-20 9s-14-5-20-9c-11-6-22-12-32.1-12-9 0-20 6-31.1 12-7 4-16 9-20 9s-13-5-20-9c-11-6-22-12-31.1-12-10 0-21 6-32.1 12-6 4-16 9-20 9s-13-5-20-9c-11-6-21-12-31.1-12s-20 6-31.1 12c-7 4-17 9-21 9s-13-5-20-9c-10-6-20-12-30.1-12v22l19 10c11 6 21 12 31.1 12s21-6 32.1-12c6-4 16-10 20-10s13 6 20 10c11 6 21 12 31.1 12s20-6 31.1-12c7-4 17-10 21-10s13 6 20 10c11 6 21 12 31.1 12s20-6 31.1-12c7-4 16-10 20-10s14 6 21 10c11 6 21 12 31.1 12s20-6 31.1-12c7-4 16-10 20-10s14 6 20 10c11 6 22 12 32.1 12s20-6 31.1-12l19-10v-22c-10 0-20 6-30.1 12-7 4-16 9-20 9zM0 31.7l19 10c11 6 21 12 31.1 12s21-6 32.1-12c6-4 16-10 20-10s13 6 20 10c11 6 21 12 31.1 12s20-6 31.1-12c7-4 17-10 21-10s13 6 20 10c11 6 21 12 31.1 12s20-6 31.1-12c7-4 16-10 20-10s14 6 21 10c11 6 21 12 31.1 12s20-6 31.1-12c7-4 16-10 20-10s14 6 20 10c11 6 22 12 32.1 12s20-6 31.1-12l19-10v-22c-10 1-20 6-30.1 12-7 4-16 9-20 9s-14-5-21-9c-11-6-21-12-31.1-12s-20 6-31.1 12c-7 4-16 9-20 9s-14-5-20-9c-11-6-22-12-32.1-12s-20 6-31.1 12c-7 4-16 9-20 9s-13-5-20-9c-11-6-22-12-31.1-12s-21 6-32.1 12c-6 4-16 9-20 9s-13-5-20-9c-11-6-21-12-31.1-12s-20 6-31.1 12c-7 4-17 9-21 9s-13-5-20-9c-10-6-20-11-30.1-12v22zm462.9 55.2c-4 0-14-5-21-9-11-6-21-12-31.1-12s-20 6-31.1 12c-7 4-16 9-20 9s-14-5-20-9c-11-6-22-12-32.1-12-9 0-20 6-31.1 12-7 4-16 9-20 9s-13-5-20-9c-11-6-22-12-31.1-12-10 0-21 6-32.1 12-6 4-16 9-20 9s-13-5-20-9c-11-6-21-12-31.1-12s-20 6-31.1 12c-7 4-17 9-21 9s-13-5-20-9c-10-6-20-12-30.1-12v22l19 9c11 6 21 12 31.1 12s21-6 32.1-12c6-4 16-9 20-9s13 5 20 9c11 6 21 12 31.1 12s20-6 31.1-12c7-4 17-9 21-9s13 5 20 9c11 6 21 12 31.1 12s20-6 31.1-12c7-4 16-9 20-9s14 5 21 9c11 6 21 12 31.1 12s20-6 31.1-12c7-4 16-9 20-9s14 5 20 9c11 6 22 12 32.1 12s20-6 31.1-12l19-9v-22c-10 0-20 6-30.1 12-7 3.9-16 9-20 9zm50.1 34c-10 1-20 6-30.1 12-7 4-16 10-20 10s-14-6-21-10c-11-6-21-12-31.1-12s-20 6-31.1 12c-7 4-16 10-20 10s-14-6-20-10c-11-6-22-12-32.1-12s-20 6-31.1 12c-7 4-16 10-20 10s-13-6-20-10c-11-6-22-12-31.1-12s-21 6-32.1 12c-6 4-16 10-20 10s-13-6-20-10c-11-6-21-12-31.1-12s-20 6-31.1 12c-7 4-17 10-21 10s-13-6-20-10c-10-6-20-11-30.1-12v23c4 1 13 5 19 9 11 6 21 12 31.1 12s21-6 32.1-12c6-4 16-9 20-9s13 5 20 9c11 6 21 12 31.1 12s20-6 31.1-12c7-4 17-9 21-9s13 5 20 9c11 6 21 12 31.1 12s20-6 31.1-12c7-4 16-9 20-9s14 5 21 9c11 6 21 12 31.1 12s20-6 31.1-12c7-4 16-9 20-9s14 5 20 9c11 6 22 12 32.1 12s20-6 31.1-12c6-4 15-8 19-9v-23zm-50.1 133.3c-4 0-14-5-21-9-11-6-21-12-31.1-12s-20 6-31.1 12c-7 4-16 9-20 9s-14-5-20-9c-11-6-22-12-32.1-12-9 0-20 6-31.1 12-7 4-16 9-20 9s-13-5-20-9c-11-6-22-12-31.1-12-10 0-21 6-32.1 12-6 4-16 9-20 9s-13-5-20-9c-11-6-21-12-31.1-12s-20 6-31.1 12c-7 4-17 9-21 9s-13-5-20-9c-10-6-20-12-30.1-12v22l19 9c11 6 21 12 31.1 12s21-6 32.1-12c6-4 16-9 20-9s13 5 20 9c11 6 21 12 31.1 12s20-6 31.1-12c7-4 17-9 21-9s13 5 20 9c11 6 21 12 31.1 12s20-6 31.1-12c7-4 16-9 20-9s14 5 21 9c11 6 21 12 31.1 12s20-6 31.1-12c7-4 16-9 20-9s14 5 20 9c11 6 22 12 32.1 12s20-6 31.1-12l19-9v-22c-10 0-20 6-30.1 12-7 4-16 9-20 9zm50.1 34c-10 1-20 6-30.1 12-7 4-16 10-20 10s-14-6-21-10c-11-6-21-12-31.1-12s-20 6-31.1 12c-7 4-16 10-20 10s-14-6-20-10c-11-6-22-12-32.1-12s-20 6-31.1 12c-7 4-16 10-20 10s-13-6-20-10c-11-6-22-12-31.1-12s-21 6-32.1 12c-6 4-16 10-20 10s-13-6-20-10c-11-6-21-12-31.1-12s-20 6-31.1 12c-7 4-17 10-21 10s-13-6-20-10c-10-6-20-11-30.1-12v23c4 0 13 5 19 9 11 6 21 12 31.1 12s21-6 32.1-12c6-4 16-9 20-9s13 5 20 9c11 6 21 12 31.1 12s20-6 31.1-12c7-4 17-9 21-9s13 5 20 9c11 6 21 12 31.1 12s20-6 31.1-12c7-4 16-9 20-9s14 5 21 9c11 6 21 12 31.1 12s20-6 31.1-12c7-4 16-9 20-9s14 5 20 9c11 6 22 12 32.1 12s20-6 31.1-12c6-4 15-9 19-9v-23z"/><path fill="#FFF" d="M0-.3h256v171H0V-.3z"/><path d="M389.8 119.9H408v78.8h-18.3l.1-78.8zm0 117.8H408v75.1h-18.3l.1-75.1z" fill="#A2001D"/><g fill="#D80027"><path d="M144-.3h-32v70H0v32h112v69h32v-69h112v-32H144v-70z"/><path d="M0-.3v15l57 39h23L0-.3zM256-.3v15l-57 39h-23l80-54z"/><path d="M0-.3v15l57 39h23L0-.3zM256-.3v15l-57 39h-23l80-54zM0 170.7v-15l57-38h23l-80 53zM256 170.7v-15l-57-38h-23l80 53z"/></g><g fill="#2E52B2"><path d="M0 22.7v31h46l-46-31zm96-23v49L23-.3h73zM256 22.7v31h-46l46-31zm-96-23v49l73-49h-73z"/><path d="M0 22.7v31h46l-46-31zm96-23v49L23-.3h73zM256 22.7v31h-46l46-31zm-96-23v49l73-49h-73zM0 147.7v-30h46l-46 30zm96 23v-49l-73 49h73zM256 147.7v-30h-46l46 30zm-96 23v-49l73 49h-73z"/></g><path fill="#5DA51E" stroke="#45602C" stroke-width="4" stroke-miterlimit="10" d="M462.8 91.5h-29.1l25.7-25.7c4.5-4.4 4.5-11.4 0-15.8l-3.4-3.4c-4.4-4.4-11.4-4.4-15.8 0l-25.9 25.9V37.4c0-6.2-5.1-11.3-11.3-11.3h-4.7c-6.2 0-11.3 5.1-11.3 11.3v31.7l-23.5-23.8c-4.7-4.7-12.2-4.7-16.9 0l-3.6 3.6c-4.7 4.7-4.7 12.4 0 17.2l25 25.4h-30.6c-6 0-10.9 4.9-10.9 10.9v4.6c0 6 4.9 10.9 10.9 10.9H369l-20.7 20.7c-4.4 4.4-4.4 11.4 0 15.8l3.4 3.4c4.4 4.4 11.4 4.4 15.8 0l19.6-19.6V167c0 6.1 5.1 11.1 11.3 11.3h4.7c6.2 0 11.3-5.1 11.3-11.3v-28.3l22.2 22.6c4.7 4.7 12.4 4.7 17.1 0l3.6-3.6c4.7-4.7 4.7-12.4 0-17.2L435.2 118h27.6c5.9 0 10.7-4.9 10.9-10.9v-4.6c0-6.1-4.9-11-10.9-11z"/><path fill="#E2DD24" stroke="#525625" stroke-width="4" stroke-miterlimit="10" d="M439.2 249.1h-79.8s-.9-13.4-6-21.8c-6.2-10.4-13.9-28.1-1.4-36.7 15.9-10.9 33.7.8 48.2.8 11.8.1 26.9-14 45-.8 12.2 8.9 3.9 28.2-1.3 36.7-7 11.5-4.7 21.8-4.7 21.8z"/></svg>',kh='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 513 342"><path fill="#FFF" d="M0 0h513v342H0z"/><path fill="#CE1126" d="M0 0h513v114H0z"/><path d="M0 228h513v114H0z"/><g fill="#547C31"><path d="M219.2 160.7h-29.3c1.5-5.7 6.6-9.9 12.8-9.9v-19.9c-18.3 0-33.1 14.9-33.1 33.1v16.5h49.6c1.8 0 3.3 1.5 3.3 3.3v6.6h-66.2v19.9h86.1v-26.5c0-12.7-10.4-23.1-23.2-23.1zM268.8 190.5v-59.6H249v79.5h33.1v-19.9zM335 190.5v-59.6h-19.8v59.6h-6.6v-19.8h-19.9v39.7h59.6v-19.9z"/></g></svg>',Th='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 513 342"><path fill="#FFF" d="M0 0h512v342H0z"/><path fill="#6DA544" d="M0 0h513v114H0z"/><g fill="#D80027"><path d="M0 227.9h513v114H0zM278.8 134.8c.1 2 8.7 26.2 4.4 39.4-6.6 20.3-15.8 21.8-19.8 24.5V134l-6.9-4.2-6.9 4.2v64.7c-4-2.7-12.4-2.4-19.8-24.5-4.3-12.7 5.7-37.3 5.8-39.2 0 0-9.5 8.1-15.8 24-5.9 14.8 1.9 49.6 29.5 54.8 2.3.4 4.7 5.6 7.2 5.6 2.1 0 4.1-5.2 6-5.5 28.4-4.6 35-41.7 29.9-55.6-5.4-14.6-13.6-23.5-13.6-23.5z"/></g><g fill="#FFF" opacity=".5"><path d="M44.6 98.9h22.3v24.4H44.6zM0 98.9h22.3v24.4H0zM89.2 98.9h22.3v24.4H89.2zM133.8 98.9h22.3v24.4h-22.3zM178.4 98.9h22.3v24.4h-22.3zM223 98.9h22.3v24.4H223zM267.7 98.9H290v24.4h-22.3zM312.3 98.9h22.3v24.4h-22.3zM356.9 98.9h22.3v24.4h-22.3zM401.5 98.9h22.3v24.4h-22.3zM446.1 98.9h22.3v24.4h-22.3zM490.7 98.9H513v24.4h-22.3zM44.6 216.9h22.3v25.5H44.6zM0 216.9h22.3v25.5H0zM89.2 216.9h22.3v25.5H89.2zM133.8 216.9h22.3v25.5h-22.3zM178.4 216.9h22.3v25.5h-22.3zM223 216.9h22.3v25.5H223zM267.7 216.9H290v25.5h-22.3zM312.3 216.9h22.3v25.5h-22.3zM356.9 216.9h22.3v25.5h-22.3zM401.5 216.9h22.3v25.5h-22.3zM446.1 216.9h22.3v25.5h-22.3zM490.7 216.9H513v25.5h-22.3z"/></g></svg>',Ih='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.333 512 341.333"><path fill="#0052B4" d="M0 85.334h512v341.337H0z"/><path fill="#FFF" d="M512 295.883H202.195v130.783H122.435V295.883H0V216.111h122.435V85.329H202.195v130.782H512V277.329z"/><path fill="#D80027" d="M512 234.666v42.663H183.652v149.337h-42.674V277.329H0v-42.663h140.978V85.329h42.674v149.337z"/></svg>',Lh='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.333 512 341.333"><path fill="#FFF" d="M341.334 85.33H0v341.332h512V85.33z"/><path fill="#6DA544" d="M0 85.333h170.663V426.67H0z"/><path fill="#D80027" d="M341.337 85.333H512V426.67H341.337z"/></svg>',Oh='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 513 342"><path fill="#FFF" d="M0 0h513v342H0z"/><path fill="#D80027" d="M301.8 171 513 30.2V0h-45.3L256.5 140.8 45.3 0H0v30.2L211.2 171 0 311.8V342h45.3l211.2-140.8L467.7 342H513v-30.2z"/><path fill="#FFDA44" d="m233.7 44.6 22.3 5.6 22.3-5.6 4-20.9-14.9 6.5L256 14.8l-11.4 15.4-14.9-6.5z"/><path fill="#D80027" d="M233.7 44.6s-4 12.9-4 29.9c0 27.9 26.3 41.3 26.3 41.3s26.3-15.5 26.3-41.3c0-15.4-4-29.9-4-29.9s-8.1-5-22.3-5-22.3 5-22.3 5z"/></svg>',Nh='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.333 512 341.333"><path fill="#6DA544" d="M0 85.337h512v341.326H0z"/><path d="M215.864 256.006 0 399.911V112.089zM512 112.089v287.822L296.136 256.006z"/><path fill="#0052B4" d="M512 112.089 296.136 256.006 512 399.911v26.757h-40.125L256 282.752 40.125 426.668H0v-26.757l215.864-143.905L0 112.089V85.331h40.125L256 229.248 471.875 85.331H512z"/><path fill="#FFDA44" d="M512 112.089 296.136 256.006 512 399.911v26.757h-40.125L256 282.752 40.125 426.668H0v-26.757l215.864-143.905L0 112.089V85.331h40.125L256 229.248 471.875 85.331H512z"/></svg>',Rh='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.333 512 341.333"><path fill="#FFF" d="M0 85.339h512v341.326H0z"/><path d="M0 85.339h512v113.775H0z"/><path fill="#6DA544" d="M0 312.89h512v113.775H0z"/><path fill="#D80027" d="M256 256.006 0 426.669V85.331z"/><path fill="#FFF" d="m77.913 224.802 7.876 16.469 17.786-4.11-7.965 16.426 14.303 11.343-17.808 4.014.049 18.255-14.241-11.421-14.241 11.421.05-18.255-17.809-4.014 14.303-11.343-7.965-16.426 17.786 4.11z"/></svg>',Vh='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.333 512 341.333"><path fill="#FFF" d="M0 85.331h512v341.337H0z"/><circle fill="#D80027" cx="256" cy="255.994" r="96"/></svg>',$h='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.333 512 341.333"><path fill="#FFF" d="M0 85.331h512v341.337H0z"/><path d="M0 85.331h512v90.579H0z"/><path fill="#496E2D" d="M0 336.089h512v90.568H0z"/><path fill="#A2001D" d="M0 198.606h512v114.799H0z"/><g fill="#FFF"><path d="m323.265 139.803-25.583-11.809L256 222.376l-41.682-94.382-25.583 11.809 51.749 116.191-51.749 116.192 25.583 11.808L256 289.613l41.682 94.381 25.583-11.808-51.749-116.192z"/><path d="M273.376 150.931C263.472 140.115 256 133.898 256 133.898s-7.472 6.216-17.376 17.032v210.127C248.528 371.873 256 378.091 256 378.091s7.472-6.216 17.376-17.033V150.931z"/></g><g fill="#A2001D"><path d="M209.04 191.226v129.535c10.465 18.542 23.274 33.742 32.872 43.818V147.408c-9.599 10.076-22.408 25.275-32.872 43.818zM302.96 191.226c-10.465-18.543-23.274-33.742-32.872-43.818V364.58c9.599-10.077 22.407-25.276 32.872-43.818V191.226z"/></g><path d="M302.96 191.226v129.535c10.594-18.774 18.784-40.973 18.784-64.767s-8.19-45.993-18.784-64.768zM209.04 191.226v129.535c-10.594-18.774-18.784-40.973-18.784-64.767s8.19-45.993 18.784-64.768z"/></svg>',jh='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 342"><g fill="#D80027"><path d="M0 0h513v342H0z"/><circle cx="256" cy="170.7" r="170.7"/></g><path fill="#FFDA44" d="M382.4 170.7 330.8 195l27.5 50-56.1-10.7-7.1 56.6-39.1-41.7-39.1 41.7-7.1-56.6-56.1 10.7 27.5-50-51.6-24.3 51.6-24.3-27.5-50.1 56.1 10.8 7.1-56.7L256 92.1l39.1-41.7 7.1 56.7 56.1-10.8-27.5 50.1z"/><circle fill="#D80027" cx="257.4" cy="170.7" r="71.6"/><g fill="#FFDA44"><path d="M214.2 170.7c-2.1 0-4.1.1-6.2.3.1 12 4.4 22.9 11.6 31.5 3.8-10.3 9.5-19.6 16.7-27.7-6.9-2.7-14.3-4.1-22.1-4.1zM240.8 217.2c5.2 1.9 10.8 2.9 16.6 2.9 5.8 0 11.4-1 16.6-2.9-2.8-11.1-8.7-21-16.6-28.8-7.9 7.8-13.8 17.7-16.6 28.8zM300.2 146c-8.5-14.8-24.5-24.7-42.8-24.7-18.3 0-34.2 9.9-42.8 24.7 15.6.1 30.2 4.3 42.8 11.6 12.6-7.3 27.2-11.6 42.8-11.6zM278.5 174.8c7.2 8 12.9 17.4 16.7 27.7 7.2-8.5 11.5-19.5 11.6-31.5-2-.2-4.1-.3-6.2-.3-7.7 0-15.2 1.4-22.1 4.1z"/></g></svg>',Gh='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.333 512 341.333"><path fill="#D80027" d="M0 85.337h512v341.326H0z"/><g fill="#0052B4"><path d="M0 85.337h512v113.775H0zM0 312.888h512v113.775H0z"/></g><path fill="#FFF" d="M303.49 281.971v-17.809h-11.873v-23.745l-11.872-11.872-11.872 11.872v-23.744L256 204.8l-11.873 11.873v23.744l-11.872-11.872-11.872 11.872v23.745H208.51v17.809h-11.872v17.808h118.724v-17.808z"/></svg>',Wh='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 450 300"><path fill="#CE1126" d="M0 0h450v300H0V0z"/><g fill="#FCD116"><circle cx="227.6" cy="161.2" r="56.2"/><path d="m254.1 73.4-23.7 26 28.6 6.5zM202.6 73.6l-4.8 33.1 28.5-8zM296.9 100.3l-34.7 8.5 20.1 23.7zM158.6 98.5l15.5 32.7 20.2-22.7zM317.6 143.8l-34.4-9.9 5.6 29.5zM135.6 141.2l31.9 19.8 5.2-27.7z"/></g><path fill="#003F87" d="M0 175h450v125H0V175z"/><path fill="#FFF" d="M0 267c15 0 30 13 45 13s30-13 45-13 30 13 45 13 30-13 45-13 30 13 45 13 30-13 45-13 30 13 45 13 30-13 45-13 30 13 45 13 30-13 45-13v-21c-15 0-30 13-45 13s-30-13-45-13-30 13-45 13-30-13-45-13-30 13-45 13-30-13-45-13-30 13-45 13-30-13-45-13-30 13-45 13-30-13-45-13v21zm0-43c15 0 30 13 45 13s30-13 45-13 30 13 45 13 30-13 45-13 30 13 45 13 30-13 45-13 30 13 45 13 30-13 45-13 30 13 45 13 30-13 45-13v-21c-15 0-30 13-45 13s-30-13-45-13-30 13-45 13-30-13-45-13-30 13-45 13-30-13-45-13-30 13-45 13-30-13-45-13-30 13-45 13-30-13-45-13v21zm0-43c15 0 30 13 45 13s30-13 45-13 30 13 45 13 30-13 45-13 30 13 45 13 30-13 45-13 30 13 45 13 30-13 45-13 30 13 45 13 30-13 45-13v-21c-15 0-30 13-45 13s-30-13-45-13-30 13-45 13-30-13-45-13-30 13-45 13-30-13-45-13-30 13-45 13-30-13-45-13-30 13-45 13-30-13-45-13v21z"/><path fill-rule="evenodd" clip-rule="evenodd" fill="#FCD116" d="m183.2 48.3-1.1-5.3 22.4-3.7s-30.1-7.1-40-10.7c-14.3-5.1-16.3-12.1-16.3-12.1s44.7 11 64.8 11c4.3 0 12.8 10.7 12.8 10.7s14.8-14.9 21.9-15.4c32.1-2.3 66.6-6.4 66.6-6.4s-10 6.7-16 8.5c-16.2 4.9-50.6 11.7-50.6 11.7l-4.8 7.5H277l-14.4 4.3 7.4 6.9s-7.8-4.1-18.1-2.1c-7.1 1.3-15.4 6-22.9 8-18.7 4.8-29.9-12.8-29.9-12.8l-15.9-.1z"/></svg>',Uh='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.333 512 341.333"><path fill="#0052B4" d="M0 85.337h512v341.326H0z"/><path fill="#FFDA44" d="M0 85.337h512v85.337H0z"/><path fill="#FFF" d="M0 170.663h512V256H0z"/><path fill="#D80027" d="M0 256h512v85.337H0z"/><path fill="#6DA544" d="M256 256.006 0 426.668V85.331z"/><g fill="#FFF"><path d="M68.638 256c0-24.865 17.476-45.638 40.812-50.734a52.059 52.059 0 0 0-11.13-1.208c-28.688 0-51.942 23.255-51.942 51.942s23.255 51.942 51.942 51.942c3.822 0 7.543-.425 11.13-1.208-23.337-5.096-40.812-25.869-40.812-50.734z"/><path d="m108.877 211.478 2.762 8.503h8.94l-7.232 5.256 2.762 8.502-7.232-5.255-7.234 5.255 2.764-8.502-7.234-5.256h8.94zM108.877 233.739l2.762 8.503h8.94l-7.232 5.255 2.762 8.503-7.232-5.255-7.234 5.255 2.764-8.503-7.234-5.255h8.94zM108.877 256l2.762 8.503h8.94l-7.232 5.255 2.762 8.503-7.232-5.255-7.234 5.255 2.764-8.503-7.234-5.255h8.94zM108.877 278.261l2.762 8.502h8.94l-7.232 5.256 2.762 8.503-7.232-5.255-7.234 5.255 2.764-8.503-7.234-5.256h8.94z"/></g></svg>',qh='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 513 342"><path fill="#D80027" d="M0 0h513v342H0z"/><path fill="#6DA544" d="M512 0H0v342"/><path fill="#FFDA44" d="M307.7 0 0 194.5V342h206.9L513 148.5V0z"/><path d="M513 0H385.2L0 249.4V341l126.2 1L513 91.6z"/><g fill="#FFF"><path d="m141.1 187 31.2 24 32.3-22.2-13.1 37 31.1 23.9-39.2-1.1-13.2 37-11.1-37.6-39.2-1.1 32.3-22.2zM310.6 70.8l31.2 23.9 32.3-22.2-13.1 37 31.1 23.9-39.2-1.1-13.2 37-11.1-37.6-39.2-1.1 32.4-22.2z"/></g></svg>',Yh='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.333 512 341.333"><path fill="#91DC5A" d="M0 85.331h512v341.337H0z"/><path fill="#FFF" d="M0 85.331h512v341.337H0z"/><g fill="#0052B4"><path d="M0 85.331h512v57.188H0zM0 369.48h512v57.177H0z"/></g><path fill="#D80027" d="M0 165.215h512v181.582H0z"/><circle fill="#FFF" cx="190.33" cy="255.994" r="65.668"/><path fill="#D80027" d="m190.332 190.332 14.734 45.346h47.757l-38.65 28.028 14.849 45.481-38.69-28.16-38.631 28.107 14.79-45.428-38.616-28.028h47.722z"/></svg>',Kh='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600"><path fill="#FFF" d="M0 0h900v600H0z"/><g transform="rotate(-56.31)"><g stroke="#000" stroke-width="25"><path d="M-75 228.3H75m-150 37.5H75m-150 37.5H75M-75 778.3H75m-150 37.5H75m-150 37.5H75"/></g><path stroke="#FFF" stroke-width="12.5" d="M0 753.3v125"/><circle fill="#ca163a" cy="540.8" r="150"/><path fill="#0e4896" d="M0 390.8c-41.4 0-75 33.6-75 75s33.6 75 75 75 75 33.6 75 75-33.6 75-75 75c-82.8 0-150-67.2-150-150s67.2-150 150-150z"/></g><g stroke="#000" stroke-width="25"><path d="m231.56 535.73-83.205-124.808M262.76 514.928l-83.205-124.807m114.407 104.006-83.205-124.808M689.187 230.644l-83.205-124.807M720.39 209.843 637.184 85.036m114.407 104.006L668.386 64.234"/></g><path stroke="#FFF" stroke-width="12.5" d="m205.6 462.897 31.202-20.8m389.981-259.989 36.444-24.296m31.202-20.801 31.202-20.801"/></svg>',Zh='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.333 512 341.333"><path fill="#FFF" d="M0 85.337h512v341.326H0z"/><path fill="#6DA544" d="M0 85.337h512v113.775H0z"/><path fill="#D80027" d="M0 312.888h512v113.775H0z"/><path d="M166.957 312.889 0 426.663V85.337l166.957 113.774z"/></svg>',Jh='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.333 512 341.333"><path fill="#0052B4" d="M0 85.334h512v341.337H0z"/><circle fill="#6DA544" cx="384" cy="181.79" r="29.682"/><path fill="#D80027" d="M332.054 174.377h103.88v44.522h-103.88z"/><path fill="#496E2D" d="M435.942 255.997v-.001.001z"/><path fill="#FFDA44" d="M332.058 285.678v29.682h15.616c9.364 9.176 22.18 14.84 36.326 14.84 14.147 0 26.962-5.664 36.326-14.84h15.616v-29.682H332.058z"/><path fill="#338AF3" d="M332.058 211.475v44.522c0 39.759 51.942 51.942 51.942 51.942s51.942-12.182 51.942-51.942v-44.522H332.058z"/><g fill="#F3F3F3"><path d="M383.997 235.256c-12.985 0-12.985 11.873-25.97 11.873s-12.985-11.873-25.97-11.873v20.777c12.985 0 12.985 11.873 25.97 11.873s12.985-11.873 25.97-11.873c12.986 0 12.986 11.873 25.973 11.873 12.986 0 12.986-11.873 25.973-11.873v-20.777c-12.986 0-12.986 11.873-25.973 11.873-12.986-.001-12.986-11.873-25.973-11.873zM383.997 193.666c-12.985 0-12.985 11.873-25.97 11.873s-12.985-11.873-25.97-11.873v20.777c12.985 0 12.985 11.873 25.97 11.873s12.985-11.873 25.97-11.873c12.986 0 12.986 11.873 25.973 11.873 12.986 0 12.986-11.873 25.973-11.873v-20.777c-12.986 0-12.986 11.873-25.973 11.873-12.986 0-12.986-11.873-25.973-11.873z"/></g><path fill="#FFF" d="M256 85.334v22.617l-46.069 30.709H256v64h-46.069L256 233.38v22.617h-22.628L160 207.078v48.919H96v-48.919l-73.372 48.919H0V233.38l46.069-30.72H0v-64h46.069L0 107.951V85.334h22.628L96 134.241V85.334h64v48.907l73.372-48.907z"/><g fill="#D80027"><path d="M144 85.329h-32v69.334H0v32h112v69.334h32v-69.334h112v-32H144z"/><path d="M0 85.329v15.082l57.377 38.252H80zM256 85.329v15.082l-57.377 38.252H176z"/><path d="M0 85.329v15.082l57.377 38.252H80zM256 85.329v15.082l-57.377 38.252H176zM0 255.997v-15.082l57.377-38.252H80zM256 255.997v-15.082l-57.377-38.252H176z"/></g></svg>',Xh='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 513 342"><path fill="#36B6CC" d="M0 0h513v342H0V0z"/><circle fill="#FFD400" cx="256.5" cy="170.9" r="68.4"/><path fill="#FFD400" d="m256.5 251.5-27.9 41.7-7.1-49.7-43.2 25.5 15.2-47.8-50 4.2 34.4-36.5-46.9-18 46.8-18-34.4-36.5 50 4.2-15.2-47.8 43.2 25.4 7.1-49.7 27.9 41.7 27.9-41.7 7.1 49.7 43.2-25.4-15.2 47.8 50-4.2-34.3 36.6 46.8 17.9-46.8 18 34.4 36.5-50-4.2 15.2 47.8-43.2-25.4-7.1 49.7c0-.1-27.9-41.8-27.9-41.8zm0-.8c44.1 0 79.9-35.8 79.9-79.9S300.6 91 256.5 91s-79.9 35.8-79.9 79.9 35.8 79.8 79.9 79.8zM22.8 28.3c0-3.2 2.4-5.7 5.7-5.7h11.3c3.2 0 5.7 2.4 5.7 5.7v11.3c.1 3.1-2.4 5.7-5.6 5.7H28.5c-3.1 0-5.7-2.5-5.7-5.6V28.3zm0 45.7c0-3.2 2.4-5.7 5.7-5.7h11.3c3.2 0 5.7 2.4 5.7 5.7v11.3c.1 3.1-2.4 5.7-5.6 5.7H28.5c-3.1 0-5.7-2.5-5.7-5.6V74zm0 45.6c0-3.2 2.4-5.7 5.7-5.7h11.3c3.2 0 5.7 2.4 5.7 5.7v11.3c.1 3.1-2.4 5.7-5.6 5.7H28.5c-3.1 0-5.7-2.5-5.7-5.6v-11.4zm0 45.6c0-3.2 2.4-5.7 5.7-5.7h11.3c3.2 0 5.7 2.4 5.7 5.7v11.3c.1 3.1-2.4 5.7-5.6 5.7H28.5c-3.1 0-5.7-2.5-5.7-5.6v-11.4zm0 45.7c0-3.2 2.4-5.7 5.7-5.7h11.3c3.2 0 5.7 2.4 5.7 5.7v11.3c.1 3.1-2.4 5.7-5.6 5.7H28.5c-3.1 0-5.7-2.5-5.7-5.6v-11.4zm0 45.6c0-3.2 2.4-5.7 5.7-5.7h11.3c3.2 0 5.7 2.4 5.7 5.7v11.3c.1 3.1-2.4 5.7-5.6 5.7H28.5c-3.1 0-5.7-2.5-5.7-5.6v-11.4zm0 45.6c0-3.2 2.4-5.7 5.7-5.7h11.3c3.2 0 5.7 2.4 5.7 5.7v11.3c.1 3.1-2.4 5.7-5.6 5.7H28.5c-3.1 0-5.7-2.5-5.7-5.6v-11.4zm22.8-22.8c0-3.2 2.4-5.7 5.7-5.7h11.3c3.2 0 5.7 2.4 5.7 5.7v11.3c.1 3.1-2.4 5.7-5.6 5.7H51.3c-3.1 0-5.7-2.5-5.7-5.6v-11.4zm0-45.6c0-3.2 2.4-5.7 5.7-5.7h11.3c3.2 0 5.7 2.4 5.7 5.7V245c.1 3.1-2.4 5.7-5.6 5.7H51.3c-3.1 0-5.7-2.5-5.7-5.6v-11.4zm0-45.7c0-3.2 2.4-5.7 5.7-5.7h11.3c3.2 0 5.7 2.4 5.7 5.7v11.3c.1 3.1-2.4 5.7-5.6 5.7H51.3c-3.1 0-5.7-2.5-5.7-5.6V188zm0-45.6c0-3.2 2.4-5.7 5.7-5.7h11.3c3.2 0 5.7 2.4 5.7 5.7v11.3c.1 3.1-2.4 5.7-5.6 5.7H51.3c-3.1 0-5.7-2.5-5.7-5.6v-11.4zm0-45.6c0-3.2 2.4-5.7 5.7-5.7h11.3c3.2 0 5.7 2.4 5.7 5.7v11.3c.1 3.1-2.4 5.7-5.6 5.7H51.3c-3.1 0-5.7-2.5-5.7-5.6V96.8zm0-45.6c0-3.2 2.4-5.7 5.7-5.7h11.3c3.2 0 5.7 2.4 5.7 5.7v11.3c.1 3.1-2.4 5.7-5.6 5.7H51.3c-3.1 0-5.7-2.5-5.7-5.6V51.2z"/></svg>',Qh='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 513 342"><path fill="#0052B4" d="M0 0h513v342H0z"/><g fill="#D80027"><path d="M0 .1h513v90.7H0zM0 251.3h513V342H0z"/></g><circle fill="#FFF" cx="256.5" cy="171" r="65.9"/></svg>',e0='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 513 342"><path fill="#FFF" d="M0 0h513v342H0z"/><g fill="#D80027"><path d="M0 .2h513v90.7H0zM.5 251.3H513V342H.5z"/></g><path fill="#6DA544" d="M290.3 193.5 256 130.7l-34.3 62.8h25.7v17.2h17.2v-17.2z"/><path fill="#14AF5A" d="M241.3 213.1c4.4-4.4 4.4-11.6-.1-16l4.7 4.7c-5.2-4.7-12.2-6.6-19.1-5.3l-23.5 5.9c-6.1 1.5-6.8-.4-1.8-4.2l27.1-20.3c5.1-3.8 4.2-6.9-2.3-6.9h-11c-6.4 0-7-2.3-1.5-5.1l25.3-12.7c5.6-2.8 5.1-5.1-1.5-5.1h-11c-6.4 0-7.4-3.1-2.3-6.9l27.1-20.3c5.6-3.8 12.9-3.8 18.5 0l27.1 20.3c5.1 3.8 4.2 6.9-2.3 6.9h-11c-6.4 0-7 2.3-1.5 5.1l25.3 12.7c5.6 2.8 5.1 5.1-1.5 5.1h-11c-6.4 0-7.4 3.1-2.3 6.9l27.1 20.3c5.1 3.8 4.4 5.7-1.8 4.2l-23.5-5.9c-6.8-1.3-13.9.6-19.1 5.3l4.7-4.7c-4.4 4.4-4.5 11.5-.1 16l6.8 6.8c4.4 4.4 3.1 8-3.3 8h-45.8c-6.2 0-7.7-3.6-3.3-8 .1.1 6.9-6.8 6.9-6.8z"/></svg>',t0='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 513 342"><path fill="#55B2FF" d="M0 0h513v342H0z"/><path fill="#F3F3F3" d="M148.5 298.1h216l-108-254.2z"/><path fill="#333" d="m186 272.7 70.5-160.3L327 272.7z"/><path fill="#FFDA44" d="M148.5 298.1h216l-108-101.7z"/></svg>',i0='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 513 342"><path fill="#D80027" d="M0 0h513v342H0z"/><path fill="#0052B4" d="M0 0h513v171H0z"/><path fill="#FFDA44" d="M149.3 98.1c0-14-11.3-25.3-25.3-25.3-6.5 0-12.4 2.4-16.9 6.4V64.4h8.4V47.5h-8.4v-8.4H90.3v8.4h-8.4v16.9h8.4v14.9c-4.5-4-10.4-6.4-16.9-6.4-14 0-25.3 11.3-25.3 25.3 0 7.5 3.3 14.2 8.4 18.8v14.9h84.3V117c5.3-4.7 8.5-11.5 8.5-18.9z"/></svg>',s0='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 513 342"><path fill="#FFDA44" d="M0 0h513v342H0z"/><path fill="#A2001D" d="M222.6 22.3h267.1v296.8H222.6z"/><path fill="#D80027" d="M22.3 22.3h200.3v296.8H22.3z"/><path fill="#FFDA44" d="M200.3 0h22.3v342h-22.3z"/><path fill="#6DA544" d="M22.3 22.3h89v296.8h-89z"/><path fill="#FF9811" d="M111.3 22.3h89v296.8h-89z"/><path fill="#FFDA44" d="M368.2 156.8c-1.4-2 0-37.9 0-37.9.9-7.4.1-8.4 1-11.4.9-2.9 5.4-11.6 5.4-11.6s-6-2.3-10.3-.6c-4.3 1.7-24.7-7.5-31.2 3.4-4.4 7-23.6 16.2-24.6 14-1-2.2-5.9-5-6.9-2.9s-.7 13.9 0 16c.8 2.6 9.8 2 12.3 3.1 3.7 1.8 12.2 8.2 11.9 10.7-.3 2.5-22.5-6-24.2-4.5-1.4 1.2-1.9 13.2-.4 15 1.8 2.1 23.4 5.6 25 7.5 1.6 1.9-13.1 7.4-12.3 25 .7 14.7 8 17.4 8 17.4s-2.4 3.6-7.8 3.1c-6.2-.6-27.4-17.7-27.4-17.7s-3.5-109 3.6-121.4c4.9-8.5-22.7 10.1-22.7 50.8V151c0 6.6-1.4 22.4 2.6 34 0 0-.4 46.9 1.5 49.6s12.7 2.2 14.8 0 0-30 0-30c7.7.2 18.3 17.5 32.5 16.4 20.6-1.6 28.7-9.9 34.3-5 8.1 7.1 5.5 23.2.4 31.5-2.2 3.5-14.3 4.7-15.7 7.6-1.4 2.9.5 5.4.5 5.4h29.7s1.4-20.5 2.7-26.1c1.3-5.7-.6-10.7 5.9-10.4 23.5 1.1 39.8-15.3 45.5-8 3.2 4.1 5.6 29.9 3.3 33.3-2.2 3.4-13.8 2.8-15.2 6.7-1.4 4 .8 4.4.8 4.4h29.7s-.4-21.2 2.5-27.7 4.9-10.4 9.3-17.2c4.4-6.8 11.3-15.7 11.3-36.2 0-14.2-8.1-22.8-8.1-22.8H417c-14.1.2-47.4 2.3-48.8.3zM232.2 32.3c10.7-10.6 20.2-2.7 22.2 2.1 1.9 4.8 2.1 8.2 2.8 13.6.9 6.9 4.9 14 4.9 14s-7.1-3.8-14.7-4.2c-4.7-.3-9-.6-13.6-2.5-5.7-2.3-11.7-12.9-1.6-23zM480.6 32.2c10.7 10.6 2.8 20.2-2 22.2s-8.2 2.1-13.6 2.8c-6.9.9-14 5-14 5s3.7-7.1 4.2-14.7c.3-4.7.6-9.1 2.4-13.6 2.2-5.7 12.8-11.8 23-1.7zM480.7 309.1c-10.7 10.6-20.2 2.6-22.2-2.2-1.9-4.8-2.1-8.2-2.7-13.6-.8-6.9-4.9-14.1-4.9-14.1s7 3.8 14.7 4.3c4.7.3 9 .6 13.6 2.5 5.7 2.4 11.7 13.1 1.5 23.1zM232.5 309c-10.6-10.7-2.7-20.2 2.1-22.2 4.8-1.9 8.2-2.1 13.6-2.8 6.9-.9 14-4.9 14-4.9s-3.8 7.1-4.2 14.7c-.3 4.7-.6 9-2.5 13.6-2.3 5.7-12.9 11.8-23 1.6z"/><path fill="none" stroke="#FFDA44" stroke-width="6" stroke-miterlimit="10" d="M446.9 162.4s7.5-2.6 8.4-16.1c.6-8.6-19.8-16-39-11.5-19.7 4.6-34-3.1-34-14.6 0-22.9 29.7-16.2 38.9-11.3 9.1 4.9 29.7 23.5 35.1 9.4"/></svg>',r0='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 513 342"><g fill="#bf0a30"><path d="M0 0h512v31.1H0zM0 62.2h512v31.1H0zM0 124.5h512v31.1H0zM0 186.8h512v31.1H0zM0 249.3h512v31.1H0zM0 310.9h512V342H0z"/></g><path fill="#002868" d="M0 0h155.6v155.6H0z"/><path fill="#FFF" d="m77.8 30.2 10.7 32.9h34.6l-28 20.4 10.7 32.9-28-20.3-28 20.3 10.7-32.9-28-20.4h34.6z"/></svg>',n0='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 513 342"><path fill="#FFF" d="M0 0h513v342H0z"/><path fill="#0052B4" d="M0 0h513v114H0z"/><path fill="#6DA544" d="M0 227.6h513v114H0z"/><path d="m245.2 171 7.7-23.1c2-5.9 5.1-6 7.1 0l7.7 23.1 19.4 29.1c1.7 2.6 1.3 6.3-1.2 8 0 0-6.9 8-29.5 8s-29.5-8-29.5-8c-2.4-2-2.9-5.4-1.2-8l19.5-29.1z"/><path d="M256.5 171c-12.5 0-22.6-10.1-22.6-22.6 0-12.5 10.1-22.6 22.6-22.6s22.6 10.1 22.6 22.6c0 12.5-10.2 22.6-22.6 22.6zm0 0c6.2 0 11.3-16.3 11.3-22.6 0-6.2-5.1-11.3-11.3-11.3-6.2 0-11.3 5.1-11.3 11.3 0 6.3 5 22.6 11.3 22.6z"/></svg>',l0='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.333 512 341.333"><path fill="#6DA544" d="M0 85.337h512v341.326H0z"/><path fill="#FFDA44" d="M0 85.337h512v113.775H0z"/><path fill="#D80027" d="M0 312.888h512v113.775H0z"/></svg>',a0='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.333 512 341.333"><path fill="#FFF" d="M0 85.337h512v341.326H0z"/><path fill="#D80027" d="M0 85.337h512v113.775H0z"/><path fill="#338AF3" d="M0 312.888h512v113.775H0z"/></svg>',o0='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 513 342"><path fill="#FFF" d="M0 0h513v342H0z"/><g fill="#A2001D"><path class="st1" d="M0 0h513v127.6H0zM0 214.4h513V342H0z"/></g></svg>',h0='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.333 512 341.333"><path d="M0 85.337h512v341.326H0z"/><path fill="#D80027" d="M0 85.337h512v113.775H0z"/><path fill="#496E2D" d="M0 312.888h512v113.775H0z"/><g fill="#FFF"><path d="m281.424 236.026 8.962 12.35 14.513-4.706-8.975 12.339 8.961 12.349-14.509-4.724-8.976 12.34.01-15.258-14.51-4.725 14.514-4.706z"/><path d="M256.965 286.868c-17.048 0-30.868-13.821-30.868-30.868s13.821-30.868 30.868-30.868a30.742 30.742 0 0 1 14.684 3.71c-6.851-6.698-16.218-10.833-26.556-10.833-20.982 0-37.992 17.01-37.992 37.992s17.01 37.992 37.992 37.992c10.338 0 19.706-4.135 26.556-10.833a30.738 30.738 0 0 1-14.684 3.708z"/></g></svg>',d0='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.333 512 341.333"><path fill="#D80027" d="M0 85.337v341.326h512V85.337z"/><path fill="#20661b" d="M352 226.484h-73.337L256 156.738l-22.663 69.748H160l59.331 43.107-22.663 69.749L256 296.232l59.332 43.107-22.663-69.749L352 226.484zm-116.063 37.711 7.663-23.585h24.8l7.663 23.585v.001L256 278.772l-20.063-14.577zm27.873-37.711h-15.619L256 202.447l7.81 24.037zm24.269 28.982-4.827-14.856h25.274l-20.447 14.856zm-59.331-14.856-4.827 14.856-20.447-14.856h25.274zm-5.211 61.748 7.81-24.036 12.636 9.181-20.446 14.855zm44.479-14.856 12.636-9.181 7.81 24.036-20.446-14.855z"/></svg>',c0='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.333 512 341.333"><path fill="#FFF" d="M0 85.333h512v341.333H0z"/><path fill="#c70000" d="M0 85.333h512V256H0z"/></svg>',u0='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 513 342"><path fill="#FFDA44" d="M0 0h513v342H0z"/><path fill="#D80027" d="M342 0h171v342H342z"/><path fill="#0052B4" d="M0 0h171v342H0z"/><path fill="#AF7F59" d="M206.2 129.1h33.2L256 79.3l16.6 49.8h33.2v99.6L256 262l-49.8-33.2v-99.7zm33.2 33.3v49.8h33.2v-49.8h-33.2z"/></svg>',p0='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 513 342"><path fill="#E6BE53" d="M0 0h513v342H0z"/><path fill="#E01D24" d="M20 20h473v302H20z"/><path fill="#E6BE53" d="M248.5 112.9c4.4 4.4 11.6 4.4 16 0l-4.7 4.7 22.7-22.7c4.9-4.5 12.1-5.6 18.2-2.8l2.1 1c5.7 2.9 6.7 8.7 2.3 13.1l4.7-4.7-22.8 22.8c-4.5 4.9-5.6 12.1-2.8 18.2l1 2.1c2.9 5.7 5.1 15.4 5.1 21.6v-11.3c0 6.2 4.4 9.1 10.2 6.2l2.1-1c5.7-2.9 6.7-8.7 2.3-13.1l4.7 4.7c-4.4-4.4-4.4-11.6 0-16l-4.7 4.7c5.2-5.5 9.6-11.6 13.1-18.2l1-2.1c2.9-5.7 6.3-15.1 7.9-21.2l5.8-23.3c1.5-6 5.9-6.8 9.6-1.8l20.2 26.9c3.8 5.1 6.9 14 6.9 20.6v22.4c0 6.3-2.2 15.8-5.1 21.7l-1 2.1c-3.5 6.6-7.9 12.7-13.1 18.2l-6.8 6.8c-5.4 5.2-11.5 9.6-18.2 13.1l-2.1 1c-5.7 2.9-15.5 5.1-21.6 5.1-6.2 0-6.9 2.2-1.1 5.1l2.1 1c5.7 2.9 13.8 8.7 18.2 13.1l-4.7-4.7c4.4 4.4 11.6 4.4 16 0l-4.7 4.7c4.4-4.4 11.6-4.4 16 0L339 226c4.6 4.9 5.7 12.1 2.9 18.2l-1 2.1c-2.9 5.7-10.4 10.2-16.4 10.2-7.5-.3-14.8-2-21.6-5.1l-2.1-1c-6.5-3.6-11.8-8.9-15.4-15.4l-1-2.1c-2.9-5.7-8.7-6.7-13.1-2.3l4.7-4.7c-4.4 4.7-5.2 11.8-1.8 17.3l10.3 15.4c3.4 5.1 2 12.1-3.1 15.5L266 284.4c-5.7 3.4-12.8 3.4-18.6 0L232 274.1c-5.1-3.4-6.5-10.3-3.1-15.5l10.3-15.4c3.4-5.5 2.6-12.6-1.8-17.3l4.7 4.7c-4.4-4.4-10.2-3.6-13.1 2.3l-1 2.1c-2.9 5.7-9.5 12.4-15.4 15.4l-2.1 1c-5.7 2.9-15.5 5.1-21.6 5.1-6.9-.3-13.1-4.2-16.4-10.2l-1-2.1c-2.8-6.1-1.6-13.3 2.9-18.2l-4.7 4.7c4.4-4.4 11.6-4.4 16 0L181 226c4.4 4.4 11.6 4.4 16 0l-4.7 4.7c5.5-5.2 11.6-9.6 18.2-13.1l2.1-1c5.7-2.9 5-5.1-1.1-5.1-7.5-.3-14.8-2-21.6-5.1l-2.1-1c-6.6-3.5-12.7-7.9-18.2-13.1l-6.8-6.8c-5.2-5.4-9.6-11.5-13.1-18.2l-1-2.1c-3.1-6.8-4.9-14.2-5.1-21.7V121c0-6.3 3.1-15.6 6.9-20.6l20.2-26.9c3.8-5.1 8.1-4.3 9.6 1.8l5.8 23.3c2 7.3 4.6 14.4 7.9 21.2l1 2.1c2.9 5.7 8.7 13.8 13.1 18.2l-4.7-4.7c4.4 4.4 4.4 11.6 0 16l4.7-4.7c-4.4 4.4-3.6 10.2 2.3 13.1l2.1 1c5.7 2.9 10.2 0 10.2-6.2v11.3c0-6.2 2.2-15.7 5.1-21.6l1-2.1c2.8-6.1 1.7-13.2-2.8-18.2l-22.7-22.7 4.7 4.7c-4.4-4.4-3.6-10.2 2.3-13.1l2.1-1c6.1-2.8 13.2-1.7 18.2 2.8l22.7 22.7-4.8-4.5zm-18-40.7c-4.4-4.4-3.2-9.5 2.8-11.5l12.4-4.2c6-2 15.5-2 21.5 0l12.4 4.2c6 2 7.2 7.1 2.8 11.5l-6.8 6.8c-5.3 4.7-12.1 7.5-19.2 7.9-6.2 0-14.8-3.5-19.2-7.9.1 0-6.7-6.8-6.7-6.8z"/><path fill="#215F90" d="M233.9 200.2c0 6.2 1.7 6.4 4.2.5 0 0 7.1-23.2 18.4-23.2 11.3 0 18.6 23.6 18.6 23.6 2.2 5.7 4 5.3 4-1.1v-11.2c0-18.7-10.1-33.9-22.6-33.9-12.5 0-22.6 15.2-22.6 33.9v11.4z"/></svg>',f0='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 108 72"><path d="M0 0h108v72H0z" fill="#003787"/><path d="M0 0h108L60 48v24H48V48z" fill="#fff"/><circle cx="54" cy="30" r="8" fill="#f9d90f"/><path d="M44 30h20L54 48z" fill="#fff"/><path d="M54 48 38 33h32z" fill="#cf142b"/></svg>',g0='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.333 512 341.333"><path fill="#6DA544" d="M512 426.666V85.329H0v341.337h512z"/><path fill="#D80027" d="M512 85.331H0v170.666h512V85.331z"/><path fill="#FFF" d="M0 85.334h181.793v341.337H0z"/></svg>',m0='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 513 342"><path fill="#1E509C" d="M0 0h513v342H0z"/><path fill="#FFF" d="M513 176.1V81.3L0 342l513-165.9z"/><path fill="#F18D36" d="M513 0v81.3L0 342 513 0z"/><path fill="#FFF" d="m126.7 99.3-7.8-54.1-7.7 54.1-20.8-23.7 10.7 31.6-31.5-10.7 23.6 20.8-54.1 7.7 54.1 7.7-23.6 20.8 31.5-10.7-10.7 31.6 20.8-23.7 7.7 54.1 7.8-54.1 20.7 23.7-10.6-31.6 31.5 10.7-23.6-20.8 54-7.7-54-7.7 23.6-20.8-31.5 10.7 10.6-31.6z"/></svg>',v0='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.333 512 341.333"><path fill="#FFDA44" d="M0 85.333h512V426.67H0z"/><g fill="#D80027"><path d="M383.875 426.662 256 252.286l26.827 174.376zM133.565 85.33 256 252.286 230.314 85.33zM229.171 426.662 256 252.286 128.124 426.662zM0 85.33V212.9l256 39.386L28.333 85.33zM0 426.662h18.212L256 252.286 0 291.67zM256 252.286 512 212.9V85.33h-28.331zM281.686 85.33 256 252.286 378.434 85.33zM512 426.662V291.671l-256-39.385 237.787 174.376z"/><circle cx="256" cy="252.29" r="59.359"/></g><circle fill="#FFDA44" cx="256" cy="252.29" r="44.522"/></svg>',_0='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.333 512 341.333"><path fill="#FFDA44" d="M0 85.331h512v341.337H0z"/><path fill="#6DA544" d="M0 85.331h170.663v341.337H0z"/><path fill="#D80027" d="M341.337 85.331H512v341.337H341.337z"/></svg>',w0='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.333 512 341.333"><path fill="#6DA544" d="M0 85.337h512v341.326H0z"/><path fill="#FFDA44" d="M0 85.337h512v113.775H0z"/><path fill="#D80027" d="M0 312.888h512v113.775H0z"/><path fill="#FFF" d="M384 227.261h-97.783L256 134.265l-30.217 92.997H128l79.108 57.475-30.217 92.998L256 320.925l79.108 56.81-30.217-92.998L384 227.261z"/></svg>',b0='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 513 342"><path fill="#095FAD" d="M0 0h513v342H0z"/><g fill="#BE1229"><path d="M342 0h171v342H342zM0 0h171v342H0z"/></g><g fill="#FFDA44"><path d="M108.3 166.3h14.8v74.2h-14.8zM48.9 166.3h14.8v74.2H48.9z"/><circle cx="86" cy="203.4" r="14.8"/><path d="M71.2 225.7h29.7v14.8H71.2zM71.2 166.3h29.7v14.8H71.2z"/><circle cx="86" cy="144" r="14.8"/><path d="M76.3 123.9h19.5L86 108.3z"/></g></svg>',y0='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.333 512 341.333"><path fill="#00745a" d="M0 85.331h512v341.337H0z"/><path fill="#FFF" d="M285.682 248.878c-4.19 0-8.166.836-11.861 2.164 2.023-4.509 3.379-9.527 3.379-14.885 0-21.201-21.201-37.101-21.201-37.101s-21.201 15.901-21.201 37.101c0 5.357 1.356 10.375 3.379 14.885-3.693-1.328-7.671-2.164-11.861-2.164-21.201 0-37.101 21.201-37.101 21.201s15.901 21.201 37.101 21.201c12.429 0 23.031-7.286 29.682-13.315 6.65 6.03 17.251 13.315 29.682 13.315 21.201 0 37.101-21.201 37.101-21.201s-15.899-21.201-37.099-21.201z"/><g fill="#FFDA44"><path d="m256 152.111 4.38 13.476h14.171l-11.464 8.332 4.376 13.476-11.463-8.33-11.463 8.33 4.376-13.476-11.464-8.332h14.171zM202.112 175.683l8.425 7.585 9.818-5.667-4.61 10.355 8.423 7.588-11.274-1.185-4.611 10.355-2.358-11.088-11.275-1.185 9.818-5.669zM162.662 215.132l11.09 2.358 5.668-9.818 1.186 11.274 11.089 2.358-10.357 4.61 1.186 11.274-7.587-8.423-10.357 4.61 5.669-9.818zM309.889 175.683l-8.425 7.585-9.818-5.667 4.611 10.355-8.425 7.588 11.275-1.185 4.61 10.355 2.359-11.088 11.275-1.185-9.818-5.669zM349.338 215.132l-11.089 2.358-5.669-9.818-1.186 11.274-11.088 2.358 10.357 4.61-1.185 11.274 7.586-8.423 10.357 4.61-5.669-9.818z"/></g><g fill="#FFF"><path d="M256 350.642c16.84 0 32.363-5.619 44.816-15.073h-89.63c12.451 9.454 27.974 15.073 44.814 15.073zM187.977 306.12a74.138 74.138 0 0 0 8.85 15.073h118.345a74.13 74.13 0 0 0 8.85-15.073H187.977z"/></g></svg>',z0='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 750 500"><path fill="#0071BC" d="M0 0h750v500H0V0z"/><g fill="#FFF" stroke="#000" stroke-width="1.9"><circle cx="375" cy="245" r="225" fill="#fff"/><circle cx="375" cy="245" r="165" fill="#0071BC"/></g><g stroke="#000"><path fill="#8C8A8C" stroke-width="1.9" d="M444.7 450c.7 11-7.8 20-18.8 20H323.6c-11 0-19.5-9-19-20l16.7-325c.6-11 10-20 21-20h61.4c11 0 20.5 9 21.2 20l19.8 325z"/><path fill="#FFF" stroke-width="2" stroke-linejoin="round" d="m373 114 30 93h97l-78 56 29 92-78-56-78 57 30-93-79-57h97l30-92z"/></g></svg>',x0='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 513 342"><path fill="#0052B4" d="M0 0h513v342H0z"/><g fill="#fff"><path d="M512 148.4v44.5H278.3v148.4h-44.6V192.9H0v-44.5h233.7V0h44.6v148.4z"/><path d="M101 36.1c4.2-.2 8.3-.1 12.5.2 5.5.4 9.4 1.6 9.1.5-.5-1.8-.1-2.2-.8-1.8-1.3 1 .7-.2-7.4 4.4-11.8 6.7-16.9 11.8-14.3 21 2.3 8.1 8.2 10.3 22.3 12.5l1.9.3c5.6.9 8.1 1.4 9.8 2.2.4.2-.3-1-.1-1.7-.2.6-3.9 2.1-13.3 3.9l-4.7.9c-18.1 3.7-27.1 8.5-28.5 21-1.5 13.7 12.7 23.3 30.6 25.6 18.2 2.4 34.1-3.6 35.7-18.4 1-9.4-5.5-15-15.9-17.1-7-1.4-16.3-1.4-27.4-.3-12.4 1.3-24.7 3.4-36.9 6.3-3.6.7-5.9 4.2-5.2 7.8.7 3.6 4.2 5.9 7.8 5.2.2 0 .3-.1.5-.1 11.6-2.7 23.3-4.7 35.1-5.9 9.9-1 18-1 23.4.1 4.4.9 5.3 1.7 5.2 2.6-.5 5.1-8.9 8.2-20.7 6.7-11.6-1.5-19.5-6.8-19.1-11 .5-4.3 5.3-6.8 17.9-9.4l4.6-.9c15.5-3 21.1-5.3 23.5-13.2 1.9-6.5-1.3-11.6-7.2-14.2-3.2-1.4-6.3-2.1-13.2-3.1l-1.8-.3c-8-1.3-11.4-2.6-11.5-3-.1-.4 1.8-2.3 8.1-5.9l4.4-2.5c1.5-.8 2.9-1.8 4.3-2.7 4.6-3.4 7.2-7.1 5.8-12.3-1.9-7.3-9-9.5-20.9-10.4-4.7-.3-9.3-.4-14-.3l-2 .1c-3.7.2-6.5 3.4-6.3 7 .2 3.7 3.4 6.5 7 6.3l1.7-.1zM385 36.1c4.2-.2 8.3-.1 12.5.2 5.5.4 9.4 1.6 9.1.5-.5-1.8-.1-2.2-.8-1.8-1.3 1 .7-.2-7.4 4.4-11.8 6.7-16.9 11.8-14.3 21 2.3 8.1 8.2 10.3 22.3 12.5l1.9.3c5.6.9 8.1 1.4 9.8 2.2.4.2-.3-1-.1-1.7-.2.6-3.9 2.1-13.3 3.9l-4.7.9c-18.1 3.7-27.1 8.5-28.5 21-1.5 13.7 12.7 23.3 30.6 25.6 18.2 2.4 34.1-3.6 35.7-18.4 1-9.4-5.5-15-15.9-17.1-7-1.4-16.3-1.4-27.4-.3-12.4 1.3-24.7 3.4-36.9 6.3-3.6.7-5.9 4.2-5.2 7.8.7 3.6 4.2 5.9 7.8 5.2.2 0 .3-.1.5-.1 11.6-2.7 23.3-4.7 35.1-5.9 9.9-1 18-1 23.4.1 4.4.9 5.3 1.7 5.2 2.6-.5 5.1-8.9 8.2-20.7 6.7-11.6-1.5-19.5-6.8-19.1-11 .5-4.3 5.3-6.8 17.9-9.4l4.6-.9c15.5-3 21.1-5.3 23.5-13.2 1.9-6.5-1.3-11.6-7.2-14.2-3.2-1.4-6.3-2.1-13.2-3.1l-1.8-.3c-8-1.3-11.4-2.6-11.5-3-.1-.4 1.8-2.3 8.1-5.9l4.4-2.5c1.5-.8 2.9-1.8 4.3-2.7 4.6-3.4 7.2-7.1 5.8-12.3-1.9-7.3-9-9.5-20.9-10.4-4.7-.3-9.3-.4-14-.3l-2 .1c-3.7.2-6.5 3.4-6.3 7 .2 3.7 3.4 6.5 7 6.3l1.7-.1zM379.6 235.1c4.2-.2 8.3-.1 12.5.2 5.5.4 9.4 1.6 9.1.5-.5-1.8-.1-2.2-.8-1.8-1.3 1 .7-.2-7.4 4.4-11.8 6.7-16.9 11.8-14.3 21 2.3 8.1 8.2 10.3 22.3 12.5l1.9.3c5.6.9 8.1 1.4 9.8 2.2.4.2-.3-1-.1-1.7-.2.6-3.9 2.1-13.3 3.9l-4.7.9c-18.1 3.7-27.1 8.5-28.5 21-1.5 13.7 12.7 23.3 30.6 25.6 18.2 2.4 34.1-3.6 35.7-18.4 1-9.4-5.5-15-15.9-17.1-7-1.4-16.3-1.4-27.4-.3-12.4 1.3-24.7 3.4-36.9 6.3-3.6.7-5.9 4.2-5.2 7.8.7 3.6 4.2 5.9 7.8 5.2.2 0 .3-.1.5-.1 11.6-2.7 23.3-4.7 35.1-5.9 9.9-1 18-1 23.4.1 4.4.9 5.3 1.7 5.2 2.6-.5 5.1-8.9 8.2-20.7 6.7-11.6-1.5-19.5-6.8-19.1-11 .5-4.3 5.3-6.8 17.9-9.4l4.6-.9c15.5-3 21.1-5.3 23.5-13.2 1.9-6.5-1.3-11.6-7.2-14.2-3.2-1.4-6.3-2.1-13.2-3.1l-1.8-.3c-8-1.3-11.4-2.6-11.5-3-.1-.4 1.8-2.3 8.1-5.9l4.4-2.5c1.5-.8 2.9-1.8 4.3-2.7 4.6-3.4 7.2-7.1 5.8-12.3-1.9-7.3-9-9.5-20.9-10.4-4.7-.3-9.3-.4-14-.3l-2 .1c-3.7.2-6.5 3.4-6.3 7s3.4 6.5 7 6.3l1.7-.1zM101 235.1c4.2-.2 8.3-.1 12.5.2 5.5.4 9.4 1.6 9.1.5-.5-1.8-.1-2.2-.8-1.8-1.3 1 .7-.2-7.4 4.4-11.8 6.7-16.9 11.8-14.3 21 2.3 8.1 8.2 10.3 22.3 12.5l1.9.3c5.6.9 8.1 1.4 9.8 2.2.4.2-.3-1-.1-1.7-.2.6-3.9 2.1-13.3 3.9l-4.7.9c-18.1 3.7-27.1 8.5-28.5 21-1.5 13.7 12.7 23.3 30.6 25.6 18.2 2.4 34.1-3.6 35.7-18.4 1-9.4-5.5-15-15.9-17.1-7-1.4-16.3-1.4-27.4-.3-12.4 1.3-24.7 3.4-36.9 6.3-3.6.7-5.9 4.2-5.2 7.8s4.2 5.9 7.8 5.2c.2 0 .3-.1.5-.1 11.6-2.7 23.3-4.7 35.1-5.9 9.9-1 18-1 23.4.1 4.4.9 5.3 1.7 5.2 2.6-.5 5.1-8.9 8.2-20.7 6.7-11.6-1.5-19.5-6.8-19.1-11 .5-4.3 5.3-6.8 17.9-9.4l4.6-.9c15.5-3 21.1-5.3 23.5-13.2 1.9-6.5-1.3-11.6-7.2-14.2-3.2-1.4-6.3-2.1-13.2-3.1l-1.8-.3c-8-1.3-11.4-2.6-11.5-3-.1-.4 1.8-2.3 8.1-5.9l4.4-2.5c1.5-.8 2.9-1.8 4.3-2.7 4.6-3.4 7.2-7.1 5.8-12.3-1.9-7.3-9-9.5-20.9-10.4-4.7-.3-9.3-.4-14-.3l-2 .1c-3.7.2-6.5 3.4-6.3 7 .2 3.7 3.4 6.5 7 6.3l1.7-.1z"/></g></svg>',M0='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.333 512 341.333"><path fill="#496E2D" d="M0 85.331h512v341.337H0z"/><g fill="#FFDA44"><path d="M256 298.851c-45.956 0-84.348-32.298-93.767-75.429A96.288 96.288 0 0 0 160 243.994c0 53.02 42.979 96 96 96s96-42.98 96-96c0-7.066-.785-13.942-2.233-20.572-9.419 43.131-47.811 75.429-93.767 75.429z"/><path d="m255.999 171.994 8.935 27.502h28.918l-23.394 16.996 8.936 27.503-23.395-16.998-23.394 16.998 8.937-27.503-23.394-16.996h28.915z"/></g></svg>',F0='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 513 342"><path fill="#1B4991" d="M0 0h513v342H0z"/><path fill="#00A2B8" stroke="#FFF" stroke-width="3" d="M318.2 106.7v106.5c0 51.9 67.8 67.8 67.8 67.8s67.8-15.9 67.8-67.8V106.7H318.2z"/><path fill="#A35023" d="M319.7 212.7c0 50.8 66.3 66.3 66.3 66.3s66.3-15.6 66.3-66.3H319.7z"/><path d="M415.1 155.1h-19.4v-19.4h-19.4v19.4H357v19.4h19.3v58.1h19.4v-58.1h19.4z"/><path fill="#FFF" d="M256 0v30.6l-45.2 25.1H256V115h-59.1l59.1 32.8v22.9h-26.7l-73.5-40.9v40.9h-55.6v-48.6l-87.5 48.6H0v-30.6L45.2 115H0V55.7h59.1L0 22.8V0h26.7l73.5 40.8V0h55.6v48.6L243.3 0z"/><path fill="#D80027" d="M144 0h-32v69.3H0v32h112v69.4h32v-69.4h112v-32H144z"/><path fill="#0052B4" d="M155.8 115 256 170.7v-15.8L184.2 115z"/><path fill="#FFF" d="M155.8 115 256 170.7v-15.8L184.2 115z"/><path fill="#D80027" d="M155.8 115 256 170.7v-15.8L184.2 115zM71.8 115 0 154.9v15.8L100.2 115z"/><path fill="#0052B4" d="M100.2 55.6 0 0v15.7l71.8 39.9z"/><path fill="#FFF" d="M100.2 55.6 0 0v15.7l71.8 39.9z"/><path fill="#D80027" d="M100.2 55.6 0 0v15.7l71.8 39.9zM184.2 55.6 256 15.7V0L155.8 55.6z"/></svg>',A0='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 513 342"><path fill="#FFF" d="M0 0h513v342H0z"/><path fill="#C31B28" d="M256 0h256.5v342H256z"/><path fill="#ACABB1" stroke="#C31B28" stroke-width="2" d="M101.2 68.2V33H66v35.2H30.8v35.2H66v35.2h35.2v-35.2h35.2V68.2z"/></svg>',H0='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.333 512 341.333"><path fill="#f7ce00" d="M0 85.331h512v341.326H0z"/><path fill="#e32737" d="M0 85.331h512v85.337H0z"/><path fill="#191f6a" d="M0 170.657h512v85.337H0z"/><path fill="#00a04e" d="M0 341.331h512v85.337H0z"/></svg>',C0='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.333 512 341.333"><path fill="#d01920" d="M0 85.331h512v341.333H0z"/><path fill="#017c3b" d="M144.696 174.375h222.609v163.25H144.696z"/><path fill="#FFF" d="M283.484 304.226c-26.637 0-48.232-21.594-48.232-48.232s21.594-48.232 48.232-48.232c8.306 0 16.12 2.1 22.943 5.797-10.703-10.467-25.341-16.927-41.494-16.927-32.784 0-59.362 26.577-59.362 59.362s26.578 59.362 59.362 59.362c16.154 0 30.791-6.461 41.494-16.927-6.822 3.698-14.636 5.797-22.943 5.797z"/></svg>',S0='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 342"><path fill="#272727" d="M0 0h512v114H0z"/><path fill="#e40112" d="M0 114h512v114H0z"/><path fill="#07893f" d="M0 228h512v114H0z"/><circle fill="#e40112" cx="256" cy="125" r="95"/></svg>',D0='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 513 342"><path fill="#dc2339" d="M342 0H0v341.3h513V0z"/><path fill="#11865d" d="M0 0h171v342H0z"/><path fill="#FFF" d="M171 0h171v342H171z"/><path fill="#8C9157" d="M195.8 171.2c0 21.6 11.5 41.7 30.3 52.5 5.8 3.4 13.2 1.4 16.6-4.4 3.4-5.8 1.4-13.2-4.4-16.6-11.3-6.5-18.2-18.5-18.2-31.5 0-6.7-5.4-12.1-12.1-12.1-6.7 0-12.2 5.4-12.2 12.1zm93.4 51.1c17.5-11.1 28-30.4 28-51.1 0-6.7-5.4-12.1-12.1-12.1s-12.1 5.4-12.1 12.1c0 12.4-6.3 24-16.8 30.7-5.7 3.5-7.5 10.9-4.1 16.7s10.9 7.5 16.7 4.1c0-.2.2-.3.4-.4z"/><ellipse fill="#C59262" cx="256.5" cy="159.1" rx="24.3" ry="36.4"/></svg>',E0='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 513 342"><path fill="#FFF" d="M0 0h513v342H0z"/><g fill="#c00"><path d="M0 0h513v24.4H0zM0 48.9h513v24.4H0zM0 97.7h513v24.4H0zM0 146.6h513V171H0zM0 195.4h513v24.4H0zM0 244.3h513v24.4H0zM0 293.1h513v24.4H0z"/></g><path fill="#006" d="M0 0h256.5v195.4H0z"/><path d="M153.3 42.1C122.6 30.7 88.5 46.3 77.1 77s4.2 64.8 34.9 76.2c13.3 5 28 5 41.4 0-30.7 24.5-75.4 19.6-100-11.1s-19.6-75.4 11.1-100c26-20.7 62.9-20.7 88.8 0zm26.7 75-20.6 23.3 5.4-30.6-31-1.6 27.3-14.9L143 68l28.6 12 8.4-29.9 8.4 29.9L217 68l-18 25.4 27.3 14.9-31 1.6 5.4 30.6-20.7-23.4z" fill="#fc0"/></svg>',P0='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.333 513 342"><path fill="#FFF" d="M0 85.333h513v342H0z"/><path fill="#f4d900" d="M0 323.333h513v104H0z"/><path fill="#006d66" d="M0 85.333h513v104H0z"/><path d="M0 204.333h513v104H0z"/><path fill="#cb0f31" d="M256 256.006 0 426.668V85.331z"/><path fill="#f4d900" d="m83.477 195.132 15.107 46.498h48.894l-39.554 28.739 15.107 46.499-39.554-28.738-39.555 28.738 15.11-46.499-39.554-28.739H68.37z"/></svg>',B0='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.333 512 341.333"><path fill="#496E2D" d="M0 85.337h512v341.326H0z"/><path fill="#0052B4" d="M0 426.663V85.337h512"/><path fill="#FFF" d="M512 152.222V85.337H411.67L0 359.778v66.885h100.33z"/><path fill="#A2001D" d="M512 85.337v40.125L60.193 426.663H0v-40.125L451.807 85.337z"/><path fill="#FFDA44" d="m187.737 189.212-22.741 10.696 12.11 22.024-24.693-4.724-3.129 24.945-17.199-18.347-17.2 18.347-3.129-24.945-24.693 4.723 12.109-22.023-22.739-10.696 22.74-10.697-12.11-22.022 24.693 4.722 3.13-24.944 17.199 18.347 17.2-18.347 3.128 24.944 24.693-4.722-12.108 22.024z"/></svg>',k0='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 426.7"><path fill="#009543" d="M0 293h640v133.7H0V293z"/><path fill="#ED4135" d="M0 132h640v161.3H0V132z"/><path fill="#0035AD" d="M0 0h640v133.3H0V0z"/><circle fill="#FAE600" stroke="#000" stroke-width="5.3" cx="240" cy="213.3" r="157.3"/><path d="m307.9 354.5-31.8 12-36.1 4.2-37.8-2.4-35.9-15.5s28.6-29.3 40.7-33.5c8.6-3 22.4-3.7 22.4-3.7V122l-.3-66H246l-.5 67.5v191.7s15.3 1.2 22.1 4.1c11.3 4.9 40.3 35.2 40.3 35.2z"/><path d="m212.727 102.375 42.955-21.418 5.577 11.187-42.955 21.417z"/><ellipse cx="237.8" cy="280.5" rx="16.8" ry="26.5"/><circle cx="237.4" cy="143.4" r="20.9"/><ellipse cx="238.4" cy="211.1" rx="19.9" ry="12.1"/><path d="M213.8 177h47v10h-47zM213.8 234h47v10h-47z"/></svg>',T0='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.333 512 341.333"><path fill="#FFF" d="M0 85.337h512v341.326H0z"/><path fill="#e05206" d="M0 85.337h512v113.775H0z"/><path fill="#0db02b" d="M0 312.888h512v113.775H0z"/><circle fill="#e05206" cx="256" cy="256" r="32"/></svg>',I0='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.5 513 342"><path fill="#FFF" d="M0 85.5h513v342H0z"/><g fill="#007b23"><path d="M0 85.5h171v342H0zM342 85.5h171v342H342zM304 311.995l-48-152.001-48 152.001h36v39.999h24v-39.999z"/></g></svg>',L0='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.5 513 342"><path fill="#FFF" d="M0 85.5h513v342H0z"/><g fill="#007b23"><path d="M0 85.5h171v342H0zM342 85.5h171v342H342z"/></g></svg>',O0='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.333 512 341.333"><path fill="#FFF" d="M0 85.337h512v341.326H0z"/><g fill="#338AF3"><path d="M0 85.337h512v113.775H0zM0 312.888h512v113.775H0z"/></g><path fill="#FFDA44" d="M256 214.447c-22.949 0-41.553 18.603-41.553 41.553S233.05 297.553 256 297.553c22.949 0 41.553-18.603 41.553-41.553S278.949 214.447 256 214.447zm0 65.298c-13.114 0-23.745-10.631-23.745-23.745s10.631-23.745 23.745-23.745 23.745 10.631 23.745 23.745-10.631 23.745-23.745 23.745z"/><path fill="#0052B4" d="M276.563 261.936 256 256l-20.563 5.936-6.855 11.873h54.836z"/><path fill="#338AF3" d="m256 226.32-13.709 23.744L256 256l13.709-5.936z"/><path fill="#6DA544" d="M235.437 261.936h41.126l-6.854-11.872h-27.418z"/></svg>',N0='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.5 513 342"><path fill="#FFF" d="M0 85.5h513v342H0z"/><path fill="#cd1f2a" d="M0 85.5h513v114H0z"/><path fill="#1d4185" d="M0 312h513v114H0z"/></svg>',R0='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.333 512 341.333"><path fill="#D80027" d="M0 85.334h512v341.337H0z"/><path fill="#FFF" d="M512 295.883H202.195v130.783H122.435V295.883H0V216.111h122.435V85.329H202.195v130.782H512V277.329z"/><path fill="#2E52B2" d="M512 234.666v42.663H183.652v149.337h-42.674V277.329H0v-42.663h140.978V85.329h42.674v149.337z"/></svg>',V0='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.333 512 341.333"><path fill="#FFF" d="M0 85.337h512v341.326H0z"/><path fill="#0052B4" d="M0 426.663V85.337l280.419 174.75H87.61l183.576 166.576z"/><path fill="#D80027" d="M244.769 249.888 10.199 103.71v312.754h234.57L61.193 249.888z"/><g fill="#FFF"><path d="m98.003 324.433-14.589-6.863 7.77-14.13-15.844 3.03-2.008-16.005-11.035 11.772-11.036-11.772-2.008 16.005-15.843-3.031 7.77 14.131-14.591 6.863 14.591 6.862-7.77 14.13 15.844-3.029 2.007 16.004 11.036-11.772L73.332 358.4l2.008-16.004 15.843 3.03-7.769-14.13zM88.268 191.662l-10.612-4.991 5.651-10.278-11.523 2.205-1.461-11.641-8.026 8.561-8.026-8.561-1.46 11.641-11.525-2.205 5.652 10.278-10.613 4.991 25.972 5.194z"/><path d="M93.462 191.662c0 17.212-13.953 31.165-31.165 31.165s-31.165-13.953-31.165-31.165"/></g></svg>',$0='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.333 512 341.333"><path fill="#0052B4" d="M0 85.337h512v341.326H0z"/><path fill="#FFDA44" d="M0 239.994h512v32H0z"/><path fill="#FFF" d="m174.802 341.329-19.124 8.996 10.184 18.521-20.767-3.973-2.631 20.978L128 370.422l-14.465 15.429-2.63-20.978-20.767 3.973 10.183-18.521-19.123-8.996 19.124-8.995-10.184-18.52 20.766 3.971 2.632-20.978L128 312.236l14.465-15.429 2.63 20.978 20.767-3.971-10.183 18.521z"/></svg>',j0='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.333 512 341.333"><path fill="#FFDA44" d="M0 85.334h512v341.337H0z"/><path fill="#FFF" d="M0 85.334h256v170.663H0z"/><g fill="#D80027"><path d="M144 85.33h-32v69.333H0v32h112v69.334h32v-69.334h112v-32H144z"/><path d="M0 85.329v15.083l57.377 38.251H80z"/></g><g fill="#2E52B2"><path d="M0 107.951v30.712h46.069zM96 85.331v48.913L22.628 85.331z"/></g><path fill="#D80027" d="M256 85.329v15.083l-57.377 38.251H176z"/><g fill="#2E52B2"><path d="M256 107.951v30.712h-46.069zM160 85.331v48.913l73.372-48.913z"/></g><path fill="#D80027" d="M0 85.329v15.083l57.377 38.251H80z"/><g fill="#2E52B2"><path d="M0 107.951v30.712h46.069zM96 85.331v48.913L22.628 85.331z"/></g><path fill="#D80027" d="M256 85.329v15.083l-57.377 38.251H176z"/><g fill="#2E52B2"><path d="M256 107.951v30.712h-46.069zM160 85.331v48.913l73.372-48.913z"/></g><path fill="#D80027" d="M0 255.997v-15.082l57.377-38.252H80z"/><g fill="#2E52B2"><path d="M0 233.376v-30.713h46.069zM96 255.994v-48.912l-73.372 48.912z"/></g><path fill="#D80027" d="M256 255.997v-15.082l-57.377-38.252H176z"/><g fill="#2E52B2"><path d="M256 233.376v-30.713h-46.069zM160 255.994v-48.912l73.372 48.912z"/><circle cx="128" cy="170.66" r="22.627"/></g><g fill="#FFDA44"><path d="m128 154.663 3.97 12.222h12.854l-10.398 7.556 3.971 12.222L128 179.109l-10.398 7.554 3.972-12.222-10.398-7.556h12.853zM128 219.803l2.364 7.278h7.653l-6.19 4.498 2.364 7.278-6.191-4.498-6.191 4.498 2.364-7.278-6.19-4.498h7.652zM128 102.469l2.364 7.278h7.653l-6.19 4.498 2.364 7.278-6.191-4.498-6.191 4.498 2.364-7.278-6.19-4.498h7.652zM197.931 161.136l2.365 7.277h7.653l-6.192 4.499 2.365 7.279-6.191-4.498-6.191 4.498 2.365-7.279-6.191-4.499h7.652zM58.069 161.136l2.364 7.277h7.653l-6.191 4.499 2.364 7.279-6.19-4.498-6.191 4.498 2.365-7.279-6.192-4.499h7.653z"/></g></svg>',G0='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.333 512 341.333"><path fill="#0052B4" d="M0 85.334h512v341.337H0z"/><g fill="#D80027"><path d="m425.301 233.745 3.388 10.428h10.963l-8.87 6.444 3.388 10.427-8.869-6.444-8.871 6.444 3.388-10.427-8.87-6.444h10.963zM386.107 308.817l5.083 15.642h16.445l-13.305 9.667 5.082 15.64-13.305-9.667-13.305 9.667 5.083-15.64-13.305-9.667h16.445zM387.588 185.971l4.236 13.036h13.704l-11.088 8.054 4.235 13.034-11.087-8.056-11.088 8.056 4.235-13.034-11.087-8.054h13.704zM349.876 233.291l5.082 15.641h16.446l-13.306 9.666 5.084 15.641-13.306-9.666-13.305 9.666 5.082-15.641-13.305-9.666h16.445z"/></g><path fill="#FFF" d="M256.003 85.329v30.564l-45.178 25.088h45.178v59.359H196.89l59.113 32.846v22.806h-26.69l-73.484-40.826v40.826h-55.652v-48.573l-87.429 48.573H.003v-30.553l45.168-25.099H.003v-59.359h59.103L.003 108.147V85.329h26.68l73.494 40.838V85.329h55.652v48.573l87.43-48.573z"/><path fill="#D80027" d="M144 85.33h-32v69.334H0v32h112v69.334h32v-69.334h112v-32H144z"/><path fill="#0052B4" d="M155.826 200.344 256 255.998v-15.739l-71.847-39.915z"/><path fill="#FFF" d="M155.826 200.344 256 255.998v-15.739l-71.847-39.915z"/><g fill="#D80027"><path d="M155.826 200.344 256 255.998v-15.739l-71.847-39.915zM71.846 200.344 0 240.259v15.739l100.174-55.654z"/></g><path fill="#0052B4" d="M100.174 140.983 0 85.33v15.738l71.847 39.915z"/><path fill="#FFF" d="M100.174 140.983 0 85.33v15.738l71.847 39.915z"/><g fill="#D80027"><path d="M100.174 140.983 0 85.33v15.738l71.847 39.915zM184.154 140.983 256 101.068V85.33l-100.174 55.653z"/></g></svg>',W0='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 513 342"><path fill="#D80027" d="M0 0h513v342H0z"/><path fill="#FFF" d="M138 0h377v114H138z"/><path fill="#4A7C3A" d="M138 230h377v114H138z"/><g fill="none" stroke="#FFF" stroke-width="10" stroke-miterlimit="2"><path d="M40.3 35.2s37.1 48 50.8 54.5c13.7 6.5 17.1 5.7 17.1 5.7"/><path d="M100 35.2S62.9 80.6 53.3 87.6c-9.6 7-18.7 7.8-18.7 7.8M51.7 65.3h37.9M70.7 35.2v30.1"/></g></svg>',U0='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.333 512 341.333"><path fill="#FFF" d="M0 85.337h512v341.326H0z"/><path fill="#0052B4" d="M256 256v170.663H0V256h256z"/><path fill="#D80027" d="M512 85.337V256H256V85.337h256z"/><path fill="#0052B4" d="m128 123.034 11.824 36.389h38.263l-30.955 22.491 11.823 36.389L128 195.813l-30.955 22.49 11.823-36.389-30.955-22.491h38.263z"/><path fill="#D80027" d="m384 293.697 11.824 36.389h38.263l-30.955 22.491 11.823 36.389L384 366.476l-30.955 22.49 11.823-36.389-30.955-22.491h38.263z"/></svg>',q0='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.333 512 341.333"><path fill="#FFF" d="M0 85.331h512v341.326H0z"/><g fill="#D80027"><path d="M0 85.331h170.663v341.337H0zM341.337 85.331H512v341.337H341.337z"/></g></svg>',Y0='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.333 512 341.333"><path fill="#FFF" d="M0 85.337h512v341.326H0z"/><g fill="#D80027"><path d="M0 85.337h512v113.775H0zM0 312.888h512v113.775H0z"/></g><path fill="#FFDA44" d="M293.991 256c0 20.982-17.01 33.243-37.992 33.243S218.008 276.982 218.008 256s17.01-37.992 37.992-37.992 37.991 17.01 37.991 37.992z"/><path fill="#0052B4" d="M293.991 256c0 20.982-17.01 37.992-37.992 37.992s-37.992-17.01-37.992-37.992"/><g fill="#D80027"><path d="M232.259 246.506h9.498v19h-9.498zM270.247 246.506h9.498v19h-9.498zM251.247 232.259h9.498v33.243h-9.498z"/></g></svg>',K0='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.333 512 341.333"><path d="M0 85.333h512V426.67H0z"/><path fill="#A2001D" d="M0 85.33h512v341.332"/><g fill="#FFF"><path d="m204.631 326.488 2.762 8.504h8.941l-7.233 5.255 2.763 8.502-7.233-5.254-7.233 5.254 2.762-8.502-7.233-5.255h8.94zM181.797 244.866l4.605 14.172h14.901l-12.056 8.757 4.605 14.172-12.055-8.759-12.055 8.759 4.606-14.172-12.056-8.757h14.901zM181.797 348.749l4.604 14.173h14.902l-12.057 8.757 4.606 14.173-12.055-8.759-12.055 8.759 4.604-14.173-12.054-8.757h14.899zM225.363 281.967l4.606 14.172h14.901l-12.056 8.758 4.605 14.172-12.056-8.759-12.054 8.759 4.606-14.172-12.056-8.758h14.901zM138.23 281.967l4.606 14.172h14.899l-12.054 8.758 4.603 14.172-12.054-8.759-12.055 8.759 4.605-14.172-12.055-8.758h14.9z"/></g><path fill="#FFDA44" d="M376.526 204.163c-7.628-7.628-17.538-12.133-28.189-12.908l31.88-24.795c-12.698-12.698-29.714-18.431-46.319-17.218a44.31 44.31 0 0 0-11.396-19.511l-12.593 25.186a18.47 18.47 0 0 0-3.148-4.197c-7.245-7.245-18.991-7.244-26.234 0s-7.245 18.99 0 26.234a18.536 18.536 0 0 0 4.197 3.148l-25.186 12.593a44.303 44.303 0 0 0 19.519 11.399c-1.217 16.606 4.511 33.619 17.209 46.317L324.12 214.6a11.053 11.053 0 0 1 7.807-3.202c2.973 0 5.768 1.158 7.87 3.26a11.055 11.055 0 0 1 3.26 7.87c0 2.974-1.158 5.768-3.26 7.87l10.494 10.494c4.905-4.905 7.607-11.428 7.607-18.364 0-5.675-1.81-11.071-5.153-15.534a29.492 29.492 0 0 1 13.288 7.662c11.573 11.572 11.573 30.403 0 41.975l10.494 10.494c8.409-8.409 13.039-19.59 13.039-31.481-.001-11.892-4.632-23.072-13.04-31.481z"/></svg>',Z0='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.333 512 341.333"><path fill="#FFF" d="M0 85.337h512v341.326H0z"/><path fill="#0052B4" d="M512 85.337V256H256L0 85.337z"/><path fill="#D80027" d="M512 256v170.663H0L256 256z"/><g fill="#FFDA44"><path d="m161.908 256-27.288-12.835 14.532-26.428-29.632 5.668-3.755-29.933-20.64 22.015-20.639-22.015-3.755 29.933-29.631-5.669 14.531 26.428L28.343 256l27.288 12.835L41.1 295.263l29.633-5.668 3.753 29.933 20.639-22.015 20.64 22.015 3.755-29.933 29.631 5.669-14.532-26.427zM21.789 117.607l9.081 12.696 14.879-4.714-9.268 12.56 9.081 12.694-14.809-4.932-9.268 12.559.117-15.608-14.809-4.934 14.88-4.712zM21.789 353.53l9.081 12.696 14.879-4.714-9.268 12.56 9.081 12.695-14.809-4.933-9.268 12.558.117-15.607-14.809-4.934 14.88-4.712zM210.395 235.569l-9.081 12.695-14.879-4.713 9.268 12.559-9.081 12.696 14.809-4.933 9.268 12.558-.117-15.607 14.809-4.934-14.88-4.713z"/></g></svg>',J0='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.333 512 341.333"><g fill="#FFF"><path d="m393.508 170.516 17.512 18.875 23.363-10.821-12.541 22.487 17.513 18.876-25.263-4.978-12.539 22.488-3.073-25.564-25.263-4.978 23.363-10.82z"/><path d="M0 85.343h512v341.326H0z"/></g><path fill="#01411c" d="M128 85.331h384v341.337H128z"/><g fill="#FFF"><path d="M361.909 298.793c-31.037 22.426-74.378 15.446-96.804-15.592-22.427-31.038-15.446-74.379 15.593-96.804 9.677-6.992 20.55-11.125 31.613-12.563-21.283-3.183-43.777 1.613-62.598 15.211-38.2 27.602-46.792 80.944-19.191 119.145 27.601 38.199 80.944 46.792 119.145 19.189 18.82-13.598 30.436-33.448 34.096-54.655-4.839 10.05-12.176 19.076-21.854 26.069zM360.58 172.889l17.484 18.842 23.322-10.802-12.519 22.447 17.483 18.844-25.219-4.968-12.519 22.45-3.067-25.521-25.22-4.969 23.323-10.802z"/></g></svg>',X0='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.333 512 341.333"><g fill="#FFF"><path d="M0 85.337h512v341.326H0z"/><path d="M0 85.337h512V256H0z"/></g><path fill="#D80027" d="M0 256h512v170.663H0z"/></svg>',Q0='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 26.666 640 426.666"><g fill-rule="evenodd" stroke-width="1pt"><path fill="#fff" d="M0 0h640v480H0z"/><path fill="#00267f" d="M0 0h213.3v480H0z"/><path fill="#f31830" d="M426.7 0H640v480H426.7z"/></g></svg>',ed='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.333 512 341.333"><path fill="#0052B4" d="M0 85.333h512V426.67H0z"/><path fill="#ACABB1" d="M400.696 219.822 384 225.387l-16.696-5.565-5.565-13.913 5.565-13.913h33.392l-5.566 13.913z"/><path fill="#338AF3" d="M345.043 219.822v61.217c0 29.821 38.957 38.957 38.957 38.957s38.957-9.137 38.957-38.957v-61.217h-77.914z"/><path fill="#6DA544" d="M348.555 295.541C358.131 313.927 384 319.996 384 319.996s25.869-6.069 35.445-24.455L384 236.518l-35.445 59.023z"/><path fill="#FFDA44" d="M422.957 280.421 384 219.822l-38.957 60.599v.618c0 5.518 1.337 10.328 3.512 14.503L384 240.405l35.445 55.137c2.175-4.175 3.512-8.983 3.512-14.503v-.618z"/><path fill="#FFF" d="M256 85.333v30.553l-45.167 25.099H256v59.359h-59.103L256 233.179v22.817h-26.68l-73.494-40.826v40.826h-55.652v-48.573l-87.43 48.573H0v-30.554l45.167-25.098H0v-59.359h59.103L0 108.139V85.333h26.68l73.494 40.825V85.333h55.652v48.572l87.43-48.572z"/><path fill="#D80027" d="M144 85.33h-32v69.332H0v32h112v69.334h32v-69.334h112v-32H144z"/><path fill="#0052B4" d="M155.826 200.344 256 255.996v-15.737l-71.847-39.915z"/><path fill="#FFF" d="M155.826 200.344 256 255.996v-15.737l-71.847-39.915z"/><g fill="#D80027"><path d="M155.826 200.344 256 255.996v-15.737l-71.847-39.915zM71.846 200.344 0 240.259v15.737l100.174-55.652z"/></g><path fill="#0052B4" d="M100.174 140.982 0 85.33v15.737l71.847 39.915z"/><path fill="#FFF" d="M100.174 140.982 0 85.33v15.737l71.847 39.915z"/><g fill="#D80027"><path d="M100.174 140.982 0 85.33v15.737l71.847 39.915zM184.154 140.982 256 101.067V85.33l-100.174 55.652z"/></g></svg>',td='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.333 512 341.333"><path fill="#FFF" d="M0 85.337h512v341.326H0z"/><g fill="#D80027"><path d="M0 85.337h512V153.6H0zM0 221.863h512v68.263H0zM0 358.4h512v68.263H0z"/></g><path fill="#0052B4" d="M256 256.006 0 426.668V85.331z"/><path fill="#FFF" d="m83.477 195.132 15.107 46.498h48.894l-39.554 28.739 15.107 46.499-39.554-28.738-39.555 28.738 15.11-46.499-39.554-28.739H68.37z"/></svg>',id='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.333 512 341.333"><path fill="#FFF" d="M0 85.337h512v341.326H0z"/><path d="M0 85.337h512v113.775H0z"/><path fill="#268024" d="M0 312.888h512v113.775H0z"/><path fill="#e4312b" d="M256 256.006 0 426.668V85.331z"/></svg>',sd='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.333 512 341.333"><path fill="#D80027" d="M0 85.337h512v341.326H0z"/><path fill="#6DA544" d="M196.641 85.337v341.326H0V85.337z"/><circle fill="#FFDA44" cx="196.641" cy="256" r="64"/><path fill="#D80027" d="M160.638 224v40.001c0 19.882 16.118 36 36 36s36-16.118 36-36V224h-72z"/><path fill="#FFF" d="M196.638 276c-6.617 0-12-5.383-12-12v-16h24.001v16c-.001 6.616-5.385 12-12.001 12z"/></svg>',rd='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.333 512 341.333"><path fill="#338AF3" d="M0 85.331h512v341.337H0z"/><circle fill="#FFDA44" cx="218.902" cy="255.994" r="74.207"/></svg>',nd='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.333 512 341.333"><path fill="#FFF" d="M0 85.337h512v341.326H0z"/><path fill="#D80027" d="M0 85.337h512v113.775H0z"/><path fill="#0052B4" d="M0 312.888h512v113.775H0z"/><path fill="#6DA544" d="m289.579 216.738-12.592 12.592c5.37 5.372 8.693 12.792 8.693 20.988 0 16.392-13.289 29.68-29.68 29.68-16.392 0-29.68-13.289-29.68-29.68 0-8.195 3.322-15.616 8.693-20.988l-12.592-12.592c-8.594 8.594-13.91 20.466-13.91 33.579 0 26.228 21.261 47.489 47.489 47.489s47.489-21.261 47.489-47.489c0-13.112-5.316-24.985-13.91-33.579z"/><path fill="#FFDA44" d="m256 232.51 4.421 13.605h14.304l-11.573 8.408 4.421 13.604L256 259.719l-11.573 8.408 4.421-13.604-11.573-8.408h14.304z"/></svg>',ld='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 513 342"><path fill="#751A46" d="M0 0h512v342H0z"/><path fill="#FFF" d="M0 0v342h150.3l37.7-19.6-37.7-18.9 37.7-19-37.7-18.9 37.7-19-37.7-19 37.7-18.9-37.7-19 37.7-19-37.7-18.9 37.7-19-37.7-18.9 37.7-19-37.7-19L188 57l-37.7-19L188 19.1 150.3 0z"/></svg>',ad='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 26.666 640 426.666"><g fill-rule="evenodd" stroke-width="1pt"><path fill="#fff" d="M0 0h640v480H0z"/><path fill="#00267f" d="M0 0h213.3v480H0z"/><path fill="#f31830" d="M426.7 0H640v480H426.7z"/></g></svg>',od='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.333 512 341.333"><path fill="#FFDA44" d="M0 85.331h512v341.326H0z"/><path fill="#0052B4" d="M0 85.331h170.663v341.337H0z"/><path fill="#D80027" d="M341.337 85.331H512v341.337H341.337z"/></svg>',hd='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.333 512 341.333"><path fill="#0052B4" d="M0 85.331h512v341.337H0z"/><path fill="#D80027" d="M0 85.331h512v113.775H0z"/><path fill="#FFF" d="M0 312.882h512v113.775H0z"/><path fill="#D80027" d="M129.468 181.793v85.136c0 48.429 63.267 63.267 63.267 63.267S256 315.356 256 266.929v-85.136H129.468z"/><g fill="#FFDA44"><path d="M155.634 196.634h74.201v-29.681l-14.841 7.42-22.261-22.26-22.259 22.26-14.84-7.42zM241.16 278.782l-48.231-48.231-48.231 48.231 15.741 15.74 32.49-32.49 32.49 32.49z"/></g><path fill="#FFF" d="M241.16 233.734h-22.504a14.74 14.74 0 0 0 2.001-7.418c0-8.196-6.645-14.84-14.84-14.84-5.663 0-10.581 3.172-13.083 7.836-2.502-4.663-7.421-7.836-13.083-7.836-8.195 0-14.84 6.644-14.84 14.84 0 2.706.736 5.235 2.001 7.418h-22.114c0 8.196 7.139 14.84 15.334 14.84h-.494c0 8.196 6.644 14.84 14.84 14.84 0 7.257 5.211 13.286 12.094 14.576l-11.694 26.401a48.075 48.075 0 0 0 18.149 3.544 48.079 48.079 0 0 0 18.149-3.544l-11.694-26.401c6.883-1.29 12.094-7.319 12.094-14.576 8.196 0 14.84-6.644 14.84-14.84h-.494c8.199 0 15.338-6.644 15.338-14.84z"/></svg>',dd='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.333 512 341.333"><path fill="#FFF" d="M0 85.33v341.332h512V85.33z"/><path fill="#0052B4" d="M0 85.333h512V426.67H0z"/><path fill="#FFF" d="M0 85.333h512v113.775H0z"/><path fill="#D80027" d="M0 312.884h512v113.775H0z"/></svg>',cd='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.333 512 341.333"><path fill="#338AF3" d="M0 85.331h512v341.337H0z"/><path fill="#FFDA44" d="M0 255.994h512v81.619H0z"/><path fill="#496E2D" d="M0 337.614h512v89.043H0z"/><path fill="#FFDA44" d="m278.261 185.209 20.844 9.804-11.099 20.186 22.632-4.33 2.868 22.865 15.765-16.816 15.766 16.816 2.867-22.865 22.633 4.33-11.099-20.186 20.843-9.804-20.844-9.805 11.1-20.185-22.633 4.329-2.868-22.864-15.765 16.816-15.766-16.816-2.867 22.864-22.634-4.329 11.1 20.187z"/></svg>',ud='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.333 512 341.333"><path fill="#055e1c" d="M0 85.333h512v341.333H0z"/><g fill="#FFF"><path d="M183.548 289.386c0 12.295 9.731 22.261 21.736 22.261h65.208c0 10.244 8.11 18.551 18.114 18.551h21.736c10.004 0 18.114-8.306 18.114-18.551v-22.261H183.548zM330.264 181.791v51.942c0 8.183-6.5 14.84-14.491 14.84v22.261c19.976 0 36.226-16.643 36.226-37.101v-51.942h-21.735zM174.491 233.734c0 8.183-6.5 14.84-14.491 14.84v22.261c19.976 0 36.226-16.643 36.226-37.101v-51.942H174.49v51.942z"/><path d="M297.661 181.788h21.736v51.942h-21.736zM265.057 211.473c0 2.046-1.625 3.71-3.623 3.71-1.998 0-3.623-1.664-3.623-3.71v-29.682h-21.736v29.682c0 2.046-1.625 3.71-3.623 3.71s-3.623-1.664-3.623-3.71v-29.682h-21.736v29.682c0 14.32 11.376 25.971 25.358 25.971 5.385 0 10.38-1.733 14.491-4.677 4.11 2.944 9.106 4.677 14.491 4.677 1.084 0 2.15-.078 3.2-.215-1.54 6.499-7.255 11.345-14.068 11.345v22.261c19.976 0 36.226-16.643 36.226-37.101v-51.943h-21.736l.002 29.682z"/><path d="M207.093 248.57h32.601v22.261h-32.601z"/></g></svg>',pd='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.333 512 341.333"><path fill="#496E2D" d="M0 85.334h512v341.337H0z"/><path fill="#0052B4" d="M0 426.663V85.329h512"/><path fill="#FFDA44" d="M0 396.494v30.169h45.255L512 115.499v-30.17h-45.255z"/><g fill="#FFF"><path d="m85.688 108.787 5.12 15.756h16.566l-13.403 9.737 5.12 15.757-13.403-9.738-13.405 9.738 5.12-15.757L64 124.543h16.567zM170.312 108.787l5.121 15.756H192l-13.403 9.737 5.12 15.757-13.405-9.738-13.403 9.738 5.12-15.757-13.403-9.737h16.566zM85.688 191.289l5.12 15.756h16.566l-13.403 9.738 5.12 15.757-13.403-9.739-13.405 9.739 5.12-15.757L64 207.045h16.567zM170.312 191.289l5.121 15.756H192l-13.403 9.738 5.12 15.757-13.405-9.739-13.403 9.739 5.12-15.757-13.403-9.738h16.566zM128 150.037l5.12 15.756h16.568l-13.405 9.738 5.12 15.758L128 181.55l-13.403 9.739 5.12-15.758-13.405-9.738h16.568z"/></g></svg>',fd='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.333 512 341.333"><path fill="#FFF" d="M0 85.337h512v341.326H0z"/><path fill="#FFDA44" d="M235.454 85.337 0 426.663 427.345 85.337z"/><path fill="#6DA544" d="M512 329.393 0 426.663h512z"/><path fill="#D80027" d="M512 85.337h-84.655L0 426.663l512-204.512z"/><path fill="#0052B4" d="M0 85.337v341.326L235.454 85.337z"/></svg>',gd='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.333 512 341.333"><path fill="#FFF" d="M0 85.337h512v341.326H0z"/><path fill="#D80027" d="M0 85.337h512v113.775H0z"/><path d="M0 312.888h512v113.775H0z"/><path fill="#496E2D" d="M0 426.668V85.331l256 170.675z"/></svg>',md='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.333 512 341.333"><path fill="#0052B4" d="M0 85.333h512V426.67H0z"/><path fill="#FFDA44" d="M192 85.33h-64v138.666H0v64h128v138.666h64V287.996h320v-64H192z"/></svg>',vd='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.333 512 341.333"><path fill="#FFF" d="M0 85.337h512v341.326H0z"/><path fill="#D80027" d="M0 85.337h512V256H0z"/><g fill="#FFF"><path d="M83.478 170.666c0-24.865 17.476-45.637 40.812-50.734a52.059 52.059 0 0 0-11.13-1.208c-28.688 0-51.942 23.254-51.942 51.941s23.255 51.942 51.942 51.942c3.822 0 7.543-.425 11.13-1.208-23.336-5.095-40.812-25.867-40.812-50.733zM150.261 122.435l3.684 11.337h11.921l-9.645 7.007 3.684 11.337-9.644-7.006-9.645 7.006 3.685-11.337-9.645-7.007h11.921z"/><path d="m121.344 144.696 3.683 11.337h11.921l-9.645 7.007 3.684 11.337-9.643-7.006-9.645 7.006 3.685-11.337-9.645-7.007h11.921zM179.178 144.696l3.684 11.337h11.921l-9.645 7.007 3.684 11.337-9.644-7.006-9.644 7.006 3.685-11.337-9.645-7.007h11.921zM168.047 178.087l3.684 11.337h11.921l-9.644 7.007 3.684 11.337-9.645-7.006-9.643 7.006 3.684-11.337-9.644-7.007h11.92zM132.474 178.087l3.683 11.337h11.921l-9.644 7.007 3.684 11.337-9.644-7.006-9.644 7.006 3.684-11.337-9.644-7.007h11.92z"/></g></svg>',_d='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 341.3"><path fill="#0052B4" d="M0 0h512v341.3H0z"/><path fill="#FFF" d="M256 0v117.4h-46.1l46.1 30.7v22.6h-22.6L160 121.8v48.9H96v-48.9l-73.4 48.9H0v-22.6l46.1-30.7H0v-64h46.1L0 22.7V0h22.6L96 48.9V0h64v48.9L233.4 0z"/><g fill="#D80027"><path d="M144 0h-32v69.4H0v32h112v69.3h32v-69.3h112v-32H144z"/><path d="M0 0v15.1l57.4 38.3H80zM256 0v15.1l-57.4 38.3H176z"/></g><path fill="#2E52B2" d="M256 22.7v30.7h-46.1z"/><g fill="#D80027"><path d="M0 0v15.1l57.4 38.3H80zM256 0v15.1l-57.4 38.3H176z"/></g><path fill="#2E52B2" d="M256 22.7v30.7h-46.1z"/><g fill="#D80027"><path d="M0 170.7v-15.1l57.4-38.2H80zM256 170.7v-15.1l-57.4-38.2H176z"/></g><path fill="#29DBFF" d="M449 139.7c-.1 44.4-7.2 92.1-65 114.9-57.8-22.8-64.9-70.5-65-114.9h130z"/><path fill="#ffda44" d="M449 139.7c0-16.7-.9-32.9-.5-47.1C426.9 83 398.4 81 383.9 81s-42.9 2-64.6 11.6c.4 14.2-.5 30.4-.5 47.1H449z"/><path fill="#BF521B" d="m369.5 204.5.3 10.3-12.8.2 4.9 13.2h-17.3c-18-20.2-23.4-42.4-24.9-68.1l9.1-9.7 8.3 14.3 10.8-12.8 7 7.8.8 15.7 13.8 29.1z"/><path fill="#474747" d="m436.6 192.5-8.6 18.3h-47l-29.2-19.5 25.7 10.5h25.1l3.7-6.5 7.2.2 2-3z"/></svg>',wd='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.333 512 341.333"><path fill="#FFF" d="M0 85.337h512v341.326H0z"/><path fill="#0052B4" d="M0 199.112h512v113.775H0z"/><path fill="#D80027" d="M0 312.888h512v113.775H0z"/><path fill="#FFF" d="M233.606 196.639v14.837c0 34.081-44.522 44.522-44.522 44.522s-44.522-10.44-44.522-44.522v-14.837l-.145-44.188 89.043-.266.146 44.454z"/><path fill="#0052B4" d="M233.606 196.639v14.837c0 34.081-44.522 44.522-44.522 44.522s-44.522-10.44-44.522-44.522v-14.837l-.145-44.188 89.043-.266.146 44.454z"/><path fill="#FFF" d="M233.606 196.639v14.837c0 34.081-44.522 44.522-44.522 44.522s-44.522-10.44-44.522-44.522v-14.837l14.848 14.837 29.674-22.261 29.685 22.261 14.837-14.837z"/></svg>',bd='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.333 512 341.333"><path fill="#D80027" d="M0 85.334h512v341.337H0z"/><path fill="#FFF" d="M512 295.883H202.195v130.783H122.435V295.883H0V216.111h122.435V85.329H202.195v130.782H512V277.329z"/><path fill="#2E52B2" d="M512 234.666v42.663H183.652v149.337h-42.674V277.329H0v-42.663h140.978V85.329h42.674v149.337z"/></svg>',yd='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.333 512 341.333"><path fill="#FFF" d="M0 85.337h512v341.326H0z"/><path fill="#0052B4" d="M0 196.641h512v118.717H0z"/><path fill="#D80027" d="M0 315.359h512v111.304H0z"/><path fill="#FFF" d="M129.468 181.799v85.136c0 48.429 63.267 63.267 63.267 63.267S256 315.362 256 266.935v-85.136H129.468z"/><path fill="#D80027" d="M146.126 184.294v81.941c0 5.472 1.215 10.64 3.623 15.485h85.97c2.408-4.844 3.623-10.012 3.623-15.485v-81.941h-93.216z"/><path fill="#FFF" d="M221.301 241.427h-21.425v-14.283h14.284v-14.283h-14.284v-14.284h-14.283v14.284h-14.282v14.283h14.282v14.283h-21.426v14.284h21.426v14.283h14.283v-14.283h21.425z"/><path fill="#0052B4" d="M169.232 301.658c9.204 5.783 18.66 9.143 23.502 10.636 4.842-1.494 14.298-4.852 23.502-10.636 9.282-5.833 15.79-12.506 19.484-19.939a24.878 24.878 0 0 0-14.418-4.583c-1.956 0-3.856.232-5.682.657-3.871-8.796-12.658-14.94-22.884-14.94-10.227 0-19.013 6.144-22.884 14.94a25.048 25.048 0 0 0-5.682-.657 24.88 24.88 0 0 0-14.418 4.583c3.691 7.433 10.198 14.106 19.48 19.939z"/></svg>',zd='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.333 512 341.333"><path fill="#FFF" d="M0 85.337h512v341.326H0z"/><path fill="#6DA544" d="M0 85.337h512v113.775H0z"/><path fill="#338AF3" d="M0 312.888h512v113.775H0z"/></svg>',xd='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.333 512 341.333"><path fill="#338AF3" d="M0 85.34h512v341.326H0z"/><path fill="#FFF" d="M512 85.334v166.69L0 256.175V85.334z"/><path fill="#6DA544" d="M323.744 203.099 256 270.843l-67.744-67.744a81.156 81.156 0 0 0-13.879 45.483v22.261c0 35.744 23.097 66.193 55.148 77.213-4.277 8.385-3.556 18.848 2.712 26.671l24.258-19.439 24.258 19.439c6.342-7.915 7.011-18.534 2.564-26.968 31.614-11.261 54.308-41.485 54.308-76.916v-22.261a81.174 81.174 0 0 0-13.881-45.483z"/><path fill="#FFDA44" d="M256 330.206c-32.732 0-59.362-26.63-59.362-59.362v-22.261c0-32.733 26.63-59.363 59.362-59.363s59.362 26.63 59.362 59.362v22.261c0 32.733-26.63 59.363-59.362 59.363z"/><path fill="#338AF3" d="M293.101 270.843v-22.261c0-20.458-16.643-37.101-37.101-37.101s-37.101 16.643-37.101 37.101v22.261L256 278.264l37.101-7.421z"/><path fill="#6DA544" d="M218.899 270.843c0 20.458 16.643 37.101 37.101 37.101s37.101-16.643 37.101-37.101h-74.202z"/><path fill="#FFDA44" d="M300.522 189.22c0-12.295-9.966-22.261-22.261-22.261a22.173 22.173 0 0 0-14.84 5.672v-13.093h7.421v-14.84h-7.421v-7.421h-14.84v7.421h-7.421v14.84h7.421v13.093a22.177 22.177 0 0 0-14.841-5.672c-12.295 0-22.261 9.966-22.261 22.261 0 6.591 2.867 12.512 7.421 16.589v13.093h74.203v-13.093c4.552-4.077 7.419-9.997 7.419-16.589z"/></svg>',Md='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.333 512 341.333"><path fill="#FFDA44" d="M0 85.331h512v341.326H0z"/><path fill="#D80027" d="M330.207 85.331H512v341.337H330.207z"/><g fill="#496E2D"><path d="M0 85.331h181.793v341.337H0zM255.999 196.632l14.733 45.347h47.685l-38.576 28.029 14.734 45.348-38.576-28.026-38.577 28.026 14.737-45.348-38.576-28.029h47.681z"/></g></svg>',Fd='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.333 512 341.333"><path fill="#338AF3" d="M0 85.331h512v341.337H0z"/><path fill="#FFF" d="m256 157.273 22.663 69.748H352l-59.332 43.106 22.664 69.749L256 296.769l-59.332 43.107 22.664-69.749L160 227.021h73.337z"/></svg>',Ad='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.333 512 341.333"><path fill="#FFF" d="M0 85.331h512v341.337H0z"/><path fill="#A2001D" d="M0 196.636h512v118.728H0z"/><g fill="#6DA544"><path d="M0 352.462h512v74.207H0zM0 85.331h512v74.207H0z"/></g><path fill="#FFDA44" d="m256.742 218.003 9.43 29.021h30.518L272 264.963l9.431 29.023-24.689-17.937-24.689 17.937 9.431-29.023-24.69-17.939h30.518z"/></svg>',Hd='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.333 512 341.333"><path fill="#FFF" d="M0 85.337h512v341.326H0z"/><path fill="#496E2D" d="M0 322.783h512v103.88H0z"/><path d="M0 85.337h512v104.515H0z"/><path fill="#A2001D" d="M0 210.877h512v89.656H0z"/><path fill="#0052B4" d="M256 256.006 0 426.668V85.331z"/><path fill="#FFDA44" d="m73.178 209.188 20.831 29.067 34.084-10.83-21.207 28.795 20.83 29.069-33.939-11.271-21.208 28.794.234-35.762-33.94-11.273 34.083-10.83z"/></svg>',Cd='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.333 512 341.333"><path fill="#FFDA44" d="M0 85.337h512v341.326H0z"/><g fill="#6DA544"><path d="M0 85.337h512v113.775H0zM0 312.888h512v113.775H0z"/></g><path fill="#D80027" d="M256 256.006 0 426.668V85.331z"/><path d="m302.049 226.318 7.368 22.674h23.842l-19.288 14.016 7.366 22.674-19.288-14.015-19.287 14.015 7.366-22.674-19.288-14.016h23.842zM376.252 226.318l7.367 22.674h23.842l-19.288 14.016 7.367 22.674-19.288-14.015-19.288 14.015 7.367-22.674-19.288-14.016h23.842z"/></svg>',Sd='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.333 512 341.333"><path fill="#FFF" d="M0 85.337h512v341.326H0z"/><g fill="#0052B4"><path d="M0 85.337h512v113.775H0zM0 312.888h512v113.775H0z"/></g><path fill="#FFDA44" d="M228.582 261.936 256 214.447l27.418 47.489z"/><path fill="#6DA544" d="M291.616 277.616 256 295.425l-35.616-17.809v-23.744h71.232z"/><path fill="#FFDA44" d="m289.579 216.485-12.592 12.592c5.37 5.372 8.693 12.791 8.693 20.988 0 16.392-13.289 29.68-29.68 29.68-16.392 0-29.68-13.289-29.68-29.68 0-8.195 3.322-15.616 8.693-20.988l-12.592-12.592c-8.594 8.594-13.91 20.466-13.91 33.579 0 26.228 21.261 47.489 47.489 47.489s47.489-21.261 47.489-47.489c0-13.114-5.316-24.987-13.91-33.579z"/></svg>',Dd='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.333 512 341.333"><path fill="#0052B4" d="M0 85.337h512v341.326H0z"/><path fill="#D80027" d="M512 85.331v166.69L0 256.173V85.331z"/><path fill="#FFF" d="M256 256.006 0 426.668V85.331z"/><g fill="#FFDA44"><path d="M59.621 256a59.546 59.546 0 0 0-.193 4.57c0 32.821 26.607 59.429 59.429 59.429s59.429-26.607 59.429-59.429c0-1.539-.078-3.061-.193-4.57H59.621z"/><circle cx="118.862" cy="210.287" r="18.286"/></g><path fill="#D80027" d="M77.715 205.714v59.429c0 31.494 41.144 41.143 41.144 41.143s41.144-9.649 41.144-41.143v-59.429H77.715z"/><path fill="#338AF3" d="M118.877 287.148c-7.632-2.746-22.876-9.767-22.876-22.006v-41.144h45.715v41.144c-.001 12.28-15.244 19.283-22.839 22.006z"/><path fill="#F3F3F3" d="M128.001 246.856v-9.142l-9.144-4.571-9.142 4.571v9.142l-4.571 4.573v18.285h27.428v-18.285z"/></svg>',Ed='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.333 512 341.333"><path fill="#FFF" d="M0 85.331h512v341.337H0z"/><path fill="#D80027" d="M0 85.331h512v113.775H0z"/><path d="M0 312.882h512v113.775H0z"/><g fill="#6DA544"><path d="m187.31 215.184 9.208 28.341h29.802l-24.11 17.518 9.209 28.342-24.109-17.516-24.11 17.516 9.209-28.342-24.109-17.518h29.801zM324.69 215.184l9.209 28.341H363.7l-24.109 17.518 9.209 28.342-24.11-17.516-24.109 17.516 9.209-28.342-24.11-17.518h29.802z"/></g></svg>',Pd='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600"><path fill="#2B5DEA" d="M0 0h900v600H0V0z"/><path fill="#FFDF29" d="M0 100h900v400H0V100z"/><path fill="#D70000" d="M0 150h900v300H0V150z"/><path fill="#FFF" d="M450 171.4v257.2c114.3 0 171.4-85.7 214.3-128.6-42.9-42.9-100-128.6-214.3-128.6z"/><path d="M450 171.4c-100 0-171.4 85.7-214.3 128.6C278.6 342.9 350 428.6 450 428.6V171.4z"/><path fill="#FFF" d="M346.3 254.3h21v91.3h-21zM398.2 254.3h21v91.3h-21z"/><path d="M477.8 254.3h21v91.3h-21zM529.7 254.3h21v91.3h-21z"/></svg>',Bd='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 341.3"><path fill="#0052B4" d="M0 0h512v341.3H0z"/><path fill="#FFF" d="M256 0v117.4h-46.1l46.1 30.7v22.6h-22.6L160 121.8v48.9H96v-48.9l-73.4 48.9H0v-22.6l46.1-30.7H0v-64h46.1L0 22.7V0h22.6L96 48.9V0h64v48.9L233.4 0z"/><g fill="#D80027"><path d="M144 0h-32v69.4H0v32h112v69.3h32v-69.3h112v-32H144z"/><path d="M0 0v15.1l57.4 38.3H80zM256 0v15.1l-57.4 38.3H176z"/></g><path fill="#2E52B2" d="M256 22.7v30.7h-46.1z"/><g fill="#D80027"><path d="M0 0v15.1l57.4 38.3H80zM256 0v15.1l-57.4 38.3H176z"/></g><path fill="#2E52B2" d="M256 22.7v30.7h-46.1z"/><g fill="#D80027"><path d="M0 170.7v-15.1l57.4-38.2H80zM256 170.7v-15.1l-57.4-38.2H176z"/></g><path fill="#29DBFF" d="M448.9 169.5c0 9.6-.3 29.6-1.4 39.2-4.1 34.9-23.5 68.8-62.1 85.9-45.3-17.9-60.8-51-64.9-85.9-1.1-9.6-1.5-19.4-1.5-29l.3-47.1h129.2l.4 36.9z"/><path fill="#FFF" d="M447.5 208.7c-.2 1.6-.4 3.3-.6 4.9-4.8 33.1-22.9 65.4-61.5 81-43.2-17-59.4-47.9-64.2-81-.2-1.6-.4-3.2-.6-4.9"/><path fill="#29DBFF" d="m385.4 251.7-22.9-43h45.8z"/><path fill="#FFF" d="m385.4 165.8-22.9 42.9h45.8z"/><ellipse fill="#FFBE57" cx="474.8" cy="236.8" rx="16.8" ry="43.3"/><ellipse fill="#FFBE57" cx="295.3" cy="236.8" rx="16.8" ry="43.3"/><path fill="#FFF" d="m385.4 31.5-33.4 44h68.5zM315.5 280s33.8 29.5 69.9 29.5 67.1-29.5 67.1-29.5l8.5 14.6S439.2 326 385.4 326 307 294.6 307 294.6l8.5-14.6z"/><ellipse fill="#A5A5A5" cx="386.3" cy="104.3" rx="34.3" ry="23.3"/></svg>',kd='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.333 512 341.333"><path fill="#0052B4" d="M0 85.333h512V426.67H0z"/><path fill="#FFDA44" d="M332.058 191.996v78.221c0 38.103 51.942 49.779 51.942 49.779s51.942-11.675 51.942-49.779v-78.221H332.058z"/><path fill="#FF9811" d="M376.579 220.44c0 7.855-6.644 28.445-14.84 28.445s-14.84-20.589-14.84-28.445c0-7.856 14.84-14.222 14.84-14.222s14.84 6.367 14.84 14.222z"/><path fill="#A2001D" d="M415.961 235.93c2.394-5.6 4.257-13.785 4.257-17.86 0-6.546-8.904-11.852-8.904-11.852s-8.904 5.306-8.904 11.852c0 4.075 1.862 12.26 4.257 17.86l-5.141 11.123a26.898 26.898 0 0 0 9.788 1.831c3.463 0 6.766-.654 9.788-1.831l-5.141-11.123z"/><path fill="#6DA544" d="M372.87 270.217s-7.421 14.222-7.421 28.445h37.101c0-14.222-7.421-28.445-7.421-28.445l-11.13-7.111-11.129 7.111z"/><path fill="#D80027" d="M395.13 270.217v-3.555c0-5.891-4.983-10.666-11.13-10.666-6.147 0-11.13 4.776-11.13 10.666v3.555h22.26z"/><path fill="#FFF" d="M256 85.333v30.553l-45.167 25.099H256v59.359h-59.103L256 233.179v22.817h-26.68l-73.494-40.826v40.826h-55.652v-48.573l-87.43 48.573H0v-30.554l45.167-25.098H0v-59.359h59.103L0 108.139V85.333h26.68l73.494 40.825V85.333h55.652v48.572l87.43-48.572z"/><path fill="#D80027" d="M144 85.33h-32v69.332H0v32h112v69.334h32v-69.334h112v-32H144z"/><path fill="#0052B4" d="M155.826 200.344 256 255.996v-15.737l-71.847-39.915z"/><path fill="#FFF" d="M155.826 200.344 256 255.996v-15.737l-71.847-39.915z"/><g fill="#D80027"><path d="M155.826 200.344 256 255.996v-15.737l-71.847-39.915zM71.846 200.344 0 240.259v15.737l100.174-55.652z"/></g><path fill="#0052B4" d="M100.174 140.982 0 85.33v15.737l71.847 39.915z"/><path fill="#FFF" d="M100.174 140.982 0 85.33v15.737l71.847 39.915z"/><g fill="#D80027"><path d="M100.174 140.982 0 85.33v15.737l71.847 39.915zM184.154 140.982 256 101.067V85.33l-100.174 55.652z"/></g></svg>',Td='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.333 512 341.333"><path fill="#FFDA44" d="M0 85.331h512v341.337H0z"/><path fill="#0052B4" d="M0 85.331h170.663v341.337H0z"/><path fill="#D80027" d="M341.337 85.331H512v341.337H341.337z"/></svg>',Id='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.5 15"><path fill="#FFF" d="M0 0h21v15H0V0z"/><path fill="#073AB6" d="M0 0h22.5v15H0V0z"/><path fill="#FFF" d="M0 0h11.3v7.5H0V0z"/><path fill="#F44653" d="M7.1 0h3.6v7H7.1V0z"/><path fill="#1035BB" d="M0 0h3.6v7H0V0z"/><path fill="#FFF" d="M3.6 0h3.6v7H3.6V0zM14.5 6h5L19 7h-1.5v.5h1l-.5 1h-.5V10h-1V7H15l-.5-1zm4 2.5 1 1.5h-2l1-1.5zm-3 0 1 1.5h-2l1-1.5zm1.5 3L16 10h2l-1 1.5zM20 8c-.3 0-.5-.2-.5-.5s.2-.5.5-.5.5.2.5.5-.2.5-.5.5zm-6 0c-.3 0-.5-.2-.5-.5s.2-.5.5-.5.5.2.5.5-.2.5-.5.5zm1 4c-.3 0-.5-.2-.5-.5s.2-.5.5-.5.5.2.5.5-.2.5-.5.5zm4 0c-.3 0-.5-.2-.5-.5s.2-.5.5-.5.5.2.5.5-.2.5-.5.5zm-2 1c-.3 0-.5-.2-.5-.5s.2-.5.5-.5.5.2.5.5-.2.5-.5.5z"/></svg>',Ld='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.333 512 341.333"><path fill="#FFDA44" d="M0 85.337h512v341.326H0z"/><g fill="#496E2D"><path d="M0 85.337h512V153.6H0zM0 358.4h512v68.263H0zM0 221.863h512v68.263H0z"/></g><path fill="#D80027" d="M0 85.337h204.054v204.054H0z"/><path fill="#FFF" d="m102.026 133.938 13.26 40.812h42.916l-34.718 25.226 13.26 40.814-34.718-25.224-34.719 25.224 13.263-40.814-34.718-25.226h42.913z"/></svg>',Od='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.333 512 341.333"><path fill="#FFF" d="M0 85.334h512V426.66H0z"/><path fill="#0052B4" d="M0 194.056h512v123.882H0z"/><g fill="#D80027"><path d="M0 85.334h512v54.522H0zM0 372.143h512v54.522H0z"/></g></svg>',Nd='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.333 512 341.333"><path fill="#FFF" d="M0 85.337h512v341.326H0z"/><path fill="#D80027" d="M0 85.337h512v113.775H0z"/><path fill="#6DA544" d="M0 312.888h512v113.775H0z"/><g fill="#FFDA44"><path d="M226.318 300.522h59.364v-25.23l-11.873 5.937L256 263.421l-17.809 17.808-11.873-5.937zM192.355 270.84l2.763 8.504h8.94l-7.233 5.255 2.763 8.502-7.233-5.255-7.234 5.255 2.763-8.502-7.233-5.255h8.94zM200.921 241.16l2.763 8.502h8.94l-7.233 5.255 2.763 8.504-7.233-5.256-7.234 5.256 2.763-8.504-7.233-5.255h8.94zM225.409 218.899l2.763 8.502h8.94l-7.233 5.255 2.763 8.504-7.233-5.256-7.234 5.256 2.763-8.504-7.233-5.255h8.94zM319.645 270.84l-2.763 8.504h-8.94l7.233 5.255-2.763 8.502 7.233-5.255 7.234 5.255-2.763-8.502 7.233-5.255h-8.94zM311.079 241.16l-2.763 8.502h-8.94l7.233 5.255-2.763 8.504 7.233-5.256 7.234 5.256-2.763-8.504 7.233-5.255h-8.94zM286.591 218.899l-2.763 8.502h-8.94l7.233 5.255-2.763 8.504 7.233-5.256 7.234 5.256-2.763-8.504 7.233-5.255h-8.94zM256 207.767l2.763 8.503h8.941l-7.234 5.256 2.763 8.502-7.233-5.254-7.233 5.254 2.763-8.502-7.234-5.256h8.941z"/></g></svg>',Rd='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.333 512 341.333"><path fill="#0052B4" d="M0 85.337h512v341.326H0z"/><g fill="#FFF"><path d="m210.715 174.377 3.684 11.338h11.919l-9.643 7.006 3.684 11.337-9.644-7.007-9.644 7.007 3.684-11.337-9.645-7.006h11.921zM116.816 281.971l4.605 14.172h14.9l-12.055 8.757 4.606 14.173-12.056-8.76-12.055 8.76 4.604-14.173-12.054-8.757h14.899zM144.696 119.679l4.604 14.172h14.901l-12.056 8.758 4.606 14.171-12.055-8.759-12.056 8.759 4.606-14.171-12.055-8.758h14.9zM69.539 175.331l4.604 14.172h14.9l-12.055 8.758 4.606 14.171-12.055-8.758-12.056 8.758 4.606-14.171-12.055-8.758h14.9z"/></g><g fill="#FFDA44"><path d="M483.386 354.503H117.801s109.234-88.562 310.593-220.938c.001 0-88.443 128.935 54.992 220.938zM117.801 366.089c-11.177 0-11.195 17.37 0 17.37h365.585c11.177 0 11.195-17.37 0-17.37H117.801z"/></g></svg>',Vd='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.333 512 341.333"><path fill="#D80027" d="M0 85.337h512v341.326H0z"/><path fill="#FFDA44" d="M256 256 0 90.691v44.242L155.826 256 0 377.067v44.242z"/><path d="M0 90.691v330.618L189.217 256z"/><path fill="#FFF" d="m44.184 213.36 24.912 23.577 30.121-16.41-14.723 30.98 24.911 23.575-34.012-4.43L60.67 301.63l-6.296-33.716-34.012-4.43 30.119-16.408z"/></svg>',$d='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.333 512 341.333"><path fill="#496E2D" d="M0 85.337h512v341.326H0z"/><g fill="#FFF"><path d="M357.208 183.679c8.397-23.404-1.036-48.858-21.281-61.536a52.131 52.131 0 0 1 10.884 2.621c27.002 9.688 41.038 39.428 31.35 66.431s-39.428 41.038-66.431 31.35a52.182 52.182 0 0 1-10.069-4.895c23.686 3.084 47.15-10.566 55.547-33.971zM310.637 115.729l-7.297 9.427-11.22-4.026 6.712 9.852-7.296 9.427 11.443-3.338 6.712 9.852.361-11.914 11.444-3.339-11.221-4.025z"/><path d="m330.338 146.448-7.296 9.427-11.221-4.026 6.712 9.852-7.296 9.427 11.443-3.339 6.712 9.853.36-11.915 11.445-3.34-11.221-4.024zM275.9 126.916l-7.296 9.427-11.219-4.024 6.711 9.851-7.296 9.426 11.443-3.338 6.712 9.852.361-11.915 11.444-3.337-11.221-4.027zM275.101 162.105l-7.296 9.427-11.221-4.026 6.712 9.852-7.296 9.427 11.444-3.338 6.711 9.852.362-11.915 11.443-3.338-11.22-4.026zM308.585 174.118l-7.296 9.427-11.22-4.026 6.712 9.853-7.297 9.426 11.444-3.338 6.712 9.852.36-11.915 11.443-3.338-11.219-4.025z"/></g><path fill="#D80027" d="M83.478 85.337h89.043v341.326H83.478z"/><path fill="#FFF" d="m117.458 175.191-14.908-11.105v-15.705l14.908-11.105h21.084l14.908 11.105v15.705l-14.908 11.105z"/><g fill="#FF9811"><path d="M128 137.276h-10.542l-14.908 11.105v7.678H128zM128 175.191h10.542l14.908-11.105v-8.012H128z"/></g><path fill="#FFF" d="m117.458 374.725-14.908-11.106v-15.704l14.908-11.105h21.084l14.908 11.105v15.704l-14.908 11.106z"/><g fill="#FF9811"><path d="M128 336.81h-10.542l-14.908 11.105v7.678H128zM128 374.725h10.542l14.908-11.106v-8.011H128z"/></g><g fill="#496E2D"><path d="m117.458 274.957-14.908-11.105v-15.703l14.908-11.106h21.084l14.908 11.106v15.703l-14.908 11.105zM153.971 299.391h-6.493v-6.493h-11.411l-8.068-8.068-8.067 8.068h-11.41v6.493h-6.493v12.986h6.493v6.492h11.41l8.068 8.069 8.068-8.069h11.41v-6.492h6.493zM153.971 199.623h-6.493v-6.492h-11.411l-8.068-8.069-8.067 8.069h-11.41v6.492h-6.493v12.986h6.493v6.492h11.41l8.068 8.07 8.068-8.07h11.41v-6.492h6.493z"/></g><g fill="#D80027"><path d="M120.576 248.576h14.84v14.84h-14.84z"/><circle cx="128" cy="206.113" r="7.421"/><circle cx="128" cy="305.887" r="7.421"/></g></svg>',jd='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.333 512 341.333"><path fill="#D80027" d="M0 85.331h512v341.337H0z"/><circle fill="#FFF" cx="256" cy="255.994" r="96"/><g fill="#D80027"><path d="m267.826 219.291 16.47 22.695 26.673-8.649-16.496 22.676 16.468 22.695-26.664-8.681-16.495 22.676.017-28.04-26.664-8.682 26.674-8.648z"/><path d="M277.818 312.724c-31.33 0-56.727-25.397-56.727-56.727s25.397-56.727 56.727-56.727c9.769 0 18.96 2.47 26.985 6.819-12.589-12.31-29.804-19.909-48.803-19.909-38.558 0-69.818 31.259-69.818 69.818s31.26 69.818 69.818 69.818c18.999 0 36.215-7.599 48.803-19.909-8.026 4.347-17.216 6.817-26.985 6.817z"/></g></svg>',Gd='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.333 512 341.333"><path fill="#D80027" d="M0 85.331h512v341.337H0z"/><path fill="#FFF" d="M0 85.331h256v170.663H0z"/><path fill="#D80027" d="M141.357 157.303V130.59h-26.714v26.713H87.93v26.713h26.713v26.713h26.714v-26.713h26.713v-26.713z"/></svg>',Wd='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 513 342"><path fill="#E30A17" d="M0 0h513v342H0z"/><path fill="#FFF" d="M259.7 118.6c-13.1-9.5-29-14.6-45.3-14.5-40.8 0-73.8 30.8-73.8 68.9s33.1 68.9 73.8 68.9c17.1 0 32.9-5.4 45.3-14.5-30 38.6-85.7 45.6-124.3 15.5s-45.6-85.7-15.5-124.3 85.7-45.6 124.3-15.5c5.8 4.5 11 9.8 15.5 15.5zm39.9 65.8-18.1 21.9 1.2-28.4-26.4-10.4 27.3-7.6 1.8-28.3 15.6 23.7 27.5-7.1-17.5 22 15.3 23.9-26.7-9.7z"/></svg>',Ud='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.333 512 341.333"><path fill="#D80027" d="M0 85.337h512v341.326H0z"/><path fill="#FFF" d="m6.066 85.337 207.961 212.636 131.584 128.69h160.323L297.973 214.027 166.389 85.337z"/><path d="M43.364 85.337 384.69 426.663h83.946L127.31 85.337z"/></svg>',qd='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600"><path fill="#0052B4" d="M0 0h900v600H0z"/><path fill="#00B2EE" d="M0 300h450V0h450v600H0V300z"/><path fill="#FFDA44" d="m345.3 480.9 29.4 90.6-77.1-56H393l-77.1 56 29.4-90.6zM706.4 340l29.4 90.6-77.1-56H754l-77.1 56 29.5-90.6zM812.8 261.5l29.4 90.6-77.1-56h95.3l-77.1 56 29.5-90.6zM812.8 37.4l29.4 90.6-77.1-56h95.3l-77.1 56 29.5-90.6z"/><path fill="#FFF" d="M449.9 0v206.3h-81l81 54V300h-39.7l-129-85.9V300H168.7v-85.9L39.7 300H0v-39.7l81-54H0V93.8h81L0 39.9V0h39.7l129 85.9V0h112.5v85.9L410.2 0z"/><path fill="#D80027" d="M253.1 0h-56.3v122H0v56.2h196.8V300h56.3V178.2h196.8V122H253.1z"/><path fill="#2E52B2" d="M449.9 39.9v53.9h-81z"/><path fill="#D80027" d="M0 300v-19.3l109.9-74.4h39.7L12.8 300zM12.8.1l136.8 93.7h-39.7L0 19.4V.1zM449.9.2v19.3L340 93.8h-39.7L437.1.2zM437.1 300l-136.8-93.7H340l109.9 74.4V300z"/><path fill="#FFDA44" d="m719.9 131.6 29.4 90.6-77.1-56h95.3l-77.1 56 29.5-90.6zM584 187.7l29.4 90.6-77.1-56h95.3l-77.1 56 29.5-90.6zM614 430.6l29.4 90.6-77.1-56h95.3l-77.1 56 29.5-90.6zM488 332l29.4 90.6-77.1-56h95.3l-77.1 56L488 332zM488 464l29.4 90.6-77.1-56h95.3l-77.1 56L488 464z"/></svg>',Yd='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.333 512 341.333"><path fill="#D80027" d="M0 85.337h512v341.326H0z"/><path fill="#0052B4" d="M0 85.337h256V256H0z"/><path fill="#FFF" d="M186.435 170.669 162.558 181.9l12.714 23.125-25.927-4.961-3.286 26.192L128 206.993l-18.06 19.263-3.285-26.192-25.927 4.96 12.714-23.125-23.877-11.23 23.877-11.231-12.714-23.125 25.927 4.96 3.286-26.192L128 134.344l18.06-19.263 3.285 26.192 25.928-4.96-12.715 23.125z"/><circle fill="#0052B4" cx="128" cy="170.674" r="29.006"/><path fill="#FFF" d="M128 190.06c-10.692 0-19.391-8.7-19.391-19.391 0-10.692 8.7-19.391 19.391-19.391 10.692 0 19.391 8.7 19.391 19.391 0 10.691-8.699 19.391-19.391 19.391z"/></svg>',Kd='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.333 512 341.333"><path fill="#338AF3" d="M0 85.337h512v341.326H0z"/><path fill="#6DA544" d="M0 426.663V85.337h512"/><path fill="#FFDA44" d="M512 152.222V85.337H411.67L0 359.778v66.885h100.33z"/><path d="M512 85.337v40.125L60.193 426.663H0v-40.125L451.807 85.337z"/></svg>',Zd='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.333 512 341.333"><path fill="#FFDA44" d="M0 85.337h512v341.326H0z"/><path fill="#338AF3" d="M0 85.337h512V256H0z"/></svg>',Jd='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 341.3"><path fill="#232323" d="M0 0h512v341.3H0z"/><path fill="#FFDA44" d="M0 56.9h512v56.9H0z"/><path fill="#D32300" d="M0 113.8h512v56.9H0z"/><path fill="#FFDA44" d="M0 227.6h512v56.9H0z"/><path fill="#D32300" d="M0 284.4h512v56.9H0z"/><circle fill="#FFF" cx="256" cy="170.7" r="80.7"/><path d="M234.5 127.5c.9-1.4-19.6-2-19.6-2 1.7-2.5 18.4-10.5 18.4-10.5s-.9-6 2.7-9.8l-4.5-9.8s7-3.4 18.4-3.4 19.9 7 21 13.1l-6.4 3.4c-.1 4.7 1.7 11.6-4.3 17.3-5.9 5.7-8.3 6.9-8.5 18.8 0 3.9 2.3 8.2 8.8 11.7 17.4 9.3 38.6 28.2 44.6 33.9 6.1 5.7 5.1 19.2 2.6 25.2s-12.1 14.3-14.3 13.6c-2.2-.6 1.2-9.2-3.5-11.6 0 0-8.9-7.6-16.8.6s-.2 25.2 3.9 28c4.1 2.8 1.7 5-1.9 5H247c-3.8 0-5.4-2.3-1.9-5 7.6-3.8 12.4-15.3 7.4-20.3-4.9-4.9-18.3 1.5-21.5 6.3-2.8 2.8-8.8 3.6-12.9-1.4s-4.1-10.4-1.1-12.5c7-4.8 0 0 .1-.1 0 0 11.9-8.6 29.9-9 3.9 0 4.8-2.2 2.2-4.8 0 0-30.9-27.4-28.1-44.2 3-18.3 20-26.3 13.4-32.5-1.3-1.8 0 0 0 0z"/></svg>',Xd='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 513 342"><path fill="#FFF" d="M0 0h513v342H0z"/><g fill="#D80027"><path d="M0 0h513v26.3H0zM0 52.6h513v26.3H0zM0 105.2h513v26.3H0zM0 157.8h513v26.3H0zM0 210.5h513v26.3H0zM0 263.1h513v26.3H0zM0 315.7h513V342H0z"/></g><path fill="#2E52B2" d="M0 0h256.5v184.1H0z"/><g fill="#FFF"><path d="m47.8 138.9-4-12.8-4.4 12.8H26.2l10.7 7.7-4 12.8 10.9-7.9 10.6 7.9-4.1-12.8 10.9-7.7zM104.1 138.9l-4.1-12.8-4.2 12.8H82.6l10.7 7.7-4 12.8 10.7-7.9 10.8 7.9-4-12.8 10.7-7.7zM160.6 138.9l-4.3-12.8-4 12.8h-13.5l11 7.7-4.2 12.8 10.7-7.9 11 7.9-4.2-12.8 10.7-7.7zM216.8 138.9l-4-12.8-4.2 12.8h-13.3l10.8 7.7-4 12.8 10.7-7.9 10.8 7.9-4.3-12.8 11-7.7zM100 75.3l-4.2 12.8H82.6L93.3 96l-4 12.6 10.7-7.8 10.8 7.8-4-12.6 10.7-7.9h-13.4zM43.8 75.3l-4.4 12.8H26.2L36.9 96l-4 12.6 10.9-7.8 10.6 7.8L50.3 96l10.9-7.9H47.8zM156.3 75.3l-4 12.8h-13.5l11 7.9-4.2 12.6 10.7-7.8 11 7.8-4.2-12.6 10.7-7.9h-13.2zM212.8 75.3l-4.2 12.8h-13.3l10.8 7.9-4 12.6 10.7-7.8 10.8 7.8-4.3-12.6 11-7.9h-13.5zM43.8 24.7l-4.4 12.6H26.2l10.7 7.9-4 12.7L43.8 50l10.6 7.9-4.1-12.7 10.9-7.9H47.8zM100 24.7l-4.2 12.6H82.6l10.7 7.9-4 12.7L100 50l10.8 7.9-4-12.7 10.7-7.9h-13.4zM156.3 24.7l-4 12.6h-13.5l11 7.9-4.2 12.7 10.7-7.9 11 7.9-4.2-12.7 10.7-7.9h-13.2zM212.8 24.7l-4.2 12.6h-13.3l10.8 7.9-4 12.7 10.7-7.9 10.8 7.9-4.3-12.7 11-7.9h-13.5z"/></g></svg>',Qd='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 513 342"><path fill="#FFF" d="M0 0h513v342H0z"/><g fill="#0038a8"><path d="M0 38h513v38H0zM0 114h513v38H0zM0 190h513v38H0zM0 266h513v38H0z"/></g><path fill="#FFF" d="M0 0h256.5v190H0z"/><path fill="#FED443" d="m128.3 138.7-15.1 22.6-3.8-26.9L86 148.2l8.2-25.9-27.2 2.2 18.6-19.8L60.3 95l25.4-9.7L67 65.5l27.1 2.3-8.2-25.9 23.4 13.8 3.9-26.9 15.1 22.6 15.1-22.6 3.8 26.9 23.4-13.8-8.2 25.9 27.1-2.2-18.6 19.8 25.4 9.7-25.4 9.7 18.6 19.8-27.1-2.2 8.2 25.9-23.4-13.8-3.9 26.9-15-22.7zm0-.5c23.9.9 44-17.6 44.9-41.5.9-23.9-17.6-44-41.5-44.9h-3.4c-23.9.8-42.6 20.8-41.8 44.6.6 22.8 19 41.1 41.8 41.8zm0-10.6c-18.8 0-34-15.2-34-34s15.2-34 34-34 34 15.2 34 34-15.3 34-34 34z"/></svg>',ec='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.333 512 341.333"><path fill="#D80027" d="M0 85.337h512v341.326H0z"/><path fill="#6DA544" d="M0 322.783h512v103.88H0z"/><path fill="#338AF3" d="M0 85.337h512v104.515H0z"/><path fill="#FFF" d="M0 210.877h512v89.656H0z"/><path fill="#338AF3" d="M0 85.337h512v104.515H0z"/><g fill="#FFF"><path d="M188.688 137.589c0-15.984 11.234-29.339 26.236-32.614a33.531 33.531 0 0 0-7.155-.777c-18.442 0-33.391 14.949-33.391 33.391s14.949 33.391 33.391 33.391c2.458 0 4.85-.273 7.155-.777-15.002-3.275-26.236-16.63-26.236-32.614zM234.658 152.766l2.261 6.957h7.315l-5.918 4.301 2.261 6.956-5.919-4.3-5.918 4.3 2.261-6.956-5.918-4.301h7.315zM258.006 152.766l2.26 6.957h7.315l-5.918 4.301 2.261 6.956-5.918-4.3-5.918 4.3 2.26-6.956-5.917-4.301h7.314zM281.353 152.766l2.26 6.957h7.315l-5.917 4.301 2.26 6.956-5.918-4.3-5.918 4.3 2.26-6.956-5.918-4.301h7.315zM304.7 152.766l2.262 6.957h7.315l-5.919 4.301 2.261 6.956-5.919-4.3-5.918 4.3 2.262-6.956-5.919-4.301h7.314zM328.048 152.766l2.26 6.957h7.315l-5.918 4.301 2.261 6.956-5.918-4.3-5.918 4.3 2.26-6.956-5.917-4.301h7.314zM258.006 128.482l2.26 6.956h7.315l-5.918 4.3 2.261 6.957-5.918-4.299-5.918 4.299 2.26-6.957-5.917-4.3h7.314zM281.353 128.482l2.26 6.956h7.315l-5.917 4.3 2.26 6.957-5.918-4.299-5.918 4.299 2.26-6.957-5.918-4.3h7.315zM304.7 128.482l2.262 6.956h7.315l-5.919 4.3 2.261 6.957-5.919-4.299-5.918 4.299 2.262-6.957-5.919-4.3h7.314zM328.048 128.482l2.26 6.956h7.315l-5.918 4.3 2.261 6.957-5.918-4.299-5.918 4.299 2.26-6.957-5.917-4.3h7.314zM281.353 104.198l2.26 6.956h7.315l-5.917 4.3 2.26 6.957-5.918-4.3-5.918 4.3 2.26-6.957-5.918-4.3h7.315zM304.7 104.198l2.262 6.956h7.315l-5.919 4.3 2.261 6.957-5.919-4.3-5.918 4.3 2.262-6.957-5.919-4.3h7.314zM328.048 104.198l2.26 6.956h7.315l-5.918 4.3 2.261 6.957-5.918-4.3-5.918 4.3 2.26-6.957-5.917-4.3h7.314z"/></g></svg>',tc='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.333 512 341.333"><path fill="#FFDA44" d="M0 85.331h512v341.326H0z"/><path fill="#FFF" d="M256 85.331h256v341.337H256z"/><path fill="#ACABB1" d="m321.353 233.837 32.073 42.43c-5.053 7.651-5.026 17.961.817 25.692 7.414 9.807 21.374 11.748 31.182 4.335 9.807-7.414 11.748-21.374 4.334-31.182-5.843-7.731-15.756-10.568-24.495-7.795l-49.988-66.129-11.838 8.949-17.759 13.424 17.899 23.677 17.775-13.401zm46.175 48.78a7.421 7.421 0 1 1 8.95 11.84 7.421 7.421 0 0 1-8.95-11.84z"/><path fill="#FFDA44" d="m376.367 247.24 17.899-23.677-17.759-13.424-11.838-8.949-49.988 66.129c-8.74-2.775-18.651.063-24.495 7.795-7.414 9.808-5.473 23.768 4.334 31.182 9.808 7.414 23.768 5.473 31.182-4.335 5.845-7.731 5.871-18.041.817-25.692l32.073-42.43 17.775 13.401zm-62.504 45.771a7.42 7.42 0 1 1-11.84-8.95 7.42 7.42 0 0 1 11.84 8.95z"/></svg>',ic='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.333 512 341.333"><path fill="#FFDA44" d="M0 85.331h512v341.337H0z"/><path fill="#338AF3" d="M0 85.331h170.663v341.337H0z"/><g fill="#6DA544"><path d="M341.337 85.331H512v341.337H341.337zM214.261 283.82l-33.393-50.086 33.392-50.087 33.392 50.087zM297.739 283.82l-33.391-50.086 33.391-50.087 33.393 50.087zM256 350.603l-33.391-50.087L256 250.429l33.391 50.087z"/></g></svg>',sc='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.5 15"><path fill="#FFCE00" d="M0 0h22.5v5H0z"/><path fill="#203899" d="M0 5h22.5v5H0z"/><path fill="#D82B2B" d="M0 10h22.5v5H0z"/><path fill="#FFF" d="m12.13 5.38.14.46.45.14-.39.27.01.48-.38-.29-.45.15.15-.44-.28-.38h.47zM10.36 5.38l.27.39h.47l-.28.38.15.45-.45-.16-.38.28.01-.47-.39-.28.45-.13zM13.8 5.94l-.01.48.39.27-.46.14-.14.45-.27-.38h-.48l.29-.38-.15-.45.45.16zM8.69 5.96l.4.27.44-.18-.13.46.3.36-.47.02-.26.4-.16-.44-.46-.12.37-.3zM15.24 7.13l-.2.44.25.4-.47-.05-.31.36-.1-.46-.43-.18.41-.24.03-.47.35.31zM15.43 8.25l.21.43.47.07-.34.33.08.46-.42-.22-.42.22.08-.46-.34-.33.47-.07zM7 8.2l.21.43.47.06-.34.33.08.47L7 9.27l-.42.22.08-.47-.34-.33.47-.06zM7.31 7.05l.45.14.38-.29v.48l.39.26-.45.15-.13.46-.28-.38-.47.01.27-.38z"/></svg>',rc='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.333 512 341.333"><path fill="#0052B4" d="M0 85.334h512v341.337H0z"/><path fill="#FFF" d="M256 85.334V202.66h-46.069L256 233.38v22.617h-22.628L160 207.078v48.919H96v-48.919l-73.372 48.919H0V233.38l46.069-30.72H0v-64h46.069L0 107.951V85.334h22.628L96 134.241V85.334h64v48.907l73.372-48.907z"/><g fill="#D80027"><path d="M144 85.33h-32v69.333H0v32h112v69.334h32v-69.334h112v-32H144z"/><path d="M0 85.329v15.083l57.377 38.251H80zM256 85.329v15.083l-57.377 38.251H176z"/></g><path fill="#2E52B2" d="M256 107.951v30.712h-46.069z"/><g fill="#D80027"><path d="M0 85.329v15.083l57.377 38.251H80zM256 85.329v15.083l-57.377 38.251H176z"/></g><path fill="#2E52B2" d="M256 107.951v30.712h-46.069z"/><g fill="#D80027"><path d="M0 255.997v-15.082l57.377-38.252H80zM256 255.997v-15.082l-57.377-38.252H176z"/></g><path fill="#FFDA44" d="m384 259.706-46.129 46.129c8.645 16.675 26.051 28.074 46.129 28.074s37.484-11.4 46.129-28.074L384 259.706z"/><path fill="#6DA544" d="M332.058 178.084V259.708c.001 39.759 51.942 51.941 51.942 51.941s51.941-12.182 51.942-51.942v-81.623H332.058z"/><path fill="#FFF" d="M372.87 215.181h22.261v59.359H372.87z"/><circle fill="#A2001D" cx="384" cy="215.181" r="11.13"/><g fill="#FFDA44"><path d="M346.902 192.92h14.84v14.84h-14.84zM346.902 226.312h14.84v14.84h-14.84zM346.902 259.703h14.84v14.84h-14.84zM406.261 192.92h14.84v14.84h-14.84zM406.261 226.312h14.84v14.84h-14.84zM406.261 259.703h14.84v14.84h-14.84z"/></g></svg>',nc='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 341.3"><path fill="#FFF" d="M0 0h512v341.3H0z"/><path fill="#1583C4" d="m397.7 166.3-51 97.7c-1.1 2-.3 4.5 1.8 5.6 2 1.1 4.5.3 5.6-1.8l51-97.7c1-2.1.1-4.6-2-5.5-2-.9-4.3-.2-5.4 1.7z"/><path fill="#1583C4" d="m404.9 188-57.8 75.4c-1.3 1.9-.8 4.5 1.1 5.8 1.7 1.2 4.1.9 5.5-.7l57.8-75.4c1.4-1.8 1.1-4.4-.8-5.8-1.8-1.5-4.4-1.1-5.8.7z"/><path fill="#1583C4" d="m379 181.3-32.5 83.1c-.8 2.1.2 4.6 2.4 5.4 2.1.8 4.6-.2 5.4-2.4l32.5-83.1c.7-2.2-.4-4.5-2.6-5.3-2.1-.6-4.3.4-5.2 2.3z"/><path fill="#409347" d="M122.1 171.9c.4 1.7 1.2 4.7 2.2 8.5 1.7 6.4 3.6 12.8 5.6 18.7 2.3 6.9 14.7 31.4 20.2 39.1 6.9 9.7 14.1 19.3 21.5 28.6 1.6 1.9 4.5 2.1 6.4.5 1.8-1.6 2.1-4.3.7-6.2-7.3-9.2-14.4-18.6-21.2-28.2-4.2-5.8-17.2-31.1-19-36.7-2.9-8.7-5.4-17.6-7.6-26.5-.5-2.4-2.9-4-5.3-3.5s-4 2.9-3.5 5.3c-.1.2 0 .3 0 .4z"/><g fill="#FFD836" stroke="#231F20" stroke-miterlimit="10"><path d="M297.1 114.9S279.5 42.8 261 42.8c-6.9 0-11.9-.6-15.4 6.4-.9 1.7-20.7-1.6-19.1 20.8.5 6.9 1.1-9.8 14.9-3.4 6.3 3-16.4 48.2-16.4 48.2h72.1z"/><path d="m466.1 48.4-90.9 22c-75.3 18.3-42.1 44.4-42.1 44.4l-72.1 12-72.1-12s33.2-26.1-42.1-44.4l-90.9-22C43.1 45.3 38.1 51.8 45.3 63c0 0 106.6 104 126.8 112 20.2 8.1 40.8 0 40.8 0s-14.9 8.7-24 24c-9.2 15.3-4.6 34.7-38.9 40.2-5.5 6.6-5 14 2.9 19.9 7.9 5.8 72.1-48.1 72.1-48.1s-24 24.4-24 36.1c0 5.1 44.1 53.8 60.1 53.8s60.1-48.7 60.1-53.8c0-11.7-24-36.1-24-36.1s64.2 53.9 72.1 48.1 11.4-19.3 2.8-19.9c-28-1.8-29.7-24.9-38.9-40.2-9.2-15.3-24-24-24-24s20.6 8.1 40.8 0S476.7 63 476.7 63c7.2-11.2 2.3-17.7-10.6-14.6z"/></g><path fill="#FFF" stroke="#231F20" stroke-miterlimit="10" d="M201.3 111.8v80.3c0 45.7 59.7 59.7 59.7 59.7s59.7-14 59.7-59.7v-80.3H201.3z"/><g fill="#D80027"><path d="M225.2 137.7V235c8.2 6 17 10.2 23.9 12.9V137.7h-23.9zM296.8 137.7V235c-8.2 6-17 10.2-23.9 12.9V137.7h23.9z"/></g><path fill="#0052B4" d="M201.3 111.8h119.4v37.9H201.3z"/><path fill="#1583C4" d="m60.1 210.5-21.9-58.1H15.7l31.8 80.8h25.2l31.5-80.8H81.7zM451.5 151.9h18.9v81.7h-18.9z"/></svg>',lc='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.333 512 341.333"><path fill="#D80027" d="M196.641 85.337H0v341.326h512V85.337z"/><path fill="#FFDA44" d="m256 157.279 22.663 69.747H352l-59.332 43.106 22.664 69.749L256 296.774l-59.332 43.107 22.664-69.749L160 227.026h73.337z"/></svg>',ac='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.333 512 341.333"><path d="M0 85.337h512v341.326H0z"/><path fill="#6DA544" d="M512 256v170.663H0L215.185 256z"/><path fill="#D80027" d="M512 85.337V256H215.185L0 85.337z"/><path d="M221.001 239.304 26.868 85.337H8.956l208.168 165.098H512v-11.131zM8.956 426.663h17.912l194.133-153.967H512v-11.131H217.124zM0 92.44v14.206L188.317 256 0 405.354v14.205L206.229 256z"/><g fill="#FFDA44"><path d="M8.956 85.337H0v7.103L206.229 256 0 419.559v7.104h8.956l208.168-165.098H512v-11.13H217.124z"/><path d="M63.718 292.382v-14.295c14.265 0 25.87-11.606 25.87-25.869 0-10.092-8.211-18.303-18.304-18.303-6.875 0-12.469 5.593-12.469 12.469 0 4.397 3.577 7.974 7.974 7.974a4.514 4.514 0 0 0 4.508-4.508h14.295c0 10.368-8.435 18.804-18.802 18.804-12.279-.002-22.269-9.993-22.269-22.271 0-14.758 12.006-26.764 26.764-26.764 17.975 0 32.599 14.623 32.599 32.599 0 22.145-18.018 40.164-40.166 40.164z"/></g></svg>',oc='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 100"><path fill="#ED2939" d="M0 0h150v100H0z"/><path fill="#002395" d="M0 0h20v44.33H0z"/><path fill="#FFF" d="M20 0h20v44.33H20z"/><path fill="none" stroke="#FFF" stroke-width="3" d="M0 44.33h62.75V0"/><path fill="#FFF" d="M108.08 43.29 87.96 23.17h40.25l-20.13 20.12zm-6.7 6.71L81.25 29.88v40.25L101.38 50zm6.7 6.71L87.96 76.83h40.25l-20.13-20.12zm6.71-6.71 20.13-20.13v40.25L114.79 50z"/></svg>',hc='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.333 512 341.333"><path fill="#D80027" d="M0 85.331h512v341.337H0z"/><path fill="#0052B4" d="M0 85.331h256v170.663H0z"/><g fill="#FFF"><path d="m165.483 181.79 2.764 8.504h8.939l-7.232 5.254 2.763 8.503-7.234-5.255-7.233 5.255 2.763-8.503-7.233-5.254h8.94zM120.579 115.007l4.606 14.173h14.9l-12.055 8.757 4.605 14.171-12.056-8.758-12.054 8.758 4.605-14.171-12.056-8.757h14.901zM165.101 129.848l4.606 14.172h14.9l-12.055 8.757 4.604 14.173-12.055-8.76-12.054 8.76 4.604-14.173-12.055-8.757h14.9zM129.909 189.211l4.606 14.172h14.9l-12.055 8.758 4.604 14.171-12.055-8.759-12.054 8.759 4.604-14.171-12.055-8.758h14.9zM90.899 152.108l4.605 14.173h14.9l-12.055 8.757 4.604 14.173-12.054-8.76-12.055 8.76 4.604-14.173-12.055-8.757h14.9z"/></g></svg>',dc='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 341.33"><path fill="#0052B4" d="M0 0h512v341.34H0z"/><g fill="#FFF"><path d="m220.72 42.63 7.95 16.11 17.77 2.58-12.86 12.54 3.04 17.7-15.9-8.36-15.9 8.36 3.03-17.7-12.86-12.54 17.78-2.58zM291.28 42.57l7.95 16.1 17.78 2.59-12.86 12.53 3.03 17.71-15.9-8.36-15.9 8.36 3.04-17.71-12.86-12.53 17.77-2.59zM353.36 53.93l7.95 16.11 17.77 2.58-12.86 12.54 3.04 17.7-15.9-8.35-15.9 8.35 3.04-17.7-12.87-12.54 17.78-2.58zM416.37 72.23l7.95 16.11 17.77 2.59-12.86 12.53 3.04 17.71-15.9-8.36-15.9 8.36 3.03-17.71-12.86-12.53 17.78-2.59zM158.64 53.93l7.95 16.11 17.78 2.58-12.87 12.54 3.04 17.7-15.9-8.35-15.9 8.35 3.04-17.7-12.86-12.54 17.77-2.58zM95.63 72.23l7.95 16.11 17.78 2.59-12.86 12.53 3.03 17.71-15.9-8.36-15.9 8.36 3.04-17.71-12.86-12.53 17.77-2.59z"/></g><path fill="#FFDA44" d="m217.53 259.33-27.22-13.61-27.22-54.43h27.22l27.22-27.22 13.61-27.22 27.22-13.61 13.61 13.61 27.22 13.61v13.61l13.61 13.61 40.83 27.22L340 245.73l-40.83 40.83-13.61-27.22-40.83 27.22v27.22l-13.61-13.61-13.59-40.84z"/></svg>',cc='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.333 512 341.333"><path fill="#FFF" d="M0 85.337h512v341.326H0z"/><path fill="#D80027" d="M0 85.337h512v113.775H0z"/><path d="M0 312.888h512v113.775H0z"/></svg>',uc='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 60"><path fill="#FFF" d="M0 0h90v60H0z"/><path stroke="#7f7f7f" stroke-width=".25" fill="#ABABAB" d="M75.6 39.6c-1.1.7 0 1.8-.6 1.9-.6.1-1.5-1.4-.2-2.5 1.6-1.5 5.8 0 5.9 4.3 0 2.2-.9 6.8-7.2 6.8-7.6 0-11.4-5.7-11.4-11.4 0-4.8 3.7-13.5 6.5-14.6 3.1-1.2 6.7-3.5 6.8-5 0-.5-1.4-.1-3.3.9-3.1 1.7-6.6 2.5-6.6 1.4s2.9-3.1 4-4.6c1.2-1.6.9-5.5 3-5.5 7.6 0 9.9 7.7 7 11.7-1.9 2.6 4.3 1 4.3 1s0 5.3-3.2 7.3c-3 1.8-4.8 3.9-4.8 3.9s.2-4.6-.5-3.9c-.6.7-11.1 4.5-10.3 12 .3 3 4.5 5.4 8.5 5.2s5.7-2.4 5.8-4.9c.1-3.9-3-4.4-3.7-4zM10.7 43.6c.1 2.5 1.8 4.7 5.8 4.9s8.2-2.2 8.5-5.2c.8-7.5-9.7-11.3-10.3-12-.7-.7-.5 3.9-.5 3.9s-1.8-2.1-4.8-3.9c-3.2-2-3.2-7.3-3.2-7.3s6.2 1.6 4.3-1c-2.9-4-.6-11.7 7-11.7 2.1 0 1.8 3.9 3 5.5 1.1 1.5 4 3.5 4 4.6s-3.5.3-6.6-1.4c-1.9-1-3.3-1.4-3.3-.9.1 1.5 3.7 3.8 6.8 5 2.8 1.1 6.5 9.8 6.5 14.6 0 5.7-3.8 11.4-11.4 11.4-6.3 0-7.2-4.6-7.2-6.8.1-4.3 4.3-5.8 5.9-4.3 1.2 1.1.4 2.7-.2 2.5-.6-.1.6-1.2-.6-1.9-.6-.4-3.7.1-3.7 4z"/><path fill="#DE393A" d="M31 28.8v14c0 1.9 2.1 1.6 2.1 1.6h9.3c1.2 0 2.6 2.3 2.6 2.3s1.4-2.3 2.5-2.3h9.6s2 .2 2-1.8V28.7H31z"/><path fill="#3951A3" d="M31 13.1h28v15.7H31z"/><path fill="#FFF" d="M50.1 16.5c-.4 2.4-2.5 4.2-5.1 4.2-2.5 0-4.6-1.8-5.1-4.2-.5.9-.8 1.9-.8 3 0 3.3 2.6 5.9 5.9 5.9 3.3 0 5.9-2.6 5.9-5.9 0-1.1-.3-2.1-.8-3z"/><circle fill="#FEE05F" cx="39.1" cy="36.5" r="3"/><circle fill="#FEE05F" cx="50.9" cy="36.5" r="3"/></svg>',pc='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.333 512 341.333"><path fill="#FFF" d="M0 85.337h512v341.326H0z"/><path d="M114.024 256.001 0 141.926v228.17z"/><path fill="#ffb915" d="M161.192 256 0 94.7v47.226l114.024 114.075L0 370.096v47.138z"/><path fill="#007847" d="M509.833 289.391c.058-.44.804-.878 2.167-1.318v-65.464H222.602L85.33 85.337H0V94.7L161.192 256 0 417.234v9.429h85.33l137.272-137.272h287.231z"/><path fill="#000c8a" d="M503.181 322.783H236.433l-103.881 103.88H512v-103.88z"/><path fill="#e1392d" d="M503.181 189.217H512V85.337H132.552l103.881 103.88z"/></svg>',fc='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.333 512 341.333"><path fill="#496E2D" d="M0 85.331h512v341.337H0z"/><path fill="#FF9811" d="M490.668 195.476h-48c0-8.836-7.164-16-16-16s-16 7.164-16 16h-48c0 8.836 7.697 16 16.533 16h-.533c0 8.836 7.162 16 16 16 0 8.836 7.162 16 16 16h32c8.836 0 16-7.164 16-16 8.836 0 16-7.164 16-16h-.533c8.837 0 16.533-7.164 16.533-16z"/><path fill="#D80027" d="M341.337 255.994h56.888v170.663h-56.888z"/><path fill="#FF9811" d="M455.112 255.994H512v170.663h-56.888z"/><path d="M398.225 255.994h56.888v170.663h-56.888z"/></svg>',gc='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.333 512 341.333"><path d="M0 85.333h512V426.67H0z"/><g fill="#FFDA44"><path d="M0 134.196h512v48.868H0zM0 329.668h512v48.868H0z"/></g><path fill="#057f44" d="M0 85.333h512v48.868H0z"/><g fill="#D80027"><path d="M0 183.069h512v48.868H0zM0 280.806h512v48.868H0z"/></g><path fill="#057f44" d="M0 378.542h512v48.128H0z"/><path fill="#FFF" d="M276.992 255.996 106.329 426.659H0V85.333h106.329z"/><path d="M256 255.996 85.334 426.662h20.987l170.667-170.666L106.321 85.33H85.334z"/><path fill="#D80027" d="m102.465 202.57 13.259 40.812h42.917l-34.718 25.226 13.26 40.814-34.718-25.224-34.72 25.224 13.262-40.814-34.718-25.226h42.915z"/><path fill="#FFDA44" d="m138.94 259.335-34.559-12.243s-2.553-23.955-2.708-24.766c-1.173-6.18-6.603-10.851-13.123-10.851-7.376 0-13.357 5.98-13.357 13.357 0 1.223.178 2.402.486 3.528l-9.689 9.755h17.229c0 17.882-13.344 17.882-13.344 35.691l7.402 17.809h44.522l7.422-17.809h-.004a17.782 17.782 0 0 0 1.381-5.231c6.397-2.589 8.342-9.24 8.342-9.24z"/></svg>';var mc=Object.defineProperty,vc=Object.getOwnPropertyDescriptor,S=(i,t,e,s)=>{for(var r=s>1?void 0:s?vc(t,e):t,n=i.length-1,l;n>=0;n--)(l=i[n])&&(r=(s?l(t,e,r):l(r))||r);return s&&r&&mc(t,e,r),r},Z1=class extends C{};Z1=S([k("dm-dataset-view")],Z1);var J1=class extends C{};J1=S([k("dm-code-input")],J1);var ut=class extends C{constructor(){super(...arguments);this.names={DE:"Deutsch",GB:"English"},this.value="DE"}handleChange(i){this.value=this.checkedElement.value,this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}render(){return Object.keys(this.names).map(i=>m`
      <input
        type="radio"
        name="radio"
        value=${i}
        id=${i}
        ?checked=${i===this.value}
        @change=${this.handleChange}
      >
      <label for=${i} title=${this.names[i]}>${K1(ps[i])}</label>
    `)}};ut.styles=z`

    :root {
      display: flex;
    }

    input[type="radio"] {
      opacity: 0;
      position: fixed;
      width: 0;
    }

    label {
      display: inline-block;
      padding: 0;
      margin-left: 0.25rem;
      width: 1.5rem;
      height: 1rem;
      padding: 4px;
      border-bottom: 3px solid transparent;
      cursor: pointer;
      user-select: none;
    }

    label:hover {
      border-bottom: 3px dotted cornflowerblue;
    }

    label:active {
      border-bottom: 3px dotted darkblue;
    }

    input[type="radio"]:checked + label {
      border-bottom: 3px solid cornflowerblue;
    }

    input[type="radio"]:checked:active + label {
      border-bottom: 3px solid darkblue;
    }
  `;S([_({type:String})],ut.prototype,"value",2);S([ge('input[name="radio"]:checked')],ut.prototype,"checkedElement",2);ut=S([k("dm-language-picker")],ut);var xe=class extends C{constructor(){super(...arguments);this.selectedIndex=null}get value(){return this.selectedIndex!==null?this.scenarios[this.selectedIndex]:null}handleChange(i){this.selectedIndex=parseInt(this.checkedElement.value),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}render(){return this.scenarios.map((i,t)=>m`
      <input
        type="radio"
        name="radio"
        value=${t}
        id=${t}
        ?checked=${t===this.selectedIndex}
        @change=${this.handleChange}
      >
      <label class=${i.isSandbox?"sandbox":""} for=${t}>
        ${g[this.lang][i.name]}
      </label>
    `)}};xe.styles=z`

    :root {
      display: inline-flex;
    }

    input[type="radio"] {
      opacity: 0;
      position: fixed;
      width: 0;
    }

    label {
      display: inline-block;
      padding: 0;
      margin-left: 0.25rem;
      padding: 4px;
      border-bottom: 3px solid transparent;
      cursor: pointer;
      user-select: none;
    }

    label:hover {
      border-bottom: 3px dotted cornflowerblue;
    }

    label:active {
      border-bottom: 3px dotted darkblue;
    }


    input[type="radio"]:checked + label {
      border-bottom: 3px solid cornflowerblue;
    }

    input[type="radio"]:checked:active + label {
      border-bottom: 3px solid darkblue;
    }

    label.sandbox {
      font-style: italic;
    }
  `;S([_()],xe.prototype,"lang",2);S([_({attribute:!1})],xe.prototype,"scenarios",2);S([_({type:Number,reflect:!0})],xe.prototype,"selectedIndex",2);S([ge('input[name="radio"]:checked')],xe.prototype,"checkedElement",2);xe=S([k("dm-scenario-picker")],xe);var Le=class extends C{constructor(){super(...arguments);this.minimal=!1}render(){return m`
      <slot></slot>
      <div id="triangle-left"></div>
    `}};Le.styles=z`
    :host {
      word-wrap: break-word;
      min-height: 32px;
      background: lightblue;
      padding: 0.125rem;
      font-size: 9pt;
      position: relative;
      margin-left: 10px;
      max-width: 800px;
      box-sizing: border-box;
      height: fit-content;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    :host(.fade-in) {
      opacity: 1;
      animation-name: fadeIn;
      animation-iteration-count: 1;
      animation-timing-function: ease-in;
      animation-duration: 0.5s;
    }

    @keyframes fadeIn {
      0% {opacity: 0}
      100% {opacity: 1}
    }

    #triangle-left {
      position: absolute;
      top: 11px;
      left: -10px;
      width: 0;
      height: 0;
      margin-left: 2px;
      border-top: 5px solid transparent;
      border-right: 10px solid lightblue;
      border-bottom: 5px solid transparent;
    }

    :host([minimal]) {
      background: transparent;
      border-left: 3px solid darkgreen;
      padding-left: 3px;
    }

    :host([minimal]) #triangle-left {
      display: none;
    }
  `;S([_({type:Boolean})],Le.prototype,"minimal",2);Le=S([k("dm-message")],Le);var fs=class extends Le{};fs.styles=[Le.styles,z`
    :host {
      background: lightcoral;
    }
    #triangle-left {
      border-right: 10px solid lightcoral;
    }
  `];fs=S([k("dm-error-message")],fs);var pt=class extends C{render(){return this.title=g[this.lang][this.pyodideStatus],m`<ion-icon 
      style="pointer-events: none"
      name="logo-python">
    </ion-icon>`}};pt.styles=z`

    :host {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
    }

    ion-icon {
      font-size: 1.5rem;
    }

    ion-icon.loading {
      animation: blinker 2s linear infinite;
    }

    @keyframes blinker {
      50% {color: darkred}
    }
  `;S([_()],pt.prototype,"lang",2);S([_()],pt.prototype,"pyodideStatus",2);pt=S([k("dm-pyodide-status-icon")],pt);var gs=class extends C{render(){return m`<div></div><div></div><div></div><div></div>`}};gs.styles=z`
    :host {
      display: inline-block;
      position: relative;
      width: 80px;
      height: 80px;
    }
    div {
      box-sizing: border-box;
      display: block;
      position: absolute;
      width: 64px;
      height: 64px;
      margin: 8px;
      border: 8px solid seagreen;
      border-radius: 50%;
      animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
      border-color: seagreen transparent transparent transparent;
    }
    div:nth-child(1) {
      animation-delay: -0.45s;
    }
    div:nth-child(2) {
      animation-delay: -0.3s;
    }
    div:nth-child(3) {
      animation-delay: -0.15s;
    }
    @keyframes lds-ring {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `;gs=S([k("dm-spinner")],gs);var ms=class extends C{render(){return m`
      <dm-spinner></dm-spinner>
      <slot></slot>
    `}};ms.styles=z`
    :host {
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      justify-content: center;
      align-items: center;
      background: rgba(255, 255, 255, 0.5);
      color: darkgreen;
      z-index: 10000;
    }
  `;ms=S([k("dm-loading-overlay")],ms);var ft=class extends C{constructor(){super(...arguments);this.handleDblClick=i=>{let t=getSelection(),e=document.createRange();e.selectNodeContents(i.target),t.removeAllRanges(),t.addRange(e)}}render(){return this.datasets.map(i=>m`
      <div>
        <main @dblclick=${this.handleDblClick}>D.${i.name}</main>
        <aside>
          <i>${g[this.lang][i.name]}</i>
          <div id="attribution">
            <span>${g[this.lang][i.attributionName]}</span>
            <a href=${i.attributionUrl}>${i.attributionUrl}</a>
          </div>
        </aside>
      </div>
    `)}};ft.styles=z`
    :host {
      display: flex;
      flex-direction: row;
      gap: 1rem;
      align-items: center;
    }

    div {
      position: relative;
    }

    main {
      font-family: 'Inconsolata', Consolas, monospace;
      cursor: help;
      text-decoration-line: underline overline;
      text-underline-position: under;
      margin-top: 4px;
      margin-bottom: 4px;
    }


    div:not(:hover) aside {
      display: none;
    }

    div:hover main {
      color: cornflowerblue;

    }

    aside {
      word-wrap: break-word;
      padding: 0.2rem;
      position: absolute;
      bottom: 0;
      right: 0;
      font-size: 0.75rem;
      transform: translateY(100%);
      background: rgba(255, 255, 255, 0.925);
      z-index: 1000;
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
      border: 1px solid dimgray;
    }

    #attribution, #attribution a {
      color: gray;
    }
  `;S([_({attribute:!1})],ft.prototype,"datasets",2);S([_()],ft.prototype,"lang",2);ft=S([k("dm-dataset-list")],ft);var Kt=class extends C{render(){return m`
      <div>
        <ion-icon style="pointer-events: none" name="information-circle-outline">
        </ion-icon>
        <aside>
          <slot></slot>
        </aside>
      </div>
    `}};Kt.styles=z`
    :host {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 1rem;
      align-self: center;
    }

    div {
      position: relative;
      max-height: 24px;
    }

    div:not(:hover) aside {
      display: none;
    }

    div:hover ion-icon {
      color: cornflowerblue;
    }

    ion-icon {
      font-size: 24px;
    }

    aside {
      word-wrap: break-word;
      padding: 0.2rem;
      position: absolute;
      bottom: 0;
      left: 0;
      font-size: 0.75rem;
      transform: translateY(100%);
      background: rgba(255, 255, 255, 0.975);
      z-index: 1000;
      display: flex;
      flex-direction: column;
      border: 1px solid dimgray;
      min-width: 500px;
    }
  `;S([_()],Kt.prototype,"lang",2);Kt=S([k("dm-about-tooltip")],Kt);var de=class{constructor(t,e,s=[],r=!1){this.name=t,this.program=e,this.datasets=s,this.isSandbox=r}},K=[{name:"stu",url:"static/de-studierende-faecher-fachsemester.csv",attributionName:"BMBFAttribution",attributionUrl:"https://www.datenportal.bmbf.de/portal/Tabelle-2.5.26.csv"},{name:"hau",url:"static/de-nrw-dortmund-hauptschulen-seit-1990.csv",attributionName:"openNRWDortmundAttribution",attributionUrl:"https://opendata.dortmund.de/duva2ckan-1.0.6/files/de-nrw-dortmund-hauptschulen_anzahl_klassen_schuelerinnen_und_lehrkraefte_seit_1990/content"},{name:"rea",url:"static/de-nrw-dortmund-realschulen-seit-1990.csv",attributionName:"openNRWDortmundAttribution",attributionUrl:"https://opendata.dortmund.de/duva2ckan-1.0.6/files/de-nrw-dortmund-realschulen_anzahl_klassen_schuelerinnen_und_lehrkraefte_seit_1990/content"},{name:"ges",url:"static/de-nrw-dortmund-gesamtschulen-seit-1990.csv",attributionName:"openNRWDortmundAttribution",attributionUrl:"https://opendata.dortmund.de/duva2ckan-1.0.6/files/de-nrw-dortmund-gesamtschulen_anzahl_klassen_schuelerinnen_und_lehrkraefte_seit_1990/content"},{name:"gym",url:"static/de-nrw-dortmund-gymnasien-seit-1990.csv",attributionName:"openNRWDortmundAttribution",attributionUrl:"https://opendata.dortmund.de/duva2ckan-1.0.6/files/de-nrw-dortmund-gymnasien_anzahl_klassen_schueler-innen_und_lehrkraefte_seit_1990/content"},{name:"bet",url:"static/de-bet-seit-1990.csv",attributionName:"BMBFAttribution",attributionUrl:"https://www.datenportal.bmbf.de/portal/Tabelle-2.3.25.csv"}],x={variable:{textPatternName:"variable",style:"font-weight: bold"},identifier:{identifierPattern:/.*/gi,textPatternName:"identifier",style:"background: #FFECB3"},identifierOldBasic:{expressionPattern:/'bereich'/gi,textPatternName:"oldIdentifier",style:"background: #FFE0B2"},identifierNewBasic:{expressionPattern:/'fach'/gi,textPatternName:"newIdentifier",style:"background: #FFF9C4"},expression:{expressionPattern:/.*/gi,textPatternName:"expression",style:"background: #D1C4E9"},value:{textPatternName:"value",style:"color: darkgreen;"},dataset:{textPatternName:"dataset",expressionPattern:/D\.\w+/gi,style:"font-weight: bold; background: #B2DFDB"},condition:{textPatternName:"condition",expressionPattern:/\[.*\]/gi,style:"background: #DCEDC8"},resultOfSelection:{textPatternName:"resultOfSelection",expressionPattern:/\w+\[/gi,style:"background: #B2DFDB"},func:{textPatternName:"func",expressionPattern:/.*/gi,style:"background: #E1BEE7"},funcApply:{textPatternName:"funcApply",expressionPattern:/split_year/gi,style:"background: #E1BEE7"},assign:{textPatternName:"assign",expressionPattern:/assign/gi,style:"background: #F8BBD0"},attributeMap:{textPatternName:"attribute",expressionPattern:/jahr/gi,style:"background: #B2EBF2"},identifierCalculate:{textPatternName:"identifier",expressionPattern:/bet/gi,style:"background: #FFECB3"},expressionCalculate:{textPatternName:"expression",expressionPattern:/D\.\w+\[.*\]/gi,style:"background: #D1C4E9"},aggAttributeAggregate:{textPatternName:"aggAttribute",expressionPattern:/\[.*\]/gi,style:"background: #FFECB3"},funcAggregate:{textPatternName:"func",expressionPattern:/'mean'/gi,style:"background: #E1BEE7"},groupbyAllAggregate:{textPatternName:"groupbyAll",expressionPattern:/groupby\(.*''\)/gi,style:"background: #B2DFDB"},groupingAttributeAggregate:{textPatternName:"groupingAttribute",expressionPattern:/'jahrzehnt'/gi,style:"background: #FFCCBC"},appendCombine:{textPatternName:"append",expressionPattern:/append/gi,style:"background: #FFCDD2"},dropDuplicatesCombine:{textPatternName:"dropDuplicates",expressionPattern:/\.drop_duplicates\(\)/gi,style:"background: #F8BBD0"},resetIndexCombine:{textPatternName:"resetIndex",expressionPattern:/reset_index\(drop=True\)/gi,style:"background: #FFCCBC"},mergeCombine:{textPatternName:"merge",expressionPattern:/merge/gi,style:"background: #FFE0B2"},datasetRelate:{textPatternName:"datasetOneTwo",expressionPattern:/bet_d(o|e)/gi,style:"background: #B2DFDB"},attributeRelate:{textPatternName:"attribute",expressionPattern:/'jahr'/gi,style:"background: #B2EBF2"}},ce=(i,t)=>m`
  <span class="sign">${i}</span>
  <span class="text">${t}</span>
`,Oe=({statement:i,labelPrefix:t,continueSelector:e=null,nodeStyle:s="color: rgba(0, 0, 0, 0.7)",hideHeader:r=!1,i:n=0})=>[async l=>(l.insertStatement(i),await l.updateComplete,r||(l.operationNodes[n].header=g[l.lang][`${t}Header`]),l.operationNodes[n].info=g[l.lang][`${t}Info1-1`],l.operationNodes[n].setAttribute("style",s),`#run${n}`),l=>(l.operationNodes[n].run(),l.operationNodes[n].info=g[l.lang][`${t}Info1-2`],e||`#insert${n}`)],A=({statement1:i,statement2:t,styles:e=null,labelPrefix:s,i:r,continueSelector:n=void 0,nodeStyle:l=""})=>[async a=>(a.insertStatement(i),await a.updateComplete,a.operationNodes[r].info=g[a.lang][`${s}Info${r}-1`],a.operationNodes[r].setAttribute("style",l),`#expression${r}`),a=>(a.setExpression(t[1],r),a.operationNodes[r].header=g[a.lang][`${s}Header${r}`],a.operationNodes[r].info=g[a.lang][`${s}Info${r}-2`],e&&(a.operationNodes[r].dynamicStyles=e),`#run${r}`),a=>(a.operationNodes[r].run(),n!==void 0?n:`#insert${r}`)],vs=[new de("basicScenario",[i=>(i.explainer=ce("",g[i.lang].basicExplainer1),i.datasetsHidden=!0,i.availablePresets=[I.at(-1),I[1],I[2]],"#explainer"),i=>(i.datasetsHidden=!1,i.explainer=ce("",g[i.lang]["basicExplainer2-1"]),"dm-dataset-list"),i=>(i.explainer=ce("⌗",g[i.lang]["basicExplainer2-2"]),"#insert0"),async i=>(i.insertStatement(["",""]),await i.updateComplete,i.operationNodes[0].dynamicStyles=[x.identifier,x.expression,x.variable,x.value],i.operationNodes[0].header=g[i.lang].basicHeader0,i.operationNodes[0].info=g[i.lang]["basicInfo0-1"],i.operationNodes[0].identifier="mein_name",i.operationNodes[0].expression="1 + 1","#main0"),i=>(i.operationNodes[0].info=g[i.lang]["basicInfo0-2"],"#run0"),async i=>(await i.operationNodes[0].run(),"#insert0"),async i=>(i.insertStatement(["studierende","D.stu"]),await i.updateComplete,i.operationNodes[1].header=g[i.lang].basicHeader1,i.operationNodes[1].info=g[i.lang]["basicInfo1-1"],i.operationNodes[1].dynamicStyles=[x.dataset],"#run1"),async i=>(i.operationNodes[1].info=g[i.lang]["basicInfo1-2"],await i.operationNodes[1].run(),"#insert1"),...A({statement1:["umbenannt","studierende"],statement2:["umbenannt","studierende.rename(columns={'bereich': 'fach'})"],styles:[x.identifierOldBasic,x.identifierNewBasic],labelPrefix:"basic",i:2,continueSelector:null})],[K[0]]),new de("selectScenario",[async i=>(i.availablePresets=[I.at(-1),I[1],I[2],I[3]],i.explainer=ce("σ/π",g[i.lang].selectExplainer1),await i.updateComplete,"#insert0"),...Oe({statement:["studierende","D.stu"],labelPrefix:"studentDataset"}),...A({statement1:["informatiker","D.stu"],statement2:["informatiker","D.stu[D.stu['bereich'] == 'Informatik']"],styles:[x.condition],labelPrefix:"select",i:1}),...A({statement1:["ersties","D.stu"],statement2:["ersties","D.stu[['bereich', 'semester 1/2']]"],styles:[x.condition],labelPrefix:"select",i:2}),...A({statement1:["info_ersties","D.stu"],statement2:["info_ersties","D.stu[D.stu['bereich'] == 'Informatik'][['bereich', 'semester 1/2']]"],styles:[x.condition],labelPrefix:"select",i:3}),...A({statement1:["info_ersties2","D.stu"],statement2:["info_ersties2","informatiker[['bereich', 'semester 1/2']]"],styles:[x.resultOfSelection],labelPrefix:"select",i:4,continueSelector:null})],[K[0]]),new de("mapScenario",[async i=>(i.availablePresets=[I.at(-1),...I.slice(0,5)],i.explainer=ce("λ",g[i.lang].mapExplainer),await i.updateComplete,"#insert0"),...Oe({statement:["lerner_gym","D.gym"],labelPrefix:"gymDataset"}),...A({statement1:["split_year","lambda year: "],statement2:["split_year","lambda year: int(year.split('/')[0])"],styles:[x.func],labelPrefix:"map",i:1}),...A({statement1:["gym_clean","D.gym"],statement2:["gym_clean","D.gym.assign(jahr=D.gym['jahr'].apply(split_year))"],styles:[x.funcApply,x.assign,x.attributeMap],labelPrefix:"map",i:2}),...A({statement1:["gym_nach_2000","gym_clean"],statement2:["gym_nach_2000","gym_clean[gym_clean['jahr'] >= 2000]"],labelPrefix:"map",i:3})],[K[4]]),new de("calculateScenario",[async i=>(i.availablePresets=[I.at(-1),...I.slice(0,7)],i.explainer=ce("κ/γ",g[i.lang].calculateExplainer),await i.updateComplete,"#insert0"),...Oe({statement:["lerner_ges","D.ges"],labelPrefix:"gesDataset"}),...A({statement1:["ges_bet","D.ges"],statement2:["ges_bet","D.ges.assign(bet=D.ges['lerner'] / D.ges['lehrkräfte'])"],styles:[x.identifierCalculate,x.expressionCalculate],labelPrefix:"calculate",i:1}),...A({statement1:["ges_mean","D.ges"],statement2:["ges_mean","D.ges.groupby(lambda g:'')[['lehrkräfte']].agg('mean')"],styles:[x.aggAttributeAggregate,x.funcAggregate,x.groupbyAllAggregate],labelPrefix:"calculate",i:2}),...A({statement1:["dec","lambda schoolyear: "],statement2:["dec","lambda schoolyear: schoolyear[-2] + '0er'"],styles:[],labelPrefix:"calculate",i:3}),...A({statement1:["ges_dec","D.ges"],statement2:["ges_dec","D.ges.assign(jahrzehnt=D.ges['jahr'].apply(dec))"],styles:[],labelPrefix:"calculate",i:4}),...A({statement1:["ges_dec_mean","ges_dec"],statement2:["ges_dec_mean","ges_dec.groupby('jahrzehnt', as_index=False)[['lehrkräfte']].agg('mean')"],styles:[x.aggAttributeAggregate,x.funcAggregate,x.groupingAttributeAggregate],labelPrefix:"calculate",i:5,continueSelector:null})],[K[3]]),new de("combineScenario",[async i=>(i.availablePresets=[I.at(-1),...I.slice(0,10)],i.explainer=ce("⊝",g[i.lang].combineExplainer),window.scrollTo(0,0),await i.updateComplete,"#insert0"),...Oe({statement:["lerner_rea","D.rea"],labelPrefix:"reaDataset"}),...A({statement1:["split_year","lambda year: "],statement2:["split_year","lambda year: int(year.split('/')[0])"],styles:[],nodeStyle:"color: rgba(0, 0, 0, 0.7)",labelPrefix:"combine",i:1}),...A({statement1:["rea","D.rea"],statement2:["rea","D.rea.assign(jahr=D.rea['jahr'].apply(split_year))"],styles:[],nodeStyle:"color: rgba(0, 0, 0, 0.7)",labelPrefix:"combine",i:2}),...A({statement1:["rea_ab","rea"],statement2:["rea_ab","rea[rea['jahr'] <= 2010]"],nodeStyle:"color: rgba(0, 0, 0, 0.7)",styles:[],labelPrefix:"combine",i:3}),...A({statement1:["rea_bc","rea"],statement2:["rea_bc","rea[rea['jahr'] >= 2000]"],nodeStyle:"color: rgba(0, 0, 0, 0.7)",styles:[],labelPrefix:"combine",i:4}),...A({statement1:["rea_abc","rea_ab"],statement2:["rea_abc","rea_ab.append(rea_bc).drop_duplicates().reset_index(drop=True)"],styles:[x.appendCombine,x.dropDuplicatesCombine,x.resetIndexCombine],labelPrefix:"combine",i:5}),...A({statement1:["rea_b","rea_ab"],statement2:["rea_b","rea_ab.merge(rea_bc)"],styles:[x.mergeCombine],labelPrefix:"combine",i:6}),...A({statement1:["rea_c","D.rea_bc"],statement2:["rea_c","rea_bc.merge(rea_ab, indicator=True, how='left')[lambda x: x._merge=='left_only'].drop('_merge', 1)"],styles:[],nodeStyle:"font-stretch: 75%;",labelPrefix:"combine",i:7})],[K[2]]),new de("relateScenario",[async i=>(i.availablePresets=I,i.explainer=ce("⋈",g[i.lang].relateExplainer),await i.updateComplete,"#insert0"),...Oe({statement:["bet_de","D.bet"],labelPrefix:"betDataset",nodeStyle:"color: rgba(0, 0, 0, 0.7)",i:0}),...Oe({statement:["lerner_hau","D.hau"],labelPrefix:"hauDataset",nodeStyle:"color: rgba(0, 0, 0, 0.7)",hideHeader:!0,i:1}),...A({statement1:["split_year","lambda year: "],statement2:["split_year","lambda year: int(year.split('/')[0])"],styles:[],labelPrefix:"relate",i:2}),...A({statement1:["hau_clean","D.hau"],statement2:["hau_clean","D.hau.assign(jahr=D.gym['jahr'].apply(split_year))"],styles:[],labelPrefix:"relate",i:3}),...A({statement1:["hau_bet","hau_clean"],statement2:["hau_bet","hau_clean.assign(bet=hau_clean['lerner'] / hau_clean['lehrkräfte'])"],styles:[],labelPrefix:"relate",i:4}),...A({statement1:["bet_do","hau_bet"],statement2:["bet_do","hau_bet[['jahr', 'bet']]"],styles:[],labelPrefix:"relate",i:5}),...A({statement1:["bet_de","D.bet"],statement2:["bet_de","D.bet[['jahr', 'hauptschule']]"],styles:[],labelPrefix:"relate",i:6}),...A({statement1:["bet_vgl","bet_do"],statement2:["bet_vgl","bet_do.merge(bet_de, on='jahr')"],styles:[x.datasetRelate,x.attributeRelate],labelPrefix:"relate",i:7}),...A({statement1:["bet_diff","bet_vgl"],statement2:["bet_diff","bet_vgl.assign(diff=bet_vgl['hauptschule'] - bet_vgl['bet'])"],styles:[],labelPrefix:"relate",i:8})],[K.at(1),K.at(-1)]),new de("sandboxScenario",[],[...K],!0)];var _c=Object.defineProperty,wc=Object.getOwnPropertyDescriptor,Me=(i,t,e,s)=>{for(var r=s>1?void 0:s?wc(t,e):t,n=i.length-1,l;n>=0;n--)(l=i[n])&&(r=(s?l(t,e,r):l(r))||r);return s&&r&&_c(t,e,r),r},bc=Hr.parse(window.navigator.userAgent);window.browser=bc;var yc=m`
  <span>© 2021 Frederic Salmen <a href="mailto:&#x66;&#x72;&#x65;&#x64;&#x65;&#x72;&#x69;&#x63;&#x40;&#x66;&#x73;&#x61;&#x6C;&#x6D;&#x65;&#x6E;&#x2E;&#x64;&#x65;">(&#x66;&#x72;&#x65;&#x64;&#x65;&#x72;&#x69;&#x63;&#x40;&#x66;&#x73;&#x61;&#x6C;&#x6D;&#x65;&#x6E;&#x2E;&#x64;&#x65;)</a></span>
`,zc=m`
<a title="GitHub" href="https://github.com/salmenf/datamoves">
  <ion-icon style="pointer-events: none" name="logo-github"></ion-icon>
</a>
`;async function xc(i,t){let e=await(await fetch(t)).text();return(...s)=>`${i} = read_csv(StringIO("""${e}"""),${s.join(",")})`}var Q=class extends C{constructor(){super();this.scenario=vs[0],this.scenarios=vs,this.pyodide=null,this.pyodideStatus="loadingPyodide",this.datasets=K,this.lang="DE",this.ScenarioView=i=>i?m`
      <div class="scenario" data-active=${i===this.scenario} id=${g[this.lang][i.name]}>
        <dm-operation-sequence-editor .scenario=${i} .lang=${this.lang} .pyodide=${this.pyodide} .nodeClass=${H} @nextScenario=${()=>{let t=this.scenarios.indexOf(this.scenario);this.scenario=this.scenarios[t+1]}}>
        </dm-operation-sequence-editor>
      </div>
    `:null,this.initializePyodide().catch(i=>this.pyodideStatus="pyodideError")}async initializePyodide(){let i=await loadPyodide({indexURL:"https://cdn.jsdelivr.net/pyodide/v0.18.1/full/"});this.pyodideStatus="loadingPandas",await i.loadPackage("pandas"),i.runPython("from pandas import *"),i.runPython("from io import StringIO"),this.pyodideStatus="loadingDatasets";let t=await Promise.all(K.map(async(e,s)=>(await xc(e.name,e.url))()));i.runPython(`class D:__slots__ = (); ${t.join(";")}`),this.pyodide=i,this.pyodideStatus="pyodideReady"}render(){return m`
      <header>
        <div>
          <h1>${g[this.lang].heading}</h1>
          <span>
            <h2>${g[this.lang].withPython}</h2>
            <dm-pyodide-status-icon lang=${this.lang} pyodideStatus=${this.pyodideStatus}></dm-pyodide-status-icon>
            <dm-about-tooltip>
              <p>${g[this.lang].welcomeMessage1}</p>
              <p>${g[this.lang].welcomeMessage2}</p>
              <p>${g[this.lang].welcomeMessage3}</p>
            </dm-about-tooltip>
          </span>
        </div>
        <dm-scenario-picker
          lang=${this.lang}
          .scenarios=${this.scenarios}
          selectedIndex=${this.scenarios.indexOf(this.scenario)}
          @change=${i=>{this.scenario=i.currentTarget.value}}
        ></dm-scenario-picker>
        <dm-language-picker lang=${this.lang} @change=${i=>{this.lang=i.currentTarget.value}}></dm-language-picker>
      </header>
      <main>
          ${this.scenarios.map(this.ScenarioView)}
      </main>
      <footer>
        ${yc}
        ${zc}
      </footer>
      ${this.pyodide?null:m`<dm-loading-overlay>
        ${g[this.lang][this.pyodideStatus]}
      </dm-loading-overlay>`}
    `}};Q.styles=z`

    :host {
      height: 100vh;
      width: min(100%, 1920px);
      margin-left: auto;
      margin-right: auto;
      overflow-x: hidden;
      display: grid;
      grid-template: auto 1fr auto / 1fr auto;
      overflow-y: scroll;
      position: relative;
    }

    header {
      background: rgba(236, 239, 241, 0.85);
      grid-row: 1;
      grid-column: 1 / 3;
      display: flex;
      position: sticky;
      top: 0;
      left: 0;
      justify-content: space-between;
      align-items: center;
      padding: 0.5rem 30px;
      user-select: none;
      gap: 1rem;
      z-index: 1000;
    }

    header h1 {
      flex-shrink: 0;
      margin: 0;
      color: #111;
      font-size: 1.75rem;
      line-height: 0.875;
    }

    header h2 {
      margin: 0;
      font-size: 1rem;
      
    }

    dm-language-picker {
      flex-grow: 1;
      display: flex;
      align-self: center;
      flex-wrap: wrap;
      justify-content: flex-end;
    }

    dm-scenario-picker {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      flex-grow: 4;
    }

    header > div {
      flex-shrink: 1;
      flex-grow: 1;
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      align-items: center;
      gap: 0.25rem 0.75rem;
    }

    header div > * {
      height: 1.75rem;
    }


    header span {
      height: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      column-gap: 0.25rem;
    }

    main {
      grid-row: 2;
      grid-column: 1 / 3;
    }


    footer {
      grid-row: 3;
      grid-column: 1 / 3;
      height: 1.5rem;
      font-size: 0.625rem;
      display: flex;
      gap: 1rem;
      justify-content: center;
      align-items: center;
    }

    footer a {
      color: inherit;
    }

    div.scenario {
      padding: 0.5rem 0rem;
      max-width: 100%;
      display: none;
    }

    div.scenario[data-active=true] {
      display: block;
      height: 100%;
      overflow-y: auto;
      margin-right: 30px;
    }

    div.scenario[data-active=true] dm-operation-sequence-editor {
      height: 100%;
    }
  `;Me([V()],Q.prototype,"scenario",2);Me([V()],Q.prototype,"scenarios",2);Me([V()],Q.prototype,"pyodide",2);Me([V()],Q.prototype,"pyodideStatus",2);Me([V()],Q.prototype,"datasets",2);Me([_()],Q.prototype,"lang",2);Q=Me([k("dm-app")],Q);
/*!
 * Bowser - a browser detector
 * https://github.com/lancedikson/bowser
 * MIT License | (c) Dustin Diaz 2012-2015
 * MIT License | (c) Denis Demchenko 2015-2019
 */
/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */
/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */
/**
 * @license
 * Copyright (c) 2021 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
//# sourceMappingURL=index.js.map
