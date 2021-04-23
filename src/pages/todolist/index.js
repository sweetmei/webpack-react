/*
 * @Author: your name
 * @Date: 2021-04-07 10:54:18
 * @LastEditTime: 2021-04-23 15:22:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-webpack\src\pages\todolist\index.js
 */
import React from 'react';
import { connect } from 'react-redux'
import { getTodoList } from './action';
import { Table } from 'antd'
/**
 * connect 参数
 * mapStateToProps(state, ownprops)=> state  state是整个redux得值，而ownprops是这个组件内得props
 * mapDispatchToProps  如果是对象得话，那么将会和组件得props绑定到一起,进行调用；如果是个函数
 */
const mapStateToProps = state=>state;
const mapDispatchToProps = (dispatch)=>{
	return {
		todoListActions: (...args)=>dispatch(getTodoList()),
	 }
}
@connect(mapStateToProps, mapDispatchToProps )
class TodoList extends React.Component {

	constructor(props) {
		super(props)
	}



	componentDidMount() {
		console.log(this.props)
		this.props.todoListActions();

	}
	render() {
		let { todoListReducer: { listData } } = this.props;
		const columns = [{
			title: '名字',
			dataIndex: 'name',
			align: 'center'
		}, {
			title: '年龄',
			dataIndex: 'age',
			align: 'center'
		},
		{
			title: '原因',
			dataIndex: 'reson',
			align: 'center'
		}]
		return (<div>
			<Table
				dataSource={listData}
				columns={columns}
				rowKey='id'
			/></div>)
	}

}
export default TodoList