'use client';

import React, { useState } from 'react';

import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';

type Lang = 'en' | 'ar';

const t = {
  en: {
    brand: 'Voiago Admin',
    nav: {
      overview: 'Overview',
      users: 'Users',
      bookings: 'Bookings',
      services: 'Services',
      destinations: 'Destinations',
      partners: 'Partners',
      offers: 'Offers',
      analytics: 'Analytics',
      settings: 'Settings',
    },
    overview: 'Dashboard Overview',
    totalUsers: 'Total Users',
    totalBookings: 'Total Bookings',
    revenue: 'Total Revenue',
    activeTrips: 'Active Trips',
    recentBookings: 'Recent Bookings',
    topDestinations: 'Top Destinations',
    userGrowth: 'User Growth',
    revenueBreakdown: 'Revenue Breakdown',
    manageUsers: 'Manage Users',
    manageBookings: 'Manage Bookings',
    manageServices: 'Manage Services',
    manageDestinations: 'Manage Destinations',
    managePartners: 'Manage Partners',
    manageOffers: 'Manage Offers',
    analytics: 'Analytics & Reports',
    logout: 'Logout',
    adminPanel: 'Admin Panel',
    search: 'Search...',
    addNew: 'Add New',
    export: 'Export',
    status: 'Status',
    active: 'Active',
    inactive: 'Inactive',
    pending: 'Pending',
    confirmed: 'Confirmed',
    cancelled: 'Cancelled',
    viewAll: 'View All',
    thisMonth: 'This Month',
    lastMonth: 'Last Month',
    growth: 'Growth',
    name: 'Name',
    email: 'Email',
    role: 'Role',
    joined: 'Joined',
    actions: 'Actions',
    tourist: 'Tourist',
    admin: 'Admin',
    destination: 'Destination',
    amount: 'Amount',
    date: 'Date',
    type: 'Type',
    flight: 'Flight',
    hotel: 'Hotel',
    transport: 'Transport',
    hajj: 'Hajj & Umrah',
    welcomeAdmin: 'Welcome back, Admin',
    systemHealth: 'System Health',
    serverStatus: 'Server Status',
    apiStatus: 'API Status',
    dbStatus: 'Database',
    operational: 'Operational',
    quickActions: 'Quick Actions',
    sendNotification: 'Send Notification',
    generateReport: 'Generate Report',
    backupData: 'Backup Data',
    systemSettings: 'System Settings',
  },
  ar: {
    brand: 'Voiago - الإدارة',
    nav: {
      overview: 'نظرة عامة',
      users: 'المستخدمون',
      bookings: 'الحجوزات',
      services: 'الخدمات',
      destinations: 'الوجهات',
      partners: 'الشركاء',
      offers: 'العروض',
      analytics: 'التحليلات',
      settings: 'الإعدادات',
    },
    overview: 'نظرة عامة على لوحة التحكم',
    totalUsers: 'إجمالي المستخدمين',
    totalBookings: 'إجمالي الحجوزات',
    revenue: 'إجمالي الإيرادات',
    activeTrips: 'الرحلات النشطة',
    recentBookings: 'الحجوزات الأخيرة',
    topDestinations: 'أفضل الوجهات',
    userGrowth: 'نمو المستخدمين',
    revenueBreakdown: 'تفاصيل الإيرادات',
    manageUsers: 'إدارة المستخدمين',
    manageBookings: 'إدارة الحجوزات',
    manageServices: 'إدارة الخدمات',
    manageDestinations: 'إدارة الوجهات',
    managePartners: 'إدارة الشركاء',
    manageOffers: 'إدارة العروض',
    analytics: 'التحليلات والتقارير',
    logout: 'تسجيل الخروج',
    adminPanel: 'لوحة الإدارة',
    search: 'بحث...',
    addNew: 'إضافة جديد',
    export: 'تصدير',
    status: 'الحالة',
    active: 'نشط',
    inactive: 'غير نشط',
    pending: 'قيد الانتظار',
    confirmed: 'مؤكد',
    cancelled: 'ملغي',
    viewAll: 'عرض الكل',
    thisMonth: 'هذا الشهر',
    lastMonth: 'الشهر الماضي',
    growth: 'النمو',
    name: 'الاسم',
    email: 'البريد الإلكتروني',
    role: 'الدور',
    joined: 'تاريخ الانضمام',
    actions: 'الإجراءات',
    tourist: 'سائح',
    admin: 'مشرف',
    destination: 'الوجهة',
    amount: 'المبلغ',
    date: 'التاريخ',
    type: 'النوع',
    flight: 'طيران',
    hotel: 'فندق',
    transport: 'نقل',
    hajj: 'حج وعمرة',
    welcomeAdmin: 'مرحباً بعودتك، المشرف',
    systemHealth: 'صحة النظام',
    serverStatus: 'حالة الخادم',
    apiStatus: 'حالة API',
    dbStatus: 'قاعدة البيانات',
    operational: 'يعمل بشكل طبيعي',
    quickActions: 'إجراءات سريعة',
    sendNotification: 'إرسال إشعار',
    generateReport: 'إنشاء تقرير',
    backupData: 'نسخ احتياطي',
    systemSettings: 'إعدادات النظام',
  },
};

