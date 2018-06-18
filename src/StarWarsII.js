import React, { Component } from 'react';
import planets from './planet_data';
import PlanetList from './PlanetList';



class StarWarsII extends React.Component {
	render() {
		return (
			<div>	
				<PlanetList planets={planets} />
			</div>
			);
	}
}


export default StarWarsII;