'use client';

import React, { useState, useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface DestinationsSectionProps {
  lang?: 'en' | 'ar';
}

const t = {
  en: {
    badge: 'Explore Destinations',
    headline: 'Where Will You Go Next?',
    sub: 'From local Egyptian wonders to international hotspots — Voiago covers every destination you dream of.',
    filters: ['All', 'Egypt', 'Middle East', 'Europe', 'Asia', 'Hajj & Umrah'],
    viewAll: 'View All Destinations',
    from: 'From',
    perPerson: '/person',
    bookNow: 'Book Now',
    destinations: [
    { name: 'Sharm El-Sheikh', country: 'Egypt', price: 'EGP 2,500', image: "https://images.unsplash.com/photo-1687787416048-d7acdd89bfc3", tag: 'Local', tagColor: 'bg-success/20 text-success', category: 'Egypt' },
    { name: 'Dubai, UAE', country: 'United Arab Emirates', price: 'EGP 8,900', image: "https://images.unsplash.com/photo-1724887153804-4e60725f35ba", tag: 'Popular', tagColor: 'bg-primary/20 text-primary', category: 'Middle East' },
    { name: 'Istanbul', country: 'Turkey', price: 'EGP 11,200', image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=600&q=80&fit=crop', tag: 'Trending', tagColor: 'bg-accent/20 text-accent', category: 'Europe' },
    { name: 'Mecca', country: 'Saudi Arabia', price: 'EGP 15,000', image: "https://img.rocket.new/generatedImages/rocket_gen_img_15b2a4bd5-1767946410298.png", tag: 'Holy', tagColor: 'bg-amber-100 text-amber-700', category: 'Hajj & Umrah' },
    { name: 'Paris', country: 'France', price: 'EGP 18,500', image: "https://images.unsplash.com/photo-1646513631009-4efa641e144e", tag: 'Premium', tagColor: 'bg-pink-100 text-pink-600', category: 'Europe' },
    { name: 'Bangkok', country: 'Thailand', price: 'EGP 13,700', image: "https://img.rocket.new/generatedImages/rocket_gen_img_15b2a4bd5-1767946410298.png", tag: 'Value', tagColor: 'bg-green-100 text-green-600', category: 'Asia' },
    { name: 'Hurghada', country: 'Egypt', price: 'EGP 1,800', image: "https://images.unsplash.com/photo-1687787416048-d7acdd89bfc3", tag: 'Local', tagColor: 'bg-success/20 text-success', category: 'Egypt' },
    { name: 'Riyadh', country: 'Saudi Arabia', price: 'EGP 7,200', image: "https://images.unsplash.com/photo-1709115543911-40a126151fd4", tag: 'Business', tagColor: 'bg-indigo-100 text-indigo-600', category: 'Middle East' }]

  },
  ar: {
    badge: 'استكشف الوجهات',
    headline: 'إلى أين ستذهب بعد ذلك؟',
    sub: 'من عجائب مصر المحلية إلى الوجهات الدولية — Voiago يغطي كل وجهة تحلم بها.',
    filters: ['الكل', 'مصر', 'الشرق الأوسط', 'أوروبا', 'آسيا', 'حج وعمرة'],
    viewAll: 'عرض جميع الوجهات',
    from: 'من',
    perPerson: '/شخص',
    bookNow: 'احجز الآن',
    destinations: [
    { name: 'شرم الشيخ', country: 'مصر', price: 'ج.م 2,500', image: "https://images.unsplash.com/photo-1687787416048-d7acdd89bfc3", tag: 'محلي', tagColor: 'bg-success/20 text-success', category: 'مصر' },
    { name: 'دبي، الإمارات', country: 'الإمارات العربية المتحدة', price: 'ج.م 8,900', image: "https://images.unsplash.com/photo-1724887153804-4e60725f35ba", tag: 'مشهور', tagColor: 'bg-primary/20 text-primary', category: 'الشرق الأوسط' },
    { name: 'إسطنبول', country: 'تركيا', price: 'ج.م 11,200', image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=600&q=80&fit=crop', tag: 'رائج', tagColor: 'bg-accent/20 text-accent', category: 'أوروبا' },
    { name: 'مكة المكرمة', country: 'المملكة العربية السعودية', price: 'ج.م 15,000', image: "https://img.rocket.new/generatedImages/rocket_gen_img_15b2a4bd5-1767946410298.png", tag: 'مقدس', tagColor: 'bg-amber-100 text-amber-700', category: 'حج وعمرة' },
    { name: 'باريس', country: 'فرنسا', price: 'ج.م 18,500', image: "https://images.unsplash.com/photo-1646513631009-4efa641e144e", tag: 'مميز', tagColor: 'bg-pink-100 text-pink-600', category: 'أوروبا' },
    { name: 'بانكوك', country: 'تايلاند', price: 'ج.م 13,700', image: "https://img.rocket.new/generatedImages/rocket_gen_img_15b2a4bd5-1767946410298.png", tag: 'اقتصادي', tagColor: 'bg-green-100 text-green-600', category: 'آسيا' },
    { name: 'الغردقة', country: 'مصر', price: 'ج.م 1,800', image: "https://images.unsplash.com/photo-1687787416048-d7acdd89bfc3", tag: 'محلي', tagColor: 'bg-success/20 text-success', category: 'مصر' },
    { name: 'الرياض', country: 'المملكة العربية السعودية', price: 'ج.م 7,200', image: "https://images.unsplash.com/photo-1709115543911-40a126151fd4", tag: 'أعمال', tagColor: 'bg-indigo-100 text-indigo-600', category: 'الشرق الأوسط' }]

  }
};

export default function DestinationsSection({ lang = 'en' }: DestinationsSectionProps) {
  const text = t[lang];
  const isRTL = lang === 'ar';
  const [activeFilter, setActiveFilter] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const filteredDestinations = activeFilter === 0 ?
  text.destinations :
  text.destinations.filter((d) => d.category === text.filters[activeFilter]);

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
      id="destinations"
      ref={sectionRef}
      className="py-24 bg-background"
      dir={isRTL ? 'rtl' : 'ltr'}>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 scroll-reveal">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase mb-4">
              <Icon name="MapPinIcon" size={14} variant="solid" />
              {text.badge}
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-foreground tracking-tight">
              {text.headline}
            </h2>
            <p className="text-muted-foreground mt-3 max-w-xl">{text.sub}</p>
          </div>

          {/* Filters */}
          <div className="flex items-center gap-2 flex-wrap">
            {text.filters.map((f, i) =>
            <button
              key={i}
              onClick={() => setActiveFilter(i)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${
              activeFilter === i ?
              'bg-primary text-white shadow-lg shadow-primary/30' :
              'bg-white border border-border text-muted-foreground hover:border-primary hover:text-primary'}`
              }>
              
                {f}
              </button>
            )}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredDestinations.map((dest, i) =>
          <div
            key={`${dest.name}-${i}`}
            className="scroll-reveal group cursor-pointer"
            style={{ transitionDelay: `${i * 60}ms` }}>
            
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl mb-4">
                <AppImage
                src={dest.image}
                alt={`Travel destination ${dest.name} in ${dest.country} - scenic view`}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
              
                {/* Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Tag */}
                <div className="absolute top-4 left-4">
                  <span className={`tag-badge ${dest.tagColor} bg-white/90 backdrop-blur-sm`}>
                    {dest.tag}
                  </span>
                </div>

                {/* Hover CTA */}
                <div className="absolute bottom-4 inset-x-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                  <button className="w-full btn-primary py-3 rounded-xl text-sm font-bold text-white flex items-center justify-center gap-2">
                    {text.bookNow}
                    <Icon name="ArrowRightIcon" size={14} />
                  </button>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-foreground text-base">{dest.name}</h3>
                  <span className="text-sm font-semibold text-primary">{dest.price}</span>
                </div>
                <p className="text-muted-foreground text-xs uppercase tracking-wider">{dest.country}</p>
              </div>
            </div>
          )}
        </div>

        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-border text-foreground text-sm font-bold hover:bg-primary hover:text-white hover:border-primary transition-all duration-300">
            {text.viewAll}
            <Icon name="ArrowRightIcon" size={16} />
          </button>
        </div>
      </div>
    </section>);

}