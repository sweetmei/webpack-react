/*
 * @Author: your name
 * @Date: 2021-04-07 10:57:48
 * @LastEditTime: 2021-04-22 15:22:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-webpack\src\APP.js
 */
import React from 'react';
import {
    BrowserRouter as Router,
    Route, Switch, Link
} from 'react-router-dom';
import PropTypes from 'prop-types';
import TodoList from './pages/todolist'
import TodoDetail from './pages/tododetail'
const App = (
    ({history}) => {
        return (<div>
            <Router history={history}>
            <ul>
              <Link to='/'><li>首页</li></Link>
              <Link to='/todoList'> <li>列表</li></Link>
              <Link to='/todoDetail'><li>详情</li></Link>
              
          </ul>
            <Switch>
                <Route path='/' exact component={TodoList}></Route>
                <Route path='/todoList' exact component={TodoList}></Route>
                <Route path='/todoDetail' exact component={TodoDetail}></Route>
            </Switch>
        </Router></div>)
        
    }
)
App.prototype = {
    history: PropTypes.shape({}).isRequired
}
export default App