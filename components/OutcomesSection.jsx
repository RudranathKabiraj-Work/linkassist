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
    <section className="section">
      <div className="container">
        <div className="narrow reveal">
          <p className="eyebrow">What Consistency Does</p>
          <h2 className="h-lg">
            What Happens When You{' '}
            <span className="blue">Stay Consistent?</span>
          </h2>
        </div>

        <ul className="checklist reveal">
          {outcomes.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <p className="lead" style={{ textAlign: 'center', marginTop: 36 }}>
          That's the power of authority.
        </p>
      </div>
    </section>
  );
}
