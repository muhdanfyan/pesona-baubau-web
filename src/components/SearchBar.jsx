import { useNavigate } from 'react-router-dom';

export default function SearchBar({ placeholder, value, onChange }) {
  const navigate = useNavigate();

  return (
    <div className="relative group">
      <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">search</span>
      <input
        className="w-full pl-12 pr-4 py-3 bg-surface-container-lowest border border-outline-variant rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-sm font-body-md"
        placeholder={placeholder || "Cari destinasi, kuliner, event..."}
        type="text"
        {...(value !== undefined ? { value, onChange } : {})}
      />
    </div>
  );
}
