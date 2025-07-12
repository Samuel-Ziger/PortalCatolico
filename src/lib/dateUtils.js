import { getLeituraDoDia } from '@/data/liturgicalReadings';

// Dados das leituras litúrgicas católicas (exemplo simplificado)
const leiturasLiturgicas = {
  // Janeiro
  "01-01": { // Santa Maria, Mãe de Deus
    evangelho: "Lucas 2:16-21",
    texto: "Os pastores foram às pressas e encontraram Maria, José e o recém-nascido deitado na manjedoura.",
    referencia: "Lucas 2:16",
    comentario: "Maria guardava todas essas coisas, meditando-as em seu coração. Ela é modelo de contemplação e discípula perfeita."
  },
  "01-06": { // Epifania do Senhor
    evangelho: "Mateus 2:1-12",
    texto: "Vimos sua estrela no oriente e viemos adorá-lo.",
    referencia: "Mateus 2:2",
    comentario: "Os magos representam todos os povos que buscam a verdade e encontram em Cristo a luz do mundo."
  },
  "01-07": { // Segunda-feira após Epifania
    evangelho: "João 1:35-42",
    texto: "Eis o Cordeiro de Deus, que tira o pecado do mundo!",
    referencia: "João 1:29",
    comentario: "João Batista aponta para Jesus como o Salvador prometido, o verdadeiro Cordeiro de Deus."
  },
  
  // Tempo Comum - Janeiro
  "01-08": {
    evangelho: "Marcos 6:34-44",
    texto: "Jesus teve compaixão deles, porque eram como ovelhas sem pastor.",
    referencia: "Marcos 6:34",
    comentario: "Jesus é o Bom Pastor que cuida de suas ovelhas e as alimenta com sua Palavra e seu Corpo."
  },
  "01-09": {
    evangelho: "Marcos 6:45-52",
    texto: "Coragem! Sou eu. Não tenhais medo!",
    referencia: "Marcos 6:50",
    comentario: "Jesus caminha sobre as águas, mostrando seu poder divino e nos convidando à confiança."
  },
  
  // Quaresma (exemplo)
  "02-14": { // Quarta-feira de Cinzas
    evangelho: "Mateus 6:1-6, 16-18",
    texto: "Quando deres esmola, não toques a trombeta diante de ti.",
    referencia: "Mateus 6:2",
    comentario: "A Quaresma nos convida à conversão através da oração, jejum e caridade, sem ostentação."
  },
  
  // Páscoa (exemplo)
  "04-01": { // Domingo de Páscoa
    evangelho: "João 20:1-9",
    texto: "Ele não está aqui! Ressuscitou, como havia dito!",
    referencia: "Mateus 28:6",
    comentario: "A ressurreição de Jesus é o centro da nossa fé. Cristo venceu a morte e nos deu a vida eterna."
  },
  
  // Tempo Comum - Outros meses
  "06-29": { // São Pedro e São Paulo
    evangelho: "Mateus 16:13-19",
    texto: "Tu és Pedro, e sobre esta pedra edificarei a minha Igreja.",
    referencia: "Mateus 16:18",
    comentario: "Pedro recebe as chaves do Reino dos Céus, sendo o primeiro Papa da Igreja."
  },
  "08-15": { // Assunção de Nossa Senhora
    evangelho: "Lucas 1:39-56",
    texto: "Minha alma engrandece ao Senhor e se alegra o meu espírito em Deus, meu Salvador.",
    referencia: "Lucas 1:46-47",
    comentario: "Maria proclama o Magnificat, cântico de louvor e gratidão a Deus pelas maravilhas que realizou."
  },
  "12-25": { // Natal do Senhor
    evangelgo: "João 1:1-18",
    texto: "E o Verbo se fez carne e habitou entre nós.",
    referencia: "João 1:14",
    comentario: "No Natal celebramos a Encarnação do Verbo de Deus, que se fez homem para nossa salvação."
  }
};

