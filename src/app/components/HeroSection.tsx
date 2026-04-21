'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface HeroSectionProps {
  lang?: 'en' | 'ar';
}

const t = {
  en: {
    badge: '✈️ The Smartest Way to Travel',
    headline1: 'One App.',
    headline2: 'Every Journey.',
    headline3: 'Zero Hassle.',
    sub: 'Plan, book, pay, and travel smarter. Voiago brings flights, hotels, transport, and emergency support into one intelligent platform.',
    cta1: 'Start Your Journey',
    cta2: 'Watch How It Works',
    searchPlaceholder: 'Where do you want to go?',
    searchBtn: 'Search',
    stat1: '2M+',
    stat1Label: 'Happy Travelers',
    stat2: '150+',
    stat2Label: 'Destinations',
    stat3: '4.9★',
    stat3Label: 'App Rating',
    stat4: '50+',
    stat4Label: 'Services',
    searchLabel: 'Destination',
    dateLabel: 'Travel Date',
    typeLabel: 'Trip Type',
    types: ['Flight', 'Hotel', 'Package', 'Hajj & Umrah']
  },
  ar: {
    badge: '✈️ أذكى طريقة للسفر',
    headline1: 'تطبيق واحد.',
    headline2: 'كل رحلة.',
    headline3: 'بدون تعقيد.',
    sub: 'خطط، احجز، ادفع، وسافر بذكاء. Voiago يجمع الطيران والفنادق والنقل ودعم الطوارئ في منصة واحدة.',
    cta1: 'ابدأ رحلتك',
    cta2: 'شاهد كيف يعمل',
    searchPlaceholder: 'إلى أين تريد السفر؟',
    searchBtn: 'بحث',
    stat1: '+٢م',
    stat1Label: 'مسافر سعيد',
    stat2: '+١٥٠',
    stat2Label: 'وجهة',
    stat3: '٤.٩★',
    stat3Label: 'تقييم التطبيق',
    stat4: '+٥٠',
    stat4Label: 'خدمة',
    searchLabel: 'الوجهة',
    dateLabel: 'تاريخ السفر',
    typeLabel: 'نوع الرحلة',
    types: ['طيران', 'فندق', 'باكيج', 'حج وعمرة']
  }
};

