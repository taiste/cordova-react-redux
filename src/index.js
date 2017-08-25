import React                  from 'react'
import ReactDOM               from 'react-dom'
import { Provider }           from 'react-redux'
import { Router, Route }      from 'react-router-dom'
import { ConnectedRouter }    from 'react-router-redux'
import { createHashHistory }  from 'history'
import injectTapEventPlugin   from 'react-tap-event-plugin'
import configureStore         from './core/store/configureStore'
import App                    from './containers/App'

injectTapEventPlugin()

const store = configureStore()
const history = createHashHistory()

function startApp() {

  ReactDOM.render(
    <Provider store={store}>
      <Router history={history} >
        <App/>
      </Router>
    </Provider>,
    document.getElementById('app')
  );
}

if (window.cordova){
  document.addEventListener('deviceready', function() {
    startApp()
  }, false)
} else {
  startApp()
}
