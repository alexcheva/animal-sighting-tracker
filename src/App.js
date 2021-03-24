import logo from './logo.svg';
import './App.css';
import * as React from "react";

import * as apiClient from "./apiClient";
import AddAnimal from './components/AddAnimal';
import SpeciesBlock from './components/ShowSpecies';
function App() {
  return (
    <div className="App">
      <SpeciesBlock />
      <AddAnimal />
    </div>
  );
}

export default App;
