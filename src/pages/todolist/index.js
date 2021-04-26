/*
 * @Author: your name
 * @Date: 2021-04-07 10:54:18
 * @LastEditTime: 2021-04-26 15:29:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-webpack\src\pages\todolist\index.js
 */
import React from 'react';
import { connect } from 'react-redux'
import { getTodoList } from './action';
import { globalAction } from '../../models/globalAction'
import { Table, Button } from 'antd'
/**
 * connect 参数
 * mapStateToProps(state, ownprops)=> state  state是整个redux得值，而ownprops是这个组件内得props
 * mapDispatchToProps  如果是对象得话，那么将会和组件得props绑定到一起,进行调用；如果是个函数
 */
const mapStateToProps = state=>state;
const mapDispatchToProps = (dispatch)=>{
	console.log()
	return {
		todoListActions: (...args)=>dispatch(getTodoList({page:10},(data)=>{
			console(data)
		})),
		globalActionFlag: (...args)=>dispatch(globalAction(...args))
	 }
}
@connect(mapStateToProps, mapDispatchToProps )
class TodoList extends React.Component {

	constructor(props) {
		super(props)
	}

	state = {
		flag: false
	}


	componentDidMount() {
		this.props.todoListActions();
	}
	axiosGlobal = () => {
		this.props.globalActionFlag(this.props.globalReducer.globalFlag);
	}
	render() {
		console.log(this.props)
		let { todoListReducer: { listData }, } = this.props;
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
			<Button type='primary' onClick={e=>this.axiosGlobal()}>按钮</Button>
			<Table
				dataSource={listData}
				columns={columns}
				rowKey='id'
			/></div>)
	}

}
export default TodoList