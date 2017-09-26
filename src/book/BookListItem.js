import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './BookList.css';

class BookListItem extends Component {

  static propTypes = {
    book: PropTypes.object.isRequired,
    onClickBook: PropTypes.func.isRequired,
    onClickBookOptions: PropTypes.func.isRequired
  };

  render() {
    const {
      book,
      onClickBook,
      onClickBookOptions
    } = this.props;

    return (
      <div
        className="myreads-bl-item text-center">
        <div className="myreads-bl-img-box">
          {(book.volumeInfo.imageLinks?
            <img
              onClick={()=>onClickBook(book)}
              alt={book.volumeInfo.title}
              className="myreads-bl-item-img img-thumbnail"
              src={book.volumeInfo.imageLinks.thumbnail} />
            :
            <div
              className="myreads-bl-item-img img-thumbnail"
              onClick={()=>onClickBook(book)}>
              {book.volumeInfo.title}
            </div>
          )}
          <div className="myreads-bl-item-shelves">
            <button
              onClick={(e) => onClickBookOptions(book)}
              type="button"
              className="btn btn-danger">
              +
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default BookListItem;
