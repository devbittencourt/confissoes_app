import React from 'react'
import QuantidadeControl from './QuantidadeControl'

export default function PerguntaItem({ pergunta, state, onToggle, onInc, onDec }) {
  const s = state.perguntas[pergunta.id] || { checked: false, quantidade: pergunta.quantidade || 0 }
  return (
    <div className="group flex flex-col rounded-xl bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden transition-all hover:border-primary/50 dark:hover:border-primary/50">
      <div className="flex items-start gap-4 p-4">
        <div className="pt-1"><input checked={!!s.checked} onChange={() => onToggle(pergunta.id)} className="size-6 rounded border-slate-300 dark:border-slate-600 bg-transparent text-primary focus:ring-primary/20 dark:focus:ring-offset-slate-900 transition-colors cursor-pointer" type="checkbox" /></div>
        <div className="flex-1 flex flex-col gap-1">
          <p className="text-base font-medium text-slate-900 dark:text-white leading-snug">{pergunta.texto}</p>
          <p className="text-sm text-slate-500 dark:text-slate-400">Toque para adicionar nota pessoal...</p>
        </div>
      </div>
      <div className="flex items-center justify-between px-4 pb-4 pt-0">
        <button className="flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors"><span className="material-symbols-outlined text-[18px]">edit_note</span><span>Anotar</span></button>
        <QuantidadeControl value={s.quantidade || 0} onInc={() => onInc(pergunta.id)} onDec={() => onDec(pergunta.id)} />
      </div>
    </div>
  )
}
