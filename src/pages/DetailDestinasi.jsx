import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const destinationData = {
  1: {
    name: 'Benteng Keraton Buton',
    rating: '4.8',
    address: 'Baubau, Sulawesi Tenggara',
    price: '$15.0',
    mapUrl: 'https://maps.app.goo.gl/ewPCuxtZ4yNwpotx7',
    description: 'Benteng Keraton Buton merupakan benteng terluas di dunia menurut Guinness World Records. Bangunan bersejarah ini menjadi saksi bisu kejayaan Kesultanan Buton pada masa lampau, dengan arsitektur unik yang terbuat dari batu gunung dan direkatkan dengan putih telur. Dari atas benteng, Anda bisa melihat seluruh kota Baubau dan perairan laut yang memukau.',
    images: [
      '/benteng_keraton.jpg',
      'https://jadesta.kemenpar.go.id/imgpost/77777.jpg',
      'https://jadesta.kemenpar.go.id/imgpost/77770.jpg',
      'https://jadesta.kemenpar.go.id/imgpost/78170.jpg',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD6cF2sYsQQYbtJscIkVMRXWnkl1mpZ6GiP7a9DcVxzUdWRgAsO0I2GWCY-lOrDygOBhAw_JlNHIE2HC7spP3hF5k6J_jYsP7TW0Q_3krV1dfgjsEPguKuJRcGv4yJOdOIHWbaKE4TZqI86-O3Bh_8hcPk-sC9nIWhBGsQIP-10JGIXgTLN2TQ_OeqnhJfqeSj-6hOWODtAs-U1b9UdVP_cJ_R_TOFieh1NdM7_gzpSccW9MDAIEjKEq8doxOfshLEkv_cWrQ6UFGs',
    ]
  },
  2: {
    name: 'Pantai Nirwana',
    rating: '4.9',
    address: 'Baubau, Sulawesi Tenggara',
    price: '$10.0',
    description: 'Pantai dengan gradasi warna air laut yang menakjubkan dan pasir putih halus. Tempat yang sempurna untuk bersantai, berenang, dan menikmati matahari terbenam.',
    images: [
      '/pantai_nirwana.jpg',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC7kC8ZY-e4FYkaxTUz6Y-CVO9Dz_Nh8M8teLcLw1OOmPpbpn1yguqB14IkjAlagE4SYzkOt_tIENMCHoTJV3d85RZXf5-h8QCgJejip0tWrhpYXHg6T_7VhDEa9YSBBOvuBjCqUMyJiroFCNvXjNxU4CiXpEKfc0mA_KEg_hOm3W-YWha5hEP4TbJ1jJoG42vFz8JPuKOzsLFOUKoW4yfo5EoeG6PbeAsxIzeNWBAoxeN0zCJb15HA1BSIHBrEY-cAj49EAMeZEyM',
    ]
  },
  3: {
    name: 'Batu Sori',
    rating: '4.7',
    address: 'Baubau, Sulawesi Tenggara',
    price: '$12.0',
    mapUrl: 'https://maps.app.goo.gl/57xcJYFpHUsyeYkm9',
    description: 'Ikonik pulau batu karang yang menjulang di tengah laut jernih Baubau.',
    images: [
      '/batu_sori.jpg',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAxCf_dairb8y2kgmRXwCUPU1qVK8nssSDlI6XpcNC40KbDGZC9m4eMSLrkHSa6RJUYoyknjw1g9CG2U4bp0u8u3IEr0Sj53aueTQ9h16KelstV4Q6X6gYauwU8bwg5bp2hTzqpmaxy5k9qUPoHinQHWfRUhIkiQHsCayZ3VdMU1xy5TVwnMOGL6I9hHPrcExA0rdofvyO68ooL8c19WrSNT9Sb-xfHPgqssiFTUKdwGnjOkTQ8Lyc-x2XwG0AxKe6yUsIcEVbj7EY',
    ]
  },
  4: {
    name: 'Istana Malige',
    rating: '4.6',
    address: 'Baubau, Sulawesi Tenggara',
    price: '$5.0',
    description: 'Rumah adat Kesultanan Buton yang dibangun dengan konstruksi kayu bersusun tanpa menggunakan paku.',
    images: [
      'https://images.unsplash.com/photo-1596706927976-9d332617a224?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    ]
  },
  5: {
    name: 'Hutan Pinus Samparona',
    rating: '4.6',
    address: 'Baubau, Sulawesi Tenggara',
    price: '$5.0',
    mapUrl: 'https://maps.app.goo.gl/wtsomSGyNVet1z5n9',
    description: 'Kawasan wisata alam sejuk di pinggiran kota Baubau dengan area camping ground dan pohon pinus.',
    images: [
      '/samparona.jpg',
      'https://jadesta.kemenpar.go.id/imgpost/53308.jpg',
      'https://jadesta.kemenpar.go.id/imgpost/53310.jpg',
      'https://jadesta.kemenpar.go.id/imgpost/53313.jpg',
    ]
  }
};

export default function DetailDestinasi() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [activeImg, setActiveImg] = useState(0);

  const destId = id || '1';
  const rawData = destinationData[destId] || destinationData[1];

  const data = {
    ...rawData,
    name: t(`detail.destinations.${destId}.name`),
    address: t(`detail.destinations.${destId}.address`),
    description: t(`detail.destinations.${destId}.description`)
  };

  return (
    <div className="min-h-screen bg-white font-sans relative">
      
      {/* Fixed Hero Image Background */}
      <div className="fixed top-0 left-0 right-0 h-[50vh] z-0">
        <img 
          src={data.images[activeImg]} 
          alt={data.name} 
          className="w-full h-full object-cover rounded-b-[40px]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 rounded-b-[40px]"></div>
      </div>

      {/* Floating Header Actions */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 pt-12 pb-4">
        <button 
          onClick={() => navigate(-1)}
          className="w-11 h-11 rounded-full bg-[#1e2330]/50 backdrop-blur-md flex items-center justify-center border border-white/20 active:scale-95 transition-transform"
        >
          <span className="material-symbols-outlined text-white text-[20px]">arrow_back_ios_new</span>
        </button>
        <button className="w-11 h-11 rounded-full bg-[#1e2330]/50 backdrop-blur-md flex items-center justify-center border border-white/20 active:scale-95 transition-transform">
          <span className="material-symbols-outlined text-white text-[20px]">favorite_border</span>
        </button>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 pt-[38vh]">
        
        {/* Thumbnails Floating over the image */}
        <div className="flex justify-center gap-3 mb-6 px-6 relative z-20">
          {data.images.map((img, idx) => (
            <div 
              key={idx}
              onClick={() => setActiveImg(idx)}
              className={`w-14 h-14 rounded-2xl overflow-hidden cursor-pointer border-2 transition-all shadow-lg ${
                activeImg === idx ? 'border-white scale-110' : 'border-transparent opacity-70 hover:opacity-100'
              }`}
            >
              <img src={img} className="w-full h-full object-cover" alt="" />
            </div>
          ))}
          {data.images.length > 2 && (
            <div className="w-14 h-14 rounded-2xl overflow-hidden bg-black/40 backdrop-blur-sm border-2 border-transparent flex items-center justify-center cursor-pointer hover:bg-black/60 transition-colors shadow-lg">
              <span className="text-white font-bold text-sm">+12</span>
            </div>
          )}
        </div>

        {/* White Info Card */}
        <div className="bg-white rounded-t-[40px] min-h-[60vh] pb-32 shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
          <div className="flex justify-center pt-4 mb-4">
            <div className="w-12 h-1.5 bg-gray-200 rounded-full"></div>
          </div>
          
          <div className="px-6">
            <div className="flex justify-between items-start mb-2">
              <h1 className="text-3xl font-bold text-gray-900 leading-tight pr-4">{data.name}</h1>
            </div>
            
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-1 text-gray-500">
                <span className="material-symbols-outlined text-[18px]">location_on</span>
                <span className="font-medium text-sm">{data.address}</span>
              </div>
              <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-lg border border-yellow-100">
                <span className="material-symbols-outlined text-yellow-500 text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="text-yellow-600 font-bold text-sm">{data.rating}</span>
              </div>
            </div>

            <div className="mb-8">
              <p className="text-gray-500 leading-relaxed text-[15px]">
                {data.description}
                <button className="text-blue-500 font-bold ml-1 hover:underline">{t('detail.seeMore')}</button>
              </p>
            </div>

            {/* Routes Section */}
            <div className="mb-8 bg-blue-50/50 rounded-2xl p-4 border border-blue-100/50">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="material-symbols-outlined text-blue-500 text-[20px]">directions_bus</span>
                {t('detail.howToGetThere')}
              </h3>
              <ul className="space-y-3">
                <li className="flex gap-3 text-[14px] text-gray-600">
                  <span className="material-symbols-outlined text-gray-400 text-[18px] shrink-0 mt-0.5">flight_takeoff</span>
                  <span>{t('detail.routeJakarta')}</span>
                </li>
                <li className="flex gap-3 text-[14px] text-gray-600">
                  <span className="material-symbols-outlined text-gray-400 text-[18px] shrink-0 mt-0.5">directions_boat</span>
                  <span>{t('detail.routeMakassar')}</span>
                </li>
                <li className="flex gap-3 text-[14px] text-gray-600">
                  <span className="material-symbols-outlined text-gray-400 text-[18px] shrink-0 mt-0.5">public</span>
                  <span>{t('detail.routeIntl')}</span>
                </li>
              </ul>
            </div>

            {/* Travelers & Price */}
            <div className="flex justify-between items-center mb-8 border-t border-gray-100 pt-6">
              <div className="flex items-center">
                <div className="flex -space-x-3">
                  <img className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm" src="https://i.pravatar.cc/100?img=1" alt="" />
                  <img className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm" src="https://i.pravatar.cc/100?img=2" alt="" />
                  <img className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm" src="https://i.pravatar.cc/100?img=3" alt="" />
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center shadow-sm">
                    <span className="text-xs font-bold text-gray-600">+8</span>
                  </div>
                </div>
                <span className="text-sm font-medium text-gray-500 ml-3">{t('detail.travelers')}</span>
              </div>
              <div className="text-right">
                <p className="text-blue-600 font-black text-2xl">{data.price}</p>
                <p className="text-gray-400 text-xs font-medium">/{t('detail.person')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-white via-white to-transparent z-50">
        <div className="max-w-md mx-auto flex gap-4">
          <button className="flex-1 py-4 px-6 rounded-2xl border-[1.5px] border-blue-100 bg-blue-50/50 flex justify-center items-center gap-2 hover:bg-blue-50 transition-colors">
            <span className="material-symbols-outlined text-blue-500 text-[20px]">bookmark_border</span>
            <span className="text-blue-500 font-bold text-[15px]">{t('detail.save')}</span>
          </button>
          <button 
            onClick={() => {
              if (data.mapUrl) {
                window.open(data.mapUrl, '_blank', 'noopener,noreferrer');
              } else {
                navigate('/peta');
              }
            }}
            className="flex-1 py-4 px-6 rounded-2xl bg-blue-600 text-white flex justify-center items-center gap-2 shadow-xl shadow-blue-600/30 hover:bg-blue-700 transition-colors active:scale-95"
          >
            <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>near_me</span>
            <span className="font-bold text-[15px]">{t('detail.directions')}</span>
          </button>
        </div>
      </div>

    </div>
  );
}
