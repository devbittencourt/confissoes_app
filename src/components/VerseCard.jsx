import React from 'react'
import useVersiculoDoDia from '../hooks/useVersiculoDoDia'

export default function VerseCard() {
  const v = useVersiculoDoDia()
  return (
    <div className="flex w-full flex-col gap-3 p-5">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-primary text-sm font-semibold tracking-wide uppercase mb-1">{v.referencia}</p>
          <h3 className="text-lg font-bold leading-tight">Versículo do Dia</h3>
        </div>
        <button className="text-gray-400 hover:text-primary transition-colors">
          <span className="material-symbols-outlined">share</span>
        </button>
      </div>
      <p className="text-gray-600 dark:text-[#9da6b9] text-base font-normal leading-relaxed italic">"{v.texto}"</p>
    </div>
  )
}
