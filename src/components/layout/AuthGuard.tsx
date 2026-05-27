import type { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuthStore } from '@/store/useAuthStore'

export function AuthGuard({ children }: { children: ReactNode }) {
  const isLoggedIn = useAuthStore((s) => s.isLoggedIn)
  if (!isLoggedIn) return <Navigate to="/login" replace />
  return <>{children}</>
}
