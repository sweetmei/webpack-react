/*
 * @Author: your name
 * @Date: 2021-04-22 15:02:15
 * @LastEditTime: 2021-04-26 14:26:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \kuangjia\react-webpack\src\pages\todolist\action.js
 */


// import request from '../../utils/request';
 
const listData = res => ({
    type: 'LIST_DATA',
    payload: res
});
 
// params是页面组件得传参  而fn也是组件传参  将返回async后面得函数给前面得页面组件
export const getTodoList = (params, fn) => 

async (dispatch) => {
    // 这个上面 得dispatch是共享得外层函数得参数
    try {
        // const result = await request('/api/qq/changeData', {
        //     method: 'POST',
        //     data: params
        // });
        await dispatch(listData([{id:1, name: 'sssqweqeq', reson: 'sad', age: 'asdsd', result: 'ewwwqw'},
        {id:2, name: 'qweqw', reson: 'sad', age: 'asdsd', result: 'ewwwqw'},
        {id:3, name: 'eqweq', reson: 'sad', age: 'asdsd', result: 'ewwwqw'},
        {id:4, name: 'eqw', reson: 'sad', age: 'asdsd', result: 'ewwwqw'}]));
        
    } catch (error) {
 
    }
}

