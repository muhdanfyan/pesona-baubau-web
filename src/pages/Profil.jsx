import Header from '../components/Header';
import BottomNav from '../components/BottomNav';

export default function Profil() {
  return (
    <div className="min-h-screen pb-24 bg-surface">
      <Header title="Profil Saya" showBack={true} rightAction={<div />} />
      <main className="max-w-3xl mx-auto px-4 md:px-lg mt-md space-y-xl">
        <section className="bg-surface-container-lowest p-xl rounded-2xl shadow-sm border border-outline-variant/30 text-center">
          <div className="w-24 h-24 bg-primary-container text-on-primary-container rounded-full flex items-center justify-center mx-auto mb-4 text-4xl font-bold">
            W
          </div>
          <h2 className="font-headline-md text-headline-md text-on-surface">Wisatawan</h2>
          <p className="text-on-surface-variant font-body-md mt-1">wisatawan@pesonabaubau.id</p>
          
          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="bg-surface-container-low p-4 rounded-xl">
              <p className="text-on-surface-variant font-label-sm uppercase tracking-wider mb-1">Total Trip</p>
              <p className="font-headline-sm text-primary">0</p>
            </div>
            <div className="bg-surface-container-low p-4 rounded-xl">
              <p className="text-on-surface-variant font-label-sm uppercase tracking-wider mb-1">Destinasi Disimpan</p>
              <p className="font-headline-sm text-primary">0</p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h3 className="font-headline-sm text-on-surface">Pengaturan</h3>
          <div className="bg-surface-container-lowest rounded-2xl shadow-sm border border-outline-variant/30 overflow-hidden">
            <div className="p-4 border-b border-outline-variant/30 flex justify-between items-center cursor-pointer hover:bg-surface-container-low transition-colors">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-on-surface-variant">person</span>
                <span className="font-body-md text-on-surface">Edit Profil</span>
              </div>
              <span className="material-symbols-outlined text-on-surface-variant">chevron_right</span>
            </div>
            <div className="p-4 border-b border-outline-variant/30 flex justify-between items-center cursor-pointer hover:bg-surface-container-low transition-colors">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-on-surface-variant">bookmark</span>
                <span className="font-body-md text-on-surface">Rencana Perjalanan Saya</span>
              </div>
              <span className="material-symbols-outlined text-on-surface-variant">chevron_right</span>
            </div>
            <div className="p-4 flex justify-between items-center cursor-pointer hover:bg-surface-container-low transition-colors text-error">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined">logout</span>
                <span className="font-body-md">Keluar</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <BottomNav />
    </div>
  );
}
