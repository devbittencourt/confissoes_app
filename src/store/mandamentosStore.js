const STORE = {}
const listeners = new Set()

const notify = () => { listeners.forEach((fn) => fn()) }

export const subscribe = (fn) => { listeners.add(fn); return () => listeners.delete(fn) }

export const getItems = (storeKey, basePecados) => {
  const base = basePecados.map((texto, idx) => {
    const id = `base-${idx}`
    const entry = STORE[storeKey]?.[id] || {}
    return { id, texto: entry.texto ?? texto, quantidade: entry.quantidade ?? 0 }
  })
  const custom = Object.entries(STORE[storeKey] || {})
    .filter(([id]) => id.startsWith('custom-'))
    .map(([id, entry]) => ({ id, texto: entry.texto || '', quantidade: entry.quantidade || 0 }))
  return [...base, ...custom]
}

export const setTexto = (storeKey, id, texto) => {
  STORE[storeKey] = STORE[storeKey] || {}
  STORE[storeKey][id] = { ...(STORE[storeKey][id] || {}), texto }
  notify()
}

export const inc = (storeKey, id) => {
  STORE[storeKey] = STORE[storeKey] || {}
  const curr = STORE[storeKey][id]?.quantidade || 0
  STORE[storeKey][id] = { ...(STORE[storeKey][id] || {}), quantidade: curr + 1 }
  notify()
}

export const dec = (storeKey, id) => {
  STORE[storeKey] = STORE[storeKey] || {}
  const curr = STORE[storeKey][id]?.quantidade || 0
  STORE[storeKey][id] = { ...(STORE[storeKey][id] || {}), quantidade: Math.max(0, curr - 1) }
  notify()
}

export const addItem = (storeKey, texto) => {
  STORE[storeKey] = STORE[storeKey] || {}
  const id = `custom-${Date.now()}`
  STORE[storeKey][id] = { texto, quantidade: 0 }
  notify()
  return id
}

export const getAllWithQuantities = (mandamentos) => {
  const result = []
  mandamentos.forEach((m) => {
    const items = getItems(`${m.uid}`, m.pecados)
    items.filter((it) => (it.quantidade || 0) > 0).forEach((it) => {
      result.push({ mandamentoUid: m.uid, mandamentoDisplayId: m.displayId, mandamentoTitulo: m.titulo, texto: it.texto, quantidade: it.quantidade })
    })
  })
  return result
}
