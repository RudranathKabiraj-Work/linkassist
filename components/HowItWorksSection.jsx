'use client';
import React, { useState, useEffect, useRef } from 'react';
import { V2 } from './Tokens';

const CARD_TOP_STEP = 18;  // px — extra offset per card  (the "peeking tabs")

const steps = [
  {
    n: '01',
    title: 'Build Your User DNA',
    body: 'Everything starts with you. Answer a few simple questions about your business, ideal customers, positioning, expertise, services, communication style and goals. Unlike generic AI tools that start from scratch every time, Link Assist remembers who you are — because great content starts with clarity, not prompts.',
  },
  {
    n: '02',
    title: 'Never Run Out Of Content Ideas Again',
    body: 'Discover relevant content ideas based on your industry, audience, competitors, trends and expertise. No more asking yourself "What should I post today?"',
  },
  {
    n: '03',
    title: 'Create Content That Sounds Like You',
    body: 'Turn ideas into engaging LinkedIn posts within minutes. Not generic AI content — content that reflects your voice, positioning and expertise.',
  },
  {
    n: '04',
    title: 'Build Your Swipe Library',
    body: 'Save great posts you discover on LinkedIn. Organise them. Search them. Model them. Never lose a great idea again.',
  },
  {
    n: '05',
    title: 'Stay Visible Without Living On LinkedIn',
    body: 'Meaningful comments create visibility, build relationships, start conversations and increase trust. Link Assist helps you engage faster while staying authentic.',
  },
  {
    n: '06',
    title: 'Stay Consistent. Let Your Authority Compound.',
    body: 'One great post rarely changes your business. Hundreds of valuable posts do. Every post builds trust, every comment increases visibility, every interaction strengthens your authority — until LinkedIn becomes one of your biggest sources of inbound clients.',
  },
];

function PipelineCard({ step, index, total, containerRef }) {
  const cardRef = useRef(null);
  const rafRef = useRef(null);

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const CARD_TOP_BASE = isMobile ? 400 : 360;

  // Calculate a scale between 0.80 (bottom-most card) and 1.0 (top-most card)
  const minScale = 0.80 + (0.20 / (total - 1)) * index;

  const extraSpacing = isMobile ? 180 : 220;

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !cardRef.current) return;

    const SCROLL_PER_CARD = isMobile ? 520 : 480;

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
  }, [index, total, minScale, containerRef, isMobile]);

  const bgGradients = [
    "linear-gradient(135deg, #5BA8E5 0%, #0066B2 100%)",
    "linear-gradient(135deg, #0066B2 0%, #005291 100%)",
    "linear-gradient(135deg, #004A80 0%, #002F66 100%)",
    "linear-gradient(135deg, #003A6E 0%, #001F42 100%)",
    "linear-gradient(135deg, #002952 0%, #000D1A 100%)",
    "linear-gradient(135deg, #001833 0%, #000511 100%)"
  ];

  const cardMarginBottom = (total - 1 - index) * CARD_TOP_STEP;
  const wrapperHeight = isMobile ? 340 : 260;

  return (
    <div
      style={{
        position: 'sticky',
        top: `${CARD_TOP_BASE + index * CARD_TOP_STEP}px`,
        zIndex: 10 + index,
        marginBottom: `${cardMarginBottom}px`,
        height: `${wrapperHeight}px`,
      }}
    >
      <div
        ref={cardRef}
        className="!h-[340px] sm:!h-[260px]"
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
        <div className="flex flex-col justify-center p-6 sm:p-10" style={{ height: '100%' }}>
          <span
            style={{
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: '.2em',
              opacity: 0.75,
              display: 'block',
              marginBottom: 4,
            }}
          >
            STEP {step.n}
          </span>
          <h3 className="text-base sm:text-2xl md:text-2xl font-bold tracking-tight mt-1 mb-1 sm:mb-2" style={{ color: '#fff' }}>{step.title}</h3>
          <p className="text-[12px] sm:text-base md:text-lg leading-relaxed" style={{ opacity: 0.95 }}>{step.body}</p>
        </div>
      </div>
    </div>
  );
}

