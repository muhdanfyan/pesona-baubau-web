import { useNavigate } from 'react-router-dom';

export default function CardProduk({ id, image, name, price, seller, badge }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/umkm/${id}`)}
      className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.06)] group cursor-pointer active:scale-[0.98] transition-transform"
    >
      <div className="aspect-square relative overflow-hidden">
        <img
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          src={image}
          alt={name}
        />
        {badge && (
          <span className="absolute top-sm right-sm bg-secondary-container text-on-secondary-container px-sm py-xs rounded-lg text-[10px] font-bold uppercase tracking-wider">
            {badge}
          </span>
        )}
      </div>
      <div className="p-md">
        <h3 className="font-label-md text-on-surface line-clamp-1">{name}</h3>
        <p className="font-headline-sm text-primary mt-xs">{price}</p>
        {seller && (
          <div className="flex items-center gap-xs mt-sm text-on-surface-variant">
            <span className="material-symbols-outlined text-[16px]" data-icon="person">person</span>
            <span className="text-label-sm">{seller}</span>
          </div>
        )}
      </div>
    </div>
  );
}
