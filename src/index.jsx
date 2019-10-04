import React from 'react'
import { render } from 'react-dom'

import './assets/css/reset.css'
import './assets/css/styles.scss'

import 'antd/dist/antd.css'

import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'

import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'

import ReducerRegister from './reducers-register.js'

import App from './components/app/app.jsx'

import * as serviceWorker from './service-worker'

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = applyMiddleware(promise, multi, thunk)(createStore)(ReducerRegister, devTools)
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('[data-js="root"]')
)

serviceWorker.unregister()
