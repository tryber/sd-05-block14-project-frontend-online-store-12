import React from 'react';

import * as api from './services/api'
import './App.css';

import ShopCart from './components/ShopCart';

function App() {
  api.getCategories().then(categories => { console.log(categories) })
  api.getProductsFromCategoryAndQuery('MLB1071', '').then(categorie => { console.log(categorie) })
  return (
    <div className="App">
      <button data-testid="shopping-cart-button">
        <img src="https://img.icons8.com/ios/50/000000/add-shopping-cart.png" />
      </button>
    </div>
  );
}

export default App;
