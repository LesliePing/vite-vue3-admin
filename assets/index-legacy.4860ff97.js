System.register(["./index-legacy.7f0fae95.js"],(function(t){"use strict";var e;return{setters:[function(t){e=t.bD}],execute:function(){t({d:function t(n={},o={}){let r;for(r in o)n[r]=e(n[r])?t(n[r],o[r]):n[r]=o[r];return n},f:function(t,e=2){if(0===t)return"0 Bytes";const n=e<0?0:e,o=Math.floor(Math.log(t)/Math.log(1024));return`${parseFloat((t/Math.pow(1024,o)).toFixed(n))} ${["B","KB","MB","GB","TB","PB","EB","ZB","YB"][o]}`}}),t("w",((t,e)=>{const n=t;return n.install=o=>{o.component(n.name||n.displayName,t),e&&(o.config.globalProperties[e]=t)},t}))}}}));
