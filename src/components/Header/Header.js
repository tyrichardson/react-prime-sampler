import React, { Component } from 'react';
import logo from './logo.svg'
import './Header.css';
import Output from '../Output/Output';

class Header extends Component {
  //render puts something on the DOM; it is a method of class Component
  render() {
    return (
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Ty's Prime React Sampler</h1>
        </header>
        <Output onOutputChange={this.props.onOutputChange} />
      </div>
    );
  }
}

export default Header;
