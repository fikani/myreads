import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import '../book/BookDetails.css';
import Navbar from '../navbar/Navbar';

export class BookDetails extends Component {


  onSearch = (query) => {
    this.props.history.push('/search?q='+query, {query: query});
  };

  render() {
    return (
      <div className="row">
        <div className="col-12 col-sm-12 col-md-3 col-lg-2 myreads-navbar-container">
          <Navbar onSearch={this.onSearch.bind(this)}/>
        </div>
      </div>
    );
  }
}


export default withRouter(BookDetails);
