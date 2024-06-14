import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import AuthReducer from './authReducer'; // Ensure correct import
import logger from 'redux-logger'
import { configureStore } from '@reduxjs/toolkit';
const rootReducer = combineReducers({
  user: AuthReducer,
});

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});


export default store;
