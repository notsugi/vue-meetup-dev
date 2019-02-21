import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import router from './router'
import { store } from './store'
import DateFilter from './filters/date'
import 'vuetify/dist/vuetify.min.css'
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify, {
  theme: {
    primary: colors.red.darken2,
    accent: colors.red.accent2,
    secondary: colors.grey.lighten1,
    info: colors.blue.lighten1,
    warning: colors.amber.darken2,
    error: colors.red.accent4,
    success: colors.green.lighten2
  }
})
Vue.config.productionTip = false

Vue.filter('formatDate', DateFilter)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
