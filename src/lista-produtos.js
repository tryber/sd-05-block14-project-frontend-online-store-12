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
      ordenacao: '/',
    };
    this.searchText = this.searchText.bind(this);
    this.searchProduct = this.searchProduct.bind(this);
    this.renderCategorias = this.renderCategorias.bind(this);
    this.renderProductList = this.renderProductList.bind(this);
  }

  componentDidMount() {
    document.addEventListener('click', (event) => {
      if (event.target.id !== '') {
        api.getProductsFromCategoryAndQuery(event.target.id, document.querySelector('.search-input').value)
          .then((response) => this.setState({ products: response.results }));
      }
    });

    document.querySelector('select').addEventListener('change', () => {
      const options = document.querySelectorAll('option');
      options.forEach((option) => {
        if (option.selected) return this.setState({ ordenacao: option.value });
        return '';
      });
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

  renderCategorias() {
    const { categories } = this.state;
    return (
      <div className="categorias">
        {categories.map((categorie) => (
          <CategoriesList key={categorie.name} categorie={categorie} />
        ))};
      </div>
    );
  }

  renderProductList() {
    const { products } = this.state;
    if (this.state.ordenacao === '/') {
      return <ProductList products={products} />;
    } else if (this.state.ordenacao === '/ordenacao=lowerPrice') {
      const menorPreco = products.slice(0);
      menorPreco.sort((a, b) => a.price - b.price);
      return <ProductList products={menorPreco} />;
    }
    const maiorPreco = products.slice(0);
    maiorPreco.sort((a, b) => b.price - a.price);
    return <ProductList products={maiorPreco} />;
  }

  render() {
    const carrinhopng = "https://img.icons8.com/ios/50/000000/add-shopping-cart.png";
    return (
      <div className="lista-produtos">
        {this.renderCategorias()}
        <div>
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
          <SearchBar
            searchProduct={this.searchProduct}
            onSearchTextChange={this.searchText}
            searchText={this.state.searchText}
          />
          <select name="select">
            <option value="/" selected>Ordenar por Preço</option>
            <option value="/ordenacao=lowerPrice">Menores Preços</option>
            <option value="/ordenacao=higherPrice">Maiores Preços</option>
          </select>
          {this.renderProductList()}
        </div>
        <Link data-testid="shopping-cart-button" to="/cart">
          <img src={carrinhopng} alt="Carrinho de Compras" />
        </Link>
      </div>
    );
  }
}

export default Lista;
