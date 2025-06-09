import React, { useState, useEffect } from 'react';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import MobileNavigation from '@/components/MobileNavigation';
import Footer from '@/components/Footer';
import HomeSection from '@/sections/HomeSection';
import VersiculoSection from '@/sections/VersiculoSection';
import FrasesSection from '@/sections/FrasesSection';
import WallpapersSection from '@/sections/WallpapersSection';
import RosarioSection from '@/sections/RosarioSection';
import OracoesSection from '@/sections/OracoesSection';
import LiturgicoSection from '@/sections/LiturgicoSection';
import CalendarioLiturgico from '@/sections/CalendarioLiturgico';
import NoticiasSection from '@/sections/NoticiasSection';
import CaminhoNeocatecumenalSection from '@/sections/CaminhoNeocatecumenalSection';
import DoacaoSection from '@/components/DoacaoSection';
import AdSenseSpace from '@/components/AdSenseSpace';
import OracaoModal from '@/components/OracaoModal';

import { versiculos, frasesCatolicas, misteriosRosario, oracoes, santos } from '@/data/catholicData';
import { getVersiculoDoDia, getRosarioDoDia, getTempoLiturgico } from '@/lib/dateUtils';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedPrayer, setSelectedPrayer] = useState(null);

  const versiculoHoje = getVersiculoDoDia(versiculos);
  const rosarioHoje = getRosarioDoDia(misteriosRosario);
  const tempoLiturgico = getTempoLiturgico();

  const navItems = [
    { id: 'home', label: 'Início' },
    { id: 'versiculo', label: 'Versículo' },
    { id: 'frases', label: 'Frases' },
    { id: 'wallpapers', label: 'Wallpapers' },
    { id: 'rosario', label: 'Rosário' },
    { id: 'oracoes', label: 'Orações' },
    { id: 'liturgico', label: 'Litúrgico' },
    { id: 'calendario', label: 'Calendário' },
    { id: 'noticias', label: 'Notícias' },
    { id: 'caminho', label: 'Caminho Neocatecumenal' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Toaster />
      
      <Header activeSection={activeSection} setActiveSection={setActiveSection} navItems={navItems} />
      <MobileNavigation activeSection={activeSection} setActiveSection={setActiveSection} navItems={navItems} />

      <main className="container mx-auto px-4 py-8">
        {activeSection === 'home' && <HomeSection setActiveSection={setActiveSection} versiculoHoje={versiculoHoje} rosarioHoje={rosarioHoje} />}
        {activeSection === 'versiculo' && <VersiculoSection versiculoHoje={versiculoHoje} />}
        {activeSection === 'frases' && <FrasesSection frasesCatolicas={frasesCatolicas} />}
        {activeSection === 'wallpapers' && <WallpapersSection santos={santos} />}
        {activeSection === 'rosario' && <RosarioSection rosarioHoje={rosarioHoje} />}
        {activeSection === 'oracoes' && <OracoesSection oracoes={oracoes} setSelectedPrayer={setSelectedPrayer} />}
        {activeSection === 'liturgico' && <LiturgicoSection tempoLiturgico={tempoLiturgico} />}
        {activeSection === 'calendario' && <CalendarioLiturgico />}
        {activeSection === 'noticias' && <NoticiasSection />}
        {activeSection === 'caminho' && <CaminhoNeocatecumenalSection />}
        
        <DoacaoSection />
        <AdSenseSpace />
      </main>

      <Footer setActiveSection={setActiveSection} />

      {selectedPrayer && (
        <OracaoModal 
          oracao={oracoes[selectedPrayer]} 
          onClose={() => setSelectedPrayer(null)} 
        />
      )}
    </div>
  );
}

export default App;