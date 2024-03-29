import React from 'react'
import "./home.css"
import Me from '../../assets/fahadkAvatar1.png'
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';

export default function Home() {
 
  return (
    <section className='home container' id="home">
     
      <div className="intro">
        <img src={Me} alt="" className="home_img" />
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
