import { useMemo } from 'react'
import { versiculos } from '../utils/versiculos'

export default function useVersiculoDoDia() {
  return useMemo(() => {
    const idx = Math.floor(Math.random() * versiculos.length)
    return versiculos[idx]
  }, [])
}
