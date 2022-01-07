import { instance } from './index';

function loginUser(userInfo) {
	return instance.post('login', userInfo);
}

export { loginUser };
