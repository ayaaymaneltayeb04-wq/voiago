'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';
import AppLogo from '@/components/ui/AppLogo';

type Lang = 'en' | 'ar';

const t = {
  en: {
    hero: 'About Voiago',
    heroSub: 'Your Smart Travel Companion — Connecting the World, One Journey at a Time',
    mission: 'Our Mission',
    missionText: 'To make travel accessible, affordable, and enjoyable for everyone by providing a single, intelligent platform that handles every aspect of the journey — from planning to memories.',
    vision: 'Our Vision',
    visionText: 'To become the leading travel platform in the Middle East and Africa, empowering millions of travelers with smart technology and personalized experiences.',
    story: 'Our Story',
    storyText: `Voiago was born from a simple frustration: why do travelers need 5 different apps to plan one trip?

Our founders, passionate travelers themselves, experienced firsthand the chaos of juggling multiple booking platforms, currency converters, maps, and emergency contacts. They envisioned a world where a single intelligent platform could handle everything.

In 2024, Voiago launched with a mission to revolutionize travel in Egypt and the Arab world. Starting with flight and hotel bookings, we quickly expanded to include AI-powered trip planning, Hajj & Umrah packages, emergency support, and a comprehensive loyalty program.

Today, Voiago serves over 2 million travelers across 50+ countries, with a team of 150+ passionate professionals dedicated to making every journey extraordinary.`,
    stats: [
    { value: '2M+', label: 'Happy Travelers', icon: 'UsersIcon' },
    { value: '50+', label: 'Countries Covered', icon: 'GlobeAltIcon' },
    { value: '500+', label: 'Airline Partners', icon: 'PaperAirplaneIcon' },
    { value: '1M+', label: 'Hotels Listed', icon: 'BuildingOffice2Icon' },
    { value: '4.9★', label: 'App Rating', icon: 'StarIcon' },
    { value: '24/7', label: 'Support Available', icon: 'PhoneIcon' }],

    values: 'Our Values',
    valuesList: [
    { icon: 'HeartIcon', title: 'Traveler First', desc: 'Every decision we make starts with the traveler\'s experience in mind.', color: 'text-danger bg-danger/10' },
    { icon: 'ShieldCheckIcon', title: 'Trust & Safety', desc: 'We prioritize the safety and security of every traveler on our platform.', color: 'text-success bg-success/10' },
    { icon: 'LightBulbIcon', title: 'Innovation', desc: 'We continuously push boundaries with AI and smart technology.', color: 'text-amber-600 bg-amber-100' },
    { icon: 'GlobeAltIcon', title: 'Inclusivity', desc: 'Travel should be for everyone — we support multiple languages and currencies.', color: 'text-primary bg-primary/10' },
    { icon: 'HandshakeIcon', title: 'Partnership', desc: 'We build strong relationships with service providers for the best deals.', color: 'text-indigo-600 bg-indigo-100' },
    { icon: 'SparklesIcon', title: 'Excellence', desc: 'We strive for excellence in every booking, every interaction, every journey.', color: 'text-accent bg-accent/10' }],

    team: 'Leadership Team',
    teamMembers: [
    { name: 'Mohamed Al-Rashid', role: 'CEO & Co-Founder', img: "https://img.rocket.new/generatedImages/rocket_gen_img_118b4e632-1763291913766.png", alt: 'Mohamed Al-Rashid CEO portrait professional headshot' },
    { name: 'Sara Hassan', role: 'CTO & Co-Founder', img: "https://img.rocket.new/generatedImages/rocket_gen_img_13b46af78-1763293813661.png", alt: 'Sara Hassan CTO portrait professional headshot' },
    { name: 'Ahmed Khalil', role: 'Head of Operations', img: "https://img.rocket.new/generatedImages/rocket_gen_img_1988db2b9-1763291835437.png", alt: 'Ahmed Khalil Head of Operations portrait professional headshot' },
    { name: 'Nour Ibrahim', role: 'Head of Design', img: "https://img.rocket.new/generatedImages/rocket_gen_img_1a74955ab-1772534014749.png", alt: 'Nour Ibrahim Head of Design portrait professional headshot' }],

    awards: 'Recognition & Awards',
    awardsList: [
    { year: '2025', title: 'Best Travel App — Middle East Tech Awards', icon: '🏆' },
    { year: '2025', title: 'Top 10 Startups — Egypt Innovation Summit', icon: '🥇' },
    { year: '2024', title: 'Best UX Design — Arab Digital Economy Forum', icon: '🎨' },
    { year: '2024', title: 'Most Innovative Travel Platform — Cairo Tech Week', icon: '💡' }],

    joinUs: 'Join Our Journey',
    joinUsText: 'We\'re always looking for talented people who share our passion for travel and technology.',
    careers: 'View Open Positions'
  },
  ar: {
    hero: 'عن Voiago',
    heroSub: 'رفيق سفرك الذكي — نربط العالم، رحلة واحدة في كل مرة',
    mission: 'مهمتنا',
    missionText: 'جعل السفر متاحاً وبأسعار معقولة وممتعاً للجميع من خلال توفير منصة ذكية واحدة تتعامل مع كل جانب من جوانب الرحلة — من التخطيط إلى الذكريات.',
    vision: 'رؤيتنا',
    visionText: 'أن نصبح منصة السفر الرائدة في الشرق الأوسط وأفريقيا، نمكّن الملايين من المسافرين بالتكنولوجيا الذكية والتجارب الشخصية.',
    story: 'قصتنا',
    storyText: `وُلد Voiago من إحباط بسيط: لماذا يحتاج المسافرون إلى 5 تطبيقات مختلفة لتخطيط رحلة واحدة؟

مؤسسونا، المسافرون المتحمسون أنفسهم، عاشوا بشكل مباشر فوضى التعامل مع منصات حجز متعددة ومحولات عملات وخرائط وجهات اتصال طارئة. تخيلوا عالماً تتعامل فيه منصة ذكية واحدة مع كل شيء.

في عام 2024، أطلق Voiago بمهمة إحداث ثورة في السفر في مصر والعالم العربي. بدأنا بحجوزات الطيران والفنادق، ثم توسعنا بسرعة لنشمل تخطيط الرحلات بالذكاء الاصطناعي وباقات الحج والعمرة ودعم الطوارئ وبرنامج ولاء شامل.

اليوم، يخدم Voiago أكثر من 2 مليون مسافر في أكثر من 50 دولة، مع فريق من أكثر من 150 محترفاً متحمساً مكرساً لجعل كل رحلة استثنائية.`,
    stats: [
    { value: '+2M', label: 'مسافر سعيد', icon: 'UsersIcon' },
    { value: '+50', label: 'دولة مغطاة', icon: 'GlobeAltIcon' },
    { value: '+500', label: 'شركة طيران شريكة', icon: 'PaperAirplaneIcon' },
    { value: '+1M', label: 'فندق مدرج', icon: 'BuildingOffice2Icon' },
    { value: '4.9★', label: 'تقييم التطبيق', icon: 'StarIcon' },
    { value: '24/7', label: 'دعم متاح', icon: 'PhoneIcon' }],

    values: 'قيمنا',
    valuesList: [
    { icon: 'HeartIcon', title: 'المسافر أولاً', desc: 'كل قرار نتخذه يبدأ بتجربة المسافر في الاعتبار.', color: 'text-danger bg-danger/10' },
    { icon: 'ShieldCheckIcon', title: 'الثقة والأمان', desc: 'نعطي الأولوية لسلامة وأمن كل مسافر على منصتنا.', color: 'text-success bg-success/10' },
    { icon: 'LightBulbIcon', title: 'الابتكار', desc: 'نتجاوز الحدود باستمرار بالذكاء الاصطناعي والتكنولوجيا الذكية.', color: 'text-amber-600 bg-amber-100' },
    { icon: 'GlobeAltIcon', title: 'الشمولية', desc: 'السفر للجميع — ندعم لغات وعملات متعددة.', color: 'text-primary bg-primary/10' },
    { icon: 'HandshakeIcon', title: 'الشراكة', desc: 'نبني علاقات قوية مع مزودي الخدمات لأفضل الصفقات.', color: 'text-indigo-600 bg-indigo-100' },
    { icon: 'SparklesIcon', title: 'التميز', desc: 'نسعى للتميز في كل حجز وكل تفاعل وكل رحلة.', color: 'text-accent bg-accent/10' }],

    team: 'فريق القيادة',
    teamMembers: [
    { name: 'محمد الراشد', role: 'الرئيس التنفيذي والمؤسس المشارك', img: "https://img.rocket.new/generatedImages/rocket_gen_img_14a5ca983-1763300171126.png", alt: 'صورة محمد الراشد الرئيس التنفيذي' },
    { name: 'سارة حسن', role: 'مديرة التكنولوجيا والمؤسسة المشاركة', img: "https://img.rocket.new/generatedImages/rocket_gen_img_1925f5c93-1772982264890.png", alt: 'صورة سارة حسن مديرة التكنولوجيا' },
    { name: 'أحمد خليل', role: 'رئيس العمليات', img: "https://img.rocket.new/generatedImages/rocket_gen_img_14a5ca983-1763300171126.png", alt: 'صورة أحمد خليل رئيس العمليات' },
    { name: 'نور إبراهيم', role: 'رئيسة التصميم', img: "https://img.rocket.new/generatedImages/rocket_gen_img_111df9fb0-1763296195252.png", alt: 'صورة نور إبراهيم رئيسة التصميم' }],

    awards: 'الجوائز والتقدير',
    awardsList: [
    { year: '2025', title: 'أفضل تطبيق سفر — جوائز تقنية الشرق الأوسط', icon: '🏆' },
    { year: '2025', title: 'أفضل 10 شركات ناشئة — قمة الابتكار المصرية', icon: '🥇' },
    { year: '2024', title: 'أفضل تصميم تجربة مستخدم — منتدى الاقتصاد الرقمي العربي', icon: '🎨' },
    { year: '2024', title: 'أكثر منصة سفر ابتكاراً — أسبوع القاهرة التقني', icon: '💡' }],

    joinUs: 'انضم إلى رحلتنا',
    joinUsText: 'نبحث دائماً عن أشخاص موهوبين يشاركوننا شغفنا بالسفر والتكنولوجيا.',
    careers: 'عرض الوظائف المتاحة'
  }
};

