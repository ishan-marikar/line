module.exports=function(e){function n(r){if(t[r])return t[r].exports;var o=t[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}var t={};return n.m=e,n.c=t,n.p="",n(0)}([function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function i(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function s(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}var u=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),a=t(8),c=t(5),l=r(c),f=t(7),d=r(f),p=t(2),h=r(p),v=function(e){function n(e){o(this,n);var t=i(this,(n.__proto__||Object.getPrototypeOf(n)).call(this));return t.rooms=new d.default,t.options=e,t}return s(n,e),u(n,[{key:"start",value:function(){var e=this;return this.options.port?new Promise(function(n,t){e.server=new a.Server(e.options,function(r){return r?t(r):(e.bindEvents(),void n())})}):(this.server=new a.Server(this.options),this.bindEvents(),Promise.resolve())}},{key:"bindEvents",value:function(){this.server.on("connection",this.onConnection.bind(this))}},{key:"onConnection",value:function(e){var n=new l.default(e,this);this.emit("connection",n)}}]),n}(h.default);e.exports=v},function(e,n){e.exports=require("lodash")},function(e,n){e.exports=require("event-emitter-extra")},function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t]);return n.default=e,n}function i(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function s(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function u(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}Object.defineProperty(n,"__esModule",{value:!0});var a=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),c=t(1),l=o(c),f=t(4),d=o(f),p=t(2),h=r(p),v=function(e){function n(e){var t=e.name,r=e.payload,o=e.id,u=e.err;i(this,n);var a=s(this,(n.__proto__||Object.getPrototypeOf(n)).call(this));return a.name=t,a.payload=r,a.id=o,a.err=u,a.isResponded_=!1,a}return u(n,e),a(n,null,[{key:"parse",value:function(e){try{var t=JSON.parse(e);return new n({name:t.n,payload:t.p,err:t.e,id:t.i})}catch(e){throw new Error("Could not parse message.")}}}]),a(n,[{key:"setId",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d.v4();return this.id=e,e}},{key:"createResponse",value:function(e,t){return new n({name:"_r",payload:t,err:e,id:this.id})}},{key:"resolve",value:function(e){return l.isUndefined(this.id)?console.warn("[line] A message without an id cannot be resolved."):this.isResponded_?console.warn("[line] This message has already been ended."):(this.isResponded_=!0,void this.emit("resolved",e))}},{key:"reject",value:function(e){return l.isUndefined(this.id)?console.warn("[line] A message without an id cannot be rejected."):this.isResponded_?console.warn("[line] This message has already been ended."):(this.isResponded_=!0,void this.emit("rejected",e))}},{key:"toString",value:function(){try{var e={n:this.name};return l.isUndefined(this.payload)||(e.p=this.payload),l.isUndefined(this.id)||(e.i=this.id),l.isUndefined(this.err)||(e.e=this.err),JSON.stringify(e)}catch(e){throw new Error("Could not stringify message.")}}},{key:"dispose",value:function(){var e=this,n=this.eventNames();n.forEach(function(n){return e.removeAllListeners(n)})}}]),n}(h.default);n.default=v,v.reservedNames=["_r"]},function(e,n){e.exports=require("node-uuid")},function(e,n,t){"use strict";function r(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t]);return n.default=e,n}function o(e){return e&&e.__esModule?e:{default:e}}function i(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function s(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function u(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}var a=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),c=t(3),l=o(c),f=t(2),d=o(f),p=t(1),h=r(p),v=t(4),y=r(v),m=function(e){function n(e,t){i(this,n);var r=s(this,(n.__proto__||Object.getPrototypeOf(n)).call(this));return r.id=y.v4(),r.socket=e,r.server=t,r.promiseCallbacks={},r.socket.on("message",r.onMessage.bind(r)),r.socket.on("error",r.onError.bind(r)),r.socket.on("close",r.onClose.bind(r)),r.joinRoom("/"),r}return u(n,e),a(n,[{key:"onMessage",value:function(e,n){var t=this,r=l.default.parse(e);if(!r.id&&l.default.reservedNames.indexOf(r.name)==-1)return this.emit(r.name,r);if("_r"==r.name){var o=this.promiseCallbacks[r.id],i=o.resolve,s=o.reject;if(r.err){var u=h.assign(new Error,r.err);s(u)}else i(r.payload);return void delete this.promiseCallbacks[r.options.id]}r.once("resolved",function(e){t.send_(r.createResponse(null,e)),r.dispose()}),r.once("rejected",function(e){h.isObject(e)&&e instanceof Error&&"Error"==e.name&&(e={message:e.message,name:"Error"}),t.send_(r.createResponse(e)),r.dispose()}),this.emit(r.name,r)}},{key:"onError",value:function(e){this.emit("_error",e)}},{key:"onClose",value:function(e,n){this.server.rooms.removeFromAll(this),h.forEach(this.promiseCallbacks,function(e){e.reject(new Error("Socket connection closed!"))}),this.promiseCallbacks={},this.emit("_close",e,n)}},{key:"joinRoom",value:function(e){this.server.rooms.add(e,this)}},{key:"leaveRoom",value:function(e){this.server.rooms.remove(e,this)}},{key:"getRooms",value:function(){this.server.rooms.getRoomsOf(this)}},{key:"send",value:function(e,n){var t=this,r=new l.default({name:e,payload:n}),o=r.setId();return this.send_(r).then(function(e){return new Promise(function(e,n){t.promiseCallbacks[o]={resolve:e,reject:n}})})}},{key:"send_",value:function(e){var n=this;return new Promise(function(t,r){n.socket.send(e.toString(),function(e){return e?r(e):void t()})})}}]),n}(d.default);e.exports=m},function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t]);return n.default=e,n}function i(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var s=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),u=t(1),a=o(u),c=t(3),l=r(c),f=function(){function e(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};i(this,e),this.name=n,this.connections=t}return s(e,[{key:"add",value:function(e){this.connections[e.id]=e}},{key:"remove",value:function(e){delete this.connections[e.id]}},{key:"getConnectionById",value:function(e){return this.connections[e]}},{key:"getConnectionsCount",value:function(){return Object.keys(this.connections).length}},{key:"broadcast_",value:function(e){a.forEach(this.connections,function(n){n.send_(e)})}},{key:"broadcast",value:function(e,n){var t=new l.default({name:e,payload:n});a.forEach(this.connections,function(e,n){e.send_(t)})}}]),e}();n.default=f},function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t]);return n.default=e,n}function i(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var s=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),u=t(1),a=o(u),c=t(6),l=r(c),f=function(){function e(){i(this,e),this.rooms={"/":new l.default("/")}}return s(e,[{key:"add",value:function(e,n){this.rooms[e]||(this.rooms[e]=new l.default(e)),this.rooms[e].add(n)}},{key:"remove",value:function(e,n){this.rooms[e]&&(this.rooms[e].remove(n.id),"/"==e||this.rooms[e].getConnectionsCount()||delete this.rooms[e])}},{key:"getRoomsOf",value:function(e){return a.map(a.filter(this.rooms,function(n){return n.getConnectionById(e.id)}),"name")}},{key:"getRoom",value:function(e){return this.rooms[e]}},{key:"removeFromAll",value:function(e){var n=this,t=this.getRoomsOf(e);a.forEach(t,function(t){return n.rooms[t].remove(e)})}}]),e}();n.default=f},function(e,n){e.exports=require("uws")}]);
//# sourceMappingURL=server.js.map