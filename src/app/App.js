import React, { Component } from 'react';
import './App.scss';
import { Mainbackgrnd } from '../components/mainbackgrnd/MainBackGrnd';
import { Name } from '../components/name/Name';
import { MtnCover } from '../components/mtncover/MtnCover';

class App extends Component {

  render() {
    return (
      <main>
        <Name />
        <Mainbackgrnd />
        <MtnCover />
      </main>
    )
  }
}

export default App;