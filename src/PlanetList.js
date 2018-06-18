import React, {Component} from 'react';

class PlanetList extends React.Component {
	render() {
		return (
			  <div>
			  	<p>PlanetList</p>
			  	{this.props.planets[0].name}
			  </div>
			);
	}
}

export default PlanetList;