module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    parserOptions: {
        parser: 'babel-eslint',
    },
    extends: ['@nuxtjs', 'plugin:nuxt/recommended', 'plugin:prettier/recommended', 'prettier', 'prettier/vue'],
    plugins: ['prettier', 'sort-imports-es6-autofix'],
    // add your custom rules here
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'vue/no-v-html': 'off',
        'nuxt/no-cjs-in-config': 'off',
        'object-shorthand': ['error', 'always'],
        'import/newline-after-import': 'error',
        'sort-imports-es6-autofix/sort-imports-es6': [
            'error',
            {
                ignoreCase: true,
                ignoreMemberSort: false,
                memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
            },
        ],
    },
};
