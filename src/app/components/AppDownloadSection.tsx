'use client';

import React from 'react';
import AppImage from '@/components/ui/AppImage';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';

interface AppDownloadSectionProps {
  lang?: 'en' | 'ar';
}

const t = {
  en: {
    badge: 'Download Voiago',
    headline: 'Travel Smarter,\nRight From Your Phone.',
    sub: 'Get the full Voiago experience on your mobile device. Plan, book, and manage every aspect of your journey from anywhere.',
    features: [
    { icon: 'BoltIcon', text: 'Book in under 60 seconds' },
    { icon: 'ShieldCheckIcon', text: 'Bank-grade security' },
    { icon: 'WifiIcon', text: 'Works offline too' },
    { icon: 'BellIcon', text: 'Real-time notifications' }],

    qrTitle: 'Scan to Download',
    qrSub: 'Point your camera at the QR code to download Voiago instantly',
    downloadDirect: 'Or download directly:',
    downloadBtn: 'Download App',
    stats: [
    { val: '4.9/5', label: 'Rating' },
    { val: '2M+', label: 'Downloads' },
    { val: '50MB', label: 'Size' }]

  },
  ar: {
    badge: 'حمل Voiago',
    headline: 'سافر بذكاء،\nمن هاتفك مباشرة.',
    sub: 'احصل على تجربة Voiago الكاملة على جهازك المحمول. خطط واحجز وأدر كل جانب من رحلتك من أي مكان.',
    features: [
    { icon: 'BoltIcon', text: 'احجز في أقل من 60 ثانية' },
    { icon: 'ShieldCheckIcon', text: 'أمان بمستوى البنوك' },
    { icon: 'WifiIcon', text: 'يعمل بدون إنترنت أيضاً' },
    { icon: 'BellIcon', text: 'إشعارات فورية' }],

    qrTitle: 'امسح للتحميل',
    qrSub: 'وجّه الكاميرا نحو رمز QR لتحميل Voiago فوراً',
    downloadDirect: 'أو حمّل مباشرة:',
    downloadBtn: 'حمّل التطبيق',
    stats: [
    { val: '4.9/5', label: 'التقييم' },
    { val: '+2م', label: 'تحميل' },
    { val: '50MB', label: 'الحجم' }]

  }
};

