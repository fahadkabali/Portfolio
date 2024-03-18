import React from 'react'
import "./about.css"
import Image from "../../assets/fahadAvatar2.png"
import AboutBox from './AboutBox'

export default function About() {
  return (
    <section className="about container section" id='about'>
      <h2 className="section_title">About Me</h2>
      <div className="about_container grid">
        <img src={Image} alt="" className="about_img" />
        <div className="about_data grid">
          <div className="about_info">
            <p className="about_description">
              Self-motivated software engineer with the ability to transform innovative ideas 
              into user-friendly software solutions. With general experience across 
              the software development lifecycle and proficiency in Python, JavaScript, React.js, 
              Node.js, Django, and more, I thrive on collaborating with teams to deliver high-quality 
              projects on time and within budget. Dedicated to continuous learning and staying updated 
              with industry trends, I'm eager to tackle new challenges and explore exciting opportunities 
              in software development. Additionally, I have a keen interest in web3 development, particularly 
              leveraging technologies like Dfinity to build decentralized applications for the future.
            </p>
            <br/>
            <button className="btn">
              <i class="fa-solid fa-file-arrow-down"></i><a href="https://drive.google.com/file/d/18BcQBNe6SP6kxnb4WdjRX2DTmfu2EYyz/view?usp=sharing" target="_blank" rel="noopener noreferrer" >  Download Resume</a>
            </button>
          </div>
          <div className="about_skills grid">
            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills_name">ReactJS</h3>
                  <span className="skills_number">70%</span>
              </div>
              <div className="skills_bar">
                <span className="skills_percentage development-react"></span>
              </div>
            </div>
            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills_name">NodeJS</h3>
                  <span className="skills_number">60%</span>
              </div>
              <div className="skills_bar">
                <span className="skills_percentage development-node"></span>
              </div>
            </div>
            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills_name">EXpressJS</h3>
                  <span className="skills_number">60%</span>
              </div>
              <div className="skills_bar">
                <span className="skills_percentage development-express"></span>
              </div>
            </div>
            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills_name">Reat-Native</h3>
                  <span className="skills_number">50%</span>
              </div>
              <div className="skills_bar">
                <span className="skills_percentage development-native"></span>
              </div>
            </div>
            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills_name">Django</h3>
                  <span className="skills_number">50%</span>
              </div>
              <div className="skills_bar">
                <span className="skills_percentage development-django"></span>
              </div>
            </div>
            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills_name">DFINITY Web3</h3>
                  <span className="skills_number">40%</span>
              </div>
              <div className="skills_bar">
                <span className="skills_percentage development-blockchain"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AboutBox/>
    </section>
  )
}
