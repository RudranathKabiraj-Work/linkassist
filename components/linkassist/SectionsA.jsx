// SectionsA — LogoMarquee, FeaturesV2, HowItWorksV2 (Rebuilt for CSS match)
"use client";

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { V2 } from './Tokens';
import { Calendar, BarChart3, Bot, Users, Sparkles, Shield, Search, FileText, Star, MessageSq, TrendUp } from './Icons';
import FramerScroll from './FramerScroll';
import LogoLoop from './LogoLoop';

const SMOOTH_SCROLL_SPRING = { stiffness: 55, damping: 20, mass: 0.8, restDelta: 0.0005 };

export function LogoMarquee() {
  const companyLogos = [
    { src: "/assets/clientlogos/1.png", alt: "EY" },
    { src: "/assets/clientlogos/2.png", alt: "Apple" },
    { src: "/assets/clientlogos/3.png", alt: "SEW" },
    { src: "/assets/clientlogos/4.png", alt: "GlobalLogic" },
    { src: "/assets/clientlogos/5.png", alt: "TCS" },
    { src: "/assets/clientlogos/6.png", alt: "Amazon" },
  ];

  return (
    <section className="logo-loop-section" style={{
      background: V2.creamDeep, padding: "10px 0", overflow: "hidden",
      borderTop: "1px solid rgba(15,20,26,0.04)", borderBottom: "1px solid rgba(15,20,26,0.04)"
    }}>
      <div className="max-w-[1240px] mx-auto px-6 lg:px-10">
        <div style={{
          font: "500 12px/1 Geist", color: "#8B7355", letterSpacing: ".18em",
          textTransform: "uppercase", textAlign: "center", marginBottom: 18
        }}>
          Built for founders at companies like
        </div>
      </div>
      <LogoLoop
        logos={companyLogos}
        speed={40}
        direction="left"
        logoHeight={64}
        gap={64}
        pauseOnHover={false}
        fadeOut={true}
        fadeOutColor={V2.creamDeep}
        ariaLabel="Client logos marquee"
      />
      <style>{`
        .logo-loop-section .logoloop__item img {
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1) !important;
          opacity: 0.85;
        }
      `}</style>
    </section>
  );
}

function Meteors({ number = 12, className = "" }) {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);

  const meteors = React.useMemo(() => {
    return new Array(number).fill(true).map((_, idx) => ({
      id: idx,
      left: idx * (300 / number) - 150,
      delay: Math.random() * 1.2,
      duration: Math.random() * 2 + 2.5,
    }));
  }, [number]);

  if (!mounted) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className={className}
      style={{
        position: "absolute", inset: 0, overflow: "hidden",
        pointerEvents: "none", zIndex: 0
      }}
      aria-hidden
    >
      {meteors.map((m) => (
        <span
          key={m.id}
          className="lc-meteor"
          style={{
            position: "absolute",
            top: "-30px",
            left: m.left + "px",
            height: "2px",
            width: "2px",
            borderRadius: "9999px",
            transform: "rotate(45deg)",
            background: V2.coral,
            boxShadow: "0 0 0 1px rgba(255,255,255,0.1)",
            animationDelay: m.delay + "s",
            animationDuration: m.duration + "s",
          }}
        >
          <span style={{
            position: "absolute", top: "50%", height: "1px", width: "44px",
            transform: "translateY(-50%)",
            background: `linear-gradient(to right, ${V2.coral}, transparent)`
          }} />
        </span>
      ))}
      <style>{`
        @keyframes lcMeteorEffect {
          0% { transform: rotate(45deg) translateX(0); opacity: 1; }
          75% { opacity: 1; }
          100% { transform: rotate(45deg) translateX(-260px); opacity: 0; }
        }
        .lc-meteor {
          animation-name: lcMeteorEffect;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
      `}</style>
    </motion.div>
  );
}

