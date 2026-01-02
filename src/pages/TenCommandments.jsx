import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { perguntasIniciais } from '../utils/dataset'
import { todosMandamentos } from '../utils/mandamentos'
import MandamentoBlock from '../components/MandamentoBlock'
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
            <MandamentoBlock key={m.grupo + m.id} m={m} />
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
