import React, { Component } from 'react';
import logo from './logo.svg'
import './Header.css';
import Output from '../Output/Output';
import Grid from '@material-ui/core/Grid';

class Header extends Component {
  //render puts something on the DOM; it is a method of class Component
  render() {
    return (
      <Grid item xs={12}>
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Prime React Sampler</h1>
        </header>
        <Output onOutputChange={this.props.onOutputChange} />
      </div>
      </Grid>
    );
  }
}

export default Header;
