import React from 'react';
import * as api from '../services/api';

class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = { product: '' };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    const itemId = this.props.location.pathname.split('/');
    api.getProductsFromCategoryAndQuery(id, '')
      .then((response) => response.results.map((result) => {
        if (result.id === itemId[itemId.length - 1]) return this.setState({ product: result });
        return '';
      }));
  }

  render() {
    const { title, price, condition, thumbnail } = this.state.product;
    return (
      <div>
        <h1 data-testid="produt-detail-name">{title} - R${price}</h1>
        <img src={thumbnail} alt="Product" />
        <p>Condição: {condition}</p>
        <button type="button">Adicionar ao carrinho</button>
      </div>
    );
  }
}

export default ProductDetail;
