/*
 * @Author: your name
 * @Date: 2021-04-07 10:54:18
 * @LastEditTime: 2021-04-22 17:24:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-webpack\src\pages\todolist\index.js
 */
import React from 'react';
import { connect } from 'react-redux'
import { getTodoList } from './action';
import { Table } from 'antd'

@connect(state => state,
	{
		getTodoList
	}
)
class TodoList extends React.Component {

	constructor(props) {
		super(props)
	}



	componentDidMount() {
		this.props.getTodoList();

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