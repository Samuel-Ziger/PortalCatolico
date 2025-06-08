import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { ExternalLink } from 'lucide-react';

const NoticiasSection = () => {
  const [news, setNews] = useState([]);
  const [loadingNews, setLoadingNews] = useState(false);

  const carregarNoticias = async () => {
    setLoadingNews(true);
    try {
      const response = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://www.vaticannews.va/pt/rss.xml');
      const data = await response.json();
      
      if (data.status === 'ok') {
        setNews(data.items.slice(0, 10));
      } else {
        toast({
          title: "Erro ao carregar notícias",
          description: data.message || "Não foi possível buscar as notícias.",
          variant: "destructive"
        });
      }
    } catch (error) {
      console.error('Erro ao carregar notícias:', error);
      toast({
        title: "Erro de Rede",
        description: "Não foi possível conectar ao servidor de notícias.",
        variant: "destructive"
      });
    } finally {
      setLoadingNews(false);
    }
  };

  useEffect(() => {
    carregarNoticias();
  }, []);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center mb-8">
          <ExternalLink className="h-12 w-12 text-red-500 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Notícias Católicas</h2>
          <p className="text-gray-600">Últimas notícias do Vaticano</p>
        </div>

        {loadingNews ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500 mx-auto"></div>
            <p className="text-gray-600 mt-4">Carregando notícias...</p>
          </div>
        ) : (
          <div className="space-y-6">
            {news.map((noticia, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                      {noticia.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {noticia.description || "Sem descrição disponível."}
                    </p>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-gray-500">
                        {new Date(noticia.pubDate).toLocaleDateString('pt-BR')}
                      </p>
                      <a 
                        href={noticia.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-red-600 hover:text-red-700 font-medium flex items-center"
                      >
                        Ler mais
                        <ExternalLink className="h-4 w-4 ml-1" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {news.length === 0 && !loadingNews && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">Não foi possível carregar as notícias no momento.</p>
                <Button 
                  onClick={carregarNoticias}
                  className="mt-4 bg-red-500 hover:bg-red-600 text-white"
                >
                  Tentar novamente
                </Button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default NoticiasSection;