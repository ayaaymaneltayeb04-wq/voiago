'use client';

import React, { useState, useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface TestimonialsSectionProps {
  lang?: 'en' | 'ar';
}

const t = {
  en: {
    badge: 'Traveler Stories',
    headline: 'Loved by Millions of Travelers',
    sub: 'Real experiences from real travelers who made their journeys unforgettable with Voiago.',
    testimonials: [
    { name: 'Ahmed Hassan', role: 'Frequent Traveler, Cairo', quote: 'Voiago completely changed how I travel. I used to use 5 different apps — now I only need one. Booked flights, hotel, and airport transfer all in 10 minutes!', avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1d424c02f-1765025174569.png", rating: 5, trip: 'Cairo → Istanbul' },
    { name: 'Mariam El-Sayed', role: 'Family Traveler, Alexandria', quote: 'The Hajj & Umrah packages are incredible. Everything was arranged perfectly — visa, accommodation in Mecca, guided tours. My family had the most beautiful experience.', avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1431151f7-1775071940316.png", rating: 5, trip: 'Umrah Package' },
    { name: 'Omar Khalil', role: 'Business Traveler, Giza', quote: 'The multi-currency payment feature is a game changer. I travel for business monthly and being able to pay in USD or EUR without extra fees saves me a lot.', avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1aa04bf42-1768646947254.png", rating: 5, trip: 'Cairo → Dubai' }],

    next: 'Next',
    prev: 'Previous'
  },
  ar: {
    badge: 'قصص المسافرين',
    headline: 'يحبه الملايين من المسافرين',
    sub: 'تجارب حقيقية من مسافرين حقيقيين جعلوا رحلاتهم لا تُنسى مع Voiago.',
    testimonials: [
    { name: 'أحمد حسن', role: 'مسافر متكرر، القاهرة', quote: 'Voiago غيّر طريقة سفري تماماً. كنت أستخدم 5 تطبيقات مختلفة — الآن أحتاج واحداً فقط. حجزت الطيران والفندق ونقل المطار في 10 دقائق!', avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1ffc32162-1769707835748.png", rating: 5, trip: 'القاهرة → إسطنبول' },
    { name: 'مريم السيد', role: 'مسافرة عائلية، الإسكندرية', quote: 'باقات الحج والعمرة رائعة. كل شيء كان مرتباً بشكل مثالي — التأشيرة والإقامة في مكة والجولات المرشدة. عائلتي عاشت أجمل تجربة.', avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1431151f7-1775071940316.png", rating: 5, trip: 'باقة عمرة' },
    { name: 'عمر خليل', role: 'مسافر أعمال، الجيزة', quote: 'ميزة الدفع بعدة عملات تغير قواعد اللعبة. أسافر للأعمال شهرياً والدفع بالدولار أو اليورو بدون رسوم يوفر عليّ الكثير.', avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1b22ab286-1776721484158.png", rating: 5, trip: 'القاهرة → دبي' }],

    next: 'التالي',
    prev: 'السابق'
  }
};

export default function TestimonialsSection({ lang = 'en' }: TestimonialsSectionProps) {
  const text = t[lang];
  const isRTL = lang === 'ar';
  const [current, setCurrent] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const testimonial = text.testimonials[current];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((c) => (c + 1) % text.testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [text.testimonials.length]);

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-secondary/30"
      dir={isRTL ? 'rtl' : 'ltr'}>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase mb-4">
            <Icon name="StarIcon" size={14} variant="solid" className="text-gold" />
            {text.badge}
          </div>
          <h2 className="text-4xl font-extrabold text-foreground tracking-tight mb-3">{text.headline}</h2>
          <p className="text-muted-foreground">{text.sub}</p>
        </div>

        {/* Testimonial Card */}
        <div className="bg-card rounded-3xl p-8 md:p-12 shadow-xl border border-border relative">
          {/* Quote icon */}
          <div className="absolute top-8 right-8 opacity-10">
            <Icon name="ChatBubbleBottomCenterTextIcon" size={64} className="text-primary" />
          </div>

          {/* Stars */}
          <div className="flex items-center gap-1 mb-6">
            {Array.from({ length: testimonial.rating }).map((_, i) =>
            <Icon key={i} name="StarIcon" size={18} className="text-gold" variant="solid" />
            )}
          </div>

          {/* Quote */}
          <blockquote className="text-xl md:text-2xl font-light text-foreground leading-relaxed mb-8 italic">
            &ldquo;{testimonial.quote}&rdquo;
          </blockquote>

          {/* Author */}
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary/30">
                  <AppImage
                    src={testimonial.avatar}
                    alt={`Traveler ${testimonial.name} profile photo`}
                    width={56}
                    height={56}
                    className="object-cover w-full h-full" />
                  
                </div>
                <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-success border-2 border-white flex items-center justify-center">
                  <Icon name="CheckIcon" size={10} className="text-white" />
                </div>
              </div>
              <div>
                <p className="font-bold text-foreground">{testimonial.name}</p>
                <p className="text-muted-foreground text-sm">{testimonial.role}</p>
              </div>
            </div>

            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-primary/20">
              <Icon name="PaperAirplaneIcon" size={14} className="text-primary" />
              <span className="text-primary text-sm font-semibold">{testimonial.trip}</span>
            </div>
          </div>

          {/* Progress bar */}
          <div className="flex items-center gap-3 mt-8 pt-6 border-t border-border">
            {text.testimonials.map((_, i) =>
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
              i === current ? 'w-12 bg-primary' : 'w-4 bg-border hover:bg-muted'}`
              }
              aria-label={`Testimonial ${i + 1}`} />

            )}
            <div className="ml-auto flex items-center gap-2">
              <button
                onClick={() => setCurrent((c) => (c - 1 + text.testimonials.length) % text.testimonials.length)}
                className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all"
                aria-label={text.prev}>
                
                <Icon name="ChevronLeftIcon" size={16} />
              </button>
              <button
                onClick={() => setCurrent((c) => (c + 1) % text.testimonials.length)}
                className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-white hover:opacity-90 transition-all"
                aria-label={text.next}>
                
                <Icon name="ChevronRightIcon" size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>);

}