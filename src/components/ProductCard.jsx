import React from 'react';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
  render() {
    const { product } = this.props;
    const { title, price, thumbnail, id , category_id } = product;
    return (
      <div>
        <p data-testid="product">{title}</p>
        <img data-testid="product" src={thumbnail} alt="Product" />
        <p data-testid="product">R${price}</p>
        <Link to={`products/${category_id}/${id}`} data-testid="product-detail-link">Detalhes</Link>
      </div>
    );
  }
}

export default ProductCard;
