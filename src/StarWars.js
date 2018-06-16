import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const StarWars = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/planets`}>Planets</Link>
      </li>
      <li>
        <Link to={`${match.url}/spaceships`}>Spaceships</Link>
      </li>
      <li>
        <Link to={`${match.url}/vehicles`}>Vehicles</Link>
      </li>
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

{/*
const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

*/}

class Topic extends React.Component {
	render() {
		return (
			<p>{this.props.match.params.topicId}</p>
		)
	}
}


export default StarWars;

