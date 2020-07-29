import React from 'react';
import * as api from '../services/api';
import Evaluation from '../form-avaliacao';

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
      <div>
        <h1 data-testid="produt-detail-name">{title}</h1>
        <img src={thumbnail} alt="Product" />
        <p>Valor: R${price}</p>
        <p>Condição: {condition}</p>
        <button type="button">Adicionar ao carrinho</button>
      </div>
      <section>
        <Evaluation />
      </section>
      </div>
    );
  }
}

export default ProductDetail;
