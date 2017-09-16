import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './ubuntu.css';
import './App.css';
import Home from './home/Home';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Route exact path="/" render={ () => (
            <Home/>
          )}/>
      </div>
    );
  }
}

export default App;
