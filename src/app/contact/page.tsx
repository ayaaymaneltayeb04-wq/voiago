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
    hero: 'Contact Us',
    heroSub: 'We\'d love to hear from you. Reach out through any channel below.',
    officesTitle: 'Our Offices',
    formTitle: 'Send Us a Message',
    formDesc: 'Fill out the form and we\'ll get back to you within 24 hours',
    name: 'Full Name',
    email: 'Email Address',
    phone: 'Phone Number (Optional)',
    subject: 'Subject',
    department: 'Department',
    message: 'Your Message',
    send: 'Send Message',
    sending: 'Sending...',
    sent: 'Message Sent!',
    sentDesc: 'Thank you for reaching out. We\'ll respond within 24 hours.',
    socialTitle: 'Follow Us',
    namePlaceholder: 'Ahmed Hassan',
    emailPlaceholder: 'ahmed@example.com',
    phonePlaceholder: '+20 100 000 0000',
    subjectPlaceholder: 'How can we help?',
    messagePlaceholder: 'Write your message here...',
    departments: ['General Inquiry', 'Booking Support', 'Technical Support', 'Partnership', 'Media & Press', 'Careers'],
    offices: [
    {
      city: 'Cairo',
      country: 'Egypt (HQ)',
      address: '123 Tahrir Square, Downtown Cairo, Egypt',
      phone: '+20 100 000 0000',
      email: 'cairo@voiago.com',
      hours: 'Sun–Thu: 9AM–6PM',
      flag: '🇪🇬',
      img: "https://img.rocket.new/generatedImages/rocket_gen_img_1baa8fc80-1769665757080.png",
      alt: 'Cairo Egypt office location with pyramids in background'
    },
    {
      city: 'Dubai',
      country: 'UAE',
      address: 'Business Bay, Dubai, UAE',
      phone: '+971 4 000 0000',
      email: 'dubai@voiago.com',
      hours: 'Sun–Thu: 9AM–6PM',
      flag: '🇦🇪',
      img: "https://images.unsplash.com/photo-1732939045266-713d03d46ece",
      alt: 'Dubai UAE office location with Burj Khalifa skyline'
    },
    {
      city: 'Riyadh',
      country: 'Saudi Arabia',
      address: 'King Fahd Road, Riyadh, KSA',
      phone: '+966 11 000 0000',
      email: 'riyadh@voiago.com',
      hours: 'Sun–Thu: 9AM–5PM',
      flag: '🇸🇦',
      img: "https://img.rocket.new/generatedImages/rocket_gen_img_14d1cdf50-1767118530330.png",
      alt: 'Riyadh Saudi Arabia office location with Kingdom Tower'
    }],

    socials: [
    { name: 'Facebook', icon: '📘', handle: '@VoiagoTravel', url: '#', color: 'text-blue-600 bg-blue-100' },
    { name: 'Instagram', icon: '📸', handle: '@voiago_travel', url: '#', color: 'text-pink-600 bg-pink-100' },
    { name: 'Twitter / X', icon: '🐦', handle: '@VoiagoApp', url: '#', color: 'text-sky-600 bg-sky-100' },
    { name: 'LinkedIn', icon: '💼', handle: 'Voiago', url: '#', color: 'text-indigo-600 bg-indigo-100' },
    { name: 'YouTube', icon: '▶️', handle: 'Voiago Travel', url: '#', color: 'text-danger bg-danger/10' },
    { name: 'TikTok', icon: '🎵', handle: '@voiago', url: '#', color: 'text-foreground bg-secondary' }]

  },
  ar: {
    hero: 'تواصل معنا',
    heroSub: 'يسعدنا سماعك. تواصل معنا عبر أي قناة أدناه.',
    officesTitle: 'مكاتبنا',
    formTitle: 'أرسل لنا رسالة',
    formDesc: 'املأ النموذج وسنرد عليك خلال 24 ساعة',
    name: 'الاسم الكامل',
    email: 'البريد الإلكتروني',
    phone: 'رقم الهاتف (اختياري)',
    subject: 'الموضوع',
    department: 'القسم',
    message: 'رسالتك',
    send: 'إرسال الرسالة',
    sending: 'جارٍ الإرسال...',
    sent: 'تم إرسال الرسالة!',
    sentDesc: 'شكراً لتواصلك. سنرد خلال 24 ساعة.',
    socialTitle: 'تابعنا',
    namePlaceholder: 'أحمد حسن',
    emailPlaceholder: 'ahmed@example.com',
    phonePlaceholder: '+20 100 000 0000',
    subjectPlaceholder: 'كيف يمكننا المساعدة؟',
    messagePlaceholder: 'اكتب رسالتك هنا...',
    departments: ['استفسار عام', 'دعم الحجز', 'الدعم التقني', 'الشراكة', 'الإعلام والصحافة', 'الوظائف'],
    offices: [
    {
      city: 'القاهرة',
      country: 'مصر (المقر الرئيسي)',
      address: '123 ميدان التحرير، وسط القاهرة، مصر',
      phone: '+20 100 000 0000',
      email: 'cairo@voiago.com',
      hours: 'الأحد–الخميس: 9ص–6م',
      flag: '🇪🇬',
      img: "https://img.rocket.new/generatedImages/rocket_gen_img_1baa8fc80-1769665757080.png",
      alt: 'موقع مكتب القاهرة مصر مع الأهرامات في الخلفية'
    },
    {
      city: 'دبي',
      country: 'الإمارات',
      address: 'بيزنس باي، دبي، الإمارات',
      phone: '+971 4 000 0000',
      email: 'dubai@voiago.com',
      hours: 'الأحد–الخميس: 9ص–6م',
      flag: '🇦🇪',
      img: "https://images.unsplash.com/photo-1732939045266-713d03d46ece",
      alt: 'موقع مكتب دبي الإمارات مع أفق برج خليفة'
    },
    {
      city: 'الرياض',
      country: 'المملكة العربية السعودية',
      address: 'طريق الملك فهد، الرياض، المملكة',
      phone: '+966 11 000 0000',
      email: 'riyadh@voiago.com',
      hours: 'الأحد–الخميس: 9ص–5م',
      flag: '🇸🇦',
      img: "https://img.rocket.new/generatedImages/rocket_gen_img_105d0396b-1766047113961.png",
      alt: 'موقع مكتب الرياض المملكة العربية السعودية مع برج المملكة'
    }],

    socials: [
    { name: 'فيسبوك', icon: '📘', handle: '@VoiagoTravel', url: '#', color: 'text-blue-600 bg-blue-100' },
    { name: 'إنستغرام', icon: '📸', handle: '@voiago_travel', url: '#', color: 'text-pink-600 bg-pink-100' },
    { name: 'تويتر / X', icon: '🐦', handle: '@VoiagoApp', url: '#', color: 'text-sky-600 bg-sky-100' },
    { name: 'لينكدإن', icon: '💼', handle: 'Voiago', url: '#', color: 'text-indigo-600 bg-indigo-100' },
    { name: 'يوتيوب', icon: '▶️', handle: 'Voiago Travel', url: '#', color: 'text-danger bg-danger/10' },
    { name: 'تيك توك', icon: '🎵', handle: '@voiago', url: '#', color: 'text-foreground bg-secondary' }]

  }
};

