export default function PricingSection() {
  return (
    <section className="section" id="pricing">
      <div className="container">
        <div className="narrow reveal">
          <p className="eyebrow">Simple Pricing</p>
          <h2 className="h-lg">
            No Hidden Charges.{' '}
            <span className="blue">Everything Included.</span>
          </h2>
        </div>

        <div className="price-grid reveal">
          {/* Monthly */}
          <div className="plan">
            <h3>Monthly Plan</h3>
            <div className="cost">₹1,500<small>/month</small></div>
            <p className="note">Perfect for founders getting started.</p>
            <a href="#" className="btn btn-ghost">Start Free Trial</a>
          </div>

          {/* Annual */}
          <div className="plan featured">
            <span className="ribbon">Best value</span>
            <h3>Annual Plan</h3>
            <div className="cost">₹15,000<small>/year</small></div>
            <p className="note">
              Pay for 10 months. Get 12 months of access. Build your authority consistently
              while saving more.
            </p>
            <a href="#" className="btn btn-primary">Choose Annual Plan</a>
          </div>
        </div>

        <p className="price-foot">
          No hidden charges. No complicated pricing. Everything included. Cancel anytime.
        </p>
      </div>
    </section>
  );
}
