import { useState, useMemo } from 'react';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';

// --- MOCK DATA (JSON Contract untuk Backend) ---
const mockDestinations = [
  { id: 'd1', name: 'Benteng Keraton Buton', ticketPrice: 5000, category: 'Sejarah', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDXHcFwe6QG_7UtXsO3S4S0lqMC0APRBWRvbhkrRylX8CMVLmmBfpb3rmlcryn0A1b6jwoy1R5ZL0KZjwv-C89frp3G59WbIcM2lHR-jFr5i8mTLdgwSR6LyN0pgE92ovr858mADs2QNr0-xfLb2suGQ_7UzZYVpFBDO-sfJj0jcCIRe-sMssmBQby-LnwzXPu4DJ5YQKz5CTFzrZAN4UszA1y7_rL-C0tBpaMkSp8Ackj2dKG9aytMPT5Uhhn_UPg6-1vDhtGh1dw' },
  { id: 'd2', name: 'Pantai Nirwana', ticketPrice: 10000, category: 'Pantai', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80' },
  { id: 'd3', name: 'Air Terjun Tirta Rimba', ticketPrice: 5000, category: 'Alam', image: 'https://images.unsplash.com/photo-1432405972618-c600f5171e35?auto=format&fit=crop&w=400&q=80' },
  { id: 'd4', name: 'Bukit Wantiro', ticketPrice: 0, category: 'Alam', image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=400&q=80' }
];

const mockUmkmServices = [
  { id: 's1', destinationId: 'd1', name: 'Sewa Baju Adat Buton', category: 'Sewa Alat', price: 50000, unit: 'per pasang', umkmName: 'Sanggar Tari Waode' },
  { id: 's2', destinationId: 'd1', name: 'Pemandu Wisata Sejarah', category: 'Jasa', price: 100000, unit: 'per grup', umkmName: 'HPI Baubau' },
  { id: 's3', destinationId: 'd2', name: 'Sewa Gazebo Pantai', category: 'Fasilitas', price: 50000, unit: 'per hari', umkmName: 'Koperasi Pantai Nirwana' },
  { id: 's4', destinationId: 'd2', name: 'Sewa Alat Snorkeling', category: 'Sewa Alat', price: 35000, unit: 'per set', umkmName: 'Nirwana Dive' },
  { id: 's5', destinationId: 'd3', name: 'Paket Makan Siang (Ikan Bakar)', category: 'Kuliner', price: 45000, unit: 'per porsi', umkmName: 'Warung Rimba' },
  { id: 's6', destinationId: 'all', name: 'Oleh-oleh Kacang Mete', category: 'Souvenir', price: 75000, unit: 'per box', umkmName: 'Mete Mubaraq' },
  { id: 's7', destinationId: 'all', name: 'Sewa Mobil + Supir', category: 'Transportasi', price: 350000, unit: 'per hari', umkmName: 'Baubau Rent Car' }
];
// -----------------------------------------------

export default function TripPlanner() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedDestinations, setSelectedDestinations] = useState([]);
  const [selectedServices, setSelectedServices] = useState([]);

  // Hitung Estimasi
  const totalTicketPrice = useMemo(() => {
    return mockDestinations
      .filter(d => selectedDestinations.includes(d.id))
      .reduce((total, dest) => total + dest.ticketPrice, 0);
  }, [selectedDestinations]);

  const totalServicePrice = useMemo(() => {
    return mockUmkmServices
      .filter(s => selectedServices.includes(s.id))
      .reduce((total, s) => total + s.price, 0);
  }, [selectedServices]);

  const grandTotal = totalTicketPrice + totalServicePrice;

  // Layanan yang relevan dengan destinasi terpilih + layanan umum ('all')
  const availableServices = useMemo(() => {
    return mockUmkmServices.filter(
      s => s.destinationId === 'all' || selectedDestinations.includes(s.destinationId)
    );
  }, [selectedDestinations]);

  const toggleDestination = (id) => {
    setSelectedDestinations(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
    // Jika destinasi di-uncheck, uncheck juga layanannya
    setSelectedServices(prev => 
      prev.filter(serviceId => {
        const service = mockUmkmServices.find(s => s.id === serviceId);
        return service.destinationId === 'all' || selectedDestinations.includes(service.destinationId) || service.destinationId !== id;
      })
    );
  };

  const toggleService = (id) => {
    setSelectedServices(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const formatRupiah = (number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(number);
  };

  const progressWidth = ((currentStep - 1) / 2) * 100;

  return (
    <div className="min-h-screen pb-24 bg-[#F5F3F0]">
      <Header
        title="Trip Planner"
        rightAction={
          <div className="w-10 h-10 rounded-full bg-primary-fixed overflow-hidden ring-2 ring-primary/10">
            <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7ZMPA0rlDuhGFIjXe7TNQH23IkONZi6zinU3nYLecBBH5yf-yyJvSNndoWK7eifDR5OhXFPust750hAq9phkCqEDw-pSl6aPbDlqTqvUcl73xXtAyaIJS4vkqBfplaMUk8-FKaKVIqIiGGA1SrZXcd5fU4DoTyIPGO5bSSUNl_KH9BSDLRcwxkapB5OCNQq_ljFL2Vv7bBru9d89FFkzggpVZ40fEkR4jPlaTZGx3_-sERJ1nUUBJUBIOeCUv4mry0_R8peld9ro" alt="Profile" />
          </div>
        }
      />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-[#1A5276] mb-2">Estimasi Budget Liburan</h2>
          <p className="text-gray-600">Rencanakan kunjungan Anda dan hitung otomatis estimasi pengeluaran bersama layanan UMKM Baubau.</p>
        </div>

        {/* Progress Bar */}
        <div className="relative mb-12 px-4">
          <div className="flex justify-between relative z-10">
            {['Destinasi', 'Fasilitas UMKM', 'Estimasi'].map((label, index) => (
              <div key={index} className="flex flex-col items-center gap-2">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-colors duration-300 ${
                    index + 1 <= currentStep
                      ? 'bg-[#1A5276] text-white'
                      : 'bg-gray-200 text-gray-500'
                  }`}
                >
                  {index + 1}
                </div>
                <span className="text-xs font-medium text-gray-600 hidden md:block">{label}</span>
              </div>
            ))}
          </div>
          <div className="absolute top-5 left-8 right-8 h-1 bg-gray-200 -z-0">
            <div
              className="h-full bg-[#1A5276] transition-all duration-500"
              style={{ width: `${progressWidth}%` }}
            ></div>
          </div>
        </div>

        {/* Wizard Container */}
        <div className="relative">
          {/* Step 1: Destinasi */}
          {currentStep === 1 && (
            <section className="animate-fade-in">
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-[#1A5276] mb-6 border-b pb-4">1. Pilih Destinasi yang Ingin Dikunjungi</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {mockDestinations.map(dest => (
                    <div 
                      key={dest.id}
                      onClick={() => toggleDestination(dest.id)}
                      className={`flex items-center gap-4 p-3 rounded-xl border-2 cursor-pointer transition-all ${
                        selectedDestinations.includes(dest.id) 
                          ? 'border-[#1A5276] bg-[#1A5276]/5' 
                          : 'border-gray-100 hover:border-[#1A5276]/30'
                      }`}
                    >
                      <img src={dest.image} alt={dest.name} className="w-20 h-20 rounded-lg object-cover" loading="lazy" />
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800">{dest.name}</h4>
                        <span className="text-xs px-2 py-1 bg-gray-100 rounded text-gray-600 inline-block mb-1">{dest.category}</span>
                        <p className="text-sm font-medium text-[#C9A96E]">Tiket: {dest.ticketPrice === 0 ? 'Gratis' : formatRupiah(dest.ticketPrice)}</p>
                      </div>
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${selectedDestinations.includes(dest.id) ? 'bg-[#1A5276] border-[#1A5276]' : 'border-gray-300'}`}>
                        {selectedDestinations.includes(dest.id) && <span className="material-symbols-outlined text-white text-sm" style={{fontVariationSettings:"'FILL' 1"}}>check</span>}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 flex justify-end">
                  <button
                    onClick={() => setCurrentStep(2)}
                    disabled={selectedDestinations.length === 0}
                    className="bg-[#1A5276] text-white px-8 py-3 rounded-full font-medium hover:bg-[#1A5276]/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                  >
                    Lanjut Pilih Fasilitas
                  </button>
                </div>
              </div>
            </section>
          )}

          {/* Step 2: Fasilitas UMKM */}
          {currentStep === 2 && (
            <section className="animate-fade-in">
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-[#1A5276] mb-2">2. Tambahkan Layanan & Fasilitas UMKM</h3>
                <p className="text-sm text-gray-500 mb-6 border-b pb-4">Layanan di bawah ini direkomendasikan berdasarkan destinasi yang Anda pilih.</p>
                
                {availableServices.length > 0 ? (
                  <div className="grid grid-cols-1 gap-4">
                    {availableServices.map(service => (
                      <div 
                        key={service.id}
                        onClick={() => toggleService(service.id)}
                        className={`flex justify-between items-center p-4 rounded-xl border-2 cursor-pointer transition-all ${
                          selectedServices.includes(service.id)
                            ? 'border-[#C9A96E] bg-[#C9A96E]/5'
                            : 'border-gray-100 hover:border-[#C9A96E]/30'
                        }`}
                      >
                        <div className="flex gap-4 items-center">
                           <div className={`w-6 h-6 rounded border-2 flex items-center justify-center shrink-0 ${selectedServices.includes(service.id) ? 'bg-[#C9A96E] border-[#C9A96E]' : 'border-gray-300'}`}>
                            {selectedServices.includes(service.id) && <span className="material-symbols-outlined text-white text-sm" style={{fontVariationSettings:"'FILL' 1"}}>check</span>}
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-800">{service.name}</h4>
                            <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                              <span className="material-symbols-outlined text-[14px]">storefront</span>
                              <span>{service.umkmName} ({service.category})</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right shrink-0">
                          <p className="font-bold text-[#1A5276]">{formatRupiah(service.price)}</p>
                          <p className="text-xs text-gray-500">{service.unit}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12 text-gray-500">
                    <span className="material-symbols-outlined text-4xl mb-2 opacity-50">inventory_2</span>
                    <p>Belum ada layanan UMKM yang tersedia untuk destinasi ini.</p>
                  </div>
                )}

                <div className="mt-8 flex justify-between">
                  <button
                    onClick={() => setCurrentStep(1)}
                    className="text-[#1A5276] font-medium px-6 py-3 border border-[#1A5276] rounded-full hover:bg-gray-50 transition-colors"
                  >
                    Kembali
                  </button>
                  <button
                    onClick={() => setCurrentStep(3)}
                    className="bg-[#1A5276] text-white px-8 py-3 rounded-full font-medium hover:bg-[#1A5276]/90 transition-all shadow-md"
                  >
                    Lihat Estimasi
                  </button>
                </div>
              </div>
            </section>
          )}

          {/* Step 3: Result */}
          {currentStep === 3 && (
            <section className="animate-fade-in">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="bg-[#1A5276] p-6 text-white text-center">
                  <span className="material-symbols-outlined text-5xl text-[#C9A96E] mb-2" style={{fontVariationSettings:"'FILL' 1"}}>calculate</span>
                  <h3 className="text-2xl font-bold mb-1">Estimasi Budget Anda</h3>
                  <p className="text-[#C9A96E] text-3xl font-bold">{formatRupiah(grandTotal)}</p>
                </div>
                
                <div className="p-6 space-y-6">
                  {/* Rincian Destinasi */}
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2 border-b pb-2">
                      <span className="material-symbols-outlined text-[#1A5276]">map</span>
                      Tiket Destinasi
                    </h4>
                    <ul className="space-y-2">
                      {selectedDestinations.map(id => {
                        const dest = mockDestinations.find(d => d.id === id);
                        return (
                          <li key={id} className="flex justify-between text-sm">
                            <span className="text-gray-600">{dest.name}</span>
                            <span className="font-medium text-gray-800">{dest.ticketPrice === 0 ? 'Gratis' : formatRupiah(dest.ticketPrice)}</span>
                          </li>
                        )
                      })}
                      <li className="flex justify-between text-sm font-semibold pt-2 border-t mt-2">
                        <span>Subtotal Tiket</span>
                        <span>{formatRupiah(totalTicketPrice)}</span>
                      </li>
                    </ul>
                  </div>

                  {/* Rincian UMKM */}
                  {selectedServices.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2 border-b pb-2">
                        <span className="material-symbols-outlined text-[#1A5276]">local_mall</span>
                        Layanan & Fasilitas UMKM
                      </h4>
                      <ul className="space-y-2">
                        {selectedServices.map(id => {
                          const service = mockUmkmServices.find(s => s.id === id);
                          return (
                            <li key={id} className="flex justify-between text-sm">
                              <div className="flex flex-col">
                                <span className="text-gray-600">{service.name}</span>
                                <span className="text-xs text-gray-400">{service.umkmName}</span>
                              </div>
                              <span className="font-medium text-gray-800">{formatRupiah(service.price)}</span>
                            </li>
                          )
                        })}
                        <li className="flex justify-between text-sm font-semibold pt-2 border-t mt-2">
                          <span>Subtotal UMKM</span>
                          <span>{formatRupiah(totalServicePrice)}</span>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>

                <div className="p-6 bg-gray-50 flex flex-col md:flex-row gap-4 justify-between items-center border-t border-gray-100">
                  <button onClick={() => setCurrentStep(1)} className="text-[#1A5276] font-medium text-sm hover:underline">
                    Ubah Rencana
                  </button>
                  <div className="flex gap-3 w-full md:w-auto">
                    <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 rounded-xl border-2 border-[#1A5276] text-[#1A5276] font-medium hover:bg-gray-50 transition-all">
                      <span className="material-symbols-outlined text-sm">download</span>
                      Simpan PDF
                    </button>
                    <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-[#C9A96E] text-white font-medium hover:brightness-110 shadow-md transition-all">
                      <span className="material-symbols-outlined text-sm">shopping_cart_checkout</span>
                      Booking Sekarang
                    </button>
                  </div>
                </div>
              </div>
            </section>
          )}
        </div>
      </main>
      <BottomNav />
    </div>
  );
}
