import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import App from './containers/App'
import { BrowserRouter } from 'react-router-dom'
import configureStore from './store/configureStore'
import { Provider } from 'react-redux'

const store = configureStore();

render((
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
), document.getElementById('app'))