import { FeatureCard } from '@/components/linkassist/SectionsA';
import FramerScroll from '@/components/linkassist/FramerScroll';
import { Users, Search, Bot, Star, MessageSq, TrendUp } from '@/components/linkassist/Icons';

const features = [
  { n: "01", icon: Users, t: "Build Your User DNA", d: "Your positioning, expertise and voice — captured once, applied everywhere." },
  { n: "02", icon: Search, t: "Research Better Content", d: "Fresh, relevant ideas pulled from your industry, audience and competitors." },
  { n: "03", icon: Bot, t: "Create Better LinkedIn Posts", d: "Turn any idea into a post that sounds like you — in minutes, not hours." },
  { n: "04", icon: Star, t: "Build Your Swipe Library", d: "Save, organise and model the best posts you find. Never lose an idea." },
  { n: "05", icon: MessageSq, t: "Stay Active Every Day", d: "Engage faster with meaningful comments that build real relationships." },
  { n: "06", icon: TrendUp, t: "Grow With Confidence", d: "A repeatable system that compounds your authority week after week." },
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

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {features.map((f, idx) => (
            <FramerScroll key={f.n} delay={idx * 0.08} animation="fade-up">
              <FeatureCard f={f} />
            </FramerScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
