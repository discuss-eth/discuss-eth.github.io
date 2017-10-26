import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import Thunk from 'redux-thunk';
import * as reducers from '../reducers/_all';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(initialState = {}) {
  return createStore(
    combineReducers(reducers),
    initialState,
    composeEnhancers(
      applyMiddleware(
        Thunk
      )
    )
  );
}