import React from 'react';
import ProductListCart from './ProductListCart';

class ShopCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = { products: [], items: 0 };
    this.carregarDados = this.carregarDados.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.removeProduct = this.removeProduct.bind(this);
  }

  addToCart(product) {
    this.props.onClickAdd(product);
    this.props.onClickIncrement();
  }

  removeProduct(product) {
    this.props.onClickRemove(product);
    this.props.onClickDecrement();
  }

  componentDidMount() {
    this.carregarDados();
  }

  carregarDados() {
    const carrinhoCompras = JSON.parse(localStorage.getItem('carrinhoCompras'));
    this.setState({ products: carrinhoCompras });
  }

  render() {
    const { products } = this.state;
    if (products === null) {
      return <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>;
    }
    return (
      <div>
        <ProductListCart products={products} />
        <div>
        <button type="button" data-testid="product-increase-quantity" onClick={() => this.addToCart(products)}>+</button>
            <p>{products.quantidade}</p>
            <p data-testid="shopping-cart-product-quantity">{products.quantidade}</p>
            <button type="button" data-testid="product-decrease-quantity" onClick={() => this.removeProduct(products)}>-</button>
        </div>
      </div>
    );
  }
}

export default ShopCart;
