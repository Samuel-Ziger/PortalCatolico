import React from 'react';
import { Calendar } from 'lucide-react';

const LiturgicoSection = ({ tempoLiturgico }) => {
  return (
    <div className="min-h-screen bg-white dark:bg-dark-bg">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <Calendar className="h-12 w-12 text-indigo-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Calendário Litúrgico</h2>
            <p className="text-gray-600">Tempo e cor litúrgica atual</p>
          </div>

          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-8 text-center">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-indigo-600 mb-2">
                {tempoLiturgico.tempo}
              </h3>
              <p className="text-gray-600">
                {new Date().toLocaleDateString('pt-BR', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Cor Litúrgica</h4>
              <p className="text-xl text-indigo-600 font-medium">{tempoLiturgico.cor}</p>
            </div>

            <div className="mt-6 text-sm text-gray-600">
              <p>* Calendário simplificado baseado em datas aproximadas</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiturgicoSection;