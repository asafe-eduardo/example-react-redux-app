import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css'

import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import thunk from "redux-thunk";
import {Router, hashHistory} from 'react-router';

import Rotas from './routes';
import correiosReducers from './reducers'



if (process.env.NODE_ENV === "production") {
    let link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'bundle.css';
    document
        .querySelector('head')
        .appendChild(link);
}


const devTools =  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = applyMiddleware(thunk)(createStore)(correiosReducers,devTools);

render(
    <Provider store={store}>
         <div>
             <Rotas hashHistory={hashHistory} store={store} />
         </div>
    </Provider>,
    document.getElementById('root')
);