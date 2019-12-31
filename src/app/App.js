import React, { Component } from 'react';
import './App.scss';
import { Mainbackgrnd } from '../components/mainbackgrnd/MainBackGrnd';
import { Name } from '../components/name/Name';

class App extends Component {

  render() {
    return (
      <main>
        <Name />
        <Mainbackgrnd />
      </main>
    )
  }
}

export default App;