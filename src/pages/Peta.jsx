import Header from '../components/Header';
import BottomNav from '../components/BottomNav';

export default function Peta() {
  return (
    <div className="overflow-hidden h-screen flex flex-col bg-background">
      <Header
        title="Pesona Baubau"
        rightAction={
          <div className="flex items-center gap-md">
            <button className="material-symbols-outlined p-xs rounded-full hover:bg-surface-container-low transition-colors text-on-surface-variant">search</button>
            <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container font-label-sm">
              JD
            </div>
          </div>
        }
      />
      <main className="flex-grow relative overflow-hidden">
        {/* Map Background */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(245, 243, 240, 0.4), rgba(245, 243, 240, 0.4)), url(https://lh3.googleusercontent.com/aida-public/AB6AXuCgjBoLj5K3GXxJ4Bxxw8S8m_emeuhpUPR9JgqUBPR07eVEL1Brw70Ys8unWRksgbPEQ8IyZSjEARoSfoSkPGK4eGI9RUhYhQZuihQzBhhIVyNsIRlYR93YnqPY63RZ_O2ACKXA8izQPWHmieBgRMJLkIS4U3JwfaXPtDSJ-xSsso5Aq8WMB2X5SEG7wszMWUxlJAErullfhG6jY4u6Cjh_olqUQNulusNYwe5SYPtGgli0ruPlGNEnliFBO588X5l0j9EvwwVdIbg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}></div>

        {/* Layer Filters */}
        <div className="absolute top-md left-0 right-0 z-40 px-md">
          <div className="flex gap-sm overflow-x-auto hide-scrollbar pb-xs">
            {[
              { icon: 'layers', label: 'Semua', active: true },
              { icon: 'history_edu', label: 'Sejarah' },
              { icon: 'beach_access', label: 'Pantai' },
              { icon: 'forest', label: 'Alam' },
              { icon: 'temple_hindu', label: 'Religi' },
              { icon: 'wifi', label: 'Wi-Fi Gratis' },
            ].map((item, i) => (
              <button
                key={i}
                className={`flex-shrink-0 px-md py-sm rounded-full font-label-md flex items-center gap-xs shadow-sm transition-transform active:scale-95 ${
                  item.active
                    ? 'bg-primary text-on-primary'
                    : 'bg-surface-container-lowest text-on-surface-variant border border-outline-variant hover:border-primary'
                }`}
              >
                <span className="material-symbols-outlined text-[18px]">{item.icon}</span>
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Markers */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Cluster */}
          <div className="absolute top-[30%] left-[40%] pointer-events-auto cursor-pointer group">
            <div className="relative flex items-center justify-center w-12 h-12 bg-primary text-on-primary rounded-full border-4 border-surface font-bold text-label-md shadow-lg transition-transform group-hover:scale-110">
              12
            </div>
          </div>

          {/* Single Marker with Popup */}
          <div className="absolute top-[55%] left-[60%] pointer-events-auto">
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[240px] bg-surface rounded-xl shadow-xl border border-outline-variant overflow-hidden">
              <div className="relative h-28">
                <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6XsimgTziDiZRAnuEuKGWfuID6cpFdsRPtK3xoQhZ5Oh1z8DDC6ML_zaaifaotiYbmBHFyucoPFtm_ewpKTfo-yrbvoQs2KK10fuKVh5kYMX0FmcZ0UOA51YoACW_ibBpk3CatX-2U3cTNPEmWn3eF9ISovrXm4IxbAx0_UlpS_sBwRRvdDrsI_9dpVozl28Ouvhzt27vlgum6iseMbPadoBTxLXcSJZq_6NDrhkrN8gHku6JlzicS1G3syLUfSQm5rftAW2kQkc" alt="Benteng Keraton Buton" />
                <button className="absolute top-2 right-2 w-6 h-6 bg-surface/50 backdrop-blur rounded-full flex items-center justify-center text-on-surface">
                  <span className="material-symbols-outlined text-sm">close</span>
                </button>
              </div>
              <div className="p-md">
                <div className="flex justify-between items-start mb-xs">
                  <h3 className="font-headline-sm text-label-md text-primary">Benteng Keraton Buton</h3>
                  <div className="flex items-center gap-xs">
                    <span className="material-symbols-outlined text-secondary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="font-label-sm">4.9</span>
                  </div>
                </div>
                <p className="text-on-surface-variant text-[11px] mb-md leading-relaxed">Benteng terluas di dunia dengan pemandangan teluk yang memukau.</p>
                <button className="w-full py-sm rounded-lg bg-primary-container text-on-primary-container font-label-md flex items-center justify-center gap-sm hover:bg-primary hover:text-on-primary transition-all">
                  Lihat Detail
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
              </div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-surface rotate-45 border-r border-b border-outline-variant"></div>
            </div>
            <div className="relative flex items-center justify-center w-8 h-8">
              <span className="material-symbols-outlined text-primary text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
            </div>
          </div>

          {/* User Location */}
          <div className="absolute top-[70%] left-[30%] pointer-events-auto">
            <div className="relative flex items-center justify-center w-6 h-6">
              <div className="absolute w-full h-full rounded-full" style={{
                backgroundColor: '#003b5a',
                animation: 'pulse-ring 1.5s cubic-bezier(0.215, 0.61, 0.355, 1) infinite',
              }}></div>
              <div className="relative w-4 h-4 bg-primary border-2 border-white rounded-full shadow-md"></div>
            </div>
          </div>
        </div>

        {/* Map Controls */}
        <div className="absolute right-md bottom-[100px] z-40 flex flex-col gap-sm">
          <button className="w-12 h-12 bg-surface text-primary rounded-xl shadow-md border border-outline-variant flex items-center justify-center hover:bg-surface-container-low transition-all active:scale-95">
            <span className="material-symbols-outlined">add</span>
          </button>
          <button className="w-12 h-12 bg-surface text-primary rounded-xl shadow-md border border-outline-variant flex items-center justify-center hover:bg-surface-container-low transition-all active:scale-95">
            <span className="material-symbols-outlined">remove</span>
          </button>
          <button className="w-12 h-12 bg-primary text-on-primary rounded-xl shadow-lg flex items-center justify-center hover:brightness-110 transition-all active:scale-95 mt-md">
            <span className="material-symbols-outlined">my_location</span>
          </button>
        </div>

        {/* POI Legend */}
        <div className="absolute left-md bottom-[100px] z-40">
          <div className="glass-panel p-md rounded-2xl shadow-xl border border-outline-variant max-w-[180px]">
            <h4 className="font-label-md text-primary mb-sm flex items-center gap-xs">
              <span className="material-symbols-outlined text-[18px]">legend_toggle</span>
              Legenda POI
            </h4>
            <div className="space-y-xs">
              {[
                { icon: 'atm', label: 'ATM & Bank' },
                { icon: 'restaurant', label: 'Makan & Minum' },
                { icon: 'hotel', label: 'Hotel & Penginapan' },
                { icon: 'local_gas_station', label: 'SPBU' },
                { icon: 'local_parking', label: 'Area Parkir' },
                { icon: 'wc', label: 'Toilet Publik' },
                { icon: 'wifi_tethering', label: 'Zona Wi-Fi' },
              ].map((poi, i) => (
                <div key={i} className="flex items-center gap-sm">
                  <span className="material-symbols-outlined text-primary text-[18px]">{poi.icon}</span>
                  <span className="text-[12px] font-body-sm text-on-surface-variant">{poi.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <BottomNav />
    </div>
  );
}
