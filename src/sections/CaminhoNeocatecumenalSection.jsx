import React from 'react';
import { Footprints, Users, BookOpen, UserCircle, CalendarDays, Award } from 'lucide-react';

const CaminhoNeocatecumenalSection = () => {
  const timelineEvents = [
    { year: "1964", event: "Início do Caminho nas favelas de Palomeras Altas, Madrid, Espanha, por Kiko Argüello e Carmen Hernández." },
    { year: "1968", event: "Chegada a Roma e início da primeira comunidade na paróquia de Nossa Senhora do Santíssimo Sacramento e Santos Mártires Canadenses." },
    { year: "1974", event: "O Papa Paulo VI reconhece o Caminho como um fruto do Concílio Vaticano II." },
    { year: "1990", event: "O Papa João Paulo II escreve a carta \"Ogniqualvolta\", reconhecendo oficialmente o Caminho como um itinerário de formação católica." },
    { year: "2002", event: "Aprovação \"ad experimentum\" dos Estatutos do Caminho Neocatecumenal." },
    { year: "2008", event: "Aprovação definitiva dos Estatutos do Caminho Neocatecumenal pela Santa Sé." },
    { year: "2011", event: "Aprovação do Diretório Catequético do Caminho Neocatecumenal." },
    { year: "2016", event: "Falecimento de Carmen Hernández." },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-dark-bg">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="text-center mb-12">
            <Footprints className="h-20 w-20 text-blue-600 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">O Caminho Neocatecumenal</h1>
            <p className="text-xl md:text-2xl text-gray-600">Um itinerário de formação católica pós-batismal</p>
          </div>

          <div className="space-y-12">
            <section className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 md:p-8 rounded-xl shadow-md">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 pt-1">
                  <Users className="h-10 w-10 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-3">O Que é?</h2>
                  <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                    O Caminho Neocatecumenal é um itinerário de formação católica, vivido em pequenas comunidades dentro das paróquias.
                    Ele serve para redescobrir e viver em plenitude as riquezas do Batismo. Propõe um caminho de conversão gradual através
                    da Palavra de Deus, da Liturgia e da vida em comunidade, conduzindo à maturidade da fé.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 md:p-8 rounded-xl shadow-md">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 pt-1">
                  <BookOpen className="h-10 w-10 text-purple-600" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-3">Origem e Propósito</h2>
                  <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                    Iniciado na Espanha em 1964 por Kiko Argüello e Carmen Hernández, o Caminho Neocatecumenal
                    surgiu como resposta à necessidade de uma nova evangelização, especialmente para os afastados da Igreja.
                    Seu propósito é formar cristãos adultos na fé, capazes de dar testemunho de Cristo Ressuscitado no mundo de hoje.
                    Os Estatutos do Caminho Neocatecumenal foram aprovados definitivamente pela Santa Sé em 2008.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-gradient-to-r from-pink-50 to-red-50 p-6 md:p-8 rounded-xl shadow-md">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6 text-center">Os Iniciadores</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center space-x-3 mb-3">
                    <UserCircle className="h-8 w-8 text-red-500" />
                    <h3 className="text-xl font-medium text-gray-800">Kiko Argüello</h3>
                  </div>
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                    Francisco José Gómez Argüello Wirtz (Kiko Argüello) nasceu em León, Espanha, em 1939. Pintor e músico,
                    após uma crise existencial, descobriu a presença de Deus no sofrimento dos pobres. Inspirado pelo Evangelho
                    e pela renovação do Concílio Vaticano II, iniciou o Caminho Neocatecumenal junto com Carmen Hernández.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center space-x-3 mb-3">
                    <UserCircle className="h-8 w-8 text-red-500" />
                    <h3 className="text-xl font-medium text-gray-800">Carmen Hernández</h3>
                  </div>
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                    María Carmen Hernández Barrera (1930-2016) nasceu em Ólvega, Espanha. Licenciada em Química e Teologia,
                    dedicou sua vida à evangelização. Seu profundo conhecimento teológico e sua paixão pela missão foram
                    fundamentais para a elaboração da síntese catequética do Caminho Neocatecumenal.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 md:p-8 rounded-xl shadow-md">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6 text-center">Pilares do Caminho</h2>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="p-4 bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow">
                  <Award className="h-10 w-10 text-blue-500 mx-auto mb-2" />
                  <h3 className="text-xl font-medium text-gray-800 mb-1">Palavra</h3>
                  <p className="text-gray-600 text-sm md:text-base">Escuta e meditação da Palavra de Deus, especialmente nas celebrações semanais.</p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow">
                  <Award className="h-10 w-10 text-purple-500 mx-auto mb-2" />
                  <h3 className="text-xl font-medium text-gray-800 mb-1">Liturgia</h3>
                  <p className="text-gray-600 text-sm md:text-base">Participação ativa na Eucaristia dominical e outras celebrações litúrgicas renovadas.</p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow">
                  <Award className="h-10 w-10 text-pink-500 mx-auto mb-2" />
                  <h3 className="text-xl font-medium text-gray-800 mb-1">Comunidade</h3>
                  <p className="text-gray-600 text-sm md:text-base">Vida fraterna em pequena comunidade, onde se experimenta o amor e o perdão.</p>
                </div>
              </div>
            </section>

            <section className="bg-gradient-to-r from-green-50 to-teal-50 p-6 md:p-8 rounded-xl shadow-md">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-8 text-center">Linha do Tempo</h2>
              <div className="relative">
                <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-1 bg-teal-300 transform -translate-x-1/2"></div>
                {timelineEvents.map((item, index) => (
                  <div key={index} className={`mb-8 flex md:items-center w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    <div className="hidden md:block w-1/2"></div>
                    <div className="hidden md:block relative">
                      <div className="absolute w-5 h-5 bg-teal-500 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-4 border-white shadow-md"></div>
                    </div>
                    <div className="w-full md:w-1/2 bg-white p-4 rounded-lg shadow-md md:ml-4 md:mr-4">
                      <div className="flex items-center mb-2">
                        <CalendarDays className="h-6 w-6 text-teal-600 mr-2" />
                        <h3 className="text-lg font-semibold text-teal-700">{item.year}</h3>
                      </div>
                      <p className="text-gray-700 text-sm md:text-base leading-relaxed">{item.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <div className="text-center mt-12">
              <p className="text-gray-700 italic text-base md:text-lg">
                "O Caminho Neocatecumenal é um dom do Espírito Santo para a Igreja do nosso tempo." - São João Paulo II
              </p>
            </div>
            
            <div className="mt-10 text-center">
              <img  
                className="mx-auto rounded-lg shadow-lg w-full max-w-md h-auto object-cover"
                alt="Símbolo do Caminho Neocatecumenal, uma menorá com uma cruz e um peixe."
               src="https://images.unsplash.com/photo-1693982892768-de562e74de42" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaminhoNeocatecumenalSection;