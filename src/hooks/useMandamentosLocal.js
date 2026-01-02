import { useEffect, useMemo, useState } from 'react'
import { getItems, inc as storeInc, dec as storeDec, setTexto as storeSetTexto, addItem as storeAddItem, subscribe } from '../store/mandamentosStore'

export default function useMandamentosLocal(storeKey, basePecados) {
  const [tick, setTick] = useState(0)

  useEffect(() => {
    const unsub = subscribe(() => setTick((t) => t + 1))
    return unsub
  }, [])

  const items = useMemo(() => {
    return getItems(storeKey, basePecados)
  }, [tick, storeKey, basePecados])

  const inc = (id) => storeInc(storeKey, id)
  const dec = (id) => storeDec(storeKey, id)
  const setTexto = (id, texto) => storeSetTexto(storeKey, id, texto)
  const addItem = (texto) => storeAddItem(storeKey, texto)

  return { items, inc, dec, setTexto, addItem }
}
