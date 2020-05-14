import Vue from 'vue'
import App from './App.vue'
import vb from 'vue-babylonjs'

Vue.config.productionTip = false
Vue.use(vb)

new Vue({
  render: h => h(App),
}).$mount('#app')
