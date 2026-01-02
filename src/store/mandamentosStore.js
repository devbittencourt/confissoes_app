const STORE = {}
const listeners = new Set()

const notify = () => { listeners.forEach((fn) => fn()) }

export const subscribe = (fn) => { listeners.add(fn); return () => listeners.delete(fn) }

export const getItems = (mandamentoId, basePecados) => {
  const base = basePecados.map((texto, idx) => {
    const id = `base-${idx}`
    const entry = STORE[mandamentoId]?.[id] || {}
    return { id, texto: entry.texto ?? texto, quantidade: entry.quantidade ?? 0 }
  })
  const custom = Object.entries(STORE[mandamentoId] || {})
    .filter(([id]) => id.startsWith('custom-'))
    .map(([id, entry]) => ({ id, texto: entry.texto || '', quantidade: entry.quantidade || 0 }))
  return [...base, ...custom]
}

export const setTexto = (mandamentoId, id, texto) => {
  STORE[mandamentoId] = STORE[mandamentoId] || {}
  STORE[mandamentoId][id] = { ...(STORE[mandamentoId][id] || {}), texto }
  notify()
}

export const inc = (mandamentoId, id) => {
  STORE[mandamentoId] = STORE[mandamentoId] || {}
  const curr = STORE[mandamentoId][id]?.quantidade || 0
  STORE[mandamentoId][id] = { ...(STORE[mandamentoId][id] || {}), quantidade: curr + 1 }
  notify()
}

export const dec = (mandamentoId, id) => {
  STORE[mandamentoId] = STORE[mandamentoId] || {}
  const curr = STORE[mandamentoId][id]?.quantidade || 0
  STORE[mandamentoId][id] = { ...(STORE[mandamentoId][id] || {}), quantidade: Math.max(0, curr - 1) }
  notify()
}

export const addItem = (mandamentoId, texto) => {
  STORE[mandamentoId] = STORE[mandamentoId] || {}
  const id = `custom-${Date.now()}`
  STORE[mandamentoId][id] = { texto, quantidade: 0 }
  notify()
  return id
}

export const getAllWithQuantities = (mandamentos) => {
  const result = []
  mandamentos.forEach((m) => {
    const items = getItems(m.id, m.pecados)
    items.filter((it) => (it.quantidade || 0) > 0).forEach((it) => {
      result.push({ mandamentoId: m.id, mandamentoTitulo: m.titulo, texto: it.texto, quantidade: it.quantidade })
    })
  })
  return result
}
