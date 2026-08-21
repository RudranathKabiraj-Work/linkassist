const audiences = [
  'Marketing Agencies',
  'Software Companies',
  'Consulting Firms',
  'Recruitment Agencies',
  'Business Coaching Companies',
  'Financial Consultancies',
  'Legal Consultancies',
  'Architecture Firms',
  'IT Services Companies',
  'Any B2B Service Business',
];

export default function AudienceSection() {
  return (
    <section className="section sky-2">
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

        <div className="chips reveal">
          {audiences.map((a) => (
            <span key={a}>{a}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
