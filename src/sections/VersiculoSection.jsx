import React from 'react';
import { Book } from 'lucide-react';

const VersiculoSection = ({ versiculoHoje }) => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center mb-8">
          <Book className="h-12 w-12 text-blue-500 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Versículo do Dia</h2>
          <p className="text-gray-600">Reflexão diária com a Palavra de Deus</p>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 text-center">
          <blockquote className="text-2xl text-gray-800 font-medium mb-6 leading-relaxed">
            "{versiculoHoje.texto}"
          </blockquote>
          <p className="text-xl text-blue-600 font-semibold mb-6">
            {versiculoHoje.referencia}
          </p>
          <div className="border-t border-gray-200 pt-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-3">Reflexão</h4>
            <p className="text-gray-700 leading-relaxed">
              {versiculoHoje.comentario}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VersiculoSection;