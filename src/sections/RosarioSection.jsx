import React, { useState } from 'react';
import { Heart, ChevronDown, ChevronUp, Cross } from 'lucide-react';

const RosarioSection = ({ rosarioHoje }) => {
  const [showInstructions, setShowInstructions] = useState(false);

  const oracoes = {
    sinalDaCruz: "Em nome do Pai, do Filho e do Espírito Santo. Amém.",
    credo: "Creio em Deus Pai todo-poderoso, Criador do céu e da terra. E em Jesus Cristo, seu único Filho, nosso Senhor, que foi concebido pelo poder do Espírito Santo, nasceu da Virgem Maria, padeceu sob Pôncio Pilatos, foi crucificado, morto e sepultado. Desceu à mansão dos mortos, ressuscitou ao terceiro dia, subiu aos céus, está sentado à direita de Deus Pai todo-poderoso, donde há de vir a julgar os vivos e os mortos. Creio no Espírito Santo, na Santa Igreja Católica, na comunhão dos santos, na remissão dos pecados, na ressurreição da carne e na vida eterna. Amém.",
    paiNosso: "Pai Nosso que estais nos céus, santificado seja o vosso nome, venha a nós o vosso reino, seja feita a vossa vontade assim na terra como no céu. O pão nosso de cada dia nos dai hoje, perdoai-nos as nossas ofensas assim como nós perdoamos a quem nos tem ofendido, e não nos deixeis cair em tentação, mas livrai-nos do mal. Amém.",
    aveMaria: "Ave Maria, cheia de graça, o Senhor é convosco, bendita sois vós entre as mulheres e bendito é o fruto do vosso ventre, Jesus. Santa Maria, Mãe de Deus, rogai por nós pecadores, agora e na hora da nossa morte. Amém.",
    gloria: "Glória ao Pai, ao Filho e ao Espírito Santo. Como era no princípio, agora e sempre. Amém.",
    salveRainha: "Salve Rainha, Mãe de misericórdia, vida, doçura e esperança nossa, salve! A vós bradamos, os degredados filhos de Eva. A vós suspiramos, gemendo e chorando neste vale de lágrimas. Eia, pois, advogada nossa, esses vossos olhos misericordiosos a nós volvei, e depois deste desterro, mostrai-nos Jesus, bendito fruto do vosso ventre, ó clemente, ó piedosa, ó doce sempre Virgem Maria. Rogai por nós, Santa Mãe de Deus, para que sejamos dignos das promessas de Cristo. Amém."
  };

  return (
    <div className="min-h-screen bg-white dark:bg-dark-bg">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-dark-card rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <Heart className="h-12 w-12 text-purple-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-2">Rosário do Dia</h2>
            <p className="text-gray-600 dark:text-gray-300">Mistérios para meditar hoje</p>
          </div>

          {/* Seção de Instruções */}
          <div className="mb-8">
            <button
              onClick={() => setShowInstructions(!showInstructions)}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-4 px-6 rounded-xl flex items-center justify-between transition-all duration-300 shadow-lg"
            >
              <span className="flex items-center">
                <Cross className="h-5 w-5 mr-2" />
                Como Rezar o Rosário
              </span>
              {showInstructions ? (
                <ChevronUp className="h-5 w-5" />
              ) : (
                <ChevronDown className="h-5 w-5" />
              )}
            </button>

            {showInstructions && (
              <div className="mt-4 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 space-y-6">
                {/* Introdução */}
                <div>
                  <h3 className="text-xl font-bold text-purple-600 dark:text-purple-400 mb-3">
                    Como Rezar o Santo Rosário
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    O Rosário é uma oração contemplativa que nos leva a meditar sobre os mistérios da vida de Jesus Cristo 
                    através dos olhos de Maria. É composto por 20 mistérios divididos em 4 grupos: Gozosos, Luminosos, 
                    Dolorosos e Gloriosos.
                  </p>
                </div>

                {/* Estrutura do Rosário */}
                <div>
                  <h4 className="text-lg font-semibold text-purple-600 dark:text-purple-400 mb-3">
                    Estrutura do Rosário
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white dark:bg-dark-card rounded-lg p-4 shadow-sm">
                      <h5 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">1. Introdução</h5>
                      <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                        <li>• Sinal da Cruz</li>
                        <li>• Credo</li>
                        <li>• Pai Nosso</li>
                        <li>• 3 Ave Marias</li>
                        <li>• Glória</li>
                      </ul>
                    </div>
                    <div className="bg-white dark:bg-dark-card rounded-lg p-4 shadow-sm">
                      <h5 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">2. Para cada mistério:</h5>
                      <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                        <li>• Anunciar o mistério</li>
                        <li>• 1 Pai Nosso</li>
                        <li>• 10 Ave Marias</li>
                        <li>• 1 Glória</li>
                        <li>• Oração de Fátima</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Orações */}
                <div>
                  <h4 className="text-lg font-semibold text-purple-600 dark:text-purple-400 mb-3">
                    Orações do Rosário
                  </h4>
                  <div className="space-y-4">
                    <div className="bg-white dark:bg-dark-card rounded-lg p-4 shadow-sm">
                      <h5 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">Sinal da Cruz</h5>
                      <p className="text-gray-600 dark:text-gray-300 text-sm italic">"{oracoes.sinalDaCruz}"</p>
                    </div>
                    
                    <div className="bg-white dark:bg-dark-card rounded-lg p-4 shadow-sm">
                      <h5 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">Pai Nosso</h5>
                      <p className="text-gray-600 dark:text-gray-300 text-sm italic">"{oracoes.paiNosso}"</p>
                    </div>
                    
                    <div className="bg-white dark:bg-dark-card rounded-lg p-4 shadow-sm">
                      <h5 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">Ave Maria</h5>
                      <p className="text-gray-600 dark:text-gray-300 text-sm italic">"{oracoes.aveMaria}"</p>
                    </div>
                    
                    <div className="bg-white dark:bg-dark-card rounded-lg p-4 shadow-sm">
                      <h5 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">Glória</h5>
                      <p className="text-gray-600 dark:text-gray-300 text-sm italic">"{oracoes.gloria}"</p>
                    </div>
                    
                    <div className="bg-white dark:bg-dark-card rounded-lg p-4 shadow-sm">
                      <h5 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">Salve Rainha</h5>
                      <p className="text-gray-600 dark:text-gray-300 text-sm italic">"{oracoes.salveRainha}"</p>
                    </div>
                  </div>
                </div>

                {/* Dicas */}
                <div>
                  <h4 className="text-lg font-semibold text-purple-600 dark:text-purple-400 mb-3">
                    Dicas para Rezar o Rosário
                  </h4>
                  <div className="bg-white dark:bg-dark-card rounded-lg p-4 shadow-sm">
                    <ul className="text-gray-600 dark:text-gray-300 space-y-2 text-sm">
                      <li>• <strong>Meditação:</strong> Concentre-se no mistério anunciado enquanto reza</li>
                      <li>• <strong>Ritmo:</strong> Reze com calma, sem pressa</li>
                      <li>• <strong>Ambiente:</strong> Escolha um local tranquilo e silencioso</li>
                      <li>• <strong>Frequência:</strong> Tente rezar pelo menos um terço por dia</li>
                      <li>• <strong>Intenções:</strong> Ofereça suas orações por intenções específicas</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Mistérios do Dia */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                {rosarioHoje.nome}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {new Date().toLocaleDateString('pt-BR', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
            </div>

            <div className="space-y-4">
              {rosarioHoje.misterios.map((misterio, index) => (
                <div key={index} className="bg-white dark:bg-dark-card rounded-lg p-4 shadow-sm">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-semibold">
                      {index + 1}
                    </div>
                    <p className="text-gray-800 dark:text-gray-100 font-medium">{misterio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RosarioSection;