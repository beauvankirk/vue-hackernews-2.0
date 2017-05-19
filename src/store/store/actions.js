import * as types from './mutation-types'

export const hydrate = ({ state, commit, dispatch }, payload) => {
  dispatch(payload.target + '/hydrate')
}
export const addToCart = ({ state, commit }, product) => {
  if (product.inventory > 0) {
    commit(types.ADD_TO_CART, {
      id: product.id
    })
  }
}
