/*
 * @Author: your name
 * @Date: 2021-04-26 13:53:49
 * @LastEditTime: 2021-04-26 15:35:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-webpack\src\models\global.js
 */
let initalState = {
    globalFlag: false
}

 const globalReducer = ( state = initalState, action)=>{
  let { payload, type} = action;
  switch (type) {
      case 'CHANGEFLAG':
          return {
              ...state,
              globalFlag: payload,
          };
      default:
         return {
             ...state,
         }
  }
}
export default globalReducer