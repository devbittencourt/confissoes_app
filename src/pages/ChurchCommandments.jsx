import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { mandamentosIgreja, perguntasIniciais } from '../utils/dataset'
import useExameState from '../hooks/useExameState'
import PerguntaItem from '../components/PerguntaItem'

export default function ChurchCommandments() {
  const navigate = useNavigate()
  const exame = useExameState()
  return (
    <div className="relative flex h-full min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white antialiased selection:bg-primary selection:text-white">
      <header className="sticky top-0 z-50 flex items-center justify-between bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md p-4 pb-2 border-b border-gray-200 dark:border-gray-800">
        <button onClick={() => navigate(-1)} aria-label="Voltar" className="flex size-10 items-center justify-center rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors text-slate-900 dark:text-white"><span className="material-symbols-outlined text-2xl">arrow_back_ios_new</span></button>
        <h1 className="text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-10">Mandamentos da Igreja</h1>
      </header>
      <div className="px-4 py-4"><p className="text-slate-600 dark:text-gray-300 text-base font-normal leading-relaxed">Reflita sobre os cinco mandamentos da Igreja para preparar seu exame de consciência. Toque para ver os detalhes.</p></div>
      <div className="flex-1 flex flex-col px-4 gap-3 pb-24">
        {mandamentosIgreja.map((m) => (
          <details key={m.id} className="group flex flex-col rounded-xl bg-surface-light dark:bg-surface-dark shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden transition-all duration-300">
            <summary className="flex cursor-pointer items-center justify-between p-4 bg-surface-light dark:bg-surface-dark hover:bg-gray-50 dark:hover:bg-[#232d3f] transition-colors select-none">
              <div className="flex items-center gap-3"><div className="flex items-center justify-center size-8 rounded-full bg-primary/10 text-primary font-bold text-sm">{m.id}</div><p className="text-slate-900 dark:text-white text-base font-medium leading-normal">{m.titulo}</p></div>
              <span className="material-symbols-outlined text-gray-400 animate-rotate">expand_more</span>
            </summary>
            <div className="px-4 pb-4 pt-0 bg-surface-light dark:bg-surface-dark">
              <div className="h-px w-full bg-gray-100 dark:bg-gray-700 mb-3"></div>
              <p className="text-slate-500 dark:text-gray-400 text-sm italic mb-4">Reflita sobre este preceito da Igreja.</p>
              <div className="space-y-3">
                {(perguntasIniciais.igreja[m.id] || []).map((p) => (
                  <PerguntaItem key={p.id} pergunta={p} state={exame.state} onToggle={exame.togglePergunta} onInc={exame.incPergunta} onDec={exame.decPergunta} />
                ))}
              </div>
            </div>
          </details>
        ))}
      </div>
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md border-t border-gray-200 dark:border-gray-800 z-40">
        <Link to="/report" className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-blue-700 transition-colors shadow-lg shadow-blue-900/20 active:scale-[0.98]">
          <span className="truncate">Concluir Reflexão</span>
        </Link>
      </div>
    </div>
  )
}
