'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

type Lang = 'en' | 'ar';

const t = {
  en: {
    hero: 'Our Partners',
    heroSub: 'Trusted by the world\'s leading travel brands and service providers',
    becomePartner: 'Become a Partner',
    partnerTypes: 'Partnership Categories',
    benefits: 'Why Partner with Voiago?',
    howItWorks: 'How It Works',
    applyTitle: 'Apply for Partnership',
    applyDesc: 'Join our growing network of 500+ partners worldwide',
    companyName: 'Company Name',
    companyType: 'Company Type',
    email: 'Business Email',
    phone: 'Phone Number',
    website: 'Website URL',
    message: 'Tell us about your business',
    submit: 'Submit Application',
    submitting: 'Submitting...',
    submitted: 'Application Submitted!',
    submittedDesc: 'Our partnership team will contact you within 3-5 business days.',
    categories: [
    {
      icon: 'PaperAirplaneIcon',
      title: 'Airlines',
      desc: 'Partner with us to reach millions of travelers booking flights through Voiago.',
      count: '500+ Airlines',
      color: 'text-primary bg-primary/10',
      examples: ['EgyptAir', 'Emirates', 'Turkish Airlines', 'Qatar Airways', 'Saudia']
    },
    {
      icon: 'BuildingOffice2Icon',
      title: 'Hotels & Resorts',
      desc: 'List your property on Voiago and increase your bookings from Arab travelers.',
      count: '1M+ Properties',
      color: 'text-accent bg-accent/10',
      examples: ['Marriott', 'Hilton', 'Four Seasons', 'Rotana', 'Kempinski']
    },
    {
      icon: 'TruckIcon',
      title: 'Transport Companies',
      desc: 'Offer airport transfers, car rentals, and private drivers to our users.',
      count: '200+ Providers',
      color: 'text-success bg-success/10',
      examples: ['Careem', 'Uber', 'Hertz', 'Avis', 'Budget']
    },
    {
      icon: 'MapIcon',
      title: 'Tour Operators',
      desc: 'Showcase your tours, packages, and experiences to millions of travelers.',
      count: '1,000+ Operators',
      color: 'text-indigo-600 bg-indigo-100',
      examples: ['Thomas Cook', 'Abercrombie & Kent', 'G Adventures', 'Intrepid', 'TUI']
    },
    {
      icon: 'CreditCardIcon',
      title: 'Payment Partners',
      desc: 'Integrate your payment solutions to serve our diverse user base.',
      count: '50+ Currencies',
      color: 'text-amber-600 bg-amber-100',
      examples: ['Visa', 'Mastercard', 'PayPal', 'Stripe', 'Fawry']
    },
    {
      icon: 'BuildingLibraryIcon',
      title: 'Insurance Providers',
      desc: 'Offer travel insurance to protect our users on every journey.',
      count: '30+ Insurers',
      color: 'text-danger bg-danger/10',
      examples: ['AXA', 'Allianz', 'AIG', 'Zurich', 'MetLife']
    }],

    benefitsList: [
    { icon: 'UsersIcon', title: '2M+ Active Users', desc: 'Access our growing base of engaged travelers across 50+ countries.' },
    { icon: 'ChartBarIcon', title: 'Data & Analytics', desc: 'Get detailed insights on booking trends, user behavior, and market opportunities.' },
    { icon: 'BoltIcon', title: 'Easy Integration', desc: 'Simple API integration to connect your systems with Voiago in days, not months.' },
    { icon: 'StarIcon', title: 'Premium Placement', desc: 'Featured placement in search results and recommendations for premium partners.' },
    { icon: 'ShieldCheckIcon', title: 'Secure Payments', desc: 'Guaranteed payments with our secure escrow system and fraud protection.' },
    { icon: 'GlobeAltIcon', title: 'Global Reach', desc: 'Expand your reach to Arabic-speaking travelers worldwide with localized content.' }],

    steps: [
    { step: '01', title: 'Apply Online', desc: 'Fill out our partnership application form with your business details.' },
    { step: '02', title: 'Review Process', desc: 'Our team reviews your application within 3-5 business days.' },
    { step: '03', title: 'Agreement & Setup', desc: 'Sign the partnership agreement and complete technical integration.' },
    { step: '04', title: 'Go Live', desc: 'Your services are listed on Voiago and visible to millions of travelers.' }],

    companyTypes: ['Airline', 'Hotel / Resort', 'Transport Company', 'Tour Operator', 'Payment Provider', 'Insurance Company', 'Other'],
    namePlaceholder: 'Your Company Name',
    emailPlaceholder: 'business@company.com',
    phonePlaceholder: '+20 100 000 0000',
    websitePlaceholder: 'https://yourcompany.com',
    messagePlaceholder: 'Tell us about your services and how you\'d like to partner with Voiago...'
  },
  ar: {
    hero: 'شركاؤنا',
    heroSub: 'موثوق به من قبل كبرى العلامات التجارية للسفر ومزودي الخدمات في العالم',
    becomePartner: 'كن شريكاً',
    partnerTypes: 'فئات الشراكة',
    benefits: 'لماذا تتشارك مع Voiago؟',
    howItWorks: 'كيف يعمل',
    applyTitle: 'تقدم للشراكة',
    applyDesc: 'انضم إلى شبكتنا المتنامية من أكثر من 500 شريك حول العالم',
    companyName: 'اسم الشركة',
    companyType: 'نوع الشركة',
    email: 'البريد الإلكتروني للأعمال',
    phone: 'رقم الهاتف',
    website: 'رابط الموقع',
    message: 'أخبرنا عن عملك',
    submit: 'إرسال الطلب',
    submitting: 'جارٍ الإرسال...',
    submitted: 'تم إرسال الطلب!',
    submittedDesc: 'سيتواصل معك فريق الشراكة خلال 3-5 أيام عمل.',
    categories: [
    {
      icon: 'PaperAirplaneIcon',
      title: 'شركات الطيران',
      desc: 'تشارك معنا للوصول إلى ملايين المسافرين الذين يحجزون رحلاتهم عبر Voiago.',
      count: '+500 شركة طيران',
      color: 'text-primary bg-primary/10',
      examples: ['مصر للطيران', 'الإمارات', 'التركية', 'قطر', 'السعودية']
    },
    {
      icon: 'BuildingOffice2Icon',
      title: 'الفنادق والمنتجعات',
      desc: 'أدرج عقارك على Voiago وزد حجوزاتك من المسافرين العرب.',
      count: '+1M عقار',
      color: 'text-accent bg-accent/10',
      examples: ['ماريوت', 'هيلتون', 'فور سيزونز', 'روتانا', 'كمبينسكي']
    },
    {
      icon: 'TruckIcon',
      title: 'شركات النقل',
      desc: 'قدم خدمات نقل المطار وتأجير السيارات والسائقين الخاصين لمستخدمينا.',
      count: '+200 مزود',
      color: 'text-success bg-success/10',
      examples: ['كريم', 'أوبر', 'هيرتز', 'أفيس', 'بدجت']
    },
    {
      icon: 'MapIcon',
      title: 'منظمو الرحلات',
      desc: 'اعرض جولاتك وباقاتك وتجاربك لملايين المسافرين.',
      count: '+1,000 منظم',
      color: 'text-indigo-600 bg-indigo-100',
      examples: ['توماس كوك', 'أبركرومبي', 'G Adventures', 'إنتريبيد', 'TUI']
    },
    {
      icon: 'CreditCardIcon',
      title: 'شركاء الدفع',
      desc: 'ادمج حلول الدفع الخاصة بك لخدمة قاعدة مستخدمينا المتنوعة.',
      count: '+50 عملة',
      color: 'text-amber-600 bg-amber-100',
      examples: ['فيزا', 'ماستركارد', 'باي بال', 'سترايب', 'فوري']
    },
    {
      icon: 'BuildingLibraryIcon',
      title: 'شركات التأمين',
      desc: 'قدم تأمين السفر لحماية مستخدمينا في كل رحلة.',
      count: '+30 شركة تأمين',
      color: 'text-danger bg-danger/10',
      examples: ['AXA', 'أليانز', 'AIG', 'زيورخ', 'ميتلايف']
    }],

    benefitsList: [
    { icon: 'UsersIcon', title: '+2M مستخدم نشط', desc: 'الوصول إلى قاعدتنا المتنامية من المسافرين المتفاعلين في أكثر من 50 دولة.' },
    { icon: 'ChartBarIcon', title: 'البيانات والتحليلات', desc: 'احصل على رؤى تفصيلية حول اتجاهات الحجز وسلوك المستخدم وفرص السوق.' },
    { icon: 'BoltIcon', title: 'تكامل سهل', desc: 'تكامل API بسيط لربط أنظمتك بـ Voiago في أيام وليس أشهر.' },
    { icon: 'StarIcon', title: 'مكانة مميزة', desc: 'مكانة مميزة في نتائج البحث والتوصيات للشركاء المميزين.' },
    { icon: 'ShieldCheckIcon', title: 'مدفوعات آمنة', desc: 'مدفوعات مضمونة مع نظام الضمان الآمن وحماية الاحتيال.' },
    { icon: 'GlobeAltIcon', title: 'وصول عالمي', desc: 'وسّع نطاق وصولك للمسافرين الناطقين بالعربية حول العالم بمحتوى محلي.' }],

    steps: [
    { step: '01', title: 'تقدم عبر الإنترنت', desc: 'املأ نموذج طلب الشراكة بتفاصيل عملك.' },
    { step: '02', title: 'عملية المراجعة', desc: 'يراجع فريقنا طلبك خلال 3-5 أيام عمل.' },
    { step: '03', title: 'الاتفاقية والإعداد', desc: 'وقّع اتفاقية الشراكة وأكمل التكامل التقني.' },
    { step: '04', title: 'الإطلاق', desc: 'تُدرج خدماتك على Voiago وتصبح مرئية لملايين المسافرين.' }],

    companyTypes: ['شركة طيران', 'فندق / منتجع', 'شركة نقل', 'منظم رحلات', 'مزود دفع', 'شركة تأمين', 'أخرى'],
    namePlaceholder: 'اسم شركتك',
    emailPlaceholder: 'business@company.com',
    phonePlaceholder: '+20 100 000 0000',
    websitePlaceholder: 'https://yourcompany.com',
    messagePlaceholder: 'أخبرنا عن خدماتك وكيف تريد التشارك مع Voiago...'
  }
};

