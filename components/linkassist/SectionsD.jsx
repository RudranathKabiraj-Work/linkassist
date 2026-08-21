// SectionsD — TestimonialsV2 (two-row counter-scrolling marquee),
// FAQV2 (flat accordion), CTAV2 (warm gradient + tape), FooterV2 (cream).
"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { V2 } from './Tokens';
import { Linkedin, Mail } from './Icons';
import { SectionHead, TypewriterWords } from './SectionsA';
import FramerScroll from './FramerScroll';
import { ShootingStars } from '../ui/ShootingStars';
import { StarsBackground } from '../ui/StarsBackground';


const TESTI = [
  { name: "Prashum Lucky", role: "Global Director", avatar: "/assets/testimonials/prashum-lucky.png", text: "LinkAssist saved me hours every week. I create once. It posts like clockwork." },
  { name: "Atul Kumar", role: "Lead AEM Developer", avatar: "/assets/testimonials/atul-gupta.png", text: "I stopped overthinking my content. The ideas and the scheduling just work." },
  { name: "Pranav Prathi", role: "Associate Architect", avatar: "/assets/testimonials/pranav-prathi.png", text: "From invisible to consistent — my LinkedIn engagement has doubled." },
  { name: "Durgesh Tiwary", role: "Senior QA Lead", avatar: "/assets/testimonials/durgesh-tiwary.png", text: "Feels like I've hired a content team. It's all just LinkAssist." },
  { name: "Shweta", role: "Professional", avatar: "/assets/testimonials/shweta.png", text: "Finally — a tool that gets my tone right and posts at the right time." },
  { name: "Debasisa Pattanaik", role: "Team Lead", avatar: "/assets/testimonials/debasisa-pattanaik.png", text: "Posting used to be stressful. Now it's on autopilot — and it works." },
  { name: "Raj Shekhar", role: "Founder, freight SaaS", avatar: "/assets/testimonials/raj-shekhar.png", text: "We replaced our ghostwriter retainer with a Pro plan and didn't look back." },
];

export function TestimonialsV2({ density }) {
  const padY = density === "compact" ? "pt-4 pb-8 md:py-16" : "pt-6 pb-12 md:py-24";

  // Two split rows for the counter-scrolling effect
  const rowA = [...TESTI, ...TESTI];
  const rowB = [...TESTI.slice().reverse(), ...TESTI.slice().reverse()];

  return (
    <section className={padY} style={{ position: "relative", background: "#fcfcfd", overflow: "hidden" }}>
      {/* Decorative glassmorphic background blobs */}
      <div style={{
        position: "absolute",
        top: "20%",
        left: "10%",
        width: 300,
        height: 300,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(0, 102, 178, 0.12) 0%, transparent 70%)",
        filter: "blur(40px)",
        pointerEvents: "none",
        zIndex: 0
      }} />
      <div style={{
        position: "absolute",
        bottom: "10%",
        right: "15%",
        width: 350,
        height: 350,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(10, 102, 194, 0.1) 0%, transparent 70%)",
        filter: "blur(50px)",
        pointerEvents: "none",
        zIndex: 0
      }} />
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        width: 400,
        height: 400,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(28, 131, 211, 0.08) 0%, transparent 70%)",
        filter: "blur(60px)",
        transform: "translate(-50%, -50%)",
        pointerEvents: "none",
        zIndex: 0
      }} />

      <div className="relative z-10 max-w-[1240px] mx-auto px-6 lg:px-10">
        <SectionHead eyebrow="Chapter 06 · The receipts"
          title={<>Quiet results, <TypewriterWords text="loud about it." color={V2.coral} /></>}
          sub="Founders, leaders, and creators using LinkAssist to show up daily — without burning out, hiring a ghostwriter, or learning a new tool every quarter." />

        <div style={{ marginTop: 38 }}>
          <Row items={rowA} direction="forward" />
          <Row items={rowB} direction="reverse" offset />
        </div>
      </div>
    </section>
  );
}

