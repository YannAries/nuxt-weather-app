# Config

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
