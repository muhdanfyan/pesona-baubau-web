import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Homepage from './pages/Homepage';
import KatalogDestinasi from './pages/KatalogDestinasi';
import DetailDestinasi from './pages/DetailDestinasi';
import Marketplace from './pages/Marketplace';
import DetailProduk from './pages/DetailProduk';
import Peta from './pages/Peta';
import KalenderEvent from './pages/KalenderEvent';
import TripPlanner from './pages/TripPlanner';
import VirtualTour from './pages/VirtualTour';
import Profil from './pages/Profil';

function AppContent() {
  const location = useLocation();

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/destinasi" element={<KatalogDestinasi />} />
      <Route path="/destinasi/:id" element={<DetailDestinasi />} />
      <Route path="/umkm" element={<Marketplace />} />
      <Route path="/umkm/:id" element={<DetailProduk />} />
      <Route path="/peta" element={<Peta />} />
      <Route path="/event" element={<KalenderEvent />} />
      <Route path="/trip-planner" element={<TripPlanner />} />
      <Route path="/virtual-tour" element={<VirtualTour />} />
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