function FeatureCard({ f }) {
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -6, scale: 1.015 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      style={{
        position: "relative",
        background: "#fff",
        border: isHovered ? "1px solid rgba(0,102,178,0.35)" : "1px solid rgba(15,20,26,0.08)",
        borderRadius: 18,
        padding: "26px 26px 22px",
        overflow: "hidden",
        boxShadow: isHovered
          ? "0 24px 50px -20px rgba(0,102,178,0.22), 0 0 20px -5px rgba(0,102,178,0.12)"
          : "0 1px 3px rgba(15,20,26,0.02)",
        transition: "border-color .25s, box-shadow .25s",
      }}
    >
      <Meteors number={10} />

      {isHovered && (
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background: `radial-gradient(350px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0,102,178,0.08), transparent 80%)`,
            zIndex: 1,
          }}
        />
      )}

      <span
        style={{
          position: "absolute",
          top: 18,
          right: 22,
          font: "600 11px/1 Geist",
          color: isHovered ? V2.blue : "#B8C2CC",
          letterSpacing: ".08em",
          transition: "color .2s ease",
          zIndex: 2,
        }}
      >
        {f.n}
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
          background: isHovered ? "rgba(0,102,178,0.08)" : V2.coralTint,
          color: isHovered ? V2.blue : V2.coralPress,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "background .25s, color .25s",
        }}
      >
        <f.icon size={22} />
      </motion.div>

      <h3 style={{ position: "relative", zIndex: 2, marginTop: 24, font: "600 19px/1.2 Geist", color: V2.ink, letterSpacing: "-0.012em" }}>
        {f.t}
      </h3>
      <p style={{ position: "relative", zIndex: 2, marginTop: 8, font: "400 14px/1.55 Geist", color: "#525B66" }}>
        {f.d}
      </p>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isHovered ? 1 : 0 }}
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

