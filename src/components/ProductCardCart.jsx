import React from 'react';
import './ProductCardCart.css';

class ProductCardCart extends React.Component {
  render() {
    const { title, price, thumbnail, quantidade } = this.props.product;

    return (
      <div className="card-carrinho">
        <p>Quantidade no carrinho: {quantidade}</p>
        <p>{title}</p>
        <img src={thumbnail} alt="Product" />
        <p>R${price * quantidade}</p>
      </div>
    );
  }
}

export default ProductCardCart;
