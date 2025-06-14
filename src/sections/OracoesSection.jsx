import React, { useState, useRef } from 'react';
import { Book, Heart, Cross, Users, Shield, Star, Clock, Church } from 'lucide-react';
import { Card } from '@components/ui/card';
import SEO from '@components/SEO';

const OracoesSection = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const explicacaoRef = useRef(null);

  const handleCategoryClick = (categoria) => {
    setSelectedCategory(categoria);
    // Pequeno delay para garantir que o conteúdo foi renderizado
    setTimeout(() => {
      explicacaoRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  const categorias = [
    {
      id: 'fundamentais',
      titulo: 'Orações Fundamentais',
      icone: <Book className="h-8 w-8 text-blue-500" />,
      descricao: 'Orações básicas da fé católica',
      conteudo: [
        {
          titulo: 'Pai Nosso',
          paragrafos: 'Oração do Senhor',
          explicacao: `Pai Nosso que estais nos Céus,
santificado seja o vosso Nome,
venha a nós o vosso Reino,
seja feita a vossa vontade
assim na terra como no Céu.
O pão nosso de cada dia nos dai hoje,
perdoai-nos as nossas ofensas
assim como nós perdoamos
a quem nos tem ofendido,
e não nos deixeis cair em tentação,
mas livrai-nos do mal.
Amém.`,
          baseBiblica: 'Mateus 6:9-13, Lucas 11:2-4'
        },
        {
          titulo: 'Ave Maria',
          paragrafos: 'Oração Mariana',
          explicacao: `Ave Maria, cheia de graça,
o Senhor é convosco,
bendita sois vós entre as mulheres
e bendito é o fruto do vosso ventre, Jesus.
Santa Maria, Mãe de Deus,
rogai por nós pecadores,
agora e na hora da nossa morte.
Amém.`,
          baseBiblica: 'Lucas 1:28, Lucas 1:42'
        },
        {
          titulo: 'Glória ao Pai',
          paragrafos: 'Oração de Louvor',
          explicacao: `Glória ao Pai,
ao Filho e ao Espírito Santo.
Como era no princípio,
agora e sempre.
Amém.`,
          baseBiblica: 'Salmo 29:2, Apocalipse 4:11'
        },
        {
          titulo: 'Credo Apostólico',
          paragrafos: 'Oração de Fé',
          explicacao: `Creio em Deus Pai todo-poderoso,
Criador do céu e da terra.
E em Jesus Cristo, seu único Filho, nosso Senhor,
que foi concebido pelo poder do Espírito Santo,
nasceu da Virgem Maria,
padeceu sob Pôncio Pilatos,
foi crucificado, morto e sepultado,
desceu à mansão dos mortos,
ressuscitou ao terceiro dia,
subiu aos céus,
está sentado à direita de Deus Pai todo-poderoso,
de onde há de vir a julgar os vivos e os mortos.
Creio no Espírito Santo,
na Santa Igreja Católica,
na comunhão dos santos,
na remissão dos pecados,
na ressurreição da carne,
na vida eterna.
Amém.`,
          baseBiblica: 'Mateus 28:19, Romanos 10:9'
        },
        {
          titulo: 'Credo Niceno-Constantinopolitano',
          paragrafos: 'Oração de Fé',
          explicacao: `Creio em um só Deus,
Pai todo-poderoso,
Criador do céu e da terra,
de todas as coisas visíveis e invisíveis.
Creio em um só Senhor, Jesus Cristo,
Filho Unigênito de Deus,
nascido do Pai antes de todos os séculos:
Deus de Deus, Luz da Luz,
Deus verdadeiro de Deus verdadeiro,
gerado, não criado,
consubstancial ao Pai.
Por Ele todas as coisas foram feitas.
E por nós, homens, e para nossa salvação,
desceu dos céus
e se encarnou pelo Espírito Santo,
no seio da Virgem Maria,
e se fez homem.
Também por nós foi crucificado sob Pôncio Pilatos;
padeceu e foi sepultado.
Ressuscitou ao terceiro dia,
conforme as Escrituras;
e subiu aos céus,
onde está sentado à direita do Pai.
De novo há de vir em glória,
para julgar os vivos e os mortos;
e o seu reino não terá fim.
Creio no Espírito Santo,
Senhor que dá a vida,
e procede do Pai e do Filho;
e com o Pai e o Filho
é adorado e glorificado:
Ele que falou pelos profetas.
Creio na Igreja,
una, santa, católica e apostólica.
Professo um só batismo
para a remissão dos pecados.
E espero a ressurreição dos mortos
e a vida do mundo que há de vir.
Amém.`,
          baseBiblica: 'João 1:1-14, 1 Coríntios 15:3-4'
        },
        {
          titulo: 'Ato de Contrição',
          paragrafos: 'Oração de Arrependimento',
          explicacao: `Meu Deus,
eu me arrependo de todo o coração
de todos os meus pecados,
e os detesto,
porque, pecando,
não só mereci as penas
estabelecidas por vossa justiça,
mas principalmente porque ofendi a vós,
Deus sumamente bom
e digno de ser amado sobre todas as coisas.
Proponho firmemente,
com a vossa graça,
não mais pecar
e evitar as ocasiões próximas de pecado.
Amém.`,
          baseBiblica: 'Salmo 51, Lucas 15:11-32'
        },
        {
          titulo: 'Sinal da Cruz',
          paragrafos: 'Oração de Bênção',
          explicacao: `Em nome do Pai,
do Filho
e do Espírito Santo.
Amém.`,
          baseBiblica: 'Mateus 28:19'
        },
        {
          titulo: 'Anjo da Guarda',
          paragrafos: 'Oração de Proteção',
          explicacao: `Santo Anjo do Senhor,
meu zeloso guardador,
se a ti me confiou a piedade divina,
sempre me rege, me guarda, me governa, me ilumina.
Amém.`,
          baseBiblica: 'Salmo 91:11-12, Mateus 18:10'
        },
        {
          titulo: 'Oferecimento do Dia',
          paragrafos: 'Oração da Manhã',
          explicacao: `Ó meu Deus,
eu vos ofereço todas as minhas ações deste dia
em união com o Coração de Jesus,
que se imola continuamente sobre os altares do mundo inteiro,
em ação de graças por vossos benefícios.
Unido ao seu sacrifício divino,
eu vos ofereço todas as minhas alegrias,
sofrimentos e orações,
em expiação dos meus pecados,
pelas intenções do vosso Coração
e pelas necessidades da Santa Igreja.
Amém.`,
          baseBiblica: 'Romanos 12:1, Colossenses 3:17'
        }
      ]
    },
    {
      id: 'diarias',
      titulo: 'Orações por Temas ou Situações',
      icone: <Clock className="h-8 w-8 text-green-500" />,
      descricao: 'Orações para diferentes momentos e necessidades',
      conteudo: [
        {
          titulo: 'Oração contra o Desânimo',
          paragrafos: 'Oração de Força',
          explicacao: `Senhor Jesus,
que dissestes: "Vinde a mim todos vós que estais cansados e oprimidos,
e eu vos aliviarei",
toma sobre ti o peso das minhas dificuldades
e renova minhas forças.
Ajuda-me a confiar em ti
e a encontrar em ti a paz e a alegria.
Que eu possa dizer como São Paulo:
"Tudo posso naquele que me fortalece".
Amém.`,
          baseBiblica: 'Mateus 11:28-30, Filipenses 4:13'
        },
        {
          titulo: 'Oração de Libertação',
          paragrafos: 'Oração de Proteção',
          explicacao: `Senhor Jesus Cristo,
pelo poder do teu nome
e pelo poder do teu sangue derramado na cruz,
eu te peço que me libertes de todo mal,
de toda opressão e de todo pecado.
Quebra todas as cadeias que me prendem
e me impede de viver em plenitude.
Enche-me do teu Espírito Santo
e fortalece-me na fé.
Que eu possa viver na liberdade dos filhos de Deus.
Amém.`,
          baseBiblica: 'João 8:36, Romanos 8:15'
        },
        {
          titulo: 'Oração pela Família',
          paragrafos: 'Oração de Unidade',
          explicacao: `Deus de amor,
abençoa nossa família.
Une-nos no amor e na fé.
Guarda-nos de todo mal
e fortalece nossos laços.
Que possamos viver
como a Sagrada Família de Nazaré,
em harmonia e santidade.
Abençoa nossos pais,
nossos filhos e todos os nossos familiares.
Que sejamos testemunhas do teu amor
e instrumentos da tua paz.
Amém.`,
          baseBiblica: 'Efésios 5:21-33, Colossenses 3:18-21'
        },
        {
          titulo: 'Oração pela Saúde',
          paragrafos: 'Oração de Cura',
          explicacao: `Senhor Jesus,
médico das almas e dos corpos,
que curastes os doentes
e consolastes os aflitos,
olhai com compaixão para mim (ou para N.)
que estou doente.
Tocai-me com vossa mão poderosa
e dai-me a saúde do corpo e da alma.
Que eu possa glorificar vosso nome
e servir-vos com todo o meu ser.
Amém.`,
          baseBiblica: 'Mateus 8:17, Tiago 5:14-15'
        },
        {
          titulo: 'Oração para Começar o Dia',
          paragrafos: 'Oração da Manhã',
          explicacao: `Senhor,
graças te dou por este novo dia.
Abençoa minhas atividades,
minhas palavras e meus pensamentos.
Guia-me com tua luz
e fortalece-me com tua graça.
Que eu possa fazer tudo para tua glória
e para o bem do meu próximo.
Amém.`,
          baseBiblica: 'Salmo 5:3, Lamentações 3:23'
        },
        {
          titulo: 'Oração da Noite',
          paragrafos: 'Oração da Tarde',
          explicacao: `Senhor,
agradeço-te por este dia que passou.
Perdoa meus pecados e falhas.
Protege-me durante o sono
e renova minhas forças.
Que eu possa descansar em paz
e acordar renovado para te servir.
Amém.`,
          baseBiblica: 'Salmo 4:8, Salmo 91:5'
        },
        {
          titulo: 'Oração pelos Falecidos',
          paragrafos: 'Oração de Intercessão',
          explicacao: `Eterno Pai,
em nome de Jesus,
eu te peço por (nome do falecido).
Purifica sua alma
com o sangue de Cristo
e concede-lhe a paz eterna.
Que ele possa contemplar tua face
e viver na luz da tua presença.
Conforta os que ficaram
e fortalece nossa esperança
na ressurreição dos mortos.
Amém.`,
          baseBiblica: '2 Macabeus 12:44-45, João 11:25-26'
        },
        {
          titulo: 'Oração para Momentos de Angústia',
          paragrafos: 'Oração de Consolo',
          explicacao: `Senhor Jesus,
em momentos de angústia e medo,
eu me refugio em ti.
Tu és minha rocha e meu refúgio.
Afasta de mim todo temor
e enche meu coração de paz.
Que eu possa confiar em ti
e encontrar em ti a força necessária.
Amém.`,
          baseBiblica: 'Salmo 23:4, Filipenses 4:6-7'
        },
        {
          titulo: 'Oração de Gratidão',
          paragrafos: 'Oração de Ação de Graças',
          explicacao: `Deus de bondade,
eu te agradeço por todos os dons recebidos:
pela vida, pela saúde,
pelo amor dos que me cercam,
pelas oportunidades de crescer,
pelas provações que me fortalecem.
Que eu possa sempre reconhecer
teu amor e tua providência
e responder com gratidão e louvor.
Amém.`,
          baseBiblica: '1 Tessalonicenses 5:18, Salmo 136:1'
        }
      ]
    },
    {
      id: 'liturgicas',
      titulo: 'Orações Litúrgicas e Tradicionais',
      icone: <Church className="h-8 w-8 text-purple-500" />,
      descricao: 'Orações da tradição da Igreja',
      conteudo: [
        {
          titulo: 'Vinde, Espírito Santo',
          paragrafos: 'Oração ao Espírito Santo',
          explicacao: `Vinde, Espírito Santo,
enchei os corações dos vossos fiéis
e acendei neles o fogo do vosso amor.
Enviai o vosso Espírito
e tudo será criado
e renovareis a face da terra.
Ó Deus,
que instruístes os corações dos vossos fiéis
com a luz do Espírito Santo,
fazei que apreciemos retamente todas as coisas
segundo o mesmo Espírito
e gozemos sempre de suas consolações.
Por Cristo, Senhor nosso.
Amém.`,
          baseBiblica: 'João 14:26, Atos 2:1-4'
        },
        {
          titulo: 'Ladainha de Todos os Santos',
          paragrafos: 'Oração de Intercessão',
          explicacao: `Senhor, tende piedade de nós.
Cristo, tende piedade de nós.
Senhor, tende piedade de nós.
Cristo, ouvi-nos.
Cristo, atendei-nos.
Deus, Pai do céu, tende piedade de nós.
Deus Filho, Redentor do mundo, tende piedade de nós.
Deus Espírito Santo, tende piedade de nós.
Santíssima Trindade, que sois um só Deus, tende piedade de nós.
Santa Maria, rogai por nós.
Santa Mãe de Deus, rogai por nós.
Santa Virgem das virgens, rogai por nós.
São Miguel, rogai por nós.
São Gabriel, rogai por nós.
São Rafael, rogai por nós.
Todos os Santos Anjos e Arcanjos, rogai por nós.
Todos os Santos Coros dos Anjos, rogai por nós.
São João Batista, rogai por nós.
São José, rogai por nós.
Todos os Santos Patriarcas e Profetas, rogai por nós.
São Pedro, rogai por nós.
São Paulo, rogai por nós.
São André, rogai por nós.
São Tiago, rogai por nós.
São João, rogai por nós.
São Tomé, rogai por nós.
São Tiago, rogai por nós.
São Filipe, rogai por nós.
São Bartolomeu, rogai por nós.
São Mateus, rogai por nós.
São Simão, rogai por nós.
São Tadeu, rogai por nós.
São Matias, rogai por nós.
São Barnabé, rogai por nós.
São Lucas, rogai por nós.
São Marcos, rogai por nós.
Todos os Santos Apóstolos e Evangelistas, rogai por nós.
Todos os Santos Discípulos do Senhor, rogai por nós.
Todos os Santos Mártires, rogai por nós.
São Estêvão, rogai por nós.
São Lourenço, rogai por nós.
São Vicente, rogai por nós.
Santos Fabiano e Sebastião, rogai por nós.
Santos João e Paulo, rogai por nós.
Santos Cosme e Damião, rogai por nós.
Todos os Santos Mártires, rogai por nós.
São Silvestre, rogai por nós.
São Gregório, rogai por nós.
São Ambrósio, rogai por nós.
São Agostinho, rogai por nós.
São Jerônimo, rogai por nós.
São Martinho, rogai por nós.
São Nicolau, rogai por nós.
Todos os Santos Bispos e Confessores, rogai por nós.
Todos os Santos Doutores, rogai por nós.
Santo Antão, rogai por nós.
São Bento, rogai por nós.
São Bernardo, rogai por nós.
São Domingos, rogai por nós.
São Francisco, rogai por nós.
Todos os Santos Sacerdotes e Levitas, rogai por nós.
Todos os Santos Monges e Eremitas, rogai por nós.
Santa Maria Madalena, rogai por nós.
Santa Inês, rogai por nós.
Santa Cecília, rogai por nós.
Santa Catarina, rogai por nós.
Santa Anastácia, rogai por nós.
Todos os Santos e Santas de Deus, rogai por nós.
Sede-nos propício, perdoai-nos, Senhor.
Sede-nos propício, ouvi-nos, Senhor.
De todo o mal, livrai-nos, Senhor.
De todo o pecado, livrai-nos, Senhor.
Da vossa ira, livrai-nos, Senhor.
Da morte repentina e imprevista, livrai-nos, Senhor.
Das ciladas do demônio, livrai-nos, Senhor.
Da ira, do ódio e de todo o mau sentimento, livrai-nos, Senhor.
Do espírito de fornicação, livrai-nos, Senhor.
Do raio e da tempestade, livrai-nos, Senhor.
Do flagelo do terremoto, livrai-nos, Senhor.
Da peste, da fome e da guerra, livrai-nos, Senhor.
Da morte eterna, livrai-nos, Senhor.
Pelo mistério da vossa santa Encarnação, livrai-nos, Senhor.
Pela vossa vinda, livrai-nos, Senhor.
Pelo vosso nascimento, livrai-nos, Senhor.
Pelo vosso batismo e santo jejum, livrai-nos, Senhor.
Pela vossa cruz e paixão, livrai-nos, Senhor.
Pela vossa morte e sepultura, livrai-nos, Senhor.
Pela vossa santa ressurreição, livrai-nos, Senhor.
Pela vossa admirável ascensão, livrai-nos, Senhor.
Pela vinda do Espírito Santo Paráclito, livrai-nos, Senhor.
No dia do juízo, livrai-nos, Senhor.
Nós, pecadores, vos suplicamos, ouvi-nos.
Que nos perdoeis, vos suplicamos, ouvi-nos.
Que vos digneis governar e conservar vossa santa Igreja, vos suplicamos, ouvi-nos.
Que vos digneis conservar nosso Sumo Pontífice e todas as ordens da Igreja em santa religião, vos suplicamos, ouvi-nos.
Que vos digneis humilhar os inimigos da santa Igreja, vos suplicamos, ouvi-nos.
Que vos digneis dar a paz e a verdadeira concórdia aos reis e príncipes cristãos, vos suplicamos, ouvi-nos.
Que vos digneis confirmar-nos em vossa santa lei, vos suplicamos, ouvi-nos.
Que vos digneis ajudar e consolar todos os atribulados, vos suplicamos, ouvi-nos.
Que vos digneis dar-nos a vida eterna, vos suplicamos, ouvi-nos.
Cordeiro de Deus, que tirais o pecado do mundo, perdoai-nos, Senhor.
Cordeiro de Deus, que tirais o pecado do mundo, ouvi-nos, Senhor.
Cordeiro de Deus, que tirais o pecado do mundo, tende piedade de nós, Senhor.
Cristo, ouvi-nos.
Cristo, atendei-nos.
Senhor, tende piedade de nós.
Cristo, tende piedade de nós.
Senhor, tende piedade de nós.`,
          baseBiblica: 'Apocalipse 5:8, Hebreus 12:1'
        },
        {
          titulo: 'Ato de Fé, Esperança e Caridade',
          paragrafos: 'Oração de Virtudes Teologais',
          explicacao: `Ato de Fé:
Meu Deus, eu creio firmemente
que vós sois um só Deus em três Pessoas distintas,
Pai, Filho e Espírito Santo;
que o Filho divino se fez homem,
padeceu e morreu por nós,
e que há de vir no fim do mundo
para nos julgar.
Creio firmemente tudo o mais
que a Santa Igreja Católica
me propõe para crer,
porque vós, ó Deus,
que sois a verdade infalível,
lho revelastes.
Nesta fé quero viver e morrer.
Amém.

Ato de Esperança:
Meu Deus,
espero com firme confiança
que me dareis,
pela vossa misericórdia,
a vida eterna
e as graças necessárias
para a merecer,
porque vós o prometestes,
que sois fidelíssimo,
onipotente e sumamente misericordioso.
Nesta esperança quero viver e morrer.
Amém.

Ato de Caridade:
Meu Deus,
eu vos amo sobre todas as coisas
e ao próximo como a mim mesmo,
por amor de vós,
porque vós sois o sumo bem,
infinitamente amável
e digno de ser amado.
Neste amor quero viver e morrer.
Amém.`,
          baseBiblica: '1 Coríntios 13:13, Hebreus 11:1'
        },
        {
          titulo: 'Alma de Cristo (Anima Christi)',
          paragrafos: 'Oração Eucarística',
          explicacao: `Alma de Cristo, santificai-me.
Corpo de Cristo, salvai-me.
Sangue de Cristo, inebriai-me.
Água do lado de Cristo, lavai-me.
Paixão de Cristo, confortai-me.
Ó bom Jesus, ouvi-me.
Dentro das vossas chagas, escondei-me.
Não permitais que eu me separe de vós.
Do espírito maligno, defendei-me.
Na hora da minha morte, chamai-me.
E mandai-me ir para vós,
para que vos louve com os vossos santos
por todos os séculos dos séculos.
Amém.`,
          baseBiblica: 'João 6:53-58, 1 Coríntios 11:23-26'
        },
        {
          titulo: 'Te Deum',
          paragrafos: 'Oração de Louvor',
          explicacao: `A vós, ó Deus, louvamos,
a vós, Senhor, cantamos.
Vós, Pai eterno,
toda a terra vos adora.
A vós, todos os Anjos,
a vós, os Céus e todas as Potestades,
a vós, os Querubins e Serafins,
com incessante voz proclamam:
Santo, Santo, Santo,
Senhor Deus dos Exércitos!
Os céus e a terra
estão cheios da majestade da vossa glória.
A vós, o glorioso coro dos Apóstolos,
a vós, o admirável número dos Profetas,
a vós, o alvo exército dos Mártires,
a vós, por toda a terra,
é santa a Igreja que confessa:
o Pai, de imensa majestade,
o vosso Filho digno de adoração,
e o Espírito Santo Paráclito.
Vós, ó Cristo, sois o Rei da glória,
vós sois o Filho eterno do Pai.
Vós, para libertar o homem,
não recusastes o seio da Virgem.
Vós, vencendo o aguilhão da morte,
abristes aos crentes o reino dos céus.
Vós estais sentado à direita de Deus,
na glória do Pai.
Crê-se que haveis de vir como juiz.
Suplicamos, pois, que socorrais
os vossos servos,
que remistes com precioso sangue.
Fazei que sejam contados
com os vossos santos
na glória eterna.
Salvai, Senhor, o vosso povo
e abençoai a vossa herança.
E governai-o e exaltai-o
para sempre.
Todos os dias vos bendizemos
e louvamos o vosso nome
para sempre e pelos séculos dos séculos.
Dignai-vos, Senhor,
guardar-nos neste dia
sem pecado.
Tende piedade de nós, Senhor,
tende piedade de nós.
Seja, Senhor, sobre nós
a vossa misericórdia,
como em vós esperamos.
Em vós, Senhor, confiei,
não serei confundido para sempre.`,
          baseBiblica: 'Salmo 145, Apocalipse 4:8'
        }
      ]
    },
    {
      id: 'santos',
      titulo: 'Orações aos Santos',
      icone: <Cross className="h-8 w-8 text-yellow-500" />,
      descricao: 'Orações de intercessão aos santos',
      conteudo: [
        {
          titulo: 'Oração de São Bento',
          paragrafos: 'Oração de Proteção',
          explicacao: `A Cruz Sagrada seja a minha luz,
não seja o dragão o meu guia.
Retira-te, satanás!
Nunca me aconselhes coisas vãs.
É mau o que tu me ofereces,
bebe tu mesmo do teu veneno!
Amém.`,
          baseBiblica: 'Efésios 6:10-17'
        },
        {
          titulo: 'Oração de São Miguel Arcanjo',
          paragrafos: 'Oração de Proteção',
          explicacao: `São Miguel Arcanjo,
defendei-nos no combate,
sede o nosso refúgio
contra as maldades e ciladas do demônio.
Ordene-lhe Deus, instantemente o pedimos,
e vós, príncipe da milícia celeste,
pela virtude divina,
precipitai no inferno a Satanás
e aos outros espíritos malignos,
que andam pelo mundo
para perder as almas.
Amém.`,
          baseBiblica: 'Apocalipse 12:7-9, Judas 1:9'
        },
        {
          titulo: 'Oração a São José',
          paragrafos: 'Oração de Intercessão',
          explicacao: `Ó glorioso São José,
a quem foi dado o poder
de tornar possíveis as coisas humanamente impossíveis,
vinde em nosso auxílio
nas dificuldades em que nos achamos.
Tomai sob a vossa proteção
os assuntos importantes
que vos confiamos,
para que tenham uma feliz solução.
Meu amado pai,
em vós depositamos toda a nossa confiança.
Que ninguém possa dizer
que vos invocamos em vão.
Já que tudo podeis junto a Jesus e Maria,
mostrai-nos que vossa bondade
é igual ao vosso poder.
Amém.`,
          baseBiblica: 'Mateus 1:18-25, Lucas 2:41-52'
        },
        {
          titulo: 'Oração a Santo Expedito',
          paragrafos: 'Oração de Urgência',
          explicacao: `Meu Santo Expedito das causas justas e urgentes,
socorrei-me nesta hora de aflição e desespero,
intercedei por mim junto ao Nosso Senhor Jesus Cristo.
Vós que sois um santo guerreiro,
vós que sois o santo dos aflitos,
vós que sois o santo dos desesperados,
vós que sois o santo das causas urgentes,
protegei-me, ajudai-me, dai-me força, coragem e serenidade.
Atendei ao meu pedido:
(fazer o pedido)
Meu Santo Expedito,
ajudai-me a superar estas horas difíceis,
protegei-me de todos os que possam me prejudicar,
protegei minha família,
atendei ao meu pedido com urgência.
Devolvei-me a paz e a tranquilidade.
Meu Santo Expedito,
estarei sempre agradecido
e levarei seu nome a todos que têm fé.
Santo Expedito, rogai por nós.
Amém.`,
          baseBiblica: 'Tiago 5:16, 1 Pedro 5:7'
        },
        {
          titulo: 'Oração a Santa Rita de Cássia',
          paragrafos: 'Oração de Causas Impossíveis',
          explicacao: `Ó poderosa e gloriosa Santa Rita,
chamada Santa das causas impossíveis,
advogada dos casos desesperados,
auxiliadora da última hora,
refúgio e abrigo dos que perderam a esperança,
eu, embora indigno(a) de ser vosso(a) devoto(a),
recorro a vós com toda a confiança
na presente dificuldade
que muito me aflige.
Vós bem sabeis como é penosa
a luta da vida.
Quando os homens se calam
e as portas se fecham,
quando a doença se agrava
e a dor aumenta,
quando o desespero toma conta do coração,
é a vós que recorremos,
ó Santa Rita,
para que nos consoleis
e nos alcanceis de Deus
a graça que tanto necessitamos.
(fazer o pedido)
Ó Santa Rita,
que durante a vossa vida
tivestes que suportar
dores físicas e morais,
alcançai-me de Jesus
a resignação e a força
para suportar os meus sofrimentos,
e a graça que tanto preciso,
se for para a glória de Deus
e proveito da minha alma.
Amém.`,
          baseBiblica: 'Lucas 1:37, Mateus 19:26'
        },
        {
          titulo: 'Oração a Santa Terezinha',
          paragrafos: 'Oração de Confiança',
          explicacao: `Ó Santa Terezinha do Menino Jesus,
que durante vossa vida
vos dedicastes a praticar
a virtude da confiança
no amor misericordioso de Deus,
alcançai-me a graça
de confiar sempre em Deus,
como uma criança confia em seu pai.
Ensinai-me a viver
com o mesmo amor e confiança
que tivestes para com Deus.
Ajudai-me a superar
todas as dificuldades da vida,
confiando sempre
no amor e na misericórdia de Deus.
Santa Terezinha,
rogai por nós.
Amém.`,
          baseBiblica: 'Mateus 18:3, Lucas 18:17'
        },
        {
          titulo: 'Oração de São Francisco',
          paragrafos: 'Oração da Paz',
          explicacao: `Senhor,
fazei de mim um instrumento de vossa paz.
Onde houver ódio, que eu leve o amor.
Onde houver ofensa, que eu leve o perdão.
Onde houver discórdia, que eu leve a união.
Onde houver dúvidas, que eu leve a fé.
Onde houver erro, que eu leve a verdade.
Onde houver desespero, que eu leve a esperança.
Onde houver tristeza, que eu leve a alegria.
Onde houver trevas, que eu leve a luz.
Ó Mestre,
fazei que eu procure mais
consolar que ser consolado;
compreender que ser compreendido;
amar que ser amado.
Pois é dando que se recebe,
é perdoando que se é perdoado,
e é morrendo que se vive para a vida eterna.
Amém.`,
          baseBiblica: 'Mateus 5:9, João 14:27'
        },
        {
          titulo: 'Oração a Nossa Senhora Desatadora dos Nós',
          paragrafos: 'Oração de Libertação',
          explicacao: `Virgem Maria,
Mãe do belo amor,
Mãe que jamais deixa de vir
em socorro a um filho aflito,
Mãe cujas mãos não param nunca
de servir seus amados filhos,
pois são movidas pelo amor divino
e a imensa misericórdia
que existem em teu coração,
volta o teu olhar compassivo sobre mim
e vê o emaranhado de nós
que existe na minha vida.
Tu conheces muito bem
a minha dor e o meu desespero.
Tu sabes como estes nós
me paralisam.
Maria, Mãe que Deus
incumbiu de desatar os nós
da vida dos seus filhos,
confio hoje esta fita...
em tuas mãos.
Ninguém, nem mesmo o maligno
poderá tirá-la do teu precioso amparo.
Em tuas mãos
não há nó que não possa ser desatado.
Mãe poderosa,
por tua graça e teu poder intercessor
junto a Teu Filho e Meu Libertador, Jesus,
recebe hoje em tuas mãos este nó...
Peço-te que o desates
para a glória de Deus,
e por todo o sempre.
Vós sois a minha esperança.
Ó Senhora minha,
sois a minha única consolação
dada por Deus,
a fortaleza das minhas débeis forças,
a riqueza das minhas misérias,
a liberdade,
com o Cristo, das minhas cadeias.
Ouve o meu pedido.
Guarda-me, guia-me,
protege-me,
sois o meu refúgio seguro.
Maria, Desatadora dos Nós,
rogai por nós.
Amém.`,
          baseBiblica: 'Lucas 1:38, João 2:1-11'
        },
        {
          titulo: 'Oração a Nossa Senhora Aparecida',
          paragrafos: 'Oração de Intercessão',
          explicacao: `Ó incomparável Senhora da Conceição Aparecida,
Mãe de Deus, Rainha dos Anjos,
Advogada dos pecadores,
Refúgio e Consolação dos aflitos e atribulados,
ó Virgem Senhora Aparecida,
cheia de poder e de bondade,
lançai sobre nós um olhar favorável,
para que sejamos socorridos por vós,
em todas as necessidades em que nos acharmos.
E de modo particular hoje,
nesta necessidade que tanto nos aflige.
(fazer o pedido)
Infundi com o vigor de vossas graças
em nossas almas,
para que vencendo as tentações do mundo,
possamos viver como verdadeiros filhos vossos,
bem como vossos servos e devotos.
E assim mesmo,
alcançai-nos de vosso amado Filho,
as graças espirituais
que para nós convier,
e as temporais,
conforme nossas necessidades.
Ó Senhora Aparecida,
livrai-nos de tudo o que possa ofender-vos
e ao vosso Santíssimo Filho, Jesus,
nossa Senhora Aparecida,
preservai-nos de todos os perigos da alma e do corpo,
dirigi-nos em todos os negócios espirituais e temporais,
livrai-nos da tentação do demônio,
para que, trilhando o caminho da virtude,
possamos um dia ver-vos e amar-vos
na eterna glória, por todos os séculos dos séculos.
Amém.`,
          baseBiblica: 'João 19:26-27, Lucas 1:48'
        }
      ]
    }
  ];

  return (
    <>
      <SEO 
        title="Orações Católicas"
        description="Coleção completa de orações católicas tradicionais, incluindo Pai Nosso, Ave Maria, Credo, Ladainhas e orações aos santos. Recursos para fortalecer sua vida espiritual."
        keywords="orações católicas, pai nosso, ave maria, credo, ladainha, orações aos santos, orações tradicionais, orações marianas, orações de proteção, orações de intercessão"
        canonical="/oracoes"
      />
      <div className="max-w-7xl mx-auto">
        <div className="bg-white dark:bg-dark-card rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <Heart className="h-12 w-12 text-red-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-800 dark:text-dark-text mb-2">Orações</h2>
            <p className="text-gray-600 dark:text-gray-400">Orações tradicionais e devocionais da Igreja Católica</p>
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
    </>
  );
};

export default OracoesSection;