// Função para buscar o versículo litúrgico do dia da API oficial
export const getVersiculoLiturgico = async () => {
  try {
    const hoje = new Date();
    const dia = hoje.getDate();
    const mes = hoje.getMonth() + 1;
    const ano = hoje.getFullYear();
    
    // URL da API oficial da liturgia
    const url = `https://liturgia.up.railway.app/v2/?dia=${dia}&mes=${mes}&ano=${ano}`;
    
    // Faz a requisição para a API
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`Erro na API: ${response.status}`);
    }
    
    const data = await response.json();
    
    // Extrai o evangelho da resposta da API
    if (data.leituras && data.leituras.evangelho && data.leituras.evangelho.length > 0) {
      const evangelho = data.leituras.evangelho[0]; // Pega o primeiro evangelho
      
      return {
        texto: evangelho.texto,
        referencia: evangelho.referencia,
        comentario: `Liturgia do dia: ${data.liturgia}. Cor litúrgica: ${data.cor}.`,
        liturgia: data.liturgia,
        cor: data.cor
      };
    }
    
    // Se não há evangelho, usa a primeira leitura
    if (data.leituras && data.leituras.primeiraLeitura && data.leituras.primeiraLeitura.length > 0) {
      const primeiraLeitura = data.leituras.primeiraLeitura[0];
      
      return {
        texto: primeiraLeitura.texto,
        referencia: primeiraLeitura.referencia,
        comentario: `Liturgia do dia: ${data.liturgia}. Cor litúrgica: ${data.cor}.`,
        liturgia: data.liturgia,
        cor: data.cor
      };
    }
    
    // Fallback para o sistema local
    return getLeituraDoDia();
    
  } catch (error) {
    console.error('Erro ao buscar versículo litúrgico da API:', error);
    // Fallback para o sistema local
    return getLeituraDoDia();
  }
};

