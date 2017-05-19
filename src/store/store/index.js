// store.js
import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutations'
import moduleReports from './modules/reports'
import moduleSource from './modules/source'
import moduleUnits from './modules/units'
import createLogger from '../plugins/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

// const state = {}

const store = new Vuex.Store({
  // state = { numberUnitsSelect: 0},
  getters,
  actions,
  mutations,
  modules: {
    reports: moduleReports,
    source: moduleSource,
    units: moduleUnits
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})

if (module.hot) {
  // accept actions and mutations as hot modules
  module.hot.accept([
    './mutation-types',
    './actions',
    './modules/reports',
    './modules/source',
    './modules/units'
  ], () => {
    // require the updated modules
    // have to add .default here due to babel 6 module output
    // const newMutations = require('./mutation-types').default
    const newActions = require('./actions').default
    const newModuleReports = require('./modules/reports').default
    const newModuleSource = require('./modules/source').default
    const newModuleUnits = require('./modules/units').default
    // swap in the new actions and mutations
    store.hotUpdate({
      // mutations: {
      //   [SOME_MUTATION] (state) {
      //
      //   },
      // }
      actions: newActions,
      modules: {
        reports: newModuleReports,
        source: newModuleSource,
        units: newModuleUnits
      }
    })
  })
}

export default store
