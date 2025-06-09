import React from 'react';

const TemposLiturgicos = () => {
  const temposLiturgicos = [
    {
      nome: "Tempo do Advento",
      cor: "Roxo",
      periodo: "Quatro semanas antes do Natal",
      significado: "Tempo de preparação para a vinda de Jesus. O roxo simboliza a penitência e a espera, mas também a realeza de Cristo que vem como Rei.",
      descricao: "É um tempo de espera e preparação para celebrar o nascimento de Jesus. Durante este período, os fiéis são convidados a refletir sobre a vinda de Cristo em três dimensões: sua vinda histórica em Belém, sua vinda atual em nossas vidas e sua vinda gloriosa no fim dos tempos."
    },
    {
      nome: "Tempo do Natal",
      cor: "Branco",
      periodo: "Do Natal até a Festa do Batismo do Senhor",
      significado: "O branco representa a luz, a pureza e a alegria do nascimento de Jesus. É a cor da festa, da ressurreição e da vida nova.",
      descricao: "Celebramos o mistério da Encarnação, quando Deus se fez homem. Este tempo inclui as festas do Natal, da Sagrada Família, de Santa Maria Mãe de Deus e da Epifania, culminando com a Festa do Batismo do Senhor."
    },
    {
      nome: "Tempo Comum (Primeira Parte)",
      cor: "Verde",
      periodo: "Do Batismo do Senhor até a Quarta-feira de Cinzas",
      significado: "O verde simboliza a esperança, o crescimento e a vida. Representa o desenvolvimento da vida cristã e o caminho de fé.",
      descricao: "É um tempo de crescimento e amadurecimento na fé. As leituras bíblicas nos ajudam a conhecer melhor a vida e os ensinamentos de Jesus, e a aplicá-los em nossa vida cotidiana."
    },
    {
      nome: "Tempo da Quaresma",
      cor: "Roxo",
      periodo: "Da Quarta-feira de Cinzas até a Quinta-feira Santa",
      significado: "O roxo da Quaresma representa a penitência, a conversão e a preparação para a Páscoa. É um tempo de reflexão e mudança de vida.",
      descricao: "Período de 40 dias de preparação para a Páscoa. É um tempo de conversão, oração, jejum e caridade. Os fiéis são convidados a renovar sua vida cristã através da penitência e da reconciliação."
    },
    {
      nome: "Tríduo Pascal",
      cor: "Vermelho (Sexta-feira Santa) e Branco (Vigília Pascal e Domingo de Páscoa)",
      periodo: "Da Quinta-feira Santa até o Domingo de Páscoa",
      significado: "O vermelho representa o sangue de Cristo e seu sacrifício. O branco simboliza a luz da ressurreição e a vitória sobre a morte.",
      descricao: "O ponto central do ano litúrgico. Celebra a paixão, morte e ressurreição de Jesus. Começa com a Missa da Ceia do Senhor na Quinta-feira Santa, continua com a celebração da Paixão na Sexta-feira Santa, e culmina com a Vigília Pascal e o Domingo de Páscoa."
    },
    {
      nome: "Tempo Pascal",
      cor: "Branco",
      periodo: "Do Domingo de Páscoa até Pentecostes",
      significado: "O branco representa a luz da ressurreição, a alegria e a vida nova em Cristo.",
      descricao: "Celebramos a ressurreição de Jesus e sua vitória sobre a morte. Este tempo inclui a Ascensão do Senhor e culmina com Pentecostes, quando celebramos a descida do Espírito Santo sobre os apóstolos."
    },
    {
      nome: "Tempo Comum (Segunda Parte)",
      cor: "Verde",
      periodo: "De Pentecostes até o início do Advento",
      significado: "O verde continua simbolizando a esperança e o crescimento na fé, agora iluminados pelo Espírito Santo.",
      descricao: "É a continuação do tempo de crescimento na fé, agora com a luz do Espírito Santo recebido em Pentecostes. As leituras nos ajudam a viver como discípulos missionários de Cristo."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Tempos Litúrgicos e Suas Cores</h2>
      <div className="space-y-8">
        {temposLiturgicos.map((tempo, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <div 
                className="w-8 h-8 rounded-full mr-4"
                style={{
                  backgroundColor: 
                    tempo.cor === "Roxo" ? "#800080" :
                    tempo.cor === "Branco" ? "#FFFFFF" :
                    tempo.cor === "Verde" ? "#008000" :
                    tempo.cor === "Vermelho" ? "#FF0000" : "#000000",
                  border: tempo.cor === "Branco" ? "1px solid #ccc" : "none"
                }}
              />
              <h3 className="text-xl font-semibold">{tempo.nome}</h3>
            </div>
            <div className="space-y-2">
              <p className="text-gray-600"><span className="font-semibold">Período:</span> {tempo.periodo}</p>
              <p className="text-gray-600"><span className="font-semibold">Cor:</span> {tempo.cor}</p>
              <p className="text-gray-600"><span className="font-semibold">Significado da Cor:</span> {tempo.significado}</p>
              <p className="text-gray-700 mt-4">{tempo.descricao}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TemposLiturgicos; 