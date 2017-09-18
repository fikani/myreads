import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../logo.svg';

class Navbar extends Component {
  render() {
    const { onSearch, query } = this.props;

    return (
      <div className="col-12 col-sm-12 col-md-4 col-lg-2">
        <div className="row myreads-navbar">
          <div className="col-4 col-sm-4 col-md-12">
            <img src={logo} alt="Logo" style={{
                maxWidth: "80%"
              }}/>
          </div>
          <div className="col-6 col-sm-6 col-md-12 myreads-navbar-search">
            <div className="d-none d-md-block myreads-navbar-search-padding"></div>
            <input type="search"
              className="form-control"
              placeholder="Search" onChange={(e) => onSearch(e.target.value)}/>
          </div>
          <div className="col-2 col-sm-2 d-md-none text-center">
            <i className="myreads-navbar-button fa fa-bars" aria-hidden="true"></i>
          </div>
        </div>
        <div className="row d-none d-md-block myreads-navbar-items">
          <div className="col-4 col-sm-4 col-md-12 text-center myreads-navbar-item">
            <Link to="/">
              Home
            </Link>
          </div>
          <div className="col-4 col-sm-4 col-md-12 text-center myreads-navbar-item">
            <Link to="/favorites">
              Favoritos
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
