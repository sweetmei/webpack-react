/*
 * @Author: your name
 * @Date: 2021-04-21 15:22:42
 * @LastEditTime: 2021-04-22 17:18:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-webpack\src\pages\todolist\reducer.js
 */
const initState = {
    listData: [
        {id:1, item: 'sss', reson: 'sad', function: 'asdsd', result: 'ewwwqw'},
        {id:2, item: 'sss', reson: 'sad', function: 'asdsd', result: 'ewwwqw'},
        {id:3, item: 'sss', reson: 'sad', function: 'asdsd', result: 'ewwwqw'},
        {id:4, item: 'sss', reson: 'sad', function: 'asdsd', result: 'ewwwqw'}
    ]
};
 
const todoListReducer = (state=initState, action) => {
    switch (action.type) {
        case 'LIST_DATA':
            return {
                ...state,
                listData: action.payload
            };
        default: 
            return {
                ...state
            };
    }
}
 
export default todoListReducer;