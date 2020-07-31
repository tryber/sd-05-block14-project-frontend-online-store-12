import React from 'react';
import ProductListCart from './ProductListCart';

class ShopCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = { products: [] };
    this.carregarDados = this.carregarDados.bind(this);
  }

  increase() {
    const { products } = this.state;
    this.setState({ products: products + 1 });
  }

  decrease() {
    const { products } = this.state;
    if (products > 0) this.setState({ products: products - 1 });
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
          <div>
          <button
            type="button"
            data-testid="product-increase-quantity"
            onClick={() => this.increase()}
          >
            +
          </button>
          </div>
          <p>{products.quantidade}</p>
          
          <p data-testid="shopping-cart-product-quantity">{products.quantidade}</p>
          <div>
          <button
            type="button"
            data-testid="product-decrease-quantity"
            onClick={() => this.decrease()}
          >
            -
          </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ShopCart;
