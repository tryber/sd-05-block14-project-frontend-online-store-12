import React from 'react';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
  constructor(props) {
    super(props);
    this.addToCart = this.addToCart.bind(this);
  }

  addToCart() {
    const { product } = this.props;

    let carrinhoCompras = JSON.parse(localStorage.getItem('carrinhoCompras'));

    if (carrinhoCompras !== null) {
      carrinhoCompras.push(product);
      localStorage.setItem('carrinhoCompras', JSON.stringify(carrinhoCompras));
    } else {
      carrinhoCompras = [];
      carrinhoCompras.push(product);
      localStorage.setItem('carrinhoCompras', JSON.stringify(carrinhoCompras));
    }
  }

  render() {
    const { title, price, thumbnail, id } = this.props.product;
    const categoryId = this.props.product.category_id;
    const qtdEstoque = this.props.product.available_quantity;
    return (
      <div>
        <p data-testid="product">{title}</p>
        <img src={thumbnail} alt="Product" />
        <p>R${price}</p>
        <p>Estoque disponível: {qtdEstoque}</p>
        <Link to={`products/${categoryId}/${id}`} data-testid="product-detail-link">Detalhes</Link>
        <button
          type="button"
          onClick={this.addToCart}
          data-testid="product-add-to-cart"
        >
          Adicionar ao carriho
        </button>
      </div>
    );
  }
}

export default ProductCard;
