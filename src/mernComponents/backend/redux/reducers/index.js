import {loginReducer} from './loginReducer';
import {combineReducers} from 'redux';

export const rootReducer = combineReducers(loginReducer);