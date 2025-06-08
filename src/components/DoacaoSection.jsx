import React from 'react';
import { Button } from '@/components/ui/button';
import { Gift, Copy } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const DoacaoSection = () => {
  const handlePixClick = () => {
    const pixCode = '70bdb4e9-9bd8-46fd-a2a2-c0c5252ae877';
    navigator.clipboard.writeText(pixCode);
    toast({
      title: "Código PIX copiado!",
      description: "Muito obrigado por sua doação. Que Deus abençoe sua generosidade!",
    });
  };

  return (
    <div className="mt-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-8 text-white text-center">
      <Gift className="h-12 w-12 mx-auto mb-4" />
      <h3 className="text-2xl font-bold mb-4">Apoie este Portal</h3>
      <p className="mb-6 opacity-90">
        Ajude-nos a manter este espaço de fé e oração funcionando
      </p>
      <div className="flex flex-col items-center gap-4">
        <div className="bg-white/10 p-4 rounded-lg w-full max-w-md">
          <p className="text-sm mb-2">Código PIX:</p>
          <div className="flex items-center justify-between bg-white/20 p-3 rounded">
            <code className="text-white font-mono">70bdb4e9-9bd8-46fd-a2a2-c0c5252ae877</code>
            <Button 
              onClick={handlePixClick}
              variant="ghost" 
              size="sm"
              className="text-white hover:bg-white/20"
            >
              <Copy className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <Button 
          onClick={handlePixClick}
          className="bg-white text-orange-600 hover:bg-gray-100"
        >
          Copiar e Doar via PIX
        </Button>
      </div>
    </div>
  );
};

export default DoacaoSection;