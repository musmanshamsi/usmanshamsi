import React, { useState, useEffect, useRef } from "react";
import "./About.css";

const Counter = ({ end, suffix = "", isVisible }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end, isVisible]);

  return <span>{count}{suffix}</span>;
};

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className={`about-section ${isVisible ? "is-visible" : ""}`} 
      id="about"
    >
      {/* The New Curved Floating Box */}
      <div className="about-curved-box reveal-element">
        
        {/* Left Side Content Area */}
        <div className="about-content-panel">
          <div className="about-text-content">
            <div className="section-subtitle delay-1">
              <span className="line"></span> Introduction
            </div>
            
            <h2 className="delay-2">The Developer & The Explorer.</h2>
            
            <div className="delay-3">
              <p>
                I am Usman Shamsi, a Computer Science professional who believes writing beautiful code is like exploring a new city—it requires curiosity, structure, and a passion for discovery.
              </p>
              <p>
                When I'm not architecting high-performance web applications, I am traveling the world. 
              </p>
            </div>

            {/* Animated Numbers Grid */}
            <div className="about-stats-bar delay-4">
              <div className="stat-item">
                <h3><Counter end={25} suffix="+" isVisible={isVisible} /></h3>
                <p>Projects</p>
              </div>
              <div className="stat-item">
                <h3><Counter end={10} suffix="+" isVisible={isVisible} /></h3>
                <p>Tech Stack</p>
              </div>
              <div className="stat-item">
                <h3><Counter end={8} suffix="" isVisible={isVisible} /></h3>
                <p>Countries</p>
              </div>
              <div className="stat-item">
                <h3><Counter end={100} suffix="%" isVisible={isVisible} /></h3>
                <p>Commitment</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Visual Area */}
        <div className="about-visual-panel delay-3">
          <img 
            src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?auto=format&fit=crop&w=1200&q=80" 
            alt="Usman Shamsee" 
            className="about-bg-img"
          />
        </div>

      </div>
    </section>
  );
};

export default About;