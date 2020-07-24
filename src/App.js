import React from 'react';
import * as api from './services/api'
import './App.css';

function App() {
  api.getCategories().then(categories => { console.log(categories) })
  api.getProductsFromCategoryAndQuery('MLB1071', '').then(categorie => { console.log(categorie)})
  return (
    <div className="App">
    lalala
    </div>
  );
}

export default App;
