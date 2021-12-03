import React from 'react'
import {render} from 'react-dom'
import {ConnectedRouter} from "connected-react-router"
import App from "./App"
import './styles/index.scss';
import store, {history} from './reducers/main'
import {Provider} from "react-redux";
import $ from 'jquery'


const build = () => render(
  <React.StrictMode>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App/>
      </ConnectedRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)

$(window).on('load', build)
