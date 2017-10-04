import React from 'react';
import PropTypes from 'prop-types';
import BookListItem from './BookListItem';
import BookListItemInfo from './BookListItemInfo';
import './BookList.css';

const BookList = (props) => {
  const {
    books,
    isLoadingBooks,
    onClickBook,
    onChangeBookShelf,
    onClickBookOptions,
    onClickCloseBookOptions,
    selectedBook } = props;
  return (
    <div className="">
      <div className="row myreads-bl">
        {!isLoadingBooks && books && books.map((book) =>
          (book === selectedBook ?
            <BookListItemInfo
              key={book.id}
              book={book}
              showRemoveButton={book.shelf != undefined}
              onChangeShelf={onChangeBookShelf}
              onClickCloseBookOptions={onClickCloseBookOptions}
            />
            : //else
            <BookListItem
              key={book.id}
              book={book}
              onClickBook={onClickBook}
              onClickBookOptions={onClickBookOptions}
            />
          )

        )}
        {!isLoadingBooks && books.length <= 0 &&
          <div className="col-12 col-sm-12 text-center">
            <span>empty</span>
          </div>
        }
      </div>
    </div>
  );
}

BookList.propTypes = {
  books: PropTypes.array.isRequired,
  selectedBook: PropTypes.object,
  onClickBook: PropTypes.func.isRequired,
  isLoadingBooks: PropTypes.bool.isRequired,
  onChangeBookShelf: PropTypes.func.isRequired,
  onClickBookOptions: PropTypes.func.isRequired,
  onClickCloseBookOptions: PropTypes.func.isRequired
};

export default BookList;
