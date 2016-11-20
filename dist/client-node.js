module.exports=function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,t,n){Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=10)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){return new Promise(function(t){return setTimeout(function(e){return t()},e)})}function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n={maxDelay:160,maxCount:0,initialDelay:3,increaseFactor:2};t=(0,c.default)(n,t);var r=void 0,i=1,s=t.initialDelay,a=function n(){return e().catch(function(e){if(i++,s*=t.increaseFactor,0!=t.maxCount&&i>t.maxCount)throw r&&clearTimeout(r),e;return o(1e3*s/2).then(function(e){return n()})})};return a()}function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:4;return("0000"+(Math.random()*Math.pow(36,e)<<0).toString(36)).slice(-e)}var a=n(6),c=r(a);e.exports={promiseDelay:o,retry:i,generateDummyId:s}},function(e,t){e.exports=require("event-emitter-extra/dist/commonjs.modern")},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(5),u=r(c),l=n(0),f=r(l),d=n(1),h=r(d),p=n(4),v=r(p),y=function(e){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"ws://localhost",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};o(this,t);var r=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return r.url=e,r.options=n,r.ws_=null,r.id=null,r.readyState=null,r.reconnect=n.reconnect,r.serverTimeout_=3e4,r.maxReconnectDelay=60,r.initialReconnectDelay=1,r.reconnectIncrementFactor=2,r.deferreds_={},r.connectDeferred_=null,r.disconnectDeferred_=null,r.state=t.States.READY,r}return s(t,e),a(t,[{key:"connect",value:function(e){var n=this;switch(this.state){case t.States.CONNECTING:return Promise.reject(new Error("Could not connect, already trying to connect to a host..."));case t.States.CONNECTED:return Promise.reject(new Error("Already connected."));case t.States.CLOSING:return Promise.reject(new Error("Terminating an active connecting, try again later."));case t.States.CLOSED:case t.States.READY:return this.connectDeferred_=new v.default({handler:function(){n.state=t.States.CONNECTING,n.emit(t.Events.CONNECTING),setTimeout(function(e){n.ws_=new WebSocket(n.url),n.bindEvents_()},0)}}),this.connectDeferred_;default:return Promise.reject(new Error("Could not connect, unknown state."))}}},{key:"disconnect",value:function(e,n){var r=this;switch(this.state){case t.States.ERROR:case t.States.CONNECTED:case t.States.CONNECTING:var o=this.disconnectDeferred_=new v.default({handler:function(){r.ws_.close(e,n),r.state=t.States.CLOSING}});return o;case t.States.CLOSED:return Promise.reject(new Error("There is no connection to disconnect."));case t.States.CLOSING:return Promise.reject(new Error("Already terminating a connecting, try again later."))}}},{key:"bindEvents_",value:function(){this.ws_.onopen=this.onOpen.bind(this),this.ws_.onclose=this.onClose.bind(this),this.ws_.onerror=this.onError.bind(this),this.ws_.onmessage=this.onMessage.bind(this)}},{key:"unBindEvents_",value:function(){this.ws_&&(delete this.ws_.onopen,delete this.ws_.onclose,delete this.ws_.onerror,delete this.ws_.onmessage)}},{key:"disposeConnectionPromisses_",value:function(){this.connectDeferred_&&(this.connectDeferred_.reject(),this.connectDeferred_=null),this.disconnectDeferred_&&(this.disconnectDeferred_.reject(),this.disconnectDeferred_=null)}},{key:"onOpen",value:function(){var e=this;f.default.retry(function(t){return e.send("_h")},{maxCount:3,initialDelay:1,increaseFactor:1}).then(function(n){e.id=n.id,e.serverTimeout_=n.timeout,e.maxReconnectDelay=n.maxReconnectDelay,e.initialReconnectDelay=n.initialReconnectDelay,e.reconnectIncrementFactor=n.reconnectIncrementFactor,e.connectDeferred_&&(e.connectDeferred_.resolve(),e.connectDeferred_=null),e.state=t.States.CONNECTED,e.emit(t.Events.CONNECTED)}).catch(function(t){return console.log("Handshake failed",t),e.disconnect()}).catch(function(e){console.log("Could not disconnect after failed handshake",e)})}},{key:"onClose",value:function(e){var n=this;this.unBindEvents_(),this.id=null,this.ws_=null,this.state=t.States.CLOSED,this.emit(t.Events.CLOSED,e.code,e.reason),this.connectDeferred_&&(this.connectDeferred_.reject(),this.connectDeferred_=null),this.disconnectDeferred_&&(this.disconnectDeferred_.resolve(),this.disconnectDeferred_=null),this.reconnect&&!this.retrying_&&(this.retrying_=!0,f.default.retry(function(e){return n.connect()},{maxCount:this.maxReconnectDelay,initialDelay:this.initialReconnectDelay,increaseFactor:this.reconnectIncrementFactor}).then(function(e){n.retrying_=!1}))}},{key:"onError",value:function(e){var n=this.state==t.States.CONNECTING?t.Events.CONNECTING_ERROR:t.Events.ERROR;this.state=t.States.CLOSED,this.emit(n,e),this.disposeConnectionPromisses_()}},{key:"onMessage",value:function(e){var t=this,n=u.default.parse(e.data);if(!n.id&&u.default.reservedNames.indexOf(n.name)==-1)return this.emit(n.name,n);if("_r"==n.name&&this.deferreds_[n.id]){var r=this.deferreds_[n.id];if(n.err){var o=_.assign(new Error,n.err);r.reject(o)}else r.resolve(n.payload);return void delete this.deferreds_[n.id]}n.once("resolved",function(e){t.send_(n.createResponse(null,e)),n.dispose()}),n.once("rejected",function(e){_.isObject(e)&&e instanceof Error&&"Error"==e.name&&(e={message:e.message,name:"Error"}),t.send_(n.createResponse(e)),n.dispose()}),this.emit(n.name,n)}},{key:"send",value:function(e,t){var n=this,r=new u.default({name:e,payload:t});return r.setId(),this.send_(r).then(function(e){var t=n.deferreds_[r.id]=new v.default({onExpire:function(){delete n.deferreds_[r.id]},timeout:n.serverTimeout_});return t})}},{key:"sendWithoutResponse",value:function(e,t){var n=new u.default({name:e,payload:t});return this.send_(n)}},{key:"send_",value:function(e){var t=this;return new Promise(function(n){t.ws_.send(e.toString()),n()})}}]),t}(h.default);y.States={READY:-1,CONNECTING:0,CONNECTED:1,CLOSING:2,CLOSED:3},y.Events={READY:"_ready",CONNECTING:"_connecting",CONNECTING_ERROR:"_connecting_error",CONNECTED:"_connected",CLOSING:"_closing",CLOSED:"_closed",ERROR:"_error"},e.exports=y},function(e,t){e.exports=require("uws")},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(){function e(){var t=this,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=r.handler,i=void 0===o?function(){}:o,s=r.onExpire,a=void 0===s?function(){}:s,c=r.timeout,u=void 0===c?0:c;n(this,e),this.resolve_=null,this.reject_=null,this.timeout_=null,this.onExpire_=a,this.isFinished_=!1,this.promise=new Promise(function(e,n){t.resolve_=e,t.reject_=n;try{i(t)}catch(e){t.reject(e)}}),u>0&&(this.timeout_=setTimeout(this.expire.bind(this),u))}return r(e,[{key:"resolve",value:function(e){this.isFinished_||(this.isFinished_=!0,this.clearTimeout_(),this.resolve_(e))}},{key:"reject",value:function(e){this.isFinished_||(this.isFinished_=!0,this.clearTimeout_(),this.reject_(e))}},{key:"expire",value:function(){this.isFinished_=!0,this.clearTimeout_(),this.onExpire_(),this.reject_(new Error("Timeout exceed"))}},{key:"then",value:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.promise.then.apply(this.promise,t)}},{key:"catch",value:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.promise.catch.apply(this.promise,t)}},{key:"clearTimeout_",value:function(){this.timeout_&&(clearTimeout(this.timeout_),this.timeout_=null)}}]),e}();e.exports=o},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(9),u=r(c),l=n(8),f=r(l),d=n(7),h=r(d),_=n(0),p=n(1),v=r(p),y=function(e){function t(e){var n=e.name,r=e.payload,s=e.id,a=e.err;o(this,t);var c=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return c.name=n,c.payload=r,c.id=s,c.err=a,c.isResponded_=!1,c}return s(t,e),a(t,null,[{key:"parse",value:function(e){try{var n=JSON.parse(e);return new t({name:n.n,payload:n.p,err:n.e,id:n.i})}catch(e){throw new Error("Could not parse message.")}}}]),a(t,[{key:"setId",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,_.generateDummyId)();return this.id=e,e}},{key:"createResponse",value:function(e,n){return new t({name:"_r",payload:n,err:e,id:this.id})}},{key:"resolve",value:function(e){var t=this;return(0,u.default)(this.id)?console.warn("[line] A message without an id cannot be resolved."):this.isResponded_?console.warn("[line] This message has already been ended."):(0,f.default)(e)&&(0,h.default)(e.then)?void e.then(function(n){t.isResponded_=!0,t.emit("resolved",e)}).catch(function(e){t.isResponded_=!0,t.emit("rejected",e)}):(this.isResponded_=!0,void this.emit("resolved",e))}},{key:"reject",value:function(e){return(0,u.default)(this.id)?console.warn("[line] A message without an id cannot be rejected."):this.isResponded_?console.warn("[line] This message has already been ended."):(this.isResponded_=!0,void this.emit("rejected",e))}},{key:"toString",value:function(){try{var e={n:this.name};return(0,u.default)(this.payload)||(e.p=this.payload),(0,u.default)(this.id)||(e.i=this.id),(0,u.default)(this.err)||(e.e=this.err),JSON.stringify(e)}catch(e){throw new Error("Could not stringify message.")}}},{key:"dispose",value:function(){var e=this,t=this.eventNames();t.forEach(function(t){return e.removeAllListeners(t)})}}]),t}(v.default);t.default=y,y.reservedNames=["_r","_h"]},function(e,t){e.exports=require("lodash/assign")},function(e,t){e.exports=require("lodash/isFunction")},function(e,t){e.exports=require("lodash/isObject")},function(e,t){e.exports=require("lodash/isUndefined")},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(3),u=r(c),l=n(2),f=r(l);global.WebSocket=u.default;var d=function(e){function t(){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),a(t,[{key:"bindEvents_",value:function(){var e=this;this.ws_.on("open",this.onOpen.bind(this)),this.ws_.on("error",this.onError.bind(this)),this.ws_.on("close",function(t,n){e.onClose({code:t,reason:n})}),this.ws_.on("message",function(t){e.onMessage({data:t})})}},{key:"send_",value:function(e){var t=this;return new Promise(function(n,r){t.ws_.send(e.toString(),function(e){return e?r(e):void n()})})}}]),t}(f.default);e.exports=d}]);
//# sourceMappingURL=client-node.js.map