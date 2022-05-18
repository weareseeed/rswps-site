"use strict";(self.webpackChunk_weareseeed_react_square_payments_docs=self.webpackChunk_weareseeed_react_square_payments_docs||[]).push([[948],{199:function(e,a,t){t.r(a),t.d(a,{assets:function(){return w},contentTitle:function(){return y},default:function(){return k},frontMatter:function(){return m},metadata:function(){return g},toc:function(){return f}});var n=t(7462),s=t(3366),i=t(7294),p=t(4137),r=t(3200),o=t(9227);const l=(0,t(8152).z)("div",{ApplePayButtonStyle:"black",ApplePayButtonType:"plain",cursor:"pointer",display:"inline-block",height:48,WebkitAppearance:"-apple-pay-button",width:"100%"});function d({id:e="rswps-apple-pay",...a}){const[t,n]=i.useState((()=>{})),{cardTokenizeResponseReceived:s,createPaymentRequest:p,payments:d}=(0,r.cI)(),c=i.useRef(null);return i.useEffect((()=>{if(!p)throw new Error("`createPaymentRequest()` is required when using digital wallets");const e=new AbortController,{signal:a}=e;return(async e=>{const a=d?.paymentRequest(p);if(!a)throw new Error("`paymentRequest` is required when using digital wallets");try{const t=await(d?.applePay(a).then((a=>{if(!e?.aborted)return n(a),a})));e.aborted&&await(t?.destroy())}catch(t){console.error("Initializing Apple Pay failed",t)}})(a),()=>{e.abort()}}),[p,d]),(0,o.O)({listener:async e=>{if(e.stopPropagation(),t)try{const e=await t.tokenize();if("OK"===e.status)return s(e);let a=`Tokenization failed with status: ${e.status}`;if(e?.errors)throw a+=` and errors: ${JSON.stringify(e?.errors)}`,new Error(a);console.warn(a)}catch(a){console.error(a)}else console.warn("Apple Pay button was clicked, but no Apple Pay instance was found.")},type:"click",element:c,options:{passive:!0}}),i.createElement(l,{...a,css:{display:t?"block":"none",opacity:t?1:.5,pointerEvents:t?"auto":"none",visibility:t?"visible":"hidden"},id:e,ref:c})}var c=t(9477),u=["components"],m={id:"apple-pay-usage",title:"ApplePay - Basic Usage",slug:"/apple-pay/usage",sidebar_label:"Usage",sidebar_position:1},y="Basic usage",g={unversionedId:"digital-wallets/apple-pay/apple-pay-usage",id:"digital-wallets/apple-pay/apple-pay-usage",title:"ApplePay - Basic Usage",description:"Requests a payment nonce for a payment card stored in an Apple Pay digital wallet.",source:"@site/docs/digital-wallets/apple-pay/usage.mdx",sourceDirName:"digital-wallets/apple-pay",slug:"/apple-pay/usage",permalink:"/docs/apple-pay/usage",draft:!1,editUrl:"https://github.com/weareseeed/rswps-site/tree/main/docs/digital-wallets/apple-pay/usage.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"apple-pay-usage",title:"ApplePay - Basic Usage",slug:"/apple-pay/usage",sidebar_label:"Usage",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Callbacks",permalink:"/docs/ach/callbacks"},next:{title:"Usage",permalink:"/docs/google-pay/usage"}},w={},f=[],h={toc:f};function k(e){var a=e.components,i=(0,s.Z)(e,u);return(0,p.kt)("wrapper",(0,n.Z)({},h,i,{components:a,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"basic-usage"},"Basic usage"),(0,p.kt)("p",null,"Requests a payment nonce for a payment card stored in an Apple Pay digital wallet."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-tsx"},"import { ApplePay, PaymentForm } from 'react-square-web-payments-sdk';\n\nexport default function MyApp() {\n  return (\n    <PaymentForm>\n      <ApplePay />\n    </PaymentForm>\n  );\n}\n")),(0,p.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,p.kt)("div",{parentName:"div",className:"admonition-heading"},(0,p.kt)("h5",{parentName:"div"},(0,p.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,p.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,p.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,p.kt)("div",{parentName:"div",className:"admonition-content"},(0,p.kt)("p",{parentName:"div"},"You must follow the following guide to use Apple Pay ",(0,p.kt)("a",{parentName:"p",href:"https://developer.squareup.com/docs/web-payments/apple-pay#prerequisites-and-assumptions"},"https://developer.squareup.com/docs/web-payments/apple-pay#prerequisites-and-assumptions")))),(0,p.kt)(c.Z,{mdxType:"PaymentForm"},(0,p.kt)(d,{mdxType:"ApplePay"})),(0,p.kt)("p",null),(0,p.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,p.kt)("div",{parentName:"div",className:"admonition-heading"},(0,p.kt)("h5",{parentName:"div"},(0,p.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,p.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,p.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,p.kt)("div",{parentName:"div",className:"admonition-content"},(0,p.kt)("p",{parentName:"div"},"This payment method will only render on Safari browsers that support Apple Pay."),(0,p.kt)("p",{parentName:"div"},"This is how will looks like on Safari:"),(0,p.kt)("p",{parentName:"div"},(0,p.kt)("img",{alt:"Safari",src:t(1891).Z,width:"2872",height:"2274"})))))}k.isMDXComponent=!0},1891:function(e,a,t){a.Z=t.p+"assets/images/safari-apple-pay-dafbe53a4b81eebc1fa32239e1047317.png"}}]);