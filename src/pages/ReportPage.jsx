import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { todosMandamentos } from '../utils/mandamentos'
import { getAllWithQuantities } from '../store/mandamentosStore'

export default function ReportPage() {
  const navigate = useNavigate()
  const pecadosMarcados = getAllWithQuantities(todosMandamentos)
  const cont = pecadosMarcados.reduce((acc, it) => {
    acc[it.mandamentoUid] = (acc[it.mandamentoUid] || 0) + (it.quantidade || 0)
    return acc
  }, {})
  const maiorUid = Object.entries(cont).sort((a, b) => b[1] - a[1])[0]?.[0]
  const maiorLutaMand = maiorUid ? todosMandamentos.find((m) => String(m.uid) === String(maiorUid)) : null
  const maiorLutaLabel = maiorLutaMand ? `${maiorLutaMand.displayId} — ${maiorLutaMand.titulo}` : '—'
  const now = new Date()
  const month = now.toLocaleString('pt-BR', { month: 'long' })
  const monthCap = month.charAt(0).toUpperCase() + month.slice(1)
  const dataResumo = `${now.getDate()} de ${monthCap}`
  const [copied, setCopied] = useState(false)
  const handleCopy = async () => {
    const linhas = []
    linhas.push('Para Confessar')
    if (pecadosMarcados.length === 0) {
      linhas.push('Nenhum item marcado')
    } else {
    pecadosMarcados.forEach((item) => {
      linhas.push(item.texto)
      linhas.push(`${item.quantidade}x`)
      linhas.push('')
    })
    }
    linhas.push('Maior Luta')
    linhas.push(maiorLutaLabel)
    linhas.push('Mandamento com maior recorrência')
    const texto = linhas.join('\n')
    try {
      await navigator.clipboard.writeText(texto)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {}
  }
  return (
    <div className="relative flex h-full min-h-screen w-full flex-col overflow-x-hidden max-w-md mx-auto shadow-2xl bg-background-light dark:bg-background-dark font-display">
      <div className="flex items-center bg-background-light dark:bg-background-dark p-4 pb-2 justify-between sticky top-0 z-50 border-b border-gray-200 dark:border-[#282e39]">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="text-gray-900 dark:text-white p-2 -ml-2 rounded-full hover:bg-gray-200 dark:hover:bg-[#282e39] transition-colors"><span className="material-symbols-outlined">arrow_back</span></button>
          <h2 className="text-gray-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">Relatório de Exame</h2>
        </div>
        <div className="flex items-center justify-end gap-2"></div>
      </div>
      <div className="flex-1 flex flex-col p-4 gap-6">
        <div><p className="text-gray-500 dark:text-[#9da6b9] text-sm">{`Aqui está o resumo do seu exame de consciência realizado em ${dataResumo}.`}</p></div>
        <div className="flex flex-col items-start justify-between gap-4 rounded-xl border border-gray-200 dark:border-[#3b4354] bg-white dark:bg-[#1c212b] p-4 shadow-sm">
          <div className="flex items-center justify-between w-full">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-xl">visibility_off</span><p className="text-gray-900 dark:text-white text-base font-bold leading-tight">Modo Privacidade</p></div>
              <p className="text-gray-500 dark:text-[#9da6b9] text-xs font-normal leading-normal">Ocultar detalhes sensíveis na tela</p>
            </div>
            <label className="relative flex h-[28px] w-[48px] cursor-pointer items-center rounded-full border-none bg-gray-300 dark:bg-[#282e39] p-0.5 has-[:checked]:justify-end has-[:checked]:bg-primary transition-colors duration-200">
              <div className="h-[24px] w-[24px] rounded-full bg-white shadow-sm transition-all"></div>
              <input className="invisible absolute" type="checkbox" />
            </label>
          </div>
        </div>
        <div>
          <h2 className="text-gray-900 dark:text-white text-[20px] font-bold leading-tight tracking-[-0.015em] pb-3">Para Confessar</h2>
          <div className="bg-white dark:bg-[#1c212b] rounded-xl border border-gray-200 dark:border-[#3b4354] overflow-hidden shadow-sm">
            {pecadosMarcados.length === 0 && (
              <div className="p-4 text-sm text-gray-500 dark:text-[#9da6b9]">Nenhum item marcado ainda.</div>
            )}
            {pecadosMarcados.map((item, idx) => (
              <div key={idx} className="flex items-start justify-between p-4 border-b border-gray-100 dark:border-[#282e39]">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 h-2 w-2 rounded-full bg-red-500 shrink-0"></div>
                  <div className="flex flex-col">
                    <p className="text-gray-800 dark:text-gray-200 text-sm font-medium leading-normal">{item.texto}</p>
                  </div>
                </div>
                <span className="inline-flex items-center rounded-full bg-red-500/10 dark:bg-red-500/20 px-2 py-0.5 text-xs font-medium text-red-600 dark:text-red-400">{item.quantidade}x</span>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2 bg-gradient-to-br from-primary/20 to-primary/5 dark:from-primary/20 dark:to-[#1c212b] rounded-xl p-4 border border-primary/20 flex items-center justify-between">
            <div><p className="text-primary text-xs font-bold uppercase tracking-wider mb-1">Maior Luta</p><h3 className="text-gray-900 dark:text-white text-xl font-bold">{maiorLutaLabel}</h3><p className="text-gray-500 dark:text-[#9da6b9] text-xs mt-1">Mandamento com maior recorrência</p></div>
            <div className="bg-primary/20 p-3 rounded-full"><span className="material-symbols-outlined text-primary text-2xl">psychology</span></div>
          </div>
        </div>
        <div className="h-20"></div>
      </div>
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background-light via-background-light to-transparent dark:from-background-dark dark:via-background-dark dark:to-transparent max-w-md mx-auto">
        <div className="flex gap-3">
          <button onClick={handleCopy} className="flex-1 h-12 rounded-xl border border-gray-300 dark:border-[#3b4354] bg-white dark:bg-[#1c212b] text-gray-800 dark:text-gray-200 font-bold px-4 shadow-sm hover:bg-gray-50 dark:hover:bg-[#232a35] transition-colors">
            {copied ? 'Copiado!' : 'Copiar'}
          </button>
          <button className="flex-[1.5] bg-primary hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-primary/30 transition-all active:scale-[0.98]">
            <span className="material-symbols-outlined">church</span> Concluir e Rezar
          </button>
        </div>
      </div>
    </div>
  )
}
