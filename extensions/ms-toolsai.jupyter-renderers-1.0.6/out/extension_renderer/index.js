(()=>{"use strict";var e={549:e=>{e.exports=require("vscode")}},t={};function s(o){var n=t[o];if(void 0!==n)return n.exports;var r=t[o]={exports:{}};return e[o](r,r.exports,s),r.exports}var o={};(()=>{var e=o;Object.defineProperty(e,"__esModule",{value:!0}),e.activate=void 0;const t=s(549);e.activate=async function(e){const s=new t.EventEmitter,o=t.notebooks.createRendererMessaging("jupyter-notebook-renderer");return e.subscriptions.push(o.onDidReceiveMessage((({editor:e,message:n})=>{const r=n;r.type&&("isJupyterExtensionInstalled"!==r.type?s.fire({editor:e,message:r}):o.postMessage({type:"isJupyterExtensionInstalled",response:!!t.extensions.getExtension("ms-toolsai.jupyter")},e).then((e=>{console.log("Sent to UI",e)}),(e=>console.error("Failed to send",e))))}))),o.postMessage({type:"isJupyterExtensionInstalled",response:!!t.extensions.getExtension("ms-toolsai.jupyter")}),{onDidReceiveMessage:s.event}}})(),module.exports=o})();
//# sourceMappingURL=index.js.map