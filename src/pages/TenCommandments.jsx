import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { perguntasIniciais } from '../utils/dataset'
import { todosMandamentos } from '../utils/mandamentos'
import useExameState from '../hooks/useExameState'
import PerguntaItem from '../components/PerguntaItem'

export default function TenCommandments() {
  const navigate = useNavigate()
  const exame = useExameState()
  return (
    <div className="relative flex flex-col min-h-screen w-full overflow-x-hidden max-w-md mx-auto shadow-2xl bg-background-light dark:bg-background-dark font-display antialiased text-slate-900 dark:text-white transition-colors duration-200">
      <header className="sticky top-0 z-50 flex items-center justify-between bg-surface-light/95 dark:bg-background-dark/95 backdrop-blur-md px-4 py-3 border-b border-gray-200 dark:border-gray-800">
        <button onClick={() => navigate(-1)} className="flex items-center justify-center w-10 h-10 -ml-2 rounded-full active:bg-gray-200 dark:active:bg-gray-800 transition-colors text-slate-600 dark:text-white"><span className="material-symbols-outlined text-[24px]">arrow_back</span></button>
        <h2 className="text-lg font-bold leading-tight tracking-tight flex-1 text-center pr-8">Exame de Consciência</h2>
      </header>
      <main className="flex-1 flex flex-col px-4 pb-32 pt-4">
        <div className="mb-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-2">Os Dez Mandamentos</h1>
          <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed">Toque em um mandamento para refletir e marcar as faltas cometidas. Seja sincero em seu coração.</p>
        </div>
        <div className="flex flex-col gap-4">
          {todosMandamentos.map((m) => (
            <details key={m.id} className="group flex flex-col bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 overflow-hidden transition-all duration-300">
              <summary className="flex cursor-pointer items-center justify-between p-4 bg-inherit hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors select-none">
                <div className="flex items-center gap-4"><span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-sm">{m.id}</span><p className="font-semibold text-sm sm:text-base pr-4">{m.titulo}</p></div>
                <span className="material-symbols-outlined text-gray-400 group-open:rotate-180 transition-transform duration-300">expand_more</span>
              </summary>
              <div className="px-4 pb-4 pt-0 border-t border-transparent dark:group-open:border-gray-700/50">
                <p className="text-sm text-slate-500 dark:text-slate-400 py-3 italic border-b border-gray-100 dark:border-gray-700/50 mb-2">Pecados comuns relacionados:</p>
                <ul className="list-disc pl-6 text-sm text-slate-700 dark:text-slate-300 space-y-1 mb-3">
                  {m.pecados.map((pecado, i) => (
                    <li key={i}>{pecado}</li>
                  ))}
                </ul>
                <div className="flex flex-col gap-2">
                  {((m.grupo === 'dez' ? perguntasIniciais.dez[m.id] : perguntasIniciais.igreja[m.id]) || []).map((p) => (
                    <PerguntaItem key={p.id} pergunta={p} state={exame.state} onToggle={exame.togglePergunta} onInc={exame.incPergunta} onDec={exame.decPergunta} />
                  ))}
                </div>
              </div>
            </details>
          ))}
        </div>
      </main>
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-surface-light dark:bg-background-dark border-t border-gray-200 dark:border-gray-800 p-4 max-w-md mx-auto backdrop-blur-xl bg-opacity-90 dark:bg-opacity-90">
        <Link to="/report" className="w-full bg-primary hover:bg-blue-600 text-white font-bold py-3.5 px-4 rounded-xl shadow-lg shadow-primary/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2">
          <span>Concluir Exame</span><span className="material-symbols-outlined text-[20px]">check</span>
        </Link>
      </div>
    </div>
  )
}
