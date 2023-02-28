import React from 'react'
import './Hero.css'
import heroimage from '../../assets/heroimage.png'
import bigvec from '../../assets/bigvec.png'
import smallvec from '../../assets/smallvec.png'
import insta from '../../assets/insta.png' 
import dribble from '../../assets/dribble.png' 
import behance from '../../assets/behance.png' 
const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero__wrapper'>
        <div className='hero__info-container'>
          <h1 className='hero__heading'>Hi, I’m Darlene</h1>
          <p className='hero__text'>I design beautiful websites & mobile apps that modern trends demand</p>
          <a href='#' className='hero__btn'>Contact Me</a>
        </div>
        <div className='hero__img-container'>
            <div class="photo-bg"></div>
            <img src={heroimage} alt="hero image" />
        </div>
      </div>
      <div className='hero__socialmedia'>
        <img className='insta' src={insta} alt="insta" />
        <img className='behance' src={behance} alt="behance" />
        <img className='dribble' src={dribble} alt="dribble" />
      </div>
    </div>
  )
}

export default Hero