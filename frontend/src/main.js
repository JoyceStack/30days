// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import 'ant-design-vue/dist/antd.css'
import Antd from 'ant-design-vue'
import Viser from 'viser-vue'
import axios from 'axios'
import _ from 'lodash';

import App from './App'
import router from './router'
import store from './store'

import '@/mock'

Vue.config.productionTip = false;

Vue.prototype.$axios = axios;
Vue.prototype._ = _;

Vue.use(Viser);
Vue.use(Antd);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})