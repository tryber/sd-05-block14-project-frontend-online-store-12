import React from 'react';

class CartItemCard extends React.Component {
  render() {
    const { title, price, thumbnail, qtdEstoque } = this.props.item;
    return (
      <div>
        <p data-testid="shopping-cart-product-name">{title}</p>
        <img src={thumbnail} alt="Product" />
        <p>R${price}</p>
        <p data-testid="shopping-cart-product-quantity">quantidade: {qtdEstoque}</p>
      </div>
    );
  }
}

export default CartItemCard;
