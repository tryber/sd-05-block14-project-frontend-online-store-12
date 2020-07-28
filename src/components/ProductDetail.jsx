import React from 'react';
import * as api from '../services/api';

class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = { product: '', contador: 0 };
    this.sumContador = this.sumContador.bind(this);
    this.substrairContador = this.substrairContador.bind(this);
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

  sumContador() {
    this.setState({ contador: (this.state.contador + 1) });
  }

  substrairContador() {
    if (this.state.contador === 0) return this.setState({ contador: 0 });
    this.setState({ contador: (this.state.contador - 1) });
  }

  render() {
    const { title, price, condition, thumbnail } = this.state.product;
    return (
      <div>
        <h1 data-testid="produt-detail-name">{title}</h1>
        <img src={thumbnail} alt="Product" />
        <p>Valor: R${price}</p>
        <p>Condição: {condition}</p>
        <div>
          <h2>Quantidade</h2>
          <div>
            <button onClick={this.substrairContador}>-</button>
            <span>{this.state.contador}</span>
            <button onClick={this.sumContador}>+</button>
            <button type="button">Adicionar ao carrinho</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDetail;
