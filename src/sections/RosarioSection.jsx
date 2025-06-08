import React from 'react';
import { Heart } from 'lucide-react';

const RosarioSection = ({ rosarioHoje }) => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center mb-8">
          <Heart className="h-12 w-12 text-purple-500 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Rosário do Dia</h2>
          <p className="text-gray-600">Mistérios para meditar hoje</p>
        </div>

        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-purple-600 mb-2">
              {rosarioHoje.nome}
            </h3>
            <p className="text-gray-600">
              {new Date().toLocaleDateString('pt-BR', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>

          <div className="space-y-4">
            {rosarioHoje.misterios.map((misterio, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-semibold">
                    {index + 1}
                  </div>
                  <p className="text-gray-800 font-medium">{misterio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RosarioSection;