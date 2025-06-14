import React from 'react';
import { Cross } from 'lucide-react';

const Footer = ({ setActiveSection }) => {
  return (
    <footer className="bg-gray-800 dark:bg-dark-card text-white mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Cross className="h-6 w-6" />
              <span className="text-xl font-bold">Portal Católico</span>
            </div>
            <p className="text-gray-300 dark:text-gray-400">
              Um espaço de fé, oração e reflexão para fortalecer sua jornada espiritual.
            </p>
          </div>
          
          <div>
            <span className="text-lg font-semibold mb-4 block">Links Úteis</span>
            <div className="space-y-2">
              <button 
                onClick={() => setActiveSection('versiculo')}
                className="block text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-200 transition-colors"
              >
                Versículo do Dia
              </button>
              <button 
                onClick={() => setActiveSection('oracoes')}
                className="block text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-200 transition-colors"
              >
                Orações
              </button>
              <button 
                onClick={() => setActiveSection('rosario')}
                className="block text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-200 transition-colors"
              >
                Rosário
              </button>
            </div>
          </div>
          
          <div>
            <span className="text-lg font-semibold mb-4 block">Redes Sociais</span>
            <div className="space-y-2">
              <a 
                href="https://www.instagram.com/pontifex/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Instagram do Papa Leão XIV
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © {new Date().getFullYear()} Portal Católico. Site católico independente sem vínculo oficial com a Igreja.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;