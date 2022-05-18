"use strict";(self.webpackChunk_weareseeed_react_square_payments_docs=self.webpackChunk_weareseeed_react_square_payments_docs||[]).push([[592],{4137:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),c=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(a.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),f=o,g=p["".concat(a,".").concat(f)]||p[f]||u[f]||i;return n?r.createElement(g,l(l({ref:t},d),{},{components:n})):r.createElement(g,l({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=p;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9477:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(7294),o=n(3200);const i=r.forwardRef((function({applicationId:e,cardTokenizeResponseReceived:t,locationId:n,children:i,formProps:l={"aria-label":"Payment form",id:"rswps-form"},overrides:s,...a},c){return r.createElement(o.ZP,{...a,applicationId:e,cardTokenizeResponseReceived:t,locationId:n,overrides:s},r.createElement("div",{"data-testid":"rswps-form",...l,ref:c,role:"form"},i))}));function l(e){var t=e.children;return r.createElement(i,{applicationId:"sandbox-sq0idb-7KE3zXHZLG_X5EmLLptTYw",cardTokenizeResponseReceived:function(e,t){console.info({token:e,buyer:t})},createPaymentRequest:function(){return{countryCode:"US",currencyCode:"USD",pickupContact:{addressLines:["123 Main St"],city:"San Francisco",countryCode:"US",email:"john@doe.com",familyName:"Doe",givenName:"John",phone:"4155555555",postalCode:"94107",state:"CA"},total:{amount:"100",label:"Total"}}},createVerificationDetails:function(){return{amount:"1.00",billingContact:{addressLines:["123 Main Street","Apartment 1"],familyName:"Doe",givenName:"John",countryCode:"GB",city:"London"},currencyCode:"GBP",intent:"CHARGE"}},locationId:"4P550BZQ0TQZA"},t)}},3200:function(e,t,n){n.d(t,{ZP:function(){return p},cI:function(){return f}});var r=n(7294);let o=null;function i(e){return null!==o||(o=new Promise(((t,n)=>{if("undefined"!=typeof window)if(window.Square)t(window.Square);else try{let r=function(e){return document.querySelector(`script[src="${e}"]`)}(e);r||(r=function(e){const t=document.head||document.body;if(!t)throw new Error("Square.js requires a <body> or <head> element.");const n=document.createElement("script");return n.src=e,t.appendChild(n),n}(e)),r.addEventListener("load",(()=>{window.Square?t(window.Square):n(new Error("Square.js failed to load properly."))})),r.addEventListener("error",(()=>{n(new Error("Error occurred while loading Square.js"))}))}catch(r){n(r)}else t(null)}))),o}var l=globalThis&&globalThis.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function l(e){try{a(r.next(e))}catch(t){i(t)}}function s(e){try{a(r.throw(e))}catch(t){i(t)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(l,s)}a((r=r.apply(e,t||[])).next())}))};class s extends Error{constructor(e="The Payment 'applicationId' option is not in the correct format."){super(e),this.name="InvalidApplicationIdError",Object.setPrototypeOf(this,s.prototype)}}function a(e,t,n){return l(this,void 0,void 0,(function*(){const r=void 0!==(null==n?void 0:n.scriptSrc)?n.scriptSrc:function(e){let t="";if(e.startsWith("sq0idp-")&&(t="https://web.squarecdn.com/"),e.startsWith("sandbox-sq0idb-")&&(t="https://sandbox.web.squarecdn.com/"),0===t.length)throw new s;return t+="v1/square.js",t}(e),o=yield i(r);return null===o?null:o.payments(e,t)}))}const c=r.forwardRef((function({isDevelopment:e=!1},t){throw new Error("Please contact your developer to provide the required parameters to use the Web Payments SDK.")})),d="undefined"!=typeof window?r.useLayoutEffect:r.useEffect;const u=r.createContext({cardTokenizeResponseReceived:null,createPaymentRequest:null,payments:null});function p({applicationId:e,locationId:t,children:n,overrides:o,...i}){const[l,s]=r.useState(),[p]=r.useState((()=>i.createPaymentRequest?.()));r.useEffect((()=>{const n=new AbortController,{signal:r}=n;return e&&t&&async function(n){await a(e,t,o).then((e=>{if(null===e)throw new Error("Square Web Payments SDK failed to load");if(!n?.aborted)return s(e),e}))}(r),()=>{n.abort()}}),[e,t]);const f=function(e){const t=r.useRef(e);return d((()=>{t.current=e}),[e]),r.useCallback(((...e)=>t.current(...e)),[])}((async e=>{if(e.errors||!i.createVerificationDetails)return void i.cardTokenizeResponseReceived(e);const t=await(l?.verifyBuyer(String(e.token),i.createVerificationDetails()));i.cardTokenizeResponseReceived(e,t)}));if(!e||!t)return r.createElement(c,null);if(!l)return null;const g={cardTokenizeResponseReceived:f,createPaymentRequest:p,payments:l};return r.createElement(u.Provider,{value:g},n)}const f=()=>{const e=r.useContext(u);if(void 0===e)throw new Error("useForm must be used within a FormProvider");return e}},9227:function(e,t,n){n.d(t,{O:function(){return i}});var r=n(7294);const o=!("undefined"!=typeof window&&window.document?.createElement);function i({type:e,listener:t,element:n=(o?void 0:window),options:i}){const l=r.useRef();r.useEffect((()=>{l.current=t}),[t]);const s=r.useCallback((e=>{l.current?.(e)}),[]);r.useEffect((()=>{const t=(e=>e&&"current"in e?e.current:e)(n);return t?.addEventListener(e,s,i),()=>t?.removeEventListener(e,s)}),[e,n,i,s])}},8152:function(e,t,n){n.d(t,{F:function(){return Q},z:function(){return ee}});var r=n(7294),o="colors",i="sizes",l="space",s={gap:l,gridGap:l,columnGap:l,gridColumnGap:l,rowGap:l,gridRowGap:l,inset:l,insetBlock:l,insetBlockEnd:l,insetBlockStart:l,insetInline:l,insetInlineEnd:l,insetInlineStart:l,margin:l,marginTop:l,marginRight:l,marginBottom:l,marginLeft:l,marginBlock:l,marginBlockEnd:l,marginBlockStart:l,marginInline:l,marginInlineEnd:l,marginInlineStart:l,padding:l,paddingTop:l,paddingRight:l,paddingBottom:l,paddingLeft:l,paddingBlock:l,paddingBlockEnd:l,paddingBlockStart:l,paddingInline:l,paddingInlineEnd:l,paddingInlineStart:l,top:l,right:l,bottom:l,left:l,scrollMargin:l,scrollMarginTop:l,scrollMarginRight:l,scrollMarginBottom:l,scrollMarginLeft:l,scrollMarginX:l,scrollMarginY:l,scrollMarginBlock:l,scrollMarginBlockEnd:l,scrollMarginBlockStart:l,scrollMarginInline:l,scrollMarginInlineEnd:l,scrollMarginInlineStart:l,scrollPadding:l,scrollPaddingTop:l,scrollPaddingRight:l,scrollPaddingBottom:l,scrollPaddingLeft:l,scrollPaddingX:l,scrollPaddingY:l,scrollPaddingBlock:l,scrollPaddingBlockEnd:l,scrollPaddingBlockStart:l,scrollPaddingInline:l,scrollPaddingInlineEnd:l,scrollPaddingInlineStart:l,fontSize:"fontSizes",background:o,backgroundColor:o,backgroundImage:o,borderImage:o,border:o,borderBlock:o,borderBlockEnd:o,borderBlockStart:o,borderBottom:o,borderBottomColor:o,borderColor:o,borderInline:o,borderInlineEnd:o,borderInlineStart:o,borderLeft:o,borderLeftColor:o,borderRight:o,borderRightColor:o,borderTop:o,borderTopColor:o,caretColor:o,color:o,columnRuleColor:o,fill:o,outline:o,outlineColor:o,stroke:o,textDecorationColor:o,fontFamily:"fonts",fontWeight:"fontWeights",lineHeight:"lineHeights",letterSpacing:"letterSpacings",blockSize:i,minBlockSize:i,maxBlockSize:i,inlineSize:i,minInlineSize:i,maxInlineSize:i,width:i,minWidth:i,maxWidth:i,height:i,minHeight:i,maxHeight:i,flexBasis:i,gridTemplateColumns:i,gridTemplateRows:i,borderWidth:"borderWidths",borderTopWidth:"borderWidths",borderRightWidth:"borderWidths",borderBottomWidth:"borderWidths",borderLeftWidth:"borderWidths",borderStyle:"borderStyles",borderTopStyle:"borderStyles",borderRightStyle:"borderStyles",borderBottomStyle:"borderStyles",borderLeftStyle:"borderStyles",borderRadius:"radii",borderTopLeftRadius:"radii",borderTopRightRadius:"radii",borderBottomRightRadius:"radii",borderBottomLeftRadius:"radii",boxShadow:"shadows",textShadow:"shadows",transition:"transitions",zIndex:"zIndices"},a=(e,t)=>"function"==typeof t?{"()":Function.prototype.toString.call(t)}:t,c=()=>{const e=Object.create(null);return(t,n,...r)=>{const o=(e=>JSON.stringify(e,a))(t);return o in e?e[o]:e[o]=n(t,...r)}},d=Symbol.for("sxs.internal"),u=(e,t)=>Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)),p=e=>{for(const t in e)return!0;return!1},{hasOwnProperty:f}=Object.prototype,g=e=>e.includes("-")?e:e.replace(/[A-Z]/g,(e=>"-"+e.toLowerCase())),m=/\s+(?![^()]*\))/,h=e=>t=>e(..."string"==typeof t?String(t).split(m):[t]),b={appearance:e=>({WebkitAppearance:e,appearance:e}),backfaceVisibility:e=>({WebkitBackfaceVisibility:e,backfaceVisibility:e}),backdropFilter:e=>({WebkitBackdropFilter:e,backdropFilter:e}),backgroundClip:e=>({WebkitBackgroundClip:e,backgroundClip:e}),boxDecorationBreak:e=>({WebkitBoxDecorationBreak:e,boxDecorationBreak:e}),clipPath:e=>({WebkitClipPath:e,clipPath:e}),content:e=>({content:e.includes('"')||e.includes("'")||/^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(e)?e:`"${e}"`}),hyphens:e=>({WebkitHyphens:e,hyphens:e}),maskImage:e=>({WebkitMaskImage:e,maskImage:e}),maskSize:e=>({WebkitMaskSize:e,maskSize:e}),tabSize:e=>({MozTabSize:e,tabSize:e}),textSizeAdjust:e=>({WebkitTextSizeAdjust:e,textSizeAdjust:e}),userSelect:e=>({WebkitUserSelect:e,userSelect:e}),marginBlock:h(((e,t)=>({marginBlockStart:e,marginBlockEnd:t||e}))),marginInline:h(((e,t)=>({marginInlineStart:e,marginInlineEnd:t||e}))),maxSize:h(((e,t)=>({maxBlockSize:e,maxInlineSize:t||e}))),minSize:h(((e,t)=>({minBlockSize:e,minInlineSize:t||e}))),paddingBlock:h(((e,t)=>({paddingBlockStart:e,paddingBlockEnd:t||e}))),paddingInline:h(((e,t)=>({paddingInlineStart:e,paddingInlineEnd:t||e})))},y=/([\d.]+)([^]*)/,S=(e,t)=>e.length?e.reduce(((e,n)=>(e.push(...t.map((e=>e.includes("&")?e.replace(/&/g,/[ +>|~]/.test(n)&&/&.*&/.test(e)?`:is(${n})`:n):n+" "+e))),e)),[]):t,k=(e,t)=>e in w&&"string"==typeof t?t.replace(/^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/,((t,n,r,o)=>n+("stretch"===r?`-moz-available${o};${g(e)}:${n}-webkit-fill-available`:`-moz-fit-content${o};${g(e)}:${n}fit-content`)+o)):String(t),w={blockSize:1,height:1,inlineSize:1,maxBlockSize:1,maxHeight:1,maxInlineSize:1,maxWidth:1,minBlockSize:1,minHeight:1,minInlineSize:1,minWidth:1,width:1},v=e=>e?e+"-":"",R=(e,t,n)=>e.replace(/([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g,((e,r,o,i,l)=>"$"==i==!!o?e:(r||"--"==i?"calc(":"")+"var(--"+("$"===i?v(t)+(l.includes("$")?"":v(n))+l.replace(/\$/g,"-"):l)+")"+(r||"--"==i?"*"+(r||"")+(o||"1")+")":""))),B=/\s*,\s*(?![^()]*\))/,x=Object.prototype.toString,E=(e,t,n,r,o)=>{let i,l,s;const a=(e,t,n)=>{let c,d;const u=e=>{for(c in e){const m=64===c.charCodeAt(0),h=m&&Array.isArray(e[c])?e[c]:[e[c]];for(d of h){const e=/[A-Z]/.test(f=c)?f:f.replace(/-[^]/g,(e=>e[1].toUpperCase())),h="object"==typeof d&&d&&d.toString===x&&(!r.utils[e]||!t.length);if(e in r.utils&&!h){const t=r.utils[e];if(t!==l){l=t,u(t(d)),l=null;continue}}else if(e in b){const t=b[e];if(t!==s){s=t,u(t(d)),s=null;continue}}if(m&&(p=c.slice(1)in r.media?"@media "+r.media[c.slice(1)]:c,c=p.replace(/\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g,((e,t,n,r,o,i)=>{const l=y.test(t),s=.0625*(l?-1:1),[a,c]=l?[r,t]:[t,r];return"("+("="===n[0]?"":">"===n[0]===l?"max-":"min-")+a+":"+("="!==n[0]&&1===n.length?c.replace(y,((e,t,r)=>Number(t)+s*(">"===n?1:-1)+r)):c)+(o?") and ("+(">"===o[0]?"min-":"max-")+a+":"+(1===o.length?i.replace(y,((e,t,n)=>Number(t)+s*(">"===o?-1:1)+n)):i):"")+")"}))),h){const e=m?n.concat(c):[...n],r=m?[...t]:S(t,c.split(B));void 0!==i&&o($(...i)),i=void 0,a(d,r,e)}else void 0===i&&(i=[[],t,n]),c=m||36!==c.charCodeAt(0)?c:`--${v(r.prefix)}${c.slice(1).replace(/\$/g,"-")}`,d=h?d:"number"==typeof d?d&&e in I?String(d)+"px":String(d):R(k(e,null==d?"":d),r.prefix,r.themeMap[e]),i[0].push(`${m?`${c} `:`${g(c)}:`}${d}`)}}var p,f};u(e),void 0!==i&&o($(...i)),i=void 0};a(e,t,n)},$=(e,t,n)=>`${n.map((e=>`${e}{`)).join("")}${t.length?`${t.join(",")}{`:""}${e.join(";")}${t.length?"}":""}${Array(n.length?n.length+1:0).join("}")}`,I={animationDelay:1,animationDuration:1,backgroundSize:1,blockSize:1,border:1,borderBlock:1,borderBlockEnd:1,borderBlockEndWidth:1,borderBlockStart:1,borderBlockStartWidth:1,borderBlockWidth:1,borderBottom:1,borderBottomLeftRadius:1,borderBottomRightRadius:1,borderBottomWidth:1,borderEndEndRadius:1,borderEndStartRadius:1,borderInlineEnd:1,borderInlineEndWidth:1,borderInlineStart:1,borderInlineStartWidth:1,borderInlineWidth:1,borderLeft:1,borderLeftWidth:1,borderRadius:1,borderRight:1,borderRightWidth:1,borderSpacing:1,borderStartEndRadius:1,borderStartStartRadius:1,borderTop:1,borderTopLeftRadius:1,borderTopRightRadius:1,borderTopWidth:1,borderWidth:1,bottom:1,columnGap:1,columnRule:1,columnRuleWidth:1,columnWidth:1,containIntrinsicSize:1,flexBasis:1,fontSize:1,gap:1,gridAutoColumns:1,gridAutoRows:1,gridTemplateColumns:1,gridTemplateRows:1,height:1,inlineSize:1,inset:1,insetBlock:1,insetBlockEnd:1,insetBlockStart:1,insetInline:1,insetInlineEnd:1,insetInlineStart:1,left:1,letterSpacing:1,margin:1,marginBlock:1,marginBlockEnd:1,marginBlockStart:1,marginBottom:1,marginInline:1,marginInlineEnd:1,marginInlineStart:1,marginLeft:1,marginRight:1,marginTop:1,maxBlockSize:1,maxHeight:1,maxInlineSize:1,maxWidth:1,minBlockSize:1,minHeight:1,minInlineSize:1,minWidth:1,offsetDistance:1,offsetRotate:1,outline:1,outlineOffset:1,outlineWidth:1,overflowClipMargin:1,padding:1,paddingBlock:1,paddingBlockEnd:1,paddingBlockStart:1,paddingBottom:1,paddingInline:1,paddingInlineEnd:1,paddingInlineStart:1,paddingLeft:1,paddingRight:1,paddingTop:1,perspective:1,right:1,rowGap:1,scrollMargin:1,scrollMarginBlock:1,scrollMarginBlockEnd:1,scrollMarginBlockStart:1,scrollMarginBottom:1,scrollMarginInline:1,scrollMarginInlineEnd:1,scrollMarginInlineStart:1,scrollMarginLeft:1,scrollMarginRight:1,scrollMarginTop:1,scrollPadding:1,scrollPaddingBlock:1,scrollPaddingBlockEnd:1,scrollPaddingBlockStart:1,scrollPaddingBottom:1,scrollPaddingInline:1,scrollPaddingInlineEnd:1,scrollPaddingInlineStart:1,scrollPaddingLeft:1,scrollPaddingRight:1,scrollPaddingTop:1,shapeMargin:1,textDecoration:1,textDecorationThickness:1,textIndent:1,textUnderlineOffset:1,top:1,transitionDelay:1,transitionDuration:1,verticalAlign:1,width:1,wordSpacing:1},j=e=>String.fromCharCode(e+(e>25?39:97)),P=e=>(e=>{let t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=j(t%52)+n;return j(t%52)+n})(((e,t)=>{let n=t.length;for(;n;)e=33*e^t.charCodeAt(--n);return e})(5381,JSON.stringify(e))>>>0),z=["themed","global","styled","onevar","resonevar","allvar","inline"],T=e=>{if(e.href&&!e.href.startsWith(location.origin))return!1;try{return!!e.cssRules}catch(e){return!1}},C=e=>{let t;const n=()=>{const{cssRules:e}=t.sheet;return[].map.call(e,((n,r)=>{const{cssText:o}=n;let i="";if(o.startsWith("--sxs"))return"";if(e[r-1]&&(i=e[r-1].cssText).startsWith("--sxs")){if(!n.cssRules.length)return"";for(const e in t.rules)if(t.rules[e].group===n)return`--sxs{--sxs:${[...t.rules[e].cache].join(" ")}}${o}`;return n.cssRules.length?`${i}${o}`:""}return o})).join("")},r=()=>{if(t){const{rules:e,sheet:n}=t;if(!n.deleteRule){for(;3===Object(Object(n.cssRules)[0]).type;)n.cssRules.splice(0,1);n.cssRules=[]}for(const t in e)delete e[t]}const o=Object(e).styleSheets||[];for(const e of o)if(T(e)){for(let o=0,i=e.cssRules;i[o];++o){const l=Object(i[o]);if(1!==l.type)continue;const s=Object(i[o+1]);if(4!==s.type)continue;++o;const{cssText:a}=l;if(!a.startsWith("--sxs"))continue;const c=a.slice(14,-3).trim().split(/\s+/),d=z[c[0]];d&&(t||(t={sheet:e,reset:r,rules:{},toString:n}),t.rules[d]={group:s,index:o,cache:new Set(c)})}if(t)break}if(!t){const o=(e,t)=>({type:t,cssRules:[],insertRule(e,t){this.cssRules.splice(t,0,o(e,{import:3,undefined:1}[(e.toLowerCase().match(/^@([a-z]+)/)||[])[1]]||4))},get cssText(){return"@media{}"===e?`@media{${[].map.call(this.cssRules,(e=>e.cssText)).join("")}}`:e}});t={sheet:e?(e.head||e).appendChild(document.createElement("style")).sheet:o("","text/css"),rules:{},reset:r,toString:n}}const{sheet:i,rules:l}=t;for(let e=z.length-1;e>=0;--e){const t=z[e];if(!l[t]){const n=z[e+1],r=l[n]?l[n].index:i.cssRules.length;i.insertRule("@media{}",r),i.insertRule(`--sxs{--sxs:${e}}`,r),l[t]={group:i.cssRules[r+1],index:r,cache:new Set([e])}}W(l[t])}};return r(),t},W=e=>{const t=e.group;let n=t.cssRules.length;e.apply=e=>{try{t.insertRule(e,n),++n}catch(e){}}},O=Symbol(),M=c(),L=(e,t)=>M(e,(()=>(...n)=>{let r={type:null,composers:new Set};for(const t of n)if(null!=t)if(t[d]){null==r.type&&(r.type=t[d].type);for(const e of t[d].composers)r.composers.add(e)}else t.constructor!==Object||t.$$typeof?null==r.type&&(r.type=t):r.composers.add(D(t,e));return null==r.type&&(r.type="span"),r.composers.size||r.composers.add(["PJLV",{},[],[],{},[]]),q(e,r,t)})),D=({variants:e,compoundVariants:t,defaultVariants:n,...r},o)=>{const i=`${v(o.prefix)}c-${P(r)}`,l=[],s=[],a=Object.create(null),c=[];for(const p in n)a[p]=String(n[p]);if("object"==typeof e&&e)for(const g in e){d=a,u=g,f.call(d,u)||(a[g]="undefined");const t=e[g];for(const e in t){const n={[g]:String(e)};"undefined"===String(e)&&c.push(g);const r=t[e],o=[n,r,!p(r)];l.push(o)}}var d,u;if("object"==typeof t&&t)for(const f of t){let{css:e,...t}=f;e="object"==typeof e&&e||{};for(const r in t)t[r]=String(t[r]);const n=[t,e,!p(e)];s.push(n)}return[i,r,l,s,a,c]},q=(e,t,n)=>{const[r,o,i,l]=A(t.composers),s="function"==typeof t.type||t.type.$$typeof?(e=>{function t(){for(let n=0;n<t[O].length;n++){const[r,o]=t[O][n];e.rules[r].apply(o)}return t[O]=[],null}return t[O]=[],t.rules={},z.forEach((e=>t.rules[e]={apply:n=>t[O].push([e,n])})),t})(n):null,a=(s||n).rules,c=`.${r}${o.length>1?`:where(.${o.slice(1).join(".")})`:""}`,p=d=>{d="object"==typeof d&&d||_;const{css:u,...p}=d,f={};for(const e in i)if(delete p[e],e in d){let t=d[e];"object"==typeof t&&t?f[e]={"@initial":i[e],...t}:(t=String(t),f[e]="undefined"!==t||l.has(e)?t:i[e])}else f[e]=i[e];const g=new Set([...o]);for(const[r,o,i,l]of t.composers){n.rules.styled.cache.has(r)||(n.rules.styled.cache.add(r),E(o,[`.${r}`],[],e,(e=>{a.styled.apply(e)})));const t=N(i,f,e.media),s=N(l,f,e.media,!0);for(const o of t)if(void 0!==o)for(const[t,i,l]of o){const o=`${r}-${P(i)}-${t}`;g.add(o);const s=(l?n.rules.resonevar:n.rules.onevar).cache,c=l?a.resonevar:a.onevar;s.has(o)||(s.add(o),E(i,[`.${o}`],[],e,(e=>{c.apply(e)})))}for(const o of s)if(void 0!==o)for(const[t,i]of o){const o=`${r}-${P(i)}-${t}`;g.add(o),n.rules.allvar.cache.has(o)||(n.rules.allvar.cache.add(o),E(i,[`.${o}`],[],e,(e=>{a.allvar.apply(e)})))}}if("object"==typeof u&&u){const t=`${r}-i${P(u)}-css`;g.add(t),n.rules.inline.cache.has(t)||(n.rules.inline.cache.add(t),E(u,[`.${t}`],[],e,(e=>{a.inline.apply(e)})))}for(const e of String(d.className||"").trim().split(/\s+/))e&&g.add(e);const m=p.className=[...g].join(" ");return{type:t.type,className:m,selector:c,props:p,toString:()=>m,deferredInjector:s}};return u(p,{className:r,selector:c,[d]:t,toString:()=>(n.rules.styled.cache.has(r)||p(),r)})},A=e=>{let t="";const n=[],r={},o=[];for(const[i,,,,l,s]of e){""===t&&(t=i),n.push(i),o.push(...s);for(const e in l){const t=l[e];(void 0===r[e]||"undefined"!==t||s.includes(t))&&(r[e]=t)}}return[t,n,r,new Set(o)]},N=(e,t,n,r)=>{const o=[];e:for(let[i,l,s]of e){if(s)continue;let e,a=0,c=!1;for(e in i){const r=i[e];let o=t[e];if(o!==r){if("object"!=typeof o||!o)continue e;{let e,t,i=0;for(const l in o){if(r===String(o[l])){if("@initial"!==l){const e=l.slice(1);(t=t||[]).push(e in n?n[e]:l.replace(/^@media ?/,"")),c=!0}a+=i,e=!0}++i}if(t&&t.length&&(l={["@media "+t.join(", ")]:l}),!e)continue e}}}(o[a]=o[a]||[]).push([r?"cv":`${e}-${i[e]}`,l,c])}return o},_={},F=c(),G=(e,t)=>F(e,(()=>(...n)=>{const r=()=>{for(let r of n){r="object"==typeof r&&r||{};let n=P(r);if(!t.rules.global.cache.has(n)){if(t.rules.global.cache.add(n),"@import"in r){let e=[].indexOf.call(t.sheet.cssRules,t.rules.themed.group)-1;for(let n of[].concat(r["@import"]))n=n.includes('"')||n.includes("'")?n:`"${n}"`,t.sheet.insertRule(`@import ${n};`,e++);delete r["@import"]}E(r,[],[],e,(e=>{t.rules.global.apply(e)}))}}return""};return u(r,{toString:r})})),H=c(),V=(e,t)=>H(e,(()=>n=>{const r=`${v(e.prefix)}k-${P(n)}`,o=()=>{if(!t.rules.global.cache.has(r)){t.rules.global.cache.add(r);const o=[];E(n,[],[],e,(e=>o.push(e)));const i=`@keyframes ${r}{${o.join("")}}`;t.rules.global.apply(i)}return r};return u(o,{get name(){return o()},toString:o})})),Z=class{constructor(e,t,n,r){this.token=null==e?"":String(e),this.value=null==t?"":String(t),this.scale=null==n?"":String(n),this.prefix=null==r?"":String(r)}get computedValue(){return"var("+this.variable+")"}get variable(){return"--"+v(this.prefix)+v(this.scale)+this.token}toString(){return this.computedValue}},U=c(),J=(e,t)=>U(e,(()=>(n,r)=>{r="object"==typeof n&&n||Object(r);const o=`.${n=(n="string"==typeof n?n:"")||`${v(e.prefix)}t-${P(r)}`}`,i={},l=[];for(const t in r){i[t]={};for(const n in r[t]){const o=`--${v(e.prefix)}${t}-${n}`,s=R(String(r[t][n]),e.prefix,t);i[t][n]=new Z(n,s,t,e.prefix),l.push(`${o}:${s}`)}}const s=()=>{if(l.length&&!t.rules.themed.cache.has(n)){t.rules.themed.cache.add(n);const o=`${r===e.theme?":root,":""}.${n}{${l.join(";")}}`;t.rules.themed.apply(o)}return n};return{...i,get className(){return s()},selector:o,toString:s}})),X=c(),K=c(),Y=e=>{const t=(e=>{let t=!1;const n=X(e,(e=>{t=!0;const n="prefix"in(e="object"==typeof e&&e||{})?String(e.prefix):"",r="object"==typeof e.media&&e.media||{},o="object"==typeof e.root?e.root||null:globalThis.document||null,i="object"==typeof e.theme&&e.theme||{},l={prefix:n,media:r,theme:i,themeMap:"object"==typeof e.themeMap&&e.themeMap||{...s},utils:"object"==typeof e.utils&&e.utils||{}},a=C(o),c={css:L(l,a),globalCss:G(l,a),keyframes:V(l,a),createTheme:J(l,a),reset(){a.reset(),c.theme.toString()},theme:{},sheet:a,config:l,prefix:n,getCssText:a.toString,toString:a.toString};return String(c.theme=c.createTheme(i)),c}));return t||n.reset(),n})(e);return t.styled=(({config:e,sheet:t})=>K(e,(()=>{const n=L(e,t);return(...e)=>{const t=n(...e),o=t[d].type,i=r.forwardRef(((e,n)=>{const i=e&&e.as||o,{props:l,deferredInjector:s}=t(e);return delete l.as,l.ref=n,s?r.createElement(r.Fragment,null,r.createElement(i,l),r.createElement(s,null)):r.createElement(i,l)}));return i.className=t.className,i.displayName=`Styled.${o.displayName||o.name||o}`,i.selector=t.selector,i.toString=()=>t.selector,i[d]=t[d],i}})))(t),t};const{keyframes:Q,styled:ee}=Y()}}]);