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
    <header className="bg-white/90 backdrop-blur-md sticky top-0 z-[60] shadow-sm flex justify-between items-center w-full px-4 md:px-6 py-3 border-b border-gray-100">
      <div className="flex items-center gap-2 md:gap-3 flex-1 min-w-0">
        {showBack ? (
          <button onClick={handleBack} className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center hover:bg-gray-100 active:scale-95 transition-all shrink-0">
            <span className="material-symbols-outlined text-gray-700 text-[20px] md:text-[24px]">arrow_back</span>
          </button>
        ) : (
          <img src="/logo.png" alt="Logo" className="w-7 h-7 md:w-8 md:h-8 rounded-full shrink-0 shadow-sm" />
        )}
        <h1 className="text-[16px] md:text-xl font-bold text-gray-900 truncate pr-2">
          {title || 'Pesona Baubau'}
        </h1>
      </div>
      
      <div className="flex items-center gap-2 md:gap-4 shrink-0">
        {rightAction !== undefined ? rightAction : (
          <div className="flex items-center gap-2 md:gap-3">
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-1 cursor-pointer bg-gray-50 px-2 py-1 md:px-3 md:py-1.5 rounded-full border border-gray-200 hover:bg-gray-100 transition-all shadow-sm active:scale-95 text-[10px] md:text-xs font-bold"
            >
              <span className={language === 'en' ? 'text-blue-700 font-black' : 'text-gray-400'}>EN</span>
              <span className="text-gray-300">|</span>
              <span className={language === 'id' ? 'text-blue-700 font-black' : 'text-gray-400'}>ID</span>
            </button>
            <div className="hidden md:flex items-center gap-1 cursor-pointer bg-gray-50 px-3 py-1.5 rounded-full border border-gray-200 hover:bg-gray-100 transition-colors shadow-sm active:scale-95">
              <span className="text-[13px] font-semibold text-gray-700">IDR 🇮🇩</span>
              <span className="material-symbols-outlined text-gray-500 text-[18px]">expand_more</span>
            </div>
            <div 
              onClick={() => navigate('/profil')}
              className="active:scale-95 transition-transform duration-200 cursor-pointer shrink-0"
            >
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center overflow-hidden hover:shadow-md transition-shadow">
                <span className="material-symbols-outlined text-blue-600 text-[18px] md:text-[22px]" data-icon="person">person</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
