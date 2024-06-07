import React, { useState, useEffect, useRef } from 'react';

export default function AboutBox() {
  const [projectCount, setProjectCount] = useState(0);
  const [collabCount, setCollabCount] = useState(0);
  const [clientCount, setClientCount] = useState(0);
  const [endorseCount, setEndorseCount] = useState(0);

  const projectEndNumber = 20;
  const collabEndNumber = 12;
  const clientEndNumber = 17;
  const endorseEndNumber = 22;

  const interval = 150;

  const projectRef = useRef(null);
  const collabRef = useRef(null);
  const clientRef = useRef(null);
  const endorseRef = useRef(null);

  const startCounting = (endNumber, setCount) => {
    const timer = setInterval(() => {
      setCount(prevCount => {
        if (prevCount < endNumber) {
          return prevCount + 1;
        } else {
          clearInterval(timer);
          return endNumber;
        }
      });
    }, interval);
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target === projectRef.current && projectCount === 0) {
            startCounting(projectEndNumber, setProjectCount);
          }
          if (entry.target === collabRef.current && collabCount === 0) {
            startCounting(collabEndNumber, setCollabCount);
          }
          if (entry.target === clientRef.current && clientCount === 0) {
            startCounting(clientEndNumber, setClientCount);
          }
          if (entry.target === endorseRef.current && endorseCount === 0) {
            startCounting(endorseEndNumber, setEndorseCount);
          }
        } else {
          // Reset count to zero when the element goes out of view
          if (entry.target === projectRef.current) {
            setProjectCount(0);
          }
          if (entry.target === collabRef.current) {
            setCollabCount(0);
          }
          if (entry.target === clientRef.current) {
            setClientCount(0);
          }
          if (entry.target === endorseRef.current) {
            setEndorseCount(0);
          }
        }
      });
    });

    if (projectRef.current) observer.observe(projectRef.current);
    if (collabRef.current) observer.observe(collabRef.current);
    if (clientRef.current) observer.observe(clientRef.current);
    if (endorseRef.current) observer.observe(endorseRef.current);

    return () => {
      if (projectRef.current) observer.unobserve(projectRef.current);
      if (collabRef.current) observer.unobserve(collabRef.current);
      if (clientRef.current) observer.unobserve(clientRef.current);
      if (endorseRef.current) observer.unobserve(endorseRef.current);
    };
  }, [projectCount, collabCount, clientCount, endorseCount]);

  return (
    <div className="about_boxes grid">
      <div className="about_box" ref={projectRef}>
        <i className="about_icon icon-fire"></i>
        <div>
          <h3 className="about_title">{projectCount}+</h3>
          <span className="about_subtitle">Projects Completed</span>
        </div>
      </div>
      <div className="about_box" ref={collabRef}>
        <i className="about_icon icon-people"></i>
        <div>
          <h3 className="about_title">{collabCount}+</h3>
          <span className="about_subtitle">Collaborations</span>
        </div>
      </div>
      <div className="about_box" ref={clientRef}>
        <i className="about_icon fas fa-handshake"></i>
        <div>
          <h3 className="about_title">{clientCount}+</h3>
          <span className="about_subtitle">Satisfied Clients</span>
        </div>
      </div>
      <div className="about_box" ref={endorseRef}>
        <i className="about_icon icon-badge"></i>
        <div>
          <h3 className="about_title">{endorseCount}+</h3>
          <span className="about_subtitle">Endorsements</span>
        </div>
      </div>
    </div>
  );
}
