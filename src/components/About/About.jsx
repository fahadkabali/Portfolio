import React from 'react'
import "./about.css"
import Image from "../../assets/fahadAvatar2.png"
import AboutBox from './AboutBox'
import Skills from './Skills'

export default function About() {
  return (
    <section className="about container section" id='about'>
      <h2 className="section_title">About Me</h2>
      <div className="about_container grid">
        <img src={Image} alt="" className="about_img " />
        <div className="about_data grid">
          <div className="about_info">
            <p className="about_description">
              Highly motivated software engineer passionate about crafting innovative ideas into user-friendly solutions. 
              Experienced across the SDLC, proficient in various technologies including relational {`(MySQL, PostgreSQL)`}, 
              non-relational {`(MongoDB)`} databases, web dev {` (HTML, JS, CSS)`}, front-end frameworks 
              {` (Tailwind, Bootstrap, React stack: React.js, Next.js, React Native)`}, and back-end frameworks 
              {` (Java, Python/Django, Node.js/React stack)`}. Thrive in collaborative environments, delivering 
              high-quality projects on time and within budget. Dedicated learner, staying updated on trends and eager for new challenges, 
              especially in web3. Keen on leveraging Dfinity ICP blockchain to build decentralized applications for the future.
            </p>
            <br/>
            <button className="btn">
              <i class="fa-solid fa-file-arrow-down"></i><a href="https://drive.google.com/file/d/18BcQBNe6SP6kxnb4WdjRX2DTmfu2EYyz/view?usp=sharing" target="_blank" rel="noopener noreferrer" >  Download Resume</a>
            </button>
          </div>
          <Skills/>
        </div>
      </div>
      <AboutBox/>
    </section>
  )
}
