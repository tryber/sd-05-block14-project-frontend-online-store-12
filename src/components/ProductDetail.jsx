import React from 'react';

class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = { product: '' };
    this.id = this.props.match.params.id;
  }

  componentDidMount() {
    fetch(`https://www.mercadolibre.com.ar/p/${this.id}`)
   .then((response) => response.json())
   .then((item) => this.setState({ product: item }));
  }

  render() {
    const { title, price, condition, thumbnail } = this.state.product;
    return (
      <div>
        <h1 data-testid="produt-detail-name">{title}</h1>
        <img src={thumbnail} alt="Product" />
        <p>Preço: R${price},00</p>
        <p>Condição: {condition}</p>
        <button type="button">Adicionar ao carrinho</button>
      </div>
    );
  }
}
export default ProductDetail;
