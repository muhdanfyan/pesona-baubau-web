import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../components/BottomNav';
import Testimonial from '../components/Testimonial';
import { useLanguage } from '../contexts/LanguageContext';

const heroSlides = [
  {
    id: 1,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDC-L8Fb4TkEQ2j6Yqnr2PfDAqktXz1K3R1Ih_d9r4BcV2GFsxAXIxRaNWQGvNEYpj-msiD-EGlZjWc83Gq1P3RUjPPFq91UNMQu48SVnV3bmBLDPpmKOSYB4h9_qQIo83rtFwavLpoCP-CPn5Jq55u677MujQDDffras4_yHExwdhQxVQttNqSkncyuZId7291IPYJ5XG79ma0uw4LUSEuUn_IcHKmE7RVK9nFZSKnQRSjsjNltvMViJ71PZWbF_xvSu7lr9Uvkpo",
    title: "Benteng Keraton Buton",
    desc: "Saksi sejarah kejayaan Kesultanan Buton dengan benteng terluas di dunia.",
    link: "/destinasi/1"
  },
  {
    id: 2,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAyQYKzX3KuF1dh80_ptXdp2_LTnge1ywhJoicNPgGsWqLX8GfFEO4PSaiw2_XYak3FEQgQErUM511a3hzZ9bT73uapUAx4BXrikAQH8jO_SypbE_5kiqW0Sm1ZvpCJ-JY09jaFFDIXXAFgOn9IWq2bbT9n5kQGbAPV0i-J7ngROlUKrxex97FRuoHN7m_aVvm3gg1krQ2bEud76YRKCdGYhxWZ0nqsIHqVLUTTCc-L1bFMwymqZrePb9QCfa7wgbBMKQShiygCI3Y",
    title: "Pantai Nirwana",
    desc: "Pantai dengan gradasi warna air laut yang menakjubkan dan pasir putih halus.",
    link: "/destinasi/2"
  },
  {
    id: 3,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAxCf_dairb8y2kgmRXwCUPU1qVK8nssSDlI6XpcNC40KbDGZC9m4eMSLrkHSa6RJUYoyknjw1g9CG2U4bp0u8u3IEr0Sj53aueTQ9h16KelstV4Q6X6gYauwU8bwg5bp2hTzqpmaxy5k9qUPoHinQHWfRUhIkiQHsCayZ3VdMU1xy5TVwnMOGL6I9hHPrcExA0rdofvyO68ooL8c19WrSNT9Sb-xfHPgqssiFTUKdwGnjOkTQ8Lyc-x2XwG0AxKe6yUsIcEVbj7EY",
    title: "Batu Sori",
    desc: "Ikonik pulau batu karang yang menjulang di tengah laut jernih Baubau.",
    link: "/destinasi/3"
  }
];

const categories = [
  { id: 'all', icon: 'layers', label: 'Semua' },
  { id: 'Culture', icon: 'temple_hindu', label: 'Budaya' },
  { id: 'Beach', icon: 'beach_access', label: 'Pantai' },
  { id: 'Mountain', icon: 'landscape', label: 'Alam' },
  { id: 'Camp', icon: 'camping', label: 'Camp' },
];

const popularPlaces = [
  {
    id: 1,
    title: "Benteng Keraton Buton",
    location: "Baubau, Sultra",
    rating: 4.8,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD6cF2sYsQQYbtJscIkVMRXWnkl1mpZ6GiP7a9DcVxzUdWRgAsO0I2GWCY-lOrDygOBhAw_JlNHIE2HC7spP3hF5k6J_jYsP7TW0Q_3krV1dfgjsEPguKuJRcGv4yJOdOIHWbaKE4TZqI86-O3Bh_8hcPk-sC9nIWhBGsQIP-10JGIXgTLN2TQ_OeqnhJfqeSj-6hOWODtAs-U1b9UdVP_cJ_R_TOFieh1NdM7_gzpSccW9MDAIEjKEq8doxOfshLEkv_cWrQ6UFGs",
    category: "Culture"
  },
  {
    id: 2,
    title: "Pantai Nirwana",
    location: "Baubau, Sultra",
    rating: 4.9,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAyQYKzX3KuF1dh80_ptXdp2_LTnge1ywhJoicNPgGsWqLX8GfFEO4PSaiw2_XYak3FEQgQErUM511a3hzZ9bT73uapUAx4BXrikAQH8jO_SypbE_5kiqW0Sm1ZvpCJ-JY09jaFFDIXXAFgOn9IWq2bbT9n5kQGbAPV0i-J7ngROlUKrxex97FRuoHN7m_aVvm3gg1krQ2bEud76YRKCdGYhxWZ0nqsIHqVLUTTCc-L1bFMwymqZrePb9QCfa7wgbBMKQShiygCI3Y",
    category: "Beach"
  },
  {
    id: 3,
    title: "Batu Sori",
    location: "Baubau, Sultra",
    rating: 4.7,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAxCf_dairb8y2kgmRXwCUPU1qVK8nssSDlI6XpcNC40KbDGZC9m4eMSLrkHSa6RJUYoyknjw1g9CG2U4bp0u8u3IEr0Sj53aueTQ9h16KelstV4Q6X6gYauwU8bwg5bp2hTzqpmaxy5k9qUPoHinQHWfRUhIkiQHsCayZ3VdMU1xy5TVwnMOGL6I9hHPrcExA0rdofvyO68ooL8c19WrSNT9Sb-xfHPgqssiFTUKdwGnjOkTQ8Lyc-x2XwG0AxKe6yUsIcEVbj7EY",
    category: "Beach"
  }
];

