module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: ['plugin:prettier/recommended'],
	parserOptions: {
		parser: 'babel-eslint',
	},
	parserOptions: {
		ecmaVersion: 2017,
	},
	env: {
		es6: true,
	},
	rules: {
		'prettier/prettier': [
			'error',
			// 아래 규칙들은 개인 선호에 따라 prettier 문법 적용
			// https://prettier.io/docs/en/options.html
			{
				singleQuote: true,
				semi: true,
				useTabs: true,
				tabWidth: 2,
				trailingComma: 'all',
				printWidth: 80,
				bracketSpacing: true,
				arrowParens: 'avoid',
			},
		],
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
	},
};
