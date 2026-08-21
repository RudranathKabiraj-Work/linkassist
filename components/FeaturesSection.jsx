const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="8" r="4"/>
        <path d="M4 21v-1a6 6 0 0 1 12 0v1"/>
      </svg>
    ),
    title: 'Build Your User DNA',
    body: 'Your positioning, expertise and voice — captured once, applied everywhere.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="11" cy="11" r="7"/>
        <path d="m21 21-4-4"/>
      </svg>
    ),
    title: 'Research Better Content',
    body: 'Fresh, relevant ideas pulled from your industry, audience and competitors.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 20h9"/>
        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/>
      </svg>
    ),
    title: 'Create Better LinkedIn Posts',
    body: 'Turn any idea into a post that sounds like you — in minutes, not hours.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M19 21l-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z"/>
      </svg>
    ),
    title: 'Build Your Swipe Library',
    body: 'Save, organise and model the best posts you find. Never lose an idea.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z"/>
      </svg>
    ),
    title: 'Stay Active Every Day',
    body: 'Engage faster with meaningful comments that build real relationships.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 3v18h18"/>
        <path d="m7 14 4-4 3 3 5-6"/>
      </svg>
    ),
    title: 'Grow With Confidence',
    body: 'A repeatable system that compounds your authority week after week.',
  },
];

export default function FeaturesSection() {
  return (
    <section className="section" id="features">
      <div className="container">
        <div className="narrow reveal">
          <p className="eyebrow">Everything In One Place</p>
          <h2 className="h-lg">
            Everything You Need To Grow On LinkedIn.{' '}
            <span className="blue">One Platform.</span>
          </h2>
          <p className="lead" style={{ marginTop: 18 }}>
            Everything works together — exactly the way LinkedIn growth should.
          </p>
        </div>

        <div className="grid-3 reveal">
          {features.map(({ icon, title, body }) => (
            <div className="card" key={title}>
              <div className="ico">{icon}</div>
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
