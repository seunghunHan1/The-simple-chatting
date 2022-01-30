import { instance, expInstance } from './index';

function loginUser(userInfo) {
	return instance.post('login', userInfo);
}

function registerUser(userInfo) {
	return instance.post('register', userInfo);
}

function registerAuthNumber(phoneNum) {
	const data = JSON.stringify(phoneNum);
	return expInstance.post('sendSms', data);
}

export { loginUser, registerUser, registerAuthNumber };
