import React from 'react';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
  render() {
    const { title, price, thumbnail, id } = this.props.product;
    const categoryId = this.props.product.category_id;
    return (
      <div>
        <p data-testid="product">{title}</p>
        <img data-testid="product" src={thumbnail} alt="Product" />
        <p data-testid="product">R${price}</p>
        <Link to={`products/${categoryId}/${id}`} data-testid="product-detail-link">Detalhes</Link>
      </div>
    );
  }
}

export default ProductCard;
