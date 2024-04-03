import React from 'react'
import "./home.css"
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';
import HomeImage from './HomeImage';

export default function Home() {
 
  return (
    <section className='home container' id="home">
     
      <div className="intro">
        <HomeImage/>
        <h1 className="nome_name">Kabali Fahad Maliki</h1>
        <span className="home_education">I am a Software Engineer</span>

        <HeaderSocials/>
        <a href="#contact" className="btn">Let's connect</a>
        <ScrollDown/>
      </div>
      <Shapes/>
    </section>
  )
}
