import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import L from 'leaflet';
import { useLanguage } from '../contexts/LanguageContext';

const poiData = [
  {
    id: 1,
    name: "Benteng Keraton Buton",
    category: "Culture",
    coords: [-5.47472, 122.60167],
    rating: 4.9,
    desc: "Benteng terluas di dunia dengan pemandangan teluk yang memukau.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB6XsimgTziDiZRAnuEuKGWfuID6cpFdsRPtK3xoQhZ5Oh1z8DDC6ML_zaaifaotiYbmBHFyucoPFtm_ewpKTfo-yrbvoQs2KK10fuKVh5kYMX0FmcZ0UOA51YoACW_ibBpk3CatX-2U3cTNPEmWn3eF9ISovrXm4IxbAx0_UlpS_sBwRRvdDrsI_9dpVozl28Ouvhzt27vlgum6iseMbPadoBTxLXcSJZq_6NDrhkrN8gHku6JlzicS1G3syLUfSQm5rftAW2kQkc",
  },
  {
    id: 4,
    name: "Istana Malige",
    category: "Culture",
    coords: [-5.46743, 122.59253],
    rating: 4.9,
    desc: "Rumah adat Kesultanan Buton dengan konstruksi kayu tanpa paku.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB0aNQ2OTt9yjUqW5MEbZTVgUrnUXlxkgpkdLrFNEKls_gwRR7DD_o0bJZQ4dQZpTIGL6GYbifbKviisNt4mTmNfRNDcJgASsK79Mzzz5TtNuoxXOZChICvhzvegK0_GPD-7aSgAhulE_Rdy9h1RAqIh4P_ei1qTJk9WdTiEJ6GH0F2PMGTv1mkQe4OP1N8QZJgbF5sIZfrU5DuY7DkL3ZjM79Du_NWXZf3mrjgkV4roh5Ea35IgV0tA6DiKok737Tua7Myiycyay0",
  }
];

// Dummy route between Istana Malige and Benteng Keraton
const routeCoords = [
  [-5.46743, 122.59253],
  [-5.46900, 122.59500],
  [-5.47200, 122.59800],
  [-5.47472, 122.60167],
];

const createCustomIcon = (type, img) => {
  if (type === 'user') {
    return L.divIcon({
      className: 'custom-leaflet-marker',
      html: `<div class="w-12 h-12 rounded-full border-[3px] border-blue-500 bg-white overflow-hidden shadow-lg hover:scale-110 transition-transform">
              <img src="${img}" class="w-full h-full object-cover" />
             </div>`,
      iconSize: [48, 48],
      iconAnchor: [24, 48],
    });
  }

  // Gas station / standard pin
  return L.divIcon({
    className: 'custom-leaflet-marker',
    html: `<div class="relative flex items-center justify-center w-10 h-10 bg-white text-orange-500 rounded-full border-2 border-orange-100 shadow-[0_8px_16px_rgba(0,0,0,0.15)] hover:scale-110 transition-transform">
            <span class="material-symbols-outlined text-[20px]" style="font-variation-settings: 'FILL' 1;">local_gas_station</span>
            <div class="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white rotate-45 border-r-2 border-b-2 border-orange-100"></div>
           </div>`,
    iconSize: [40, 48],
    iconAnchor: [20, 48],
  });
};

