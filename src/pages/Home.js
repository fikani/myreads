import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import Navbar from '../navbar/Navbar';
import ShelfSelector from '../shelf/ShelfSelector';
import BookList from '../book/BookList';
import { getAll, update } from '../BooksAPI';
import { NavigateTo } from '../Utils';
import { WANT_READ, READ, READING } from '../shelf/ShelfUtils';


class Home extends Component {

  state = {
    showingShelf: READING,
    wantToRead: [],
    read: [],
    reading: [],
    query: '',
    selectedBook: null
  }

  componentDidMount(){

    this.updateBooks();
  }

  updateBooks = async () => {
    const books = await getAll();
    const state = {};
    state[READING] = [];
    state[WANT_READ] = [];
    state[READ] = [];
    state.shelvesNames = {};
    books.forEach((book) => {
      if (book.shelf) state[book.shelf].push(book);
    });
    this.setState(state);
  }

  onSelectShelf = (index) => {
      this.setState({
        showingShelf: index
      }, this.updateBooks);
  };

  onChangeBookShelf = async (book, shelf) => {
    await update(book, shelf);
    this.updateBooks();
  }

  onClickBookOptions = (book) => {
    if (book === this.state.selectedBook) {
      this.setState({selectedBook: null});
    } else {
      this.setState({selectedBook: book});
    }
  };

  render() {
    const { showingShelf, query, selectedBook } = this.state;
    const history = this.props.history;
    return (
      <div className="row">
        <div className="col-12 col-sm-12 col-md-3 col-lg-2">
          <Navbar
            query={query}
            onChange={(value) => this.setState({query: value})}
            onSearch={(query) => NavigateTo(history, 'search', { query }) }
          />
        </div>
        <div className="col-12 col-sm-12 col-md-9 col-lg-10">
          <ShelfSelector
            shelves={[
              {key: READING, value: "Currently Reading"},
              {key: WANT_READ, value: "Want To Read"},
              {key: READ, value: "Read"},
            ]}
            activeShelf={showingShelf}
            onSelectShelf={this.onSelectShelf}
          />
          <BookList
            books={this.state[showingShelf] || []}
            selectedBook={selectedBook}
            isLoadingBooks={false}
            onChangeBookShelf={this.onChangeBookShelf}
            onClickBook={(book) => NavigateTo(history, 'book', { book })}
            onClickBookOptions={(book) => this.setState({selectedBook: book})}
            onClickCloseBookOptions={(book) => this.setState({selectedBook: null})}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(Home);
