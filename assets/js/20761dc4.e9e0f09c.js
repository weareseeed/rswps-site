"use strict";(self.webpackChunk_weareseeed_react_square_payments_docs=self.webpackChunk_weareseeed_react_square_payments_docs||[]).push([[408],{4137:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return u}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(t),u=a,f=d["".concat(l,".").concat(u)]||d[u]||m[u]||o;return t?r.createElement(f,i(i({ref:n},c),{},{components:t})):r.createElement(f,i({ref:n},c))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4041:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return m}});var r=t(7462),a=t(3366),o=(t(7294),t(4137)),i=["components"],p={id:"props",title:"Props",sidebar_position:2,slug:"/props"},l=void 0,s={unversionedId:"getting-started/props",id:"getting-started/props",title:"Props",description:"In this table we illustrate all the props that are available for the `` component.",source:"@site/docs/getting-started/props.md",sourceDirName:"getting-started",slug:"/props",permalink:"/docs/props",editUrl:"https://github.com/weareseeed/rswps-site/tree/main/docs/getting-started/props.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"props",title:"Props",sidebar_position:2,slug:"/props"},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/docs/installation"},next:{title:"Usage",permalink:"/docs/card/usage"}},c={},m=[{value:"Required props",id:"required-props",level:2},{value:"<code>applicationId</code>",id:"applicationid",level:3},{value:"<code>cardTokenizeResponseReceived()</code>",id:"cardtokenizeresponsereceived",level:3},{value:"<code>children</code>",id:"children",level:3},{value:"<code>locationId</code>",id:"locationid",level:3},{value:"Required props for Digital Wallets",id:"required-props-for-digital-wallets",level:2},{value:"<code>createPaymentRequest()</code>",id:"createpaymentrequest",level:3},{value:"Optional props",id:"optional-props",level:2},{value:"<code>createVerificationDetails()</code>",id:"createverificationdetails",level:3},{value:"<code>formProps</code>",id:"formprops",level:3},{value:"<code>overrides</code>",id:"overrides",level:3}],d={toc:m};function u(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this table we illustrate all the props that are available for the ",(0,o.kt)("inlineCode",{parentName:"p"},"<PaymentsForm>")," component."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Remember that you need to wrap your application in the ",(0,o.kt)("inlineCode",{parentName:"p"},"<PaymentsForm>")," component to use all the features of the library."))),(0,o.kt)("h2",{id:"required-props"},"Required props"),(0,o.kt)("h3",{id:"applicationid"},(0,o.kt)("inlineCode",{parentName:"h3"},"applicationId")),(0,o.kt)("p",null,"Identifies the calling form with a verified application ID generated from the ",(0,o.kt)("a",{parentName:"p",href:"https://squareup.com/login?app=developer"},"Square Application Dashboard")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { PaymentsForm } from 'react-square-web-payments-form';\n\nexport default MyApp() {\n  return (\n    <PaymentsForm applicationId=\"sq0idp-Y0QZQ-Xx-Xx-Xx-Xx\">\n      <MyComponent />\n    </PaymentsForm>\n  )\n}\n")),(0,o.kt)("h3",{id:"cardtokenizeresponsereceived"},(0,o.kt)("inlineCode",{parentName:"h3"},"cardTokenizeResponseReceived()")),(0,o.kt)("p",null,"Invoked when payment form receives the result of a tokenize generation request. The result will be a valid credit card or wallet token, or an error."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { PaymentsForm } from 'react-square-web-payments-form';\n\nexport default MyApp() {\n  return (\n    <PaymentsForm\n      cardTokenizeResponseReceived={(token, verifiedBuyer) => {\n        console.info('Token:', token);\n        console.info('Verified Buyer:', verifiedBuyer);\n      }}\n    >\n      {/* ... */}\n    </PaymentsForm>\n  )\n}\n")),(0,o.kt)("h3",{id:"children"},(0,o.kt)("inlineCode",{parentName:"h3"},"children")),(0,o.kt)("p",null,"The children of the ",(0,o.kt)("inlineCode",{parentName:"p"},"<PaymentsForm>")," component."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { PaymentsForm } from 'react-square-web-payments-form';\n\nexport default MyApp(props) {\n  return (\n    <PaymentsForm {...props}>\n      <MyComponent />\n    </PaymentsForm>\n  )\n}\n")),(0,o.kt)("h3",{id:"locationid"},(0,o.kt)("inlineCode",{parentName:"h3"},"locationId")),(0,o.kt)("p",null,"Identifies the location of the merchant that is taking the payment. Obtained from the ",(0,o.kt)("a",{parentName:"p",href:"https://squareup.com/login?app=developer"},"Square Application Dashboard")," - Locations tab."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { PaymentsForm } from 'react-square-web-payments-form';\n\nexport default MyApp() {\n  return (\n    <PaymentsForm locationId=\"LID\">\n      {/* ... */}\n    </PaymentsForm>\n  )\n}\n")),(0,o.kt)("h2",{id:"required-props-for-digital-wallets"},"Required props for Digital Wallets"),(0,o.kt)("p",null,"These props applies for Apple Pay, Google Pay and Afterpay/Clearpay"),(0,o.kt)("h3",{id:"createpaymentrequest"},(0,o.kt)("inlineCode",{parentName:"h3"},"createPaymentRequest()")),(0,o.kt)("p",null,"Encapsulates the details of an Apple Pay, Google Pay, or Afterpay/Clearpay request for payment and provides a means of listening for shipping option and shipping contact changes via event listeners."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { PaymentsForm } from \'react-square-web-payments-form\';\n\nexport default MyApp() {\n  return (\n    <PaymentsForm\n      createPaymentRequest={() => ({\n        countryCode: "US",\n        currencyCode: "USD",\n        lineItems: [\n          {\n            amount: "22.15",\n            label: "Item to be purchased",\n            id: "SKU-12345",\n            imageUrl: "https://url-cdn.com/123ABC",\n            pending: true,\n            productUrl: "https://my-company.com/product-123ABC"\n          }\n        ],\n        taxLineItems: [\n          {\n            label: "State Tax",\n            amount: "8.95",\n            pending: true\n          }\n        ],\n        discounts: [\n          {\n            label: "Holiday Discount",\n            amount: "5.00",\n            pending: true\n          }\n        ],\n        requestBillingContact: false,\n        requestShippingContact: false,\n        shippingOptions: [\n          {\n            label: "Next Day",\n            amount: "15.69",\n            id: "1"\n          },\n          {\n            label: "Three Day",\n            amount: "2.00",\n            id: "2"\n          }\n        ],\n        // pending is only required if it\'s true.\n        total: {\n          amount: "41.79",\n          label: "Total",\n        },\n      })}\n    >\n      {/* ... */}\n    </PaymentsForm>\n  )\n}\n')),(0,o.kt)("h2",{id:"optional-props"},"Optional props"),(0,o.kt)("h3",{id:"createverificationdetails"},(0,o.kt)("inlineCode",{parentName:"h3"},"createVerificationDetails()")),(0,o.kt)("p",null,"If you want to make ",(0,o.kt)("strong",{parentName:"p"},"Strong Customer Authentication")," (we recommend it), you can use the verification details parameter, passed to the ",(0,o.kt)("inlineCode",{parentName:"p"},"payments.verifyBuyer()")," function, for cases in which he buyer is being charged or the card is being stored on file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { PaymentsForm } from 'react-square-web-payments-form';\n\nexport default MyApp() {\n  return (\n    <PaymentsForm\n      createVerificationDetails={() => ({\n        // You can avoid amount and currency if the intent is `STORE`\n        amount: '1.00',\n        currencyCode: 'GBP',\n        // `CHARGE` or `STORE`\n        intent: 'CHARGE',\n        billingContact: {\n          addressLines: ['123 Main Street', 'Apartment 1'],\n          familyName: 'Doe',\n          givenName: 'John',\n          email: 'jondoe@gmail.com',\n          country: 'GB',\n          phone: '3214563987',\n          region: 'LND',\n          city: 'London',\n        },\n      })}\n    >\n      {/* ... */}\n    </PaymentsForm>\n  )\n}\n")),(0,o.kt)("h3",{id:"formprops"},(0,o.kt)("inlineCode",{parentName:"h3"},"formProps")),(0,o.kt)("p",null,"The props that will be passed to the wrapper element element."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { PaymentsForm } from 'react-square-web-payments-form';\n\nexport default MyApp() {\n  return (\n    <PaymentsForm\n      formProps={{\n        className: \"my-custom-class\",\n      }}\n    >\n      {/* ... */}\n    </PaymentsForm>\n  )\n}\n")),(0,o.kt)("h3",{id:"overrides"},(0,o.kt)("inlineCode",{parentName:"h3"},"overrides")),(0,o.kt)("p",null,"Override the default payment form props. Available options are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"scriptSrc"),": The URL of the Square Payment SDK script.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { PaymentsForm } from 'react-square-web-payments-form';\n\nexport default MyApp() {\n  return (\n    <PaymentsForm\n      overrides={{\n        scriptSrc: 'https://js.squareup.com/v2/paymentform', // this is an example, not real URL\n      }}\n    >\n      {/* ... */}\n    </PaymentsForm>\n  )\n}\n")))}u.isMDXComponent=!0}}]);