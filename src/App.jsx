import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Homepage from './pages/Homepage';
import KatalogDestinasi from './pages/KatalogDestinasi';
import DetailDestinasi from './pages/DetailDestinasi';
import Marketplace from './pages/Marketplace';
import DetailProduk from './pages/DetailProduk';
import KalenderEvent from './pages/KalenderEvent';
import TripPlanner from './pages/TripPlanner';
import Profil from './pages/Profil';

const Peta = lazy(() => import('./pages/Peta'));
const VirtualTour = lazy(() => import('./pages/VirtualTour'));
const KatalogPenginapan = lazy(() => import('./pages/KatalogPenginapan'));
const DetailPenginapan = lazy(() => import('./pages/DetailPenginapan'));

function AppContent() {
  const location = useLocation();

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/destinasi" element={<KatalogDestinasi />} />
      <Route path="/destinasi/:id" element={<DetailDestinasi />} />
      <Route path="/umkm" element={<Marketplace />} />
      <Route path="/umkm/:id" element={<DetailProduk />} />
      <Route path="/penginapan" element={
        <Suspense fallback={<div className="h-screen w-full flex items-center justify-center bg-[#F5F3F0]"><div className="animate-spin w-8 h-8 border-4 border-[#1A5276] border-t-transparent rounded-full"></div></div>}>
          <KatalogPenginapan />
        </Suspense>
      } />
      <Route path="/penginapan/:id" element={
        <Suspense fallback={<div className="h-screen w-full flex items-center justify-center bg-[#F5F3F0]"><div className="animate-spin w-8 h-8 border-4 border-[#1A5276] border-t-transparent rounded-full"></div></div>}>
          <DetailPenginapan />
        </Suspense>
      } />
      <Route path="/peta" element={
        <Suspense fallback={<div className="h-screen w-full flex items-center justify-center bg-[#F5F3F0]"><div className="animate-spin w-8 h-8 border-4 border-[#1A5276] border-t-transparent rounded-full"></div></div>}>
          <Peta />
        </Suspense>
      } />
      <Route path="/event" element={<KalenderEvent />} />
      <Route path="/trip-planner" element={<TripPlanner />} />
      <Route path="/virtual-tour" element={
        <Suspense fallback={<div className="h-screen w-full flex items-center justify-center bg-black"><div className="animate-spin w-8 h-8 border-4 border-[#C9A96E] border-t-transparent rounded-full"></div></div>}>
          <VirtualTour />
        </Suspense>
      } />
      <Route path="/profil" element={<Profil />} />
    </Routes>
  );
}

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
