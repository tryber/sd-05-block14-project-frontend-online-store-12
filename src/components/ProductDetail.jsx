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
    const { product } = this.state;

    let carrinhoCompras = JSON.parse(localStorage.getItem('carrinhoCompras'));

    if (carrinhoCompras !== null) {
      const produtoNoCarrinho = carrinhoCompras.some((produto) => produto.id === product.id);

      if (produtoNoCarrinho) {
        let index = 0;
        carrinhoCompras.map((produto, i) => {
          if (produto.id === product.id) {
            index = i;
            return '';
          }
          return '';
        });
        carrinhoCompras[index].quantidade += 1;
        localStorage.setItem('carrinhoCompras', JSON.stringify(carrinhoCompras));
      } else {
        product.quantidade = 1;
        carrinhoCompras.push(product);
        localStorage.setItem('carrinhoCompras', JSON.stringify(carrinhoCompras));
      }
    } else {
      carrinhoCompras = [];
      product.quantidade = 1;
      carrinhoCompras.push(product);
      localStorage.setItem('carrinhoCompras', JSON.stringify(carrinhoCompras));
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
