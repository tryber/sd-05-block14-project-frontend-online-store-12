import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Lista from './components/lista-produtos';
import './App.css';
import ShopCart from './components/ShopCart';
import ProductDetail from './components/ProductDetail';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Lista} />
        <Route path="/cart" component={ShopCart} />
        <Route path="/products/:id" component={ProductDetail} />
      </Switch>
    </Router>
  );
}

export default App;
