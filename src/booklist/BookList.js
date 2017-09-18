import React, { Component } from 'react';
import './BookList.css';

class BookList extends Component {

  state = {
  };

  iconList = {
    "reading" : "https://image.flaticon.com/icons/svg/167/167755.svg",
    "want" : "https://image.flaticon.com/icons/svg/167/167756.svg",
    "read" : "https://image.flaticon.com/icons/svg/167/167708.svg"
  };

  render() {
    const { tags, books, activeTag, onSelectShelf, onClickBook} = this.props;

    return (
      <div className="col-12 col-sm-12">
        <div className="row myreads-bl">
          {tags &&
            <div className="col-12 col-sm-12 myreads-bl-header text-center">
              <div className="btn-group" data-toggle="buttons">
                {tags.map( (tag, index) => (
                  <div key={tag} className={"myreads-bl-shelf btn btn-outline-danger" +
                    (tag === activeTag? " active": "")}
                    onClick={()=>onSelectShelf(index)}>
                    <input id={"shelf" + index} type="radio" name="options" autoComplete="off"/>{tag}
                  </div>
                ))}
              </div>
            </div>
          }
          {books && books.map( (book) => (
            <div
              key={book.id}
              onClick={()=>onClickBook(book)}
              className="col-3 col-sm-3 myreads-bl-item text-center">
              {(book.volumeInfo.imageLinks?
                <img
                  alt={book.volumeInfo.title}
                  className="myreads-bl-item-img img-thumbnail"
                  src={book.volumeInfo.imageLinks.thumbnail} />
                :
                <div className="myreads-bl-item-img img-thumbnail">{book.volumeInfo.title}</div>
              )}

            </div>
          ))}
          {!books &&
            <div className="col-12 col-sm-12 text-center">
              <span>no result</span>
            </div>
          }
        </div>
      </div>
    );
  }
}

export default BookList;
