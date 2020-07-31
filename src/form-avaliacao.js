import React, { Component } from 'react';
import ReactStars from 'react-rating-stars-component';

class Evaluation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailText: '',
      textArea: '',
      rating: 0,
    };
  }

  render() {
    const { emailText, textArea, rating } = this.state;
    return (
      <div>
        <form>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              data-testid="product-detail-evaluation"
              defaultValue={emailText}
              placeholder="Email"
            />
            <ReactStars count={5} size={30} color={'#ffd700'} defaultValue={rating} />
          </div>
          <label htmlFor="avaliacao">Avaliação</label>
          <textarea defaultValue={textArea} type="text" placeholder="Mensagem(opcional)" />
          <button>Avaliar</button>
        </form>
      </div>
    );
  }
}

export default Evaluation;
