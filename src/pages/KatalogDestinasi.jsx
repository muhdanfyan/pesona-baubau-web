import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';
import CardDestinasi from '../components/CardDestinasi';
import SearchBar from '../components/SearchBar';

const categories = ['Semua', 'Sejarah', 'Alam', 'Religi', 'Pantai'];

const destinations = [
  { id: 1, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAVzuSTLhfJDJaArRR3n3VGms0AxTbiG-MQU_9EiE4umEVii-xq4NaDErIIJpH6oUkZRf2b-P4i9_h4kUZvfMfmAAQT1RKRBJ9avQ5ypGEPMkpv_QU7mYeFLO1bFWhn7E-NdJNAeEKbJI1sJrlfqLZCO7F4qmlwRJYnf3_yaZ4JipyNTqQ0GFE57ifr7PA9iBCsep-1X0nuyptOy4OyKLzxI9EMAK_WCGLH-oU1CCPoIDpUsoCUDln42PCs44Tx8yn_PqFdMKY3V6M', title: 'Benteng Keraton Buton', category: 'Sejarah', rating: '4.9', description: 'Benteng terluas di dunia dengan pemandangan teluk Baubau yang memukau.' },
  { id: 2, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC7kC8ZY-e4FYkaxTUz6Y-CVO9Dz_Nh8M8teLcLw1OOmPpbpn1yguqB14IkjAlagE4SYzkOt_tIENMCHoTJV3d85RZXf5-h8QCgJejip0tWrhpYXHg6T_7VhDEa9YSBBOvuBjCqUMyJiroFCNvXjNxU4CiXpEKfc0mA_KEg_hOm3W-YWha5hEP4TbJ1jJoG42vFz8JPuKOzsLFOUKoW4yfo5EoeG6PbeAsxIzeNWBAoxeN0zCJb15HA1BSIHBrEY-cAj49EAMeZEyM', title: 'Pantai Nirwana', category: 'Pantai', rating: '4.8', description: 'Air jernih tiga warna dengan hamparan pasir putih yang sangat halus.' },
  { id: 3, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAC0c0_6EIy5_MABvdP8hLiCdyL2zpximvBTwMWsBGFR5My1VAdFCRR6IyOVkA9u7-_Rh-Wbj96E5XRrjJmS9ggQzSZxgUxtTGnrfeWBmTY31I6HKLurH7vliChARdhI9uqTVoIHEIBHWUmrAk5h6sYn-EaZPoarMhgCMu7vRBvD4a1O9U2j3mWuNgZxJOYjksPUnhsUSjrLP9VxG7zlrz4i6y31Rr561CAznmGDxOsOXwQb3bOMbV_Jq2VVxC432G_nWNRIldyWDE', title: 'Air Terjun Samparona', category: 'Alam', rating: '4.6', description: 'Petualangan trekking menuju air terjun tersembunyi di tengah hutan pinus.' },
  { id: 4, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBAFA31yf0rruVsujt16pytwzZBR7fSO3MCJaxOXDCafTtq3DemNb3w-vDl81YICzs603Qb9ljkX68fPNM9mUL9uFPYTYNUC8CZqtyz2GHYCAd46R2Gw5ukMXUrq0Ui0g5POxHqgV1i2XFpGLNT5kNYE57p46qfJBh4PH2T1OA8J0UoPdRn8nO30nkAmw9RlRsOqBy5RFbLocLONWeCCbbzdfd_w2Y81HK4Lz_kh9HEXK6ISsRKKGtpDfLtYsc3RNRBmVSFPRFoMJE', title: 'Masjid Agung Keraton', category: 'Religi', rating: '4.7', description: 'Masjid bersejarah saksi bisu kejayaan Kesultanan Buton di masa lampau.' },
];

export default function KatalogDestinasi() {
  const [activeCategory, setActiveCategory] = useState('Semua');
  const [viewMode, setViewMode] = useState('grid');

  const filtered = activeCategory === 'Semua'
    ? destinations
    : destinations.filter(d => d.category === activeCategory);

  return (
    <div className="min-h-screen pb-24 bg-[#f4f7fe] font-sans">
      <div className="max-w-7xl mx-auto">
        <Header
          showBack
          title="Katalog Destinasi"
          rightAction={
            <div className="w-9 h-9 md:w-10 md:h-10 rounded-full overflow-hidden border-2 border-white shadow-sm">
              <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQKQpGWHqYt6pB3zPfWS5fiCHQkCRArfgfjHzbO2Jb-gZ6lq7SY6T6Hey_hwds3kXyOzkWHyWBFOYgDwlOjbKlZ91M21v0xYzGWFLC_JEY6pIB4Kb2njXNCsaS-4zDWeM7aP91sNKAJ1j08TJ3F1em2i3tXCYXhdNOvz-vQFPne6F9_R9_JRSdxVPOK_VpeMbORNSz0TcUkTdhlToQuOSVhixxkMaBWuFvjGVCzkRJy3fLGBFRwUuFUaHaAswe_c4OZ_IOjLnK80U" alt="Profile" />
            </div>
          }
        />
        
        <main className="px-4 md:px-6 mt-6 md:mt-8 space-y-6 md:space-y-8">
          <div className="bg-white rounded-2xl shadow-sm p-2">
            <SearchBar placeholder="Cari destinasi impianmu..." />
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-gray-900 text-lg md:text-xl">Kategori Populer</h3>
              <div className="flex bg-gray-100 p-1 rounded-xl gap-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-1.5 px-3 rounded-lg transition-all ${viewMode === 'grid' ? 'bg-white shadow-sm text-blue-600 font-bold' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  <span className="material-symbols-outlined text-[20px]">grid_view</span>
                </button>
                <button
                  onClick={() => setViewMode('map')}
                  className={`p-1.5 px-3 rounded-lg transition-all ${viewMode === 'map' ? 'bg-white shadow-sm text-blue-600 font-bold' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  <span className="material-symbols-outlined text-[20px]">map</span>
                </button>
              </div>
            </div>
            
            <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-2 -mx-4 px-4 md:mx-0 md:px-0">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`whitespace-nowrap px-5 py-2.5 rounded-full text-[14px] md:text-[15px] font-semibold transition-all shadow-sm ${
                    activeCategory === cat
                      ? 'bg-blue-600 text-white'
                      : 'bg-white border border-gray-100 text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {viewMode === 'grid' ? (
            <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {filtered.map(d => (
                <div key={d.id} className="bg-white p-2 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                  <CardDestinasi {...d} />
                </div>
              ))}
            </section>
          ) : (
            <div className="h-96 bg-gray-200 rounded-3xl flex items-center justify-center border-4 border-white shadow-sm relative overflow-hidden group cursor-pointer" onClick={() => navigate('/peta')}>
              <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80" alt="Map" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-blue-900/30"></div>
              <div className="text-center relative z-10 bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg transform group-hover:-translate-y-1 transition-transform">
                <span className="material-symbols-outlined text-5xl text-blue-600 mb-2">map</span>
                <p className="font-bold text-gray-900">Buka Peta Interaktif</p>
                <p className="text-sm text-gray-500 mt-1">Jelajahi destinasi dalam mode peta</p>
              </div>
            </div>
          )}
        </main>
      </div>
      <BottomNav />
    </div>
  );
}
