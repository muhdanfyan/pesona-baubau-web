import { useNavigate } from 'react-router-dom';

export default function CardDestinasi({ id, image, title, category, rating, description }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/destinasi/${id}`)}
      className="flex flex-col group active:scale-95 transition-transform duration-200 cursor-pointer"
    >
      <div className="relative aspect-[16/9] rounded-xl overflow-hidden shadow-sm">
        <img
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          src={image}
          alt={title}
        />
        <span className="absolute top-2 left-2 px-2 py-0.5 bg-secondary-container/90 text-on-secondary-container font-label-sm rounded-full backdrop-blur-md">
          {category}
        </span>
        <div className="absolute bottom-2 right-2 bg-white/90 px-2 py-1 rounded-lg flex items-center gap-1 shadow-sm">
          <span className="material-symbols-outlined text-orange-400 text-sm active-icon" data-icon="star" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
          <span className="text-on-surface font-label-sm">{rating}</span>
        </div>
      </div>
      <div className="mt-sm space-y-1">
        <div className="flex justify-between items-start gap-1">
          <h4 className="font-headline-sm text-label-md leading-tight text-on-surface line-clamp-1 font-bold">{title}</h4>
        </div>
        <p className="font-body-sm text-on-surface-variant line-clamp-2">{description}</p>
      </div>
    </div>
  );
}
