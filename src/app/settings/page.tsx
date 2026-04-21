'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/AppIcon';


type Lang = 'en' | 'ar';

const t = {
  en: {
    hero: 'Settings',
    heroSub: 'Manage your account preferences and personalize your Voiago experience',
    sections: {
      profile: 'Profile Settings',
      preferences: 'Travel Preferences',
      notifications: 'Notifications',
      privacy: 'Privacy & Security',
      payment: 'Payment Methods',
      language: 'Language & Region',
      accessibility: 'Accessibility',
      danger: 'Danger Zone',
    },
    profile: {
      title: 'Personal Information',
      name: 'Full Name',
      email: 'Email Address',
      phone: 'Phone Number',
      dob: 'Date of Birth',
      nationality: 'Nationality',
      passport: 'Passport Number',
      save: 'Save Changes',
      saved: 'Changes Saved!',
      avatar: 'Profile Photo',
      changePhoto: 'Change Photo',
    },
    preferences: {
      title: 'Travel Preferences',
      currency: 'Preferred Currency',
      seatPref: 'Seat Preference',
      mealPref: 'Meal Preference',
      hotelStars: 'Hotel Star Rating',
      travelStyle: 'Travel Style',
      currencies: ['EGP', 'USD', 'EUR', 'SAR', 'AED', 'GBP', 'TRY'],
      seats: ['Window', 'Aisle', 'No Preference'],
      meals: ['Standard', 'Vegetarian', 'Halal', 'Vegan', 'Gluten-Free'],
      stars: ['Any', '3 Stars', '4 Stars', '5 Stars'],
      styles: ['Budget', 'Comfort', 'Luxury', 'Adventure', 'Cultural'],
    },
    notifications: {
      title: 'Notification Preferences',
      items: [
        { key: 'bookingConfirm', label: 'Booking Confirmations', desc: 'Get notified when your booking is confirmed' },
        { key: 'flightUpdates', label: 'Flight Updates', desc: 'Receive alerts for delays, gate changes, and cancellations' },
        { key: 'priceAlerts', label: 'Price Alerts', desc: 'Get notified when prices drop for saved destinations' },
        { key: 'offers', label: 'Special Offers', desc: 'Receive personalized deals and promotions' },
        { key: 'loyaltyPoints', label: 'Loyalty Points', desc: 'Updates on your points balance and rewards' },
        { key: 'tripReminders', label: 'Trip Reminders', desc: 'Reminders before your upcoming trips' },
        { key: 'newsletter', label: 'Newsletter', desc: 'Weekly travel inspiration and tips' },
        { key: 'sms', label: 'SMS Notifications', desc: 'Receive important updates via SMS' },
      ],
    },
    privacy: {
      title: 'Privacy & Security',
      changePassword: 'Change Password',
      twoFactor: 'Two-Factor Authentication',
      twoFactorDesc: 'Add an extra layer of security to your account',
      loginHistory: 'Login History',
      dataExport: 'Export My Data',
      currentPassword: 'Current Password',
      newPassword: 'New Password',
      confirmPassword: 'Confirm New Password',
      updatePassword: 'Update Password',
    },
    payment: {
      title: 'Payment Methods',
      addCard: 'Add New Card',
      savedCards: 'Saved Cards',
      noCards: 'No saved payment methods',
      cards: [
        { type: 'Visa', last4: '4242', expiry: '12/28', primary: true },
        { type: 'Mastercard', last4: '8888', expiry: '06/27', primary: false },
      ],
      setPrimary: 'Set as Primary',
      remove: 'Remove',
    },
    language: {
      title: 'Language & Region',
      appLanguage: 'App Language',
      region: 'Region',
      timezone: 'Timezone',
      dateFormat: 'Date Format',
      languages: ['English', 'Arabic'],
      regions: ['Egypt', 'UAE', 'Saudi Arabia', 'Kuwait', 'Jordan', 'Other'],
      timezones: ['Cairo (UTC+2)', 'Dubai (UTC+4)', 'Riyadh (UTC+3)', 'London (UTC+0)'],
      dateFormats: ['DD/MM/YYYY', 'MM/DD/YYYY', 'YYYY-MM-DD'],
    },
    danger: {
      title: 'Danger Zone',
      deactivate: 'Deactivate Account',
      deactivateDesc: 'Temporarily disable your account. You can reactivate it anytime.',
      delete: 'Delete Account',
      deleteDesc: 'Permanently delete your account and all associated data. This cannot be undone.',
      deactivateBtn: 'Deactivate Account',
      deleteBtn: 'Delete Account',
    },
    save: 'Save',
    cancel: 'Cancel',
    enabled: 'Enabled',
    disabled: 'Disabled',
  },
  ar: {
    hero: 'الإعدادات',
    heroSub: 'إدارة تفضيلات حسابك وتخصيص تجربة Voiago الخاصة بك',
    sections: {
      profile: 'إعدادات الملف الشخصي',
      preferences: 'تفضيلات السفر',
      notifications: 'الإشعارات',
      privacy: 'الخصوصية والأمان',
      payment: 'طرق الدفع',
      language: 'اللغة والمنطقة',
      accessibility: 'إمكانية الوصول',
      danger: 'منطقة الخطر',
    },
    profile: {
      title: 'المعلومات الشخصية',
      name: 'الاسم الكامل',
      email: 'البريد الإلكتروني',
      phone: 'رقم الهاتف',
      dob: 'تاريخ الميلاد',
      nationality: 'الجنسية',
      passport: 'رقم جواز السفر',
      save: 'حفظ التغييرات',
      saved: 'تم الحفظ!',
      avatar: 'صورة الملف الشخصي',
      changePhoto: 'تغيير الصورة',
    },
    preferences: {
      title: 'تفضيلات السفر',
      currency: 'العملة المفضلة',
      seatPref: 'تفضيل المقعد',
      mealPref: 'تفضيل الوجبة',
      hotelStars: 'تصنيف نجوم الفندق',
      travelStyle: 'أسلوب السفر',
      currencies: ['ج.م', 'USD', 'EUR', 'SAR', 'AED', 'GBP', 'TRY'],
      seats: ['نافذة', 'ممر', 'لا تفضيل'],
      meals: ['عادية', 'نباتية', 'حلال', 'نباتية صارمة', 'خالية من الغلوتين'],
      stars: ['أي', '3 نجوم', '4 نجوم', '5 نجوم'],
      styles: ['اقتصادي', 'مريح', 'فاخر', 'مغامرة', 'ثقافي'],
    },
    notifications: {
      title: 'تفضيلات الإشعارات',
      items: [
        { key: 'bookingConfirm', label: 'تأكيدات الحجز', desc: 'احصل على إشعار عند تأكيد حجزك' },
        { key: 'flightUpdates', label: 'تحديثات الرحلة', desc: 'تنبيهات للتأخيرات وتغييرات البوابة والإلغاءات' },
        { key: 'priceAlerts', label: 'تنبيهات الأسعار', desc: 'احصل على إشعار عند انخفاض الأسعار للوجهات المحفوظة' },
        { key: 'offers', label: 'العروض الخاصة', desc: 'استلم صفقات وعروض ترويجية مخصصة' },
        { key: 'loyaltyPoints', label: 'نقاط الولاء', desc: 'تحديثات على رصيد نقاطك ومكافآتك' },
        { key: 'tripReminders', label: 'تذكيرات الرحلة', desc: 'تذكيرات قبل رحلاتك القادمة' },
        { key: 'newsletter', label: 'النشرة الإخبارية', desc: 'إلهام سفر أسبوعي ونصائح' },
        { key: 'sms', label: 'إشعارات SMS', desc: 'استلم تحديثات مهمة عبر الرسائل القصيرة' },
      ],
    },
    privacy: {
      title: 'الخصوصية والأمان',
      changePassword: 'تغيير كلمة المرور',
      twoFactor: 'المصادقة الثنائية',
      twoFactorDesc: 'أضف طبقة أمان إضافية لحسابك',
      loginHistory: 'سجل تسجيل الدخول',
      dataExport: 'تصدير بياناتي',
      currentPassword: 'كلمة المرور الحالية',
      newPassword: 'كلمة المرور الجديدة',
      confirmPassword: 'تأكيد كلمة المرور الجديدة',
      updatePassword: 'تحديث كلمة المرور',
    },
    payment: {
      title: 'طرق الدفع',
      addCard: 'إضافة بطاقة جديدة',
      savedCards: 'البطاقات المحفوظة',
      noCards: 'لا توجد طرق دفع محفوظة',
      cards: [
        { type: 'Visa', last4: '4242', expiry: '12/28', primary: true },
        { type: 'Mastercard', last4: '8888', expiry: '06/27', primary: false },
      ],
      setPrimary: 'تعيين كأساسي',
      remove: 'إزالة',
    },
    language: {
      title: 'اللغة والمنطقة',
      appLanguage: 'لغة التطبيق',
      region: 'المنطقة',
      timezone: 'المنطقة الزمنية',
      dateFormat: 'تنسيق التاريخ',
      languages: ['العربية', 'الإنجليزية'],
      regions: ['مصر', 'الإمارات', 'المملكة العربية السعودية', 'الكويت', 'الأردن', 'أخرى'],
      timezones: ['القاهرة (UTC+2)', 'دبي (UTC+4)', 'الرياض (UTC+3)', 'لندن (UTC+0)'],
      dateFormats: ['DD/MM/YYYY', 'MM/DD/YYYY', 'YYYY-MM-DD'],
    },
    danger: {
      title: 'منطقة الخطر',
      deactivate: 'تعطيل الحساب',
      deactivateDesc: 'تعطيل حسابك مؤقتاً. يمكنك إعادة تفعيله في أي وقت.',
      delete: 'حذف الحساب',
      deleteDesc: 'حذف حسابك وجميع البيانات المرتبطة به نهائياً. لا يمكن التراجع عن هذا.',
      deactivateBtn: 'تعطيل الحساب',
      deleteBtn: 'حذف الحساب',
    },
    save: 'حفظ',
    cancel: 'إلغاء',
    enabled: 'مفعّل',
    disabled: 'معطّل',
  },
};

