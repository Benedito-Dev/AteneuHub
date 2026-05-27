import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Briefcase, Flame, Newspaper, PenSquare, Users } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { currentUser } from '@/data/currentUser'
import { users, getUserById } from '@/data/users'
import { trendingTags } from '@/data/trending'
import { useAppStore } from '@/store/useAppStore'
import { formatRelativeTime, initials } from '@/lib/utils'
import { CreatePostDialog } from '@/components/feed/CreatePostDialog'
import { toast } from 'sonner'

export function Dashboard() {
  const [createOpen, setCreateOpen] = useState(false)
  const posts = useAppStore((s) => s.posts)
  const jobs = useAppStore((s) => s.jobs)
  const connections = useAppStore((s) => s.connections)
  const toggleConnection = useAppStore((s) => s.toggleConnection)

  const topPosts = useMemo(
    () => [...posts].sort((a, b) => b.likes - a.likes).slice(0, 3),
    [posts],
  )

  const recommendedJobs = useMemo(() => jobs.slice(0, 3), [jobs])

  const peopleSuggestions = useMemo(
    () => users.filter((u) => u.course === currentUser.course).slice(0, 4),
    [],
  )

  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 animate-fade-in">
      <div className="xl:col-span-2 space-y-5">
        {/* Welcome card */}
        <Card className="overflow-hidden">
          <div className="relative bg-gradient-to-br from-brand-600 to-info-700 p-6 text-white">
            <div className="absolute inset-0 opacity-10" aria-hidden>
              <div className="absolute top-0 right-10 w-32 h-32 bg-accent rounded-full blur-2xl" />
            </div>
            <div className="relative flex items-start justify-between gap-4">
              <div>
                <p className="text-white/80 text-sm">Bem-vindo de volta</p>
                <h1 className="font-display text-2xl font-bold mt-1">
                  Olá, {currentUser.name.split(' ')[0]}! 👋
                </h1>
                <p className="text-white/85 mt-2 text-sm max-w-md">
                  Hoje é um bom dia pra compartilhar uma conquista, tirar uma dúvida ou descobrir
                  uma vaga.
                </p>
              </div>
              <Button
                variant="primary"
                className="bg-white text-brand-700 hover:bg-white/90 shrink-0"
                onClick={() => setCreateOpen(true)}
              >
                <PenSquare className="h-4 w-4" />
                Criar post
              </Button>
            </div>
          </div>
        </Card>

        {/* Featured posts */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div className="flex items-center gap-2">
              <Newspaper className="h-4 w-4 text-brand" />
              <CardTitle>Posts em destaque</CardTitle>
            </div>
            <Button variant="ghost" size="sm" asChild>
              <Link to="/feed">
                Ver feed completo <ArrowRight className="h-3 w-3" />
              </Link>
            </Button>
          </CardHeader>
          <CardContent className="space-y-3">
            {topPosts.map((post) => {
              const author = post.authorId === 'me' ? currentUser : getUserById(post.authorId)
              if (!author) return null
              return (
                <Link
                  key={post.id}
                  to="/feed"
                  className="block rounded-xl border border-border p-4 hover:bg-surface-subtle transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Avatar className="h-9 w-9">
                      <AvatarImage src={author.avatar} alt={author.name} />
                      <AvatarFallback>{initials(author.name)}</AvatarFallback>
                    </Avatar>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-ink">{author.name}</p>
                      <p className="text-xs text-ink-muted">
                        {author.course} · {formatRelativeTime(post.createdAt)}
                      </p>
                    </div>
                    <span className="ml-auto text-xs text-ink-muted shrink-0">
                      ❤️ {post.likes}
                    </span>
                  </div>
                  <p className="text-sm text-ink mt-3 line-clamp-2">{post.content}</p>
                </Link>
              )
            })}
          </CardContent>
        </Card>

        {/* Recommended jobs */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div className="flex items-center gap-2">
              <Briefcase className="h-4 w-4 text-brand" />
              <CardTitle>Vagas recomendadas</CardTitle>
            </div>
            <Button variant="ghost" size="sm" asChild>
              <Link to="/jobs">
                Ver todas <ArrowRight className="h-3 w-3" />
              </Link>
            </Button>
          </CardHeader>
          <CardContent className="grid sm:grid-cols-3 gap-3">
            {recommendedJobs.map((job) => (
              <Link
                key={job.id}
                to="/jobs"
                className="rounded-xl border border-border p-4 hover:bg-surface-subtle transition-colors block"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-brand-50 text-brand-700 font-display font-semibold mb-3">
                  {job.companyInitials}
                </div>
                <p className="font-medium text-ink text-sm line-clamp-2 leading-snug">
                  {job.title}
                </p>
                <p className="text-xs text-ink-muted mt-1">{job.company}</p>
                <p className="text-xs text-ink-muted">{job.location}</p>
                <Badge variant="brand" className="mt-3">
                  {job.area}
                </Badge>
              </Link>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Right column */}
      <div className="space-y-5">
        {/* People to know */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-brand" />
              <CardTitle>Pessoas pra conhecer</CardTitle>
            </div>
            <Button variant="ghost" size="sm" asChild>
              <Link to="/people">
                <ArrowRight className="h-3 w-3" />
              </Link>
            </Button>
          </CardHeader>
          <CardContent className="space-y-3">
            {peopleSuggestions.map((u) => {
              const connected = !!connections[u.id]
              return (
                <div key={u.id} className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={u.avatar} alt={u.name} />
                    <AvatarFallback>{initials(u.name)}</AvatarFallback>
                  </Avatar>
                  <div className="min-w-0 flex-1">
                    <Link to={`/profile/${u.id}`} className="text-sm font-medium text-ink hover:underline truncate block">
                      {u.name}
                    </Link>
                    <p className="text-xs text-ink-muted truncate">
                      {u.course} · {u.semester}º sem.
                    </p>
                  </div>
                  <Button
                    variant={connected ? 'secondary' : 'primary'}
                    size="sm"
                    onClick={() => {
                      toggleConnection(u.id)
                      toast.success(
                        connected ? 'Conexão removida' : `Solicitação enviada para ${u.name.split(' ')[0]}`,
                      )
                    }}
                  >
                    {connected ? 'Conectado' : 'Conectar'}
                  </Button>
                </div>
              )
            })}
            <Button variant="secondary" className="w-full" asChild>
              <Link to="/people">Explorar pessoas</Link>
            </Button>
          </CardContent>
        </Card>

        {/* Trending */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Flame className="h-4 w-4 text-accent-600" />
              <CardTitle>Em alta na semana</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-2">
            {trendingTags.map((t, idx) => (
              <button
                key={t.tag}
                type="button"
                onClick={() => toast(`Busca por #${t.tag} em breve 🚧`)}
                className="w-full flex items-center justify-between rounded-lg px-3 py-2 hover:bg-surface-subtle transition-colors text-left"
              >
                <div>
                  <p className="text-xs text-ink-muted">#{idx + 1} · em alta</p>
                  <p className="text-sm font-medium text-ink">#{t.tag}</p>
                </div>
                <span className="text-xs text-ink-muted">{t.posts} posts</span>
              </button>
            ))}
          </CardContent>
        </Card>
      </div>

      <CreatePostDialog open={createOpen} onOpenChange={setCreateOpen} />
    </div>
  )
}
