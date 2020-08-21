import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

import store from './store/index.js'


const app = new Vue({
    ...App,
	store
})
app.$mount()
