import React, { Component } from 'react';
import BookListItem from './BookListItem';
import './BookList.css';

class BookList extends Component {
  render() {
    const { books, onClickBook, isLoadingBooks } = this.props;
    return (
      <div className="">
        <div className="row myreads-bl">
          {!isLoadingBooks && books && books.map( (book) => (
            <BookListItem
              key={book.id}
              book={book}
              onClickBook={onClickBook}/>
          ))}
          {isLoadingBooks && books.length <= 0 &&
            <div className="col-12 col-sm-12 text-center">
              <span>no books</span>
            </div>
          }
        </div>
      </div>
    );
  }
}

export default BookList;
