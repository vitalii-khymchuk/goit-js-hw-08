!function(){function t(t){return t&&t.__esModule?t.default:t}var e,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i="Expected a function",o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,s=c||l||Function("return this")(),d=Object.prototype.toString,p=Math.max,v=Math.min,g=function(){return s.Date.now()};function y(t,e,n){var o,r,u,a,f,c,l=0,s=!1,d=!1,y=!0;if("function"!=typeof t)throw new TypeError(i);function h(e){var n=o,i=r;return o=r=void 0,l=e,a=t.apply(i,n)}function j(t){return l=t,f=setTimeout(O,e),s?h(t):a}function w(t){var n=t-c;return void 0===c||n>=e||n<0||d&&t-l>=u}function O(){var t=g();if(w(t))return T(t);f=setTimeout(O,function(t){var n=e-(t-c);return d?v(n,u-(t-l)):n}(t))}function T(t){return f=void 0,y&&o?h(t):(o=r=void 0,a)}function S(){var t=g(),n=w(t);if(o=arguments,r=this,c=t,n){if(void 0===f)return j(c);if(d)return f=setTimeout(O,e),h(c)}return void 0===f&&(f=setTimeout(O,e)),a}return e=b(e)||0,m(n)&&(s=!!n.leading,u=(d="maxWait"in n)?p(b(n.maxWait)||0,e):u,y="trailing"in n?!!n.trailing:y),S.cancel=function(){void 0!==f&&clearTimeout(f),l=0,o=c=r=f=void 0},S.flush=function(){return void 0===f?a:T(g())},S}function m(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function b(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==d.call(t)}(t))return NaN;if(m(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=m(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var n=u.test(t);return n||a.test(t)?f(t.slice(2),n?2:8):r.test(t)?NaN:+t}e=function(t,e,n){var o=!0,r=!0;if("function"!=typeof t)throw new TypeError(i);return m(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),y(t,e,{leading:o,maxWait:e,trailing:r})};const h=document.querySelector(".feedback-form");h.addEventListener("submit",(function(t){console.log(j),t.target.reset(),localStorage.removeItem("inputsData")})),h.addEventListener("input",t(e)((function(t){j[t.target.name]=t.target.value,function(t){const e=JSON.stringify(t);localStorage.setItem("inputsData",e)}(j)}),500));const j={email:"",message:""};!function(){const t=localStorage.getItem("inputsData");if(t)try{!function(t){if(!t)return;for(const e in t)t.hasOwnProperty(e)&&(h[e].value=t[e],j[e]=t[e])}(JSON.parse(t))}catch(t){console.log(`sori chuvak(, ${t}`)}}()}();