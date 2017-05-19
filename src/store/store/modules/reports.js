/* @flow */
// import shop from '../../api/shop'
import * as types from '../mutation-types'
import Vue from 'vue'
import * as _ from 'lodash'

const namespaced = true
// initial state
// shape: [{ id, quantity }]
const state = {
  templates: {
    default: 'valley',
    active: {},
    archive: [],
    valley: {
      title: 'Valley Event Report',
      panes: [
        {
          component: 'VValleyTable',
          key: 'EventTable',
          params: {}
        },
        {
          component: 'VDescription',
          title: 'Event Summary',
          params: {}
        },
        {
          component: 'VPlotStack',
          params: {
            grids: {
              horizontal: [
                {
                  type: 'sequence',
                  basis: 'VSAT.completion'
                },
                {
                  type: 'sequence',
                  basis: 'SCED.completion'
                }
              ]
            },
            members: [
              {
                component: 'VPlotReliabilityMargin',
                params: {}
              },
              {
                component: 'VPlotValleyOverview',
                params: {}
              },
              {
                component: 'VPlotGroupGen',
                params: {}
              },
              {
                component: 'VPlotGroupGen',
                params: {}
              },
              {
                component: 'VAxisHorizontal',
                params: {
                  type: 'time',
                  location: 4,
                  timingGraphs: {
                    pre: [
                      {
                        type: 'sequence',
                        basis: 'SCED.completion'
                      },
                      {
                        type: 'sequence',
                        basis: 'VSAT.completion'
                      }
                    ]
                  }
                }
              },
              {
                component: 'VPlotConstraints',
                params: {}
              }
            ],
            cursors: {
              saved: [],
              hover: {
                position: 0
              }
            }
          }
        }
      ]
    }
  }
}

// getters
const getters = {
}

// actions
const actions = {
  hydrate ({ state, commit, dispatch }: { state: Object, commit: Object, dispatch: Function }) {
    if (!state.templates.active.title) {
      dispatch('startNewReport', state.templates.default)
    }
  },
  startNewReport ({ state, commit }: Object, templateName: string) {
    if (state.templates.active.saveName) {
      commit(types.ARCHIVE_ACTIVE_TEMPLATE)
    }
    commit(types.RETRIEVE_TEMPLATE, templateName)
  }
}

// mutations
const mutations = {
  [types.RETRIEVE_TEMPLATE] (state: Object, templateName: string) {
    let timeString = new Date().toLocaleString()
    Vue.set(state.templates, 'active', {})
    Vue.set(state.templates, 'active', _.cloneDeep(state.templates[templateName]))
    Vue.set(state.templates.active, 'saveName', state.templates.active.title + '_' + timeString)
  },
  [types.ARCHIVE_ACTIVE_TEMPLATE] (state: Object) {
    state.templates.archive.push(
      _.cloneDeep(state.templates.active.deepClone)
    )
  },
  [types.SET_ACTIVE_TEMPLATE_SAVENAME] (state: Object, saveName: Object) {

  }
}

export default {
  namespaced,
  state,
  getters,
  actions,
  mutations
}
