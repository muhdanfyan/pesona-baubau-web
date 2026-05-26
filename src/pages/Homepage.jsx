import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';
import Testimonial from '../components/Testimonial';

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

export default function Homepage() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen pb-24">
      <Header />
      <main className="max-w-7xl mx-auto px-4 md:px-lg space-y-xl mt-md">
        {/* Search Bar */}
        <section className="relative z-10 -mt-2">
          <div className="relative w-full max-w-2xl mx-auto">
            <input
              className="w-full h-14 pl-12 pr-4 rounded-xl bg-surface-container-lowest border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary shadow-sm outline-none transition-all font-body-md"
              placeholder="Cari destinasi, kuliner, event..."
              type="text"
              onClick={() => navigate('/destinasi')}
              readOnly
            />
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
          </div>
        </section>

        {/* Hero Carousel */}
        <section className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-md group">
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
                  alt={slide.title}
                />
                <div className="absolute inset-0 hero-gradient flex flex-col justify-end p-lg">
                  <h2 className="text-white font-headline-lg text-headline-lg mb-2 drop-shadow-md">
                    {slide.title}
                  </h2>
                  <p className="text-white/90 font-body-md mb-md max-w-lg drop-shadow">
                    {slide.desc}
                  </p>
                  <div className="flex gap-3">
                    <button
                      onClick={() => navigate(slide.link)}
                      className="bg-secondary text-on-secondary px-xl py-3 rounded-xl font-label-md w-fit hover:bg-on-secondary-fixed-variant transition-colors shadow-lg active:scale-95"
                    >
                      Jelajahi Sekarang
                    </button>
                    <button
                      onClick={(e) => { e.stopPropagation(); alert('Tersimpan di Rencana Perjalanan!'); }}
                      className="bg-white/20 backdrop-blur-md text-white px-4 py-3 rounded-xl font-label-md hover:bg-white/30 transition-colors shadow-lg active:scale-95 flex items-center justify-center border border-white/30"
                    >
                      <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>bookmark</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {heroSlides.map((_, index) => (
              <div 
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-1 rounded-full cursor-pointer transition-all duration-300 ${
                  index === currentSlide ? 'w-8 bg-white' : 'w-2 bg-white/40 hover:bg-white/60'
                }`}
              ></div>
            ))}
          </div>
        </section>

        {/* Stats Row */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-md">
          <div className="bg-surface-container-lowest p-md rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.06)] flex items-center gap-md">
            <div className="w-12 h-12 bg-primary-container/20 rounded-lg flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-2xl">account_balance</span>
            </div>
            <div>
              <p className="text-on-surface-variant font-label-sm">Total Destinasi</p>
              <p className="text-primary font-headline-sm">45+</p>
            </div>
          </div>
          <div className="bg-surface-container-lowest p-md rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.06)] flex items-center gap-md">
            <div className="w-12 h-12 bg-secondary-container/20 rounded-lg flex items-center justify-center">
              <span className="material-symbols-outlined text-secondary text-2xl">shopping_bag</span>
            </div>
            <div>
              <p className="text-on-surface-variant font-label-sm">UMKM Lokal</p>
              <p className="text-primary font-headline-sm">120+</p>
            </div>
          </div>
          <div className="bg-surface-container-lowest p-md rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.06)] flex items-center gap-md">
            <div className="w-12 h-12 bg-tertiary-container/20 rounded-lg flex items-center justify-center">
              <span className="material-symbols-outlined text-tertiary text-2xl">calendar_month</span>
            </div>
            <div>
              <p className="text-on-surface-variant font-label-sm">Event Budaya</p>
              <p className="text-primary font-headline-sm">12</p>
            </div>
          </div>
          <div className="bg-surface-container-lowest p-md rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.06)] flex items-center gap-md">
            <div className="w-12 h-12 bg-outline-variant/20 rounded-lg flex items-center justify-center">
              <span className="material-symbols-outlined text-outline text-2xl">groups</span>
            </div>
            <div>
              <p className="text-on-surface-variant font-label-sm">Wisatawan</p>
              <p className="text-primary font-headline-sm">15K</p>
            </div>
          </div>
        </section>

        {/* Destinasi Populer */}
        <section className="space-y-md">
          <div className="flex justify-between items-end">
            <div>
              <h3 className="font-headline-md text-headline-md text-primary">Destinasi Populer</h3>
              <p className="text-on-surface-variant font-body-sm">Pilihan favorit pengunjung minggu ini.</p>
            </div>
            <button onClick={() => navigate('/destinasi')} className="text-primary font-label-md flex items-center gap-1 hover:underline">
              Lihat Semua <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
            {/* Card 1 */}
            <div
              onClick={() => navigate('/destinasi/1')}
              className="group bg-surface-container-lowest rounded-xl overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-lg transition-all active:scale-[0.98] cursor-pointer"
            >
              <div className="relative h-56">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyQYKzX3KuF1dh80_ptXdp2_LTnge1ywhJoicNPgGsWqLX8GfFEO4PSaiw2_XYak3FEQgQErUM511a3hzZ9bT73uapUAx4BXrikAQH8jO_SypbE_5kiqW0Sm1ZvpCJ-JY09jaFFDIXXAFgOn9IWq2bbT9n5kQGbAPV0i-J7ngROlUKrxex97FRuoHN7m_aVvm3gg1krQ2bEud76YRKCdGYhxWZ0nqsIHqVLUTTCc-L1bFMwymqZrePb9QCfa7wgbBMKQShiygCI3Y"
                  alt="Pantai Nirwana"
                />
                <div className="absolute top-4 w-full px-4 flex justify-between items-start pointer-events-none">
                  <span className="bg-primary/90 text-white text-xs font-label-sm px-3 py-1 rounded-full backdrop-blur-sm pointer-events-auto">Alam</span>
                  <button 
                    onClick={(e) => { e.stopPropagation(); alert('Tersimpan di Rencana Perjalanan!'); }}
                    className="w-8 h-8 rounded-full bg-white/70 backdrop-blur-md flex items-center justify-center hover:bg-white transition-colors shadow-sm pointer-events-auto"
                  >
                    <span className="material-symbols-outlined text-on-surface text-[18px]">bookmark_add</span>
                  </button>
                </div>
                <div className="absolute bottom-4 right-4 bg-white/90 px-2 py-1 rounded-lg flex items-center gap-1 shadow-sm">
                  <span className="material-symbols-outlined text-orange-400 text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="text-on-surface font-label-sm">4.8</span>
                </div>
              </div>
              <div className="p-md">
                <h4 className="font-headline-sm text-headline-sm text-on-surface mb-1">Pantai Nirwana</h4>
                <p className="text-on-surface-variant text-body-sm line-clamp-2">Pantai dengan gradasi warna air laut yang menakjubkan dan pasir putih halus.</p>
              </div>
            </div>

            {/* Card 2 */}
            <div
              onClick={() => navigate('/destinasi/2')}
              className="group bg-surface-container-lowest rounded-xl overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-lg transition-all active:scale-[0.98] cursor-pointer"
            >
              <div className="relative h-56">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxCf_dairb8y2kgmRXwCUPU1qVK8nssSDlI6XpcNC40KbDGZC9m4eMSLrkHSa6RJUYoyknjw1g9CG2U4bp0u8u3IEr0Sj53aueTQ9h16KelstV4Q6X6gYauwU8bwg5bp2hTzqpmaxy5k9qUPoHinQHWfRUhIkiQHsCayZ3VdMU1xy5TVwnMOGL6I9hHPrcExA0rdofvyO68ooL8c19WrSNT9Sb-xfHPgqssiFTUKdwGnjOkTQ8Lyc-x2XwG0AxKe6yUsIcEVbj7EY"
                  alt="Batu Sori"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="bg-primary/90 text-white text-xs font-label-sm px-3 py-1 rounded-full backdrop-blur-sm">Bahari</span>
                </div>
                <div className="absolute bottom-4 right-4 bg-white/90 px-2 py-1 rounded-lg flex items-center gap-1 shadow-sm">
                  <span className="material-symbols-outlined text-orange-400 text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="text-on-surface font-label-sm">4.7</span>
                </div>
              </div>
              <div className="p-md">
                <h4 className="font-headline-sm text-headline-sm text-on-surface mb-1">Batu Sori</h4>
                <p className="text-on-surface-variant text-body-sm line-clamp-2">Ikonik pulau batu karang yang menjulang di tengah laut jernih Baubau.</p>
              </div>
            </div>

            {/* Card 3 */}
            <div
              onClick={() => navigate('/destinasi/3')}
              className="hidden lg:block group bg-surface-container-lowest rounded-xl overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-lg transition-all active:scale-[0.98] cursor-pointer"
            >
              <div className="relative h-56">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0aNQ2OTt9yjUqW5MEbZTVgUrnUXlxkgpkdLrFNEKls_gwRR7DD_o0bJZQ4dQZpTIGL6GYbifbKviisNt4mTmNfRNDcJgASsK79Mzzz5TtNuoxXOZChICvhzvegK0_GPD-7aSgAhulE_Rdy9h1RAqIh4P_ei1qTJk9WdTiEJ6GH0F2PMGTv1mkQe4OP1N8QZJgbF5sIZfrU5DuY7DkL3ZjM79Du_NWXZf3mrjgkV4roh5Ea35IgV0tA6DiKok737Tua7Myiycyay0"
                  alt="Istana Malige"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="bg-primary/90 text-white text-xs font-label-sm px-3 py-1 rounded-full backdrop-blur-sm">Budaya</span>
                </div>
                <div className="absolute bottom-4 right-4 bg-white/90 px-2 py-1 rounded-lg flex items-center gap-1 shadow-sm">
                  <span className="material-symbols-outlined text-orange-400 text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="text-on-surface font-label-sm">4.9</span>
                </div>
              </div>
              <div className="p-md">
                <h4 className="font-headline-sm text-headline-sm text-on-surface mb-1">Istana Malige</h4>
                <p className="text-on-surface-variant text-body-sm line-clamp-2">Rumah adat suku Buton yang megah dengan arsitektur kayu tanpa paku.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Asymmetric: Event & UMKM */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl">
          {/* Event Mendatang */}
          <section className="lg:col-span-5 space-y-md">
            <div className="flex justify-between items-end">
              <h3 className="font-headline-md text-headline-md text-primary">Event Mendatang</h3>
              <button onClick={() => navigate('/event')} className="text-primary font-label-md hover:underline">Kalender</button>
            </div>
            <div className="space-y-md">
              <div className="flex gap-md bg-surface-container-lowest p-md rounded-xl border border-outline-variant hover:bg-surface-container-low transition-colors cursor-pointer group">
                <div className="flex-shrink-0 w-16 h-20 bg-primary-container text-white rounded-lg flex flex-col items-center justify-center">
                  <span className="text-headline-sm">24</span>
                  <span className="text-label-sm uppercase">Okt</span>
                </div>
                <div className="flex flex-col justify-center">
                  <h5 className="font-headline-sm text-[16px] group-hover:text-primary transition-colors">Festival Keraton Buton</h5>
                  <p className="text-on-surface-variant text-body-sm flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">location_on</span> Lapangan Keraton
                  </p>
                </div>
              </div>
              <div className="flex gap-md bg-surface-container-lowest p-md rounded-xl border border-outline-variant hover:bg-surface-container-low transition-colors cursor-pointer group">
                <div className="flex-shrink-0 w-16 h-20 bg-secondary-container text-on-secondary-container rounded-lg flex flex-col items-center justify-center">
                  <span className="text-headline-sm">12</span>
                  <span className="text-label-sm uppercase">Nov</span>
                </div>
                <div className="flex flex-col justify-center">
                  <h5 className="font-headline-sm text-[16px] group-hover:text-primary transition-colors">Pekande-Kandea</h5>
                  <p className="text-on-surface-variant text-body-sm flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">location_on</span> Benteng Keraton
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* UMKM Pilihan */}
          <section className="lg:col-span-7 space-y-md">
            <div className="flex justify-between items-end">
              <h3 className="font-headline-md text-headline-md text-primary">UMKM Pilihan</h3>
              <button onClick={() => navigate('/umkm')} className="text-primary font-label-md hover:underline">Semua Produk</button>
            </div>
            <div className="grid grid-cols-2 gap-md">
              <div onClick={() => navigate('/umkm/1')} className="bg-surface-container-lowest rounded-xl overflow-hidden border border-outline-variant group cursor-pointer active:scale-[0.98] transition-transform">
                <div className="h-40 overflow-hidden relative">
                  <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbV2r6wgfSH9hh30F5-XVRTAvHAR5bZOIIDrAkXYuXTfWHwMols7cz0fCc3HVdhA7DuJ_fXR3jws-FjyivHw7pNyj_OUFBOFcBC_V19EFnvFzCG345BwkwavceFsSoqDTZA4y-BRg0NRRBncxdZka5V3-WSj1HsCIbc1Hd7x0-XYG8t3FYtykXcbQ7inkUy1wW-svrbD3fxRXASX7FcMjiMUhv5ZCPmi4dqmJnomxs7wHvAv70TQ5rb14hyAeZpZJViDAvYa4kDUk" alt="Tenun Buton Premium" />
                  <div className="absolute top-2 right-2 bg-secondary text-on-secondary text-[10px] font-bold px-2 py-1 rounded-full">TENUN</div>
                </div>
                <div className="p-md">
                  <h5 className="font-label-md text-on-surface line-clamp-1">Tenun Buton Premium</h5>
                  <p className="text-secondary font-headline-sm text-[16px] mt-1">Rp 450.000</p>
                </div>
              </div>
              <div onClick={() => navigate('/umkm/2')} className="bg-surface-container-lowest rounded-xl overflow-hidden border border-outline-variant group cursor-pointer active:scale-[0.98] transition-transform">
                <div className="h-40 overflow-hidden relative">
                  <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtg6IX0ZV1nDBYmM77zOaFPbON3RfhrPqzlIhUpSw4eFStOkI0tAxTMUZIr2AK01bjzhWJ9U6N9Km0IwjiS2RSHpUQ5HxzIvStWIBuKqj91B-W6Zoi3ARaXukLr8pF2h9umtns5h4QH8P9XOd5NoBuN1p4qNNNgc8vdNmc_cWlXMSn5vBi9dvf4nYgt3K8HTjkul5MVIZrUxiiglLhq2cq8eu_h6Lw_UKa6lQ_5N5G0mEIa47GpsLfgrRmcUYlNumSqj9HlS1ZZxc" alt="Kasuami Instan" />
                  <div className="absolute top-2 right-2 bg-secondary text-on-secondary text-[10px] font-bold px-2 py-1 rounded-full">KULINER</div>
                </div>
                <div className="p-md">
                  <h5 className="font-label-md text-on-surface line-clamp-1">Kasuami Instan</h5>
                  <p className="text-secondary font-headline-sm text-[16px] mt-1">Rp 25.000</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Features / Fitur Utama */}
        <section className="py-xl border-t border-outline-variant/30 mt-xl">
          <div className="text-center mb-xl">
            <h3 className="font-headline-md text-headline-md text-primary mb-2">Eksplorasi Tanpa Batas</h3>
            <p className="text-on-surface-variant font-body-sm max-w-lg mx-auto">Semua yang Anda butuhkan untuk pengalaman wisata terbaik di Baubau.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
            <div className="text-center p-md bg-surface-container-lowest rounded-2xl shadow-sm border border-outline-variant/50 hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-primary-container text-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <span className="material-symbols-outlined text-3xl">map</span>
              </div>
              <h4 className="font-headline-sm mb-2 text-on-surface">Rencana Perjalanan</h4>
              <p className="text-on-surface-variant font-body-sm">Simpan destinasi favorit dan susun <i>itinerary</i> Anda dengan mudah di satu tempat.</p>
            </div>
            <div className="text-center p-md bg-surface-container-lowest rounded-2xl shadow-sm border border-outline-variant/50 hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-secondary-container text-secondary rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <span className="material-symbols-outlined text-3xl">storefront</span>
              </div>
              <h4 className="font-headline-sm mb-2 text-on-surface">Dukung UMKM Lokal</h4>
              <p className="text-on-surface-variant font-body-sm">Temukan produk otentik, kuliner khas, dan kerajinan tangan langsung dari pembuatnya.</p>
            </div>
            <div className="text-center p-md bg-surface-container-lowest rounded-2xl shadow-sm border border-outline-variant/50 hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-tertiary-container text-tertiary rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <span className="material-symbols-outlined text-3xl">wifi_off</span>
              </div>
              <h4 className="font-headline-sm mb-2 text-on-surface">Akses Offline</h4>
              <p className="text-on-surface-variant font-body-sm">Akses peta dan rute destinasi favorit Anda meski tanpa koneksi internet yang stabil.</p>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <Testimonial />

        {/* Featured In */}
        <section className="py-xl border-t border-outline-variant/30 mt-md">
          <div className="text-center mb-lg">
            <p className="text-on-surface-variant font-label-md uppercase tracking-widest">DIDUKUNG OLEH</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-16 opacity-60 hover:opacity-100 transition-opacity duration-300">
            <h4 className="font-headline-sm font-bold text-on-surface-variant grayscale">WONDERFUL INDONESIA</h4>
            <h4 className="font-headline-sm font-bold text-on-surface-variant grayscale">PEMKOT BAUBAU</h4>
            <h4 className="font-headline-sm font-bold text-on-surface-variant grayscale">KEMENPAREKRAF</h4>
            <h4 className="font-headline-sm font-bold text-on-surface-variant grayscale">DISPAR SULTRA</h4>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-primary text-on-primary rounded-3xl p-xl my-xl text-center shadow-xl relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
          
          <h2 className="font-headline-lg text-headline-lg mb-4 relative z-10 text-white">Mulai Perjalanan Anda</h2>
          <p className="font-body-md text-white/90 mb-8 max-w-lg mx-auto relative z-10">Daftar gratis sekarang dan buat rencana wisata pertama Anda di Kota Baubau, kota seribu benteng.</p>
          <button className="bg-secondary text-on-secondary px-8 py-4 rounded-xl font-label-md shadow-lg hover:bg-secondary-fixed hover:text-on-secondary-fixed transition-colors active:scale-95 relative z-10 text-[16px]">
            Daftar Sekarang — Gratis
          </button>
        </section>

      </main>
      <BottomNav />
    </div>
  );
}
