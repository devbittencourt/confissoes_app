import React from 'react'
import useMandamentosLocal from '../hooks/useMandamentosLocal'
import PecadoEntry from './PecadoEntry'

export default function MandamentoBlock({ m }) {
  const { items, inc, dec, setTexto, addItem } = useMandamentosLocal(m.id, m.pecados)
  return (
    <details className="group flex flex-col bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 overflow-hidden transition-all duration-300">
      <summary className="flex cursor-pointer items-center justify-between p-4 bg-inherit hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors select-none">
        <div className="flex items-center gap-4"><span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-sm">{m.id}</span><p className="font-semibold text-sm sm:text-base pr-4">{m.titulo}</p></div>
        <span className="material-symbols-outlined text-gray-400 group-open:rotate-180 transition-transform duration-300">expand_more</span>
      </summary>
      <div className="px-4 pb-4 pt-0 border-t border-transparent dark:group-open:border-gray-700/50">
        <p className="text-sm text-slate-500 dark:text-slate-400 py-3 italic">Pecados comuns relacionados:</p>
        <div className="flex flex-col gap-2 mb-3">
          {items.map((it) => (
            <PecadoEntry key={it.id} item={it} onInc={() => inc(it.id)} onDec={() => dec(it.id)} onTexto={(t) => setTexto(it.id, t)} />
          ))}
          <button onClick={() => addItem('')} className="self-start text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors flex items-center gap-1">
            <span className="material-symbols-outlined text-[18px]">add</span>Adicionar item
          </button>
        </div>
      </div>
    </details>
  )
}
