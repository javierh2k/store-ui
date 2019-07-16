module.exports = {
    extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'], // extending recommended config and config derived from eslint-config-prettier
    plugins: ['prettier'], // activating esling-plugin-prettier (--fix stuff)
    rules: {
        'react/prop-types': [0],
        'no-console': [0],
        'function-paren-newline': [0],
        'no-case-declarations': [0],
        'object-property-newline': [1, { "allowMultiplePropertiesPerLine": true }],
        'prettier/prettier': [ // customizing prettier rules (unfortunately not many of them are customizable)
            'warn',
            {
                singleQuote: true, 
                trailingComma: 'es5',
                tabWidth: 4
            },
        ]
    },
    globals: {
        window: true,
    },
    "parserOptions": { "ecmaVersion": 2018, sourceType: 'module' }
};