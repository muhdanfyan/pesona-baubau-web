import { useState } from 'react';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';

const monthNames = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
const dayNames = ['MIN', 'SEN', 'SEL', 'RAB', 'KAM', 'JUM', 'SAB'];

const todayEvents = [
  {
    type: 'Festival',
    color: 'bg-secondary',
    title: 'Pesta Adat Tutohia',
    location: 'Benteng Keraton Buton',
    time: '08:00 - 22:00 WITA',
  },
  {
    type: 'Workshop',
    color: 'bg-primary-container',
    title: 'Pelatihan Tenun Kasbi',
    location: 'Gedung Pancasila',
    time: '13:00 - 16:00 WITA',
  },
];

const featuredEvents = [
  {
    category: 'Lomba',
    title: 'Lomba Dayung Perahu Tradisional',
    date: 'Pantai Kamali • 25 Januari',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAe5RWVeoV7rD9-lClLIgu0mDvNBI4zqZ9LYjTtScJC-j3LDWi14_HZk3aQgiOnb5w_hz2AUFViQYnLpfGAPxWCTJTb8CvGuLXLWwBrhLILI0yGPE_O_TD1VnQr_ziv-93in1hIxwVsZouDq8VDLI8mp3zSfJkrZSoMLrjztoRArycXRljUdeBJd3eKQrbuVYwBoNQir7_AbO2yRfRuM15lhlUl33pn8KsdKLCwBJ6tIMYMPB80kIP1nQwKUJogz2jikKY9aUnw3Ko',
    bgColor: 'bg-secondary',
  },
  {
    category: 'Festival',
    title: 'Malam Pesona Dendang Buton',
    date: 'Alun-Alun Kotamara • 28 Januari',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAPcMw0j7DuFMPv-Z4OZjJGLdh6E6oiIF4zCu1cEeaWgA8JI-h9OCoB4zNl2ydhma1zY2WpohEZMFMtMP09zxQwOB1EjpMlI0I0FT1qYMjxjYa2_11NgW-IxmCXxUHkYu0CP0dEmng5P__ZgiytZbT_jJgAzN6f8_b2xDiQwNu2KXyBgQUQx24uvubXW02bS3j4O750OVofditWijHUz_2Bi5lBYFdWEQKkShybGp5jbFF6JTWfrP94r5Y3iSPJYGZ3Nmhp8eTmTAc',
    bgColor: 'bg-primary-container',
  },
  {
    category: 'Workshop',
    title: 'Pameran Seni Kriya Modern',
    date: 'Museum Kebudayaan • 30 Januari',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCUkky3IUVJqDSTy3PYdCQgUDxrnPPJXuXwmNR0MjZpJZBoSJoZhheXxndugf11LIGK-LO3g8hFoO_peH5uqOl7X5CLYf34j4MFkWgWC10Z3Pw_SIWMlso5DsmXkct7a3gAiBKIOxBgqhaL1USqLTN0kvzUwhBrLmIoCPWPmfaY654FLEtFgi2BzMawJa3EgOg6BTc0sX2dFivz9dDAuPLPuUDMwUDYrE5Ew5xctaHpQHFa6L-9Rn42i3EX5mfqHJVJuyCjiAkr1d4',
    bgColor: 'bg-surface-container-highest',
  },
];

const calendarDays = [
  ...Array(5).fill(null).map((_, i) => ({ day: 27 + i, muted: true })),
  { day: 1, hasEvent: true },
  { day: 2 },
  { day: 3 },
  { day: 4 },
  { day: 5, selected: true, hasEvent: true },
  { day: 6 },
  { day: 7 },
  { day: 8 },
  { day: 9 },
  { day: 10 },
  { day: 11 },
  { day: 12 },
  { day: 13, hasEvent: true },
  { day: 14 },
  { day: 15 },
  { day: 16 },
  { day: 17 },
  { day: 18 },
  { day: 19, isToday: true },
  { day: 20 },
  { day: 21, hasEvent: true },
  { day: 22 },
  { day: 23 },
];

