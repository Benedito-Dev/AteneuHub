import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface AuthState {
  isLoggedIn: boolean
  matricula: string | null
  login: (matricula: string) => void
  logout: () => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isLoggedIn: false,
      matricula: null,
      login: (matricula) => set({ isLoggedIn: true, matricula }),
      logout: () => set({ isLoggedIn: false, matricula: null }),
    }),
    { name: 'ateneuhub_auth' },
  ),
)
