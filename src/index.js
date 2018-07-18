import React from 'react';
import ReactDOM from 'react-dom';
// import Index from './pages/index';
import Dashboard from './pages/dashboard';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'

const store = createStore(rootReducer)

ReactDOM.render(
    <Provider store={store}>
        <Dashboard />
    </Provider>, 
    document.querySelector('#root')
);
