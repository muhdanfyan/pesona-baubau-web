import { useNavigate } from 'react-router-dom';

export default function Header({ title, showBack = false, onBack, rightAction }) {
  const navigate = useNavigate();

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
        {rightAction || (
          <div className="active:scale-95 transition-transform duration-200 cursor-pointer">
            <div className="w-10 h-10 rounded-full bg-surface-container-high border border-outline-variant flex items-center justify-center overflow-hidden">
              <span className="material-symbols-outlined text-on-surface-variant" data-icon="person">person</span>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
