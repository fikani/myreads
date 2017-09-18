import React, { Component } from 'react';
import Navbar from '../navbar/Navbar';
import LastViewedBook from '../lastviewedbook/LastViewedBook';
import BookList from '../booklist/BookList';
import { search, setShelfRead } from '../services/BooksAPI';

class Search extends Component {

  state = {
    books: [],
    query: ""
  };

  componentDidMount() {
    const query = this.getParameterByName('q');
    this.onSearch(query);
  }

  getParameterByName = (name, url) => {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  };

  lastTimeout = null;
  onSearch = (query) => {
    if (this.lastTimeout) {
      clearTimeout(this.lastTimeout);
    }

    this.lastTimeout = setTimeout(() => {
      this.doSearch(query).then((books) => {
        if (books){
          const newURL = '/search?q=' + query;
          window.history.pushState({urlPath: newURL},'',newURL);
        } else {

        }
      });
    }, 1000);
  };

  doSearch = (query) => {
    return search(query).then((books) => {
      this.setState({
        query: query,
        books: books
      });
      return books;
    });
  };

  onClickBook = (book) => {
    setShelfRead(book);
  };

  render() {
    return (
      <div className="row">
        <Navbar onSearch={ (query) => {
            this.onSearch(query);
          }}
          query={this.state.query}/>
        <BookList
          categories={[]}
          books={this.state.books}
          onClickBook={this.onClickBook}/>
      </div>
    );
  }
}

export default Search;
