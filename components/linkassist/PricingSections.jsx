// PricingSections — standalone /pricing page. Real plan data mirrors the
// webapp's single source of truth (linkedin-autopilot/lib/plans.js +
// lib/chargebeeCatalog.js) so the numbers shown here match checkout.
"use client";

import React, { useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { V2 } from './Tokens';
import { ArrowRight } from './Icons';

// Reusable hook: fires a new "replayKey" every time the observed element
// enters the viewport — including re-entering after scrolling away and back UP or DOWN.
function useScrollReplay(threshold = 0.2) {
  const ref = React.useRef(null);
  const [replayKey, setReplayKey] = useState(0);

  React.useEffect(() => {
    const node = ref.current;
    if (!node) return;
    let wasVisible = false;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !wasVisible) {
          wasVisible = true;
          setReplayKey((k) => k + 1);
        } else if (!entry.isIntersecting) {
          wasVisible = false;
        }
      },
      { threshold }
    );

    obs.observe(node);
    return () => obs.disconnect();
  }, [threshold]);

  return [ref, replayKey];
}

const BILLING_OPTIONS = [
  { id: "monthly", label: "Monthly billing" },
  { id: "quarterly", label: "Quarterly billing", tag: "Save 15%" },
  { id: "yearly", label: "Yearly billing", tag: "Save 25%" },
];

const BILLING_MONTHS = { monthly: 1, quarterly: 3, yearly: 12 };

