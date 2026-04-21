'use client';

import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

interface ServicesSectionProps {
  lang?: 'en' | 'ar';
}

const t = {
  en: {
    badge: 'Everything You Need',
    headline: 'All Travel Services. One Platform.',
    sub: 'No more switching between apps. Voiago is the first platform to combine every travel service in one place.',
    services: [
      {
        icon: 'PaperAirplaneIcon',
        title: 'Flight Booking',
        desc: 'Search and book flights from 500+ airlines worldwide with real-time price comparison.',
        color: 'bg-blue-50 text-primary border-blue-100',
        iconBg: 'bg-primary',
        suggestions: ['Cairo → Dubai', 'Cairo → Istanbul', 'Cairo → London', 'Cairo → Paris', 'Cairo → New York', 'Cairo → Riyadh', 'Cairo → Mecca', 'Cairo → Bangkok', 'Cairo → Kuala Lumpur', 'Cairo → Toronto'],
        tag: 'Most Popular',
        tagColor: 'bg-primary/10 text-primary',
      },
      {
        icon: 'BuildingOffice2Icon',
        title: 'Hotel Booking',
        desc: 'Choose from 1M+ hotels, resorts, and boutique stays with verified reviews and best price guarantee.',
        color: 'bg-orange-50 text-accent border-orange-100',
        iconBg: 'bg-accent',
        suggestions: ['5-Star Resorts', 'Budget Hotels', 'Beach Resorts', 'City Center', 'Boutique Hotels', 'All-Inclusive', 'Airport Hotels', 'Mountain Lodges', 'Desert Camps', 'Floating Hotels'],
        tag: 'Best Value',
        tagColor: 'bg-accent/10 text-accent',
      },
      {
        icon: 'TruckIcon',
        title: 'Transport',
        desc: 'Book airport transfers, rent cars, hire private drivers, and find the best local transport options.',
        color: 'bg-green-50 text-success border-green-100',
        iconBg: 'bg-success',
        suggestions: ['Airport Transfer', 'Car Rental', 'Private Driver', 'Bus Booking', 'Train Tickets', 'Taxi Booking', 'Limousine', 'Motorbike Rental', 'Boat Charter', 'Helicopter Tour'],
        tag: 'Fast & Easy',
        tagColor: 'bg-success/10 text-success',
      },
      {
        icon: 'MapIcon',
        title: 'Trip Planning',
        desc: 'AI-powered itinerary builder creates personalized day-by-day travel plans based on your interests.',
        color: 'bg-purple-50 text-purple-600 border-purple-100',
        iconBg: 'bg-purple-600',
        suggestions: ['3-Day Cairo Tour', '7-Day Turkey Trip', 'Honeymoon Package', 'Family Adventure', 'Solo Backpacking', 'Cultural Tour', 'Beach Holiday', 'Mountain Trekking', 'Food Tour', 'Photography Tour'],
        tag: 'AI Powered',
        tagColor: 'bg-purple-100 text-purple-600',
      },
      {
        icon: 'CreditCardIcon',
        title: 'Smart Payments',
        desc: 'Pay in EGP, USD, EUR, SAR, AED, GBP or 50+ currencies with instant confirmation and secure checkout.',
        color: 'bg-indigo-50 text-indigo-600 border-indigo-100',
        iconBg: 'bg-indigo-600',
        suggestions: ['Pay in EGP', 'Pay in USD', 'Pay in EUR', 'Pay in SAR', 'Pay in AED', 'Installment Plan', 'Cash on Arrival', 'Wallet Balance', 'Crypto Payment', 'Bank Transfer'],
        tag: 'Multi-Currency',
        tagColor: 'bg-indigo-100 text-indigo-600',
      },
      {
        icon: 'ExclamationTriangleIcon',
        title: 'Emergency Support',
        desc: '24/7 emergency button with instant access to embassies, hospitals, and location sharing for safety.',
        color: 'bg-red-50 text-danger border-red-100',
        iconBg: 'bg-danger',
        suggestions: ['SOS Button', 'Embassy Contacts', 'Hospital Finder', 'Police Numbers', 'Location Share', 'Travel Insurance', 'Lost Passport Help', 'Medical Evacuation', 'Crisis Alert', 'Family Notification'],
        tag: '24/7 Available',
        tagColor: 'bg-red-100 text-danger',
      },
      {
        icon: 'MoonIcon',
        title: 'Hajj & Umrah',
        desc: 'Complete Hajj and Umrah packages with guided tours, visa assistance, and accommodation in Mecca & Medina.',
        color: 'bg-amber-50 text-amber-700 border-amber-100',
        iconBg: 'bg-amber-600',
        suggestions: ['Economy Umrah', 'Premium Umrah', 'Hajj Package 2026', 'Ramadan Umrah', 'Group Umrah', 'VIP Hajj', 'Medina Extension', 'Mecca Hotels', 'Guided Tour', 'Visa Assistance'],
        tag: 'Exclusive',
        tagColor: 'bg-amber-100 text-amber-700',
      },
      {
        icon: 'CameraIcon',
        title: 'Trip Journal',
        desc: 'Document your journey with photos, notes, and memories. Share your travel stories with the community.',
        color: 'bg-pink-50 text-pink-600 border-pink-100',
        iconBg: 'bg-pink-600',
        suggestions: ['Photo Albums', 'Travel Diary', 'Location Tags', 'Share Stories', 'Video Reels', 'Memory Map', 'Travel Timeline', 'Community Feed', 'Travel Badges', 'Trip Stats'],
        tag: 'New Feature',
        tagColor: 'bg-pink-100 text-pink-600',
      },
    ],
  },
  ar: {
    badge: 'كل ما تحتاجه',
    headline: 'كل خدمات السفر. منصة واحدة.',
    sub: 'لا مزيد من التنقل بين التطبيقات. Voiago هو أول منصة تجمع كل خدمات السفر في مكان واحد.',
    services: [
      { icon: 'PaperAirplaneIcon', title: 'حجز الطيران', desc: 'ابحث واحجز رحلات من أكثر من 500 شركة طيران عالمية مع مقارنة الأسعار الفورية.', color: 'bg-blue-50 text-primary border-blue-100', iconBg: 'bg-primary', suggestions: ['القاهرة → دبي', 'القاهرة → إسطنبول', 'القاهرة → لندن', 'القاهرة → باريس', 'القاهرة → نيويورك', 'القاهرة → الرياض', 'القاهرة → مكة', 'القاهرة → بانكوك', 'القاهرة → كوالالمبور', 'القاهرة → تورنتو'], tag: 'الأكثر شيوعاً', tagColor: 'bg-primary/10 text-primary' },
      { icon: 'BuildingOffice2Icon', title: 'حجز الفنادق', desc: 'اختر من أكثر من مليون فندق ومنتجع بتقييمات موثقة وضمان أفضل سعر.', color: 'bg-orange-50 text-accent border-orange-100', iconBg: 'bg-accent', suggestions: ['منتجعات 5 نجوم', 'فنادق اقتصادية', 'منتجعات بحرية', 'وسط المدينة', 'فنادق بوتيك', 'شامل', 'فنادق المطار', 'أكواخ جبلية', 'مخيمات صحراوية', 'فنادق عائمة'], tag: 'أفضل قيمة', tagColor: 'bg-accent/10 text-accent' },
      { icon: 'TruckIcon', title: 'وسائل النقل', desc: 'احجز نقل المطار واستأجر سيارات واعثر على أفضل خيارات النقل المحلي.', color: 'bg-green-50 text-success border-green-100', iconBg: 'bg-success', suggestions: ['نقل المطار', 'تأجير سيارات', 'سائق خاص', 'حجز أتوبيس', 'تذاكر قطار', 'حجز تاكسي', 'ليموزين', 'تأجير دراجات', 'استئجار قارب', 'جولة هليكوبتر'], tag: 'سريع وسهل', tagColor: 'bg-success/10 text-success' },
      { icon: 'MapIcon', title: 'تخطيط الرحلة', desc: 'منشئ الجدول الزمني بالذكاء الاصطناعي يضع خططاً يومية مخصصة حسب اهتماماتك.', color: 'bg-purple-50 text-purple-600 border-purple-100', iconBg: 'bg-purple-600', suggestions: ['جولة القاهرة 3 أيام', 'رحلة تركيا 7 أيام', 'باقة شهر العسل', 'مغامرة عائلية', 'سفر منفرد', 'جولة ثقافية', 'عطلة شاطئية', 'تسلق الجبال', 'جولة طعام', 'جولة تصوير'], tag: 'ذكاء اصطناعي', tagColor: 'bg-purple-100 text-purple-600' },
      { icon: 'CreditCardIcon', title: 'دفع ذكي', desc: 'ادفع بالجنيه أو الدولار أو اليورو أو الريال أو الدرهم أو أكثر من 50 عملة.', color: 'bg-indigo-50 text-indigo-600 border-indigo-100', iconBg: 'bg-indigo-600', suggestions: ['ادفع بالجنيه', 'ادفع بالدولار', 'ادفع باليورو', 'ادفع بالريال', 'ادفع بالدرهم', 'تقسيط', 'دفع عند الوصول', 'رصيد المحفظة', 'دفع مشفر', 'تحويل بنكي'], tag: 'متعدد العملات', tagColor: 'bg-indigo-100 text-indigo-600' },
      { icon: 'ExclamationTriangleIcon', title: 'دعم الطوارئ', desc: 'زر طوارئ على مدار الساعة مع وصول فوري للسفارات والمستشفيات ومشاركة الموقع.', color: 'bg-red-50 text-danger border-red-100', iconBg: 'bg-danger', suggestions: ['زر SOS', 'جهات السفارة', 'أقرب مستشفى', 'أرقام الشرطة', 'مشاركة الموقع', 'تأمين السفر', 'مساعدة فقدان الجواز', 'إجلاء طبي', 'تنبيه أزمات', 'إشعار العائلة'], tag: 'متاح 24/7', tagColor: 'bg-red-100 text-danger' },
      { icon: 'MoonIcon', title: 'الحج والعمرة', desc: 'باقات حج وعمرة متكاملة مع جولات مرشدة ومساعدة في التأشيرة وإقامة في مكة والمدينة.', color: 'bg-amber-50 text-amber-700 border-amber-100', iconBg: 'bg-amber-600', suggestions: ['عمرة اقتصادية', 'عمرة مميزة', 'باقة حج 2026', 'عمرة رمضان', 'عمرة جماعية', 'حج VIP', 'إضافة المدينة', 'فنادق مكة', 'جولة مرشدة', 'مساعدة التأشيرة'], tag: 'حصري', tagColor: 'bg-amber-100 text-amber-700' },
      { icon: 'CameraIcon', title: 'مجلة الرحلة', desc: 'وثّق رحلتك بالصور والملاحظات والذكريات. شارك قصصك مع المجتمع.', color: 'bg-pink-50 text-pink-600 border-pink-100', iconBg: 'bg-pink-600', suggestions: ['ألبومات الصور', 'مذكرات السفر', 'علامات الموقع', 'مشاركة القصص', 'مقاطع فيديو', 'خريطة الذكريات', 'الجدول الزمني', 'مجتمع المسافرين', 'شارات السفر', 'إحصائيات الرحلة'], tag: 'ميزة جديدة', tagColor: 'bg-pink-100 text-pink-600' },
    ],
  },
};

