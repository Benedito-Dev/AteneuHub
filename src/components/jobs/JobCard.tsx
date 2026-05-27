import { useState } from 'react'
import { Bookmark, MapPin, Sparkles } from 'lucide-react'
import { toast } from 'sonner'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import type { Job } from '@/data/types'
import { useAppStore } from '@/store/useAppStore'
import { cn, formatRelativeTime } from '@/lib/utils'

interface Props {
  job: Job
}

export function JobCard({ job }: Props) {
  const [open, setOpen] = useState(false)
  const toggleSave = useAppStore((s) => s.toggleJobSave)

  return (
    <>
      <Card className="card-hover">
        <CardContent className="p-5">
          <div className="flex items-start gap-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-brand-50 text-brand-700 font-display font-semibold shrink-0">
              {job.companyInitials}
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <h3 className="font-display font-semibold text-ink leading-tight">{job.title}</h3>
                  <p className="text-sm text-ink-muted">{job.company}</p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    toggleSave(job.id)
                    toast.success(job.savedByMe ? 'Removida dos salvos' : 'Vaga salva!')
                  }}
                  className={cn(
                    'p-2 rounded-md transition-colors',
                    job.savedByMe ? 'text-brand' : 'text-ink-muted hover:bg-surface-subtle hover:text-ink',
                  )}
                  aria-label={job.savedByMe ? 'Remover dos salvos' : 'Salvar vaga'}
                >
                  <Bookmark className={cn('h-4 w-4', job.savedByMe && 'fill-current')} />
                </button>
              </div>

              <div className="mt-2 flex items-center gap-1.5 text-xs text-ink-muted">
                <MapPin className="h-3.5 w-3.5" />
                <span>{job.location}</span>
                <span>·</span>
                <span>{job.modality}</span>
                <span>·</span>
                <span>{formatRelativeTime(job.postedAt)}</span>
              </div>

              <div className="mt-3 flex flex-wrap gap-1.5">
                <Badge variant="brand">{job.type}</Badge>
                <Badge variant="default">{job.area}</Badge>
                {job.partnerHighlight && (
                  <Badge variant="accent" className="gap-1">
                    <Sparkles className="h-3 w-3" /> Núcleo de Carreira UniAteneu
                  </Badge>
                )}
              </div>

              <p className="text-sm text-ink-muted mt-3 line-clamp-2">{job.shortDescription}</p>

              <div className="mt-4 flex items-center gap-2">
                <Button size="sm" variant="primary" onClick={() => setOpen(true)}>
                  Ver detalhes
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => toast('Candidatura em breve 🚧')}
                >
                  Candidatar-se
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-brand-50 text-brand-700 font-display font-semibold">
                {job.companyInitials}
              </div>
              <div>
                <DialogTitle>{job.title}</DialogTitle>
                <DialogDescription>
                  {job.company} · {job.location} · {job.modality}
                </DialogDescription>
              </div>
            </div>
          </DialogHeader>

          <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
            <div className="flex flex-wrap gap-1.5">
              <Badge variant="brand">{job.type}</Badge>
              <Badge variant="default">{job.area}</Badge>
              {job.partnerHighlight && (
                <Badge variant="accent" className="gap-1">
                  <Sparkles className="h-3 w-3" /> Parceria UniAteneu
                </Badge>
              )}
            </div>

            <section>
              <h4 className="font-display font-semibold text-ink mb-1">Sobre a vaga</h4>
              <p className="text-sm text-ink leading-relaxed">{job.description}</p>
            </section>

            <section>
              <h4 className="font-display font-semibold text-ink mb-1">Requisitos</h4>
              <ul className="space-y-1 text-sm text-ink list-disc list-inside">
                {job.requirements.map((r) => <li key={r}>{r}</li>)}
              </ul>
            </section>

            <section>
              <h4 className="font-display font-semibold text-ink mb-1">Benefícios</h4>
              <ul className="space-y-1 text-sm text-ink list-disc list-inside">
                {job.benefits.map((b) => <li key={b}>{b}</li>)}
              </ul>
            </section>
          </div>

          <div className="flex items-center justify-end gap-2 pt-4 border-t border-border">
            <Button
              variant="secondary"
              onClick={() => {
                toggleSave(job.id)
                toast.success(job.savedByMe ? 'Removida dos salvos' : 'Vaga salva!')
              }}
            >
              <Bookmark className="h-4 w-4" />
              {job.savedByMe ? 'Salva' : 'Salvar'}
            </Button>
            <Button onClick={() => toast('Candidatura em breve 🚧')}>Candidatar-se</Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
