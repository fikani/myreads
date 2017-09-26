import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ShelfSelector from '../shelf/ShelfSelector';
import { WANT_READ, READ, READING } from '../shelf/ShelfUtils';
import './BookList.css';

class BookListItemInfo extends Component {

  static propTypes = {
    book: PropTypes.object.isRequired,
    onChangeShelf: PropTypes.func.isRequired,
    onClickCloseBookOptions: PropTypes.func.isRequired,
    showRemoveButton: PropTypes.bool
  };

  onClickCloseOrRemove = (book, shelf) => {
    if (shelf === 'close') {
        this.props.onClickCloseBookOptions(book);
    } else if (shelf === 'remove') {
        this.props.onChangeShelf(book, null);
    }
  };

  render() {
    const { book, onChangeShelf, showRemoveButton } = this.props;
    const options = [
      {key: 'close', value: "Close"}
    ];
    if (showRemoveButton) {
      options.push({key: 'remove', value: "Remove"});
    }
    return (
      <div className="myreads-bl-item text-center">
         <div className="myreads-bl-img-box">
           <ShelfSelector
             shelves={[
               {key: READING, value: "Currently Reading"},
               {key: WANT_READ, value: "Want To Read"},
               {key: READ, value: "Read"}
             ]}
             vertical={true}
             activeShelf={book.shelf}
             onSelectShelf={(shelf) => onChangeShelf(book, shelf) }
           />
           <ShelfSelector
             shelves={options}
             onSelectShelf={(shelf) => this.onClickCloseOrRemove(book, shelf) }
           />
         </div>
      </div>
    );
  }
}

export default BookListItemInfo;
