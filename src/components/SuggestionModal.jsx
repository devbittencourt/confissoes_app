import React from 'react'

export default function SuggestionModal({ open, onClose }) {
  if (!open) return null
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="relative w-[92%] max-w-2xl rounded-xl border border-gray-200 dark:border-[#2a3441] bg-white dark:bg-[#1c1f27] shadow-xl">
        <div className="flex items-center justify-between p-3 border-b border-gray-100 dark:border-[#2a3441]">
          <p className="text-sm font-bold">Sugestões</p>
          <button onClick={onClose} className="flex items-center justify-center size-8 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <div className="p-3">
          <div className="w-full overflow-hidden rounded-lg border border-gray-100 dark:border-[#2a3441] bg-white">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSf0OfK71sy15jtOVbOG8mNewZ4JtepY9dFJ0bA3-Fn_JEU7sg/viewform?embedded=true"
              width="100%"
              height="540"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              title="Formulário de Sugestões"
            >
            </iframe>
          </div>
        </div>
      </div>
    </div>
  )
}
