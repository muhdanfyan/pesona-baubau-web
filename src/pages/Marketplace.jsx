import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';
import CardProduk from '../components/CardProduk';

const categories = ['Semua', 'Tenun', 'Kuliner', 'Suvenir', 'Kerajinan', 'Penginapan', 'Jasa Fotografi'];

const products = [
  { id: 1, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAa7EycdJPP8HVqn4VbFRyp_F2LwVwHzqiYYsCOqvsI9Js0osxAzheMl06G05e_bgWNkfczwbPoxIx3_dtaJkIsTX6FvKAyRhcsvRBWMMzNhJ3uGkBtywYZaUEFIEgxDleEcrC8IuV2ak5vEWXiF73IF_FbQBc8d_eLgyEAWxXMfgowRfUFeUS3exvHUBX7BRaxWZNTnuIM42K852dYwqkWi2DWqYBDb77c6nykQBkwfq8t0yRj9MGAZD3MDsf39tACZ2m761s7-cY', name: 'Kain Tenun Buton Motif Bhia', price: 'Rp 450.000', seller: 'UMKM Barakati', badge: 'Premium' },
  { id: 2, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCbtxo2eTcPoMQvQvxkm40jQS4I5EkzfSN_hHcVhTgEfq3OectxrVXcZk7rPGlNzT3BEbu7Z685AC5lg5szGdibkt25WiTFjSBUC6r8uRDGF5zP8J3Umj1p090w1SqAr5Fnxi_bAOSSGijpsfx8Xuf32SXPdr_ncjb8Cg6EHdgrtEcTrZCv_I5In_HQq0zoV5OGeU9q8Ro0Yc6Ue3bILSs74GVQoqR3u1FfJMfkdD8SIK_zdQzMv_YoMncLgj3cbr0HHTRhlQ-31OY', name: 'Kasuami Instan Premium', price: 'Rp 25.000', seller: 'Dapur Wolio', badge: 'KULINER' },
  { id: 3, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsYi2itrMVrhy0jU5YLEwChuW8swU_-EctaAolgU8F9mIo78bA67QFTsS25hYvcZix1VqqyzF9UhPyDLnHiVBbLdRDvl3KZGQjQqrxm2nXVH_FtV7FpjozQDKeiee23xLvGPYwG_9ZMTI3ev7VUipcYk0f55uocyICZbbtgsjU_ro9ky_-IVOXMAPMYVbYO23hbfXwMYUw-xKI_yiqni6N_4jjkHyeMeLgeeMPeYEEa3EhA03-KVY_srQgouDVuDlwMmEaSfbGtIo', name: 'Miniatur Kapal Lambo', price: 'Rp 175.000', seller: 'Karya Bahari', badge: 'KERAJINAN' },
  { id: 4, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCwpWxf2vQpm36Gr-Z6FaMqhNswtkUxdmAkhv6Br6IiQ8Urdnwc3IDotJG2RPpIAL5IHSgYUamzHmx29rHl97puVrgbWR2D12Vvh9jz9Gdqf-FxpHYhGMDnBeFfkFplvRfONTARd1c1Z19Kg-JlEpBnJuH35KrnWz6NkUt8jRhh-INZln6iLH4NDfaP492BUUZ_XTW9_rp9gUuD6CXi0gNDUYki56q8pzPxAsQ3pOyqNyUu6YTEgpQeWYEmYeIIoCT5cSQTvgs42S0', name: 'Gantungan Kunci Kerang', price: 'Rp 15.000', seller: 'Souvenir Butuni', badge: 'SUVENIR' },
  { id: 5, image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3', name: 'Homestay Nirwana', price: 'Mulai Rp 250.000', seller: 'Mitra Penginapan', badge: 'PENGINAPAN' },
  { id: 6, image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3', name: 'Paket Dokumentasi Liburan', price: 'Mulai Rp 500.000', seller: 'ButonLens', badge: 'JASA FOTOGRAFI' },
];

export default function Marketplace() {
  const [activeCategory, setActiveCategory] = useState('Semua');
  const navigate = useNavigate();

  const filtered = activeCategory === 'Semua'
    ? products
    : products.filter(p => p.badge && p.badge.toLowerCase().includes(activeCategory.toLowerCase()));

  return (
    <div className="min-h-screen pb-32">
      <Header
        title="Pesona Baubau"
        rightAction={
          <div className="flex items-center gap-md">
            <button className="relative p-2 rounded-full hover:bg-surface-container-low transition-colors active:scale-95 duration-200">
              <span className="material-symbols-outlined text-on-surface-variant">shopping_cart</span>
              <span className="absolute top-1 right-1 bg-error text-on-error text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">2</span>
            </button>
            <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container overflow-hidden">
              <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQUu6MnRzFgi5tnn5-4OKOqrLGHkiXh-aDE4v85x6KOjugFiAmo3vavJhoG6YeusZuiZYWckHHg4ekAM1roTOHmE7_tUEUZ28DkDsgBcpjQWVmGzFsITwquXlE9UCKKzeC4EXz_W6oC_x1xurvDgNjTH5kDJkI9LqOHfWvu89oXhvUIEwm8N4D1oIvlddGX3SAfMij1LVSMPve5v8wKjakvB6nOqTBPvkxBnke6J9wEPB_WyWw-WHMzEnrJVmTRISNIq5uxgPdZuo" alt="Profile" />
            </div>
          </div>
        }
      />
      <main className="max-w-md mx-auto px-md pb-32 pt-md">
        <section className="mb-lg">
          <h2 className="font-headline-md text-headline-md text-on-surface">Baubau Creative Marketplace</h2>
          <p className="font-body-sm text-on-surface-variant mt-xs">Temukan produk UMKM terbaik asli dari Buton</p>
        </section>
        <section className="mb-lg">
          <div className="relative flex items-center">
            <span className="material-symbols-outlined absolute left-md text-outline">search</span>
            <input className="w-full pl-xl pr-md py-md bg-surface-container-lowest border-outline-variant rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all font-body-md shadow-sm" placeholder="Cari produk kreatif..." type="text" />
          </div>
        </section>
        <section className="mb-lg -mx-md px-md overflow-x-auto hide-scrollbar flex gap-sm">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-md py-sm rounded-full font-label-md transition-transform active:scale-95 shrink-0 ${
                activeCategory === cat
                  ? 'bg-primary text-on-primary'
                  : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest'
              }`}
            >
              {cat}
            </button>
          ))}
        </section>
        <div className="grid grid-cols-2 gap-md">
          {filtered.map(p => (
            <CardProduk key={p.id} {...p} />
          ))}
        </div>
      </main>
      {/* WhatsApp Float */}
      <button className="fixed right-lg bottom-24 bg-[#25D366] text-white flex items-center gap-sm px-lg py-md rounded-full shadow-lg hover:shadow-xl transition-all active:scale-95 z-50">
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        <span className="font-label-md">Pesan via WhatsApp</span>
      </button>
      <BottomNav />
    </div>
  );
}
