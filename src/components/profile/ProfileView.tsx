import { Globe, Pencil, MapPin, GraduationCap, BookOpen, Briefcase } from 'lucide-react'
import { SiBehance, SiGithub, SiLinkedin } from './brand-icons'
import { toast } from 'sonner'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import type { User } from '@/data/types'
import { initials } from '@/lib/utils'
import { useAppStore } from '@/store/useAppStore'

interface Props {
  user: User
  isOwn?: boolean
}

export function ProfileView({ user, isOwn = false }: Props) {
  const connections = useAppStore((s) => s.connections)
  const toggleConnection = useAppStore((s) => s.toggleConnection)
  const connected = !isOwn && !!connections[user.id]

  return (
    <div className="space-y-5 animate-fade-in max-w-4xl mx-auto">
      <Card className="overflow-hidden">
        <div className="h-36 sm:h-44 bg-gradient-to-r from-brand-600 via-brand to-info-700 relative">
          <div className="absolute inset-0 opacity-10" aria-hidden>
            <div className="absolute top-4 right-10 w-28 h-28 rounded-full bg-accent blur-2xl" />
          </div>
        </div>
        <div className="px-6 pb-6">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div className="flex flex-col sm:flex-row sm:items-end gap-4">
              <Avatar className="h-24 w-24 sm:h-28 sm:w-28 -mt-12 sm:-mt-14 ring-4 ring-white shadow-card">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback className="text-2xl">{initials(user.name)}</AvatarFallback>
              </Avatar>
              <div className="pt-2 sm:pb-1">
                <h1 className="font-display text-2xl font-bold text-ink">{user.name}</h1>
                <p className="text-sm text-ink-muted">
                  {user.course} · {user.semester}º semestre
                </p>
                <p className="text-xs text-ink-muted flex items-center gap-1 mt-1">
                  <MapPin className="h-3 w-3" /> {user.location}
                </p>
              </div>
            </div>

            <div className="flex gap-2">
              {isOwn ? (
                <Button
                  variant="secondary"
                  onClick={() => toast('Edição em breve 🚧')}
                >
                  <Pencil className="h-4 w-4" />
                  Editar perfil
                </Button>
              ) : (
                <>
                  <Button
                    variant={connected ? 'outline' : 'primary'}
                    onClick={() => {
                      toggleConnection(user.id)
                      toast.success(connected ? 'Conexão removida' : 'Solicitação enviada')
                    }}
                  >
                    {connected ? 'Solicitado' : 'Conectar'}
                  </Button>
                  <Button
                    variant="secondary"
                    onClick={() => toast('Mensagens em breve 🚧')}
                  >
                    Mensagem
                  </Button>
                </>
              )}
            </div>
          </div>

          {/* Social links */}
          <div className="flex flex-wrap items-center gap-2 mt-4">
            {user.links.github && (
              <SocialLink href={user.links.github} icon={<SiGithub className="h-4 w-4" />} label="GitHub" />
            )}
            {user.links.linkedin && (
              <SocialLink href={user.links.linkedin} icon={<SiLinkedin className="h-4 w-4" />} label="LinkedIn" />
            )}
            {user.links.behance && (
              <SocialLink href={user.links.behance} icon={<SiBehance className="h-4 w-4" />} label="Behance" />
            )}
            {user.links.website && (
              <SocialLink href={user.links.website} icon={<Globe className="h-4 w-4" />} label="Portfólio" />
            )}
          </div>
        </div>
      </Card>

      <Section title="Sobre" icon={<BookOpen className="h-4 w-4 text-brand" />} editable={isOwn}>
        <p className="text-sm text-ink leading-relaxed whitespace-pre-wrap">{user.bio}</p>
      </Section>

      <Section title="Habilidades" icon={<GraduationCap className="h-4 w-4 text-brand" />} editable={isOwn}>
        <div className="flex flex-wrap gap-2">
          {user.skills.map((s) => (
            <Badge key={s} variant="brand" className="text-xs px-3 py-1">
              {s}
            </Badge>
          ))}
        </div>
        {user.interests.length > 0 && (
          <div className="mt-4">
            <p className="text-xs font-medium text-ink-muted uppercase tracking-wider mb-2">Áreas de interesse</p>
            <div className="flex flex-wrap gap-2">
              {user.interests.map((i) => (
                <Badge key={i} variant="info" className="text-xs px-3 py-1">
                  {i}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </Section>

      <Section title="Experiências e projetos" icon={<Briefcase className="h-4 w-4 text-brand" />} editable={isOwn}>
        {user.experiences.length === 0 ? (
          <p className="text-sm text-ink-muted">
            Ainda sem experiências cadastradas.
          </p>
        ) : (
          <div className="space-y-4">
            {user.experiences.map((exp) => (
              <div key={exp.id} className="flex gap-3">
                <div className="mt-1 h-2.5 w-2.5 rounded-full bg-brand shrink-0" />
                <div>
                  <p className="font-medium text-ink text-sm">{exp.title}</p>
                  <p className="text-sm text-ink-muted">{exp.organization} · {exp.period}</p>
                  <p className="text-sm text-ink mt-1">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </Section>

      <Section title="Formação" icon={<GraduationCap className="h-4 w-4 text-brand" />} editable={isOwn}>
        <div className="flex items-start gap-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-brand-50 text-brand-700 font-display font-bold">
            UA
          </div>
          <div>
            <p className="font-medium text-ink text-sm">Centro Universitário Ateneu (UniAteneu)</p>
            <p className="text-sm text-ink-muted">{user.course}</p>
            <p className="text-xs text-ink-muted">{user.semester}º semestre · Fortaleza-CE</p>
          </div>
        </div>
      </Section>
    </div>
  )
}

function Section({
  title,
  icon,
  editable,
  children,
}: {
  title: string
  icon: React.ReactNode
  editable?: boolean
  children: React.ReactNode
}) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="flex items-center gap-2">
          {icon}
          <CardTitle>{title}</CardTitle>
        </div>
        {editable && (
          <button
            type="button"
            onClick={() => toast('Edição em breve 🚧')}
            className="text-ink-muted hover:text-ink p-1 rounded"
            aria-label={`Editar ${title}`}
          >
            <Pencil className="h-4 w-4" />
          </button>
        )}
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  )
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1 text-xs text-ink-muted hover:text-ink hover:border-ink-muted transition-colors"
    >
      {icon}
      {label}
    </a>
  )
}