// Amounts in paise, tax-exclusive — mirrors ITEM_PRICE_MAP in
// linkedin-autopilot/lib/chargebeeCatalog.js. Update both places together.
const PLANS = [
  {
    id: "starter",
    name: "Starter",
    desc: "Everything you need to build a consistent LinkedIn presence.",
    pricing: { monthly: 149900, quarterly: 382245, yearly: 1349100 },
    cta: "Start with Starter",
    popular: false,
    trial: "7-day free trial included",
    features: [
      "30 posts / month",
      "100 content ideas",
      "500 AI comments / month",
      "AI Post Writer",
      "AI image generation (10 / mo)",
      "Swipe Post",
      "User DNA",
      "Post scheduling",
      "Analytics",
      "Email support",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    desc: "For professionals scaling their LinkedIn presence with campaigns and AI strategy.",
    pricing: { monthly: 249900, quarterly: 637245, yearly: 2249100 },
    cta: "Go Growth",
    popular: true,
    trial: "7-day free trial included",
    features: [
      "50 posts / month",
      "Unlimited content ideas",
      "Unlimited AI commenting",
      "Advanced AI Post Writer",
      "AI Strategy",
      "5 campaigns",
      "AI image generation (30 / mo)",
      "Custom image avatar (10 / mo)",
      "Swipe Post",
      "User DNA",
      "Advanced scheduling & analytics",
      "Email / WhatsApp support",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    desc: "For companies whose marketing team runs LinkedIn for founders, CXOs, and leaders.",
    pricing: null,
    cta: "Contact sales",
    popular: false,
    enterprise: true,
    features: [
      "Central billing and administration",
      "Brand style matching per leader",
      "Company profile management",
      "CXOs & team profile management",
      "One-tap approval link for CXOs",
      "Custom onboarding",
      "Dedicated account manager",
      "Everything in Growth, for every profile",
    ],
  },
];

const fmtINR = (paise) =>
  `₹${Math.round(paise / 100).toLocaleString("en-IN")}`;

function monthlyEquivalent(plan, billing) {
  if (!plan.pricing) return null;
  const amount = plan.pricing[billing];
  if (typeof amount !== "number") return null;
  if (billing === "monthly") return fmtINR(amount);
  return fmtINR(amount / BILLING_MONTHS[billing]);
}

// --- Isometric 3D Stacked Deck → Scroll-Driven Fan-Out ----------------------
// Reference design: cards stacked at rotateX(52deg) rotateZ(-34deg) with
// translateZ layering. On scroll the rotation flattens and cards fan out.
export function PricingStack3D() {
  const [billing, setBilling] = useState("monthly");
  const sectionRef = React.useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 65%", "start 15%"],
  });

  // Spring for smooth, natural-feeling scroll response
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 18,
    restDelta: 0.001,
  });

  // ── Stack container rotation ──────────────────────────────────────────────
  // Isometric: rotateX(52deg) rotateZ(-34deg) → flat: rotateX(0) rotateZ(0)
  const stackRotateX = useTransform(smoothProgress, [0, 1], [52, 0]);
  const stackRotateZ = useTransform(smoothProgress, [0, 1], [-34, 0]);

  // ── Card 0 (STARTER) — highest Z = front-most card in isometric view ─────
  // Fans out to the LEFT on scroll (X: 0 → -394px ≈ card_width + gap)
  const card0X = useTransform(smoothProgress, [0, 1], [0, -394]);
  const card0Y = useTransform(smoothProgress, [0, 1], [0, 0]);
  const card0Z = useTransform(smoothProgress, [0, 1], [36, 0]);
  const card0Shadow = useTransform(
    smoothProgress, [0, 1],
    ["0 36px 60px rgba(0,0,0,0.35)", "0 16px 36px -8px rgba(34,42,53,0.18), 0 6px 16px -4px rgba(0,0,0,0.08)"]
  );

  // ── Card 1 (GROWTH) — middle Z = center card, stays in place ────────────
  const card1Z = useTransform(smoothProgress, [0, 1], [24, 0]);
  const card1Shadow = useTransform(
    smoothProgress, [0, 1],
    ["0 36px 60px rgba(0,0,0,0.35)", "0 24px 50px -12px rgba(10,102,194,0.55), 0 8px 20px -4px rgba(0,0,0,0.15)"]
  );

  // ── Card 2 (ENTERPRISE) — lowest Z = back-most card in isometric view ───
  // Fans out to the RIGHT on scroll (X: 0 → +394px)
  const card2X = useTransform(smoothProgress, [0, 1], [0, 394]);
  const card2Y = useTransform(smoothProgress, [0, 1], [0, 0]);
  const card2Z = useTransform(smoothProgress, [0, 1], [12, 0]);
  const card2Shadow = useTransform(
    smoothProgress, [0, 1],
    ["0 36px 60px rgba(0,0,0,0.35)", "0 16px 36px -8px rgba(34,42,53,0.18), 0 6px 16px -4px rgba(0,0,0,0.08)"]
  );

  return (
    <section
      ref={sectionRef}
      id="pricing"
      className="py-4 md:py-12 relative"
      style={{ background: V2.cream, overflow: "visible" }}
    >
      <div className="max-w-[1240px] mx-auto px-6 lg:px-10">

        {/* Billing Toggle */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center p-1 rounded-full bg-white border border-slate-200 shadow-sm">
            {["monthly", "quarterly", "yearly"].map((type) => {
              const active = billing === type;
              const label = type === "monthly" ? "Monthly" : type === "quarterly" ? "Quarterly (-15%)" : "Yearly (-25%)";
              return (
                <button
                  key={type}
                  onClick={() => setBilling(type)}
                  className={`px-4.5 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${active
                    ? "bg-[#0066B2] text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                    }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>

        {/* ── Desktop: Isometric 3D Stack → Fan-out on Scroll ── */}
        <div
          className="hidden md:flex items-center justify-center"
          style={{ minHeight: 680, perspective: "1400px" }}
        >
          {/* The rotating stack container — mirrors .scd-31__stack */}
          <motion.div
            style={{
              position: "relative",
              width: 370,
              height: 620,
              transformStyle: "preserve-3d",
              rotateX: stackRotateX,
              rotateZ: stackRotateZ,
            }}
          >
            <motion.div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: 370,
                height: 620,
                x: card2X,
                y: card2Y,
                z: card2Z,
                zIndex: 10,
                boxShadow: card2Shadow,
              }}
            >
              <PricingCard plan={PLANS[2]} billing={billing} index={2} />
            </motion.div>

            <motion.div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: 370,
                height: 620,
                x: 0,
                z: card1Z,
                zIndex: 20,
                boxShadow: card1Shadow,
              }}
            >
              <PricingCard plan={PLANS[1]} billing={billing} index={1} />
            </motion.div>

            <motion.div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: 370,
                height: 620,
                x: card0X,
                y: card0Y,
                z: card0Z,
                zIndex: 30,
                boxShadow: card0Shadow,
              }}
            >
              <PricingCard plan={PLANS[0]} billing={billing} index={0} />
            </motion.div>
          </motion.div>
        </div>

        {/* ── Mobile: regular single-column stack ── */}
        <div className="md:hidden flex flex-col gap-3.5 py-3">
          {PLANS.map((p, idx) => (
            <PricingCard key={p.id} plan={p} billing={billing} index={idx} />
          ))}
        </div>

        {/* Scroll hint */}
        <div className="text-center mt-4">
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-slate-400 uppercase">
            <span className="w-2 h-2 rounded-full bg-[#0066B2] animate-pulse" />
            Scroll to expand plans
          </span>
        </div>

      </div>
    </section>
  );
}

// -------------------------------------------------------------------------

export function PricingHero() {
  return (
    <section className="relative overflow-hidden"
      style={{ background: V2.cream, paddingTop: 96, paddingBottom: 56 }}>
      <div aria-hidden style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <div style={{
          position: "absolute", top: -120, right: -80, width: 520, height: 520,
          background: "radial-gradient(closest-side, rgba(0,102,178,0.18), transparent 70%)",
          filter: "blur(8px)"
        }} />
      </div>
      <div className="relative max-w-[1240px] mx-auto px-6 lg:px-10 text-center">
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          padding: "6px 14px", borderRadius: 9999,
          background: "#fff", border: "1px solid rgba(15,20,26,0.08)",
          font: "500 12.5px/1 Geist", color: "#525B66",
        }}>
          <span style={{ width: 6, height: 6, borderRadius: 9999, background: V2.coral }} />
          Simple, transparent pricing
        </div>

        <h1 style={{
          marginTop: 22,
          font: "800 clamp(2.2rem, 5vw, 3.6rem)/1.05 Geist",
          color: V2.ink, letterSpacing: "-0.03em",
          textWrap: "balance", maxWidth: 760, marginLeft: "auto", marginRight: "auto",
        }}>
          One plan that pays for itself in <span style={{ color: V2.coral }}>one client.</span>
        </h1>
        <p style={{
          marginTop: 16, font: "400 17px/1.55 Geist", color: "#525B66",
          maxWidth: 560, marginLeft: "auto", marginRight: "auto", textWrap: "pretty",
        }}>
          Grow your LinkedIn presence on autopilot. Pay monthly, quarterly, or save more with a yearly plan — cancel anytime.
        </p>
      </div>
    </section>
  );
}

function PricingCard({ plan, billing, index = 0 }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (clientX - (rect.left + rect.width / 2)) / 12;
    const y = (clientY - (rect.top + rect.height / 2)) / 12;
    setMousePosition({ x, y });
  };

  const p = plan;
  const price = p.enterprise ? "Let's talk" : monthlyEquivalent(p, billing);
  const isPopular = !!p.popular;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{
        duration: 0.45,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{ height: "100%" }}
    >
      <div
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => {
          setIsHovering(false);
          setMousePosition({ x: 0, y: 0 });
        }}
        style={{
          position: "relative",
          height: "100%",
          background: isPopular ? V2.coral : "#fff",
          color: isPopular ? "#fff" : V2.ink,
          border: isPopular ? `1px solid ${V2.coral}` : "1px solid rgba(15,20,26,0.08)",
          borderRadius: 18,
          boxShadow: isHovering
            ? (isPopular ? "0 28px 56px -12px rgba(10,102,194,0.65), 0 10px 24px -4px rgba(0,0,0,0.2)" : "0 22px 46px -10px rgba(15,20,26,0.2), 0 8px 20px -4px rgba(0,0,0,0.1)")
            : (isPopular ? "0 22px 46px -15px rgba(10,102,194,0.52), 0 8px 20px -4px rgba(0,0,0,0.15)" : "0 12px 32px -8px rgba(34,42,53,0.12), 0 4px 12px -2px rgba(0,0,0,0.06)"),
          overflow: "hidden",
          transform: isHovering
            ? `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0) scale3d(1.015, 1.015, 1)`
            : "translate3d(0px, 0px, 0) scale3d(1, 1, 1)",
          transition: isHovering ? "transform 0.08s ease-out, box-shadow 0.2s ease" : "transform 0.3s ease-out, box-shadow 0.3s ease",
          willChange: "transform",
        }}
      >
        {/* inner content moves opposite the outer tilt, for parallax depth */}
        <div
          style={{
            padding: "30px 26px",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
            transform: isHovering
              ? `translate3d(${-mousePosition.x * 0.5}px, ${-mousePosition.y * 0.5}px, 0)`
              : "translate3d(0px, 0px, 0)",
            transition: isHovering ? "transform 0.08s ease-out" : "transform 0.3s ease-out",
          }}
        >
          <div>
            {isPopular && (
              <span style={{
                position: "absolute", top: 20, right: 20,
                background: "#fff", color: V2.coral,
                padding: "5px 12px", borderRadius: 9999,
                font: "600 10px/1 Geist", letterSpacing: ".08em",
                boxShadow: "0 2px 6px rgba(0,0,0,0.15)"
              }}>MOST POPULAR</span>
            )}
            <div style={{
              font: "600 13px/1 Geist", letterSpacing: ".08em", textTransform: "uppercase",
              color: isPopular ? "#fff" : V2.coralPress
            }}>{p.name}</div>
            <div style={{
              marginTop: 12, font: "400 13.5px/1.45 Geist",
              color: isPopular ? "rgba(255,255,255,0.85)" : "#525B66",
              minHeight: 38
            }}>{p.desc}</div>

            <div style={{ marginTop: 16, display: "flex", alignItems: "baseline", gap: 6 }}>
              <span style={{ font: "800 42px/1 Geist", letterSpacing: "-0.03em" }}>{price}</span>
              {!p.enterprise && <span style={{ font: "500 12.5px/1 Geist", color: isPopular ? "rgba(255,255,255,0.6)" : "#8B95A1" }}>/ mo excl. GST</span>}
            </div>
            <div style={{ font: "400 11.5px/1.3 Geist", color: isPopular ? "rgba(255,255,255,0.5)" : "#8B95A1", marginTop: 5 }}>
              {p.enterprise ? "Custom pricing" :
                billing === "monthly" ? "billed monthly" :
                  billing === "quarterly" ? `${fmtINR(p.pricing.quarterly)} billed every 3 months` :
                    `${fmtINR(p.pricing.yearly)} billed yearly`}
            </div>

            <motion.button
              whileHover="hover"
              whileTap={{ scale: 0.96 }}
              animate={{
                boxShadow: isPopular
                  ? [
                    "0 6px 18px -4px rgba(0, 0, 0, 0.3)",
                    "0 10px 24px 0px rgba(255, 255, 255, 0.45)",
                    "0 6px 18px -4px rgba(0, 0, 0, 0.3)",
                  ]
                  : [
                    "0 6px 18px -4px rgba(0, 102, 178, 0.4)",
                    "0 10px 24px 0px rgba(0, 102, 178, 0.75)",
                    "0 6px 18px -4px rgba(0, 102, 178, 0.4)",
                  ],
              }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              style={{
                marginTop: 18,
                width: "100%",
                position: "relative",
                overflow: "hidden",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                background: "linear-gradient(135deg, #0066B2 0%, #005291 100%)",
                color: "#fff",
                border: isPopular ? "2px solid #ffffff" : 0,
                padding: "13px 22px",
                borderRadius: 9999,
                cursor: "pointer",
                font: "600 14.5px/1 Geist",
                letterSpacing: "-0.005em",
              }}
            >
              {/* Continuous Shimmer Light Beam */}
              <motion.div
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 1.5, ease: "easeInOut" }}
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)",
                  transform: "skewX(-20deg)",
                  pointerEvents: "none",
                }}
              />
              <span style={{ position: "relative", zIndex: 1 }}>{p.cta}</span>
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
            {p.trial && (
              <p style={{ marginTop: 7, textAlign: "center", font: "400 11.5px/1 Geist", color: isPopular ? "rgba(255,255,255,0.6)" : "#8B95A1" }}>
                {p.trial}
              </p>
            )}

            <ul style={{ marginTop: 18, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 9 }}>
              {p.features.map((f) => (
                <li key={f} style={{
                  display: "flex", gap: 9, alignItems: "flex-start",
                  font: "400 13px/1.45 Geist",
                  color: isPopular ? "rgba(255,255,255,0.85)" : "#374151"
                }}>
                  <span style={{
                    flexShrink: 0, marginTop: 3, width: 14, height: 14, borderRadius: 9999,
                    background: isPopular ? "rgba(255,255,255,0.22)" : V2.coralTint,
                    color: isPopular ? "#fff" : V2.coralPress,
                    display: "inline-flex", alignItems: "center", justifyContent: "center"
                  }}>
                    <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                      strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" /></svg>
                  </span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}