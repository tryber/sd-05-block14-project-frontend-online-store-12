import React from 'react';
import * as api from '../services/api';

class CategoriesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    api.getCategories().then((response) => this.setState({ categories: response }));
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        {categories.map((categorie) => {
          return (
            <label data-testid="category">
              {categorie.name}
              <input type="radio" id={categorie.id} name="produto"/>
            </label>
          );
        })}
      </div>
    );
  }
}

export default CategoriesList;
