import React from 'react';
import styles from './IntroNarrative.module.css';
import { FileText, Calendar, MessageSq, Sparkles } from '@/components/linkassist/Icons';

const TargetIcon = (p) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

export default function IntroNarrative() {
  return (
    <section className={`section sky ${styles.intro}`}>
      <div className={`container ${styles.container}`}>
        <div className={styles.inner}>

          <h2 className={`h-lg ${styles.mainHeading}`}>
            Stop Managing LinkedIn.{' '}
            <span className="blue">Start Growing From It.</span>
          </h2>

          <div className={styles.contentGrid}>

            {/* Left Column: Intro & Trust Quote */}
            <div className={styles.colLeft}>
              <div className={styles.lines}>
                <p>Every successful founder today is building a personal brand.</p>
                <p>Not because they enjoy creating content.</p>
                <p>Because they know one thing.</p>

                <div className={styles.calloutCard}>
                  <span className={styles.quoteMark}>"</span>
                  <p className={styles.calloutText}>
                    The more people trust you before the first conversation,
                    the easier it becomes to attract clients.
                  </p>
                </div>

                <p>The problem is… growing on LinkedIn isn't as simple as posting every day.</p>
              </div>
            </div>

            {/* Right Column: Needs & Conclusion */}
            <div className={styles.colRight}>
              <div className={styles.needsGrid}>
                <div className={styles.need}>
                  <span className={styles.iconWrapper}><TargetIcon size={18} /></span>
                  <span>The right positioning</span>
                </div>
                <div className={styles.need}>
                  <span className={styles.iconWrapper}><FileText size={18} /></span>
                  <span>The right content</span>
                </div>
                <div className={styles.need}>
                  <span className={styles.iconWrapper}><Calendar size={18} /></span>
                  <span>The right consistency</span>
                </div>
                <div className={styles.need}>
                  <span className={styles.iconWrapper}><MessageSq size={18} /></span>
                  <span>The right engagement</span>
                </div>
                <div className={styles.need}>
                  <span className={styles.iconWrapper}><Sparkles size={18} /></span>
                  <span>The right strategy</span>
                </div>
              </div>

              <div className={styles.conclusion}>
                <p>
                  And all of that takes time. Time that most founders simply don't have.
                </p>
                <p>
                  That's exactly why we built Link Assist.
                </p>
                <p className={styles.punch}>
                  Instead of hiring a team or trying to figure everything out yourself,
                  Link Assist helps you manage your complete LinkedIn growth journey from one place —
                  so you can spend less time creating content and more time growing your business.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
