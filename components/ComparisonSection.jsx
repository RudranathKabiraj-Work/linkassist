import React from 'react';

const rows = [
  {
    opt: 'Do Everything Yourself',
    desc: 'Free — but extremely time consuming. Work piles up and consistency becomes impossible.',
    win: false,
    verdict: 'Time Sink',
    verdictType: 'bad',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    opt: 'Use ChatGPT',
    desc: 'An excellent general writing assistant, but produces generic AI content and lacks a LinkedIn growth system.',
    win: false,
    verdict: 'Generic Output',
    verdictType: 'warning',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m11.314 11.314l.707.707M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
      </svg>
    ),
  },
  {
    opt: 'Hire A Content Writer',
    desc: 'Saves time, but rarely captures your real expertise, unique business voice, or domain depth.',
    win: false,
    verdict: 'Voice Mismatch',
    verdictType: 'bad',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
      </svg>
    ),
  },
  {
    opt: 'Hire A LinkedIn Agency',
    desc: 'Extremely expensive ($2k-$5k/mo), slow to onboard, and makes you dependent on outsourcing.',
    win: false,
    verdict: 'Costly & Dependent',
    verdictType: 'bad',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
  {
    opt: 'Use Link Assist',
    desc: 'One unified platform that learns your business, matches your voice, and automates your growth workflow — consistently.',
    win: true,
    verdict: 'Growth & Consistency',
    verdictType: 'win',
    icon: (
      <img
        src="/assets/logo-icon.png"
        alt="LinkAssist"
        width={28}
        height={28}
        style={{ width: 28, height: 28, borderRadius: 7 }}
      />
    ),
  },
];

export default function ComparisonSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="narrow reveal text-center" style={{ marginBottom: 48, margin: '0 auto', textAlign: 'center' }}>
          <p className="eyebrow" style={{ font: '500 11px/1 Geist', color: '#0066B2', letterSpacing: '.14em', textTransform: 'uppercase' }}>
            Chapter 07 · Let's Compare Your Options
          </p>
          <h2 className="h-lg" style={{ font: '800 clamp(2rem, 4vw, 3.4rem)/1.1 Geist', color: '#0F172A', letterSpacing: '-0.03em', marginTop: 12 }}>
            Every Founder Eventually{' '}
            <span style={{ color: '#0066B2' }}>Chooses One Of These Paths.</span>
          </h2>
        </div>

        <div className="compare-wrap reveal">
          {/* Header Row */}
          <div className="crow head">
            <div className="opt" style={{ textTransform: 'uppercase', fontSize: '11px', letterSpacing: '0.1em', color: '#64748B', fontWeight: 700 }}>
              Alternative Path
            </div>
            <div className="desc" style={{ textTransform: 'uppercase', fontSize: '11px', letterSpacing: '0.1em', color: '#64748B', fontWeight: 700 }}>
              The Reality
            </div>
            <div className="verdict-col" style={{ textTransform: 'uppercase', fontSize: '11px', letterSpacing: '0.1em', color: '#64748B', fontWeight: 700 }}>
              Verdict
            </div>
          </div>

          {/* Rows */}
          {rows.map(({ opt, desc, win, verdict, verdictType, icon }) => (
            <div className={`crow${win ? ' win' : ''}`} key={opt}>
              {win && <div className="win-banner">RECOMMENDED</div>}
              <div className="opt">
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 28,
                  height: 28,
                  color: win ? '#0066B2' : '#64748B',
                  flexShrink: 0
                }}>
                  {icon}
                </div>
                <span>{opt}</span>
              </div>
              <div className="desc">{desc}</div>
              <div className="verdict-col">
                <span className={`badge ${verdictType === 'win' ? 'win-badge' : verdictType}`}>
                  {verdictType === 'win' && <span className="pulsing-dot" />}
                  {verdict}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
