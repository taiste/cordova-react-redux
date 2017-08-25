import constants from '../types'

const initialState = {
  drawerOpen: false
}

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {

  case constants.OPEN_DRAWER:
    return Object.assign({}, state, {
      drawerOpen: true
    })

  case constants.CLOSE_DRAWER:
    return Object.assign({}, state, {
      drawerOpen: false
    })

  default:
    return state
  }
}
