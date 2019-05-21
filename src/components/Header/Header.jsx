import React, { Component } from 'react';
import logo from './logo.svg';

class Header extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3 float-left">{this.props.data.lastName}</div>
          <div className="col-md-3 float-right">
            {`My first name: ${this.props.data.firstName}`}
          </div>
        </div>
        <div className="row">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </div>
      </div>
    );
  }
}

export default Header;
