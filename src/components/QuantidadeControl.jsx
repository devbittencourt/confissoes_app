import React from 'react'

export default function QuantidadeControl({ value, onInc, onDec }) {
  return (
    <div className="flex items-center gap-3 bg-slate-100 dark:bg-slate-800/50 rounded-lg p-1">
      <button onClick={onDec} className="flex size-8 items-center justify-center rounded bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-200 shadow-sm hover:bg-slate-50 dark:hover:bg-slate-600 transition-colors"><span className="material-symbols-outlined text-sm font-bold">remove</span></button>
      <span className="w-4 text-center text-sm font-semibold tabular-nums text-slate-900 dark:text-white">{value}</span>
      <button onClick={onInc} className="flex size-8 items-center justify-center rounded bg-white dark:bg-slate-700 text-primary shadow-sm hover:bg-slate-50 dark:hover:bg-slate-600 transition-colors"><span className="material-symbols-outlined text-sm font-bold">add</span></button>
    </div>
  )
}
