const diffs = [
  { most: 'Most tools help you write.', us: 'Link Assist helps you grow.' },
  { most: 'Most AI tools answer questions.', us: 'Link Assist understands your business.' },
  { most: 'Most tools solve one problem.', us: 'Link Assist manages your complete LinkedIn workflow.' },
  { most: 'Most people rely on motivation.', us: 'Link Assist gives you a system.' },
];

export default function DifferentiatorsSection() {
  return (
    <section className="section sky" id="differentiators-section">
      <style>{`
        #differentiators-section .vs-board {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
          margin-top: 52px;
          max-width: 960px;
          margin-left: auto;
          margin-right: auto;
        }
        #differentiators-section .vs-panel {
          background: #ffffff;
          border-radius: 24px;
          padding: 40px;
          box-shadow: 0 4px 30px rgba(15, 23, 42, 0.015);
          display: flex;
          flex-direction: column;
          gap: 24px;
          transition: transform 0.3s, box-shadow 0.3s;
        }
        #differentiators-section .vs-panel h3 {
          font-size: 20px;
          font-weight: 800;
          letter-spacing: -0.02em;
          margin: 0;
          padding-bottom: 16px;
          border-bottom: 1px solid rgba(15, 23, 42, 0.06);
        }
        #differentiators-section .status-quo {
          border: 1px solid rgba(15, 23, 42, 0.05);
          background: #f8fafc;
        }
        #differentiators-section .status-quo h3 {
          color: #64748b;
        }
        #differentiators-section .link-assist {
          border: 1px solid rgba(10, 102, 194, 0.15);
          background: linear-gradient(135deg, #ffffff 0%, rgba(10, 102, 194, 0.02) 100%);
          box-shadow: 0 10px 40px -10px rgba(10, 102, 194, 0.08);
        }
        #differentiators-section .link-assist h3 {
          color: var(--brand);
        }
        #differentiators-section .vs-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        #differentiators-section .vs-list li {
          font-size: 15px;
          line-height: 1.5;
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }
        #differentiators-section .status-quo .vs-list li {
          color: #64748b;
        }
        #differentiators-section .link-assist .vs-list li {
          color: #0F172A;
          font-weight: 600;
        }
        #differentiators-section .cross-icon {
          color: #ef4444;
          font-weight: 800;
          font-size: 14px;
          display: inline-grid;
          place-items: center;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: rgba(239, 68, 68, 0.08);
          flex: none;
          margin-top: 1px;
        }
        #differentiators-section .check-icon {
          color: var(--brand);
          font-weight: 800;
          font-size: 13px;
          display: inline-grid;
          place-items: center;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: rgba(10, 102, 194, 0.08);
          flex: none;
          margin-top: 1px;
        }
        @media (min-width: 768px) {
          #differentiators-section .vs-panel:hover {
            transform: translateY(-4px);
            box-shadow: 0 20px 40px -15px rgba(15, 23, 42, 0.08);
          }
          #differentiators-section .link-assist:hover {
            border-color: rgba(10, 102, 194, 0.25);
            box-shadow: 0 24px 50px -15px rgba(10, 102, 194, 0.15);
          }
        }
        @media (max-width: 767px) {
          #differentiators-section .vs-board {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          #differentiators-section .vs-panel {
            padding: 32px 24px;
          }
        }
      `}</style>
      <div className="container">
        <div className="narrow reveal">
          <p className="eyebrow">Why Link Assist Is Different</p>
          <h2 className="h-lg two-lines">
            <span>Most Tools Help You Write.</span>
            <span className="blue">We Help You Grow.</span>
          </h2>
        </div>

        <div className="vs-board reveal">
          <div className="vs-panel status-quo">
            <h3>Other Solutions</h3>
            <ul className="vs-list">
              {diffs.map(({ most }) => (
                <li key={most}>
                  <span className="cross-icon">✕</span>
                  {most}
                </li>
              ))}
            </ul>
          </div>

          <div className="vs-panel link-assist">
            <h3>Link Assist</h3>
            <ul className="vs-list">
              {diffs.map(({ us }) => (
                <li key={us}>
                  <span className="check-icon">✓</span>
                  {us}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