export default function PartnersPage() {
  const [lang, setLang] = useState<Lang>('en');
  const [formData, setFormData] = useState({ name: '', type: '0', email: '', phone: '', website: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const text = t[lang];
  const isRTL = lang === 'ar';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {setSubmitting(false);setSubmitted(true);}, 1500);
  };

  return (
    <div className="min-h-screen bg-background" dir={isRTL ? 'rtl' : 'ltr'}>
      <Header lang={lang} onLangChange={setLang} />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-deep-navy overflow-hidden">
        <div className="absolute inset-0">
          <AppImage
            src="https://img.rocket.new/generatedImages/rocket_gen_img_1264b2547-1772194566590.png"
            alt="Business partners shaking hands in a professional meeting room"
            fill
            className="object-cover opacity-20"
            sizes="100vw" />
          
          <div className="absolute inset-0 bg-gradient-to-b from-deep-navy/70 to-deep-navy/95" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 mb-6">
            <Icon name="HandshakeIcon" size={16} className="text-gold" />
            <span className="text-white/80 text-sm font-semibold">500+ {lang === 'en' ? 'Global Partners' : 'شريك عالمي'}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6">{text.hero}</h1>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">{text.heroSub}</p>
          <a href="#apply" className="btn-accent px-8 py-4 rounded-2xl text-sm font-bold text-white inline-flex items-center gap-2">
            <Icon name="PlusCircleIcon" size={18} />
            {text.becomePartner}
          </a>
        </div>
      </section>

      {/* Partner Categories */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="text-3xl font-extrabold text-foreground mb-10 text-center">{text.partnerTypes}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {text.categories.map((cat, i) =>
          <div key={i} className="bg-card rounded-2xl p-6 border border-border hover:shadow-xl hover:border-primary/30 transition-all duration-300 group">
              <div className={`w-12 h-12 rounded-2xl ${cat.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <Icon name={cat.icon as 'PaperAirplaneIcon'} size={24} />
              </div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-extrabold text-foreground text-base">{cat.title}</h3>
                <span className="text-xs font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-full">{cat.count}</span>
              </div>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{cat.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {cat.examples.map((ex, j) =>
              <span key={j} className="text-xs bg-secondary text-muted-foreground px-2.5 py-1 rounded-full font-medium">{ex}</span>
              )}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-secondary/30 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-extrabold text-foreground mb-10 text-center">{text.benefits}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {text.benefitsList.map((benefit, i) =>
            <div key={i} className="bg-card rounded-2xl p-6 border border-border hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                  <Icon name={benefit.icon as 'UsersIcon'} size={20} className="text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{benefit.desc}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="text-3xl font-extrabold text-foreground mb-10 text-center">{text.howItWorks}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {text.steps.map((step, i) =>
          <div key={i} className="relative">
              {i < text.steps.length - 1 &&
            <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-border z-0" style={{ width: 'calc(100% - 2rem)' }} />
            }
              <div className="bg-card rounded-2xl p-6 border border-border text-center relative z-10 hover:shadow-md hover:border-primary/30 transition-all">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-sky-blue flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-extrabold text-lg">{step.step}</span>
                </div>
                <h3 className="font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="bg-secondary/30 py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-foreground mb-2">{text.applyTitle}</h2>
            <p className="text-muted-foreground">{text.applyDesc}</p>
          </div>
          <div className="bg-card rounded-3xl p-8 border border-border shadow-lg">
            {submitted ?
            <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name="CheckCircleIcon" size={36} className="text-success" variant="solid" />
                </div>
                <h3 className="text-xl font-extrabold text-foreground mb-2">{text.submitted}</h3>
                <p className="text-muted-foreground">{text.submittedDesc}</p>
              </div> :

            <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">{text.companyName}</label>
                    <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder={text.namePlaceholder} required className="w-full px-4 py-3.5 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 text-sm bg-background text-foreground placeholder:text-muted-foreground outline-none transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">{text.companyType}</label>
                    <select value={formData.type} onChange={(e) => setFormData({ ...formData, type: e.target.value })} className="w-full px-4 py-3.5 rounded-xl border border-border focus:border-primary text-sm bg-background text-foreground outline-none cursor-pointer">
                      {text.companyTypes.map((t, i) => <option key={i} value={i}>{t}</option>)}
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">{text.email}</label>
                    <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder={text.emailPlaceholder} required className="w-full px-4 py-3.5 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 text-sm bg-background text-foreground placeholder:text-muted-foreground outline-none transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">{text.phone}</label>
                    <input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder={text.phonePlaceholder} className="w-full px-4 py-3.5 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 text-sm bg-background text-foreground placeholder:text-muted-foreground outline-none transition-all" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">{text.website}</label>
                  <input type="url" value={formData.website} onChange={(e) => setFormData({ ...formData, website: e.target.value })} placeholder={text.websitePlaceholder} className="w-full px-4 py-3.5 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 text-sm bg-background text-foreground placeholder:text-muted-foreground outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">{text.message}</label>
                  <textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder={text.messagePlaceholder} rows={4} className="w-full px-4 py-3.5 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 text-sm bg-background text-foreground placeholder:text-muted-foreground outline-none transition-all resize-none" />
                </div>
                <button type="submit" disabled={submitting} className="w-full btn-primary py-4 rounded-xl text-sm font-bold text-white flex items-center justify-center gap-2 disabled:opacity-60">
                  {submitting ?
                <><svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>{text.submitting}</> :

                <><Icon name="PaperAirplaneIcon" size={16} />{text.submit}</>
                }
                </button>
              </form>
            }
          </div>
        </div>
      </section>

      <Footer lang={lang} />
    </div>);

}