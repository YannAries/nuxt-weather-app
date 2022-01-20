import messages from './src/i18n/translations.js';
import svgo from './svgoConfig.js';

const StyleLintPlugin = require('stylelint-webpack-plugin');

export default {
    srcDir: 'src/',

    server: {
        host: process.env.HOST,
        port: process.env.PORT,
    },

    // env: {
    //     OPENWEATHERMAP_API_KEY: process.env.OPENWEATHERMAP_API_KEY
    // },

    publicRuntimeConfig: {
        nuxtAppWeatherApiKey: process.env.NUXT_APP_WEATHER_API_KEY
    },

    /*
     ** Headers of the page
     */
    head({ $i18n }) {
        return {
            title: 'Weather app',
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
                    name: 'Challenge: Create a weather app using an API',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                },
            ],
            link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            {
                rel: 'stylesheet',
                // href:
                //     'https://fonts.googleapis.com/css2?family=Raleway:wght@500;700&display=swap',
            },
            ],
        }
    },

    /*
     ** Customize the progress-bar color
     */
    // loading: { height: '5px', color: '#0000ff' },

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
        { src: '@/plugins/what-input.js', mode: 'client' },
        { src: '@/plugins/filters.js' },
        { src: '@/plugins/axios.js' },
    ],

    /*
     ** Nuxt.js build modules
     */
    buildModules: [
        '@nuxtjs/eslint-module',
        // '@nuxtjs/stylelint-module',
        '@nuxtjs/moment',
    ],

    /*
     ** Nuxt.js modules
     */
    modules: [
        '@nuxtjs/sentry',
        '@nuxtjs/style-resources',
        '@nuxtjs/i18n',
        '@nuxtjs/svg',
        '@nuxtjs/axios',
    ],

    axios: {
    },


    module: {
        configureWebpack: {
            plugins: [
                new StyleLintPlugin({
                    files: ['src/**/*.{vue,scss}'],
                }),
            ],
        },
    },

    svg: {
        vueSvgLoader: {
            svgo,
        },
    },

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
            messages,
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
        locales: ['en-ca'],
        defaultLocale: 'en-ca',
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
                    spriteStrict: true,
                    removeAttributes: ['alt', 'src', 'inline'],
                    xhtml: false,
                    svgo,
                },
            });
        },
    },
};
