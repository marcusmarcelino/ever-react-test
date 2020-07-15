export const getInfo = {
  status: [
    { icon: 'saldo', title: 'SALDO EVERCOINS', description: '1050' },
    { icon: 'liberacao', title: 'AGUARDANDO LIBERAÇÃO', description: '0' },
    { icon: 'liberado', title: 'SALDO LIBERADO', description: '0' },
    { icon: 'faturado', title: 'TOTAL FATURADO', description: '0' },
  ],

  tools: [
    { description: 'E-COMMERCE', variant: 'info', isComing: false },
    { description: 'LANDING PAGE', variant: '', isComing: true },
    { description: 'CARRINHO DINÂMICO', variant: 'danger', isComing: false },
    { description: 'CUPOM DE DESCONTO', variant: 'warning', isComing: false },
  ],

  spaces: [
    { icon: 'bank', description: 'BANK', variant: '', isComing: true },
    { icon: 'shopping', description: 'SHOPPING', variant: '', isComing: true },
    { icon: 'marketing', description: 'MARKETING', variant: 'marketing', isComing: false },
    { icon: 'university', description: 'UNIVERSITY', variant: 'university', isComing: false },
  ],

  welcome: {
    person: 'Empreendedora',
    name: 'Carla',
    msg: `Esse é seu espaço empreendedor, criado com todo carinho para te
    auxiliar na jornada rumo ao sucesso. Assista nossos tutorias e descubra
    como trabalhar com cada ferramenta a fim de otimizar suas vendas,
    resultados e tempo`,
  },
};

export default getInfo;
