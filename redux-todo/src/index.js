import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/reducers';
import  logger from 'redux-logger';
import customMiddleware from './actions/customMiddleware';



const store = createStore(rootReducer, applyMiddleware(customMiddleware, logger));


ReactDOM.render(
<Provider store={store}>
<App />
</Provider>, document.getElementById('root'));


