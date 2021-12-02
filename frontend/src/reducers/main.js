import {applyMiddleware, combineReducers, createStore} from 'redux'
import {createBrowserHistory} from 'history'
import {connectRouter, routerMiddleware} from 'connected-react-router'
import {usersInitialState, usersReducer} from './usersReducer'
import {composeWithDevTools} from "redux-devtools-extension";

export const history = createBrowserHistory()

const buildMiddleware = () => {
  // noinspection JSUnresolvedVariable
  const middleware = [
    applyMiddleware(routerMiddleware(history)),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ]
  return middleware
}

export default createStore(
  combineReducers({
    users: usersReducer,
    router: connectRouter(history)
  }),
  {
    users: usersInitialState,
  },
  composeWithDevTools(
    applyMiddleware(routerMiddleware(history)),
  )
)
