import React from 'react'
import { Link } from 'react-router-dom'
import BottomNav from '../components/BottomNav'

export default function NotesPage() {
  return (
    <div className="relative flex h-full min-h-screen w-full flex-col overflow-x-hidden pb-20 bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white transition-colors duration-200">
      <div className="sticky top-0 z-20 flex items-center bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md p-4 pb-2 justify-between border-b border-slate-200 dark:border-slate-800">
        <h2 className="text-xl font-bold leading-tight tracking-[-0.015em] flex-1 text-slate-900 dark:text-white">Minhas Notas</h2>
        <div className="flex items-center gap-4">
          <button className="flex items-center justify-center text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-white transition-colors"><span className="material-symbols-outlined">visibility_off</span></button>
          <Link to="/settings" className="flex items-center justify-center text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-white transition-colors"><span className="material-symbols-outlined">settings</span></Link>
        </div>
      </div>
      <div className="px-4 py-3 sticky top-[60px] z-10 bg-background-light dark:bg-background-dark">
        <label className="flex flex-col h-12 w-full">
          <div className="flex w-full flex-1 items-stretch rounded-lg h-full shadow-sm">
            <div className="text-slate-400 flex border-none bg-surface-light dark:bg-surface-dark items-center justify-center pl-4 rounded-l-lg border-r-0"><span className="material-symbols-outlined">search</span></div>
            <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border-none bg-surface-light dark:bg-surface-dark focus:border-none h-full placeholder:text-slate-400 px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal" placeholder="Buscar nas notas..." />
          </div>
        </label>
      </div>
      <div className="flex gap-3 px-4 py-1 overflow-x-auto no-scrollbar pb-4">
        <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary pl-4 pr-4 shadow-md shadow-primary/20"><p className="text-white text-sm font-medium leading-normal">Todas</p></button>
        <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-slate-700 hover:border-primary/50 pl-4 pr-4 transition-all"><p className="text-slate-600 dark:text-slate-300 text-sm font-medium leading-normal">4º Mandamento</p></button>
        <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-slate-700 hover:border-primary/50 pl-4 pr-4 transition-all"><p className="text-slate-600 dark:text-slate-300 text-sm font-medium leading-normal">7º Mandamento</p></button>
      </div>
      <div className="flex flex-col gap-4 px-4 py-2">
        <div className="group flex flex-col gap-3 bg-surface-light dark:bg-surface-dark p-4 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 hover:border-primary/30 dark:hover:border-primary/30 transition-all cursor-pointer">
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-2"><span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300">4º Mandamento</span><span className="text-xs text-slate-400">Ontem</span></div>
            <button className="text-slate-400 hover:text-primary transition-colors"><span className="material-symbols-outlined text-xl">more_horiz</span></button>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex flex-1 flex-col justify-center gap-1">
              <h3 className="text-slate-900 dark:text-white text-lg font-semibold leading-tight">Impaciência no trabalho</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-relaxed line-clamp-2">Perdi a calma com um colega durante a reunião de segunda-feira...</p>
            </div>
          </div>
        </div>
        <div className="group flex flex-col gap-3 bg-surface-light dark:bg-surface-dark p-4 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 hover:border-primary/30 dark:hover:border-primary/30 transition-all cursor-pointer">
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-2"><span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300">8º Mandamento</span><span className="text-xs text-slate-400">Terça-feira</span></div>
            <button className="text-slate-400 hover:text-primary transition-colors"><span className="material-symbols-outlined text-xl">more_horiz</span></button>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex flex-1 flex-col justify-center gap-1">
              <h3 className="text-slate-900 dark:text-white text-lg font-semibold leading-tight">Mentira pequena</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-relaxed line-clamp-2">Disse que estava ocupado para não atender uma ligação...</p>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed bottom-24 right-6 z-30">
        <button className="flex items-center justify-center w-14 h-14 bg-primary rounded-full shadow-lg shadow-primary/40 hover:scale-105 active:scale-95 transition-transform duration-200 group">
          <span className="material-symbols-outlined text-white text-3xl group-hover:rotate-90 transition-transform duration-300">add</span>
        </button>
      </div>
      <BottomNav active="exam" />
    </div>
  )
}
