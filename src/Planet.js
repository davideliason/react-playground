import React, {Component} from 'react';

class Planet extends React.Component {
	constructor(props) {
		super(props);
	}

	

	render() {
		var displayPlanet = this.props.displayPlanet;
		var planetsKeys = Object.keys(displayPlanet);
		return (
				<div>
					<p>{displayPlanet.climate}</p>
					<p>name: {planetsKeys[1]}</p>
				</div>
			);
	}
}

export default Planet