'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import styles from './Hero.module.css';

/* ─── Inline MiniPost — matches V2 MiniPost.jsx exactly ─────────────────── */
function MiniPost({ name, role, time, body, likes, comments, pinned, avatar, avatarGrad, isLogo, width }) {
  return (
    <div className={styles.miniPost} style={width ? { width } : undefined}>
      <div className={styles.mpHead}>
        {avatar ? (
          <img
            src={avatar}
            alt=""
            className={styles.mpAvatar}
            style={{ objectFit: 'cover' }}
          />
        ) : (
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
        )}
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
        <div className={styles.mpReacts} style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ display: 'inline-flex' }}>
            {[
              ["#378FE9", "M7 10v12M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"],
              ["#E16745", "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"],
              ["#DFA249", "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.8.8 1.3 1.5 1.5 2.5M9 18h6M10 22h4"]
            ].map(([fill, d], i) => (
              <span
                key={i}
                className={styles.react}
                style={{
                  background: fill,
                  marginLeft: i === 0 ? 0 : -4,
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg width="8" height="8" viewBox="0 0 24 24" fill="#fff" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d={d} />
                </svg>
              </span>
            ))}
          </span>
          <span className={styles.mpLikes} style={{ marginLeft: 6 }}>{likes}</span>
        </div>
        <div>{comments} comments</div>
      </div>
    </div>
  );
}

/* ─── Hero ───────────────────────────────────────────────────────────────── */
export default function Hero() {
  const router = useRouter();
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
      {/* Decorative soft blobs */}
      <div aria-hidden style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <div style={{
          position: "absolute", top: -120, right: -80, width: 520, height: 520,
          background: "radial-gradient(closest-side, rgba(0,102,178,0.20), transparent 70%)",
          filter: "blur(8px)"
        }} />
        <div style={{
          position: "absolute", bottom: -160, left: -100, width: 480, height: 480,
          background: "radial-gradient(closest-side, rgba(10,102,194,0.18), transparent 70%)",
          filter: "blur(8px)"
        }} />
      </div>

      <div className={styles.heroGrid}>

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
            <motion.button
              whileHover="hover"
              whileTap={{ scale: 0.96 }}
              variants={{
                hover: {
                  scale: 1.03,
                  background: "linear-gradient(135deg, #054a91 0%, #06346b 100%)",
                  boxShadow: "0 14px 30px -4px rgba(3, 28, 66, 0.6), inset 0 1px 1px rgba(255, 255, 255, 0.8)",
                },
              }}
              onClick={() => router.push("/pricing")}
              style={{
                position: "relative",
                overflow: "hidden",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                background: "linear-gradient(135deg, #0A66C2 0%, #1c83d3 100%)",
                color: "#fff",
                border: "1px solid rgba(255, 255, 255, 0.4)",
                padding: "5px 34px",
                borderRadius: 9999,
                cursor: "pointer",
                font: "600 16px/1 Geist",
                letterSpacing: "-0.005em",
                boxShadow: "0 6px 16px -2px rgba(0, 102, 178, 0.35), inset 0 1px 1px rgba(255, 255, 255, 0.6)",
              }}
            >
              <span style={{ position: "relative", zIndex: 1 }}>Start Your Free Trial</span>
              <motion.span
                variants={{
                  hover: { x: 4 },
                }}
                transition={{ duration: 0.2 }}
                style={{
                  position: "relative",
                  zIndex: 1,
                  width: 19,
                  height: 19,
                  borderRadius: 9999,
                  background: "rgba(255,255,255,0.2)",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
              </motion.span>
            </motion.button>
            <a href="#how-it-works" className="btn btn-ghost btn-lg">
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
                  avatar="/assets/testimonials/prashum-lucky.png"
                  width={280}
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
                  avatar="/assets/testimonials/pranav-prathi.png"
                  width={280}
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
                    avatar="/assets/logo-icon.png"
                    width={280}
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
