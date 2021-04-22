/*
 * @Author: your name
 * @Date: 2021-04-07 10:58:07
 * @LastEditTime: 2021-04-21 15:23:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-webpack\src\stpre.js
 */
import {  combineReducers }  from 'redux';
import todoListReducer from './pages/todolist/reducer';
import todoDetailReducer from './pages/tododetail/reducer'

const storeTree = combineReducers({
    todoListReducer,
    todoDetailReducer
})
export default storeTree