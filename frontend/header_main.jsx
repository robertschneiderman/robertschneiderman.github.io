import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class HeaderMain extends Component {

  renderLinks() {
    if (this.props.authenticated) {
      return (<li className="navbar-item">
        <Link className="nav-link" to="/dashboard">Dashboard</Link>        
        <Link className="nav-link" to="/calendar">Calendar</Link>        
        <Link className="nav-link" to="/new-task">New Task</Link>        
        <Link className="nav-link" to="/signout">Sign Out</Link>
      </li>);
    } else {
      return [
        <li className="navbar-item" key={1}>
          <Link className="nav-link" to="/signin">Sign In</Link>
        </li>,
        <li className="navbar-item" key={2}>
          <Link className="nav-link" to="/signup">Sign Up</Link>
        </li>
      ];
    }
  }

  render() {
    return (
      <nav className="navbar" style={this.props.style}>
        <Link to="/" className="navbar-logo">
            <img src="./images/logo_abrv.svg" alt="" className="img-logo-abrv"/>
        </Link>
        <ul className="navbar-nav">
          {this.renderLinks()}
        </ul>
      </nav>
    );
  }
}

export default (HeaderMain);