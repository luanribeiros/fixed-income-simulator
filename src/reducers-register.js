import { combineReducers } from 'redux'

import AppReducer from './components/app/app-reducer.js'

const ReducerRegister = combineReducers({
  app: AppReducer
})

export default ReducerRegister
