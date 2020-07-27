import React from 'react';
import * as api from './services/api'
import './App.css';
import Lista from './lista-produtos'

function App() {
  api.getCategories().then(categories => { console.log(categories) })
  return (
    <div className="App">
    lalala
    <Lista />
    </div>
  );
}

export default App;
