import React from 'react'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import SelectGuide from './pages/SelectGuide'
import TenCommandments from './pages/TenCommandments'
import ChurchCommandments from './pages/ChurchCommandments'
import ExamDetail from './pages/ExamDetail'
import NotesPage from './pages/NotesPage'
import ReportPage from './pages/ReportPage'
import SettingsPage from './pages/SettingsPage'

export default function App() {
  return (
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/select-guide" element={<SelectGuide />} />
        <Route path="/exam-ten-commandments" element={<TenCommandments />} />
        <Route path="/exam-church-commandments" element={<ChurchCommandments />} />
        <Route path="/exam-detail" element={<ExamDetail />} />
        <Route path="/notes" element={<NotesPage />} />
        <Route path="/report" element={<ReportPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </MemoryRouter>
  )
}
