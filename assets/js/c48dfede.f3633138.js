"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6583],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),o=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=o(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,u=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=o(r),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||u;return r?n.createElement(f,c(c({ref:t},l),{},{components:r})):n.createElement(f,c({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var u=r.length,c=new Array(u);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var o=2;o<u;o++)c[o]=r[o];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9537:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return p}});var n=r(7462),a=r(3366),u=(r(7294),r(3905)),c=["components"],i={id:"basic-reducer-structure",title:"Reducer \u7684\u57fa\u672c\u7ed3\u6784",sidebar_label:"Reducer \u7684\u57fa\u672c\u7ed3\u6784",description:"\u7ec4\u7ec7 Reducers > Reducer \u7684\u57fa\u672c\u7ed3\u6784: reducer \u51fd\u6570\u548c Redux state \u662f\u5982\u4f55\u534f\u540c\u5de5\u4f5c\u7684"},s="Reducer \u548c State \u7684\u57fa\u672c\u7ed3\u6784",o={unversionedId:"usage/structuring-reducers/basic-reducer-structure",id:"usage/structuring-reducers/basic-reducer-structure",title:"Reducer \u7684\u57fa\u672c\u7ed3\u6784",description:"\u7ec4\u7ec7 Reducers > Reducer \u7684\u57fa\u672c\u7ed3\u6784: reducer \u51fd\u6570\u548c Redux state \u662f\u5982\u4f55\u534f\u540c\u5de5\u4f5c\u7684",source:"@site/../docs/usage/structuring-reducers/BasicReducerStructure.md",sourceDirName:"usage/structuring-reducers",slug:"/usage/structuring-reducers/basic-reducer-structure",permalink:"/usage/structuring-reducers/basic-reducer-structure",draft:!1,tags:[],version:"current",frontMatter:{id:"basic-reducer-structure",title:"Reducer \u7684\u57fa\u672c\u7ed3\u6784",sidebar_label:"Reducer \u7684\u57fa\u672c\u7ed3\u6784",description:"\u7ec4\u7ec7 Reducers > Reducer \u7684\u57fa\u672c\u7ed3\u6784: reducer \u51fd\u6570\u548c Redux state \u662f\u5982\u4f55\u534f\u540c\u5de5\u4f5c\u7684"},sidebar:"docs",previous:{title:"Reducer \u5fc5\u5907\u6982\u5ff5",permalink:"/usage/structuring-reducers/prerequisite-concepts"},next:{title:"\u62c6\u5206 Reducer \u903b\u8f91",permalink:"/usage/structuring-reducers/splitting-reducer-logic"}},l={},p=[{value:"Reducer \u7684\u57fa\u672c\u7ed3\u6784",id:"reducer-\u7684\u57fa\u672c\u7ed3\u6784",level:2},{value:"State \u7684\u57fa\u672c\u7ed3\u6784",id:"state-\u7684\u57fa\u672c\u7ed3\u6784",level:2}],d={toc:p};function m(e){var t=e.components,r=(0,a.Z)(e,c);return(0,u.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("h1",{id:"reducer-\u548c-state-\u7684\u57fa\u672c\u7ed3\u6784"},"Reducer \u548c State \u7684\u57fa\u672c\u7ed3\u6784"),(0,u.kt)("h2",{id:"reducer-\u7684\u57fa\u672c\u7ed3\u6784"},"Reducer \u7684\u57fa\u672c\u7ed3\u6784"),(0,u.kt)("p",null,"\u9996\u5148\u5fc5\u987b\u660e\u786e\u7684\u662f\uff0c\u6574\u4e2a\u5e94\u7528\u53ea\u6709\u4e00\u4e2a",(0,u.kt)("strong",{parentName:"p"},"\u5355\u4e00\u7684 reducer \u51fd\u6570"),"\uff1a\u8fd9\u4e2a\u51fd\u6570\u662f\u4f20\u7ed9 ",(0,u.kt)("inlineCode",{parentName:"p"},"createStore")," \u7684\u7b2c\u4e00\u4e2a\u53c2\u6570\u3002\u4e00\u4e2a\u5355\u4e00\u7684 reducer \u6700\u7ec8\u9700\u8981\u505a\u4ee5\u4e0b\u51e0\u4ef6\u4e8b\uff1a"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"reducer \u7b2c\u4e00\u6b21\u88ab\u8c03\u7528\u7684\u65f6\u5019\uff0c",(0,u.kt)("inlineCode",{parentName:"li"},"state")," \u7684\u503c\u662f ",(0,u.kt)("inlineCode",{parentName:"li"},"undefined"),"\u3002reducer \u9700\u8981\u5728 action \u4f20\u5165\u4e4b\u524d\u63d0\u4f9b\u4e00\u4e2a\u9ed8\u8ba4\u7684 state \u6765\u5904\u7406\u8fd9\u79cd\u60c5\u51b5\u3002"),(0,u.kt)("li",{parentName:"ul"},"reducer \u9700\u8981\u5148\u524d\u7684 state \u548c dispatch \u7684 action \u6765\u51b3\u5b9a\u9700\u8981\u505a\u4ec0\u4e48\u4e8b\u3002"),(0,u.kt)("li",{parentName:"ul"},"\u5047\u8bbe\u9700\u8981\u66f4\u6539\u6570\u636e\uff0c\u5e94\u8be5\u7528\u66f4\u65b0\u540e\u7684\u6570\u636e\u521b\u5efa\u65b0\u7684\u5bf9\u8c61\u6216\u6570\u7ec4\u5e76\u8fd4\u56de\u5b83\u4eec\u3002"),(0,u.kt)("li",{parentName:"ul"},"\u5982\u679c\u6ca1\u6709\u4ec0\u4e48\u66f4\u6539\uff0c\u5e94\u8be5\u8fd4\u56de\u5f53\u524d\u5b58\u5728\u7684 state \u672c\u8eab\u3002")),(0,u.kt)("p",null,"\u5199 reducer \u6700\u7b80\u5355\u7684\u65b9\u5f0f\u662f\u628a\u6240\u6709\u7684\u903b\u8f91\u653e\u5728\u4e00\u4e2a\u5355\u72ec\u7684\u51fd\u6570\u58f0\u660e\u4e2d\uff0c\u5c31\u50cf\u8fd9\u6837\uff1a"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-js"},"function counter(state, action) {\n  if (typeof state === 'undefined') {\n    state = 0 // \u5982\u679c state \u662f undefined\uff0c\u7528\u8fd9\u4e2a\u9ed8\u8ba4\u503c\u521d\u59cb\u5316 store\n  }\n\n  if (action.type === 'INCREMENT') {\n    return state + 1\n  } else if (action.type === 'DECREMENT') {\n    return state - 1\n  } else {\n    return state // \u672a\u8bc6\u522b action \u4f1a\u7ecf\u8fc7\u8fd9\u91cc\n  }\n}\n")),(0,u.kt)("p",null,"\u8fd9\u4e2a\u7b80\u5355\u7684\u51fd\u6570\u6ee1\u8db3\u4e0a\u9762\u63d0\u5230\u7684\u6240\u6709\u57fa\u672c\u8981\u6c42\u3002\u5728\u6700\u5f00\u59cb\u4f1a\u8fd4\u56de\u4e00\u4e2a\u9ed8\u8ba4\u7684\u503c\u521d\u59cb\u5316 store\uff1b\u6839\u636e action \u7684 type \u51b3\u5b9a state \u662f\u54ea\u79cd\u7c7b\u578b\u7684\u66f4\u65b0\uff0c\u6700\u540e\u8fd4\u56de\u65b0\u7684 state\uff1b\u5982\u679c\u6ca1\u6709\u4ec0\u4e48\u8981\u53d1\u751f\uff0c\u4f1a\u8fd4\u56de\u5148\u524d\u7684 state\u3002"),(0,u.kt)("p",null,"\u8fd9\u91cc\u6709\u4e00\u4e9b\u5bf9\u8fd9\u4e2a reducer \u7684\u7b80\u5355\u8c03\u6574\u3002\u9996\u5148\uff0c\u91cd\u590d\u7684 ",(0,u.kt)("inlineCode",{parentName:"p"},"if/else")," \u8bed\u53e5\u770b\u4e0a\u53bb\u662f\u5f88\u70e6\u4eba\u7684\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,u.kt)("inlineCode",{parentName:"p"},"switch")," \u8bed\u53e5\u4ee3\u66ff\u4ed6\u3002\u5176\u6b21\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 ES6 \u7684\u9ed8\u8ba4\u53c2\u6570\u6765\u5904\u7406\u521d\u59cb state \u4e0d\u5b58\u5728\u7684\u60c5\u51b5\u3002\u6709\u4e86\u8fd9\u4e9b\u53d8\u5316\uff0creducer \u770b\u4e0a\u53bb\u4f1a\u957f\u6210\u8fd9\u6837\uff1a"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-js"},"function counter(state = 0, action) {\n  switch (action.type) {\n    case 'INCREMENT':\n      return state + 1\n    case 'DECREMENT':\n      return state - 1\n    default:\n      return state\n  }\n}\n")),(0,u.kt)("p",null,"\u8fd9\u662f\u5178\u578b Redux reducer \u51fd\u6570\u7684\u57fa\u672c\u7ed3\u6784\u3002"),(0,u.kt)("h2",{id:"state-\u7684\u57fa\u672c\u7ed3\u6784"},"State \u7684\u57fa\u672c\u7ed3\u6784"),(0,u.kt)("p",null,'Redux \u9f13\u52b1\u4f60\u6839\u636e\u8981\u7ba1\u7406\u7684\u6570\u636e\u6765\u601d\u8003\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f\u3002\u4efb\u4f55\u7ed9\u5b9a\u65f6\u95f4\u70b9\u7684\u6570\u636e\u5c31\u662f\u4f60\u5e94\u7528\u7684 "',(0,u.kt)("em",{parentName:"p"},"state"),'"\uff0cstate \u7684\u7ed3\u6784\u548c\u7ec4\u7ec7\u65b9\u5f0f\u901a\u5e38\u4f1a\u79f0\u4e3a "',(0,u.kt)("em",{parentName:"p"},"shape"),'"\u3002\u5728\u4f60\u6784\u5efa reducer \u7684\u903b\u8f91\u65f6\uff0cstate \u7684 shape \u901a\u5e38\u626e\u6f14\u4e00\u4e2a\u91cd\u8981\u7684\u89d2\u8272\u3002'),(0,u.kt)("p",null,'Redux state \u4e2d\u9876\u5c42\u7684 state \u6811\u901a\u5e38\u662f\u4e00\u4e2a\u666e\u901a\u7684 JavaScript \u5bf9\u8c61\uff08\u5f53\u7136\u4e5f\u53ef\u4ee5\u662f\u5176\u4ed6\u7c7b\u578b\u7684\u6570\u636e\uff0c\u6bd4\u5982\uff1a\u6570\u5b57\u3001\u6570\u7ec4\u6216\u8005\u5176\u4ed6\u4e13\u95e8\u7684\u6570\u636e\u7ed3\u6784\uff0c\u4f46\u5927\u591a\u6570\u5e93\u7684\u9876\u5c42\u503c\u90fd\u662f\u4e00\u4e2a\u666e\u901a\u5bf9\u8c61\uff09\u3002\u5728\u9876\u5c42\u5bf9\u8c61\u4e2d\u7ec4\u7ec7\u6570\u636e\u6700\u5e38\u89c1\u7684\u65b9\u5f0f\u662f\u5c06\u6570\u636e\u5212\u5206\u4e3a\u5b50\u6811\uff0c\u6bcf\u4e2a\u9876\u5c42\u7684 key \u5bf9\u5e94\u7740\u548c\u7279\u5b9a\u57df\u6216\u8005 "slice" \u76f8\u5173\u8054\u7684\u6570\u636e\u3002\u4f8b\u5982\uff0cTodo \u5e94\u7528\u7684 state \u901a\u5e38\u957f\u8fd9\u6837\uff1a'),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-js"},"{\n  visibilityFilter: 'SHOW_ALL',\n  todos: [\n    {\n      text: 'Consider using Redux',\n      completed: true,\n    },\n    {\n      text: 'Keep all state in a single tree',\n      completed: false\n    }\n  ]\n}\n")),(0,u.kt)("p",null,"\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c",(0,u.kt)("inlineCode",{parentName:"p"},"todos")," \u548c ",(0,u.kt)("inlineCode",{parentName:"p"},"visibilityFilter"),' \u90fd\u662f state \u7684\u9876\u5c42 Key\uff0c\u4ed6\u4eec\u5206\u522b\u4ee3\u8868\u7740\u4e00\u4e2a\u67d0\u4e2a\u7279\u5b9a\u6982\u5ff5\u7684 "slice"\u3002'),(0,u.kt)("p",null,"\u5927\u591a\u6570\u5e94\u7528\u4f1a\u5904\u7406\u591a\u79cd\u6570\u636e\u7c7b\u578b\uff0c\u901a\u5e38\u53ef\u4ee5\u5206\u4e3a\u4ee5\u4e0b\u4e09\u7c7b\uff1a"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"\u57df\u6570\u636e\uff08",(0,u.kt)("em",{parentName:"li"},"Domain data"),'\uff09: \u5e94\u7528\u9700\u8981\u5c55\u793a\u3001\u4f7f\u7528\u6216\u8005\u4fee\u6539\u7684\u6570\u636e\uff08\u6bd4\u5982 "\u4ece\u670d\u52a1\u5668\u68c0\u7d22\u5230\u7684\u6240\u6709 todos ")'),(0,u.kt)("li",{parentName:"ul"},"\u5e94\u7528\u72b6\u6001\uff08",(0,u.kt)("em",{parentName:"li"},"App state"),"\uff09: \u7279\u5b9a\u4e8e\u5e94\u7528\u67d0\u4e2a\u884c\u4e3a\u7684\u6570\u636e\uff08\u6bd4\u5982 \u201cTodo #5 \u662f\u73b0\u5728\u9009\u62e9\u7684\u72b6\u6001\u201d\uff0c\u6216\u8005 \u201c\u6b63\u5728\u8fdb\u884c\u4e00\u4e2a\u83b7\u53d6 Todos \u7684\u8bf7\u6c42\u201d\uff09"),(0,u.kt)("li",{parentName:"ul"},"UI \u72b6\u6001\uff08",(0,u.kt)("em",{parentName:"li"},"UI state"),"\uff09: \u63a7\u5236 UI \u5982\u4f55\u5c55\u793a\u7684\u6570\u636e\uff08\u6bd4\u5982 \u201c\u7f16\u5199 TODO \u6a21\u578b\u7684\u5f39\u7a97\u73b0\u5728\u662f\u5c55\u5f00\u7684\u201d\uff09")),(0,u.kt)("p",null,"Store \u4ee3\u8868\u7740\u5e94\u7528\u6838\u5fc3\uff0c\u4f60\u5e94\u8be5",(0,u.kt)("strong",{parentName:"p"},"\u7528\u57df\u6570\u636e\uff08Domain data\uff09\u548c\u5e94\u7528\u72b6\u6001\u6570\u636e\uff08App state\uff09\u5b9a\u4e49 State\uff0c\u800c\u4e0d\u662f\u7528 UI \u7ec4\u4ef6\u6811\uff08UI state\uff09"),"\u3002\u4e3e\u4e2a\u4f8b\u5b50\uff0c",(0,u.kt)("inlineCode",{parentName:"p"},"state.leftPane.todoList.todos")," \u8fd9\u6837\u7684\u7ed3\u6784\u5c31\u662f\u4e00\u4e2a\u574f\u4e3b\u610f\uff0c\u56e0\u4e3a\u6574\u4e2a\u5e94\u7528\u7684\u6838\u5fc3\u662f \u201ctodos\u201d \u800c\u4e0d\u4ec5\u4ec5\u662f UI \u7684\u4e00\u4e2a\u6a21\u5757\u3002 ",(0,u.kt)("inlineCode",{parentName:"p"},"todos")," \u8fd9\u4e2a slice \u624d\u5e94\u8be5\u662f state \u6811\u7684\u9876\u5c42\u3002"),(0,u.kt)("p",null,"UI \u6811\u548c\u72b6\u6001\u6811\u4e4b\u95f4\u5f88\u5c11\u6709 1 \u5bf9 1 \u7684\u5173\u7cfb\u3002\u9664\u975e\u4f60\u60f3\u660e\u786e\u7684\u8ddf\u8e2a\u4f60\u7684 Redux Store \u4e2d\u5b58\u50a8\u7684 UI \u6570\u636e\u7684\u5404\u4e2a\u65b9\u9762\uff0c\u4f46\u5373\u4f7f\u662f\u8fd9\u6837\uff0cUI \u6570\u636e\u7684\u7ed3\u6784\u548c\u57df\u6570\u636e\u7684\u7ed3\u6784\u4e5f\u662f\u4e0d\u4e00\u6837\u7684\u3002"),(0,u.kt)("p",null,"\u4e00\u4e2a\u5178\u578b\u7684\u5e94\u7528 state \u5927\u81f4\u4f1a\u957f\u8fd9\u6837\uff1a"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-js"},"{\n    domainData1 : {},\n    domainData2 : {},\n    appState1 : {},\n    appState2 : {},\n    ui : {\n        uiState1 : {},\n        uiState2 : {},\n    }\n}\n")))}m.isMDXComponent=!0}}]);