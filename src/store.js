/*
 * @Author: your name
 * @Date: 2021-04-07 10:58:07
 * @LastEditTime: 2021-04-26 14:29:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-webpack\src\stpre.js
 */
import {  combineReducers }  from 'redux';
import todoListReducer from './pages/todolist/reducer';
import todoDetailReducer from './pages/tododetail/reducer';
import globalReducer from './models/globalReducer';

const storeTree = combineReducers({
    todoListReducer,
    todoDetailReducer,
    globalReducer,
})
export default storeTree