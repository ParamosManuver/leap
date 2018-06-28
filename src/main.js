// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// Vue-Resourse
import vueResourse from 'vue-resource'
// Main App Component
import App from './App'

// TO use other imported modules
Vue.use(vueResourse)

Vue.config.productionTip = false

/* eslint-disable no-new */
// Vue Instance
new Vue({
  // Attach to element with id="app"
  el: '#app',
  components: { App },
  template: '<App/>'
})
