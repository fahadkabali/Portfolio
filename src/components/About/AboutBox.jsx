import React, { useState, useEffect } from 'react';

export default function AboutBox() {
  const [projectCount, setProjectCount] = useState(0);
  const [collabCount, setCollabCount] = useState(0);
  const [clientCount, setClientCount] = useState(0);
  const [endorseCount, setEndorseCount] = useState(0);

  const projectEndNumber = 20;
  const collabEndNumber = 20;
  const clientEndNumber = 15;
  const endorseEndNumber = 25;

  const interval = 150;

  useEffect(() => {
    if (projectCount < projectEndNumber) {
      const timer = setInterval(() => {
        setProjectCount((prevCount) => prevCount + 1);
      }, interval);

      return () => clearInterval(timer);
    }
  }, [projectCount]);

  useEffect(() => {
    if (collabCount < collabEndNumber) {
      const timer = setInterval(() => {
        setCollabCount((prevCount) => prevCount + 1);
      }, interval);

      return () => clearInterval(timer);
    }
  }, [collabCount]);

  useEffect(() => {
    if (clientCount < clientEndNumber) {
      const timer = setInterval(() => {
        setClientCount((prevCount) => prevCount + 1);
      }, interval);

      return () => clearInterval(timer);
    }
  }, [clientCount]);

  useEffect(() => {
    if (endorseCount < endorseEndNumber) {
      const timer = setInterval(() => {
        setEndorseCount((prevCount) => prevCount + 1);
      }, interval);

      return () => clearInterval(timer);
    }
  }, [endorseCount]);

  return (
    <div className="about_boxes grid">
      <div className="about_box">
        <i className="about_icon icon-fire"></i>
        <div>
          <h3 className="about_title">{projectCount}+</h3>
          <span className="about_subtitle">Projects Completed</span>
        </div>
      </div>
      <div className="about_box">
        <i className="about_icon icon-people"></i>
        <div>
          <h3 className="about_title">{collabCount}+</h3>
          <span className="about_subtitle">Collaborations</span>
        </div>
      </div>
      <div className="about_box">
        <i className="about_icon fas fa-handshake"></i>
        <div>
          <h3 className="about_title">{clientCount}+</h3>
          <span className="about_subtitle">Satisfied Clients</span>
        </div>
      </div>
      <div className="about_box">
        <i className="about_icon icon-badge"></i>
        <div>
          <h3 className="about_title">{endorseCount}+</h3>
          <span className="about_subtitle">Endorsements</span>
        </div>
      </div>
    </div>
  );
}
