import { Link } from 'react-router-dom'
import { Bookmark } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { PostCard } from '@/components/feed/PostCard'
import { useAppStore } from '@/store/useAppStore'

export function Saved() {
  const posts = useAppStore((s) => s.posts)
  const saved = posts.filter((p) => p.savedByMe)

  return (
    <div className="space-y-5 animate-fade-in max-w-2xl">
      <div>
        <h1 className="font-display text-2xl font-bold text-ink">Itens salvos</h1>
        <p className="text-sm text-ink-muted mt-1">
          Posts que você marcou pra ler depois. Vagas salvas aparecem na página de Vagas.
        </p>
      </div>

      {saved.length === 0 ? (
        <Card>
          <CardContent className="p-12 text-center space-y-4">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-brand-50 text-brand-700">
              <Bookmark className="h-7 w-7" />
            </div>
            <div>
              <p className="font-display font-semibold text-ink">Você ainda não salvou nada</p>
              <p className="text-sm text-ink-muted mt-1">
                Marque posts como{' '}
                <span className="inline-flex items-baseline gap-1">
                  <Bookmark className="h-3.5 w-3.5 inline -mb-0.5" /> Salvar
                </span>{' '}
                pra revisitar depois.
              </p>
            </div>
            <Button asChild>
              <Link to="/feed">Ir para o feed</Link>
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-3">
          {saved.map((p) => <PostCard key={p.id} post={p} />)}
        </div>
      )}
    </div>
  )
}
