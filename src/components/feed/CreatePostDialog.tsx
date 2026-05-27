import { useState } from 'react'
import { ImagePlus, Globe2, GraduationCap, X } from 'lucide-react'
import { toast } from 'sonner'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { currentUser } from '@/data/currentUser'
import { initials, cn } from '@/lib/utils'
import { useAppStore } from '@/store/useAppStore'

interface Props {
  open: boolean
  onOpenChange: (v: boolean) => void
}

export function CreatePostDialog({ open, onOpenChange }: Props) {
  const [content, setContent] = useState('')
  const [visibility, setVisibility] = useState<'all' | 'course'>('all')
  const [imageUrl, setImageUrl] = useState<string | undefined>(undefined)
  const createPost = useAppStore((s) => s.createPost)

  function reset() {
    setContent('')
    setVisibility('all')
    setImageUrl(undefined)
  }

  function handleSubmit() {
    if (!content.trim()) {
      toast.error('Escreva algo antes de publicar.')
      return
    }
    createPost({ content, image: imageUrl, visibility })
    toast.success('Publicado!')
    reset()
    onOpenChange(false)
  }

  function handleAddImage() {
    const seed = Math.floor(Math.random() * 9999)
    setImageUrl(`https://picsum.photos/seed/user${seed}/600/400`)
    toast('Imagem de exemplo adicionada (mock).')
  }

  return (
    <Dialog open={open} onOpenChange={(v) => { onOpenChange(v); if (!v) reset() }}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Criar publicação</DialogTitle>
          <DialogDescription>
            Compartilhe uma novidade, dúvida ou conquista com a comunidade UniAteneu.
          </DialogDescription>
        </DialogHeader>

        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src={currentUser.avatar} alt={currentUser.name} />
            <AvatarFallback>{initials(currentUser.name)}</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium">{currentUser.name}</p>
            <button
              type="button"
              onClick={() => setVisibility((v) => (v === 'all' ? 'course' : 'all'))}
              className={cn(
                'mt-0.5 inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full border',
                visibility === 'all'
                  ? 'border-info-100 bg-info-50 text-info-700'
                  : 'border-brand-100 bg-brand-50 text-brand-700',
              )}
            >
              {visibility === 'all' ? <Globe2 className="h-3.5 w-3.5" /> : <GraduationCap className="h-3.5 w-3.5" />}
              {visibility === 'all' ? 'Todos os alunos' : 'Apenas meu curso'}
            </button>
          </div>
        </div>

        <Textarea
          autoFocus
          placeholder="O que você quer compartilhar?"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="min-h-[140px] border-none focus-visible:ring-0 focus-visible:border-none px-0 text-base"
        />

        {imageUrl && (
          <div className="relative">
            <img src={imageUrl} alt="" className="w-full rounded-xl border border-border" />
            <button
              type="button"
              onClick={() => setImageUrl(undefined)}
              className="absolute top-2 right-2 bg-white/90 hover:bg-white rounded-full p-1 shadow-card"
              aria-label="Remover imagem"
            >
              <X className="h-4 w-4 text-ink" />
            </button>
          </div>
        )}

        <div className="flex items-center justify-between border-t border-border pt-4">
          <Button variant="secondary" size="sm" onClick={handleAddImage}>
            <ImagePlus className="h-4 w-4" />
            Adicionar imagem
          </Button>
        </div>

        <DialogFooter>
          <Button variant="ghost" onClick={() => onOpenChange(false)}>
            Cancelar
          </Button>
          <Button onClick={handleSubmit} disabled={!content.trim()}>
            Publicar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