export default function Homepage() {
  const navigate = useNavigate();
  const [activeCat, setActiveCat] = useState('Culture');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeFeature, setActiveFeature] = useState(0);
  const { language, toggleLanguage, t } = useLanguage();

  const getCategoryLabel = (id) => {
    const mapping = {
      all: { en: 'All', id: 'Semua' },
      Culture: { en: 'Culture', id: 'Budaya' },
      Beach: { en: 'Beach', id: 'Pantai' },
      Mountain: { en: 'Nature', id: 'Alam' },
      Camp: { en: 'Camp', id: 'Camp' }
    };
    return mapping[id]?.[language] || id;
  };

  const features = [
    {
      id: 0,
      title: t('home.features.0.title'),
      desc: t('home.features.0.desc'),
      icon: 'map',
      color: 'text-blue-600',
      bg: 'bg-blue-50'
    },
    {
      id: 1,
      title: t('home.features.1.title'),
      desc: t('home.features.1.desc'),
      icon: 'storefront',
      color: 'text-orange-500',
      bg: 'bg-orange-50'
    },
    {
      id: 2,
      title: t('home.features.2.title'),
      desc: t('home.features.2.desc'),
      icon: 'wifi_off',
      color: 'text-green-600',
      bg: 'bg-green-50'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#f4f7fe] pb-24 font-sans">
      <main className="max-w-7xl mx-auto relative h-full">
        
        <div className="max-w-md mx-auto lg:max-w-none">
          {/* Header Section */}
          <section className="px-6 pt-10 pb-6 flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-1">{t('home.welcome')}</h1>
              <p className="text-gray-500 font-medium">{t('home.explore')}</p>
            </div>
            <div className="flex items-center gap-3">
              <button 
                onClick={toggleLanguage}
                className="flex items-center gap-1 cursor-pointer bg-white px-3 py-2 rounded-full border border-gray-200 shadow-sm active:scale-95 text-xs font-bold font-sans transition-all"
              >
                <span className={language === 'en' ? 'text-blue-600 font-black' : 'text-gray-400'}>EN</span>
                <span className="text-gray-200">|</span>
                <span className={language === 'id' ? 'text-blue-600 font-black' : 'text-gray-400'}>ID</span>
              </button>
              <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center bg-white shadow-sm active:scale-95 transition-transform">
                <span className="material-symbols-outlined text-gray-700">menu</span>
              </button>
            </div>
          </section>

          {/* Search Bar */}
          <section className="px-6 mb-6 lg:max-w-2xl relative z-10">
            <div className="relative">
              <input
                type="text"
                placeholder={t('home.search')}
                className="w-full h-14 pl-14 pr-12 rounded-full border-none shadow-sm text-gray-700 font-medium focus:ring-2 focus:ring-blue-500 outline-none"
                onClick={() => navigate('/destinasi')}
                readOnly
              />
              <span className="material-symbols-outlined absolute left-5 top-1/2 -translate-y-1/2 text-gray-400">search</span>
              <div className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-blue-500">tune</span>
              </div>
            </div>
          </section>

          {/* Hero Carousel */}
          <section className="px-4 md:px-6 mb-8 lg:max-w-full">
            <div className="relative h-[300px] md:h-[400px] rounded-[32px] overflow-hidden shadow-lg group">
              <div className="h-full w-full relative">
                {heroSlides.map((slide, index) => (
                  <div 
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                      index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                    }`}
                  >
                    <img
                      className={`w-full h-full object-cover transition-transform duration-[10000ms] ${
                        index === currentSlide ? 'scale-110' : 'scale-100'
                      }`}
                      src={slide.image}
                      alt={t(`home.heroSlides.${index}.title`)}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 md:p-8">
                      <h2 className="text-white font-bold text-2xl md:text-3xl mb-2 drop-shadow-md">
                        {t(`home.heroSlides.${index}.title`)}
                      </h2>
                      <p className="text-white/90 text-sm md:text-base mb-4 max-w-lg drop-shadow">
                        {t(`home.heroSlides.${index}.desc`)}
                      </p>
                      <div className="flex gap-3">
                        <button
                          onClick={() => navigate(slide.link)}
                          className="bg-blue-600 text-white px-6 py-2.5 rounded-xl font-bold text-sm w-fit hover:bg-blue-700 transition-colors shadow-lg active:scale-95"
                        >
                          {t('home.exploreNow')}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="absolute bottom-6 right-6 flex gap-2 z-20">
                {heroSlides.map((_, index) => (
                  <div 
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-1.5 rounded-full cursor-pointer transition-all duration-300 ${
                      index === currentSlide ? 'w-6 bg-white' : 'w-1.5 bg-white/40 hover:bg-white/60'
                    }`}
                  ></div>
                ))}
              </div>
            </div>
          </section>

          {/* Category Filter Pills */}
          <section className="pl-6 mb-8">
            <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-2 pr-6">
              {categories.slice(1).map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCat(cat.id)}
                  className={`flex-shrink-0 flex items-center gap-2 px-5 py-3 rounded-full font-semibold transition-all shadow-sm ${
                    activeCat === cat.id 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-white text-gray-500 border border-gray-100 hover:border-gray-300'
                  }`}
                >
                  <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    {cat.icon}
                  </span>
                  {getCategoryLabel(cat.id)}
                </button>
              ))}
            </div>
          </section>

          {/* Popular Places */}
          <section className="px-6 mb-16">
            <div className="flex justify-between items-center mb-5">
              <h2 className="text-xl font-bold text-gray-900">{t('home.popularDestinations')}</h2>
              <button className="text-blue-500 font-semibold text-sm hover:underline">{t('home.seeAll')}</button>
            </div>
            
            <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-6 -mx-6 px-6 lg:mx-0 lg:px-0 snap-x snap-mandatory scroll-pl-6">
              {popularPlaces.map((place, index) => (
                <div 
                  key={place.id}
                  onClick={() => navigate(`/destinasi/${place.id}`)}
                  className="snap-start flex-shrink-0 w-[80vw] max-w-[260px] md:w-[280px] h-[260px] relative rounded-[32px] overflow-hidden shadow-lg cursor-pointer group"
                >
                  <img 
                    src={place.image} 
                    alt={t(`home.popularPlaces.${index}.title`)} 
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Heart Button */}
                  <button 
                    onClick={(e) => { e.stopPropagation(); alert(t('detail.saved')); }}
                    className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-sm"
                  >
                    <span className="material-symbols-outlined text-white text-[20px]">favorite_border</span>
                  </button>

                  {/* Info Card at Bottom */}
                  <div className="absolute bottom-5 left-5 right-5 bg-[#3e4453]/80 backdrop-blur-xl rounded-[24px] p-4 border border-white/10 shadow-xl overflow-hidden">
                    <div className="relative z-10 flex justify-between items-end gap-2">
                      <div className="flex-1 min-w-0">
                        <h3 className="text-white font-bold text-[17px] truncate mb-1">{t(`home.popularPlaces.${index}.title`)}</h3>
                        <div className="flex items-center gap-1 text-gray-300">
                          <span className="material-symbols-outlined text-[14px]">location_on</span>
                          <span className="text-xs truncate">{t(`home.popularPlaces.${index}.location`)}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 bg-white/20 px-2 py-1 rounded-lg backdrop-blur-md">
                        <span className="text-yellow-400 font-bold text-sm">{place.rating}</span>
                        <span className="material-symbols-outlined text-yellow-400 text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* REST OF THE CONTENT - Made to look busy/ramai */}
        <div className="px-6 lg:px-8 space-y-16">
          
          {/* Stats Row */}
          <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-2xl shadow-sm flex items-center gap-3 border border-gray-100">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined">account_balance</span>
              </div>
              <div>
                <p className="text-gray-400 text-xs font-semibold">{t('home.statsDestinations')}</p>
                <p className="text-gray-900 font-bold text-lg">45+</p>
              </div>
            </div>
            <div className="bg-white p-4 rounded-2xl shadow-sm flex items-center gap-3 border border-gray-100">
              <div className="w-10 h-10 bg-orange-50 text-orange-500 rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined">shopping_bag</span>
              </div>
              <div>
                <p className="text-gray-400 text-xs font-semibold">{t('home.statsMsmes')}</p>
                <p className="text-gray-900 font-bold text-lg">120+</p>
              </div>
            </div>
            <div className="bg-white p-4 rounded-2xl shadow-sm flex items-center gap-3 border border-gray-100">
              <div className="w-10 h-10 bg-green-50 text-green-600 rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined">calendar_month</span>
              </div>
              <div>
                <p className="text-gray-400 text-xs font-semibold">{t('home.statsEvents')}</p>
                <p className="text-gray-900 font-bold text-lg">12</p>
              </div>
            </div>
            <div className="bg-white p-4 rounded-2xl shadow-sm flex items-center gap-3 border border-gray-100">
              <div className="w-10 h-10 bg-purple-50 text-purple-600 rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined">groups</span>
              </div>
              <div>
                <p className="text-gray-400 text-xs font-semibold">{t('home.statsTourists')}</p>
                <p className="text-gray-900 font-bold text-lg">15K+</p>
              </div>
            </div>
          </section>

          {/* Asymmetric: Event & UMKM */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Event Mendatang */}
            <section className="lg:col-span-5 space-y-4">
              <div className="flex justify-between items-end">
                <h3 className="text-xl font-bold text-gray-900">{t('home.upcomingEvents')}</h3>
                <button onClick={() => navigate('/event')} className="text-blue-500 font-semibold text-sm hover:underline">{t('home.calendar')}</button>
              </div>
              <div className="space-y-3">
                <div className="flex gap-4 bg-white p-3 rounded-2xl shadow-sm border border-gray-100 hover:border-blue-200 transition-colors cursor-pointer group">
                  <div className="flex-shrink-0 w-16 h-16 bg-blue-600 text-white rounded-[14px] flex flex-col items-center justify-center shadow-sm shadow-blue-200">
                    <span className="text-lg font-black leading-none">24</span>
                    <span className="text-[10px] font-bold uppercase mt-1">Okt</span>
                  </div>
                  <div className="flex flex-col justify-center">
                    <h5 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors text-[15px]">{t('home.upcomingEventsList.0.title')}</h5>
                    <p className="text-gray-500 text-xs flex items-center gap-1 mt-1">
                      <span className="material-symbols-outlined text-[14px]">location_on</span> {t('home.upcomingEventsList.0.location')}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 bg-white p-3 rounded-2xl shadow-sm border border-gray-100 hover:border-blue-200 transition-colors cursor-pointer group">
                  <div className="flex-shrink-0 w-16 h-16 bg-orange-100 text-orange-600 rounded-[14px] flex flex-col items-center justify-center">
                    <span className="text-lg font-black leading-none">12</span>
                    <span className="text-[10px] font-bold uppercase mt-1">Nov</span>
                  </div>
                  <div className="flex flex-col justify-center">
                    <h5 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors text-[15px]">{t('home.upcomingEventsList.1.title')}</h5>
                    <p className="text-gray-500 text-xs flex items-center gap-1 mt-1">
                      <span className="material-symbols-outlined text-[14px]">location_on</span> {t('home.upcomingEventsList.1.location')}
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* UMKM Pilihan */}
            <section className="lg:col-span-7 space-y-4">
              <div className="flex justify-between items-end">
                <h3 className="text-xl font-bold text-gray-900">{t('home.featuredMsmes')}</h3>
                <button onClick={() => navigate('/umkm')} className="text-blue-500 font-semibold text-sm hover:underline">{t('home.allProducts')}</button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div onClick={() => navigate('/umkm/1')} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 group cursor-pointer">
                  <div className="h-32 overflow-hidden relative p-2 pb-0">
                    <img className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbV2r6wgfSH9hh30F5-XVRTAvHAR5bZOIIDrAkXYuXTfWHwMols7cz0fCc3HVdhA7DuJ_fXR3jws-FjyivHw7pNyj_OUFBOFcBC_V19EFnvFzCG345BwkwavceFsSoqDTZA4y-BRg0NRRBncxdZka5V3-WSj1HsCIbc1Hd7x0-XYG8t3FYtykXcbQ7inkUy1wW-svrbD3fxRXASX7FcMjiMUhv5ZCPmi4dqmJnomxs7wHvAv70TQ5rb14hyAeZpZJViDAvYa4kDUk" alt="Tenun Buton" />
                    <div className="absolute top-4 right-4 bg-orange-500 text-white text-[9px] font-black tracking-wider px-2 py-1 rounded-md">{language === 'en' ? 'WEAVE' : 'TENUN'}</div>
                  </div>
                  <div className="p-3">
                    <h5 className="font-bold text-gray-900 text-sm truncate">{t('home.featuredProducts.0.title')}</h5>
                    <p className="text-blue-600 font-black text-[15px] mt-0.5">Rp 450.000</p>
                  </div>
                </div>
                <div onClick={() => navigate('/umkm/2')} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 group cursor-pointer">
                  <div className="h-32 overflow-hidden relative p-2 pb-0">
                    <img className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtg6IX0ZV1nDBYmM77zOaFPbON3RfhrPqzlIhUpSw4eFStOkI0tAxTMUZIr2AK01bjzhWJ9U6N9Km0IwjiS2RSHpUQ5HxzIvStWIBuKqj91B-W6Zoi3ARaXukLr8pF2h9umtns5h4QH8P9XOd5NoBuN1p4qNNNgc8vdNmc_cWlXMSn5vBi9dvf4nYgt3K8HTjkul5MVIZrUxiiglLhq2cq8eu_h6Lw_UKa6lQ_5N5G0mEIa47GpsLfgrRmcUYlNumSqj9HlS1ZZxc" alt="Kasuami" />
                    <div className="absolute top-4 right-4 bg-orange-500 text-white text-[9px] font-black tracking-wider px-2 py-1 rounded-md">{language === 'en' ? 'CULINARY' : 'KULINER'}</div>
                  </div>
                  <div className="p-3">
                    <h5 className="font-bold text-gray-900 text-sm truncate">{t('home.featuredProducts.1.title')}</h5>
                    <p className="text-blue-600 font-black text-[15px] mt-0.5">Rp 25.000</p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Features / Fitur Utama (Accordion) */}
          <section className="py-8 border-t border-gray-200 mt-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{t('home.explorationTitle')}</h3>
              <p className="text-gray-500 text-sm max-w-lg mx-auto">{t('home.explorationDesc')}</p>
            </div>
            <div className="max-w-2xl mx-auto space-y-4">
              {features.map((feature) => (
                <div 
                  key={feature.id} 
                  onClick={() => setActiveFeature(activeFeature === feature.id ? null : feature.id)}
                  className={`bg-white rounded-[24px] shadow-sm border transition-all duration-300 cursor-pointer overflow-hidden ${activeFeature === feature.id ? 'border-blue-200 shadow-md' : 'border-gray-100 hover:border-blue-100'}`}
                >
                  <div className="p-5 flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 ${feature.bg} ${feature.color}`}>
                      <span className="material-symbols-outlined text-[28px]">{feature.icon}</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 text-[17px]">{feature.title}</h4>
                    </div>
                    <div className="flex-shrink-0">
                      <span className={`material-symbols-outlined text-gray-400 transition-transform duration-300 ${activeFeature === feature.id ? 'rotate-180' : ''}`}>
                        expand_more
                      </span>
                    </div>
                  </div>
                  <div 
                    className={`transition-all duration-300 ease-in-out px-5 overflow-hidden ${activeFeature === feature.id ? 'max-h-40 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <p className="text-gray-500 text-sm pl-[72px]">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Testimonials */}
          <Testimonial />

          {/* Featured In */}
          <section className="py-8 border-t border-gray-200 mt-4">
            <div className="text-center mb-6">
              <p className="text-gray-400 font-bold text-xs uppercase tracking-widest">{t('home.supportedBy')}</p>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-16 opacity-50">
              <h4 className="text-lg font-black text-gray-800">WONDERFUL INDONESIA</h4>
              <h4 className="text-lg font-black text-gray-800">PEMKOT BAUBAU</h4>
              <h4 className="text-lg font-black text-gray-800">KEMENPAREKRAF</h4>
            </div>
          </section>

          {/* Bottom CTA */}
          <section className="bg-blue-600 rounded-[32px] p-8 md:p-12 text-center shadow-xl shadow-blue-600/20 relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
            
            <h2 className="text-2xl md:text-3xl font-bold mb-3 relative z-10 text-white">{t('home.ctaTitle')}</h2>
            <p className="text-blue-100 text-sm mb-8 max-w-md mx-auto relative z-10">{t('home.ctaDesc')}</p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold shadow-lg hover:bg-gray-50 active:scale-95 transition-all relative z-10 text-[15px]">
              {t('home.ctaButton')}
            </button>
          </section>

        </div>
      </main>
      <BottomNav />
    </div>
  );
}
