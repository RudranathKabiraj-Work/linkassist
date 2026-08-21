import styles from './IntroNarrative.module.css';

export default function IntroNarrative() {
  return (
    <section className={`section ${styles.intro}`}>
      <div className="container">
        <div className={`narrow reveal ${styles.inner}`}>
          <h2 className="h-lg">
            Stop Managing LinkedIn.{' '}
            <span className="blue">Start Growing From It.</span>
          </h2>

          <div className={styles.lines}>
            <p>Every successful founder today is building a personal brand.</p>
            <p>Not because they enjoy creating content.</p>
            <p>Because they know one thing.</p>
            <p className={styles.callout}>
              The more people trust you before the first conversation,
              the easier it becomes to attract clients.
            </p>
            <p>The problem is… growing on LinkedIn isn't as simple as posting every day.</p>
          </div>

          <div className={styles.needsGrid}>
            <div className={styles.need}><span className={styles.dot} />The right positioning</div>
            <div className={styles.need}><span className={styles.dot} />The right content</div>
            <div className={styles.need}><span className={styles.dot} />The right consistency</div>
            <div className={styles.need}><span className={styles.dot} />The right engagement</div>
            <div className={styles.need}><span className={styles.dot} />The right strategy</div>
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
    </section>
  );
}
