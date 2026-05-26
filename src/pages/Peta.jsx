import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

const poiData = [
  {
    id: 1,
    name: "Benteng Keraton Buton",
    category: "Sejarah",
    coords: [-5.47472, 122.60167],
    rating: 4.9,
    desc: "Benteng terluas di dunia dengan pemandangan teluk yang memukau.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB6XsimgTziDiZRAnuEuKGWfuID6cpFdsRPtK3xoQhZ5Oh1z8DDC6ML_zaaifaotiYbmBHFyucoPFtm_ewpKTfo-yrbvoQs2KK10fuKVh5kYMX0FmcZ0UOA51YoACW_ibBpk3CatX-2U3cTNPEmWn3eF9ISovrXm4IxbAx0_UlpS_sBwRRvdDrsI_9dpVozl28Ouvhzt27vlgum6iseMbPadoBTxLXcSJZq_6NDrhkrN8gHku6JlzicS1G3syLUfSQm5rftAW2kQkc",
    link: "/destinasi/1"
  },
  {
    id: 2,
    name: "Pantai Nirwana",
    category: "Pantai",
    coords: [-5.522565, 122.56655],
    rating: 4.8,
    desc: "Pantai pasir putih dengan pemandangan laut yang menenangkan.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAyQYKzX3KuF1dh80_ptXdp2_LTnge1ywhJoicNPgGsWqLX8GfFEO4PSaiw2_XYak3FEQgQErUM511a3hzZ9bT73uapUAx4BXrikAQH8jO_SypbE_5kiqW0Sm1ZvpCJ-JY09jaFFDIXXAFgOn9IWq2bbT9n5kQGbAPV0i-J7ngROlUKrxex97FRuoHN7m_aVvm3gg1krQ2bEud76YRKCdGYhxWZ0nqsIHqVLUTTCc-L1bFMwymqZrePb9QCfa7wgbBMKQShiygCI3Y",
    link: "/destinasi/2"
  },
  {
    id: 3,
    name: "Batu Sori",
    category: "Alam",
    coords: [-5.46222, 122.60583],
    rating: 4.7,
    desc: "Gugusan batu karang eksotis yang memukau di atas laut jernih.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAxCf_dairb8y2kgmRXwCUPU1qVK8nssSDlI6XpcNC40KbDGZC9m4eMSLrkHSa6RJUYoyknjw1g9CG2U4bp0u8u3IEr0Sj53aueTQ9h16KelstV4Q6X6gYauwU8bwg5bp2hTzqpmaxy5k9qUPoHinQHWfRUhIkiQHsCayZ3VdMU1xy5TVwnMOGL6I9hHPrcExA0rdofvyO68ooL8c19WrSNT9Sb-xfHPgqssiFTUKdwGnjOkTQ8Lyc-x2XwG0AxKe6yUsIcEVbj7EY",
    link: "/destinasi/3"
  },
  {
    id: 4,
    name: "Istana Malige",
    category: "Sejarah",
    coords: [-5.46743, 122.59253],
    rating: 4.9,
    desc: "Rumah adat Kesultanan Buton dengan konstruksi kayu tanpa paku.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB0aNQ2OTt9yjUqW5MEbZTVgUrnUXlxkgpkdLrFNEKls_gwRR7DD_o0bJZQ4dQZpTIGL6GYbifbKviisNt4mTmNfRNDcJgASsK79Mzzz5TtNuoxXOZChICvhzvegK0_GPD-7aSgAhulE_Rdy9h1RAqIh4P_ei1qTJk9WdTiEJ6GH0F2PMGTv1mkQe4OP1N8QZJgbF5sIZfrU5DuY7DkL3ZjM79Du_NWXZf3mrjgkV4roh5Ea35IgV0tA6DiKok737Tua7Myiycyay0",
    link: "/destinasi/4"
  },
  {
    id: 5,
    name: "Masjid Agung Keraton Buton",
    category: "Religi",
    coords: [-5.47350, 122.60200],
    rating: 4.8,
    desc: "Masjid bersejarah pusat penyebaran Islam di Kesultanan Buton.",
    image: "https://images.unsplash.com/photo-1542816417-0983c9c9ad53?auto=format&fit=crop&q=80&w=800",
    link: "/destinasi/5"
  },
];

const categories = [
  { id: 'all', icon: 'layers', label: 'Semua' },
  { id: 'Sejarah', icon: 'history_edu', label: 'Sejarah' },
  { id: 'Pantai', icon: 'beach_access', label: 'Pantai' },
  { id: 'Alam', icon: 'forest', label: 'Alam' },
  { id: 'Religi', icon: 'temple_hindu', label: 'Religi' },
];

const createCustomIcon = (category) => {
  let color = 'bg-primary';
  let icon = 'location_on';

  if (category === 'Sejarah') { color = 'bg-primary'; icon = 'history_edu'; }
  else if (category === 'Pantai') { color = 'bg-secondary'; icon = 'beach_access'; }
  else if (category === 'Alam') { color = 'bg-tertiary'; icon = 'forest'; }
  else if (category === 'Religi') { color = 'bg-on-secondary-container'; icon = 'temple_hindu'; }

  return L.divIcon({
    className: 'custom-leaflet-marker',
    html: `<div class="relative flex items-center justify-center w-10 h-10 ${color} text-white rounded-full border-2 border-white shadow-lg hover:scale-110 transition-transform">
            <span class="material-symbols-outlined text-[20px]">${icon}</span>
           </div>`,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40],
  });
};

