/*
 * @Author: your name
 * @Date: 2021-04-07 10:57:54
 * @LastEditTime: 2021-04-14 14:11:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-webpack\src\index.js
 */

// import ReactDom from 'react-dom';
// import { Provider  } from "react-redux";
// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import history from './utils/history';
// import storeTree from "./store";
// import App from "./app";
// const store = createStore(storeTree, applyMiddleware(thunk));

// ReactDom.render(<Provider store={store}>
//     <APP history = {history}/>
// </Provider>, document.getElementById('app'))


import ReactDom from 'react-dom';
// // import TodoList from '@pages/todolist'
console.log(ReactDom)
ReactDom.render(<h1>入门教程</h1>, document.getElementById('app'))