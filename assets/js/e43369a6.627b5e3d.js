(self.webpackChunk_graphql_codegen_website=self.webpackChunk_graphql_codegen_website||[]).push([[7268],{35318:function(e,a,n){"use strict";n.d(a,{Zo:function(){return c},kt:function(){return u}});var t=n(27378);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function p(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=t.createContext({}),s=function(e){var a=t.useContext(o),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},c=function(e){var a=s(e.components);return t.createElement(o.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(n),u=r,k=m["".concat(o,".").concat(u)]||m[u]||d[u]||l;return n?t.createElement(k,i(i({ref:a},c),{},{components:n})):t.createElement(k,i({ref:a},c))}));function u(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var p={};for(var o in a)hasOwnProperty.call(a,o)&&(p[o]=a[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var s=2;s<l;s++)i[s]=n[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88702:function(e,a,n){"use strict";n.r(a),n.d(a,{frontMatter:function(){return i},metadata:function(){return p},toc:function(){return o},default:function(){return c}});var t=n(29603),r=n(50120),l=(n(27378),n(35318)),i={},p={unversionedId:"generated-config/java",id:"generated-config/java",isDocsHomePage:!1,title:"java",description:"Installation",source:"@site/docs/generated-config/java.md",sourceDirName:"generated-config",slug:"/generated-config/java",permalink:"/docs/generated-config/java",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/generated-config/java.md",version:"current",frontMatter:{}},o=[{value:"Installation",id:"installation",children:[]},{value:"API Reference",id:"api-reference",children:[{value:"<code>package</code>",id:"package",children:[]},{value:"<code>mappers</code>",id:"mappers",children:[]},{value:"<code>defaultMapper</code>",id:"defaultmapper",children:[]},{value:"<code>className</code>",id:"classname",children:[]},{value:"<code>listType</code>",id:"listtype",children:[]},{value:"<code>strictScalars</code>",id:"strictscalars",children:[]},{value:"<code>defaultScalarType</code>",id:"defaultscalartype",children:[]},{value:"<code>scalars</code>",id:"scalars",children:[]},{value:"<code>namingConvention</code>",id:"namingconvention",children:[]},{value:"<code>typesPrefix</code>",id:"typesprefix",children:[]},{value:"<code>typesSuffix</code>",id:"typessuffix",children:[]},{value:"<code>skipTypename</code>",id:"skiptypename",children:[]},{value:"<code>nonOptionalTypename</code>",id:"nonoptionaltypename",children:[]},{value:"<code>useTypeImports</code>",id:"usetypeimports",children:[]}]}],s={toc:o};function c(e){var a=e.components,n=(0,r.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,t.Z)({},s,n,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)("img",{alt:"java plugin version",src:"https://img.shields.io/npm/v/@graphql-codegen/java?color=%23e15799&label=plugin\xa0version&style=for-the-badge"}),(0,l.kt)("div",{className:"admonition admonition-shell"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16pt",height:"16pt",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",d:"M0 0v16h16V0zm15.063 15.063H.937v-11h14.126zm0-11.938H.937V.937h14.126zm0 0"}),(0,l.kt)("path",{parentName:"svg",d:"M1.875 1.563h.938V2.5h-.938zm0 0M3.438 1.563h.937V2.5h-.938zm0 0M5 1.563h.938V2.5H5zm0 0M1.875 5.074v1.348l.988.637-.988.578V9.05l2.828-1.668v-.586zm0 0M5.34 7.559h1.027v1.226H5.34zm0 0M5.34 5.32h1.027v1.23H5.34zm0 0M6.8 8.785h2.356v1.137H6.801zm0 0"}))),"Using ",(0,l.kt)("inlineCode",{parentName:"h5"},"yarn"))),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("pre",{parentName:"div"},(0,l.kt)("code",{parentName:"pre"},"yarn add -D @graphql-codegen/java\n")))),(0,l.kt)("h2",{id:"api-reference"},"API Reference"),(0,l.kt)("h3",{id:"package"},(0,l.kt)("inlineCode",{parentName:"h3"},"package")),(0,l.kt)("p",null,"type: ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("p",null,"Customize the Java package name. The default package name will be generated according to the output file path."),(0,l.kt)("h4",{id:"usage-examples"},"Usage Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"generates:\n  src/main/java/my-org/my-app/Resolvers.java:\n    plugins:\n      - java-resolvers\n    config:\n      package: custom.package.name\n")),(0,l.kt)("h3",{id:"mappers"},(0,l.kt)("inlineCode",{parentName:"h3"},"mappers")),(0,l.kt)("p",null,"type: ",(0,l.kt)("inlineCode",{parentName:"p"},"object")),(0,l.kt)("p",null,"Allow you to replace specific GraphQL types with your custom model classes. This is useful when you want to make sure your resolvers returns the correct class.\nThe default value is the values set by ",(0,l.kt)("inlineCode",{parentName:"p"},"defaultMapper")," configuration.\nYou can use a direct path to the package, or use ",(0,l.kt)("inlineCode",{parentName:"p"},"package#class")," syntax to have it imported."),(0,l.kt)("h4",{id:"usage-examples-1"},"Usage Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"generates:\n  src/main/java/my-org/my-app/Resolvers.java:\n    plugins:\n      - java-resolvers\n    config:\n      mappers:\n        User: com.app.models#UserObject\n")),(0,l.kt)("h3",{id:"defaultmapper"},(0,l.kt)("inlineCode",{parentName:"h3"},"defaultMapper")),(0,l.kt)("p",null,"type: ",(0,l.kt)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",(0,l.kt)("inlineCode",{parentName:"p"},"Object")),(0,l.kt)("p",null,"Sets the default mapper value in case it's not specified by ",(0,l.kt)("inlineCode",{parentName:"p"},"mappers"),".\nYou can use a direct path to the package, or use ",(0,l.kt)("inlineCode",{parentName:"p"},"package#class")," syntax to have it imported.\nThe default mapper is Java's ",(0,l.kt)("inlineCode",{parentName:"p"},"Object"),"."),(0,l.kt)("h4",{id:"usage-examples-2"},"Usage Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"generates:\n  src/main/java/my-org/my-app/Resolvers.java:\n    plugins:\n      - java-resolvers\n    config:\n      defaultMapper: my.app.models.BaseEntity\n")),(0,l.kt)("h3",{id:"classname"},(0,l.kt)("inlineCode",{parentName:"h3"},"className")),(0,l.kt)("p",null,"type: ",(0,l.kt)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",(0,l.kt)("inlineCode",{parentName:"p"},"Resolvers")),(0,l.kt)("p",null,"Allow you to customize the parent class name."),(0,l.kt)("h4",{id:"usage-examples-3"},"Usage Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"generates:\n  src/main/java/my-org/my-app/Resolvers.java:\n    plugins:\n      - java-resolvers\n    config:\n      className: MyResolvers\n")),(0,l.kt)("h3",{id:"listtype"},(0,l.kt)("inlineCode",{parentName:"h3"},"listType")),(0,l.kt)("p",null,"type: ",(0,l.kt)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",(0,l.kt)("inlineCode",{parentName:"p"},"Iterable")),(0,l.kt)("p",null,"Allow you to customize the list type."),(0,l.kt)("h4",{id:"usage-examples-4"},"Usage Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"generates:\n  src/main/java/my-org/my-app/Resolvers.java:\n    plugins:\n      - java-resolvers\n    config:\n      listType: Map\n")),(0,l.kt)("h3",{id:"strictscalars"},(0,l.kt)("inlineCode",{parentName:"h3"},"strictScalars")),(0,l.kt)("p",null,"type: ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,l.kt)("inlineCode",{parentName:"p"},"false")),(0,l.kt)("p",null,"Makes scalars strict."),(0,l.kt)("p",null,"If scalars are found in the schema that are not defined in ",(0,l.kt)("inlineCode",{parentName:"p"},"scalars"),"\nan error will be thrown during codegen."),(0,l.kt)("h4",{id:"usage-examples-5"},"Usage Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"config:\n  strictScalars: true\n")),(0,l.kt)("h3",{id:"defaultscalartype"},(0,l.kt)("inlineCode",{parentName:"h3"},"defaultScalarType")),(0,l.kt)("p",null,"type: ",(0,l.kt)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",(0,l.kt)("inlineCode",{parentName:"p"},"any")),(0,l.kt)("p",null,"Allows you to override the type that unknown scalars will have."),(0,l.kt)("h4",{id:"usage-examples-6"},"Usage Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"config:\n  defaultScalarType: unknown\n")),(0,l.kt)("h3",{id:"scalars"},(0,l.kt)("inlineCode",{parentName:"h3"},"scalars")),(0,l.kt)("p",null,"type: ",(0,l.kt)("inlineCode",{parentName:"p"},"ScalarsMap")),(0,l.kt)("p",null,"Extends or overrides the built-in scalars and custom GraphQL scalars to a custom type."),(0,l.kt)("h3",{id:"namingconvention"},(0,l.kt)("inlineCode",{parentName:"h3"},"namingConvention")),(0,l.kt)("p",null,"type: ",(0,l.kt)("inlineCode",{parentName:"p"},"NamingConvention"),"\ndefault: ",(0,l.kt)("inlineCode",{parentName:"p"},"change-case-all#pascalCase")),(0,l.kt)("p",null,"Allow you to override the naming convention of the output.\nYou can either override all namings, or specify an object with specific custom naming convention per output.\nThe format of the converter must be a valid ",(0,l.kt)("inlineCode",{parentName:"p"},"module#method"),".\nAllowed values for specific output are: ",(0,l.kt)("inlineCode",{parentName:"p"},"typeNames"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"enumValues"),'.\nYou can also use "keep" to keep all GraphQL names as-is.\nAdditionally you can set ',(0,l.kt)("inlineCode",{parentName:"p"},"transformUnderscore")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," if you want to override the default behavior,\nwhich is to preserves underscores."),(0,l.kt)("p",null,"Available case functions in ",(0,l.kt)("inlineCode",{parentName:"p"},"change-case-all")," are ",(0,l.kt)("inlineCode",{parentName:"p"},"camelCase"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"capitalCase"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"constantCase"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"dotCase"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"headerCase"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"noCase"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"paramCase"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"pascalCase"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"pathCase"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"sentenceCase"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"snakeCase"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"lowerCase"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"localeLowerCase"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"lowerCaseFirst"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"spongeCase"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"titleCase"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"upperCase"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"localeUpperCase")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"upperCaseFirst"),"\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/btxtiger/change-case-all"},"See more")),(0,l.kt)("h3",{id:"typesprefix"},(0,l.kt)("inlineCode",{parentName:"h3"},"typesPrefix")),(0,l.kt)("p",null,"type: ",(0,l.kt)("inlineCode",{parentName:"p"},"string"),"\ndefault: ``"),(0,l.kt)("p",null,"Prefixes all the generated types."),(0,l.kt)("h4",{id:"usage-examples-7"},"Usage Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"config:\n  typesPrefix: I\n")),(0,l.kt)("h3",{id:"typessuffix"},(0,l.kt)("inlineCode",{parentName:"h3"},"typesSuffix")),(0,l.kt)("p",null,"type: ",(0,l.kt)("inlineCode",{parentName:"p"},"string"),"\ndefault: ``"),(0,l.kt)("p",null,"Suffixes all the generated types."),(0,l.kt)("h4",{id:"usage-examples-8"},"Usage Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"config:\n  typesSuffix: I\n")),(0,l.kt)("h3",{id:"skiptypename"},(0,l.kt)("inlineCode",{parentName:"h3"},"skipTypename")),(0,l.kt)("p",null,"type: ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,l.kt)("inlineCode",{parentName:"p"},"false")),(0,l.kt)("p",null,"Does not add __typename to the generated types, unless it was specified in the selection set."),(0,l.kt)("h4",{id:"usage-examples-9"},"Usage Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"config:\n  skipTypename: true\n")),(0,l.kt)("h3",{id:"nonoptionaltypename"},(0,l.kt)("inlineCode",{parentName:"h3"},"nonOptionalTypename")),(0,l.kt)("p",null,"type: ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,l.kt)("inlineCode",{parentName:"p"},"false")),(0,l.kt)("p",null,"Automatically adds ",(0,l.kt)("inlineCode",{parentName:"p"},"__typename")," field to the generated types, even when they are not specified\nin the selection set, and makes it non-optional"),(0,l.kt)("h4",{id:"usage-examples-10"},"Usage Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"config:\n  nonOptionalTypename: true\n")),(0,l.kt)("h3",{id:"usetypeimports"},(0,l.kt)("inlineCode",{parentName:"h3"},"useTypeImports")),(0,l.kt)("p",null,"type: ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,l.kt)("inlineCode",{parentName:"p"},"false")),(0,l.kt)("p",null,"Will use ",(0,l.kt)("inlineCode",{parentName:"p"},"import type {}")," rather than ",(0,l.kt)("inlineCode",{parentName:"p"},"import {}"),' when importing only types. This gives\ncompatibility with TypeScript\'s "importsNotUsedAsValues": "error" option'))}c.isMDXComponent=!0}}]);