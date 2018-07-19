import React from 'react';
import ReactDOM from 'react-dom';
// import Index from './pages/index';
import Dashboard from './pages/dashboard';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import logger from 'redux-logger'


const store = createStore(rootReducer, applyMiddleware(logger))

ReactDOM.render(
    <Provider store={store}>
        <Dashboard />
    </Provider>, 
    document.querySelector('#root')
);
