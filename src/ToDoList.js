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

	addItem(e) {
		  if (this._inputElement.value !== "") {
		    var newItem = {
		      text: this._inputElement.value,
		      key: Date.now()
		    };
		 
		    this.setState((prevState) => {
		      return { 
		        todos: prevState.todos.concat(newItem) 
		      };
		    });
		   
		    this._inputElement.value = "";
		  }
		   
		  console.log(this.state.todos);
		     
		  e.preventDefault();
}

	render() {
		return (
				<div>
					<form onSubmit={this.addItem}>
						 <input ref={(a) => this._inputElement = a} 
                 	    	 placeholder="enter task">
          				 </input>
						<button type="submit">add</button>
					</form>
				</div>
			)
	}
}

export default ToDoList;