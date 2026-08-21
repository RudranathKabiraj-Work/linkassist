const diffs = [
  { most: 'Most tools help you write.', us: 'Link Assist helps you grow.' },
  { most: 'Most AI tools answer questions.', us: 'Link Assist understands your business.' },
  { most: 'Most tools solve one problem.', us: 'Link Assist manages your complete LinkedIn workflow.' },
  { most: 'Most people rely on motivation.', us: 'Link Assist gives you a system.' },
];

export default function DifferentiatorsSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="narrow reveal">
          <p className="eyebrow">Why Link Assist Is Different</p>
          <h2 className="h-lg">
            Most Tools Help You Write.{' '}
            <span className="blue">We Help You Grow.</span>
          </h2>
        </div>

        <div className="diffs reveal">
          {diffs.map(({ most, us }) => (
            <div className="diff" key={most}>
              <div className="most">{most}</div>
              <div className="us">{us}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
