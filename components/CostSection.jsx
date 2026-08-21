const costs = [
  { ico: '👁', title: 'Competitors out-visible you', body: 'They show up daily. You slip out of the feed — and out of mind.' },
  { ico: '🤝', title: 'Trust goes to someone else', body: 'Potential clients trust a name they recognise before they even discover your business.' },
  { ico: '🔁', title: 'You stay dependent on referrals', body: 'Instead of predictable inbound enquiries arriving on their own.' },
  { ico: '💸', title: 'You spend more on ads', body: 'Because your personal brand isn\'t bringing opportunities organically.' },
  { ico: '🏷️', title: 'You compete on price', body: 'Prospects don\'t see you as the obvious expert, so it comes down to cost.' },
  { ico: '🗣️', title: 'You re-explain your credibility', body: 'On every call — instead of letting your content prove it for you.' },
];

export default function CostSection() {
  return (
    <section className="section sky">
      <div className="container">
        <div className="narrow reveal">
          <p className="eyebrow">Chapter 02 · The Cost</p>
          <h2 className="h-lg">
            Every Week You Stay Inconsistent,{' '}
            <span className="blue">Your Business Pays The Price.</span>
          </h2>
        </div>

        <div className="grid-3 reveal">
          {costs.map(({ ico, title, body }) => (
            <div className="card" key={title}>
              <div className="ico">{ico}</div>
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          ))}
        </div>

        <p className="lead" style={{ textAlign: 'center', marginTop: 40 }}>
          The biggest cost isn't missed posts. It's missed opportunities. Every week someone is
          looking for exactly the service you provide. The question is — will they find you, or
          your competitor?
        </p>
      </div>
    </section>
  );
}
