import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import Navbar from '../navbar/Navbar';
import BookList from '../book/BookList';
import Loader from '../loader/Loader';
import { search, update } from '../BooksAPI';
import { NavigateTo } from '../Utils';

class Search extends Component {

  state = {
    books: [],
    query: '',
    selectedBook: null,
    isSearching: false
  };

  componentDidMount() {
    const q = this.getQuery();
    if (q === null) return;
    this.onSearch(q);
  }

  getQuery = () => {
    var results = new RegExp("[?&]q(=([^&#]*)|&|#|$)")
      .exec(this.props.location.search);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  };

  onSearch = (query) => {
    this.setState({
      query:query,
      isSearching: true
    });
    search(query).then((books) => {
      const newURL = '/search?q=' + query;
      window.history.pushState({urlPath: newURL},'',newURL);
      this.setState({
        books: books,
        isSearching: false
      });
    });
  };

  onChangeBookShelf = async (book, shelf) => {
    await update(book, shelf);
    this.setState({selectedBook: null});
  };

  render() {
    const { isSearching, query, selectedBook } = this.state;
    const history = this.props.history;
    return (
      <div className="row">
        <div className="col-12 col-sm-12 col-md-3 col-lg-2">
          <Navbar
            onSearch={this.onSearch}
            onChange={(value) => this.setState({query: value})}
            query={query}/>
        </div>
        <div className="col-12 col-sm-12 col-md-9 col-lg-10">
          <Loader hidden={!isSearching} />
          <BookList
            books={this.state.books}
            selectedBook={selectedBook}
            onClickBook={(book) => NavigateTo(history, 'book', { book })}
            isLoadingBooks={isSearching}
            onChangeBookShelf={this.onChangeBookShelf}
            onClickBookOptions={(book) => this.setState({selectedBook: book})}
            onClickCloseBookOptions={(book) => this.setState({selectedBook: null})}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(Search);
