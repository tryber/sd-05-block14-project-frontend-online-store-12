import React from 'react';
import CartItemCard from './CartItemCard';

class ShopCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cartItems: [] };
    this.getItemsFromStorage = this.getItemsFromStorage.bind(this);
  }

  componentDidMount() {
    this.getItemsFromStorage();
  }

  getItemsFromStorage() {
    const values = JSON.parse(localStorage.getItem('carrinhoCompras'));
    this.setState({ cartItems: values });
  }

  render() {
    if (this.state.cartItems.length === 0) {
      return <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>;
    }
    return (
      <div>
        {this.state.cartItems.map((item) => <CartItemCard item={item} key={item.id} />)};
      </div>
    );
  }
}

export default ShopCart;