export default function Peta() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <div className="overflow-hidden h-screen flex flex-col bg-blue-50 relative font-sans">
      
      {/* Floating Top Bar */}
      <div className="absolute top-0 left-0 right-0 z-[1000] p-6 flex justify-between items-start pointer-events-none">
        <button 
          onClick={() => navigate(-1)}
          className="w-11 h-11 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center border border-gray-100 shadow-sm hover:bg-white transition-colors pointer-events-auto"
        >
          <span className="material-symbols-outlined text-gray-700 text-[20px]">arrow_back_ios_new</span>
        </button>
        <button className="w-11 h-11 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center border border-gray-100 shadow-sm hover:bg-white transition-colors pointer-events-auto">
          <span className="material-symbols-outlined text-gray-700 text-[20px]">info</span>
        </button>
      </div>

      {/* Map Area */}
      <div className="flex-grow h-full relative z-0">
        <MapContainer 
          center={[-5.47100, 122.59700]} 
          zoom={15} 
          className="w-full h-full z-0"
          zoomControl={false}
        >
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
            attribution='&copy; <a href="https://carto.com/">CARTO</a>'
          />
          
          <Polyline positions={routeCoords} color="#3b82f6" weight={6} opacity={0.8} />

          {/* Start Point (User) */}
          <Marker position={routeCoords[0]} icon={createCustomIcon('user', 'https://i.pravatar.cc/150?img=11')} />
          
          {/* End Point (Destination) */}
          <Marker position={routeCoords[3]} icon={createCustomIcon('user', 'https://i.pravatar.cc/150?img=32')} />
          
          {/* POI Marker (Gas Station/Other) */}
          <Marker position={[-5.47100, 122.59400]} icon={createCustomIcon('poi')} />
          
        </MapContainer>
        
        {/* Floating map controls (right side) */}
        <div className="absolute bottom-[45vh] right-6 z-[1000] flex flex-col gap-2">
          <button className="w-11 h-11 bg-white rounded-xl shadow-lg flex items-center justify-center text-gray-600 font-bold text-xl hover:bg-gray-50 active:scale-95 transition-all">+</button>
          <button className="w-11 h-11 bg-white rounded-xl shadow-lg flex items-center justify-center text-gray-600 font-bold text-xl hover:bg-gray-50 active:scale-95 transition-all">-</button>
        </div>
      </div>

      {/* Bottom Sheet */}
      <div className="absolute bottom-0 left-0 right-0 h-[42vh] bg-white rounded-t-[32px] shadow-[0_-10px_40px_rgba(0,0,0,0.1)] z-[1000] px-6 pt-5 pb-8 flex flex-col">
        {/* Drag handle */}
        <div className="w-12 h-1.5 bg-gray-200 rounded-full mx-auto mb-6"></div>
        
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-gray-900" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
            <h3 className="font-bold text-gray-900 text-lg">{t('map.currentLocation')}</h3>
          </div>
          <div className="flex items-center gap-2 text-blue-600 font-bold text-sm">
            <span>47 min</span>
            <span className="text-gray-400 font-medium text-xs">(8.04 km)</span>
          </div>
        </div>

        {/* Scrollable list */}
        <div className="flex-1 overflow-y-auto hide-scrollbar space-y-4 pr-2">
          
          {/* List Item 1 */}
          <div className="flex bg-white border border-gray-100 rounded-2xl p-3 shadow-[0_2px_12px_rgba(0,0,0,0.04)] gap-4 hover:border-blue-100 transition-colors">
            <img 
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=200" 
              alt="Hotel" 
              className="w-20 h-20 rounded-xl object-cover flex-shrink-0"
            />
            <div className="flex-1 flex flex-col justify-center">
              <h4 className="font-bold text-gray-900 text-[15px] mb-0.5">{t('map.hotels')}</h4>
              <p className="text-gray-400 text-xs mb-2">{t('map.bestHotels')}</p>
              <button className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-600/30 active:scale-95 transition-transform">
                <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>directions</span>
              </button>
            </div>
          </div>

          {/* List Item 2 */}
          <div className="flex bg-white border border-gray-100 rounded-2xl p-3 shadow-[0_2px_12px_rgba(0,0,0,0.04)] gap-4 hover:border-blue-100 transition-colors">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6XsimgTziDiZRAnuEuKGWfuID6cpFdsRPtK3xoQhZ5Oh1z8DDC6ML_zaaifaotiYbmBHFyucoPFtm_ewpKTfo-yrbvoQs2KK10fuKVh5kYMX0FmcZ0UOA51YoACW_ibBpk3CatX-2U3cTNPEmWn3eF9ISovrXm4IxbAx0_UlpS_sBwRRvdDrsI_9dpVozl28Ouvhzt27vlgum6iseMbPadoBTxLXcSJZq_6NDrhkrN8gHku6JlzicS1G3syLUfSQm5rftAW2kQkc" 
              alt="Keraton" 
              className="w-20 h-20 rounded-xl object-cover flex-shrink-0"
            />
            <div className="flex-1 flex flex-col justify-center">
              <h4 className="font-bold text-gray-900 text-[15px] mb-0.5">{t('map.nearby')}</h4>
              <p className="text-gray-400 text-xs mb-2">{t('map.bestPlaces')}</p>
              <button className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-600/30 active:scale-95 transition-transform">
                <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>directions</span>
              </button>
            </div>
          </div>
          
        </div>
      </div>

      <style>{`
        .custom-leaflet-marker {
          background: transparent;
          border: none;
        }
        .leaflet-container {
          background: #eef2f6;
        }
      `}</style>
    </div>
  );
}
