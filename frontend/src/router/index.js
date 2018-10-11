import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/pages/StandardList'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: '首页',
        component: Dashboard,
    }, {
        path: '/analysis',
        name: 'analysis',
        component: () =>
            import ('@/pages//Analysis'),
    }, {
        path: '/helloworld',
        name: 'helloworld',
        component: () =>
            import ('@/pages/HelloWorld'),
    }]
})