import React, {Component} from 'react';

class Planet extends React.Component {
	render() {
		 return (
		 	     <div>
		 			<li>{this.props.name}</li>
		 	     </div>
		 	);
	}
}