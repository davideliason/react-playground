import React, {Component} from 'react';

function NumberList(props) {
	var nums = props.numbers;
	var numElements = nums.map( (x, index) => <li key={index}>{x * 5}</li> );

	return(
		<ul>{numElements}</ul>
	)
}

class Sandbox extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			numbers: [1,2,3]
		}
	}

	render() {
		var propsNumbers = this.state.numbers;
		return (
				<div>
					<p>Sandbox</p>
					<ul>
						{propsNumbers.map((num) => <li key={num.toString()}>{num * 33}</li> )}
					</ul>
				</div>
			);
	}

}

export default Sandbox