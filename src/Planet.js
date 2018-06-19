import React, {Component} from 'react';

class Planet extends React.Component {
	constructor(props) {
		super(props);
	}

	

	render(){
		  var planetStyle = { listStyleType: "none"} ;
		  const planet= this.props.displayPlanet;  // Essentially does: const vals = this.state.vals;
		  return (
		    <div>
		     <h3>Planet : {planet.name}</h3>
		      <ul>
		      {
		        Object.keys(planet).map((key, index) => ( 
		          <li style={planetStyle} key={index}> {key} : {planet[key]}</li> 
		        ))
		      }
		      </ul>
		    </div>
		  )
		}
}

export default Planet