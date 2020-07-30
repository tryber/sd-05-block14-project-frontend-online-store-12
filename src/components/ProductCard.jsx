import React from 'react';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
  render() {
    const { title, price, thumbnail, id } = this.props.product;
    const categoryId = this.props.product.category_id;
    const qtdEstoque = this.props.product.available_quantity;
    return (
      <div>
        <p data-testid="product">{title}</p>
        <img data-testid="product" src={thumbnail} alt="Product" />
        <p data-testid="product">R${price}</p>
        <p>Estoque disponível: {qtdEstoque}</p>
        <Link data-testid="product-detail-link" to={`products/${categoryId}/${id}`}>Detalhes</Link>
      </div>
    );
  }
}

export default ProductCard;
