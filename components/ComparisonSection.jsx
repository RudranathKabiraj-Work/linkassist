const rows = [
  {
    opt: 'Do Everything Yourself',
    desc: 'Free — but extremely time consuming. Consistency becomes impossible.',
    win: false,
  },
  {
    opt: 'Use ChatGPT',
    desc: 'An excellent writing assistant. Not a LinkedIn growth system.',
    win: false,
  },
  {
    opt: 'Hire A Content Writer',
    desc: 'Saves time. Rarely captures your real voice.',
    win: false,
  },
  {
    opt: 'Hire A LinkedIn Agency',
    desc: 'Expensive, slow, and dependent on another company.',
    win: false,
  },
  {
    opt: 'Use Link Assist',
    desc: 'One platform that learns your business and helps you plan, research, create, save, engage and grow — consistently.',
    win: true,
  },
];

export default function ComparisonSection() {
  return (
    <section className="section sky">
      <div className="container">
        <div className="narrow reveal">
          <p className="eyebrow">Chapter 07 · Let's Compare Your Options</p>
          <h2 className="h-lg">
            Every Founder Eventually{' '}
            <span className="blue">Chooses One Of These Paths.</span>
          </h2>
        </div>

        <div className="compare-wrap reveal">
          {rows.map(({ opt, desc, win }) => (
            <div className={`crow${win ? ' win' : ''}`} key={opt}>
              <div className="opt">{opt}</div>
              <div className="desc">{desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
