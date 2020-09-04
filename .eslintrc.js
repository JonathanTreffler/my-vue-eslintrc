module.exports = {
	"env": {
		"browser": true,
		"es2020": true,
		"node": true,
	},
	"extends": [
		"eslint:recommended",
		"plugin:vue/essential",
		"@nuxtjs",
		"plugin:nuxt/recommended"
	],
	"parserOptions": {
		"ecmaVersion": 11,
		"sourceType": "module"
	},
	"plugins": [
		"vue"
	],
	"rules": {
		"indent": [
			"error",
			"tab"
		],
		"linebreak-style": [
			"error",
			"unix"
		],
		"quotes": [
			"error",
			"double"
		],
		"semi": [
			"error",
			"always"
		],
		"vue/no-use-v-if-with-v-for": ["warn"],
		'comma-dangle': [ 'error', {
			arrays: 'always',
			objects: 'always',
			imports: 'never',
			exports: 'never',
			functions: 'never',
		}, ],
		semi: [ 'error', 'always', ],
		'vue/html-indent': [ 'error', 'tab', ],
		'no-tabs': 0,
		'array-bracket-spacing': [ 'error', 'always', ],
		'comma-style': [ 'error', 'last', ],
		'comma-spacing': [ 'error', { before: false, after: true, }, ],
		'space-before-function-paren': [ 'error', 'never', ],
	}
};
