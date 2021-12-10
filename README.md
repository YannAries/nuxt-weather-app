# Nuxt Starter

## Documentation

- [Vue](https://vuejs.org/)
- [VueX](https://vuex.vuejs.org/)
- [Nuxt](https://nuxtjs.org/)

## Utilisation

Ce projet gère ses dépendances avec [`yarn`](https://yarnpkg.com/)

### Mode développement

```sh
cp .env.local .env
# install dependencies
yarn
# run with hot reload
yarn dev
```

### Mode production

```sh
# install dependencies
yarn
# build
yarn build
# serve
yarn start
```

### Lint

**Note:** Éxécuter automatiquement en mode dev

```sh
yarn lint:js
yarn lint:scss
```

## Arborescence

### Répertoires racine

#### deploy

Le répertoire `deploy` contient les fichiers de configuration pour `deployer`, l'outil de déploiment.

#### env

Le répertoire `env` contient les fichiers de configuration et les commandes personnalisée de `Kubéo`.

#### src

Le répertoire `src` contient les fichiers source de l'application Nuxt.

#### dist

Le répertoire `dist` contient les fichiers compilé pour la distribution. Ce répertoire ne devrait pas être dans le Git.

### Répertoire src

#### assets

Le répertoire `assets` contient vos ressources qui seront compilées et bundler par Webpack tels que les fichiers SASS global et les SVG.

#### components

Le répertoire `components` contient vos composants Vue.js. Vous ne pouvez pas utiliser les méthodes `asyncData` ou `fetch` sur ces composants.

#### i18n

Le répertoire `i18n` contient les fichiers de traductions global au format JSON. Vous pouvez aussi traduire directement dans les composants.

#### layout

Le répertoire `layouts` contient les mises en page de votre application. Les mises en page sont utilisées pour changer l'aspect de votre page.

#### middleware

Le répertoire `middleware` contient vos middlewares. Un middleware vous permet de définir une fonction qui sera exécutée avant de faire le rendu d'une mise en page ou d'un groupe de mises en page.

#### pages

Le répertoire `pages` contient vos vues et routes de l'application.

#### plugins

Le répertoire `plugins` contient les plugins JavaScript que vous désirez exécuter avant d'instancier l'application. C'est le bon endroit pour enregistrer des composants globaux.

#### static

Le répertoire `static` est directement servi par le serveur ([/static/robots.txt]() est accessible à l'adresse http://localhost:3000/robots.txt).

#### store

Le répertoire `store` contient vos fichiers de store Vuex. Chaque fichier représente un module de store ou un dossier représente un modules découper en fichiers (`state.js`, `getters.js`, `mutation.js`, `actions.js`)
