import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function SettingsPage() {
  const navigate = useNavigate()
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-gray-900 dark:text-white antialiased transition-colors duration-200 min-h-screen">
      <header className="sticky top-0 z-50 bg-background-light dark:bg-background-dark/95 backdrop-blur-md border-b border-gray-200 dark:border-border-dark">
        <div className="flex items-center justify-between px-4 py-3">
          <button onClick={() => navigate(-1)} className="flex items-center justify-center p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"><span className="material-symbols-outlined text-gray-900 dark:text-white" style={{ fontSize: '24px' }}>arrow_back</span></button>
          <h1 className="text-lg font-bold text-center flex-1 pr-10">Configurações</h1>
        </div>
      </header>
      <main className="flex flex-col w-full max-w-md mx-auto p-4 pb-12 gap-6">
        <section>
          <h2 className="px-4 pb-2 pt-2 text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">Exame de Consciência</h2>
          <div className="bg-surface-light dark:bg-surface-dark rounded-xl overflow-hidden shadow-sm border border-gray-200 dark:border-border-dark">
            <div className="flex items-center justify-between p-4 border-b border-gray-100 dark:border-border-dark">
              <div className="flex flex-col"><span className="text-base font-medium">Lembrete Diário</span><span className="text-sm text-gray-500 dark:text-gray-400">Notificar para o exame</span></div>
              <label className="relative inline-flex items-center cursor-pointer"><input defaultChecked className="sr-only peer" type="checkbox" /><div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div></label>
            </div>
            <div className="p-6 flex flex-col items-center justify-center border-b border-gray-100 dark:border-border-dark bg-gray-50/50 dark:bg-[#151b26]/50">
              <div className="flex items-end gap-2 mb-2">
                <div className="flex flex-col items-center gap-1"><div className="bg-surface-light dark:bg-[#282e39] px-4 py-3 rounded-lg border border-gray-200 dark:border-transparent shadow-sm"><span className="text-3xl font-bold tracking-tight text-primary">21</span></div><span className="text-xs font-medium text-gray-400 uppercase">Horas</span></div>
                <span className="text-2xl font-bold text-gray-400 mb-6">:</span>
                <div className="flex flex-col items-center gap-1"><div className="bg-surface-light dark:bg-[#282e39] px-4 py-3 rounded-lg border border-gray-200 dark:border-transparent shadow-sm"><span className="text-3xl font-bold tracking-tight text-white dark:text-white">00</span></div><span className="text-xs font-medium text-gray-400 uppercase">Minutos</span></div>
              </div>
              <p className="text-xs text-center text-gray-500 max-w-[200px]">Horário definido para sua reflexão diária.</p>
            </div>
          </div>
        </section>
        <section>
          <h2 className="px-4 pb-2 pt-2 text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">Geral</h2>
          <div className="bg-surface-light dark:bg-surface-dark rounded-xl overflow-hidden shadow-sm border border-gray-200 dark:border-border-dark flex flex-col divide-y divide-gray-100 dark:divide-border-dark">
            <button className="w-full text-left flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-[#242c3d] transition-colors"><div className="flex items-center gap-3"><span className="material-symbols-outlined text-gray-500 text-[20px]">info</span><p className="text-base font-medium">Sobre o App</p></div><span className="material-symbols-outlined text-gray-400 text-xl">chevron_right</span></button>
          </div>
        </section>
        <footer className="mt-4 flex flex-col items-center justify-center gap-2 text-center">
          <p className="text-xs text-gray-400">Versão 1.0.4</p>
          <p className="text-xs text-gray-500 dark:text-gray-600 italic max-w-xs">"Cria em mim, ó Deus, um coração puro, e renova em mim um espírito reto." — Salmo 51:10</p>
        </footer>
      </main>
    </div>
  )
}
