import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';

const FrasesSection = ({ frasesCatolicas }) => {
  const [currentQuote, setCurrentQuote] = useState(0);

  const novaFrase = () => {
    const novoIndice = Math.floor(Math.random() * frasesCatolicas.length);
    setCurrentQuote(novoIndice);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-dark-bg">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-dark-card rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <Star className="h-12 w-12 text-purple-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-2">Frases Católicas</h2>
            <p className="text-gray-600 dark:text-gray-300">Sabedoria dos Santos e Doutores da Igreja</p>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-8 text-center">
            <blockquote className="text-2xl text-gray-800 dark:text-gray-100 font-medium mb-6 leading-relaxed">
              "{frasesCatolicas[currentQuote].texto}"
            </blockquote>
            <p className="text-xl text-purple-600 dark:text-purple-400 font-semibold mb-8">
              — {frasesCatolicas[currentQuote].autor}
            </p>
            <Button 
              onClick={novaFrase}
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full"
            >
              Nova Frase
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrasesSection;