import React from 'react';
import { Star, ChevronRight } from 'lucide-react';

const OracoesSection = ({ oracoes, setSelectedPrayer }) => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center mb-8">
          <Star className="h-12 w-12 text-green-500 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Orações Populares</h2>
          <p className="text-gray-600">Coleção de orações tradicionais católicas</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(oracoes).map(([key, oracao]) => (
            <div 
              key={key}
              onClick={() => setSelectedPrayer(key)}
              className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 cursor-pointer hover:shadow-lg transition-all border-l-4 border-green-500"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{oracao.titulo}</h3>
              <p className="text-gray-600 mb-4">Clique para ler a oração completa</p>
              <div className="flex items-center text-green-600">
                <span className="text-sm font-medium">Ler oração</span>
                <ChevronRight className="h-4 w-4 ml-1" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OracoesSection;