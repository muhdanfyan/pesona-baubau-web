import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';

// --- DATA ---

const destinations = [
  { id: 1, name: 'Benteng Keraton Buton', price: 15 },
  { id: 2, name: 'Pantai Nirwana', price: 10 },
  { id: 3, name: 'Batu Sori', price: 12 },
  { id: 4, name: 'Istana Malige', price: 5 },
  { id: 5, name: 'Hutan Pinus Samparona', price: 5 },
];

const penginapan = [
  { id: 1, name: 'Hotel Nirwana', price: 45, location: 'Dekat Pantai Nirwana', bintang: 4 },
  { id: 2, name: 'Homestay Benteng', price: 15, location: 'Dekat Benteng Keraton', bintang: 2 },
  { id: 3, name: 'Resort Samparona', price: 30, location: 'Di Hutan Pinus', bintang: 3 },
  { id: 4, name: 'Penginapan Bahari', price: 20, location: 'Pusat Kota', bintang: 2 },
];

const aksesoris = [
  { id: 1, name: 'Kain Tenun Buton', price: 25 },
  { id: 2, name: 'Gelang Aksara Buton', price: 8 },
  { id: 3, name: 'Gantungan Kunci Miniatur Benteng', price: 3 },
  { id: 4, name: 'Kopi Buton 250gr', price: 10 },
  { id: 5, name: 'Madu Hutan Buton', price: 15 },
];

const fasilitasWisata = [
  { id: 1, name: 'Sewa Mobil + Driver', price: 50, satuan: '/hari' },
  { id: 2, name: 'Tour Guide Lokal', price: 30, satuan: '/hari' },
  { id: 3, name: 'Dokumentasi Foto/Video', price: 40, satuan: '' },
  { id: 4, name: 'Sewa Peralatan Snorkeling', price: 15, satuan: '/hari' },
  { id: 5, name: 'Tiket Masuk Destinasi', price: 10, satuan: '/destinasi' },
];

const KURS = 16500;

// --- HELPER ---
function formatIDR(usd) {
  return 'Rp ' + (usd * KURS).toLocaleString('id-ID');
}

