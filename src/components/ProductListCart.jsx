import React from 'react';
import ProductCardCart from './ProductCardCart';

class ProductListCart extends React.Component {
  render() {
    const { products } = this.props;
    return (
      <div>
        {products.map((product) => <ProductCardCart key={product.id} product={product} />)}
      </div>
    );
  }
}

export default ProductListCart;
