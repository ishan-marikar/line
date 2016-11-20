module.exports=function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,t,n){Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=16)}([function(e,t){e.exports=require("event-emitter-extra/dist/commonjs.modern")},function(e,t){e.exports=require("lodash/forEach")},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(13),c=r(a),l=n(5),f=r(l),d=n(12),h=r(d),p=n(3),v=n(0),m=r(v),y=function(e){function t(e){var n=e.name,r=e.payload,s=e.id,u=e.err;o(this,t);var a=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return a.name=n,a.payload=r,a.id=s,a.err=u,a.isResponded_=!1,a}return s(t,e),u(t,null,[{key:"parse",value:function(e){try{var n=JSON.parse(e);return new t({name:n.n,payload:n.p,err:n.e,id:n.i})}catch(e){throw new Error("Could not parse message.")}}}]),u(t,[{key:"setId",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,p.generateDummyId)();return this.id=e,e}},{key:"createResponse",value:function(e,n){return new t({name:"_r",payload:n,err:e,id:this.id})}},{key:"resolve",value:function(e){var t=this;return(0,c.default)(this.id)?console.warn("[line] A message without an id cannot be resolved."):this.isResponded_?console.warn("[line] This message has already been ended."):(0,f.default)(e)&&(0,h.default)(e.then)?void e.then(function(n){t.isResponded_=!0,t.emit("resolved",e)}).catch(function(e){t.isResponded_=!0,t.emit("rejected",e)}):(this.isResponded_=!0,void this.emit("resolved",e))}},{key:"reject",value:function(e){return(0,c.default)(this.id)?console.warn("[line] A message without an id cannot be rejected."):this.isResponded_?console.warn("[line] This message has already been ended."):(this.isResponded_=!0,void this.emit("rejected",e))}},{key:"toString",value:function(){try{var e={n:this.name};return(0,c.default)(this.payload)||(e.p=this.payload),(0,c.default)(this.id)||(e.i=this.id),(0,c.default)(this.err)||(e.e=this.err),JSON.stringify(e)}catch(e){throw new Error("Could not stringify message.")}}},{key:"dispose",value:function(){var e=this,t=this.eventNames();t.forEach(function(t){return e.removeAllListeners(t)})}}]),t}(m.default);t.default=y,y.reservedNames=["_r","_h"]},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){return new Promise(function(t){return setTimeout(function(e){return t()},e)})}function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n={maxDelay:160,maxCount:0,initialDelay:3,increaseFactor:2};t=(0,a.default)(n,t);var r=void 0,i=1,s=t.initialDelay,u=function n(){return e().catch(function(e){if(i++,s*=t.increaseFactor,0!=t.maxCount&&i>t.maxCount)throw r&&clearTimeout(r),e;return o(1e3*s/2).then(function(e){return n()})})};return u()}function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:4;return("0000"+(Math.random()*Math.pow(36,e)<<0).toString(36)).slice(-e)}var u=n(4),a=r(u);e.exports={promiseDelay:o,retry:i,generateDummyId:s}},function(e,t){e.exports=require("lodash/assign")},function(e,t){e.exports=require("lodash/isObject")},function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(3),l=o(c),f=n(2),d=o(f),h=n(0),p=o(h),v=n(4),m=o(v),y=n(1),_=o(y),b=n(5),w=o(b),g=n(9),k=o(g),O=n(15),j=r(O),x=function(e){function t(e,n){i(this,t);var r=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return r.id=j.v4(),r.socket=e,r.server=n,r.deferreds_={},r.socket.on("message",r.onMessage.bind(r)),r.socket.on("error",r.onError.bind(r)),r.socket.on("close",r.onClose.bind(r)),r.handshake_=!1,r}return u(t,e),a(t,[{key:"onMessage",value:function(e,t){var n=this,r=d.default.parse(e);if(!r.id&&d.default.reservedNames.indexOf(r.name)==-1)return this.emit(r.name,r);if("_h"==r.name&&!function(){var e={id:n.id,timeout:n.server.options.timeout,maxReconnectDelay:n.server.options.maxReconnectDelay,initialReconnectDelay:n.server.options.initialReconnectDelay,reconnectIncrementFactor:n.server.options.reconnectIncrementFactor};l.default.retry(function(t){return n.send_(r.createResponse(null,e))},{maxCount:3,initialDelay:1,increaseFactor:1}).then(function(e){n.joinRoom("/"),n.handshake_=!0,n.emit("_handshakeOk")}).catch(function(e){n.handshake_=!1,console.log("Handshake failed for "+n.id+"."),n.onClose(500,e)})}(),"_r"==r.name&&this.deferreds_[r.id]){var o=this.deferreds_[r.id];if(r.err){var i=(0,m.default)(new Error,r.err);o.reject(i)}else o.resolve(r.payload);return void delete this.deferreds_[r.id]}r.once("resolved",function(e){n.send_(r.createResponse(null,e)),r.dispose()}),r.once("rejected",function(e){(0,w.default)(e)&&e instanceof Error&&"Error"==e.name&&(e={message:e.message,name:"Error"}),n.send_(r.createResponse(e)),r.dispose()}),this.emit(r.name,r)}},{key:"onError",value:function(e){this.emit("_error",e)}},{key:"onClose",value:function(e,t){this.server.rooms.removeFromAll(this),(0,_.default)(this.deferreds_,function(e){e.reject(new Error("Socket connection closed!"))}),this.deferreds_={},this.emit("_close",e,t)}},{key:"joinRoom",value:function(e){this.server.rooms.add(e,this)}},{key:"leaveRoom",value:function(e){this.server.rooms.remove(e,this)}},{key:"getRooms",value:function(){this.server.rooms.getRoomsOf(this)}},{key:"send",value:function(e,t){var n=this,r=new d.default({name:e,payload:t});return r.setId(),this.send_(r).then(function(e){var t=n.deferreds_[r.id]=new k.default({onExpire:function(){delete n.deferreds_[r.id]},timeout:n.server.options.timeout});return t})}},{key:"sendWithoutResponse",value:function(e,t){var n=new d.default({name:e,payload:t});return this.send_(n)}},{key:"send_",value:function(e){var t=this;return new Promise(function(n,r){t.socket.send(e.toString(),function(e){return e?r(e):void n()})})}}]),t}(p.default);e.exports=x},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(11),u=r(s),a=n(1),c=r(a),l=n(14),f=r(l),d=n(10),h=r(d),p=function(){function e(){o(this,e),this.rooms={"/":new h.default("/")}}return i(e,[{key:"add",value:function(e,t){this.rooms[e]||(this.rooms[e]=new h.default(e)),this.rooms[e].add(t)}},{key:"remove",value:function(e,t){this.rooms[e]&&(this.rooms[e].remove(t),"/"==e||this.rooms[e].getConnectionsCount()||delete this.rooms[e])}},{key:"getRoomsOf",value:function(e){return(0,f.default)((0,u.default)(this.rooms,function(t){return t.getConnectionById(e.id)}),"name")}},{key:"getRoom",value:function(e){return this.rooms[e]}},{key:"removeFromAll",value:function(e){var t=this,n=this.getRoomsOf(e);(0,c.default)(n,function(n){return t.rooms[n].remove(e)})}}]),e}();t.default=p},function(e,t){e.exports=require("uws")},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(){function e(){var t=this,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=r.handler,i=void 0===o?function(){}:o,s=r.onExpire,u=void 0===s?function(){}:s,a=r.timeout,c=void 0===a?0:a;n(this,e),this.resolve_=null,this.reject_=null,this.timeout_=null,this.onExpire_=u,this.isFinished_=!1,this.promise=new Promise(function(e,n){t.resolve_=e,t.reject_=n;try{i(t)}catch(e){t.reject(e)}}),c>0&&(this.timeout_=setTimeout(this.expire.bind(this),c))}return r(e,[{key:"resolve",value:function(e){this.isFinished_||(this.isFinished_=!0,this.clearTimeout_(),this.resolve_(e))}},{key:"reject",value:function(e){this.isFinished_||(this.isFinished_=!0,this.clearTimeout_(),this.reject_(e))}},{key:"expire",value:function(){this.isFinished_=!0,this.clearTimeout_(),this.onExpire_(),this.reject_(new Error("Timeout exceed"))}},{key:"then",value:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.promise.then.apply(this.promise,t)}},{key:"catch",value:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.promise.catch.apply(this.promise,t)}},{key:"clearTimeout_",value:function(){this.timeout_&&(clearTimeout(this.timeout_),this.timeout_=null)}}]),e}();e.exports=o},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(1),u=r(s),a=n(2),c=r(a),l=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};o(this,e),this.name=t,this.connections=n}return i(e,[{key:"add",value:function(e){this.connections[e.id]=e}},{key:"remove",value:function(e){delete this.connections[e.id]}},{key:"getConnectionById",value:function(e){return this.connections[e]}},{key:"getConnectionsCount",value:function(){return Object.keys(this.connections).length}},{key:"broadcast_",value:function(e){(0,u.default)(this.connections,function(t){t.send_(e)})}},{key:"broadcast",value:function(e,t){var n=new c.default({name:e,payload:t});(0,u.default)(this.connections,function(e,t){e.send_(n)})}}]),e}();t.default=l},function(e,t){e.exports=require("lodash/filter")},function(e,t){e.exports=require("lodash/isFunction")},function(e,t){e.exports=require("lodash/isUndefined")},function(e,t){e.exports=require("lodash/map")},function(e,t){e.exports=require("node-uuid")},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(8),c=n(6),l=r(c),f=n(7),d=r(f),h=n(0),p=r(h),v=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return n.rooms=new d.default,n.options=Object.assign({timeout:3e4,maxReconnectDelay:60,initialReconnectDelay:1,reconnectIncrementFactor:1},e||{}),n}return s(t,e),u(t,[{key:"start",value:function(){var e=this;return this.options.port?new Promise(function(t,n){e.server=new a.Server(e.options,function(r){return r?n(r):(e.bindEvents(),void t())})}):(this.server=new a.Server(this.options),this.bindEvents(),Promise.resolve())}},{key:"stop",value:function(){var e=this;if(!this.server){var t=new Error("Could not stop server. Server is probably not started, or already stopped.");return Promise.reject(t)}return new Promise(function(t){e.server.close(),e.server=null,t()})}},{key:"bindEvents",value:function(){this.server.on("connection",this.onConnection.bind(this))}},{key:"onConnection",value:function(e){var t=this,n=new l.default(e,this);n.on("_handshakeOk",function(){return t.emit("connection",n)})}},{key:"getConnectionById",value:function(e){return this.rooms.getRoom("/").getConnectionById(e)}},{key:"broadcast",value:function(e,t){return this.rooms.getRoom("/").broadcast(e,t)}}]),t}(p.default);v.Events={CONNECTION:"connection",HEADERS:"headers",ERROR:"error"},e.exports=v}]);
//# sourceMappingURL=server.js.map