import React from 'react'

export default function AboutBox() {
  return (
    <div className="about_boxes grid">
        <div className="about_box">
            <i className="about_icon icon-fire"></i>
            <div>
                <h3 className="about_title">15+</h3>
                <span className="about_subtitle">Project Completed</span>
            </div>
        </div>
        <div className="about_box">
            <i className="about_icon icon-cup"></i>
            <div>
                <h3 className="about_title">30+</h3>
                <span className="about_subtitle">Cup of COffee</span>
            </div>
        </div>
        <div className="about_box">
            <i className="about_icon icon-people"></i>
            <div>
                <h3 className="about_title">10+</h3>
                <span className="about_subtitle">Satisfied clients</span>
            </div>
        </div>
        <div className="about_box">
            <i className="about_icon icon-badge"></i>
            <div>
                <h3 className="about_title">10+</h3>
                <span className="about_subtitle">Endorsements</span>
            </div>
        </div>
    </div>
  )
}
