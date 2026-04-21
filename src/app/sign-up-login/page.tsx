'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

type Mode = 'login' | 'signup';
type Role = 'tourist' | 'admin';
type Lang = 'en' | 'ar';

const ADMIN_SECRET = 'VOIAGO_ADMIN_2026';

const t = {
  en: {
    brand: 'Voiago',
    tagline: 'Your Smart Travel Companion',
    loginTab: 'Sign In',
    signupTab: 'Create Account',
    roleTitle: 'I am a...',
    tourist: 'Tourist',
    touristDesc: 'Plan trips & book services',
    admin: 'Admin',
    adminDesc: 'Manage platform & data',
    adminCode: 'Admin Secret Code',
    adminCodePlaceholder: 'Enter admin code',
    adminCodeError: 'Invalid admin code. Access denied.',
    nameLabel: 'Full Name',
    namePlaceholder: 'Your full name',
    emailLabel: 'Email Address',
    emailPlaceholder: 'your@email.com',
    passwordLabel: 'Password',
    passwordPlaceholder: '••••••••',
    confirmPasswordLabel: 'Confirm Password',
    confirmPasswordPlaceholder: '••••••••',
    currencyLabel: 'Preferred Currency',
    langLabel: 'Preferred Language',
    signupBtn: 'Create Account',
    loginBtn: 'Sign In',
    forgotPassword: 'Forgot password?',
    noAccount: "Don\'t have an account?",
    hasAccount: 'Already have an account?',
    switchToSignup: 'Sign up',
    switchToLogin: 'Sign in',
    orContinue: 'or continue with',
    termsNote: 'By creating an account, you agree to our',
    terms: 'Terms of Service',
    and: 'and',
    privacy: 'Privacy Policy',
    currencies: ['EGP', 'USD', 'EUR', 'SAR', 'AED', 'GBP', 'TRY'],
    languages: ['English', 'Arabic'],
    passwordMismatch: 'Passwords do not match.',
    successTourist: 'Welcome! Redirecting to your dashboard...',
    successAdmin: 'Admin access granted. Redirecting...',
    imageAlt: 'Beautiful travel destination with scenic mountain landscape and clear blue sky',
    welcomeBack: 'Welcome back!',
    welcomeNew: 'Start your journey',
    heroSub: 'Millions of travelers trust Voiago for every adventure.',
  },
  ar: {
    brand: 'Voiago',
    tagline: 'رفيق سفرك الذكي',
    loginTab: 'تسجيل الدخول',
    signupTab: 'إنشاء حساب',
    roleTitle: 'أنا...',
    tourist: 'سائح',
    touristDesc: 'خطط الرحلات واحجز الخدمات',
    admin: 'مشرف',
    adminDesc: 'إدارة المنصة والبيانات',
    adminCode: 'رمز المشرف السري',
    adminCodePlaceholder: 'أدخل رمز المشرف',
    adminCodeError: 'رمز المشرف غير صحيح. تم رفض الوصول.',
    nameLabel: 'الاسم الكامل',
    namePlaceholder: 'اسمك الكامل',
    emailLabel: 'البريد الإلكتروني',
    emailPlaceholder: 'بريدك@الإلكتروني.com',
    passwordLabel: 'كلمة المرور',
    passwordPlaceholder: '••••••••',
    confirmPasswordLabel: 'تأكيد كلمة المرور',
    confirmPasswordPlaceholder: '••••••••',
    currencyLabel: 'العملة المفضلة',
    langLabel: 'اللغة المفضلة',
    signupBtn: 'إنشاء الحساب',
    loginBtn: 'تسجيل الدخول',
    forgotPassword: 'نسيت كلمة المرور؟',
    noAccount: 'ليس لديك حساب؟',
    hasAccount: 'لديك حساب بالفعل؟',
    switchToSignup: 'سجل الآن',
    switchToLogin: 'سجل دخولاً',
    orContinue: 'أو تابع مع',
    termsNote: 'بإنشاء حساب، أنت توافق على',
    terms: 'شروط الخدمة',
    and: 'و',
    privacy: 'سياسة الخصوصية',
    currencies: ['ج.م', 'USD', 'EUR', 'SAR', 'AED', 'GBP', 'TRY'],
    languages: ['العربية', 'الإنجليزية'],
    passwordMismatch: 'كلمات المرور غير متطابقة.',
    successTourist: 'مرحباً! جارٍ التوجيه إلى لوحة التحكم...',
    successAdmin: 'تم منح صلاحية المشرف. جارٍ التوجيه...',
    imageAlt: 'وجهة سفر جميلة بمنظر جبلي خلاب وسماء زرقاء صافية',
    welcomeBack: 'مرحباً بعودتك!',
    welcomeNew: 'ابدأ رحلتك',
    heroSub: 'الملايين يثقون بـ Voiago في كل مغامرة.',
  },
};

