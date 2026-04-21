'use client';

import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

interface WhyVoiagoProps {
  lang?: 'en' | 'ar';
}

const t = {
  en: {
    badge: 'Why Choose Voiago',
    headline: 'The Only App That Does It All.',
    sub: 'While other apps do one thing, Voiago does everything. Here\'s what makes us different.',
    stats: [
      { val: '50+', label: 'Travel Services', icon: 'StarIcon' },
      { val: '150+', label: 'Destinations', icon: 'GlobeAltIcon' },
      { val: '2M+', label: 'Travelers', icon: 'UsersIcon' },
      { val: '24/7', label: 'Support', icon: 'ChatBubbleLeftRightIcon' },
    ],
    advantages: [
      { icon: 'RocketLaunchIcon', title: 'Everything in One App', desc: 'Flights, hotels, transport, planning, payments, emergency — all in one place. No more app switching.', color: 'text-primary', bg: 'bg-primary/10' },
      { icon: 'CpuChipIcon', title: 'AI-Powered Planning', desc: 'Our AI analyzes your preferences and builds personalized itineraries that match your budget and style.', color: 'text-purple-600', bg: 'bg-purple-100' },
      { icon: 'ShieldCheckIcon', title: 'Safety First', desc: 'Real-time emergency button, location sharing, embassy contacts, and 24/7 traveler support.', color: 'text-success', bg: 'bg-success/10' },
      { icon: 'CurrencyDollarIcon', title: 'Multi-Currency Payments', desc: 'Pay in EGP, USD, EUR, SAR, AED, GBP and 50+ currencies. No hidden fees, best exchange rates.', color: 'text-accent', bg: 'bg-accent/10' },
      { icon: 'MoonIcon', title: 'Hajj & Umrah Packages', desc: 'Exclusive Hajj and Umrah packages with guided tours, visa assistance, and premium accommodations.', color: 'text-amber-600', bg: 'bg-amber-100' },
      { icon: 'WifiIcon', title: 'Works Offline', desc: 'Access your bookings, maps, and itineraries even without internet connection. Perfect for travel.', color: 'text-indigo-600', bg: 'bg-indigo-100' },
    ],
    quoteText: '"Voiago is not just an app — it\'s a complete travel ecosystem that puts every service you need in the palm of your hand."',
    quoteAuthor: 'Voiago Team',
  },
  ar: {
    badge: 'لماذا تختار Voiago',
    headline: 'التطبيق الوحيد الذي يفعل كل شيء.',
    sub: 'بينما تفعل التطبيقات الأخرى شيئاً واحداً، يفعل Voiago كل شيء. إليك ما يميزنا.',
    stats: [
      { val: '+50', label: 'خدمة سفر', icon: 'StarIcon' },
      { val: '+150', label: 'وجهة', icon: 'GlobeAltIcon' },
      { val: '+2م', label: 'مسافر', icon: 'UsersIcon' },
      { val: '24/7', label: 'دعم', icon: 'ChatBubbleLeftRightIcon' },
    ],
    advantages: [
      { icon: 'RocketLaunchIcon', title: 'كل شيء في تطبيق واحد', desc: 'طيران، فنادق، نقل، تخطيط، دفع، طوارئ — كل شيء في مكان واحد. لا مزيد من التنقل بين التطبيقات.', color: 'text-primary', bg: 'bg-primary/10' },
      { icon: 'CpuChipIcon', title: 'تخطيط بالذكاء الاصطناعي', desc: 'يحلل ذكاؤنا الاصطناعي تفضيلاتك ويبني جداول زمنية مخصصة تناسب ميزانيتك وأسلوبك.', color: 'text-purple-600', bg: 'bg-purple-100' },
      { icon: 'ShieldCheckIcon', title: 'الأمان أولاً', desc: 'زر طوارئ فوري، مشاركة الموقع، جهات السفارة، ودعم مسافر على مدار الساعة.', color: 'text-success', bg: 'bg-success/10' },
      { icon: 'CurrencyDollarIcon', title: 'مدفوعات متعددة العملات', desc: 'ادفع بالجنيه والدولار واليورو والريال والدرهم والجنيه الإسترليني وأكثر من 50 عملة.', color: 'text-accent', bg: 'bg-accent/10' },
      { icon: 'MoonIcon', title: 'باقات الحج والعمرة', desc: 'باقات حج وعمرة حصرية مع جولات مرشدة ومساعدة في التأشيرة وإقامة متميزة.', color: 'text-amber-600', bg: 'bg-amber-100' },
      { icon: 'WifiIcon', title: 'يعمل بدون إنترنت', desc: 'اوصل لحجوزاتك وخرائطك وجداولك حتى بدون اتصال بالإنترنت. مثالي للسفر.', color: 'text-indigo-600', bg: 'bg-indigo-100' },
    ],
    quoteText: '"Voiago ليس مجرد تطبيق — إنه نظام سفر متكامل يضع كل خدمة تحتاجها في راحة يدك."',
    quoteAuthor: 'فريق Voiago',
  },
};

export default function WhyVoiago({ lang = 'en' }: WhyVoiagoProps) {
  const text = t[lang];
  const isRTL = lang === 'ar';
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.remove('hidden-init');
        });
      },
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.scroll-reveal').forEach((el) => {
      el.classList.add('hidden-init');
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 bg-deep-navy relative overflow-hidden"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/15 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 scroll-reveal">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold tracking-widest uppercase mb-4">
            <Icon name="TrophyIcon" size={14} variant="solid" className="text-gold" />
            {text.badge}
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 tracking-tight">
            {text.headline}
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
            {text.sub}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {text.stats.map((stat, i) => (
            <div
              key={i}
              className="scroll-reveal text-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center mx-auto mb-3">
                <Icon name={stat.icon as 'StarIcon'} size={22} className="text-primary" variant="solid" />
              </div>
              <p className="text-3xl font-extrabold text-white mb-1">{stat.val}</p>
              <p className="text-white/50 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {text.advantages.map((adv, i) => (
            <div
              key={i}
              className="scroll-reveal p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/8 hover:border-white/20 transition-all duration-400 group"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className={`w-12 h-12 rounded-xl ${adv.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <Icon name={adv.icon as 'RocketLaunchIcon'} size={22} className={adv.color} />
              </div>
              <h3 className="font-bold text-white text-base mb-2">{adv.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{adv.desc}</p>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="scroll-reveal text-center max-w-3xl mx-auto p-8 rounded-3xl bg-white/5 border border-white/10">
          <Icon name="ChatBubbleBottomCenterTextIcon" size={32} className="text-primary mx-auto mb-4" />
          <blockquote className="text-xl font-light text-white/80 leading-relaxed italic mb-4">
            {text.quoteText}
          </blockquote>
          <cite className="text-white/40 text-sm font-semibold not-italic">— {text.quoteAuthor}</cite>
        </div>
      </div>
    </section>
  );
}