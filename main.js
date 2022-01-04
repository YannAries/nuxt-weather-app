//
import Vue from 'vue';
import axios from '@nuxtjs/axios';

axios.defaults.baseURL = 'http://api.openweathermap.org/data/2.5';
Vue.http = Vue.prototype.$http = axios;
