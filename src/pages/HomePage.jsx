import React from 'react'
import { Link } from 'react-router-dom'
import BottomNav from '../components/BottomNav'
import VerseCard from '../components/VerseCard'

export default function HomePage() {
  return (
    <div className="relative flex h-full min-h-screen w-full flex-col overflow-x-hidden pb-20">
      <header className="flex items-center justify-between p-4 pb-2 bg-background-light dark:bg-background-dark sticky top-0 z-10 border-b border-gray-200 dark:border-[#282e39]">
        <div className="flex flex-col">
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Bem-vindo</span>
          <h2 className="text-2xl font-bold leading-tight tracking-[-0.015em]">Paz e bem</h2>
        </div>
        <Link to="/settings" className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 dark:bg-[#1c1f27] text-gray-700 dark:text-white hover:bg-gray-300 dark:hover:bg-[#282e39] transition-colors">
          <span className="material-symbols-outlined">settings</span>
        </Link>
      </header>
      <main className="flex flex-col gap-4 max-w-md mx-auto w-full">
        <div className="px-4 pt-2 w-full @container">
          <div className="flex flex-col items-stretch justify-start rounded-xl overflow-hidden shadow-sm bg-white dark:bg-[#1c1f27] border border-gray-100 dark:border-[#282e39] transition-colors">
            <div className="w-full bg-center bg-no-repeat h-40 bg-cover relative" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBE5v9k0vm-euOUdgDeMiuib5XsPcrXuUDs58Y-G72rUib1G3elPm3Z69XjfAoSbN43qaubpznIZTYbk3j1PKEWCwSwUFhcyMkr9BmIs_mWPfxMBSw3hMh4xRwf0lmes4m8BYp5WRjCPOSr1pyHOj3IMnSEt0j2Yp_JYEvmcvRzTvMRzev0tC0i82bitCwsv0p_Mza2b6mC6QhxMkv9c0WbwSvcEu0WVPZ1HPHbdMNaOWK2TbgllYr2hz_JNEWWXQx8Z-paRHrNizc")' }}>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-3 left-4">
                <span className="inline-block px-2 py-1 rounded-md bg-white/20 backdrop-blur-md text-xs font-bold text-white mb-1 border border-white/10">Liturgia Diária</span>
              </div>
            </div>
            <VerseCard />
          </div>
        </div>
        <div className="px-4 py-2 w-full">
          <Link to="/select-guide" className="group w-full flex items-center justify-between overflow-hidden rounded-xl h-16 px-6 bg-primary shadow-lg shadow-primary/30 text-white hover:bg-primary/90 transition-all active:scale-[0.98]">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20">
                <span className="material-symbols-outlined">play_circle</span>
              </div>
              <div className="flex flex-col items-start">
                <span className="text-base font-bold leading-none">Iniciar Exame</span>
                <span className="text-xs text-blue-100 mt-1 font-medium">Consciência e Reflexão</span>
              </div>
            </div>
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </Link>
        </div>
        <div className="px-4">
          <h3 className="text-base font-bold mb-3 px-1">Acesso Rápido</h3>
          <div className="grid grid-cols-2 gap-3">
            <Link to="/notes" className="relative flex flex-col justify-end p-4 h-32 rounded-xl overflow-hidden group text-left shadow-sm border border-gray-100 dark:border-[#282e39]">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBQMvjak7Aty6wpWkNGV3_Fc4fD89tS0_KwZ-EhoXrgxISP_BJb3uH_8lJrZ4kB7qDLK82-5W2lXkbZLo9gY7Y1FSTmYRnpFRklHIYQAg6-R8OftS-aKeSGiZCJMoCbTgyIIiyYeL90OjCF3LHQayJUNgp7dmk15B_vt4-YoEZ9pDhDS6ECShQ4ess-XZvBygtxlLcrcnfqeq9Vq5yOPchMyS5Zovla1nEyLds7Q0Dy7_D1RGfLrSq2cFNZfOPbUUysAHRbdMOZxMo")' }}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10"></div>
              <div className="relative z-10 flex flex-col gap-1">
                <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-1 text-white">
                  <span className="material-symbols-outlined text-[20px]">edit_note</span>
                </div>
                <span className="text-white text-sm font-bold leading-tight">Minhas Notas</span>
              </div>
            </Link>
            <Link to="/report" className="relative flex flex-col justify-end p-4 h-32 rounded-xl overflow-hidden group text-left shadow-sm border border-gray-100 dark:border-[#282e39]">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBnH1_P4Zt1n6rX5YSuh1o81OJcRbowWJ-ORH1JboqeFZ_Ss2SfXpGc9yAFvs9S7ylT8XFkXJqNiAkO8ZhpM3VPOK54SbApMM9m-GroANw0MsAB5K_4TlQuDqnSfBbg6Pz9Fgcu07FovLAcZjwzSqvoQZqjsPeel14yi9ikuaQhuZ91Xjz1SDr_v-QZs0QjcCAhURL56w3WCh1s6EZ4LUDEvVpT7lZq2ziQ60LeA80u311UzWnqxQhV5L8mhwmkI9MhXPBpli2NDdg")' }}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10"></div>
              <div className="relative z-10 flex flex-col gap-1">
                <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-1 text-white">
                  <span className="material-symbols-outlined text-[20px]">bar_chart</span>
                </div>
                <span className="text-white text-sm font-bold leading-tight">Meu Relatório</span>
              </div>
            </Link>
          </div>
        </div>
        <div className="h-8"></div>
      </main>
      <BottomNav active="home" />
    </div>
  )
}
