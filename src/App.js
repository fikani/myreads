import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './ubuntu.css';
import './App.css';
import Home from './pages/Home';
import Search from './pages/Search';
import BookDetails from './pages/BookDetails';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Route exact path="/" render={ () => (
            <Home/>
          )}/>
          <Route path="/search" render={ () => (
            <Search/>
          )}/>
        <Route path="/book/:id" render={ () => (
            <BookDetails/>
          )}/>
      </div>
    );
  }
}

export default App;
