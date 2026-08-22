export default function ProblemSection() {
  const dimFlow = [
    'Open LinkedIn, scroll for a few minutes',
    'Think about posting something',
    'Don\'t know what to write',
    'Open ChatGPT, get confused, close the tab',
    'Tell themselves they\'ll post tomorrow',
    'Nothing changes',
  ];

  const winFlow = [
    'Posts get thousands of views',
    'People recognise their name',
    'Clients reach out to them first',
    'Podcast and speaking invites come in',
    'Their personal brand becomes their biggest marketing asset',
  ];

  return (
    <section className="section" id="problem-section">
      <style>{`
        #problem-section .contrast {
          display: grid;
          grid-template-columns: 1fr 1.05fr;
          gap: 32px;
          max-width: 960px;
          margin: 56px auto 0;
          align-items: stretch;
        }
        #problem-section .col {
          background: #ffffff;
          border-radius: 24px;
          padding: 30px 40px;
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 24px;
          box-shadow: 0 4px 30px rgba(15, 23, 42, 0.015);
          transition: transform 0.3s, box-shadow 0.3s;
        }
        #problem-section .col h3 {
          font-size: 18px;
          font-weight: 800;
          letter-spacing: -0.02em;
          margin: 0;
          padding-bottom: 16px;
          border-bottom: 1px solid rgba(15, 23, 42, 0.06);
        }
        #problem-section .col.dim {
          border: 1px solid rgba(15, 23, 42, 0.04);
          background: #f8fafc;
        }
        #problem-section .col.dim h3 {
          color: #64748b;
        }
        #problem-section .col.win {
          border: 1px solid rgba(10, 102, 194, 0.18);
          background: linear-gradient(135deg, #ffffff 0%, rgba(10, 102, 194, 0.02) 100%);
          box-shadow: 0 10px 40px -10px rgba(10, 102, 194, 0.08);
        }
        #problem-section .col.win h3 {
          color: var(--brand);
          border-bottom-color: rgba(10, 102, 194, 0.08);
        }
        #problem-section .section-badge {
          position: absolute;
          top: -12px;
          right: 24px;
          background: #64748b;
          color: #ffffff;
          font-size: 10px;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: 999px;
          letter-spacing: 0.05em;
        }
        #problem-section .col.win .section-badge {
          background: var(--brand);
        }
        #problem-section .flow {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        #problem-section .flow li {
          font-size: 14.5px;
          line-height: 1.5;
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 0;
        }
        #problem-section .flow li::before {
          display: none !important;
        }
        #problem-section .col.dim .flow li {
          color: #64748b;
        }
        #problem-section .col.win .flow li {
          color: #0f172a;
          font-weight: 600;
        }
        #problem-section .cross-icon {
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
        #problem-section .check-icon {
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
          #problem-section .col:hover {
            transform: translateY(-4px);
            box-shadow: 0 20px 40px -15px rgba(15, 23, 42, 0.08);
          }
          #problem-section .col.win:hover {
            border-color: rgba(10, 102, 194, 0.3);
            box-shadow: 0 24px 50px -15px rgba(10, 102, 194, 0.15);
          }
        }
        @media (max-width: 767px) {
          #problem-section .contrast {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          #problem-section .col {
            padding: 24px 24px;
          }
        }
      `}</style>
      <div className="container">
        <div className="narrow reveal">
          <p className="eyebrow">Chapter 01 · The Problem</p>
          <h2 className="h-lg">
            If LinkedIn Is So Powerful… <br />
            <span className="blue">Why Are Most Founders Still Not Getting Clients From It?</span>
          </h2>
          <p className="lead" style={{ marginTop: 20 }}>
            You know LinkedIn works. You've seen people in your industry become well known.
            Their posts get thousands of views. People recognise their name. Clients reach out to them.
            Podcast invitations start coming. Speaking opportunities increase. Their personal brand
            becomes their biggest marketing asset.
          </p>
          <p className="lead" style={{ marginTop: 12 }}>
            It isn't because you're not capable. It isn't because LinkedIn doesn't work.
            It's because you're trying to grow without a system.
          </p>
        </div>

        <div className="contrast reveal">
          {/* Struggle Card (dim) is on the left */}
          <div className="col dim">
            <span className="section-badge">THE STRUGGLE</span>
            <h3>Meanwhile… most founders</h3>
            <ul className="flow">
              {dimFlow.map((item) => (
                <li key={item}>
                  <span className="cross-icon">✕</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Winning Card (win) is on the right */}
          <div className="col win">
            <span className="section-badge">THE SYSTEMIZED WAY</span>
            <h3>The founder who's winning</h3>
            <ul className="flow">
              {winFlow.map((item) => (
                <li key={item}>
                  <span className="check-icon">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
