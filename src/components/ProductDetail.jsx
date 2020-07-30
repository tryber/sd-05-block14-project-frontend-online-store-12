import React from 'react';
import * as api from '../services/api';

class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = { product: '', contador: 0 };
    this.sumContador = this.sumContador.bind(this);
    this.substrairContador = this.substrairContador.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    const itemId = this.props.location.pathname.split('/');
    api.getProductsFromCategoryAndQuery(id, '')
      .then((response) => response.results.map((result) => {
        if (result.id === itemId[itemId.length - 1]) return this.setState({ product: result });
        return '';
      }));
  }

  sumContador() {
    return this.setState({ contador: (this.state.contador + 1) });
  }

  substrairContador() {
    if (this.state.contador === 0) return this.setState({ contador: 0 });
    return this.setState({ contador: (this.state.contador - 1) });
  }

  addToCart() {
    let carrinhoCompras = JSON.parse(localStorage.getItem('carrinhoCompras'));
    const { title, price, condition, thumbnail, id } = this.state.product;
    const categoryId = this.state.product.category_id;
    const qtdEstoque = this.state.product.available_quantity;
    function carrinhopush() {
      carrinhoCompras.push({
        title,
        price,
        condition,
        thumbnail,
        id,
        categoryId,
        qtdEstoque,
      });
      localStorage.setItem('carrinhoCompras', JSON.stringify(carrinhoCompras));
    }

    if (carrinhoCompras !== null) {
      carrinhopush();
    } else {
      carrinhoCompras = [];
      carrinhopush();
    }
  }

  render() {
    const { title, price, condition, thumbnail } = this.state.product;
    const qtdEstoque = this.state.product.available_quantity;
    return (
      <div>
        <h1 data-testid="produt-detail-name">{title}</h1>
        <img src={thumbnail} alt="Product" />
        <p>Valor: R${price}</p>
        <p>Condição: {condition}</p>
        <p>Estoque disponível: {qtdEstoque}</p>
        <div>
          <h2>Quantidade</h2>
          <div>
            <button onClick={this.substrairContador}>-</button>
            <span>{this.state.contador}</span>
            <button onClick={this.sumContador}>+</button>
            <button
              data-testid="product-detail-add-to-cart"
              type="button"
              onClick={this.addToCart}
            >Adicionar ao carrinho</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDetail;
