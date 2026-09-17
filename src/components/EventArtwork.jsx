import React from 'react';
import {
  Terminal, Shield, Cpu, Lightbulb, Coins, Users, Award,
  GitBranch, Code2, Lock, Activity, CheckCircle, Database,
  Layers, Compass, Flame, Play, Zap, Server
} from 'lucide-react';
import Reveal from './Reveal';

export default function EventArtwork({ eventId, eventTitle }) {
  const renderVisualContent = () => {
    switch (eventId) {
      case 'verdictx':
      case 'build-break-defend':
        return (
          <div className="artwork-verdictx">
            <div className="art-console-bar">
              <div className="art-dots">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>
              <span className="art-console-title">TERMINAL // 24H OPEN-DOMAIN HACKATHON CORE</span>
              <span className="art-badge-live">SPRINT ACTIVE</span>
            </div>
            <div className="art-console-body">
              <div className="art-code-stream">
                <p className="code-comment">// TechX 2026 // VerdictX: Code & Conquer</p>
                <p className="code-line"><span className="code-kw">import</span> &#123; Engine, ConstraintResolver &#125; <span className="code-kw">from</span> <span className="code-str">'@techx/verdict'</span>;</p>
                <p className="code-line"><span className="code-kw">const</span> championship = <span className="code-kw">new</span> Engine(&#123; durationHours: <span className="code-num">24</span>, teams: <span className="code-num">40</span> &#125;);</p>
                <p className="code-line code-highlight">championship.injectDynamicConstraint([<span className="code-str">'OFFLINE_FIRST'</span>, <span className="code-str">'1M_SCALE_LIMIT'</span>]);</p>
                <p className="code-line"><span className="code-kw">await</span> championship.evaluatePrototype(Round.DEFENSE_3);</p>
              </div>

              <div className="art-telemetry-grid">
                <div className="art-telemetry-card">
                  <span className="t-lbl">CONTINUOUS MARATHON</span>
                  <strong className="t-val">24:00:00</strong>
                  <span className="t-sub">STEVE JOBS HALL</span>
                </div>
                <div className="art-telemetry-card">
                  <span className="t-lbl">MAX SPRINT CAPACITY</span>
                  <strong className="t-val">40 TEAMS</strong>
                  <span className="t-sub">160 PARTICIPANTS</span>
                </div>
                <div className="art-telemetry-card">
                  <span className="t-lbl">EVALUATION BENCH</span>
                  <strong className="t-val">3 ROUNDS</strong>
                  <span className="t-sub">PEER & JURY DEFENSE</span>
                </div>
              </div>
            </div>
          </div>
        );

      case 'sherlock-syntax':
      case 'cipherx':
        return (
          <div className="artwork-sherlock">
            <div className="art-console-bar">
              <div className="art-dots">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>
              <span className="art-console-title">SECURITY SCANNER // CYBER INVESTIGATION & CTF DECRYPTOR</span>
              <span className="art-badge-live">INSPECTION ACTIVE</span>
            </div>
            <div className="art-console-body">
              <div className="art-hex-grid">
                <div className="hex-block">
                  <span className="hex-addr">0x0040:</span>
                  <span className="hex-bytes">7F 45 4C 46 02 01 01 00 00 00 00 00</span>
                  <span className="hex-ascii">.ELF........</span>
                </div>
                <div className="hex-block hex-match">
                  <span className="hex-addr">0x0058:</span>
                  <span className="hex-bytes">53 48 45 52 4C 4F 43 4B 5F 53 59 4E</span>
                  <span className="hex-ascii">SHERLOCK_SYN</span>
                </div>
                <div className="hex-block">
                  <span className="hex-addr">0x0070:</span>
                  <span className="hex-bytes">54 41 58 5F 43 54 46 5F 32 30 32 36</span>
                  <span className="hex-ascii">TAX_CTF_2026</span>
                </div>
              </div>

              <div className="art-telemetry-grid">
                <div className="art-telemetry-card">
                  <span className="t-lbl">CHALLENGE VECTORS</span>
                  <strong className="t-val">FORENSICS & WEB</strong>
                  <span className="t-sub">MULTI-STAGE CTF</span>
                </div>
                <div className="art-telemetry-card">
                  <span className="t-lbl">DECRYPTION SPRINT</span>
                  <strong className="t-val">30 TEAMS</strong>
                  <span className="t-sub">ALPHA HALL</span>
                </div>
                <div className="art-telemetry-card">
                  <span className="t-lbl">TIMING ROADMAP</span>
                  <strong className="t-val">09:00 AM</strong>
                  <span className="t-sub">15 OCTOBER 2026</span>
                </div>
              </div>
            </div>
          </div>
        );

      case 'edge-ai-tinyml':
        return (
          <div className="artwork-tinyml">
            <div className="art-console-bar">
              <div className="art-dots">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>
              <span className="art-console-title">SILICON MATRIX // ON-DEVICE TINYML ACCELERATOR</span>
              <span className="art-badge-live">HARDWARE LAB</span>
            </div>
            <div className="art-console-body">
              <div className="art-silicon-schematic">
                <div className="chip-die">
                  <span className="chip-label">TINYML CORE // 32-BIT RISC-V</span>
                  <div className="tensor-lanes">
                    <span className="lane">INT8 QUANTIZATION [OK]</span>
                    <span className="lane">WEIGHT PRUNING: 87.4%</span>
                    <span className="lane lane-active">FLASH MEMORY: &lt; 256 KB</span>
                    <span className="lane">INFERENCE LATENCY: 9.8 ms</span>
                  </div>
                </div>
              </div>

              <div className="art-telemetry-grid">
                <div className="art-telemetry-card">
                  <span className="t-lbl">PROCESSING LOCUS</span>
                  <strong className="t-val">ON-DEVICE AI</strong>
                  <span className="t-sub">ZERO CLOUD LATENCY</span>
                </div>
                <div className="art-telemetry-card">
                  <span className="t-lbl">LAB CAPACITY</span>
                  <strong className="t-val">160 SEATS</strong>
                  <span className="t-sub">APPLE HALL</span>
                </div>
                <div className="art-telemetry-card">
                  <span className="t-lbl">LAB TIME</span>
                  <strong className="t-val">10:45 AM</strong>
                  <span className="t-sub">HANDS-ON WORKSHOP</span>
                </div>
              </div>
            </div>
          </div>
        );

      case 'idea-alchemy':
        return (
          <div className="artwork-alchemy artwork-idea">
            <div className="art-console-bar">
              <div className="art-dots">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>
              <span className="art-console-title">HACKATHON & INNOVATION // BUSINESS & IDEA PITCH ARCHITECTURE</span>
              <span className="art-badge-live">VENTURE PITCH</span>
            </div>
            <div className="art-console-body">
              <div className="art-alchemy-flow">
                <div className="flow-card">
                  <span className="f-box-num">BOX 1</span>
                  <strong>TARGET USERS</strong>
                  <p>Farmers • Healthcare • Small Business</p>
                </div>
                <span className="flow-plus">+</span>
                <div className="flow-card">
                  <span className="f-box-num">BOX 2</span>
                  <strong>TECH DOMAIN</strong>
                  <p>AI • IoT • Robotics • Cybersecurity</p>
                </div>
                <span className="flow-plus">+</span>
                <div className="flow-card">
                  <span className="f-box-num">BOX 3</span>
                  <strong>PRODUCT / SERVICE</strong>
                  <p>Drone • Wearable • Digital Wallet</p>
                </div>
                <span className="flow-arrow-char">→</span>
                <div className="flow-card flow-final">
                  <span className="f-box-num">ROUND 2</span>
                  <strong>DYNAMIC PIVOT</strong>
                  <p>Unforeseen Market Constraint</p>
                </div>
              </div>

              <div className="art-telemetry-grid">
                <div className="art-telemetry-card">
                  <span className="t-lbl">TRACK CLASSIFICATION</span>
                  <strong className="t-val">INNOVATION PITCH</strong>
                  <span className="t-sub">HACKATHON STREAM</span>
                </div>
                <div className="art-telemetry-card">
                  <span className="t-lbl">TOTAL ROSTER</span>
                  <strong className="t-val">45 TEAMS</strong>
                  <span className="t-sub">APPLE HALL (1:15 PM)</span>
                </div>
                <div className="art-telemetry-card">
                  <span className="t-lbl">JURY EVALUATION</span>
                  <strong className="t-val">100% WEIGHTED</strong>
                  <span className="t-sub">FEASIBILITY & MODEL</span>
                </div>
              </div>
            </div>
          </div>
        );

      case 'codenomics':
        return (
          <div className="artwork-codenomics">
            <div className="art-console-bar">
              <div className="art-dots">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>
              <span className="art-console-title">ALGORITHMIC TRADING DESK // EXECUTION ARENA</span>
              <span className="art-badge-live">MARKET OPEN</span>
            </div>
            <div className="art-console-body">
              <div className="art-ticker-matrix">
                <div className="ticker-line">
                  <span className="sym">ROUND 1:</span>
                  <span className="desc">REVERSE CODING (PORTAL DISCOVERY)</span>
                  <span className="status status-pass">[100% PASS]</span>
                </div>
                <div className="ticker-line ticker-active">
                  <span className="sym">ROUND 2:</span>
                  <span className="desc">ALGO-TRADING GAMIFIED AUCTION SPRINT</span>
                  <span className="status status-live">[BIDDING ACTIVE]</span>
                </div>
                <div className="ticker-line">
                  <span className="sym">COMPLEXITY:</span>
                  <span className="desc">O(N log N) WORST CASE TIME LIMIT: 1.0s</span>
                  <span className="status status-pass">[ACCEPTED]</span>
                </div>
              </div>

              <div className="art-telemetry-grid">
                <div className="art-telemetry-card">
                  <span className="t-lbl">COMPETITIVE ARENA</span>
                  <strong className="t-val">ALGO & CODING</strong>
                  <span className="t-sub">CONCURRENT WITH PITCH</span>
                </div>
                <div className="art-telemetry-card">
                  <span className="t-lbl">LOCATION VENUE</span>
                  <strong className="t-val">ALPHA HALL</strong>
                  <span className="t-sub">DAY 2 // 1:15 PM</span>
                </div>
                <div className="art-telemetry-card">
                  <span className="t-lbl">CHAMPIONSHIP FORMAT</span>
                  <strong className="t-val">2 ROUNDS</strong>
                  <span className="t-sub">REVERSE & BIDDING</span>
                </div>
              </div>
            </div>
          </div>
        );

      case 'nano-mentoring':
        return (
          <div className="artwork-mentoring">
            <div className="art-console-bar">
              <div className="art-dots">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>
              <span className="art-console-title">ADVISORY TOPOLOGY // NANO MENTORING CORPS</span>
              <span className="art-badge-live">CONSULTATION</span>
            </div>
            <div className="art-console-body">
              <div className="art-network-matrix">
                <div className="network-pill">
                  <Users size={16} color="var(--purple-light)" />
                  <span>DISTRIBUTED ARCHITECTURES & CLOUD</span>
                </div>
                <div className="network-pill">
                  <Cpu size={16} color="var(--purple-light)" />
                  <span>EMBEDDED SYSTEMS & HARDWARE ACCELERATION</span>
                </div>
                <div className="network-pill">
                  <Shield size={16} color="var(--purple-light)" />
                  <span>OFFENSIVE & DEFENSIVE CYBERSECURITY</span>
                </div>
                <div className="network-pill">
                  <Award size={16} color="var(--purple-light)" />
                  <span>ENGINEERING RESEARCH & CAREER PATHWAYS</span>
                </div>
              </div>

              <div className="art-telemetry-grid">
                <div className="art-telemetry-card">
                  <span className="t-lbl">SESSION STRUCTURE</span>
                  <strong className="t-val">INTERACTIVE</strong>
                  <span className="t-sub">PRACTICAL INSIGHTS</span>
                </div>
                <div className="art-telemetry-card">
                  <span className="t-lbl">VENUE AUDITORIUM</span>
                  <strong className="t-val">MAIN AUDITORIUM</strong>
                  <span className="t-sub">DAY 1 // 10:00 AM</span>
                </div>
                <div className="art-telemetry-card">
                  <span className="t-lbl">TARGET DELEGATES</span>
                  <strong className="t-val">ALL ATTENDEES</strong>
                  <span className="t-sub">OPEN DIALOGUE</span>
                </div>
              </div>
            </div>
          </div>
        );

      case 'ieee-cs-benefits':
      default:
        return (
          <div className="artwork-ieee artwork-society">
            <div className="art-console-bar">
              <div className="art-dots">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>
              <span className="art-console-title">PROFESSIONAL SOCIETY // IEEE COMPUTER SOCIETY CHARTER</span>
              <span className="art-badge-live">GLOBAL ACCESS</span>
            </div>
            <div className="art-console-body">
              <div className="art-ieee-matrix">
                <div className="society-pillar">
                  <span className="soc-num">01</span>
                  <strong>IEEE XPLORE DIGITAL ACCESS</strong>
                  <p>Access millions of peer-reviewed technical publications, journals, and conference standards worldwide.</p>
                </div>
                <div className="society-pillar">
                  <span className="soc-num">02</span>
                  <strong>GLOBAL SPECIAL TECHNICAL COMMUNITIES</strong>
                  <p>Direct affiliation with global research syndicates across artificial intelligence, cloud, and security.</p>
                </div>
                <div className="society-pillar">
                  <span className="soc-num">03</span>
                  <strong>STUDENT CHAPTER EXCELLENCE</strong>
                  <p>Official Student Branch Chapter affiliation providing distinguished networking and leadership credentials.</p>
                </div>
              </div>

              <div className="art-telemetry-grid">
                <div className="art-telemetry-card">
                  <span className="t-lbl">SPONSORING ENTITY</span>
                  <strong className="t-val">IEEE CS SBC</strong>
                  <span className="t-sub">SRI SAI RAM INST. OF TECH.</span>
                </div>
                <div className="art-telemetry-card">
                  <span className="t-lbl">SCHEDULE SLOT</span>
                  <strong className="t-val">DAY 1 // 10:00 AM</strong>
                  <span className="t-sub">CAMPUS AUDITORIUM</span>
                </div>
                <div className="art-telemetry-card">
                  <span className="t-lbl">MEMBERSHIP PRIVILEGE</span>
                  <strong className="t-val">DISCOUNT PASSES</strong>
                  <span className="t-sub">GLOBAL BENEFITS</span>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <Reveal variant="card" className="event-artwork-container">
      <div className="artwork-wrapper">
        <div className="art-ambient-glow" aria-hidden="true" />
        <div className="art-scanlines" aria-hidden="true" />
        {renderVisualContent()}
      </div>

      <style>{`
        .event-artwork-container {
          margin: 3.5rem 0;
          border-radius: var(--radius-md);
          overflow: hidden;
          background: #08040F;
          border: 1px solid rgba(138, 43, 226, 0.4);
          box-shadow: 0 16px 45px rgba(0, 0, 0, 0.6);
        }
        .artwork-wrapper {
          position: relative;
          width: 100%;
          overflow: hidden;
        }
        .art-ambient-glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 80% 20%, rgba(138, 43, 226, 0.15) 0%, transparent 60%);
          pointer-events: none;
        }
        .art-scanlines {
          position: absolute;
          inset: 0;
          background: repeating-linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.15),
            rgba(0, 0, 0, 0.15) 1px,
            transparent 1px,
            transparent 2px
          );
          pointer-events: none;
          opacity: 0.6;
        }
        .art-console-bar {
          padding: 0.9rem 1.5rem;
          background: #050209;
          border-bottom: 1px solid rgba(138, 43, 226, 0.3);
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 0.75rem;
        }
        .art-dots {
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }
        .dot-red { background: rgba(239, 68, 68, 0.8); }
        .dot-yellow { background: rgba(234, 179, 8, 0.8); }
        .dot-green { background: rgba(34, 197, 94, 0.8); }

        .art-console-title {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          letter-spacing: 0.12em;
          color: var(--white);
          font-weight: 600;
        }
        .art-badge-live {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          letter-spacing: 0.1em;
          color: var(--purple-light);
          background: rgba(138, 43, 226, 0.15);
          border: 1px solid rgba(184, 108, 255, 0.4);
          padding: 0.2rem 0.6rem;
          border-radius: var(--radius-sm);
          font-weight: 700;
        }

        .art-console-body {
          padding: 2.5rem 2.25rem;
          display: flex;
          flex-direction: column;
          gap: 2.25rem;
        }
        @media (max-width: 768px) {
          .art-console-body {
            padding: 1.5rem 1.25rem;
            gap: 1.75rem;
          }
        }

        /* Telemetry Cards Row */
        .art-telemetry-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }
        @media (max-width: 768px) {
          .art-telemetry-grid {
            grid-template-columns: 1fr;
          }
        }
        .art-telemetry-card {
          background: rgba(14, 9, 24, 0.5);
          border: 1px solid rgba(138, 43, 226, 0.2);
          border-radius: var(--radius-sm);
          padding: 1.15rem 1.25rem;
          display: flex;
          flex-direction: column;
        }
        .t-lbl {
          font-family: var(--font-mono);
          font-size: 0.68rem;
          letter-spacing: 0.1em;
          color: var(--purple-light);
          margin-bottom: 0.35rem;
        }
        .t-val {
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--white);
          letter-spacing: 0.02em;
          margin-bottom: 0.2rem;
        }
        .t-sub {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--muted);
        }

        /* VerdictX Code Stream */
        .art-code-stream {
          font-family: var(--font-mono);
          font-size: 0.88rem;
          line-height: 1.7;
          background: #040207;
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: var(--radius-sm);
          padding: 1.5rem;
        }
        .code-comment { color: var(--muted-dark); }
        .code-kw { color: var(--purple-light); font-weight: 700; }
        .code-str { color: #E9D5FF; }
        .code-num { color: #F3E8FF; font-weight: 700; }
        .code-highlight {
          color: var(--white);
          background: rgba(138, 43, 226, 0.15);
          padding: 0.15rem 0.5rem;
          border-left: 2px solid var(--purple-light);
          margin: 0.35rem 0;
        }

        /* Sherlock Hex Grid */
        .art-hex-grid {
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
          font-family: var(--font-mono);
          font-size: 0.85rem;
          background: #040207;
          padding: 1.5rem;
          border-radius: var(--radius-sm);
          border: 1px solid rgba(255, 255, 255, 0.06);
          overflow-x: auto;
        }
        .hex-block {
          display: flex;
          gap: 1.5rem;
          color: var(--muted);
        }
        .hex-addr { color: var(--purple-light); }
        .hex-bytes { letter-spacing: 0.15em; color: var(--off-white); }
        .hex-ascii { color: var(--purple-bright); font-weight: 700; }
        .hex-match {
          background: rgba(138, 43, 226, 0.18);
          padding: 0.25rem 0.5rem;
          border-radius: var(--radius-sm);
        }

        /* TinyML Silicon Die */
        .art-silicon-schematic {
          background: #040207;
          border: 1px dashed rgba(138, 43, 226, 0.45);
          border-radius: var(--radius-sm);
          padding: 1.75rem;
        }
        .chip-die {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .chip-label {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          letter-spacing: 0.14em;
          color: var(--purple-light);
          font-weight: 700;
        }
        .tensor-lanes {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 0.85rem;
        }
        .lane {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          background: rgba(14, 9, 24, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.08);
          padding: 0.65rem 1rem;
          border-radius: var(--radius-sm);
          color: var(--off-white);
        }
        .lane-active {
          border-color: var(--purple-light);
          color: var(--white);
          background: rgba(138, 43, 226, 0.15);
        }

        /* Idea Alchemy Flow */
        .art-alchemy-flow {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex-wrap: wrap;
        }
        .flow-card {
          flex: 1;
          min-width: 140px;
          background: #050209;
          border: 1px solid rgba(138, 43, 226, 0.3);
          border-radius: var(--radius-sm);
          padding: 1.15rem 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }
        .flow-final {
          border-color: var(--purple-light);
          background: rgba(138, 43, 226, 0.12);
        }
        .f-box-num {
          font-family: var(--font-mono);
          font-size: 0.68rem;
          color: var(--purple-light);
          font-weight: 700;
        }
        .flow-card strong {
          font-size: 0.95rem;
          color: var(--white);
        }
        .flow-card p {
          font-size: 0.78rem;
          color: var(--muted);
          line-height: 1.4;
          margin: 0;
        }
        .flow-plus, .flow-arrow-char {
          font-family: var(--font-mono);
          font-size: 1.25rem;
          color: var(--purple-light);
          font-weight: 700;
        }

        /* CodeNomics Ticker */
        .art-ticker-matrix {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          background: #040207;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: var(--radius-sm);
          padding: 1.5rem;
        }
        .ticker-line {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: var(--muted);
          flex-wrap: wrap;
        }
        .ticker-active {
          color: var(--white);
          background: rgba(138, 43, 226, 0.15);
          padding: 0.5rem 0.75rem;
          border-radius: var(--radius-sm);
        }
        .sym { color: var(--purple-light); font-weight: 700; }
        .status-pass { color: #22c55e; }
        .status-live { color: var(--purple-light); font-weight: 700; }

        /* Mentoring Network */
        .art-network-matrix {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }
        @media (max-width: 680px) {
          .art-network-matrix {
            grid-template-columns: 1fr;
          }
        }
        .network-pill {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: rgba(14, 9, 24, 0.65);
          border: 1px solid rgba(138, 43, 226, 0.3);
          border-radius: var(--radius-sm);
          padding: 1rem 1.25rem;
          font-family: var(--font-mono);
          font-size: 0.78rem;
          color: var(--white);
          letter-spacing: 0.04em;
        }

        /* IEEE Matrix */
        .art-ieee-matrix {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
        }
        @media (max-width: 860px) {
          .art-ieee-matrix {
            grid-template-columns: 1fr;
          }
        }
        .society-pillar {
          background: #050209;
          border: 1px solid rgba(138, 43, 226, 0.25);
          border-radius: var(--radius-sm);
          padding: 1.5rem 1.35rem;
          display: flex;
          flex-direction: column;
        }
        .soc-num {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--purple-light);
          font-weight: 700;
          margin-bottom: 0.5rem;
        }
        .society-pillar strong {
          font-size: 0.95rem;
          color: var(--white);
          margin-bottom: 0.5rem;
          line-height: 1.35;
        }
        .society-pillar p {
          font-size: 0.84rem;
          color: var(--muted);
          line-height: 1.5;
          margin: 0;
        }
      `}</style>
    </Reveal>
  );
}
