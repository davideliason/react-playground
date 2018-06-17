import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const API = 'https://swapi.co/api/';

const StarWars = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      {/* 

       <li>
      }
        <Link to={`${match.url}/planets`}>Planets</Link>
      </li>
      <li>
        <Link to={`${match.url}/starships`}>Spaceships</Link>
      </li>
      <li>
        <Link to={`${match.url}/vehicles`}>Vehicles</Link>
      </li>

      */}

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
			planet: "Tatooine",
      starship: "Death Star",
      vehicle: "Sand Crawler",
      person: "Luke Skywalker",
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
    
    fetch(API + this.state.topic + '/?search=' + this.state.person)
      .then(response => response.json())
      .then(data => this.setState({person : data.results[0].name}))
  }
	render() {
		return (
		  <div>
			<p>{this.props.match.params.topicId}</p>
      <p>"here's the url" + {API + this.state.topic + '/?search=' + this.state.planet}</p>
			<h2>{this.state.topic} </h2>
      <h3>Here's the name: {this.state.person}</h3>

		  </div>

		)
	}
}


export default StarWars;

