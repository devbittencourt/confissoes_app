import { useEffect, useState } from 'react'
import { get, set } from '../utils/storage'

const KEY = 'exame:state'

export default function useExameState() {
  const [state, setState] = useState(() => get(KEY, { perguntas: {}, notas: [] }))

  useEffect(() => { set(KEY, state) }, [state])

  const togglePergunta = (id) => setState((s) => ({
    ...s,
    perguntas: {
      ...s.perguntas,
      [id]: { ...(s.perguntas[id] || { quantidade: 0, nota: '' }), checked: !(s.perguntas[id]?.checked) }
    }
  }))

  const incPergunta = (id) => setState((s) => ({
    ...s,
    perguntas: { ...s.perguntas, [id]: { ...(s.perguntas[id] || { checked: false, nota: '' }), quantidade: (s.perguntas[id]?.quantidade || 0) + 1 } }
  }))

  const decPergunta = (id) => setState((s) => ({
    ...s,
    perguntas: { ...s.perguntas, [id]: { ...(s.perguntas[id] || { checked: false, nota: '' }), quantidade: Math.max(0, (s.perguntas[id]?.quantidade || 0) - 1) } }
  }))

  const setNotaPergunta = (id, nota) => setState((s) => ({
    ...s,
    perguntas: { ...s.perguntas, [id]: { ...(s.perguntas[id] || { checked: false, quantidade: 0 }), nota } }
  }))

  const addNota = (texto, mandamentoId, perguntaId) => setState((s) => ({
    ...s,
    notas: [...s.notas, { id: Date.now().toString(), texto, mandamentoId, perguntaId, createdAt: new Date().toISOString() }]
  }))

  return { state, togglePergunta, incPergunta, decPergunta, setNotaPergunta, addNota }
}