const NAV_ITEMS = [
  { key: 'overview', icon: 'HomeIcon' },
  { key: 'users', icon: 'UsersIcon' },
  { key: 'bookings', icon: 'TicketIcon' },
  { key: 'services', icon: 'WrenchScrewdriverIcon' },
  { key: 'destinations', icon: 'GlobeAltIcon' },
  { key: 'partners', icon: 'HandshakeIcon' },
  { key: 'offers', icon: 'TagIcon' },
  { key: 'analytics', icon: 'ChartBarIcon' },
  { key: 'settings', icon: 'Cog6ToothIcon' },
] as const;

const STATS = (lang: Lang) => [
  { label: t[lang].totalUsers, value: '24,831', change: '+12.5%', up: true, icon: 'UsersIcon', color: 'text-primary bg-primary/10' },
  { label: t[lang].totalBookings, value: '8,492', change: '+8.3%', up: true, icon: 'TicketIcon', color: 'text-accent bg-accent/10' },
  { label: t[lang].revenue, value: 'EGP 4.2M', change: '+18.7%', up: true, icon: 'BanknotesIcon', color: 'text-success bg-success/10' },
  { label: t[lang].activeTrips, value: '1,247', change: '-2.1%', up: false, icon: 'MapIcon', color: 'text-amber-600 bg-amber-100' },
];

const USERS = (lang: Lang) => [
  { name: 'Ahmed Hassan', email: 'ahmed@example.com', role: t[lang].tourist, joined: '2026-01-15', status: t[lang].active, statusColor: 'text-success bg-success/10' },
  { name: 'Sara Mohamed', email: 'sara@example.com', role: t[lang].tourist, joined: '2026-02-03', status: t[lang].active, statusColor: 'text-success bg-success/10' },
  { name: 'Omar Khalil', email: 'omar@example.com', role: t[lang].tourist, joined: '2026-02-18', status: t[lang].inactive, statusColor: 'text-muted-foreground bg-input' },
  { name: 'Nour Ali', email: 'nour@example.com', role: t[lang].tourist, joined: '2026-03-07', status: t[lang].active, statusColor: 'text-success bg-success/10' },
  { name: 'Karim Adel', email: 'karim@example.com', role: t[lang].admin, joined: '2025-12-01', status: t[lang].active, statusColor: 'text-success bg-success/10' },
];

