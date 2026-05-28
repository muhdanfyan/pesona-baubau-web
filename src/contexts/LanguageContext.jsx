import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

const translations = {
  en: {
    nav: {
      home: 'Home',
      map: 'Map',
      event: 'Events',
      profile: 'Profile',
    },
    home: {
      welcome: 'Hi, Friend',
      explore: 'Explore Baubau',
      search: 'Search destinations, culinary...',
      exploreNow: 'Explore Now',
      popularDestinations: 'Popular Destinations',
      seeAll: 'See All',
      statsDestinations: 'Total Destinations',
      statsMsmes: 'Local MSMEs',
      statsEvents: 'Cultural Events',
      statsTourists: 'Tourists',
      upcomingEvents: 'Upcoming Events',
      calendar: 'Calendar',
      featuredMsmes: 'Featured MSMEs',
      allProducts: 'All Products',
      explorationTitle: 'Limitless Exploration',
      explorationDesc: 'Everything you need for the best travel experience.',
      supportedBy: 'SUPPORTED BY',
      ctaTitle: 'Start Your Journey',
      ctaDesc: 'Register for free now and create your first travel itinerary in the city of a thousand fortresses.',
      ctaButton: 'Register Now — Free',
      heroSlides: [
        {
          title: 'Buton Palace Fortress',
          desc: 'Historical witness to the glory of the Buton Sultanate with the widest fortress in the world.',
        },
        {
          title: 'Nirwana Beach',
          desc: 'Beach with stunning seawater color gradations and fine white sand.',
        },
        {
          title: 'Batu Sori',
          desc: 'Iconic rocky island towering in the clear sea of Baubau.',
        },
      ],
      features: [
        {
          title: 'Travel Itinerary',
          desc: 'Save your favorite destinations and easily arrange your holiday itinerary in one synchronized place.',
        },
        {
          title: 'Support Local MSMEs',
          desc: 'Discover authentic products, typical culinary delights, and handcrafts directly from the makers to support the local Baubau economy.',
        },
        {
          title: 'Offline Access',
          desc: 'Access maps and routes of your favorite destinations even without a stable internet connection in remote areas.',
        },
      ],
      popularPlaces: [
        { title: 'Buton Palace Fortress', location: 'Baubau, Southeast Sulawesi' },
        { title: 'Nirwana Beach', location: 'Baubau, Southeast Sulawesi' },
        { title: 'Batu Sori', location: 'Baubau, Southeast Sulawesi' },
      ],
      upcomingEventsList: [
        { title: 'Buton Palace Festival', location: 'Palace Field' },
        { title: 'Pekande-Kandea', location: 'Palace Fortress' },
      ],
      featuredProducts: [
        { title: 'Premium Buton Weave' },
        { title: 'Instant Kasuami' },
      ],
    },
    detail: {
      saved: 'Saved!',
      travelers: 'Travelers',
      person: 'person',
      save: 'Save',
      directions: 'Directions',
      seeMore: 'See More',
      seeLess: 'See Less',
      howToGetThere: 'How to Get There',
      routeJakarta: 'From Jakarta: Flight to Makassar (UPG) or Kendari (KDI), then connect to Baubau (BUW).',
      routeMakassar: 'From Makassar: Direct flight to Baubau (BUW) approx. 1 hour, or via PELNI ship (approx. 14 hours).',
      routeIntl: 'From International Airports (Bali/Jakarta): Transit via Makassar (UPG) then to Baubau.',
      destinations: {
        1: {
          name: 'Buton Palace Fortress',
          address: 'Baubau, Southeast Sulawesi',
          description: 'Buton Palace Fortress is the widest fortress in the world according to Guinness World Records. This historical structure stands as a silent witness to the glory of the Buton Sultanate in the past, featuring a unique architecture built from mountain stones bonded together using egg whites. From atop the fortress, you can view the entire city of Baubau and the stunning surrounding sea.',
        },
        2: {
          name: 'Nirwana Beach',
          address: 'Baubau, Southeast Sulawesi',
          description: 'A beach with stunning seawater color gradations and fine white sand. The perfect spot to relax, swim, and enjoy the sunset.',
        },
        3: {
          name: 'Batu Sori',
          address: 'Baubau, Southeast Sulawesi',
          description: 'An iconic rocky island towering in the middle of Baubau\'s crystal-clear sea.',
        },
        4: {
          name: 'Malige Palace',
          address: 'Baubau, Southeast Sulawesi',
          description: 'Traditional house of the Buton Sultanate constructed from wood without using nails. Located not far from the city center.',
        },
        5: {
          name: 'Samparona Pine Forest',
          address: 'Baubau, Southeast Sulawesi',
          description: 'A cool natural tourist area on the outskirts of Baubau city. Offers a camping ground area, dense rows of pine trees, and aesthetic nature-themed photo spots.',
        },
      },
    },
    profile: {
      title: 'My Profile',
      type: 'Traveler',
      totalTrip: 'Total Trip',
      savedDestinations: 'Saved',
      settings: 'Settings',
      editProfile: 'Edit Profile',
      myItinerary: 'My Itinerary',
      language: 'Language',
      logout: 'Logout',
    },
    map: {
      title: 'Interactive Map',
      currentLocation: 'Current location',
      nearby: 'Nearby',
      hotels: 'Hotels',
      bestHotels: 'Best hotels destination',
      bestPlaces: 'Best places destination',
      poiData: [
        {
          name: 'Buton Palace Fortress',
          desc: 'The widest fortress in the world with a stunning bay view.',
        },
        {
          name: 'Malige Palace',
          desc: 'Traditional house of the Buton Sultanate constructed from wood without nails.',
        },
      ],
    },
    testimonial: {
      title: 'What Travelers Say',
      desc: 'Real experiences from those who have explored the beauty of Baubau with us.',
    },
  },
  id: {
    nav: {
      home: 'Beranda',
      map: 'Peta',
      event: 'Event',
      profile: 'Profil',
    },
    home: {
      welcome: 'Hi, Kawan',
      explore: 'Eksplorasi Baubau',
      search: 'Cari destinasi, kuliner...',
      exploreNow: 'Jelajahi Sekarang',
      popularDestinations: 'Destinasi Populer',
      seeAll: 'Lihat Semua',
      statsDestinations: 'Total Destinasi',
      statsMsmes: 'UMKM Lokal',
      statsEvents: 'Event Budaya',
      statsTourists: 'Wisatawan',
      upcomingEvents: 'Event Mendatang',
      calendar: 'Kalender',
      featuredMsmes: 'UMKM Pilihan',
      allProducts: 'Semua Produk',
      explorationTitle: 'Eksplorasi Tanpa Batas',
      explorationDesc: 'Semua yang Anda butuhkan untuk pengalaman wisata terbaik.',
      supportedBy: 'DIDUKUNG OLEH',
      ctaTitle: 'Mulai Perjalanan Anda',
      ctaDesc: 'Daftar gratis sekarang dan buat rencana wisata pertama Anda di kota seribu benteng.',
      ctaButton: 'Daftar Sekarang — Gratis',
      heroSlides: [
        {
          title: 'Benteng Keraton Buton',
          desc: 'Saksi sejarah kejayaan Kesultanan Buton dengan benteng terluas di dunia.',
        },
        {
          title: 'Pantai Nirwana',
          desc: 'Pantai dengan gradasi warna air laut yang menakjubkan dan pasir putih halus.',
        },
        {
          title: 'Batu Sori',
          desc: 'Ikonik pulau batu karang yang menjulang di tengah laut jernih Baubau.',
        },
      ],
      features: [
        {
          title: 'Rencana Perjalanan',
          desc: 'Simpan destinasi favorit dan susun itinerary liburan Anda dengan mudah di satu tempat yang tersinkronisasi.',
        },
        {
          title: 'Dukung UMKM Lokal',
          desc: 'Temukan produk otentik, kuliner khas, dan kerajinan tangan langsung dari pembuatnya untuk mendukung ekonomi asli Baubau.',
        },
        {
          title: 'Akses Offline',
          desc: 'Akses peta dan rute destinasi favorit Anda meski tanpa koneksi internet yang stabil saat berada di pelosok alam.',
        },
      ],
      popularPlaces: [
        { title: 'Benteng Keraton Buton', location: 'Baubau, Sultra' },
        { title: 'Pantai Nirwana', location: 'Baubau, Sultra' },
        { title: 'Batu Sori', location: 'Baubau, Sultra' },
      ],
      upcomingEventsList: [
        { title: 'Festival Keraton Buton', location: 'Lapangan Keraton' },
        { title: 'Pekande-Kandea', location: 'Benteng Keraton' },
      ],
      featuredProducts: [
        { title: 'Tenun Buton Premium' },
        { title: 'Kasuami Instan' },
      ],
    },
    detail: {
      saved: 'Tersimpan!',
      travelers: 'Wisatawan',
      person: 'orang',
      save: 'Simpan',
      directions: 'Rute',
      seeMore: 'Lihat Selengkapnya',
      seeLess: 'Sembunyikan',
      howToGetThere: 'Cara Menuju ke Sini',
      routeJakarta: 'Dari Jakarta: Penerbangan transit via Makassar (UPG) atau Kendari (KDI), dilanjutkan ke Baubau (BUW).',
      routeMakassar: 'Dari Makassar: Penerbangan langsung ke Baubau (BUW) sekitar 1 jam, atau menggunakan kapal laut PELNI (sekitar 14 jam).',
      routeIntl: 'Dari Bandara Internasional (Bali/Jakarta): Transit via Makassar (UPG) lalu penerbangan lanjutan ke Baubau.',
      destinations: {
        1: {
          name: 'Benteng Keraton Buton',
          address: 'Baubau, Sulawesi Tenggara',
          description: 'Benteng Keraton Buton merupakan benteng terluas di dunia menurut Guinness World Records. Bangunan bersejarah ini menjadi saksi bisu kejayaan Kesultanan Buton pada masa lampau, dengan arsitektur unik yang terbuat dari batu gunung dan direkatkan dengan putih telur. Dari atas benteng, Anda bisa melihat seluruh kota Baubau dan perairan laut yang memukau.',
        },
        2: {
          name: 'Pantai Nirwana',
          address: 'Baubau, Sulawesi Tenggara',
          description: 'Pantai dengan gradasi warna air laut yang menakjubkan dan pasir putih halus. Tempat yang sempurna untuk bersantai, berenang, dan menikmati matahari terbenam.',
        },
        3: {
          name: 'Batu Sori',
          address: 'Baubau, Sulawesi Tenggara',
          description: 'Ikonik pulau batu karang yang menjulang di tengah laut jernih Baubau.',
        },
        4: {
          name: 'Istana Malige',
          address: 'Baubau, Sulawesi Tenggara',
          description: 'Rumah adat Kesultanan Buton yang dibangun dengan konstruksi kayu bersusun tanpa menggunakan paku. Berada tidak jauh dari pusat kota.',
        },
        5: {
          name: 'Hutan Pinus Samparona',
          address: 'Baubau, Sulawesi Tenggara',
          description: 'Kawasan wisata alam sejuk di pinggiran kota Baubau. Menawarkan area camping ground, jajaran pohon pinus yang rapat, dan spot-spot foto estetik bertema alam.',
        },
      },
    },
    profile: {
      title: 'Profil Saya',
      type: 'Wisatawan',
      totalTrip: 'Total Perjalanan',
      savedDestinations: 'Destinasi Disimpan',
      settings: 'Pengaturan',
      editProfile: 'Edit Profil',
      myItinerary: 'Rencana Perjalanan Saya',
      language: 'Bahasa',
      logout: 'Keluar',
    },
    map: {
      title: 'Peta Interaktif',
      currentLocation: 'Lokasi saat ini',
      nearby: 'Sekitar',
      hotels: 'Hotel',
      bestHotels: 'Destinasi hotel terbaik',
      bestPlaces: 'Destinasi tempat terbaik',
      poiData: [
        {
          name: 'Benteng Keraton Buton',
          desc: 'Benteng terluas di dunia dengan pemandangan teluk yang memukau.',
        },
        {
          name: 'Istana Malige',
          desc: 'Rumah adat Kesultanan Buton dengan konstruksi kayu tanpa paku.',
        },
      ],
    },
    testimonial: {
      title: 'Apa Kata Traveler',
      desc: 'Pengalaman nyata dari mereka yang telah menjelajahi keindahan Baubau bersama kami.',
    },
  },
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguageState] = useState(() => {
    return localStorage.getItem('app_language') || 'en';
  });

  const setLanguage = (lang) => {
    setLanguageState(lang);
    localStorage.setItem('app_language', lang);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'id' : 'en');
  };

  const t = (path) => {
    const keys = path.split('.');
    let value = translations[language];
    for (const key of keys) {
      if (value && value[key] !== undefined) {
        value = value[key];
      } else {
        // Fallback to English if key is missing in active language
        let fallbackValue = translations['en'];
        for (const fKey of keys) {
          if (fallbackValue && fallbackValue[fKey] !== undefined) {
            fallbackValue = fallbackValue[fKey];
          } else {
            fallbackValue = path;
            break;
          }
        }
        return fallbackValue;
      }
    }
    return value;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
