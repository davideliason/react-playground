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
	render() {
		return (
				<div>
					<h3> Sandbox </h3>
					<WarningComponent warning={true} /> 
				</div>
			);
	}
}

export default Sandbox