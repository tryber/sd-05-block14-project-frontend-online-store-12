import React from 'react';
import './ProductCardCart.css';

class ProductCardCart extends React.Component {
  render() {
    const { title, price, thumbnail, quantidade } = this.props.product;

    return (
      <div className="card-carrinho">
        <p data-testid="shopping-cart-product-name">{title}</p>
        <p data-testid="shopping-cart-product-quantity">{quantidade}</p>
        <img src={thumbnail} alt="Product" />
        <p>R${price}</p>
      </div>
    );
  }
}

export default ProductCardCart;
