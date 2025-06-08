export const getVersiculoDoDia = (versiculos) => {
  const hoje = new Date();
  const diaDoAno = Math.floor((hoje - new Date(hoje.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
  return versiculos[diaDoAno % versiculos.length];
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