export default function ServicesSection({ lang = 'en' }: ServicesSectionProps) {
  const text = t[lang];
  const isRTL = lang === 'ar';
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('hidden-init');
          }
        });
      },
      { threshold: 0.1 }
    );
    const els = sectionRef.current?.querySelectorAll('.scroll-reveal');
    els?.forEach((el) => {
      el.classList.add('hidden-init');
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-24 bg-background"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16 scroll-reveal">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase mb-4">
            <Icon name="SparklesIcon" size={14} variant="solid" />
            {text.badge}
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-4 tracking-tight">
            {text.headline}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            {text.sub}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {text.services.map((service, i) => (
            <div
              key={i}
              className={`service-card scroll-reveal bg-card rounded-2xl p-6 border ${service.color.split(' ').find(c => c.startsWith('border-')) || 'border-border'} shadow-sm hover:shadow-xl cursor-pointer group`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {/* Icon + Tag */}
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl ${service.iconBg} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon name={service.icon as 'PaperAirplaneIcon'} size={22} className="text-white" />
                </div>
                <span className={`tag-badge ${service.tagColor}`}>
                  {service.tag}
                </span>
              </div>

              <h3 className="font-bold text-foreground text-base mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{service.desc}</p>

              {/* Suggestions */}
              <div className="flex flex-wrap gap-1.5">
                {service.suggestions.slice(0, 5).map((s, j) => (
                  <span
                    key={j}
                    className="px-2.5 py-1 bg-input text-muted-foreground text-xs rounded-full border border-border hover:border-primary hover:text-primary hover:bg-secondary transition-all cursor-pointer"
                  >
                    {s}
                  </span>
                ))}
                {service.suggestions.length > 5 && (
                  <span className="px-2.5 py-1 bg-secondary text-primary text-xs rounded-full border border-primary/20 font-semibold cursor-pointer">
                    +{service.suggestions.length - 5} {lang === 'ar' ? 'أكثر' : 'more'}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}