import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import About from './pages/About';
import Team from './pages/Team';
import ContactBooking from './pages/ContactBooking';
import ServiceDetail from './pages/ServiceDetail';
import LuxEventBox from './pages/LuxEventBox';
import LuxMiniMascottes from './pages/LuxMiniMascottes';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [serviceData, setServiceData] = useState<any>(null);

  const handleNavigate = (page: string, data?: any) => {
    setCurrentPage(page);
    if (data) {
      setServiceData(data);
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={handleNavigate} />;
      case 'about':
      case 'portfolio':
        return <About />;
      case 'team':
        return <Team onNavigate={handleNavigate} />;
      case 'contact-booking':
      case 'booking':
      case 'contact':
        return <ContactBooking />;
      case 'service-detail':
        return <ServiceDetail onNavigate={handleNavigate} service={serviceData} />;
      case 'lux-event-box':
        return <LuxEventBox onNavigate={handleNavigate} />;
      case 'lux-mini-mascottes':
        return <LuxMiniMascottes onNavigate={handleNavigate} />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
      <main>{renderPage()}</main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
