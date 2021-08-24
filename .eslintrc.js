module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    parserOptions: {
        parser: 'babel-eslint',
    },
    extends: ['@nuxtjs', 'plugin:nuxt/recommended', 'plugin:prettier/recommended', 'prettier'],
    plugins: ['prettier', 'no-smart-quotes'],
    // add your custom rules here
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'vue/no-v-html': 'off',
        'nuxt/no-cjs-in-config': 'off',
        'vue/html-button-has-type': 'error',
        'object-shorthand': ['error', 'always'],
        'no-unused-vars': 'warn',
        'vue/no-unused-components': 'warn',
        'import/newline-after-import': 'error',
        'vue/padding-line-between-blocks': ['error', 'always'],
        'no-smart-quotes/no-smart-quotes': 'error',
        'import/order': [
            'error',
            {
                pathGroups: [
                    {
                        pattern: '@/**',
                        group: 'internal',
                    },
                ],
                pathGroupsExcludedImportTypes: ['builtin'],
            },
        ],
    },
};
