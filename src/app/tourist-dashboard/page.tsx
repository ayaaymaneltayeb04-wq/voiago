'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

type Lang = 'en' | 'ar';

const t = {
  en: {
    brand: 'Voiago',
    greeting: 'Good morning',
    userName: 'Ahmed',
    subtitle: 'Where are you headed today?',
    nav: {
      dashboard: 'Dashboard',
      trips: 'My Trips',
      bookings: 'Bookings',
      budget: 'Budget',
      journal: 'Journal',
      loyalty: 'Rewards',
      emergency: 'Emergency',
      settings: 'Settings'
    },
    quickBook: 'Quick Book',
    quickActions: ['✈️ Flight', '🏨 Hotel', '🚗 Transport', '🗺️ Plan Trip', '🕌 Hajj & Umrah', '💳 Payments'],
    upcomingTrips: 'Upcoming Trips',
    noTrips: 'No upcoming trips. Plan your next adventure!',
    planNow: 'Plan Now',
    recentBookings: 'Recent Bookings',
    budgetTracker: 'Budget Tracker',
    totalBudget: 'Total Budget',
    spent: 'Spent',
    remaining: 'Remaining',
    loyaltyPoints: 'Loyalty Points',
    pointsLabel: 'Points',
    pointsDesc: 'Earn points with every booking',
    redeemPoints: 'Redeem Points',
    weatherWidget: 'Current Weather',
    currencyConverter: 'Currency Converter',
    convert: 'Convert',
    nearbyAttractions: 'Nearby Attractions',
    emergency: 'Emergency Contacts',
    sos: 'SOS',
    sosDesc: 'Tap to share location & alert contacts',
    embassyBtn: 'Embassy',
    hospitalBtn: 'Hospital',
    policeBtn: 'Police',
    notifications: 'Notifications',
    seeAll: 'See All',
    trips: [
    { dest: 'Dubai, UAE', dates: 'May 15–22, 2026', status: 'Confirmed', statusColor: 'text-success bg-success/10', icon: '🇦🇪', price: 'EGP 8,900', img: "https://img.rocket.new/generatedImages/rocket_gen_img_1beae1050-1767040659314.png" },
    { dest: 'Istanbul, Turkey', dates: 'Jun 3–10, 2026', status: 'Pending', statusColor: 'text-amber-600 bg-amber-100', icon: '🇹🇷', price: 'EGP 11,200', img: "https://img.rocket.new/generatedImages/rocket_gen_img_15b2a4bd5-1767946410298.png" }],

    bookings: [
    { type: 'Flight', detail: 'Cairo → Dubai · EK 927', date: 'May 15, 2026', status: 'Confirmed', icon: 'PaperAirplaneIcon', color: 'text-primary bg-primary/10' },
    { type: 'Hotel', detail: 'Burj Al Arab, Dubai', date: 'May 15–22, 2026', status: 'Confirmed', icon: 'BuildingOffice2Icon', color: 'text-accent bg-accent/10' },
    { type: 'Transport', detail: 'Airport Transfer · Luxury', date: 'May 15, 2026', status: 'Confirmed', icon: 'TruckIcon', color: 'text-success bg-success/10' }],

    notifs: [
    { text: 'Your Dubai flight departs in 3 days', time: '2h ago', icon: 'BellIcon', color: 'text-primary' },
    { text: 'Hotel check-in reminder: Burj Al Arab', time: '5h ago', icon: 'BuildingOffice2Icon', color: 'text-accent' },
    { text: 'New offer: 20% off Istanbul hotels!', time: '1d ago', icon: 'TagIcon', color: 'text-success' }],

    attractions: ['Pyramids of Giza', 'Khan El Khalili', 'Cairo Tower', 'Al-Azhar Mosque', 'Egyptian Museum'],
    logout: 'Logout',
    profile: 'My Profile'
  },
  ar: {
    brand: 'Voiago',
    greeting: 'صباح الخير',
    userName: 'أحمد',
    subtitle: 'إلى أين ستتجه اليوم؟',
    nav: {
      dashboard: 'الرئيسية',
      trips: 'رحلاتي',
      bookings: 'الحجوزات',
      budget: 'الميزانية',
      journal: 'المجلة',
      loyalty: 'المكافآت',
      emergency: 'الطوارئ',
      settings: 'الإعدادات'
    },
    quickBook: 'حجز سريع',
    quickActions: ['✈️ طيران', '🏨 فندق', '🚗 نقل', '🗺️ خطط رحلة', '🕌 حج وعمرة', '💳 المدفوعات'],
    upcomingTrips: 'الرحلات القادمة',
    noTrips: 'لا توجد رحلات قادمة. خطط لمغامرتك القادمة!',
    planNow: 'خطط الآن',
    recentBookings: 'الحجوزات الأخيرة',
    budgetTracker: 'متابعة الميزانية',
    totalBudget: 'إجمالي الميزانية',
    spent: 'المصروف',
    remaining: 'المتبقي',
    loyaltyPoints: 'نقاط الولاء',
    pointsLabel: 'نقطة',
    pointsDesc: 'اكسب نقاطاً مع كل حجز',
    redeemPoints: 'استرداد النقاط',
    weatherWidget: 'الطقس الحالي',
    currencyConverter: 'محول العملات',
    convert: 'تحويل',
    nearbyAttractions: 'الأماكن القريبة',
    emergency: 'جهات الطوارئ',
    sos: 'طوارئ',
    sosDesc: 'اضغط لمشاركة موقعك وتنبيه جهات الاتصال',
    embassyBtn: 'السفارة',
    hospitalBtn: 'المستشفى',
    policeBtn: 'الشرطة',
    notifications: 'الإشعارات',
    seeAll: 'عرض الكل',
    trips: [
    { dest: 'دبي، الإمارات', dates: '15–22 مايو 2026', status: 'مؤكد', statusColor: 'text-success bg-success/10', icon: '🇦🇪', price: 'ج.م 8,900', img: "https://img.rocket.new/generatedImages/rocket_gen_img_1beae1050-1767040659314.png" },
    { dest: 'إسطنبول، تركيا', dates: '3–10 يونيو 2026', status: 'قيد الانتظار', statusColor: 'text-amber-600 bg-amber-100', icon: '🇹🇷', price: 'ج.م 11,200', img: "https://img.rocket.new/generatedImages/rocket_gen_img_15b2a4bd5-1767946410298.png" }],

    bookings: [
    { type: 'طيران', detail: 'القاهرة → دبي · EK 927', date: '15 مايو 2026', status: 'مؤكد', icon: 'PaperAirplaneIcon', color: 'text-primary bg-primary/10' },
    { type: 'فندق', detail: 'برج العرب، دبي', date: '15–22 مايو 2026', status: 'مؤكد', icon: 'BuildingOffice2Icon', color: 'text-accent bg-accent/10' },
    { type: 'نقل', detail: 'نقل المطار · فاخر', date: '15 مايو 2026', status: 'مؤكد', icon: 'TruckIcon', color: 'text-success bg-success/10' }],

    notifs: [
    { text: 'رحلتك إلى دبي تغادر بعد 3 أيام', time: 'منذ ساعتين', icon: 'BellIcon', color: 'text-primary' },
    { text: 'تذكير تسجيل الوصول: برج العرب', time: 'منذ 5 ساعات', icon: 'BuildingOffice2Icon', color: 'text-accent' },
    { text: 'عرض جديد: خصم 20% على فنادق إسطنبول!', time: 'منذ يوم', icon: 'TagIcon', color: 'text-success' }],

    attractions: ['أهرامات الجيزة', 'خان الخليلي', 'برج القاهرة', 'مسجد الأزهر', 'المتحف المصري'],
    logout: 'تسجيل الخروج',
    profile: 'ملفي الشخصي'
  }
};

