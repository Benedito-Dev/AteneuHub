import { useMemo, useState } from 'react'
import { PenSquare, Plus } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { PostCard } from '@/components/feed/PostCard'
import { CreatePostDialog } from '@/components/feed/CreatePostDialog'
import { useAppStore } from '@/store/useAppStore'
import { getUserById } from '@/data/users'
import { currentUser } from '@/data/currentUser'
import { initials } from '@/lib/utils'

export function Feed() {
  const [open, setOpen] = useState(false)
  const posts = useAppStore((s) => s.posts)

  const coursePosts = useMemo(
    () =>
      posts.filter((p) => {
        const author = p.authorId === 'me' ? currentUser : getUserById(p.authorId)
        return author?.course === currentUser.course
      }),
    [posts],
  )

  const allPosts = posts
  const savedPosts = posts.filter((p) => p.savedByMe)

  return (
    <div className="grid grid-cols-1 xl:grid-cols-[1fr_320px] gap-5 animate-fade-in">
      <div className="space-y-4 max-w-2xl xl:max-w-none">
        <Card>
          <CardContent className="p-4 flex items-center gap-3">
            <Avatar>
              <AvatarImage src={currentUser.avatar} alt={currentUser.name} />
              <AvatarFallback>{initials(currentUser.name)}</AvatarFallback>
            </Avatar>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="flex-1 text-left h-11 px-4 rounded-full border border-border text-ink-muted hover:bg-surface-subtle transition-colors"
            >
              O que você quer compartilhar, {currentUser.name.split(' ')[0]}?
            </button>
            <Button onClick={() => setOpen(true)} className="hidden sm:inline-flex">
              <PenSquare className="h-4 w-4" />
              Publicar
            </Button>
          </CardContent>
        </Card>

        <Tabs defaultValue="all">
          <TabsList>
            <TabsTrigger value="all">Todos</TabsTrigger>
            <TabsTrigger value="course">Meu curso</TabsTrigger>
            <TabsTrigger value="saved">Salvos</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            {allPosts.map((p) => <PostCard key={p.id} post={p} />)}
          </TabsContent>
          <TabsContent value="course" className="space-y-4">
            {coursePosts.length === 0 ? (
              <EmptyState text="Ninguém do seu curso postou ainda. Seja o primeiro!" />
            ) : (
              coursePosts.map((p) => <PostCard key={p.id} post={p} />)
            )}
          </TabsContent>
          <TabsContent value="saved" className="space-y-4">
            {savedPosts.length === 0 ? (
              <EmptyState text="Você ainda não salvou nenhum post. Marque com 🔖 pra revisitar depois." />
            ) : (
              savedPosts.map((p) => <PostCard key={p.id} post={p} />)
            )}
          </TabsContent>
        </Tabs>
      </div>

      <aside className="hidden xl:block sticky top-20 self-start space-y-4">
        <Card>
          <CardContent className="p-5">
            <h3 className="font-display font-semibold text-ink">Boas práticas no feed</h3>
            <ul className="mt-3 space-y-2 text-sm text-ink-muted list-disc list-inside">
              <li>Respeite seus colegas e profes.</li>
              <li>Cite fontes ao compartilhar artigos.</li>
              <li>Use a visibilidade "Meu curso" para conteúdos específicos.</li>
            </ul>
          </CardContent>
        </Card>
      </aside>

      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-30 h-14 w-14 rounded-full bg-brand text-white shadow-cardHover flex items-center justify-center hover:bg-brand-600 transition-colors xl:hidden"
        aria-label="Criar publicação"
      >
        <Plus className="h-6 w-6" />
      </button>

      <CreatePostDialog open={open} onOpenChange={setOpen} />
    </div>
  )
}

function EmptyState({ text }: { text: string }) {
  return (
    <Card>
      <CardContent className="p-10 text-center text-ink-muted text-sm">{text}</CardContent>
    </Card>
  )
}
