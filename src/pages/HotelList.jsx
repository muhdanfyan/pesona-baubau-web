import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';

const hotels = [
  {
    id: 1,
    name: 'Hotel Nirwana',
    bintang: 4,
    price: 45,
    location: 'Dekat Pantai Nirwana',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&auto=format&fit=crop&q=60',
    amenities: ['Kolam Renang', 'Restoran', 'Parkir', 'AC', 'Sarapan'],
    description: 'Hotel bintang 4 dengan pemandangan laut yang indah, tepat di dekat Pantai Nirwana. Fasilitas lengkap dengan pelayanan ramah khas Buton.',
  },
  {
    id: 2,
    name: 'Homestay Benteng',
    bintang: 2,
    price: 15,
    location: 'Dekat Benteng Keraton',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=500&auto=format&fit=crop&q=60',
    amenities: ['AC', 'Kamar Mandi Dalam', 'WiFi'],
    description: 'Homestay nyaman dan terjangkau di pusat sejarah Baubau. Cocok untuk backpacker yang ingin eksplorasi budaya.',
  },
  {
    id: 3,
    name: 'Resort Samparona',
    bintang: 3,
    price: 30,
    location: 'Di Hutan Pinus Samparona',
    image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=500&auto=format&fit=crop&q=60',
    amenities: ['Camping Ground', 'Restoran', 'Area Api Unggun', 'Parkir', 'Pemandangan Alam'],
    description: 'Resort unik di tengah hutan pinus. Nikmati udara segar dan suasana alam yang menenangkan.',
  },
  {
    id: 4,
    name: 'Penginapan Bahari',
    bintang: 2,
    price: 20,
    location: 'Pusat Kota Baubau',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=500&auto=format&fit=crop&q=60',
    amenities: ['AC', 'WiFi', 'Kamar Mandi Dalam', 'Sarapan'],
    description: 'Penginapan strategis di pusat kota, dekat dengan berbagai destinasi kuliner dan tempat wisata utama Baubau.',
  },
];

const stars = (n) => '★'.repeat(n) + '☆'.repeat(4 - n);

export default function HotelList() {
  const navigate = useNavigate();
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [showDetail, setShowDetail] = useState(false);

  return (
    <div className="min-h-screen pb-24 bg-surface">
      <Header
        showBack
        title="Penginapan"
      />
      <main className="max-w-4xl mx-auto px-md py-lg">
        <div className="text-center mb-xl">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-xs">Temukan Penginapan</h2>
          <p className="text-on-surface-variant font-body-md">Pilih penginapan terbaik untuk liburan Anda di Baubau.</p>
        </div>

        {showDetail && selectedHotel ? (
          <div className="bg-surface-container-lowest rounded-xl shadow-sm border border-surface-variant overflow-hidden">
            <div className="relative">
              <img
                src={selectedHotel.image}
                alt={selectedHotel.name}
                className="w-full h-56 object-cover"
              />
              <button
                onClick={() => setShowDetail(false)}
                className="absolute top-4 left-4 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center border border-white/20 active:scale-95 transition-transform"
              >
                <span className="material-symbols-outlined text-white text-[20px]">arrow_back</span>
              </button>
            </div>
            <div className="p-xl">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-headline-sm text-headline-sm text-primary">{selectedHotel.name}</h3>
                <span className="text-yellow-500 text-sm">{stars(selectedHotel.bintang)}</span>
              </div>
              <div className="flex items-center gap-1 text-on-surface-variant mb-md">
                <span className="material-symbols-outlined text-sm">location_on</span>
                <span className="font-body-sm">{selectedHotel.location}</span>
              </div>
              <p className="font-body-md text-on-surface-variant mb-lg">{selectedHotel.description}</p>

              <div className="mb-lg">
                <h4 className="font-label-md text-primary mb-sm">Fasilitas</h4>
                <div className="flex flex-wrap gap-sm">
                  {selectedHotel.amenities.map((a, i) => (
                    <span key={i} className="bg-primary-fixed-dim/10 text-primary px-md py-1 rounded-full font-label-sm text-sm">
                      {a}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-t border-surface-variant pt-lg">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-headline-sm text-headline-sm text-primary">${selectedHotel.price}</p>
                    <p className="font-body-sm text-on-surface-variant">/ malam</p>
                  </div>
                  <div className="text-right">
                    <p className="font-body-sm text-on-surface-variant">Rp {(selectedHotel.price * 16500).toLocaleString('id-ID')}</p>
                    <p className="font-label-sm text-on-surface-variant">/ malam</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-md">
            {hotels.map((hotel) => (
              <div
                key={hotel.id}
                onClick={() => { setSelectedHotel(hotel); setShowDetail(true); }}
                className="bg-surface-container-lowest rounded-xl shadow-sm border border-surface-variant overflow-hidden hover:shadow-md active:scale-[0.98] transition-all cursor-pointer"
              >
                <div className="flex">
                  <div className="w-32 h-32 shrink-0">
                    <img
                      src={hotel.image}
                      alt={hotel.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-md flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-center">
                        <h3 className="font-headline-sm text-headline-sm text-primary">{hotel.name}</h3>
                        <span className="text-yellow-500 text-xs">{stars(hotel.bintang)}</span>
                      </div>
                      <div className="flex items-center gap-1 text-on-surface-variant mt-1">
                        <span className="material-symbols-outlined text-xs">location_on</span>
                        <span className="font-body-sm text-xs">{hotel.location}</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-end mt-auto">
                      <span className="font-headline-sm text-headline-sm text-primary">${hotel.price}<span className="font-body-sm text-on-surface-variant text-xs">/malam</span></span>
                      <span className="material-symbols-outlined text-primary">chevron_right</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
      <BottomNav />
    </div>
  );
}
