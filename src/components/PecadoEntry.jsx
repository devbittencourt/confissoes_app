import React, { useEffect, useRef } from 'react'
import QuantidadeControl from './QuantidadeControl'

export default function PecadoEntry({ item, onInc, onDec, onTexto }) {
  const ref = useRef(null)
  useEffect(() => {
    if (!ref.current) return
    ref.current.style.height = 'auto'
    ref.current.style.height = `${ref.current.scrollHeight}px`
  }, [item.texto])
  return (
    <div className="flex items-start justify-between gap-4 p-3 rounded-lg bg-gray-50 dark:bg-background-dark border border-gray-100 dark:border-gray-700/50">
      <textarea
        ref={ref}
        value={item.texto}
        onChange={(e) => onTexto(e.target.value)}
        className="flex-1 bg-transparent text-slate-700 dark:text-gray-300 text-sm focus:outline-none resize-none leading-snug"
        rows={1}
        aria-label="Editar item de exame"
      />
      <QuantidadeControl value={item.quantidade || 0} onInc={onInc} onDec={onDec} />
    </div>
  )
}
