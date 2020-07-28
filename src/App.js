import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import ShopCart from './components/ShopCart';
import ProductDetail from './components/ProductDetail';
import Form from './form-avaliacao';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/cart" component={ShopCart} />
          <Route path="/products/:id" component={ProductDetail} />
          <Route path="/form" component={Form} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
