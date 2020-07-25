import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import * as api from './services/api'
import './App.css';

import ShopCart from './components/ShopCart';
import CategoriesList from './components/CategoriesList';

function App() {
  api.getCategories().then(response => console.log(response))
  api.getProductsFromCategoryAndQuery('MLB1071', '').then(categorie => { console.log(categorie) })
  return (
    <Router>
      <div className="App">
        <CategoriesList />

        <Link data-testid="shopping-cart-button" to="/cart">
          <img
            src="https://img.icons8.com/ios/50/000000/add-shopping-cart.png"
            alt="Carrinho de Compras"
          />
        </Link>
      </div>

      <Switch>
        <Route path="/cart" component={ShopCart} />
      </Switch>
    </Router>
  );
}

export default App;
