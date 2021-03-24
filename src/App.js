import logo from './logo.svg';
import './App.css';
import * as React from "react";
import Species from './components/ShowSpecies';
import AddAnimal from './components/AddAnimal';
import Individuals from './components/ShowIndividuals';
import Sightings from './components/ShowSightings';
function App() {
  return (
    <div className="App">
      <Species />
      <AddAnimal />
      <Individuals />
      <Sightings />
    </div>
  );
}

export default App;
