import React from 'react';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

const OracaoModal = ({ oracao, onClose }) => {
  if (!oracao) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-gray-800">
              {oracao.titulo}
            </h3>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6">
            <pre className="whitespace-pre-wrap text-gray-800 leading-relaxed font-medium">
              {oracao.texto}
            </pre>
          </div>
          
          <div className="mt-6 text-center">
            <Button 
              onClick={onClose}
              className="bg-green-600 hover:bg-green-700 text-white px-8"
            >
              Fechar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OracaoModal;