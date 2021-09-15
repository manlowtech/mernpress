import {loginReducer} from './loginReducer';
import { DashboardReducer } from "./DashboardReducer";
import {combineReducers} from 'redux';

export const rootReducer = combineReducers({loginReducer,DashboardReducer});