export default function HeroSection({ lang = 'en' }: HeroSectionProps) {
  const text = t[lang];
  const isRTL = lang === 'ar';
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const { clientX, clientY } = e;
      const { width, height } = heroRef.current.getBoundingClientRect();
      const x = (clientX / width - 0.5) * 20;
      const y = (clientY / height - 0.5) * 10;
      const floats = heroRef.current.querySelectorAll('[data-parallax]');
      floats.forEach((el, i) => {
        const factor = (i + 1) * 0.5;
        (el as HTMLElement).style.transform = `translate(${x * factor}px, ${y * factor}px)`;
      });
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-end overflow-hidden"
      style={{ minHeight: '100vh' }}>
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <AppImage
          src="https://images.unsplash.com/photo-1728817935547-04f9ef9007ba"
          alt="Aerial view of stunning travel destination with turquoise water, white sandy beach, and lush tropical landscape under bright daylight"
          fill
          priority
          className="object-cover"
          sizes="100vw" />
        
        {/* Scrim overlay — dark bottom, moderate top */}
        <div className="absolute inset-0 hero-overlay" />
        {/* Subtle blue tint */}
        <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
      </div>

      {/* Floating stat cards - top right */}
      <div
        data-parallax="true"
        className="absolute top-32 right-8 md:right-16 z-20 animate-float hidden md:block">
        
        <div className="glass-dark rounded-2xl px-5 py-4 flex items-center gap-3 shadow-2xl">
          <div className="w-10 h-10 rounded-xl bg-success/20 border border-success/30 flex items-center justify-center">
            <Icon name="CheckCircleIcon" size={20} className="text-success" variant="solid" />
          </div>
          <div>
            <p className="text-white font-bold text-lg leading-none">2M+</p>
            <p className="text-white/60 text-xs mt-0.5">Happy Travelers</p>
          </div>
        </div>
      </div>

      <div
        data-parallax="true"
        className="absolute top-56 left-6 md:left-16 z-20 animate-float-delayed hidden md:block">
        
        <div className="glass-dark rounded-2xl px-5 py-4 flex items-center gap-3 shadow-2xl">
          <div className="w-10 h-10 rounded-xl bg-accent/20 border border-accent/30 flex items-center justify-center">
            <Icon name="StarIcon" size={20} className="text-accent" variant="solid" />
          </div>
          <div>
            <p className="text-white font-bold text-lg leading-none">4.9★</p>
            <p className="text-white/60 text-xs mt-0.5">App Rating</p>
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 pb-12 pt-40"
        dir={isRTL ? 'rtl' : 'ltr'}>
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark border border-white/20 text-white/90 text-xs font-bold tracking-widest uppercase mb-8 animate-fade-in-up">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-slow" />
          {text.badge}
        </div>

        {/* Headline */}
        <h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white leading-none tracking-tight mb-6"
          style={{ textShadow: '0 2px 20px rgba(0,0,0,0.3)' }}>
          
          <span className="block">{text.headline1}</span>
          <span className="block text-accent">{text.headline2}</span>
          <span className="block font-light opacity-80">{text.headline3}</span>
        </h1>

        <p className="text-white/80 text-base sm:text-lg max-w-xl mb-10 leading-relaxed font-light">
          {text.sub}
        </p>

        {/* Search Bar */}
        <div className="glass-card rounded-[2rem] p-3 max-w-3xl mb-10 shadow-2xl">
          <div className="flex flex-col md:flex-row items-stretch md:items-center gap-2 md:gap-0 md:divide-x divide-border">
            <div className="flex-1 px-5 py-3 group cursor-pointer hover:bg-secondary/50 rounded-2xl transition-colors">
              <label className="block text-xs font-bold text-primary uppercase tracking-widest mb-1">{text.searchLabel}</label>
              <div className="flex items-center gap-2">
                <Icon name="MapPinIcon" size={16} className="text-muted-foreground" />
                <input
                  type="text"
                  placeholder={text.searchPlaceholder}
                  className="bg-transparent border-none outline-none text-foreground text-sm font-medium w-full placeholder:text-muted-foreground" />
                
              </div>
            </div>
            <div className="flex-1 px-5 py-3 group cursor-pointer hover:bg-secondary/50 rounded-2xl transition-colors">
              <label className="block text-xs font-bold text-primary uppercase tracking-widest mb-1">{text.dateLabel}</label>
              <div className="flex items-center gap-2">
                <Icon name="CalendarDaysIcon" size={16} className="text-muted-foreground" />
                <span className="text-sm font-medium text-foreground">May 15 – May 22</span>
              </div>
            </div>
            <div className="flex-1 px-5 py-3 group cursor-pointer hover:bg-secondary/50 rounded-2xl transition-colors">
              <label className="block text-xs font-bold text-primary uppercase tracking-widest mb-1">{text.typeLabel}</label>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-foreground">{text.types[0]}</span>
                <Icon name="ChevronDownIcon" size={14} className="text-muted-foreground" />
              </div>
            </div>
            <div className="px-3 flex items-center">
              <Link href="/sign-up-login" className="btn-primary px-8 py-4 rounded-2xl text-sm font-bold text-white flex items-center gap-2 whitespace-nowrap">
                <Icon name="MagnifyingGlassIcon" size={18} />
                {text.searchBtn}
              </Link>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center gap-4 mb-12">
          <Link href="/sign-up-login" className="btn-primary px-8 py-4 text-sm font-bold text-white rounded-full flex items-center gap-2">
            {text.cta1}
            <Icon name="ArrowRightIcon" size={16} />
          </Link>
          <button className="flex items-center gap-3 px-8 py-4 rounded-full border border-white/30 text-white text-sm font-semibold hover:bg-white/10 transition-all duration-300">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <Icon name="PlayIcon" size={14} className="text-white" variant="solid" />
            </div>
            {text.cta2}
          </button>
        </div>

        {/* Stats Row */}
        <div className="flex flex-wrap items-center gap-8">
          {[
          { val: text.stat1, label: text.stat1Label },
          { val: text.stat2, label: text.stat2Label },
          { val: text.stat3, label: text.stat3Label },
          { val: text.stat4, label: text.stat4Label }].
          map((s, i) =>
          <div key={i} className="flex items-center gap-3">
              {i > 0 && <div className="w-px h-8 bg-white/20 hidden sm:block" />}
              <div>
                <p className="text-white font-extrabold text-xl leading-none">{s.val}</p>
                <p className="text-white/60 text-xs mt-0.5">{s.label}</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/40 flex items-start justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-white/60" />
        </div>
      </div>
    </section>);

}