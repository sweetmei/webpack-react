/*
 * @Author: your name
 * @Date: 2021-04-07 10:57:48
 * @LastEditTime: 2021-04-07 17:53:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-webpack\src\APP.js
 */
import React from 'react';
import {
    BrowserRouter as Router,
    Route, Switch
} from 'react-router-dom';
import PropTypes from 'prop-types';
import TodoList from './pages/todolist'
import TodoDetail from './pages/tododetail'

const APP = () => {
    return (<Router history={history}>
        <Switch>
            <Route path='/' exact component={TodoList}></Route>
            <Route path='/todoList' exact component={TodoList}></Route>
            <Route path='/todoDetail' exact component={TodoDetail}></Route>
        </Switch>
    </Router>)
    
}
APP.prototype = {
    history: PropTypes.shape({}).isRequired
}
export default APP