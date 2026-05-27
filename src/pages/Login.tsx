import { useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { GraduationCap, Sparkles, Users2 } from 'lucide-react'
import { toast } from 'sonner'
import { Logo } from '@/components/layout/Logo'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useAuthStore } from '@/store/useAuthStore'

export function Login() {
  const navigate = useNavigate()
  const login = useAuthStore((s) => s.login)
  const [matricula, setMatricula] = useState('')
  const [senha, setSenha] = useState('')
  const [submitting, setSubmitting] = useState(false)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!matricula.trim()) {
      toast.error('Informe sua matrícula.')
      return
    }
    if (senha.length < 4) {
      toast.error('Senha deve ter ao menos 4 caracteres.')
      return
    }
    setSubmitting(true)
    setTimeout(() => {
      login(matricula.trim())
      navigate('/dashboard', { replace: true })
    }, 350)
  }

  return (
    <div className="min-h-screen flex">
      <section className="hidden lg:flex flex-1 bg-gradient-to-br from-brand-600 via-brand to-info-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" aria-hidden>
          <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-accent blur-3xl" />
          <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] rounded-full bg-white blur-3xl" />
        </div>

        <div className="relative z-10 flex flex-col justify-between p-12 text-white w-full">
          <Logo className="text-white [&_span]:!text-white" />

          <div className="space-y-6 max-w-md">
            <h1 className="font-display text-5xl font-bold leading-tight">
              A rede dos alunos da{' '}
              <span className="text-accent">UniAteneu</span>.
            </h1>
            <p className="text-white/85 text-lg leading-relaxed">
              Conecte-se com colegas do seu curso, descubra vagas e participe das conversas que movem
              o campus.
            </p>

            <div className="space-y-3 pt-4">
              <Feature icon={<Users2 className="h-5 w-5" />} text="Encontre pessoas do seu curso" />
              <Feature icon={<GraduationCap className="h-5 w-5" />} text="Vagas e oportunidades reais" />
              <Feature icon={<Sparkles className="h-5 w-5" />} text="Comunidade exclusiva UniAteneu" />
            </div>
          </div>

          <p className="text-white/70 text-sm">Muito além do campus.</p>
        </div>
      </section>

      <section className="flex-1 flex items-center justify-center p-6 lg:p-12 bg-white">
        <div className="w-full max-w-sm space-y-8">
          <div className="lg:hidden flex justify-center">
            <Logo size="lg" />
          </div>

          <div>
            <h2 className="font-display text-3xl font-bold text-ink">Bem-vindo de volta</h2>
            <p className="text-ink-muted mt-2">
              Entre com sua matrícula UniAteneu para continuar.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="matricula">Número de matrícula</Label>
              <Input
                id="matricula"
                placeholder="Ex.: 202310001"
                value={matricula}
                onChange={(e) => setMatricula(e.target.value)}
                autoComplete="username"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="senha">Senha</Label>
                <button
                  type="button"
                  className="text-xs text-info hover:underline"
                  onClick={() => toast('Recuperação de senha em breve 🚧')}
                >
                  Esqueci minha senha
                </button>
              </div>
              <Input
                id="senha"
                type="password"
                placeholder="Mínimo 4 caracteres"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                autoComplete="current-password"
              />
            </div>

            <Button type="submit" size="lg" className="w-full" disabled={submitting}>
              {submitting ? 'Entrando...' : 'Entrar'}
            </Button>
          </form>

          <p className="text-xs text-center text-ink-muted">
            Acesso exclusivo para alunos matriculados na UniAteneu.
          </p>
        </div>
      </section>
    </div>
  )
}

function Feature({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-3 text-white/90">
      <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/15 backdrop-blur">
        {icon}
      </span>
      <span className="text-sm">{text}</span>
    </div>
  )
}
