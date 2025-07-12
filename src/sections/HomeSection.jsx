import React from 'react';
import { Link } from 'react-router-dom';
import { Book, Cross, Heart, Users, Calendar, Clock, Star, Download, GraduationCap, Church, Image } from 'lucide-react';
import ChurchTimeline from '../components/ChurchTimeline';

const HomeSection = ({ setActiveSection, versiculoHoje, rosarioHoje, loadingVersiculo }) => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8 shadow-xl">
        <h1 className="text-4xl font-bold mb-4">Bem-vindo ao Portal Católico</h1>
        <p className="text-xl mb-8">Seu espaço de fé, oração e formação católica</p>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => setActiveSection('oracoes')}
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Orações
          </button>
          <button
            onClick={() => setActiveSection('ensinamentos')}
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Ensinamentos
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        <div 
          onClick={() => setActiveSection('oracoes')}
          className="bg-white dark:bg-dark-card rounded-xl p-6 shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
        >
          <div className="flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg mb-4">
            <Heart className="h-6 w-6 text-blue-600 dark:text-blue-400" />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-dark-text mb-2">Orações</h3>
          <p className="text-gray-600 dark:text-gray-400">Orações tradicionais e devocionais da Igreja</p>
        </div>

        <div 
          onClick={() => setActiveSection('ensinamentos')}
          className="bg-white dark:bg-dark-card rounded-xl p-6 shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
        >
          <div className="flex items-center justify-center w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg mb-4">
            <Book className="h-6 w-6 text-purple-600 dark:text-purple-400" />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-dark-text mb-2">Ensinamentos</h3>
          <p className="text-gray-600 dark:text-gray-400">Doutrina e formação católica</p>
        </div>

        <div 
          onClick={() => setActiveSection('wallpapers')}
          className="bg-white dark:bg-dark-card rounded-xl p-6 shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
        >
          <div className="flex items-center justify-center w-12 h-12 bg-pink-100 dark:bg-pink-900 rounded-lg mb-4">
            <Image className="h-6 w-6 text-pink-600 dark:text-pink-400" />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-dark-text mb-2">Wallpaper</h3>
          <p className="text-gray-600 dark:text-gray-400">Baixe imagens católicas para seu dispositivo</p>
        </div>

        <div 
          onClick={() => setActiveSection('liturgico')}
          className="bg-white dark:bg-dark-card rounded-xl p-6 shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
        >
          <div className="flex items-center justify-center w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg mb-4">
            <Calendar className="h-6 w-6 text-green-600 dark:text-green-400" />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-dark-text mb-2">Calendário Litúrgico</h3>
          <p className="text-gray-600 dark:text-gray-400">Datas e celebrações importantes</p>
        </div>
      </div>

      {/* Espaço extra para separar as seções */}
      <div className="my-10" />

      {/* Cards Versículo e Rosário */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-dark-card rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-dark-text mb-4">Versículo de Hoje</h3>
          {loadingVersiculo ? (
            <div className="animate-pulse">
              <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded mb-2"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded mb-3"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded"></div>
            </div>
          ) : versiculoHoje ? (
            <>
              <blockquote className="text-gray-700 dark:text-gray-300 italic mb-3">
                "{versiculoHoje.texto}"
              </blockquote>
              <p className="text-blue-600 dark:text-blue-400 font-medium">{versiculoHoje.referencia}</p>
            </>
          ) : (
            <p className="text-gray-600 dark:text-gray-400">Carregando versículo...</p>
          )}
        </div>

        <div className="bg-white dark:bg-dark-card rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-dark-text mb-4">Rosário de Hoje</h3>
          <p className="text-purple-600 dark:text-purple-400 font-medium mb-2">{rosarioHoje.nome}</p>
          <p className="text-gray-600 dark:text-gray-400">
            Medite nos mistérios {rosarioHoje.nome.toLowerCase()} neste dia especial.
          </p>
        </div>
      </div>

      {/* Church Timeline Section */}
      <ChurchTimeline />

      {/* Footer */}
      <footer className="mt-12 text-center text-gray-600 dark:text-gray-400">
        <p>© 2024 Portal Católico. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default HomeSection;