import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'

import 'common/scss/reset.scss'
import 'common/scss/base.scss'
import 'common/scss/icon.scss'
Vue.config.productionTip = false

fastclick.attach(document.body)
Vue.use(VueLazyLoad, {
  loading: require('@/common/image/default.png')
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
