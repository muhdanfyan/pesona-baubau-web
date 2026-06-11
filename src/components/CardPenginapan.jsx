import { useNavigate } from 'react-router-dom';

export default function CardPenginapan({ id, image, name, price, type, location, rating }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/penginapan/${id}`)}
      className="flex flex-col group active:scale-95 transition-transform duration-200 cursor-pointer bg-surface-container-lowest rounded-xl overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.06)]"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          src={image}
          alt={name}
        />
        <span className="absolute top-2 left-2 bg-secondary-container text-on-secondary-container px-2 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider shadow-sm backdrop-blur-md bg-opacity-90">
          {type}
        </span>
        <div className="absolute bottom-2 right-2 bg-white/90 px-2 py-1 rounded-lg flex items-center gap-1 shadow-sm backdrop-blur-md">
          <span className="material-symbols-outlined text-orange-400 text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
          <span className="text-on-surface font-label-sm font-bold">{rating}</span>
        </div>
      </div>
      
      <div className="p-3">
        <h4 className="font-headline-sm text-label-md leading-tight text-on-surface line-clamp-1 font-bold">{name}</h4>
        
        <div className="flex items-center gap-1 mt-1 text-on-surface-variant">
          <span className="material-symbols-outlined text-[14px]">location_on</span>
          <span className="font-body-sm text-[12px] truncate">{location}</span>
        </div>

        <div className="mt-3 flex items-end justify-between">
          <div className="flex gap-2">
            <span className="material-symbols-outlined text-[16px] text-primary bg-primary-container p-1 rounded-md">wifi</span>
            <span className="material-symbols-outlined text-[16px] text-primary bg-primary-container p-1 rounded-md">ac_unit</span>
          </div>
          <div className="text-right">
            <p className="font-body-sm text-[10px] text-on-surface-variant">Mulai dari</p>
            <p className="font-headline-sm text-primary text-sm font-black">{price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
