"use strict";(self.webpackChunkhtml_5_qrcode_docs=self.webpackChunkhtml_5_qrcode_docs||[]).push([[879],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},l=Object.keys(e);for(o=0;o<l.length;o++)r=l[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)r=l[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),d=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=d(r),m=n,f=u["".concat(s,".").concat(m)]||u[m]||c[m]||l;return r?o.createElement(f,a(a({ref:t},p),{},{components:r})):o.createElement(f,a({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,a=new Array(l);a[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var d=2;d<l;d++)a[d]=r[d];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},6260:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var o=r(7462),n=(r(7294),r(3905));const l={sidebar_position:2},a=void 0,i={unversionedId:"apis/interfaces/Html5QrcodeFullConfig",id:"apis/interfaces/Html5QrcodeFullConfig",title:"Html5QrcodeFullConfig",description:"html5-qrcode / Html5QrcodeFullConfig",source:"@site/docs/apis/interfaces/Html5QrcodeFullConfig.md",sourceDirName:"apis/interfaces",slug:"/apis/interfaces/Html5QrcodeFullConfig",permalink:"/html5-qrcode-docs/docs/apis/interfaces/Html5QrcodeFullConfig",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/apis/interfaces/Html5QrcodeFullConfig.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Html5QrcodeResult",permalink:"/html5-qrcode-docs/docs/apis/interfaces/Html5QrcodeResult"},next:{title:"Html5QrcodeCameraScanConfig",permalink:"/html5-qrcode-docs/docs/apis/interfaces/Html5QrcodeCameraScanConfig"}},s={},d=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"experimentalFeatures",id:"experimentalfeatures",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"formatsToSupport",id:"formatstosupport",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"useBarCodeDetectorIfSupported",id:"usebarcodedetectorifsupported",level:3},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"verbose",id:"verbose",level:3},{value:"Defined in",id:"defined-in-3",level:4}],p={toc:d};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"../"},"html5-qrcode")," / Html5QrcodeFullConfig"),(0,n.kt)("h1",{id:"interface-html5qrcodefullconfig"},"Interface: Html5QrcodeFullConfig"),(0,n.kt)("p",null,"Interface for full configuration of ",(0,n.kt)("a",{parentName:"p",href:"/html5-qrcode-docs/docs/apis/classes/Html5Qrcode"},"Html5Qrcode"),"."),(0,n.kt)("p",null,"Notes: Ideally we don't need to have two interfaces for this purpose, but\nsince the public APIs before version 2.0.8 allowed passing a boolean verbose\nflag to constructor we need to allow users to pass Html5QrcodeFullConfig or\nboolean flag to be backward compatible.\nIn future versions these two interfaces can be merged."),(0,n.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"Html5QrcodeConfigs")),(0,n.kt)("p",{parentName:"li"},"\u21b3 ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Html5QrcodeFullConfig"))))),(0,n.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,n.kt)("h3",{id:"properties"},"Properties"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/html5-qrcode-docs/docs/apis/interfaces/Html5QrcodeFullConfig#experimentalfeatures"},"experimentalFeatures")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/html5-qrcode-docs/docs/apis/interfaces/Html5QrcodeFullConfig#formatstosupport"},"formatsToSupport")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/html5-qrcode-docs/docs/apis/interfaces/Html5QrcodeFullConfig#usebarcodedetectorifsupported"},"useBarCodeDetectorIfSupported")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/html5-qrcode-docs/docs/apis/interfaces/Html5QrcodeFullConfig#verbose"},"verbose"))),(0,n.kt)("h2",{id:"properties-1"},"Properties"),(0,n.kt)("h3",{id:"experimentalfeatures"},"experimentalFeatures"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,n.kt)("strong",{parentName:"p"},"experimentalFeatures"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"ExperimentalFeaturesConfig")),(0,n.kt)("p",null,"Config for experimental features."),(0,n.kt)("p",null,"Everything is false by default."),(0,n.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,n.kt)("p",null,"Html5QrcodeConfigs.experimentalFeatures"),(0,n.kt)("h4",{id:"defined-in"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/mebjas/html5-qrcode/blob/600717e/src/html5-qrcode.ts#L104"},"html5-qrcode.ts:104")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"formatstosupport"},"formatsToSupport"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,n.kt)("strong",{parentName:"p"},"formatsToSupport"),": ",(0,n.kt)("a",{parentName:"p",href:"/html5-qrcode-docs/docs/apis/enums/Html5QrcodeSupportedFormats"},(0,n.kt)("inlineCode",{parentName:"a"},"Html5QrcodeSupportedFormats")),"[]"),(0,n.kt)("p",null,"Array of formats to support of type ",(0,n.kt)("a",{parentName:"p",href:"/html5-qrcode-docs/docs/apis/enums/Html5QrcodeSupportedFormats"},"Html5QrcodeSupportedFormats"),"."),(0,n.kt)("p",null,"All invalid values would be ignored. If null or underfined all supported\nformats will be used for scanning. Unless you want to limit the scan to\nonly certain formats or want to improve performance, you should not set\nthis value."),(0,n.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,n.kt)("p",null,"Html5QrcodeConfigs.formatsToSupport"),(0,n.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/mebjas/html5-qrcode/blob/600717e/src/html5-qrcode.ts#L83"},"html5-qrcode.ts:83")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"usebarcodedetectorifsupported"},"useBarCodeDetectorIfSupported"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,n.kt)("strong",{parentName:"p"},"useBarCodeDetectorIfSupported"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"boolean")),(0,n.kt)("p",null,"BarcodeDetector is being implemented by browsers at the moment.\nIt has very limited browser support but as it gets available it could\nenable faster native code scanning experience."),(0,n.kt)("p",null,"Set this flag to true, to enable using BarcodeDetector if\nsupported. This is true by default."),(0,n.kt)("p",null,"Documentations:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/BarcodeDetector"},"https://developer.mozilla.org/en-US/docs/Web/API/BarcodeDetector")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://web.dev/shape-detection/#barcodedetector"},"https://web.dev/shape-detection/#barcodedetector"))),(0,n.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,n.kt)("p",null,"Html5QrcodeConfigs.useBarCodeDetectorIfSupported"),(0,n.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/mebjas/html5-qrcode/blob/600717e/src/html5-qrcode.ts#L97"},"html5-qrcode.ts:97")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"verbose"},"verbose"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"verbose"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,n.kt)("inlineCode",{parentName:"p"},"boolean")),(0,n.kt)("p",null,"If true, all logs would be printed to console. False by default."),(0,n.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/mebjas/html5-qrcode/blob/600717e/src/html5-qrcode.ts#L120"},"html5-qrcode.ts:120")))}c.isMDXComponent=!0}}]);