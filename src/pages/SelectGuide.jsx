import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function SelectGuide() {
  const navigate = useNavigate()
  return (
    <div className="relative flex h-full min-h-screen w-full flex-col bg-background-light dark:bg-background-dark text-[#111318] dark:text-white font-display overflow-x-hidden antialiased">
      <div className="sticky top-0 z-50 flex items-center bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md p-4 pb-2 justify-between border-b border-[#e5e7eb] dark:border-[#29303d]">
        <button onClick={() => navigate(-1)} className="text-[#111318] dark:text-white flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
          <span className="material-symbols-outlined text-[24px]">close</span>
        </button>
        <h2 className="text-[#111318] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-10">Exame de Consciência</h2>
      </div>
      <main className="flex-1 flex flex-col w-full max-w-md mx-auto">
        <div className="px-5 pt-8 pb-4">
          <h3 className="text-[#111318] dark:text-white tracking-tight text-3xl font-bold leading-tight text-left pb-3">Escolha um guia</h3>
          <p className="text-[#637588] dark:text-[#9da6b9] text-base font-normal leading-relaxed text-left">
            Para realizar uma boa confissão, examine sua vida à luz da Palavra de Deus. Selecione um dos caminhos abaixo para iniciar sua reflexão.
          </p>
        </div>
        <div className="flex flex-col gap-6 px-4 pb-12 mt-2">
          <div className="@container">
            <Link to="/exam-ten-commandments" className="group flex flex-col items-stretch justify-start rounded-2xl shadow-sm hover:shadow-md transition-shadow bg-surface-light dark:bg-surface-dark overflow-hidden border border-[#e5e7eb] dark:border-transparent">
              <div className="relative w-full aspect-video overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                <div className="w-full h-full bg-center bg-no-repeat bg-cover group-hover:scale-105 transition-transform duration-500" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAr4AtqCrY9F2lzx8vGMvOt7sHr6UusRtkanx3aIy4NWN6iaMI1f1W3g-1BrKz-X5bMlV3OKxskfsAsvfXxZ1RtJYaGZW2jtfcie7EdG6OhZsYwCa8ix-qYnaIsxO75XXPlzyaBg_Yq3kWXU52ZNvi0VEyRg27UTCJp5vn1IFkVCEakT0A00dOAaW4dfBfwq40camwdcyFg-AVkmJdqV-E8m9cqCnM3saoptEWt3VMChCR0f4oXS5tAxCf80ugxwkpIYzbb8_LEjBE")' }}></div>
                <div className="absolute bottom-3 left-4 z-20">
                  <span className="inline-flex items-center justify-center rounded-full bg-primary/90 px-2.5 py-0.5 text-xs font-medium text-white backdrop-blur-sm">Clássico</span>
                </div>
              </div>
              <div className="flex w-full grow flex-col gap-3 p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="text-[#111318] dark:text-white text-xl font-bold leading-tight tracking-[-0.015em] mb-1">Os Dez Mandamentos</h4>
                    <p className="text-[#637588] dark:text-[#9da6b9] text-sm font-normal leading-normal">
                      Baseado na Lei Divina entregue a Moisés. Um guia completo sobre o amor a Deus e ao próximo.
                    </p>
                  </div>
                </div>
                <div className="pt-2 mt-auto">
                  <button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-5 bg-primary hover:bg-primary/90 active:scale-[0.98] transition-all text-white text-base font-bold leading-normal shadow-[0_1px_2px_rgba(0,0,0,0.1)]">
                    <span className="material-symbols-outlined mr-2 text-[20px]">play_arrow</span>
                    <span className="truncate">Iniciar Exame</span>
                  </button>
                </div>
              </div>
            </Link>
          </div>
          <div className="@container">
            <Link to="/exam-church-commandments" className="group flex flex-col items-stretch justify-start rounded-2xl shadow-sm hover:shadow-md transition-shadow bg-surface-light dark:bg-surface-dark overflow-hidden border border-[#e5e7eb] dark:border-transparent">
              <div className="relative w-full aspect-video overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                <div className="w-full h-full bg-center bg-no-repeat bg-cover group-hover:scale-105 transition-transform duration-500" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCuGlid8T4R29MgmMjQVGZoDj9fGACuN-DuW-NB8GUVntrirYecQpk3zFEFNh5nlY_tqNeaiO3WS5Ni1CynKppcm772L2NFWA--g5SFE0r4lQAMVSTdrqn-1pSDgWSM7QmTyDMOObWlWaarVEaouRoOk1o7FbGPleNFXAe7mHWjc2OYap2JhZnu0iQoc_98RG5DifUpUYY1IOrraVk5B9CrGc57FCwA5YjQa4GpnLN2aKfK4-bwQ2cOvyl3PLmGGi7C8uUF9ASNZwc")' }}></div>
                <div className="absolute bottom-3 left-4 z-20">
                  <span className="inline-flex items-center justify-center rounded-full bg-purple-600/90 px-2.5 py-0.5 text-xs font-medium text-white backdrop-blur-sm">Eclesial</span>
                </div>
              </div>
              <div className="flex w-full grow flex-col gap-3 p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="text-[#111318] dark:text-white text-xl font-bold leading-tight tracking-[-0.015em] mb-1">Mandamentos da Igreja</h4>
                    <p className="text-[#637588] dark:text-[#9da6b9] text-sm font-normal leading-normal">
                      Os cinco preceitos fundamentais que garantem aos fiéis o mínimo indispensável na oração e esforço moral.
                    </p>
                  </div>
                </div>
                <div className="pt-2 mt-auto">
                  <button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-5 bg-[#1c1f27] dark:bg-[#2a2e38] hover:bg-gray-200 dark:hover:bg-[#343a46] border border-[#e5e7eb] dark:border-transparent active:scale-[0.98] transition-all text-[#111318] dark:text-white text-base font-bold leading-normal">
                    <span className="material-symbols-outlined mr-2 text-[20px]">church</span>
                    <span className="truncate">Iniciar Exame</span>
                  </button>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="flex justify-center pb-8 mt-auto">
          <button className="text-sm font-medium text-[#637588] dark:text-[#9da6b9] hover:text-primary dark:hover:text-primary transition-colors flex items-center gap-1">
            <span className="material-symbols-outlined text-[18px]">history</span>
            Ver histórico de confissões
          </button>
        </div>
      </main>
    </div>
  )
}