export default function SettingsPage() {
  const [lang, setLang] = useState<Lang>('en');
  const [activeSection, setActiveSection] = useState('profile');
  const [notifications, setNotifications] = useState<Record<string, boolean>>({
    bookingConfirm: true, flightUpdates: true, priceAlerts: true, offers: false,
    loyaltyPoints: true, tripReminders: true, newsletter: false, sms: false,
  });
  const [twoFactor, setTwoFactor] = useState(false);
  const [profileSaved, setProfileSaved] = useState(false);
  const [profileData, setProfileData] = useState({ name: 'Ahmed Hassan', email: 'ahmed@example.com', phone: '+20 100 000 0000', dob: '1995-06-15', nationality: 'Egyptian', passport: 'A12345678' });
  const text = t[lang];
  const isRTL = lang === 'ar';

  const sectionKeys = Object.keys(text.sections) as Array<keyof typeof text.sections>;
  const sectionIcons: Record<string, string> = {
    profile: 'UserCircleIcon', preferences: 'HeartIcon', notifications: 'BellIcon',
    privacy: 'ShieldCheckIcon', payment: 'CreditCardIcon', language: 'GlobeAltIcon',
    accessibility: 'EyeIcon', danger: 'ExclamationTriangleIcon',
  };

  const handleSaveProfile = () => {
    setProfileSaved(true);
    setTimeout(() => setProfileSaved(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background" dir={isRTL ? 'rtl' : 'ltr'}>
      <Header lang={lang} onLangChange={setLang} />

      {/* Hero */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-deep-navy to-primary/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center">
              <Icon name="Cog6ToothIcon" size={32} className="text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-extrabold text-white">{text.hero}</h1>
              <p className="text-white/70 text-sm mt-1">{text.heroSub}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Nav */}
          <aside className="lg:w-56 shrink-0">
            <div className="bg-card rounded-2xl border border-border p-3 sticky top-24">
              {sectionKeys.map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveSection(key)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all mb-1 ${
                    activeSection === key
                      ? key === 'danger' ? 'bg-danger/10 text-danger' : 'bg-primary/10 text-primary' :'text-muted-foreground hover:text-foreground hover:bg-secondary'
                  }`}
                >
                  <Icon name={sectionIcons[key] as 'UserCircleIcon'} size={16} />
                  {text.sections[key]}
                </button>
              ))}
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1 space-y-6">

            {/* Profile */}
            {activeSection === 'profile' && (
              <div className="bg-card rounded-2xl border border-border p-6 sm:p-8">
                <h2 className="text-xl font-extrabold text-foreground mb-6 flex items-center gap-2">
                  <Icon name="UserCircleIcon" size={20} className="text-primary" />
                  {text.profile.title}
                </h2>
                {/* Avatar */}
                <div className="flex items-center gap-4 mb-6 p-4 bg-secondary/40 rounded-2xl">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center border-2 border-primary/20">
                    <Icon name="UserCircleIcon" size={36} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">{text.profile.avatar}</p>
                    <button className="text-sm text-primary font-semibold hover:underline mt-1">{text.profile.changePhoto}</button>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {[
                    { label: text.profile.name, key: 'name', type: 'text' },
                    { label: text.profile.email, key: 'email', type: 'email' },
                    { label: text.profile.phone, key: 'phone', type: 'tel' },
                    { label: text.profile.dob, key: 'dob', type: 'date' },
                    { label: text.profile.nationality, key: 'nationality', type: 'text' },
                    { label: text.profile.passport, key: 'passport', type: 'text' },
                  ].map((field) => (
                    <div key={field.key}>
                      <label className="block text-sm font-semibold text-foreground mb-2">{field.label}</label>
                      <input
                        type={field.type}
                        value={profileData[field.key as keyof typeof profileData]}
                        onChange={(e) => setProfileData({ ...profileData, [field.key]: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 text-sm bg-background text-foreground outline-none transition-all"
                      />
                    </div>
                  ))}
                </div>
                <button
                  onClick={handleSaveProfile}
                  className={`mt-6 btn-primary px-8 py-3 rounded-xl text-sm font-bold text-white flex items-center gap-2 ${profileSaved ? 'bg-success' : ''}`}
                >
                  {profileSaved ? <><Icon name="CheckCircleIcon" size={16} variant="solid" />{text.profile.saved}</> : <><Icon name="CheckIcon" size={16} />{text.profile.save}</>}
                </button>
              </div>
            )}

            {/* Preferences */}
            {activeSection === 'preferences' && (
              <div className="bg-card rounded-2xl border border-border p-6 sm:p-8">
                <h2 className="text-xl font-extrabold text-foreground mb-6 flex items-center gap-2">
                  <Icon name="HeartIcon" size={20} className="text-primary" />
                  {text.preferences.title}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {[
                    { label: text.preferences.currency, options: text.preferences.currencies },
                    { label: text.preferences.seatPref, options: text.preferences.seats },
                    { label: text.preferences.mealPref, options: text.preferences.meals },
                    { label: text.preferences.hotelStars, options: text.preferences.stars },
                    { label: text.preferences.travelStyle, options: text.preferences.styles },
                  ].map((pref, i) => (
                    <div key={i}>
                      <label className="block text-sm font-semibold text-foreground mb-2">{pref.label}</label>
                      <select className="w-full px-4 py-3.5 rounded-xl border border-border focus:border-primary text-sm bg-background text-foreground outline-none cursor-pointer">
                        {pref.options.map((opt, j) => <option key={j} value={j}>{opt}</option>)}
                      </select>
                    </div>
                  ))}
                </div>
                <button className="mt-6 btn-primary px-8 py-3 rounded-xl text-sm font-bold text-white flex items-center gap-2">
                  <Icon name="CheckIcon" size={16} />{text.save}
                </button>
              </div>
            )}

            {/* Notifications */}
            {activeSection === 'notifications' && (
              <div className="bg-card rounded-2xl border border-border p-6 sm:p-8">
                <h2 className="text-xl font-extrabold text-foreground mb-6 flex items-center gap-2">
                  <Icon name="BellIcon" size={20} className="text-primary" />
                  {text.notifications.title}
                </h2>
                <div className="space-y-4">
                  {text.notifications.items.map((item) => (
                    <div key={item.key} className="flex items-center justify-between p-4 rounded-xl border border-border hover:bg-secondary/30 transition-all">
                      <div className="flex-1 pr-4">
                        <p className="font-semibold text-foreground text-sm">{item.label}</p>
                        <p className="text-muted-foreground text-xs mt-0.5">{item.desc}</p>
                      </div>
                      <button
                        onClick={() => setNotifications({ ...notifications, [item.key]: !notifications[item.key] })}
                        className={`relative w-12 h-6 rounded-full transition-all duration-300 shrink-0 ${notifications[item.key] ? 'bg-primary' : 'bg-input'}`}
                      >
                        <span className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow transition-all duration-300 ${notifications[item.key] ? 'left-7' : 'left-1'}`} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Privacy */}
            {activeSection === 'privacy' && (
              <div className="space-y-6">
                <div className="bg-card rounded-2xl border border-border p-6 sm:p-8">
                  <h2 className="text-xl font-extrabold text-foreground mb-6 flex items-center gap-2">
                    <Icon name="ShieldCheckIcon" size={20} className="text-primary" />
                    {text.privacy.title}
                  </h2>
                  {/* 2FA */}
                  <div className="flex items-center justify-between p-4 rounded-xl border border-border mb-6">
                    <div>
                      <p className="font-semibold text-foreground">{text.privacy.twoFactor}</p>
                      <p className="text-muted-foreground text-xs mt-0.5">{text.privacy.twoFactorDesc}</p>
                    </div>
                    <button
                      onClick={() => setTwoFactor(!twoFactor)}
                      className={`relative w-12 h-6 rounded-full transition-all duration-300 shrink-0 ${twoFactor ? 'bg-primary' : 'bg-input'}`}
                    >
                      <span className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow transition-all duration-300 ${twoFactor ? 'left-7' : 'left-1'}`} />
                    </button>
                  </div>
                  {/* Change Password */}
                  <h3 className="font-bold text-foreground mb-4">{text.privacy.changePassword}</h3>
                  <div className="space-y-4">
                    {[text.privacy.currentPassword, text.privacy.newPassword, text.privacy.confirmPassword].map((label, i) => (
                      <div key={i}>
                        <label className="block text-sm font-semibold text-foreground mb-2">{label}</label>
                        <input type="password" placeholder="••••••••" className="w-full px-4 py-3.5 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 text-sm bg-background text-foreground outline-none transition-all" />
                      </div>
                    ))}
                    <button className="btn-primary px-8 py-3 rounded-xl text-sm font-bold text-white flex items-center gap-2">
                      <Icon name="LockClosedIcon" size={16} />{text.privacy.updatePassword}
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Payment */}
            {activeSection === 'payment' && (
              <div className="bg-card rounded-2xl border border-border p-6 sm:p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-extrabold text-foreground flex items-center gap-2">
                    <Icon name="CreditCardIcon" size={20} className="text-primary" />
                    {text.payment.savedCards}
                  </h2>
                  <button className="btn-primary px-4 py-2 rounded-xl text-xs font-bold text-white flex items-center gap-1.5">
                    <Icon name="PlusIcon" size={14} />{text.payment.addCard}
                  </button>
                </div>
                <div className="space-y-4">
                  {text.payment.cards.map((card, i) => (
                    <div key={i} className={`flex items-center gap-4 p-4 rounded-2xl border-2 transition-all ${card.primary ? 'border-primary bg-primary/5' : 'border-border'}`}>
                      <div className="w-12 h-8 rounded-lg bg-gradient-to-br from-primary to-sky-blue flex items-center justify-center shrink-0">
                        <Icon name="CreditCardIcon" size={18} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="font-bold text-foreground text-sm">{card.type} •••• {card.last4}</p>
                        <p className="text-muted-foreground text-xs">{lang === 'en' ? 'Expires' : 'تنتهي'} {card.expiry}</p>
                      </div>
                      {card.primary && (
                        <span className="text-xs font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-full">{lang === 'en' ? 'Primary' : 'أساسي'}</span>
                      )}
                      <button className="p-2 rounded-lg text-danger hover:bg-danger/10 transition-colors">
                        <Icon name="TrashIcon" size={14} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Language */}
            {activeSection === 'language' && (
              <div className="bg-card rounded-2xl border border-border p-6 sm:p-8">
                <h2 className="text-xl font-extrabold text-foreground mb-6 flex items-center gap-2">
                  <Icon name="GlobeAltIcon" size={20} className="text-primary" />
                  {text.language.title}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {[
                    { label: text.language.appLanguage, options: text.language.languages },
                    { label: text.language.region, options: text.language.regions },
                    { label: text.language.timezone, options: text.language.timezones },
                    { label: text.language.dateFormat, options: text.language.dateFormats },
                  ].map((item, i) => (
                    <div key={i}>
                      <label className="block text-sm font-semibold text-foreground mb-2">{item.label}</label>
                      <select className="w-full px-4 py-3.5 rounded-xl border border-border focus:border-primary text-sm bg-background text-foreground outline-none cursor-pointer">
                        {item.options.map((opt, j) => <option key={j} value={j}>{opt}</option>)}
                      </select>
                    </div>
                  ))}
                </div>
                <button className="mt-6 btn-primary px-8 py-3 rounded-xl text-sm font-bold text-white flex items-center gap-2">
                  <Icon name="CheckIcon" size={16} />{text.save}
                </button>
              </div>
            )}

            {/* Danger Zone */}
            {activeSection === 'danger' && (
              <div className="bg-card rounded-2xl border-2 border-danger/30 p-6 sm:p-8">
                <h2 className="text-xl font-extrabold text-danger mb-6 flex items-center gap-2">
                  <Icon name="ExclamationTriangleIcon" size={20} className="text-danger" variant="solid" />
                  {text.danger.title}
                </h2>
                <div className="space-y-4">
                  <div className="p-5 rounded-2xl border border-amber-200 bg-amber-50">
                    <h3 className="font-bold text-amber-800 mb-1">{text.danger.deactivate}</h3>
                    <p className="text-amber-700 text-sm mb-4">{text.danger.deactivateDesc}</p>
                    <button className="px-6 py-2.5 rounded-xl border-2 border-amber-400 text-amber-700 font-bold text-sm hover:bg-amber-100 transition-colors">
                      {text.danger.deactivateBtn}
                    </button>
                  </div>
                  <div className="p-5 rounded-2xl border border-danger/30 bg-danger/5">
                    <h3 className="font-bold text-danger mb-1">{text.danger.delete}</h3>
                    <p className="text-danger/70 text-sm mb-4">{text.danger.deleteDesc}</p>
                    <button className="px-6 py-2.5 rounded-xl bg-danger text-white font-bold text-sm hover:bg-red-600 transition-colors">
                      {text.danger.deleteBtn}
                    </button>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </section>

      <Footer lang={lang} />
    </div>
  );
}
