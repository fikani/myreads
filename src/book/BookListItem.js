import React, { Component } from 'react';
import './BookList.css';

class BookListItem extends Component {
  render() {
    const { book, onClickBook } = this.props;
    return (
      <div
        onClick={()=>onClickBook(book)}
        className="myreads-bl-item text-center">
        <div className="myreads-bl-img-box">
          {(book.volumeInfo.imageLinks?
            <img
              alt={book.volumeInfo.title}
              className="myreads-bl-item-img img-thumbnail"
              src={book.volumeInfo.imageLinks.thumbnail} />
            :
            <div className="myreads-bl-item-img img-thumbnail">
              {book.volumeInfo.title}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default BookListItem;
