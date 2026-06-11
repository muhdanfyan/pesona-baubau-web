import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';
import CardPenginapan from '../components/CardPenginapan';
import { useLanguage } from '../contexts/LanguageContext';

const categories = ['Semua', 'Hotel', 'Homestay', 'Losmen', 'Resort'];

const accommodations = [
  { 
    id: 1, 
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&auto=format&fit=crop&q=60', 
    name: 'Nirwana Beach Hotel', 
    price: 'Rp 450.000', 
    type: 'Hotel', 
    location: 'Pantai Nirwana, Baubau',
    rating: 4.8
  },
  { 
    id: 2, 
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=500&auto=format&fit=crop&q=60', 
    name: 'Homestay Keraton', 
    price: 'Rp 200.000', 
    type: 'Homestay', 
    location: 'Melai, Baubau',
    rating: 4.5
  },
  { 
    id: 3, 
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=500&auto=format&fit=crop&q=60', 
    name: 'Baubau Resort & Spa', 
    price: 'Rp 1.250.000', 
    type: 'Resort', 
    location: 'Bataraguru, Baubau',
    rating: 4.9
  },
  { 
    id: 4, 
    image: 'https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?w=500&auto=format&fit=crop&q=60', 
    name: 'Losmen Sederhana', 
    price: 'Rp 100.000', 
    type: 'Losmen', 
    location: 'Batulo, Baubau',
    rating: 4.0
  },
];

export default function KatalogPenginapan() {
  const [activeCategory, setActiveCategory] = useState('Semua');
  const navigate = useNavigate();
  const { t } = useLanguage();

  const filtered = activeCategory === 'Semua'
    ? accommodations
    : accommodations.filter(a => a.type.toLowerCase() === activeCategory.toLowerCase());

  return (
    <div className="min-h-screen pb-32 bg-[#F5F3F0]">
      <Header
        title="Penginapan"
        showBack={true}
      />
      
      <main className="max-w-md mx-auto px-md pb-32 pt-md">
        <section className="mb-lg">
          <h2 className="font-headline-md text-headline-md text-on-surface">Cari Tempat Istirahat</h2>
          <p className="font-body-sm text-on-surface-variant mt-xs">Pesan penginapan terbaik untuk liburan Anda di Baubau</p>
        </section>

        <section className="mb-lg">
          <div className="relative flex items-center">
            <span className="material-symbols-outlined absolute left-md text-outline">search</span>
            <input 
              className="w-full pl-xl pr-md py-md bg-surface border-none rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all font-body-md shadow-sm" 
              placeholder="Cari hotel atau homestay..." 
              type="text" 
            />
          </div>
        </section>

        <section className="mb-lg -mx-md px-md overflow-x-auto hide-scrollbar flex gap-sm">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-md py-sm rounded-full font-label-md transition-transform active:scale-95 shrink-0 shadow-sm ${
                activeCategory === cat
                  ? 'bg-primary text-on-primary'
                  : 'bg-surface text-on-surface-variant hover:bg-surface-container-highest'
              }`}
            >
              {cat}
            </button>
          ))}
        </section>

        <div className="flex flex-col gap-md">
          {filtered.map(penginapan => (
            <CardPenginapan key={penginapan.id} {...penginapan} />
          ))}
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
