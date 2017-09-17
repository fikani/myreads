import React, { Component } from 'react';
import Navbar from '../navbar/Navbar';
import LastViewedBook from '../lastviewedbook/LastViewedBook';
import BookList from '../booklist/BookList';

class Home extends Component {

  render() {
    return (
      <div className="row">
        <Navbar/>
        <LastViewedBook/>
        <BookList title="Currently Reading" listType="reading" />
        <BookList title="Want To Read" listType="want"/>
        <BookList title="Read" listType="read"/>
      </div>
    );
  }
}

export default Home;
