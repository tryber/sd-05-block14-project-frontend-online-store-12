import React from 'react';

class CategoriesList extends React.Component {
  render() {
    const { categorie: { name, id } } = this.props;
    return (
      <label key={name} data-testid="category" htmlFor={id} className="produto">
        {name}
        <input type="radio" id={id} name="produto" />
      </label>
    );
  }

export default CategoriesList;
