import React from 'react';
import ProductListCart from './ProductListCart';

class ShopCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = { products: [] };
  }

  componentDidMount() {
    let carrinhoCompras = JSON.parse(localStorage.getItem('carrinhoCompras'));
    console.log(carrinhoCompras);
    this.setState({ products: carrinhoCompras });
  }

  render() {
    const { products } = this.state;
    if (products !== null) {
      return (
        <div>
          <ProductListCart products={products} />
        </div>
      );
    }
    else {
      return (
        <div data-testid="shopping-cart-empty-message">Seu carrinho está vazio</div>
      );
    }
  }
}

export default ShopCart;
