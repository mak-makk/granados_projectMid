import React, { useState } from 'react';
import './Portfolio.css'; // Import your CSS here

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="portfolio-root">
      {/* NAVIGATION */}
      <header className="nav">
        <div className="container nav-inner">
          <div className="brand">
            <div className="brand-badge" aria-hidden="true"></div>
            <span>MARC JOHN GRANADOS</span>
          </div>
          <button 
            className="menu-btn"
            onClick={toggleMenu} 
            aria-label="Toggle menu"
          >
            ☰
          </button>
      
          <nav 
            className={`nav-links ${isMenuOpen ? 'open' : ''}`} 
            aria-label="Primary"
          >
            <a href="#home">Home</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
          </nav>
        </div>
      </header>

      <main>
        {/* HOME / ABOUT ME */}
        <section id="home" className="container hero">
          <div>
            <span className="pill">About Me</span>
            <h1>Hi! I'm Marc, an IT student, aspiring developer.</h1>
            <p>
              "I’m a future software developer with a serious obsession for building and breaking things. 
I began my tech journey with a basic "Hello World," and it has developed into a deeply 
love of innovative problem-solving and rational architecture. I'm always inspired by the 

the industry's rapid pace and the limitless potential of a few lines of code."
            </p>
            <div className="hero-card"> 
              <p><strong>Biggest Accomplishment:</strong> Achieved an academic excellence award</p>
            </div>
          </div>
        </section>


  <section id="projects">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="pill">Portfolio</span>
                <h2 className="title">Projects</h2>
              </div>
              <div className="subtitle">Academic and personal projects</div>
            </div>

            <div className="cards"><article class="card">
          <h3>Capstone Project</h3>
          <p>On-going academic project.</p>
          <p><strong>Role:</strong> programmer</p>
          <p><strong>Technologies:</strong> HTML, CSS, JS, PHP</p>
        </article>
            </div>
          </div>
        </section>


  
        <section id="skills">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="pill">Skills</span>
                <h2 className="title">Programming Tools</h2>
              </div>
              <div className="subtitle">Technologies I use to make my projects</div>
            </div>

            <div className="cards">

              <article className="card">
                <h3>System Visual Design</h3>
                <p>I create clean, intuitive interfaces where clarity is the priority.</p>
                <div className="tag-row">
                  {['Unity UI', 'UI Design', 'UX Design', 'AutoDesk Sketch', 'Figma'].map(design => (
                    <span key={design} className="tag">{design}</span>
                  ))}
                </div>
              </article>

              <article className="card">
                <h3>Programming Languages</h3>
                <p>Languages I frequently use in projects.</p>
                <div className="tag-row">
                  {['HTML', 'CSS', 'JavaScript'].map(skill => (
                    <span key={skill} className="tag">{skill}</span>
                  ))}
                </div>
              </article>

            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Portfolio;