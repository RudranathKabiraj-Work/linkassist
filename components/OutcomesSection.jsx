const outcomes = [
  'People start recognising your name',
  'Your profile gets more visitors',
  'Your posts receive meaningful engagement',
  'People begin sharing your content',
  'Prospects start following your work',
  'Inbound enquiries become more frequent',
  'Sales calls become easier — people already trust you',
  'You stop convincing people. People start convincing themselves.',
];

export default function OutcomesSection() {
  return (
    <section className="section sky" id="outcomes-section">
      <style>{`
        #outcomes-section .timeline {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
          margin-top: 56px;
          position: relative;
        }
        #outcomes-section .stage-card {
          background: #ffffff;
          border: 1px solid rgba(15, 23, 42, 0.06);
          border-radius: 24px;
          padding: 36px 32px;
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 20px;
          box-shadow: 0 4px 30px rgba(15, 23, 42, 0.015);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        #outcomes-section .stage-card::before {
          content: "";
          position: absolute;
          top: -1px;
          left: 10%;
          right: 10%;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--brand), transparent);
          opacity: 0;
          transition: opacity 0.3s;
        }
        @media (max-width: 767px) {
          #outcomes-section .stage-card {
            box-shadow: 0 16px 32px -12px rgba(15, 23, 42, 0.06);
            border-color: rgba(15, 23, 42, 0.08);
          }
          #outcomes-section .stage-card::before {
            opacity: 1;
          }
          #outcomes-section .stage-card:hover {
            transform: none !important;
          }
        }
        @media (min-width: 768px) {
          #outcomes-section .stage-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 20px 40px -15px rgba(15, 23, 42, 0.08);
          }
          #outcomes-section .stage-card:hover::before {
            opacity: 1;
          }
        }
        #outcomes-section .stage-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid rgba(15, 23, 42, 0.06);
          padding-bottom: 16px;
        }
        #outcomes-section .stage-num {
          font-size: 11px;
          font-weight: 700;
          color: var(--brand);
          background: rgba(10, 102, 194, 0.08);
          padding: 4px 10px;
          border-radius: 999px;
          letter-spacing: 0.05em;
        }
        #outcomes-section .stage-title {
          font-size: 18px;
          font-weight: 800;
          color: #0F172A;
          letter-spacing: -0.02em;
        }
        #outcomes-section .stage-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        #outcomes-section .stage-list li {
          font-size: 14px;
          line-height: 1.5;
          color: #475569;
          position: relative;
          padding-left: 24px;
        }
        #outcomes-section .stage-list li::before {
          content: "✓";
          position: absolute;
          left: 0;
          color: var(--brand);
          font-weight: 800;
        }
        #outcomes-section .stage-card.highlight {
          background: linear-gradient(135deg, #ffffff 0%, rgba(10, 102, 194, 0.02) 100%);
          border-color: rgba(10, 102, 194, 0.15);
        }
        #outcomes-section .stage-card.highlight .stage-num {
          background: var(--brand);
          color: #ffffff;
        }
        @media (max-width: 960px) {
          #outcomes-section .timeline {
            grid-template-columns: 1fr;
            gap: 24px;
          }
        }
        @media (max-width: 767px) {
          #outcomes-section .timeline {
            gap: 12px;
          }
        }
      `}</style>
      <div className="container">
        <div className="narrow reveal">
          <p className="eyebrow">What Consistency Does</p>
          <h2 className="h-lg two-lines">
            <span>What Happens When You</span>
            <span className="blue">Stay Consistent?</span>
          </h2>
        </div>

        <div className="timeline reveal">
          <div className="stage-card">
            <div className="stage-header">
              <span className="stage-title">Visibility</span>
              <span className="stage-num">PHASE 01</span>
            </div>
            <ul className="stage-list">
              {outcomes.slice(0, 3).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="stage-card">
            <div className="stage-header">
              <span className="stage-title">Authority</span>
              <span className="stage-num">PHASE 02</span>
            </div>
            <ul className="stage-list">
              {outcomes.slice(3, 6).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="stage-card highlight">
            <div className="stage-header">
              <span className="stage-title">Conversion</span>
              <span className="stage-num">PHASE 03</span>
            </div>
            <ul className="stage-list">
              {outcomes.slice(6).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <p className="lead" style={{ textAlign: 'center', marginTop: 48 }}>
          That's the power of authority.
        </p>
      </div>
    </section>
  );
}
