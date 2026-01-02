import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { todosMandamentos } from '../utils/mandamentos'
import MandamentoBlock from '../components/MandamentoBlock'

export default function ExamDetail() {
  const navigate = useNavigate()
  const mVII = todosMandamentos.find((m) => m.displayId === 'VII')
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white overflow-x-hidden antialiased">
      <header className="sticky top-0 z-50 flex items-center justify-between bg-surface-light/95 dark:bg-surface-dark/95 backdrop-blur-md px-4 py-3 border-b border-slate-200 dark:border-slate-800 transition-colors">
        <div onClick={() => navigate(-1)} className="flex size-10 shrink-0 items-center justify-center rounded-full active:bg-slate-100 dark:active:bg-slate-800 cursor-pointer text-slate-900 dark:text-white">
          <span className="material-symbols-outlined">arrow_back</span>
        </div>
        <h2 className="text-lg font-bold leading-tight tracking-tight flex-1 text-center text-slate-900 dark:text-white">VII. Não roubarás</h2>
        <div className="flex size-10 items-center justify-center">
          <span className="material-symbols-outlined text-slate-400 dark:text-slate-500 cursor-pointer">help</span>
        </div>
      </header>
      <main className="flex-1 flex flex-col gap-6 p-4 pb-32">
        <div className="flex flex-col gap-3">
          <div className="flex justify-between items-end">
            <p className="text-sm font-semibold text-slate-900 dark:text-white">Progresso</p>
            <p className="text-xs font-medium text-slate-500 dark:text-slate-400">3 de 10 itens marcados</p>
          </div>
          <div className="h-2 w-full rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
            <div className="h-full rounded-full bg-primary transition-all duration-500 ease-out" style={{ width: '30%' }}></div>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-xl bg-slate-900 shadow-lg group">
          <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.4) 60%, rgba(0, 0, 0, 0.2) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCwul_ubTPIfSw6MoetXy4kGe0DZwmJWCUU9yRafZ-q7IFXEOzn072659NKQqCqHrXCJ84GVd6EdZOE0cq4oyTnWPVAdab73fq6SpU3Yr6fm6XWUmZ6Ekhh89qQWR4NztuN-N-61-Ae9x5b6RZ14J7uNHxKoFPjnZls13VwB0R4OMEnN4bzb3pI9o9L29B8sZOCfRlECKVi8LB33T4DjQBu-kl2jSpQlXTcAvKKoWYdtHPHIy1lkjFBPNmZ2a-qnKue8GSXw-3-kXs")' }}></div>
          <div className="relative flex flex-col justify-end p-6 pt-32 h-full">
            <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm w-fit">
              <span className="material-symbols-outlined text-[14px]">auto_stories</span>
              Reflexão
            </div>
            <h3 className="text-2xl font-bold leading-tight text-white mb-2">Honestidade e Justiça</h3>
            <p className="text-sm leading-relaxed text-slate-200">
              Reflita sobre a honestidade em suas ações e o respeito pela propriedade alheia. Considere não apenas o furto material, mas também a justiça em suas relações.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white px-1">Pecados comuns relacionados</h3>
          {mVII && <MandamentoBlock m={mVII} />}
        </div>
        <div className="h-8"></div>
      </main>
      <div className="fixed bottom-0 left-0 w-full bg-surface-light dark:bg-surface-dark border-t border-slate-200 dark:border-slate-800 px-4 py-4 pb-safe z-40 backdrop-blur-xl bg-opacity-95 dark:bg-opacity-95">
        <div className="flex gap-3">
          <button onClick={() => navigate(-1)} className="flex-1 flex items-center justify-center gap-2 h-12 rounded-lg border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold text-base hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
            <span className="material-symbols-outlined">chevron_left</span> Anterior
          </button>
          <Link to="/report" className="flex-[2] flex items-center justify-center gap-2 h-12 rounded-lg bg-primary text-white font-bold text-base shadow-lg shadow-primary/25 hover:bg-blue-600 transition-colors">
            Salvar Reflexão <span className="material-symbols-outlined">check</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
