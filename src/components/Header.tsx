'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';

interface HeaderProps {
  lang?: 'en' | 'ar';
  onLangChange?: (lang: 'en' | 'ar') => void;
  transparent?: boolean;
}

const translations = {
  en: {
    home: 'Home',
    services: 'Services',
    destinations: 'Destinations',
    explore: 'Explore',
    about: 'About',
    contact: 'Contact',
    login: 'Sign In',
    getStarted: 'Get Started',
    switchLang: 'عربي',
  },
  ar: {
    home: 'الرئيسية',
    services: 'الخدمات',
    destinations: 'الوجهات',
    explore: 'استكشف',
    about: 'من نحن',
    contact: 'تواصل معنا',
    login: 'تسجيل الدخول',
    getStarted: 'ابدأ الآن',
    switchLang: 'English',
  },
};

export default function Header({ lang = 'en', onLangChange, transparent = false }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const t = translations[lang];
  const isRTL = lang === 'ar';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.home, href: '/' },
    { label: t.services, href: '/#services' },
    { label: t.explore, href: '/explore' },
    { label: t.about, href: '/about' },
    { label: t.contact, href: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || !transparent
          ? 'bg-white/95 backdrop-blur-xl shadow-sm border-b border-border'
          : 'bg-transparent'
      }`}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/homepage" className="flex items-center gap-2 shrink-0">
          <AppLogo
            src="/assets/images/WhatsApp_Image_2026-04-19_at_11.06.21_AM-1776720747008.jpeg"
            size={40}
          />
          <span
            className={`font-extrabold text-xl tracking-tight ${
              scrolled || !transparent ? 'text-foreground' : 'text-white'
            }`}
          >
            Voiago
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1 bg-white/10 backdrop-blur-sm px-2 py-1.5 rounded-full border border-white/20">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                scrolled || !transparent
                  ? 'text-muted-foreground hover:text-primary hover:bg-secondary'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {/* Language Toggle */}
          <button
            onClick={() => onLangChange?.(lang === 'en' ? 'ar' : 'en')}
            className={`hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-bold border transition-all duration-300 ${
              scrolled || !transparent
                ? 'border-border text-muted-foreground hover:border-primary hover:text-primary'
                : 'border-white/30 text-white/80 hover:border-white hover:text-white'
            }`}
          >
            <Icon name="GlobeAltIcon" size={14} />
            {t.switchLang}
          </button>

          <Link
            href="/sign-up-login"
            className={`hidden sm:block text-sm font-semibold transition-colors duration-300 ${
              scrolled || !transparent ? 'text-foreground hover:text-primary' : 'text-white/90 hover:text-white'
            }`}
          >
            {t.login}
          </Link>

          <Link
            href="/sign-up-login"
            className="btn-primary px-5 py-2.5 text-sm font-semibold rounded-full text-white"
          >
            {t.getStarted}
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`lg:hidden p-2 rounded-xl transition-colors ${
              scrolled || !transparent
                ? 'text-foreground hover:bg-secondary'
                : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle menu"
          >
            <Icon name={menuOpen ? 'XMarkIcon' : 'Bars3Icon'} size={22} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-xl border-t border-border px-4 py-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="px-4 py-3 rounded-xl text-sm font-medium text-muted-foreground hover:text-primary hover:bg-secondary transition-all"
            >
              {link.label}
            </Link>
          ))}
          <div className="flex gap-3 pt-2 border-t border-border mt-2">
            <Link
              href="/sign-up-login"
              className="flex-1 text-center py-3 rounded-xl text-sm font-semibold text-foreground border border-border hover:border-primary hover:text-primary transition-all"
              onClick={() => setMenuOpen(false)}
            >
              {t.login}
            </Link>
            <Link
              href="/sign-up-login"
              className="flex-1 text-center btn-primary py-3 rounded-xl text-sm font-semibold text-white"
              onClick={() => setMenuOpen(false)}
            >
              {t.getStarted}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}