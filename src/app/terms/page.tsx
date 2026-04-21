'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/AppIcon';
import AppLogo from '@/components/ui/AppLogo';

type Lang = 'en' | 'ar';

const t = {
  en: {
    hero: 'Terms & Conditions',
    heroSub: 'Please read these terms carefully before using Voiago',
    lastUpdated: 'Last Updated: April 20, 2026',
    toc: 'Table of Contents',
    sections: [
      {
        id: 'acceptance',
        title: '1. Acceptance of Terms',
        content: `By accessing or using the Voiago platform ("Service"), you agree to be bound by these Terms and Conditions ("Terms"). If you disagree with any part of these terms, you may not access the Service.

These Terms apply to all visitors, users, and others who access or use the Service. By creating an account or using our services, you confirm that you are at least 18 years of age and have the legal capacity to enter into these Terms.`,
      },
      {
        id: 'services',
        title: '2. Description of Services',
        content: `Voiago provides a comprehensive travel platform that includes:

• Flight booking and comparison services
• Hotel and accommodation reservations
• Transportation and transfer bookings
• AI-powered trip planning and itinerary creation
• Hajj & Umrah complete packages
• Currency conversion and multi-currency payments
• Emergency support and SOS services
• Travel journal and trip documentation
• Loyalty rewards program
• Budget tracking and management tools

We act as an intermediary between travelers and service providers. Voiago does not own or operate any airlines, hotels, or transportation services directly.`,
      },
      {
        id: 'accounts',
        title: '3. User Accounts',
        content: `When you create an account with us, you must provide accurate, complete, and current information. You are responsible for:

• Maintaining the confidentiality of your account credentials
• All activities that occur under your account
• Notifying us immediately of any unauthorized use of your account
• Ensuring your account information remains accurate and up-to-date

Admin accounts require a special authorization code and are subject to additional verification. Misuse of admin privileges will result in immediate account termination.`,
      },
      {
        id: 'bookings',
        title: '4. Booking & Cancellation Policy',
        content: `All bookings made through Voiago are subject to the terms and conditions of the respective service providers. General policies include:

• Bookings are confirmed upon receipt of full payment
• Cancellation fees may apply depending on the service provider's policy
• Most bookings allow free cancellation up to 48 hours before the scheduled service
• Refunds are processed within 5-10 business days
• Voiago charges a service fee of 2-5% on all bookings
• Price changes after booking confirmation are not applicable to confirmed reservations

For Hajj & Umrah packages, special cancellation policies apply due to the nature of these services. Please review specific package terms before booking.`,
      },
      {
        id: 'payments',title: '5. Payment Terms',
        content: `Voiago accepts the following payment methods:

• Credit and debit cards (Visa, Mastercard, American Express)
• Bank transfers
• Multiple currencies: EGP, USD, EUR, SAR, AED, GBP, TRY

All transactions are processed through secure, encrypted payment gateways. Voiago does not store complete credit card information. Currency conversion rates are updated in real-time and may vary slightly from the displayed rate at the time of final payment.

By providing payment information, you authorize Voiago to charge the specified amount for your booking.`,
      },
      {
        id: 'privacy',title: '6. Privacy & Data Protection',
        content: `Your privacy is important to us. Voiago collects and processes personal data in accordance with applicable data protection laws including GDPR. We collect:

• Personal identification information (name, email, phone)
• Travel preferences and booking history
• Payment information (processed securely, not stored)
• Location data (only when emergency features are activated)
• Device and usage information for service improvement

We do not sell your personal data to third parties. Data may be shared with service providers solely for the purpose of fulfilling your bookings. You have the right to access, correct, or delete your personal data at any time.`,
      },
      {
        id: 'loyalty',title: '7. Loyalty Program',
        content: `The Voiago Loyalty Program rewards users for bookings made through our platform:

• Points are earned on every completed booking
• Flight bookings: 2 points per EGP 10 spent
• Hotel bookings: 1.5 points per EGP 10 spent
• Complete packages: 3 points per EGP 10 spent
• Points expire after 24 months of account inactivity
• Points have no cash value and cannot be transferred
• Voiago reserves the right to modify the loyalty program at any time with 30 days notice`,
      },
      {
        id: 'liability',title: '8. Limitation of Liability',
        content: `Voiago acts as an intermediary and is not liable for:

• Actions or omissions of third-party service providers
• Flight delays, cancellations, or changes by airlines
• Hotel overbooking or quality issues
• Force majeure events (natural disasters, pandemics, political unrest)
• Loss or damage to personal belongings during travel
• Inaccurate information provided by service providers

Our maximum liability to you for any claim arising from your use of the Service shall not exceed the total amount paid by you for the specific booking giving rise to the claim.`,
      },
      {
        id: 'changes',title: '9. Changes to Terms',
        content: `Voiago reserves the right to modify these Terms at any time. We will notify users of significant changes via:

• Email notification to registered users
• Prominent notice on the Voiago platform
• In-app notification

Continued use of the Service after changes become effective constitutes acceptance of the new Terms. We recommend reviewing these Terms periodically.`,
      },
      {
        id: 'contact',title: '10. Contact Information',
        content: `For questions about these Terms, please contact us:

• Email: legal@voiago.com
• Support: support@voiago.com
• Address: Cairo, Egypt
• Phone: +20 100 000 0000

For urgent matters, please use our 24/7 emergency support line available in the app.`,
      },
    ],
  },
  ar: {
    hero: 'الشروط والأحكام',heroSub: 'يرجى قراءة هذه الشروط بعناية قبل استخدام Voiago',lastUpdated: 'آخر تحديث: 20 أبريل 2026',toc: 'جدول المحتويات',
    sections: [
      {
        id: 'acceptance',title: '1. قبول الشروط',
        content: `بالوصول إلى منصة Voiago أو استخدامها ("الخدمة")، فإنك توافق على الالتزام بهذه الشروط والأحكام. إذا كنت لا توافق على أي جزء من هذه الشروط، فلا يجوز لك الوصول إلى الخدمة.

تنطبق هذه الشروط على جميع الزوار والمستخدمين. بإنشاء حساب أو استخدام خدماتنا، تؤكد أنك تبلغ من العمر 18 عاماً على الأقل وتمتلك الأهلية القانونية للدخول في هذه الشروط.`,
      },
      {
        id: 'services',title: '2. وصف الخدمات',
        content: `يوفر Voiago منصة سفر شاملة تشمل:

• خدمات حجز الطيران والمقارنة
• حجوزات الفنادق والإقامة
• حجوزات النقل والتوصيل
• تخطيط الرحلات وإنشاء الجداول بالذكاء الاصطناعي
• باقات الحج والعمرة المتكاملة
• تحويل العملات والمدفوعات متعددة العملات
• دعم الطوارئ وخدمات SOS
• مجلة السفر وتوثيق الرحلات
• برنامج مكافآت الولاء
• أدوات تتبع الميزانية وإدارتها

نعمل كوسيط بين المسافرين ومزودي الخدمات. لا يمتلك Voiago أو يشغل أي شركات طيران أو فنادق أو خدمات نقل مباشرة.`,
      },
      {
        id: 'accounts',title: '3. حسابات المستخدمين',
        content: `عند إنشاء حساب، يجب تقديم معلومات دقيقة وكاملة وحديثة. أنت مسؤول عن:

• الحفاظ على سرية بيانات اعتماد حسابك
• جميع الأنشطة التي تحدث تحت حسابك
• إخطارنا فوراً بأي استخدام غير مصرح به لحسابك
• ضمان بقاء معلومات حسابك دقيقة ومحدثة

تتطلب حسابات المشرف رمز تفويض خاص وتخضع للتحقق الإضافي.`,
      },
      {
        id: 'bookings',title: '4. سياسة الحجز والإلغاء',
        content: `تخضع جميع الحجوزات المقدمة عبر Voiago لشروط وأحكام مزودي الخدمات المعنيين. السياسات العامة:

• تُؤكد الحجوزات عند استلام الدفع الكامل
• قد تطبق رسوم الإلغاء حسب سياسة مزود الخدمة
• معظم الحجوزات تتيح الإلغاء المجاني قبل 48 ساعة
• تُعالج المبالغ المستردة خلال 5-10 أيام عمل
• يفرض Voiago رسوم خدمة 2-5% على جميع الحجوزات

لباقات الحج والعمرة، تطبق سياسات إلغاء خاصة نظراً لطبيعة هذه الخدمات.`,
      },
      {
        id: 'payments',title: '5. شروط الدفع',
        content: `يقبل Voiago طرق الدفع التالية:

• بطاقات الائتمان والخصم (فيزا، ماستركارد، أمريكان إكسبريس)
• التحويلات البنكية
• عملات متعددة: الجنيه المصري، الدولار، اليورو، الريال، الدرهم، الجنيه الإسترليني، الليرة التركية

تُعالج جميع المعاملات عبر بوابات دفع آمنة ومشفرة. لا يخزن Voiago معلومات بطاقة الائتمان الكاملة.`,
      },
      {
        id: 'privacy',title: '6. الخصوصية وحماية البيانات',
        content: `خصوصيتك مهمة لنا. يجمع Voiago ويعالج البيانات الشخصية وفقاً لقوانين حماية البيانات المعمول بها بما في ذلك GDPR. نجمع:

• معلومات التعريف الشخصية (الاسم، البريد الإلكتروني، الهاتف)
• تفضيلات السفر وتاريخ الحجز
• معلومات الدفع (معالجة بأمان، غير مخزنة)
• بيانات الموقع (فقط عند تفعيل ميزات الطوارئ)

لا نبيع بياناتك الشخصية لأطراف ثالثة. يحق لك الوصول إلى بياناتك الشخصية أو تصحيحها أو حذفها في أي وقت.`,
      },
      {
        id: 'loyalty',title: '7. برنامج الولاء',
        content: `يكافئ برنامج ولاء Voiago المستخدمين على الحجوزات:

• تُكسب النقاط على كل حجز مكتمل
• حجوزات الطيران: 2 نقطة لكل 10 جنيهات
• حجوزات الفنادق: 1.5 نقطة لكل 10 جنيهات
• الباقات الكاملة: 3 نقاط لكل 10 جنيهات
• تنتهي صلاحية النقاط بعد 24 شهراً من عدم النشاط
• النقاط ليس لها قيمة نقدية ولا يمكن تحويلها`,
      },
      {
        id: 'liability',title: '8. تحديد المسؤولية',
        content: `يعمل Voiago كوسيط وليس مسؤولاً عن:

• أفعال أو إغفالات مزودي الخدمات الخارجيين
• تأخيرات أو إلغاءات أو تغييرات شركات الطيران
• الحجز الزائد للفنادق أو مشاكل الجودة
• أحداث القوة القاهرة (كوارث طبيعية، أوبئة، اضطرابات سياسية)
• فقدان أو تلف الممتلكات الشخصية أثناء السفر`,
      },
      {
        id: 'changes',title: '9. التغييرات على الشروط',
        content: `يحتفظ Voiago بالحق في تعديل هذه الشروط في أي وقت. سنخطر المستخدمين بالتغييرات الجوهرية عبر:

• إشعار بريد إلكتروني للمستخدمين المسجلين
• إشعار بارز على منصة Voiago
• إشعار داخل التطبيق

يُعد الاستمرار في استخدام الخدمة بعد سريان التغييرات قبولاً للشروط الجديدة.`,
      },
      {
        id: 'contact',title: '10. معلومات الاتصال',
        content: `للأسئلة حول هذه الشروط، يرجى التواصل معنا:

• البريد الإلكتروني: legal@voiago.com
• الدعم: support@voiago.com
• العنوان: القاهرة، مصر
• الهاتف: +20 100 000 0000

للأمور العاجلة، يرجى استخدام خط دعم الطوارئ 24/7 المتاح في التطبيق.`,
      },
    ],
  },
};

