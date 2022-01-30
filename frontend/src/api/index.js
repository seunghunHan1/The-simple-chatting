import axios from 'axios';

export const instance = axios.create({
	baseURL: 'http://localhost:3000/',
});

export const expInstance = axios.create({
	baseURL: 'http://localhost:3001/',
	headers: {
		'Content-Type': `application/json`,
	},
});
