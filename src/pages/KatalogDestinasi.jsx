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
    <div className="min-h-screen pb-24">
      <Header
        showBack
        title="Katalog Destinasi"
        rightAction={
          <div className="w-8 h-8 rounded-full overflow-hidden border border-outline-variant">
            <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQKQpGWHqYt6pB3zPfWS5fiCHQkCRArfgfjHzbO2Jb-gZ6lq7SY6T6Hey_hwds3kXyOzkWHyWBFOYgDwlOjbKlZ91M21v0xYzGWFLC_JEY6pIB4Kb2njXNCsaS-4zDWeM7aP91sNKAJ1j08TJ3F1em2i3tXCYXhdNOvz-vQFPne6F9_R9_JRSdxVPOK_VpeMbORNSz0TcUkTdhlToQuOSVhixxkMaBWuFvjGVCzkRJy3fLGBFRwUuFUaHaAswe_c4OZ_IOjLnK80U" alt="Profile" />
          </div>
        }
      />
      <main className="px-md mt-md space-y-md">
        <SearchBar placeholder="Cari destinasi impianmu..." />
        <div className="space-y-sm">
          <div className="flex justify-between items-center">
            <h3 className="font-label-md text-label-md text-on-surface-variant">Kategori Populer</h3>
            <div className="flex bg-surface-container-high p-1 rounded-lg gap-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1 px-2 rounded-md transition-all ${viewMode === 'grid' ? 'bg-white shadow-sm text-primary' : 'text-on-surface-variant hover:bg-surface-container'}`}
              >
                <span className="material-symbols-outlined text-[18px]">grid_view</span>
              </button>
              <button
                onClick={() => setViewMode('map')}
                className={`p-1 px-2 rounded-md transition-all ${viewMode === 'map' ? 'bg-white shadow-sm text-primary' : 'text-on-surface-variant hover:bg-surface-container'}`}
              >
                <span className="material-symbols-outlined text-[18px]">map</span>
              </button>
            </div>
          </div>
          <div className="flex gap-sm overflow-x-auto hide-scrollbar -mx-md px-md py-1">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap px-md py-2 rounded-full font-label-md transition-all ${
                  activeCategory === cat
                    ? 'bg-primary-container text-on-primary-container shadow-sm'
                    : 'bg-surface-container-lowest border border-outline-variant text-on-surface-variant hover:bg-surface-container-high'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        {viewMode === 'grid' ? (
          <section className="grid grid-cols-2 gap-md">
            {filtered.map(d => (
              <CardDestinasi key={d.id} {...d} />
            ))}
          </section>
        ) : (
          <div className="h-96 bg-surface-container-high rounded-xl flex items-center justify-center">
            <div className="text-center">
              <span className="material-symbols-outlined text-5xl text-outline mb-2">map</span>
              <p className="font-body-sm text-on-surface-variant">Beralih ke tampilan peta interaktif</p>
            </div>
          </div>
        )}
      </main>
      <BottomNav />
    </div>
  );
}