function Row({ items, direction, offset = false }) {
  return (
    <div style={{
      position: "relative", padding: "10px 0",
      WebkitMaskImage: "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
      maskImage: "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
      marginLeft: offset ? -60 : 0,
    }}>
      <div style={{
        display: "flex", gap: 18, width: "max-content",
        animation: `${direction === "forward" ? "lcTestiF" : "lcTestiB"} 50s linear infinite`,
        willChange: "transform",
      }}>
        {items.map((t, i) => (
          <Card key={i} t={t} i={i} />
        ))}
      </div>
      <style>{`
        @keyframes lcTestiF { to { transform: translateX(-50%); } }
        @keyframes lcTestiB { from { transform: translateX(-50%); } to { transform: translateX(0); } }
      `}</style>
    </div>
  );
}

function Card({ t, i }) {
  const rot = (i % 4 === 0) ? -1.2 : (i % 3 === 0 ? 0.8 : 0);
  const isBlue = i % 5 === 2;
  return (
    <div style={{
      flexShrink: 0, width: 360,
      background: isBlue
        ? "rgba(0, 101, 178, 1)"
        : "rgba(255, 255, 255, 0.95)",
      color: isBlue ? "#fff" : V2.ink,
      border: isBlue
        ? "1px solid rgba(255, 255, 255, 0.25)"
        : "1px solid rgba(15, 20, 26, 0.06)",
      borderRadius: 18, padding: "22px 22px 20px",
      transform: `rotate(${rot}deg)`,
      boxShadow: isBlue
        ? "0 8px 32px 0 rgba(0, 102, 178, 0.15), inset 0 1px 1px rgba(255, 255, 255, 0.2)"
        : "0 8px 32px 0 rgba(15, 20, 26, 0.05), inset 0 1px 1.5px rgba(255, 255, 255, 0.6)",
    }}>
      <div style={{ display: "flex", gap: 1 }}>
        {Array.from({ length: 5 }).map((_, k) => (
          <svg key={k} width="14" height="14" viewBox="0 0 24 24" fill={isBlue ? "#fff" : V2.coral}>
            <polygon points="12 2 15 9 22 9 16.5 13.5 18.5 21 12 17 5.5 21 7.5 13.5 2 9 9 9" />
          </svg>
        ))}
      </div>
      <p style={{
        marginTop: 12, font: "500 15.5px/1.5 Geist",
        color: isBlue ? "rgba(255,255,255,0.95)" : V2.ink,
        textWrap: "pretty"
      }}>
        “{t.text}”
      </p>
      <div style={{ marginTop: 18, display: "flex", alignItems: "center", gap: 10 }}>
        <img
          src={t.avatar}
          width={36}
          height={36}
          decoding="async"
          loading="lazy"
          alt=""
          style={{ width: 36, height: 36, borderRadius: 9999, objectFit: "cover", border: "2px solid rgba(255,255,255,0.18)" }}
        />
        <div>
          <div style={{ font: "600 13.5px/1.2 Geist" }}>{t.name}</div>
          <div style={{
            font: "400 12px/1.3 Geist",
            color: isBlue ? "rgba(255,255,255,0.6)" : "#8B95A1"
          }}>{t.role}</div>
        </div>
      </div>
    </div>
  );
}



