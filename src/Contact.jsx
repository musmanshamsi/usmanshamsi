import React, { useEffect, useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import "./Contact.css";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [status, setStatus] = useState("idle"); 
  const sectionRef = useRef(null);
  const formRef = useRef(null);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    const serviceID = "YOUR_SERVICE_ID";
    const templateID = "YOUR_TEMPLATE_ID";
    const publicKey = "YOUR_PUBLIC_KEY";

    emailjs.sendForm(serviceID, templateID, formRef.current, publicKey)
      .then(() => {
          setStatus("success");
          formRef.current.reset(); 
          setTimeout(() => setStatus("idle"), 4000);
      }, () => {
          setStatus("error");
          setTimeout(() => setStatus("idle"), 4000);
      });
  };

  return (
    <section ref={sectionRef} className={`contact-section ${isVisible ? "active" : ""}`} id="contact">
      <div className="contact-wrapper">
        
        {/* The exact same glass card style from your Hero */}
        <div className="contact-glass-card">
          <div className="contact-grid">
            
            {/* Left: Info matched to Hero typography */}
            <div className="contact-info">
              <div className="badge-wrapper">
                <div className="pulsing-dot"></div>
                <span className="interest-label">Available for work</span>
              </div>
              
              <h2 className="contact-heading">Let's build<br/>together.</h2>
              <p className="contact-intro">
                Drop me a message below. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>

              <div className="contact-links-group">
                <a href="mailto:m.usmanshamsee@gmail.com" className="direct-email">m.usmanshamsee@gmail.com</a>
                <div className="social-row">
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
                  <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
                  <a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter / X</a>
                </div>
              </div>
            </div>

            {/* Right: Form matched to theme */}
            <div className="contact-form-container">
              <form ref={formRef} onSubmit={handleSubmit} className="theme-form">
                
                <div className="input-group">
                  <input type="text" id="name" name="user_name" placeholder="Name" required />
                </div>
                
                <div className="input-group">
                  <input type="email" id="email" name="user_email" placeholder="Email Address" required />
                </div>
                
                <div className="input-group">
                  <textarea id="message" name="message" rows="4" placeholder="Tell me about your project..." required></textarea>
                </div>

                {/* Using the exact premium button style from your Hero */}
                <button type="submit" className={`btn-premium primary form-btn ${status}`} disabled={status !== "idle"}>
                  {status === "idle" && <>Send Message <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></>}
                  {status === "sending" && "Sending..."}
                  {status === "success" && "Message Sent ✓"}
                  {status === "error" && "Error. Try Again."}
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;