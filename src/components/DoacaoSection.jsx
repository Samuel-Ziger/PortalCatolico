import React from 'react';
import { Button } from '@/components/ui/button';
import { Gift } from 'lucide-react';

const DoacaoSection = () => {
  return (
    <div className="mt-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-8 text-white text-center">
      <Gift className="h-12 w-12 mx-auto mb-4" />
      <h3 className="text-2xl font-bold mb-4">Apoie este Portal</h3>
      <p className="mb-6 opacity-90">
        Ajude-nos a manter este espaço de fé e oração funcionando
      </p>
      <div className="flex flex-col md:flex-row gap-4 justify-center">
        <Button className="bg-white text-orange-600 hover:bg-gray-100">
          Doar via PIX
        </Button>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white">
          Doar via PayPal
        </Button>
      </div>
    </div>
  );
};

export default DoacaoSection;