import React, { useState, useRef } from 'react';
import { Book, Heart, Cross, Users, Shield, Star } from 'lucide-react';
import { Card } from '@components/ui/card';

const EnsinamentosSection = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const explicacaoRef = useRef(null);

  const handleCategoryClick = (categoria) => {
    setSelectedCategory(categoria);
    // Pequeno delay para garantir que o conteúdo foi renderizado
    setTimeout(() => {
      explicacaoRef.current?.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }, 100);
  };

  const categorias = [
    {
      id: 'fundamentos',
      titulo: 'Fundamentos da Fé Cristã',
      icone: <Book className="h-8 w-8 text-blue-500" />,
      descricao: 'Os princípios básicos da fé católica',
      conteudo: [
        {
          titulo: 'O Credo (Símbolo dos Apóstolos)',
          paragrafos: 'Catecismo §§185–1065',
          explicacao: `O Credo é a síntese viva da fé cristã, transmitida desde os tempos apostólicos. Ele é dividido em três partes principais:

1. A primeira parte fala de Deus Pai e da obra da criação. Afirma nossa fé em Deus, criador do céu e da terra, de todas as coisas visíveis e invisíveis. Revela que o homem foi criado à imagem e semelhança de Deus, com dignidade e liberdade.

2. A segunda parte professa nossa fé em Jesus Cristo, Filho único de Deus. Confessa sua encarnação, paixão, morte, ressurreição e ascensão. Afirma que Ele é verdadeiro Deus e verdadeiro homem, que veio para nos salvar e nos reconciliar com o Pai.

3. A terceira parte declara nossa fé no Espírito Santo, na Igreja, na comunhão dos santos, na remissão dos pecados, na ressurreição da carne e na vida eterna. Mostra como o Espírito Santo age na Igreja e na vida dos fiéis.

O Credo não é apenas uma lista de verdades, mas um caminho de vida que nos leva a uma relação pessoal com Deus Trino.`,
          baseBiblica: 'João 3:16, Romanos 10:9, 1 Coríntios 15:3-4'
        },
        {
          titulo: 'A Trindade: Pai, Filho e Espírito Santo',
          paragrafos: '§§232–267',
          explicacao: `A Santíssima Trindade é o mistério central da fé cristã e a fonte de todos os outros mistérios. É a verdade mais fundamental e essencial da nossa fé.

1. O Pai é a primeira Pessoa da Trindade. É o princípio sem princípio, a origem de tudo. É amor que se doa eternamente ao Filho e ao Espírito Santo. É o criador do universo e o Pai de todos os homens.

2. O Filho é a segunda Pessoa da Trindade. É gerado, não criado, consubstancial ao Pai. Por Ele todas as coisas foram feitas. Encarnou-se no seio da Virgem Maria e se fez homem para nossa salvação. É o Verbo eterno do Pai.

3. O Espírito Santo é a terceira Pessoa da Trindade. Procede do Pai e do Filho. É o amor que une o Pai e o Filho. É o santificador, o doador de vida, o consolador prometido por Jesus. Age na Igreja e nos corações dos fiéis.

As três Pessoas são distintas, mas formam uma única natureza divina. São iguais em dignidade e glória. Cada uma tem sua missão específica na história da salvação, mas agem sempre em unidade.`,
          baseBiblica: 'Mateus 28:19, João 14:26, 2 Coríntios 13:13'
        },
        {
          titulo: 'Revelação de Deus e a Sagrada Escritura',
          paragrafos: '§§50–141',
          explicacao: `A Revelação é o ato pelo qual Deus se dá a conhecer aos homens. É um diálogo de amor que Deus estabelece com a humanidade.

1. Deus se revela através da criação: o universo, com sua ordem e beleza, testemunha a existência e a sabedoria de Deus. A natureza é o primeiro livro da revelação.

2. Deus se revela na história: através dos patriarcas, profetas e reis, Deus vai preparando o caminho para a vinda do Messias. A história do povo de Israel é uma história de salvação.

3. A revelação plena acontece em Jesus Cristo: Ele é a Palavra de Deus feita carne. Em sua pessoa, palavras e ações, Deus se revela completamente. Jesus é a chave para entender toda a Escritura.

4. A Bíblia é a Palavra de Deus inspirada: escrita por autores humanos sob a ação do Espírito Santo. É composta pelo Antigo e Novo Testamento. É o livro sagrado que contém a verdade revelada por Deus.

5. A Tradição e o Magistério: a Igreja, guiada pelo Espírito Santo, guarda e transmite fielmente a revelação divina. O Magistério tem a missão de interpretar autenticamente a Palavra de Deus.`,
          baseBiblica: '2 Timóteo 3:16-17, Hebreus 1:1-2, João 1:1-14'
        }
      ]
    },
    {
      id: 'oracao',
      titulo: 'Vida de Oração',
      icone: <Heart className="h-8 w-8 text-red-500" />,
      descricao: 'Aprenda sobre os diferentes tipos de oração',
      conteudo: [
        {
          titulo: 'Tipos de Oração',
          paragrafos: '§§2558–2758',
          explicacao: `A oração é o diálogo pessoal com Deus, é o encontro do coração do homem com o coração de Deus. Existem diferentes formas de oração, cada uma com sua riqueza específica:

1. Adoração: é o reconhecimento da grandeza de Deus e da nossa pequenez. É a atitude de humildade diante do Criador. Inclui gestos como ajoelhar-se, prostrar-se, levantar as mãos.

2. Petição: é o pedido humilde das nossas necessidades. Podemos pedir por nós mesmos (oração de petição) ou pelos outros (oração de intercessão). É confiar que Deus cuida de nós.

3. Ação de Graças: é o reconhecimento dos dons recebidos de Deus. É agradecer por tudo o que somos e temos. É uma atitude de gratidão que brota do coração.

4. Louvor: é celebrar a grandeza de Deus, suas maravilhas e seu amor. É exaltar suas qualidades e atributos. É uma oração que brota da alegria do coração.

5. Contemplação: é o olhar fixo em Deus, em silêncio e adoração. É deixar-se amar por Deus e corresponder a esse amor. É a forma mais elevada de oração.

A oração deve ser regular, perseverante e confiante. É um diálogo que transforma nossa vida e nos aproxima de Deus.`,
          baseBiblica: 'Filipenses 4:6-7, 1 Tessalonicenses 5:17-18, Tiago 5:13-16'
        },
        {
          titulo: 'Oração do Pai Nosso',
          paragrafos: '§§2759–2865',
          explicacao: `O Pai Nosso é a oração que Jesus nos ensinou. É o modelo perfeito de oração cristã, contendo em si todas as dimensões da oração:

1. "Pai Nosso que estais nos céus": Invocamos a Deus como Pai, reconhecendo nossa filiação divina e a fraternidade universal. O céu nos lembra que Deus transcende tudo.

2. "Santificado seja o vosso nome": Pedimos que o nome de Deus seja reconhecido como santo. É um pedido de que Deus seja conhecido e amado por todos.

3. "Venha a nós o vosso Reino": Desejamos que o Reino de Deus se estabeleça em nossos corações e no mundo. É um pedido de conversão e transformação.

4. "Seja feita a vossa vontade": Submetemos nossa vontade à de Deus. É um ato de confiança e abandono nas mãos do Pai.

5. "O pão nosso de cada dia nos dai hoje": Pedimos o necessário para viver, tanto material quanto espiritualmente. É um pedido de confiança na providência divina.

6. "Perdoai-nos as nossas ofensas": Reconhecemos nossos pecados e pedimos perdão. É um ato de humildade e arrependimento.

7. "Não nos deixeis cair em tentação": Pedimos força para resistir ao mal. É um pedido de proteção e graça.

8. "Mas livrai-nos do mal": Pedimos libertação do poder do mal. É um pedido de salvação e proteção.

O Pai Nosso nos ensina a orar com confiança filial, reconhecendo nossa dependência de Deus e nossa fraternidade universal.`,
          baseBiblica: 'Mateus 6:9-13, Lucas 11:2-4'
        },
        {
          titulo: 'Maria e a Oração',
          paragrafos: '§§2673–2682',
          explicacao: `Maria é modelo e mestra de oração. Sua vida foi uma constante oração, um diálogo contínuo com Deus:

1. Maria como modelo de oração:
   - Sua vida foi marcada pelo silêncio e pela escuta da Palavra
   - Guardava tudo em seu coração, meditando sobre os mistérios de Deus
   - Sua oração era humilde, confiante e perseverante
   - Era uma oração que brotava da fé e do amor

2. O Rosário como escola de oração:
   - É uma oração bíblica, centrada nos mistérios de Cristo
   - Combina oração vocal e meditação
   - Nos ajuda a contemplar a vida de Jesus com os olhos de Maria
   - É uma escola de vida cristã e de santidade

3. Maria como intercessora:
   - Reza por nós junto a seu Filho
   - Apresenta nossas necessidades a Deus
   - Nos ajuda a crescer na fé e no amor
   - Nos conduz a Jesus

4. As principais orações marianas:
   - Ave Maria: sauda a Mãe de Deus e pede sua intercessão
   - Magnificat: canto de louvor e ação de graças
   - Salve Rainha: pede a proteção da Mãe da Igreja
   - Lembrai-vos: invoca a intercessão da Virgem

Maria nos ensina a orar com o coração, a confiar em Deus e a dizer sempre "sim" à sua vontade.`,
          baseBiblica: 'Lucas 1:46-55, João 2:1-11, Atos 1:14'
        }
      ]
    },
    {
      id: 'sacramentos',
      titulo: 'Liturgia e Sacramentos',
      icone: <Cross className="h-8 w-8 text-purple-500" />,
      descricao: 'Os sete sacramentos e a liturgia da Igreja',
      conteudo: [
        {
          titulo: 'Os Sete Sacramentos',
          paragrafos: '§§1113–1666',
          explicacao: `Os sacramentos são sinais visíveis da graça invisível de Deus. São sete, instituídos por Cristo para santificar os homens:

1. Batismo:
   - É o sacramento da regeneração pela água e pelo Espírito
   - Nos faz filhos de Deus e membros da Igreja
   - Apaga o pecado original e nos dá a vida divina
   - É o primeiro sacramento e a porta para os outros

2. Confirmação:
   - Completa a graça do Batismo
   - Nos fortalece com os dons do Espírito Santo
   - Nos torna testemunhas de Cristo
   - Nos compromete com a missão da Igreja

3. Eucaristia:
   - É o sacramento do Corpo e Sangue de Cristo
   - É o memorial da paixão, morte e ressurreição
   - É o banquete do amor de Deus
   - É a fonte e o ápice da vida cristã

4. Penitência:
   - É o sacramento do perdão dos pecados
   - Reconcilia com Deus e com a Igreja
   - Concede a paz e a alegria da consciência
   - É um encontro de misericórdia

5. Unção dos Enfermos:
   - Conforta os doentes e sofredores
   - Une ao sofrimento de Cristo
   - Prepara para a passagem para a vida eterna
   - É um sacramento de cura e esperança

6. Ordem:
   - Configura a Cristo Sacerdote
   - Concede o poder de celebrar os sacramentos
   - Ordena ao serviço da Igreja
   - É um sacramento de serviço

7. Matrimônio:
   - Une um homem e uma mulher em aliança indissolúvel
   - É sinal do amor de Cristo pela Igreja
   - Ordena à procriação e educação dos filhos
   - É um sacramento de amor e vida

Os sacramentos são meios eficazes de graça, que nos santificam e nos unem a Cristo.`,
          baseBiblica: 'Mateus 28:19, João 6:53-58, João 20:22-23'
        },
        {
          titulo: 'A Santa Missa',
          paragrafos: '§§1346–1419',
          explicacao: `A Missa é o memorial do sacrifício de Cristo na cruz. É a celebração mais importante da Igreja, composta por duas partes principais:

1. Liturgia da Palavra:
   - Primeira Leitura: geralmente do Antigo Testamento
   - Salmo Responsorial: resposta à Palavra de Deus
   - Segunda Leitura: geralmente das cartas apostólicas
   - Evangelho: proclamação da vida e ensinamentos de Jesus
   - Homilia: explicação e atualização da Palavra
   - Profissão de Fé: renovação do Credo
   - Oração dos Fiéis: súplicas pela Igreja e pelo mundo

2. Liturgia Eucarística:
   - Apresentação das Ofertas: pão e vinho são levados ao altar
   - Oração Eucarística: ação de graças e consagração
   - Consagração: transformação do pão e vinho no Corpo e Sangue de Cristo
   - Pai Nosso: oração da família de Deus
   - Rito da Paz: sinal de reconciliação
   - Comunhão: receber o Corpo de Cristo
   - Bênção Final: envio em missão

3. Sentidos da Missa:
   - Memorial: torna presente o sacrifício de Cristo
   - Ação de Graças: louva a Deus por seus dons
   - Comunhão: une os fiéis a Cristo e entre si
   - Banquete: alimenta com o pão da vida
   - Sacrifício: oferece a Deus o sacrifício perfeito

A Missa é o centro da vida cristã, onde celebramos e vivemos o mistério da nossa salvação.`,
          baseBiblica: 'Lucas 22:19-20, 1 Coríntios 11:23-26, Hebreus 9:11-14'
        },
        {
          titulo: 'A Igreja na Liturgia',
          paragrafos: '§§1135–1209',
          explicacao: `A liturgia é a celebração pública do mistério de Cristo. É a ação sagrada por excelência, onde a Igreja exerce sua função sacerdotal:

1. Natureza da Liturgia:
   - É ação de Cristo e da Igreja
   - É celebração do mistério pascal
   - É fonte e ápice da vida da Igreja
   - É encontro com Deus na fé

2. Participantes da Liturgia:
   - Cristo: é o principal celebrante
   - Bispos e Sacerdotes: presidem as celebrações
   - Diáconos: servem na liturgia
   - Fiéis: participam ativamente
   - Ministros Extraordinários: auxiliam quando necessário

3. Elementos da Liturgia:
   - Palavra de Deus: proclamada e meditada
   - Oração: diálogo com Deus
   - Sinais e Símbolos: expressam realidades espirituais
   - Música e Canto: elevam o coração a Deus
   - Gestos e Posturas: expressam a atitude interior

4. Anos Litúrgicos:
   - Tempo do Advento: preparação para o Natal
   - Tempo do Natal: celebração do nascimento de Jesus
   - Tempo da Quaresma: preparação para a Páscoa
   - Tempo Pascal: celebração da ressurreição
   - Tempo Comum: vivência do mistério de Cristo

5. Espaço Litúrgico:
   - Altar: centro da celebração eucarística
   - Ambão: lugar da proclamação da Palavra
   - Tabernáculo: reserva do Santíssimo
   - Pia Batismal: lugar do Batismo
   - Confessionário: lugar da reconciliação

A liturgia é a fonte da vida cristã e a escola da fé. Através dela, a Igreja celebra e vive o mistério de Cristo.`,
          baseBiblica: 'Atos 2:42-47, 1 Coríntios 14:26-33, Colossenses 3:16'
        }
      ]
    },
    {
      id: 'moral',
      titulo: 'Moral Cristã e Mandamentos',
      icone: <Shield className="h-8 w-8 text-green-500" />,
      descricao: 'Os mandamentos e a vida moral cristã',
      conteudo: [
        {
          titulo: 'Os Dez Mandamentos',
          paragrafos: '§§2052–2557',
          explicacao: `Os Dez Mandamentos são a expressão da lei moral natural, dados por Deus a Moisés no Monte Sinai. São a base da moral cristã:

1. "Amar a Deus sobre todas as coisas":
   - Reconhecer Deus como único Senhor
   - Adorar só a Ele
   - Não ter outros deuses
   - Não fazer imagens para adorar
   - Não usar o nome de Deus em vão
   - Guardar o domingo e festas de guarda

2. "Não pecar contra a castidade":
   - Respeitar o corpo como templo do Espírito
   - Viver a pureza de coração
   - Guardar a castidade segundo o estado de vida
   - Respeitar o matrimônio
   - Evitar a pornografia e impureza

3. "Não matar":
   - Respeitar a vida desde a concepção
   - Cuidar da saúde física e mental
   - Evitar o aborto e eutanásia
   - Promover a paz e justiça
   - Respeitar a dignidade humana

4. "Não roubar":
   - Respeitar a propriedade alheia
   - Trabalhar honestamente
   - Pagar salários justos
   - Ser generoso com os pobres
   - Cuidar da criação

5. "Não levantar falso testemunho":
   - Falar a verdade
   - Respeitar a reputação alheia
   - Evitar a calúnia e difamação
   - Ser honesto nas relações
   - Promover a justiça

6. "Não desejar a mulher do próximo":
   - Respeitar o matrimônio alheio
   - Guardar a pureza do coração
   - Evitar pensamentos impuros
   - Cultivar a virtude da castidade
   - Respeitar a dignidade da pessoa

7. "Não cobiçar as coisas alheias":
   - Contentar-se com o que se tem
   - Evitar a inveja e cobiça
   - Ser generoso e desapegado
   - Buscar a pobreza de espírito
   - Confiar na providência divina

Os mandamentos são caminho de liberdade e vida, que nos levam à felicidade verdadeira.`,
          baseBiblica: 'Êxodo 20:1-17, Deuteronômio 5:6-21, Mateus 5:17-20'
        },
        {
          titulo: 'A Vida em Cristo',
          paragrafos: '§§1691–2051',
          explicacao: `A vida cristã é uma resposta ao amor de Deus, um caminho de santidade e perfeição:

1. Liberdade e Responsabilidade:
   - Somos livres para escolher o bem
   - A liberdade é para amar e servir
   - Cada escolha tem consequências
   - A liberdade exige responsabilidade
   - Somos chamados à santidade

2. Consciência Moral:
   - É a voz de Deus no coração
   - Deve ser formada e educada
   - Guia nossas decisões
   - Deve seguir a verdade
   - É julgamento prático

3. Pecado e Conversão:
   - O pecado ofende a Deus
   - Fere a comunhão com Ele
   - Dói ao próximo e a nós
   - Exige arrependimento
   - Pede conversão contínua

4. Graça e Santidade:
   - A graça é dom de Deus
   - Nos torna filhos de Deus
   - Nos santifica
   - Nos dá força para o bem
   - Nos une a Cristo

5. Virtudes e Dons:
   - Virtudes teologais: fé, esperança e caridade
   - Virtudes cardeais: prudência, justiça, fortaleza e temperança
   - Dons do Espírito Santo
   - Frutos do Espírito
   - Bem-aventuranças

A vida em Cristo é um caminho de crescimento na fé, esperança e caridade.`,
          baseBiblica: 'Romanos 6:1-14, Gálatas 5:13-26, Efésios 4:17-24'
        },
        {
          titulo: 'Virtudes e Pecados',
          paragrafos: '§§1803–1832',
          explicacao: `As virtudes e os pecados são forças que moldam nossa vida moral:

1. Virtudes Teologais:
   - Fé: adesão a Deus e suas verdades
   - Esperança: confiança na salvação
   - Caridade: amor a Deus e ao próximo
   - São infundidas por Deus
   - Nos unem a Ele

2. Virtudes Cardeais:
   - Prudência: discernimento do bem
   - Justiça: dar a cada um o que é seu
   - Fortaleza: perseverança no bem
   - Temperança: moderação dos desejos
   - São adquiridas pelo exercício

3. Pecados Capitais:
   - Soberba: orgulho excessivo
   - Avareza: apego aos bens materiais
   - Luxúria: desordem sexual
   - Ira: raiva descontrolada
   - Gula: excesso em comida e bebida
   - Inveja: tristeza pelo bem alheio
   - Preguiça: negligência espiritual

4. Frutos do Espírito:
   - Amor, alegria, paz
   - Paciência, benignidade
   - Bondade, fidelidade
   - Mansidão, temperança
   - São sinais da vida em Deus

5. Dons do Espírito:
   - Sabedoria, entendimento
   - Conselho, fortaleza
   - Ciência, piedade
   - Temor de Deus
   - São auxílios para a santidade

As virtudes nos elevam, os pecados nos rebaixam. Devemos cultivar as virtudes e combater os pecados.`,
          baseBiblica: '1 Coríntios 13:13, Gálatas 5:22-23, Tiago 3:13-18'
        }
      ]
    },
    {
      id: 'sociedade',
      titulo: 'Vida em Sociedade e Vocação',
      icone: <Users className="h-8 w-8 text-orange-500" />,
      descricao: 'A vida cristã em sociedade',
      conteudo: [
        {
          titulo: 'Família e Matrimônio',
          paragrafos: '§§1601–1666',
          explicacao: `A família é a célula fundamental da sociedade e da Igreja, fundada no matrimônio:

1. Natureza do Matrimônio:
   - Aliança entre um homem e uma mulher
   - Ordenada ao bem dos cônjuges
   - Aberta à procriação
   - Indissolúvel por vontade de Deus
   - Sinal do amor de Cristo pela Igreja

2. Fins do Matrimônio:
   - União dos esposos
   - Procriação e educação dos filhos
   - Ajuda mútua
   - Santificação dos cônjuges
   - Construção da sociedade

3. Virtudes Familiares:
   - Amor fiel e indissolúvel
   - Respeito mútuo
   - Diálogo e compreensão
   - Perdão e reconciliação
   - Fidelidade e castidade

4. Educação dos Filhos:
   - Transmissão da fé
   - Formação humana
   - Educação moral
   - Desenvolvimento integral
   - Preparação para a vida

5. Desafios Atuais:
   - Divórcio e novas uniões
   - União de pessoas do mesmo sexo
   - Contracepção e aborto
   - Ideologia de gênero
   - Crise de valores

A família é chamada a ser santuário de vida e amor, escola de humanidade e fé.`,
          baseBiblica: 'Gênesis 2:24, Mateus 19:4-6, Efésios 5:21-33'
        },
        {
          titulo: 'Castidade e Pureza',
          paragrafos: '§§2337–2359',
          explicacao: `A castidade é a virtude que integra a sexualidade na pessoa, segundo o estado de vida:

1. Natureza da Castidade:
   - Virtude que modera o uso da sexualidade
   - Integra a sexualidade na pessoa
   - Respeita a dignidade humana
   - Expressa o amor verdadeiro
   - Leva à liberdade interior

2. Castidade em Diferentes Estados:
   - Celibato consagrado: renúncia total
   - Matrimônio: fidelidade e abertura à vida
   - Vida solteira: continência
   - Cada estado tem suas exigências
   - Todos são chamados à pureza

3. Meios para Viver a Castidade:
   - Oração e sacramentos
   - Vigilância dos sentidos
   - Modéstia no vestir
   - Fuga das ocasiões de pecado
   - Vida de virtude

4. Desafios Atuais:
   - Pornografia e impureza
   - Relativismo moral
   - Hedonismo e consumismo
   - Ideologia de gênero
   - Cultura da morte

5. Frutos da Castidade:
   - Liberdade interior
   - Paz de consciência
   - Capacidade de amar
   - Respeito pelo outro
   - Felicidade verdadeira

A castidade é caminho de liberdade e amor, que nos leva à plenitude da vida.`,
          baseBiblica: '1 Coríntios 6:18-20, 1 Tessalonicenses 4:3-8, Hebreus 13:4'
        },
        {
          titulo: 'Doutrina Social da Igreja',
          paragrafos: '§§2419–2463',
          explicacao: `A Doutrina Social da Igreja oferece princípios para a construção de uma sociedade justa e fraterna:

1. Princípios Fundamentais:
   - Dignidade da pessoa humana
   - Bem comum
   - Destino universal dos bens
   - Subsidiariedade
   - Solidariedade

2. Direitos Humanos:
   - Direito à vida
   - Liberdade religiosa
   - Trabalho digno
   - Educação e saúde
   - Participação política

3. Economia e Trabalho:
   - Economia a serviço do homem
   - Trabalho como vocação
   - Salário justo
   - Propriedade privada
   - Responsabilidade social

4. Política e Sociedade:
   - Estado a serviço do bem comum
   - Democracia participativa
   - Justiça social
   - Paz e reconciliação
   - Cuidado com a criação

5. Desafios Atuais:
   - Globalização
   - Meio ambiente
   - Migrações
   - Pobreza e desigualdade
   - Cultura da morte

A Doutrina Social da Igreja é luz para a construção de uma sociedade mais justa e fraterna.`,
          baseBiblica: 'Mateus 25:31-46, Atos 2:44-45, Tiago 2:14-17'
        }
      ]
    },
    {
      id: 'fe',
      titulo: 'Fé e Razão, Igreja e Religiões',
      icone: <Star className="h-8 w-8 text-yellow-500" />,
      descricao: 'A fé em diálogo com o mundo',
      conteudo: [
        {
          titulo: 'A Igreja: Corpo de Cristo',
          paragrafos: '§§748–945',
          explicacao: `A Igreja é o Corpo Místico de Cristo, formado por todos os batizados, com suas características essenciais:

1. Una:
   - Um só Senhor, uma só fé, um só batismo
   - Unidade na diversidade
   - Comunhão hierárquica
   - Vínculos de unidade
   - Busca da unidade dos cristãos

2. Santa:
   - Fundada por Cristo
   - Santificada pelo Espírito
   - Possui meios de santificação
   - Chamada à santidade
   - Formada por pecadores

3. Católica:
   - Universal em espaço e tempo
   - Contém a plenitude dos meios de salvação
   - Enviada a todas as nações
   - Abraça todas as culturas
   - Respeita a diversidade

4. Apostólica:
   - Fundada sobre os apóstolos
   - Sucessão apostólica
   - Transmissão da fé
   - Tradição viva
   - Fidelidade às origens

5. Estrutura da Igreja:
   - Hierarquia: Papa, Bispos, Sacerdotes
   - Fiéis leigos
   - Vida consagrada
   - Carismas e ministérios
   - Comunhão e participação

A Igreja é o sacramento universal de salvação, chamada a ser luz das nações.`,
          baseBiblica: 'Mateus 16:18, 1 Coríntios 12:12-27, Efésios 4:1-16'
        },
        {
          titulo: 'Diálogo Inter-religioso',
          paragrafos: '§§836–856',
          explicacao: `O diálogo inter-religioso é parte essencial da missão da Igreja no mundo atual:

1. Fundamentos do Diálogo:
   - Dignidade da pessoa humana
   - Liberdade religiosa
   - Busca da verdade
   - Respeito mútuo
   - Bem comum

2. Relação com as Religiões:
   - Judaísmo: raiz comum
   - Islamismo: monoteísmo
   - Religiões orientais: sabedoria
   - Tradições indígenas: espiritualidade
   - Respeito às diferenças

3. Desafios do Diálogo:
   - Fundamentalismo
   - Relativismo
   - Indiferentismo
   - Sincretismo
   - Perseguição religiosa

4. Caminhos do Diálogo:
   - Encontro pessoal
   - Colaboração social
   - Estudo teológico
   - Oração comum
   - Testemunho de vida

5. Frutos do Diálogo:
   - Paz e reconciliação
   - Justiça e solidariedade
   - Respeito mútuo
   - Enriquecimento recíproco
   - Construção da fraternidade

O diálogo inter-religioso é caminho de paz e compreensão entre os povos.`,
          baseBiblica: 'Atos 17:22-31, Romanos 2:14-15, 1 Timóteo 2:1-4'
        },
        {
          titulo: 'Fé e Ciência',
          paragrafos: '§§27–49',
          explicacao: `Fé e ciência são dois caminhos complementares para conhecer a verdade:

1. Natureza da Fé e da Ciência:
   - Fé: conhecimento por revelação
   - Ciência: conhecimento por razão
   - Diferentes métodos
   - Diferentes objetos
   - Complementares

2. História da Relação:
   - Idade Média: harmonia
   - Modernidade: tensão
   - Atualidade: diálogo
   - Avanços científicos
   - Questões éticas

3. Campos de Diálogo:
   - Origem do universo
   - Evolução da vida
   - Natureza humana
   - Ética científica
   - Tecnologia

4. Desafios Atuais:
   - Transhumanismo
   - Inteligência artificial
   - Manipulação genética
   - Meio ambiente
   - Bioética

5. Caminhos de Harmonia:
   - Respeito mútuo
   - Diálogo constante
   - Busca da verdade
   - Bem da humanidade
   - Responsabilidade ética

Fé e ciência são dons de Deus para o bem da humanidade.`,
          baseBiblica: 'Romanos 1:20, Hebreus 11:3, Salmo 19:1-6'
        }
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="bg-white dark:bg-dark-card rounded-2xl shadow-xl p-8">
        <div className="text-center mb-8">
          <Book className="h-12 w-12 text-blue-500 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-800 dark:text-dark-text mb-2">Ensinamentos da Igreja</h2>
          <p className="text-gray-600 dark:text-gray-400">Conheça os fundamentos da fé católica</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categorias.map((categoria) => (
            <Card
              key={categoria.id}
              className="p-6 cursor-pointer hover:shadow-lg transition-all border-l-4 border-blue-500 dark:border-blue-400"
              onClick={() => handleCategoryClick(categoria)}
            >
              <div className="flex items-start space-x-4">
                {categoria.icone}
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-dark-text mb-2">
                    {categoria.titulo}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {categoria.descricao}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {selectedCategory && (
          <div ref={explicacaoRef} className="mt-8 bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                {selectedCategory.icone}
                <h3 className="text-2xl font-bold text-gray-800 dark:text-dark-text">
                  {selectedCategory.titulo}
                </h3>
              </div>
              <button
                onClick={() => setSelectedCategory(null)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                Fechar
              </button>
            </div>

            <div className="space-y-6">
              {selectedCategory.conteudo.map((item, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-dark-card rounded-lg p-6 shadow-sm"
                >
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-dark-text mb-2">
                    {item.titulo}
                  </h4>
                  <p className="text-sm text-blue-600 dark:text-blue-400 mb-3">
                    {item.paragrafos}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mb-3 whitespace-pre-line">
                    {item.explicacao}
                  </p>
                  <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Base Bíblica:</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{item.baseBiblica}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EnsinamentosSection; 