const NAV_ITEMS = [
{ key: 'dashboard', icon: 'HomeIcon' },
{ key: 'trips', icon: 'MapIcon' },
{ key: 'bookings', icon: 'TicketIcon' },
{ key: 'budget', icon: 'BanknotesIcon' },
{ key: 'journal', icon: 'CameraIcon' },
{ key: 'loyalty', icon: 'StarIcon' },
{ key: 'emergency', icon: 'ExclamationTriangleIcon' },
{ key: 'settings', icon: 'Cog6ToothIcon' }] as
const;

export default function TouristDashboard() {
  const [lang, setLang] = useState<Lang>('en');
  const [activeNav, setActiveNav] = useState('dashboard');
  const [fromCurrency, setFromCurrency] = useState('EGP');
  const [toCurrency, setToCurrency] = useState('USD');
  const [amount, setAmount] = useState('1000');
  const [converted, setConverted] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const text = t[lang];
  const isRTL = lang === 'ar';

  const rates: Record<string, number> = { EGP: 1, USD: 0.021, EUR: 0.019, SAR: 0.079, AED: 0.077, GBP: 0.016, TRY: 0.65 };

  useEffect(() => {
    const val = parseFloat(amount) / rates[fromCurrency] * rates[toCurrency];
    setConverted(isNaN(val) ? '' : val.toFixed(2));
  }, [amount, fromCurrency, toCurrency]);

  return (
    <div className="min-h-screen bg-background flex" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 ${isRTL ? 'right-0' : 'left-0'} z-40 w-64 bg-deep-navy flex flex-col transition-transform duration-300 ${
        sidebarOpen ? 'translate-x-0' : isRTL ? 'translate-x-full lg:translate-x-0' : '-translate-x-full lg:translate-x-0'}`
        }>
        
        {/* Logo */}
        <div className="flex items-center gap-3 px-6 py-6 border-b border-white/10">
          <AppLogo
            src="/assets/images/WhatsApp_Image_2026-04-19_at_11.06.21_AM-1776720747008.jpeg"
            size={36} />
          
          <div>
            <span className="font-extrabold text-white text-lg block leading-none">Voiago</span>
            <span className="text-white/40 text-xs">{text.nav.dashboard}</span>
          </div>
        </div>

        {/* Nav Items */}
        <nav className="flex-1 px-3 py-4 overflow-y-auto space-y-1">
          {NAV_ITEMS.map((item) =>
          <button
            key={item.key}
            onClick={() => {setActiveNav(item.key);setSidebarOpen(false);}}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
            activeNav === item.key ?
            'bg-primary text-white shadow-lg shadow-primary/30' :
            'text-white/60 hover:text-white hover:bg-white/10'}`
            }>
            
              <Icon name={item.icon as 'HomeIcon'} size={18} variant={activeNav === item.key ? 'solid' : 'outline'} />
              {text.nav[item.key as keyof typeof text.nav]}
            </button>
          )}
        </nav>

        {/* User + Logout */}
        <div className="px-3 py-4 border-t border-white/10 space-y-2">
          <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5">
            <div className="w-9 h-9 rounded-full bg-primary/30 flex items-center justify-center">
              <Icon name="UserCircleIcon" size={20} className="text-white" />
            </div>
            <div>
              <p className="text-white text-sm font-bold">{text.userName}</p>
              <p className="text-white/40 text-xs">Tourist</p>
            </div>
          </div>
          <button
            onClick={() => {window.location.href = '/sign-up-login';}}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-white/50 hover:text-danger hover:bg-danger/10 text-sm font-semibold transition-all">
            
            <Icon name="ArrowRightOnRectangleIcon" size={18} />
            {text.logout}
          </button>
        </div>
      </aside>

      {/* Sidebar Overlay (mobile) */}
      {sidebarOpen &&
      <div
        className="fixed inset-0 bg-black/50 z-30 lg:hidden"
        onClick={() => setSidebarOpen(false)} />

      }

      {/* Main Content */}
      <div className="flex-1 lg:ml-64 flex flex-col min-h-screen" style={{ marginLeft: isRTL ? 0 : undefined, marginRight: isRTL ? '16rem' : undefined }}>
        {/* Top Bar */}
        <header className="sticky top-0 z-20 bg-white/95 backdrop-blur-xl border-b border-border px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-secondary transition-all"
              aria-label="Toggle sidebar">
              
              <Icon name="Bars3Icon" size={22} />
            </button>
            <div className="hidden sm:block">
              <p className="text-sm text-muted-foreground">{text.greeting}, <span className="font-bold text-foreground">{text.userName}</span> 👋</p>
              <p className="text-xs text-muted-foreground">{text.subtitle}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Language toggle */}
            <button
              onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
              className="flex items-center gap-1.5 px-3 py-2 rounded-full border border-border text-xs font-bold text-muted-foreground hover:text-primary hover:border-primary transition-all">
              
              <Icon name="GlobeAltIcon" size={14} />
              {lang === 'en' ? 'عربي' : 'English'}
            </button>

            {/* Notifications */}
            <button className="relative p-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-secondary transition-all">
              <Icon name="BellIcon" size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-danger border border-white" />
            </button>

            {/* Avatar */}
            <div className="w-9 h-9 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center cursor-pointer">
              <Icon name="UserCircleIcon" size={20} className="text-primary" />
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 px-4 sm:px-6 py-6 space-y-6 overflow-x-hidden">

          {/* Quick Actions */}
          <div className="bg-card rounded-2xl p-5 border border-border shadow-sm">
            <h3 className="font-bold text-foreground text-sm mb-4 flex items-center gap-2">
              <Icon name="BoltIcon" size={16} className="text-accent" variant="solid" />
              {text.quickBook}
            </h3>
            <div className="flex flex-wrap gap-2">
              {text.quickActions.map((action, i) =>
              <button
                key={i}
                className="px-4 py-2.5 rounded-xl border border-border bg-background text-sm font-semibold text-foreground hover:border-primary hover:text-primary hover:bg-secondary transition-all duration-200">
                
                  {action}
                </button>
              )}
            </div>
          </div>

          {/* Upcoming Trips + Budget side by side */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Upcoming Trips (2/3) */}
            <div className="lg:col-span-2 bg-card rounded-2xl p-5 border border-border shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-foreground flex items-center gap-2">
                  <Icon name="MapIcon" size={16} className="text-primary" />
                  {text.upcomingTrips}
                </h3>
                <button className="text-xs text-primary font-semibold hover:underline">{text.seeAll}</button>
              </div>

              {text.trips.length === 0 ?
              <div className="text-center py-8">
                  <p className="text-muted-foreground text-sm mb-3">{text.noTrips}</p>
                  <Link href="/homepage" className="btn-primary px-5 py-2.5 rounded-xl text-sm font-bold text-white inline-flex items-center gap-2">
                    {text.planNow}
                    <Icon name="ArrowRightIcon" size={14} />
                  </Link>
                </div> :

              <div className="space-y-3">
                  {text.trips.map((trip, i) =>
                <div key={i} className="flex items-center gap-4 p-4 rounded-xl border border-border hover:border-primary/30 hover:bg-secondary/30 transition-all cursor-pointer group">
                      <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0">
                        <AppImage
                      src={trip.img}
                      alt={`Trip destination ${trip.dest} scenic view`}
                      width={64}
                      height={64}
                      className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300" />
                    
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-lg">{trip.icon}</span>
                          <h4 className="font-bold text-foreground text-sm truncate">{trip.dest}</h4>
                        </div>
                        <p className="text-muted-foreground text-xs">{trip.dates}</p>
                      </div>
                      <div className="text-right shrink-0">
                        <p className="font-bold text-foreground text-sm">{trip.price}</p>
                        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${trip.statusColor}`}>
                          {trip.status}
                        </span>
                      </div>
                    </div>
                )}
                </div>
              }
            </div>

            {/* Budget Tracker (1/3) */}
            <div className="bg-card rounded-2xl p-5 border border-border shadow-sm flex flex-col">
              <h3 className="font-bold text-foreground flex items-center gap-2 mb-4">
                <Icon name="BanknotesIcon" size={16} className="text-success" />
                {text.budgetTracker}
              </h3>

              <div className="flex-1 space-y-4">
                <div className="text-center p-4 bg-secondary/50 rounded-xl">
                  <p className="text-xs text-muted-foreground mb-1">{text.totalBudget}</p>
                  <p className="text-2xl font-extrabold text-foreground">EGP 20,000</p>
                </div>

                {/* Progress */}
                <div>
                  <div className="flex justify-between text-xs mb-2">
                    <span className="text-muted-foreground">{text.spent}</span>
                    <span className="font-bold text-danger">EGP 12,500</span>
                  </div>
                  <div className="h-3 bg-input rounded-full overflow-hidden">
                    <div className="h-full w-[62.5%] bg-gradient-to-r from-primary to-accent rounded-full" />
                  </div>
                  <div className="flex justify-between text-xs mt-2">
                    <span className="text-muted-foreground">{text.remaining}</span>
                    <span className="font-bold text-success">EGP 7,500</span>
                  </div>
                </div>

                {/* Category breakdown */}
                {[
                { label: lang === 'en' ? 'Flights' : 'طيران', amount: 'EGP 5,500', pct: 44, color: 'bg-primary' },
                { label: lang === 'en' ? 'Hotels' : 'فنادق', amount: 'EGP 4,200', pct: 33, color: 'bg-accent' },
                { label: lang === 'en' ? 'Transport' : 'نقل', amount: 'EGP 2,800', pct: 23, color: 'bg-success' }].
                map((cat, i) =>
                <div key={i}>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-muted-foreground">{cat.label}</span>
                      <span className="font-semibold text-foreground">{cat.amount}</span>
                    </div>
                    <div className="h-1.5 bg-input rounded-full overflow-hidden">
                      <div className={`h-full ${cat.color} rounded-full`} style={{ width: `${cat.pct}%` }} />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Recent Bookings + Loyalty Points */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Recent Bookings (2/3) */}
            <div className="lg:col-span-2 bg-card rounded-2xl p-5 border border-border shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-foreground flex items-center gap-2">
                  <Icon name="TicketIcon" size={16} className="text-accent" />
                  {text.recentBookings}
                </h3>
                <button className="text-xs text-primary font-semibold hover:underline">{text.seeAll}</button>
              </div>
              <div className="space-y-3">
                {text.bookings.map((booking, i) =>
                <div key={i} className="flex items-center gap-4 p-3 rounded-xl border border-border hover:bg-secondary/30 transition-all cursor-pointer">
                    <div className={`w-10 h-10 rounded-xl ${booking.color} flex items-center justify-center shrink-0`}>
                      <Icon name={booking.icon as 'PaperAirplaneIcon'} size={18} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-foreground text-sm">{booking.type}</p>
                      <p className="text-muted-foreground text-xs truncate">{booking.detail}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-xs text-muted-foreground">{booking.date}</p>
                      <span className="text-xs font-semibold text-success">{booking.status}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Loyalty Points (1/3) */}
            <div className="bg-gradient-to-br from-primary to-sky-blue rounded-2xl p-5 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <Icon name="StarIcon" size={18} className="text-gold" variant="solid" />
                  <h3 className="font-bold text-white text-sm">{text.loyaltyPoints}</h3>
                </div>
                <p className="text-4xl font-extrabold text-white mb-1">4,820</p>
                <p className="text-white/70 text-xs mb-6">{text.pointsLabel} · {text.pointsDesc}</p>

                {/* Progress to next reward */}
                <div className="mb-4">
                  <div className="flex justify-between text-xs text-white/70 mb-2">
                    <span>4,820 / 5,000</span>
                    <span>180 {lang === 'en' ? 'to next reward' : 'للمكافأة التالية'}</span>
                  </div>
                  <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                    <div className="h-full bg-gold rounded-full" style={{ width: '96%' }} />
                  </div>
                </div>

                <button className="w-full py-2.5 rounded-xl bg-white/20 hover:bg-white/30 border border-white/30 text-white text-sm font-bold transition-all">
                  {text.redeemPoints}
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Row: Currency Converter + Nearby + Notifications */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Currency Converter */}
            <div className="bg-card rounded-2xl p-5 border border-border shadow-sm">
              <h3 className="font-bold text-foreground flex items-center gap-2 mb-4">
                <Icon name="ArrowsRightLeftIcon" size={16} className="text-indigo-600" />
                {text.currencyConverter}
              </h3>
              <div className="space-y-3">
                <div>
                  <label className="text-xs text-muted-foreground mb-1 block">{lang === 'en' ? 'Amount' : 'المبلغ'}</label>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 text-sm font-bold text-foreground bg-background outline-none transition-all" />
                  
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs text-muted-foreground mb-1 block">{lang === 'en' ? 'From' : 'من'}</label>
                    <select
                      value={fromCurrency}
                      onChange={(e) => setFromCurrency(e.target.value)}
                      className="w-full px-3 py-3 rounded-xl border border-border focus:border-primary text-sm font-semibold bg-background text-foreground outline-none cursor-pointer">
                      
                      {Object.keys(rates).map((c) => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="text-xs text-muted-foreground mb-1 block">{lang === 'en' ? 'To' : 'إلى'}</label>
                    <select
                      value={toCurrency}
                      onChange={(e) => setToCurrency(e.target.value)}
                      className="w-full px-3 py-3 rounded-xl border border-border focus:border-primary text-sm font-semibold bg-background text-foreground outline-none cursor-pointer">
                      
                      {Object.keys(rates).map((c) => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-secondary/60 border border-primary/20 text-center">
                  <p className="text-xs text-muted-foreground mb-1">{lang === 'en' ? 'Result' : 'النتيجة'}</p>
                  <p className="text-2xl font-extrabold text-primary">{converted} {toCurrency}</p>
                </div>
              </div>
            </div>

            {/* Nearby Attractions */}
            <div className="bg-card rounded-2xl p-5 border border-border shadow-sm">
              <h3 className="font-bold text-foreground flex items-center gap-2 mb-4">
                <Icon name="MapPinIcon" size={16} className="text-accent" variant="solid" />
                {text.nearbyAttractions}
              </h3>
              <div className="space-y-2">
                {text.attractions.map((place, i) =>
                <div key={i} className="flex items-center gap-3 p-3 rounded-xl hover:bg-secondary/50 transition-all cursor-pointer group">
                    <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                      <Icon name="MapPinIcon" size={14} className="text-accent" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-foreground">{place}</p>
                      <p className="text-xs text-muted-foreground">{lang === 'en' ? `${(i + 1) * 2}.${i}km away` : `${(i + 1) * 2}.${i} كم`}</p>
                    </div>
                    <Icon name="ChevronRightIcon" size={14} className="text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                )}
              </div>
            </div>

            {/* Emergency + Notifications */}
            <div className="space-y-4">
              {/* Emergency */}
              <div className="bg-card rounded-2xl p-5 border border-danger/30 shadow-sm">
                <h3 className="font-bold text-foreground flex items-center gap-2 mb-3">
                  <Icon name="ExclamationTriangleIcon" size={16} className="text-danger" variant="solid" />
                  {text.emergency}
                </h3>
                <button className="w-full py-3 rounded-xl bg-danger text-white font-extrabold text-sm mb-3 hover:bg-red-600 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-danger/30">
                  <Icon name="ExclamationTriangleIcon" size={18} variant="solid" />
                  {text.sos}
                </button>
                <p className="text-xs text-muted-foreground text-center mb-3">{text.sosDesc}</p>
                <div className="grid grid-cols-3 gap-2">
                  {[
                  { label: text.embassyBtn, icon: 'BuildingLibraryIcon', color: 'text-primary bg-primary/10 hover:bg-primary/20' },
                  { label: text.hospitalBtn, icon: 'HeartIcon', color: 'text-danger bg-danger/10 hover:bg-danger/20' },
                  { label: text.policeBtn, icon: 'ShieldCheckIcon', color: 'text-success bg-success/10 hover:bg-success/20' }].
                  map((btn, i) =>
                  <button key={i} className={`flex flex-col items-center gap-1 p-2 rounded-xl ${btn.color} transition-colors`}>
                      <Icon name={btn.icon as 'BuildingLibraryIcon'} size={18} />
                      <span className="text-xs font-semibold">{btn.label}</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Notifications */}
              <div className="bg-card rounded-2xl p-5 border border-border shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-foreground flex items-center gap-2">
                    <Icon name="BellIcon" size={16} className="text-primary" />
                    {text.notifications}
                  </h3>
                  <span className="text-xs text-white font-bold bg-danger px-2 py-0.5 rounded-full">3</span>
                </div>
                <div className="space-y-2">
                  {text.notifs.map((notif, i) =>
                  <div key={i} className="flex items-start gap-3 p-2 rounded-xl hover:bg-secondary/30 transition-all cursor-pointer">
                      <div className={`w-7 h-7 rounded-lg bg-secondary flex items-center justify-center shrink-0 mt-0.5`}>
                        <Icon name={notif.icon as 'BellIcon'} size={14} className={notif.color} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-semibold text-foreground leading-tight">{notif.text}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{notif.time}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>);

}