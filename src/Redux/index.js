import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import reducer from './combinereducer';
import thunk from 'redux-thunk';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
const persister = persistStore(store);

export { store, persister };