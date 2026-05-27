import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Toaster } from '@/components/ui/sonner'
import { AuthGuard } from '@/components/layout/AuthGuard'
import { MainLayout } from '@/components/layout/MainLayout'
import { Login } from '@/pages/Login'
import { Dashboard } from '@/pages/Dashboard'
import { Feed } from '@/pages/Feed'
import { Jobs } from '@/pages/Jobs'
import { People } from '@/pages/People'
import { Profile } from '@/pages/Profile'
import { ProfileViewPage } from '@/pages/ProfileViewPage'
import { Saved } from '@/pages/Saved'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          element={
            <AuthGuard>
              <MainLayout />
            </AuthGuard>
          }
        >
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/people" element={<People />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/:id" element={<ProfileViewPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  )
}
