import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Products from './components/Products';
import About from './components/About';
import VFXPortfolio from './components/VFXPortfolio';
import PortfolioLink from './components/PortfolioLink';
import Services from './components/Services';
import Contact from './components/Contact';
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer'; // Importando o novo componente

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Dica de CC: Em React, o ideal é usar useEffect para lidar com eventos de janela (window)
  // para evitar problemas de memória e garantir que o listener seja removido se o componente "morrer".
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-slate-950 text-white min-h-screen">
      <Navbar isScrolled={isScrolled} />
      
      <main>
        <Hero />
        <About />
        <Products />
        <VFXPortfolio />
        <PortfolioLink />
        <Services />
        <Contact />
      </main>

      {/* O Footer entra aqui, no fechamento da página */}
      <Footer />
      
      <WhatsAppButton />
    </div>
  );
}

export default App;