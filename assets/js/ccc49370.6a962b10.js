"use strict";(self.webpackChunk_weareseeed_react_square_payments_docs=self.webpackChunk_weareseeed_react_square_payments_docs||[]).push([[103],{2213:function(e,t,a){a.d(t,{Z:function(){return Z}});var n=a(3366),r=a(7294),l=a(6010),i=a(3748),o=a(3699),c=a(7325),s="sidebar_TMXw",m="sidebarItemTitle_V4zb",u="sidebarItemList_uHd5",d="sidebarItem_spIe",g="sidebarItemLink_eqrF",v="sidebarItemLinkActive_XZSJ";function f(e){var t=e.sidebar;return r.createElement("aside",{className:"col col--3"},r.createElement("nav",{className:(0,l.Z)(s,"thin-scrollbar"),"aria-label":(0,c.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,l.Z)(m,"margin-bottom--md")},t.title),r.createElement("ul",{className:(0,l.Z)(u,"clean-list")},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:d},r.createElement(o.Z,{isNavLink:!0,to:e.permalink,className:g,activeClassName:v},e.title))})))))}var p=a(3086);function h(e){var t=e.sidebar;return r.createElement("ul",{className:"menu__list"},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:"menu__list-item"},r.createElement(o.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title))})))}function b(e){return r.createElement(p.Zo,{component:h,props:e})}var E=a(3488);function _(e){var t=e.sidebar,a=(0,E.i)();return null!=t&&t.items.length?"mobile"===a?r.createElement(b,{sidebar:t}):r.createElement(f,{sidebar:t}):null}var N=["sidebar","toc","children"];function Z(e){var t=e.sidebar,a=e.toc,o=e.children,c=(0,n.Z)(e,N),s=t&&t.items.length>0;return r.createElement(i.Z,c,r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},r.createElement(_,{sidebar:t}),r.createElement("main",{className:(0,l.Z)("col",{"col--7":s,"col--9 col--offset-1":!s}),itemScope:!0,itemType:"http://schema.org/Blog"},o),a&&r.createElement("div",{className:"col col--2"},a))))}},5917:function(e,t,a){a.d(t,{Z:function(){return Z}});var n=a(7294),r=a(6010),l=a(7325),i=a(3699),o=a(9524),c=a(3777),s=a(3905),m=a(4841),u=a(34),d="blogPostTitle_rzP5",g="blogPostData_Zg1s",v="blogPostDetailsFull_h6_j",f=a(5907);function p(e){return e.href?n.createElement(i.Z,e):n.createElement(n.Fragment,null,e.children)}function h(e){var t=e.author,a=t.name,r=t.title,l=t.url,i=t.imageURL,o=t.email,c=l||o&&"mailto:"+o||void 0;return n.createElement("div",{className:"avatar margin-bottom--sm"},i&&n.createElement(p,{href:c,className:"avatar__photo-link"},n.createElement("img",{className:"avatar__photo",src:i,alt:a})),a&&n.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},n.createElement("div",{className:"avatar__name"},n.createElement(p,{href:c,itemProp:"url"},n.createElement("span",{itemProp:"name"},a))),r&&n.createElement("small",{className:"avatar__subtitle",itemProp:"description"},r)))}var b="authorCol_FlmR",E="imageOnlyAuthorRow_trpF",_="imageOnlyAuthorCol_S2np";function N(e){var t=e.authors,a=e.assets;if(0===t.length)return null;var l=t.every((function(e){return!e.name}));return n.createElement("div",{className:(0,r.Z)("margin-top--md margin-bottom--sm",l?E:"row")},t.map((function(e,t){var i;return n.createElement("div",{className:(0,r.Z)(!l&&"col col--6",l?_:b),key:t},n.createElement(h,{author:Object.assign({},e,{imageURL:null!=(i=a.authorsImageUrls[t])?i:e.imageURL})}))})))}function Z(e){var t,a,p=(a=(0,c.c)().selectMessage,function(e){var t=Math.ceil(e);return a(t,(0,l.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),h=(0,o.C)().withBaseUrl,b=e.children,E=e.frontMatter,_=e.assets,Z=e.metadata,k=e.truncated,L=e.isBlogPostPage,x=void 0!==L&&L,P=Z.date,y=Z.formattedDate,C=Z.permalink,H=Z.tags,I=Z.readingTime,w=Z.title,T=Z.editUrl,A=Z.authors,M=null!=(t=_.image)?t:E.image,O=!x&&k,R=H.length>0,F=x?"h1":"h2";return n.createElement("article",{className:x?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},n.createElement("header",null,n.createElement(F,{className:d,itemProp:"headline"},x?w:n.createElement(i.Z,{itemProp:"url",to:C},w)),n.createElement("div",{className:(0,r.Z)(g,"margin-vert--md")},n.createElement("time",{dateTime:P,itemProp:"datePublished"},y),void 0!==I&&n.createElement(n.Fragment,null," \xb7 ",p(I))),n.createElement(N,{authors:A,assets:_})),M&&n.createElement("meta",{itemProp:"image",content:h(M,{absolute:!0})}),n.createElement("div",{id:x?s.blogPostContainerID:void 0,className:"markdown",itemProp:"articleBody"},n.createElement(m.Z,null,b)),(R||k)&&n.createElement("footer",{className:(0,r.Z)("row docusaurus-mt-lg",x&&v)},R&&n.createElement("div",{className:(0,r.Z)("col",{"col--9":O})},n.createElement(f.Z,{tags:H})),x&&T&&n.createElement("div",{className:"col margin-top--sm"},n.createElement(u.Z,{editUrl:T})),O&&n.createElement("div",{className:(0,r.Z)("col text--right",{"col--3":R})},n.createElement(i.Z,{to:Z.permalink,"aria-label":(0,l.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:w})},n.createElement("b",null,n.createElement(l.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},4532:function(e,t,a){a.r(t),a.d(t,{default:function(){return p}});var n=a(7294),r=a(2213),l=a(5917),i=a(7462),o=a(7325),c=a(8115);function s(e){var t=e.nextItem,a=e.prevItem;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,o.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},a&&n.createElement(c.Z,(0,i.Z)({},a,{subLabel:n.createElement(o.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")})),t&&n.createElement(c.Z,(0,i.Z)({},t,{subLabel:n.createElement(o.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post"),isNext:!0})))}var m=a(5463),u=a(3702),d=a(9260),g=a(6010);function v(e){var t,a=e.content,r=a.assets,l=a.metadata,i=l.title,o=l.description,c=l.date,s=l.tags,u=l.authors,d=l.frontMatter,g=d.keywords,v=null!=(t=r.image)?t:d.image;return n.createElement(m.d,{title:i,description:o,keywords:g,image:v},n.createElement("meta",{property:"og:type",content:"article"}),n.createElement("meta",{property:"article:published_time",content:c}),u.some((function(e){return e.url}))&&n.createElement("meta",{property:"article:author",content:u.map((function(e){return e.url})).filter(Boolean).join(",")}),s.length>0&&n.createElement("meta",{property:"article:tag",content:s.map((function(e){return e.label})).join(",")}))}function f(e){var t=e.content,a=e.sidebar,i=t.assets,o=t.metadata,c=o.nextItem,m=o.prevItem,u=o.frontMatter,g=u.hide_table_of_contents,v=u.toc_min_heading_level,f=u.toc_max_heading_level;return n.createElement(r.Z,{sidebar:a,toc:!g&&t.toc&&t.toc.length>0?n.createElement(d.Z,{toc:t.toc,minHeadingLevel:v,maxHeadingLevel:f}):void 0},n.createElement(l.Z,{frontMatter:u,assets:i,metadata:o,isBlogPostPage:!0},n.createElement(t,null)),(c||m)&&n.createElement(s,{nextItem:c,prevItem:m}))}function p(e){return n.createElement(m.FG,{className:(0,g.Z)(u.k.wrapper.blogPages,u.k.page.blogPostPage)},n.createElement(v,e),n.createElement(f,e))}},34:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(7294),r=a(7325),l=a(7462),i=a(3366),o=a(6010),c="iconEdit_dcUD",s=["className"];function m(e){var t=e.className,a=(0,i.Z)(e,s);return n.createElement("svg",(0,l.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,o.Z)(c,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}var u=a(3702);function d(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:u.k.common.editThisPage},n.createElement(m,null),n.createElement(r.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},8115:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(7294),r=a(6010),l=a(3699);function i(e){var t=e.permalink,a=e.title,i=e.subLabel,o=e.isNext;return n.createElement(l.Z,{className:(0,r.Z)("pagination-nav__link",o?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},i&&n.createElement("div",{className:"pagination-nav__sublabel"},i),n.createElement("div",{className:"pagination-nav__label"},a))}},9260:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(7462),r=a(3366),l=a(7294),i=a(6010),o=a(3651),c="tableOfContents_cNA8",s=["className"];function m(e){var t=e.className,a=(0,r.Z)(e,s);return l.createElement("div",{className:(0,i.Z)(c,"thin-scrollbar",t)},l.createElement(o.Z,(0,n.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},3651:function(e,t,a){a.d(t,{Z:function(){return h}});var n=a(7462),r=a(3366),l=a(7294);function i(e){var t=e.toc,a=e.className,n=e.linkClassName,r=e.isChild;return t.length?l.createElement("ul",{className:r?void 0:a},t.map((function(e){return l.createElement("li",{key:e.id},l.createElement("a",{href:"#"+e.id,className:null!=n?n:void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(i,{isChild:!0,toc:e.children,className:a,linkClassName:n}))}))):null}var o=l.memo(i),c=["parentIndex"];function s(e){var t=e.map((function(e){return Object.assign({},e,{parentIndex:-1,children:[]})})),a=Array(7).fill(-1);t.forEach((function(e,t){var n=a.slice(2,e.level);e.parentIndex=Math.max.apply(Math,n),a[e.level]=t}));var n=[];return t.forEach((function(e){var a=e.parentIndex,l=(0,r.Z)(e,c);a>=0?t[a].children.push(l):n.push(l)})),n}function m(e){var t=e.toc,a=e.minHeadingLevel,n=e.maxHeadingLevel;return t.flatMap((function(e){var t=m({toc:e.children,minHeadingLevel:a,maxHeadingLevel:n});return function(e){return e.level>=a&&e.level<=n}(e)?[Object.assign({},e,{children:t})]:t}))}var u=a(107);function d(e){var t=e.getBoundingClientRect();return t.top===t.bottom?d(e.parentNode):t}function g(e,t){var a,n,r=t.anchorTopOffset,l=e.find((function(e){return d(e).top>=r}));return l?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(d(l))?l:null!=(n=e[e.indexOf(l)-1])?n:null:null!=(a=e[e.length-1])?a:null}function v(){var e=(0,l.useRef)(0),t=(0,u.L)().navbar.hideOnScroll;return(0,l.useEffect)((function(){e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function f(e){var t=(0,l.useRef)(void 0),a=v();(0,l.useEffect)((function(){if(!e)return function(){};var n=e.linkClassName,r=e.linkActiveClassName,l=e.minHeadingLevel,i=e.maxHeadingLevel;function o(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(n),o=function(e){for(var t=e.minHeadingLevel,a=e.maxHeadingLevel,n=[],r=t;r<=a;r+=1)n.push("h"+r+".anchor");return Array.from(document.querySelectorAll(n.join()))}({minHeadingLevel:l,maxHeadingLevel:i}),c=g(o,{anchorTopOffset:a.current}),s=e.find((function(e){return c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,a){if(a){var n;t.current&&t.current!==e&&(null==(n=t.current)||n.classList.remove(r)),e.classList.add(r),t.current=e}else e.classList.remove(r)}(e,e===s)}))}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),function(){document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}),[e,a])}var p=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function h(e){var t=e.toc,a=e.className,i=void 0===a?"table-of-contents table-of-contents__left-border":a,c=e.linkClassName,d=void 0===c?"table-of-contents__link":c,g=e.linkActiveClassName,v=void 0===g?void 0:g,h=e.minHeadingLevel,b=e.maxHeadingLevel,E=(0,r.Z)(e,p),_=(0,u.L)(),N=null!=h?h:_.tableOfContents.minHeadingLevel,Z=null!=b?b:_.tableOfContents.maxHeadingLevel,k=function(e){var t=e.toc,a=e.minHeadingLevel,n=e.maxHeadingLevel;return(0,l.useMemo)((function(){return m({toc:s(t),minHeadingLevel:a,maxHeadingLevel:n})}),[t,a,n])}({toc:t,minHeadingLevel:N,maxHeadingLevel:Z});return f((0,l.useMemo)((function(){if(d&&v)return{linkClassName:d,linkActiveClassName:v,minHeadingLevel:N,maxHeadingLevel:Z}}),[d,v,N,Z])),l.createElement(o,(0,n.Z)({toc:k,className:i,linkClassName:d},E))}},6363:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(7294),r=a(6010),l=a(3699),i="tag_hD8n",o="tagRegular_D6E_",c="tagWithCount_i0QQ";function s(e){var t=e.permalink,a=e.label,s=e.count;return n.createElement(l.Z,{href:t,className:(0,r.Z)(i,s?c:o)},a,s&&n.createElement("span",null,s))}},5907:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(7294),r=a(6010),l=a(7325),i=a(6363),o="tags_XVD_",c="tag_JSN8";function s(e){var t=e.tags;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(l.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,r.Z)(o,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return n.createElement("li",{key:a,className:c},n.createElement(i.Z,{label:t,permalink:a}))}))))}},3777:function(e,t,a){a.d(t,{c:function(){return s}});var n=a(7294),r=a(9962),l=["zero","one","two","few","many","other"];function i(e){return l.filter((function(t){return e.includes(t)}))}var o={locale:"en",pluralForms:i(["one","other"]),select:function(e){return 1===e?"one":"other"}};function c(){var e=(0,r.Z)().i18n.currentLocale;return(0,n.useMemo)((function(){try{return t=e,a=new Intl.PluralRules(t),{locale:t,pluralForms:i(a.resolvedOptions().pluralCategories),select:function(e){return a.select(e)}}}catch(n){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+n.message+"\n"),o}var t,a}),[e])}function s(){var e=c();return{selectMessage:function(t,a){return function(e,t,a){var n=e.split("|");if(1===n.length)return n[0];n.length>a.pluralForms.length&&console.error("For locale="+a.locale+", a maximum of "+a.pluralForms.length+" plural forms are expected ("+a.pluralForms+"), but the message contains "+n.length+": "+e);var r=a.select(t),l=a.pluralForms.indexOf(r);return n[Math.min(l,n.length-1)]}(a,t,e)}}}}}]);