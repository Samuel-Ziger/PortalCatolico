import React, { useEffect } from 'react';

const AdSenseSpace = () => {
  useEffect(() => {
    // Carrega o script do AdSense se ainda não foi carregado
    if (window.adsbygoogle) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (error) {
        console.log('Erro ao carregar anúncio:', error);
      }
    }
  }, []);

  return (
    <div className="mt-8 bg-gray-100 dark:bg-gray-800 rounded-lg p-8 text-center">
      {/* Google AdSense - Anúncio Responsivo */}
      <ins 
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-6284155976372801"
        data-ad-slot="YOUR_AD_SLOT_ID" // Substitua pelo seu ID de slot
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
      
      {/* Fallback para quando o anúncio não carrega */}
      <div className="mt-4">
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          Espaço reservado para anúncios
        </p>
      </div>
    </div>
  );
};

export default AdSenseSpace;