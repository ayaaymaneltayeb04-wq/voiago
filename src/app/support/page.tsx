'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/AppIcon';

type Lang = 'en' | 'ar';

const t = {
  en: {
    hero: 'We\'re Here to Help',
    heroSub: 'Get answers to your questions or reach out to our 24/7 support team',
    faqTitle: 'Frequently Asked Questions',
    faqSub: 'Find quick answers to common questions',
    contactTitle: 'Still Need Help?',
    contactSub: 'Our support team is available 24/7',
    name: 'Your Name',
    email: 'Email Address',
    subject: 'Subject',
    message: 'Your Message',
    send: 'Send Message',
    sending: 'Sending...',
    sent: 'Message Sent!',
    sentDesc: 'We\'ll get back to you within 24 hours.',
    categories: ['All', 'Booking', 'Payment', 'Account', 'Travel', 'Technical'],
    searchFaq: 'Search FAQs...',
    liveChat: 'Live Chat',
    liveChatDesc: 'Chat with our team now',
    email_support: 'Email Support',
    emailDesc: 'support@voiago.com',
    phone: 'Phone Support',
    phoneDesc: '+20 100 000 0000',
    emergency: 'Emergency Line',
    emergencyDesc: '24/7 Emergency Support',
    namePlaceholder: 'Ahmed Hassan',
    emailPlaceholder: 'ahmed@example.com',
    subjectPlaceholder: 'How can we help?',
    messagePlaceholder: 'Describe your issue in detail...',
    required: 'This field is required',
    faqs: [
      { q: 'How do I book a flight on Voiago?', a: 'Simply go to the Services section, select "Flight Booking", choose your destination, dates, and number of passengers. Compare prices from 500+ airlines and complete your booking in minutes.', cat: 'Booking' },
      { q: 'What payment methods are accepted?', a: 'We accept all major credit/debit cards, bank transfers, and multiple currencies including EGP, USD, EUR, SAR, AED, GBP, and TRY. All transactions are secured with 256-bit encryption.', cat: 'Payment' },
      { q: 'Can I cancel or modify my booking?', a: 'Yes! You can cancel or modify bookings from your Tourist Dashboard under "My Bookings". Cancellation policies vary by service provider. Most bookings allow free cancellation up to 48 hours before departure.', cat: 'Booking' },
      { q: 'How do I earn loyalty points?', a: 'You earn points with every booking on Voiago. Flight bookings earn 2x points, hotel bookings earn 1.5x points, and complete trip packages earn 3x points. Redeem points for discounts on future bookings.', cat: 'Account' },
      { q: 'Is Voiago available in multiple languages?', a: 'Yes! Voiago fully supports English and Arabic with complete RTL (right-to-left) support for Arabic users. More languages are coming soon.', cat: 'Technical' },
      { q: 'How does the Hajj & Umrah booking work?', a: 'Our Hajj & Umrah service provides complete packages including flights, accommodation near the holy sites, transportation, and visa assistance. We work with certified operators to ensure a spiritual and comfortable journey.', cat: 'Travel' },
      { q: 'What is the Emergency SOS feature?', a: 'The Emergency SOS button in your dashboard instantly shares your location with emergency contacts and connects you to local embassy, hospital, and police services. It works in all countries we operate in.', cat: 'Travel' },
      { q: 'How do I use the currency converter?', a: 'The currency converter in your dashboard supports 7+ currencies with real-time rates. Simply enter an amount, select your source and target currencies, and get instant conversion results.', cat: 'Payment' },
      { q: 'Can I use Voiago offline?', a: 'Yes! Voiago has an offline mode that lets you access your saved itineraries, booking confirmations, and emergency contacts without an internet connection. Data syncs automatically when you reconnect.', cat: 'Technical' },
      { q: 'How do I become a Voiago partner?', a: 'Visit our Partners page and fill out the partnership application form. We partner with hotels, airlines, transport companies, and travel agencies. Our team will review your application within 3-5 business days.', cat: 'Account' },
      { q: 'What is the Budget Tracker feature?', a: 'The Budget Tracker helps you set a total trip budget and tracks your spending across flights, hotels, transport, and activities. You get alerts when you\'re approaching your budget limit.', cat: 'Travel' },
      { q: 'How secure is my personal data?', a: 'Voiago uses bank-level security with 256-bit SSL encryption, two-factor authentication, and complies with GDPR data protection standards. We never sell your personal data to third parties.', cat: 'Technical' },
    ],
  },
  ar: {
    hero: 'نحن هنا للمساعدة',
    heroSub: 'احصل على إجابات لأسئلتك أو تواصل مع فريق الدعم المتاح 24/7',
    faqTitle: 'الأسئلة الشائعة',
    faqSub: 'اعثر على إجابات سريعة للأسئلة الشائعة',
    contactTitle: 'لا تزال بحاجة للمساعدة؟',
    contactSub: 'فريق الدعم متاح 24/7',
    name: 'اسمك',
    email: 'البريد الإلكتروني',
    subject: 'الموضوع',
    message: 'رسالتك',
    send: 'إرسال الرسالة',
    sending: 'جارٍ الإرسال...',
    sent: 'تم إرسال الرسالة!',
    sentDesc: 'سنرد عليك خلال 24 ساعة.',
    categories: ['الكل', 'الحجز', 'الدفع', 'الحساب', 'السفر', 'تقني'],
    searchFaq: 'ابحث في الأسئلة...',
    liveChat: 'دردشة مباشرة',
    liveChatDesc: 'تحدث مع فريقنا الآن',
    email_support: 'دعم البريد',
    emailDesc: 'support@voiago.com',
    phone: 'دعم هاتفي',
    phoneDesc: '+20 100 000 0000',
    emergency: 'خط الطوارئ',
    emergencyDesc: 'دعم طوارئ 24/7',
    namePlaceholder: 'أحمد حسن',
    emailPlaceholder: 'ahmed@example.com',
    subjectPlaceholder: 'كيف يمكننا المساعدة؟',
    messagePlaceholder: 'صف مشكلتك بالتفصيل...',
    required: 'هذا الحقل مطلوب',
    faqs: [
      { q: 'كيف أحجز رحلة طيران على Voiago؟', a: 'انتقل إلى قسم الخدمات، اختر "حجز الطيران"، حدد وجهتك والتواريخ وعدد المسافرين. قارن الأسعار من أكثر من 500 شركة طيران وأتمم حجزك في دقائق.', cat: 'الحجز' },
      { q: 'ما طرق الدفع المقبولة؟', a: 'نقبل جميع بطاقات الائتمان والخصم والتحويلات البنكية وعملات متعددة منها الجنيه المصري والدولار واليورو والريال والدرهم والجنيه الإسترليني والليرة التركية.', cat: 'الدفع' },
      { q: 'هل يمكنني إلغاء أو تعديل حجزي؟', a: 'نعم! يمكنك إلغاء أو تعديل الحجوزات من لوحة تحكم السائح تحت "حجوزاتي". تختلف سياسات الإلغاء حسب مزود الخدمة. معظم الحجوزات تتيح الإلغاء المجاني قبل 48 ساعة.', cat: 'الحجز' },
      { q: 'كيف أكسب نقاط الولاء؟', a: 'تكسب نقاطاً مع كل حجز. حجوزات الطيران تمنح 2x نقطة، الفنادق 1.5x نقطة، وباقات الرحلة الكاملة 3x نقاط. استرد النقاط للحصول على خصومات على الحجوزات المستقبلية.', cat: 'الحساب' },
      { q: 'هل Voiago متاح بلغات متعددة؟', a: 'نعم! يدعم Voiago الإنجليزية والعربية بالكامل مع دعم الكتابة من اليمين لليسار. المزيد من اللغات قادمة قريباً.', cat: 'تقني' },
      { q: 'كيف يعمل حجز الحج والعمرة؟', a: 'تقدم خدمة الحج والعمرة باقات متكاملة تشمل الطيران والإقامة قرب المشاعر المقدسة والنقل ومساعدة التأشيرة. نعمل مع مشغلين معتمدين لضمان رحلة روحانية ومريحة.', cat: 'السفر' },
      { q: 'ما هي ميزة SOS الطوارئ؟', a: 'زر SOS في لوحة التحكم يشارك موقعك فوراً مع جهات الاتصال الطارئة ويوصلك بخدمات السفارة والمستشفى والشرطة المحلية. يعمل في جميع الدول التي نعمل فيها.', cat: 'السفر' },
      { q: 'كيف أستخدم محول العملات؟', a: 'محول العملات في لوحة التحكم يدعم أكثر من 7 عملات بأسعار فورية. أدخل المبلغ، اختر العملة المصدر والهدف، واحصل على نتائج التحويل فوراً.', cat: 'الدفع' },
      { q: 'هل يمكنني استخدام Voiago بدون إنترنت؟', a: 'نعم! يتوفر وضع عدم الاتصال للوصول إلى خططك المحفوظة وتأكيدات الحجز وجهات الطوارئ بدون إنترنت. تتزامن البيانات تلقائياً عند الاتصال.', cat: 'تقني' },
      { q: 'كيف أصبح شريكاً في Voiago؟', a: 'زر صفحة الشركاء واملأ نموذج طلب الشراكة. نتشارك مع الفنادق وشركات الطيران والنقل ووكالات السفر. سيراجع فريقنا طلبك خلال 3-5 أيام عمل.', cat: 'الحساب' },
      { q: 'ما هي ميزة متابعة الميزانية؟', a: 'تساعدك على تحديد ميزانية إجمالية للرحلة وتتبع إنفاقك على الطيران والفنادق والنقل والأنشطة. تتلقى تنبيهات عند اقترابك من حد الميزانية.', cat: 'السفر' },
      { q: 'ما مدى أمان بياناتي الشخصية؟', a: 'يستخدم Voiago أمان بمستوى البنوك مع تشفير SSL 256 بت والمصادقة الثنائية ويمتثل لمعايير حماية بيانات GDPR. لا نبيع بياناتك الشخصية لأطراف ثالثة.', cat: 'تقني' },
    ],
  },
};

