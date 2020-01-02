import React, { Component } from 'react';
import './App.scss';
import { Mainbackgrnd } from '../components/mainbackgrnd/MainBackGrnd';
import { Name } from '../components/name/Name';
import { MtnCover } from '../components/mtncover/MtnCover';
import { AboutMeBackGrnd } from '../components/aboutmebackgrnd/AboutMeBackGrnd';
import { NightSky } from '../components/nightsky/NightSky';
import { Canyon } from '../components/canyon/Canyon';
import { AboutMe } from '../components/aboutme/AboutMe';

class App extends Component {

  render() {
    return (
      <main>
        <Name />
        <Mainbackgrnd />
        <MtnCover />
        <AboutMeBackGrnd />
        <AboutMe />
        <NightSky />
        <Canyon />
      </main>
    )
  }
}

export default App;