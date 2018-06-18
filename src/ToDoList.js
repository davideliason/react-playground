import React, { Component } from 'react';


class ToDoList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			todos : [],
			item : ""
		}
	}

	addItem = () => {
		this.setState({

		})
	}
	render() {
		return (
				<div>
					<form onSubmit={this.addItem}>
						<input type="text" 
						 placeholder="enter todo"
						  />
						<button type="submit">add</button>
					</form>
				</div>
			)
	}
}

export default ToDoList;