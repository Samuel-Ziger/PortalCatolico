import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { Download, Search, ChevronLeft, ChevronRight } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const WallpapersSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const wallpapers = [
    // São Francisco de Assis
    {
      id: 1,
      nome: "São Francisco de Assis",
      categoria: "sao-francisco",
      imagem: "/wallpapers/Sao Francisco de Assis/SãoFranciscodeAssis1.jpeg"
    },
    {
      id: 2,
      nome: "São Francisco de Assis",
      categoria: "sao-francisco",
      imagem: "/wallpapers/Sao Francisco de Assis/SãoFranciscodeAssis2.jpeg"
    },
    {
      id: 3,
      nome: "São Francisco de Assis",
      categoria: "sao-francisco",
      imagem: "/wallpapers/Sao Francisco de Assis/SãoFranciscodeAssis3.jpeg"
    },
    {
      id: 4,
      nome: "São Francisco de Assis",
      categoria: "sao-francisco",
      imagem: "/wallpapers/Sao Francisco de Assis/SãoFranciscodeAssis4.jpeg"
    },
    {
      id: 5,
      nome: "São Francisco de Assis",
      categoria: "sao-francisco",
      imagem: "/wallpapers/Sao Francisco de Assis/SãoFranciscodeAssis5.jpeg"
    },
    {
      id: 6,
      nome: "São Francisco de Assis",
      categoria: "sao-francisco",
      imagem: "/wallpapers/Sao Francisco de Assis/SãoFranciscodeAssis6.jpeg"
    },
    {
      id: 7,
      nome: "São Francisco de Assis",
      categoria: "sao-francisco",
      imagem: "/wallpapers/Sao Francisco de Assis/SãoFranciscodeAssis7.jpeg"
    },
    {
      id: 8,
      nome: "São Francisco de Assis",
      categoria: "sao-francisco",
      imagem: "/wallpapers/Sao Francisco de Assis/SãoFranciscodeAssis8.jpeg"
    },
    {
      id: 9,
      nome: "São Francisco de Assis",
      categoria: "sao-francisco",
      imagem: "/wallpapers/Sao Francisco de Assis/SãoFranciscodeAssis9.jpeg"
    },
    // Santa Teresa de Ávila
    {
      id: 10,
      nome: "Santa Teresa de Ávila",
      categoria: "santa-teresa",
      imagem: "/wallpapers/Santa Teresa de Avila/SantaTeresadeAvila1.jpeg"
    },
    {
      id: 11,
      nome: "Santa Teresa de Ávila",
      categoria: "santa-teresa",
      imagem: "/wallpapers/Santa Teresa de Avila/SantaTeresadeAvila2.jpeg"
    },
    {
      id: 12,
      nome: "Santa Teresa de Ávila",
      categoria: "santa-teresa",
      imagem: "/wallpapers/Santa Teresa de Avila/SantaTeresadeAvila3.jpeg"
    },
    {
      id: 13,
      nome: "Santa Teresa de Ávila",
      categoria: "santa-teresa",
      imagem: "/wallpapers/Santa Teresa de Avila/SantaTeresadeAvila4.jpeg"
    },
    {
      id: 14,
      nome: "Santa Teresa de Ávila",
      categoria: "santa-teresa",
      imagem: "/wallpapers/Santa Teresa de Avila/SantaTeresadeAvila5.jpeg"
    },
    {
      id: 15,
      nome: "Santa Teresa de Ávila",
      categoria: "santa-teresa",
      imagem: "/wallpapers/Santa Teresa de Avila/SantaTeresadeAvila6.jpeg"
    },
    {
      id: 16,
      nome: "Santa Teresa de Ávila",
      categoria: "santa-teresa",
      imagem: "/wallpapers/Santa Teresa de Avila/SantaTeresadeAvila7.jpeg"
    },
    {
      id: 17,
      nome: "Santa Teresa de Ávila",
      categoria: "santa-teresa",
      imagem: "/wallpapers/Santa Teresa de Avila/SantaTeresadeAvila8.jpeg"
    },
    {
      id: 18,
      nome: "Santa Teresa de Ávila",
      categoria: "santa-teresa",
      imagem: "/wallpapers/Santa Teresa de Avila/SantaTeresadeAvila9.jpeg"
    },
    {
      id: 19,
      nome: "Santa Teresa de Ávila",
      categoria: "santa-teresa",
      imagem: "/wallpapers/Santa Teresa de Avila/SantaTeresadeAvila10.jpeg"
    },
    // São João Paulo II
    {
      id: 20,
      nome: "São João Paulo II",
      categoria: "sao-joao-paulo",
      imagem: "/wallpapers/Sao Joao Paulo II/SãoJoaoPauloII1.jpeg"
    },
    {
      id: 21,
      nome: "São João Paulo II",
      categoria: "sao-joao-paulo",
      imagem: "/wallpapers/Sao Joao Paulo II/SãoJoaoPauloII2.jpeg"
    },
    {
      id: 22,
      nome: "São João Paulo II",
      categoria: "sao-joao-paulo",
      imagem: "/wallpapers/Sao Joao Paulo II/SãoJoaoPauloII3.jpeg"
    },
    {
      id: 23,
      nome: "São João Paulo II",
      categoria: "sao-joao-paulo",
      imagem: "/wallpapers/Sao Joao Paulo II/SãoJoaoPauloII4.jpeg"
    },
    {
      id: 24,
      nome: "São João Paulo II",
      categoria: "sao-joao-paulo",
      imagem: "/wallpapers/Sao Joao Paulo II/SãoJoaoPauloII5.jpeg"
    },
    {
      id: 25,
      nome: "São João Paulo II",
      categoria: "sao-joao-paulo",
      imagem: "/wallpapers/Sao Joao Paulo II/SãoJoaoPauloII6.jpeg"
    },
    {
      id: 26,
      nome: "São João Paulo II",
      categoria: "sao-joao-paulo",
      imagem: "/wallpapers/Sao Joao Paulo II/SãoJoaoPauloII7.jpeg"
    },
    {
      id: 27,
      nome: "São João Paulo II",
      categoria: "sao-joao-paulo",
      imagem: "/wallpapers/Sao Joao Paulo II/SãoJoaoPauloII8.jpeg"
    },
    {
      id: 28,
      nome: "São João Paulo II",
      categoria: "sao-joao-paulo",
      imagem: "/wallpapers/Sao Joao Paulo II/SãoJoaoPauloII9.jpeg"
    },
    {
      id: 29,
      nome: "São João Paulo II",
      categoria: "sao-joao-paulo",
      imagem: "/wallpapers/Sao Joao Paulo II/SãoJoaoPauloII10.jpeg"
    },
    {
      id: 30,
      nome: "São João Paulo II",
      categoria: "sao-joao-paulo",
      imagem: "/wallpapers/Sao Joao Paulo II/SãoJoaoPauloII11.jpeg"
    },
    {
      id: 31,
      nome: "São João Paulo II",
      categoria: "sao-joao-paulo",
      imagem: "/wallpapers/Sao Joao Paulo II/SãoJoaoPauloII12.jpeg"
    },
    // Santa Terezinha do Menino Jesus
    {
      id: 32,
      nome: "Santa Terezinha do Menino Jesus",
      categoria: "santa-terezinha",
      imagem: "/wallpapers/Santa Terezinha do Menino Jesus/SantaTerezinha doMeninoJesus 1.jpeg"
    },
    {
      id: 33,
      nome: "Santa Terezinha do Menino Jesus",
      categoria: "santa-terezinha",
      imagem: "/wallpapers/Santa Terezinha do Menino Jesus/SantaTerezinha doMeninoJesus 2.jpeg"
    },
    {
      id: 34,
      nome: "Santa Terezinha do Menino Jesus",
      categoria: "santa-terezinha",
      imagem: "/wallpapers/Santa Terezinha do Menino Jesus/SantaTerezinha doMeninoJesus3.jpeg"
    },
    {
      id: 35,
      nome: "Santa Terezinha do Menino Jesus",
      categoria: "santa-terezinha",
      imagem: "/wallpapers/Santa Terezinha do Menino Jesus/SantaTerezinha doMeninoJesus4.jpeg"
    },
    {
      id: 36,
      nome: "Santa Terezinha do Menino Jesus",
      categoria: "santa-terezinha",
      imagem: "/wallpapers/Santa Terezinha do Menino Jesus/SantaTerezinha doMeninoJesus5.jpeg"
    },
    {
      id: 37,
      nome: "Santa Terezinha do Menino Jesus",
      categoria: "santa-terezinha",
      imagem: "/wallpapers/Santa Terezinha do Menino Jesus/SantaTerezinha doMeninoJesus6.jpeg"
    },
    {
      id: 38,
      nome: "Santa Terezinha do Menino Jesus",
      categoria: "santa-terezinha",
      imagem: "/wallpapers/Santa Terezinha do Menino Jesus/SantaTerezinha doMeninoJesus7.jpeg"
    },
    {
      id: 39,
      nome: "Santa Terezinha do Menino Jesus",
      categoria: "santa-terezinha",
      imagem: "/wallpapers/Santa Terezinha do Menino Jesus/SantaTerezinha doMeninoJesus8.jpeg"
    },
    {
      id: 40,
      nome: "Santa Terezinha do Menino Jesus",
      categoria: "santa-terezinha",
      imagem: "/wallpapers/Santa Terezinha do Menino Jesus/SantaTerezinha doMeninoJesus9.jpeg"
    },
    {
      id: 41,
      nome: "Santa Terezinha do Menino Jesus",
      categoria: "santa-terezinha",
      imagem: "/wallpapers/Santa Terezinha do Menino Jesus/SantaTerezinha doMeninoJesus10.jpeg"
    },
    // São Padre Pio
    {
      id: 42,
      nome: "São Padre Pio",
      categoria: "sao-padre-pio",
      imagem: "/wallpapers/Sao Padre Pio/SaoPadrePio1.jpeg"
    },
    {
      id: 43,
      nome: "São Padre Pio",
      categoria: "sao-padre-pio",
      imagem: "/wallpapers/Sao Padre Pio/SaoPadrePio2.jpeg"
    },
    {
      id: 44,
      nome: "São Padre Pio",
      categoria: "sao-padre-pio",
      imagem: "/wallpapers/Sao Padre Pio/SaoPadrePio3.jpeg"
    },
    {
      id: 45,
      nome: "São Padre Pio",
      categoria: "sao-padre-pio",
      imagem: "/wallpapers/Sao Padre Pio/SaoPadrePio4.jpeg"
    },
    {
      id: 46,
      nome: "São Padre Pio",
      categoria: "sao-padre-pio",
      imagem: "/wallpapers/Sao Padre Pio/SaoPadrePio5.jpeg"
    },
    {
      id: 47,
      nome: "São Padre Pio",
      categoria: "sao-padre-pio",
      imagem: "/wallpapers/Sao Padre Pio/SaoPadrePio6.jpeg"
    },
    {
      id: 48,
      nome: "São Padre Pio",
      categoria: "sao-padre-pio",
      imagem: "/wallpapers/Sao Padre Pio/SaoPadrePio7.jpeg"
    },
    {
      id: 49,
      nome: "São Padre Pio",
      categoria: "sao-padre-pio",
      imagem: "/wallpapers/Sao Padre Pio/SaoPadrePio8.jpeg"
    },
    {
      id: 50,
      nome: "São Padre Pio",
      categoria: "sao-padre-pio",
      imagem: "/wallpapers/Sao Padre Pio/SaoPadrePio9.jpeg"
    },
    {
      id: 51,
      nome: "São Padre Pio",
      categoria: "sao-padre-pio",
      imagem: "/wallpapers/Sao Padre Pio/SaoPadrePio10.jpeg"
    }
  ];

  const wallpapersFiltrados = wallpapers.filter(wallpaper => {
    const matchesSearch = wallpaper.nome.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'todos' || wallpaper.categoria === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleDownload = async (imagem) => {
    try {
      const response = await fetch(imagem);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = imagem.split('/').pop();
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
      
      toast({
        title: "Download iniciado",
        description: "O wallpaper será baixado em breve."
      });
    } catch (error) {
      toast({
        title: "Erro ao baixar",
        description: "Não foi possível baixar o wallpaper. Tente novamente.",
        variant: "destructive"
      });
    }
  };

  const renderContent = () => {
    if (selectedCategory === 'sao-francisco' || selectedCategory === 'santa-teresa' || selectedCategory === 'sao-joao-paulo' || selectedCategory === 'santa-terezinha' || selectedCategory === 'sao-padre-pio') {
      const wallpapersCategoria = wallpapers.filter(w => w.categoria === selectedCategory);
      return (
        <div className="max-w-4xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {wallpapersCategoria.map((wallpaper) => (
                <CarouselItem key={wallpaper.id}>
                  <div className="p-1">
                    <div className="bg-white rounded-xl p-4 shadow-lg">
                      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg">
                        <img
                          src={wallpaper.imagem}
                          alt={`Wallpaper de ${wallpaper.nome}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="mt-4 flex justify-center">
                        <Button
                          onClick={() => handleDownload(wallpaper.imagem)}
                          className="bg-orange-500 hover:bg-orange-600 text-white"
                        >
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </div>
      );
    }

    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {wallpapersFiltrados.map((wallpaper) => (
          <div key={wallpaper.id} className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
              <img   
                className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-300" 
                alt={`Wallpaper de ${wallpaper.nome}`}
                src={wallpaper.imagem}
              />
            </div>
            <h3 className="font-semibold text-gray-800 mb-3">{wallpaper.nome}</h3>
            <Button 
              onClick={() => handleDownload(wallpaper.imagem)}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white"
            >
              <Download className="h-4 w-4 mr-2" />
              Download
            </Button>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center mb-8">
          <Download className="h-12 w-12 text-orange-500 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Galeria de Wallpapers</h2>
          <p className="text-gray-600">Imagens religiosas para download</p>
        </div>

        {/* Filtros */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Buscar santo..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            >
              <option value="todos">Todas as categorias</option>
              <option value="sao-francisco">São Francisco de Assis</option>
              <option value="santa-teresa">Santa Teresa de Ávila</option>
              <option value="sao-joao-paulo">São João Paulo II</option>
              <option value="santa-terezinha">Santa Terezinha do Menino Jesus</option>
              <option value="sao-padre-pio">São Padre Pio</option>
            </select>
          </div>
        </div>

        {/* Conteúdo */}
        {renderContent()}

        {wallpapersFiltrados.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Nenhum wallpaper encontrado com os filtros aplicados.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WallpapersSection;