// FAQ — flat accordion, one open at a time
export function FAQV2({ density }) {
  const padY = density === "compact" ? "py-8 md:py-16" : "py-12 md:py-24";

  const qs = [
    {
      q: "How long until my first post goes live?",
      a: "Less than 15 minutes from signup. Connect your LinkedIn, drop in five reference posts, pick a tone — and the first draft is queued."
    },
    {
      q: "Will posts sound like AI?",
      a: "We train on five posts you've actually written or liked. The model is biased toward your phrasing, your sentence length, even your emoji habits. Most users say their first three drafts feel uncanny."
    },
    {
      q: "Is this safe? Will my LinkedIn get banned?",
      a: "We use LinkedIn's official authentication and human-like delays. No browser automation, no scraping. Your account stays inside LinkedIn's terms — that's a hard rule, not a marketing line."
    },
    {
      q: "Can I edit posts before they go live?",
      a: "Always. Every scheduled post sits in your queue, editable up to the minute it posts. You can also approve-on-send if you want a checkpoint."
    },
    {
      q: "Do you offer refunds?",
      a: "Yes — 30-day money-back on annual plans, no questions. Monthly plans cancel inline, no email loops."
    },
    {
      q: "What LinkedIn accounts work?",
      a: "Personal, Premium, Sales Navigator, Recruiter. Different plans allow different numbers of connected accounts (1 on Free, 3 on Pro, 10+ on Enterprise)."
    },
    {
      q: "Do you handle DMs and connection requests?",
      a: "Yes — Pro includes intelligent engagement (smart connects, conversation prompts, objection handling). All actions stay inside LinkedIn's compliant rates."
    },
  ];
  const [open, setOpen] = useState(0);

  return (
    <section className={padY} style={{ background: V2.cream }}>
      <div className="max-w-[1240px] mx-auto px-6 lg:px-10">
        <SectionHead eyebrow="Chapter 07 · The basics"
          title={<>Quick answers to the <TypewriterWords text="fair questions." color={V2.coral} /></>}
          sub="The honest ones, with honest answers."
          center />

        <div style={{ marginTop: 36, maxWidth: 800, marginLeft: "auto", marginRight: "auto" }}>
          {qs.map((it, i) => {
            const on = open === i;
            return (
              <FramerScroll key={i} animation="fade-up" delay={i * 0.1}>
                <div style={{
                  background: "#fff",
                  borderRadius: 14,
                  marginBottom: 10,
                  border: "1px solid rgba(15,20,26,0.06)",
                  overflow: "hidden",
                }}>
                  <button onClick={() => setOpen(on ? -1 : i)}
                    style={{
                      width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between",
                      padding: "18px 22px", border: 0, background: "transparent", cursor: "pointer",
                      font: "600 16px/1.3 Geist", color: V2.ink, textAlign: "left",
                    }}>
                    <span>{it.q}</span>
                    <span style={{
                      flexShrink: 0, marginLeft: 16, width: 28, height: 28, borderRadius: 9999,
                      background: on ? V2.coral : V2.cream, color: on ? "#fff" : V2.ink,
                      display: "inline-flex", alignItems: "center", justifyContent: "center",
                      transition: "background .2s, transform .2s",
                      transform: on ? "rotate(45deg)" : "rotate(0deg)"
                    }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        strokeWidth="2.4" strokeLinecap="round"><path d="M12 5v14M5 12h14" /></svg>
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {on && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        style={{ overflow: "hidden" }}
                      >
                        <div style={{ padding: "0 22px 22px 22px", font: "400 14.5px/1.6 Geist", color: "#525B66" }}>
                          {it.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FramerScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// CTA — warm blue→coral gradient + scrolling tape underneath
export function CTAV2() {
  return (
    <section id="cta" style={{ position: "relative", overflow: "hidden", background: V2.coral, color: "#fff" }}>
      <StarsBackground starDensity={0.0002} />
      <ShootingStars />
      <div style={{
        position: "absolute", inset: 0,
        background: `radial-gradient(900px 400px at 80% 110%, rgba(255,255,255,0.16), transparent 60%), radial-gradient(700px 400px at 10% -20%, rgba(255,255,255,0.12), transparent 60%)`,
        pointerEvents: "none"
      }} />
      <div className="relative max-w-[1240px] mx-auto px-6 lg:px-10 py-12 lg:py-28 text-center">
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.22)",
          padding: "6px 14px", borderRadius: 9999, font: "500 12px/1 Geist"
        }}>
          <span style={{
            width: 6, height: 6, borderRadius: 9999, background: "#fff",
            boxShadow: `0 0 0 4px rgba(255,255,255,0.3)`
          }} />
          12,000+ founders are already shipping their week
        </div>

        <h2 style={{
          marginTop: 22, font: "800 clamp(2.25rem, 5vw, 3.75rem)/1 Geist",
          letterSpacing: "-0.035em", textWrap: "balance"
        }}>
          Show up on LinkedIn this week.<br />
          <span style={{ color: "#8ED0FF" }}>Without ever opening it.</span>
        </h2>
        <p style={{
          marginTop: 18, maxWidth: 540, marginLeft: "auto", marginRight: "auto",
          font: "400 17px/1.55 Geist", color: "rgba(255,255,255,0.75)"
        }}>
          7-day Pro trial. No card. Cancel inline. Five-minute setup.
        </p>

        <div className="mt-7 flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-3 max-w-md mx-auto">
          <motion.button
            style={{
              position: "relative",
              overflow: "hidden",
              display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 10,
              background: "linear-gradient(135deg, #0066B2 0%, #005291 100%)", color: "#fff",
              border: "1px solid rgba(255, 255, 255, 0.4)",
              padding: "14px 24px", borderRadius: 9999, cursor: "pointer",
              font: "600 15px/1 Geist", letterSpacing: "-0.005em",
              boxShadow: "0 10px 28px -6px rgba(0, 0, 0, 0.4)",
            }}
            className="w-full sm:w-auto text-center flex justify-center"
          >
            {/* Continuous White Shimmer Light Beam */}
            <motion.div
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 1.5, ease: "easeInOut" }}
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.4) 50%, transparent 100%)",
                transform: "skewX(-20deg)",
                pointerEvents: "none",
              }}
            />
            <span style={{ position: "relative", zIndex: 1 }}>Start free for 7 days</span>
            <span
              style={{
                position: "relative", zIndex: 1,
                width: 20, height: 20, borderRadius: 9999, background: "rgba(255,255,255,0.2)",
                display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0
              }}
            >
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
            </span>
          </motion.button>
          <button
            style={{
              position: "relative",
              display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8,
              background: "rgba(255,255,255,0.12)", color: "#fff", border: "1px solid rgba(255,255,255,0.3)",
              padding: "14px 24px", borderRadius: 9999, cursor: "pointer",
              font: "500 15px/1 Geist",
              overflow: "hidden",
              transition: "transform 0.15s ease, background 0.15s ease",
            }}

          >
            <span style={{ position: "relative", zIndex: 1 }}>Book a 15-min demo</span>
            <span className="btn-shine-sweep" />

            <style>{`
    .btn-shine-sweep {
      position: absolute;
      top: 0;
      left: -60%;
      width: 60%;
      height: 100%;
      background: linear-gradient(
        100deg,
        transparent 0%,
        rgba(255,255,255,0.8) 50%,
        transparent 100%
      );
      animation: btnShineSweep 3s infinite linear;
      pointer-events: none;
      z-index: 0;
    }
    @keyframes btnShineSweep {
      0% { left: -60%; }
      60% { left: 120%; }
      100% { left: 120%; }
    }
  `}</style>
          </button>
        </div>
      </div>

      {/* Marquee tape */}
      <div style={{
        borderTop: "1px solid rgba(255,255,255,0.16)",
        borderBottom: "1px solid rgba(255,255,255,0.16)",
        overflow: "hidden", position: "relative"
      }}>
        <div style={{
          display: "flex", gap: 0, width: "max-content",
          animation: "lcTape 32s linear infinite",
          willChange: "transform",
        }}>
          {Array.from({ length: 16 }).map((_, i) => {
            const words = ["Effortless", "Intelligent", "Unstoppable"];
            const w = words[i % 3];
            return (
              <span key={i} style={{
                display: "inline-flex", alignItems: "center", gap: 18,
                padding: "16px 26px", font: "700 22px/1 Geist", letterSpacing: "-0.02em",
                color: i % 3 === 1 ? "#8ED0FF" : "#fff",
              }}>
                {w}
                <span style={{ width: 8, height: 8, borderRadius: 9999, background: "#8ED0FF" }} />
              </span>
            );
          })}
        </div>
        <style>{`@keyframes lcTape { to { transform: translateX(-50%); } }`}</style>
      </div>
    </section>
  );
}

