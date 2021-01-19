
import {combineReducers } from 'redux';
import { productReducer } from './productReducer';
import { insurance } from './insuranceComp'


export default combineReducers({
    productReducer,
    insurance
});


