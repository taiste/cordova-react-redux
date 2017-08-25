import { createStore, applyMiddleware } from 'redux'
import thunk                            from 'redux-thunk'
import { createLogger }                 from 'redux-logger'
import rootReducer                      from '../reducers'

const logger = createLogger({
  collapsed: true
})


const configureStore = preloadedState => {
  const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk, logger)
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}

export default configureStore
