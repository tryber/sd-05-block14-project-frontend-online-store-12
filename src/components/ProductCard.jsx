import React from 'react';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
  render() {
    const { product } = this.props;
    const { title, price, thumbnail, id } = product;
    return (
      <div>
        <p data-testid="product">{title}</p>
        <img data-testid="product" src={thumbnail} alt="Product" />
        <p data-testid="product">R${price},00</p>
        <Link to={`products/${id}`} data-testid="product-detail-link"><p>Detalhes</p></Link>
      </div>
    );
  }
}

export default ProductCard;
