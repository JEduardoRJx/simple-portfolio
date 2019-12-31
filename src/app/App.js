import React, { Component } from 'react';
import './App.scss';
import { Mainbackgrnd } from '../components/mainbackgrnd/MainBackGrnd';
import { Name } from '../components/name/Name';
import { MtnCover } from '../components/mtncover/MtnCover';
import { AboutMe } from '../components/aboutme/AboutMe';

class App extends Component {

  render() {
    return (
      <main>
        <Name />
        <Mainbackgrnd />
        <MtnCover />
        <AboutMe />
      </main>
    )
  }
}

export default App;