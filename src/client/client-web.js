import Message from '../lib/message';
import EventEmitter from 'event-emitter-extra';


class WebClient extends EventEmitter {
	constructor(url = 'ws://localhost', options) {
		super();

		this.url = url;
		this.options = options;

		this.ws_ = null;
		this.readyState = null;
		this.promiseCallbacks_ = {};
		this.connectPromiseCallback_ = {};
	}


	connect() {
		switch (this.readyState) {
			case 0:
				return Promise.reject(new Error('Could not connect, already trying to connect...'));
			case 1:
				return Promise.reject(new Error('Socket already connected.'));
			case 2:
				return Promise.reject(new Error('Could not connect, socket is closing. Try again after closure.'));
			default:
				return new Promise((resolve, reject) => {
					this.ws_ = new WebSocket(this.url, this.options);
					this.connectPromiseCallback_ = {resolve, reject};
					this.updateState_();
					this.bindEvents_();
				});
		}
	}


	updateState_() {
		this.readyState = this.ws_.readyState;
	}


	bindEvents_() {
		this.ws_.onopen = this.onOpen.bind(this);
		this.ws_.onclose = this.onClose.bind(this);
		this.ws_.onerror = this.onError.bind(this);
		this.ws_.onmessage = this.onMessage.bind(this);
	}


	onOpen() {
		this.updateState_();
		this.emit('_open');

		if (this.connectPromiseCallback_.resolve) {
			this.connectPromiseCallback_.resolve();
			this.connectPromiseCallback_ = {};
		}
	}


	onClose(e) {
		this.updateState_();
		this.emit('_close', e.code, e.reason);

		if (this.connectPromiseCallback_.reject) {
			this.connectPromiseCallback_.reject();
			this.connectPromiseCallback_ = {};
		}
	}


	onError(err) {
		this.updateState_();
		this.emit('_error', err);

		if (this.connectPromiseCallback_.reject) {
			this.connectPromiseCallback_.reject(err);
			this.connectPromiseCallback_ = {};
		}
	}


	onMessage(e) {
		const message = Message.parse(e.data);

		// Message without response (no id fields)
		if (!message.id && Message.reservedNames.indexOf(message.name) == -1)
			return this.emit(message.name, message);

		// Message response
		if (message.name == '_r') {
			const {resolve, reject} = this.promiseCallbacks_[message.id];

			if (message.err) {
				const err = _.assign(new Error(), message.err);
				reject(err);
			} else {
				resolve(message.payload);
			}

			delete this.promiseCallbacks_[message.id];
			return;
		}

		// Message with response
		message.once('resolved', payload => {
			this.send_(message.createResponse(null, payload));
			message.dispose();
		});

		message.once('rejected', err => {
	        if (_.isObject(err) && err instanceof Error && err.name == 'Error')
	           err = {message: err.message, name: 'Error'};
			this.send_(message.createResponse(err));
			message.dispose();
		});

		this.emit(message.name, message);
	}


	send(eventName, payload) {
		const message = new Message({name: eventName, payload});
		const messageId = message.setId();
		return this
			.send_(message)
			.then(_ => {
				return new Promise((resolve, reject) => {
					this.promiseCallbacks_[messageId] = {resolve, reject};
				});
			});
	}


	send_(message) {
		return new Promise(resolve => {
			this.ws_.send(message.toString());
			resolve();
		});
	}
}


module.exports = WebClient;
