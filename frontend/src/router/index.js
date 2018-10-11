import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/pages/StandardList'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'dashboard',
        component: Dashboard
    }]
})