/* @flow */
import Vue from 'vue'
import App from './components/App/App'
import store from './store'
import router from './router'
import {sync} from 'vuex-router-sync'
import Components from './components/_index'
import Vuetify from 'vuetify'

Vue.use(Vuetify) 

Object.keys(Components).forEach(key => {
  console.log('Registering ' + key)
  Vue.component(key, Components[key])
})

sync(store, router)

const app = new Vue({
  el: '#app',
  store,
  router,
  ...App
})

export {app, router, store}
