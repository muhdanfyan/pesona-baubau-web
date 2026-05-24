import { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';

const destinationData = {
  1: {
    name: 'Benteng Keraton Buton',
    rating: '4.5',
    address: 'Melai, Kota Baubau, Sulawesi Tenggara',
    status: 'Lancar',
    description: 'Benteng Keraton Buton merupakan benteng terluas di dunia menurut Guinness World Records. Bangunan bersejarah ini menjadi saksi bisu kejayaan Kesultanan Buton pada masa lampau, dengan arsitektur unik yang terbuat dari batu gunung dan direkatkan dengan putih telur.',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD6cF2sYsQQYbtJscIkVMRXWnkl1mpZ6GiP7a9DcVxzUdWRgAsO0I2GWCY-lOrDygOBhAw_JlNHIE2HC7spP3hF5k6J_jYsP7TW0Q_3krV1dfgjsEPguKuJRcGv4yJOdOIHWbaKE4TZqI86-O3Bh_8hcPk-sC9nIWhBGsQIP-10JGIXgTLN2TQ_OeqnhJfqeSj-6hOWODtAs-U1b9UdVP_cJ_R_TOFieh1NdM7_gzpSccW9MDAIEjKEq8doxOfshLEkv_cWrQ6UFGs',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBVni4Dy34q-P6ORp_cffIGeTmgFhJgGB9nI1EuNemSAFpzvxFfsyMwNw061i7jeIgU00wA_fglVdcnqsariJojdOMp1XXaX-ZgdTRZ951R0WE67-HLsq-AUpPxtMAKEqIz9LemGSlHw6jye9kOEG-6z5dp4NKxSygXuR4Jgm_ukqSGUb9ppfk1-hk6QAiDdZA3ClXWl0jcACm2E4blXQ-4qYngtnlGrBKv9vTaSsNInT6jlwAhx4qgUhsu813C5UHvCU3sDX-R95M',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDqBUXlTfyk2ltflkudVedat6fNGxWxPGnQXoWHBrm2QxLHsV6YzaUrgunyF0ZWg3bRvCNIs-VzQOuAXONftnUBVI9GmJBhFqK5XgikgkTdLrv54jPz-TsgbVJyCvvwfZGcZxpM-N1UFoAECrlSbrLHcR_LwNE7n7EYOZSHK0Ue21LKNG2pIWI6r_C-Tq1JotmDK0jy7td2XhdbWF3X4wLaiW9FiRhhye9Bviw6kkcKnXnKeFJdtkwFz-rO50fv4VotUV1PUlcBvq0',
    ],
    reviews: [
      { name: 'Andi Saputra', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAnSMd8mdyZ8t4kj6AzVVYqFS63sD53V-jtUwh9i1hBVV5aCwk9NYc1jmLDO3uAS2fHxKH-0_1NpP4fvJ-EXlq58DjvI5Z2-R6dOk0lsSt_rsuDfLdXNDg-4K7Fa5rx3WtzDqov2DXURqIjUM_uXOnCOd8icBtouqfQU1YJxMT-UZzKAljhuzBlMqvEk6ZINQjr1zQsyqraFJYFJBISJVeGLYo77hPcVNbKXJFjL3d4KriGoezGihj5J9ylDW9b0pfsqrOdfdwYySM', rating: 5, time: '2 jam lalu', text: 'Pemandangannya luar biasa, apalagi saat matahari terbenam. Kebersihan area benteng juga sangat terjaga.' },
    ],
  },
  2: {
    name: 'Pantai Nirwana',
    rating: '4.8',
    address: 'Baubau, Sulawesi Tenggara',
    status: 'Lancar',
    description: 'Pantai dengan gradasi warna air laut yang menakjubkan dan pasir putih halus.',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC7kC8ZY-e4FYkaxTUz6Y-CVO9Dz_Nh8M8teLcLw1OOmPpbpn1yguqB14IkjAlagE4SYzkOt_tIENMCHoTJV3d85RZXf5-h8QCgJejip0tWrhpYXHg6T_7VhDEa9YSBBOvuBjCqUMyJiroFCNvXjNxU4CiXpEKfc0mA_KEg_hOm3W-YWha5hEP4TbJ1jJoG42vFz8JPuKOzsLFOUKoW4yfo5EoeG6PbeAsxIzeNWBAoxeN0zCJb15HA1BSIHBrEY-cAj49EAMeZEyM',
    ],
    reviews: [],
  },
  3: {
    name: 'Air Terjun Samparona',
    rating: '4.6',
    address: 'Samparona, Baubau',
    status: 'Lancar',
    description: 'Petualangan trekking menuju air terjun tersembunyi di tengah hutan pinus.',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAC0c0_6EIy5_MABvdP8hLiCdyL2zpximvBTwMWsBGFR5My1VAdFCRR6IyOVkA9u7-_Rh-Wbj96E5XRrjJmS9ggQzSZxgUxtTGnrfeWBmTY31I6HKLurH7vliChARdhI9uqTVoIHEIBHWUmrAk5h6sYn-EaZPoarMhgCMu7vRBvD4a1O9U2j3mWuNgZxJOYjksPUnhsUSjrLP9VxG7zlrz4i6y31Rr561CAznmGDxOsOXwQb3bOMbV_Jq2VVxC432G_nWNRIldyWDE',
    ],
    reviews: [],
  },
  4: {
    name: 'Masjid Agung Keraton',
    rating: '4.7',
    address: 'Keraton, Baubau',
    status: 'Lancar',
    description: 'Masjid bersejarah saksi bisu kejayaan Kesultanan Buton di masa lampau.',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBAFA31yf0rruVsujt16pytwzZBR7fSO3MCJaxOXDCafTtq3DemNb3w-vDl81YICzs603Qb9ljkX68fPNM9mUL9uFPYTYNUC8CZqtyz2GHYCAd46R2Gw5ukMXUrq0Ui0g5POxHqgV1i2XFpGLNT5kNYE57p46qfJBh4PH2T1OA8J0UoPdRn8nO30nkAmw9RlRsOqBy5RFbLocLONWeCCbbzdfd_w2Y81HK4Lz_kh9HEXK6ISsRKKGtpDfLtYsc3RNRBmVSFPRFoMJE',
    ],
    reviews: [],
  },
};

