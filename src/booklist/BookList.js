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
    const { title, listType } = this.props;

    return (
      <div className="col-12 col-sm-12">
        <div className="row myreads-bl">
          <div className="col-12 col-sm-12 myreads-bl-header">
            <span className="myreads-bl-title">{title}:</span>
          </div>
          <div className="col-4 col-sm-4 myreads-bl-item text-center">
            <img className="myreads-bl-item-img img-thumbnail" src="http://books.google.com/books/content?id=5kxm7HB96xsC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" />
          </div>
          <div className="col-4 col-sm-4 myreads-bl-item text-center">
            <img className="myreads-bl-item-img img-thumbnail" src="http://books.google.com/books/content?id=lT9BdnXnNHgC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" />
          </div>
          <div className="col-4 col-sm-4 myreads-bl-item text-center">
            <img className="myreads-bl-item-img img-thumbnail" src="http://books.google.com/books/content?id=HOdKAQAAIAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api" />
          </div>
        </div>
      </div>
    );
  }
}

export default BookList;
