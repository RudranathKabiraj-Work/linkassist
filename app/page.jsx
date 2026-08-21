'use client';
import useScrollReveal from '@/hooks/useScrollReveal';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import IntroNarrative from '@/components/IntroNarrative';
import ProblemSection from '@/components/ProblemSection';
import CostSection from '@/components/CostSection';
import DiagnosisSection from '@/components/DiagnosisSection';
import AlternativesSection from '@/components/AlternativesSection';
import BetterWaySection from '@/components/BetterWaySection';
import ProductSection from '@/components/ProductSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import FeaturesSection from '@/components/FeaturesSection';
import ComparisonSection from '@/components/ComparisonSection';
import OutcomesSection from '@/components/OutcomesSection';
import AudienceSection from '@/components/AudienceSection';
import DifferentiatorsSection from '@/components/DifferentiatorsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import PricingSection from '@/components/PricingSection';
import FaqSection from '@/components/FaqSection';
import FinalCta from '@/components/FinalCta';
import Footer from '@/components/Footer';

export default function Home() {
  useScrollReveal();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <IntroNarrative />
        <ProblemSection />
        <CostSection />
        <DiagnosisSection />
        <AlternativesSection />
        <BetterWaySection />
        <ProductSection />
        <HowItWorksSection />
        <FeaturesSection />
        <ComparisonSection />
        <OutcomesSection />
        <AudienceSection />
        <DifferentiatorsSection />
        <TestimonialsSection />
        <PricingSection />
        <FaqSection />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
