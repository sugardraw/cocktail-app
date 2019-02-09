import React from 'react';
import ReactDOM from 'react-dom';
import './css/styles.css';
import Router from './components/Router';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from './redux/store/index'

ReactDOM.render(
    <Provider store={store}>
        <Router/>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
