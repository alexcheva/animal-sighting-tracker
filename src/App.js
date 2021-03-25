import logo from './logo.svg';
import './App.css';
import * as React from "react";
//import router:
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Species from './components/ShowSpecies';
import AddAnimal from './components/AddAnimal';
import Individuals from './components/ShowIndividuals';
import AddIndividualForm from './components/AddIndividual';
import Sightings from './components/ShowSightings';
import AddSightingForm from './components/AddSighting';
function App() {
  return (
    <Router>
      <div class="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Species</Link>
            </li>
            <li>
              <Link to="/individuals">Individuals</Link>
            </li>
            <li>
              <Link to="/sightings">Sightings</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/individuals">
            <AddIndividualForm />
            <Individuals />
            
          </Route>
          <Route path="/sightings">
            <AddSightingForm />
            <Sightings />
          </Route>
          <Route path="/">
            <AddAnimal />
            <Species />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
