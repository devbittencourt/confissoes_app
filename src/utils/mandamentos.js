import dados from './mandamentos.json'

const romanosDez = ['I','II','III','IV','V','VI','VII','VIII','IX','X']
const romanosIgreja = ['I','II','III','IV','V']

export const todosMandamentos = [
  ...dados.dez_mandamentos.map((m, idx) => ({
    uid: idx + 1,
    displayId: romanosDez[idx],
    grupo: 'dez',
    titulo: m.mandamento,
    pecados: m.pecados
  })),
  ...dados.mandamentos_da_igreja.map((m, idx) => ({
    uid: 10 + idx + 1,
    displayId: romanosIgreja[idx],
    grupo: 'igreja',
    titulo: m.mandamento,
    pecados: m.pecados
  }))
]
