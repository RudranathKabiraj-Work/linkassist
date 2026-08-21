const steps = [
  {
    n: 1,
    title: 'Build Your User DNA',
    body: 'Everything starts with you. Answer a few simple questions about your business, ideal customers, positioning, expertise, services, communication style and goals. Unlike generic AI tools that start from scratch every time, Link Assist remembers who you are — because great content starts with clarity, not prompts.',
  },
  {
    n: 2,
    title: 'Never Run Out Of Content Ideas Again',
    body: 'Discover relevant content ideas based on your industry, audience, competitors, trends and expertise. No more asking yourself "What should I post today?"',
  },
  {
    n: 3,
    title: 'Create Content That Sounds Like You',
    body: 'Turn ideas into engaging LinkedIn posts within minutes. Not generic AI content — content that reflects your voice, positioning and expertise.',
  },
  {
    n: 4,
    title: 'Build Your Swipe Library',
    body: 'Save great posts you discover on LinkedIn. Organise them. Search them. Model them. Never lose a great idea again.',
  },
  {
    n: 5,
    title: 'Stay Visible Without Living On LinkedIn',
    body: 'Meaningful comments create visibility, build relationships, start conversations and increase trust. Link Assist helps you engage faster while staying authentic.',
  },
  {
    n: 6,
    title: 'Stay Consistent. Let Your Authority Compound.',
    body: 'One great post rarely changes your business. Hundreds of valuable posts do. Every post builds trust, every comment increases visibility, every interaction strengthens your authority — until LinkedIn becomes one of your biggest sources of inbound clients.',
  },
];

export default function HowItWorksSection() {
  return (
    <section className="section sky-2" id="how">
      <div className="container">
        <div className="narrow reveal">
          <p className="eyebrow">Chapter 06 · How It Works</p>
          <h2 className="h-lg">
            Your LinkedIn Growth.{' '}
            <span className="blue">Simplified.</span>
          </h2>
          <p className="lead" style={{ marginTop: 18 }}>
            Growing on LinkedIn shouldn't feel like a second full-time job. Link Assist brings
            everything together into one simple workflow. Once it's set up, you'll always know
            what to do next.
          </p>
        </div>

        <div className="steps reveal">
          {steps.map(({ n, title, body }) => (
            <div className="step" key={n}>
              <span className="sn">{n}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
