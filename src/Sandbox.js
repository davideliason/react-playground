import React, {Component} from 'react';

class Sandbox extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			numbers: [1,2,3]
		}
		this.createNumbs = this.createNumbs.bind(this);
	}

	createNumbs(x) {
		return (
			  <li key={x}>{x * 2}</li>
			);
	}

	render() {
		var propsNumbers = this.state.numbers;
		var displayList = propsNumbers.map(this.createNumbs);
		return (
				<div>
					<p>Sandbox</p>
					<ul>
					  {displayList}
					</ul>
				</div>
			);
	}

}

export default Sandbox