export default function TermsPage() {
  const [lang, setLang] = useState<Lang>('en');
  const [activeSection, setActiveSection] = useState('acceptance');
  const text = t[lang];
  const isRTL = lang === 'ar';

  return (
    <div className="min-h-screen bg-background" dir={isRTL ? 'rtl' : 'ltr'}>
      <Header lang={lang} onLangChange={setLang} />

      {/* Hero */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-deep-navy to-primary/80 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-center gap-3 mb-6">
            <AppLogo src="/assets/images/WhatsApp_Image_2026-04-19_at_11.06.21_AM-1776720747008.jpeg" size={44} />
            <span className="font-extrabold text-2xl text-white">Voiago</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">{text.hero}</h1>
          <p className="text-white/70 text-base mb-3">{text.heroSub}</p>
          <span className="text-white/50 text-sm">{text.lastUpdated}</span>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* TOC Sidebar */}
          <aside className="lg:w-64 shrink-0">
            <div className="bg-card rounded-2xl border border-border p-5 sticky top-24">
              <h3 className="font-bold text-foreground text-sm mb-4 flex items-center gap-2">
                <Icon name="ListBulletIcon" size={16} className="text-primary" />
                {text.toc}
              </h3>
              <nav className="space-y-1">
                {text.sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => {
                      setActiveSection(section.id);
                      document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }}
                    className={`w-full text-left px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                      activeSection === section.id
                        ? 'bg-primary/10 text-primary' :'text-muted-foreground hover:text-foreground hover:bg-secondary'
                    }`}
                  >
                    {section.title}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Sections */}
          <div className="flex-1 space-y-8">
            {text.sections.map((section) => (
              <div
                key={section.id}
                id={section.id}
                className="bg-card rounded-2xl border border-border p-6 sm:p-8 scroll-mt-24"
              >
                <h2 className="text-xl font-extrabold text-foreground mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon name="DocumentTextIcon" size={16} className="text-primary" />
                  </span>
                  {section.title}
                </h2>
                <div className="text-muted-foreground text-sm leading-relaxed whitespace-pre-line">
                  {section.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer lang={lang} />
    </div>
  );
}
