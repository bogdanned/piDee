import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Landing } from './ui/containers/landing'
import { Dashboard } from './ui/containers/dashboard'
import { rootReducer } from './reducers/index'

import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'

import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router'
import { ConnectedRouter } from 'connected-react-router'

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core'
import thunk from 'redux-thunk'

const history = createBrowserHistory()

const store = createStore(
  connectRouter(history)(rootReducer),
  compose(applyMiddleware(routerMiddleware(history), thunk))
)

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2E5BFF'
    },
    secondary: {
      main: '#8097B1'
    }
  }
})

const placeholder = document.getElementById('root')

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <MuiThemeProvider theme={theme}>
        <Switch>
          {/* <Route exact path="/" component={Dashboard} /> */}
          <Route exact path="/" component={Landing} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </MuiThemeProvider>
    </ConnectedRouter>
  </Provider>,
  placeholder
)
