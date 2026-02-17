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
  const [activeTab, setActiveTab] = useState("overview");
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 } 
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
      <div className="about-curved-box reveal-element">
        
        {/* Left Side Content Area */}
        <div className="about-content-panel">
          <div className="about-text-content">
            
            <div className="section-subtitle delay-1">
              <span className="line"></span> About Me
            </div>
            
            <h2 className="delay-2">Building Scalable Digital Experiences.</h2>
            
            {/* HCI Interactive Tabs */}
            <div className="about-tabs delay-3">
              <button 
                className={`tab-btn ${activeTab === "overview" ? "active" : ""}`}
                onClick={() => setActiveTab("overview")}
              >
                Overview
              </button>
              <button 
                className={`tab-btn ${activeTab === "journey" ? "active" : ""}`}
                onClick={() => setActiveTab("journey")}
              >
                Journey & Goals
              </button>
              <button 
                className={`tab-btn ${activeTab === "skills" ? "active" : ""}`}
                onClick={() => setActiveTab("skills")}
              >
                Skills
              </button>
            </div>

            {/* Tab Content Area with Fade Animation */}
            <div className="tab-content-container delay-3">
              
              {/* TAB 1: OVERVIEW */}
              {activeTab === "overview" && (
                <div className="tab-pane fade-in">
                  <p>
                    I am a Computer Science graduate from{" "}
                    <a 
                      href="https://www.iba-suk.edu.pk/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="intro-link"
                    >
                      Sukkur IBA University
                    </a>{" "}
                    with a strong passion for technology and innovation. I enjoy transforming complex ideas into clean, efficient, and user-friendly digital solutions.
                  </p>
                  <p>
                    My focus lies in building scalable web applications that combine thoughtful design with strong technical foundations. I believe that great software is not just functional — it creates meaningful experiences.
                  </p>
                  
                  {/* Animated Numbers Grid */}
                  <div className="about-stats-bar">
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
                      <p>Semesters</p> 
                    </div>
                    <div className="stat-item">
                      <h3><Counter end={100} suffix="%" isVisible={isVisible} /></h3>
                      <p>Commitment</p>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: JOURNEY & GOALS */}
              {activeTab === "journey" && (
                <div className="tab-pane fade-in">
                  <h4>My Journey</h4>
                  <p>
                    During my academic journey, I developed a strong foundation in data structures, algorithms, software engineering, and database systems. Through personal and academic projects, I discovered my interest in modern web technologies and user-centered design.
                  </p>
                  
                  <h4 className="mt-4">Future Goals</h4>
                  <p>
                    I am continuously learning and exploring new technologies to stay updated with industry standards. I aim to leverage my unique blend of frontend development, AI integration, and design to create intelligent applications that solve complex problems.
                  </p>
                </div>
              )}

              {/* TAB 3: SKILLS */}
              {activeTab === "skills" && (
                <div className="tab-pane fade-in">
                  <div className="skills-category">
                    <h4>Frontend Development</h4>
                    <ul className="skills-list">
                      <li>React.js</li>
                      <li>JavaScript (ES6+)</li>
                      <li>HTML5</li>
                      <li>CSS3</li>
                    </ul>
                  </div>
                  
                  <div className="skills-category mt-3">
                    <h4>Core Tech & Tools</h4>
                    <ul className="skills-list">
                      <li>AI & Deep Learning Algorithms</li>
                      <li>Git & GitHub</li>
                      <li>VS Code</li>
                    </ul>
                  </div>

                  <div className="skills-category mt-3">
                    <h4>Design</h4>
                    <ul className="skills-list">
                      <li>Graphic Designing</li>
                      <li>Video Editing</li>
                    </ul>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>

        {/* Right Side Visual Area */}
        <div className="about-visual-panel delay-4">
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