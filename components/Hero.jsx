'use client';
import { useState, useEffect } from 'react';
import styles from './Hero.module.css';

/* ─── Inline MiniPost — matches V2 MiniPost.jsx exactly ─────────────────── */
function MiniPost({ name, role, time, body, likes, comments, pinned, avatarGrad, isLogo }) {
  return (
    <div className={styles.miniPost}>
      <div className={styles.mpHead}>
        <div
          className={styles.mpAvatar}
          style={isLogo
            ? { background: '#0A66C2', borderRadius: 10 }
            : { background: avatarGrad }
          }
        >
          {isLogo && (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/>
            </svg>
          )}
        </div>
        <div className={styles.mpMeta}>
          <div className={styles.mpNameRow}>
            <span className={styles.mpName}>{name}</span>
            <span className={styles.mpFirst}>· 1st</span>
          </div>
          <div className={styles.mpRole}>{role}</div>
          <div className={styles.mpTime}>
            <span>{time}</span>
            <span>·</span>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <circle cx="12" cy="12" r="10"/>
              <path d="M2 12h20"/>
              <path d="M12 2a15 15 0 0 1 4 10 15 15 0 0 1-4 10 15 15 0 0 1-4-10 15 15 0 0 1 4-10z"/>
            </svg>
          </div>
        </div>
        {pinned && <span className={styles.mpScheduled}>SCHEDULED</span>}
      </div>

      <div className={styles.mpBody}>{body}</div>

      <div className={styles.mpFoot}>
        <div className={styles.mpReacts}>
          <span className={styles.react} style={{ background: '#378FE9' }} />
          <span className={styles.react} style={{ background: '#E16745', marginLeft: -4 }} />
          <span className={styles.react} style={{ background: '#DFA249', marginLeft: -4 }} />
          <span className={styles.mpLikes}>{likes}</span>
        </div>
        <div>{comments} comments</div>
      </div>
    </div>
  );
}

/* ─── Hero ───────────────────────────────────────────────────────────────── */
export default function Hero() {
  const fullA = "I quit posting on LinkedIn for 6 months. Here's what nobody warned me about ↓";
  const [typed, setTyped] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined' && window.innerWidth < 1024) {
      setTyped(fullA);
      return;
    }
    let i = 0;
    let cancelled = false;
    const tick = () => {
      if (cancelled) return;
      i = (i + 1) % (fullA.length + 30);
      setTyped(fullA.slice(0, Math.min(i, fullA.length)));
      const delay = i >= fullA.length ? 1800 : 24 + Math.random() * 30;
      setTimeout(tick, delay);
    };
    tick();
    return () => { cancelled = true; };
  }, []);

  return (
    <section className={styles.hero}>
      <div className={`container ${styles.heroGrid}`}>

        {/* ── Left: copy ── */}
        <div className="reveal in">
          <div className={styles.heroBadge}>
            <b>New</b> Your positioning now lives inside every post
          </div>

          <h1 className="h-xl">
            Your LinkedIn Team. <span className="blue">Inside One Software.</span>
          </h1>

          <p className={styles.subhead}>
            Turn LinkedIn Into Your Most Profitable Client Acquisition Channel.
          </p>

          <p className="lead" style={{ maxWidth: 520 }}>
            Link Assist replaces the work of a LinkedIn strategist, content researcher,
            content writer, editor and engagement manager with one intelligent platform.
            It helps founders of service businesses build authority, stay consistent and
            attract inbound clients without spending hours on LinkedIn every day.
          </p>

          <div className={styles.heroCta}>
            <a href="#pricing" className="btn btn-primary btn-lg">
              Start Your Free Trial <span className="arrow">→</span>
            </a>
            <a href="#how" className="btn btn-ghost btn-lg">
              See how it works
            </a>
          </div>

          <div className="reassure">
            <span><span className="tick">✓</span> No Credit Card Required</span>
            <span><span className="tick">✓</span> Cancel anytime</span>
            <span><span className="tick">✓</span> Setup in minutes</span>
          </div>
        </div>

        {/* ── Right: Post stack — EXACT positions from V2 HeroV2.jsx ── */}
        <div className={styles.rightCol}>
          {/* Outer: width 100%, height 520, flex justify-end */}
          <div className={styles.outerWrap}>
            {/* Stage: width 550, height 520, position relative */}
            <div className={styles.cardStage}>

              {/* Card A — Aanya: top:15 left:-30 z:1 --r:-3deg delay:0s */}
              <div className={`${styles.lcCard} ${styles.lcFloatA}`}>
                <MiniPost
                  name="Aanya Mehta"
                  role="Solopreneur · 47k followers"
                  time="3h"
                  body="After 3 years of consulting, I've seen one pattern in every founder who scaled past $1M ARR."
                  likes="3.4K"
                  comments="212"
                  avatarGrad="linear-gradient(135deg,#cfe0f7,#9dc2ff)"
                />
              </div>

              {/* Card B — Marc: top:60 left:270 opacity:0.95 z:2 --r:4deg delay:1.4s */}
              <div className={`${styles.lcCard} ${styles.lcFloatB}`}>
                <MiniPost
                  name="Marc Bowen"
                  role="Partner, Atlas Ventures"
                  time="Tomorrow · 9:00 AM"
                  body="We just shipped the messiest launch of our lives. It worked anyway. The 4 lessons:"
                  likes="—"
                  comments="—"
                  pinned
                  avatarGrad="linear-gradient(135deg,#dfe7f2,#b9c6da)"
                />
              </div>

              {/* Card C — Composer: top:270 left:60 z:3 --r:1deg delay:0.7s */}
              {/* "AI is writing" chip is on this card: top:-14 right:-14 */}
              <div className={`${styles.lcCard} ${styles.lcFloatC}`}>
                <div style={{ position: 'relative' }}>
                  <div className={styles.aiChip}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2 14 10 22 12 14 14 12 22 10 14 2 12 10 10 z"/>
                    </svg>
                    AI is writing
                  </div>
                  <MiniPost
                    name="LinkAssist Composer"
                    role="Drafting · style: 'Aanya M.'"
                    time="Just now"
                    pinned
                    isLogo
                    body={
                      <>
                        {typed}
                        <span className={styles.caret} />
                      </>
                    }
                    likes="—"
                    comments="—"
                  />
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>

      {/* Animation keyframes injected as style tag — same as V2 */}
      <style>{`
        @keyframes lcBlink { 50% { opacity: 0; } }
        @keyframes lcFloat {
          0%, 100% { transform: rotate(var(--r, 0deg)) translateY(0); }
          50%       { transform: rotate(var(--r, 0deg)) translateY(-8px); }
        }
      `}</style>
    </section>
  );
}
