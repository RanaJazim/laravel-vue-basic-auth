import {router} from "./route";
import Base from "./views/Base";
import Vuelidate from "vuelidate";
import axios from "axios";
import VueSpinners from 'vue-spinners';
import {store} from "./store";


require('./bootstrap');

window.Vue = require('vue');
Vue.use(Vuelidate);
Vue.prototype.$http = axios;
Vue.use(VueSpinners);

Vue.component('example-component', require('./components/ExampleComponent.vue').default);


const app = new Vue({
    el: '#app',
    store: store,
    router: router,
    render: h => h(Base)
});
