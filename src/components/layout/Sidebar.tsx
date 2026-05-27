import { NavLink } from 'react-router-dom'
import { Home, Newspaper, Briefcase, Users, Bookmark, UserCircle2 } from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = [
  { to: '/dashboard', label: 'Início', icon: Home },
  { to: '/feed', label: 'Feed', icon: Newspaper },
  { to: '/jobs', label: 'Vagas', icon: Briefcase },
  { to: '/people', label: 'Pessoas', icon: Users },
  { to: '/saved', label: 'Salvos', icon: Bookmark },
  { to: '/profile', label: 'Meu perfil', icon: UserCircle2 },
]

interface SidebarProps {
  onNavigate?: () => void
}

export function Sidebar({ onNavigate }: SidebarProps) {
  return (
    <nav className="flex flex-col gap-1 p-3">
      {navItems.map(({ to, label, icon: Icon }) => (
        <NavLink
          key={to}
          to={to}
          end={to === '/dashboard'}
          onClick={onNavigate}
          className={({ isActive }) =>
            cn(
              'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
              isActive
                ? 'bg-brand-50 text-brand-700'
                : 'text-ink-muted hover:bg-surface-subtle hover:text-ink',
            )
          }
        >
          {({ isActive }) => (
            <>
              <Icon className={cn('h-5 w-5', isActive ? 'text-brand' : 'text-ink-muted')} />
              {label}
            </>
          )}
        </NavLink>
      ))}

      <div className="mt-6 px-3">
        <div className="rounded-xl bg-gradient-to-br from-brand-50 to-accent-50 border border-brand-100 p-4">
          <p className="text-xs font-display font-semibold text-brand-700 uppercase tracking-wider">
            Dica
          </p>
          <p className="text-sm text-ink mt-1">
            Mantenha seu perfil atualizado pra aparecer em sugestões de conexão.
          </p>
        </div>
      </div>
    </nav>
  )
}
