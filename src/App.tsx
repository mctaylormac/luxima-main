import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import About from './pages/About';
import Team from './pages/Team';
import ContactBooking from './pages/ContactBooking';
import Contact from './pages/Contact';
import ServiceDetail from './pages/ServiceDetail';
import LuxEventBox from './pages/LuxEventBox';
import LuxMiniMascottes from './pages/LuxMiniMascottes';
import Booking from './pages/Booking';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Team />} />
          <Route path="/contact-booking" element={<ContactBooking />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service-detail" element={<ServiceDetail />} />
          <Route path="/lux-event-box" element={<LuxEventBox />} />
          <Route path="/lux-mini-mascottes" element={<LuxMiniMascottes />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
