// Pricing Page
"use client";

import React from 'react';
import NavV2 from '@/components/linkassist/NavV2';
import { PricingHero, PricingStack3D } from '@/components/linkassist/PricingSections';
import { CTAV2, FooterV2 } from '@/components/linkassist/SectionsD';

export default function Pricing() {
  return (
    <div data-screen-label="LinkAssist · Pricing" className="v2-page">
      <NavV2 />
      <PricingHero />
      <PricingStack3D />
      <CTAV2 />
      <FooterV2 />
    </div>
  );
}
