import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginRegister from './js/components/LoginRegister';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div id="current-user"></div>
        <LoginRegister />
      </div>

    );
  }
}

export default App;
