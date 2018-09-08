import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import './index.css'
import App from './components/App'
import appReducers from './reducers'
import registerServiceWorker from './registerServiceWorker'
import { Provider } from 'react-redux'

const store = createStore(appReducers, applyMiddleware(logger))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
