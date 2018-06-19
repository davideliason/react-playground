import React, {Component} from 'react';

function WarningComponent(props) {
	if(!props.warning) {
		return null;
	}

	return (
			<div>
				<h3>Warning!</h3>
			</div>
		);
}

class Sandbox extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			warning: false
		}

		this.toggleWarning = this.toggleWarning.bind(this);
	}

	toggleWarning() {
		this.setState(prevState => ({
			warning: !prevState.warning
		}));
	}

	render() {
		return (
				<div>
					<h3> Sandbox </h3>
					<WarningComponent warning={this.state.warning} /> 
					<button onClick={this.toggleWarning}>toggle</button>
				</div>
			);
	}
}

export default Sandbox