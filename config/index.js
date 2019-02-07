var env;

try {
    if(process.env.NODE_ENV === 'production') env = require('./.env-prod.js')
    else if(process.env.NODE_ENV === 'staging') env = require('./.env-staging.js')
    else throw 'This is dev mode and will use `./.env.js` file'
} catch (err) {
    try {
        env = require('./.env.js')
    } catch (err) {
        // eslint-disable-next-line no-console
        console.error(`
        \n
        ----------------------
        \n
        The "./config/.env.js" file is missing.
        \n
        Don't be surprise, the script will crash, please create "./config/.env.js".
        \n
        ----------------------
        \n\n
        ` , err)
    }
}

// That will be import in the nuxt.config.js
module.exports = {
    env,
}
