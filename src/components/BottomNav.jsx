import React from 'react'
import { Link } from 'react-router-dom'

export default function BottomNav({ active }) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 border-t border-gray-200 dark:border-[#282e39] bg-white dark:bg-[#1c1f27] px-6 py-2 pb-5 z-50">
      <div className="flex items-center justify-between max-w-md mx-auto">
        <Link to="/" className={`flex flex-1 flex-col items-center justify-center gap-1 ${active === 'home' ? 'text-primary' : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-300'} transition-colors`}>
          <span className={`material-symbols-outlined ${active === 'home' ? 'fill' : ''}`}>home</span>
          <span className="text-[10px] font-bold tracking-wide">Início</span>
        </Link>
        <Link to="/select-guide" className={`flex flex-1 flex-col items-center justify-center gap-1 ${active === 'exam' ? 'text-primary' : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-300'} transition-colors`}>
          <span className={`material-symbols-outlined ${active === 'exam' ? 'fill' : ''}`}>checklist</span>
          <span className="text-[10px] font-medium tracking-wide">Exame</span>
        </Link>
        <Link to="/settings" className={`flex flex-1 flex-col items-center justify-center gap-1 ${active === 'profile' ? 'text-primary' : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-300'} transition-colors`}>
          <span className={`material-symbols-outlined ${active === 'profile' ? 'fill' : ''}`}>person</span>
          <span className="text-[10px] font-medium tracking-wide">Perfil</span>
        </Link>
      </div>
    </nav>
  )
}
