import React, { Component } from 'react';
import Navbar from '../navbar/Navbar';
import LastViewedBook from '../lastviewedbook/LastViewedBook';
import BookList from '../booklist/BookList';
import { getCurrentlyReading, getWannaRead, getRead } from '../services/BooksAPI';

class Home extends Component {

  state = {
    tags: ["Currently Reading", "Want To Read", "Read"],
    showingTag: 0, //0 = C.Reading 1=W.Read 2=Read
    books: []
  }

  componentDidMount(){
    this.updateBooks();
  }

  updateBooks = () => {
    this.getBooks().then((books) => {
      this.setState({
        books: books
      })
    });
  }

  getBooks = () => {
    switch (this.state.showingTag) {
      case 0:
        return getCurrentlyReading();
        break;
      case 1:
        return getWannaRead();
        break;
      case 2:
        return getRead();
        break;
      default:
        return getCurrentlyReading();
    }
  };

  onSelectShelf = (index) => {
      this.setState({
        showingTag: index
      }, this.updateBooks);
  };

  render() {

    return (
      <div className="row">
        <Navbar onSearch={this.props.onSearch}/>
        <LastViewedBook/>
        <BookList
          tags={this.state.tags}
          activeTag={this.state.tags[this.state.showingTag]}
          books={this.state.books}
          onSelectShelf={this.onSelectShelf} />
      </div>
    );
  }
}

export default Home;
