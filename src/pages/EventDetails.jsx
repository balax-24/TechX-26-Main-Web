import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ArrowLeft, ArrowRight, Clock, Users, Shield, Cpu, Terminal, 
  Lightbulb, Coins, CheckCircle2, AlertTriangle, Key, Layers, Award,
  Sparkles, ExternalLink, HelpCircle, Flame, Target, Trophy, Lock
} from 'lucide-react';
import TechAtmosphere from '../components/TechAtmosphere';
import { eventsData } from '../data/events';

export default function EventDetails({ onOpenRegister }) {
  const { id } = useParams();

  // Backward compatibility alias redirects
  if (id === 'build-break-defend') {
    return <Navigate to="/events/verdictx" replace />;
  }
  if (id === 'cipherx') {
    return <Navigate to="/events/sherlock-syntax" replace />;
  }

  const event = eventsData.find(e => e.id === id);

  if (!event) {
    return <Navigate to="/events" replace />;
  }

  // Active round tab for VerdictX
  const [activeRoundTab, setActiveRoundTab] = useState(0);

  // Active platform tab for CodeNomics
  const [activePlatformTab, setActivePlatformTab] = useState('portal');

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
                {event.venueRoom && (
                  <span className="detail-room-badge">{event.venueRoom}</span>
                )}
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
                  <span>{event.participantsLabel || `Up to ${event.participants} Participants`}</span>
                </div>
                <div className="detail-chip">
                  <Award size={16} />
                  <span>{event.maxTeams ? `${event.maxTeams} Max Teams` : 'Registered Delegates'}</span>
                </div>
              </div>

              <div className="detail-hero-actions">
                <button onClick={onOpenRegister} className="btn btn-primary">
                  <span>REGISTER FOR EVENT</span>
                  <ArrowRight size={18} />
                </button>
                <Link to="/schedule" className="btn btn-secondary">
                  <span>VIEW SCHEDULE</span>
                </Link>
              </div>
            </div>

            {/* Quick Spec Card */}
            <div className="detail-spec-card">
              <div className="spec-card-header">
                <span className="spec-card-badge">EVENT DETAILS</span>
                <h3>EVENT SPECIFICATIONS</h3>
              </div>

              <div className="spec-item-list">
                <div className="spec-item">
                  <span className="s-label">DURATION</span>
                  <strong className="s-val">{event.duration}</strong>
                </div>
                <div className="spec-item">
                  <span className="s-label">TEAM SIZE</span>
                  <strong className="s-val">{event.teamSize}</strong>
                </div>
                <div className="spec-item">
                  <span className="s-label">CAPACITY</span>
                  <strong className="s-val">{event.participantsLabel || `${event.participants} Participants`}</strong>
                </div>
                {event.maxTeams && (
                  <div className="spec-item">
                    <span className="s-label">MAX TEAMS</span>
                    <strong className="s-val">{event.maxTeams} Teams</strong>
                  </div>
                )}
                <div className="spec-item">
                  <span className="s-label">VENUE</span>
                  <strong className="s-val">{event.venueRoom || "Sri Sai Ram Institute of Technology"}</strong>
                </div>
                <div className="spec-item">
                  <span className="s-label">DATE</span>
                  <strong className="s-val">{event.date}</strong>
                </div>
              </div>

              <div className="spec-card-footer">
                <button onClick={onOpenRegister} className="btn btn-primary" style={{ width: '100%' }}>
                  REGISTER FOR {event.publicTitle || event.title}
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
            <span className="section-eyebrow">OVERVIEW & MECHANICS</span>
            <h2 className="detail-block-heading">ABOUT THE EVENT</h2>
            <div className="detail-prose">
              {event.fullDescription.split('\n\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* Event Highlights */}
            {event.highlights && (
              <div className="detail-highlights-box">
                <h4 className="highlights-title">KEY EVENT HIGHLIGHTS</h4>
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
              CUSTOM VISUAL: EVENT 01 VERDICTX: CODE & CONQUER (3 ROUNDS)
          ============================================================ */}
          {event.id === 'verdictx' && event.rounds && (
            <div className="detail-section-block verdictx-block">
              <span className="section-eyebrow">HACKATHON LIFECYCLE</span>
              <h2 className="detail-block-heading">THE THREE-ROUND STRUCTURE</h2>
              <p className="detail-block-sub">
                VerdictX: Code & Conquer spans 24 continuous hours across ideation, prototype development with dynamic constraints, and technical debate defense.
              </p>

              {/* Round Selection Tabs */}
              <div className="verdictx-tabs-nav">
                {event.rounds.map((rnd, idx) => (
                  <button
                    key={rnd.round}
                    onClick={() => setActiveRoundTab(idx)}
                    className={`v-tab-btn ${activeRoundTab === idx ? 'v-tab-active' : ''}`}
                  >
                    <span className="v-tab-pill">{rnd.round}</span>
                    <strong className="v-tab-title">{rnd.title}</strong>
                  </button>
                ))}
              </div>

              {/* Active Round Card */}
              <div className="verdictx-round-card">
                <div className="v-card-top">
                  <div className="v-round-meta">
                    <span className="badge-tech">{event.rounds[activeRoundTab].round}</span>
                    <span className="v-timing-chip">{event.rounds[activeRoundTab].timing}</span>
                  </div>
                  {activeRoundTab === 0 && <span className="v-pitch-badge">3 mins per team</span>}
                  {activeRoundTab === 2 && <span className="v-pitch-badge">5m Presentation + 7m Defense</span>}
                </div>

                <h3 className="v-card-heading">{event.rounds[activeRoundTab].title}</h3>
                <p className="v-card-desc">{event.rounds[activeRoundTab].desc}</p>

                {/* Round 1 Specifics */}
                {activeRoundTab === 0 && (
                  <div className="v-subsections-grid">
                    <div className="v-sub-col">
                      <h4>PRESENTATION SCOPE</h4>
                      <ul>
                        <li>Proposed Solution & Architecture</li>
                        <li>Key System Features</li>
                        <li>Technology Stack & APIs</li>
                        <li>Implementation Plan & Milestones</li>
                        <li>Expected Real-World Impact</li>
                      </ul>
                    </div>
                    <div className="v-sub-col">
                      <h4>EVALUATION RUBRIC</h4>
                      <div className="rubric-pills-wrap">
                        {event.rounds[0].evaluation.map((crit, i) => (
                          <div key={i} className="rubric-pill">
                            <CheckCircle2 size={14} color="var(--purple-light)" />
                            <span>{crit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Round 2 Specifics */}
                {activeRoundTab === 1 && (
                  <div className="v-subsections-grid">
                    <div className="v-sub-col">
                      <h4>DYNAMIC CONSTRAINT INJECTIONS</h4>
                      <p className="v-sub-note">During prototype review (9:00 PM – 11:00 PM), judges introduce two unexpected constraints:</p>
                      <ul>
                        <li>Add offline functionality with local persistence</li>
                        <li>Improve accessibility for differently-abled users</li>
                        <li>Scale the solution architecture for one million users</li>
                      </ul>
                    </div>
                    <div className="v-sub-col">
                      <h4>EVALUATION RUBRIC</h4>
                      <div className="rubric-pills-wrap">
                        {event.rounds[1].evaluation.map((crit, i) => (
                          <div key={i} className="rubric-pill">
                            <CheckCircle2 size={14} color="var(--purple-light)" />
                            <span>{crit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Round 3 Specifics */}
                {activeRoundTab === 2 && (
                  <div className="v-subsections-grid">
                    <div className="v-sub-col">
                      <h4>SUBMISSION & PEER REVIEW</h4>
                      <p className="v-sub-note">Submission Window (3:30 AM – 4:30 AM) & Peer Review (4:30 AM – 5:00 AM):</p>
                      <div className="submission-items-list">
                        {event.rounds[2].submissionRequirements.map((sub, i) => (
                          <div key={i} className="sub-item-badge">
                            <Layers size={13} />
                            <span>{sub}</span>
                          </div>
                        ))}
                      </div>
                      <div className="peer-review-topics">
                        <strong>Peer Review Areas:</strong>
                        <span>Strengths, Weaknesses, Bugs, Security Issues, UI/UX, Scalability, Performance, Suggestions.</span>
                      </div>
                    </div>
                    <div className="v-sub-col">
                      <h4>DEFENSE & DEBATE EVALUATION</h4>
                      <div className="rubric-pills-wrap">
                        {event.rounds[2].evaluation.map((crit, i) => (
                          <div key={i} className="rubric-pill">
                            <CheckCircle2 size={14} color="var(--purple-light)" />
                            <span>{crit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Cumulative Scoring & General Rules Cards */}
              <div className="verdictx-bottom-grid">
                <div className="v-bottom-card">
                  <h4 className="v-card-subhead">
                    <Trophy size={18} color="var(--purple-light)" />
                    <span>CUMULATIVE SCORING MODEL</span>
                  </h4>
                  <p className="v-sub-note">Final rankings represent cumulative performance across all five evaluation gates:</p>
                  <div className="cumulative-gates-list">
                    {event.scoringCumulative.map((gate, idx) => (
                      <div key={idx} className="gate-row">
                        <span className="gate-num">0{idx + 1}</span>
                        <span className="gate-title">{gate}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="v-bottom-card">
                  <h4 className="v-card-subhead">
                    <Shield size={18} color="var(--purple-light)" />
                    <span>GENERAL RULES & FAIR PLAY</span>
                  </h4>
                  <ul className="v-rules-list">
                    {event.generalRules.map((rule, idx) => (
                      <li key={idx}>
                        <CheckCircle2 size={15} color="var(--purple-light)" />
                        <span>{rule}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* ============================================================
              CUSTOM VISUAL: EVENT 02 SHERLOCK & SYNTAX (CYBERSECURITY CTF)
          ============================================================ */}
          {event.id === 'sherlock-syntax' && (
            <div className="detail-section-block ctf-block">
              <span className="section-eyebrow">CTF FORMAT & CATEGORIES</span>
              <h2 className="detail-block-heading">CHALLENGE CATEGORIES & SCORING MATRIX</h2>
              <p className="detail-block-sub">
                A standard skill-based cybersecurity Capture The Flag competition. Thirty teams of three compete over 2.5 hours in Alpha Hall.
              </p>

              {/* Challenge Categories Grid */}
              <div className="ctf-categories-grid">
                {event.categories.map((cat, idx) => (
                  <div key={idx} className="ctf-cat-card">
                    <Shield size={20} color="var(--purple-light)" />
                    <span className="ctf-cat-name">{cat}</span>
                  </div>
                ))}
              </div>

              {/* Difficulty & Points Matrix */}
              <div className="ctf-matrix-section">
                <h4 className="matrix-heading">CHALLENGE DISTRIBUTION & POINTS WEIGHTAGE</h4>
                <div className="ctf-tier-grid">
                  {event.challengeDistribution.map((tier) => (
                    <div key={tier.tier} className="tier-card">
                      <span className="tier-badge">{tier.tier}</span>
                      <strong className="tier-pts">{tier.points} PTS</strong>
                      <span className="tier-count">{tier.count}</span>
                    </div>
                  ))}
                </div>
                <div className="tier-note">
                  <span>Approximate scope: 15–20 Challenges. Scoring is fully automated through the dedicated CTF platform (e.g., CTFd).</span>
                </div>
              </div>

              {/* CTF Live Schedule Flow */}
              <div className="ctf-timeline-card">
                <h4 className="ctf-schedule-head">EVENT TIMELINE (DAY 2 // ALPHA HALL)</h4>
                <div className="ctf-flow-steps">
                  {event.eventFlow.map((step, idx) => (
                    <div key={idx} className="ctf-step-row">
                      <span className="ctf-step-time">{step.time}</span>
                      <div className="ctf-step-content">
                        <strong>{step.title}</strong>
                        <p>{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tie-Break and Rules Cards */}
              <div className="ctf-bottom-grid">
                <div className="ctf-bottom-card">
                  <h4>AUTOMATED SCORING & TIE-BREAK</h4>
                  <div className="tie-break-box">
                    <Target size={20} color="var(--purple-light)" />
                    <p>{event.tieBreakRule}</p>
                  </div>
                  <p className="ctf-recog-text">{event.recognition}</p>
                </div>

                <div className="ctf-bottom-card">
                  <h4>COMPETITION RULES</h4>
                  <ul className="ctf-rules-list">
                    {event.rules.map((rule, idx) => (
                      <li key={idx}>
                        <CheckCircle2 size={14} color="var(--purple-light)" />
                        <span>{rule}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* ============================================================
              CUSTOM VISUAL: EVENT 03 EDGE AI & TINYML WORKSHOP
          ============================================================ */}
          {event.id === 'edge-ai-tinyml' && (
            <div className="detail-section-block edgeai-block">
              <span className="section-eyebrow">INTELLIGENCE AT THE BOUNDARY</span>
              <h2 className="detail-block-heading">THE ON-DEVICE AI ARCHITECTURE</h2>
              <p className="detail-block-sub">
                Explore how machine learning breaks free from cloud dependence to operate directly on edge devices with zero network latency and enhanced privacy.
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
                <h4 className="topics-heading">WORKSHOP CURRICULUM MODULES</h4>
                <div className="topics-list">
                  {event.topics.map((t, idx) => (
                    <div key={idx} className="topic-card">
                      <span className="topic-index">MODULE 0{idx + 1}</span>
                      <p>{t}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Venue & Capacity Card */}
              <div className="workshop-specs-card">
                <div className="w-spec-item">
                  <span className="w-label">SESSION VENUE</span>
                  <strong>Apple Hall</strong>
                </div>
                <div className="w-spec-item">
                  <span className="w-label">WORKSHOP TIMING</span>
                  <strong>Day 2 // 10:45 AM – 12:15 PM</strong>
                </div>
                <div className="w-spec-item">
                  <span className="w-label">MAX CAPACITY</span>
                  <strong>160 Participants</strong>
                </div>
              </div>
            </div>
          )}

          {/* ============================================================
              CUSTOM VISUAL: EVENT 04 IDEA ALCHEMY
          ============================================================ */}
          {event.id === 'idea-alchemy' && (
            <div className="detail-section-block alchemy-block">
              <span className="section-eyebrow">STARTUP COMPETITION</span>
              <h2 className="detail-block-heading">INNOVATE. ADAPT. PITCH.</h2>
              <p className="detail-block-sub">
                An innovation-driven startup arena where teams construct breakthrough concepts on the fly from random draws and adapt them to sudden real-world business constraints.
              </p>

              {/* Rounds Display */}
              <div className="rounds-grid">
                {event.rounds.map((rnd) => (
                  <div key={rnd.round} className="round-card">
                    <span className="round-pill">{rnd.round}</span>
                    <h3 className="round-title">{rnd.title}</h3>
                    <p className="round-desc">{rnd.desc}</p>
                  </div>
                ))}
              </div>

              {/* 3 Boxes Matrix */}
              <div className="alchemy-matrix-box">
                <h4>THE 3-BOX SPRINT MATRIX (ROUND 1)</h4>
                <p className="matrix-sub">Each team of 3 randomly selects one card from each box to build their startup premise:</p>
                <div className="matrix-columns">
                  {event.boxes.map((b) => (
                    <div key={b.box} className="matrix-col">
                      <span className="col-label">{b.name}</span>
                      <div className="matrix-tags-wrap">
                        {b.examples.map(ex => (
                          <div key={ex} className="matrix-tag">{ex}</div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Constraint Cards Examples */}
              <div className="pivot-constraints-card">
                <h4>ROUND 2 PIVOT CHALLENGE: BUSINESS CONSTRAINT EXAMPLES</h4>
                <p className="pivot-sub">Top 5 qualifying finalists receive a real-world business constraint card requiring strategic adaptation:</p>
                <div className="constraint-chips-grid">
                  {event.constraintExamples.map((c, idx) => (
                    <div key={idx} className="constraint-chip">
                      <AlertTriangle size={15} color="var(--purple-light)" />
                      <span>{c}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Evaluation Criteria Weights */}
              <div className="criteria-weights-card">
                <h4>OFFICIAL JUDGING CRITERIA WEIGHTS</h4>
                <div className="criteria-bars-grid">
                  {event.judgingCriteria.map((c) => (
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
              CUSTOM VISUAL: EVENT 05 CODENOMICS
          ============================================================ */}
          {event.id === 'codenomics' && (
            <div className="detail-section-block codenomics-block">
              <span className="section-eyebrow">GAMIFIED COMPETITIVE PROGRAMMING</span>
              <h2 className="detail-block-heading">TECHX PORTAL & TECHX MARKET</h2>
              <p className="detail-block-sub">
                Teams strategically earn TechCoins on the TechX Portal by solving technical puzzles, and spend them in the TechX Market for tactical advantages during timed HackerRank coding.
              </p>

              {/* Dual Platform Selector */}
              <div className="platform-nav-tabs">
                <button 
                  onClick={() => setActivePlatformTab('portal')}
                  className={`plat-tab-btn ${activePlatformTab === 'portal' ? 'plat-tab-active' : ''}`}
                >
                  <Sparkles size={16} />
                  <span>TECHX PORTAL (STRATEGY & COINS)</span>
                </button>
                <button 
                  onClick={() => setActivePlatformTab('market')}
                  className={`plat-tab-btn ${activePlatformTab === 'market' ? 'plat-tab-active' : ''}`}
                >
                  <Coins size={16} />
                  <span>TECHX MARKET (ADVANTAGES)</span>
                </button>
                <button 
                  onClick={() => setActivePlatformTab('hackerrank')}
                  className={`plat-tab-btn ${activePlatformTab === 'hackerrank' ? 'plat-tab-active' : ''}`}
                >
                  <Terminal size={16} />
                  <span>HACKERRANK (CODING)</span>
                </button>
              </div>

              {/* Tab 1: TechX Portal Levels */}
              {activePlatformTab === 'portal' && (
                <div className="plat-content-box">
                  <div className="starting-balance-banner">
                    <Coins size={28} color="var(--purple-light)" />
                    <div>
                      <strong>STARTING BALANCE: 100 TECHCOINS PER TEAM</strong>
                      <p>Teams start with 100 TechCoins and accumulate additional coins by solving non-programming strategy puzzles.</p>
                    </div>
                  </div>

                  <div className="portal-levels-grid">
                    {event.portalLevels.map((lvl) => (
                      <div key={lvl.level} className="portal-lvl-card">
                        <div className="lvl-card-head">
                          <span className="lvl-name">{lvl.level}</span>
                          <span className="lvl-reward">{lvl.reward}</span>
                        </div>
                        <div className="lvl-examples-list">
                          {lvl.examples.map((ex, i) => (
                            <span key={i} className="lvl-tag">{ex}</span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tab 2: TechX Market Catalog */}
              {activePlatformTab === 'market' && (
                <div className="plat-content-box">
                  <div className="market-intro-banner">
                    <Sparkles size={24} color="var(--purple-light)" />
                    <div>
                      <strong>TECHX MARKET CATALOG (PREVIEW)</strong>
                      <p>Spend earned TechCoins to purchase real-time tactical advantages during the HackerRank coding challenge.</p>
                    </div>
                  </div>

                  <div className="market-items-grid">
                    {event.marketItems.map((item) => (
                      <div key={item.item} className="market-item-card">
                        <div className="market-item-top">
                          <strong className="market-item-name">{item.item}</strong>
                          <span className="market-cost-badge">{item.cost}</span>
                        </div>
                        <p className="market-item-desc">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tab 3: HackerRank & Scoring */}
              {activePlatformTab === 'hackerrank' && (
                <div className="plat-content-box">
                  <div className="hackerrank-desc-card">
                    <h4>HACKERRANK PROGRAMMING CONTEST</h4>
                    <p>
                      Contains algorithmic programming questions across Easy, Medium, and Hard tiers, presented in randomized order. Code correctness, runtime efficiency, and hidden test-case coverage are evaluated strictly by HackerRank.
                    </p>
                  </div>

                  <div className="scoring-weight-box">
                    <h4>FINAL RANKING WEIGHTAGE</h4>
                    <div className="codenomics-weights-grid">
                      {event.winningCriteria.map((crit) => (
                        <div key={crit.label} className="c-weight-card">
                          <strong className="c-weight-val">{crit.weight}</strong>
                          <span className="c-weight-label">{crit.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Fair Play & Anti-Cheating */}
              <div className="anticheat-card">
                <h4>FAIR PLAY & ANTI-CHEATING ARCHITECTURE</h4>
                <div className="anticheat-grid">
                  {event.antiCheatingRules.map((rule, idx) => (
                    <div key={idx} className="anticheat-item">
                      <Lock size={15} color="var(--purple-light)" />
                      <span>{rule}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ============================================================
              CUSTOM VISUAL: EVENT 06 NANO MENTORING
          ============================================================ */}
          {event.id === 'nano-mentoring' && (
            <div className="detail-section-block mentoring-block">
              <span className="section-eyebrow">DIRECT GUIDANCE</span>
              <h2 className="detail-block-heading">PRACTICAL INDUSTRY PERSPECTIVES</h2>
              <p className="detail-block-sub">
                An interaction session connecting student technologists with experienced professionals for practical guidance, modern engineering insights, and career navigation.
              </p>

              <div className="mentoring-focus-grid">
                {event.sessionFocus.map((focus, idx) => (
                  <div key={idx} className="m-focus-card">
                    <span className="m-focus-num">0{idx + 1}</span>
                    <h4>{focus}</h4>
                    <p>Engage in unfiltered technical and career discussions designed to align academic preparation with industry expectations.</p>
                  </div>
                ))}
              </div>

              <div className="mentoring-schedule-note">
                <Clock size={18} color="var(--purple-light)" />
                <span>Scheduled on Day 1 at 10:00 AM in the Campus Auditorium, directly alongside Benefits of IEEE Computer Society Membership.</span>
              </div>
            </div>
          )}

          {/* ============================================================
              CUSTOM VISUAL: EVENT 07 IEEE CS BENEFITS
          ============================================================ */}
          {event.id === 'ieee-cs-benefits' && (
            <div className="detail-section-block ieee-benefits-block">
              <span className="section-eyebrow">GLOBAL COMMUNITY</span>
              <h2 className="detail-block-heading">VALUE OF IEEE COMPUTER SOCIETY MEMBERSHIP</h2>
              <p className="detail-block-sub">
                An awareness and engagement session highlighting how IEEE Computer Society membership unlocks global opportunities, professional networks, and career milestones.
              </p>

              <div className="benefits-cards-grid">
                {event.coreThemes.map((theme, idx) => (
                  <div key={idx} className="benefit-card">
                    <span className="benefit-num">0{idx + 1}</span>
                    <h4>{theme}</h4>
                    <p>Explore pathways to elevate your professional trajectory through international conferences, computing repositories, and global leadership roles.</p>
                  </div>
                ))}
              </div>

              <div className="mentoring-schedule-note">
                <Sparkles size={18} color="var(--purple-light)" />
                <span>Day 1 at 10:00 AM in the Campus Auditorium. Open to all registered delegates and student attendees.</span>
              </div>
            </div>
          )}

          {/* ============================================================
              PRIZES & RECOGNITION (OFFICIAL / GROUNDED)
          ============================================================ */}
          <div className="detail-section-block prizes-recognition-block">
            <span className="section-eyebrow">AWARDS & ACKNOWLEDGEMENT</span>
            <h2 className="detail-block-heading">PRIZES & RECOGNITION</h2>
            
            {event.id === 'sherlock-syntax' ? (
              <div className="prizes-grid">
                <div className="prize-box">
                  <span className="prize-label">TOP 3 TEAMS</span>
                  <h4>Final Leaderboard Standings</h4>
                  <p>Top 3 teams will be officially recognized based on the final automated platform leaderboard standings.</p>
                </div>
                <div className="prize-box">
                  <span className="prize-label">CERTIFICATES</span>
                  <h4>Official Credentials</h4>
                  <p>Official participation certificates issued to all verified participating teams.</p>
                </div>
                <div className="prize-box">
                  <span className="prize-label">PRIZE DETAILS</span>
                  <h4>Awards Allocation</h4>
                  <p>Special recognition and winner prizes subject to overall event budget. Details to be announced.</p>
                </div>
              </div>
            ) : event.id === 'verdictx' ? (
              <div className="prizes-grid">
                <div className="prize-box">
                  <span className="prize-label">TOP TEAMS</span>
                  <h4>Cumulative Bench Evaluation</h4>
                  <p>Top evaluated projects recognized across Round 1 Ideation, Round 2 Prototype & Dynamic Constraints, and Round 3 Technical Defense.</p>
                </div>
                <div className="prize-box">
                  <span className="prize-label">CERTIFICATES</span>
                  <h4>Official Credentials</h4>
                  <p>Official certificates of participation and achievement awarded to all 4 members of registered teams.</p>
                </div>
                <div className="prize-box">
                  <span className="prize-label">PRIZE DETAILS</span>
                  <h4>Awards Allocation</h4>
                  <p>Prize details, mementos, and track recognition to be announced by the organizing committee.</p>
                </div>
              </div>
            ) : (
              <div className="prizes-grid">
                <div className="prize-box">
                  <span className="prize-label">RECOGNITION</span>
                  <h4>Official Acknowledgement</h4>
                  <p>{event.prizes?.recognition || "Delegates recognized for active participation and project evaluation."}</p>
                </div>
                <div className="prize-box">
                  <span className="prize-label">CERTIFICATES</span>
                  <h4>Official Credentials</h4>
                  <p>{event.prizes?.certificates || "Official certificates issued to all registered participants."}</p>
                </div>
                <div className="prize-box">
                  <span className="prize-label">PRIZE DETAILS</span>
                  <h4>Awards Allocation</h4>
                  <p>{event.prizes?.details || "Details to be announced."}</p>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Enrolment CTA */}
          <div className="detail-bottom-enroll">
            <div className="enroll-content">
              <h3>READY TO COMPETE IN {event.title}?</h3>
              <p>14–15 October 2026 • Sri Sai Ram Institute of Technology</p>
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
          gap: 0.85rem;
          margin-bottom: 1rem;
          flex-wrap: wrap;
        }
        .event-detail-num {
          font-family: var(--font-display);
          font-size: 2.2rem;
          line-height: 1;
          color: var(--purple-light);
        }
        .detail-date-badge, .detail-room-badge {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--muted);
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-subtle);
          padding: 0.35rem 0.75rem;
          border-radius: var(--radius-sm);
        }
        .detail-room-badge {
          color: var(--purple-light);
          border-color: rgba(138, 43, 226, 0.3);
          background: rgba(138, 43, 226, 0.08);
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
        .spec-card-badge {
          font-family: var(--font-mono);
          font-size: 0.68rem;
          letter-spacing: 0.12em;
          color: var(--purple-light);
          display: block;
          margin-bottom: 0.25rem;
        }
        .spec-card-header h3 {
          font-size: 1.2rem;
          margin-bottom: 1.5rem;
          color: #FFFFFF;
        }
        .spec-item-list {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
          margin-bottom: 2rem;
        }
        .spec-item {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          border-bottom: 1px solid var(--border-subtle);
          padding-bottom: 0.85rem;
        }
        .spec-item:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }
        .s-label {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          letter-spacing: 0.1em;
          color: var(--muted);
        }
        .s-val {
          font-size: 1.05rem;
          color: #FFFFFF;
        }

        /* Main Section Blocks */
        .detail-main-section {
          padding: 5rem 0 7rem;
        }
        .detail-section-block {
          background: #08040F;
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          padding: 3.5rem;
          margin-bottom: 3rem;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
        }
        @media (max-width: 768px) {
          .detail-section-block {
            padding: 2rem 1.25rem;
          }
        }
        .detail-block-heading {
          font-size: clamp(1.8rem, 3.5vw, 2.5rem);
          text-transform: uppercase;
          letter-spacing: 0.02em;
          margin-bottom: 1.25rem;
          color: #FFFFFF;
        }
        .detail-block-sub {
          font-size: 1.05rem;
          color: var(--muted);
          line-height: 1.6;
          max-width: 800px;
          margin-bottom: 2.5rem;
        }
        .detail-prose p {
          font-size: 1.05rem;
          line-height: 1.7;
          color: #D6CCE6;
          margin-bottom: 1.25rem;
          max-width: 860px;
        }

        .detail-highlights-box {
          margin-top: 2.5rem;
          background: rgba(14, 9, 24, 0.6);
          border: 1px solid rgba(138, 43, 226, 0.2);
          border-radius: var(--radius-sm);
          padding: 2rem;
        }
        .highlights-title {
          font-family: var(--font-mono);
          font-size: 0.82rem;
          letter-spacing: 0.12em;
          color: var(--purple-light);
          margin-bottom: 1.25rem;
        }
        .highlights-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem 2rem;
        }
        @media (max-width: 768px) {
          .highlights-grid {
            grid-template-columns: 1fr;
          }
        }

        /* Prizes & Recognition Grid */
        .prizes-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 1.5rem;
          margin-top: 1.5rem;
        }
        .prize-box {
          background: rgba(14, 9, 24, 0.6);
          border: 1px solid rgba(138, 43, 226, 0.25);
          border-radius: var(--radius-sm);
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          transition: var(--transition-fast);
        }
        .prize-box:hover {
          border-color: var(--purple-light);
          transform: translateY(-2px);
        }
        .prize-label {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          font-weight: 700;
          color: var(--purple-light);
          letter-spacing: 0.08em;
        }
        .prize-box h4 {
          font-size: 1.15rem;
          margin: 0;
          color: var(--white);
        }
        .prize-box p {
          font-size: 0.9rem;
          color: var(--muted);
          line-height: 1.5;
          margin: 0;
        }
        .highlight-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          font-size: 0.95rem;
          color: #DDD6E5;
          line-height: 1.5;
        }

        /* VerdictX Tabs & Rounds */
        .verdictx-tabs-nav {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
          margin-bottom: 2rem;
        }
        @media (max-width: 768px) {
          .verdictx-tabs-nav {
            grid-template-columns: 1fr;
          }
        }
        .v-tab-btn {
          background: rgba(14, 9, 24, 0.6);
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          cursor: pointer;
          transition: all 0.25s ease;
          text-align: left;
        }
        .v-tab-btn:hover {
          border-color: var(--purple-light);
          background: rgba(138, 43, 226, 0.08);
        }
        .v-tab-active {
          border-color: var(--purple-light);
          background: rgba(138, 43, 226, 0.18);
          box-shadow: 0 0 20px rgba(138, 43, 226, 0.2);
        }
        .v-tab-pill {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          letter-spacing: 0.14em;
          color: var(--purple-light);
          margin-bottom: 0.35rem;
        }
        .v-tab-title {
          font-size: 1rem;
          color: #FFFFFF;
          text-transform: uppercase;
        }

        .verdictx-round-card {
          background: rgba(12, 7, 20, 0.8);
          border: 1px solid rgba(138, 43, 226, 0.3);
          border-radius: var(--radius-md);
          padding: 2.5rem;
          margin-bottom: 2rem;
        }
        @media (max-width: 600px) {
          .verdictx-round-card {
            padding: 1.5rem;
          }
        }
        .v-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 1.25rem;
        }
        .v-round-meta {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .v-timing-chip {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          color: #DDD6E5;
          background: rgba(255, 255, 255, 0.05);
          padding: 0.3rem 0.65rem;
          border-radius: 4px;
        }
        .v-pitch-badge {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--purple-light);
          border: 1px solid rgba(138, 43, 226, 0.4);
          padding: 0.3rem 0.75rem;
          border-radius: 20px;
        }
        .v-card-heading {
          font-size: 1.6rem;
          text-transform: uppercase;
          color: #FFFFFF;
          margin-bottom: 0.85rem;
        }
        .v-card-desc {
          font-size: 1.05rem;
          color: #BDB2CE;
          line-height: 1.6;
          margin-bottom: 2rem;
        }
        .v-subsections-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          padding-top: 2rem;
        }
        @media (max-width: 768px) {
          .v-subsections-grid {
            grid-template-columns: 1fr;
          }
        }
        .v-sub-col h4 {
          font-family: var(--font-mono);
          font-size: 0.82rem;
          letter-spacing: 0.12em;
          color: var(--purple-light);
          margin-bottom: 1rem;
        }
        .v-sub-col ul {
          list-style: disc;
          padding-left: 1.25rem;
          color: #D6CCE6;
          line-height: 1.8;
          font-size: 0.95rem;
        }
        .v-sub-note {
          font-size: 0.92rem;
          color: var(--muted);
          margin-bottom: 0.85rem;
        }
        .rubric-pills-wrap {
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }
        .rubric-pill {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-subtle);
          padding: 0.6rem 1rem;
          border-radius: var(--radius-sm);
          font-size: 0.9rem;
          color: #FFFFFF;
        }
        .submission-items-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }
        .sub-item-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: rgba(138, 43, 226, 0.15);
          border: 1px solid rgba(138, 43, 226, 0.35);
          padding: 0.4rem 0.75rem;
          border-radius: 4px;
          font-family: var(--font-mono);
          font-size: 0.78rem;
          color: #FFFFFF;
        }
        .peer-review-topics {
          font-size: 0.88rem;
          color: #BDB2CE;
          line-height: 1.5;
        }
        .peer-review-topics strong {
          color: #FFFFFF;
          display: block;
          margin-bottom: 0.25rem;
        }

        .verdictx-bottom-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }
        @media (max-width: 768px) {
          .verdictx-bottom-grid {
            grid-template-columns: 1fr;
          }
        }
        .v-bottom-card {
          background: rgba(14, 9, 24, 0.6);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          padding: 2rem;
        }
        .v-card-subhead {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          font-size: 1.1rem;
          text-transform: uppercase;
          color: #FFFFFF;
          margin-bottom: 0.5rem;
        }
        .cumulative-gates-list {
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
          margin-top: 1.25rem;
        }
        .gate-row {
          display: flex;
          align-items: center;
          gap: 1rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-subtle);
          padding: 0.65rem 1rem;
          border-radius: var(--radius-sm);
        }
        .gate-num {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: var(--purple-light);
          font-weight: 700;
        }
        .gate-title {
          font-size: 0.95rem;
          color: #FFFFFF;
        }
        .v-rules-list {
          list-style: none;
          padding: 0;
          margin: 1.25rem 0 0;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .v-rules-list li {
          display: flex;
          align-items: flex-start;
          gap: 0.65rem;
          font-size: 0.92rem;
          color: #DDD6E5;
          line-height: 1.5;
        }

        /* CTF Sherlock & Syntax Styles */
        .ctf-categories-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 1rem;
          margin-bottom: 2.5rem;
        }
        @media (max-width: 1024px) {
          .ctf-categories-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        @media (max-width: 540px) {
          .ctf-categories-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        .ctf-cat-card {
          background: rgba(14, 9, 24, 0.75);
          border: 1px solid rgba(138, 43, 226, 0.25);
          border-radius: var(--radius-sm);
          padding: 1.5rem 1rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
          text-align: center;
        }
        .ctf-cat-name {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: #FFFFFF;
          letter-spacing: 0.05em;
        }
        .ctf-matrix-section {
          background: rgba(12, 7, 20, 0.8);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          padding: 2rem;
          margin-bottom: 2rem;
        }
        .matrix-heading {
          font-family: var(--font-mono);
          font-size: 0.82rem;
          letter-spacing: 0.12em;
          color: var(--purple-light);
          margin-bottom: 1.5rem;
        }
        .ctf-tier-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          margin-bottom: 1.25rem;
        }
        @media (max-width: 600px) {
          .ctf-tier-grid {
            grid-template-columns: 1fr;
          }
        }
        .tier-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 0.4rem;
        }
        .tier-badge {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--purple-light);
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }
        .tier-pts {
          font-family: var(--font-display);
          font-size: 2rem;
          color: #FFFFFF;
        }
        .tier-count {
          font-size: 0.85rem;
          color: var(--muted);
        }
        .tier-note {
          font-size: 0.88rem;
          color: var(--muted);
          border-top: 1px dashed rgba(255, 255, 255, 0.08);
          padding-top: 1rem;
        }

        .ctf-timeline-card {
          background: rgba(14, 9, 24, 0.6);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          padding: 2rem;
          margin-bottom: 2rem;
        }
        .ctf-schedule-head {
          font-family: var(--font-mono);
          font-size: 0.82rem;
          letter-spacing: 0.12em;
          color: var(--purple-light);
          margin-bottom: 1.5rem;
        }
        .ctf-flow-steps {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .ctf-step-row {
          display: grid;
          grid-template-columns: 180px 1fr;
          gap: 1.5rem;
          align-items: baseline;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          padding-bottom: 1rem;
        }
        @media (max-width: 600px) {
          .ctf-step-row {
            grid-template-columns: 1fr;
            gap: 0.35rem;
          }
        }
        .ctf-step-time {
          font-family: var(--font-mono);
          font-size: 0.82rem;
          color: var(--purple-light);
        }
        .ctf-step-content strong {
          color: #FFFFFF;
          display: block;
          margin-bottom: 0.25rem;
        }
        .ctf-step-content p {
          font-size: 0.92rem;
          color: #BDB2CE;
          line-height: 1.5;
        }

        .ctf-bottom-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }
        @media (max-width: 768px) {
          .ctf-bottom-grid {
            grid-template-columns: 1fr;
          }
        }
        .ctf-bottom-card {
          background: rgba(14, 9, 24, 0.6);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          padding: 2rem;
        }
        .ctf-bottom-card h4 {
          font-family: var(--font-mono);
          font-size: 0.82rem;
          letter-spacing: 0.12em;
          color: var(--purple-light);
          margin-bottom: 1.25rem;
        }
        .tie-break-box {
          display: flex;
          align-items: flex-start;
          gap: 0.85rem;
          background: rgba(138, 43, 226, 0.1);
          border: 1px solid rgba(138, 43, 226, 0.3);
          padding: 1.25rem;
          border-radius: var(--radius-sm);
          margin-bottom: 1.25rem;
        }
        .tie-break-box p {
          font-size: 0.95rem;
          color: #FFFFFF;
          line-height: 1.5;
        }
        .ctf-recog-text {
          font-size: 0.9rem;
          color: var(--muted);
          line-height: 1.6;
        }
        .ctf-rules-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }
        .ctf-rules-list li {
          display: flex;
          align-items: flex-start;
          gap: 0.65rem;
          font-size: 0.92rem;
          color: #DDD6E5;
          line-height: 1.5;
        }

        /* Edge AI Workflow & Curriculum */
        .tinyml-nodes-flow {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.25rem;
          margin-bottom: 2.5rem;
        }
        @media (max-width: 900px) {
          .tinyml-nodes-flow {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 480px) {
          .tinyml-nodes-flow {
            grid-template-columns: 1fr;
          }
        }
        .tiny-node-item {
          background: rgba(14, 9, 24, 0.7);
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          padding: 1.5rem 1.25rem;
          display: flex;
          flex-direction: column;
          position: relative;
        }
        .tiny-step {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--purple-light);
          margin-bottom: 0.5rem;
        }
        .tiny-label {
          font-size: 1.1rem;
          color: #FFFFFF;
          margin-bottom: 0.25rem;
        }
        .tiny-sub {
          font-size: 0.85rem;
          color: var(--muted);
        }
        .tiny-arrow {
          position: absolute;
          right: -0.75rem;
          top: 40%;
          color: var(--purple-light);
          font-size: 1.2rem;
          z-index: 2;
        }
        @media (max-width: 900px) {
          .tiny-arrow {
            display: none;
          }
        }

        .topics-section-box {
          margin-bottom: 2.5rem;
        }
        .topics-heading {
          font-family: var(--font-mono);
          font-size: 0.82rem;
          letter-spacing: 0.12em;
          color: var(--purple-light);
          margin-bottom: 1.5rem;
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
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          padding: 1.25rem;
        }
        .topic-index {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          color: var(--purple-light);
          display: block;
          margin-bottom: 0.35rem;
        }
        .topic-card p {
          color: #FFFFFF;
          font-size: 0.95rem;
          line-height: 1.5;
        }

        .workshop-specs-card {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          background: rgba(14, 9, 24, 0.6);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          padding: 1.75rem;
        }
        @media (max-width: 768px) {
          .workshop-specs-card {
            grid-template-columns: 1fr;
          }
        }
        .w-spec-item {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }
        .w-label {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          letter-spacing: 0.1em;
          color: var(--muted);
        }
        .w-spec-item strong {
          font-size: 1.15rem;
          color: #FFFFFF;
        }

        /* Idea Alchemy Styles */
        .rounds-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          margin-bottom: 2.5rem;
        }
        @media (max-width: 768px) {
          .rounds-grid {
            grid-template-columns: 1fr;
          }
        }
        .round-card {
          background: rgba(14, 9, 24, 0.7);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          padding: 2rem;
        }
        .round-pill {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--purple-light);
          display: inline-block;
          margin-bottom: 0.75rem;
        }
        .round-title {
          font-size: 1.35rem;
          color: #FFFFFF;
          margin-bottom: 0.75rem;
        }
        .round-desc {
          font-size: 0.95rem;
          color: #BDB2CE;
          line-height: 1.6;
        }

        .alchemy-matrix-box {
          background: rgba(12, 7, 20, 0.8);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          padding: 2.5rem;
          margin-bottom: 2.5rem;
        }
        .alchemy-matrix-box h4 {
          font-family: var(--font-mono);
          font-size: 0.85rem;
          letter-spacing: 0.12em;
          color: var(--purple-light);
          margin-bottom: 0.35rem;
        }
        .matrix-sub {
          font-size: 0.95rem;
          color: var(--muted);
          margin-bottom: 2rem;
        }
        .matrix-columns {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }
        @media (max-width: 850px) {
          .matrix-columns {
            grid-template-columns: 1fr;
          }
        }
        .matrix-col {
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }
        .col-label {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          color: #FFFFFF;
          letter-spacing: 0.1em;
          margin-bottom: 0.5rem;
          padding-bottom: 0.5rem;
          border-bottom: 1px solid var(--border-subtle);
        }
        .matrix-tags-wrap {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .matrix-tag {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-subtle);
          padding: 0.55rem 0.85rem;
          border-radius: var(--radius-sm);
          font-size: 0.88rem;
          color: #DDD6E5;
        }

        .pivot-constraints-card {
          background: rgba(14, 9, 24, 0.6);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          padding: 2rem;
          margin-bottom: 2.5rem;
        }
        .pivot-constraints-card h4 {
          font-family: var(--font-mono);
          font-size: 0.82rem;
          letter-spacing: 0.12em;
          color: var(--purple-light);
          margin-bottom: 0.35rem;
        }
        .pivot-sub {
          font-size: 0.92rem;
          color: var(--muted);
          margin-bottom: 1.5rem;
        }
        .constraint-chips-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.85rem;
        }
        @media (max-width: 768px) {
          .constraint-chips-grid {
            grid-template-columns: 1fr;
          }
        }
        .constraint-chip {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-subtle);
          padding: 0.75rem 1rem;
          border-radius: var(--radius-sm);
          font-size: 0.9rem;
          color: #FFFFFF;
        }

        .criteria-weights-card {
          background: rgba(14, 9, 24, 0.6);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          padding: 2.5rem;
        }
        .criteria-weights-card h4 {
          font-family: var(--font-mono);
          font-size: 0.82rem;
          letter-spacing: 0.12em;
          color: var(--purple-light);
          margin-bottom: 2rem;
        }
        .criteria-bars-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem 3rem;
        }
        @media (max-width: 768px) {
          .criteria-bars-grid {
            grid-template-columns: 1fr;
          }
        }
        .crit-item {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .crit-top {
          display: flex;
          justify-content: space-between;
          font-size: 0.95rem;
        }
        .crit-name {
          color: #FFFFFF;
        }
        .crit-pct {
          font-family: var(--font-mono);
          color: var(--purple-light);
          font-weight: 700;
        }
        .crit-track {
          width: 100%;
          height: 6px;
          background: rgba(255, 255, 255, 0.08);
          border-radius: 3px;
          overflow: hidden;
        }
        .crit-fill {
          height: 100%;
          background: linear-gradient(90deg, #8A2BE2, #C084FC);
          border-radius: 3px;
        }

        /* CodeNomics Styles */
        .platform-nav-tabs {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
          margin-bottom: 2rem;
        }
        @media (max-width: 800px) {
          .platform-nav-tabs {
            grid-template-columns: 1fr;
          }
        }
        .plat-tab-btn {
          background: rgba(14, 9, 24, 0.6);
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          padding: 1.15rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.65rem;
          cursor: pointer;
          font-family: var(--font-mono);
          font-size: 0.8rem;
          letter-spacing: 0.08em;
          color: #DDD6E5;
          transition: all 0.25s ease;
        }
        .plat-tab-btn:hover {
          border-color: var(--purple-light);
          background: rgba(138, 43, 226, 0.08);
        }
        .plat-tab-active {
          border-color: var(--purple-light);
          background: rgba(138, 43, 226, 0.2);
          color: #FFFFFF;
          box-shadow: 0 0 20px rgba(138, 43, 226, 0.2);
        }
        .plat-content-box {
          margin-bottom: 2.5rem;
        }
        .starting-balance-banner, .market-intro-banner {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          background: rgba(138, 43, 226, 0.12);
          border: 1px solid rgba(138, 43, 226, 0.3);
          border-radius: var(--radius-md);
          padding: 1.5rem 2rem;
          margin-bottom: 2rem;
        }
        .starting-balance-banner strong, .market-intro-banner strong {
          color: #FFFFFF;
          display: block;
          font-size: 1.05rem;
          margin-bottom: 0.25rem;
        }
        .starting-balance-banner p, .market-intro-banner p {
          font-size: 0.92rem;
          color: #BDB2CE;
          line-height: 1.5;
        }

        .portal-levels-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }
        @media (max-width: 768px) {
          .portal-levels-grid {
            grid-template-columns: 1fr;
          }
        }
        .portal-lvl-card {
          background: rgba(14, 9, 24, 0.7);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          padding: 1.75rem;
        }
        .lvl-card-head {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          padding-bottom: 0.75rem;
        }
        .lvl-name {
          font-family: var(--font-mono);
          font-size: 0.85rem;
          color: #FFFFFF;
          font-weight: 700;
        }
        .lvl-reward {
          font-family: var(--font-mono);
          font-size: 0.85rem;
          color: #22C55E;
          background: rgba(34, 197, 94, 0.1);
          border: 1px solid rgba(34, 197, 94, 0.25);
          padding: 0.25rem 0.65rem;
          border-radius: 4px;
        }
        .lvl-examples-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .lvl-tag {
          font-size: 0.82rem;
          color: #BDB2CE;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-subtle);
          padding: 0.35rem 0.65rem;
          border-radius: 4px;
        }

        .market-items-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.25rem;
        }
        @media (max-width: 768px) {
          .market-items-grid {
            grid-template-columns: 1fr;
          }
        }
        .market-item-card {
          background: rgba(14, 9, 24, 0.7);
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .market-item-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
        }
        .market-item-name {
          color: #FFFFFF;
          font-size: 1rem;
        }
        .market-cost-badge {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: var(--purple-light);
          background: rgba(138, 43, 226, 0.18);
          border: 1px solid rgba(138, 43, 226, 0.4);
          padding: 0.25rem 0.65rem;
          border-radius: 20px;
          white-space: nowrap;
        }
        .market-item-desc {
          font-size: 0.88rem;
          color: var(--muted);
          line-height: 1.5;
        }

        .hackerrank-desc-card {
          background: rgba(14, 9, 24, 0.7);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          padding: 2rem;
          margin-bottom: 2rem;
        }
        .hackerrank-desc-card h4 {
          font-family: var(--font-mono);
          font-size: 0.82rem;
          letter-spacing: 0.12em;
          color: var(--purple-light);
          margin-bottom: 0.85rem;
        }
        .hackerrank-desc-card p {
          font-size: 1rem;
          color: #DDD6E5;
          line-height: 1.6;
        }

        .scoring-weight-box h4 {
          font-family: var(--font-mono);
          font-size: 0.82rem;
          letter-spacing: 0.12em;
          color: var(--purple-light);
          margin-bottom: 1.25rem;
        }
        .codenomics-weights-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }
        @media (max-width: 600px) {
          .codenomics-weights-grid {
            grid-template-columns: 1fr;
          }
        }
        .c-weight-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 0.5rem;
        }
        .c-weight-val {
          font-family: var(--font-display);
          font-size: 2.2rem;
          color: #FFFFFF;
        }
        .c-weight-label {
          font-size: 0.85rem;
          color: var(--muted);
        }

        .anticheat-card {
          background: rgba(14, 9, 24, 0.6);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          padding: 2rem;
        }
        .anticheat-card h4 {
          font-family: var(--font-mono);
          font-size: 0.82rem;
          letter-spacing: 0.12em;
          color: var(--purple-light);
          margin-bottom: 1.5rem;
        }
        .anticheat-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem 2rem;
        }
        @media (max-width: 768px) {
          .anticheat-grid {
            grid-template-columns: 1fr;
          }
        }
        .anticheat-item {
          display: flex;
          align-items: flex-start;
          gap: 0.65rem;
          font-size: 0.92rem;
          color: #DDD6E5;
          line-height: 1.5;
        }

        /* Nano Mentoring & IEEE CS Benefits */
        .mentoring-focus-grid, .benefits-cards-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
          margin-bottom: 2rem;
        }
        @media (max-width: 768px) {
          .mentoring-focus-grid, .benefits-cards-grid {
            grid-template-columns: 1fr;
          }
        }
        .m-focus-card, .benefit-card {
          background: rgba(14, 9, 24, 0.7);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          padding: 2rem;
          display: flex;
          flex-direction: column;
        }
        .m-focus-num, .benefit-num {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: var(--purple-light);
          margin-bottom: 0.75rem;
        }
        .m-focus-card h4, .benefit-card h4 {
          font-size: 1.15rem;
          color: #FFFFFF;
          margin-bottom: 0.5rem;
        }
        .m-focus-card p, .benefit-card p {
          font-size: 0.92rem;
          color: #BDB2CE;
          line-height: 1.6;
        }
        .mentoring-schedule-note {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: rgba(138, 43, 226, 0.1);
          border: 1px solid rgba(138, 43, 226, 0.3);
          padding: 1.25rem 1.75rem;
          border-radius: var(--radius-sm);
          font-size: 0.92rem;
          color: #FFFFFF;
        }

        /* Bottom Enrollment Section */
        .detail-bottom-enroll {
          margin-top: 5rem;
          background: linear-gradient(135deg, rgba(138, 43, 226, 0.2), rgba(14, 9, 24, 0.9));
          border: 1px solid var(--purple-light);
          border-radius: var(--radius-md);
          padding: 3.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 2rem;
          box-shadow: 0 0 50px rgba(138, 43, 226, 0.25);
        }
        @media (max-width: 768px) {
          .detail-bottom-enroll {
            padding: 2rem 1.5rem;
            flex-direction: column;
            align-items: stretch;
            text-align: center;
          }
          .detail-bottom-enroll .btn {
            width: 100%;
            justify-content: center;
          }
        }
        .enroll-content h3 {
          font-size: 1.8rem;
          text-transform: uppercase;
          color: #FFFFFF;
          margin-bottom: 0.35rem;
        }
        .enroll-content p {
          color: #E2D9F3;
          font-family: var(--font-mono);
          font-size: 0.88rem;
        }
      `}</style>
    </div>
  );
}
