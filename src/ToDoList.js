import React, { Component } from 'react';


class ToDoList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			todos : [],
			item : ""
		}
		this.addItem = this.addItem.bind(this);
	}

	addItem = (e) => {
		
	}

	render() {
		return (
				<div>
					<form onSubmit={this.addItem}>
						<input type="text" 
						 placeholder="enter todo"
						 ref=( (a) => this._inputElement = a)
						  />
						<button type="submit">add</button>
					</form>
				</div>
			)
	}
}

export default ToDoList;