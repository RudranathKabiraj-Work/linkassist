export default function ProblemSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="narrow reveal">
          <p className="eyebrow">Chapter 01 · The Problem</p>
          <h2 className="h-lg">
            If LinkedIn Is So Powerful… <br />
            <span className="blue">Why Are Most Founders Still Not Getting Clients From It?</span>
          </h2>
          <p className="lead" style={{ marginTop: 20 }}>
            You know LinkedIn works. You've seen people in your industry become well known.
            Their posts get thousands of views. People recognise their name. Clients reach out to them.
            Podcast invitations start coming. Speaking opportunities increase. Their personal brand
            becomes their biggest marketing asset.
          </p>
          <p className="lead" style={{ marginTop: 12 }}>
            It isn't because you're not capable. It isn't because LinkedIn doesn't work.
            It's because you're trying to grow without a system.
          </p>
        </div>

        <div className="contrast reveal">
          <div className="col win">
            <h3>The founder who's winning</h3>
            <ul className="flow">
              <li>Posts get thousands of views</li>
              <li>People recognise their name</li>
              <li>Clients reach out to them first</li>
              <li>Podcast and speaking invites come in</li>
              <li>Their personal brand becomes their biggest marketing asset</li>
            </ul>
          </div>
          <div className="col dim">
            <h3>Meanwhile… most founders</h3>
            <ul className="flow">
              <li>Open LinkedIn, scroll for a few minutes</li>
              <li>Think about posting something</li>
              <li>Don't know what to write</li>
              <li>Open ChatGPT, get confused, close the tab</li>
              <li>Tell themselves they'll post tomorrow</li>
              <li>Nothing changes</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
