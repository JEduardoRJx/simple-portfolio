import React from 'react';
import './NightSky.scss';

export const NightSky = () => {
    return (
      <section className='nightsky-section'>
        <div className='aboutsite-wrapper'>
          {/* <div className='projects-wrapper'> */}
            {/* <a>Harry Potter and the Sorting Game</a>
            <a>Movie Tracker</a>
            <a>What's New</a> */}
            {/* <h4>Site built on top of Facebook's Create React App</h4> */}
          {/* </div> */}
          <div className='links-wrapper'>
            <a href="https://github.com/JEduardoRJx" target="_blank" rel="noopener noreferrer">
              <img className='icon' src={require('../../assets/github.png')} alt='github icon' />
            </a>
            <a href="https://www.linkedin.com/in/jeduardorjx/" target="_blank" rel="noopener noreferrer">
              <img className='icon' src={require('../../assets/linkedin.png')} alt='linkedin icon' />
            </a>
            <a href="mailto:jeduardorjx@gmail.com" target="_blank" rel="noopener noreferrer">
              <img className='icon' src={require('../../assets/paper-plane.png')} alt='email icon' />
            </a>
          </div>
        </div>
      </section>
    )
}