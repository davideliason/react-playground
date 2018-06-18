import React, { Component } from 'react';
import planets from './planet_data';



class StarWarsII extends React.Component {
	render() {
		return (
			<div>	
			  <p>{planets[0].name}</p>

			</div>
			);
	}
}


export default StarWarsII;