export default function TripPlanner() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedDuration, setSelectedDuration] = useState(null);
  const [selectedTransport, setSelectedTransport] = useState(null);
  const [showResult, setShowResult] = useState(false);

  // Budget state
  const [selectedDestinations, setSelectedDestinations] = useState([]);
  const [selectedPenginapan, setSelectedPenginapan] = useState([]);
  const [selectedAksesoris, setSelectedAksesoris] = useState([]);
  const [selectedFasilitas, setSelectedFasilitas] = useState([]);
  const [budgetDays, setBudgetDays] = useState(1);

  const nextStep = (step) => {
    if (step === 4) {
      setCurrentStep(4);
    } else {
      setCurrentStep(step);
    }
  };

  const selectDuration = (label) => {
    setSelectedDuration(label);
    const days = label === '1 Hari' ? 1 : label === '2 Hari 1 Malam' ? 2 : 3;
    setBudgetDays(days);
  };

  const selectTransport = (label) => {
    setSelectedTransport(label);
  };

  const toggleDestinasi = (id) => {
    setSelectedDestinations(prev =>
      prev.includes(id) ? prev.filter(d => d !== id) : [...prev, id]
    );
  };

  const togglePenginapan = (id) => {
    setSelectedPenginapan(prev =>
      prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]
    );
  };

  const toggleAksesoris = (id) => {
    setSelectedAksesoris(prev =>
      prev.includes(id) ? prev.filter(a => a !== id) : [...prev, id]
    );
  };

  const toggleFasilitas = (id) => {
    setSelectedFasilitas(prev =>
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    );
  };

  const generateItinerary = () => {
    setShowResult(true);
  };

  // Budget calculations
  const destCost = selectedDestinations.reduce((sum, id) => {
    const d = destinations.find(d => d.id === id);
    return sum + (d ? d.price : 0);
  }, 0);

  const penginapanCost = selectedPenginapan.reduce((sum, id) => {
    const p = penginapan.find(p => p.id === id);
    return sum + (p ? p.price * budgetDays : 0);
  }, 0);

  const aksesorisCost = selectedAksesoris.reduce((sum, id) => {
    const a = aksesoris.find(a => a.id === id);
    return sum + (a ? a.price : 0);
  }, 0);

  const fasilitasCost = selectedFasilitas.reduce((sum, id) => {
    const f = fasilitasWisata.find(f => f.id === id);
    return sum + (f ? f.price * budgetDays : 0);
  }, 0);

  const totalUSD = destCost + penginapanCost + aksesorisCost + fasilitasCost;
  const totalIDR = totalUSD * KURS;

  const progressWidthBudget = ((currentStep - 1) / 3) * 100;

  return (
    <div className="min-h-screen pb-24 bg-surface">
      <Header
        title="Pesona Baubau"
        rightAction={
          <div className="w-10 h-10 rounded-full bg-primary-fixed overflow-hidden ring-2 ring-primary/10">
            <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7ZMPA0rlDuhGFIjXe7TNQH23IkONZi6zinU3nYLecBBH5yf-yyJvSNndoWK7eifDR5OhXFPust750hAq9phkCqEDw-pSl6aPbDlqTqvUcl73xXtAyaIJS4vkqBfplaMUk8-FKaKVIqIiGGA1SrZXcd5fU4DoTyIPGO5bSSUNl_KH9BSDLRcwxkapB5OCNQq_ljFL2Vv7bBru9d89FFkzggpVZ40fEkR4jPlaTZGx3_-sERJ1nUUBJUBIOeCUv4mry0_R8peld9ro" alt="Profile" />
          </div>
        }
      />
      <main className="max-w-4xl mx-auto px-md py-lg">
        <div className="text-center mb-xl">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-xs">Rencanakan Perjalanan</h2>
          <p className="text-on-surface-variant font-body-md">Wujudkan liburan impian Anda di Buton dalam hitungan detik.</p>
        </div>

        {/* Progress Bar */}
        <div className="relative mb-3xl px-lg">
          <div className="flex justify-between relative z-10">
            {[1, 2, 3, 4].map((step) => (
              <div
                key={step}
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-colors duration-300 ${
                  step <= currentStep
                    ? 'bg-primary-container text-white'
                    : 'bg-surface-container-highest text-on-surface-variant'
                }`}
              >
                {step}
              </div>
            ))}
          </div>
          <div className="absolute top-5 left-lg right-lg h-0.5 bg-surface-container-highest -z-0">
            <div
              className="h-full bg-primary-container transition-all duration-500"
              style={{ width: `${progressWidthBudget}%` }}
            ></div>
          </div>
        </div>

        {/* Wizard Container */}
        <div className="relative">
          {/* Step 1: Duration */}
          <section className={`step-transition ${currentStep === 1 ? 'active-step' : 'hidden-step'}`}>
            <div className="bg-surface-container-lowest rounded-xl p-xl shadow-sm border border-surface-variant">
              <h3 className="font-headline-sm text-headline-sm text-primary mb-lg text-center">Berapa lama Anda akan berkunjung?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
                {[
                  { icon: 'sunny', label: '1 Hari' },
                  { icon: 'bedtime', label: '2 Hari 1 Malam' },
                  { icon: 'explore', label: '3 Hari' },
                ].map((item, i) => (
                  <button
                    key={i}
                    onClick={() => selectDuration(item.label)}
                    className={`p-lg rounded-xl border-2 transition-all text-center group bg-surface ${
                      selectedDuration === item.label
                        ? 'border-primary bg-primary-fixed-dim/20'
                        : 'border-surface-variant hover:border-primary-container'
                    }`}
                  >
                    <span className="material-symbols-outlined text-4xl text-primary mb-md block group-hover:scale-110 transition-transform">{item.icon}</span>
                    <span className="font-headline-sm text-headline-sm block">{item.label}</span>
                  </button>
                ))}
              </div>
              <div className="mt-xl flex justify-end">
                <button
                  onClick={() => nextStep(2)}
                  className="bg-primary text-on-primary px-3xl py-md rounded-full font-label-md hover:bg-primary-container active:scale-95 transition-all"
                >
                  Lanjut
                </button>
              </div>
            </div>
          </section>

          {/* Step 2: Interests */}
          <section className={`step-transition ${currentStep === 2 ? 'active-step' : 'hidden-step'}`}>
            <div className="bg-surface-container-lowest rounded-xl p-xl shadow-sm border border-surface-variant">
              <h3 className="font-headline-sm text-headline-sm text-primary mb-lg text-center">Apa yang ingin Anda eksplorasi?</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-md">
                {[
                  { icon: 'history_edu', label: 'Sejarah' },
                  { icon: 'forest', label: 'Alam' },
                  { icon: 'restaurant', label: 'Kuliner' },
                  { icon: 'shopping_bag', label: 'Belanja' },
                ].map((item, i) => (
                  <label key={i} className="relative cursor-pointer group">
                    <input className="peer sr-only" name="interest" type="checkbox" />
                    <div className="p-lg rounded-xl border-2 border-surface-variant bg-surface peer-checked:border-primary peer-checked:bg-primary-fixed-dim/10 transition-all text-center">
                      <span className="material-symbols-outlined text-3xl text-primary mb-sm block">{item.icon}</span>
                      <span className="font-label-md">{item.label}</span>
                    </div>
                  </label>
                ))}
              </div>
              <div className="mt-xl flex justify-between">
                <button
                  onClick={() => nextStep(1)}
                  className="text-primary font-label-md px-lg py-md border border-primary rounded-full hover:bg-primary-fixed transition-colors"
                >
                  Kembali
                </button>
                <button
                  onClick={() => nextStep(3)}
                  className="bg-primary text-on-primary px-3xl py-md rounded-full font-label-md hover:bg-primary-container active:scale-95 transition-all"
                >
                  Lanjut
                </button>
              </div>
            </div>
          </section>

          {/* Step 3: Transport */}
          <section className={`step-transition ${currentStep === 3 ? 'active-step' : 'hidden-step'}`}>
            <div className="bg-surface-container-lowest rounded-xl p-xl shadow-sm border border-surface-variant">
              <h3 className="font-headline-sm text-headline-sm text-primary mb-lg text-center">Pilih moda transportasi utama</h3>
              <div className="flex flex-col md:flex-row justify-center gap-xl">
                {[
                  { icon: 'flight', label: 'Pesawat' },
                  { icon: 'directions_boat', label: 'Kapal' },
                  { icon: 'directions_car', label: 'Mobil' },
                ].map((item, i) => (
                  <button
                    key={i}
                    onClick={() => selectTransport(item.label)}
                    className={`flex flex-col items-center gap-sm p-xl rounded-2xl border-2 transition-all ${
                      selectedTransport === item.label
                        ? 'border-primary-container bg-primary-fixed'
                        : 'border-transparent bg-surface-container-low hover:border-primary-container'
                    }`}
                  >
                    <span className="material-symbols-outlined text-5xl text-primary">{item.icon}</span>
                    <span className="font-label-md">{item.label}</span>
                  </button>
                ))}
              </div>
              <div className="mt-2xl flex justify-between">
                <button
                  onClick={() => nextStep(2)}
                  className="text-primary font-label-md px-lg py-md border border-primary rounded-full hover:bg-primary-fixed transition-colors"
                >
                  Kembali
                </button>
                <button
                  onClick={() => nextStep(4)}
                  className="bg-primary text-on-primary px-3xl py-md rounded-full font-label-md hover:bg-primary-container active:scale-95 transition-all"
                >
                  Lanjut ke Budget
                </button>
              </div>
            </div>
          </section>

          {/* Step 4: Budget Planner */}
          <section className={`step-transition ${currentStep === 4 ? 'active-step' : 'hidden-step'}`}>
            <div className="bg-surface-container-lowest rounded-xl p-xl shadow-sm border border-surface-variant">
              <h3 className="font-headline-sm text-headline-sm text-primary mb-lg text-center">
                <span className="material-symbols-outlined align-middle text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>account_balance_wallet</span>{' '}
                Budgeting Planner
              </h3>
              <p className="text-center text-on-surface-variant font-body-md mb-lg">Atur rencana anggaran perjalanan Anda</p>

              {/* Pilih Destinasi */}
              <div className="mb-lg">
                <h4 className="font-label-md text-primary mb-sm flex items-center gap-sm">
                  <span className="material-symbols-outlined text-lg">pin_drop</span> Pilih Destinasi
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-sm">
                  {destinations.map((d) => (
                    <label key={d.id} className={`flex items-center gap-md p-md rounded-xl border-2 cursor-pointer transition-all ${
                      selectedDestinations.includes(d.id)
                        ? 'border-primary bg-primary-fixed-dim/10'
                        : 'border-surface-variant bg-surface hover:border-primary-container'
                    }`}>
                      <input
                        type="checkbox"
                        checked={selectedDestinations.includes(d.id)}
                        onChange={() => toggleDestinasi(d.id)}
                        className="w-5 h-5 accent-primary"
                      />
                      <div className="flex-1">
                        <span className="font-label-md">{d.name}</span>
                      </div>
                      <span className="font-label-sm text-primary">${d.price}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Pilih Penginapan */}
              <div className="mb-lg">
                <h4 className="font-label-md text-primary mb-sm flex items-center gap-sm">
                  <span className="material-symbols-outlined text-lg">hotel</span> Pilih Penginapan
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-sm">
                  {penginapan.map((p) => (
                    <label key={p.id} className={`flex items-center gap-md p-md rounded-xl border-2 cursor-pointer transition-all ${
                      selectedPenginapan.includes(p.id)
                        ? 'border-primary bg-primary-fixed-dim/10'
                        : 'border-surface-variant bg-surface hover:border-primary-container'
                    }`}>
                      <input
                        type="checkbox"
                        checked={selectedPenginapan.includes(p.id)}
                        onChange={() => togglePenginapan(p.id)}
                        className="w-5 h-5 accent-primary"
                      />
                      <div className="flex-1">
                        <span className="font-label-md">{p.name}</span>
                        <span className="block text-xs text-on-surface-variant">{p.location}</span>
                      </div>
                      <div className="text-right">
                        <span className="font-label-sm text-primary">${p.price}</span>
                        <span className="block text-xs text-on-surface-variant">/malam</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Pilih Aksesoris / Souvenir */}
              <div className="mb-lg">
                <h4 className="font-label-md text-primary mb-sm flex items-center gap-sm">
                  <span className="material-symbols-outlined text-lg">card_giftcard</span> Pilih Aksesoris / Souvenir
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-sm">
                  {aksesoris.map((a) => (
                    <label key={a.id} className={`flex items-center gap-md p-md rounded-xl border-2 cursor-pointer transition-all ${
                      selectedAksesoris.includes(a.id)
                        ? 'border-primary bg-primary-fixed-dim/10'
                        : 'border-surface-variant bg-surface hover:border-primary-container'
                    }`}>
                      <input
                        type="checkbox"
                        checked={selectedAksesoris.includes(a.id)}
                        onChange={() => toggleAksesoris(a.id)}
                        className="w-5 h-5 accent-primary"
                      />
                      <div className="flex-1">
                        <span className="font-label-md">{a.name}</span>
                      </div>
                      <span className="font-label-sm text-primary">${a.price}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Fasilitas Wisata */}
              <div className="mb-lg">
                <h4 className="font-label-md text-primary mb-sm flex items-center gap-sm">
                  <span className="material-symbols-outlined text-lg">support</span> Fasilitas Wisata
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-sm">
                  {fasilitasWisata.map((f) => (
                    <label key={f.id} className={`flex items-center gap-md p-md rounded-xl border-2 cursor-pointer transition-all ${
                      selectedFasilitas.includes(f.id)
                        ? 'border-primary bg-primary-fixed-dim/10'
                        : 'border-surface-variant bg-surface hover:border-primary-container'
                    }`}>
                      <input
                        type="checkbox"
                        checked={selectedFasilitas.includes(f.id)}
                        onChange={() => toggleFasilitas(f.id)}
                        className="w-5 h-5 accent-primary"
                      />
                      <div className="flex-1">
                        <span className="font-label-md">{f.name}</span>
                      </div>
                      <span className="font-label-sm text-primary">${f.price}{f.satuan}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Budget Summary Live */}
              <div className="bg-primary-fixed-dim/5 rounded-xl p-lg border border-primary-container">
                <h4 className="font-headline-sm text-headline-sm text-primary mb-md">Ringkasan Biaya {budgetDays > 1 ? `(${budgetDays} Hari)` : ''}</h4>
                <div className="space-y-sm mb-md">
                  <div className="flex justify-between text-sm">
                    <span className="text-on-surface-variant">Destinasi</span>
                    <span>${destCost} | {formatIDR(destCost)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-on-surface-variant">Penginapan</span>
                    <span>${penginapanCost} | {formatIDR(penginapanCost)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-on-surface-variant">Aksesoris/Souvenir</span>
                    <span>${aksesorisCost} | {formatIDR(aksesorisCost)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-on-surface-variant">Fasilitas Wisata</span>
                    <span>${fasilitasCost} | {formatIDR(fasilitasCost)}</span>
                  </div>
                  <div className="border-t border-primary-container pt-sm">
                    <div className="flex justify-between font-bold text-primary">
                      <span>Grand Total</span>
                      <span>${totalUSD.toLocaleString('en-US')} | {formatIDR(totalUSD)}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-2xl flex justify-between">
                <button
                  onClick={() => nextStep(3)}
                  className="text-primary font-label-md px-lg py-md border border-primary rounded-full hover:bg-primary-fixed transition-colors"
                >
                  Kembali
                </button>
                <button
                  onClick={generateItinerary}
                  className="bg-[#1A5276] text-white px-3xl py-lg rounded-full font-headline-sm hover:brightness-110 active:scale-95 transition-all shadow-lg flex items-center gap-md"
                >
                  <span>Buat Rencana</span>
                  <span className="material-symbols-outlined">auto_awesome</span>
                </button>
              </div>
            </div>
          </section>
        </div>

        {/* Result Section */}
        {showResult && (
          <section className="mt-xl transition-all duration-700">
            <div className="bg-surface-container-lowest rounded-2xl shadow-xl border border-surface-variant overflow-hidden">
              <div className="bg-primary p-xl text-on-primary">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-headline-lg text-headline-lg mb-xs">Perjalanan Budaya Buton</h3>
                    <p className="font-body-md text-primary-fixed-dim">{selectedDuration || '3 Hari'} Menjelajahi Sejarah & Alam Baubau</p>
                  </div>
                  <div className="bg-secondary-container text-on-secondary-container px-md py-sm rounded-lg font-label-md">
                    Dibuat Khusus Untuk Anda
                  </div>
                </div>
              </div>

              {/* Budget Result Summary */}
              <div className="p-xl bg-surface-container-low border-b border-surface-variant">
                <h4 className="font-headline-sm text-headline-sm text-primary mb-md">Rencana Anggaran</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-md">
                  <div className="bg-surface rounded-xl p-md text-center">
                    <span className="block font-label-sm text-on-surface-variant">Destinasi</span>
                    <span className="block font-headline-sm text-primary">${destCost}</span>
                    <span className="block text-xs text-on-surface-variant">{formatIDR(destCost)}</span>
                  </div>
                  <div className="bg-surface rounded-xl p-md text-center">
                    <span className="block font-label-sm text-on-surface-variant">Penginapan</span>
                    <span className="block font-headline-sm text-primary">${penginapanCost}</span>
                    <span className="block text-xs text-on-surface-variant">{formatIDR(penginapanCost)}</span>
                  </div>
                  <div className="bg-surface rounded-xl p-md text-center">
                    <span className="block font-label-sm text-on-surface-variant">Souvenir</span>
                    <span className="block font-headline-sm text-primary">${aksesorisCost}</span>
                    <span className="block text-xs text-on-surface-variant">{formatIDR(aksesorisCost)}</span>
                  </div>
                  <div className="bg-surface rounded-xl p-md text-center">
                    <span className="block font-label-sm text-on-surface-variant">Fasilitas</span>
                    <span className="block font-headline-sm text-primary">${fasilitasCost}</span>
                    <span className="block text-xs text-on-surface-variant">{formatIDR(fasilitasCost)}</span>
                  </div>
                </div>
                <div className="mt-md text-center p-md bg-primary-fixed-dim/10 rounded-xl">
                  <p className="font-body-sm text-on-surface-variant">Grand Total Anggaran</p>
                  <p className="font-headline-lg text-headline-lg text-primary">${totalUSD.toLocaleString('en-US')}</p>
                  <p className="font-label-sm text-on-surface-variant">{formatIDR(totalUSD)}</p>
                </div>
              </div>

              <div className="p-xl space-y-xl relative">
                <h4 className="font-headline-sm text-headline-sm text-primary mb-lg">Timeline Perjalanan</h4>
                <div className="itinerary-line relative space-y-xl" style={{ position: 'relative' }}>
                  {/* Item 1 */}
                  <div className="flex gap-lg relative">
                    <div className="w-6 h-6 rounded-full bg-secondary ring-4 ring-secondary/20 shrink-0 z-10 mt-1"></div>
                    <div>
                      <span className="font-label-sm text-secondary block mb-xs">08:00 - 10:00</span>
                      <h5 className="font-headline-sm text-headline-sm mb-sm">Penjemputan & Sarapan Lokal</h5>
                      <div className="bg-surface p-md rounded-xl border border-surface-variant flex gap-md items-center">
                        <div className="w-20 h-20 rounded-lg bg-surface-variant flex-shrink-0 overflow-hidden">
                          <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBn67tIy0WIvj_xo7agB7PPNRRJfqR7Xef51laHhF3pGSDXZ5DPVYTAsN54Zew-6mblM6kUoINf9iQxj20bJtDgnSLupdTJkF9X2Y_99DXLhPFgb7vblTRaAAMqNrYWt9ZdiIPgVrHJw2698oRC098NcJhhoqHj0nhQzQhyDGwLMlEYYxjSvA_OM-qbFOlhnFGKgp7-iZisVOOaTBhXa6HOWRVLyuqaIT-70bFDdp0HRiHby5qRpEN_3WeoLOcbJaU9Bxt2P72n-7I" alt="Sarapan" />
                        </div>
                        <div>
                          <p className="font-body-sm text-on-surface-variant">Menikmati Kasoami dan ikan asap khas Buton di tepi pantai Kamali.</p>
                          <span className="text-secondary font-label-sm flex items-center gap-xs mt-xs">
                            <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                            Rekomendasi Terpopuler
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Item 2 */}
                  <div className="flex gap-lg relative">
                    <div className="w-6 h-6 rounded-full bg-secondary ring-4 ring-secondary/20 shrink-0 z-10 mt-1"></div>
                    <div>
                      <span className="font-label-sm text-secondary block mb-xs">10:30 - 13:00</span>
                      <h5 className="font-headline-sm text-headline-sm mb-sm">Eksplorasi Benteng Keraton Buton</h5>
                      <div className="bg-surface p-md rounded-xl border border-surface-variant">
                        <img className="w-full h-48 object-cover rounded-lg mb-md" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXHcFwe6QG_7UtXsO3S4S0lqMC0APRBWRvbhkrRylX8CMVLmmBfpb3rmlcryn0A1b6jwoy1R5ZL0KZjwv-C89frp3G59WbIcM2lHR-jFr5i8mTLdgwSR6LyN0pgE92ovr858mADs2QNr0-xfLb2suGQ_7UzZYVpFBDO-sfJj0jcCIRe-sMssmBQby-LnwzXPu4DJ5YQKz5CTFzrZAN4UszA1y7_rL-C0tBpaMkSp8Ackj2dKG9aytMPT5Uhhn_UPg6-1vDhtGh1dw" alt="Benteng Keraton Buton" />
                        <p className="font-body-sm text-on-surface-variant">Menelusuri benteng terluas di dunia dengan pemandu lokal berpengalaman.</p>
                      </div>
                    </div>
                  </div>
                  {/* Item 3 */}
                  <div className="flex gap-lg relative">
                    <div className="w-6 h-6 rounded-full bg-secondary ring-4 ring-secondary/20 shrink-0 z-10 mt-1"></div>
                    <div>
                      <span className="font-label-sm text-secondary block mb-xs">13:30 - 15:30</span>
                      <h5 className="font-headline-sm text-headline-sm mb-sm">Makan Siang Apung</h5>
                      <p className="font-body-sm text-on-surface-variant">Hidangan laut segar di restoran terapung dengan pemandangan Selat Buton.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-xl bg-surface-container-low flex flex-col md:flex-row gap-md justify-between items-center">
                <p className="font-body-sm text-on-surface-variant italic">Itinerary ini bersifat dinamis dan dapat disesuaikan kembali.</p>
                <div className="flex gap-md">
                  <button className="flex items-center gap-sm px-lg py-md rounded-full border-2 border-primary text-primary font-label-md hover:bg-primary-fixed transition-all">
                    <span className="material-symbols-outlined">share</span>
                    Bagikan
                  </button>
                  <button className="flex items-center gap-sm px-3xl py-md rounded-full bg-[#C9A96E] text-on-surface font-label-md hover:brightness-110 shadow-md transition-all">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>bookmark</span>
                    Simpan
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
      <BottomNav />
    </div>
  );
}
