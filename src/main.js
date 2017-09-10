import Vue from 'vue'
// import App from './App.vue'

import VueRouter from 'vue-router'

var Brands = require('./views/Brands.vue')
var Contacts = require('./views/Contacts.vue')
var Projects = require('./views/Projects.vue')
var Blog = require('./views/Blog.vue')

Vue.use(VueRouter)

var router = new VueRouter({
    routes: [
        // /about => About.vue
        { path: '/brands', component: Brands },
        { path: '/contacts', component: Contacts },
        { path: '/projects', component: Projects },
        { path: '/blog', component: Blog }
    ]
})

new Vue({
    el: '#app',
    router: router,
    // render: h => h(App)
})