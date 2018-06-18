import React, {Component} from 'react';

class PlanetList extends React.Component {
	constructor(props) {
		super(props);

		this.createPlanet = this.createPlanet.bind(this);
	}

    createPlanet(planet) {
    	return (
    			<li key={planet.key}>{planet.name}</li>
    		);
    }

	render() {
		var planetEntries = this.props.planets;
		var planetList = planetEntries.map(this.createPlanet);

		return (
			  	<ul>
			  		{planetList}
			  	</ul>
			);
	}
}

export default PlanetList;
