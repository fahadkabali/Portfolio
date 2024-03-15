import React from 'react'
import "./about.css"
import Image from "../../assets/avatar-2.svg"
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
              Self-motivated software engineer with the ability to transform innovative ideas into user-friendly software solutions. 
              With general experience across the software development lifecycle and proficiency in Python, JavaScript, React.js,
              Node.js, Django, and more, I thrive on collaborating with teams to deliver high-quality projects on time and within
              budget. Dedicated to continuous learning and staying updated with industry trends, I'm eager to tackle new challenges
              and explore exciting opportunities in software development.
            </p>
            <a href="" className="btn">Download CV</a>
          </div>
          <div className="about_skills grid">
            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills_name">Front-End Development</h3>
                  <span className="skills_number">90%</span>
              </div>
              <div className="skills_bar">
                <span className="skills_percentage development"></span>
              </div>
            </div>
            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills_name">Blockchain Development</h3>
                  <span className="skills_number">60%</span>
              </div>
              <div className="skills_bar">
                <span className="skills_percentage blockchain"></span>
              </div>
            </div>
            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills_name">Back-End Development</h3>
                  <span className="skills_number">60%</span>
              </div>
              <div className="skills_bar">
                <span className="skills_percentage backend"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AboutBox/>
    </section>
  )
}
