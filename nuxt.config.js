const pkg = require('./package')

const svgo = {
    plugins: [
        { removeTitle: true },
        { removeDesc: true },
        { removeViewBox: false },
        { removeDimensions: true },
        {
            cleanupIDs: {
                remove: true,
                minify: false,
                preserve: [],
                force: true,
            },
        },
        {
            removeAttrs: {
                attrs: [
                    'fill',
                    'opacity',
                ],
            },
        },
    ],
};

module.exports = {
    mode: 'universal',

    /*
    ** Headers of the page
    */
    head: {
        title: pkg.name,
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: pkg.description },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        ],
    },

    /*
    ** Customize the progress-bar color
    */
    loading: { color: '#fff' },

    /*
    ** Global CSS
    */
    css: [
        '@/assets/scss/app.scss',
        '@/assets/scss/foundation.scss',
    ],

    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
    ],

    /*
    ** Nuxt.js modules
    */
    modules: [
        'nuxt-sass-resources-loader',
        'nuxt-svg-loader',
    ],
    sassResources: [ '@/assets/scss/settings/*' ],
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
                })
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
}
