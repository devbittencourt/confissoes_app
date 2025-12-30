import { useMemo } from 'react'

export default function useRelatorio(exame, perguntasPorMandamento) {
  return useMemo(() => {
    const contagem = {}
    const itens = []
    Object.entries(perguntasPorMandamento).forEach(([mandamentoId, perguntas]) => {
      perguntas.forEach((p) => {
        const s = exame.perguntas[p.id]
        if (s?.checked || (s?.quantidade || 0) > 0) {
          contagem[mandamentoId] = (contagem[mandamentoId] || 0) + (s?.quantidade || 0)
          itens.push({ mandamentoId, perguntaId: p.id, texto: p.texto, quantidade: s?.quantidade || 0 })
        }
      })
    })
    const maiorLuta = Object.entries(contagem).sort((a, b) => b[1] - a[1])[0]?.[0] || null
    const topPerguntas = itens.sort((a, b) => b.quantidade - a.quantidade).slice(0, 5)
    return { contagemPorMandamento: contagem, maiorLuta, itensParaConfessar: itens, topPerguntas }
  }, [exame, perguntasPorMandamento])
}
