// https://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parserOptions: {
        parser: 'babel-eslint',
    },
    env: {
        browser: true,
    },
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    extends: [
        'plugin:vue/recommended',
        'airbnb-base',
        'eslint:recommended',
    ],
    // required to lint *.vue files
    plugins: [
        'vue',
    ],
    // check if imports actually resolve
    settings: {
        'import/resolver': {
            webpack: {
                config: 'build/webpack.base.conf.js',
            },
        },
    },
    // add your custom rules here
    rules: {
        indent: ['warn', 4],
        quotes: ['error', 'single',
            {
                avoidEscape: true,
                allowTemplateLiterals: true,
            },
        ],
        'import/no-unresolved': 'off',
        'comma-dangle': ['error', 'always-multiline'],
        'vue/html-indent': ['warn', 4],
        'vue/script-indent': ['warn', 4],
        'vue/singleline-html-element-content-newline': 'off',
        'vue/html-self-closing': ['error', {
            html: {
                void: 'always',
                normal: 'never',
                component: 'always',
            },
        }],
        'vue/html-closing-bracket-spacing': ['error', {
            'startTag': 'never',
            'endTag': 'never',
            'selfClosingTag': 'always'
        }],
        'vue/max-attributes-per-line': ['error',
            {
                singleline: 4,
                multiline: {
                    max: 1,
                    allowFirstLine: false,
                },
            },
        ],
        // don't require .vue extension when importing
        'import/extensions': ['error', 'always', {
            js: 'never',
            vue: 'never',
        }],
        // disallow reassignment of function parameters
        // disallow parameter object manipulation except for specific exclusions
        'no-param-reassign': ['error', {
            props: true,
            ignorePropertyModificationsFor: [
                'state', // for vuex state
                'acc', // for reduce accumulators
                'e', // for e.returnvalue
            ],
        }],
        // allow optionalDependencies
        'import/no-extraneous-dependencies': ['error', {
            optionalDependencies: ['test/unit/index.js'],
        }],
        'import/prefer-default-export': 'off',
        'no-underscore-dangle': 'off',
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    },
    overrides: [{
        files: ['*.vue'],
        rules: {
            indent: 'off',
        },
    }],
};
