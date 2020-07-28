import React from 'react';

class HigherPrice extends React.Component {
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
    const carrinhopng = 'https://img.icons8.com/ios/50/000000/add-shopping-cart.png';
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
          <input
            className="search-input"
            type="text"
            placeholder=""
            data-testid="query-input"
            onChange={this.searchText}
            value={this.state.searchText}
          />
          <button type="button" data-testid="query-button" onClick={this.searchProduct}>
            Buscar
          </button>
          <select name="select">
            <option>Menores Preços</option>
            <option>Maiores Preços</option>
          </select>
          <ProductList products={products} />
        </div>
        <Link data-testid="shopping-cart-button" to="/cart">
          <img src={carrinhopng} alt="Carrinho de Compras" />
        </Link>
      </div>
    );
  }
}

export default HigherPrice;
