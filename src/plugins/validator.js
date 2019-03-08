// eslint-disable-next-line import/no-extraneous-dependencies
import Vue from 'vue';
import isAlphanumeric from 'validator/lib/isAlphanumeric';
//import isPostalCode from 'validator/lib/isPostalCode';
//import trim from 'validator/lib/trim';
//import blacklist from 'validator/lib/blacklist';
//import isCreditCard from 'validator/lib/isCreditCard';
//import isInt from 'validator/lib/isInt';
//import isMobilePhone from 'validator/lib/isMobilePhone';

export default () => {

    // Check Validator npm to know what you can import !!
    // https://www.npmjs.com/package/validator
    let validator = {
        //isPostalCode: isPostalCode,
        isAlphanumeric: isAlphanumeric,
        //trim: trim,
        //blacklist: blacklist,
        //isCreditCard: isCreditCard,
        //isInt: isInt,
        //isMobilePhone: isMobilePhone,
    }

    // app.$validator = validator // To add it accessible from SSR

    Vue.prototype.$validator = validator

}
