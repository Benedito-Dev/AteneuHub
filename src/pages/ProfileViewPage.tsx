import { Link, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { ProfileView } from '@/components/profile/ProfileView'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { getUserById } from '@/data/users'

export function ProfileViewPage() {
  const { id } = useParams<{ id: string }>()
  const user = id ? getUserById(id) : undefined

  if (!user) {
    return (
      <Card>
        <CardContent className="p-10 text-center space-y-3">
          <p className="text-ink font-medium">Perfil não encontrado.</p>
          <Button asChild variant="secondary">
            <Link to="/people">
              <ArrowLeft className="h-4 w-4" />
              Voltar para Pessoas
            </Link>
          </Button>
        </CardContent>
      </Card>
    )
  }

  return <ProfileView user={user} />
}
