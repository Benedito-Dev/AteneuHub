import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from './Navbar'
import { Sidebar } from './Sidebar'
import { cn } from '@/lib/utils'

export function MainLayout() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div className="min-h-screen bg-surface-subtle">
      <Navbar onMenuClick={() => setMobileOpen((v) => !v)} />

      <div className="mx-auto max-w-[1400px] flex">
        <aside className="hidden lg:block w-64 shrink-0 sticky top-16 self-start h-[calc(100vh-4rem)] overflow-y-auto">
          <Sidebar />
        </aside>

        {/* Mobile sidebar */}
        {mobileOpen && (
          <>
            <button
              type="button"
              className="lg:hidden fixed inset-0 top-16 z-30 bg-ink/40"
              aria-label="Fechar menu"
              onClick={() => setMobileOpen(false)}
            />
            <aside
              className={cn(
                'lg:hidden fixed left-0 top-16 bottom-0 z-30 w-72 bg-white border-r border-border overflow-y-auto',
                'animate-fade-in',
              )}
            >
              <Sidebar onNavigate={() => setMobileOpen(false)} />
            </aside>
          </>
        )}

        <main className="flex-1 min-w-0 p-4 lg:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
