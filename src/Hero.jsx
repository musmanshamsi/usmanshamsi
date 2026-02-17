import React, { useState, useEffect } from "react";
import "./Hero.css";

const backgroundImages = [
  {
    id: 1,
    label: "Computer Science",
    url: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1920&q=80"
  },
  {
    id: 2,
    label: "Explorer & Traveler",
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80"
  },
  {
    id: 3,
    label: "Innovative Creator",
    url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80"
  }
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-change background interval (Kept the perfect animation)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero" id="home">
      {/* 1. Background Image Stack */}
      <div className="hero-background-stack">
        {backgroundImages.map((image, index) => (
          <div
            key={image.id}
            className={`hero-bg-image ${index === currentIndex ? "active" : ""}`}
            style={{ backgroundImage: `url(${image.url})` }}
          ></div>
        ))}
      </div>

      {/* 2. Dark Gradient Overlay for Contrast */}
      <div className="hero-overlay"></div>

      {/* 3. Innovative Glassmorphism Content Box */}
      <div className="hero-content-wrapper">
        <div className="hero-glass-card">
          
          <div className="badge-wrapper">
            <span className="pulsing-dot"></span>
            <span className="interest-label">
              {backgroundImages[currentIndex].label}
            </span>
          </div>

          <h1>Usman Shamsi</h1>
          
          <div className="divider-line"></div>
          
          <p className="intro">
  Computer Science graduate from{" "}
  <a
    href="https://www.iba-suk.edu.pk/"
    target="_blank"
    rel="noopener noreferrer"
    className="intro-link"
  >
    Sukkur IBA University
  </a>
  , passionate about crafting elegant and efficient digital solutions. 
  I specialize in building innovative, user-focused web applications 
  that combine clean design with strong functionality.
</p>

          
          <div className="cta-buttons">
            <a href="#appointment" className="btn-premium primary">
              Take an Appointment
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </a>
            <a href="#contact" className="btn-premium secondary">
              Contact Now
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;