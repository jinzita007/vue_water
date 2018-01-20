// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import { LoadingPlugin } from 'vux'
// 组件
// 引入构建的js文件
Vue.use(VueRouter)
Vue.use(LoadingPlugin)

const routes = [{
  path: '/',
  component: Home
},
  { path: '/login', component: Login },
  { path: '/register', component: Register}
]

const router = new VueRouter({
  routes
})

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
