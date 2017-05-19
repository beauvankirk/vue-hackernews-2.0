// import shop from '../../api/shop'
import * as types from './mutation-types'

// mutations
const mutations = {
  [types.DECREMENT_COUNTER] (state) {
    state.count--
  }
}

export default {
  mutations
}
