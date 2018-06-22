import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Data from './filter/Data';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Data />
       </div>
    );
  }
}

export default App;
