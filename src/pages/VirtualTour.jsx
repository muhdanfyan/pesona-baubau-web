import { useState } from 'react';

export default function VirtualTour() {
  const [activeSpot, setActiveSpot] = useState('Kasulana Tombi');

  const spots = [
    { id: 'Kasulana Tombi', icon: 'flag', label: 'Kasulana Tombi' },
    { id: 'Masjid Agung', icon: 'temple_hindu', label: 'Masjid Agung' },
    { id: 'Batu Popaua', icon: 'landslide', label: 'Batu Popaua' },
  ];

  return (
    <div className="min-h-screen bg-[#1A1A1A] text-white overflow-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-md py-sm glass-ui shadow-sm">
        <div className="flex items-center gap-sm">
          <span className="material-symbols-outlined text-primary-fixed-dim">anchor</span>
          <h1 className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-primary-fixed-dim">Virtual Tour — Benteng Keraton Buton</h1>
        </div>
        <div className="flex items-center gap-md">
          <div className="relative group">
            <button className="flex items-center gap-xs px-md py-2 rounded-lg bg-surface-container-highest/10 hover:bg-surface-container-highest/20 transition-all border border-white/10">
              <span className="material-symbols-outlined text-sm">language</span>
              <span className="font-label-md text-label-md">Audio: Indonesia</span>
              <span className="material-symbols-outlined text-sm">arrow_drop_down</span>
            </button>
            <div className="absolute right-0 mt-2 w-48 glass-ui rounded-xl overflow-hidden hidden group-hover:block z-[60]">
              <a className="block px-md py-3 hover:bg-primary/40 transition-colors font-label-md text-label-md" href="#">Indonesia</a>
              <a className="block px-md py-3 hover:bg-primary/40 transition-colors font-label-md text-label-md" href="#">English</a>
              <a className="block px-md py-3 hover:bg-primary/40 transition-colors font-label-md text-label-md" href="#">Buton</a>
            </div>
          </div>
          <button className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all active:scale-90">
            <span className="material-symbols-outlined">fullscreen</span>
          </button>
        </div>
      </header>

      {/* Viewer */}
      <main className="h-screen w-full flex items-center justify-center pt-16 relative" style={{ maxHeight: '100vh' }}>
        {/* 360 Background */}
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover opacity-60 scale-110"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDevlm7i3Gwnps1KdXGoaLir0CR_uM49AEq4A7tnZQhfSh_kCLnBt5CbOVqLLwdTXR4mxf0bwMuKBOHF5lB-RhyvgxB9h05khoLFM_3QS6iRt1BhJ9smZrvK4rbLPj08gE-9hw1gmh1_TbUkVKi92DMUIMEifvHiESN601WUii2rnwYVtEoZczAgb9wnb3u4WTWNl-MYniHEldROM5vXrFuGfaONKjnmMVMoW27rUqeh84V-Nv32pQn3oGoUMgNv_GXWpxu-2KsgRM"
            alt="360 View"
          />
        </div>

        {/* Center 360 Indicator */}
        <div className="relative z-10 flex flex-col items-center gap-md group cursor-pointer">
          <div className="w-32 h-32 rounded-full border-2 border-dashed border-primary-fixed-dim flex items-center justify-center rotate-slow group-hover:border-solid transition-all"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="font-display-lg-mobile text-display-lg-mobile font-extrabold text-white tracking-widest">360°</span>
            <span className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-primary-fixed-dim">View</span>
          </div>
          <p className="font-body-sm text-body-sm text-white/60 mt-4 opacity-0 group-hover:opacity-100 transition-opacity">Seret untuk menjelajah</p>
        </div>

        {/* Hotspots */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[30%] left-[20%] pointer-events-auto flex flex-col items-center gap-2 group">
            <div className="w-10 h-10 rounded-full glass-ui flex items-center justify-center text-primary-fixed-dim group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
            </div>
            <span className="bg-black/40 px-3 py-1 rounded-full font-label-sm text-label-sm backdrop-blur-sm border border-white/10">Kasulana Tombi</span>
          </div>
          <div className="absolute bottom-[40%] right-[25%] pointer-events-auto flex flex-col items-center gap-2 group">
            <div className="w-10 h-10 rounded-full glass-ui flex items-center justify-center text-primary-fixed-dim group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>mosque</span>
            </div>
            <span className="bg-black/40 px-3 py-1 rounded-full font-label-sm text-label-sm backdrop-blur-sm border border-white/10">Masjid Agung</span>
          </div>
        </div>

        {/* Navigation Spots */}
        <nav className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-sm glass-ui p-2 rounded-2xl shadow-xl">
          {spots.map((spot) => (
            <button
              key={spot.id}
              onClick={() => setActiveSpot(spot.id)}
              className={`px-md py-3 rounded-xl transition-all font-label-md text-label-md flex items-center gap-2 ${
                activeSpot === spot.id
                  ? 'bg-[#1A5276] text-white border-[#1A5276]'
                  : 'bg-white/10 text-[#c8c6c3] border border-white/20 hover:bg-white/20'
              }`}
            >
              <span className="material-symbols-outlined text-sm">{spot.icon}</span>
              {spot.label}
            </button>
          ))}
        </nav>

        {/* Compass & Controls */}
        <div className="absolute right-md bottom-[120px] flex flex-col gap-sm">
          <div className="glass-ui p-3 rounded-full flex items-center justify-center text-white/70 hover:text-white transition-colors cursor-pointer">
            <span className="material-symbols-outlined">explore</span>
          </div>
          <div className="glass-ui p-3 rounded-2xl flex flex-col gap-md">
            <button className="text-white/70 hover:text-white"><span className="material-symbols-outlined">add</span></button>
            <div className="h-px bg-white/10"></div>
            <button className="text-white/70 hover:text-white"><span className="material-symbols-outlined">remove</span></button>
          </div>
        </div>

        {/* Info Sidebar */}
        <aside className="absolute left-md top-md bottom-md w-72 glass-ui rounded-3xl p-lg hidden lg:flex flex-col gap-md overflow-y-auto mt-16 mb-16">
          <div className="space-y-sm">
            <span className="font-label-sm text-label-sm text-primary-fixed-dim uppercase tracking-widest">Sekarang di</span>
            <h2 className="font-headline-md text-headline-md leading-tight">Tiang Bendera Kasulana Tombi</h2>
          </div>
          <div className="w-full aspect-video rounded-xl overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC19ynLG6yfpUucJNozE811TQyWlUZO1c0yKMl3LYVCUMYaihYpDQAjqJOHWiW9pSIonlTPXxbat_WD5BGpE5bgg-OIqc4KjNmE4UQ3kDnFv--zMNOGeld8dwubbwDniqkZtMTl3U0ThAwQ8DpGC00q0rMqECtiegbXbAjNVuK_VJalRWIEYq6K0Gf5LXupgAjMea1Q5bNweG4WKRWpgJGHmuyRqte0TXHp2fjXYF82re0FDy8isiWuxR7kxpIndscSse4AiBEl910"
              alt="Kasulana Tombi Detail"
            />
          </div>
          <p className="font-body-sm text-body-sm text-white/70 leading-relaxed">
            Tiang bendera bersejarah ini merupakan salah satu ikon utama di Benteng Keraton Buton, melambangkan kedaulatan Kesultanan Buton di masa lampau. Berdiri kokoh di atas bukit dengan pemandangan langsung ke Teluk Baubau.
          </p>
          <div className="mt-auto space-y-sm">
            <button className="w-full py-3 rounded-xl bg-primary-fixed-dim text-on-primary-fixed font-label-md text-label-md flex items-center justify-center gap-2 hover:brightness-110 transition-all">
              <span className="material-symbols-outlined text-sm">info</span>
              Detail Sejarah
            </button>
            <button className="w-full py-3 rounded-xl border border-white/20 hover:bg-white/5 text-white font-label-md text-label-md transition-all">
              Ambil Foto (Snapshot)
            </button>
          </div>
        </aside>
      </main>
    </div>
  );
}
