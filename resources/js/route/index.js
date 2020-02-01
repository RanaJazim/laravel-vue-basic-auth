
import Vue from 'vue';
import VueRouter from "vue-router";
import Login from "../views/Login";
import Home from "../components/Home";
import Register from "../views/Register";
import Profile from "../views/Profile";

const routes = [
    {path: '', component: Home, name: 'home'},
    {path: '/login', component: Login, name: 'login'},
    {path: '/register', component: Register, name: 'register'},
    {path: '/profile', component: Profile, name: 'profile'},
];

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes
});

