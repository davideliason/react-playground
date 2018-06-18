import React, { Component } from "react";
 
class TodoItems extends Component {
  createTasks(item) {
    return <li key={item.key}>{item.text}</li>
  }
 
  render() {
    var todoEntries = this.props.todos;
    var listItems = todoEntries.map(this.createTasks);
 
    return (
      <ul className="theList">
          {listItems}
      </ul>
    );
  }
};
 
export default TodoItems;