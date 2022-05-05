"use strict";(self.webpackChunk_weareseeed_react_square_payments_docs=self.webpackChunk_weareseeed_react_square_payments_docs||[]).push([[5767],{9667:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(7294),r=a(133);function o(e){var t=e.children;return n.createElement(r.Z,{applicationId:"sandbox-sq0idb-7KE3zXHZLG_X5EmLLptTYw",cardTokenizeResponseReceived:function(e,t){console.info({token:e,buyer:t})},createPaymentRequest:function(){return{countryCode:"US",currencyCode:"USD",total:{amount:"100",label:"Total"}}},createVerificationDetails:function(){return{amount:"1.00",billingContact:{addressLines:["123 Main Street","Apartment 1"],familyName:"Doe",givenName:"John",countryCode:"GB",city:"London"},currencyCode:"GBP",intent:"CHARGE"}},locationId:"4P550BZQ0TQZA"},t)}},6170:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return d},metadata:function(){return l},toc:function(){return p}});var n=a(7462),r=a(3366),o=(a(7294),a(4137)),i=a(108),s=a(9667),c=["components"],d={id:"card-usage",title:"CreditCard - Basic Usage",slug:"/card/usage",sidebar_label:"Usage",sidebar_position:1},u="Basic usage",l={unversionedId:"card/card-usage",id:"card/card-usage",title:"CreditCard - Basic Usage",description:"The Credit Card element makes it easy to accept payments and collect card data on your site. With minimal lines of code you can generate a secure card form that once submitted, generates a one-time-use token that can be used to create a Payment with the CreatePayment API.",source:"@site/docs/card/usage.mdx",sourceDirName:"card",slug:"/card/usage",permalink:"/docs/card/usage",draft:!1,editUrl:"https://github.com/weareseeed/rswps-site/tree/main/docs/card/usage.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"card-usage",title:"CreditCard - Basic Usage",slug:"/card/usage",sidebar_label:"Usage",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Props",permalink:"/docs/props"},next:{title:"Props",permalink:"/docs/card/props"}},m={},p=[],f={toc:p};function g(e){var t=e.components,a=(0,r.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"basic-usage"},"Basic usage"),(0,o.kt)("p",null,"The Credit Card element makes it easy to accept payments and collect card data on your site. With minimal lines of code you can generate a secure card form that once submitted, generates a one-time-use token that can be used to create a Payment with the CreatePayment API."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { CreditCard, PaymentForm } from 'react-square-web-payments-form';\n\nexport default function MyApp() {\n  return (\n    <PaymentForm>\n      <CreditCard />\n    </PaymentForm>\n  );\n}\n")),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Test")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},"We will never store your card data.")," But please use dummy data for testing."))),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"After you hit the ",(0,o.kt)("inlineCode",{parentName:"p"},"Pay")," button you can see the output on the console."))),(0,o.kt)("p",null,"This is how the form looks like:"),(0,o.kt)(s.Z,{mdxType:"PaymentForm"},(0,o.kt)(i.Z,{callbacks:{cardBrandChanged:function(e){console.info(e)}},mdxType:"CreditCard"})))}g.isMDXComponent=!0},108:function(e,t,a){a.d(t,{Z:function(){return u}});var n=a(7294),r=a(3200),o=a(9227),i=a(8152);const s=(0,i.F)({"0%, 100%":{opacity:1},"50%":{opacity:.5}}),c=(0,i.z)("div",{animation:`${s()} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite`,background:"#F3F4F6",borderRadius:6,height:50,marginBottom:39,position:"relative"}),d=(0,i.z)("button",{backgroundColor:"#006aff",borderRadius:5,boxShadow:1,color:"#fff",cursor:"pointer",borderStyle:"none",fontSize:16,fontWeight:500,lineHeight:"24px",outline:"none",padding:12,userSelect:"none",width:"100%","&:active":{backgroundColor:"rgb(0, 85, 204)"},"&:disabled":{backgroundColor:"rgba(0, 0, 0, 0.05)",color:"rgba(0, 0, 0, 0.3)",cursor:"not-allowed"}});function u({buttonProps:e,callbacks:t,children:a,focus:i="cardNumber",id:s="rswps-card-container",includeInputLabels:u,postalCode:l,recalculateSize:m,render:p,style:f,...g}){const[h,b]=n.useState((()=>{})),[y,k]=n.useState(!1),v=n.useRef(null),{cardTokenizeResponseReceived:w,payments:C}=(0,r.cI)(),N=n.useMemo((()=>{const e={includeInputLabels:u,postalCode:l,style:f};return Object.keys(e).reduce(((t,a)=>(void 0!==e[a]&&(t[a]=e[a]),t)),{})}),[u,l,f]);if(n.useEffect((()=>{const e=new AbortController,{signal:t}=e;return(async e=>{const t=await(C?.card(N).then((t=>e.aborted?null:(b(t),t))));await(t?.attach(`#${s}`)),i&&await(t?.focus(i)),e.aborted&&await(t?.destroy())})(t),()=>{e.abort()}}),[C,s]),n.useEffect((()=>{h&&i&&h.focus(i)}),[h,i]),t)for(const n of Object.keys(t))h?.addEventListener(n,t[n]);m&&m(h?.recalculateSize),(0,o.O)({listener:async e=>{if(e.stopPropagation(),h){k(!0);try{const e=await h.tokenize();if("OK"===e.status)return w(e);let t=`Tokenization failed with status: ${e.status}`;if(e?.errors)throw t+=` and errors: ${JSON.stringify(e?.errors)}`,new Error(t);console.warn(t)}catch(t){console.error(t)}finally{k(!1)}}else console.warn("Credit Card button was clicked, but no Credit Card instance was found.")},type:"click",element:v,options:{passive:!0}});const P=({children:e,isLoading:t,...a})=>{const r=t||!h||y;return n.createElement(d,{...a,"aria-disabled":r,css:a?.css,disabled:r,id:"rswp-card-button",ref:v,type:"button"},e??"Pay")};return n.createElement(n.Fragment,null,n.createElement("div",{...g,"data-testid":"rswps-card-container",id:s,style:{minHeight:89}},!h&&n.createElement(c,null)),"function"==typeof p?p(P):n.createElement(P,{...e},a??"Pay"))}}}]);