export default function ContactPage() {
  const [lang, setLang] = useState<Lang>('en');
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', department: '0', message: '' });
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
      <section className="pt-32 pb-16 bg-gradient-to-br from-deep-navy via-primary/80 to-sky-blue text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-center gap-3 mb-6">
            <AppLogo src="/assets/images/WhatsApp_Image_2026-04-19_at_11.06.21_AM-1776720747008.jpeg" size={44} />
            <span className="font-extrabold text-2xl text-white">Voiago</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">{text.hero}</h1>
          <p className="text-white/70 text-lg">{text.heroSub}</p>
        </div>
      </section>

      {/* Offices */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="text-3xl font-extrabold text-foreground mb-10 text-center">{text.officesTitle}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {text.offices.map((office, i) =>
          <div key={i} className="bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl hover:border-primary/30 transition-all group">
              <div className="relative h-40 overflow-hidden">
                <AppImage
                src={office.img}
                alt={office.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 33vw" />
              
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 left-3 flex items-center gap-2">
                  <span className="text-2xl">{office.flag}</span>
                  <div>
                    <p className="text-white font-extrabold text-sm">{office.city}</p>
                    <p className="text-white/70 text-xs">{office.country}</p>
                  </div>
                </div>
              </div>
              <div className="p-5 space-y-3">
                {[
              { icon: 'MapPinIcon', text: office.address },
              { icon: 'PhoneIcon', text: office.phone },
              { icon: 'EnvelopeIcon', text: office.email },
              { icon: 'ClockIcon', text: office.hours }].
              map((item, j) =>
              <div key={j} className="flex items-start gap-3">
                    <Icon name={item.icon as 'MapPinIcon'} size={14} className="text-primary mt-0.5 shrink-0" />
                    <span className="text-sm text-muted-foreground">{item.text}</span>
                  </div>
              )}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Form + Social */}
      <section className="bg-secondary/30 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-3xl p-8 border border-border shadow-lg">
                <h2 className="text-2xl font-extrabold text-foreground mb-2">{text.formTitle}</h2>
                <p className="text-muted-foreground text-sm mb-6">{text.formDesc}</p>

                {submitted ?
                <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-4">
                      <Icon name="CheckCircleIcon" size={36} className="text-success" variant="solid" />
                    </div>
                    <h3 className="text-xl font-extrabold text-foreground mb-2">{text.sent}</h3>
                    <p className="text-muted-foreground">{text.sentDesc}</p>
                  </div> :

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">{text.name}</label>
                        <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder={text.namePlaceholder} required className="w-full px-4 py-3.5 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 text-sm bg-background text-foreground placeholder:text-muted-foreground outline-none transition-all" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">{text.email}</label>
                        <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder={text.emailPlaceholder} required className="w-full px-4 py-3.5 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 text-sm bg-background text-foreground placeholder:text-muted-foreground outline-none transition-all" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">{text.phone}</label>
                        <input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder={text.phonePlaceholder} className="w-full px-4 py-3.5 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 text-sm bg-background text-foreground placeholder:text-muted-foreground outline-none transition-all" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">{text.department}</label>
                        <select value={formData.department} onChange={(e) => setFormData({ ...formData, department: e.target.value })} className="w-full px-4 py-3.5 rounded-xl border border-border focus:border-primary text-sm bg-background text-foreground outline-none cursor-pointer">
                          {text.departments.map((d, i) => <option key={i} value={i}>{d}</option>)}
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">{text.subject}</label>
                      <input type="text" value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} placeholder={text.subjectPlaceholder} required className="w-full px-4 py-3.5 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 text-sm bg-background text-foreground placeholder:text-muted-foreground outline-none transition-all" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">{text.message}</label>
                      <textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder={text.messagePlaceholder} rows={5} required className="w-full px-4 py-3.5 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 text-sm bg-background text-foreground placeholder:text-muted-foreground outline-none transition-all resize-none" />
                    </div>
                    <button type="submit" disabled={submitting} className="w-full btn-primary py-4 rounded-xl text-sm font-bold text-white flex items-center justify-center gap-2 disabled:opacity-60">
                      {submitting ?
                    <><svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>{text.sending}</> :

                    <><Icon name="PaperAirplaneIcon" size={16} />{text.send}</>
                    }
                    </button>
                  </form>
                }
              </div>
            </div>

            {/* Social + Quick Contact */}
            <div className="space-y-6">
              {/* Social Media */}
              <div className="bg-card rounded-2xl p-6 border border-border shadow-sm">
                <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                  <Icon name="GlobeAltIcon" size={16} className="text-primary" />
                  {text.socialTitle}
                </h3>
                <div className="space-y-3">
                  {text.socials.map((social, i) =>
                  <a key={i} href={social.url} className="flex items-center gap-3 p-3 rounded-xl hover:bg-secondary/50 transition-all group cursor-pointer">
                      <div className={`w-10 h-10 rounded-xl ${social.color} flex items-center justify-center text-lg shrink-0`}>
                        {social.icon}
                      </div>
                      <div>
                        <p className="font-semibold text-foreground text-sm">{social.name}</p>
                        <p className="text-muted-foreground text-xs">{social.handle}</p>
                      </div>
                      <Icon name="ArrowTopRightOnSquareIcon" size={14} className="text-muted-foreground ml-auto group-hover:text-primary transition-colors" />
                    </a>
                  )}
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="bg-gradient-to-br from-danger/10 to-danger/5 rounded-2xl p-6 border border-danger/20">
                <div className="flex items-center gap-2 mb-3">
                  <Icon name="ExclamationTriangleIcon" size={18} className="text-danger" variant="solid" />
                  <h3 className="font-bold text-foreground text-sm">{lang === 'en' ? 'Emergency Support' : 'دعم الطوارئ'}</h3>
                </div>
                <p className="text-muted-foreground text-xs mb-4">{lang === 'en' ? '24/7 emergency assistance for travelers in need' : 'مساعدة طارئة 24/7 للمسافرين المحتاجين'}</p>
                <button className="w-full py-3 rounded-xl bg-danger text-white font-bold text-sm flex items-center justify-center gap-2 hover:bg-red-600 transition-colors">
                  <Icon name="PhoneIcon" size={16} />
                  {lang === 'en' ? 'Call Emergency Line' : 'اتصل بخط الطوارئ'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer lang={lang} />
    </div>);

}