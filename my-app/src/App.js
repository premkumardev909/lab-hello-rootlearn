import React from 'react';
import './index.css';

function App() {
  return (
    <div className="app">
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="text-content">
              <h1 className="hero-title">Say hello to ReactJS</h1>
              <p className="hero-description">
                You will learn a Frontend framework from scratch, to become an Ninka Developer.
              </p>
              <button className="hero-button">Awesome!</button>
            </div>
            <div className="logo-container">
              <img
                src="https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-black-and-white.png"
                alt="React Logo"
                className="react-logo"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <div className="features-grid">
            <FeatureItem
              icon="https://imgur.com/H2L3ohY.png"
              title="Declarative"
              description="React makes it painless to create interactive UIs."
            />
            <FeatureItem
              icon="https://imgur.com/IHW1mFB.png"
              title="Components"
              description="Build encapsulated components that manage their state."
            />
            <FeatureItem
              icon="https://imgur.com/LtUDB9y.png"
              title="Single-Way"
              description="A set of immutable values are passed to the component's."
            />
            <FeatureItem
              icon="https://imgur.com/agN6R4Y.png"
              title="JSX"
              description="Statically-typed, designed to run on modern browsers."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureItem({ icon, title, description }) {
  return (
    <div className="feature-item">
      <img src={icon} alt={`${title} Icon`} className="feature-icon" />
      <h3 className="feature-title">{title}</h3>
      <p className="feature-description">{description}</p>
    </div>
  );
}

export default App;