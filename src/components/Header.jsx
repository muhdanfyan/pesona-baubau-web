import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

export default function Header({ title, showBack = false, onBack, rightAction }) {
  const navigate = useNavigate();
  const { language, toggleLanguage } = useLanguage();

  const handleBack = () => {
    if (onBack) onBack();
    else navigate(-1);
  };

  return (
    <header className="bg-surface sticky top-0 z-[60] shadow-sm flex justify-between items-center w-full px-md py-sm">
      <div className="flex items-center gap-md">
        {showBack ? (
          <button onClick={handleBack} className="active:scale-95 transition-transform p-1">
            <span className="material-symbols-outlined text-primary">arrow_back</span>
          </button>
        ) : (
          <span className="material-symbols-outlined text-primary" data-icon="anchor">anchor</span>
        )}
        <h1 className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-primary">
          {title || 'Pesona Baubau'}
        </h1>
      </div>
      <div className="flex items-center gap-md">
        {rightAction !== undefined ? rightAction : (
          <div className="flex items-center gap-3">
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-1 cursor-pointer bg-surface-container-lowest px-3 py-1.5 rounded-full border border-outline-variant hover:bg-surface-container-low transition-all shadow-sm active:scale-95 text-xs font-bold"
            >
              <span className={language === 'en' ? 'text-primary font-black' : 'text-on-surface-variant/60'}>EN</span>
              <span className="text-outline-variant">|</span>
              <span className={language === 'id' ? 'text-primary font-black' : 'text-on-surface-variant/60'}>ID</span>
            </button>
            <div className="hidden md:flex items-center gap-1 cursor-pointer bg-surface-container-lowest px-3 py-1.5 rounded-full border border-outline-variant hover:bg-surface-container-low transition-colors shadow-sm active:scale-95">
              <span className="font-label-sm text-on-surface">IDR 🇮🇩</span>
              <span className="material-symbols-outlined text-on-surface-variant text-sm">expand_more</span>
            </div>
            <div 
              onClick={() => navigate('/profil')}
              className="active:scale-95 transition-transform duration-200 cursor-pointer"
            >
              <div className="w-10 h-10 rounded-full bg-surface-container-high border border-outline-variant flex items-center justify-center overflow-hidden">
                <span className="material-symbols-outlined text-on-surface-variant" data-icon="person">person</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
