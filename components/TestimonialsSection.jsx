const testimonials = [
  {
    dark: false,
    quote: '"I stopped overthinking my content. The ideas and the workflow just work — I show up every week without the dread."',
    name: '[ Client name ]',
    role: '[ Role, Company ]',
  },
  {
    dark: true,
    quote: '"From invisible to consistent. My LinkedIn engagement has genuinely changed the way prospects reach out."',
    name: '[ Client name ]',
    role: '[ Role, Company ]',
  },
  {
    dark: false,
    quote: '"Finally a tool that gets my tone right. It sounds like me — not like AI on a Tuesday."',
    name: '[ Client name ]',
    role: '[ Role, Company ]',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="section sky-2">
      <div className="container">
        <div className="narrow reveal">
          <p className="eyebrow">In Their Words</p>
          <h2 className="h-lg">
            Founders Who Stopped{' '}
            <span className="blue">Managing LinkedIn.</span>
          </h2>
        </div>

        <div className="tgrid reveal">
          {testimonials.map(({ dark, quote, name, role }, i) => (
            <div className={`quote${dark ? ' dark' : ''}`} key={i}>
              <div className="stars">★★★★★</div>
              <p>{quote}</p>
              <div className="who">
                <span className="q-avatar" />
                <span>
                  <b>{name}</b>
                  <small>{role}</small>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
