

import React from 'react';
import './YogaPage.css';
import Footer from '../component/Footer';
import Navigation from '../component/Navigation';

export default function YogaPage() {
  return (
    <>
    <Navigation />
    <div className="yoga-alt-wrapper">
      <div className="yoga-hero">
        <div className="container">
          <h1>Yoga for Everyone</h1>
          <p>Experience the healing power of yoga — build strength, enhance flexibility, and embrace inner peace.</p>
        </div>
      </div>

      <section className="yoga-section split-section">
        <div className="text-block">
          <h2>What You'll Learn</h2>
          <p>
            Our Yoga Program covers mindful breathing, posture alignment, deep stretches, and meditative relaxation.
            You'll develop better control over your mind and body, enhance your mobility, and release built-up stress.
          </p>
        </div>
        <div className="text-block highlight-box">
          <h3>Trainer</h3>
          <p><strong>Jayash</strong> - Internationally certified yoga expert with 10+ years of experience.</p>
          <p>Guides each class with compassion, clarity, and deep knowledge of yogic science.</p>
        </div>
      </section>

      <section className="yoga-section">
        <h2>Key Elements of the Program</h2>
        <div className="card-grid">
          <div className="card">Breathing Control (Pranayama)</div>
          <div className="card">Dynamic Flows (Vinyasa)</div>
          <div className="card">Relaxation (Yoga Nidra)</div>
          <div className="card">Static Postures (Hatha)</div>
        </div>
      </section>

      <section className="yoga-section split-section">
        <div className="text-block">
          <h2>Schedule & Duration</h2>
          <p><strong>🕒 Timing:</strong> Mon–Sat, 6:00 AM – 7:00 AM</p>
          <p><strong>📍 Location:</strong> 2nd Floor – Yoga Studio</p>
        </div>
        <div className="text-block">
          <h2>Who Should Join?</h2>
          <ul>
            <li>Beginners wanting to start yoga safely</li>
            <li>Working professionals seeking stress relief</li>
            <li>Students aiming for focus and discipline</li>
            <li>Seniors needing gentle movement routines</li>
          </ul>
        </div>
      </section>

      <section className="yoga-section call-to-action">
        <h2>Join the Movement</h2>
        <p>Commit to your well-being today. Our yoga sessions are open, inclusive, and empowering.</p>
        <button className="cta-btn">Start Your Journey</button>
      </section>

      
    </div>
    <Footer />
    </>
  );
}
