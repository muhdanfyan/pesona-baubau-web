import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Star, Calendar, ShoppingBag, Users, Compass, Waves, Sun, Ship, Mountain, ArrowRight, Search } from 'lucide-react';
import BottomNav from '../components/BottomNav';
import Testimonial from '../components/Testimonial';
import { useLanguage } from '../contexts/LanguageContext';

const heroSlides = [
  { id: 1, image: "/benteng_keraton.jpg", title: "Benteng Keraton Buton", desc: "Saksi sejarah kejayaan Kesultanan Buton dengan benteng terluas di dunia.", link: "/destinasi/1" },
  { id: 2, image: "/pantai_nirwana.jpg", title: "Pantai Nirwana", desc: "Pantai dengan gradasi warna air laut yang menakjubkan dan pasir putih halus.", link: "/destinasi/2" },
  { id: 3, image: "/batu_sori.jpg", title: "Batu Sori", desc: "Ikonik pulau batu karang yang menjulang di tengah laut jernih Baubau.", link: "/destinasi/3" }
];

const categories = [
  { id: 'all', icon: 'layers', label: 'Semua' },
  { id: 'Culture', icon: 'temple_hindu', label: 'Budaya' },
  { id: 'Beach', icon: 'beach_access', label: 'Pantai' },
  { id: 'Mountain', icon: 'landscape', label: 'Alam' },
  { id: 'Camp', icon: 'camping', label: 'Camp' },
];

const popularPlaces = [
  { id: 1, title: "Benteng Keraton Buton", location: "Baubau, Sultra", rating: 4.8, image: "/benteng_keraton.jpg", category: "Culture" },
  { id: 2, title: "Pantai Nirwana", location: "Baubau, Sultra", rating: 4.9, image: "/pantai_nirwana.jpg", category: "Beach" },
  { id: 3, title: "Batu Sori", location: "Baubau, Sultra", rating: 4.7, image: "/batu_sori.jpg", category: "Beach" }
];

const gradientColors = [
  { from: '#006d77', via: '#83c5be', to: '#ffddd2' },
  { from: '#0a5c7e', via: '#1bb5d4', to: '#f4a261' },
  { from: '#1a3a3a', via: '#2a6f6f', to: '#e9c46a' },
];

