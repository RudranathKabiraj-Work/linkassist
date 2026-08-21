import styles from './FinalCta.module.css';

export default function FinalCta() {
  return (
    <>
      {/* ── Urgency section ── */}
      <section className="section final">
        <div className="container">
          <div className="narrow reveal in">
            <p className="eyebrow">Every Day You Delay…</p>
            <h2 className="h-lg">
              Someone Else Is Becoming{' '}
              <span className="blue">The Expert In Your Industry.</span>
            </h2>
            <p className="lead">
              While you're wondering what to post, your competitors are building trust, growing
              their audience, starting conversations and attracting opportunities. Not because
              they're smarter. Because they're showing up consistently.
            </p>
            <p className="lead" style={{ marginTop: 12 }}>
              The good news? You don't need to spend hours every day. You just need the right system.
            </p>
          </div>
        </div>
      </section>

      {/* ── Closing "Your LinkedIn Team" block ── */}
      <section className={styles.closing}>
        <div className="container">
          <div className={`narrow reveal in ${styles.closingInner}`}>
            <h2 className="h-lg">
              Your LinkedIn Team.<br />
              <span className="blue">Inside One Software.</span>
            </h2>

            <div className={styles.bullets}>
              <span>✦ Build authority.</span>
              <span>✦ Stay consistent.</span>
              <span>✦ Create better content.</span>
              <span>✦ Attract more inbound enquiries.</span>
              <span>✦ Turn LinkedIn into one of your most profitable client acquisition channels.</span>
            </div>

            <div className="final-cta" style={{ marginTop: 36 }}>
              <a href="#pricing" className="btn btn-primary btn-lg">
                Start Your Free Trial Today{' '}
                <span className="arrow" style={{ background: 'var(--sky)', color: 'var(--brand)' }}>→</span>
              </a>
            </div>

            <div className="reassure" style={{ justifyContent: 'center', marginTop: 22 }}>
              <span><span className="tick">✓</span> Build your User DNA</span>
              <span><span className="tick">✓</span> Create your first post</span>
              <span><span className="tick" style={{ color: 'var(--accent-soft)' }}>✓</span> Experience what it feels like to have your own LinkedIn team working alongside you</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