export default function Peta() {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredData = activeFilter === 'all' 
    ? poiData 
    : poiData.filter(poi => poi.category === activeFilter);

  return (
    <div className="overflow-hidden h-screen flex flex-col bg-background">
      <Header
        title="Peta Interaktif"
        rightAction={
          <div className="flex items-center gap-md">
            <button className="material-symbols-outlined p-xs rounded-full hover:bg-surface-container-low transition-colors text-on-surface-variant">search</button>
            <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container font-label-sm">
              JD
            </div>
          </div>
        }
      />
      <main className="flex-grow relative overflow-hidden">
        
        {/* Layer Filters */}
        <div className="absolute top-md left-0 right-0 z-[1000] px-md">
          <div className="flex gap-sm overflow-x-auto hide-scrollbar pb-xs">
            {categories.map((item, i) => (
              <button
                key={i}
                onClick={() => setActiveFilter(item.id)}
                className={`flex-shrink-0 px-md py-sm rounded-full font-label-md flex items-center gap-xs shadow-md transition-transform active:scale-95 ${
                  activeFilter === item.id
                    ? 'bg-primary text-on-primary'
                    : 'bg-surface-container-lowest text-on-surface-variant border border-outline-variant hover:border-primary'
                }`}
              >
                <span className="material-symbols-outlined text-[18px]">{item.icon}</span>
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Leaflet Map */}
        <MapContainer 
          center={[-5.47000, 122.59500]} 
          zoom={13} 
          className="w-full h-full z-0"
          zoomControl={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          
          {filteredData.map(poi => (
            <Marker 
              key={poi.id} 
              position={poi.coords} 
              icon={createCustomIcon(poi.category)}
            >
              <Popup className="custom-popup" closeButton={false}>
                <div className="w-[240px] rounded-xl overflow-hidden shadow-sm bg-surface">
                  <div className="relative h-32">
                    <img className="w-full h-full object-cover" src={poi.image} alt={poi.name} />
                  </div>
                  <div className="p-3 bg-surface">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-headline-sm text-[16px] text-primary leading-tight m-0">{poi.name}</h3>
                      <div className="flex items-center gap-1 bg-surface-container-low px-1.5 py-0.5 rounded">
                        <span className="material-symbols-outlined text-orange-400 text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        <span className="font-label-sm text-[11px]">{poi.rating}</span>
                      </div>
                    </div>
                    <p className="text-on-surface-variant text-[12px] mb-3 leading-snug">{poi.desc}</p>
                    <button 
                      onClick={() => navigate(poi.link)}
                      className="w-full py-2 rounded-lg bg-primary-container text-on-primary-container font-label-md flex items-center justify-center gap-1 hover:bg-primary hover:text-on-primary transition-all border-none cursor-pointer"
                    >
                      Lihat Detail
                      <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                    </button>
                  </div>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>

        {/* POI Legend */}
        <div className="absolute left-md bottom-[100px] z-[1000] pointer-events-none hidden md:block">
          <div className="bg-surface/90 backdrop-blur-md p-md rounded-2xl shadow-lg border border-outline-variant/50 max-w-[180px] pointer-events-auto">
            <h4 className="font-label-md text-primary mb-sm flex items-center gap-xs">
              <span className="material-symbols-outlined text-[18px]">legend_toggle</span>
              Kategori
            </h4>
            <div className="space-y-2">
              {categories.slice(1).map((cat, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full ${
                    cat.id === 'Sejarah' ? 'bg-primary' : 
                    cat.id === 'Pantai' ? 'bg-secondary' : 
                    cat.id === 'Alam' ? 'bg-tertiary' : 'bg-on-secondary-container'
                  }`}></div>
                  <span className="text-[12px] font-body-sm text-on-surface-variant">{cat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <BottomNav />
      
      {/* Global styles for leaflet popup overrides to fit our UI */}
      <style>{`
        .custom-popup .leaflet-popup-content-wrapper {
          padding: 0;
          overflow: hidden;
          border-radius: 12px;
          border: 1px solid rgba(193, 199, 207, 0.5); /* outline-variant */
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
          background-color: var(--color-surface, #fff8f1);
        }
        .custom-popup .leaflet-popup-content {
          margin: 0;
          width: 240px !important;
        }
        .custom-popup .leaflet-popup-tip-container {
          margin-top: -1px;
        }
        .custom-popup .leaflet-popup-tip {
          background-color: var(--color-surface, #fff8f1);
          border: 1px solid rgba(193, 199, 207, 0.5);
          border-top: none;
          border-left: none;
        }
        .custom-leaflet-marker {
          background: transparent;
          border: none;
        }
        .leaflet-container {
          background: #f4ede3; /* surface-container */
        }
      `}</style>
    </div>
  );
}
