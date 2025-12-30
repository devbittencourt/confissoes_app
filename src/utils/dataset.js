export const dezMandamentos = [
  { id: 'I', tipo: 'dez', titulo: 'Amar a Deus sobre todas as coisas', pecadosComuns: [
    'Negligência na oração', 'Indiferença com Deus', 'Superstições'
  ]},
  { id: 'II', tipo: 'dez', titulo: 'Não tomar seu santo nome em vão', pecadosComuns: [
    'Blasfêmia', 'Juramentos levianos'
  ]},
  { id: 'III', tipo: 'dez', titulo: 'Guardar domingos e festas', pecadosComuns: [
    'Faltar à Missa sem justa causa', 'Trabalhos servís em dia santo'
  ]},
  { id: 'IV', tipo: 'dez', titulo: 'Honrar pai e mãe', pecadosComuns: [
    'Desobediência', 'Irreverência', 'Falta de cuidado'
  ]},
  { id: 'V', tipo: 'dez', titulo: 'Não matarás', pecadosComuns: [
    'Ódio', 'Violência', 'Escândalo'
  ]},
  { id: 'VI', tipo: 'dez', titulo: 'Não pecar contra a castidade', pecadosComuns: [
    'Impureza', 'Pornografia', 'Infidelidade'
  ]},
  { id: 'VII', tipo: 'dez', titulo: 'Não furtar', pecadosComuns: [
    'Roubo', 'Fraude', 'Desonestidade'
  ]},
  { id: 'VIII', tipo: 'dez', titulo: 'Não levantar falso testemunho', pecadosComuns: [
    'Mentira', 'Calúnia', 'Difamação'
  ]},
  { id: 'IX', tipo: 'dez', titulo: 'Não desejar a mulher do próximo', pecadosComuns: [
    'Desejos impuros', 'Cobiça do alheio no coração'
  ]},
  { id: 'X', tipo: 'dez', titulo: 'Não cobiçar as coisas alheias', pecadosComuns: [
    'Avareza', 'Inveja'
  ]}
]

export const mandamentosIgreja = [
  { id: 'I', tipo: 'igreja', titulo: 'Participar da Missa aos domingos e festas de guarda', pecadosComuns: [
    'Faltar à Missa', 'Desatenção durante a celebração'
  ]},
  { id: 'II', tipo: 'igreja', titulo: 'Confessar-se ao menos uma vez por ano', pecadosComuns: [
    'Negligência ao sacramento da Reconciliação'
  ]},
  { id: 'III', tipo: 'igreja', titulo: 'Receber a Eucaristia ao menos na Páscoa', pecadosComuns: [
    'Descaso com a comunhão'
  ]},
  { id: 'IV', tipo: 'igreja', titulo: 'Jejuar e abster-se de carne quando prescrito', pecadosComuns: [
    'Quebra injustificada do jejum'
  ]},
  { id: 'V', tipo: 'igreja', titulo: 'Ajudar a Igreja em suas necessidades materiais', pecadosComuns: [
    'Negligência no dízimo e ofertas', 'Indiferença com obras de caridade'
  ]}
]

export const perguntasIniciais = {
  dez: {
    VII: [
      { id: 'q7-1', texto: 'Roubei algo de alguém?', quantidade: 1 },
      { id: 'q7-2', texto: 'Fui desonesto em negócios ou trapaceei?', quantidade: 0 }
    ]
  },
  igreja: {
    I: [
      { id: 'qi-1', texto: 'Faltei à Missa aos domingos ou dias santos por preguiça ou negligência?', quantidade: 0 }
    ]
  }
}
