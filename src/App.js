import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './ubuntu.css';
import './App.css';
import Home from './home/Home';
import Search from './search/Search';

class App extends Component {

  onSearch = (text) => {
    if (window.location.pathname === '/search'){

    } else {
      window.location = '/search?q=' + text
    }
  };

  render() {
    return (
      <div className="container-fluid">
        <Route exact path="/" render={ () => (
            <Home onSearch={this.onSearch}/>
          )}/>
          <Route path="/search" render={ () => (
            <Search/>
          )}/>
      </div>
    );
  }
}

export default App;
