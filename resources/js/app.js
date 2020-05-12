/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

// imports
import VueRouter from "vue-router";
import router from "./routes";
import Index from "./Index";

require('./bootstrap');

window.Vue = require('vue');

// configs
// Vue.component('example-component', require('./components/ExampleComponent.vue').default);
// Vue.component('second-example', require('./components/Example2.vue').default);

Vue.use(VueRouter);


const app = new Vue({
    el: '#app',
    router,
    components:{
        'index': Index,
    }
});
