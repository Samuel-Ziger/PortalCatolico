import React, { useEffect } from 'react';

/**
 * Componente flexível para exibir anúncios do Google AdSense
 * 
 * @param {string} adSlot - ID do slot de anúncio do AdSense (obrigatório)
 * @param {string} adFormat - Formato do anúncio (padrão: 'auto')
 * @param {string} className - Classes CSS adicionais
 * @param {object} style - Estilos inline
 * @param {boolean} showFallback - Mostrar texto de fallback (padrão: true)
 */
const AdSenseAd = ({ 
  adSlot, 
  adFormat = 'auto', 
  className = '', 
  style = {},
  showFallback = true 
}) => {
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

  // Validação do adSlot obrigatório
  if (!adSlot) {
    console.warn('AdSenseAd: adSlot é obrigatório');
    return null;
  }

  return (
    <div className={`bg-gray-100 dark:bg-gray-800 rounded-lg p-4 text-center ${className}`} style={style}>
      {/* Google AdSense */}
      <ins 
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-6284155976372801"
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive="true"
      />
      
      {/* Fallback para quando o anúncio não carrega */}
      {showFallback && (
        <div className="mt-2">
          <p className="text-gray-500 dark:text-gray-400 text-xs">
            Anúncio
          </p>
        </div>
      )}
    </div>
  );
};

export default AdSenseAd; 