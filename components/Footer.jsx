export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="foot-top">
          <div>
            <div className="foot-brand">
              <img
                src="/logo-icon.png"
                alt="LinkAssist"
                width={34}
                height={34}
                style={{ borderRadius: 8, marginRight: 8, display: 'inline-block', verticalAlign: 'middle' }}
              />
              Link Assist
            </div>
            <p style={{ margin: '14px 0 0', maxWidth: 280, color: '#8298B4' }}>
              Your LinkedIn team, inside one software. Build authority, stay consistent,
              attract inbound clients.
            </p>
          </div>

          <div className="foot-cols">
            <div>
              <h4>Product</h4>
              <a href="#features">Features</a>
              <a href="#how-it-works">How it works</a>
              <a href="#pricing">Pricing</a>
              <a href="#faq">FAQ</a>
            </div>
            <div>
              <h4>Company</h4>
              <a href="#">About</a>
              <a href="#">Blog</a>
              <a href="#">Contact</a>
            </div>
            <div>
              <h4>Legal</h4>
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
            </div>
          </div>
        </div>

        <div className="foot-bottom">
          <span>© 2026 Link Assist. All rights reserved.</span>
          <span>Made for founders who'd rather build than scroll.</span>
        </div>
      </div>
    </footer>
  );
}
