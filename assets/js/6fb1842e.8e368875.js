"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3348],{3905:function(e,r,t){t.d(r,{Zo:function(){return l},kt:function(){return m}});var n=t(7294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=n.createContext({}),c=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},l=function(e){var r=c(e.components);return n.createElement(u.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),f=c(t),m=i,d=f["".concat(u,".").concat(m)]||f[m]||s[m]||a;return t?n.createElement(d,o(o({ref:r},l),{},{components:t})):n.createElement(d,o({ref:r},l))}));function m(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=f;var p={};for(var u in r)hasOwnProperty.call(r,u)&&(p[u]=r[u]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var c=2;c<a;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},4835:function(e,r,t){t.r(r),t.d(r,{assets:function(){return l},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return s}});var n=t(7462),i=t(3366),a=(t(7294),t(3905)),o=["components"],p={id:"recipe-index",title:"\u6280\u5de7\uff1a\u76ee\u5f55",hide_title:!1},u="\u6280\u5de7",c={unversionedId:"recipes/recipe-index",id:"recipes/recipe-index",title:"\u6280\u5de7\uff1a\u76ee\u5f55",description:"\u8fd9\u4e00\u7ae0\u662f\u5173\u4e8e\u5b9e\u73b0\u5e94\u7528\u5f00\u53d1\u4e2d\u4f1a\u9047\u5230\u7684\u4e00\u4e9b\u5178\u578b\u573a\u666f\u548c\u4ee3\u7801\u7247\u6bb5\u3002\u672c\u7ae0\u5185\u5bb9\u5efa\u7acb\u5728\u4f60\u5df2\u7ecf\u5b66\u4f1a Redux \u6df1\u5165\u6d45\u51fa\u6559\u7a0b \u7684\u57fa\u7840\u4e0a\u3002",source:"@site/../docs/recipes/README.md",sourceDirName:"recipes",slug:"/recipes/",permalink:"/recipes/",draft:!1,tags:[],version:"current",frontMatter:{id:"recipe-index",title:"\u6280\u5de7\uff1a\u76ee\u5f55",hide_title:!1},sidebar:"docs",previous:{title:"Modern Redux with Redux Toolkit",permalink:"/tutorials/fundamentals/part-8-modern-redux"},next:{title:"Configuring Your Store",permalink:"/recipes/configuring-your-store"}},l={},s=[],f={toc:s};function m(e){var r=e.components,t=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u6280\u5de7"},"\u6280\u5de7"),(0,a.kt)("p",null,"\u8fd9\u4e00\u7ae0\u662f\u5173\u4e8e\u5b9e\u73b0\u5e94\u7528\u5f00\u53d1\u4e2d\u4f1a\u9047\u5230\u7684\u4e00\u4e9b\u5178\u578b\u573a\u666f\u548c\u4ee3\u7801\u7247\u6bb5\u3002\u672c\u7ae0\u5185\u5bb9\u5efa\u7acb\u5728\u4f60\u5df2\u7ecf\u5b66\u4f1a ",(0,a.kt)("a",{parentName:"p",href:"/tutorials/fundamentals/part-1-overview"},"Redux \u6df1\u5165\u6d45\u51fa\u6559\u7a0b")," \u7684\u57fa\u7840\u4e0a\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/recipes/configuring-your-store"},"\u914d\u7f6e Store")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/recipes/usage-with-typescript"},"\u642d\u914d TypeScript")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/recipes/migrating-to-redux"},"\u8fc1\u79fb\u5230 Redux")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/recipes/using-object-spread-operator"},"\u4f7f\u7528\u5bf9\u8c61\u5c55\u5f00\u8fd0\u7b97\u7b26")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/recipes/reducing-boilerplate"},"\u51cf\u5c11\u6837\u677f\u4ee3\u7801")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/recipes/server-rendering"},"\u670d\u52a1\u7aef\u6e32\u67d3")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/recipes/writing-tests"},"\u7f16\u5199\u6d4b\u8bd5")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/recipes/computing-derived-data"},"\u8ba1\u7b97\u884d\u751f\u6570\u636e")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/recipes/implementing-undo-history"},"\u5b9e\u73b0\u64a4\u9500\u91cd\u505a")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/recipes/isolating-redux-sub-apps"},"\u5b50\u5e94\u7528\u9694\u79bb")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/recipes/code-splitting"},"\u4ee3\u7801\u5206\u5272")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/recipes/troubleshooting"},"\u8c03\u8bd5")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/recipes/structuring-reducers/structuring-reducers"},"\u7ec4\u7ec7 Reducers"))))}m.isMDXComponent=!0}}]);