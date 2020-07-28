import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Lista from './lista-produtos';

import './App.css';
import ShopCart from './components/ShopCart';
import ProductDetail from './components/ProductDetail';
import LowerPrice from './components/LowerPrice';
import HigherPrice from './components/HigherPrice';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Lista} />
          <Route path="/cart" component={ShopCart} />
          <Route path="/products/:id" component={ProductDetail} />
          <Route path="/ordenacao=lowerPrice" component={LowerPrice} />
          <Route path="/ordenacao=higherPrice" component={HigherPrice} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