// Footer — animated city illustration design with driving car & cyclist GIFs
export function FooterV2() {
  const sections = [
    {
      title: "Product", links: [
        { l: "Features", h: "/#features" },
        { l: "Pricing", h: "/pricing" },
        { l: "Integrations", h: "#" },
        { l: "Changelog", h: "#" },
      ]
    },
    {
      title: "Resources", links: [
        { l: "Free tools", h: "/tools" },
        { l: "Guides", h: "#" },
        { l: "Blog", h: "/blog" },
        { l: "Brand kit", h: "#" },
      ]
    },
    {
      title: "Company", links: [
        { l: "About", h: "/about" },
        { l: "Contact", h: "#" },
        { l: "Partners", h: "#" },
        { l: "Careers", h: "#" },
      ]
    },
    {
      title: "Legal", links: [
        { l: "Privacy", h: "#" },
        { l: "Terms", h: "#" },
        { l: "Refund policy", h: "#" },
        { l: "DPA", h: "#" },
      ]
    },
  ];

  return (
    <footer className="new_footer_area" style={{ background: "#fbfbfd", color: V2.ink, position: "relative", overflow: "hidden" }}>
      <div className="new_footer_top" style={{ padding: "80px 0px 270px", position: "relative", overflowX: "hidden" }}>
        <div className="max-w-[1240px] mx-auto px-6 lg:px-10 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-10">
            <div className="col-span-2">
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <img
                  src="/assets/logo-icon.png"
                  width={36}
                  height={36}
                  decoding="async"
                  loading="lazy"
                  style={{ width: 36, height: 36, borderRadius: 9 }}
                  alt=""
                />
                <span style={{ font: "700 20px/1 Geist", color: "#263b5e", letterSpacing: "-0.015em" }}>LinkAssist</span>
              </div>
              <p style={{ marginTop: 16, font: "300 15px/1.6 Geist", color: "#6a7695", maxWidth: 320 }}>
                Grow your LinkedIn. Without the burnout. One quiet assistant that plans, writes, and ships your week.
              </p>
              <div style={{ marginTop: 18, display: "flex", gap: 8 }}>
                <a href="#" style={socialBtn} className="social-icon-hover"><Linkedin size={18} /></a>
                <a href="#" style={socialBtn} className="social-icon-hover"><Mail size={18} /></a>
              </div>
            </div>

            {sections.map((s) => (
              <div key={s.title}>
                <div style={{ font: "600 13px/1 Geist", color: "#263b5e", letterSpacing: ".1em", textTransform: "uppercase", marginBottom: 20 }}>{s.title}</div>
                <ul style={{ padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
                  {s.links.map((l) => (
                    <li key={l.l}>
                      <Link href={l.h} style={{
                        font: "400 14px/1 Geist", color: "#6a7695",
                        textDecoration: "none", transition: "color .2s ease"
                      }}
                        className="hover:text-[#5e2ced]">
                        {l.l}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Animated City Background + Volkswagen & Cyclist GIFs */}
        <div style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 340,
          background: 'url("https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEigB8iI5tb8WSVBuVUGc9UjjB8O0708X7Fdic_4O1LT4CmLHoiwhanLXiRhe82yw0R7LgACQ2IhZaTY0hhmGi0gYp_Ynb49CVzfmXtYHUVKgXXpWvJ_oYT8cB4vzsnJLe3iCwuzj-w6PeYq_JaHmy_CoGoa6nw0FBo-2xLdOPvsLTh_fmYH2xhkaZ-OGQ/s16000/footer_bg.png") no-repeat scroll center top',
          backgroundSize: "cover",
          width: "100%",
          pointerEvents: "none",
          opacity: 0.88,
          WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.4) 20%, #000 60%)",
          maskImage: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.4) 20%, #000 60%)",
        }}>
          <div className="footer-car" style={{
            background: 'url("https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEia0PYPxwT5ifToyP3SNZeQWfJEWrUENYA5IXM6sN5vLwAKvaJS1pQVu8mOFFUa_ET4JuHNTFAxKURFerJYHDUWXLXl1vDofYXuij45JZelYOjEFoCOn7E6Vxu0fwV7ACPzArcno1rYuVxGB7JY6G7__e4_KZW4lTYIaHSLVaVLzklZBLZnQw047oq5-Q/s16000/volks.gif") no-repeat center center',
            backgroundSize: "100%",
            filter: "hue-rotate(206deg) saturate(2) brightness(0.9)"
          }} />

          {/* Floating Navigation Pin Symbol with LinkAssist Logo */}
          <div className="footer-car-pin">
            <svg width="44" height="53" viewBox="0 0 48 58" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block" }}>
              <path
                d="M24 0C10.7452 0 0 10.7452 0 24C0 37.2548 24 58 24 58C24 58 48 37.2548 48 24C48 10.7452 37.2548 0 24 0Z"
                fill={V2.blue}
                stroke="#ffffff"
                strokeWidth="3"
              />
            </svg>
            <img
              src="/assets/logo-icon.png"
              width={28}
              height={28}
              decoding="async"
              loading="lazy"
              alt=""
              style={{
                position: "absolute",
                top: "8px",
                left: "8px",
                width: "28px",
                height: "28px",
                borderRadius: "50%",
                background: "#ffffff",
                padding: "4px",
                boxSizing: "border-box",
                objectFit: "contain"
              }}
            />
          </div>
          <div className="footer-cyclist" style={{
            background: 'url("https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhyLGwEUVwPK6Vi8xXMymsc-ZXVwLWyXhogZxbcXQYSY55REw_0D4VTQnsVzCrL7nsyjd0P7RVOI5NKJbQ75koZIalD8mqbMquP20fL3DxsWngKkOLOzoOf9sMuxlbyfkIBTsDw5WFUj-YJiI50yzgVjF8cZPHhEjkOP_PRTQXDHEq8AyWpBiJdN9SfQA/s16000/cyclist.gif") no-repeat center center',
            backgroundSize: "100%"
          }} />
          {/* Dynamic SVG Tree that reacts to passing traffic */}
          <svg width="60" height="95" viewBox="0 0 60 95" style={{
            position: "absolute",
            bottom: "38px",
            left: "78%",
            transform: "translateX(-50%)",
            zIndex: 1,
            pointerEvents: "none"
          }}>
            <path d="M27 95 L27 60 L33 60 L33 95 Z" fill="#2b0f78ff" />
            <g className="tree-leaves" style={{ transformOrigin: "30px 60px" }}>
              <circle cx="30" cy="38" r="22" fill="#15803d" />
              <circle cx="18" cy="44" r="15" fill="#16a34a" />
              <circle cx="42" cy="44" r="15" fill="#16a34a" />
              <circle cx="30" cy="22" r="14" fill="#22c55e" />
              <circle cx="26" cy="32" r="6" fill="#4ade80" opacity="0.6" />
              <circle cx="36" cy="22" r="5" fill="#4ade80" opacity="0.6" />
            </g>
          </svg>
        </div>
      </div>

      <div style={{
        padding: "24px 0 32px",
        background: "#fbfbfd",
        borderTop: "1px solid #e2e2eb",
        position: "relative",
        zIndex: 10
      }}>
        <div className="max-w-[1240px] mx-auto px-6 lg:px-10 flex flex-wrap gap-4 items-center justify-between font-body text-xs text-[#7f88a6]">
          <span>© 2026 LinkAssist. Made with care for founders & creators.</span>
          <span>Not endorsed by or affiliated with the LinkedIn Corporation.</span>
        </div>
      </div>

      <style>{`
        .footer-car {
          position: absolute;
          bottom: 12px;
          left: 0;
          z-index: 1;
          width: 275px;
          height: 87px;
          transform-origin: bottom left;
          will-change: transform;
          animation: lcCarDrive 24s linear infinite;
        }
        .footer-car-pin {
          position: absolute;
          bottom: 95px;
          left: 0;
          z-index: 10;
          width: 44px;
          height: 53px;
          transform-origin: bottom left;
          filter: drop-shadow(0px 3px 6px rgba(0, 102, 178, 0.35));
          will-change: transform;
          /* lcPinDrive = same path as car but +115.5px so the pin stays centred above the bonnet */
          animation: lcPinDrive 24s linear infinite, lcNavBob 2s ease-in-out infinite;
          pointer-events: none;
        }
        @keyframes lcNavBob {
          0%, 100% { margin-top: 0; }
          50% { margin-top: -6px; }
        }
        .footer-cyclist {
          position: absolute;
          bottom: 0px;
          left: 0;
          z-index: 2;
          width: 88px;
          height: 100px;
          transform-origin: bottom left;
          will-change: transform;
          animation: lcCyclistDrive 24s linear infinite;
        }
        /* translateX vw values = parent-relative, identical to the old left% values
           since the parent container spans full viewport width */
        @keyframes lcCarDrive {
          0%   { transform: translateX(-35vw); }
          30%  { transform: translateX(-35vw); }
          63%  { transform: translateX(110vw); }
          100% { transform: translateX(110vw); }
        }
        /* Pin travels the same path but offset +115.5px to stay centred above the car bonnet */
        @keyframes lcPinDrive {
          0%   { transform: translateX(calc(-35vw + 115.5px)); }
          30%  { transform: translateX(calc(-35vw + 115.5px)); }
          63%  { transform: translateX(calc(110vw + 115.5px)); }
          100% { transform: translateX(calc(110vw + 115.5px)); }
        }
        @keyframes lcCyclistDrive {
          0%   { transform: translateX(-15vw); }
          100% { transform: translateX(110vw); }
        }
        @keyframes lcTreeLeavesSway {
          0%, 75%, 89%, 100% {
            transform: rotate(0deg) skewX(0deg);
          }
          76% { transform: rotate(-3deg) skewX(-2deg); }
          77% { transform: rotate(5deg) skewX(4deg); }
          78% { transform: rotate(-8deg) skewX(-6deg); }   /* Cyclist shoots past at top speed! */
          79% { transform: rotate(10deg) skewX(8deg); }
          80% { transform: rotate(-6deg) skewX(-4deg); }
          81% { transform: rotate(5deg) skewX(3deg); }
          82% { transform: rotate(-3deg) skewX(-2deg); }
          83% { transform: rotate(2deg) skewX(1deg); }
          84% { transform: rotate(-4deg) skewX(-3deg); }   /* Car passes by! */
          85% { transform: rotate(3deg) skewX(2deg); }
          86% { transform: rotate(-2deg) skewX(-1deg); }
          87% { transform: rotate(1deg); }
          88% { transform: rotate(0deg); }
        }
        .tree-leaves {
          transform-origin: 30px 60px;
          animation: lcTreeLeavesSway 24s ease-in-out infinite;
        }
        .social-icon-hover {
          transition: all 0.2s linear;
        }
        .social-icon-hover:hover {
          background: #5e2ced !important;
          color: #ffffff !important;
          border-color: #5e2ced !important;
        }
        @media (max-width: 767px) {
          .footer-car {
            /* scale moves into keyframes since animation now owns transform */
            animation-duration: 8s;
          }
          .footer-car-pin {
            animation-duration: 8s, 2s;
            bottom: 84px;
          }
          .footer-cyclist {
            animation-duration: 8s;
          }
          /* Mobile uses pixel start (off-screen) + vw end, combined with scale */
          @keyframes lcCarDrive {
            0%   { transform: translateX(-250px) scale(0.85); }
            40%  { transform: translateX(-250px) scale(0.85); }
            70%  { transform: translateX(105vw) scale(0.85); }
            100% { transform: translateX(105vw) scale(0.85); }
          }
          @keyframes lcPinDrive {
            0%   { transform: translateX(calc(-250px + 115.5px)) scale(0.85); }
            40%  { transform: translateX(calc(-250px + 115.5px)) scale(0.85); }
            70%  { transform: translateX(calc(105vw + 115.5px)) scale(0.85); }
            100% { transform: translateX(calc(105vw + 115.5px)) scale(0.85); }
          }
          @keyframes lcCyclistDrive {
            0%   { transform: translateX(-100px) scale(0.8); }
            100% { transform: translateX(105vw) scale(0.8); }
          }
        }
      `}</style>
    </footer>
  );
}

const socialBtn = {
  width: 42,
  height: 42,
  borderRadius: 9999,
  background: "#ebeef5",
  color: "#858da8",
  border: "1px solid #e2e2eb",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  textDecoration: "none",
};