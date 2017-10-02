import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ShelfSelector.css';

class ShelfSelector extends Component {

  static propTypes = {
    shelves: PropTypes.array.isRequired,
    activeShelf: PropTypes.string,
    onSelectShelf: PropTypes.func.isRequired,
    hidden: PropTypes.bool,
    vertical: PropTypes.bool
  };


  render() {
    const { shelves, activeShelf, onSelectShelf, hidden, vertical} = this.props;
    if (hidden) return (null);
    return (
        <div className="myreads-shelf text-center">
          <div
            className={"btn-group" + (vertical ? '-vertical' :'')}
            data-toggle="buttons">
            {shelves.map( (shelf, index) => (
              <div key={shelf.key} className={"myreads-shelf-item btn btn-outline-danger" +
                (shelf.key === activeShelf? " active": "")}
                onClick={()=>onSelectShelf(shelf.key)}>
                <input type="radio" name="options" autoComplete="off"/>{shelf.value}
              </div>
            ))}
          </div>
        </div>
    );
  }
}

export default ShelfSelector;
