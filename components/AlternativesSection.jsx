const alternatives = [
  {
    num: '01',
    title: 'I\'ll Do Everything Myself',
    body: 'Running a business already demands your attention. LinkedIn always becomes tomorrow\'s task. Tomorrow never comes.',
  },
  {
    num: '02',
    title: 'I\'ll Use ChatGPT',
    body: 'ChatGPT is an incredible writing assistant. But it doesn\'t know your positioning, your long-term strategy, or your best performing posts. It gives answers — it doesn\'t build your personal brand.',
  },
  {
    num: '03',
    title: 'I\'ll Hire A Content Writer',
    body: 'Most writers can write. Very few can think like you. Your content slowly starts sounding generic because someone else is trying to communicate your expertise.',
  },
  {
    num: '04',
    title: 'I\'ll Hire A LinkedIn Agency',
    body: 'This works for some businesses. But it\'s expensive, communication takes time, approvals take time, and you become dependent on external people to build your own personal brand.',
  },
  {
    num: '05',
    title: 'I\'ll Buy Another LinkedIn Course',
    body: 'Courses teach concepts. They don\'t help you execute every single day. Knowledge without execution changes nothing.',
  },
  {
    num: '06',
    title: 'I\'ll Wait Until Business Slows Down',
    body: 'It won\'t. The founders winning on LinkedIn aren\'t less busy — they simply have a better system.',
  },
];

export default function AlternativesSection() {
  return (
    <section className="section sky-2">
      <div className="container">
        <div className="narrow reveal">
          <p className="eyebrow">Chapter 04 · "I'll Figure It Out Myself."</p>
          <h2 className="h-lg">
            That's What Almost Everyone Thinks —{' '}
            <span className="blue">Until Every Option Breaks Down.</span>
          </h2>
        </div>

        <div className="grid-3 reveal">
          {alternatives.map(({ num, title, body }) => (
            <div className="card" key={num}>
              <span className="num">{num}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
