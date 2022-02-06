"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[174,6035,1102],{24608:function(e,t,n){n.r(t);var a=n(67294),r=n(16823),o=n(24973);t.default=function(){return a.createElement(r.Z,{title:(0,o.I)({id:"theme.NotFound.title",message:"Page Not Found"})},a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(o.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(o.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(o.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}},58623:function(e,t,n){n.r(t),n.d(t,{default:function(){return ce}});var a=n(67294),r=n(3905),o=n(46291),i=n(16823),c=n(86010),l=n(99558),s=n(93783),u=n(55537),d=n(87462),m=function(e){return a.createElement("svg",(0,d.Z)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},v=n(24973),p=n(63366),f=n(36742),h=n(13919),b=n(18617),g="menuLinkText_1J2g",E=["items"],k=["item"],C=["item","onItemClick","activePath","level"],_=["item","onItemClick","activePath","level"],S=function e(t,n){return"link"===t.type?(0,l.Mg)(t.href,n):"category"===t.type&&t.items.some((function(t){return e(t,n)}))},x=(0,a.memo)((function(e){var t=e.items,n=(0,p.Z)(e,E);return a.createElement(a.Fragment,null,t.map((function(e,t){return a.createElement(Z,(0,d.Z)({key:t,item:e},n))})))}));function Z(e){var t=e.item,n=(0,p.Z)(e,k);return"category"===t.type?0===t.items.length?null:a.createElement(I,(0,d.Z)({item:t},n)):a.createElement(N,(0,d.Z)({item:t},n))}function I(e){var t,n=e.item,r=e.onItemClick,o=e.activePath,i=e.level,s=(0,p.Z)(e,C),u=n.items,m=n.label,v=n.collapsible,f=n.className,h=S(n,o),b=(0,l.uR)({initialState:function(){return!!v&&(!h&&n.collapsed)}}),E=b.collapsed,k=b.setCollapsed,_=b.toggleCollapsed;return function(e){var t=e.isActive,n=e.collapsed,r=e.setCollapsed,o=(0,l.D9)(t);(0,a.useEffect)((function(){t&&!o&&n&&r(!1)}),[t,o,n])}({isActive:h,collapsed:E,setCollapsed:k}),a.createElement("li",{className:(0,c.Z)(l.kM.docs.docSidebarItemCategory,l.kM.docs.docSidebarItemCategoryLevel(i),"menu__list-item",{"menu__list-item--collapsed":E},f)},a.createElement("a",(0,d.Z)({className:(0,c.Z)("menu__link",(t={"menu__link--sublist":v,"menu__link--active":v&&h},t[g]=!v,t)),onClick:v?function(e){e.preventDefault(),_()}:void 0,href:v?"#":void 0},s),m),a.createElement(l.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:E},a.createElement(x,{items:u,tabIndex:E?-1:0,onItemClick:r,activePath:o,level:i+1})))}function N(e){var t=e.item,n=e.onItemClick,r=e.activePath,o=e.level,i=(0,p.Z)(e,_),s=t.href,u=t.label,m=t.className,v=S(t,r);return a.createElement("li",{className:(0,c.Z)(l.kM.docs.docSidebarItemLink,l.kM.docs.docSidebarItemLinkLevel(o),"menu__list-item",m),key:u},a.createElement(f.Z,(0,d.Z)({className:(0,c.Z)("menu__link",{"menu__link--active":v}),"aria-current":v?"page":void 0,to:s},(0,h.Z)(s)&&{onClick:n},i),(0,h.Z)(s)?u:a.createElement("span",null,u,a.createElement(b.Z,null))))}var w="sidebar_15mo",T="sidebarWithHideableNavbar_267A",y="sidebarHidden_2kNb",M="sidebarLogo_3h0W",A="menu_Bmed",P="menuWithAnnouncementBar_2WvA",B="collapseSidebarButton_1CGd",R="collapseSidebarButtonIcon_3E-R";function L(e){var t=e.onClick;return a.createElement("button",{type:"button",title:(0,v.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,v.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,c.Z)("button button--secondary button--outline",B),onClick:t},a.createElement(m,{className:R}))}function F(e){var t,n,r=e.path,o=e.sidebar,i=e.onCollapse,s=e.isHidden,d=function(){var e=(0,l.nT)().isActive,t=(0,a.useState)(e),n=t[0],r=t[1];return(0,l.RF)((function(t){var n=t.scrollY;e&&r(0===n)}),[e]),e&&n}(),m=(0,l.LU)(),v=m.navbar.hideOnScroll,p=m.hideableSidebar;return a.createElement("div",{className:(0,c.Z)(w,(t={},t[T]=v,t[y]=s,t))},v&&a.createElement(u.Z,{tabIndex:-1,className:M}),a.createElement("nav",{className:(0,c.Z)("menu thin-scrollbar",A,(n={},n[P]=d,n))},a.createElement("ul",{className:(0,c.Z)(l.kM.docs.docSidebarMenu,"menu__list")},a.createElement(x,{items:o,activePath:r,level:1}))),p&&a.createElement(L,{onClick:i}))}var D=function(e){var t=e.toggleSidebar,n=e.sidebar,r=e.path;return a.createElement("ul",{className:(0,c.Z)(l.kM.docs.docSidebarMenu,"menu__list")},a.createElement(x,{items:n,activePath:r,onItemClick:function(){return t()},level:1}))};function H(e){return a.createElement(l.Cv,{component:D,props:e})}var U=a.memo(F),O=a.memo(H);function W(e){var t=(0,s.Z)(),n="desktop"===t||"ssr"===t,r="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(U,e),r&&a.createElement(O,e))}var V=n(90304),j=n(24608),Y="backToTopButton_35hR",q="backToTopButtonShow_18ls";function z(){var e=(0,a.useRef)(null);return{smoothScrollTop:function(){var t;e.current=(t=null,function e(){var n=document.documentElement.scrollTop;n>0&&(t=requestAnimationFrame(e),window.scrollTo(0,Math.floor(.85*n)))}(),function(){return t&&cancelAnimationFrame(t)})},cancelScrollToTop:function(){return null==e.current?void 0:e.current()}}}var J=function(){var e,t=(0,a.useState)(!1),n=t[0],r=t[1],o=(0,a.useRef)(!1),i=z(),s=i.smoothScrollTop,u=i.cancelScrollToTop;return(0,l.RF)((function(e,t){var n=e.scrollY,a=null==t?void 0:t.scrollY;if(a)if(o.current)o.current=!1;else{var i=n<a;if(i||u(),n<300)r(!1);else if(i){var c=document.documentElement.scrollHeight;n+window.innerHeight<c&&r(!0)}else r(!1)}})),(0,l.SL)((function(e){e.location.hash&&(o.current=!0,r(!1))})),a.createElement("button",{"aria-label":(0,v.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,c.Z)("clean-btn",l.kM.common.backToTopButton,Y,(e={},e[q]=n,e)),type:"button",onClick:function(){return s()}})},Q=n(5977),K={docPage:"docPage_31aa",docMainContainer:"docMainContainer_3ufF",docSidebarContainer:"docSidebarContainer_3Kbt",docMainContainerEnhanced:"docMainContainerEnhanced_3NYZ",docSidebarContainerHidden:"docSidebarContainerHidden_3pA8",collapsedDocSidebar:"collapsedDocSidebar_2JMH",expandSidebarButtonIcon:"expandSidebarButtonIcon_1naQ",docItemWrapperEnhanced:"docItemWrapperEnhanced_2vyJ"},G=n(99105);function X(e){var t,n,o,s=e.currentDocRoute,u=e.versionMetadata,d=e.children,p=u.pluginId,f=u.version,h=s.sidebar,b=h?u.docsSidebars[h]:void 0,g=(0,a.useState)(!1),E=g[0],k=g[1],C=(0,a.useState)(!1),_=C[0],S=C[1],x=(0,a.useCallback)((function(){_&&S(!1),k(!E)}),[_]);return a.createElement(i.Z,{wrapperClassName:l.kM.wrapper.docsPages,pageClassName:l.kM.page.docsDocPage,searchMetadatas:{version:f,tag:(0,l.os)(p,f)}},a.createElement("div",{className:K.docPage},a.createElement(J,null),b&&a.createElement("aside",{className:(0,c.Z)(K.docSidebarContainer,(t={},t[K.docSidebarContainerHidden]=E,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(K.docSidebarContainer)&&E&&S(!0)}},a.createElement(W,{key:h,sidebar:b,path:s.path,onCollapse:x,isHidden:_}),_&&a.createElement("div",{className:K.collapsedDocSidebar,title:(0,v.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,v.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:x,onClick:x},a.createElement(m,{className:K.expandSidebarButtonIcon}))),a.createElement("main",{className:(0,c.Z)(K.docMainContainer,(n={},n[K.docMainContainerEnhanced]=E||!b,n))},a.createElement("div",{className:(0,c.Z)("container padding-top--md padding-bottom--lg",K.docItemWrapper,(o={},o[K.docItemWrapperEnhanced]=E,o))},a.createElement(r.Zo,{components:V.Z},d)))))}var $=function(e){var t=e.route.routes,n=e.versionMetadata,r=e.location,i=t.find((function(e){return(0,Q.LX)(r.pathname,e)}));return i?a.createElement(a.Fragment,null,a.createElement(G.Z,null,a.createElement("html",{className:n.className})),a.createElement(X,{currentDocRoute:i,versionMetadata:n},(0,o.Z)(t,{versionMetadata:n}))):a.createElement(j.default,e)},ee=n(10412),te={4:["@expo/vector-icons@*","@react-native-community/masked-view@*","react-navigation@^4.4.0","react-navigation-tabs@^2.9.0","react-navigation-stack@^2.8.2","react-navigation-drawer@^2.5.0","react-native-reanimated@*","react-native-gesture-handler@*","react-native-safe-area-context@*","react-native-screens@*"],5:["@expo/vector-icons@*","@react-native-community/masked-view@*","@react-navigation/bottom-tabs@^5.11.15","@react-navigation/drawer@^5.12.9","@react-navigation/material-bottom-tabs@^5.3.19","@react-navigation/material-top-tabs@^5.3.19","@react-navigation/native@^5.9.8","@react-navigation/stack@^5.14.9","react-native-paper@^4.0.1","react-native-reanimated@*","react-native-safe-area-context@*","react-native-gesture-handler@*","react-native-screens@*","react-native-tab-view@^2.15.1"],6:["@expo/vector-icons@*","@react-native-community/masked-view@*","react-native-gesture-handler@*","react-native-pager-view@*","react-native-paper@^4.7.2","react-native-reanimated@*","react-native-safe-area-context@*","react-native-screens@*","react-native-tab-view@^3.0.0","@react-navigation/bottom-tabs@6.0.4","@react-navigation/drawer@6.1.3","@react-navigation/elements@1.0.4","@react-navigation/material-bottom-tabs@6.0.4","@react-navigation/material-top-tabs@6.0.2","@react-navigation/native-stack@6.0.5","@react-navigation/native@6.0.2","@react-navigation/stack@6.0.6"],next:[]};function ne(e){var t=function(){if(window.__reactNavigationVersion)return window.__reactNavigationVersion}(),n=e.label||document.title,a=e.code,r=e.templateId,o="next"===t?"next":t.match(/(\d+)\./)[1],i="https://snack.expo.io?platform=android&name="+encodeURIComponent(n)+"&dependencies="+encodeURIComponent(te[o].join(","))+"&hideQueryParams=true";if(r){var c=document.location.origin+"/examples/"+t+"/"+r+".js";return i+"&sourceUrl="+encodeURIComponent(c)}return i+"&code="+encodeURIComponent(a)}var ae,re='<svg width="14px" height="14px" viewBox="0 0 16 16" style="vertical-align: -1px"><g stroke="none" stroke-width="1" fill="none"><polyline stroke="currentColor" points="8.5 0.5 15.5 0.5 15.5 7.5"></polyline><path d="M8,8 L15.0710678,0.928932188" stroke="currentColor"></path><polyline stroke="currentColor" points="9.06944444 3.5 1.5 3.5 1.5 14.5 12.5 14.5 12.5 6.93055556"></polyline></g></svg>';function oe(){var e=document.querySelectorAll("samp");e.length&&e.forEach((function(e){var t=function(e){var t=e.nextElementSibling;for(t||"P"!==e.parentElement.tagName||(t=e.parentElement.nextElementSibling);t;){if("DIV"===t.tagName&&(t.className.includes("mdxCodeBlock")||t.className.includes("codeBlockContainer")))return t;t=t.nextElementSibling}}(e);if(t){var n=t.innerText,a=e.innerText,r=e.getAttribute("id"),o=document.createElement("a");o.className="snack-sample-link",o.dataset.snack=!0,o.target="_blank",o.innerHTML=a?'Try the "'+a+'" example on Snack '+re:"Try this example on Snack "+re;var i=ne({code:n,templateId:r,label:a});o.href!==i&&(o.href=i,t.insertAdjacentElement("afterend",o),e.remove())}else console.log("Code block not found for <samp> element "+e.innerText)}))}function ie(){document.querySelectorAll('a[href*="#example/"]').forEach((function(e){var t=e.href.split("#example/"),n=t[t.length-1];e.href=ne({templateId:n}),e.target="_blank"}))}var ce=function(e){return ee.default.canUseDOM?(a.useEffect((function(){window.__reactNavigationVersion=e.versionMetadata.version})),a.useEffect((function(){oe(),ie(),(ae=new MutationObserver((function(e){e.forEach(oe),e.forEach(ie)}))).observe(document.documentElement,{childList:!0,subtree:!0});var e=window.location.hash,t=document.getElementById(e.split("#").join(""));return t&&t.scrollIntoView(),function(){ae&&ae.disconnect(),ae=null}}),[]),a.createElement($,e)):null}},6979:function(e,t,n){var a=n(87462),r=n(63366),o=n(67294),i=n(73935),c=n(52263),l=n(5977),s=n(44996),u=n(36742),d=n(99105),m=n(6397),v=n(57052),p=n(16747),f=n(95613),h=n(10412),b=n(24973),g=["contextualSearch"],E=null,k=["1.x","2.x","3.x","4.x","5.x"];function C(e){var t=e.hit,n=e.children;return o.createElement(u.Z,{to:t.url},n)}function _(e){var t=e.state,n=e.onClose,a=(0,m.Z)().generateSearchPageLink;return o.createElement(u.Z,{to:a(t.query),onClick:n},"See all ",t.context.nbHits," results")}function S(e){var t,u,m,h,S=e.contextualSearch,x=(0,r.Z)(e,g),Z=(0,c.Z)().siteMetadata,I=(0,f.Z)(),N=null!=(t=null==(u=x.searchParameters)?void 0:u.facetFilters)?t:[],w=S?[].concat(I,N):N,T=(m=window.location.href,(h=k.findIndex((function(e){return m.includes(e)})))>=0?k[h]:"6.x");w=[].concat(w,["version:"+T]);var y=Object.assign({},x.searchParameters,{facetFilters:w}),M=(0,s.C)().withBaseUrl,A=(0,l.k6)(),P=(0,o.useRef)(null),B=(0,o.useRef)(null),R=(0,o.useState)(!1),L=R[0],F=R[1],D=(0,o.useState)(null),H=D[0],U=D[1],O=(0,o.useCallback)((function(){return E?Promise.resolve():Promise.all([n.e(4300).then(n.bind(n,44300)),Promise.all([n.e(532),n.e(6945)]).then(n.bind(n,46945)),Promise.all([n.e(532),n.e(9846)]).then(n.bind(n,9846))]).then((function(e){var t=e[0].DocSearchModal;E=t}))}),[]),W=(0,o.useCallback)((function(){O().then((function(){P.current=document.createElement("div"),document.body.insertBefore(P.current,document.body.firstChild),F(!0)}))}),[O,F]),V=(0,o.useCallback)((function(){F(!1),P.current.remove()}),[F]),j=(0,o.useCallback)((function(e){O().then((function(){F(!0),U(e.key)}))}),[O,F,U]),Y=(0,o.useRef)({navigate:function(e){var t=e.itemUrl;A.push(t)}}).current,q=(0,o.useRef)((function(e){return e.map((function(e){var t=document.createElement("a");return t.href=e.url,Object.assign({},e,{url:M(""+t.pathname+t.hash)})}))})).current,z=(0,o.useMemo)((function(){return function(e){return o.createElement(_,(0,a.Z)({},e,{onClose:V}))}}),[V]),J=(0,o.useCallback)((function(e){return e.addAlgoliaAgent("docusaurus",Z.docusaurusVersion),e}),[Z.docusaurusVersion]);(0,v.D)({isOpen:L,onOpen:W,onClose:V,onInput:j,searchButtonRef:B});var Q=(0,b.I)({id:"theme.SearchBar.label",message:"Search",description:"The ARIA label and placeholder for search button"});return o.createElement(o.Fragment,null,o.createElement(d.Z,null,o.createElement("link",{rel:"preconnect",href:"https://"+x.appId+"-dsn.algolia.net",crossOrigin:"anonymous"})),o.createElement(p.a,{onTouchStart:O,onFocus:O,onMouseOver:O,onClick:W,ref:B,translations:{buttonText:Q,buttonAriaLabel:Q}}),L&&(0,i.createPortal)(o.createElement(E,(0,a.Z)({onClose:V,initialScrollY:window.scrollY,initialQuery:H,navigator:Y,transformItems:q,hitComponent:C,resultsFooterComponent:z,transformSearchClient:J},x,{searchParameters:y})),P.current))}t.Z=function(){if(!h.default.canUseDOM)return null;var e=(0,c.Z)().siteConfig;return o.createElement(S,e.themeConfig.algolia)}}}]);