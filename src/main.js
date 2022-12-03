import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import axios from 'axios'
import VueCookies from 'vue-cookies'
import VueRouter from './router'
import router from './router/index'
import _ from 'lodash'
import ToggleButton from 'vue-js-toggle-button'
import Toasted from 'vue-toasted'
import store from './store/store'
import * as helper from './utils/Helper'
import DatePicker from 'vue2-datepicker';

let ToastedOptions = {
    position: 'bottom-right',
    duration: 3000,
    keepOnHover: true,
}

Vue.prototype.$helper = helper.default
Vue.use(Vuex)
Vue.use(Vuex, axios)
Vue.prototype.$axios = axios
Vue.use(VueCookies)
Vue.config.productionTip = false
Vue.use(VueRouter)
Object.defineProperty(Vue.prototype, '$_', { value: _ })
Vue.use(require('vue-moment'))
Vue.use(ToggleButton)
Vue.use(Toasted, ToastedOptions)
Vue.use(DatePicker)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')