const BOOKINGS = (lang: Lang) => [
  { id: '#BK-001', user: 'Ahmed Hassan', destination: lang === 'en' ? 'Dubai, UAE' : 'دبي، الإمارات', type: t[lang].flight, amount: 'EGP 8,900', date: '2026-05-15', status: t[lang].confirmed, statusColor: 'text-success bg-success/10' },
  { id: '#BK-002', user: 'Sara Mohamed', destination: lang === 'en' ? 'Istanbul, Turkey' : 'إسطنبول، تركيا', type: t[lang].hotel, amount: 'EGP 11,200', date: '2026-06-03', status: t[lang].confirmed, statusColor: 'text-success bg-success/10' },
  { id: '#BK-003', user: 'Omar Khalil', destination: lang === 'en' ? 'Mecca, Saudi Arabia' : 'مكة المكرمة', type: t[lang].hajj, amount: 'EGP 15,000', date: '2026-04-10', status: t[lang].pending, statusColor: 'text-amber-600 bg-amber-100' },
  { id: '#BK-004', user: 'Nour Ali', destination: lang === 'en' ? 'Paris, France' : 'باريس، فرنسا', type: t[lang].flight, amount: 'EGP 18,500', date: '2026-07-20', status: t[lang].confirmed, statusColor: 'text-success bg-success/10' },
  { id: '#BK-005', user: 'Karim Adel', destination: lang === 'en' ? 'Bangkok, Thailand' : 'بانكوك، تايلاند', type: t[lang].transport, amount: 'EGP 13,700', date: '2026-08-05', status: t[lang].cancelled, statusColor: 'text-danger bg-danger/10' },
];

const TOP_DESTINATIONS = (lang: Lang) => [
  { name: lang === 'en' ? 'Dubai, UAE' : 'دبي، الإمارات', bookings: 1842, pct: 88, flag: '🇦🇪' },
  { name: lang === 'en' ? 'Istanbul, Turkey' : 'إسطنبول، تركيا', bookings: 1563, pct: 75, flag: '🇹🇷' },
  { name: lang === 'en' ? 'Mecca, Saudi Arabia' : 'مكة المكرمة', bookings: 1290, pct: 62, flag: '🇸🇦' },
  { name: lang === 'en' ? 'Paris, France' : 'باريس، فرنسا', bookings: 987, pct: 47, flag: '🇫🇷' },
  { name: lang === 'en' ? 'Sharm El-Sheikh' : 'شرم الشيخ', bookings: 810, pct: 39, flag: '🇪🇬' },
];

const REVENUE_BREAKDOWN = (lang: Lang) => [
  { label: lang === 'en' ? 'Flight Commissions' : 'عمولات الطيران', amount: 'EGP 1.8M', pct: 43, color: 'bg-primary' },
  { label: lang === 'en' ? 'Hotel Commissions' : 'عمولات الفنادق', amount: 'EGP 1.1M', pct: 26, color: 'bg-accent' },
  { label: lang === 'en' ? 'Premium Subscriptions' : 'الاشتراكات المميزة', amount: 'EGP 630K', pct: 15, color: 'bg-success' },
  { label: lang === 'en' ? 'Advertisements' : 'الإعلانات', amount: 'EGP 420K', pct: 10, color: 'bg-amber-500' },
  { label: lang === 'en' ? 'Other Services' : 'خدمات أخرى', amount: 'EGP 250K', pct: 6, color: 'bg-indigo-500' },
];

