import React, { useState } from 'react';
import { User, Sparkles, Award, Compass, MessageSquare, ArrowRight, CheckCircle2 } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import TechAtmosphere from '../components/TechAtmosphere';
import Reveal from '../components/Reveal';
import { speakerCategories, keynoteSpeakers, industryMentors, juryPanels } from '../data/speakers';

export default function Speakers() {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <div className="speakers-page-root">
      <TechAtmosphere />

      {/* Page Header */}
      <section className="speakers-hero-section">
        <div className="container">
          <Reveal variant="header">
            <span className="section-eyebrow">THE MINDS BEHIND THE EXPERIENCE</span>
            <h1 className="speakers-hero-title">
              SPEAKERS
            </h1>
            <p className="speakers-hero-sub">
              Speaker and mentor announcements coming soon. Leading engineering leaders, researchers, and systems pioneers will be announced prior to the symposium.
            </p>
          </Reveal>

          {/* Tab Filter */}
          <div className="speakers-tabs-row">
            {speakerCategories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`speaker-tab-btn ${activeTab === cat.id ? 'tab-btn-active' : ''}`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Sections */}
      <section className="speakers-content-section">
        <div className="container">
          {/* 1. KEYNOTE SPEAKERS SECTION */}
          {(activeTab === 'all' || activeTab === 'speakers') && (
            <div className="speakers-group-block">
              <Reveal variant="header" className="group-header">
                <span className="section-eyebrow">FEATURED KEYNOTES</span>
                <h2 className="group-title">KEYNOTE SPEAKERS</h2>
                <p className="group-sub">
                  Thought leaders delivering perspective on Edge AI, resilient architectures, and global computing careers.
                </p>
              </Reveal>

              {keynoteSpeakers.length > 0 ? (
                <div className="speakers-grid">
                  {/* Populated when real speakers are added */}
                </div>
              ) : (
                <Reveal variant="stagger" className="speaker-placeholder-grid">
                  {[1, 2].map((n) => (
                    <div key={n} className="speaker-unannounced-card reveal-card">
                      <div className="avatar-placeholder-box">
                        <User size={36} color="var(--purple-light)" />
                        <span className="placeholder-tag">KEYNOTE 0{n}</span>
                      </div>
                      <h3 className="card-name">KEYNOTE SPEAKER 0{n}</h3>
                      <p className="card-role">Speaker Announcement Coming Soon</p>
                      
                      <div className="card-status-pill">
                        <span className="status-dot"></span>
                        <span>Official reveal coming soon</span>
                      </div>
                    </div>
                  ))}
                </Reveal>
              )}
            </div>
          )}

          {/* 2. INDUSTRY MENTORS SECTION (6 MENTORS) */}
          {(activeTab === 'all' || activeTab === 'mentors') && (
            <div className="speakers-group-block">
              <Reveal variant="header" className="group-header">
                <span className="section-eyebrow">NANO MENTORING CORPS</span>
                <h2 className="group-title">6 INDUSTRY MENTORS</h2>
                <p className="group-sub">
                  Hands-on engineering leads and veteran professionals guiding students across high-stakes career and technical sessions.
                </p>
              </Reveal>

              {industryMentors.length > 0 ? (
                <div className="speakers-grid">
                  {/* Real mentors */}
                </div>
              ) : (
                <Reveal variant="stagger" className="mentors-roster-grid">
                  {[1, 2, 3, 4, 5, 6].map((num) => (
                    <div key={num} className="mentor-roster-card reveal-card">
                      <div className="mentor-avatar-frame">
                        <User size={28} color="var(--purple-light)" />
                        <span className="mentor-num-pill">MENTOR 0{num}</span>
                      </div>
                      <h4 className="mentor-name">MENTOR 0{num}</h4>
                      <p className="mentor-org">Industry Mentor</p>
                      <span className="mentor-status">Profile details to be announced</span>
                    </div>
                  ))}
                </Reveal>
              )}
            </div>
          )}

          {/* 3. JURY & JUDGES SECTION */}
          {(activeTab === 'all' || activeTab === 'jury') && (
            <div className="speakers-group-block">
              <Reveal variant="header" className="group-header">
                <span className="section-eyebrow">EVALUATION PANEL</span>
                <h2 className="group-title">JURY & JUDGES</h2>
                <p className="group-sub">
                  Experienced judges overseeing VerdictX: Code & Conquer, Sherlock & Syntax, and Idea Alchemy evaluation rounds.
                </p>
              </Reveal>

              {juryPanels.length > 0 ? (
                <div className="speakers-grid">
                  {/* Real jury */}
                </div>
              ) : (
                <Reveal variant="card" className="jury-placeholder-card">
                  <Award size={36} color="var(--purple-light)" />
                  <h3>HONOURABLE EVALUATION BENCH</h3>
                  <p>
                    The evaluation bench comprises engineering leaders, domain specialists, and academic fellows. The jury panel for the 24H Hackathon and Startup Pitch will be unveiled alongside final problem tracks.
                  </p>
                  <span className="badge-tech">EVALUATION BENCH TO BE REVEALED</span>
                </Reveal>
              )}
            </div>
          )}

          {/* Bottom Nomination / Inquire CTA */}
          <Reveal variant="card" className="speakers-nominate-banner">
            <div>
              <h3>ARE YOU AN INDUSTRY EXPERT OR SPEAKER?</h3>
              <p>Connect with the organizing committee to deliver masterclasses or participate in nano-mentoring.</p>
            </div>
            <a href="mailto:techxmadras2k26@gmail.com" className="btn btn-primary">
              <span>CONTACT ORGANIZING COMMITTEE</span>
              <ArrowRight size={18} />
            </a>
          </Reveal>
        </div>
      </section>

      <style>{`
        .speakers-page-root {
          padding-top: var(--nav-height);
          background: #000000;
          min-height: 100vh;
        }
        .speakers-hero-section {
          padding: 5rem 0 3.5rem;
          border-bottom: 1px solid var(--border-subtle);
          position: relative;
        }
        .speakers-hero-title {
          font-family: var(--font-display);
          font-size: clamp(3rem, 7vw, 6rem);
          line-height: 0.95;
          letter-spacing: 0.03em;
          text-transform: uppercase;
          margin: 1rem 0 1.5rem;
        }
        .speakers-hero-sub {
          font-size: 1.15rem;
          max-width: 740px;
          margin-bottom: 3rem;
        }
        .speakers-tabs-row {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
        }
        .speaker-tab-btn {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 0.65rem 1.35rem;
          border-radius: var(--radius-sm);
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border);
          color: var(--muted);
          transition: var(--transition-fast);
        }
        .speaker-tab-btn:hover {
          color: var(--white);
          border-color: var(--purple-light);
          background: rgba(138, 43, 226, 0.15);
        }
        .tab-btn-active {
          color: var(--white);
          background: var(--purple);
          border-color: var(--purple-light);
          box-shadow: 0 0 15px var(--purple-glow);
        }

        /* Group Blocks */
        .speakers-content-section {
          padding: 5rem 0;
        }
        .speakers-group-block {
          margin-bottom: 5.5rem;
        }
        .group-header {
          margin-bottom: 2.5rem;
        }
        .group-title {
          font-size: clamp(2rem, 4vw, 3rem);
          text-transform: uppercase;
          margin-bottom: 0.5rem;
        }
        .group-sub {
          font-size: 1rem;
          max-width: 680px;
        }

        /* Speaker Cards */
        .speaker-placeholder-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        }
        @media (max-width: 768px) {
          .speaker-placeholder-grid {
            grid-template-columns: 1fr;
          }
        }
        .speaker-unannounced-card {
          background: #0B0714;
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          transition: var(--transition-normal);
        }
        .speaker-unannounced-card:hover {
          border-color: var(--purple-light);
          transform: translateY(-4px);
          box-shadow: 0 10px 30px rgba(138, 43, 226, 0.2);
        }
        .avatar-placeholder-box {
          width: 90px;
          height: 90px;
          border-radius: 50%;
          background: rgba(138, 43, 226, 0.12);
          border: 1px dashed var(--border);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.25rem;
          margin-bottom: 1.5rem;
        }
        .placeholder-tag {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          color: var(--purple-light);
        }
        .card-name {
          font-size: 1.4rem;
          margin-bottom: 0.25rem;
          color: var(--white);
        }
        .card-role {
          font-size: 0.95rem;
          color: var(--purple-light);
          font-weight: 600;
          margin-bottom: 0.25rem;
        }
        .card-company {
          font-size: 0.85rem;
          color: var(--muted);
          margin-bottom: 1.5rem;
        }
        .card-status-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--muted);
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-subtle);
          padding: 0.35rem 0.85rem;
          border-radius: var(--radius-sm);
        }
        .status-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--purple-light);
          animation: pulseGlow 2s infinite;
        }

        /* Mentors Roster */
        .mentors-roster-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }
        @media (max-width: 900px) {
          .mentors-roster-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 550px) {
          .mentors-roster-grid {
            grid-template-columns: 1fr;
          }
        }
        .mentor-roster-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          padding: 2rem;
          text-align: center;
        }
        .mentor-avatar-frame {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: rgba(138, 43, 226, 0.1);
          border: 1px dashed var(--border);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.25rem;
        }
        .mentor-slot {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          color: var(--purple-light);
        }
        .mentor-roster-card h4 {
          font-size: 1.15rem;
          margin-bottom: 0.25rem;
        }
        .mentor-domain {
          font-size: 0.85rem;
          color: var(--muted);
          margin-bottom: 1rem;
        }
        .announcement-tag {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--muted-dark);
          letter-spacing: 0.05em;
        }

        /* Jury Placeholder Card */
        .jury-placeholder-card {
          background: #0B0714;
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          padding: 3.5rem 2.5rem;
          text-align: center;
          max-width: 750px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.25rem;
        }
        .jury-placeholder-card h3 {
          font-size: 1.8rem;
          text-transform: uppercase;
        }
        .jury-placeholder-card p {
          font-size: 1rem;
          line-height: 1.6;
        }

        /* Nominate Banner */
        .speakers-nominate-banner {
          background: rgba(14, 9, 24, 0.7);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          padding: 2.5rem 3rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 2rem;
          flex-wrap: wrap;
        }
        .speakers-nominate-banner h3 {
          font-size: 1.5rem;
          text-transform: uppercase;
          margin-bottom: 0.35rem;
        }
        @media (max-width: 600px) {
          .speakers-nominate-banner {
            padding: 1.75rem 1.25rem;
            flex-direction: column;
            align-items: stretch;
            text-align: left;
            gap: 1.25rem;
          }
          .speakers-nominate-banner .btn {
            white-space: normal;
            text-align: center;
            justify-content: center;
            width: 100%;
            font-size: 0.82rem;
            padding: 0.85rem 1rem;
          }
          .jury-placeholder-card {
            padding: 2rem 1.25rem;
          }
        }
      `}</style>
    </div>
  );
}
