"use client";

import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock, Bot, FileText, Building2, Lightbulb, Calendar } from '@/components/linkassist/Icons';
import { V2 } from '@/components/linkassist/Tokens';
import { Meteors } from '@/components/linkassist/SectionsA';
import FramerScroll from '@/components/linkassist/FramerScroll';

const alternatives = [
  { num: '01', title: "I'll Do Everything Myself", body: "Running a business already demands your attention. LinkedIn always becomes tomorrow's task. Tomorrow never comes.", icon: Clock, accent: 'rgba(10,102,194,0.12)' },
  { num: '02', title: "I'll Use ChatGPT", body: "ChatGPT is an incredible writing assistant. But it doesn't know your positioning, your long-term strategy, or your best performing posts. It gives answers — it doesn't build your personal brand.", icon: Bot, accent: 'rgba(10,102,194,0.12)' },
  { num: '03', title: "I'll Hire A Content Writer", body: "Most writers can write. Very few can think like you. Your content slowly starts sounding generic because someone else is trying to communicate your expertise.", icon: FileText, accent: 'rgba(10,102,194,0.12)' },
  { num: '04', title: "I'll Hire A LinkedIn Agency", body: "This works for some businesses. But it's expensive, communication takes time, approvals take time, and you become dependent on external people to build your own personal brand.", icon: Building2, accent: 'rgba(10,102,194,0.12)' },
  { num: '05', title: "I'll Buy Another LinkedIn Course", body: "Courses teach concepts. They don't help you execute every single day. Knowledge without execution changes nothing.", icon: Lightbulb, accent: 'rgba(10,102,194,0.12)' },
  { num: '06', title: "I'll Wait Until Business Slows Down", body: "It won't. The founders winning on LinkedIn aren't less busy — they simply have a better system.", icon: Calendar, accent: 'rgba(10,102,194,0.12)' },
];

function AlternativeCard({ altCard }) {
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

  const Icon = altCard.icon;

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
        height: "100%"
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
        {parseInt(altCard.num, 10)}
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
        {altCard.title}
      </h3>
      <p style={{ position: "relative", zIndex: 2, font: "400 13.5px/1.6 Geist", color: "#525B66", margin: 0 }}>
        {altCard.body}
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

export default function AlternativesSection() {
  return (
    <section className="section sky" id="alternatives-section">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-10">
        <div className="narrow reveal">
          <p className="eyebrow">Chapter 04 · "I'll Figure It Out Myself."</p>
          <h2 className="h-lg">
            That's What Almost Everyone Thinks —{' '}
            <span className="blue">Until Every Option Breaks Down.</span>
          </h2>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr gap-3 md:gap-5">
          {alternatives.map((altCard, idx) => (
            <FramerScroll key={altCard.num} delay={idx * 0.08} animation="fade-up">
              <AlternativeCard altCard={altCard} />
            </FramerScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
