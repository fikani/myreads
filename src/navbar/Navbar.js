import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Navbar.css';
import logo from '../logo.svg';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { showingMobileMenu: false};
    this.lastQuery = '';
    this.lastTimeout = null;
  }

  static propTypes = {
    onSearch: PropTypes.func,
    query: PropTypes.string.isRequired,
    onChange: PropTypes.func
  };

  toggleMenu = () => {
    this.setState({
      showingMobileMenu: !this.state.showingMobileMenu
    })
  };

  onSearch = (event, fn) => {
    if (this.lastTimeout) clearTimeout(this.lastTimeout);
    const query = event.target.value.trim();
    this.lastTimeout = setTimeout(() => {
      if (!query) return;
      if (query === this.lastQuery) return;
      this.lastQuery = query;
      if (fn) fn(query);
    }, 600);
  };

  render() {
    const { onSearch, query, onChange } = this.props;
    const { showingMobileMenu } = this.state;
    return (
      <div className={ 'myreads-navbar-container' + (showingMobileMenu ? ' myreads-navbar-mobile' : '') } >
        <div className="row myreads-navbar">
          <div className="col-4 col-sm-4 col-md-12">
            <img src={logo} alt="Logo" style={{
                maxWidth: "80%"
              }}/>
          </div>
          <div className="col-6 col-sm-6 col-md-12 myreads-navbar-search">
            <div className="d-none d-md-block myreads-navbar-search-padding"></div>
              <input
                type="search"
                className="form-control"
                value={query}
                placeholder="Search"
                onChange={(e) => onChange && onChange(e.target.value)}
                onKeyUp={(e) => this.onSearch(e, onSearch)}/>
          </div>
          <div className="col-2 col-sm-2 d-md-none text-center" onClick={this.toggleMenu.bind(this)}>
            <i className="myreads-navbar-button fa fa-bars" aria-hidden="true"></i>
          </div>
        </div>
        <div className="row d-none d-md-block myreads-navbar-items">
          <div className="col-12 col-sm-12 col-md-12 text-center myreads-navbar-item">
            <Link to="/">
              Home
            </Link>
          </div>
          <div className="col-12 col-sm-12 col-md-12 text-center myreads-navbar-item">
            <Link to="/search">
              Search
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
