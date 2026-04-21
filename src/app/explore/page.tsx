'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

type Lang = 'en' | 'ar';

const t = {
  en: {
    hero: 'Explore the World',
    heroSub: 'Discover amazing destinations, compare prices, and plan your perfect trip',
    searchPlaceholder: 'Search destinations, cities, countries...',
    searchBtn: 'Search',
    filters: 'Filters',
    allDests: 'All Destinations',
    sortBy: 'Sort by',
    priceAsc: 'Price: Low to High',
    priceDesc: 'Price: High to Low',
    rating: 'Top Rated',
    popular: 'Most Popular',
    categories: ['All', 'Egypt', 'Middle East', 'Europe', 'Asia', 'Hajj & Umrah', 'Beach', 'Adventure', 'Cultural'],
    from: 'From',
    perPerson: 'per person',
    nights: 'nights',
    bookNow: 'Book Now',
    viewDetails: 'View Details',
    rating_label: 'Rating',
    reviews: 'reviews',
    highlights: 'Highlights',
    bestTime: 'Best Time',
    currency: 'EGP',
    noResults: 'No destinations found. Try different filters.',
    featured: 'Featured',
    popular_badge: 'Popular',
    hajj_badge: 'Hajj & Umrah',
    new_badge: 'New',
    backHome: '← Back to Home',
    showing: 'Showing',
    destinations: 'destinations'
  },
  ar: {
    hero: 'استكشف العالم',
    heroSub: 'اكتشف وجهات رائعة، قارن الأسعار، وخطط لرحلتك المثالية',
    searchPlaceholder: 'ابحث عن وجهات، مدن، دول...',
    searchBtn: 'بحث',
    filters: 'تصفية',
    allDests: 'جميع الوجهات',
    sortBy: 'ترتيب حسب',
    priceAsc: 'السعر: من الأقل',
    priceDesc: 'السعر: من الأعلى',
    rating: 'الأعلى تقييماً',
    popular: 'الأكثر شعبية',
    categories: ['الكل', 'مصر', 'الشرق الأوسط', 'أوروبا', 'آسيا', 'حج وعمرة', 'شاطئ', 'مغامرة', 'ثقافي'],
    from: 'من',
    perPerson: 'للشخص',
    nights: 'ليالي',
    bookNow: 'احجز الآن',
    viewDetails: 'عرض التفاصيل',
    rating_label: 'التقييم',
    reviews: 'تقييم',
    highlights: 'أبرز المعالم',
    bestTime: 'أفضل وقت للزيارة',
    currency: 'ج.م',
    noResults: 'لا توجد وجهات. جرب فلاتر مختلفة.',
    featured: 'مميز',
    popular_badge: 'شائع',
    hajj_badge: 'حج وعمرة',
    new_badge: 'جديد',
    backHome: '→ العودة للرئيسية',
    showing: 'عرض',
    destinations: 'وجهة'
  }
};

