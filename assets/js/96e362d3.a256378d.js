"use strict";(self.webpackChunkhtml_5_qrcode_docs=self.webpackChunkhtml_5_qrcode_docs||[]).push([[38],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),d=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=d(n),u=r,k=m["".concat(o,".").concat(u)]||m[u]||p[u]||l;return n?a.createElement(k,i(i({ref:t},c),{},{components:n})):a.createElement(k,i({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3988:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const l={sidebar_position:2},i=void 0,s={unversionedId:"apis/classes/Html5QrcodeScanner",id:"apis/classes/Html5QrcodeScanner",title:"Html5QrcodeScanner",description:"html5-qrcode / Html5QrcodeScanner",source:"@site/docs/apis/classes/Html5QrcodeScanner.md",sourceDirName:"apis/classes",slug:"/apis/classes/Html5QrcodeScanner",permalink:"/html5-qrcode-docs/docs/apis/classes/Html5QrcodeScanner",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/apis/classes/Html5QrcodeScanner.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Html5Qrcode",permalink:"/html5-qrcode-docs/docs/apis/classes/Html5Qrcode"},next:{title:"Enums",permalink:"/html5-qrcode-docs/docs/category/enums"}},o={},d=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Constructors",id:"constructors",level:3},{value:"Methods",id:"methods",level:3},{value:"Constructors",id:"constructors-1",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Methods",id:"methods-1",level:2},{value:"applyVideoConstraints",id:"applyvideoconstraints",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"clear",id:"clear",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"getRunningTrackCapabilities",id:"getrunningtrackcapabilities",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"getRunningTrackSettings",id:"getrunningtracksettings",level:3},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"getState",id:"getstate",level:3},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"pause",id:"pause",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-5",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"render",id:"render",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-6",level:4},{value:"Defined in",id:"defined-in-7",level:4},{value:"resume",id:"resume",level:3},{value:"Returns",id:"returns-7",level:4},{value:"Defined in",id:"defined-in-8",level:4}],c={toc:d};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"../"},"html5-qrcode")," / Html5QrcodeScanner"),(0,r.kt)("h1",{id:"class-html5qrcodescanner"},"Class: Html5QrcodeScanner"),(0,r.kt)("p",null,"End to end web based QR and Barcode Scanner."),(0,r.kt)("p",null,"Use this class for setting up QR scanner in your web application with\nfew lines of codes."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Supports camera as well as file based scanning."),(0,r.kt)("li",{parentName:"ul"},"Depending on device supports camera selection, zoom and torch features."),(0,r.kt)("li",{parentName:"ul"},"Supports different kind of 2D and 1D codes ",(0,r.kt)("a",{parentName:"li",href:"/html5-qrcode-docs/docs/apis/enums/Html5QrcodeSupportedFormats"},"Html5QrcodeSupportedFormats"),".")),(0,r.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,r.kt)("h3",{id:"constructors"},"Constructors"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/html5-qrcode-docs/docs/apis/classes/Html5QrcodeScanner#constructor"},"constructor"))),(0,r.kt)("h3",{id:"methods"},"Methods"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/html5-qrcode-docs/docs/apis/classes/Html5QrcodeScanner#applyvideoconstraints"},"applyVideoConstraints")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/html5-qrcode-docs/docs/apis/classes/Html5QrcodeScanner#clear"},"clear")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/html5-qrcode-docs/docs/apis/classes/Html5QrcodeScanner#getrunningtrackcapabilities"},"getRunningTrackCapabilities")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/html5-qrcode-docs/docs/apis/classes/Html5QrcodeScanner#getrunningtracksettings"},"getRunningTrackSettings")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/html5-qrcode-docs/docs/apis/classes/Html5QrcodeScanner#getstate"},"getState")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/html5-qrcode-docs/docs/apis/classes/Html5QrcodeScanner#pause"},"pause")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/html5-qrcode-docs/docs/apis/classes/Html5QrcodeScanner#render"},"render")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/html5-qrcode-docs/docs/apis/classes/Html5QrcodeScanner#resume"},"resume"))),(0,r.kt)("h2",{id:"constructors-1"},"Constructors"),(0,r.kt)("h3",{id:"constructor"},"constructor"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"new Html5QrcodeScanner"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"elementId"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"config"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"verbose"),")"),(0,r.kt)("p",null,"Creates instance of this class."),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"elementId")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Id of the HTML element.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"config")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"undefined")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"Html5QrcodeScannerConfig")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Extra configurations to tune the code scanner.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"verbose")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"undefined")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:"left"},"If true, all logs would be printed to console.")))),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/mebjas/html5-qrcode/blob/600717e/src/html5-qrcode-scanner.ts#L208"},"html5-qrcode-scanner.ts:208")),(0,r.kt)("h2",{id:"methods-1"},"Methods"),(0,r.kt)("h3",{id:"applyvideoconstraints"},"applyVideoConstraints"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"applyVideoConstraints"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"videoConstaints"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,r.kt)("p",null,"Apply a video constraints on running video track from camera."),(0,r.kt)("p",null,"Note: Should only be called if ",(0,r.kt)("a",{parentName:"p",href:"/html5-qrcode-docs/docs/apis/classes/Html5QrcodeScanner#getstate"},"()"),"\nreturns ",(0,r.kt)("a",{parentName:"p",href:"/html5-qrcode-docs/docs/apis/enums/Html5QrcodeScannerState#scanning"},"SCANNING")," or\n",(0,r.kt)("a",{parentName:"p",href:"/html5-qrcode-docs/docs/apis/enums/Html5QrcodeScannerState#paused"},"PAUSED"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null,"error if the scanning is not in running state."),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"videoConstaints")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"MediaTrackConstraints"))))),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,r.kt)("p",null,"a Promise which succeeds if the passed constraints are applied,\nfails otherwise."),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/mebjas/html5-qrcode/blob/600717e/src/html5-qrcode-scanner.ts#L428"},"html5-qrcode-scanner.ts:428")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"clear"},"clear"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"clear"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,r.kt)("p",null,"Removes the QR Code scanner UI."),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,r.kt)("p",null,"Promise which succeeds if the cleanup is complete successfully,\nfails otherwise."),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/mebjas/html5-qrcode/blob/600717e/src/html5-qrcode-scanner.ts#L335"},"html5-qrcode-scanner.ts:335")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getrunningtrackcapabilities"},"getRunningTrackCapabilities"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getRunningTrackCapabilities"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"MediaTrackCapabilities")),(0,r.kt)("p",null,"Returns the capabilities of the running video track."),(0,r.kt)("p",null,"Read more: ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrack/getConstraints"},"https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrack/getConstraints")),(0,r.kt)("p",null,"Note: Should only be called if ",(0,r.kt)("a",{parentName:"p",href:"/html5-qrcode-docs/docs/apis/classes/Html5QrcodeScanner#getstate"},"()"),"\nreturns ",(0,r.kt)("a",{parentName:"p",href:"/html5-qrcode-docs/docs/apis/enums/Html5QrcodeScannerState#scanning"},"SCANNING")," or\n",(0,r.kt)("a",{parentName:"p",href:"/html5-qrcode-docs/docs/apis/enums/Html5QrcodeScannerState#paused"},"PAUSED"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null,"error if the scanning is not in running state."),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"MediaTrackCapabilities")),(0,r.kt)("p",null,"the capabilities of a running video track."),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/mebjas/html5-qrcode/blob/600717e/src/html5-qrcode-scanner.ts#L393"},"html5-qrcode-scanner.ts:393")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getrunningtracksettings"},"getRunningTrackSettings"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getRunningTrackSettings"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"MediaTrackSettings")),(0,r.kt)("p",null,"Returns the object containing the current values of each constrainable\nproperty of the running video track."),(0,r.kt)("p",null,"Read more: ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrack/getSettings"},"https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrack/getSettings")),(0,r.kt)("p",null,"Note: Should only be called if ",(0,r.kt)("a",{parentName:"p",href:"/html5-qrcode-docs/docs/apis/classes/Html5QrcodeScanner#getstate"},"()"),"\nreturns ",(0,r.kt)("a",{parentName:"p",href:"/html5-qrcode-docs/docs/apis/enums/Html5QrcodeScannerState#scanning"},"SCANNING")," or\n",(0,r.kt)("a",{parentName:"p",href:"/html5-qrcode-docs/docs/apis/enums/Html5QrcodeScannerState#paused"},"PAUSED"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null,"error if the scanning is not in running state."),(0,r.kt)("h4",{id:"returns-3"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"MediaTrackSettings")),(0,r.kt)("p",null,"the supported settings of the running video track."),(0,r.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/mebjas/html5-qrcode/blob/600717e/src/html5-qrcode-scanner.ts#L410"},"html5-qrcode-scanner.ts:410")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getstate"},"getState"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getState"),"(): ",(0,r.kt)("a",{parentName:"p",href:"/html5-qrcode-docs/docs/apis/enums/Html5QrcodeScannerState"},(0,r.kt)("inlineCode",{parentName:"a"},"Html5QrcodeScannerState"))),(0,r.kt)("p",null,"Gets state of the camera scan."),(0,r.kt)("h4",{id:"returns-4"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/html5-qrcode-docs/docs/apis/enums/Html5QrcodeScannerState"},(0,r.kt)("inlineCode",{parentName:"a"},"Html5QrcodeScannerState"))),(0,r.kt)("p",null,"state of type ",(0,r.kt)("a",{parentName:"p",href:"/html5-qrcode-docs/docs/apis/enums/Html5QrcodeScannerState"},"Html5QrcodeScannerState"),"."),(0,r.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/mebjas/html5-qrcode/blob/600717e/src/html5-qrcode-scanner.ts#L325"},"html5-qrcode-scanner.ts:325")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"pause"},"pause"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"pause"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"shouldPauseVideo?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"Pauses the ongoing scan."),(0,r.kt)("p",null,"Notes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Should only be called if camera scan is ongoing.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null,"error if method is called when scanner is not in scanning state."),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"shouldPauseVideo?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:"left"},"(Optional, default = false) If ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," the video will be paused.")))),(0,r.kt)("h4",{id:"returns-5"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/mebjas/html5-qrcode/blob/600717e/src/html5-qrcode-scanner.ts#L294"},"html5-qrcode-scanner.ts:294")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"render"},"render"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"render"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"qrCodeSuccessCallback"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"qrCodeErrorCallback"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"Renders the User Interface."),(0,r.kt)("h4",{id:"parameters-3"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"qrCodeSuccessCallback")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"QrcodeSuccessCallback")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Callback called when an instance of a QR code or any other supported bar code is found.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"qrCodeErrorCallback")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"undefined")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"QrcodeErrorCallback")),(0,r.kt)("td",{parentName:"tr",align:"left"},"optional, callback called in cases where no instance of QR code or any other supported bar code is found.")))),(0,r.kt)("h4",{id:"returns-6"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/mebjas/html5-qrcode/blob/600717e/src/html5-qrcode-scanner.ts#L241"},"html5-qrcode-scanner.ts:241")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"resume"},"resume"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"resume"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"Resumes the paused scan."),(0,r.kt)("p",null,"If the video was previously paused by setting ",(0,r.kt)("inlineCode",{parentName:"p"},"shouldPauseVideo"),"\nto ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," in ",(0,r.kt)("a",{parentName:"p",href:"/html5-qrcode-docs/docs/apis/classes/Html5QrcodeScanner#pause"},"(shouldPauseVideo)"),",\ncalling this method will resume the video."),(0,r.kt)("p",null,"Notes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Should only be called if camera scan is ongoing."),(0,r.kt)("li",{parentName:"ul"},"With this caller will start getting results in success and error\ncallbacks.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null,"error if method is called when scanner is not in paused state."),(0,r.kt)("h4",{id:"returns-7"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/mebjas/html5-qrcode/blob/600717e/src/html5-qrcode-scanner.ts#L316"},"html5-qrcode-scanner.ts:316")))}p.isMDXComponent=!0}}]);