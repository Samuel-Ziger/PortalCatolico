import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { ExternalLink } from 'lucide-react';

const RSS_FEEDS = [
  {
    nome: 'Vatican News',
    url: 'https://api.rss2json.com/v1/api.json?rss_url=https://www.vaticannews.va/pt.rss.xml'
  },
  {
    nome: 'Aleteia',
    url: 'https://api.rss2json.com/v1/api.json?rss_url=https://pt.aleteia.org/feed/'
  },
  {
    nome: 'Zenit',
    url: 'https://api.rss2json.com/v1/api.json?rss_url=https://zenit.org/feed/?lang=portuguese'
  },
  {
    nome: 'Canção Nova',
    url: 'https://api.rss2json.com/v1/api.json?rss_url=https://noticias.cancaonova.com/feed/'
  }
];

const NoticiasSection = () => {
  const [news, setNews] = useState([]);
  const [loadingNews, setLoadingNews] = useState(false);

  const carregarNoticias = async () => {
    setLoadingNews(true);
    let allNews = [];
    try {
      for (const feed of RSS_FEEDS) {
        const response = await fetch(feed.url);
        const data = await response.json();
        if (data.status === 'ok') {
          const noticiasComFonte = data.items.slice(0, 7).map(item => ({ ...item, fonte: feed.nome }));
          allNews = allNews.concat(noticiasComFonte);
        } else {
          toast({
            title: `Erro ao carregar notícias de ${feed.nome}`,
            description: data.message || 'Não foi possível buscar as notícias.',
            variant: 'destructive'
          });
        }
      }
      // Ordena por data decrescente
      allNews.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));
      setNews(allNews);
    } catch (error) {
      console.error('Erro ao carregar notícias:', error);
      toast({
        title: 'Erro de Rede',
        description: 'Não foi possível conectar ao servidor de notícias.',
        variant: 'destructive'
      });
    } finally {
      setLoadingNews(false);
    }
  };

  useEffect(() => {
    carregarNoticias();
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-dark-bg">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white dark:bg-dark-card rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <ExternalLink className="h-12 w-12 text-red-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-800 dark:text-dark-text mb-2">Notícias Católicas</h2>
            <p className="text-gray-600 dark:text-gray-300">Últimas notícias do Vaticano</p>
          </div>

          {loadingNews ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500 mx-auto"></div>
              <p className="text-gray-600 dark:text-gray-300 mt-4">Carregando notícias...</p>
            </div>
          ) : (
            <div className="space-y-6">
              {news.map((noticia, idx) => (
                <div key={idx} className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-6 fade-in">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-dark-text mb-3">
                        {noticia.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3" dangerouslySetInnerHTML={{ __html: noticia.description || "Sem descrição disponível." }} />
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {new Date(noticia.pubDate).toLocaleDateString('pt-BR')}<br/>
                          <span className="italic text-xs text-blue-700 dark:text-blue-400">{noticia.fonte}</span>
                        </p>
                        <a 
                          href={noticia.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 font-medium flex items-center"
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
                  <p className="text-gray-500 dark:text-gray-400 text-lg">Não foi possível carregar as notícias no momento.</p>
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
    </div>
  );
};

export default NoticiasSection;