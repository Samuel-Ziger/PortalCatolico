import React, { useState, useEffect } from 'react';
import { Toaster } from '@components/ui/toaster';
import Header from '@components/Header';
import MobileNavigation from '@components/MobileNavigation';
import Footer from '@components/Footer';
import HomeSection from '@sections/HomeSection';
import VersiculoSection from '@sections/VersiculoSection';
import FrasesSection from '@sections/FrasesSection';
import WallpapersSection from '@sections/WallpapersSection';
import RosarioSection from '@sections/RosarioSection';
import OracoesSection from '@sections/OracoesSection';
import LiturgicoSection from '@sections/LiturgicoSection';
import NoticiasSection from '@sections/NoticiasSection';
import CaminhoNeocatecumenalSection from '@sections/CaminhoNeocatecumenalSection';
import EnsinamentosSection from '@sections/EnsinamentosSection';
import DoacaoSection from '@components/DoacaoSection';
import AdSenseSpace from '@components/AdSenseSpace';
import OracaoModal from '@components/OracaoModal';
import { ThemeProvider } from '@contexts/ThemeContext';

import { versiculos, frasesCatolicas, misteriosRosario, oracoes, santos } from '@data/catholicData';
import { getVersiculoLiturgico, getRosarioDoDia, getTempoLiturgico } from '@lib/dateUtils';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedPrayer, setSelectedPrayer] = useState(null);
  const [versiculoHoje, setVersiculoHoje] = useState(null);
  const [loadingVersiculo, setLoadingVersiculo] = useState(true);

  const rosarioHoje = getRosarioDoDia(misteriosRosario);
  const tempoLiturgico = getTempoLiturgico();

  // Carrega o versículo do dia
  useEffect(() => {
    const carregarVersiculo = async () => {
      try {
        setLoadingVersiculo(true);
        const versiculo = await getVersiculoLiturgico();
        setVersiculoHoje(versiculo);
      } catch (error) {
        console.error('Erro ao carregar versículo:', error);
        // Fallback para versículo padrão
        setVersiculoHoje({
          texto: "Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna.",
          referencia: "João 3:16",
          comentario: "O amor de Deus por nós é infinito e incondicional. Este versículo nos lembra do maior presente que já recebemos."
        });
      } finally {
        setLoadingVersiculo(false);
      }
    };

    carregarVersiculo();
  }, []);

  // Efeito para fazer scroll para o topo quando mudar de seção
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeSection]);

  const navItems = [
    { id: 'home', label: 'Início' },
    { id: 'versiculo', label: 'Versículo' },
    { id: 'frases', label: 'Frases' },
    { id: 'wallpapers', label: 'Wallpapers' },
    { id: 'rosario', label: 'Rosário' },
    { id: 'oracoes', label: 'Orações' },
    { id: 'liturgico', label: 'Litúrgico' },
    { id: 'noticias', label: 'Notícias' },
    { id: 'caminho', label: 'Caminho Neocatecumenal' },
    { id: 'ensinamentos', label: 'Ensinamentos' },
  ];

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-dark-bg dark:via-dark-bg dark:to-dark-bg">
        <Toaster />
        
        <Header activeSection={activeSection} setActiveSection={setActiveSection} navItems={navItems} />
        <MobileNavigation activeSection={activeSection} setActiveSection={setActiveSection} navItems={navItems} />

        <main className="container mx-auto px-4 py-8">
          {activeSection === 'home' && <HomeSection setActiveSection={setActiveSection} versiculoHoje={versiculoHoje} rosarioHoje={rosarioHoje} loadingVersiculo={loadingVersiculo} />}
          {activeSection === 'versiculo' && <VersiculoSection versiculoHoje={versiculoHoje} loadingVersiculo={loadingVersiculo} />}
          {activeSection === 'frases' && <FrasesSection frasesCatolicas={frasesCatolicas} />}
          {activeSection === 'wallpapers' && <WallpapersSection santos={santos} />}
          {activeSection === 'rosario' && <RosarioSection rosarioHoje={rosarioHoje} />}
          {activeSection === 'oracoes' && <OracoesSection oracoes={oracoes} setSelectedPrayer={setSelectedPrayer} />}
          {activeSection === 'liturgico' && <LiturgicoSection tempoLiturgico={tempoLiturgico} />}
          {activeSection === 'noticias' && <NoticiasSection />}
          {activeSection === 'caminho' && <CaminhoNeocatecumenalSection />}
          {activeSection === 'ensinamentos' && <EnsinamentosSection />}
          
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
    </ThemeProvider>
  );
}

export default App;