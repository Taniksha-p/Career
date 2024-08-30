import React from "react";
import './index.css';

function Hero() {
  return (
    <div className="hero-container container text-center">
      <img
        src="career-counseling-professional-advice-occupation-600nw-2338593489.webp"
        alt="Hero Image"
        className="hero-image mb-5"
      />
      <h1 className="hero-title">One step ahead</h1>
      <p className="hero-description">
        Online platform to access the untold stories, career paths for a better tomorrow
      </p>
      <button className="hero-button btn btn-primary">Signup Now</button>
    </div>
  );
}

export default Hero;
