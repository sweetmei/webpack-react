/*
 * @Author: your name
 * @Date: 2021-04-22 15:02:15
 * @LastEditTime: 2021-04-22 17:22:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \kuangjia\react-webpack\src\pages\todolist\action.js
 */


// import request from '../../utils/request';
 
const listData = res => ({
    type: 'LIST_DATA',
    payload: res
});
 
export const getTodoList = (params, fn) => async (dispatch) => {
    try {
        // const result = await request('/api/qq/changeData', {
        //     method: 'POST',
        //     data: params
        // });
        await dispatch(listData([{id:1, name: 'sssqweqeq', reson: 'sad', age: 'asdsd', result: 'ewwwqw'},
        {id:2, name: 'qweqw', reson: 'sad', age: 'asdsd', result: 'ewwwqw'},
        {id:3, name: 'eqweq', reson: 'sad', age: 'asdsd', result: 'ewwwqw'},
        {id:4, name: 'eqw', reson: 'sad', age: 'asdsd', result: 'ewwwqw'}]));
        fn();
    } catch (error) {
 
    }
}