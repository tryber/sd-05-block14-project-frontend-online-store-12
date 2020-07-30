import React from 'react';
import './ProductCardCart.css';

class ProductCardCart extends React.Component {
  render() {
    const { title, price, thumbnail } = this.props.product;

    return (
      <div className="card-carrinho">
        <p data-testid="shopping-cart-product-quantity">1</p>
        <p data-testid="shopping-cart-product-name">{title}</p>
        <img src={thumbnail} alt="Product" />
        <p>R${price}</p>
      </div>
    );
  }
}

export default ProductCardCart;
