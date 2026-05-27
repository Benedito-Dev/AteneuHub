import { Link } from 'react-router-dom'
import { toast } from 'sonner'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import type { User } from '@/data/types'
import { initials } from '@/lib/utils'
import { useAppStore } from '@/store/useAppStore'

interface Props {
  user: User
}

export function PersonCard({ user }: Props) {
  const connections = useAppStore((s) => s.connections)
  const toggleConnection = useAppStore((s) => s.toggleConnection)
  const connected = !!connections[user.id]

  return (
    <Card className="card-hover">
      <CardContent className="p-5 text-center space-y-3">
        <Avatar className="h-20 w-20 mx-auto">
          <AvatarImage src={user.avatar} alt={user.name} />
          <AvatarFallback>{initials(user.name)}</AvatarFallback>
        </Avatar>

        <div>
          <Link to={`/profile/${user.id}`} className="font-display font-semibold text-ink hover:underline block">
            {user.name}
          </Link>
          <p className="text-xs text-ink-muted">
            {user.course} · {user.semester}º sem
          </p>
        </div>

        <div className="flex flex-wrap gap-1.5 justify-center min-h-[24px]">
          {user.skills.slice(0, 3).map((s) => (
            <Badge key={s} variant="info" className="text-[11px]">
              {s}
            </Badge>
          ))}
        </div>

        <div className="flex gap-2 pt-1">
          <Button variant="secondary" size="sm" className="flex-1" asChild>
            <Link to={`/profile/${user.id}`}>Ver perfil</Link>
          </Button>
          <Button
            size="sm"
            variant={connected ? 'outline' : 'primary'}
            className="flex-1"
            onClick={() => {
              toggleConnection(user.id)
              toast.success(connected ? 'Conexão removida' : 'Solicitação enviada')
            }}
          >
            {connected ? 'Solicitado' : 'Conectar'}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
