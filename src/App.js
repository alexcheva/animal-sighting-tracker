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
import Header from './components/Header';
import Species from './components/ShowSpecies';
import AddAnimal from './components/AddAnimal';
import Individuals from './components/ShowIndividuals';
import AddIndividualForm from './components/AddIndividual';
import Sightings from './components/ShowSightings';
import AddSightingForm from './components/AddSighting';
import Footer from './components/Footer';
function App() {
  return (
    
    <Router>
      <header id="header" className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 id="name" className="display-4">Animal Sighting Tracker</h1>
        <p className="lead">Track engangered species.</p>
      
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
          </div>
        </header>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <div className="container">
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
        <Footer />
        
    </Router>
  );
}

export default App;
