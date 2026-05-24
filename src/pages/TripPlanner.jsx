import { useState } from 'react';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';

export default function TripPlanner() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedDuration, setSelectedDuration] = useState(null);
  const [selectedTransport, setSelectedTransport] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const nextStep = (step) => {
    setCurrentStep(step);
  };

  const selectDuration = (label) => {
    setSelectedDuration(label);
  };

  const selectTransport = (label) => {
    setSelectedTransport(label);
  };

  const generateItinerary = () => {
    setShowResult(true);
  };

  const progressWidth = ((currentStep - 1) / 2) * 100;

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
            {[1, 2, 3].map((step) => (
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
              style={{ width: `${progressWidth}%` }}
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
              <div className="mt-2xl flex justify-center">
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
                    <p className="font-body-md text-primary-fixed-dim">3 Hari Menjelajahi Sejarah & Alam Baubau</p>
                  </div>
                  <div className="bg-secondary-container text-on-secondary-container px-md py-sm rounded-lg font-label-md">
                    Dibuat Khusus Untuk Anda
                  </div>
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
