function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=u||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,v=Math.min,g=function(){return l.Date.now()};function m(e,t,n){var o,r,i,a,f,u,c=0,l=!1,s=!1,m=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,i=r;return o=r=void 0,c=t,a=e.apply(i,n)}function h(e){return c=e,f=setTimeout(w,t),l?y(e):a}function j(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-c>=i}function w(){var e=g();if(j(e))return O(e);f=setTimeout(w,function(e){var n=t-(e-u);return s?v(n,i-(e-c)):n}(e))}function O(e){return f=void 0,m&&o?y(e):(o=r=void 0,a)}function T(){var e=g(),n=j(e);if(o=arguments,r=this,u=e,n){if(void 0===f)return h(u);if(s)return f=setTimeout(w,t),y(u)}return void 0===f&&(f=setTimeout(w,t)),a}return t=b(t)||0,p(n)&&(l=!!n.leading,i=(s="maxWait"in n)?d(b(n.maxWait)||0,t):i,m="trailing"in n?!!n.trailing:m),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=u=r=f=void 0},T.flush=function(){return void 0===f?a:O(g())},T}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=i.test(e);return n||a.test(e)?f(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),m(e,t,{leading:o,maxWait:t,trailing:r})};const y=document.querySelector(".feedback-form");y.addEventListener("input",e(t)((function(e){h[e.target.name]=e.target.value.trim(),localStorage.setItem("feedback-form-state",JSON.stringify(h))}),500)),y.addEventListener("submit",(function(e){e.preventDefault(),console.log(h),h={},e.target.reset(),localStorage.removeItem("feedback-form-state")}));let h={};window.addEventListener("load",(()=>{try{const e=localStorage.getItem("feedback-form-state");if(!e)return;h=JSON.parse(e),Object.entries(h).forEach((({key:e,val:t})=>{y.elements[e].value=t}))}catch(e){console.log(e.message)}}));
//# sourceMappingURL=03-feedback.80f5eba7.js.map
