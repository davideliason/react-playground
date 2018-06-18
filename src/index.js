import React, {Component} from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Home.js';
import Colorizer from './Colorizer';
import StarWars from './StarWars';
import StarWarsII from './StarWarsII';

import ToDoList from './ToDoList';


const App = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/colorizer">Colorizer</Link>
        </li>
        <li>
          <Link to="/starwars">Star Wars</Link>
        </li>
        <li>
          <Link to="/starwarsII">Star Wars v2.0</Link>
        </li>
        <li>
          <Link to="/todolist">ToDo List</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/colorizer" component={Colorizer} />
      <Route path="/starwars" component={StarWars} />
      <Route path="/starwarsII" component={StarWarsII} />
      <Route path="/todolist" component={ToDoList} />
    </div>
  </Router>
);




ReactDOM.render(<App />, document.getElementById("container"));