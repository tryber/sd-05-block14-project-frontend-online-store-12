import React from 'react';
import Lista from './lista-produtos';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import ShopCart from './components/ShopCart';
import CategoriesList from './components/CategoriesList';
import ProductDetail from './components/ProductDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <CategoriesList />
         <Lista />
        <Link data-testid="shopping-cart-button" to="/cart">
          <img
            src="https://img.icons8.com/ios/50/000000/add-shopping-cart.png"
            alt="Carrinho de Compras"
          />
        </Link>
      </div>
      
      <Switch>
        <Route path="/cart" component={ShopCart} />
        <Route path="/products/:id" component={ProductDetail} />
      </Switch>
    </Router>
    
export default App;
