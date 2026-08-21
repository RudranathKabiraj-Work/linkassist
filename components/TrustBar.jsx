export default function TrustBar() {
  const logos = ['NorthStar', 'Loop&Co', 'Vireo', 'Meridian', 'Kettle', 'Fold'];
  return (
    <section className="trust">
      <div className="container trust-inner">
        <span className="trust-label">Built for founders at companies like</span>
        <div className="logos">
          {logos.map((l) => (
            <span key={l}>{l}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
