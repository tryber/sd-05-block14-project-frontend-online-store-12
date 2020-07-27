import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CategoriesList from './CategoriesList';
import ProductList from './ProductList';
import { getProductsFromCategoryAndQuery } from '../services/api';

class Lista extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      products: [],
    };
    this.searchText = this.searchText.bind(this);
    this.searchProduct = this.searchProduct.bind(this);
  }

  searchText(event) {
    this.setState({ searchText: event.target.value });
  }

  searchProduct() {
    const { searchText } = this.state;
    getProductsFromCategoryAndQuery('', searchText)
    .then((response) => this.setState({ products: response.results }));
  }
  render() {
    return (
      <div className="lista-produtos">
        <CategoriesList />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <input
          type="text"
          placeholder=""
          data-testid="query-input"
          onChange={this.searchText}
          value={this.state.searchText}
        />
        <button type="button" data-testid="query-button" onClick={this.searchProduct}>
          Buscar
        </button>
        <Link data-testid="shopping-cart-button" to="/cart">
          <img
            src="https://img.icons8.com/ios/50/000000/add-shopping-cart.png"
            alt="Carrinho de Compras"
          />
        </Link>
        <ProductList products={this.state.products} />
      </div>
    );
  }
}

export default Lista;
