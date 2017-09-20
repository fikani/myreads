import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import Navbar from '../navbar/Navbar';
import ShelfSelector from '../shelf/ShelfSelector';
import BookList from '../book/BookList';
import { getAll } from '../BooksAPI';
import { WANT_READ, READ, READING } from '../shelf/ShelfUtils';


class Home extends Component {

  state = {
    showingShelf: READING, //0 = C.Reading 1=W.Read 2=Read
    wantToRead: [],
    read: [],
    reading: []
  }

  componentDidMount(){
    this.updateBooks();
  }

  updateBooks = () => {
    getAll().then((books) => {
      const state = {};
      state[READING] = [];
      state[WANT_READ] = [];
      state[READ] = [];
      state.shelvesNames = {};
      books.forEach((book) => {
        if (book.shelf) state[book.shelf].push(book);
      });
      this.setState(state);
      return;
    });
  }

  onSelectShelf = (index) => {
      this.setState({
        showingShelf: index
      }, this.updateBooks);
  };

  onSearch = (query) => {
    this.props.history.push('/search?q='+query, {query: query});
  };

  render() {
    const { showingShelf } = this.state;
    return (
      <div className="row">
        <div className="col-12 col-sm-12 col-md-3 col-lg-2 myreads-navbar-container">
          <Navbar onSearch={this.onSearch.bind(this)}/>
        </div>
        <div className="col-12 col-sm-12 col-md-9 col-lg-10">
          <ShelfSelector
            shelves={[
              {key: READING, value: "Currently Reading"},
              {key: WANT_READ, value: "Want To Read"},
              {key: READ, value: "Read"},
            ]}
            activeShelf={showingShelf}
            onSelectShelf={this.onSelectShelf}/>
          <BookList books={this.state[showingShelf] || []}/>
        </div>
      </div>
    );
  }
}

export default withRouter(Home);
