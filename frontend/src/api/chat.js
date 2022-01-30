import { instance } from './index';

function fetchMessage() {
	return instance.get('message');
}

function insertMessage(data) {
	return instance.post('message', data);
}

export { fetchMessage, insertMessage };