const DESTINATIONS = [
{
  id: 1,
  name: { en: 'Sharm El-Sheikh', ar: 'شرم الشيخ' },
  country: { en: 'Egypt', ar: 'مصر' },
  category: 'Egypt',
  price: 2500,
  rating: 4.8,
  reviews: 3420,
  nights: 5,
  flag: '🇪🇬',
  badge: 'popular',
  img: "https://img.rocket.new/generatedImages/rocket_gen_img_174a54c31-1772194399408.png",
  alt: 'Crystal clear turquoise waters and coral reefs at Sharm El-Sheikh beach resort',
  highlights: { en: ['Red Sea Diving', 'Naama Bay', 'Ras Mohammed Park'], ar: ['غوص البحر الأحمر', 'خليج نعمة', 'محمية رأس محمد'] },
  bestTime: { en: 'Oct – Apr', ar: 'أكتوبر – أبريل' }
},
{
  id: 2,
  name: { en: 'Dubai', ar: 'دبي' },
  country: { en: 'UAE', ar: 'الإمارات' },
  category: 'Middle East',
  price: 8900,
  rating: 4.9,
  reviews: 8750,
  nights: 7,
  flag: '🇦🇪',
  badge: 'featured',
  img: "https://images.unsplash.com/photo-1725564053095-1a07b2bc89a3",
  alt: 'Dubai skyline with Burj Khalifa and modern skyscrapers at sunset',
  highlights: { en: ['Burj Khalifa', 'Dubai Mall', 'Desert Safari'], ar: ['برج خليفة', 'دبي مول', 'سفاري الصحراء'] },
  bestTime: { en: 'Nov – Mar', ar: 'نوفمبر – مارس' }
},
{
  id: 3,
  name: { en: 'Istanbul', ar: 'إسطنبول' },
  country: { en: 'Turkey', ar: 'تركيا' },
  category: 'Europe',
  price: 11200,
  rating: 4.7,
  reviews: 6230,
  nights: 7,
  flag: '🇹🇷',
  badge: 'popular',
  img: "https://img.rocket.new/generatedImages/rocket_gen_img_1d1a8c629-1772992682770.png",
  alt: 'Istanbul skyline with Blue Mosque and Hagia Sophia at dusk',
  highlights: { en: ['Hagia Sophia', 'Grand Bazaar', 'Bosphorus Cruise'], ar: ['آيا صوفيا', 'البازار الكبير', 'رحلة البوسفور'] },
  bestTime: { en: 'Apr – Jun', ar: 'أبريل – يونيو' }
},
{
  id: 4,
  name: { en: 'Mecca', ar: 'مكة المكرمة' },
  country: { en: 'Saudi Arabia', ar: 'المملكة العربية السعودية' },
  category: 'Hajj & Umrah',
  price: 15000,
  rating: 5.0,
  reviews: 12400,
  nights: 10,
  flag: '🇸🇦',
  badge: 'hajj',
  img: "https://images.unsplash.com/photo-1709470535387-e555bdbe69e7",
  alt: 'Grand Mosque in Mecca with Kaaba surrounded by thousands of pilgrims',
  highlights: { en: ['Al-Masjid Al-Haram', 'Zamzam Well', 'Mount Arafat'], ar: ['المسجد الحرام', 'بئر زمزم', 'جبل عرفات'] },
  bestTime: { en: 'Year Round', ar: 'طوال العام' }
},
{
  id: 5,
  name: { en: 'Paris', ar: 'باريس' },
  country: { en: 'France', ar: 'فرنسا' },
  category: 'Europe',
  price: 18500,
  rating: 4.8,
  reviews: 9870,
  nights: 7,
  flag: '🇫🇷',
  badge: 'featured',
  img: "https://images.unsplash.com/photo-1583454689803-f36d7ec71d3c",
  alt: 'Eiffel Tower illuminated at night with Seine River in Paris',
  highlights: { en: ['Eiffel Tower', 'Louvre Museum', 'Champs-Élysées'], ar: ['برج إيفل', 'متحف اللوفر', 'الشانزليزيه'] },
  bestTime: { en: 'Apr – Oct', ar: 'أبريل – أكتوبر' }
},
{
  id: 6,
  name: { en: 'Bangkok', ar: 'بانكوك' },
  country: { en: 'Thailand', ar: 'تايلاند' },
  category: 'Asia',
  price: 13700,
  rating: 4.6,
  reviews: 5430,
  nights: 8,
  flag: '🇹🇭',
  badge: 'popular',
  img: "https://img.rocket.new/generatedImages/rocket_gen_img_155ee1721-1772252834659.png",
  alt: 'Bangkok temple Wat Arun at sunrise with golden spires reflecting in the river',
  highlights: { en: ['Grand Palace', 'Floating Markets', 'Wat Pho Temple'], ar: ['القصر الكبير', 'الأسواق العائمة', 'معبد وات فو'] },
  bestTime: { en: 'Nov – Feb', ar: 'نوفمبر – فبراير' }
},
{
  id: 7,
  name: { en: 'Hurghada', ar: 'الغردقة' },
  country: { en: 'Egypt', ar: 'مصر' },
  category: 'Egypt',
  price: 1800,
  rating: 4.5,
  reviews: 4120,
  nights: 5,
  flag: '🇪🇬',
  badge: 'popular',
  img: "https://images.unsplash.com/photo-1718939051145-ad0e6105fd8f",
  alt: 'Hurghada beach with clear blue water and white sand resort',
  highlights: { en: ['Snorkeling', 'Giftun Island', 'Aqua Park'], ar: ['الغطس', 'جزيرة جفتون', 'الحديقة المائية'] },
  bestTime: { en: 'Mar – Nov', ar: 'مارس – نوفمبر' }
},
{
  id: 8,
  name: { en: 'Riyadh', ar: 'الرياض' },
  country: { en: 'Saudi Arabia', ar: 'المملكة العربية السعودية' },
  category: 'Middle East',
  price: 7200,
  rating: 4.4,
  reviews: 2890,
  nights: 5,
  flag: '🇸🇦',
  badge: 'new',
  img: "https://img.rocket.new/generatedImages/rocket_gen_img_18eb58f82-1772194397996.png",
  alt: 'Riyadh Kingdom Tower and modern skyline at night with city lights',
  highlights: { en: ['Kingdom Tower', 'Diriyah', 'National Museum'], ar: ['برج المملكة', 'الدرعية', 'المتحف الوطني'] },
  bestTime: { en: 'Oct – Mar', ar: 'أكتوبر – مارس' }
},
{
  id: 9,
  name: { en: 'Medina', ar: 'المدينة المنورة' },
  country: { en: 'Saudi Arabia', ar: 'المملكة العربية السعودية' },
  category: 'Hajj & Umrah',
  price: 12000,
  rating: 5.0,
  reviews: 8900,
  nights: 7,
  flag: '🇸🇦',
  badge: 'hajj',
  img: "https://img.rocket.new/generatedImages/rocket_gen_img_177c51b99-1765090061853.png",
  alt: 'Al-Masjid an-Nabawi Prophet Mosque in Medina with green dome at night',
  highlights: { en: ['Al-Masjid an-Nabawi', 'Quba Mosque', 'Al-Baqi Cemetery'], ar: ['المسجد النبوي', 'مسجد قباء', 'البقيع'] },
  bestTime: { en: 'Year Round', ar: 'طوال العام' }
},
{
  id: 10,
  name: { en: 'Cairo', ar: 'القاهرة' },
  country: { en: 'Egypt', ar: 'مصر' },
  category: 'Egypt',
  price: 3200,
  rating: 4.7,
  reviews: 7650,
  nights: 5,
  flag: '🇪🇬',
  badge: 'featured',
  img: "https://img.rocket.new/generatedImages/rocket_gen_img_1abd3710e-1772127334108.png",
  alt: 'Pyramids of Giza at sunset with camel silhouettes in the foreground',
  highlights: { en: ['Pyramids of Giza', 'Egyptian Museum', 'Khan El Khalili'], ar: ['أهرامات الجيزة', 'المتحف المصري', 'خان الخليلي'] },
  bestTime: { en: 'Oct – Apr', ar: 'أكتوبر – أبريل' }
},
{
  id: 11,
  name: { en: 'Rome', ar: 'روما' },
  country: { en: 'Italy', ar: 'إيطاليا' },
  category: 'Europe',
  price: 16800,
  rating: 4.8,
  reviews: 8230,
  nights: 7,
  flag: '🇮🇹',
  badge: 'featured',
  img: "https://images.unsplash.com/photo-1734809632995-c96c1ff71f93",
  alt: 'Colosseum in Rome at golden hour with ancient Roman architecture',
  highlights: { en: ['Colosseum', 'Vatican City', 'Trevi Fountain'], ar: ['الكولوسيوم', 'الفاتيكان', 'نافورة تريفي'] },
  bestTime: { en: 'Apr – Jun', ar: 'أبريل – يونيو' }
},
{
  id: 12,
  name: { en: 'Bali', ar: 'بالي' },
  country: { en: 'Indonesia', ar: 'إندونيسيا' },
  category: 'Asia',
  price: 14500,
  rating: 4.9,
  reviews: 11200,
  nights: 8,
  flag: '🇮🇩',
  badge: 'popular',
  img: "https://img.rocket.new/generatedImages/rocket_gen_img_1bdd8d273-1772161175574.png",
  alt: 'Bali rice terraces with lush green landscape and traditional temple',
  highlights: { en: ['Ubud Rice Terraces', 'Tanah Lot Temple', 'Seminyak Beach'], ar: ['مدرجات الأرز', 'معبد تاناه لوت', 'شاطئ سيمينياك'] },
  bestTime: { en: 'Apr – Oct', ar: 'أبريل – أكتوبر' }
}];


