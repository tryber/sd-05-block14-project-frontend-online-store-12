import React, { Component } from 'react';

class Lista extends Component {
  render() {
    return (
      <div className="lista-produtos">
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <input type="text" placeholder="" />
      </div>
    );
  }
}

export default Lista;
