import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Heart, MessageCircle, Repeat2, Bookmark, MoreHorizontal } from 'lucide-react'
import { toast } from 'sonner'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import type { Post } from '@/data/types'
import { getUserById } from '@/data/users'
import { currentUser } from '@/data/currentUser'
import { useAppStore } from '@/store/useAppStore'
import { cn, formatRelativeTime, initials } from '@/lib/utils'

interface PostCardProps {
  post: Post
}

export function PostCard({ post }: PostCardProps) {
  const author = post.authorId === 'me' ? currentUser : getUserById(post.authorId)
  const [showComments, setShowComments] = useState(false)
  const [commentText, setCommentText] = useState('')
  const toggleLike = useAppStore((s) => s.togglePostLike)
  const toggleSave = useAppStore((s) => s.togglePostSave)
  const addComment = useAppStore((s) => s.addComment)

  if (!author) return null

  function handleComment() {
    if (!commentText.trim()) return
    addComment(post.id, commentText)
    setCommentText('')
  }

  return (
    <Card className="card-hover">
      <CardContent className="p-5 space-y-3">
        <div className="flex items-start gap-3">
          <Link to={author.id === 'me' ? '/profile' : `/profile/${author.id}`}>
            <Avatar className="h-11 w-11">
              <AvatarImage src={author.avatar} alt={author.name} />
              <AvatarFallback>{initials(author.name)}</AvatarFallback>
            </Avatar>
          </Link>
          <div className="min-w-0 flex-1">
            <Link
              to={author.id === 'me' ? '/profile' : `/profile/${author.id}`}
              className="font-medium text-ink hover:underline"
            >
              {author.name}
            </Link>
            <p className="text-xs text-ink-muted">
              {author.course} · {author.semester}º sem · {formatRelativeTime(post.createdAt)}
              {post.visibility === 'course' && (
                <span className="ml-2 inline-flex items-center gap-1 text-brand-700">
                  · só do curso
                </span>
              )}
            </p>
          </div>
          <button
            type="button"
            className="text-ink-muted hover:text-ink p-1 -m-1 rounded"
            onClick={() => toast('Mais opções em breve 🚧')}
            aria-label="Mais opções"
          >
            <MoreHorizontal className="h-5 w-5" />
          </button>
        </div>

        <p className="text-[15px] text-ink whitespace-pre-wrap leading-relaxed">{post.content}</p>

        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {post.tags.map((t) => (
              <Badge key={t} variant="info" className="text-[11px]">
                #{t}
              </Badge>
            ))}
          </div>
        )}

        {post.image && (
          <img
            src={post.image}
            alt=""
            className="w-full rounded-xl border border-border object-cover max-h-[420px]"
            loading="lazy"
          />
        )}

        <div className="flex items-center justify-between text-xs text-ink-muted pt-1">
          <span>{post.likes} curtidas</span>
          <button
            type="button"
            className="hover:underline"
            onClick={() => setShowComments((v) => !v)}
          >
            {post.comments.length} comentários
          </button>
        </div>

        <Separator />

        <div className="flex items-center justify-between -mx-1">
          <ActionButton
            active={!!post.likedByMe}
            activeColor="text-brand"
            icon={<Heart className={cn('h-4 w-4', post.likedByMe && 'fill-current')} />}
            label="Curtir"
            onClick={() => toggleLike(post.id)}
          />
          <ActionButton
            icon={<MessageCircle className="h-4 w-4" />}
            label="Comentar"
            onClick={() => setShowComments(true)}
          />
          <ActionButton
            icon={<Repeat2 className="h-4 w-4" />}
            label="Compartilhar"
            onClick={() => toast('Compartilhamento em breve 🚧')}
          />
          <ActionButton
            active={!!post.savedByMe}
            activeColor="text-brand"
            icon={<Bookmark className={cn('h-4 w-4', post.savedByMe && 'fill-current')} />}
            label={post.savedByMe ? 'Salvo' : 'Salvar'}
            onClick={() => {
              toggleSave(post.id)
              toast.success(post.savedByMe ? 'Removido dos salvos' : 'Salvo!')
            }}
          />
        </div>

        {showComments && (
          <div className="space-y-3 pt-1 animate-fade-in">
            <Separator />
            {post.comments.map((c) => {
              const cAuthor = c.authorId === 'me' ? currentUser : getUserById(c.authorId)
              if (!cAuthor) return null
              return (
                <div key={c.id} className="flex gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={cAuthor.avatar} alt={cAuthor.name} />
                    <AvatarFallback>{initials(cAuthor.name)}</AvatarFallback>
                  </Avatar>
                  <div className="rounded-2xl bg-surface-subtle px-3 py-2 flex-1">
                    <div className="flex items-baseline gap-2">
                      <span className="text-sm font-medium text-ink">{cAuthor.name}</span>
                      <span className="text-xs text-ink-muted">{formatRelativeTime(c.createdAt)}</span>
                    </div>
                    <p className="text-sm text-ink">{c.content}</p>
                  </div>
                </div>
              )
            })}

            <div className="flex gap-3">
              <Avatar className="h-8 w-8">
                <AvatarImage src={currentUser.avatar} alt={currentUser.name} />
                <AvatarFallback>{initials(currentUser.name)}</AvatarFallback>
              </Avatar>
              <div className="flex-1 flex gap-2">
                <Input
                  placeholder="Escreva um comentário..."
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault()
                      handleComment()
                    }
                  }}
                />
                <Button size="sm" onClick={handleComment} disabled={!commentText.trim()}>
                  Enviar
                </Button>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

function ActionButton({
  icon,
  label,
  active,
  activeColor = 'text-brand',
  onClick,
}: {
  icon: React.ReactNode
  label: string
  active?: boolean
  activeColor?: string
  onClick?: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'flex-1 flex items-center justify-center gap-2 rounded-md py-2 text-sm font-medium transition-colors',
        active ? activeColor : 'text-ink-muted hover:text-ink hover:bg-surface-subtle',
      )}
    >
      {icon}
      <span className="hidden sm:inline">{label}</span>
    </button>
  )
}
