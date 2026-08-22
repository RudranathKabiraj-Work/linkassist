const row1 = [
  'Marketing Agencies',
  'Software Companies',
  'Consulting Firms',
  'Recruitment Agencies',
  'Business Coaching Companies',
];

const row2 = [
  'Financial Consultancies',
  'Legal Consultancies',
  'Architecture Firms',
  'IT Services Companies',
  'Any B2B Service Business',
];

export default function AudienceSection() {
  return (
    <section className="section" id="audience-section">
      <style>{`
        .marquee-container {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-top: 50px;
          overflow: hidden;
          width: 100%;
          position: relative;
          padding: 10px 0;
        }
        .marquee-container::before,
        .marquee-container::after {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          width: 150px;
          z-index: 2;
          pointer-events: none;
        }
        .marquee-container::before {
          left: 0;
          background: linear-gradient(90deg, #ffffff 0%, transparent 100%);
        }
        .marquee-container::after {
          right: 0;
          background: linear-gradient(-90deg, #ffffff 0%, transparent 100%);
        }
        .marquee-row {
          display: flex;
          gap: 16px;
          width: max-content;
        }
        .marquee-row.left {
          animation: scroll-left 45s linear infinite;
        }
        .marquee-row.right {
          animation: scroll-right 45s linear infinite;
        }
        .marquee-row span {
          background: #ffffff;
          border: 1px solid rgba(15, 23, 42, 0.06);
          border-radius: 16px;
          padding: 14px 24px;
          font-size: 15px;
          font-weight: 600;
          color: #1e293b;
          white-space: nowrap;
          box-shadow: 0 4px 20px -2px rgba(15, 23, 42, 0.02);
          transition: border-color 0.2s;
        }
        .marquee-row span:hover {
          border-color: rgba(10, 102, 194, 0.2);
        }
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        @media (max-width: 767px) {
          .marquee-container::before,
          .marquee-container::after {
            width: 50px;
          }
          .marquee-row span {
            padding: 10px 18px;
            font-size: 13.5px;
          }
        }
      `}</style>
      <div className="container">
        <div className="narrow reveal">
          <p className="eyebrow">Who It's For</p>
          <h2 className="h-lg">
            Built For Founders Of{' '}
            <span className="blue">Service Businesses.</span>
          </h2>
          <p className="lead" style={{ marginTop: 18 }}>
            Whether you're running a marketing agency, consulting firm, or any B2B service
            business — if your clients are on LinkedIn, Link Assist is built for you.
          </p>
        </div>

        <div className="marquee-container reveal">
          <div className="marquee-row left">
            {row1.concat(row1).map((a, idx) => (
              <span key={idx}>{a}</span>
            ))}
          </div>
          <div className="marquee-row right">
            {row2.concat(row2).map((a, idx) => (
              <span key={idx}>{a}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
