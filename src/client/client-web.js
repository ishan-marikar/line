const Message = require('../lib/message');
const Utils = require('../lib/utils');
const EventEmitterExtra = require('event-emitter-extra/dist/commonjs.modern');
const Deferred = require('../lib/deferred');
const debounce = require('lodash/debounce');
const isObject = require('lodash/isObject');
const isBoolean = require('lodash/isBoolean');


/**
 * Line client class.
 *
 * @class Client
 * @extends {EventEmitterExtra}
 * @param {string=} url Server url, default: `ws://localhost`.
 * @param {Object=} options Options object.
 * @param {boolean=} options.reconnect Try to reconnect server after unexpected disconnection, default `true`.
 * @param {any=} options.handshakePayload Handshake payload to be sent to server.
 * @property {string} url Server url
 * @property {string} id Unique connection id assigned by the server
 * @property {Client.States} state Connection state
 * @example
 * // Add line-client to your html document
 * <script src="./node_modules/line-socket/dist/client-web-globals.js"></script>
 *
 * // For web browsers (consuming as a commonjs module)
 * const LineClient = require('line-socket/client-web');
 *
 * // For node.js
 * const LineClient = require('line-socket/client-node');
 *
 *
 * const client = new LineClient('ws://localhost:8080', {
 *   reconnect: false,
 *   handshakePayload: { token: 'a6g3X' }
 * });
 */
class Client extends EventEmitterExtra {
    constructor(url = 'ws://localhost', options = {}) {
        super();

        this.url = url;

        this.options = options;

        this.ws_ = null;
        this.id = null;
        this.reconnect = isBoolean(options.reconnect) ? options.reconnect : true;
        this.reconnectDisabled_ = false;

        this.serverTimeout_ = 30000;
        this.maxReconnectDelay = 60;
        this.initialReconnectDelay = 1;
        this.reconnectIncrementFactor = 2;
        this.pingInterval = 60000;

        this.deferreds_ = {};
        this.connectDeferred_ = null;
        this.disconnectDeferred_ = null;

        this.state = Client.States.READY;

        this.autoPing_ = this.pingInterval > 0 ?
            debounce(() => {
                if (this.state != Client.States.CONNECTED)
                    return;

                this
                    .ping()
                    .then(() => {
                        if (this.pingInterval > 0 && this.state == Client.States.CONNECTED) {
                            this.autoPing_();
                        }
                    })
                    .catch(() => {});
            }, this.pingInterval) :
            () => {};
    }


    /**
     * Connects to server.
     * @returns {Promise}
     * @example
     * client
     *   .connect()
     *   .then((handshakeResponse) => {
     *     // handshakeResponse will be undefined if you do not resolve
     *     // the handshake with a payload in server
     *     console.log('Connected');
     *   })
     *   .catch((err) => {
     *     console.log('Could not connect');
     *   })
     */
    connect() {
        switch (this.state) {
            case Client.States.CONNECTING:
                return Promise.reject(new Error('Could not connect, already trying to connect to a host...'));
            case Client.States.CONNECTED:
                return Promise.reject(new Error('Already connected.'));
            case Client.States.CLOSING:
                return Promise.reject(new Error('Terminating an active connecting, try again later.'));
            case Client.States.CLOSED:
            case Client.States.READY:
                this.connectDeferred_ = new Deferred({
                    handler: () => {
                        this.state = Client.States.CONNECTING;
                        this.emit(Client.Events.CONNECTING);
                        this.reconnectDisabled_ = false;

                        setTimeout(_ => {
                            this.ws_ = new WebSocket(this.url);
                            this.bindEvents_();
                        }, 0);
                    }
                });

                return this.connectDeferred_;
            default:
                return Promise.reject(new Error('Could not connect, unknown state.'))
        }
    }


