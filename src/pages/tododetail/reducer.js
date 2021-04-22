/*
 * @Author: your name
 * @Date: 2021-04-21 15:22:35
 * @LastEditTime: 2021-04-21 15:23:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-webpack\src\pages\tododetail\reducer.js
 */
const initState = {
    info: {
        asd:'232323123213'
    }
};
 
const todoDetailReducer = (state=initState, action) => {
    switch (action.type) {
        case 'DETAIL_DATA':
            return {
                ...state,
                ...action.payload,
                info: action.payload
            };
        default: 
            return {
                ...state
            };
    }
}
 
export default todoDetailReducer;