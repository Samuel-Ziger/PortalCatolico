import React from 'react';
import TemposLiturgicos from '@/components/TemposLiturgicos';

const CalendarioLiturgico = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Calendário Litúrgico</h2>
          <p className="text-gray-600">Conheça os tempos litúrgicos e suas cores</p>
        </div>

        <TemposLiturgicos />
      </div>
    </div>
  );
};

export default CalendarioLiturgico; 