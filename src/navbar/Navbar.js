import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../logo.svg';

class Navbar extends Component {

  state = {
    lastQuery: '',
    showingMobileMenu: false
  }

  containerEl = null;
  toggleMenu = () => {
    this.setState({
      showingMobileMenu: !this.state.showingMobileMenu
    })
  };

  lastTimeout = null;
  onSearch = (event, fn) => {
    if (this.lastTimeout) clearTimeout(this.lastTimeout);
    const query = event.target.value.trim();
    this.lastTimeout = setTimeout(() => {
      if (!query) return;
      if (query === this.state.lastQuery) return;
      this.setState({lastQuery: query});
      fn(query);
    }, 600);
  };

  render() {
    const { onSearch, query, onChange } = this.props;
    const { showingMobileMenu } = this.state;
    return (
      <div className={ showingMobileMenu ? 'myreads-navbar-mobile' : '' } >
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
