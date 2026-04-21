'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/app/components/HeroSection';
import ServicesSection from '@/app/components/ServicesSection';
import WhyVoiago from '@/app/components/WhyVoiago';
import DestinationsSection from '@/app/components/DestinationsSection';
import AppDownloadSection from '@/app/components/AppDownloadSection';
import TestimonialsSection from '@/app/components/TestimonialsSection';
import PartnersSection from '@/app/components/PartnersSection';
import BottomNavSection from '@/app/components/BottomNavSection';

export default function HomePage() {
  const [lang, setLang] = useState<'en' | 'ar'>('en');

  return (
    <main className="min-h-screen bg-background" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <Header lang={lang} onLangChange={setLang} transparent />
      <HeroSection lang={lang} />
      <ServicesSection lang={lang} />
      <WhyVoiago lang={lang} />
      <DestinationsSection lang={lang} />
      <AppDownloadSection lang={lang} />
      <TestimonialsSection lang={lang} />
      <PartnersSection lang={lang} />
      <BottomNavSection lang={lang} />
      <Footer lang={lang} />
    </main>
  );
}