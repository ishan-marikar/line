module.exports=function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,t,n){Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=60)}([function(e,t){function n(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}e.exports=n},function(e,t,n){function r(e){return null==e?void 0===e?u:c:(e=Object(e),a&&a in e?i(e):s(e))}var o=n(8),i=n(38),s=n(44),c="[object Null]",u="[object Undefined]",a=o?o.toStringTag:void 0;e.exports=r},function(e,t,n){var r=n(12),o="object"==typeof self&&self&&self.Object===Object&&self,i=r||o||Function("return this")();e.exports=i},function(e,t,n){function r(e){return null!=e&&i(e.length)&&!o(e)}var o=n(4),i=n(17);e.exports=r},function(e,t,n){function r(e){if(!i(e))return!1;var t=o(e);return t==c||t==u||t==s||t==a}var o=n(1),i=n(0),s="[object AsyncFunction]",c="[object Function]",u="[object GeneratorFunction]",a="[object Proxy]";e.exports=r},function(e,t){function n(e){return null!=e&&"object"==typeof e}e.exports=n},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){return new Promise(function(t){return setTimeout(function(e){return t()},e)})}function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n={maxDelay:160,maxCount:0,initialDelay:3,increaseFactor:2};t=(0,u.default)(n,t);var r=void 0,i=1,s=t.initialDelay,c=function n(){return e().catch(function(e){if(i++,s*=t.increaseFactor,0!=t.maxCount&&i>t.maxCount)throw r&&clearTimeout(r),e;return o(1e3*s/2).then(function(e){return n()})})};return c()}function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:4;return("0000"+(Math.random()*Math.pow(36,e)<<0).toString(36)).slice(-e)}var c=n(50),u=r(c);e.exports={promiseDelay:o,retry:i,generateDummyId:s}},function(e,t){e.exports=function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,t,n){Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=19)}([function(e,t,n){function r(e){return null==e?void 0===e?u:c:(e=Object(e),a&&a in e?i(e):s(e))}var o=n(7),i=n(12),s=n(14),c="[object Null]",u="[object Undefined]",a=o?o.toStringTag:void 0;e.exports=r},function(e,t){function n(e){return null!=e&&"object"==typeof e}e.exports=n},function(e,t){var n=Array.isArray;e.exports=n},function(e,t,n){function r(e){if(!i(e))return!1;var t=o(e);return t==c||t==u||t==s||t==a}var o=n(0),i=n(16),s="[object AsyncFunction]",c="[object Function]",u="[object GeneratorFunction]",a="[object Proxy]";e.exports=r},function(e,t,n){function r(e){return"number"==typeof e||i(e)&&o(e)==s}var o=n(0),i=n(1),s="[object Number]";e.exports=r},function(e,t,n){var r=n(10),o=n(11),i=n(13),s=i&&i.isRegExp,c=s?o(s):r;e.exports=c},function(e,t,n){function r(e){return"string"==typeof e||!i(e)&&s(e)&&o(e)==c}var o=n(0),i=n(2),s=n(1),c="[object String]";e.exports=r},function(e,t,n){var r=n(15),o=r.Symbol;e.exports=o},function(e,t,n){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n}).call(t,n(17))},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(6),s=n(5),c=n(3),u=n(4),a=function(){function e(t,n){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;if(r(this,e),i(t))this.eventName=t;else{if(!s(t))throw new Error("Event name to be listened should be string or regex");this.eventNameRegex=t}if(!c(n))throw new Error("Handler should be a function");if(!u(o)||parseInt(o,10)!=o)throw new Error("Execute limit should be integer");this.handler=n,this.execCount=0,this.execLimit=o}return o(e,[{key:"execute",value:function(e,t){var n=this.handler.apply(e,t);return this.execCount++,this.execLimit&&this.execCount>=this.execLimit&&this.onExpire(this),n}},{key:"testRegexWith",value:function(e){if(!i(e))throw new Error("Event name should be string");var t=this.eventNameRegex;if(!t)throw new Error("This listener is not regex");return t.test(e)}},{key:"onExpire",value:function(){}}]),e}();e.exports=a},function(e,t,n){function r(e){return i(e)&&o(e)==s}var o=n(0),i=n(1),s="[object RegExp]";e.exports=r},function(e,t){function n(e){return function(t){return e(t)}}e.exports=n},function(e,t,n){function r(e){var t=s.call(e,u),n=e[u];try{e[u]=void 0;var r=!0}catch(e){}var o=c.call(e);return r&&(t?e[u]=n:delete e[u]),o}var o=n(7),i=Object.prototype,s=i.hasOwnProperty,c=i.toString,u=o?o.toStringTag:void 0;e.exports=r},function(e,t,n){(function(e){var r=n(8),o="object"==typeof t&&t&&!t.nodeType&&t,i=o&&"object"==typeof e&&e&&!e.nodeType&&e,s=i&&i.exports===o,c=s&&r.process,u=function(){try{return c&&c.binding("util")}catch(e){}}();e.exports=u}).call(t,n(18)(e))},function(e,t){function n(e){return o.call(e)}var r=Object.prototype,o=r.toString;e.exports=n},function(e,t,n){var r=n(8),o="object"==typeof self&&self&&self.Object===Object&&self,i=r||o||Function("return this")();e.exports=i},function(e,t){function n(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}e.exports=n},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,configurable:!1,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,configurable:!1,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){return"object"===("undefined"==typeof e?"undefined":s(e))&&"object"===("undefined"==typeof t?"undefined":s(t))&&e.toString()===t.toString()}function i(e,t){var n=[];return a(t)?n=e.filter(t):e.indexOf(t)>-1&&n.push(t),n.forEach(function(t){var n=e.indexOf(t);e.splice(n,1)}),n}var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(2),a=n(3),f=n(4),l=n(5),h=n(6),v=n(9),d=function(){function e(){r(this,e),this.maxListeners_=e.defaultMaxListeners,this.maxRegexListeners_=e.defaultMaxRegexListeners,this.listeners_=[],this.regexListeners_=[],this.eventListeners_={}}return c(e,[{key:"addListener",value:function(e,t,n,r){var o=this;if(u(e)||u(t)){var i=function(){var r=u(e)?e:[e],i=u(t)?t:[t];return r.forEach(function(e){i.forEach(function(t){o.addListener(e,t,n)})}),{v:o}}();if("object"===("undefined"==typeof i?"undefined":s(i)))return i.v}var c=new v(e,t,n);if(c.eventName){if(this.eventListeners_[c.eventName]||(this.eventListeners_[c.eventName]=[]),this.eventListeners_[c.eventName].length>=this.maxListeners_)throw new Error("Max listener count reached for event: "+e);this.emit("newListener",e,t),r?this.eventListeners_[c.eventName].unshift(c):this.eventListeners_[c.eventName].push(c)}else if(c.eventNameRegex){if(this.regexListeners_.length>=this.maxRegexListeners_)throw new Error("Max regex listener count reached");this.emit("newListener",e,t),r?this.regexListeners_.unshift(c):this.regexListeners_.push(c)}return c.onExpire=this.removeListener_.bind(this),this.listeners_.push(c),this}},{key:"prependListener",value:function(e,t,n){return this.addListener(e,t,n,!0)}},{key:"prependOnceListener",value:function(e,t){return this.addListener(e,t,1,!0)}},{key:"prependManyListener",value:function(e,t,n){return this.addListener(e,n,t,!0)}},{key:"removeListener_",value:function(e){i(this.listeners_,e),e.eventName&&u(this.eventListeners_[e.eventName])?(i(this.eventListeners_[e.eventName],e),0==this.eventListeners_[e.eventName].length&&delete this.eventListeners_[e.eventName]):e.eventNameRegex&&i(this.regexListeners_,e),this.emit("removeListener",e.eventName||e.eventNameRegex,e.handler)}},{key:"removeAllListeners",value:function(e){var t=this;if(u(e))e.forEach(function(e){return t.removeAllListeners(e)});else if(h(e)&&u(this.eventListeners_[e])){var n=this.eventListeners_[e].slice();n.forEach(function(e){t.removeListener_(e)})}else l(e)?!function(){var n=e,r=t.regexListeners_.filter(function(e){return o(e.eventNameRegex,n)});r.forEach(function(e){return t.removeListener_(e)})}():(this.removeAllListeners(this.eventNames()),this.removeAllListeners(this.regexes()));return this}},{key:"removeListener",value:function(e,t){var n=this;if(u(e)||u(t))!function(){var r=u(e)?e:[e],o=u(t)?t:[t];r.forEach(function(e){o.forEach(function(t){n.removeListener(e,t)})})}();else if(h(e)&&u(this.eventListeners_[e])){var r=this.eventListeners_[e].filter(function(e){return e.handler==t});r.forEach(function(e){return n.removeListener_(e)})}else{if(!l(e))throw new Error("Event name should be string or regex.");!function(){var r=e,i=n.regexListeners_.filter(function(e){return o(e.eventNameRegex,r)&&e.handler==t});i.forEach(function(e){return n.removeListener_(e)})}()}return this}},{key:"eventNames",value:function(){return Object.keys(this.eventListeners_)}},{key:"regexes",value:function(){return this.regexListeners_.map(function(e){return e.eventNameRegex})}},{key:"getMaxListeners",value:function(){return this.maxListeners_}},{key:"setMaxListeners",value:function(e){if(!f(e)||parseInt(e,10)!=e)throw new Error("n must be integer");return this.maxListeners_=e,this}},{key:"getMaxRegexListeners",value:function(){return this.maxRegexListeners_}},{key:"setMaxRegexListeners",value:function(e){if(!f(e)||parseInt(e,10)!=e)throw new Error("n must be integer");return this.maxRegexListeners_=e,this}},{key:"listenerCount",value:function(e){if(h(e))return this.eventListeners_[e]?this.eventListeners_[e].length:0;if(l(e))return this.regexListeners_.filter(function(t){return o(e,t.eventNameRegex)}).length;throw new Error("Event name should be string or regex.")}},{key:"listeners",value:function(e){if(h(e))return this.eventListeners_[e]?this.eventListeners_[e].map(function(e){return e.handler}):[];if(l(e))return this.regexListeners_.filter(function(t){return o(e,t.eventNameRegex)}).map(function(e){return e.handler});throw new Error("Event name should be string or regex.")}},{key:"on",value:function(e,t){return this.addListener(e,t)}},{key:"once",value:function(e,t){return this.addListener(e,t,1)}},{key:"many",value:function(e,t,n){return this.addListener(e,n,t)}},{key:"emit",value:function(e){for(var t=this,n=arguments.length,r=Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];if(u(e)){var i=function(){var n=[];return e.forEach(function(e){var o=t.emit.apply(t,[e].concat(r));n=n.concat(o)}),{v:n}}();if("object"===("undefined"==typeof i?"undefined":s(i)))return i.v}else if(!h(e))throw new Error("Event name should be string");var c=[],a={name:e};if(this.eventListeners_[e]){var f=this.eventListeners_[e].map(function(e){return e.execute(Object.assign({},e,{event:a}),r)});c=c.concat(f)}var l=this.regexListeners_.filter(function(t){return t.testRegexWith(e)}).map(function(e){return e.execute(Object.assign({},e,{event:a}),r)});return c=c.concat(l),c.length>0&&c}},{key:"emitAsync",value:function(){return Promise.all(this.emit.apply(this,arguments))}}]),e}();d.defaultMaxListeners=10,d.defaultMaxRegexListeners=10,d.Listener=v,e.exports=d}])},function(e,t,n){var r=n(2),o=r.Symbol;e.exports=o},function(e,t,n){function r(e,t,n){var r=e[t];c.call(e,t)&&i(r,n)&&(void 0!==n||t in e)||o(e,t,n)}var o=n(10),i=n(15),s=Object.prototype,c=s.hasOwnProperty;e.exports=r},function(e,t,n){function r(e,t,n){"__proto__"==t&&o?o(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}var o=n(11);e.exports=r},function(e,t,n){var r=n(37),o=function(){try{var e=r(Object,"defineProperty");return e({},"",{}),e}catch(e){}}();e.exports=o},function(e,t,n){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n}).call(t,n(59))},function(e,t){function n(e,t){return t=null==t?r:t,!!t&&("number"==typeof e||o.test(e))&&e>-1&&e%1==0&&e<t}var r=9007199254740991,o=/^(?:0|[1-9]\d*)$/;e.exports=n},function(e,t){function n(e){var t=e&&e.constructor,n="function"==typeof t&&t.prototype||r;return e===n}var r=Object.prototype;e.exports=n},function(e,t){function n(e,t){return e===t||e!==e&&t!==t}e.exports=n},function(e,t){function n(e){return e}e.exports=n},function(e,t){function n(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=r}var r=9007199254740991;e.exports=n},function(e,t,n){function r(e){return s(e)?o(e):i(e)}var o=n(23),i=n(28),s=n(3);e.exports=r},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,configurable:!1,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,configurable:!1,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(){function e(){var t=this,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=r.handler,i=void 0===o?function(){}:o,s=r.onExpire,c=void 0===s?function(){}:s,u=r.timeout,a=void 0===u?0:u;n(this,e),this.resolve_=null,this.reject_=null,this.timeout_=null,this.onExpire_=c,this.isFinished_=!1,this.promise=new Promise(function(e,n){t.resolve_=e,t.reject_=n;try{i(t)}catch(e){t.reject(e)}}),a>0&&(this.timeout_=setTimeout(this.expire.bind(this),a))}return r(e,[{key:"resolve",value:function(e){this.isFinished_||(this.isFinished_=!0,this.clearTimeout_(),this.resolve_(e))}},{key:"reject",value:function(e){this.isFinished_||(this.isFinished_=!0,this.clearTimeout_(),this.reject_(e))}},{key:"expire",value:function(){this.isFinished_=!0,this.clearTimeout_(),this.onExpire_(),this.reject_(new Error("Timeout exceed"))}},{key:"then",value:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.promise.then.apply(this.promise,t)}},{key:"catch",value:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.promise.catch.apply(this.promise,t)}},{key:"clearTimeout_",value:function(){this.timeout_&&(clearTimeout(this.timeout_),this.timeout_=null)}}]),e}();e.exports=o},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(56),a=r(u),f=n(0),l=r(f),h=n(4),v=r(h),d=n(58),p=r(d),y=n(6),m=n(7),b=r(m),x=function(e){function t(e){var n=e.name,r=e.payload,s=e.id,c=e.err;o(this,t);var u=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return u.name=n,u.payload=r,u.id=s,u.err=c,u.isResponded_=!1,u}return s(t,e),c(t,null,[{key:"parse",value:function(e){try{var n=JSON.parse(e);return new t({name:n.n,payload:n.p,err:n.e,id:n.i})}catch(e){throw new Error("Could not parse message.")}}}]),c(t,[{key:"setId",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,y.generateDummyId)();return this.id=e,e}},{key:"createResponse",value:function(e,n){return new t({name:"_r",payload:n,err:e,id:this.id})}},{key:"resolve",value:function(e){var t=this;return(0,a.default)(this.id)?console.warn("[line] A message without an id cannot be resolved."):this.isResponded_?console.warn("[line] This message has already been ended."):(0,l.default)(e)&&(0,v.default)(e.then)?void e.then(function(n){t.isResponded_=!0,t.emit("resolved",e)}).catch(function(e){t.isResponded_=!0,t.emit("rejected",e)}):(this.isResponded_=!0,void this.emit("resolved",e))}},{key:"reject",value:function(e){return(0,a.default)(this.id)?console.warn("[line] A message without an id cannot be rejected."):this.isResponded_?console.warn("[line] This message has already been ended."):(this.isResponded_=!0,void this.emit("rejected",e))}},{key:"toString",value:function(){try{var e={n:this.name};return(0,a.default)(this.payload)||(e.p=this.payload),(0,a.default)(this.id)||(e.i=this.id),(0,a.default)(this.err)||(e.e=this.err),JSON.stringify(e)}catch(e){throw new Error("Could not stringify message.")}}},{key:"dispose",value:function(){var e=this,t=this.eventNames();t.forEach(function(t){return e.removeAllListeners(t)})}}]),t}(b.default);t.default=x,x.Names={RESPONSE:"_r",HANDSHAKE:"_h"},x.ReservedNames=(0,p.default)(x.Names)},function(e,t){function n(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}e.exports=n},function(e,t,n){function r(e,t){var n=s(e),r=!n&&i(e),f=!n&&!r&&c(e),h=!n&&!r&&!f&&a(e),v=n||r||f||h,d=v?o(e.length,String):[],p=d.length;for(var y in e)!t&&!l.call(e,y)||v&&("length"==y||f&&("offset"==y||"parent"==y)||h&&("buffer"==y||"byteLength"==y||"byteOffset"==y)||u(y,p))||d.push(y);return d}var o=n(31),i=n(52),s=n(53),c=n(54),u=n(13),a=n(55),f=Object.prototype,l=f.hasOwnProperty;e.exports=r},function(e,t){function n(e,t){for(var n=-1,r=null==e?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o}e.exports=n},function(e,t,n){function r(e){return i(e)&&o(e)==s}var o=n(1),i=n(5),s="[object Arguments]";e.exports=r},function(e,t,n){function r(e){if(!s(e)||i(e))return!1;var t=o(e)?d:a;return t.test(c(e))}var o=n(4),i=n(41),s=n(0),c=n(49),u=/[\\^$.*+?()[\]{}|]/g,a=/^\[object .+?Constructor\]$/,f=Function.prototype,l=Object.prototype,h=f.toString,v=l.hasOwnProperty,d=RegExp("^"+h.call(v).replace(u,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");e.exports=r},function(e,t,n){function r(e){return s(e)&&i(e.length)&&!!k[o(e)]}var o=n(1),i=n(17),s=n(5),c="[object Arguments]",u="[object Array]",a="[object Boolean]",f="[object Date]",l="[object Error]",h="[object Function]",v="[object Map]",d="[object Number]",p="[object Object]",y="[object RegExp]",m="[object Set]",b="[object String]",x="[object WeakMap]",_="[object ArrayBuffer]",g="[object DataView]",j="[object Float32Array]",w="[object Float64Array]",E="[object Int8Array]",O="[object Int16Array]",L="[object Int32Array]",N="[object Uint8Array]",S="[object Uint8ClampedArray]",R="[object Uint16Array]",C="[object Uint32Array]",k={};k[j]=k[w]=k[E]=k[O]=k[L]=k[N]=k[S]=k[R]=k[C]=!0,k[c]=k[u]=k[_]=k[a]=k[g]=k[f]=k[l]=k[h]=k[v]=k[d]=k[p]=k[y]=k[m]=k[b]=k[x]=!1,e.exports=r},function(e,t,n){function r(e){if(!o(e))return i(e);var t=[];for(var n in Object(e))c.call(e,n)&&"constructor"!=n&&t.push(n);return t}var o=n(14),i=n(42),s=Object.prototype,c=s.hasOwnProperty;e.exports=r},function(e,t,n){function r(e,t){return s(i(e,t,o),e+"")}var o=n(16),i=n(46),s=n(47);e.exports=r},function(e,t,n){var r=n(51),o=n(11),i=n(16),s=o?function(e,t){return o(e,"toString",{configurable:!0,enumerable:!1,value:r(t),writable:!0})}:i;e.exports=s},function(e,t){function n(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}e.exports=n},function(e,t){function n(e){return function(t){return e(t)}}e.exports=n},function(e,t,n){function r(e,t){return o(t,function(t){return e[t]})}var o=n(24);e.exports=r},function(e,t,n){function r(e,t,n,r){var s=!n;n||(n={});for(var c=-1,u=t.length;++c<u;){var a=t[c],f=r?r(n[a],e[a],a,n,e):void 0;void 0===f&&(f=e[a]),s?i(n,a,f):o(n,a,f)}return n}var o=n(9),i=n(10);e.exports=r},function(e,t,n){var r=n(2),o=r["__core-js_shared__"];e.exports=o},function(e,t,n){function r(e){return o(function(t,n){var r=-1,o=n.length,s=o>1?n[o-1]:void 0,c=o>2?n[2]:void 0;for(s=e.length>3&&"function"==typeof s?(o--,s):void 0,c&&i(n[0],n[1],c)&&(s=o<3?void 0:s,o=1),t=Object(t);++r<o;){var u=n[r];u&&e(t,u,r,s)}return t})}var o=n(29),i=n(40);e.exports=r},function(e,t,n){function r(e,t){var n=i(e,t);return o(n)?n:void 0}var o=n(26),i=n(39);e.exports=r},function(e,t,n){function r(e){var t=s.call(e,u),n=e[u];try{e[u]=void 0;var r=!0}catch(e){}var o=c.call(e);return r&&(t?e[u]=n:delete e[u]),o}var o=n(8),i=Object.prototype,s=i.hasOwnProperty,c=i.toString,u=o?o.toStringTag:void 0;e.exports=r},function(e,t){function n(e,t){return null==e?void 0:e[t]}e.exports=n},function(e,t,n){function r(e,t,n){if(!c(n))return!1;var r=typeof t;return!!("number"==r?i(n)&&s(t,n.length):"string"==r&&t in n)&&o(n[t],e)}var o=n(15),i=n(3),s=n(13),c=n(0);e.exports=r},function(e,t,n){function r(e){return!!i&&i in e}var o=n(35),i=function(){var e=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();e.exports=r},function(e,t,n){var r=n(45),o=r(Object.keys,Object);e.exports=o},function(e,t,n){(function(e){var r=n(12),o="object"==typeof t&&t&&!t.nodeType&&t,i=o&&"object"==typeof e&&e&&!e.nodeType&&e,s=i&&i.exports===o,c=s&&r.process,u=function(){try{return c&&c.binding("util")}catch(e){}}();e.exports=u}).call(t,n(19)(e))},function(e,t){function n(e){return o.call(e)}var r=Object.prototype,o=r.toString;e.exports=n},function(e,t){function n(e,t){return function(n){return e(t(n))}}e.exports=n},function(e,t,n){function r(e,t,n){return t=i(void 0===t?e.length-1:t,0),function(){for(var r=arguments,s=-1,c=i(r.length-t,0),u=Array(c);++s<c;)u[s]=r[t+s];s=-1;for(var a=Array(t+1);++s<t;)a[s]=r[s];return a[t]=n(u),o(e,this,a)}}var o=n(22),i=Math.max;e.exports=r},function(e,t,n){var r=n(30),o=n(48),i=o(r);e.exports=i},function(e,t){function n(e){var t=0,n=0;return function(){var s=i(),c=o-(s-n);if(n=s,c>0){if(++t>=r)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}var r=800,o=16,i=Date.now;e.exports=n},function(e,t){function n(e){if(null!=e){try{return o.call(e)}catch(e){}try{return e+""}catch(e){}}return""}var r=Function.prototype,o=r.toString;e.exports=n},function(e,t,n){var r=n(9),o=n(34),i=n(36),s=n(3),c=n(14),u=n(18),a=Object.prototype,f=a.hasOwnProperty,l=i(function(e,t){if(c(t)||s(t))return void o(t,u(t),e);for(var n in t)f.call(t,n)&&r(e,n,t[n])});e.exports=l},function(e,t){function n(e){return function(){return e}}e.exports=n},function(e,t,n){var r=n(25),o=n(5),i=Object.prototype,s=i.hasOwnProperty,c=i.propertyIsEnumerable,u=r(function(){return arguments}())?r:function(e){return o(e)&&s.call(e,"callee")&&!c.call(e,"callee")};e.exports=u},function(e,t){var n=Array.isArray;e.exports=n},function(e,t,n){(function(e){var r=n(2),o=n(57),i="object"==typeof t&&t&&!t.nodeType&&t,s=i&&"object"==typeof e&&e&&!e.nodeType&&e,c=s&&s.exports===i,u=c?r.Buffer:void 0,a=u?u.isBuffer:void 0,f=a||o;e.exports=f}).call(t,n(19)(e))},function(e,t,n){var r=n(27),o=n(32),i=n(43),s=i&&i.isTypedArray,c=s?o(s):r;e.exports=c},function(e,t){function n(e){return void 0===e}e.exports=n},function(e,t){function n(){return!1}e.exports=n},function(e,t,n){function r(e){return null==e?[]:o(e,i(e))}var o=n(33),i=n(18);e.exports=r},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(21),a=r(u),f=n(6),l=r(f),h=n(7),v=r(h),d=n(20),p=r(d),y=function(e){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"ws://localhost",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};o(this,t);var r=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return r.url=e,r.options=n,r.ws_=null,r.id=null,r.readyState=null,r.reconnect=n.reconnect,r.serverTimeout_=3e4,r.maxReconnectDelay=60,r.initialReconnectDelay=1,r.reconnectIncrementFactor=2,r.deferreds_={},r.connectDeferred_=null,r.disconnectDeferred_=null,r.state=t.States.READY,r}return s(t,e),c(t,[{key:"connect",value:function(e){var n=this;switch(this.state){case t.States.CONNECTING:return Promise.reject(new Error("Could not connect, already trying to connect to a host..."));case t.States.CONNECTED:return Promise.reject(new Error("Already connected."));case t.States.CLOSING:return Promise.reject(new Error("Terminating an active connecting, try again later."));case t.States.CLOSED:case t.States.READY:return this.connectDeferred_=new p.default({handler:function(){n.state=t.States.CONNECTING,n.emit(t.Events.CONNECTING),setTimeout(function(e){n.ws_=new WebSocket(n.url),n.bindEvents_()},0)}}),this.connectDeferred_;default:return Promise.reject(new Error("Could not connect, unknown state."))}}},{key:"disconnect",value:function(e,n){var r=this;switch(this.state){case t.States.ERROR:case t.States.CONNECTED:case t.States.CONNECTING:var o=this.disconnectDeferred_=new p.default({handler:function(){r.ws_.close(e,n),r.state=t.States.CLOSING}});return o;case t.States.CLOSED:return Promise.reject(new Error("There is no connection to disconnect."));case t.States.CLOSING:return Promise.reject(new Error("Already terminating a connecting, try again later."))}}},{key:"bindEvents_",value:function(){this.ws_.onopen=this.onOpen.bind(this),this.ws_.onclose=this.onClose.bind(this),this.ws_.onerror=this.onError.bind(this),this.ws_.onmessage=this.onMessage.bind(this)}},{key:"unBindEvents_",value:function(){this.ws_&&(delete this.ws_.onopen,delete this.ws_.onclose,delete this.ws_.onerror,delete this.ws_.onmessage)}},{key:"disposeConnectionPromisses_",value:function(){this.connectDeferred_&&(this.connectDeferred_.reject(),this.connectDeferred_=null),this.disconnectDeferred_&&(this.disconnectDeferred_.reject(),this.disconnectDeferred_=null)}},{key:"onOpen",value:function(){var e=this;l.default.retry(function(t){return e.send(a.default.Names.HANDSHAKE)},{maxCount:3,initialDelay:1,increaseFactor:1}).then(function(n){e.id=n.id,e.serverTimeout_=n.timeout,e.maxReconnectDelay=n.maxReconnectDelay,e.initialReconnectDelay=n.initialReconnectDelay,e.reconnectIncrementFactor=n.reconnectIncrementFactor,e.connectDeferred_&&(e.connectDeferred_.resolve(),e.connectDeferred_=null),e.state=t.States.CONNECTED,e.emit(t.Events.CONNECTED)}).catch(function(t){return console.log("Handshake failed",t),e.disconnect()}).catch(function(e){console.log("Could not disconnect after failed handshake",e)})}},{key:"onClose",value:function(e){var n=this;this.unBindEvents_(),this.id=null,this.ws_=null,this.state=t.States.CLOSED,this.emit(t.Events.CLOSED,e.code,e.reason),this.connectDeferred_&&(this.connectDeferred_.reject(),this.connectDeferred_=null),this.disconnectDeferred_&&(this.disconnectDeferred_.resolve(),this.disconnectDeferred_=null),this.reconnect&&!this.retrying_&&(this.retrying_=!0,l.default.retry(function(e){return n.connect()},{maxCount:this.maxReconnectDelay,initialDelay:this.initialReconnectDelay,increaseFactor:this.reconnectIncrementFactor}).then(function(e){n.retrying_=!1}))}},{key:"onError",value:function(e){var n=this.state==t.States.CONNECTING?t.Events.CONNECTING_ERROR:t.Events.ERROR;this.state=t.States.CLOSED,this.emit(n,e),this.disposeConnectionPromisses_()}},{key:"onMessage",value:function(e){var t=this,n=a.default.parse(e.data);if(!n.id&&a.default.ReservedNames.indexOf(n.name)==-1)return this.emit(n.name,n);if(n.name==a.default.Names.RESPONSE&&this.deferreds_[n.id]){var r=this.deferreds_[n.id];if(n.err){var o=_.assign(new Error,n.err);r.reject(o)}else r.resolve(n.payload);return void delete this.deferreds_[n.id]}n.once("resolved",function(e){t.send_(n.createResponse(null,e)),n.dispose()}),n.once("rejected",function(e){_.isObject(e)&&e instanceof Error&&"Error"==e.name&&(e={message:e.message,name:"Error"}),t.send_(n.createResponse(e)),n.dispose()}),this.emit(n.name,n)}},{key:"send",value:function(e,t){var n=this,r=new a.default({name:e,payload:t});return r.setId(),this.send_(r).then(function(e){var t=n.deferreds_[r.id]=new p.default({onExpire:function(){delete n.deferreds_[r.id]},timeout:n.serverTimeout_});return t})}},{key:"sendWithoutResponse",value:function(e,t){var n=new a.default({name:e,payload:t});return this.send_(n)}},{key:"send_",value:function(e){var t=this;return new Promise(function(n){t.ws_.send(e.toString()),n()})}}]),t}(v.default);y.States={READY:-1,CONNECTING:0,CONNECTED:1,CLOSING:2,CLOSED:3},y.Events={READY:"_ready",CONNECTING:"_connecting",CONNECTING_ERROR:"_connecting_error",CONNECTED:"_connected",CLOSING:"_closing",CLOSED:"_closed",ERROR:"_error"},e.exports=y}]);
//# sourceMappingURL=client-web.js.map