    /**
     * Gracefully closes the connection
     *
     * @param {number=} code
     * @param {any=} reason
     * @param {boolean=} opt_retry
     * @returns {Promise}
     * @example
     * client
     *   .disconnect()
     *   .then(() => {
     *     // Client will not try to reconnect
     *     console.log('Disconnected');
     *   })
     *   .catch((err) => {
     *     console.log('Could not disconnect');
     *   })
     */
    disconnect(code, reason, opt_retry) {
        switch (this.state) {
            case Client.States.ERROR:
            case Client.States.CONNECTED:
            case Client.States.CONNECTING:
                this.reconnectDisabled_ = !opt_retry;
                const deferred = this.disconnectDeferred_ = new Deferred({
                    handler: () => {
                        this.ws_.close(code, reason);
                        this.state = Client.States.CLOSING;
                    }
                });
                return deferred;
            case Client.States.CLOSED:
                return Promise.reject(new Error('There is no connection to disconnect.'));
            case Client.States.CLOSING:
                return Promise.reject(new Error('Already terminating a connecting, try again later.'));
        }
    }


    bindEvents_() {
        this.ws_.onopen = this.onOpen.bind(this);
        this.ws_.onclose = this.onClose.bind(this);
        this.ws_.onerror = this.onError.bind(this);
        this.ws_.onmessage = this.onMessage.bind(this);
    }


    unBindEvents_() {
        if (!this.ws_) return;
        delete this.ws_.onopen;
        delete this.ws_.onclose;
        delete this.ws_.onerror;
        delete this.ws_.onmessage;
    }


    disposeConnectionPromisses_() {
        if (this.connectDeferred_) {
            this.connectDeferred_.reject();
            this.connectDeferred_ = null;
        }

        if (this.disconnectDeferred_) {
            this.disconnectDeferred_.reject();
            this.disconnectDeferred_ = null;
        }
    }


    onOpen() {
        // this.updateState_();
        // this.emit('_open');
        Utils.retry(_ => this.send(Message.Names.HANDSHAKE, this.options.handshakePayload), {maxCount: 3, initialDelay: 1, increaseFactor: 1})
            .then(data => {
                this.id = data.id;
                this.serverTimeout_ = data.timeout;
                this.maxReconnectDelay = data.maxReconnectDelay;
                this.initialReconnectDelay = data.initialReconnectDelay;
                this.reconnectIncrementFactor = data.reconnectIncrementFactor;
                this.pingInterval = data.pingInterval;

                if (this.connectDeferred_) {
                    this.connectDeferred_.resolve(data.handshakePayload);
                    this.connectDeferred_ = null;
                }

                this.state = Client.States.CONNECTED;
                this.emit(Client.Events.CONNECTED, data.handshakePayload);
            })
            .catch(err => {
                console.log('Handshake failed', err);
                return this.disconnect();
            })
            .catch(err => {
                console.log('Could not disconnect after failed handshake', err);
            });
    }


    onClose(e) {
        this.unBindEvents_();
        this.id = null;
        this.ws_ = null;
        this.state = Client.States.CLOSED;

        this.emit(Client.Events.CLOSED, e.code, e.reason);

        if (this.connectDeferred_) {
            this.connectDeferred_.reject();
            this.connectDeferred_ = null;
        }

        if (this.disconnectDeferred_) {
            this.disconnectDeferred_.resolve();
            this.disconnectDeferred_ = null;
        }

        if (!this.reconnect || this.retrying_ || this.reconnectDisabled_) return;

        this.retrying_ = true;
        Utils
            .retry(
                _ => this.connect(),
                {
                    maxCount: this.maxReconnectDelay,
                    initialDelay: this.initialReconnectDelay,
                    increaseFactor: this.reconnectIncrementFactor
                })
            .then(_ => {
                this.retrying_ = false;
            });
    }


    onError(err) {
        const eventName = this.state == Client.States.CONNECTING ?
                Client.Events.CONNECTING_ERROR : Client.Events.ERROR;

        this.state = Client.States.CLOSED;

        this.emit(eventName, err);
        this.disposeConnectionPromisses_();
    }


