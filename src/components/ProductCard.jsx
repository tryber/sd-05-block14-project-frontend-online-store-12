import React from 'react';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
  constructor(props) {
    super(props);
    this.addToCart = this.addToCart.bind(this);
  }

  addToCart() {
    let carrinhoCompras = JSON.parse(localStorage.getItem('carrinhoCompras'));
    const { title, price, condition, thumbnail, id } = this.props.product;
    const categoryId = this.props.product.category_id;
    const qtdEstoque = this.props.product.available_quantity;
    function carrinhopush() {
      carrinhoCompras.push({
        title,
        price,
        condition,
        thumbnail,
        id,
        categoryId,
        qtdEstoque,
      });
      localStorage.setItem('carrinhoCompras', JSON.stringify(carrinhoCompras));
    }

    if (carrinhoCompras !== null) {
      carrinhopush();
    } else {
      carrinhoCompras = [];
      carrinhopush();
    }
  }

  render() {
    const { title, price, thumbnail, id } = this.props.product;
    const categoryId = this.props.product.category_id;
    return (
      <div>
        <p data-testid="product">{title}</p>
        <img data-testid="product" src={thumbnail} alt="Product" />
        <p data-testid="product">R${price}</p>
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
