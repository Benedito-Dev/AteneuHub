import { Link, useNavigate } from 'react-router-dom'
import { Bell, MessageCircle, Search, LogOut, User, Settings, Menu } from 'lucide-react'
import { toast } from 'sonner'
import { Logo } from './Logo'
import { Input } from '@/components/ui/input'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { currentUser } from '@/data/currentUser'
import { initials } from '@/lib/utils'
import { useAuthStore } from '@/store/useAuthStore'

interface NavbarProps {
  onMenuClick?: () => void
}

export function Navbar({ onMenuClick }: NavbarProps) {
  const navigate = useNavigate()
  const logout = useAuthStore((s) => s.logout)

  function handleLogout() {
    logout()
    navigate('/login', { replace: true })
  }

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-border">
      <div className="flex h-16 items-center gap-4 px-4 lg:px-6">
        <button
          type="button"
          onClick={onMenuClick}
          className="lg:hidden p-2 -ml-2 rounded-md text-ink-muted hover:bg-surface-subtle"
          aria-label="Abrir menu"
        >
          <Menu className="h-5 w-5" />
        </button>

        <Link to="/dashboard" className="shrink-0">
          <Logo />
        </Link>

        <div className="hidden md:flex flex-1 max-w-md mx-auto relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-ink-muted" />
          <Input
            type="search"
            placeholder="Buscar pessoas, posts, vagas..."
            className="pl-9 bg-surface-subtle border-transparent focus:bg-white"
            onFocus={() => toast('Busca em breve 🚧', { description: 'Funcionalidade em desenvolvimento.' })}
            readOnly
          />
        </div>

        <div className="flex-1 md:hidden" />

        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Notificações"
            onClick={() => toast('Você não tem notificações novas.')}
          >
            <Bell className="h-5 w-5 text-ink-muted" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Mensagens"
            onClick={() => toast('Mensagens em breve 🚧')}
          >
            <MessageCircle className="h-5 w-5 text-ink-muted" />
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="ml-2 rounded-full focus-visible:ring-2 focus-visible:ring-brand/40">
                <Avatar className="h-9 w-9">
                  <AvatarImage src={currentUser.avatar} alt={currentUser.name} />
                  <AvatarFallback>{initials(currentUser.name)}</AvatarFallback>
                </Avatar>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-ink">{currentUser.name}</span>
                  <span className="text-xs text-ink-muted">Matrícula {currentUser.matricula}</span>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onSelect={() => navigate('/profile')}>
                <User className="h-4 w-4 text-ink-muted" />
                Meu perfil
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={() => toast('Configurações em breve 🚧')}>
                <Settings className="h-4 w-4 text-ink-muted" />
                Configurações
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onSelect={handleLogout} className="text-red-600 focus:bg-red-50">
                <LogOut className="h-4 w-4" />
                Sair
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
