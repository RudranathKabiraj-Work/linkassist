export default function BetterWaySection() {
  const steps = [
    'Your content ideas are ready.',
    'Your strategy is already planned.',
    'Your writing sounds like you.',
    'Your content is aligned with your positioning.',
    'Your swipe library keeps growing.',
    'Your engagement happens consistently.',
  ];

  return (
    <section className="section" id="better-way-section">
      <style>{`
        #better-way-section .system-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          max-width: 840px;
          margin: 44px auto 0;
          text-align: left;
        }
        #better-way-section .system-item {
          background: #ffffff;
          border: 1px solid rgba(10, 102, 194, 0.12);
          border-radius: 18px;
          padding: 18px 22px;
          display: flex;
          align-items: center;
          gap: 14px;
          box-shadow: 0 4px 20px rgba(15, 23, 42, 0.015);
          font-size: 15px;
          font-weight: 600;
          color: #334155;
        }
        #better-way-section .sys-check {
          color: var(--brand);
          font-weight: 800;
          font-size: 13px;
          display: inline-grid;
          place-items: center;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: rgba(10, 102, 194, 0.08);
          flex: none;
        }
        #better-way-section .punch-card {
          margin-top: 36px;
          background: var(--brand);
          color: #ffffff;
          border-radius: 24px;
          padding: 36px 40px;
          max-width: 840px;
          margin-left: auto;
          margin-right: auto;
          text-align: center;
          box-shadow: 0 20px 40px -15px rgba(10, 102, 194, 0.25);
        }
        #better-way-section .punch-card .punch {
          font-size: 18px;
          font-weight: 800;
          color: #ffffff;
          margin: 0 0 10px 0;
          letter-spacing: -0.01em;
          line-height: 1.4;
        }
        #better-way-section .punch-card .lead {
          font-size: 14.5px;
          color: rgba(255, 255, 255, 0.85);
          margin: 0;
          line-height: 1.5;
        }
        @media (max-width: 767px) {
          #better-way-section .system-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }
          #better-way-section .system-item {
            padding: 16px 18px;
          }
          #better-way-section .punch-card {
            padding: 32px 24px;
            margin-top: 12px;
            text-align: left;
          }
          #better-way-section .punch-card .punch {
            font-size: 15.5px;
          }
        }
      `}</style>
      <div className="container">
        <div className="narrow reveal">
          <p className="eyebrow">There Is A Better Way</p>
          <h2 className="h-lg two-lines">
            <span>Imagine Waking Up Every Monday Morning…</span>
            <span className="blue">Already Knowing Exactly What To Post.</span>
          </h2>
        </div>

        <div className="system-grid reveal">
          {steps.map((step) => (
            <div className="system-item" key={step}>
              <span className="sys-check">✓</span>
              <span>{step}</span>
            </div>
          ))}
        </div>

        <div className="punch-card reveal">
          <p className="punch">
            Instead of asking "What should I post today?" — you simply review. Approve. Publish.
          </p>
          <p className="lead">
            That's the difference between managing LinkedIn manually… and running LinkedIn with a system.
          </p>
        </div>
      </div>
    </section>
  );
}