export default function AdminDashboard() {
  const [lang, setLang] = useState<Lang>('en');
  const [activeNav, setActiveNav] = useState('overview');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const text = t[lang];
  const isRTL = lang === 'ar';

  const stats = STATS(lang);
  const users = USERS(lang);
  const bookings = BOOKINGS(lang);
  const topDests = TOP_DESTINATIONS(lang);
  const revenueBreakdown = REVENUE_BREAKDOWN(lang);

  return (
    <div className="min-h-screen bg-background flex" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 ${isRTL ? 'right-0' : 'left-0'} z-40 w-64 bg-deep-navy flex flex-col transition-transform duration-300 ${
          sidebarOpen ? 'translate-x-0' : isRTL ? 'translate-x-full lg:translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        {/* Logo */}
        <div className="flex items-center gap-3 px-6 py-6 border-b border-white/10">
          <AppLogo src="/assets/images/WhatsApp_Image_2026-04-19_at_11.06.21_AM-1776720747008.jpeg" size={36} />
          <div>
            <span className="font-extrabold text-white text-base block leading-none">Voiago</span>
            <span className="text-white/40 text-xs">{text.adminPanel}</span>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3 py-4 overflow-y-auto space-y-1">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.key}
              onClick={() => { setActiveNav(item.key); setSidebarOpen(false); }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                activeNav === item.key
                  ? 'bg-primary text-white shadow-lg shadow-primary/30'
                  : 'text-white/60 hover:text-white hover:bg-white/10'
              }`}
            >
              <Icon name={item.icon as 'HomeIcon'} size={18} variant={activeNav === item.key ? 'solid' : 'outline'} />
              {text.nav[item.key as keyof typeof text.nav]}
            </button>
          ))}
        </nav>

        {/* Admin User + Logout */}
        <div className="px-3 py-4 border-t border-white/10 space-y-2">
          <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5">
            <div className="w-9 h-9 rounded-full bg-accent/30 flex items-center justify-center">
              <Icon name="ShieldCheckIcon" size={20} className="text-white" />
            </div>
            <div>
              <p className="text-white text-sm font-bold">{lang === 'en' ? 'Admin' : 'المشرف'}</p>
              <p className="text-white/40 text-xs">{lang === 'en' ? 'Super Admin' : 'مشرف رئيسي'}</p>
            </div>
          </div>
          <button
            onClick={() => { window.location.href = '/sign-up-login'; }}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-white/50 hover:text-danger hover:bg-danger/10 text-sm font-semibold transition-all"
          >
            <Icon name="ArrowRightOnRectangleIcon" size={18} />
            {text.logout}
          </button>
        </div>
      </aside>

      {/* Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-30 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Main */}
      <div
        className="flex-1 flex flex-col min-h-screen"
        style={{ marginLeft: isRTL ? 0 : undefined, marginRight: isRTL ? '16rem' : undefined }}
      >
        <div className="lg:ml-64">
          {/* Top Bar */}
          <header className="sticky top-0 z-20 bg-white/95 backdrop-blur-xl border-b border-border px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden p-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-secondary transition-all"
              >
                <Icon name="Bars3Icon" size={22} />
              </button>
              <div>
                <p className="text-sm font-bold text-foreground">{text.welcomeAdmin} 👋</p>
                <p className="text-xs text-muted-foreground">{lang === 'en' ? 'Manage your platform' : 'إدارة منصتك'}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
                className="flex items-center gap-1.5 px-3 py-2 rounded-full border border-border text-xs font-bold text-muted-foreground hover:text-primary hover:border-primary transition-all"
              >
                <Icon name="GlobeAltIcon" size={14} />
                {lang === 'en' ? 'عربي' : 'English'}
              </button>
              <button className="relative p-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-secondary transition-all">
                <Icon name="BellIcon" size={20} />
                <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-danger border border-white" />
              </button>
              <div className="w-9 h-9 rounded-full bg-accent/10 border-2 border-accent/30 flex items-center justify-center">
                <Icon name="ShieldCheckIcon" size={20} className="text-accent" />
              </div>
            </div>
          </header>

          {/* Content */}
          <main className="px-4 sm:px-6 py-6 space-y-6">

            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat, i) => (
                <div key={i} className="bg-card rounded-2xl p-5 border border-border shadow-sm">
                  <div className="flex items-center justify-between mb-3">
                    <div className={`w-10 h-10 rounded-xl ${stat.color} flex items-center justify-center`}>
                      <Icon name={stat.icon as 'UsersIcon'} size={20} />
                    </div>
                    <span className={`text-xs font-bold px-2 py-1 rounded-full ${stat.up ? 'text-success bg-success/10' : 'text-danger bg-danger/10'}`}>
                      {stat.change}
                    </span>
                  </div>
                  <p className="text-2xl font-extrabold text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* System Health + Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* System Health */}
              <div className="bg-card rounded-2xl p-5 border border-border shadow-sm">
                <h3 className="font-bold text-foreground flex items-center gap-2 mb-4">
                  <Icon name="ServerIcon" size={16} className="text-success" />
                  {text.systemHealth}
                </h3>
                <div className="space-y-3">
                  {[
                    { label: text.serverStatus, status: text.operational, color: 'text-success bg-success/10' },
                    { label: text.apiStatus, status: text.operational, color: 'text-success bg-success/10' },
                    { label: text.dbStatus, status: text.operational, color: 'text-success bg-success/10' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-secondary/40">
                      <span className="text-sm font-semibold text-foreground">{item.label}</span>
                      <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${item.color} flex items-center gap-1`}>
                        <span className="w-1.5 h-1.5 rounded-full bg-success inline-block" />
                        {item.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-card rounded-2xl p-5 border border-border shadow-sm">
                <h3 className="font-bold text-foreground flex items-center gap-2 mb-4">
                  <Icon name="BoltIcon" size={16} className="text-accent" variant="solid" />
                  {text.quickActions}
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: text.sendNotification, icon: 'BellIcon', color: 'text-primary bg-primary/10 hover:bg-primary/20' },
                    { label: text.generateReport, icon: 'DocumentChartBarIcon', color: 'text-success bg-success/10 hover:bg-success/20' },
                    { label: text.backupData, icon: 'CloudArrowUpIcon', color: 'text-indigo-600 bg-indigo-100 hover:bg-indigo-200' },
                    { label: text.systemSettings, icon: 'Cog6ToothIcon', color: 'text-amber-600 bg-amber-100 hover:bg-amber-200' },
                  ].map((action, i) => (
                    <button key={i} className={`flex flex-col items-center gap-2 p-4 rounded-xl ${action.color} transition-all duration-200 text-center`}>
                      <Icon name={action.icon as 'BellIcon'} size={22} />
                      <span className="text-xs font-bold leading-tight">{action.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Revenue Breakdown */}
            <div className="bg-card rounded-2xl p-5 border border-border shadow-sm">
              <div className="flex items-center justify-between mb-5">
                <h3 className="font-bold text-foreground flex items-center gap-2">
                  <Icon name="ChartPieIcon" size={16} className="text-primary" />
                  {text.revenueBreakdown}
                </h3>
                <span className="text-xs text-muted-foreground">{lang === 'en' ? 'Total: EGP 4.2M' : 'الإجمالي: 4.2 مليون ج.م'}</span>
              </div>
              <div className="space-y-3">
                {revenueBreakdown.map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="font-semibold text-foreground">{item.label}</span>
                      <span className="font-bold text-foreground">{item.amount} <span className="text-muted-foreground font-normal">({item.pct}%)</span></span>
                    </div>
                    <div className="h-2.5 bg-input rounded-full overflow-hidden">
                      <div className={`h-full ${item.color} rounded-full transition-all duration-700`} style={{ width: `${item.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Top Destinations */}
            <div className="bg-card rounded-2xl p-5 border border-border shadow-sm">
              <div className="flex items-center justify-between mb-5">
                <h3 className="font-bold text-foreground flex items-center gap-2">
                  <Icon name="MapPinIcon" size={16} className="text-accent" variant="solid" />
                  {text.topDestinations}
                </h3>
                <button className="text-xs text-primary font-semibold hover:underline">{text.viewAll}</button>
              </div>
              <div className="space-y-3">
                {topDests.map((dest, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <span className="text-2xl w-8 text-center">{dest.flag}</span>
                    <div className="flex-1">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="font-semibold text-foreground">{dest.name}</span>
                        <span className="text-muted-foreground">{dest.bookings.toLocaleString()} {lang === 'en' ? 'bookings' : 'حجز'}</span>
                      </div>
                      <div className="h-2 bg-input rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-primary to-sky-blue rounded-full" style={{ width: `${dest.pct}%` }} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Users Table */}
            <div className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden">
              <div className="flex items-center justify-between p-5 border-b border-border">
                <h3 className="font-bold text-foreground flex items-center gap-2">
                  <Icon name="UsersIcon" size={16} className="text-primary" />
                  {text.manageUsers}
                </h3>
                <div className="flex items-center gap-3">
                  <div className="relative hidden sm:block">
                    <Icon name="MagnifyingGlassIcon" size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                    <input
                      type="text"
                      placeholder={text.search}
                      className="pl-9 pr-4 py-2 rounded-xl border border-border text-xs bg-background text-foreground outline-none focus:border-primary transition-all w-40"
                    />
                  </div>
                  <button className="btn-primary px-4 py-2 rounded-xl text-xs font-bold text-white flex items-center gap-1.5">
                    <Icon name="PlusIcon" size={14} />
                    {text.addNew}
                  </button>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-secondary/40">
                    <tr>
                      {[text.name, text.email, text.role, text.joined, text.status, text.actions].map((h, i) => (
                        <th key={i} className="px-4 py-3 text-left text-xs font-bold text-muted-foreground uppercase tracking-wider">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {users.map((user, i) => (
                      <tr key={i} className="hover:bg-secondary/20 transition-colors">
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                              <Icon name="UserCircleIcon" size={18} className="text-primary" />
                            </div>
                            <span className="text-sm font-semibold text-foreground">{user.name}</span>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-sm text-muted-foreground">{user.email}</td>
                        <td className="px-4 py-3">
                          <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${user.role === text.admin ? 'text-accent bg-accent/10' : 'text-primary bg-primary/10'}`}>
                            {user.role}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-sm text-muted-foreground">{user.joined}</td>
                        <td className="px-4 py-3">
                          <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${user.statusColor}`}>{user.status}</span>
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-2">
                            <button className="p-1.5 rounded-lg text-primary hover:bg-primary/10 transition-colors">
                              <Icon name="PencilSquareIcon" size={14} />
                            </button>
                            <button className="p-1.5 rounded-lg text-danger hover:bg-danger/10 transition-colors">
                              <Icon name="TrashIcon" size={14} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Bookings Table */}
            <div className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden">
              <div className="flex items-center justify-between p-5 border-b border-border">
                <h3 className="font-bold text-foreground flex items-center gap-2">
                  <Icon name="TicketIcon" size={16} className="text-accent" />
                  {text.recentBookings}
                </h3>
                <div className="flex items-center gap-3">
                  <button className="flex items-center gap-1.5 px-4 py-2 rounded-xl border border-border text-xs font-semibold text-muted-foreground hover:text-primary hover:border-primary transition-all">
                    <Icon name="ArrowDownTrayIcon" size={14} />
                    {text.export}
                  </button>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-secondary/40">
                    <tr>
                      {['ID', text.name, text.destination, text.type, text.amount, text.date, text.status, text.actions].map((h, i) => (
                        <th key={i} className="px-4 py-3 text-left text-xs font-bold text-muted-foreground uppercase tracking-wider">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {bookings.map((booking, i) => (
                      <tr key={i} className="hover:bg-secondary/20 transition-colors">
                        <td className="px-4 py-3 text-xs font-mono text-muted-foreground">{booking.id}</td>
                        <td className="px-4 py-3 text-sm font-semibold text-foreground">{booking.user}</td>
                        <td className="px-4 py-3 text-sm text-muted-foreground">{booking.destination}</td>
                        <td className="px-4 py-3">
                          <span className="text-xs font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-full">{booking.type}</span>
                        </td>
                        <td className="px-4 py-3 text-sm font-bold text-foreground">{booking.amount}</td>
                        <td className="px-4 py-3 text-sm text-muted-foreground">{booking.date}</td>
                        <td className="px-4 py-3">
                          <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${booking.statusColor}`}>{booking.status}</span>
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-2">
                            <button className="p-1.5 rounded-lg text-primary hover:bg-primary/10 transition-colors">
                              <Icon name="EyeIcon" size={14} />
                            </button>
                            <button className="p-1.5 rounded-lg text-danger hover:bg-danger/10 transition-colors">
                              <Icon name="XMarkIcon" size={14} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </main>
        </div>
      </div>
    </div>
  );
}
