const pkg = require('./package.json');
const lang = require('./src/i18n/translations.js');
require('dotenv').config();

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
        port: process.env.PORT,
        host: process.env.HOST,
    },

    mode: 'universal',

    /*
     ** Headers of the page
     */
    head: {
        title: pkg.name,
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
                content: pkg.description,
            },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },

    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#fff' },

    /*
     ** Global CSS
     */
    css: [{ src: '@/assets/scss/app.scss', lang: 'scss' }, { src: '@/assets/scss/foundation.scss', lang: 'scss' }],

    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        // '@/plugins/slugify.js',
        // '@/plugins/validator.js',
    ],

    /*
     ** Nuxt.js modules
     */
    modules: [
        '@nuxtjs/dotenv',
        '@nuxtjs/sentry',
        '@nuxtjs/style-resources',
        'nuxt-svg-loader',
        ['@nuxtjs/moment', ['fr']],
        [
            'nuxt-i18n',
            {
                // Options
                vueI18nLoader: false,
                locales: [
                    {
                        code: 'fr',
                        name: 'Français',
                        iso: 'fr-FR',
                    },
                    {
                        code: 'en',
                        name: 'English',
                        iso: 'en-US',
                    },
                ],
                defaultLocale: 'fr',

                vueI18n: {
                    messages: lang.translations,
                },
            },
        ],
    ],

    sentry: {
        initialize: process.env.NODE_ENV !== 'development',
        dsn: process.env.SENTRY_DSN,
        config: {}, // Additional config
    },

    styleResources: {
        scss: ['@/assets/scss/settings/*'],
    },

    svgLoader: {
        svgoConfig: {
            svgo,
        },
    },

    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {
            // Run ESLint on save
            if (ctx.isDev && ctx.isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/,
                });
            }
            const vueRule = config.module.rules.find(rule => rule.test.test('.vue'));
            vueRule.use = [
                {
                    loader: vueRule.loader,
                    options: vueRule.options,
                },
                {
                    loader: 'vue-svg-inline-loader',
                    options: {
                        inlineKeyword: 'inline',
                        inlineStrict: true,
                        spriteKeyword: 'sprite',
                        spriteStrict: false,
                        removeAttributes: ['alt', 'src'],
                        xhtml: false,
                        svgo,
                    },
                },
            ];
            delete vueRule.loader;
            delete vueRule.options;
        },
    },
};
