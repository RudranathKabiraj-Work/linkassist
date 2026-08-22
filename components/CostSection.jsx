"use client";

import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Eye, ShieldCheck, Repeat2, TrendUp, TrendDown, MessageSq } from '@/components/linkassist/Icons';
import { V2 } from '@/components/linkassist/Tokens';
import { Meteors } from '@/components/linkassist/SectionsA';
import FramerScroll from '@/components/linkassist/FramerScroll';

const costs = [
  { num: '01', title: 'Competitors out-visible you', body: 'They show up daily. You slip out of the feed — and out of mind.', icon: Eye },
  { num: '02', title: 'Trust goes to someone else', body: 'Potential clients trust a name they recognise before they even discover your business.', icon: ShieldCheck },
  { num: '03', title: 'You stay dependent on referrals', body: 'Instead of predictable inbound enquiries arriving on their own.', icon: Repeat2 },
  { num: '04', title: 'You spend more on ads', body: 'Because your personal brand isn\'t bringing opportunities organically.', icon: TrendUp },
  { num: '05', title: 'You compete on price', body: 'Prospects don\'t see you as the obvious expert, so it comes down to cost.', icon: TrendDown },
  { num: '06', title: 'You re-explain your credibility', body: 'On every call — instead of letting your content prove it for you.', icon: MessageSq },
];

function CostCard({ costCard }) {
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 960px)');
    setIsMobile(mq.matches);
    const handler = (e) => setIsMobile(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const active = isMobile || isHovered;

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const Icon = costCard.icon;

  return (
    <motion.article
      ref={cardRef}
      onMouseMove={isMobile ? undefined : handleMouseMove}
      onMouseEnter={isMobile ? undefined : () => setIsHovered(true)}
      onMouseLeave={isMobile ? undefined : () => setIsHovered(false)}
      whileHover={isMobile ? {} : { y: -6, scale: 1.015 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      style={{
        position: "relative",
        background: "#fff",
        border: active ? "1px solid rgba(0,102,178,0.35)" : "1px solid rgba(15,20,26,0.08)",
        borderRadius: 18,
        padding: "26px 26px 22px",
        overflow: "hidden",
        boxShadow: active
          ? "0 24px 50px -20px rgba(0,102,178,0.22), 0 0 20px -5px rgba(0,102,178,0.12)"
          : "0 1px 3px rgba(15,20,26,0.02)",
        transition: "border-color .25s, box-shadow .25s",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        height: "100%",
        textAlign: "left"
      }}
    >
      <Meteors number={10} />

      {active && (
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background: isMobile
              ? "radial-gradient(350px circle at 50% 50%, rgba(0,102,178,0.08), transparent 80%)"
              : `radial-gradient(350px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0,102,178,0.08), transparent 80%)`,
            zIndex: 1,
          }}
        />
      )}

      <span
        aria-hidden
        style={{
          position: "absolute",
          top: "50%",
          right: "-20px",
          transform: "translateY(-50%)",
          fontSize: "160px",
          fontWeight: 900,
          lineHeight: 1,
          letterSpacing: "-0.04em",
          color: "rgba(15,20,26,0.04)",
          pointerEvents: "none",
          userSelect: "none",
          zIndex: 0,
          fontFamily: "Geist, system-ui, sans-serif",
        }}
      >
        {parseInt(costCard.num, 10)}
      </span>

      <motion.div
        animate={isHovered ? { scale: 1.1, rotate: 6 } : { scale: 1, rotate: 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        style={{
          position: "relative",
          zIndex: 2,
          width: 44,
          height: 44,
          borderRadius: 12,
          background: active ? "rgba(0,102,178,0.08)" : V2.coralTint,
          color: active ? V2.blue : V2.coralPress,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "background .25s, color .25s",
          alignSelf: "flex-start"
        }}
      >
        <Icon size={22} />
      </motion.div>

      <h3 style={{ position: "relative", zIndex: 2, marginTop: 12, font: "600 19px/1.2 Geist", color: V2.ink, letterSpacing: "-0.012em", margin: 0 }}>
        {costCard.title}
      </h3>
      <p style={{ position: "relative", zIndex: 2, font: "400 13.5px/1.6 Geist", color: "#525B66", margin: 0 }}>
        {costCard.body}
      </p>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: active ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "2px",
          background: "linear-gradient(90deg, #0066B2, #FF6B50)",
          transformOrigin: "left",
          zIndex: 2,
        }}
      />
    </motion.article>
  );
}

export default function CostSection() {
  return (
    <section className="section sky" id="cost-section">
      <style>{`
        #cost-section .cost-grid {
          margin-top: 32px;
        }
      `}</style>
      <div className="container">
        <div className="narrow reveal">
          <p className="eyebrow">Chapter 02 · The Cost</p>
          <h2 className="h-lg two-lines">
            <span>Every Week You Stay Inconsistent,</span>
            <span className="blue">Your Business Pays The Price.</span>
          </h2>
        </div>

        <div className="grid-3 cost-grid">
          {costs.map((costCard, idx) => (
            <FramerScroll key={costCard.num} delay={idx * 0.08} animation="fade-up">
              <CostCard costCard={costCard} />
            </FramerScroll>
          ))}
        </div>

        <p className="lead" style={{ textAlign: 'center', marginTop: 40 }}>
          The biggest cost isn't missed posts. It's missed opportunities. Every week someone is
          looking for exactly the service you provide. The question is — will they find you, or
          your competitor?
        </p>
      </div>
    </section>
  );
}
