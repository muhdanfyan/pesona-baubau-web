import { useLocation, useNavigate } from 'react-router-dom';

const navItems = [
  { icon: 'home', label: 'Beranda', path: '/' },
  { icon: 'map', label: 'Peta', path: '/peta' },
  { icon: 'event', label: 'Event', path: '/event' },
  { icon: 'person', label: 'Profil', path: '/profil' },
];

export default function BottomNav() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 bg-surface flex justify-around items-center px-4 pb-safe pt-2 shadow-[0_-2px_8px_rgba(0,0,0,0.06)]">
      {navItems.map((item) => {
        const isActive = location.pathname === item.path || 
          (item.path !== '/' && location.pathname.startsWith(item.path));
        return (
          <button
            key={item.path}
            onClick={() => navigate(item.path)}
            className={`flex flex-col items-center justify-center px-4 py-1 active:scale-90 transition-transform duration-150 ${
              isActive
                ? 'bg-secondary-container text-on-secondary-container rounded-xl'
                : 'text-on-surface-variant hover:bg-surface-container-highest'
            }`}
          >
            <span
              className="material-symbols-outlined"
              data-icon={item.icon}
              style={isActive ? { fontVariationSettings: "'FILL' 1" } : {}}
            >
              {item.icon}
            </span>
            <span className="font-label-sm text-label-sm">{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
