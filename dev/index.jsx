import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	render() {
	  return (
	  	<div>
	  		<h3>hello</h3>
	  	</div>
	  );
	}
}

ReactDom.render(<App/>,document.querySelector("#container"));