'use client';

import React from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';

interface FooterProps {
  lang?: 'en' | 'ar';
}

const translations = {
  en: {
    tagline: 'Your Smart Travel Companion',
    privacy: 'Privacy',
    terms: 'Terms',
    support: 'Support',
    about: 'About',
    partners: 'Partners',
    contact: 'Contact',
    copyright: '© 2026 Voiago. All rights reserved.',
    madeIn: 'Made with ❤️ in Egypt',
  },
  ar: {
    tagline: 'رفيق سفرك الذكي',
    privacy: 'الخصوصية',
    terms: 'الشروط',
    support: 'الدعم',
    about: 'من نحن',
    partners: 'الشركاء',
    contact: 'تواصل معنا',
    copyright: '© 2026 Voiago. جميع الحقوق محفوظة.',
    madeIn: 'صُنع بـ ❤️ في مصر',
  },
};

export default function Footer({ lang = 'en' }: FooterProps) {
  const t = translations[lang];
  const isRTL = lang === 'ar';

  return (
    <footer
      className="border-t border-border bg-white py-10 px-6"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Logo + Tagline */}
        <div className="flex items-center gap-2">
          <AppLogo
            src="/assets/images/WhatsApp_Image_2026-04-19_at_11.06.21_AM-1776720747008.jpeg"
            size={32}
          />
          <div className={isRTL ? 'text-right' : 'text-left'}>
            <span className="font-extrabold text-base text-foreground block leading-none">Voiago</span>
            <span className="text-xs text-muted-foreground">{t.tagline}</span>
          </div>
        </div>

        {/* Links */}
        <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
          {[
            { label: t.about, href: '#about' },
            { label: t.support, href: '#support' },
            { label: t.partners, href: '#partners' },
            { label: t.contact, href: '#contact' },
            { label: t.privacy, href: '#privacy' },
            { label: t.terms, href: '#terms' },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Social + Copyright */}
        <div className="flex flex-col items-center sm:items-end gap-2">
          <div className="flex items-center gap-3">
            {[
              { icon: 'GlobeAltIcon', href: '#', label: 'Website' },
              { icon: 'ChatBubbleLeftRightIcon', href: '#', label: 'Chat' },
              { icon: 'EnvelopeIcon', href: '#', label: 'Email' },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
              >
                <Icon name={social.icon as 'GlobeAltIcon'} size={16} />
              </a>
            ))}
          </div>
          <span className="text-xs text-muted-foreground">{t.copyright}</span>
          <span className="text-xs text-muted-foreground">{t.madeIn}</span>
        </div>
      </div>
    </footer>
  );
}