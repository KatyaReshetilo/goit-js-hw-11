parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"TCaP":[function(require,module,exports) {
const t=document.querySelector(".start"),e=document.querySelector(".stop"),r=document.querySelector("body"),n={intervalId:null,start(){t.setAttribute("disabled",!0),this.intervalId=setInterval(()=>{r.style.backgroundColor=o()},1e3)},stop(){t.removeAttribute("disabled"),clearInterval(this.intervalId)}};function o(){return`#${Math.floor(16777215*Math.random()).toString(16)}`}t.addEventListener("click",()=>{n.start()}),e.addEventListener("click",()=>{n.stop()});
},{}]},{},["TCaP"], null)
//# sourceMappingURL=/goit-js-hw-11/01-color-switcher.8c5e44fe.js.map