export default function Homepage() {
  const navigate = useNavigate();
  const [activeCat, setActiveCat] = useState('Culture');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeFeature, setActiveFeature] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const timer = setInterval(() => setCurrentSlide((p) => (p + 1) % heroSlides.length), 5000);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => { clearInterval(timer); window.removeEventListener('scroll', handleScroll); };
  }, []);

  const getCategoryLabel = (id) => {
    const m = { all: { en: 'All', id: 'Semua' }, Culture: { en: 'Culture', id: 'Budaya' }, Beach: { en: 'Beach', id: 'Pantai' }, Mountain: { en: 'Nature', id: 'Alam' }, Camp: { en: 'Camp', id: 'Camp' } };
    return m[id]?.[language] || id;
  };

  const features = [
    { id: 0, title: t('home.features.0.title'), desc: t('home.features.0.desc'), icon: 'map', color: 'text-blue-600', bg: 'bg-blue-50' },
    { id: 1, title: t('home.features.1.title'), desc: t('home.features.1.desc'), icon: 'storefront', color: 'text-orange-500', bg: 'bg-orange-50' },
    { id: 2, title: t('home.features.2.title'), desc: t('home.features.2.desc'), icon: 'wifi_off', color: 'text-green-600', bg: 'bg-green-50' }
  ];

  const isVisible = (base) => scrollY > base - 300;

  return (
    <div className="min-h-screen pb-24 font-sans" style={{ background: 'linear-gradient(180deg, #f0f9ff 0%, #fff8f1 30%, #fefce8 70%, #f0fdf4 100%)' }}>
      <main className="max-w-7xl mx-auto relative">

        {/* ===== DECORATIVE FLOATING ELEMENTS ===== */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
          <div className="absolute top-20 left-[10%] w-72 h-72 bg-teal-200/20 rounded-full blur-3xl animate-pulse" style={{animationDuration: '8s'}}></div>
          <div className="absolute top-40 right-[5%] w-96 h-96 bg-amber-200/15 rounded-full blur-3xl animate-pulse" style={{animationDuration: '12s'}}></div>
          <div className="absolute bottom-40 left-[20%] w-64 h-64 bg-emerald-200/15 rounded-full blur-3xl animate-pulse" style={{animationDuration: '10s'}}></div>
        </div>

        <div className="relative z-10 max-w-md mx-auto lg:max-w-none">

          {/* ===== HEADER ===== */}
          <section className="px-6 pt-8 pb-4 flex justify-between items-start">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500 to-amber-500 flex items-center justify-center shadow-md shadow-teal-200">
                  <Compass size={16} className="text-white" />
                </div>
                <span className="text-xs font-bold text-teal-700 tracking-wider">PESONA BAUBAU</span>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-0.5">{t('home.welcome')}</h1>
              <p className="text-gray-500 font-medium">{t('home.explore')}</p>
            </div>
            <div className="flex items-center gap-2 mt-1">
              <button onClick={toggleLanguage} className="flex items-center gap-1 cursor-pointer bg-white/80 backdrop-blur-md px-3 py-2 rounded-full border border-gray-200 shadow-sm active:scale-95 text-xs font-bold transition-all hover:shadow-md">
                <span className={language === 'en' ? 'text-teal-600 font-black' : 'text-gray-400'}>EN</span>
                <span className="text-gray-200">|</span>
                <span className={language === 'id' ? 'text-teal-600 font-black' : 'text-gray-400'}>ID</span>
              </button>
              <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center bg-white/80 backdrop-blur-md shadow-sm active:scale-95 transition-transform hover:shadow-md">
                <span className="material-symbols-outlined text-gray-700">menu</span>
              </button>
            </div>
          </section>

          {/* ===== SEARCH ===== */}
          <section className="px-6 mb-5 lg:max-w-2xl relative z-10">
            <div className="relative group">
              <input type="text" placeholder={t('home.search')}
                className="w-full h-14 pl-14 pr-12 rounded-full border-2 border-transparent bg-white/90 backdrop-blur-md shadow-lg text-gray-700 font-medium focus:ring-0 focus:border-teal-400 outline-none transition-all group-hover:shadow-xl"
                onClick={() => navigate('/destinasi')} readOnly />
              <span className="material-symbols-outlined absolute left-5 top-1/2 -translate-y-1/2 text-teal-500">search</span>
              <div className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-br from-teal-400 to-amber-400 shadow-md">
                <span className="material-symbols-outlined text-white text-[18px]">tune</span>
              </div>
            </div>
          </section>

          {/* ===== HERO CAROUSEL ===== */}
          <section className="px-4 md:px-6 mb-6">
            <div className="relative h-[320px] md:h-[460px] lg:h-[520px] rounded-[32px] overflow-hidden shadow-2xl group">
              <div className="h-full w-full relative">
                {heroSlides.map((slide, index) => (
                  <div key={slide.id}
                    className={`absolute inset-0 transition-all duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-10 scale-100' : 'opacity-0 z-0 scale-105'}`}>
                    <img className={`w-full h-full object-cover transition-transform duration-[12000ms] ${index === currentSlide ? 'scale-110' : 'scale-100'}`}
                      src={slide.image} alt={t(`home.heroSlides.${index}.title`)} />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#001f2b]/90 via-[#001f2b]/30 to-transparent flex flex-col justify-end p-6 md:p-10">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></div>
                        <span className="text-amber-300 text-[10px] font-bold uppercase tracking-widest">Destinasi Pilihan</span>
                      </div>
                      <h2 className="text-white font-bold text-2xl md:text-4xl lg:text-5xl mb-2 drop-shadow-lg leading-tight">
                        {t(`home.heroSlides.${index}.title`)}
                      </h2>
                      <p className="text-white/80 text-sm md:text-base mb-5 max-w-xl drop-shadow leading-relaxed">
                        {t(`home.heroSlides.${index}.desc`)}
                      </p>
                      <button onClick={() => navigate(slide.link)}
                        className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-7 py-3 rounded-xl font-bold text-sm w-fit hover:from-amber-600 hover:to-orange-600 transition-all shadow-lg shadow-amber-500/30 active:scale-95 flex items-center gap-2">
                        {t('home.exploreNow')} <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              {/* Dots */}
              <div className="absolute bottom-6 right-6 flex gap-2 z-20">
                {heroSlides.map((_, index) => (
                  <div key={index} onClick={() => setCurrentSlide(index)}
                    className={`rounded-full cursor-pointer transition-all duration-300 ${index === currentSlide ? 'w-8 h-2 bg-amber-400' : 'w-2 h-2 bg-white/40 hover:bg-white/70'}`}></div>
                ))}
              </div>
              {/* Slide number */}
              <div className="absolute top-6 right-6 z-20 bg-black/30 backdrop-blur-md px-3 py-1.5 rounded-full text-white text-xs font-bold">
                0{currentSlide + 1} / 0{heroSlides.length}
              </div>
            </div>
          </section>

          {/* ===== CATEGORY PILLS ===== */}
          <section className="pl-6 mb-6">
            <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-2 pr-6">
              {categories.slice(1).map(cat => (
                <button key={cat.id} onClick={() => setActiveCat(cat.id)}
                  className={`flex-shrink-0 flex items-center gap-2 px-5 py-3 rounded-full font-semibold transition-all shadow-sm ${
                    activeCat === cat.id
                      ? 'bg-gradient-to-r from-teal-600 to-emerald-600 text-white shadow-lg shadow-teal-200'
                      : 'bg-white/80 backdrop-blur-md text-gray-600 border border-gray-200 hover:border-teal-300 hover:shadow-md'
                  }`}>
                  <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>{cat.icon}</span>
                  {getCategoryLabel(cat.id)}
                </button>
              ))}
            </div>
          </section>

          {/* ===== POPULAR PLACES ===== */}
          <section className="px-6 mb-12">
            <div className="flex justify-between items-center mb-5">
              <div className="flex items-center gap-2">
                <Star size={18} className="text-amber-500 fill-amber-500" />
                <h2 className="text-xl font-bold text-gray-900">{t('home.popularDestinations')}</h2>
              </div>
              <button onClick={() => navigate('/destinasi')} className="text-teal-600 font-semibold text-sm hover:underline flex items-center gap-1">
                {t('home.seeAll')} <ArrowRight size={14} />
              </button>
            </div>
            <div className="flex gap-5 overflow-x-auto hide-scrollbar pb-6 -mx-6 px-6 lg:mx-0 lg:px-0 snap-x snap-mandatory scroll-pl-6">
              {popularPlaces.map((place, index) => (
                <div key={place.id} onClick={() => navigate(`/destinasi/${place.id}`)}
                  className="snap-start flex-shrink-0 w-[78vw] max-w-[280px] md:w-[290px] h-[280px] relative rounded-[32px] overflow-hidden shadow-lg cursor-pointer group hover:shadow-2xl transition-all duration-500">
                  <img src={place.image} alt={t(`home.popularPlaces.${index}.title`)}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
                  {/* Heart */}
                  <button onClick={(e) => { e.stopPropagation(); alert(t('detail.saved')); }}
                    className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-lg border border-white/30 flex items-center justify-center hover:bg-white/40 transition-all">
                    <span className="material-symbols-outlined text-white text-[18px]">favorite_border</span>
                  </button>
                  {/* Glass card */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/15 backdrop-blur-xl rounded-[20px] p-4 border border-white/20 shadow-xl overflow-hidden">
                    <div className="flex justify-between items-end gap-2">
                      <div className="flex-1 min-w-0">
                        <h3 className="text-white font-bold text-[16px] truncate mb-0.5 drop-shadow">{t(`home.popularPlaces.${index}.title`)}</h3>
                        <div className="flex items-center gap-1 text-white/70">
                          <MapPin size={12} />
                          <span className="text-[11px] truncate">{t(`home.popularPlaces.${index}.location`)}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 bg-amber-500/80 px-2.5 py-1 rounded-lg backdrop-blur-md flex-shrink-0">
                        <span className="text-white font-bold text-sm">{place.rating}</span>
                        <Star size={12} className="text-white fill-white" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ===== STATS ROW ===== */}
          <div className="px-6 lg:px-8 space-y-16">
            <section className={`grid grid-cols-2 md:grid-cols-4 gap-4 transition-all duration-700 ${isVisible(200) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-md border border-white/50 hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-teal-400 to-emerald-500 text-white flex items-center justify-center mb-2 shadow-md shadow-teal-200">
                  <Landmark size={20} />
                </div>
                <p className="text-gray-500 text-xs font-semibold">{t('home.statsDestinations')}</p>
                <p className="text-gray-900 font-bold text-xl">45+</p>
              </div>
              <div className="bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-md border border-white/50 hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-orange-400 to-amber-500 text-white flex items-center justify-center mb-2 shadow-md shadow-orange-200">
                  <ShoppingBag size={20} />
                </div>
                <p className="text-gray-500 text-xs font-semibold">{t('home.statsMsmes')}</p>
                <p className="text-gray-900 font-bold text-xl">120+</p>
              </div>
              <div className="bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-md border border-white/50 hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 text-white flex items-center justify-center mb-2 shadow-md shadow-emerald-200">
                  <Calendar size={20} />
                </div>
                <p className="text-gray-500 text-xs font-semibold">{t('home.statsEvents')}</p>
                <p className="text-gray-900 font-bold text-xl">12</p>
              </div>
              <div className="bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-md border border-white/50 hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-violet-400 to-purple-500 text-white flex items-center justify-center mb-2 shadow-md shadow-violet-200">
                  <Users size={20} />
                </div>
                <p className="text-gray-500 text-xs font-semibold">{t('home.statsTourists')}</p>
                <p className="text-gray-900 font-bold text-xl">15K+</p>
              </div>
            </section>

            {/* ===== EVENT + UMKM ===== */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <section className={`lg:col-span-5 space-y-4 transition-all duration-700 ${isVisible(400) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <div className="flex justify-between items-end">
                  <div className="flex items-center gap-2">
                    <Calendar size={18} className="text-orange-500" />
                    <h3 className="text-xl font-bold text-gray-900">{t('home.upcomingEvents')}</h3>
                  </div>
                  <button onClick={() => navigate('/event')} className="text-teal-600 font-semibold text-sm hover:underline">{t('home.calendar')}</button>
                </div>
                <div className="space-y-3">
                  {[0, 1].map((i) => (
                    <div key={i} className="flex gap-4 bg-white/80 backdrop-blur-md p-3 rounded-2xl shadow-sm border border-gray-100 hover:border-teal-200 hover:shadow-lg transition-all cursor-pointer group">
                      <div className={`flex-shrink-0 w-16 h-16 rounded-[14px] flex flex-col items-center justify-center shadow-md ${
                        i === 0 ? 'bg-gradient-to-br from-teal-500 to-emerald-600 text-white shadow-teal-200' : 'bg-gradient-to-br from-amber-500 to-orange-500 text-white shadow-amber-200'
                      }`}>
                        <span className="text-lg font-black leading-none">{i === 0 ? '24' : '12'}</span>
                        <span className="text-[10px] font-bold uppercase mt-0.5">{i === 0 ? 'Okt' : 'Nov'}</span>
                      </div>
                      <div className="flex flex-col justify-center">
                        <h5 className="font-bold text-gray-900 group-hover:text-teal-600 transition-colors text-[15px]">{t(`home.upcomingEventsList.${i}.title`)}</h5>
                        <p className="text-gray-500 text-xs flex items-center gap-1 mt-0.5">
                          <MapPin size={12} /> {t(`home.upcomingEventsList.${i}.location`)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className={`lg:col-span-7 space-y-4 transition-all duration-700 ${isVisible(600) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <div className="flex justify-between items-end">
                  <div className="flex items-center gap-2">
                    <ShoppingBag size={18} className="text-amber-500" />
                    <h3 className="text-xl font-bold text-gray-900">{t('home.featuredMsmes')}</h3>
                  </div>
                  <button onClick={() => navigate('/umkm')} className="text-teal-600 font-semibold text-sm hover:underline">{t('home.allProducts')}</button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { nav: '/umkm/1', badge: language === 'en' ? 'WEAVE' : 'TENUN', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAbV2r6wgfSH9hh30F5-XVRTAvHAR5bZOIIDrAkXYuXTfWHwMols7cz0fCc3HVdhA7DuJ_fXR3jws-FjyivHw7pNyj_OUFBOFcBC_V19EFnvFzCG345BwkwavceFsSoqDTZA4y-BRg0NRRBncxdZka5V3-WSj1HsCIbc1Hd7x0-XYG8t3FYtykXcbQ7inkUy1wW-svrbD3fxRXASX7FcMjiMUhv5ZCPmi4dqmJnomxs7wHvAv70TQ5rb14hyAeZpZJViDAvYa4kDUk', title: t('home.featuredProducts.0.title'), price: 'Rp 450.000' },
                    { nav: '/umkm/2', badge: language === 'en' ? 'CULINARY' : 'KULINER', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAtg6IX0ZV1nDBYmM77zOaFPbON3RfhrPqzlIhUpSw4eFStOkI0tAxTMUZIr2AK01bjzhWJ9U6N9Km0IwjiS2RSHpUQ5HxzIvStWIBuKqj91B-W6Zoi3ARaXukLr8pF2h9umtns5h4QH8P9XOd5NoBuN1p4qNNNgc8vdNmc_cWlXMSn5vBi9dvf4nYgt3K8HTjkul5MVIZrUxiiglLhq2cq8eu_h6Lw_UKa6lQ_5N5G0mEIa47GpsLfgrRmcUYlNumSqj9HlS1ZZxc', title: t('home.featuredProducts.1.title'), price: 'Rp 25.000' }
                  ].map((item, i) => (
                    <div key={i} onClick={() => navigate(item.nav)}
                      className="bg-white/80 backdrop-blur-md rounded-2xl overflow-hidden shadow-md border border-gray-100 group cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all">
                      <div className="h-36 overflow-hidden relative p-2 pb-0">
                        <img className="w-full h-full object-cover rounded-xl group-hover:scale-110 transition-transform duration-500" src={item.img} alt={item.title} />
                        <div className="absolute top-3 right-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-[9px] font-black tracking-wider px-2.5 py-1 rounded-md shadow-sm">{item.badge}</div>
                      </div>
                      <div className="p-3">
                        <h5 className="font-bold text-gray-900 text-sm truncate">{item.title}</h5>
                        <p className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-600 font-black text-[15px] mt-0.5">{item.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* ===== FEATURES ACCORDION ===== */}
            <section className={`py-8 border-t border-gray-200/70 mt-8 transition-all duration-700 ${isVisible(800) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 bg-teal-50 px-4 py-1.5 rounded-full text-teal-700 text-xs font-bold mb-4">
                  <Compass size={14} /> Fitur Unggulan
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{t('home.explorationTitle')}</h3>
                <p className="text-gray-500 text-sm max-w-lg mx-auto">{t('home.explorationDesc')}</p>
              </div>
              <div className="max-w-2xl mx-auto space-y-3">
                {features.map((feature) => (
                  <div key={feature.id} onClick={() => setActiveFeature(activeFeature === feature.id ? null : feature.id)}
                    className={`bg-white/80 backdrop-blur-md rounded-[20px] shadow-sm border transition-all duration-300 cursor-pointer overflow-hidden ${
                      activeFeature === feature.id ? 'border-teal-300 shadow-lg shadow-teal-100' : 'border-gray-100 hover:border-teal-200'
                    }`}>
                    <div className="p-5 flex items-center gap-4">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 ${feature.bg} ${feature.color} shadow-inner`}>
                        <span className="material-symbols-outlined text-[28px]">{feature.icon}</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 text-[17px]">{feature.title}</h4>
                      </div>
                      <div className="flex-shrink-0">
                        <span className={`material-symbols-outlined text-gray-400 transition-transform duration-300 ${activeFeature === feature.id ? 'rotate-180 text-teal-500' : ''}`}>expand_more</span>
                      </div>
                    </div>
                    <div className={`transition-all duration-300 ease-in-out px-5 overflow-hidden ${
                      activeFeature === feature.id ? 'max-h-40 pb-5 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <p className="text-gray-500 text-sm pl-[72px]">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ===== TESTIMONIALS ===== */}
            <Testimonial />

            {/* ===== SUPPORTED BY ===== */}
            <section className="py-8 border-t border-gray-200/70 mt-4">
              <div className="text-center mb-6">
                <p className="text-gray-400 font-bold text-xs uppercase tracking-[0.2em]">{t('home.supportedBy')}</p>
              </div>
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40">
                <div className="flex items-center gap-2">
                  <Waves size={20} className="text-teal-600" />
                  <h4 className="text-sm font-black text-gray-700 tracking-wider">WONDERFUL INDONESIA</h4>
                </div>
                <div className="flex items-center gap-2">
                  <Landmark size={20} className="text-amber-600" />
                  <h4 className="text-sm font-black text-gray-700 tracking-wider">PEMKOT BAUBAU</h4>
                </div>
                <div className="flex items-center gap-2">
                  <Ship size={20} className="text-emerald-600" />
                  <h4 className="text-sm font-black text-gray-700 tracking-wider">KEMENPAREKRAF</h4>
                </div>
              </div>
            </section>

            {/* ===== CTA ===== */}
            <section className="relative rounded-[32px] p-8 md:p-12 text-center shadow-xl overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #006d77 0%, #0a5c7e 40%, #1a3a3a 70%, #2a4a3a 100%)' }}>
              {/* Decorative */}
              <div className="absolute -top-32 -right-32 w-80 h-80 bg-teal-400/10 rounded-full blur-3xl pointer-events-none"></div>
              <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl pointer-events-none"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
                <svg className="w-full h-full opacity-[0.03]" viewBox="0 0 400 400">
                  <circle cx="200" cy="200" r="180" fill="none" stroke="white" strokeWidth="0.5" />
                  <circle cx="200" cy="200" r="120" fill="none" stroke="white" strokeWidth="0.5" />
                  <circle cx="200" cy="200" r="60" fill="none" stroke="white" strokeWidth="0.5" />
                </svg>
              </div>

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-white/80 text-xs font-bold mb-4">
                  <Compass size={14} /> Jelajahi Baubau
                </div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 text-white drop-shadow-lg">{t('home.ctaTitle')}</h2>
                <p className="text-teal-100/80 text-sm md:text-base mb-8 max-w-md mx-auto leading-relaxed">{t('home.ctaDesc')}</p>
                <button className="bg-gradient-to-r from-amber-400 to-orange-500 text-white px-10 py-4 rounded-full font-bold shadow-lg shadow-amber-500/30 hover:shadow-xl hover:from-amber-500 hover:to-orange-600 active:scale-95 transition-all text-[15px] inline-flex items-center gap-2">
                  {t('home.ctaButton')} <ArrowRight size={18} />
                </button>
              </div>
            </section>

          </div>
        </div>
      </main>
      <BottomNav />
    </div>
  );
}