import React, { Component } from 'react';
import planets from './planet_data';
import PlanetList from './PlanetList';
import Planet from './Planet';



class StarWarsII extends React.Component {

	render() {

		return (
			<div>	
				<PlanetList planets={planets} />
				<Planet displayPlanet = {planets[0]} />
			</div>
			);
	}
}


export default StarWarsII;