// Chek readme to see how to use it in template

const translations = {
    en: {
        menu: require('./en/menu.json'),
        home: require('./en/home.json'),
        // You can include other translatios here like the one upthere -^
    },
    fr: {
        menu: require('./fr/menu.json'),
        home: require('./fr/home.json'),
        // You can include other translatios here like the one upthere -^
    },
};

// That will be import in the nuxt.config.js
module.exports = {
    translations,
};
