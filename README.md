# Nuxt starter

You have to know these following documentations if you never read it:

- [Nuxt/Vuejs](https://github.com/nuxt/nuxt.js)
- [nuxt-i18n](https://nuxt-community.github.io/nuxt-i18n/basic-usage.html) will give you some info about translation and **ROUTING** translation

## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for dev and launch server (Most of the case you should use npm run dev)
$ npm run build
$ npm start

# build for staging and launch server (For staging and use env-staging.js)
$ npm run build-staging
$ npm start-staging

# build for production and launch server (For production and use env-prod.js)
$ npm run build-production
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).

## Translation

- All translation are in the folder `i18n`
- After a modification in the translation file you have to restart with a new `npm run dev`
- Don't hesitate to check documentation about [nuxt-i18n](https://nuxt-community.github.io/nuxt-i18n/basic-usage.html). It explains how to use it.

You can use translation in template like that: `$t('menu.lang')`

### Routing with i18n

```javascript
// Page example
// pages/about.vue

export default {
  nuxtI18n: {
    paths: {
      en: '/about-us', // -> accessible at /about-us (no prefix since it's the default locale)
      fr: '/a-propos', // -> accessible at /fr/a-propos
      es: '/sobre'     // -> accessible at /es/sobre
    }
  }
}
```

## Plugins

You will find plugin in the following path: `./plugins/`

### Slugify

`this.$slugify({{String to slugify}})`

That convert any string to an sanitize url.

eg: `A title & any text` -> `a-title-and-any-text`

### Validator

`this.$validator.{{MyValidatorRule}}`

This is the Validator NPM package.
Take a look to the npm section to learn more.

### LocalStorage

This plugin is about the configuration of the store persistance
I suggest you to see this: <https://www.npmjs.com/package/vuex-persistedstate>

## Npm

List of added npm

### Validator

This is use to validate fields input.
E.G:

- Postal code
- credit cart
- isMobilePhone

<https://www.npmjs.com/package/validator>

### vuex-persistedstate

That will persist the store.
<https://www.npmjs.com/package/vuex-persistedstate>

### Moment

This is just really usefull if you have to work with date or time
<https://momentjs.com/>

## Config

You have to create the .env file (You can copy env-example as example) and replace it by your personal config for devellopement.

- env.js = Your local dev
- env-staging.js = The staging config
- env-prod.js = The prod config

In the package.json you will see these commands

```javascript
"dev": "cross-env NODE_ENV=development nodemon server/index.js --watch server",
    "build": "nuxt build",
    "build-production": "cross-env NODE_ENV=production nuxt build",
    "build-staging": "cross-env NODE_ENV=staging nuxt build",
    "start-staging": "cross-env NODE_ENV=staging node server/index.js",
    "start": "cross-env NODE_ENV=production node server/index.js",
```

As you see the `NODE_ENV=staging` trigger witch environnement will be use.
The logic to determine that is in the `index.js`
