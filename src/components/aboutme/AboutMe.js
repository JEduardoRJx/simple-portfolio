import React from 'react';
import './AboutMe.scss';

export const AboutMe = () => {
    return (
      <section className='about-me-section'>
        <div className='about-me'>
          <img src={require('../../assets/me_bw.jpg')}/>
          {/* <p> My emphasis is on front end technologies, resourceful problem solving, and collaboration. I look forward to working on a friendly, user focused team building software applications that are accessible and easy to use.</p> */}
        </div>
      </section>
    )
}