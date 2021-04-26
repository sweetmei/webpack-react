/*
 * @Author: your name
 * @Date: 2021-04-26 14:07:58
 * @LastEditTime: 2021-04-26 15:33:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-webpack\src\models\globalAction.js
 */
const globalFlag = res => ({
  type: 'CHANGEFLAG',
  payload: res
})
export const globalAction = (params, fn) => async ( dispatch )=> {
   try {
    //  console.log(globalFlag(!params),'globalFlag(!params)')
    await dispatch(globalFlag(!params))
    fn()
  } catch {
    error => {
      Promise.reject(error)
    }
  }
}