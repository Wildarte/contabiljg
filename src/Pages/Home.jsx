import React from 'react';
import HeroSection from '@/Components/home/HeroSection';
import ServicesSection from '@/Components/home/ServicesSection';
import StatsSection from '@/Components/home/StatsSection';
import WhyUsSection from '@/Components/home/WhyUsSection';
import FAQSection from '@/Components/home/FAQSection';
import PartnersSection from '@/Components/home/PartnersSection';
import CTASection from '@/Components/home/CTASection';

export default function Home() {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <ServicesSection />
      <StatsSection />
      <WhyUsSection />
      <FAQSection />
      <PartnersSection />
      <CTASection />
    </div>
  );
}