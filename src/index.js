import React, {Component} from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
	render() {
		return (
				<div>
					<h3>React Playground</h3>
				</div>
			);
	}
}

ReactDOM.render(<App />, document.getElementById("container"));