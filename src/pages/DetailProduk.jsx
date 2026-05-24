import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';

const productData = {
  1: {
    name: 'Kain Tenun Buton - Motif Bhia-Bhia',
    price: 'Rp 450.000',
    seller: 'Rumah Tenun Sulaa',
    sellerRating: '4.9 (120 Penilaian)',
    sellerLocation: 'Baubau, Sulawesi Tenggara',
    description: {
      Bahan: 'Benang Sutra & Katun berkualitas tinggi (Premium)',
      Ukuran: '200cm x 110cm',
    },
    filosofi: 'Motif Bhia-Bhia menggambarkan kerang laut yang melambangkan kekayaan maritim Kesultanan Buton. Warna biru tua melambangkan kedalaman laut, sementara aksen emas mencerminkan kemakmuran dan martabat masyarakat pesisir Baubau.',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuACWAVuT1qzRNdrunI_qLKFWC18ZMUzt2SBQ7pEHtSQYA3xf6GcoF27WJGPH9GLpqfMGr288QVXa0Tk9G8NRl7Bd0Z_uS5EB_8slXyTOJsia-UgHczfUd4p5evDV2Dv4OPbvzhe2KePTRa1iPycLJ0Gu3w2DsZHbB3U-e1o9RqSLduo4bo50dcTDzAc9rPkAQQSwxck6IiCTGtM_n1artqvWYiCARoD6MHKtyU8L6dunybcNUGf-iQIR3uRhjGBcgwHzK90IhH1mfI',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDV0PAz2Vtw0k_R6rz3yFStnFhYjhe5iNLbdPr78uSlbAq4XoqXmKBBXCWx5U4-_tz2ILgaV8uM7IioKpVnodrr1JBgtj9j8Xa-7CqfcI2_Zmm7IlDue4F49dHOoxtioVrx-HYVYzXe6aZcWRmGPff2JUte6AxaAbH2fO2o4fCudx926dVgJStd7Pt7hCk856MB6mlazAjCLnYjUODwbN6TD2495N60zlH6uO4Z29LELaG0Kct-55XgX_M_C-4GCR2Z9La-QVItIms',
    ],
    related: [
      { name: 'Tas Tenun Modern', price: 'Rp 275.000', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAYGoYfZWB2oGkQ-wbY-5wyqIdJxs7_LJpoUwZ_agUJGCRMpD0Ctt3xZbrSJTQLqleX_266LEXQVct-TWUb2MktJ3pPYvWdTLtqCmyUNs-_Hhtgds3XoRnKQAeHjuPfyWoWnlH1B6xueiCecY_r-ci51u47rh7PqcCsLVOFvAcP750xyM2qCdzt5VTzsmKakBWnD1l-rU_dlhR4cwaj1aEuxrFbwJoDPn3gNhrbkZEHhBdXrep606DHxfJdQVCdeY4oDa-ig9fk5no' },
      { name: 'Miniatur Kaledupa', price: 'Rp 150.000', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCMLxdQQwsalrO8NCjXVSVnywNC6N2vBwcaQzmBA5ag95o8xCCo1g6bzI0GRk8usZ14iPW8Q4scZGXKI0TNBmgBvtWS6O6PgygFohBInfTm8VXkMOuk0Q6T2ONA1Cv3_ZshTkiH7lmADqWLOXFtPPMRBT5i2aDjSIfILGQhJ0r6iFHoNVo8nY2x5vU6cDQY1e-zU9UM0PddOsQUkh-e9ptF51ZMdah9O8FbKPWK-1Y2suS9GErSIZGSrHEWPNiJvMKQ9whTLVdsyjc' },
      { name: 'Gelang Etnik Sulaa', price: 'Rp 85.000', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuABczyxl-Pdfehf8zGv812AstLgfhY6EbMhccvCM4jt3InbAc5sbGP8cUmJD7NWSpYDXIvR22k1CiM9MY7Z1q1gb_Xzq7ksbqcVvVwVd32Bhq_5yU2BMuMvE3P4JTh89X0JVRgd72IUEitK-jkdMHXjEjFXkNwaHc5gZKoYL7cJuKCCEfAHqog9YlVALbFKAwca9M9u69OSXRZUKZ6rVn8f7d7h-0rr9OdtNyjPflQ9VdIn8pJjaSu36jOK0RP6OcBp0aHlLj23yJA' },
    ],
  },
  2: {
    name: 'Kasuami Instan Premium',
    price: 'Rp 25.000',
    seller: 'Dapur Wolio',
    sellerRating: '4.7 (85 Penilaian)',
    sellerLocation: 'Baubau, Sulawesi Tenggara',
    description: {
      Bahan: 'Singkong fermentasi berkualitas',
      Berat: '500 gram',
    },
    filosofi: 'Kasuami adalah makanan tradisional Buton yang terbuat dari singkong fermentasi. Diolah dengan resep turun-temurun, kasuami menjadi ikon kuliner khas Baubau yang mendunia.',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCbtxo2eTcPoMQvQvxkm40jQS4I5EkzfSN_hHcVhTgEfq3OectxrVXcZk7rPGlNzT3BEbu7Z685AC5lg5szGdibkt25WiTFjSBUC6r8uRDGF5zP8J3Umj1p090w1SqAr5Fnxi_bAOSSGijpsfx8Xuf32SXPdr_ncjb8Cg6EHdgrtEcTrZCv_I5In_HQq0zoV5OGeU9q8Ro0Yc6Ue3bILSs74GVQoqR3u1FfJMfkdD8SIK_zdQzMv_YoMncLgj3cbr0HHTRhlQ-31OY',
    ],
    related: [
      { name: 'Sambal Dabu-dabu', price: 'Rp 35.000', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAtg6IX0ZV1nDBYmM77zOaFPbON3RfhrPqzlIhUpSw4eFStOkI0tAxTMUZIr2AK01bjzhWJ9U6N9Km0IwjiS2RSHpUQ5HxzIvStWIBuKqj91B-W6Zoi3ARaXukLr8pF2h9umtns5h4QH8P9XOd5NoBuN1p4qNNNgc8vdNmc_cWlXMSn5vBi9dvf4nYgt3K8HTjkul5MVIZrUxiiglLhq2cq8eu_h6Lw_UKa6lQ_5N5G0mEIa47GpsLfgrRmcUYlNumSqj9HlS1ZZxc' },
    ],
  },
};

export default function DetailProduk() {
  const { id } = useParams();
  const data = productData[id] || productData[1];
  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentSlide(prev => (prev === 0 ? 1 : 0));
    }, 4000);
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div className="min-h-screen pb-24 bg-surface">
      <Header
        showBack
        title="Detail Produk"
        rightAction={
          <button className="active:scale-95 transition-transform duration-200 text-primary">
            <span className="material-symbols-outlined">share</span>
          </button>
        }
      />
      <main className="pb-32">
        {/* Image Slider */}
        <section className="relative w-full aspect-square overflow-hidden bg-surface-container-low">
          <div
            className="flex transition-transform duration-500 ease-out h-full"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {data.images.map((img, i) => (
              <img key={i} className="w-full h-full object-cover flex-shrink-0" src={img} alt={`${data.name} ${i + 1}`} />
            ))}
          </div>
          <div className="absolute bottom-md left-1/2 -translate-x-1/2 flex gap-xs">
            {data.images.map((_, i) => (
              <div key={i} className={`w-2 h-2 rounded-full ${i === currentSlide ? 'bg-primary' : 'bg-outline-variant'}`}></div>
            ))}
          </div>
        </section>

        {/* Product Info */}
        <section className="px-md py-lg bg-surface">
          <div className="flex flex-col gap-xs">
            <h2 className="font-body-lg text-body-lg font-bold text-on-surface">{data.name}</h2>
            <p className="font-headline-sm text-headline-sm text-primary-container">{data.price}</p>
          </div>

          {/* Seller Info */}
          <div className="mt-lg p-md bg-surface-container-low rounded-xl border border-outline-variant/30 flex items-center justify-between">
            <div className="flex items-center gap-md">
              <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center overflow-hidden">
                <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHeZmx5C-Lm6fuJw8prJHtPftjs_TddzSIoDmDc5HYWnQCRfz6o0jTd_sqAE7P6Hnrjg6VgAbzSTOHdl9k9Vq8LCTtZoXiaBPOBJ3e5JGf-UfhfL8Jd3ibvD-RU3E1Kz5q9jqE8mKTOSJH6c_u7RT-U0nMnTznPqkjbwpVPsSet4rYrDdbKLHCCBC_0aET-xviw7RYAlAvYBAP3z12P2kMRPxrjgtO2dH5mi1gZFpJPEJyYMohVb53sbJ7afVIBK1xczi_8qfeRr8" alt={data.seller} />
              </div>
              <div>
                <p className="font-label-md text-label-md text-on-surface">{data.seller}</p>
                <div className="flex items-center gap-xs">
                  <span className="material-symbols-outlined text-secondary text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="text-label-sm font-label-sm text-on-surface-variant">{data.sellerRating}</span>
                </div>
                <p className="text-label-sm font-label-sm text-on-surface-variant flex items-center gap-xs">
                  <span className="material-symbols-outlined text-[14px]">location_on</span>
                  {data.sellerLocation}
                </p>
              </div>
            </div>
            <span className="material-symbols-outlined text-primary">chevron_right</span>
          </div>

          {/* Action Buttons */}
          <div className="mt-lg grid grid-cols-2 gap-md">
            <button className="flex items-center justify-center gap-sm bg-[#25D366] text-white py-md rounded-xl font-label-md text-label-md active:scale-95 transition-transform">
              <span className="material-symbols-outlined text-[20px]">chat</span>
              WhatsApp
            </button>
            <button className="flex items-center justify-center gap-sm border-2 border-primary text-primary py-md rounded-xl font-label-md text-label-md active:scale-95 transition-transform">
              <span className="material-symbols-outlined text-[20px]">shopping_bag</span>
              Marketplace
            </button>
          </div>

          {/* Description */}
          <div className="mt-3xl">
            <h3 className="font-headline-sm text-headline-sm text-on-surface border-l-4 border-[#C9A96E] pl-sm mb-md">Deskripsi Produk</h3>
            <div className="flex flex-col gap-md text-on-surface-variant">
              {Object.entries(data.description).map(([key, val]) => (
                <div key={key} className="grid grid-cols-[100px_1fr] gap-sm">
                  <span className="font-label-md text-label-md text-on-surface">{key}</span>
                  <span className="font-body-sm text-body-sm">{val}</span>
                </div>
              ))}
              <div className="mt-sm">
                <p className="font-label-md text-label-md text-on-surface mb-xs">Filosofi</p>
                <p className="font-body-sm text-body-sm leading-relaxed italic text-on-secondary-fixed-variant">
                  {data.filosofi}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Products */}
        <section className="mt-lg px-md">
          <div className="flex justify-between items-center mb-md">
            <h3 className="font-headline-sm text-headline-sm text-on-surface">Produk Terkait</h3>
            <a className="text-label-md font-label-md text-primary" href="#">Lihat Semua</a>
          </div>
          <div className="flex gap-md overflow-x-auto hide-scrollbar pb-md">
            {data.related.map((r, i) => (
              <div key={i} className="min-w-[160px] bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/20 overflow-hidden">
                <img className="w-full h-32 object-cover" src={r.image} alt={r.name} />
                <div className="p-sm">
                  <p className="text-label-sm font-label-sm text-on-surface-variant truncate">{r.name}</p>
                  <p className="text-label-md font-label-md text-primary">{r.price}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      {/* FAB */}
      <div className="fixed bottom-24 right-md z-40">
        <button className="bg-primary text-white shadow-lg p-md rounded-full flex items-center justify-center active:scale-90 transition-transform duration-200">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>add_shopping_cart</span>
        </button>
      </div>
      <BottomNav />
    </div>
  );
}