export default function DetailDestinasi() {
  const { id } = useParams();
  const data = destinationData[id] || destinationData[1];
  const sliderRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;
    const handleScroll = () => {
      const scrollPercent = slider.scrollLeft / (slider.scrollWidth - slider.clientWidth);
      const activeIndex = Math.round(scrollPercent * (data.images.length - 1));
      setActiveSlide(activeIndex);
    };
    slider.addEventListener('scroll', handleScroll);
    return () => slider.removeEventListener('scroll', handleScroll);
  }, [data.images.length]);

  return (
    <div className="min-h-screen pb-24 bg-surface">
      <Header
        showBack
        title={data.name}
        rightAction={
          <div className="flex items-center gap-md">
            <button className="active:scale-95 transition-transform">
              <span className="material-symbols-outlined text-primary">favorite</span>
            </button>
            <button className="active:scale-95 transition-transform">
              <span className="material-symbols-outlined text-primary">more_vert</span>
            </button>
          </div>
        }
      />
      <main className="pt-0">
        {/* Gallery Slider */}
        <section className="relative w-full overflow-hidden group">
          <div ref={sliderRef} className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar transition-all">
            {data.images.map((img, i) => (
              <div key={i} className="min-w-full snap-center h-72">
                <img className="w-full h-full object-cover" src={img} alt={`${data.name} ${i + 1}`} />
              </div>
            ))}
          </div>
          <div className="absolute bottom-md left-1/2 -translate-x-1/2 flex gap-xs">
            {data.images.map((_, i) => (
              <div
                key={i}
                className={`h-2 rounded-full transition-all ${i === activeSlide ? 'w-6 bg-primary' : 'w-2 bg-white/60'}`}
              ></div>
            ))}
          </div>
        </section>

        {/* Identity Section */}
        <section className="px-md mt-lg">
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <div className="inline-flex items-center gap-xs px-sm py-xs bg-emerald-100 text-emerald-800 rounded-lg mb-sm">
                <span className="material-symbols-outlined text-[14px]">check_circle</span>
                <span className="font-label-sm text-label-sm">{data.status}</span>
              </div>
              <h2 className="font-headline-sm text-headline-sm text-on-surface mb-xs">{data.name}</h2>
              <div className="flex items-center gap-sm">
                <div className="flex items-center gap-[2px]">
                  <span className="material-symbols-outlined text-secondary text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="font-label-md text-label-md text-on-surface">{data.rating}</span>
                </div>
                <span className="text-on-surface-variant text-body-sm">•</span>
                <p className="text-body-sm text-on-surface-variant font-body-sm">{data.address}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Action Grid */}
        <section className="px-md mt-lg grid grid-cols-4 gap-sm">
          <button className="flex flex-col items-center gap-xs p-sm bg-surface-container-low rounded-xl active:scale-95 transition-transform border border-outline-variant/20 shadow-sm">
            <div className="w-10 h-10 flex items-center justify-center bg-primary-container text-white rounded-full">
              <span className="material-symbols-outlined text-[20px]">near_me</span>
            </div>
            <span className="font-label-sm text-label-sm text-on-surface">Rute</span>
          </button>
          <button className="flex flex-col items-center gap-xs p-sm bg-surface-container-low rounded-xl active:scale-95 transition-transform border border-outline-variant/20 shadow-sm">
            <div className="w-10 h-10 flex items-center justify-center bg-primary-container text-white rounded-full">
              <span className="material-symbols-outlined text-[20px]">call</span>
            </div>
            <span className="font-label-sm text-label-sm text-on-surface">Hubungi</span>
          </button>
          <button className="flex flex-col items-center gap-xs p-sm bg-surface-container-low rounded-xl active:scale-95 transition-transform border border-outline-variant/20 shadow-sm">
            <div className="w-10 h-10 flex items-center justify-center bg-primary-container text-white rounded-full">
              <span className="material-symbols-outlined text-[20px]">volume_up</span>
            </div>
            <span className="font-label-sm text-label-sm text-on-surface">Audio</span>
          </button>
          <button className="flex flex-col items-center gap-xs p-sm bg-surface-container-low rounded-xl active:scale-95 transition-transform border border-outline-variant/20 shadow-sm">
            <div className="w-10 h-10 flex items-center justify-center bg-primary-container text-white rounded-full">
              <span className="material-symbols-outlined text-[20px]">360</span>
            </div>
            <span className="font-label-sm text-label-sm text-on-surface">360°</span>
          </button>
        </section>

        {/* Description */}
        <section className="px-md mt-xl">
          <h3 className="font-label-md text-label-md text-primary mb-sm uppercase tracking-wider">Tentang Destinasi</h3>
          <p className="text-on-surface-variant text-body-md leading-relaxed">{data.description}</p>
        </section>

        {/* Mini Map */}
        <section className="px-md mt-xl">
          <div className="relative h-48 rounded-xl overflow-hidden border border-outline-variant shadow-sm group">
            <div className="w-full h-full bg-surface-container-high flex items-center justify-center">
              <div className="text-center">
                <span className="material-symbols-outlined text-4xl text-primary">map</span>
                <p className="font-body-sm text-on-surface-variant mt-2">Peta Interaktif</p>
              </div>
            </div>
            <div className="absolute inset-0 bg-primary/10 pointer-events-none"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="bg-white p-xs rounded-full shadow-lg border-2 border-primary animate-pulse">
                <span className="material-symbols-outlined text-primary text-[24px]">location_on</span>
              </div>
            </div>
            <button className="absolute bottom-sm right-sm bg-white text-primary px-md py-xs rounded-lg shadow-md font-label-sm text-label-sm active:scale-95 transition-transform flex items-center gap-xs">
              <span className="material-symbols-outlined text-[16px]">map</span>
              Buka Peta
            </button>
          </div>
        </section>

        {/* Reviews */}
        <section className="px-md mt-xl mb-xl">
          <div className="flex justify-between items-center mb-md">
            <h3 className="font-label-md text-label-md text-primary uppercase tracking-wider">Ulasan Pengunjung</h3>
            <button className="text-primary font-label-sm text-label-sm underline underline-offset-4">Lihat Semua</button>
          </div>
          <div className="space-y-md">
            {data.reviews.length > 0 ? data.reviews.map((review, i) => (
              <div key={i} className="bg-surface-container-lowest p-md rounded-xl shadow-sm border border-outline-variant/10">
                <div className="flex items-center gap-md mb-sm">
                  <img className="w-10 h-10 rounded-full object-cover" src={review.avatar} alt={review.name} />
                  <div>
                    <h4 className="font-label-md text-label-md">{review.name}</h4>
                    <div className="flex gap-[2px]">
                      {[...Array(review.rating)].map((_, s) => (
                        <span key={s} className="material-symbols-outlined text-secondary text-[12px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      ))}
                    </div>
                  </div>
                  <span className="ml-auto text-on-surface-variant font-label-sm text-label-sm">{review.time}</span>
                </div>
                <p className="text-body-sm text-on-surface-variant">{review.text}</p>
              </div>
            )) : (
              <p className="text-on-surface-variant text-body-sm text-center py-md">Belum ada ulasan. Jadilah yang pertama!</p>
            )}
            <button className="w-full flex items-center justify-center gap-sm py-md border-2 border-dashed border-outline rounded-xl text-outline font-label-md active:bg-surface-container transition-colors">
              <span className="material-symbols-outlined">edit_note</span>
              Tulis Ulasan
            </button>
          </div>
        </section>
      </main>
      <BottomNav />
    </div>
  );
}
