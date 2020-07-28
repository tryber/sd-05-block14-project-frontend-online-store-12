import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CategoriesList from './components/CategoriesList';
import './lista-produtos.css';
import ProductList from './components/ProductList';
import * as api from './services/api';

class Lista extends Component {
  constructor(props) {
    super(props);
    this.state = { categories: [], products: [] };
  }

  componentDidMount() {
    document.addEventListener('click', (event) => {
      if (event.target.id !== '') {
        api.getProductsFromCategoryAndQuery(event.target.id, document.querySelector('.search-input').value)
        .then((response) => this.setState({ products: response.results }));
      }
    });

    api.getCategories().then((response) => this.setState({ categories: response }));
  }

  render() {
    const { categories, products } = this.state;
    return (
      <div className="lista-produtos">
        <div className="categorias">
          {categories.map((categorie) => (
            <CategoriesList key={categorie.name} categorie={categorie} />),
          )};
        </div>
        <div>
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
          <input className="search-input" type="text" placeholder="" />
          <ProductList products={products} />
        </div>
        <Link data-testid="shopping-cart-button" to="/cart">
          <img
            src="https://img.icons8.com/ios/50/000000/add-shopping-cart.png"
            alt="Carrinho de Compras"
          />
        </Link>
      </div>
    );
  }
}

export default Lista;
