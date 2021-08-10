const lang = require('./src/i18n/translations.js');

const svgo = {
    plugins: [
        { prefixIds: true },
        { removeTitle: true },
        { removeDesc: true },
        { removeViewBox: false },
        { removeDimensions: true },
        {
            removeAttrs: {
                attrs: ['fill', 'opacity'],
            },
        },
    ],
};

module.exports = {
    srcDir: 'src/',

    server: {
        host: process.env.HOST,
        port: process.env.PORT,
    },

    publicRuntimeConfig: {},

    privateRuntimeConfig: {},

    /*
     ** Headers of the page
     */
     head({ $i18n }) {
         return {
            title: 'Nuxt Starter Project',
            meta: [
                { charset: 'utf-8' },
                {
                    name: 'viewport',
                    content: 'width=device-width, initial-scale=1',
                },
                { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
                { hid: 'format-detection', name: 'format-detection', content: 'telephone=no' },
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                },
            ],
            link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
         }
    },

    /*
     ** Customize the progress-bar color
     */
    loading: { height: '5px', color: '#0000ff' },

    /*
     ** Global CSS
     */
    css: [
        { src: '@/assets/scss/foundation.scss', lang: 'scss' },
        { src: '@/assets/scss/app.scss', lang: 'scss' },
    ],

    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        { src: '@/plugins/what-input.js', mode: 'client' }
    ],

    /*
     ** Nuxt.js build modules
     */
    buildModules: [
        '@nuxtjs/eslint-module',
        '@nuxtjs/stylelint-module',
        '@nuxtjs/moment',
    ],

    /*
     ** Nuxt.js modules
     */
    modules: [
        '@nuxtjs/sentry',
        '@nuxtjs/style-resources',
        '@nuxtjs/i18n',
    ],

    i18n: {
        // Options
        vueI18nLoader: true,
        locales: [
            {
                code: 'fr',
                name: 'Français',
                iso: 'fr-CA',
            },
            {
                code: 'en',
                name: 'English',
                iso: 'en-CA',
            },
        ],
        defaultLocale: 'fr',

        vueI18n: {
            messages: lang.translations,
        },
    },

    sentry: {
        initialize: process.env.NODE_ENV !== 'development',
        dsn: process.env.SENTRY_DSN,
        config: {}, // Additional config
    },

    styleResources: {
        scss: ['@/assets/scss/settings/*'],
    },

    moment: {
        locales: ['fr'],
        defaultLocale: 'fr',
    },

    eslint: {
        fix: true,
    },

    stylelint: {
        fix: true,
    },

    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {
            config.module.rules.push({
                test: /\.vue$/,
                loader: 'vue-svg-inline-loader',
                options: {
                    inlineKeyword: 'inline',
                    inlineStrict: true,
                    spriteKeyword: 'sprite',
                    spriteStrict: false,
                    removeAttributes: ['alt', 'src', 'inline'],
                    xhtml: false,
                    svgo,
                },
            });
        },
    },
};
