import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ArrowLeft, ArrowRight, Clock, Users, Shield, Cpu, Terminal, 
  Lightbulb, Coins, CheckCircle2, AlertTriangle, Key, Layers, Award,
  Sparkles, ExternalLink
} from 'lucide-react';
import TechAtmosphere from '../components/TechAtmosphere';
import { eventsData } from '../data/events';

export default function EventDetails({ onOpenRegister }) {
  const { id } = useParams();
  const event = eventsData.find(e => e.id === id);

  if (!event) {
    return <Navigate to="/events" replace />;
  }

  // Active operation step for Build.Break.Defend
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="event-detail-root">
      <TechAtmosphere />

      {/* Top Breadcrumb & Hero */}
      <section className="detail-hero-section">
        <div className="container">
          <Link to="/events" className="back-link">
            <ArrowLeft size={16} />
            <span>BACK TO ALL EVENTS</span>
          </Link>

          <div className="detail-hero-grid">
            <div className="detail-hero-text">
              <div className="detail-eyebrow-row">
                <span className="event-detail-num">{event.number}</span>
                <span className="badge-tech">{event.badge}</span>
                <span className="detail-date-badge">{event.date}</span>
              </div>

              <h1 className="detail-title">{event.publicTitle || event.title}</h1>
              <p className="detail-sub">{event.subtitle}</p>

              <div className="detail-meta-chips">
                <div className="detail-chip">
                  <Users size={16} />
                  <span>{event.teamSize}</span>
                </div>
                <div className="detail-chip">
                  <Clock size={16} />
                  <span>{event.participants} Verified Seats</span>
                </div>
                <div className="detail-chip">
                  <Award size={16} />
                  <span>Official IEEE CS SBC Certificate & Trophies</span>
                </div>
              </div>

              <div className="detail-hero-actions">
                <button onClick={onOpenRegister} className="btn btn-primary">
                  <span>REGISTER FOR THIS TRACK</span>
                  <ArrowRight size={18} />
                </button>
                <Link to="/schedule" className="btn btn-secondary">
                  <span>VIEW TIMELINE</span>
                </Link>
              </div>
            </div>

            {/* Quick Spec Card */}
            <div className="detail-spec-card">
              <div className="spec-card-header">
                <span className="spec-card-badge">TRACK SPECIFICATIONS</span>
                <h3>OPERATIONAL SUMMARY</h3>
              </div>

              <div className="spec-item-list">
                <div className="spec-item">
                  <span className="s-label">DURATION & SCHEDULE</span>
                  <strong className="s-val">{event.duration}</strong>
                </div>
                <div className="spec-item">
                  <span className="s-label">DELEGATE ALLOCATION</span>
                  <strong className="s-val">{event.participants} Total Attendees</strong>
                </div>
                <div className="spec-item">
                  <span className="s-label">TEAM COMPOSITION</span>
                  <strong className="s-val">{event.teamSize}</strong>
                </div>
                <div className="spec-item">
                  <span className="s-label">VENUE ARENA</span>
                  <strong className="s-val">Sri Sai Ram Institute of Technology</strong>
                </div>
              </div>

              <div className="spec-card-footer">
                <button onClick={onOpenRegister} className="btn btn-purple" style={{ width: '100%' }}>
                  ENROLL IN ARENA
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="detail-main-section">
        <div className="container">
          {/* About The Event */}
          <div className="detail-section-block">
            <span className="section-eyebrow">OVERVIEW & ARCHITECTURE</span>
            <h2 className="detail-block-heading">ABOUT THE COMPETITION</h2>
            <div className="detail-prose">
              {event.fullDescription.split('\n\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* Event Highlights */}
            {event.highlights && (
              <div className="detail-highlights-box">
                <h4 className="highlights-title">KEY ENGINEERING HIGHLIGHTS</h4>
                <div className="highlights-grid">
                  {event.highlights.map((item, i) => (
                    <div key={i} className="highlight-item">
                      <CheckCircle2 size={16} color="var(--purple-light)" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* ============================================================
              CUSTOM VISUAL INTERACTION: EVENT 01 BUILD.BREAK.DEFEND WORKFLOW
          ============================================================ */}
          {event.id === 'build-break-defend' && event.workflow && (
            <div className="detail-section-block workflow-block">
              <span className="section-eyebrow">24-HOUR LIFECYCLE PIPELINE</span>
              <h2 className="detail-block-heading">THE 8-STAGE OPERATIONS WORKFLOW</h2>
              <p className="detail-block-sub">
                Build.Break.Defend executes through eight phased engineering operations. Click any operation stage to inspect its operational focus.
              </p>

              {/* Interactive Timeline Tabs */}
              <div className="workflow-timeline-nav">
                {event.workflow.map((op, idx) => (
                  <button
                    key={op.code}
                    onClick={() => setActiveStep(idx)}
                    className={`timeline-step-btn ${activeStep === idx ? 'step-active' : ''}`}
                  >
                    <span className="step-num">{op.step}</span>
                    <span className="step-code">{op.code}</span>
                  </button>
                ))}
              </div>

              {/* Active Step Display Card */}
              <div className="active-operation-card">
                <div className="op-card-top">
                  <div className="op-badge-wrap">
                    <span className="badge-tech">{event.workflow[activeStep].code}</span>
                    <span className="op-phase-num">STAGE {event.workflow[activeStep].step} OF 08</span>
                  </div>
                  <Terminal size={24} color="var(--purple-light)" />
                </div>

                <h3 className="op-title">{event.workflow[activeStep].title}</h3>
                <p className="op-desc">{event.workflow[activeStep].desc}</p>

                <div className="op-card-context">
                  <AlertTriangle size={16} color="var(--purple-light)" />
                  <span>Real-time constraint injections and mentor reviews govern this operation.</span>
                </div>
              </div>

              {/* Skills Tested */}
              <div className="skills-tested-card">
                <h4 className="skills-heading">WHAT YOU WILL TEST</h4>
                <div className="skills-tags-wrap">
                  {event.skillsTested.map((s, idx) => (
                    <div key={idx} className="skill-pill">
                      <span className="pill-dot"></span>
                      <span>{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ============================================================
              CUSTOM VISUAL INTERACTION: EVENT 02 CIPHERX INVESTIGATION
          ============================================================ */}
          {event.id === 'cipherx' && (
            <div className="detail-section-block cipherx-block">
              <span className="section-eyebrow">HYBRID ARENA MECHANICS</span>
              <h2 className="detail-block-heading">THE SHERLOCK & SYNTAX ENGINE</h2>
              <p className="detail-block-sub">
                CipherX forces teams to maintain dual fronts: cracking algorithmic programming challenges while concurrently performing cyber incident forensics.
              </p>

              {/* Mechanism Flowchart */}
              <div className="mechanism-flow">
                <div className="mech-node">
                  <Terminal size={22} color="var(--purple-light)" />
                  <strong>PROGRAMMING</strong>
                  <span>Algorithmic Modules</span>
                </div>
                <div className="mech-connector">+</div>
                <div className="mech-node">
                  <Shield size={22} color="var(--purple-light)" />
                  <strong>CYBER INVESTIGATION</strong>
                  <span>Forensic Incidents</span>
                </div>
                <div className="mech-connector">↓</div>
                <div className="mech-node mech-highlight">
                  <Key size={22} color="#FFFFFF" />
                  <strong>INTEL TOKENS</strong>
                  <span>Tactical Currency</span>
                </div>
                <div className="mech-connector">↓</div>
                <div className="mech-node">
                  <Sparkles size={22} color="var(--purple-light)" />
                  <strong>CRUCIAL HINTS</strong>
                  <span>Unblock Mission</span>
                </div>
              </div>

              {/* Investigation Artifacts */}
              <div className="investigation-evidence-card">
                <h4 className="evidence-title">SIMULATED DIGITAL EVIDENCE ARTIFACTS</h4>
                <p className="evidence-desc">{event.investigationDetails}</p>
                <div className="evidence-grid">
                  <div className="artifact-chip">SERVER LOGS</div>
                  <div className="artifact-chip">EXFILTRATED EMAILS</div>
                  <div className="artifact-chip">BROWSER HISTORY</div>
                  <div className="artifact-chip">SCREENSHOT EXCERPTS</div>
                  <div className="artifact-chip">PCAP NETWORK DUMPS</div>
                </div>
              </div>
            </div>
          )}

          {/* ============================================================
              CUSTOM VISUAL INTERACTION: EVENT 03 EDGE AI & TINYML
          ============================================================ */}
          {event.id === 'edge-ai-tinyml' && (
            <div className="detail-section-block edgeai-block">
              <span className="section-eyebrow">INTELLIGENCE AT THE BOUNDARY</span>
              <h2 className="detail-block-heading">THE EMBEDDED AI PIPELINE</h2>
              <p className="detail-block-sub">
                Discover the progression from resource-heavy cloud models to milliwatt neural inferences running on microcontrollers.
              </p>

              {/* Node Progression Diagram */}
              <div className="tinyml-nodes-flow">
                {event.workflowNodes.map((node, i) => (
                  <div key={node.step} className="tiny-node-item">
                    <span className="tiny-step">{node.step}</span>
                    <strong className="tiny-label">{node.label}</strong>
                    <span className="tiny-sub">{node.desc}</span>
                    {i < event.workflowNodes.length - 1 && (
                      <div className="tiny-arrow">→</div>
                    )}
                  </div>
                ))}
              </div>

              {/* Topics Grid */}
              <div className="topics-section-box">
                <h4 className="topics-heading">WORKSHOP CURRICULUM & MODULES</h4>
                <div className="topics-list">
                  {event.topics.map((t, idx) => (
                    <div key={idx} className="topic-card">
                      <span className="topic-index">MODULE 0{idx + 1}</span>
                      <p>{t}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Target Audience & Expected Outcomes */}
              <div className="audience-outcome-grid">
                <div className="audience-card">
                  <h4>TARGET PARTICIPANTS</h4>
                  <p>{event.targetAudience}</p>
                </div>
                <div className="audience-card">
                  <h4>EXPECTED OUTCOME</h4>
                  <p>{event.expectedOutcome}</p>
                </div>
              </div>
            </div>
          )}

          {/* ============================================================
              CUSTOM VISUAL INTERACTION: EVENT 04 IDEA ALCHEMY
          ============================================================ */}
          {event.id === 'idea-alchemy' && (
            <div className="detail-section-block alchemy-block">
              <span className="section-eyebrow">DYNAMIC ENTREPRENEURIAL SPRINT</span>
              <h2 className="detail-block-heading">ROUND ARCHITECTURE & PIVOT CHALLENGE</h2>
              <p className="detail-block-sub">
                Teams conceptualize breakthrough startups under random matrix combinations and must withstand severe unexpected business constraints.
              </p>

              {/* Rounds */}
              <div className="rounds-grid">
                {event.rounds.map((rnd) => (
                  <div key={rnd.round} className="round-card">
                    <span className="round-pill">{rnd.round}</span>
                    <h3 className="round-title">{rnd.title}</h3>
                    <p className="round-desc">{rnd.desc}</p>
                  </div>
                ))}
              </div>

              {/* Matrix Combinations */}
              <div className="alchemy-matrix-box">
                <h4>THE GENERATIVE MATRIX (ROUND 1 SPRINT)</h4>
                <div className="matrix-columns">
                  <div className="matrix-col">
                    <span className="col-label">TARGET USERS</span>
                    {event.combinations.targetUsers.map(u => (
                      <div key={u} className="matrix-tag">{u}</div>
                    ))}
                  </div>
                  <div className="matrix-col">
                    <span className="col-label">TECH DOMAINS</span>
                    {event.combinations.techDomains.map(d => (
                      <div key={d} className="matrix-tag">{d}</div>
                    ))}
                  </div>
                  <div className="matrix-col">
                    <span className="col-label">PRODUCTS / SERVICES</span>
                    {event.combinations.productsServices.map(p => (
                      <div key={p} className="matrix-tag">{p}</div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Evaluation Criteria Weights */}
              <div className="criteria-weights-card">
                <h4>EVALUATION CRITERIA WEIGHTS</h4>
                <div className="criteria-bars-grid">
                  {event.criteria.map((c) => (
                    <div key={c.label} className="crit-item">
                      <div className="crit-top">
                        <span className="crit-name">{c.label}</span>
                        <span className="crit-pct">{c.percentage}%</span>
                      </div>
                      <div className="crit-track">
                        <div className="crit-fill" style={{ width: `${c.percentage}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ============================================================
              CUSTOM VISUAL INTERACTION: EVENT 05 CODENOMICS
          ============================================================ */}
          {event.id === 'codenomics' && (
            <div className="detail-section-block codenomics-block">
              <span className="section-eyebrow">GAMIFIED ALGORITHMIC ECONOMY</span>
              <h2 className="detail-block-heading">CODE. STRATEGY. TECHCOINS.</h2>
              <p className="detail-block-sub">
                A high-pressure competitive programming showdown where algorithmic solutions generate TechCoins that can be strategically reinvested to purchase tactical advantages.
              </p>

              <div className="techcoins-concept-card">
                <div className="coins-badge-row">
                  <Coins size={36} color="var(--purple-light)" />
                  <div>
                    <h3>THE TECHCOIN RESOURCE PARADIGM</h3>
                    <p>Balance algorithmic execution velocity with capital allocation strategy.</p>
                  </div>
                </div>

                <div className="coins-features-grid">
                  <div className="c-feature">
                    <strong>EARN TECHCOINS</strong>
                    <p>Solve sub-challenges, pass initial test-cases, and crack computational puzzles to accumulate currency.</p>
                  </div>
                  <div className="c-feature">
                    <strong>BID FOR ADVANTAGES</strong>
                    <p>Strategically spend coins to purchase hint modules, priority judge reviews, and runtime tooling.</p>
                  </div>
                  <div className="c-feature">
                    <strong>ECONOMIC SCORING</strong>
                    <p>Final rankings combine raw computational precision with net TechCoin efficiency.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ============================================================
              CUSTOM VISUAL INTERACTION: EVENT 06 NANO MENTORING
          ============================================================ */}
          {event.id === 'nano-mentoring' && (
            <div className="detail-section-block mentoring-block">
              <span className="section-eyebrow">HIGH-IMPACT INTERACTIONS</span>
              <h2 className="detail-block-heading">INDUSTRY MENTORS & SESSIONS</h2>
              <p className="detail-block-sub">
                Participants connect directly with 6 distinguished industry mentors and judges across focused technical and career tracks.
              </p>

              {/* Mentor Placeholders Grid */}
              <div className="mentors-grid">
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <div key={num} className="mentor-placeholder-card">
                    <div className="mentor-avatar-box">
                      <span className="mentor-tag">MENTOR 0{num}</span>
                    </div>
                    <h4>Industry Mentor 0{num}</h4>
                    <span className="mentor-status">Profile details to be announced</span>
                  </div>
                ))}
              </div>

              {/* Topics */}
              <div className="mentoring-topics-card">
                <h4>CORE DISCUSSION DOMAINS</h4>
                <div className="mentoring-topics-list">
                  {event.topics.map((t, idx) => (
                    <div key={idx} className="m-topic-item">
                      <CheckCircle2 size={16} color="var(--purple-light)" />
                      <span>{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ============================================================
              CUSTOM VISUAL INTERACTION: EVENT 07 IEEE CS BENEFITS
          ============================================================ */}
          {event.id === 'ieee-cs-benefits' && (
            <div className="detail-section-block ieee-benefits-block">
              <span className="section-eyebrow">GLOBAL PROFESSIONAL NETWORK</span>
              <h2 className="detail-block-heading">UNLOCKING IEEE CS OPPORTUNITIES</h2>
              <p className="detail-block-sub">
                Discover the immense global benefits offered through active membership in the IEEE Computer Society.
              </p>

              <div className="benefits-cards-grid">
                {event.topics.map((t, idx) => (
                  <div key={idx} className="benefit-card">
                    <span className="benefit-num">0{idx + 1}</span>
                    <h4>{t}</h4>
                    <p>Exclusive access to premier IEEE computing repositories, conferences, and student development grants.</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Bottom Enrolment CTA */}
          <div className="detail-bottom-enroll">
            <div className="enroll-content">
              <h3>READY TO COMPETE IN {event.title}?</h3>
              <p>14th & 15th October 2026 • Sri Sai Ram Institute of Technology</p>
            </div>
            <button onClick={onOpenRegister} className="btn btn-primary">
              <span>REGISTER FOR TECHX'26</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      <style>{`
        .event-detail-root {
          padding-top: var(--nav-height);
          background: #000000;
          min-height: 100vh;
        }
        .detail-hero-section {
          padding: 3.5rem 0 4.5rem;
          border-bottom: 1px solid var(--border-subtle);
          position: relative;
        }
        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-mono);
          font-size: 0.8rem;
          letter-spacing: 0.1em;
          color: var(--muted);
          margin-bottom: 2rem;
          transition: var(--transition-fast);
        }
        .back-link:hover {
          color: var(--purple-light);
          transform: translateX(-4px);
        }
        .detail-hero-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 3.5rem;
          align-items: flex-start;
        }
        @media (max-width: 1024px) {
          .detail-hero-grid {
            grid-template-columns: 1fr;
          }
        }
        .detail-eyebrow-row {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
          flex-wrap: wrap;
        }
        .event-detail-num {
          font-family: var(--font-display);
          font-size: 2.2rem;
          line-height: 1;
          color: var(--purple-light);
        }
        .detail-date-badge {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--muted);
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-subtle);
          padding: 0.35rem 0.75rem;
          border-radius: var(--radius-sm);
        }
        .detail-title {
          font-family: var(--font-display);
          font-size: clamp(2.1rem, 5.5vw, 4.5rem);
          line-height: 1;
          letter-spacing: 0.03em;
          text-transform: uppercase;
          margin-bottom: 0.5rem;
          word-break: break-word;
          overflow-wrap: break-word;
        }
        .detail-sub {
          font-family: var(--font-heading);
          font-size: 1.2rem;
          color: var(--purple-light);
          font-weight: 600;
          margin-bottom: 2rem;
          word-break: break-word;
        }
        .detail-meta-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 0.85rem;
          margin-bottom: 2.5rem;
          max-width: 100%;
        }
        .detail-chip {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(14, 9, 24, 0.7);
          border: 1px solid var(--border);
          padding: 0.55rem 1rem;
          border-radius: var(--radius-sm);
          font-size: 0.85rem;
          font-family: var(--font-mono);
          color: var(--off-white);
          max-width: 100%;
        }
        .detail-chip span {
          word-break: break-word;
        }
        .detail-hero-actions {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          flex-wrap: wrap;
          max-width: 100%;
        }
        @media (max-width: 480px) {
          .detail-chip {
            font-size: 0.75rem;
            padding: 0.45rem 0.75rem;
          }
          .detail-hero-actions {
            flex-direction: column;
            align-items: stretch;
            width: 100%;
          }
          .detail-hero-actions .btn {
            width: 100%;
            justify-content: center;
            white-space: normal;
            text-align: center;
            padding: 0.85rem 1rem;
            font-size: 0.82rem;
          }
        }

        /* Spec Card */
        .detail-spec-card {
          background: #0B0714;
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          padding: 2.25rem;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.5);
          max-width: 100%;
        }
        @media (max-width: 600px) {
          .detail-spec-card {
            padding: 1.5rem 1.15rem;
          }
        }
        .spec-card-header {
          margin-bottom: 1.5rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          padding-bottom: 1rem;
        }
        .spec-card-badge {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          letter-spacing: 0.12em;
          color: var(--purple-light);
        }
        .spec-card-header h3 {
          font-size: 1.35rem;
          text-transform: uppercase;
          margin-top: 0.25rem;
        }
        .spec-item-list {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          margin-bottom: 2rem;
        }
        .spec-item {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }
        .s-label {
          font-family: var(--font-mono);
          font-size: 0.68rem;
          letter-spacing: 0.1em;
          color: var(--muted-dark);
        }
        .s-val {
          font-size: 0.95rem;
          color: var(--white);
        }

        /* Detail Blocks */
        .detail-main-section {
          padding: 5rem 0;
        }
        .detail-section-block {
          background: #0A0612;
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          padding: 3rem;
          margin-bottom: 3.5rem;
          max-width: 100%;
          overflow: hidden;
          box-sizing: border-box;
        }
        @media (max-width: 768px) {
          .detail-section-block {
            padding: 2rem 1.25rem;
          }
        }
        @media (max-width: 600px) {
          .detail-section-block {
            padding: 1.5rem 1rem;
          }
        }
        .detail-block-heading {
          font-size: clamp(2rem, 3.5vw, 2.75rem);
          text-transform: uppercase;
          margin-bottom: 1rem;
        }
        .detail-block-sub {
          font-size: 1.05rem;
          color: var(--muted);
          max-width: 760px;
          margin-bottom: 2.5rem;
        }
        .detail-prose p {
          font-size: 1.05rem;
          line-height: 1.75;
          margin-bottom: 1.5rem;
          color: #D4CFD8;
        }
        .detail-highlights-box {
          margin-top: 2.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          padding-top: 2rem;
        }
        .highlights-title {
          font-family: var(--font-mono);
          font-size: 0.82rem;
          letter-spacing: 0.12em;
          color: var(--purple-light);
          margin-bottom: 1.25rem;
          text-transform: uppercase;
        }
        .highlights-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }
        @media (max-width: 768px) {
          .highlights-grid {
            grid-template-columns: 1fr;
          }
        }
        .highlight-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          font-size: 0.95rem;
          color: var(--off-white);
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-subtle);
          padding: 0.85rem 1rem;
          border-radius: var(--radius-sm);
        }

        /* Workflow Timeline */
        .workflow-timeline-nav {
          display: flex;
          gap: 0.5rem;
          overflow-x: auto;
          padding-bottom: 1rem;
          margin-bottom: 2rem;
          scrollbar-width: thin;
        }
        .timeline-step-btn {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 0.85rem 1.25rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          min-width: 170px;
          text-align: left;
          transition: var(--transition-fast);
        }
        .timeline-step-btn:hover {
          border-color: var(--purple-light);
          background: rgba(138, 43, 226, 0.1);
        }
        .step-active {
          background: var(--purple);
          border-color: var(--purple-light);
          box-shadow: 0 0 15px var(--purple-glow);
        }
        .step-num {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          opacity: 0.7;
        }
        .step-code {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 0.85rem;
          color: var(--white);
          margin-top: 0.25rem;
        }
        .active-operation-card {
          background: #0E0918;
          border: 1px solid var(--border-strong);
          border-radius: var(--radius-md);
          padding: 2.25rem;
          margin-bottom: 2.5rem;
        }
        .op-card-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }
        .op-badge-wrap {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .op-phase-num {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--muted);
        }
        .op-title {
          font-size: 1.8rem;
          margin-bottom: 0.5rem;
          color: var(--white);
        }
        .op-desc {
          font-size: 1.05rem;
          color: var(--muted);
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }
        .op-card-context {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          font-size: 0.85rem;
          color: var(--purple-light);
          background: rgba(138, 43, 226, 0.1);
          padding: 0.75rem 1rem;
          border-radius: var(--radius-sm);
        }
        .skills-tested-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          padding: 1.75rem;
        }
        .skills-heading {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          letter-spacing: 0.12em;
          color: var(--purple-light);
          margin-bottom: 1rem;
        }
        .skills-tags-wrap {
          display: flex;
          flex-wrap: wrap;
          gap: 0.65rem;
        }
        .skill-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.4rem 0.85rem;
          background: rgba(138, 43, 226, 0.1);
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          font-size: 0.82rem;
          color: var(--white);
        }
        .pill-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--purple-light);
        }

        /* CipherX Mechanism */
        .mechanism-flow {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(14, 9, 24, 0.6);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          padding: 2rem;
          margin-bottom: 2.5rem;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .mech-node {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 0.35rem;
          padding: 1.25rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          min-width: 140px;
          flex: 1;
        }
        .mech-node strong {
          font-size: 0.95rem;
          color: var(--white);
        }
        .mech-node span {
          font-size: 0.78rem;
          color: var(--muted);
          font-family: var(--font-mono);
        }
        .mech-highlight {
          background: var(--purple);
          border-color: var(--purple-light);
          box-shadow: 0 0 20px var(--purple-glow);
        }
        .mech-highlight span {
          color: rgba(255, 255, 255, 0.8);
        }
        .mech-connector {
          font-family: var(--font-display);
          font-size: 1.8rem;
          color: var(--purple-light);
        }
        .investigation-evidence-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          padding: 2rem;
        }
        .evidence-title {
          font-family: var(--font-mono);
          font-size: 0.85rem;
          letter-spacing: 0.12em;
          color: var(--purple-light);
          margin-bottom: 0.5rem;
        }
        .evidence-desc {
          font-size: 0.95rem;
          margin-bottom: 1.5rem;
        }
        .evidence-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }
        .artifact-chip {
          padding: 0.5rem 1rem;
          background: rgba(0, 0, 0, 0.4);
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          font-family: var(--font-mono);
          font-size: 0.78rem;
          color: var(--white);
        }

        /* Edge AI TinyML */
        .tinyml-nodes-flow {
          display: flex;
          align-items: stretch;
          gap: 1rem;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }
        .tiny-node-item {
          display: flex;
          flex-direction: column;
          padding: 1.25rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          flex: 1;
          min-width: 170px;
          position: relative;
        }
        .tiny-step {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--purple-light);
        }
        .tiny-label {
          font-size: 1.1rem;
          margin: 0.35rem 0;
          color: var(--white);
        }
        .tiny-sub {
          font-size: 0.75rem;
          color: var(--muted);
          line-height: 1.4;
        }
        .tiny-arrow {
          position: absolute;
          right: -12px;
          top: 40%;
          color: var(--purple-light);
          font-size: 1.2rem;
          z-index: 2;
        }
        @media (max-width: 700px) {
          .tinyml-nodes-flow {
            flex-direction: column;
          }
          .tiny-node-item {
            width: 100%;
            min-width: 0;
          }
          .tiny-arrow {
            display: none;
          }
        }
        .topics-section-box {
          margin-bottom: 3rem;
        }
        .topics-heading {
          font-family: var(--font-mono);
          font-size: 0.85rem;
          letter-spacing: 0.12em;
          color: var(--purple-light);
          margin-bottom: 1.25rem;
        }
        .topics-list {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }
        @media (max-width: 768px) {
          .topics-list {
            grid-template-columns: 1fr;
          }
        }
        .topic-card {
          padding: 1.25rem;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
        }
        .topic-index {
          display: block;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--purple-light);
          margin-bottom: 0.35rem;
        }
        .topic-card p {
          font-size: 0.95rem;
          color: var(--off-white);
        }
        .audience-outcome-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }
        @media (max-width: 768px) {
          .audience-outcome-grid {
            grid-template-columns: 1fr;
          }
        }
        .audience-card {
          padding: 1.75rem;
          background: rgba(138, 43, 226, 0.06);
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
        }
        .audience-card h4 {
          font-family: var(--font-mono);
          font-size: 0.82rem;
          letter-spacing: 0.12em;
          color: var(--purple-light);
          margin-bottom: 0.75rem;
        }
        .audience-card p {
          font-size: 0.92rem;
          line-height: 1.6;
        }

        /* Idea Alchemy */
        .rounds-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          margin-bottom: 2.5rem;
        }
        @media (max-width: 768px) {
          .rounds-grid {
            grid-template-columns: 1fr;
          }
        }
        .round-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          padding: 2rem;
        }
        .round-pill {
          display: inline-block;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--purple-light);
          margin-bottom: 0.75rem;
        }
        .round-title {
          font-size: 1.4rem;
          margin-bottom: 0.75rem;
        }
        .round-desc {
          font-size: 0.92rem;
          line-height: 1.6;
        }
        .alchemy-matrix-box {
          background: #0D0816;
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          padding: 2rem;
          margin-bottom: 2.5rem;
        }
        .alchemy-matrix-box h4 {
          font-family: var(--font-mono);
          font-size: 0.85rem;
          letter-spacing: 0.12em;
          color: var(--purple-light);
          margin-bottom: 1.5rem;
        }
        .matrix-columns {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }
        @media (max-width: 768px) {
          .matrix-columns {
            grid-template-columns: 1fr;
          }
        }
        .matrix-col {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .col-label {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--muted-dark);
          margin-bottom: 0.25rem;
        }
        .matrix-tag {
          padding: 0.6rem 0.85rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          font-size: 0.88rem;
        }
        .criteria-weights-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          padding: 2rem;
        }
        .criteria-weights-card h4 {
          font-family: var(--font-mono);
          font-size: 0.85rem;
          letter-spacing: 0.12em;
          color: var(--purple-light);
          margin-bottom: 1.5rem;
        }
        .criteria-bars-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }
        @media (max-width: 768px) {
          .criteria-bars-grid {
            grid-template-columns: 1fr;
          }
        }
        .crit-top {
          display: flex;
          justify-content: space-between;
          font-size: 0.85rem;
          margin-bottom: 0.4rem;
        }
        .crit-name {
          color: var(--white);
        }
        .crit-pct {
          font-family: var(--font-mono);
          color: var(--purple-light);
        }
        .crit-track {
          height: 6px;
          background: rgba(255, 255, 255, 0.08);
          border-radius: 3px;
          overflow: hidden;
        }
        .crit-fill {
          height: 100%;
          background: linear-gradient(90deg, #8A2BE2, #B86CFF);
        }

        /* CodeNomics */
        .techcoins-concept-card {
          background: rgba(14, 9, 24, 0.7);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          padding: 2.5rem;
        }
        .coins-badge-row {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin-bottom: 2rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          padding-bottom: 1.5rem;
        }
        .coins-badge-row h3 {
          font-size: 1.4rem;
        }
        .coins-features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }
        @media (max-width: 768px) {
          .coins-features-grid {
            grid-template-columns: 1fr;
          }
        }
        .c-feature strong {
          display: block;
          font-family: var(--font-mono);
          font-size: 0.85rem;
          color: var(--purple-light);
          margin-bottom: 0.5rem;
        }
        .c-feature p {
          font-size: 0.9rem;
          line-height: 1.5;
        }

        /* Mentors Grid */
        .mentors-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          margin-bottom: 2.5rem;
        }
        @media (max-width: 768px) {
          .mentors-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 480px) {
          .mentors-grid {
            grid-template-columns: 1fr;
          }
        }
        .mentor-placeholder-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          padding: 1.75rem;
          text-align: center;
        }
        .mentor-avatar-box {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          background: rgba(138, 43, 226, 0.15);
          border: 1px dashed var(--border);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.25rem;
        }
        .mentor-tag {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          color: var(--purple-light);
        }
        .mentor-placeholder-card h4 {
          font-size: 1.05rem;
          margin-bottom: 0.25rem;
        }
        .mentor-status {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--muted-dark);
        }
        .mentoring-topics-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          padding: 2rem;
        }
        .mentoring-topics-card h4 {
          font-family: var(--font-mono);
          font-size: 0.85rem;
          letter-spacing: 0.12em;
          color: var(--purple-light);
          margin-bottom: 1.25rem;
        }
        .mentoring-topics-list {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }
        @media (max-width: 768px) {
          .mentoring-topics-list {
            grid-template-columns: 1fr;
          }
        }
        .m-topic-item {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          font-size: 0.92rem;
          color: var(--off-white);
        }

        /* IEEE Benefits */
        .benefits-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }
        @media (max-width: 1024px) {
          .benefits-cards-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 640px) {
          .benefits-cards-grid {
            grid-template-columns: 1fr;
          }
        }
        .benefit-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          padding: 1.75rem;
          transition: var(--transition-fast);
        }
        .benefit-card:hover {
          border-color: var(--purple-light);
          transform: translateY(-3px);
        }
        .benefit-num {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--purple-light);
          display: block;
          margin-bottom: 0.75rem;
        }
        .benefit-card h4 {
          font-size: 1.1rem;
          margin-bottom: 0.5rem;
          color: var(--white);
        }
        .benefit-card p {
          font-size: 0.85rem;
          line-height: 1.5;
        }

        /* Bottom Enrollment */
        .detail-bottom-enroll {
          background: #0E0918;
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          padding: 2.5rem 3rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 2rem;
          flex-wrap: wrap;
          max-width: 100%;
          box-sizing: border-box;
        }
        @media (max-width: 600px) {
          .detail-bottom-enroll {
            padding: 1.75rem 1.15rem;
            flex-direction: column;
            align-items: stretch;
            text-align: left;
            gap: 1.25rem;
          }
          .detail-bottom-enroll .btn {
            width: 100%;
            justify-content: center;
          }
        }
        .enroll-content {
          max-width: 100%;
          min-width: 0;
        }
        .enroll-content h3 {
          font-size: clamp(1.2rem, 3.5vw, 1.6rem);
          text-transform: uppercase;
          margin-bottom: 0.35rem;
          word-break: break-word;
          overflow-wrap: break-word;
        }
        .enroll-content p {
          font-size: clamp(0.75rem, 2vw, 0.95rem);
          color: var(--purple-light);
          font-family: var(--font-mono);
          word-break: break-word;
          overflow-wrap: break-word;
        }
      `}</style>
    </div>
  );
}
