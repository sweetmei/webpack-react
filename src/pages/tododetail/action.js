/*
 * @Author: your name
 * @Date: 2021-04-22 15:01:16
 * @LastEditTime: 2021-04-22 15:06:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \kuangjia\react-webpack\src\pages\tododetail\action.js
 */
import request from '../../utils/request';
 
const detailData = res => ({
    type: 'DETAIL_DATA',
    payload: res
});
 
export const getTodoDetail = (params, fn) => async (dispatch) => {
    try {
        const result = await request('/api/qq/changeData', {
            method: 'POST',
            data: params
        });
        await dispatch(detailData(result.data));
        fn();
    } catch (error) {
        
    }
}