import { createStore, applyMiddleware } from 'redux';
import contactReducer from './contact/contact';
import logger from 'redux-logger';

const store = createStore(contactReducer, applyMiddleware(logger));

export default store;
