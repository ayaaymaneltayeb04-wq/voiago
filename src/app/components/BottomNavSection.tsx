'use client';

import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface BottomNavSectionProps {
  lang?: 'en' | 'ar';
}

const t = {
  en: {
    headline: 'Everything You Need, All in One Place.',
    sections: [
      { icon: 'QuestionMarkCircleIcon', label: 'Support', desc: '24/7 traveler support', href: '/support', color: 'text-primary bg-primary/10' },
      { icon: 'CompassIcon', label: 'Explore', desc: 'Discover new destinations', href: '/explore', color: 'text-accent bg-accent/10' },
      { icon: 'DocumentTextIcon', label: 'Terms', desc: 'Terms & conditions', href: '/terms', color: 'text-muted-foreground bg-input' },
      { icon: 'Cog6ToothIcon', label: 'Settings', desc: 'Account & preferences', href: '/settings', color: 'text-purple-600 bg-purple-100' },
      { icon: 'HandshakeIcon', label: 'Partners', desc: 'Join our network', href: '/partners', color: 'text-success bg-success/10' },
      { icon: 'InformationCircleIcon', label: 'About', desc: 'Our story & mission', href: '/about', color: 'text-amber-600 bg-amber-100' },
      { icon: 'EnvelopeIcon', label: 'Contact', desc: 'Get in touch with us', href: '/contact', color: 'text-indigo-600 bg-indigo-100' },
    ],
  },
  ar: {
    headline: 'كل ما تحتاجه، في مكان واحد.',
    sections: [
      { icon: 'QuestionMarkCircleIcon', label: 'الدعم', desc: 'دعم مسافر 24/7', href: '/support', color: 'text-primary bg-primary/10' },
      { icon: 'CompassIcon', label: 'استكشف', desc: 'اكتشف وجهات جديدة', href: '/explore', color: 'text-accent bg-accent/10' },
      { icon: 'DocumentTextIcon', label: 'الشروط', desc: 'الشروط والأحكام', href: '/terms', color: 'text-muted-foreground bg-input' },
      { icon: 'Cog6ToothIcon', label: 'الإعدادات', desc: 'الحساب والتفضيلات', href: '/settings', color: 'text-purple-600 bg-purple-100' },
      { icon: 'HandshakeIcon', label: 'الشركاء', desc: 'انضم لشبكتنا', href: '/partners', color: 'text-success bg-success/10' },
      { icon: 'InformationCircleIcon', label: 'من نحن', desc: 'قصتنا ومهمتنا', href: '/about', color: 'text-amber-600 bg-amber-100' },
      { icon: 'EnvelopeIcon', label: 'تواصل معنا', desc: 'تواصل معنا', href: '/contact', color: 'text-indigo-600 bg-indigo-100' },
    ],
  },
};

export default function BottomNavSection({ lang = 'en' }: BottomNavSectionProps) {
  const text = t[lang];
  const isRTL = lang === 'ar';

  return (
    <section
      id="support"
      className="py-20 bg-secondary/20 border-t border-border"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl font-extrabold text-foreground text-center mb-10 tracking-tight">
          {text.headline}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {text.sections.map((section, i) => (
            <Link
              key={i}
              href={section.href}
              className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-card border border-border hover:border-primary hover:shadow-md transition-all duration-300 group text-center"
            >
              <div className={`w-12 h-12 rounded-xl ${section.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <Icon name={section.icon as 'QuestionMarkCircleIcon'} size={22} />
              </div>
              <div>
                <p className="font-bold text-foreground text-sm">{section.label}</p>
                <p className="text-muted-foreground text-xs mt-0.5 leading-tight">{section.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}