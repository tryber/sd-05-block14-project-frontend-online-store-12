import React from 'react';

class ShopCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItens: [],
      items: 0,
    };
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

  render() {
    const { cartItems } = this.props;
    if (this.props.items === 0) {
      return <div data-testid="shopping-cart-empty-message">Seu carrinho está vazio</div>;
    }
    return (
      <div>
        {cartItems.map((product) => (
          <div data-testid="shopping-cart-product-name" key={product.id}>
            <p>{product.id}</p>
            <p>{product.selectedProduct.title}</p>
            <img src={product.selectedProduct.thumbnail} alt={product.title} />
            <div>
              <button
                type="button"
                data-testid="product-increase-quantity"
                onClick={() => this.addToCart(product)}
              >
                +
              </button>
              <p>{product.quantity}</p>
              <p data-testid="shopping-cart-product-quantity">{product.quantity}</p>
              <button
                type="button"
                data-testid="product-decrease-quantity"
                onClick={() => this.removeProduct(product)}
              >
                -
              </button>
            </div>
          </div>
        ))}
        ;
      </div>
    );
  }
}

export default ShopCart;
