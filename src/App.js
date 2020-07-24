import React from 'react';
import * as api from './services/api'
import './App.css';

function App() {
  api.getCategories().then(categories => { console.log(categories) })
  return (
    <div className="App">
    lalala
    </div>
  );
}

export default App;
