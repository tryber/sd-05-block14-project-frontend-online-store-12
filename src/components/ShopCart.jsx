import React from 'react';
import ProductListCart from './ProductListCart';

class ShopCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = { products: [] };
    this.carregarDados = this.carregarDados.bind(this);
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
      </div>
    );
  }
}

export default ShopCart;