    onMessage(e) {
        const message = Message.parse(e.data);

        this.autoPing_();

        // Message without response (no id fields)
        if (!message.id && Message.ReservedNames.indexOf(message.name) == -1)
            return this.emit(message.name, message);

        // Ping
        if (message.name == Message.Names.PING) {
            return this.onPing_(message);
        }

        // Message response
        if (message.name == Message.Names.RESPONSE && this.deferreds_[message.id]) {
            const deferred = this.deferreds_[message.id];

            if (message.err) {
                const err = Object.assign(new Error(), message.err);
                deferred.reject(err);
            } else {
                deferred.resolve(message.payload);
            }

            delete this.deferreds_[message.id];
            return;
        }

        // Message with response
        message.once('resolved', payload => {
            this.send_(message.createResponse(null, payload));
            message.dispose();
        });

        message.once('rejected', err => {
            if (isObject(err) && err instanceof Error && err.name == 'Error')
               err = {message: err.message, name: 'Error'};
            this.send_(message.createResponse(err));
            message.dispose();
        });

        this.emit(message.name, message);
    }


    onPing_(message) {
        this
            .send_(message.createResponse(null, 'pong'))
            .catch(err => {
                console.log('Ping responce failed to send', err);
            });
    }


    /**
     * Sends a message to server with awaiting its response.
     *
     * @param {string} eventName
     * @param {any=} payload
     * @returns {Promise}
     * @example
     * client
     *   .send('hello', {some: data})
     *   .then((response) => {
     *     console.log('Sent and got the response');
     *   })
     *   .catch((err) => {
     *     console.log('Could not send message OR server rejected the message');
     *   });
     */
    send(eventName, payload) {
        const message = new Message({name: eventName, payload});
        message.setId();

        return this
            .send_(message)
            .then(_ => {
                const deferred = this.deferreds_[message.id] = new Deferred({
                    onExpire: () => {
                        delete this.deferreds_[message.id];
                    },
                    timeout: this.serverTimeout_
                });

                return deferred;
            });
    }


    /**
     * Sends a message to server without waiting its response.
     *
     * @param {string} eventName
     * @param {any=} payload
     * @returns {Promise}
     * @example
     * client
     *   .sendWithoutResponse('hello', {some: data})
     *   .then(() => {
     *     console.log('Message is sent');
     *   })
     *   .catch((err) => {
     *     console.log('Could not send message');
     *   });
     */
    sendWithoutResponse(eventName, payload) {
        const message = new Message({name: eventName, payload});
        return this.send_(message);
    }


    send_(message) {
        return new Promise(resolve => {
            this.ws_.send(message.toString());
            resolve();
        });
    }


    /**
     * Sends a ping message to server, if its failed, the connection will be closed.
     * Server and client ping each other automatically with an interval specified by the server.
     *
     * @returns {Promise}
     */
    ping() {
        return Utils
            .retry(_ => this.send(Message.Names.PING), {maxCount: 3, initialDelay: 1, increaseFactor: 1})
            .catch(err => {
                this.disconnect(500, 'Auto ping failed', true);
                throw err;
            });
    }
}


/**
 * @static
 * @readonly
 * @enum {number}
 */
Client.States = {
    /**
     * `-1`
     */
    READY: -1,
    /**
     * `0`
     */
    CONNECTING: 0,
    /**
     * `1`
     */
    CONNECTED: 1,
    /**
     * `2`
     */
    CLOSING: 2,
    /**
     * `3`
     */
    CLOSED: 3
};


/**
 * @static
 * @readonly
 * @enum {string}
 */
Client.Events = {
    /**
     * `_connecting`
     */
    CONNECTING: '_connecting',
    /**
     * `_connecting_error`
     */
    CONNECTING_ERROR: '_connecting_error',
    /**
     * `_connected`
     */
    CONNECTED: '_connected',
    /**
     * `_closed`
     */
    CLOSED: '_closed',
    /**
     * `_error`
     */
    ERROR: '_error'
};


module.exports = Client;