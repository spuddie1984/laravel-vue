// imports
import VueRouter from "vue-router";
import exampleComponent from "./components/ExampleComponent";
import secondExample from "./components/Example2";


const routes = [
    {
        path: '/',
        component: exampleComponent,
        name: 'home'

    },
    {
        path: '/second',
        component: secondExample,
        name: 'second'
    },
];

const router = new VueRouter({
    mode: 'history',
    routes,
});

export default router;
