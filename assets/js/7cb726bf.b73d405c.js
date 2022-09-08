"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3660],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=d(n),m=o,f=u["".concat(p,".").concat(m)]||u[m]||l[m]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var d=2;d<a;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6164:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return l}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],c={id:"bindactioncreators",title:"bindActionCreators",hide_title:!0,description:"API > bindActionCreators: wrapping action creators for dispatching"},p=void 0,d={unversionedId:"api/bindactioncreators",id:"api/bindactioncreators",title:"bindActionCreators",description:"API > bindActionCreators: wrapping action creators for dispatching",source:"@site/../docs/api/bindActionCreators.md",sourceDirName:"api",slug:"/api/bindactioncreators",permalink:"/api/bindactioncreators",draft:!1,tags:[],version:"current",frontMatter:{id:"bindactioncreators",title:"bindActionCreators",hide_title:!0,description:"API > bindActionCreators: wrapping action creators for dispatching"},sidebar:"docs",previous:{title:"applyMiddleware",permalink:"/api/applymiddleware"},next:{title:"compose",permalink:"/api/compose"}},s={},l=[{value:"\u53c2\u6570",id:"\u53c2\u6570",level:4},{value:"\u8fd4\u56de\u503c",id:"\u8fd4\u56de\u503c",level:4},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:4},{value:"<code>TodoActionCreators.js</code>",id:"todoactioncreatorsjs",level:4},{value:"<code>SomeComponent.js</code>",id:"somecomponentjs",level:4},{value:"\u5c0f\u8d34\u58eb",id:"\u5c0f\u8d34\u58eb",level:4}],u={toc:l};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"bindactioncreatorsactioncreators-dispatch"},(0,a.kt)("inlineCode",{parentName:"h1"},"bindActionCreators(actionCreators, dispatch)")),(0,a.kt)("p",null,"\u628a\u4e00\u4e2a value \u4e3a\u4e0d\u540c ",(0,a.kt)("a",{parentName:"p",href:"/understanding/thinking-in-redux/glossary#action-creator"},"action creator")," \u7684\u5bf9\u8c61\uff0c\u8f6c\u6210\u62e5\u6709\u540c\u540d key \u7684\u5bf9\u8c61\u3002\u540c\u65f6\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"p",href:"/api/store#dispatchaction"},(0,a.kt)("inlineCode",{parentName:"a"},"dispatch"))," \u5bf9\u6bcf\u4e2a action creator \u8fdb\u884c\u5305\u88c5\uff0c\u4ee5\u4fbf\u53ef\u4ee5\u76f4\u63a5\u8c03\u7528\u5b83\u4eec\u3002"),(0,a.kt)("p",null,"\u4e00\u822c\u60c5\u51b5\u4e0b\u4f60\u53ef\u4ee5\u76f4\u63a5\u5728 ",(0,a.kt)("a",{parentName:"p",href:"/api/store"},(0,a.kt)("inlineCode",{parentName:"a"},"Store"))," \u5b9e\u4f8b\u4e0a\u8c03\u7528 ",(0,a.kt)("a",{parentName:"p",href:"/api/store#dispatchaction"},(0,a.kt)("inlineCode",{parentName:"a"},"dispatch")),"\u3002\u5982\u679c\u4f60\u5728 React \u4e2d\u4f7f\u7528 Redux\uff0c",(0,a.kt)("a",{parentName:"p",href:"https://github.com/gaearon/react-redux"},"react-redux")," \u4f1a\u63d0\u4f9b ",(0,a.kt)("a",{parentName:"p",href:"/api/store#dispatchaction"},(0,a.kt)("inlineCode",{parentName:"a"},"dispatch"))," \u51fd\u6570\u8ba9\u4f60\u76f4\u63a5\u8c03\u7528\u5b83 \u3002"),(0,a.kt)("p",null,"\u60df\u4e00\u4f1a\u4f7f\u7528\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"bindActionCreators")," \u7684\u573a\u666f\u662f\u5f53\u4f60\u9700\u8981\u628a action creator \u5f80\u4e0b\u4f20\u5230\u4e00\u4e2a\u7ec4\u4ef6\u4e0a\uff0c\u5374\u4e0d\u60f3\u8ba9\u8fd9\u4e2a\u7ec4\u4ef6\u89c9\u5bdf\u5230 Redux \u7684\u5b58\u5728\uff0c\u800c\u4e14\u4e0d\u5e0c\u671b\u628a ",(0,a.kt)("a",{parentName:"p",href:"/api/store#dispatchaction"},(0,a.kt)("inlineCode",{parentName:"a"},"dispatch"))," \u6216 Redux store \u4f20\u7ed9\u5b83\u3002"),(0,a.kt)("p",null,"\u4e3a\u65b9\u4fbf\u8d77\u89c1\uff0c\u4f60\u4e5f\u53ef\u4ee5\u4f20\u5165 action creator \u4f5c\u4e3a\u7b2c\u4e00\u4e2a\u53c2\u6570\uff0c\u5e76\u4e14\u5f97\u5230\u4e00\u4e2a dispatch \u51fd\u6570\u4f5c\u4e3a\u8fd4\u56de\u503c\u3002"),(0,a.kt)("h4",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"actionCreators")," (",(0,a.kt)("em",{parentName:"p"},"Function")," or ",(0,a.kt)("em",{parentName:"p"},"Object"),"): \u4e00\u4e2a ",(0,a.kt)("a",{parentName:"p",href:"/understanding/thinking-in-redux/glossary#action-creator"},"action creator"),"\uff0c\u6216\u8005\u4e00\u4e2a value \u662f action creator \u7684\u5bf9\u8c61\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"dispatch")," (",(0,a.kt)("em",{parentName:"p"},"Function"),"): \u4e00\u4e2a\u7531 ",(0,a.kt)("a",{parentName:"p",href:"/api/store"},(0,a.kt)("inlineCode",{parentName:"a"},"Store"))," \u5b9e\u4f8b\u63d0\u4f9b\u7684 ",(0,a.kt)("a",{parentName:"p",href:"/api/store#dispatchaction"},(0,a.kt)("inlineCode",{parentName:"a"},"dispatch"))," \u51fd\u6570\u3002"))),(0,a.kt)("h4",{id:"\u8fd4\u56de\u503c"},"\u8fd4\u56de\u503c"),(0,a.kt)("p",null,"(",(0,a.kt)("em",{parentName:"p"},"Function")," or ",(0,a.kt)("em",{parentName:"p"},"Object"),"): \u4e00\u4e2a\u4e0e\u539f\u5bf9\u8c61\u7c7b\u4f3c\u7684\u5bf9\u8c61\uff0c\u53ea\u4e0d\u8fc7\u8fd9\u4e2a\u5bf9\u8c61\u7684 value \u90fd\u662f\u4f1a\u76f4\u63a5 dispatch \u539f action creator \u8fd4\u56de\u7684\u7ed3\u679c\u7684\u51fd\u6570\u3002\u5982\u679c\u4f20\u5165\u4e00\u4e2a\u5355\u72ec\u7684\u51fd\u6570\u4f5c\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"actionCreators"),"\uff0c\u90a3\u4e48\u8fd4\u56de\u7684\u7ed3\u679c\u4e5f\u662f\u4e00\u4e2a\u5355\u72ec\u7684\u51fd\u6570\u3002"),(0,a.kt)("h4",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,a.kt)("h4",{id:"todoactioncreatorsjs"},(0,a.kt)("inlineCode",{parentName:"h4"},"TodoActionCreators.js")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"export function addTodo(text) {\n  return {\n    type: 'ADD_TODO',\n    text\n  }\n}\n\nexport function removeTodo(id) {\n  return {\n    type: 'REMOVE_TODO',\n    id\n  }\n}\n")),(0,a.kt)("h4",{id:"somecomponentjs"},(0,a.kt)("inlineCode",{parentName:"h4"},"SomeComponent.js")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { Component } from 'react'\nimport { bindActionCreators } from 'redux'\nimport { connect } from 'react-redux'\n\nimport * as TodoActionCreators from './TodoActionCreators'\nconsole.log(TodoActionCreators)\n// {\n//   addTodo: Function,\n//   removeTodo: Function\n// }\n\nfunction TodoListContainer(props) {\n  // react-redux \u6ce8\u5165:\n  const { dispatch, todos } = props\n\n  // \u8fd9\u662f\u4e00\u4e2a\u5f88\u597d\u7684 bindActionCreators \u7528\u4f8b:\n  // \u4f60\u5e0c\u671b\u5b50\u7ec4\u4ef6\u5b8c\u5168\u4e0d\u77e5\u9053 Redux.\n  // \u6211\u4eec\u73b0\u5728\u521b\u5efa\u8fd9\u4e9b\u51fd\u6570\u7684\u7ed1\u5b9a\u7248\u672c\uff0c\u4ee5\u4fbf\u6211\u4eec\u53ef\u4ee5\n  // \u4e4b\u540e\u5c06\u5b83\u4eec\u4f20\u7ed9\u5b50\u7ec4\u4ef6.\n\n  const boundActionCreators = useMemo(\n    () => bindActionCreators(TodoActionCreators, dispatch),\n    [dispatch]\n  )\n  console.log(boundActionCreators)\n  // {\n  //   addTodo: Function,\n  //   removeTodo: Function\n  // }\n\n  useEffect(() => {\n    // \u6ce8\u610f\uff1a \u8fd9\u4e0d\u8d77\u4f5c\u7528:\n    // TodoActionCreators.addTodo('Use Redux')\n\n    // \u4f60\u53ea\u662f\u5728\u8c03\u7528\u4e00\u4e2a\u521b\u5efa action \u7684\u51fd\u6570\u3002\n    // \u4f60\u4e5f\u5fc5\u987b\u540c\u65f6 dispatch \u4e00\u4e2a action\uff01\n\n    // \u8fd9\u5c06\u8d77\u5230\u4f5c\u7528:\n    let action = TodoActionCreators.addTodo('Use Redux')\n    dispatch(action)\n  }, [])\n\n  return <TodoList todos={todos} {...this.boundActionCreators} />\n\n  //  bindActionCreators \u7684\u66ff\u4ee3\u65b9\u6cd5\n  // \u53ea\u6709\u5411\u4e0b\u4f20\u9012 dispatch \u51fd\u6570, \u4f46\u662f\u4f60\u7684\u5b50\u7ec4\u4ef6\n  // \u9700\u8981 import action creators \u5e76\u4e86\u89e3\u5b83\u4eec.\n\n  // return <TodoList todos={todos} dispatch={dispatch} />\n}\n\nexport default connect(state => ({ todos: state.todos }))(TodoListContainer)\n")),(0,a.kt)("h4",{id:"\u5c0f\u8d34\u58eb"},"\u5c0f\u8d34\u58eb"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u4f60\u6216\u8bb8\u8981\u95ee\uff1a\u4e3a\u4ec0\u4e48\u4e0d\u76f4\u63a5\u628a action creator \u7ed1\u5b9a\u5230 store \u5b9e\u4f8b\u4e0a\uff0c\u5c31\u50cf\u4f20\u7edf\u7684 Flux \u90a3\u6837\uff1f\u95ee\u9898\u5728\u4e8e\uff0c\u8fd9\u5bf9\u4e8e\u9700\u8981\u5728\u670d\u52a1\u7aef\u8fdb\u884c\u6e32\u67d3\u7684\u540c\u6784\u5e94\u7528\u4f1a\u6709\u95ee\u9898\u3002\u591a\u6570\u60c5\u51b5\u4e0b\uff0c\u4f60\u7684\u6bcf\u4e2a\u8bf7\u6c42\u90fd\u9700\u8981\u4e00\u4e2a\u72ec\u7acb\u7684 store \u5b9e\u4f8b\uff0c\u8fd9\u6837\u4f60\u53ef\u4ee5\u4e3a\u5b83\u4eec\u63d0\u4f9b\u4e0d\u540c\u7684\u6570\u636e\uff0c\u4f46\u662f\u5982\u679c\u5728\u5b9a\u4e49\u7684\u65f6\u5019\u7ed1\u5b9a action creator\uff0c\u4f60\u5c31\u53ea\u80fd\u4f7f\u7528\u4e00\u4e2a\u552f\u4e00\u7684 store \u5b9e\u4f8b\u6765\u5bf9\u5e94\u6240\u6709\u8bf7\u6c42\u4e86\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5982\u679c\u4f60\u4f7f\u7528 ES5\uff0c\u65e0\u6cd5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"import * as")," \u8bed\u6cd5\uff0c\u4f60\u53ef\u4ee5\u628a ",(0,a.kt)("inlineCode",{parentName:"p"},"require('./TodoActionCreators')")," \u4f5c\u4e3a\u7b2c\u4e00\u4e2a\u53c2\u6570\u4f20\u7ed9 ",(0,a.kt)("inlineCode",{parentName:"p"},"bindActionCreators"),"\u3002\u60df\u4e00\u8981\u6ce8\u610f\u7684\u662f\u4f5c\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"actionCreators")," \u53c2\u6570\u7684\u5bf9\u8c61\uff0c\u5b83\u7684 value \u9700\u8981\u662f\u51fd\u6570\u3002\u6a21\u5757\u7cfb\u7edf\u5e76\u4e0d\u91cd\u8981\u3002"))))}m.isMDXComponent=!0}}]);