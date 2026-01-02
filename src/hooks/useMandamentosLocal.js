import { useEffect, useMemo, useState } from 'react'
import { getItems, inc as storeInc, dec as storeDec, setTexto as storeSetTexto, addItem as storeAddItem, subscribe } from '../store/mandamentosStore'

export default function useMandamentosLocal(mandamentoId, basePecados) {
  const [tick, setTick] = useState(0)

  useEffect(() => {
    const unsub = subscribe(() => setTick((t) => t + 1))
    return unsub
  }, [])

  const items = useMemo(() => {
    return getItems(mandamentoId, basePecados)
  }, [tick, mandamentoId, basePecados])

  const inc = (id) => storeInc(mandamentoId, id)
  const dec = (id) => storeDec(mandamentoId, id)
  const setTexto = (id, texto) => storeSetTexto(mandamentoId, id, texto)
  const addItem = (texto) => storeAddItem(mandamentoId, texto)

  return { items, inc, dec, setTexto, addItem }
}
