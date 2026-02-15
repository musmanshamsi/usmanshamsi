import React, { useEffect, useRef, useState } from "react";
import "./Projects.css";

const projectsData = [
  {
    id: 1,
    title: "E-Commerce Architecture",
    description: "A high-performance, fully responsive e-commerce platform featuring real-time inventory management, predictive search, and seamless payment gateway integration.",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&w=1200&q=80",
    tech: ["React", "Node.js", "MongoDB", "Stripe API"],
    github: "https://github.com"
  },
  {
    id: 2,
    title: "Financial Dashboard",
    description: "An analytical dashboard for financial data visualization, providing users with interactive charts and real-time market tracking.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    tech: ["TypeScript", "Next.js", "Tailwind"],
    github: "https://github.com"
  },
  {
    id: 3,
    title: "Travel Booking App",
    description: "A comprehensive booking application designed for global explorers, featuring interactive maps and dynamic pricing engines.",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80",
    tech: ["React Native", "Firebase"],
    github: "https://github.com"
  }
];

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev === projectsData.length - 1 ? 0 : prev + 1));
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev === 0 ? projectsData.length - 1 : prev - 1));
  };

  return (
    <section 
      ref={sectionRef} 
      className={`projects-section ${isVisible ? "is-visible" : ""}`} 
      id="projects"
    >
      <div className="projects-container">
        
        {/* Header */}
        <div className="projects-header reveal-element">
          <div className="section-subtitle">
            <span className="line"></span> Selected Works
          </div>
          <h2>Featured Projects.</h2>
        </div>

        {/* Robust 2D Sliding Carousel */}
        <div className="carousel-wrapper reveal-element delay-1">
          
          {/* Viewport masks the overflowing slides */}
          <div className="carousel-viewport">
            <div 
              className="carousel-track" 
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {projectsData.map((project) => (
                <div className="carousel-slide" key={project.id}>
                  <div className="slide-image-wrapper">
                    <img src={project.image} alt={project.title} className="slide-image" />
                  </div>

                  <div className="slide-content">
                    <div className="tech-stack">
                      {project.tech.map((techItem, i) => (
                        <span key={i} className="tech-pill">{techItem}</span>
                      ))}
                    </div>
                    
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>

                    <div className="slide-footer">
                      <a href={project.github} target="_blank" rel="noreferrer" className="github-link">
                        <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                        <span>View Source</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controls below the slide */}
          <div className="carousel-controls reveal-element delay-2">
            <button className="control-btn" onClick={prevProject}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            
            <div className="carousel-dots">
              {projectsData.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`dot ${idx === currentIndex ? 'active' : ''}`}
                  onClick={() => setCurrentIndex(idx)}
                />
              ))}
            </div>

            <button className="control-btn" onClick={nextProject}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;