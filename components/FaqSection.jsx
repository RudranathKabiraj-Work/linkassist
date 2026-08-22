'use client';
import { useState, useRef } from 'react';

const faqs = [
  {
    q: 'Is Link Assist just another AI writing tool?',
    a: 'No. Writing is only one part of the platform. Link Assist helps with positioning, content research, ideation, writing, organising inspiration and engagement — the whole workflow.',
  },
  {
    q: 'Will my posts sound like AI?',
    a: 'No. Everything starts with your User DNA. The platform understands your positioning before generating content — so it reflects your voice, not generic AI copy.',
  },
  {
    q: 'Can beginners use Link Assist?',
    a: 'Absolutely. Whether you\'re starting today or already posting regularly, Link Assist gives you a structured workflow to follow.',
  },
  {
    q: 'Can I cancel anytime?',
    a: 'Yes. You can cancel your monthly subscription whenever you want.',
  },
  {
    q: 'How long does setup take?',
    a: 'Most founders complete their User DNA within a few minutes — and can create their first post right after.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);
  const ansRefs = useRef([]);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? -1 : i);
  };

  return (
    <section className="section sky" id="faq">
      <div className="container">
        <div className="narrow reveal">
          <p className="eyebrow">The Basics</p>
          <h2 className="h-lg">
            Quick Answers To{' '}
            <span className="blue">The Fair Questions.</span>
          </h2>
        </div>

        <div className="faq reveal">
          {faqs.map(({ q, a }, i) => {
            const isOpen = openIndex === i;
            return (
              <div className={`qa${isOpen ? ' open' : ''}`} key={i}>
                <button
                  aria-expanded={isOpen}
                  onClick={() => toggle(i)}
                >
                  {q}
                  <span className="chevron-icon">
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </button>
                <div
                  className="ans"
                  ref={(el) => (ansRefs.current[i] = el)}
                  style={{
                    maxHeight: isOpen
                      ? (ansRefs.current[i]?.scrollHeight ?? 200) + 'px'
                      : '0',
                  }}
                >
                  <p>{a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
