import { useState, useEffect } from 'react';

export default function Testimonial() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fallback data according to system rules if API fails or is empty
  const fallbackData = [
    {
      "id": 1,
      "customer_name": "Budi Santoso",
      "testimonial_text": "Sangat direkomendasikan! Pengalaman wisata di Baubau jauh lebih tertata dan mudah. Pantainya luar biasa indah.",
      "is_approved": 1,
      "submitted_at": "2025-08-25 12:21:53"
    },
    {
      "id": 2,
      "customer_name": "Ani Lestari",
      "testimonial_text": "Terima kasih, akhirnya saya bisa menyusun rencana perjalanan keluarga dengan sangat mudah. Fiturnya sangat membantu.",
      "is_approved": 1,
      "submitted_at": "2025-08-25 12:21:53"
    },
    {
      "id": 3,
      "customer_name": "John Doe",
      "testimonial_text": "The culture is amazing and the app makes it very easy to discover local MSMEs. Will definitely come back!",
      "is_approved": 1,
      "submitted_at": "2025-08-28 10:15:00"
    }
  ];

  useEffect(() => {
    fetch('https://adminwiyasa.site/api/testimonials.php')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data) && data.length > 0) {
          setTestimonials(data.filter(t => t.is_approved == 1));
        } else {
          setTestimonials(fallbackData);
        }
      })
      .catch(err => {
        console.error("Error fetching testimonials:", err);
        setTestimonials(fallbackData);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <section className="space-y-md animate-pulse">
        <div className="h-8 bg-surface-container-highest rounded w-48 mx-auto mb-2"></div>
        <div className="h-4 bg-surface-container-highest rounded w-64 mx-auto mb-8"></div>
        <div className="flex gap-4 overflow-hidden">
          <div className="w-[300px] h-[200px] bg-surface-container-highest rounded-xl shrink-0"></div>
          <div className="w-[300px] h-[200px] bg-surface-container-highest rounded-xl shrink-0"></div>
          <div className="w-[300px] h-[200px] bg-surface-container-highest rounded-xl shrink-0"></div>
        </div>
      </section>
    );
  }

  return (
    <section className="space-y-md py-lg">
      <div className="flex flex-col items-center text-center space-y-2 mb-lg">
        <h3 className="font-headline-md text-headline-md text-primary">Apa Kata Traveler</h3>
        <p className="text-on-surface-variant font-body-sm max-w-lg">Pengalaman nyata dari mereka yang telah menjelajahi keindahan Baubau bersama kami.</p>
      </div>
      <div className="flex gap-lg overflow-x-auto pb-6 -mx-4 px-4 md:mx-0 md:px-0 hide-scrollbar snap-x snap-mandatory">
        {testimonials.map((t) => (
          <div key={t.id} className="snap-center shrink-0 w-[300px] md:w-[350px] bg-surface-container-lowest p-lg rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-lg transition-shadow border border-outline-variant/30 flex flex-col justify-between min-h-[220px]">
            <div>
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-orange-400 text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                ))}
              </div>
              <p className="text-on-surface font-body-md line-clamp-4">"{t.testimonial_text}"</p>
            </div>
            <div className="flex items-center gap-3 mt-6 pt-4 border-t border-outline-variant/20">
              <div className="w-10 h-10 bg-primary-container text-on-primary-container rounded-full flex items-center justify-center font-bold">
                {t.customer_name.charAt(0).toUpperCase()}
              </div>
              <div>
                <p className="font-label-md text-on-surface">{t.customer_name}</p>
                <p className="font-body-sm text-on-surface-variant text-xs">
                  {new Date(t.submitted_at).toLocaleDateString('id-ID', { year: 'numeric', month: 'short', day: 'numeric' })}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
