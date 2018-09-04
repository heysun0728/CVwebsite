// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueFullPage from 'vue-fullpage'
import 'animate.css'

Vue.config.productionTip = false
require('./assets/font.css')
require('./assets/ScrollBlock.css')
/* eslint-disable no-new */

Vue.use(VueFullPage);

new Vue({
  el: '#app',
  render: h=> h(App),
  router,
  components: { App },
  template: '<App/>'
})

