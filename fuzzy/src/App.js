import React, { Component } from 'react';
import './App.css';
import FuzzyClock from './FuzzyClock';
import digiFont from './fonts/DS-DIGIB.TTF'

class App extends Component {
  render() {
    return (
      <div className="App">
        <FuzzyClock />
      </div>
    );
  }
}

export default App;
