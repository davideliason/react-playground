import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const API = 'https://swapi.co/api/';

const StarWars = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
       <li>
        <Link to={`${match.url}/people`}>People</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
);

class Topic extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			planet: "",
      starship: "",
      vehicle: "",
      personName: "Luke Skywalker",
      personHairColor: "",
      topic: "",
      querySubject: ""
		}
	}

  

	componentWillMount() {
		this.setState({
			topic: this.props.match.params.topicId
		});
	}

  componentDidMount() {
    
    fetch(API + this.state.topic + '/?search=' + this.state.personName)
      .then(response => response.json())
      .then(data => this.setState({ personName : data.results[0].name,
                                    personHairColor: data.results[0].hair_color
                                  }))
  }
	render() {
		return (
		  <div>
      <h3>Name: {this.state.personName}</h3>
      <p> Hair color: {this.state.personHairColor} </p>

		  </div>

		)
	}
}


export default StarWars;

