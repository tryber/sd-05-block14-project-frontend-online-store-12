import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CategoriesList from './components/CategoriesList';
import './lista-produtos.css';
import ProductList from './components/ProductList';
import * as api from './services/api';
import SearchBar from './components/SearchBar';

class Lista extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      categories: [],
      products: [],
    };
    this.searchText = this.searchText.bind(this);
    this.searchProduct = this.searchProduct.bind(this);
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

  searchText(event) {
    this.setState({ searchText: event.target.value });
  }

  searchProduct() {
    const { searchText } = this.state;
    api.getProductsFromCategoryAndQuery('', searchText)
    .then((response) => this.setState({ products: response.results }));
  }

  render() {
    const carrinhopng = "https://img.icons8.com/ios/50/000000/add-shopping-cart.png"
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
        <SearchBar 
          searchProduct={this.searchProduct}
          onSearchTextChange={this.searchText}
          searchText={this.state.searchText}
        />
        </div>
        <Link data-testid="shopping-cart-button" to="/cart">
        <img src={carrinhopng} alt="Carrinho de Compras" />
        </Link>
        <div>
        <ProductList products={products} />
        </div>
      </div>
    );
  }
}

export default Lista;
