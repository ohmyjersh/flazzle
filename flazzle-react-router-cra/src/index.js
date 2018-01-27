import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import {reducer} from './state';
import flags from './flags';
import {flazzleReducer} from './flazzle';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

let store = createStore(combineReducers({app:reducer, flags:flazzleReducer(flags)}));

ReactDOM.render(
<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
