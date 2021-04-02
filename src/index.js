/*
 * @Author: your name
 * @Date: 2021-04-02 14:25:43
 * @LastEditTime: 2021-04-02 17:25:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-webpack\src\index.js
 */
import './index.less';
function component () {
    var element = document.createElement('div');

    element.classList.add('changeColor');

    element.innerHTML = '阿斯顿撒扩大是';

    return element
}
document.body.appendChild(component())