export default function HowItWorksSection() {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [bottomOffset, setBottomOffset] = useState(396);
  const [bottomSpacerHeight, setBottomSpacerHeight] = useState(200);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 640;
      setIsMobile(mobile);

      const cardHeight = mobile ? 340 : 260;
      const cardFirstStickyTop = mobile ? 400 : 360;
      const cardTopStep = 18;
      const totalCards = steps.length;
      const cardFirstMB = (totalCards - 1) * cardTopStep;

      const headerStickyTop = 108;
      const headerHeight = mobile ? 260 : 200;

      const cardUnstickLimit = cardFirstStickyTop + cardFirstMB + cardHeight;

      // Dynamic spacer: exactly how much space is needed for the last card to reach stack top based on viewport height
      const lastCardSpacer = Math.max(0, window.innerHeight - cardUnstickLimit);
      setBottomSpacerHeight(lastCardSpacer);

      const headerUnstickLimit = headerStickyTop + headerHeight + 48;
      const offset = cardUnstickLimit - headerUnstickLimit;
      setBottomOffset(Math.max(0, offset));
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section
      id="how-it-works"
      ref={containerRef}
      className="scroll-mt-24 lg:scroll-mt-32 py-10 md:pt-20 md:pb-[120px]"
      style={{ background: V2.creamDeep }}
    >
      <div className="max-w-[1100px] mx-auto px-4 md:px-6" style={{ position: 'relative' }}>

        {/* ── Header Parent Container ── */}
        <div style={{
          position: 'absolute',
          top: 0,
          bottom: `${bottomOffset}px`,
          left: 0,
          right: 0,
          pointerEvents: 'none',
          zIndex: 20,
        }}>
          {/* ── Sticky heading ── */}
          <div style={{
            position: 'sticky',
            top: 108,
            height: isMobile ? 260 : 200,
            zIndex: 10 + steps.length + 1,
            textAlign: 'center',
            marginBottom: 48,
          }}>
            <div className="pointer-events-auto">
              <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
                <div style={{
                  font: "500 11px/1 Geist", color: V2.blue, letterSpacing: ".14em",
                  textTransform: "uppercase"
                }}>
                  Chapter 06 · How It Works
                </div>
                <h2 style={{
                  marginTop: 6, font: "800 clamp(1.8rem, 3.8vw, 3.2rem)/1.08 Geist",
                  color: V2.ink, letterSpacing: "-0.028em", textWrap: "balance"
                }}>
                  Your LinkedIn Growth. <span style={{ color: V2.blue }}>Simplified.</span>
                </h2>
                <p style={{
                  marginTop: 12, font: "400 clamp(14px, 2vw, 17px)/1.5 Geist", color: "#525B66",
                  maxWidth: 600, textWrap: "pretty",
                  marginLeft: "auto", marginRight: "auto"
                }}>
                  Growing on LinkedIn shouldn't feel like a second full-time job. Link Assist brings
                  everything together into one simple workflow. Once it's set up, you'll always know
                  what to do next.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Static Spacer ── */}
        <div style={{ height: `${(isMobile ? 260 : 200) + 48 + (isMobile ? 32 : 52)}px` }} aria-hidden />

        {/* ── Card stack ── */}
        {steps.map((step, idx) => (
          <React.Fragment key={step.n}>
            <PipelineCard
              step={step}
              index={idx}
              total={steps.length}
              containerRef={containerRef}
            />
            {idx < steps.length - 1 && (
              <div style={{ height: `${isMobile ? 180 : 220}px` }} aria-hidden />
            )}
          </React.Fragment>
        ))}

        {/* ── Bottom Spacer to allow last card to stack and unstick ── */}
        <div style={{ height: `${bottomSpacerHeight}px` }} aria-hidden />
      </div>
    </section>
  );
}