export default function ExplorePage() {
  const [lang, setLang] = useState<Lang>('en');
  const [activeCategory, setActiveCategory] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('popular');
  const text = t[lang];
  const isRTL = lang === 'ar';
  const categories = text.categories;

  const filtered = DESTINATIONS.filter((d) => {
    const matchCat = activeCategory === 0 || d.category === ['All', 'Egypt', 'Middle East', 'Europe', 'Asia', 'Hajj & Umrah', 'Beach', 'Adventure', 'Cultural'][activeCategory];
    const matchSearch = searchQuery === '' ||
    d.name[lang].toLowerCase().includes(searchQuery.toLowerCase()) ||
    d.country[lang].toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  }).sort((a, b) => {
    if (sortBy === 'priceAsc') return a.price - b.price;
    if (sortBy === 'priceDesc') return b.price - a.price;
    if (sortBy === 'rating') return b.rating - a.rating;
    return b.reviews - a.reviews;
  });

  const badgeStyle: Record<string, string> = {
    featured: 'bg-primary text-white',
    popular: 'bg-accent text-white',
    hajj: 'bg-emerald-600 text-white',
    new: 'bg-indigo-600 text-white'
  };
  const badgeLabel = (badge: string) => {
    const map: Record<string, {en: string;ar: string;}> = {
      featured: { en: 'Featured', ar: 'مميز' },
      popular: { en: 'Popular', ar: 'شائع' },
      hajj: { en: 'Hajj & Umrah', ar: 'حج وعمرة' },
      new: { en: 'New', ar: 'جديد' }
    };
    return map[badge]?.[lang] ?? badge;
  };

  return (
    <div className="min-h-screen bg-background" dir={isRTL ? 'rtl' : 'ltr'}>
      <Header lang={lang} onLangChange={setLang} />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-deep-navy overflow-hidden">
        <div className="absolute inset-0">
          <AppImage
            src="https://images.unsplash.com/photo-1728996912733-1d4ca3721c01"
            alt="World map with travel destinations and airplane routes"
            fill
            className="object-cover opacity-30"
            sizes="100vw" />
          
          <div className="absolute inset-0 bg-gradient-to-b from-deep-navy/60 via-deep-navy/40 to-deep-navy/90" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight">
            {text.hero}
          </h1>
          <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">{text.heroSub}</p>
          {/* Search Bar */}
          <div className="flex gap-3 max-w-2xl mx-auto">
            <div className="flex-1 relative">
              <Icon name="MagnifyingGlassIcon" size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={text.searchPlaceholder}
                className="w-full pl-12 pr-4 py-4 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder:text-white/50 outline-none focus:border-white/50 text-sm font-medium transition-all" />
              
            </div>
            <button className="btn-primary px-8 py-4 rounded-2xl text-sm font-bold text-white shrink-0">
              {text.searchBtn}
            </button>
          </div>
        </div>
      </section>

      {/* Filters + Grid */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-6 scrollbar-hide">
          {categories.map((cat, i) =>
          <button
            key={i}
            onClick={() => setActiveCategory(i)}
            className={`shrink-0 px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-200 ${
            activeCategory === i ?
            'bg-primary text-white shadow-lg shadow-primary/30' :
            'bg-card border border-border text-muted-foreground hover:text-primary hover:border-primary'}`
            }>
            
              {cat}
            </button>
          )}
        </div>

        {/* Sort + Count */}
        <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
          <p className="text-sm text-muted-foreground">
            {text.showing} <span className="font-bold text-foreground">{filtered.length}</span> {text.destinations}
          </p>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">{text.sortBy}:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 rounded-xl border border-border text-sm font-semibold bg-card text-foreground outline-none focus:border-primary cursor-pointer">
              
              <option value="popular">{text.popular}</option>
              <option value="rating">{text.rating}</option>
              <option value="priceAsc">{text.priceAsc}</option>
              <option value="priceDesc">{text.priceDesc}</option>
            </select>
          </div>
        </div>

        {/* Destinations Grid */}
        {filtered.length === 0 ?
        <div className="text-center py-20">
            <Icon name="GlobeAltIcon" size={48} className="text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">{text.noResults}</p>
          </div> :

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((dest) =>
          <div key={dest.id} className="bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl hover:border-primary/30 transition-all duration-300 group service-card">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <AppImage
                src={dest.img}
                alt={dest.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
              
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  {/* Badge */}
                  <span className={`absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full ${badgeStyle[dest.badge]}`}>
                    {badgeLabel(dest.badge)}
                  </span>
                  {/* Flag */}
                  <span className="absolute top-3 right-3 text-2xl">{dest.flag}</span>
                  {/* Price overlay */}
                  <div className="absolute bottom-3 left-3">
                    <p className="text-white/80 text-xs">{text.from}</p>
                    <p className="text-white font-extrabold text-lg">{text.currency} {dest.price.toLocaleString()}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-extrabold text-foreground text-base">{dest.name[lang]}</h3>
                      <p className="text-muted-foreground text-xs">{dest.country[lang]}</p>
                    </div>
                    <div className="flex items-center gap-1 shrink-0">
                      <Icon name="StarIcon" size={14} className="text-gold" variant="solid" />
                      <span className="text-sm font-bold text-foreground">{dest.rating}</span>
                      <span className="text-xs text-muted-foreground">({dest.reviews.toLocaleString()})</span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {dest.highlights[lang].slice(0, 2).map((h, i) =>
                <span key={i} className="text-xs bg-secondary text-muted-foreground px-2 py-0.5 rounded-full">{h}</span>
                )}
                  </div>

                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <span>🌙 {dest.nights} {text.nights}</span>
                    <span>📅 {dest.bestTime[lang]}</span>
                  </div>

                  <Link
                href="/sign-up-login"
                className="w-full btn-primary py-2.5 rounded-xl text-sm font-bold text-white flex items-center justify-center gap-2">
                
                    {text.bookNow}
                    <Icon name="ArrowRightIcon" size={14} />
                  </Link>
                </div>
              </div>
          )}
          </div>
        }
      </section>

      <Footer lang={lang} />
    </div>);

}