export default function SignUpLoginPage() {
  const [lang, setLang] = useState<Lang>('en');
  const [mode, setMode] = useState<Mode>('signup');
  const [role, setRole] = useState<Role>('tourist');
  const [adminCode, setAdminCode] = useState('');
  const [adminCodeError, setAdminCodeError] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [currency, setCurrency] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const text = t[lang];
  const isRTL = lang === 'ar';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAdminCodeError(false);
    setPasswordError(false);

    if (mode === 'signup') {
      if (password !== confirmPassword) {
        setPasswordError(true);
        return;
      }
      if (role === 'admin' && adminCode !== ADMIN_SECRET) {
        setAdminCodeError(true);
        return;
      }
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setTimeout(() => {
        if (mode === 'login') {
          window.location.href = '/tourist-dashboard';
        } else if (role === 'admin') {
          window.location.href = '/admin-dashboard';
        } else {
          window.location.href = '/tourist-dashboard';
        }
      }, 1500);
    }, 1200);
  };

  return (
    <div className="min-h-screen flex" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Left: Image Panel */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <AppImage
          src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1200&q=85&fit=crop"
          alt={text.imageAlt}
          fill
          priority
          className="object-cover"
          sizes="50vw"
        />
        {/* Dark scrim for text */}
        <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/90 via-deep-navy/40 to-deep-navy/20" />

        {/* Content over image */}
        <div className="relative z-10 flex flex-col justify-between p-12 w-full">
          {/* Logo */}
          <Link href="/homepage" className="flex items-center gap-3">
            <AppLogo
              src="/assets/images/WhatsApp_Image_2026-04-19_at_11.06.21_AM-1776720747008.jpeg"
              size={44}
            />
            <div>
              <span className="font-extrabold text-2xl text-white block leading-none">Voiago</span>
              <span className="text-white/60 text-xs">{text.tagline}</span>
            </div>
          </Link>

          {/* Bottom text */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex -space-x-2">
                {[
                  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&q=80',
                  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=60&q=80',
                  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&q=80',
                ].map((src, i) => (
                  <div key={i} className="w-9 h-9 rounded-full overflow-hidden border-2 border-white/30">
                    <AppImage
                      src={src}
                      alt={`Traveler profile photo ${i + 1}`}
                      width={36}
                      height={36}
                      className="object-cover w-full h-full"
                    />
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-1">
                {[1,2,3,4,5].map(s => (
                  <Icon key={s} name="StarIcon" size={12} className="text-gold" variant="solid" />
                ))}
              </div>
              <span className="text-white/70 text-sm font-medium">2M+ travelers</span>
            </div>
            <h2 className="text-3xl font-extrabold text-white mb-2">
              {mode === 'login' ? text.welcomeBack : text.welcomeNew}
            </h2>
            <p className="text-white/60 text-base leading-relaxed max-w-sm">
              {text.heroSub}
            </p>
          </div>
        </div>
      </div>

      {/* Right: Form Panel */}
      <div className="w-full lg:w-1/2 flex flex-col bg-background overflow-y-auto">
        {/* Top bar */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border">
          {/* Mobile Logo */}
          <Link href="/homepage" className="flex items-center gap-2 lg:hidden">
            <AppLogo
              src="/assets/images/WhatsApp_Image_2026-04-19_at_11.06.21_AM-1776720747008.jpeg"
              size={32}
            />
            <span className="font-extrabold text-lg text-foreground">Voiago</span>
          </Link>
          <div className="hidden lg:block" />

          <div className="flex items-center gap-3">
            {/* Language Toggle */}
            <button
              onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
              className="flex items-center gap-1.5 px-3 py-2 rounded-full border border-border text-xs font-bold text-muted-foreground hover:text-primary hover:border-primary transition-all"
            >
              <Icon name="GlobeAltIcon" size={14} />
              {lang === 'en' ? 'عربي' : 'English'}
            </button>
            <Link
              href="/homepage"
              className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              <Icon name="ArrowLeftIcon" size={14} />
              {lang === 'en' ? 'Back to Home' : 'العودة للرئيسية'}
            </Link>
          </div>
        </div>

        {/* Form Content */}
        <div className="flex-1 flex items-start justify-center px-6 py-10">
          <div className="w-full max-w-md">
            {/* Mode Tabs */}
            <div className="flex bg-input rounded-2xl p-1 mb-8 border border-border">
              {(['login', 'signup'] as Mode[]).map((m) => (
                <button
                  key={m}
                  onClick={() => { setMode(m); setAdminCodeError(false); setPasswordError(false); setSuccess(false); }}
                  className={`flex-1 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                    mode === m
                      ? 'bg-white text-foreground shadow-sm'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {m === 'login' ? text.loginTab : text.signupTab}
                </button>
              ))}
            </div>

            {/* Success state */}
            {success && (
              <div className="mb-6 p-4 rounded-2xl bg-success/10 border border-success/30 flex items-center gap-3">
                <Icon name="CheckCircleIcon" size={22} className="text-success" variant="solid" />
                <p className="text-success text-sm font-semibold">
                  {role === 'admin' ? text.successAdmin : text.successTourist}
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Role Selection (signup only) */}
              {mode === 'signup' && (
                <div>
                  <p className="text-sm font-semibold text-foreground mb-3">{text.roleTitle}</p>
                  <div className="grid grid-cols-2 gap-3">
                    {(['tourist', 'admin'] as Role[]).map((r) => (
                      <button
                        type="button"
                        key={r}
                        onClick={() => { setRole(r); setAdminCodeError(false); }}
                        className={`p-4 rounded-2xl border-2 flex flex-col items-center gap-2 transition-all duration-300 ${
                          role === r
                            ? 'border-primary bg-secondary shadow-md'
                            : 'border-border bg-card hover:border-primary/40'
                        }`}
                      >
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                          role === r ? 'bg-primary' : 'bg-input'
                        }`}>
                          <Icon
                            name={r === 'tourist' ? 'UserIcon' : 'ShieldCheckIcon'}
                            size={20}
                            className={role === r ? 'text-white' : 'text-muted-foreground'}
                          />
                        </div>
                        <div className="text-center">
                          <p className={`text-sm font-bold ${role === r ? 'text-primary' : 'text-foreground'}`}>
                            {r === 'tourist' ? text.tourist : text.admin}
                          </p>
                          <p className="text-xs text-muted-foreground leading-tight mt-0.5">
                            {r === 'tourist' ? text.touristDesc : text.adminDesc}
                          </p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Admin Code (signup + admin role) */}
              {mode === 'signup' && role === 'admin' && (
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">{text.adminCode}</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                      <Icon name="KeyIcon" size={16} className="text-muted-foreground" />
                    </div>
                    <input
                      type="password"
                      value={adminCode}
                      onChange={(e) => { setAdminCode(e.target.value); setAdminCodeError(false); }}
                      placeholder={text.adminCodePlaceholder}
                      className={`w-full pl-11 pr-4 py-3.5 rounded-xl border text-sm font-medium bg-card text-foreground placeholder:text-muted-foreground outline-none transition-all ${
                        adminCodeError ? 'border-danger focus:border-danger bg-red-50' : 'border-border focus:border-primary focus:ring-2 focus:ring-primary/20'
                      }`}
                      required
                    />
                  </div>
                  {adminCodeError && (
                    <p className="mt-2 text-danger text-xs font-semibold flex items-center gap-1.5">
                      <Icon name="ExclamationCircleIcon" size={14} />
                      {text.adminCodeError}
                    </p>
                  )}
                </div>
              )}

              {/* Full Name (signup only) */}
              {mode === 'signup' && (
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">{text.nameLabel}</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                      <Icon name="UserIcon" size={16} className="text-muted-foreground" />
                    </div>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={text.namePlaceholder}
                      className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 text-sm font-medium bg-card text-foreground placeholder:text-muted-foreground outline-none transition-all"
                      required
                    />
                  </div>
                </div>
              )}

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">{text.emailLabel}</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                    <Icon name="EnvelopeIcon" size={16} className="text-muted-foreground" />
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={text.emailPlaceholder}
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 text-sm font-medium bg-card text-foreground placeholder:text-muted-foreground outline-none transition-all"
                    required
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-semibold text-foreground">{text.passwordLabel}</label>
                  {mode === 'login' && (
                    <button type="button" className="text-xs text-primary font-semibold hover:underline">
                      {text.forgotPassword}
                    </button>
                  )}
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                    <Icon name="LockClosedIcon" size={16} className="text-muted-foreground" />
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder={text.passwordPlaceholder}
                    className="w-full pl-11 pr-12 py-3.5 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 text-sm font-medium bg-card text-foreground placeholder:text-muted-foreground outline-none transition-all"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-4 flex items-center text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Icon name={showPassword ? 'EyeSlashIcon' : 'EyeIcon'} size={16} />
                  </button>
                </div>
              </div>

              {/* Confirm Password (signup only) */}
              {mode === 'signup' && (
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">{text.confirmPasswordLabel}</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                      <Icon name="LockClosedIcon" size={16} className="text-muted-foreground" />
                    </div>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={confirmPassword}
                      onChange={(e) => { setConfirmPassword(e.target.value); setPasswordError(false); }}
                      placeholder={text.confirmPasswordPlaceholder}
                      className={`w-full pl-11 pr-4 py-3.5 rounded-xl border text-sm font-medium bg-card text-foreground placeholder:text-muted-foreground outline-none transition-all ${
                        passwordError ? 'border-danger focus:border-danger bg-red-50' : 'border-border focus:border-primary focus:ring-2 focus:ring-primary/20'
                      }`}
                      required
                    />
                  </div>
                  {passwordError && (
                    <p className="mt-2 text-danger text-xs font-semibold flex items-center gap-1.5">
                      <Icon name="ExclamationCircleIcon" size={14} />
                      {text.passwordMismatch}
                    </p>
                  )}
                </div>
              )}

              {/* Currency + Language (signup only) */}
              {mode === 'signup' && (
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">{text.currencyLabel}</label>
                    <div className="relative">
                      <select
                        value={currency}
                        onChange={(e) => setCurrency(Number(e.target.value))}
                        className="w-full px-4 py-3.5 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 text-sm font-medium bg-card text-foreground outline-none transition-all appearance-none cursor-pointer"
                      >
                        {text.currencies.map((c, i) => (
                          <option key={i} value={i}>{c}</option>
                        ))}
                      </select>
                      <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                        <Icon name="ChevronDownIcon" size={14} className="text-muted-foreground" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">{text.langLabel}</label>
                    <div className="relative">
                      <select
                        defaultValue={lang === 'en' ? 0 : 1}
                        className="w-full px-4 py-3.5 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 text-sm font-medium bg-card text-foreground outline-none transition-all appearance-none cursor-pointer"
                      >
                        {text.languages.map((l, i) => (
                          <option key={i} value={i}>{l}</option>
                        ))}
                      </select>
                      <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                        <Icon name="ChevronDownIcon" size={14} className="text-muted-foreground" />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading || success}
                className="w-full btn-primary py-4 rounded-xl text-sm font-bold text-white flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed mt-2"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    {lang === 'en' ? 'Processing...' : 'جارٍ المعالجة...'}
                  </>
                ) : success ? (
                  <>
                    <Icon name="CheckCircleIcon" size={18} variant="solid" />
                    {lang === 'en' ? 'Success!' : 'تم بنجاح!'}
                  </>
                ) : (
                  <>
                    {mode === 'signup' ? text.signupBtn : text.loginBtn}
                    <Icon name="ArrowRightIcon" size={16} />
                  </>
                )}
              </button>

              {/* Terms (signup) */}
              {mode === 'signup' && (
                <p className="text-xs text-muted-foreground text-center leading-relaxed">
                  {text.termsNote}{' '}
                  <span className="text-primary font-semibold cursor-pointer hover:underline">{text.terms}</span>
                  {' '}{text.and}{' '}
                  <span className="text-primary font-semibold cursor-pointer hover:underline">{text.privacy}</span>
                </p>
              )}

              {/* Switch Mode */}
              <p className="text-sm text-muted-foreground text-center">
                {mode === 'signup' ? text.hasAccount : text.noAccount}{' '}
                <button
                  type="button"
                  onClick={() => { setMode(mode === 'signup' ? 'login' : 'signup'); setAdminCodeError(false); setPasswordError(false); setSuccess(false); }}
                  className="text-primary font-bold hover:underline"
                >
                  {mode === 'signup' ? text.switchToLogin : text.switchToSignup}
                </button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}