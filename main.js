import Vue from 'vue';
import axios from '@nuxtjs/axios';

Vue.filter('celcius', function (value) {
    if (!value) return 'F';
    value = value.toString();
    return value.charAt(0).toUpperCase() + value.slice(1);
});
