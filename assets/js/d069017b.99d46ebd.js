(self.webpackChunk_graphql_codegen_website=self.webpackChunk_graphql_codegen_website||[]).push([[1142],{35318:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(27378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(r),f=o,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||i;return r?n.createElement(m,a(a({ref:t},s),{},{components:r})):n.createElement(m,a({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},31351:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return a},metadata:function(){return l},toc:function(){return c},default:function(){return s}});var n=r(29603),o=r(50120),i=(r(27378),r(35318)),a={id:"federation",title:"Apollo Federation"},l={unversionedId:"integrations/federation",id:"integrations/federation",isDocsHomePage:!1,title:"Apollo Federation",description:"The typescript-resolvers plugin also supports Apollo Federation.",source:"@site/docs/integrations/federation.md",sourceDirName:"integrations",slug:"/integrations/federation",permalink:"/docs/integrations/federation",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/integrations/federation.md",version:"current",frontMatter:{id:"federation",title:"Apollo Federation"},sidebar:"sidebar",previous:{title:"Prettier & Linters",permalink:"/docs/integrations/prettier"},next:{title:"VSCode",permalink:"/docs/integrations/vscode"}},c=[],p={toc:c};function s(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"typescript-resolvers")," plugin also supports ",(0,i.kt)("a",{parentName:"p",href:"https://www.apollographql.com/docs/apollo-server/federation/introduction/"},"Apollo Federation"),"."),(0,i.kt)("p",null,"In order to use it, add ",(0,i.kt)("inlineCode",{parentName:"p"},"federation: true")," to your configuration:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"generates:\n  ./src/types.ts:\n    plugins:\n      - typescript\n      - typescript-resolvers\n    config:\n      federation: true\n")),(0,i.kt)("p",null,"It will make sure to add the required GraphQL directives to your codegen schema, and will generate a compatible resolvers signature for Apollo Federation."))}s.isMDXComponent=!0}}]);