import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { NavigateTo } from '../Utils';
import '../book/BookDetails.css';
import Navbar from '../navbar/Navbar';
import ShelfSelector from '../shelf/ShelfSelector';
import { WANT_READ, READ, READING } from '../shelf/ShelfUtils';
import { get, update } from '../BooksAPI';

export class BookDetails extends Component {

  state = {
    query: '',
    book: null
  };

  async componentDidMount() {
    const bookId = this.props.match.params.id;
    const book = await get(bookId);
    this.setState({ book });
  }

  onSelectShelf = async (shelf) => {
    const book = await update(this.state.book, shelf);
    this.setState({ book });
  };

  render() {
    const { query, book } = this.state;
    const history = this.props.history;
    if (book) book.shelf = book.shelf || null;
    return (
      <div className="row">
        <div className="col-12 col-sm-12 col-md-3 col-lg-2">
          <div className="myreads-navbar-container">
            <Navbar
              onSearch={(query) => NavigateTo(history, 'search', { query })}
              onChange={(value) => this.setState({ query: value })}
              query={query}
            />
          </div>
        </div>
        {book &&
          <div className="col-12 col-sm-12 col-md-9 col-lg-10" style={{ padding: '15px 0 0 0' }}>
            <div className="row justify-content-center">
              <div className="col-12 col-sm-10 col-md-8">
                <div className="row justify-content-center">
                  <div className="col-6 col-sm-6">
                    <img className="pull-right" style={{ width: '60%' }}
                      alt={book.volumeInfo.title}
                      src={book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail}
                    />
                  </div>
                  <div className="col-6 col-sm-6">
                    <h4>{book.volumeInfo.title}</h4>
                    <p><strong>Author(s):</strong> {book.volumeInfo.authors
                      && book.volumeInfo.authors.map((v, i, arr) => v + (i + 1 === arr.length ? '.' : ', '))}</p>
                    <p><strong>Publisher:</strong> {book.volumeInfo.publisher} {book.volumeInfo.publishedDate}.</p>
                    {book.volumeInfo.pageCount && <p><strong>Pages:</strong> {book.volumeInfo.pageCount}</p>}
                    <p><strong>Preview:</strong> <a href={book.accessInfo.webReaderLink}>link</a></p>

                  </div>
                  <ShelfSelector
                    shelves={[
                      { key: READING, value: "Currently Reading" },
                      { key: WANT_READ, value: "Want To Read" },
                      { key: READ, value: "Read" },
                      { key: null, value: "None" }
                    ]}
                    activeShelf={book.shelf}
                    onSelectShelf={shelf => this.onSelectShelf(shelf)}
                  />
                  <p>{book.volumeInfo.description}</p>
                </div>
              </div>
            </div>
          </div>
        }
      </div>
    );
  }
}


export default withRouter(BookDetails);
