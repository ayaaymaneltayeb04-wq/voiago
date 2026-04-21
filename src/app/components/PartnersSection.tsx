'use client';

import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface PartnersSectionProps {
  lang?: 'en' | 'ar';
}

const t = {
  en: {
    badge: 'Our Partners',
    headline: 'Trusted by Leading Travel Brands',
    sub: 'We partner with the world\'s top airlines, hotel chains, and travel services to bring you the best deals.',
    partnerCategories: [
      { label: 'Airlines', icon: 'PaperAirplaneIcon', count: '500+', partners: ['EgyptAir', 'Emirates', 'Turkish Airlines', 'Qatar Airways', 'Etihad', 'Air Arabia', 'Lufthansa', 'British Airways'] },
      { label: 'Hotels', icon: 'BuildingOffice2Icon', count: '1M+', partners: ['Hilton', 'Marriott', 'Hyatt', 'Four Seasons', 'Accor', 'IHG', 'Kempinski', 'Mövenpick'] },
      { label: 'Transport', icon: 'TruckIcon', count: '200+', partners: ['Uber', 'Careem', 'Sixt', 'Hertz', 'Avis', 'Budget', 'Enterprise', 'Europcar'] },
    ],
    becomePartner: 'Become a Partner',
    learnMore: 'Learn More',
  },
  ar: {
    badge: 'شركاؤنا',
    headline: 'موثوق من كبرى علامات السفر',
    sub: 'نتشارك مع كبرى شركات الطيران وسلاسل الفنادق وخدمات السفر لنقدم لك أفضل الصفقات.',
    partnerCategories: [
      { label: 'شركات الطيران', icon: 'PaperAirplaneIcon', count: '+500', partners: ['مصر للطيران', 'الإمارات', 'التركية', 'قطر', 'الاتحاد', 'العربية', 'لوفتهانزا', 'بريتيش'] },
      { label: 'الفنادق', icon: 'BuildingOffice2Icon', count: '+1م', partners: ['هيلتون', 'ماريوت', 'حياة', 'فور سيزونز', 'أكور', 'IHG', 'كمبينسكي', 'موفنبيك'] },
      { label: 'النقل', icon: 'TruckIcon', count: '+200', partners: ['أوبر', 'كريم', 'سيكست', 'هيرتز', 'أفيس', 'بادجت', 'إنتربرايز', 'يوروبكار'] },
    ],
    becomePartner: 'كن شريكاً',
    learnMore: 'اعرف المزيد',
  },
};

export default function PartnersSection({ lang = 'en' }: PartnersSectionProps) {
  const text = t[lang];
  const isRTL = lang === 'ar';

  return (
    <section
      id="partners"
      className="py-20 bg-background"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase mb-4">
            <Icon name="HandshakeIcon" size={14} />
            {text.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight mb-3">{text.headline}</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">{text.sub}</p>
        </div>

        {/* Partner Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {text.partnerCategories.map((cat, i) => (
            <div key={i} className="bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Icon name={cat.icon as 'PaperAirplaneIcon'} size={20} className="text-primary" />
                </div>
                <div>
                  <p className="font-bold text-foreground text-sm">{cat.label}</p>
                  <p className="text-primary text-xs font-bold">{cat.count} {lang === 'ar' ? 'شريك' : 'Partners'}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.partners.map((p, j) => (
                  <span key={j} className="px-3 py-1 bg-input rounded-full text-xs text-muted-foreground border border-border">
                    {p}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center flex flex-wrap items-center justify-center gap-4">
          <button className="btn-primary px-8 py-3.5 text-sm font-bold text-white rounded-full flex items-center gap-2">
            <Icon name="PlusCircleIcon" size={18} />
            {text.becomePartner}
          </button>
          <button className="px-8 py-3.5 rounded-full border border-border text-foreground text-sm font-bold hover:border-primary hover:text-primary transition-all duration-300">
            {text.learnMore}
          </button>
        </div>
      </div>
    </section>
  );
}