export default function SupportPage() {
  const [lang, setLang] = useState<Lang>('en');
  const [activeCat, setActiveCat] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [searchFaq, setSearchFaq] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const text = t[lang];
  const isRTL = lang === 'ar';

  const filteredFaqs = text.faqs.filter((faq) => {
    const matchCat = activeCat === 0 || faq.cat === text.categories[activeCat];
    const matchSearch = searchFaq === '' ||
      faq.q.toLowerCase().includes(searchFaq.toLowerCase()) ||
      faq.a.toLowerCase().includes(searchFaq.toLowerCase());
    return matchCat && matchSearch;
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  const contactCards = [
    { icon: 'ChatBubbleLeftRightIcon', label: text.liveChat, desc: text.liveChatDesc, color: 'text-primary bg-primary/10' },
    { icon: 'EnvelopeIcon', label: text.email_support, desc: text.emailDesc, color: 'text-accent bg-accent/10' },
    { icon: 'PhoneIcon', label: text.phone, desc: text.phoneDesc, color: 'text-success bg-success/10' },
    { icon: 'ExclamationTriangleIcon', label: text.emergency, desc: text.emergencyDesc, color: 'text-danger bg-danger/10' },
  ];

  return (
    <div className="min-h-screen bg-background" dir={isRTL ? 'rtl' : 'ltr'}>
      <Header lang={lang} onLangChange={setLang} />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-deep-navy via-primary/90 to-sky-blue text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mx-auto mb-6">
            <Icon name="QuestionMarkCircleIcon" size={32} className="text-white" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">{text.hero}</h1>
          <p className="text-white/70 text-lg">{text.heroSub}</p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 -mt-8 mb-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {contactCards.map((card, i) => (
            <div key={i} className="bg-card rounded-2xl p-5 border border-border shadow-lg text-center hover:shadow-xl hover:border-primary/30 transition-all duration-300 cursor-pointer group">
              <div className={`w-12 h-12 rounded-xl ${card.color} flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                <Icon name={card.icon as 'ChatBubbleLeftRightIcon'} size={22} />
              </div>
              <p className="font-bold text-foreground text-sm">{card.label}</p>
              <p className="text-muted-foreground text-xs mt-1">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 mb-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-foreground mb-2">{text.faqTitle}</h2>
          <p className="text-muted-foreground">{text.faqSub}</p>
        </div>

        {/* Search */}
        <div className="relative mb-6">
          <Icon name="MagnifyingGlassIcon" size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            value={searchFaq}
            onChange={(e) => setSearchFaq(e.target.value)}
            placeholder={text.searchFaq}
            className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 text-sm bg-card text-foreground outline-none transition-all"
          />
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-6">
          {text.categories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setActiveCat(i)}
              className={`shrink-0 px-4 py-2 rounded-full text-sm font-bold transition-all ${
                activeCat === i ? 'bg-primary text-white' : 'bg-card border border-border text-muted-foreground hover:text-primary hover:border-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {filteredFaqs.map((faq, i) => (
            <div key={i} className="bg-card rounded-2xl border border-border overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-secondary/30 transition-colors"
              >
                <span className="font-semibold text-foreground text-sm pr-4">{faq.q}</span>
                <Icon
                  name={openFaq === i ? 'ChevronUpIcon' : 'ChevronDownIcon'}
                  size={18}
                  className={`shrink-0 transition-transform duration-300 ${openFaq === i ? 'text-primary' : 'text-muted-foreground'}`}
                />
              </button>
              {openFaq === i && (
                <div className="px-5 pb-5 border-t border-border">
                  <p className="text-muted-foreground text-sm leading-relaxed pt-4">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-secondary/30 py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-foreground mb-2">{text.contactTitle}</h2>
            <p className="text-muted-foreground">{text.contactSub}</p>
          </div>

          <div className="bg-card rounded-3xl p-8 border border-border shadow-lg">
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name="CheckCircleIcon" size={36} className="text-success" variant="solid" />
                </div>
                <h3 className="text-xl font-extrabold text-foreground mb-2">{text.sent}</h3>
                <p className="text-muted-foreground">{text.sentDesc}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">{text.name}</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={text.namePlaceholder}
                      required
                      className="w-full px-4 py-3.5 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 text-sm bg-background text-foreground placeholder:text-muted-foreground outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">{text.email}</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder={text.emailPlaceholder}
                      required
                      className="w-full px-4 py-3.5 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 text-sm bg-background text-foreground placeholder:text-muted-foreground outline-none transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">{text.subject}</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder={text.subjectPlaceholder}
                    required
                    className="w-full px-4 py-3.5 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 text-sm bg-background text-foreground placeholder:text-muted-foreground outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">{text.message}</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={text.messagePlaceholder}
                    required
                    rows={5}
                    className="w-full px-4 py-3.5 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 text-sm bg-background text-foreground placeholder:text-muted-foreground outline-none transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full btn-primary py-4 rounded-xl text-sm font-bold text-white flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  {submitting ? (
                    <>
                      <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      {text.sending}
                    </>
                  ) : (
                    <>
                      <Icon name="PaperAirplaneIcon" size={16} />
                      {text.send}
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer lang={lang} />
    </div>
  );
}
