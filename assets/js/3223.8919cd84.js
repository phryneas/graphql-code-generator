(self.webpackChunk_graphql_codegen_website=self.webpackChunk_graphql_codegen_website||[]).push([[3223],{13223:function(e,i,n){"use strict";n.d(i,{TV:function(){return v}});var t=n(93067),d=n(41867),o=n(59690),r=n(54457),a=n(87786),l=n(58758),s=n(41422);n(27061),n(30138);function u(e,i=["directives"]){return i.reduce(((e,i)=>null==e?e:e[i]),null==e?void 0:e.extensions)}function c(e){if((0,t.zM)(e)){const i=c(e.ofType);if(i.kind===d.h.NON_NULL_TYPE)throw new Error(`Invalid type node ${JSON.stringify(e)}. Inner type of non-null type cannot be a non-null type.`);return{kind:d.h.NON_NULL_TYPE,type:i}}return(0,t.HG)(e)?{kind:d.h.LIST_TYPE,type:c(e.ofType)}:{kind:d.h.NAMED_TYPE,name:{kind:d.h.NAME,value:e.name}}}function E(e){if(null===e)return{kind:d.h.NULL};if(void 0===e)return null;if(Array.isArray(e)){const i=[];return e.forEach((e=>{const n=E(e);null!=n&&i.push(n)})),{kind:d.h.LIST,values:i}}if("object"==typeof e){const i=[];return Object.entries(e).forEach((([e,n])=>{const t=E(n);t&&i.push({kind:d.h.OBJECT_FIELD,name:{kind:d.h.NAME,value:e},value:t})})),{kind:d.h.OBJECT,fields:i}}if("boolean"==typeof e)return{kind:d.h.BOOLEAN,value:e};if("number"==typeof e&&isFinite(e)){const i=String(e);return p.test(i)?{kind:d.h.INT,value:i}:{kind:d.h.FLOAT,value:i}}if("string"==typeof e)return{kind:d.h.STRING,value:e};throw new TypeError(`Cannot convert value to AST: ${e}.`)}const p=/^-?(?:0|[1-9][0-9]*)$/;function T(e,i={}){const n=i.pathToDirectivesInExtensions,l=e.getTypeMap(),s=function(e,i){var n,t;const o={query:void 0,mutation:void 0,subscription:void 0};let r=[];null!=e.astNode&&r.push(e.astNode);null!=e.extensionASTNodes&&(r=r.concat(e.extensionASTNodes));r.forEach((e=>{e.operationTypes&&e.operationTypes.forEach((e=>{o[e.operation]=e}))}));const a={query:e.getQueryType(),mutation:e.getMutationType(),subscription:e.getSubscriptionType()};Object.keys(o).forEach((e=>{null!=a[e]&&(null!=o[e]?o[e].type=c(a[e]):o[e]={kind:d.h.OPERATION_TYPE_DEFINITION,operation:e,type:c(a[e])})}));const l=Object.values(o).filter((e=>null!=e)),s=I(e,e,i);if(!l.length&&!s.length)return null;const u={kind:null!=l?d.h.SCHEMA_DEFINITION:d.h.SCHEMA_EXTENSION,operationTypes:l,directives:s};return u.description=(null!==(t=null===(n=e.astNode)||void 0===n?void 0:n.description)&&void 0!==t?t:null!=e.description)?{kind:d.h.STRING,value:e.description,block:!0}:void 0,u}(e,n),u=null!=s?[s]:[],E=e.getDirectives();for(const t of E)(0,o.xg)(t)||u.push(N(t,e,n));for(const d in l){const i=l[d],o=(0,r.u1)(i),s=(0,a.s9)(i);if(!o&&!s)if((0,t.lp)(i))u.push(_(i,e,n));else if((0,t.oT)(i))u.push(f(i,e,n));else if((0,t.EN)(i))u.push(k(i,e,n));else if((0,t.hL)(i))u.push(M(i,e,n));else if((0,t.EM)(i))u.push(A(i,e,n));else{if(!(0,t.KA)(i))throw new Error(`Unknown type ${i}.`);u.push(P(i,e,n))}}return{kind:d.h.DOCUMENT,definitions:u}}function v(e,i={}){const n=T(e,i);return(0,l.S)(n)}function N(e,i,n){var t,o;return{kind:d.h.DIRECTIVE_DEFINITION,description:null!==(o=null===(t=e.astNode)||void 0===t?void 0:t.description)&&void 0!==o?o:e.description?{kind:d.h.STRING,value:e.description}:void 0,name:{kind:d.h.NAME,value:e.name},arguments:(null==e?void 0:e.args)?e.args.map((e=>O(e,i,n))):void 0,repeatable:e.isRepeatable,locations:(null==e?void 0:e.locations)?e.locations.map((e=>({kind:d.h.NAME,value:e}))):void 0}}function I(e,i,n){const t=u(e,n);let d,o=[];return null!=e.astNode&&o.push(e.astNode),"extensionASTNodes"in e&&null!=e.extensionASTNodes&&(o=o.concat(e.extensionASTNodes)),d=null!=t?m(i,t):[].concat(...o.filter((e=>null!=e.directives)).map((e=>e.directives))),d}function h(e,i,n){var t,d;let r,a=[];const l=u(e,n);let s;return s=null!=l?m(i,l):null===(t=e.astNode)||void 0===t?void 0:t.directives,null!=s&&(a=s.filter((e=>"deprecated"!==e.name.value)),null!=e.deprecationReason&&(r=null===(d=s.filter((e=>"deprecated"===e.name.value)))||void 0===d?void 0:d[0])),null!=e.deprecationReason&&null==r&&(r=R("deprecated",{reason:e.deprecationReason},o.fg)),null==r?a:[r].concat(a)}function O(e,i,n){var t,o;return{kind:d.h.INPUT_VALUE_DEFINITION,description:(null!==(o=null===(t=e.astNode)||void 0===t?void 0:t.description)&&void 0!==o?o:e.description)?{kind:d.h.STRING,value:e.description,block:!0}:void 0,name:{kind:d.h.NAME,value:e.name},type:c(e.type),defaultValue:void 0!==e.defaultValue?(0,s.J)(e.defaultValue,e.type):void 0,directives:h(e,i,n)}}function _(e,i,n){var t,o;return{kind:d.h.OBJECT_TYPE_DEFINITION,description:(null!==(o=null===(t=e.astNode)||void 0===t?void 0:t.description)&&void 0!==o?o:e.description)?{kind:d.h.STRING,value:e.description,block:!0}:void 0,name:{kind:d.h.NAME,value:e.name},fields:Object.values(e.getFields()).map((e=>S(e,i,n))),interfaces:Object.values(e.getInterfaces()).map((e=>c(e))),directives:I(e,i,n)}}function f(e,i,n){var t,o;const r={kind:d.h.INTERFACE_TYPE_DEFINITION,description:(null!==(o=null===(t=e.astNode)||void 0===t?void 0:t.description)&&void 0!==o?o:e.description)?{kind:d.h.STRING,value:e.description,block:!0}:void 0,name:{kind:d.h.NAME,value:e.name},fields:Object.values(e.getFields()).map((e=>S(e,i,n))),directives:I(e,i,n)};return"getInterfaces"in e&&(r.interfaces=Object.values(e.getInterfaces()).map((e=>c(e)))),r}function k(e,i,n){var t,o;return{kind:d.h.UNION_TYPE_DEFINITION,description:(null!==(o=null===(t=e.astNode)||void 0===t?void 0:t.description)&&void 0!==o?o:e.description)?{kind:d.h.STRING,value:e.description,block:!0}:void 0,name:{kind:d.h.NAME,value:e.name},directives:I(e,i,n),types:e.getTypes().map((e=>c(e)))}}function M(e,i,n){var t,o;return{kind:d.h.INPUT_OBJECT_TYPE_DEFINITION,description:(null!==(o=null===(t=e.astNode)||void 0===t?void 0:t.description)&&void 0!==o?o:e.description)?{kind:d.h.STRING,value:e.description,block:!0}:void 0,name:{kind:d.h.NAME,value:e.name},fields:Object.values(e.getFields()).map((e=>function(e,i,n){var t,o;return{kind:d.h.INPUT_VALUE_DEFINITION,description:(null!==(o=null===(t=e.astNode)||void 0===t?void 0:t.description)&&void 0!==o?o:e.description)?{kind:d.h.STRING,value:e.description,block:!0}:void 0,name:{kind:d.h.NAME,value:e.name},type:c(e.type),directives:h(e,i,n),defaultValue:(0,s.J)(e.defaultValue,e.type)}}(e,i,n))),directives:I(e,i,n)}}function A(e,i,n){var t,o;return{kind:d.h.ENUM_TYPE_DEFINITION,description:(null!==(o=null===(t=e.astNode)||void 0===t?void 0:t.description)&&void 0!==o?o:e.description)?{kind:d.h.STRING,value:e.description,block:!0}:void 0,name:{kind:d.h.NAME,value:e.name},values:Object.values(e.getValues()).map((e=>function(e,i,n){var t,o;return{kind:d.h.ENUM_VALUE_DEFINITION,description:(null!==(o=null===(t=e.astNode)||void 0===t?void 0:t.description)&&void 0!==o?o:e.description)?{kind:d.h.STRING,value:e.description,block:!0}:void 0,name:{kind:d.h.NAME,value:e.name},directives:I(e,i,n)}}(e,i,n))),directives:I(e,i,n)}}function P(e,i,n){var t,o,r,a;let l,s=[];const c=u(e,n);let E;E=null!=c?m(i,c):null===(t=e.astNode)||void 0===t?void 0:t.directives,null!=E&&(s=E.filter((e=>"specifiedBy"!==e.name.value)),null!=e.specifiedByUrl&&(l=null===(o=E.filter((e=>"specifiedBy"===e.name.value)))||void 0===o?void 0:o[0])),null!=e.specifiedByUrl&&null==l&&(l=R("specifiedBy",{url:e.specifiedByUrl}));const p=null==l?s:[l].concat(s);return{kind:d.h.SCALAR_TYPE_DEFINITION,description:(null!==(a=null===(r=e.astNode)||void 0===r?void 0:r.description)&&void 0!==a?a:e.description)?{kind:d.h.STRING,value:e.description,block:!0}:void 0,name:{kind:d.h.NAME,value:e.name},directives:p}}function S(e,i,n){var t,o;return{kind:d.h.FIELD_DEFINITION,description:(null!==(o=null===(t=e.astNode)||void 0===t?void 0:t.description)&&void 0!==o?o:e.description)?{kind:d.h.STRING,value:e.description,block:!0}:void 0,name:{kind:d.h.NAME,value:e.name},arguments:e.args.map((e=>O(e,i,n))),type:c(e.type),directives:h(e,i,n)}}function R(e,i,n){const t=[];return null!=n?n.args.forEach((e=>{const n=e.name,o=i[n];void 0!==o&&t.push({kind:d.h.ARGUMENT,name:{kind:d.h.NAME,value:n},value:(0,s.J)(o,e.type)})})):Object.entries(i).forEach((([e,i])=>{t.push({kind:d.h.ARGUMENT,name:{kind:d.h.NAME,value:e},value:E(i)})})),{kind:d.h.DIRECTIVE,name:{kind:d.h.NAME,value:e},arguments:t}}function m(e,i){const n=[];return Object.entries(i).forEach((([i,t])=>{const d=null==e?void 0:e.getDirective(i);Array.isArray(t)?t.forEach((e=>{n.push(R(i,e,d))})):n.push(R(i,t,d))})),n}new Map;var C,U;!function(e){e.TYPE="VisitSchemaKind.TYPE",e.SCALAR_TYPE="VisitSchemaKind.SCALAR_TYPE",e.ENUM_TYPE="VisitSchemaKind.ENUM_TYPE",e.COMPOSITE_TYPE="VisitSchemaKind.COMPOSITE_TYPE",e.OBJECT_TYPE="VisitSchemaKind.OBJECT_TYPE",e.INPUT_OBJECT_TYPE="VisitSchemaKind.INPUT_OBJECT_TYPE",e.ABSTRACT_TYPE="VisitSchemaKind.ABSTRACT_TYPE",e.UNION_TYPE="VisitSchemaKind.UNION_TYPE",e.INTERFACE_TYPE="VisitSchemaKind.INTERFACE_TYPE",e.ROOT_OBJECT="VisitSchemaKind.ROOT_OBJECT",e.QUERY="VisitSchemaKind.QUERY",e.MUTATION="VisitSchemaKind.MUTATION",e.SUBSCRIPTION="VisitSchemaKind.SUBSCRIPTION"}(C||(C={})),function(e){e.TYPE="MapperKind.TYPE",e.SCALAR_TYPE="MapperKind.SCALAR_TYPE",e.ENUM_TYPE="MapperKind.ENUM_TYPE",e.COMPOSITE_TYPE="MapperKind.COMPOSITE_TYPE",e.OBJECT_TYPE="MapperKind.OBJECT_TYPE",e.INPUT_OBJECT_TYPE="MapperKind.INPUT_OBJECT_TYPE",e.ABSTRACT_TYPE="MapperKind.ABSTRACT_TYPE",e.UNION_TYPE="MapperKind.UNION_TYPE",e.INTERFACE_TYPE="MapperKind.INTERFACE_TYPE",e.ROOT_OBJECT="MapperKind.ROOT_OBJECT",e.QUERY="MapperKind.QUERY",e.MUTATION="MapperKind.MUTATION",e.SUBSCRIPTION="MapperKind.SUBSCRIPTION",e.DIRECTIVE="MapperKind.DIRECTIVE",e.FIELD="MapperKind.FIELD",e.COMPOSITE_FIELD="MapperKind.COMPOSITE_FIELD",e.OBJECT_FIELD="MapperKind.OBJECT_FIELD",e.ROOT_FIELD="MapperKind.ROOT_FIELD",e.QUERY_ROOT_FIELD="MapperKind.QUERY_ROOT_FIELD",e.MUTATION_ROOT_FIELD="MapperKind.MUTATION_ROOT_FIELD",e.SUBSCRIPTION_ROOT_FIELD="MapperKind.SUBSCRIPTION_ROOT_FIELD",e.INTERFACE_FIELD="MapperKind.INTERFACE_FIELD",e.INPUT_OBJECT_FIELD="MapperKind.INPUT_OBJECT_FIELD",e.ARGUMENT="MapperKind.ARGUMENT",e.ENUM_VALUE="MapperKind.ENUM_VALUE"}(U||(U={}))}}]);