export default function KalenderEvent() {
  const [currentMonth, setCurrentMonth] = useState(0);
  const [selectedDay, setSelectedDay] = useState(null);

  return (
    <div className="min-h-screen pb-32 bg-background">
      <Header
        title="Pesona Baubau"
        rightAction={
          <div className="w-10 h-10 rounded-full bg-surface-container overflow-hidden border border-outline-variant">
            <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXwRT_vck8ZV4rijMS5C3FJMOq7VbVqSHBMmTm_RXgogs4Lz_OEMYBe1iaGkDItKTb00wKfrlGp_564FaxibDyQvXLnJ1vJJt-t0_nVWCZEWDKZaQ9DMtpiq0qvZySND-DlG6figrPZkX8hGU7tpdWPH0IQxeGnumbK-GzEIbZi9fdiEAO7eDo9NaJM84YA7_c7emeJkpeVI2zgxRp9T3gTpXd33T4S39mBrxnrHWTAusb1AAFfoHISL4hkFePBTru1nDzI5LTl40" alt="Profile" />
          </div>
        }
      />
      <main className="max-w-[1280px] mx-auto px-md md:px-lg mt-md">
        <section className="mb-lg">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-xs">Kalender Event</h2>
          <p className="font-body-md text-on-surface-variant">Jelajahi kekayaan budaya Buton melalui rangkaian acara tahunan.</p>
        </section>

        {/* Calendar Nav */}
        <div className="flex flex-col md:flex-row gap-md items-center justify-between mb-lg bg-surface-container-low p-md rounded-xl shadow-sm">
          <div className="flex items-center gap-lg">
            <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container-highest transition-colors active:scale-90">
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <div className="text-center">
              <span className="font-headline-sm text-headline-sm text-primary">Januari 2027</span>
            </div>
            <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container-highest transition-colors active:scale-90">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
          <button className="flex items-center gap-sm bg-error text-on-error px-lg py-sm rounded-full shadow-md active:scale-95 transition-transform">
            <span className="material-symbols-outlined">live_tv</span>
            <span className="font-label-md text-label-md uppercase tracking-wider">🎥 Live Streaming</span>
          </button>
        </div>

        {/* Main Bento Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-lg">
          {/* Calendar Grid */}
          <div className="lg:col-span-8 bg-surface-container-lowest rounded-2xl p-md md:p-lg shadow-sm border border-outline-variant/30">
            <div className="grid grid-cols-7 mb-sm border-b border-outline-variant pb-sm">
              {dayNames.map(d => (
                <div key={d} className="text-center font-label-sm text-on-surface-variant">{d}</div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-xs">
              {calendarDays.map((d, i) => (
                <div
                  key={i}
                  onClick={() => setSelectedDay(d.day)}
                  className={`aspect-square flex items-center justify-center font-body-md relative cursor-pointer transition-all duration-200 ${
                    d.muted ? 'text-outline' : ''
                  } ${
                    d.isToday ? 'bg-primary text-on-primary rounded-lg shadow-md ring-2 ring-primary/20' : ''
                  } ${
                    d.selected && !d.isToday ? 'bg-secondary-container rounded-lg border border-secondary/20' : ''
                  } ${
                    selectedDay === d.day && !d.isToday && !d.selected ? 'bg-primary-container/10 rounded-lg' : ''
                  }`}
                >
                  {d.day}
                  {d.hasEvent && !d.isToday && (
                    <span className="absolute bottom-1 w-1.5 h-1.5 rounded-full bg-error"></span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Event List */}
          <div className="lg:col-span-4 space-y-md">
            <div className="flex items-center justify-between">
              <h3 className="font-headline-sm text-headline-sm text-primary">Hari Ini</h3>
              <span className="font-label-sm text-label-sm text-on-surface-variant bg-surface-container-high px-md py-1 rounded-full">19 Jan 2027</span>
            </div>
            <div className="space-y-md">
              {todayEvents.map((ev, i) => (
                <div key={i} className="glass-card p-md rounded-xl shadow-sm hover:shadow-md transition-all group">
                  <div className="flex items-start gap-md">
                    <div className={`w-1.5 h-12 rounded-full ${ev.color}`}></div>
                    <div className="flex-1">
                      <div className="flex items-center gap-sm mb-xs">
                        <span className={`w-2 h-2 rounded-full ${ev.color}`}></span>
                        <span className="font-label-sm text-label-sm uppercase" style={{ color: ev.color.includes('bg-secondary') ? '#745a27' : '#1a5276' }}>{ev.type}</span>
                      </div>
                      <h4 className="font-headline-sm text-headline-sm mb-sm text-on-surface">{ev.title}</h4>
                      <div className="space-y-xs mb-md">
                        <div className="flex items-center gap-sm text-on-surface-variant">
                          <span className="material-symbols-outlined text-[18px]">location_on</span>
                          <span className="font-body-sm text-body-sm">{ev.location}</span>
                        </div>
                        <div className="flex items-center gap-sm text-on-surface-variant">
                          <span className="material-symbols-outlined text-[18px]">schedule</span>
                          <span className="font-body-sm text-body-sm">{ev.time}</span>
                        </div>
                      </div>
                      <div className="flex gap-sm">
                        <button className="flex-1 py-2 rounded-lg bg-primary text-on-primary font-label-md text-label-md active:scale-95 transition-transform">Detail</button>
                        <button className="px-3 py-2 rounded-lg border border-primary text-primary hover:bg-primary/5 active:scale-95 transition-transform flex items-center justify-center">
                          <span className="material-symbols-outlined">calendar_add_on</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Featured */}
        <section className="mt-3xl mb-lg">
          <h3 className="font-headline-md text-headline-md text-primary mb-lg">Sorotan Mendatang</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
            {featuredEvents.map((ev, i) => (
              <div key={i} className="group relative overflow-hidden rounded-2xl aspect-[4/5] shadow-lg">
                <img className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src={ev.image} alt={ev.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-lg text-white">
                  <span className={`inline-block ${ev.bgColor} text-on-secondary px-md py-1 rounded-full font-label-sm text-label-sm mb-md uppercase`}>{ev.category}</span>
                  <h5 className="font-headline-sm text-headline-sm mb-xs">{ev.title}</h5>
                  <p className="font-body-sm text-white/80">{ev.date}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <BottomNav />
    </div>
  );
}
