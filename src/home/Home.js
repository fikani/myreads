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
        <BookList title="currently reading" listType="reading" />
        <BookList title="want to read" listType="want"/>
        <BookList title="read" listType="read"/>
      </div>
    );
  }
}

export default Home;
