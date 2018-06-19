import React, {Component} from 'react';

class Planet extends React.Component {
	constructor(props) {
		super(props);
	}

	

	render(){
		  const planet= this.props.displayPlanet;  // Essentially does: const vals = this.state.vals;
		  return (
		    <div>
		      {
		        Object.keys(planet).map((key, index) => ( 
		          <p key={index}> this is my key {key} and this is my value {planet[key]}</p> 
		        ))
		      }
		    </div>
		  )
		}
}

export default Planet