export function TypewriterWords({ text, words, color }) {
  const list = words || (text ? text.split(" ").map(w => ({ text: w, color })) : []);
  let cumulativeCount = 0;
  const wordsArray = list.map((item) => {
    const obj = typeof item === 'string' ? { text: item, color } : item;
    const chars = obj.text.split("");
    const startIndex = cumulativeCount;
    cumulativeCount += chars.length;
    return { ...obj, chars, startIndex };
  });

  return (
    <>
      {wordsArray.map((word, wi) => (
        <span key={wi} style={{ display: "inline-flex", marginRight: "0.28em", whiteSpace: "nowrap" }}>
          {word.chars.map((char, ci) => (
            <motion.span
              key={ci}
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{
                duration: 0.18,
                delay: (word.startIndex + ci) * 0.035,
                ease: "easeOut",
              }}
              style={{ display: "inline-block", color: word.color || color || "inherit" }}
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </>
  );
}

export function FeaturesV2({ density }) {
  const features = [
    { n: "01", icon: Users, t: "Build Your User DNA", d: "Your positioning, expertise and voice — captured once, applied everywhere." },
    { n: "02", icon: Search, t: "Research Better Content", d: "Fresh, relevant ideas pulled from your industry, audience and competitors." },
    { n: "03", icon: Bot, t: "Create Better LinkedIn Posts", d: "Turn any idea into a post that sounds like you — in minutes, not hours." },
    { n: "04", icon: Star, t: "Build Your Swipe Library", d: "Save, organise and model the best posts you find. Never lose an idea." },
    { n: "05", icon: MessageSq, t: "Stay Active Every Day", d: "Engage faster with meaningful comments that build real relationships." },
    { n: "06", icon: TrendUp, t: "Grow With Confidence", d: "A repeatable system that compounds your authority week after week." },
  ];

  const padY = "py-10 md:py-[88px]";
  return (
    <section id="features" className={`scroll-mt-24 lg:scroll-mt-32 ${padY}`} style={{ background: "#fff" }}>
      <div className="max-w-[1240px] mx-auto px-6 lg:px-10">
        <SectionHead eyebrow="Everything In One Place"
          title={<>Everything You Need To Grow On LinkedIn. <TypewriterWords text="One Platform." color={V2.coral} /></>}
          sub="Everything works together — exactly the way LinkedIn growth should." />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5">
          {features.map((f, idx) => (
            <FramerScroll key={f.n} delay={idx * 0.08} animation="fade-up">
              <FeatureCard f={f} />
            </FramerScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

function StepCardItem({ number, stepNumStr, title, sub, children }) {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start 75%", "center 50%", "end 25%"],
  });
  const smooth = useSpring(scrollYProgress, SMOOTH_SCROLL_SPRING);

  const activeBlue = "#0066B2";
  const activeBorder = "rgba(0,82,143,0.65)";
  const activeBg = "#F7FAFF";
  const activeShadow = "rgba(0,102,178,0.18)";

  const border = useTransform(smooth, [0, 0.35, 0.65, 1], [
    "1.5px solid rgba(15,20,26,0.08)",
    `2px solid ${activeBorder}`,
    `2px solid ${activeBorder}`,
    "1.5px solid rgba(15,20,26,0.08)"
  ]);
  const shadow = useTransform(smooth, [0, 0.35, 0.65, 1], [
    "0 1px 3px rgba(15,20,26,0.02)",
    `0 12px 28px -10px ${activeShadow}`,
    `0 12px 28px -10px ${activeShadow}`,
    "0 1px 3px rgba(15,20,26,0.02)"
  ]);
  const bg = useTransform(smooth, [0, 0.35, 0.65, 1], [
    "#FFFFFF",
    activeBg,
    activeBg,
    "#FFFFFF"
  ]);

  const numBg = useTransform(smooth, [0, 0.35, 0.65, 1], [
    "#FFFFFF",
    activeBlue,
    activeBlue,
    "#FFFFFF"
  ]);
  const numBorder = useTransform(smooth, [0, 0.35, 0.65, 1], [
    "2px solid rgba(15,20,26,0.12)",
    `2px solid ${activeBlue}`,
    `2px solid ${activeBlue}`,
    "2px solid rgba(15,20,26,0.12)"
  ]);
  const numColor = useTransform(smooth, [0, 0.35, 0.65, 1], [
    "#9AA3AD",
    "#FFFFFF",
    "#FFFFFF",
    "#9AA3AD"
  ]);

  return (
    <div ref={cardRef} style={{ textAlign: "center", position: "relative", zIndex: 10 }}>
      <motion.div style={{
        width: 64, height: 64, borderRadius: 9999,
        background: numBg,
        border: numBorder,
        color: numColor,
        display: "flex", alignItems: "center", justifyContent: "center",
        font: "700 24px/1 Geist", margin: "0 auto 16px"
      }}>
        {number}
      </motion.div>
      <motion.div style={{
        padding: "24px 30px 30px", borderRadius: 18,
        background: bg,
        border: border,
        boxShadow: shadow,
      }}>
        <div style={{ font: "600 11px/1 Geist", color: activeBlue, letterSpacing: ".08em", textTransform: "uppercase", textAlign: "left" }}>
          {stepNumStr}
        </div>
        <h3 style={{ marginTop: 6, font: "700 22px/1.2 Geist", color: V2.ink, letterSpacing: "-0.012em", textAlign: "left" }}>
          {title}
        </h3>
        <p style={{ marginTop: 8, font: "400 14px/1.55 Geist", color: "#525B66", textAlign: "left" }}>
          {sub}
        </p>
        {children}
      </motion.div>
    </div>
  );
}

// ─── Explee-style sticky stack card ───────────────────────────────────────────
// Each card has position:sticky with an incrementing top offset (+20px per card)
// and a higher z-index. A JS scroll listener shrinks buried cards via scale().
// minScale formula: 0.82 + 0.045 * index  (card 0 → 0.82, last card → 1.0)
// When scrolling past: the entire stack exits together — no per-card unstack.

const CARD_TOP_BASE = 240; // px — first card sticky top offset (below heading + gap)
const CARD_TOP_STEP = 18;  // px — extra offset per card  (the "peeking tabs")

function PipelineCard({ step, index, total, containerRef }) {
  const cardRef = useRef(null);
  const rafRef = useRef(null);
  const minScale = 0.82 + 0.045 * index; // card 0 → 0.82 … last → 1.0

  React.useEffect(() => {
    const container = containerRef.current;
    if (!container || !cardRef.current) return;

    // How many px of section scroll = one card's full shrink phase
    const SCROLL_PER_CARD = 160;

    const applyScale = () => {
      const el = cardRef.current;
      if (!el) return;

      // Last card never shrinks
      if (index === total - 1) {
        el.style.transform = 'scale(1)';
        return;
      }

      // How far has the section scrolled past the top of the viewport?
      const sectionScrolled = -container.getBoundingClientRect().top;

      // Card i shrinks during scroll band [i*SCROLL_PER_CARD … (i+1)*SCROLL_PER_CARD]
      const bandStart = index * SCROLL_PER_CARD;
      const bandEnd = (index + 1) * SCROLL_PER_CARD;

      const progress = Math.max(0, Math.min(1,
        (sectionScrolled - bandStart) / (bandEnd - bandStart)
      ));

      const scale = 1 - (1 - minScale) * progress;
      el.style.transform = `scale(${scale.toFixed(4)})`;
    };

    const onScroll = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        applyScale();
        rafRef.current = null;
      });
    };

    applyScale();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [index, total, minScale, containerRef]);

  const bgGradients = [
    "linear-gradient(135deg, #5BA8E5 0%, #0066B2 100%)",
    "linear-gradient(135deg, #0066B2 0%, #005291 100%)",
    "linear-gradient(135deg, #004A80 0%, #002F66 100%)",
    "linear-gradient(135deg, #003A6E 0%, #001F42 100%)",
    "linear-gradient(135deg, #002952 0%, #000D1A 100%)",
  ];

  const cardMarginBottom = (total - 1 - index) * CARD_TOP_STEP;

  return (
    <div
      style={{
        position: 'sticky',
        top: `${CARD_TOP_BASE + index * CARD_TOP_STEP}px`,
        zIndex: 10 + index,
        marginBottom: `${cardMarginBottom}px`, // Progressive offsets only, last card is 0px
      }}
    >
      {/* scale wrapper — JS mutates transform directly for perf */}
      <div
        ref={cardRef}
        className="!h-[460px] sm:!h-[380px]"
        style={{
          transformOrigin: 'top center',
          willChange: 'transform',
          transition: 'transform 0.08s linear',
          borderRadius: 32,
          overflow: 'hidden',
          background: bgGradients[index % bgGradients.length],
          boxShadow: '0 2px 8px rgba(0,0,0,0.08), 0 12px 32px rgba(0,0,0,0.22), 0 32px 56px rgba(0,0,0,0.18)',
          border: '1px solid rgba(255,255,255,0.2)',
          color: '#fff',
        }}
      >
        {/* ── Card content — original layout ── */}
        <div className="flex flex-col sm:flex-row" style={{ height: '100%' }}>

          {/* IMAGE panel — mobile top 50% */}
          <div className="sm:hidden" style={{
            width: '100%', height: '50%',
            borderRadius: 20, overflow: 'hidden', flexShrink: 0,
          }}>
            {step.image ? (
              <img src={step.image} alt={step.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            ) : (
              <div style={{
                width: '100%', height: '100%', background: 'rgba(255,255,255,0.08)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <span style={{ fontSize: 48, opacity: 0.4 }}>{step.icon || '🖼️'}</span>
              </div>
            )}
          </div>

          {/* TEXT — desktop left (flex:1) */}
          <div className="hidden sm:flex flex-col justify-center p-[8px_14px] sm:p-10" style={{ flex: 1 }}>
            <span className="scd-01__num text-xs sm:text-sm md:text-base mb-1">{step.n}</span>
            <h3 className="text-base sm:text-2xl md:text-3xl font-bold tracking-tight mt-1 mb-1 sm:mb-3">{step.title}</h3>
            <p className="text-[12px] sm:text-base md:text-lg mb-2 sm:mb-4 sm:leading-relaxed">{step.desc}</p>
            {step.body}
          </div>

          {/* IMAGE panel — desktop right 50% */}
          <div className="hidden sm:block" style={{
            flexShrink: 0, width: '50%',
            borderRadius: 30, overflow: 'hidden', position: 'relative',
          }}>
            {step.image ? (
              <img src={step.image} alt={step.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            ) : (
              <div style={{
                width: '100%', height: '100%', background: 'rgba(255,255,255,0.08)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <span style={{ fontSize: 48, opacity: 0.4 }}>{step.icon || '🖼️'}</span>
              </div>
            )}
          </div>

          {/* TEXT — mobile below image */}
          <div className="sm:hidden flex flex-col justify-center p-[8px_14px]" style={{ flex: 1 }}>
            <span className="scd-01__num text-xs mb-1">{step.n}</span>
            <h3 className="text-base font-bold tracking-tight mt-1 mb-1">{step.title}</h3>
            <p className="text-[12px] mb-2 leading-relaxed">{step.desc}</p>
            {step.body}
          </div>
        </div>
      </div>
    </div>
  );
}

export function HowItWorksV2() {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [bottomOffset, setBottomOffset] = useState(396);

  React.useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 640;
      setIsMobile(mobile);

      const cardHeight = mobile ? 460 : 380;
      const cardFirstStickyTop = 240;
      const cardTopStep = 18;
      const totalCards = 5;
      const cardFirstMB = (totalCards - 1) * cardTopStep; // pure offset offset

      const headerStickyTop = 108;
      const headerHeight = mobile ? 180 : 140;

      // Cards unstick point: stickyTop + height of the last card
      const cardUnstick = cardFirstStickyTop + cardHeight + cardFirstMB;
      // Header unstick point: its sticky top + border-box height + marginBottom.
      // Sticky positioning constrains the margin box of the element within its container,
      // so the 48px marginBottom is included to keep it sticky until the 5th card completes stacking.
      const headerUnstick = headerStickyTop + headerHeight + 48;

      const offset = cardUnstick - headerUnstick;
      setBottomOffset(offset);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const steps = [
    {
      n: '01',
      title: 'Build Your User DNA',
      desc: 'Answer a few simple questions. Your positioning, voice and goals are captured once — remembered forever.',
      image: '/assets/illustrations/connect-instantly.png',
    },
    {
      n: '02',
      title: 'Never Run Out Of Ideas',
      desc: 'Fresh, relevant content ideas pulled from your industry, audience and competitors every single day.',
      image: '/assets/illustrations/launch-campaign.png',
    },
    {
      n: '03',
      title: 'Create Content That Sounds Like You',
      desc: 'Turn any idea into a LinkedIn post in minutes — in your voice, not generic AI copy.',
      image: '/assets/illustrations/monthly-analytics.png',
    },
    {
      n: '04',
      title: 'Build Your Swipe Library',
      desc: 'Save, organise and model the best posts you find. Never lose an idea again.',
      image: '/assets/illustrations/track-grow.png',
    },
    {
      n: '05',
      title: 'Stay Consistent. Let Authority Compound.',
      desc: 'Engage consistently, stay visible, and let trust build — until inbound finds you.',
      image: '/assets/L.png',
    },
  ];

  return (
    <section
      id="how-it-works"
      ref={containerRef}
      className="scroll-mt-24 lg:scroll-mt-32 py-10 md:pt-20 md:pb-[120px]"
      style={{ background: V2.creamDeep }}
    >
      {/* Both heading and cards share this container to synchronize their sticky boundaries */}
      <div className="max-w-[1100px] mx-auto px-4 md:px-6" style={{ position: 'relative' }}>

        {/* ── Header Parent Container (defines sticky boundaries for heading) ── */}
        <div style={{
          position: 'absolute',
          top: 0,
          bottom: `${bottomOffset}px`,
          left: 0,
          right: 0,
          pointerEvents: 'none',
        }}>
          {/* ── Sticky heading — stays above all cards ── */}
          <div style={{
            position: 'sticky',
            top: 108,
            height: isMobile ? 180 : 140,
            zIndex: 10 + steps.length + 1,
            textAlign: 'center',
            marginBottom: 48,
          }}>
            <div className="pointer-events-auto">
              <SectionHead
                center
                eyebrow="How It Works"
                title={<>Your LinkedIn Growth. <TypewriterWords text="Simplified." color={V2.coral} /></>}
                sub="Five steps. One seamless workflow. Growing on LinkedIn has never felt this focused."
              />
            </div>
          </div>
        </div>

        {/* ── Static Spacer (offsets cards list below sticky absolute header) ── */}
        <div style={{ height: `${isMobile ? 180 + 48 : 140 + 48}px` }} aria-hidden />

        {/* ── Card stack ── */}
        {steps.map((step, idx) => (
          <PipelineCard
            key={step.n}
            step={step}
            index={idx}
            total={steps.length}
            containerRef={containerRef}
          />
        ))}
      </div>
    </section>
  );
}

// Shared section header
export function SectionHead({ eyebrow, title, sub, center = false }) {
  return (
    <div style={{ maxWidth: 760, margin: center ? "0 auto" : 0, textAlign: center ? "center" : "left" }}>
      <div style={{
        font: "500 11px/1 Geist", color: V2.coral, letterSpacing: ".14em",
        textTransform: "uppercase"
      }}>{eyebrow}</div>
      <h2 style={{
        marginTop: 6, font: "800 clamp(1.3rem, 3.2vw, 2.875rem)/1.08 Geist",
        color: V2.ink, letterSpacing: "-0.028em", textWrap: "balance"
      }}>
        {title}
      </h2>
      {sub && (
        <p style={{
          marginTop: 6, font: "400 clamp(12.5px, 2vw, 17px)/1.45 Geist", color: "#525B66",
          maxWidth: 600, textWrap: "pretty",
          marginLeft: center ? "auto" : 0, marginRight: center ? "auto" : 0
        }}>
          {sub}
        </p>
      )}
    </div>
  );
}