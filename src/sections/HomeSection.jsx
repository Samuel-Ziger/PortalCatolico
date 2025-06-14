import React from 'react';
import { Book, Heart, Star, Download, GraduationCap } from 'lucide-react';

const HomeSection = ({ setActiveSection, versiculoHoje, rosarioHoje }) => {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8 shadow-xl">
        <h2 className="text-4xl font-bold mb-4">Bem-vindo ao Portal Católico</h2>
        <p className="text-xl opacity-90">
          Um espaço de fé, oração e reflexão para fortalecer sua jornada espiritual
        </p>
      </div>

      {/* Quick Access Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div 
          onClick={() => setActiveSection('versiculo')}
          className="bg-white dark:bg-dark-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-all cursor-pointer border-l-4 border-blue-500"
        >
          <Book className="h-8 w-8 text-blue-500 mb-3" />
          <h3 className="font-semibold text-gray-800 dark:text-dark-text mb-2">Versículo do Dia</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">Reflexão diária com a Palavra de Deus</p>
        </div>

        <div 
          onClick={() => setActiveSection('rosario')}
          className="bg-white dark:bg-dark-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-all cursor-pointer border-l-4 border-purple-500"
        >
          <Heart className="h-8 w-8 text-purple-500 mb-3" />
          <h3 className="font-semibold text-gray-800 dark:text-dark-text mb-2">Rosário do Dia</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">Mistérios para meditar hoje</p>
        </div>

        <div 
          onClick={() => setActiveSection('oracoes')}
          className="bg-white dark:bg-dark-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-all cursor-pointer border-l-4 border-green-500"
        >
          <Star className="h-8 w-8 text-green-500 mb-3" />
          <h3 className="font-semibold text-gray-800 dark:text-dark-text mb-2">Orações</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">Coleção de orações tradicionais</p>
        </div>

        <div 
          onClick={() => setActiveSection('wallpapers')}
          className="bg-white dark:bg-dark-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-all cursor-pointer border-l-4 border-orange-500"
        >
          <Download className="h-8 w-8 text-orange-500 mb-3" />
          <h3 className="font-semibold text-gray-800 dark:text-dark-text mb-2">Wallpapers</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">Imagens religiosas para download</p>
        </div>

        <div 
          onClick={() => setActiveSection('ensinamentos')}
          className="bg-white dark:bg-dark-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-all cursor-pointer border-l-4 border-yellow-500"
        >
          <GraduationCap className="h-8 w-8 text-yellow-500 mb-3" />
          <h3 className="font-semibold text-gray-800 dark:text-dark-text mb-2">Ensinamentos</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">Fundamentos da fé católica</p>
        </div>
      </div>

      {/* Today's Highlights */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-dark-card rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-dark-text mb-4">Versículo de Hoje</h3>
          <blockquote className="text-gray-700 dark:text-gray-300 italic mb-3">
            "{versiculoHoje.texto}"
          </blockquote>
          <p className="text-blue-600 dark:text-blue-400 font-medium">{versiculoHoje.referencia}</p>
        </div>

        <div className="bg-white dark:bg-dark-card rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-dark-text mb-4">Rosário de Hoje</h3>
          <p className="text-purple-600 dark:text-purple-400 font-medium mb-2">{rosarioHoje.nome}</p>
          <p className="text-gray-600 dark:text-gray-400">
            Medite nos mistérios {rosarioHoje.nome.toLowerCase()} neste dia especial.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;