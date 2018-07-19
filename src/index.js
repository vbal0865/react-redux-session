import React from 'react';
import ReactDOM from 'react-dom';
// import Index from './pages/index';
import Dashboard from './pages/dashboard';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import logger from 'redux-logger'
import mySaga from './saga/sagas'


import createSagaMiddleware from 'redux-saga'


const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, applyMiddleware(logger,sagaMiddleware))

// then run the saga
sagaMiddleware.run(mySaga)

ReactDOM.render(
    <Provider store={store}>
        <Dashboard />
    </Provider>, 
    document.querySelector('#root')
);
