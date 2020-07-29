import React from 'react';

class SearchBar extends React.Component {
  render() {
    const { searchText, searchProduct, onSearchTextChange } = this.props;
    return (
      <div>
        <input
          className="search-input"
          type="text"
          placeholder=""
          data-testid="query-input"
          onChange={onSearchTextChange}
          value={searchText}
        />
        <button type="button" data-testid="query-button" onClick={searchProduct}>
            Buscar
        </button>
      </div>
    );
  }
}

export default SearchBar;