export default function AboutPage() {
  const [lang, setLang] = useState<Lang>('en');
  const text = t[lang];
  const isRTL = lang === 'ar';

  return (
    <div className="min-h-screen bg-background" dir={isRTL ? 'rtl' : 'ltr'}>
      <Header lang={lang} onLangChange={setLang} />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-deep-navy overflow-hidden">
        <div className="absolute inset-0">
          <AppImage
            src="https://images.unsplash.com/photo-1702401782873-6c88ca567ee8"
            alt="Aerial view of airplane wing over clouds representing global travel"
            fill
            className="object-cover opacity-20"
            sizes="100vw" />
          
          <div className="absolute inset-0 bg-gradient-to-b from-deep-navy/70 to-deep-navy/95" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-8">
            <AppLogo src="/assets/images/WhatsApp_Image_2026-04-19_at_11.06.21_AM-1776720747008.jpeg" size={56} />
            <span className="font-extrabold text-3xl text-white">Voiago</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">{text.hero}</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">{text.heroSub}</p>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 -mt-10 mb-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {text.stats.map((stat, i) =>
          <div key={i} className="bg-card rounded-2xl p-4 border border-border shadow-lg text-center hover:shadow-xl transition-all">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-2">
                <Icon name={stat.icon as 'UsersIcon'} size={20} className="text-primary" />
              </div>
              <p className="text-2xl font-extrabold text-foreground">{stat.value}</p>
              <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
            </div>
          )}
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-primary to-sky-blue rounded-3xl p-8 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center mb-4">
                <Icon name="RocketLaunchIcon" size={24} className="text-white" />
              </div>
              <h2 className="text-2xl font-extrabold text-white mb-3">{text.mission}</h2>
              <p className="text-white/80 leading-relaxed">{text.missionText}</p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-accent to-amber-400 rounded-3xl p-8 text-white relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center mb-4">
                <Icon name="EyeIcon" size={24} className="text-white" />
              </div>
              <h2 className="text-2xl font-extrabold text-white mb-3">{text.vision}</h2>
              <p className="text-white/80 leading-relaxed">{text.visionText}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-secondary/30 py-16 mb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-extrabold text-foreground mb-8 text-center">{text.story}</h2>
          <div className="bg-card rounded-3xl p-8 border border-border shadow-sm">
            <p className="text-muted-foreground leading-relaxed whitespace-pre-line text-base">{text.storyText}</p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-16">
        <h2 className="text-3xl font-extrabold text-foreground mb-10 text-center">{text.values}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {text.valuesList.map((val, i) =>
          <div key={i} className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg hover:border-primary/30 transition-all duration-300 group">
              <div className={`w-12 h-12 rounded-2xl ${val.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <Icon name={val.icon as 'HeartIcon'} size={24} />
              </div>
              <h3 className="font-extrabold text-foreground text-base mb-2">{val.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{val.desc}</p>
            </div>
          )}
        </div>
      </section>

      {/* Team */}
      <section className="bg-secondary/30 py-16 mb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-extrabold text-foreground mb-10 text-center">{text.team}</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {text.teamMembers.map((member, i) =>
            <div key={i} className="bg-card rounded-2xl p-5 border border-border text-center hover:shadow-lg transition-all group">
                <div className="w-20 h-20 rounded-2xl overflow-hidden mx-auto mb-4 border-2 border-primary/20 group-hover:border-primary/50 transition-colors">
                  <AppImage
                  src={member.img}
                  alt={member.alt}
                  width={80}
                  height={80}
                  className="object-cover w-full h-full" />
                
                </div>
                <h3 className="font-extrabold text-foreground text-sm">{member.name}</h3>
                <p className="text-muted-foreground text-xs mt-1">{member.role}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 mb-16">
        <h2 className="text-3xl font-extrabold text-foreground mb-10 text-center">{text.awards}</h2>
        <div className="space-y-4">
          {text.awardsList.map((award, i) =>
          <div key={i} className="bg-card rounded-2xl p-5 border border-border flex items-center gap-4 hover:shadow-md hover:border-gold/30 transition-all">
              <span className="text-3xl">{award.icon}</span>
              <div className="flex-1">
                <p className="font-bold text-foreground">{award.title}</p>
              </div>
              <span className="text-sm font-bold text-gold bg-gold/10 px-3 py-1 rounded-full shrink-0">{award.year}</span>
            </div>
          )}
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="bg-gradient-to-br from-deep-navy to-primary/80 py-16 text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-extrabold text-white mb-4">{text.joinUs}</h2>
          <p className="text-white/70 mb-8">{text.joinUsText}</p>
          <button className="btn-accent px-8 py-4 rounded-2xl text-sm font-bold text-white inline-flex items-center gap-2">
            <Icon name="BriefcaseIcon" size={18} />
            {text.careers}
          </button>
        </div>
      </section>

      <Footer lang={lang} />
    </div>);

}