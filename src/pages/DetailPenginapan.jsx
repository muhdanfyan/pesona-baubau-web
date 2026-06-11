import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { useLanguage } from '../contexts/LanguageContext';
import { useState } from 'react';

const mockPenginapanData = {
  '1': { 
    id: 1, 
    name: 'Nirwana Beach Hotel', 
    price: 'Rp 450.000', 
    type: 'Hotel', 
    location: 'Pantai Nirwana, Baubau',
    rating: 4.8,
    description: 'Nirwana Beach Hotel menawarkan pemandangan laut yang menakjubkan, akses langsung ke pantai berpasir putih, dan fasilitas lengkap untuk liburan keluarga yang tak terlupakan.',
    images: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=500&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=500&auto=format&fit=crop&q=60'
    ],
    facilities: ['WiFi Gratis', 'AC', 'Kolam Renang', 'Sarapan', 'Parkir', 'Resepsionis 24 Jam'],
    rooms: [
      { id: 'r1', name: 'Standard Room', capacity: '2 Dewasa', price: 450000 },
      { id: 'r2', name: 'Deluxe Sea View', capacity: '2 Dewasa', price: 650000 },
      { id: 'r3', name: 'Family Suite', capacity: '4 Dewasa', price: 950000 },
    ]
  }
};

export default function DetailPenginapan() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [activeImage, setActiveImage] = useState(0);

  // Fallback if data doesn't exist (using mock 1)
  const data = mockPenginapanData[id] || mockPenginapanData['1'];

  const formatRupiah = (number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(number);
  };

  const handleBooking = () => {
    // Arahkan ke WhatsApp untuk saat ini
    const text = encodeURIComponent(`Halo, saya ingin memesan kamar di ${data.name}. Mohon informasi ketersediaannya.`);
    window.open(`https://wa.me/6281234567890?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen pb-32 bg-[#F5F3F0]">
      <Header
        title="Detail Penginapan"
        showBack={true}
        onBack={() => navigate(-1)}
      />

      <main className="max-w-md mx-auto">
        {/* Image Gallery */}
        <div className="relative aspect-[4/3] w-full bg-black">
          <img 
            src={data.images[activeImage]} 
            alt={data.name} 
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4 bg-secondary-container/90 text-on-secondary-container px-3 py-1 rounded-full font-bold text-xs shadow-sm backdrop-blur-md">
            {data.type}
          </div>
          
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
            {data.images.map((img, idx) => (
              <div 
                key={idx}
                onClick={() => setActiveImage(idx)}
                className={`w-16 h-12 rounded-lg border-2 overflow-hidden cursor-pointer ${activeImage === idx ? 'border-primary' : 'border-transparent opacity-70'}`}
              >
                <img src={img} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        <div className="px-md py-lg space-y-md">
          {/* Header Info */}
          <div>
            <div className="flex justify-between items-start">
              <h1 className="font-headline-md text-headline-md font-bold text-on-surface">{data.name}</h1>
              <div className="flex items-center gap-1 bg-surface-container px-2 py-1 rounded-lg">
                <span className="material-symbols-outlined text-orange-400 text-sm" style={{fontVariationSettings:"'FILL' 1"}}>star</span>
                <span className="font-bold text-sm text-on-surface">{data.rating}</span>
              </div>
            </div>
            <div className="flex items-center gap-1 mt-2 text-on-surface-variant">
              <span className="material-symbols-outlined text-sm">location_on</span>
              <span className="font-body-md text-sm">{data.location}</span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="font-headline-sm text-label-lg font-bold mb-2">Tentang Penginapan</h3>
            <p className="font-body-md text-on-surface-variant text-sm leading-relaxed">
              {data.description}
            </p>
          </div>

          {/* Facilities */}
          <div>
            <h3 className="font-headline-sm text-label-lg font-bold mb-3">Fasilitas Utama</h3>
            <div className="flex flex-wrap gap-2">
              {data.facilities.map((fas, index) => (
                <div key={index} className="flex items-center gap-1 bg-surface-container-high px-3 py-1.5 rounded-full text-xs text-on-surface-variant font-medium">
                  <span className="material-symbols-outlined text-[14px] text-primary">check_circle</span>
                  {fas}
                </div>
              ))}
            </div>
          </div>

          {/* Room Types */}
          <div>
            <h3 className="font-headline-sm text-label-lg font-bold mb-3 border-t pt-4">Tipe Kamar Tersedia</h3>
            <div className="space-y-3">
              {data.rooms.map(room => (
                <div key={room.id} className="bg-surface rounded-xl p-4 border border-outline-variant shadow-sm flex justify-between items-center">
                  <div>
                    <h4 className="font-bold text-on-surface text-sm">{room.name}</h4>
                    <div className="flex items-center gap-1 text-on-surface-variant text-xs mt-1">
                      <span className="material-symbols-outlined text-[14px]">group</span>
                      {room.capacity}
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-primary text-sm">{formatRupiah(room.price)}</p>
                    <p className="text-[10px] text-on-surface-variant">/ malam</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>

      {/* Floating Action Button for Booking */}
      <div className="fixed bottom-0 left-0 w-full bg-surface border-t border-outline-variant p-4 pb-safe flex items-center justify-between z-50">
        <div>
          <p className="text-xs text-on-surface-variant">Mulai dari</p>
          <p className="font-bold text-primary text-lg">{data.price}</p>
        </div>
        <button 
          onClick={handleBooking}
          className="bg-primary text-on-primary px-8 py-3 rounded-full font-bold active:scale-95 transition-transform flex items-center gap-2 shadow-lg"
        >
          <span className="material-symbols-outlined text-[20px]">chat</span>
          Tanya Ketersediaan
        </button>
      </div>
    </div>
  );
}
