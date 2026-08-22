const chips = [
  '"What should I post today?"',
  'Searching for ideas',
  'Looking at competitors',
  'Watching random videos',
  'Trying ChatGPT',
  'Editing prompts',
  'Changing prompts',
  'Writing',
  'Deleting',
  'Rewriting',
  'Still not satisfied',
];

export default function DiagnosisSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="narrow reveal">
          <p className="eyebrow">Chapter 03 · The Real Problem</p>
          <h2 className="h-lg two-lines">
            <span>The Real Problem Isn't Content.</span>
            <span className="blue">It's The Lack Of A LinkedIn System.</span>
          </h2>
          <p className="lead" style={{ marginTop: 20 }}>
            Most people believe they have a content problem. They don't. They have a systems
            problem. Every day starts with the same question — and ends the same way.
          </p>

          <div className="loop">
            {chips.map((c) => (
              <span key={c}>{c}</span>
            ))}
            <span className="end">Nothing gets posted</span>
          </div>

          <p className="lead" style={{ marginTop: 34 }}>
            Because there is no direction. No positioning. No process. No system.
            Without a system, consistency becomes impossible. And without consistency,
            authority never compounds.
          </p>
        </div>
      </div>
    </section>
  );
}
