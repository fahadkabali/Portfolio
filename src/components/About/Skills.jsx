import React from 'react'

const Skill = () => {
  return (
    <div className="about_skills grid">
            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills_name"><i class="fa-brands fa-react skill-icon"></i>ReactJS</h3>
                  <span className="skills_number">70%</span>
              </div>
              <div className="skills_bar">
                <span className="skills_percentage development-react"></span>
              </div>
            </div>
            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills_name"><i class="fa-brands fa-node-js skill-icon"></i>NodeJS</h3>
                  <span className="skills_number">60%</span>
              </div>
              <div className="skills_bar">
                <span className="skills_percentage development-node"></span>
              </div>
            </div>
            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills_name"><i class="fa-solid fa-n skill-icon"></i>NextJS</h3>
                  <span className="skills_number">60%</span>
              </div>
              <div className="skills_bar">
                <span className="skills_percentage development-express"></span>
              </div>
            </div>
            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills_name"><i class="fa-brands fa-react skill-icon"></i>Reat-Native</h3>
                  <span className="skills_number">50%</span>
              </div>
              <div className="skills_bar">
                <span className="skills_percentage development-native"></span>
              </div>
            </div>
            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills_name"><i class="fa-brands fa-python skill-icon"></i>Django</h3>
                  <span className="skills_number">50%</span>
              </div>
              <div className="skills_bar">
                <span className="skills_percentage development-django"></span>
              </div>
            </div>
            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills_name"><i class="fa-solid fa-infinity skill-icon"></i>DFINITY Web3</h3>
                  <span className="skills_number">40%</span>
              </div>
              <div className="skills_bar">
                <span className="skills_percentage development-blockchain"></span>
              </div>
            </div>
          </div>
  )
}

export default Skill