export default function AppDownloadSection({ lang = 'en' }: AppDownloadSectionProps) {
  const text = t[lang];
  const isRTL = lang === 'ar';

  return (
    <section
      className="py-24 bg-deep-navy relative overflow-hidden"
      dir={isRTL ? 'rtl' : 'ltr'}>
      
      {/* Background glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[140px] translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/15 rounded-full blur-[120px] -translate-x-1/4 translate-y-1/4" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold tracking-widest uppercase mb-6">
              <Icon name="DevicePhoneMobileIcon" size={14} />
              {text.badge}
            </div>

            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 leading-tight whitespace-pre-line">
              {text.headline}
            </h2>

            <p className="text-white/60 text-base leading-relaxed mb-8">
              {text.sub}
            </p>

            {/* Features */}
            <ul className="space-y-4 mb-10">
              {text.features.map((f, i) =>
              <li key={i} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center shrink-0">
                    <Icon name={f.icon as 'BoltIcon'} size={16} className="text-primary" />
                  </div>
                  <span className="text-white/80 text-sm font-medium">{f.text}</span>
                </li>
              )}
            </ul>

            {/* Stats */}
            <div className="flex items-center gap-8 pt-6 border-t border-white/10">
              {text.stats.map((s, i) =>
              <div key={i}>
                  <p className="text-2xl font-extrabold text-white">{s.val}</p>
                  <p className="text-white/40 text-xs">{s.label}</p>
                </div>
              )}
            </div>
          </div>

          {/* Right: Phone + QR */}
          <div className="flex flex-col lg:flex-row items-center gap-8 justify-center">
            {/* Phone mockup */}
            <div className="relative">
              <div className="w-[260px] h-[520px] bg-[#0c0a09] rounded-[48px] border-[6px] border-[#1a1a2e] shadow-2xl overflow-hidden relative">
                {/* Dynamic Island */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-7 bg-black rounded-b-2xl z-20" />

                {/* Screen content */}
                <div className="w-full h-full bg-gradient-to-b from-[#0A1628] to-[#1B4FD8] relative overflow-hidden flex flex-col">
                  {/* App UI mockup */}
                  <div className="relative z-10 p-5 pt-12 flex flex-col h-full gap-3">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <AppLogo
                          src="/assets/images/WhatsApp_Image_2026-04-19_at_11.06.21_AM-1776720747008.jpeg"
                          size={28} />
                        
                        <span className="text-white font-bold text-sm">Voiago</span>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                        <Icon name="BellIcon" size={14} className="text-white" />
                      </div>
                    </div>

                    {/* Search */}
                    <div className="bg-white/10 backdrop-blur rounded-xl p-3 flex items-center gap-2">
                      <Icon name="MagnifyingGlassIcon" size={14} className="text-white/60" />
                      <span className="text-white/60 text-xs">Where to next?</span>
                    </div>

                    {/* Trip card */}
                    <div className="bg-white/10 backdrop-blur rounded-xl p-3 flex gap-3">
                      <div className="w-12 h-12 rounded-lg overflow-hidden shrink-0">
                        <AppImage
                          src="https://images.unsplash.com/photo-1516094113886-fe4eaabaf43c"
                          alt="Dubai skyline destination card"
                          width={48}
                          height={48}
                          className="object-cover w-full h-full" />
                        
                      </div>
                      <div>
                        <p className="text-white text-xs font-bold">Dubai, UAE</p>
                        <p className="text-white/50 text-xs">May 15 – May 22</p>
                        <p className="text-accent text-xs font-bold mt-1">EGP 8,900</p>
                      </div>
                    </div>

                    {/* Quick actions */}
                    <div className="grid grid-cols-4 gap-2">
                      {['✈️', '🏨', '🚗', '🗺️'].map((emoji, i) =>
                      <div key={i} className="bg-white/10 rounded-xl p-2 text-center">
                          <span className="text-lg">{emoji}</span>
                        </div>
                      )}
                    </div>

                    {/* Budget tracker */}
                    <div className="bg-accent/20 rounded-xl p-3">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white text-xs font-bold">Budget</span>
                        <span className="text-accent text-xs font-bold">EGP 12,000</span>
                      </div>
                      <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full w-2/3 bg-accent rounded-full" />
                      </div>
                      <p className="text-white/50 text-xs mt-1">EGP 8,000 spent</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl px-4 py-3 shadow-xl flex items-center gap-2 animate-float">
                <div className="w-8 h-8 rounded-lg bg-success/20 flex items-center justify-center">
                  <Icon name="CheckCircleIcon" size={18} className="text-success" variant="solid" />
                </div>
                <div>
                  <p className="text-foreground text-xs font-bold">Booking Confirmed!</p>
                  <p className="text-muted-foreground text-xs">Dubai Trip</p>
                </div>
              </div>
            </div>

            {/* QR Code section */}
            <div className="flex flex-col items-center gap-4">
              <div className="bg-white p-4 rounded-2xl shadow-xl">
                {/* QR Code SVG */}
                <svg width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="140" height="140" fill="white" />
                  {/* QR pattern - simplified visual */}
                  <rect x="10" y="10" width="50" height="50" rx="4" fill="#1B4FD8" />
                  <rect x="18" y="18" width="34" height="34" rx="2" fill="white" />
                  <rect x="24" y="24" width="22" height="22" rx="1" fill="#1B4FD8" />
                  <rect x="80" y="10" width="50" height="50" rx="4" fill="#1B4FD8" />
                  <rect x="88" y="18" width="34" height="34" rx="2" fill="white" />
                  <rect x="94" y="24" width="22" height="22" rx="1" fill="#1B4FD8" />
                  <rect x="10" y="80" width="50" height="50" rx="4" fill="#1B4FD8" />
                  <rect x="18" y="88" width="34" height="34" rx="2" fill="white" />
                  <rect x="24" y="94" width="22" height="22" rx="1" fill="#1B4FD8" />
                  {/* Data modules */}
                  {[70, 78, 86, 94, 102, 110].map((x, i) =>
                  [70, 78, 86, 94, 102, 110].map((y, j) =>
                  (i + j) % 2 === 0 && <rect key={`${i}-${j}`} x={x} y={y} width="6" height="6" fill="#1B4FD8" />
                  )
                  )}
                  {[10, 18, 26, 34, 42, 50, 58].map((x, i) =>
                  [70, 78, 86, 94, 102].map((y, j) =>
                  (i * 3 + j) % 3 !== 0 && <rect key={`d-${i}-${j}`} x={x} y={y} width="6" height="6" fill="#1B4FD8" />
                  )
                  )}
                  {/* Center logo area */}
                  <rect x="58" y="58" width="24" height="24" rx="4" fill="white" />
                  <rect x="62" y="62" width="16" height="16" rx="3" fill="#1B4FD8" />
                  <rect x="66" y="66" width="8" height="8" rx="1.5" fill="white" />
                </svg>
              </div>

              <div className="text-center">
                <p className="text-white font-bold text-sm">{text.qrTitle}</p>
                <p className="text-white/50 text-xs max-w-[160px] leading-relaxed mt-1">{text.qrSub}</p>
              </div>

              <button className="btn-accent px-6 py-3 rounded-xl text-sm font-bold text-white flex items-center gap-2">
                <Icon name="ArrowDownTrayIcon" size={16} />
                {text.downloadBtn}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>);

}