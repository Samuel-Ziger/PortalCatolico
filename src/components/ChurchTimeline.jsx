import React from 'react';
import { Book, Cross, Church, Users, Shield, Star, Clock, Heart } from 'lucide-react';

const ChurchTimeline = () => {
  const timelineEvents = [
    {
      id: 1,
      period: 'A Igreja Primitiva (30 d.C. – 313 d.C.)',
      title: 'Das catacumbas à fé indomável',
      icon: <Cross className="h-8 w-8 text-blue-500" />,
      content: [
        {
          year: '30 d.C.',
          event: 'Pentecostes e o Nascimento da Igreja',
          description: 'O Espírito Santo desce sobre os apóstolos, marcando o início da Igreja. Pedro faz seu primeiro sermão e cerca de 3.000 pessoas são batizadas.'
        },
        {
          year: '34 d.C.',
          event: 'Conversão de São Paulo',
          description: 'Saulo de Tarso encontra Jesus no caminho de Damasco, converte-se e torna-se o grande apóstolo dos gentios.'
        },
        {
          year: '49 d.C.',
          event: 'Concílio de Jerusalém',
          description: 'Primeiro concílio da Igreja, onde se decide que os gentios convertidos não precisam seguir todas as leis judaicas.'
        },
        {
          year: '64 d.C.',
          event: 'Primeira Perseguição Imperial',
          description: 'Nero acusa os cristãos pelo incêndio de Roma. São Pedro e São Paulo são martirizados em Roma.'
        },
        {
          year: '70 d.C.',
          event: 'Destruição do Templo de Jerusalém',
          description: 'O Templo é destruído pelos romanos, marcando o fim do judaísmo sacrificial e a separação definitiva entre judeus e cristãos.'
        },
        {
          year: '95 d.C.',
          event: 'Perseguição de Domiciano',
          description: 'Segunda grande perseguição imperial. São João é exilado em Patmos, onde escreve o Apocalipse.'
        },
        {
          year: '107 d.C.',
          event: 'Martírio de Santo Inácio',
          description: 'Bispo de Antioquia é martirizado em Roma. Suas cartas são fundamentais para a doutrina da Igreja primitiva.'
        },
        {
          year: '155 d.C.',
          event: 'Martírio de São Policarpo',
          description: 'Bispo de Esmirna e discípulo de São João é martirizado. Sua morte é um dos primeiros relatos detalhados de martírio.'
        },
        {
          year: '180 d.C.',
          event: 'Morte de Santo Irineu',
          description: 'Bispo de Lyon, combateu as heresias gnósticas e estabeleceu a doutrina da sucessão apostólica.'
        },
        {
          year: '202 d.C.',
          event: 'Perseguição de Sétimo Severo',
          description: 'Proíbe conversões ao cristianismo. Santa Perpétua e Santa Felicidade são martirizadas em Cartago.'
        },
        {
          year: '250 d.C.',
          event: 'Perseguição de Décio',
          description: 'Primeira perseguição sistemática em todo o império. Muitos cristãos apostatam, gerando controvérsia sobre o perdão dos lapsi.'
        },
        {
          year: '303 d.C.',
          event: 'Grande Perseguição de Diocleciano',
          description: 'Última e mais severa perseguição imperial. Milhares de cristãos são martirizados em todo o império.'
        },
        {
          year: '313 d.C.',
          event: 'Edito de Milão',
          description: 'Constantino e Licínio concedem liberdade religiosa aos cristãos, encerrando oficialmente as perseguições.'
        }
      ]
    },
    {
      id: 2,
      period: 'A Era Constantina e os Concílios (313 – 476)',
      title: 'A Igreja sai das sombras',
      icon: <Church className="h-8 w-8 text-green-500" />,
      content: [
        {
          year: '313 d.C.',
          event: 'Edito de Milão',
          description: 'Constantino e Licínio concedem liberdade religiosa aos cristãos, encerrando oficialmente as perseguições.'
        },
        {
          year: '325 d.C.',
          event: 'Primeiro Concílio de Niceia',
          description: 'Convocado por Constantino para resolver a controvérsia ariana. Estabelece o Credo Niceno e define a divindade de Cristo.'
        },
        {
          year: '330 d.C.',
          event: 'Fundação de Constantinopla',
          description: 'Constantino estabelece a nova capital do império, que se torna um importante centro cristão.'
        },
        {
          year: '337 d.C.',
          event: 'Morte de Constantino',
          description: 'O primeiro imperador cristão é batizado no leito de morte. Seus filhos dividem o império.'
        },
        {
          year: '341 d.C.',
          event: 'Concílio de Antioquia',
          description: 'Condena o arianismo e estabelece regras para a ordenação de bispos.'
        },
        {
          year: '347 d.C.',
          event: 'Nascimento de São João Crisóstomo',
          description: 'Futuro Patriarca de Constantinopla e Doutor da Igreja, conhecido por seus sermões e reformas.'
        },
        {
          year: '350 d.C.',
          event: 'Nascimento de Santo Ambrósio',
          description: 'Bispo de Milão e Doutor da Igreja, importante na conversão de Santo Agostinho.'
        },
        {
          year: '354 d.C.',
          event: 'Nascimento de Santo Agostinho',
          description: 'Um dos maiores teólogos da Igreja, autor de "Confissões" e "Cidade de Deus".'
        },
        {
          year: '381 d.C.',
          event: 'Primeiro Concílio de Constantinopla',
          description: 'Confirma o Credo Niceno e define a divindade do Espírito Santo, completando a doutrina da Trindade.'
        },
        {
          year: '386 d.C.',
          event: 'Conversão de Santo Agostinho',
          description: 'Após anos de busca, Agostinho se converte ao cristianismo sob a influência de Santo Ambrósio.'
        },
        {
          year: '390 d.C.',
          event: 'Penitência de Teodósio',
          description: 'O imperador Teodósio é excomungado por São Ambrósio após o massacre de Tessalônica, mostrando a independência da Igreja.'
        },
        {
          year: '397 d.C.',
          event: 'Morte de Santo Ambrósio',
          description: 'Um dos quatro grandes Doutores da Igreja Latina, conhecido por sua firmeza na defesa da fé.'
        },
        {
          year: '410 d.C.',
          event: 'Saque de Roma',
          description: 'Os visigodos saqueiam Roma, levando Agostinho a escrever "A Cidade de Deus" em resposta às acusações contra o cristianismo.'
        },
        {
          year: '430 d.C.',
          event: 'Morte de Santo Agostinho',
          description: 'Falece durante o cerco de Hipona pelos vândalos, deixando um legado teológico imenso.'
        },
        {
          year: '431 d.C.',
          event: 'Concílio de Éfeso',
          description: 'Define Maria como Theotokos (Mãe de Deus) e condena o nestorianismo.'
        },
        {
          year: '451 d.C.',
          event: 'Concílio de Calcedônia',
          description: 'Define a doutrina das duas naturezas de Cristo (divina e humana) em uma única pessoa.'
        },
        {
          year: '476 d.C.',
          event: 'Queda do Império Romano do Ocidente',
          description: 'O último imperador romano do ocidente é deposto, marcando o fim do império e o início da Idade Média.'
        }
      ]
    },
    {
      id: 3,
      period: 'A Igreja na Idade Média (476 – 1453)',
      title: 'Guardiã da fé e da civilização',
      icon: <Shield className="h-8 w-8 text-purple-500" />,
      content: [
        {
          year: '480 d.C.',
          event: 'Nascimento de São Bento',
          description: 'Fundador da Ordem Beneditina e pai do monaquismo ocidental. Sua Regra se torna base para a vida monástica.'
        },
        {
          year: '529 d.C.',
          event: 'Fundação de Monte Cassino',
          description: 'São Bento estabelece o primeiro mosteiro beneditino, que se torna modelo para a vida monástica ocidental.'
        },
        {
          year: '590 d.C.',
          event: 'Papa São Gregório Magno',
          description: 'Um dos maiores papas da história, reformador da liturgia e missionário. Envia Agostinho de Cantuária para evangelizar a Inglaterra.'
        },
        {
          year: '622 d.C.',
          event: 'Hégira de Maomé',
          description: 'Início do Islã, que se tornará um dos maiores desafios para a Igreja nos séculos seguintes.'
        },
        {
          year: '711 d.C.',
          event: 'Invasão Muçulmana da Espanha',
          description: 'Os mouros conquistam a Península Ibérica, iniciando um período de domínio islâmico que durará séculos.'
        },
        {
          year: '732 d.C.',
          event: 'Batalha de Tours',
          description: 'Carlos Martel detém o avanço muçulmano na Europa, preservando a cristandade ocidental.'
        },
        {
          year: '800 d.C.',
          event: 'Coroação de Carlos Magno',
          description: 'O Papa Leão III coroa Carlos Magno como Imperador do Sacro Império Romano, unindo poder temporal e espiritual.'
        },
        {
          year: '910 d.C.',
          event: 'Fundação de Cluny',
          description: 'Início da reforma monástica que levará ao renascimento espiritual da Igreja medieval.'
        },
        {
          year: '1054 d.C.',
          event: 'Grande Cisma do Oriente',
          description: 'Ruptura definitiva entre a Igreja Católica e a Igreja Ortodoxa, após séculos de tensões.'
        },
        {
          year: '1095 d.C.',
          event: 'Primeira Cruzada',
          description: 'Papa Urbano II convoca a Primeira Cruzada para libertar a Terra Santa do domínio muçulmano.'
        },
        {
          year: '1182 d.C.',
          event: 'Nascimento de São Francisco',
          description: 'Fundador da Ordem dos Frades Menores, que revoluciona a vida religiosa com seu ideal de pobreza e simplicidade.'
        },
        {
          year: '1198 d.C.',
          event: 'Papa Inocêncio III',
          description: 'Um dos papas mais poderosos da Idade Média, convoca o Quarto Concílio de Latrão e promove reformas importantes.'
        },
        {
          year: '1225 d.C.',
          event: 'Nascimento de São Tomás de Aquino',
          description: 'O maior teólogo medieval, autor da Suma Teológica e principal expoente da escolástica.'
        },
        {
          year: '1274 d.C.',
          event: 'Concílio de Lyon II',
          description: 'Tentativa de reunificação com os ortodoxos e definição da doutrina sobre o Purgatório.'
        },
        {
          year: '1309 d.C.',
          event: 'Papado de Avignon',
          description: 'Início do período em que os papas residem em Avignon, França, conhecido como "Cativeiro Babilônico".'
        },
        {
          year: '1378 d.C.',
          event: 'Grande Cisma do Ocidente',
          description: 'Período de divisão na Igreja com múltiplos papas reivindicando a autoridade.'
        },
        {
          year: '1414 d.C.',
          event: 'Concílio de Constança',
          description: 'Resolve o Grande Cisma do Ocidente e condena as heresias de John Wycliffe e Jan Hus.'
        },
        {
          year: '1453 d.C.',
          event: 'Queda de Constantinopla',
          description: 'Os turcos otomanos conquistam Constantinopla, marcando o fim do Império Bizantino e da Idade Média.'
        }
      ]
    },
    {
      id: 4,
      period: 'Reforma e Contrarreforma (séculos XVI–XVII)',
      title: 'Feridas e purificação: a crise da unidade',
      icon: <Book className="h-8 w-8 text-red-500" />,
      content: [
        {
          year: '1517 d.C.',
          event: 'As 95 Teses de Lutero',
          description: 'Martinho Lutero afixa suas 95 teses na porta da Igreja do Castelo de Wittenberg, criticando a venda de indulgências.'
        },
        {
          year: '1520 d.C.',
          event: 'Excomunhão de Lutero',
          description: 'O Papa Leão X emite a bula "Exsurge Domine" condenando as teses de Lutero, que a queima publicamente.'
        },
        {
          year: '1521 d.C.',
          event: 'Dieta de Worms',
          description: 'Lutero defende suas teses perante o imperador Carlos V e é declarado herege e fora da lei.'
        },
        {
          year: '1525 d.C.',
          event: 'Revolta dos Camponeses',
          description: 'Movimento social na Alemanha inspirado nas ideias reformistas, mas condenado por Lutero.'
        },
        {
          year: '1529 d.C.',
          event: 'Protesto de Speyer',
          description: 'Origem do termo "protestante", quando príncipes alemães protestam contra a decisão de revogar a tolerância religiosa.'
        },
        {
          year: '1534 d.C.',
          event: 'Ato de Supremacia',
          description: 'Henrique VIII rompe com Roma e se declara chefe da Igreja da Inglaterra.'
        },
        {
          year: '1536 d.C.',
          event: 'Institutos da Religião Cristã',
          description: 'João Calvino publica sua obra fundamental, estabelecendo as bases do calvinismo.'
        },
        {
          year: '1540 d.C.',
          event: 'Aprovação da Companhia de Jesus',
          description: 'O Papa Paulo III aprova a ordem dos jesuítas, fundada por Santo Inácio de Loyola.'
        },
        {
          year: '1545 d.C.',
          event: 'Abertura do Concílio de Trento',
          description: 'Início do concílio que definirá a resposta católica à Reforma e reformará a Igreja.'
        },
        {
          year: '1546 d.C.',
          event: 'Morte de Lutero',
          description: 'Martinho Lutero falece em Eisleben, sua cidade natal.'
        },
        {
          year: '1555 d.C.',
          event: 'Paz de Augsburgo',
          description: 'Estabelece o princípio "cujus regio, ejus religio" (a religião do príncipe é a religião do território).'
        },
        {
          year: '1563 d.C.',
          event: 'Encerramento do Concílio de Trento',
          description: 'Conclusão do concílio com importantes reformas e definições doutrinárias.'
        },
        {
          year: '1571 d.C.',
          event: 'Batalha de Lepanto',
          description: 'Vitória da Liga Santa sobre os otomanos, atribuída à intercessão de Nossa Senhora do Rosário.'
        },
        {
          year: '1572 d.C.',
          event: 'Massacre de São Bartolomeu',
          description: 'Violenta perseguição aos huguenotes (protestantes) na França.'
        },
        {
          year: '1582 d.C.',
          event: 'Reforma do Calendário',
          description: 'O Papa Gregório XIII implementa o calendário gregoriano para corrigir o calendário juliano.'
        },
        {
          year: '1598 d.C.',
          event: 'Edito de Nantes',
          description: 'Henrique IV da França concede liberdade religiosa aos huguenotes.'
        },
        {
          year: '1618 d.C.',
          event: 'Guerra dos Trinta Anos',
          description: 'Conflito religioso e político que devasta a Europa Central.'
        },
        {
          year: '1648 d.C.',
          event: 'Paz de Westfália',
          description: 'Fim da Guerra dos Trinta Anos e estabelecimento de novos princípios de soberania e tolerância religiosa.'
        }
      ]
    },
    {
      id: 5,
      period: 'Igreja e Modernidade (século XVIII–XIX)',
      title: 'Desafios modernos à fé eterna',
      icon: <Clock className="h-8 w-8 text-yellow-500" />,
      content: [
        {
          year: '1738 d.C.',
          event: 'Conversão de John Wesley',
          description: 'Fundador do metodismo, movimento que influenciará profundamente o protestantismo.'
        },
        {
          year: '1767 d.C.',
          event: 'Expulsão dos Jesuítas',
          description: 'A Companhia de Jesus é suprimida em vários países europeus, incluindo Portugal, França e Espanha.'
        },
        {
          year: '1773 d.C.',
          event: 'Supressão da Companhia de Jesus',
          description: 'O Papa Clemente XIV suprime a ordem dos jesuítas em todo o mundo, sob pressão das monarquias europeias.'
        },
        {
          year: '1789 d.C.',
          event: 'Revolução Francesa',
          description: 'Início de um período de perseguição à Igreja na França, com a nacionalização de bens eclesiásticos.'
        },
        {
          year: '1791 d.C.',
          event: 'Constituição Civil do Clero',
          description: 'O governo revolucionário francês tenta controlar a Igreja, causando um cisma.'
        },
        {
          year: '1798 d.C.',
          event: 'Prisão do Papa Pio VI',
          description: 'O Papa é preso pelos franceses e morre no exílio, marcando um dos períodos mais difíceis do papado.'
        },
        {
          year: '1801 d.C.',
          event: 'Concordata com Napoleão',
          description: 'Pio VII assina acordo com Napoleão para restabelecer a Igreja na França.'
        },
        {
          year: '1804 d.C.',
          event: 'Coroação de Napoleão',
          description: 'Napoleão se coroa imperador na presença do Papa Pio VII, demonstrando a tensão entre poder temporal e espiritual.'
        },
        {
          year: '1814 d.C.',
          event: 'Restauração da Companhia de Jesus',
          description: 'Pio VII restaura a ordem dos jesuítas, permitindo seu retorno à atividade missionária e educacional.'
        },
        {
          year: '1832 d.C.',
          event: 'Mirari Vos',
          description: 'Encíclica do Papa Gregório XVI condenando o liberalismo e o indiferentismo religioso.'
        },
        {
          year: '1854 d.C.',
          event: 'Dogma da Imaculada Conceição',
          description: 'Pio IX proclama o dogma da Imaculada Conceição de Maria.'
        },
        {
          year: '1864 d.C.',
          event: 'Syllabus Errorum',
          description: 'Pio IX publica lista de erros modernos, incluindo liberalismo, socialismo e racionalismo.'
        },
        {
          year: '1869 d.C.',
          event: 'Abertura do Concílio Vaticano I',
          description: 'Primeiro concílio ecumênico desde Trento, que definirá a infalibilidade papal.'
        },
        {
          year: '1870 d.C.',
          event: 'Dogma da Infalibilidade Papal',
          description: 'O Concílio Vaticano I define a infalibilidade papal em questões de fé e moral.'
        },
        {
          year: '1870 d.C.',
          event: 'Queda dos Estados Pontifícios',
          description: 'Roma é anexada ao Reino da Itália, pondo fim ao poder temporal dos papas.'
        },
        {
          year: '1878 d.C.',
          event: 'Papa Leão XIII',
          description: 'Início de um dos mais longos pontificados da história, marcado por importantes encíclicas sociais.'
        },
        {
          year: '1891 d.C.',
          event: 'Rerum Novarum',
          description: 'Encíclica de Leão XIII sobre a condição dos trabalhadores, marco da Doutrina Social da Igreja.'
        },
        {
          year: '1899 d.C.',
          event: 'Testem Benevolentiae',
          description: 'Leão XIII condena o "americanismo", uma forma de adaptação do catolicismo à cultura moderna.'
        }
      ]
    },
    {
      id: 6,
      period: 'Século XX e o Concílio Vaticano II',
      title: 'A Igreja no mundo contemporâneo',
      icon: <Users className="h-8 w-8 text-indigo-500" />,
      content: [
        {
          year: '1903 d.C.',
          event: 'Papa São Pio X',
          description: 'Início do pontificado que promoverá a reforma litúrgica e combaterá o modernismo.'
        },
        {
          year: '1907 d.C.',
          event: 'Pascendi Dominici Gregis',
          description: 'Encíclica de São Pio X condenando o modernismo como "síntese de todas as heresias".'
        },
        {
          year: '1914 d.C.',
          event: 'Primeira Guerra Mundial',
          description: 'Bento XV tenta mediar a paz e denuncia os horrores da guerra.'
        },
        {
          year: '1917 d.C.',
          event: 'Aparições de Fátima',
          description: 'Nossa Senhora aparece aos três pastorinhos em Portugal, com mensagens proféticas.'
        },
        {
          year: '1922 d.C.',
          event: 'Papa Pio XI',
          description: 'Assina a Concordata com a Itália e condena o nazismo e o comunismo.'
        },
        {
          year: '1929 d.C.',
          event: 'Tratado de Latrão',
          description: 'Criação do Estado do Vaticano e normalização das relações com a Itália.'
        },
        {
          year: '1937 d.C.',
          event: 'Mit Brennender Sorge',
          description: 'Encíclica de Pio XI condenando o nazismo e a perseguição à Igreja na Alemanha.'
        },
        {
          year: '1939 d.C.',
          event: 'Papa Pio XII',
          description: 'Guia a Igreja durante a Segunda Guerra Mundial e o início da Guerra Fria.'
        },
        {
          year: '1950 d.C.',
          event: 'Dogma da Assunção',
          description: 'Pio XII proclama o dogma da Assunção de Maria ao céu.'
        },
        {
          year: '1958 d.C.',
          event: 'Papa São João XXIII',
          description: 'Convocou o Concílio Vaticano II para atualizar a Igreja no mundo moderno.'
        },
        {
          year: '1962 d.C.',
          event: 'Abertura do Concílio Vaticano II',
          description: 'Início do concílio que renovará a vida da Igreja e sua relação com o mundo moderno.'
        },
        {
          year: '1963 d.C.',
          event: 'Papa São Paulo VI',
          description: 'Continua e conclui o Concílio Vaticano II, implementando suas reformas.'
        },
        {
          year: '1965 d.C.',
          event: 'Encerramento do Concílio',
          description: 'Conclusão do concílio com 16 documentos que renovam a vida da Igreja.'
        },
        {
          year: '1968 d.C.',
          event: 'Humanae Vitae',
          description: 'Encíclica de Paulo VI sobre a regulação da natalidade, reafirmando o ensino tradicional.'
        },
        {
          year: '1978 d.C.',
          event: 'Papa São João Paulo II',
          description: 'Um dos papas mais longevos, promove a nova evangelização e o diálogo inter-religioso.'
        },
        {
          year: '1981 d.C.',
          event: 'Tentativa de Assassinato',
          description: 'João Paulo II sobrevive a um atentado, atribuindo sua salvação à intercessão de Nossa Senhora de Fátima.'
        },
        {
          year: '1992 d.C.',
          event: 'Catecismo da Igreja Católica',
          description: 'Publicação do novo catecismo universal, fruto do Concílio Vaticano II.'
        },
        {
          year: '2000 d.C.',
          event: 'Jubileu do Ano 2000',
          description: 'Grande celebração do jubileu, com pedido de perdão pelos erros históricos da Igreja.'
        },
        {
          year: '2005 d.C.',
          event: 'Papa Bento XVI',
          description: 'Teólogo e continuador do trabalho de João Paulo II, renuncia em 2013.'
        },
        {
          year: '2013 d.C.',
          event: 'Papa Francisco',
          description: 'Primeiro papa jesuíta e latino-americano, promove a misericórdia e a ecologia integral.'
        }
      ]
    },
    {
      id: 7,
      period: 'A Igreja no Brasil',
      title: 'Uma Igreja missionária em terras brasileiras',
      icon: <Heart className="h-8 w-8 text-pink-500" />,
      content: [
        {
          year: '1500 d.C.',
          event: 'Primeira Missa no Brasil',
          description: 'Celebrada pelo frei Henrique de Coimbra na praia da Coroa Vermelha, em Porto Seguro, durante a expedição de Pedro Álvares Cabral.'
        },
        {
          year: '1549 d.C.',
          event: 'Chegada dos Jesuítas',
          description: 'Padre Manuel da Nóbrega e outros jesuítas chegam com Tomé de Sousa, primeiro governador-geral do Brasil.'
        },
        {
          year: '1554 d.C.',
          event: 'Fundação de São Paulo',
          description: 'Padre José de Anchieta e Manuel da Nóbrega fundam o Colégio de São Paulo, origem da cidade de São Paulo.'
        },
        {
          year: '1557 d.C.',
          event: 'Primeiro Sínodo Diocesano',
          description: 'Realizado em Salvador, estabelece as primeiras diretrizes para a organização da Igreja no Brasil.'
        },
        {
          year: '1671 d.C.',
          event: 'Aparição de Nossa Senhora Aparecida',
          description: 'Pescadores encontram a imagem de Nossa Senhora da Conceição Aparecida no rio Paraíba do Sul.'
        },
        {
          year: '1745 d.C.',
          event: 'Criação da Diocese de São Paulo',
          description: 'Separação da Diocese de São Paulo da Arquidiocese de São Salvador da Bahia.'
        },
        {
          year: '1759 d.C.',
          event: 'Expulsão dos Jesuítas',
          description: 'Marquês de Pombal expulsa os jesuítas do Brasil, causando grande impacto na educação e evangelização.'
        },
        {
          year: '1822 d.C.',
          event: 'Independência do Brasil',
          description: 'A Igreja se adapta ao novo regime político, mantendo o padroado régio até a proclamação da República.'
        },
        {
          year: '1890 d.C.',
          event: 'Separação Igreja-Estado',
          description: 'Decreto do governo provisório da República separa a Igreja do Estado, pondo fim ao padroado.'
        },
        {
          year: '1908 d.C.',
          event: 'Congresso Eucarístico',
          description: 'Primeiro Congresso Eucarístico Nacional realizado no Rio de Janeiro.'
        },
        {
          year: '1930 d.C.',
          event: 'CNBB',
          description: 'Criação da Conferência Nacional dos Bispos do Brasil, fortalecendo a unidade da Igreja no país.'
        },
        {
          year: '1931 d.C.',
          event: 'Proclamação de Nossa Senhora Aparecida',
          description: 'Papa Pio XI declara Nossa Senhora Aparecida Padroeira do Brasil.'
        },
        {
          year: '1952 d.C.',
          event: 'Inauguração da Basílica de Aparecida',
          description: 'Início da construção da atual Basílica Nacional de Nossa Senhora Aparecida.'
        },
        {
          year: '1964 d.C.',
          event: 'CNBB e Ditadura',
          description: 'A CNBB se posiciona contra a ditadura militar, defendendo os direitos humanos e a justiça social.'
        },
        {
          year: '1980 d.C.',
          event: 'Visita de João Paulo II',
          description: 'Primeira visita do Papa João Paulo II ao Brasil, com grande impacto na Igreja brasileira.'
        },
        {
          year: '1991 d.C.',
          event: 'Campanha da Fraternidade',
          description: 'Tema "Fraternidade e o Mundo do Trabalho" marca o engajamento social da Igreja.'
        },
        {
          year: '2007 d.C.',
          event: 'V Conferência de Aparecida',
          description: 'Reunião do CELAM em Aparecida, com a presença do Papa Bento XVI, define novas diretrizes para a Igreja na América Latina.'
        },
        {
          year: '2013 d.C.',
          event: 'Jornada Mundial da Juventude',
          description: 'Papa Francisco visita o Brasil para a JMJ no Rio de Janeiro, marcando uma nova etapa na evangelização da juventude.'
        },
        {
          year: '2016 d.C.',
          event: 'Ano Jubilar de Aparecida',
          description: 'Celebração dos 300 anos do encontro da imagem de Nossa Senhora Aparecida.'
        },
        {
          year: '2019 d.C.',
          event: 'Sínodo da Amazônia',
          description: 'Papa Francisco convoca sínodo especial para a região Pan-Amazônica, com forte participação brasileira.'
        }
      ]
    },
    {
      id: 8,
      period: 'Dias Atuais',
      title: 'A Igreja no século XXI',
      icon: <Clock className="h-8 w-8 text-blue-500" />,
      content: [
        {
          year: '2022 d.C.',
          event: 'Morte do Papa Emérito Bento XVI',
          description: 'Falece o Papa Emérito Bento XVI, que havia renunciado ao papado em 2013, marcando um momento histórico na Igreja Católica.'
        },
        {
          year: '2023 d.C.',
          event: 'Décimo Ano do Pontificado de Francisco',
          description: 'Papa Francisco completa dez anos de pontificado, marcado por reformas na Cúria Romana, ênfase na misericórdia e cuidado com os mais pobres.'
        },
        {
          year: '2025 d.C.',
          event: 'Morte do Papa Francisco',
          description: 'Falece o Papa Francisco, que liderou a Igreja por 12 anos, sendo conhecido por seu compromisso com os pobres, a ecologia e a reforma da Igreja.'
        },
        {
          year: '2025 d.C.',
          event: 'Eleição do Novo Papa',
          description: 'Cardeais se reúnem em conclave e elegem um novo Papa, que assume o desafio de continuar a missão evangelizadora da Igreja no mundo contemporâneo.'
        }
      ]
    }
  ];

  return (
    <div className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Sobre a Igreja
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Uma jornada através dos séculos da história da Igreja Católica
          </p>
        </div>

        <div className="space-y-12">
          {timelineEvents.map((event, index) => (
            <div
              key={event.id}
              className={`relative ${
                index % 2 === 0 ? 'lg:ml-12' : 'lg:mr-12'
              }`}
            >
              {/* Linha do tempo */}
              <div className="hidden lg:block absolute top-0 bottom-0 left-1/2 w-0.5 bg-blue-200 dark:bg-blue-800" />
              
              {/* Ponto na linha do tempo */}
              <div className="hidden lg:block absolute top-8 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500" />

              <div className={`relative bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 ${
                index % 2 === 0 ? 'lg:ml-8' : 'lg:mr-8'
              }`}>
                <div className="flex items-center mb-4">
                  {event.icon}
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {event.period}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">
                      {event.title}
                    </p>
                  </div>
                </div>

                <ul className="space-y-4">
                  {event.content.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex flex-col text-gray-600 dark:text-gray-400"
                    >
                      <div className="flex items-start">
                        <span className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-2">
                          <span className="text-xs text-blue-600 dark:text-blue-400">
                            {itemIndex + 1}
                          </span>
                        </span>
                        <div>
                          <div className="flex items-center">
                            <span className="font-semibold text-blue-600 dark:text-blue-400 mr-2">
                              {item.year}:
                            </span>
                            <span className="font-medium text-gray-900 dark:text-white">
                              {item.event}
                            </span>
                          </div>
                          <p className="ml-7 text-sm mt-1">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChurchTimeline; 