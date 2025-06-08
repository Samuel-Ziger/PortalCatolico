import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { Download, Search } from 'lucide-react';

const WallpapersSection = ({ santos }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('todos');

  const santosFiltrados = santos.filter(santo => {
    const matchesSearch = santo.nome.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'todos' || santo.categoria === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
              <option value="santos">Santos</option>
              <option value="maria">Nossa Senhora</option>
              <option value="jesus">Jesus Cristo</option>
            </select>
          </div>
        </div>

        {/* Grid de Santos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {santosFiltrados.map((santo, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg mb-4 flex items-center justify-center">
                <img   
                  className="w-full h-full object-cover rounded-lg" 
                  alt={`Wallpaper de ${santo.nome}`}
                 src="https://images.unsplash.com/photo-1599772655675-b137d48f86c8" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-3">{santo.nome}</h3>
              <Button 
                onClick={() => {
                  toast({
                    title: "Download iniciado",
                    description: `Wallpaper de ${santo.nome} será baixado em breve.`
                  });
                }}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white"
              >
                <Download className="h-4 w-4 mr-2" />
                Download
              </Button>
            </div>
          ))}
        </div>

        {santosFiltrados.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Nenhum santo encontrado com os filtros aplicados.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WallpapersSection;