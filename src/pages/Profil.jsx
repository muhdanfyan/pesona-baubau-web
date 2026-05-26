import Header from '../components/Header';
import BottomNav from '../components/BottomNav';
import { useLanguage } from '../contexts/LanguageContext';

export default function Profil() {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <div className="min-h-screen pb-24 bg-surface">
      <Header title={t('profile.title')} showBack={true} rightAction={<div />} />
      <main className="max-w-3xl mx-auto px-4 md:px-lg mt-md space-y-xl">
        <section className="bg-surface-container-lowest p-xl rounded-2xl shadow-sm border border-outline-variant/30 text-center">
          <div className="w-24 h-24 bg-primary-container text-on-primary-container rounded-full flex items-center justify-center mx-auto mb-4 text-4xl font-bold">
            W
          </div>
          <h2 className="font-headline-md text-headline-md text-on-surface">{t('profile.type')}</h2>
          <p className="text-on-surface-variant font-body-md mt-1">wisatawan@pesonabaubau.id</p>
          
          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="bg-surface-container-low p-4 rounded-xl">
              <p className="text-on-surface-variant font-label-sm uppercase tracking-wider mb-1">{t('profile.totalTrip')}</p>
              <p className="font-headline-sm text-primary">0</p>
            </div>
            <div className="bg-surface-container-low p-4 rounded-xl">
              <p className="text-on-surface-variant font-label-sm uppercase tracking-wider mb-1">{t('profile.savedDestinations')}</p>
              <p className="font-headline-sm text-primary">0</p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h3 className="font-headline-sm text-on-surface">{t('profile.settings')}</h3>
          <div className="bg-surface-container-lowest rounded-2xl shadow-sm border border-outline-variant/30 overflow-hidden">
            <div className="p-4 border-b border-outline-variant/30 flex justify-between items-center cursor-pointer hover:bg-surface-container-low transition-colors">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-on-surface-variant">person</span>
                <span className="font-body-md text-on-surface">{t('profile.editProfile')}</span>
              </div>
              <span className="material-symbols-outlined text-on-surface-variant">chevron_right</span>
            </div>
            <div className="p-4 border-b border-outline-variant/30 flex justify-between items-center cursor-pointer hover:bg-surface-container-low transition-colors">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-on-surface-variant">bookmark</span>
                <span className="font-body-md text-on-surface">{t('profile.myItinerary')}</span>
              </div>
              <span className="material-symbols-outlined text-on-surface-variant">chevron_right</span>
            </div>
            <div 
              onClick={toggleLanguage}
              className="p-4 border-b border-outline-variant/30 flex justify-between items-center cursor-pointer hover:bg-surface-container-low transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-on-surface-variant">language</span>
                <span className="font-body-md text-on-surface">{t('profile.language')}</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-sm text-primary font-bold">{language === 'en' ? 'English 🇬🇧' : 'Indonesia 🇮🇩'}</span>
                <span className="material-symbols-outlined text-on-surface-variant">chevron_right</span>
              </div>
            </div>
            <div className="p-4 flex justify-between items-center cursor-pointer hover:bg-surface-container-low transition-colors text-error">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined">logout</span>
                <span className="font-body-md">{t('profile.logout')}</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <BottomNav />
    </div>
  );
}
