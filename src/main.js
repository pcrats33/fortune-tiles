import Vue from 'vue'
import App from './App.vue'
import vb from 'vue-babylonjs'
import {decimal4} from "@/decimal4"

Vue.config.productionTip = false
Vue.use(vb)
Vue.filter('decimal4', decimal4)

new Vue({
  render: h => h(App),
}).$mount('#app')