// Função para buscar leituras da Canção Nova (requer backend)
export const buscarLiturgiaCançãoNova = async (dia, mes, ano) => {
  try {
    // Esta função seria implementada no backend para evitar problemas de CORS
    const response = await fetch(`/api/liturgia?dia=${dia}&mes=${mes}&ano=${ano}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro ao buscar liturgia:', error);
    return null;
  }
};

// Função para obter o versículo do dia (mantida para compatibilidade)
export const getVersiculoDoDia = (versiculos) => {
  const hoje = new Date();
  const ano = hoje.getFullYear();
  const mes = hoje.getMonth() + 1;
  const dia = hoje.getDate();
  
  // Calcula o dia do ano (1-365/366)
  const diaDoAno = Math.floor((hoje - new Date(ano, 0, 0)) / (1000 * 60 * 60 * 24));
  
  // Algoritmo de hash simples para distribuir melhor os versículos
  // Usa o dia do ano como seed para gerar um índice mais distribuído
  const seed = diaDoAno * 31 + mes * 7 + dia;
  const indice = seed % versiculos.length;
  
  return versiculos[indice];
};

// Função alternativa mais sofisticada usando hash de string
export const getVersiculoDoDiaAvancado = (versiculos) => {
  const hoje = new Date();
  const dataString = `${hoje.getFullYear()}-${String(hoje.getMonth() + 1).padStart(2, '0')}-${String(hoje.getDate()).padStart(2, '0')}`;
  
  // Hash simples da data
  let hash = 0;
  for (let i = 0; i < dataString.length; i++) {
    const char = dataString.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Converte para 32-bit integer
  }
  
  // Usa o hash absoluto para selecionar o versículo
  const indice = Math.abs(hash) % versiculos.length;
  return versiculos[indice];
};

// Função que considera também o ano para mais variação
export const getVersiculoDoDiaComAno = (versiculos) => {
  const hoje = new Date();
  const ano = hoje.getFullYear();
  const mes = hoje.getMonth() + 1;
  const dia = hoje.getDate();
  
  // Combina ano, mês e dia para criar um seed único
  const seed = (ano * 10000) + (mes * 100) + dia;
  const indice = seed % versiculos.length;
  
  return versiculos[indice];
};

export const getRosarioDoDia = (misteriosRosario) => {
  const hoje = new Date();
  const diaDaSemana = hoje.getDay();
  return misteriosRosario[diaDaSemana];
};

export const getTempoLiturgico = () => {
  const hoje = new Date();
  const ano = hoje.getFullYear();
  const mes = hoje.getMonth() + 1; // Janeiro é 0
  const dia = hoje.getDate();

  // Lógica simplificada para tempos litúrgicos
  // Advento: 4 domingos antes do Natal. Natal: 25 de Dezembro até Batismo do Senhor (geralmente 1º domingo após Epifania - 6 de Jan)
  // Quaresma: Quarta-feira de Cinzas até Quinta-feira Santa. Páscoa: Domingo de Páscoa até Pentecostes (50 dias depois)
  // Tempo Comum: Restante do ano.

  // Datas aproximadas para simplificação
  // Natal (25 Dez - ~13 Jan)
  if ((mes === 12 && dia >= 1) || (mes === 1 && dia <= 13)) { // Inclui Advento e Natal
    // Simplificando Advento como início de Dezembro
    if (mes === 12 && dia < 25) return { tempo: "Advento", cor: "Roxo" };
    return { tempo: "Natal", cor: "Branco" };
  }

  // Páscoa (varia, mas geralmente Março/Abril) e Quaresma (40 dias antes)
  // Para simplificar, vamos considerar Quaresma em Fevereiro/Março e Páscoa em Abril
  const pascoaEsteAno = calcularPascoa(ano);
  const quartaCinzas = new Date(pascoaEsteAno);
  quartaCinzas.setDate(pascoaEsteAno.getDate() - 46); // 40 dias de quaresma + 6 domingos

  const inicioQuaresma = new Date(ano, quartaCinzas.getMonth(), quartaCinzas.getDate());
  const fimQuaresma = new Date(ano, pascoaEsteAno.getMonth(), pascoaEsteAno.getDate() -1); // Até Sábado Santo
  
  const inicioPascoa = pascoaEsteAno;
  const fimPascoa = new Date(pascoaEsteAno);
  fimPascoa.setDate(pascoaEsteAno.getDate() + 49); // Pentecostes

  if (hoje >= inicioQuaresma && hoje <= fimQuaresma) {
    return { tempo: "Quaresma", cor: "Roxo" };
  }
  if (hoje >= inicioPascoa && hoje <= fimPascoa) {
    return { tempo: "Páscoa", cor: "Branco" };
  }
  
  return { tempo: "Tempo Comum", cor: "Verde" };
};

// Algoritmo de Meeus/Jones/Butcher para calcular o Domingo de Páscoa
function calcularPascoa(ano) {
  const a = ano % 19;
  const b = Math.floor(ano / 100);
  const c = ano % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const mesPascoa = Math.floor((h + l - 7 * m + 114) / 31);
  const diaPascoa = ((h + l - 7 * m + 114) % 31) + 1;
  return new Date(ano, mesPascoa - 1, diaPascoa);
}

// Função para demonstrar como cada abordagem funciona
export const demonstrarSelecaoVersiculos = (versiculos) => {
  const hoje = new Date();
  const dataString = `${hoje.getFullYear()}-${String(hoje.getMonth() + 1).padStart(2, '0')}-${String(hoje.getDate()).padStart(2, '0')}`;
  
  console.log(`Data: ${dataString}`);
  console.log(`Versículos disponíveis: ${versiculos.length}`);
  
  // Abordagem 1: Original (simples)
  const versiculoOriginal = getVersiculoDoDia(versiculos);
  console.log(`Abordagem Original: ${versiculoOriginal.referencia}`);
  
  // Abordagem 2: Avançada (hash de string)
  const versiculoAvancado = getVersiculoDoDiaAvancado(versiculos);
  console.log(`Abordagem Avançada: ${versiculoAvancado.referencia}`);
  
  // Abordagem 3: Com ano
  const versiculoComAno = getVersiculoDoDiaComAno(versiculos);
  console.log(`Abordagem com Ano: ${versiculoComAno.referencia}`);
  
  return {
    original: versiculoOriginal,
    avancado: versiculoAvancado,
    comAno: versiculoComAno
  };
};