import { useMemo, useState } from 'react'
import { Plug, Search, X } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { JobCard } from '@/components/jobs/JobCard'
import { useAppStore } from '@/store/useAppStore'
import type { JobArea, JobModality, JobType } from '@/data/types'
import { cn } from '@/lib/utils'

const AREAS: JobArea[] = ['TI', 'Saúde', 'Direito', 'Administração', 'Engenharia', 'Educação', 'Marketing', 'Financeiro']
const MODALITIES: JobModality[] = ['Presencial', 'Híbrido', 'Remoto']
const TYPES: JobType[] = ['Estágio', 'Trainee', 'CLT', 'PJ']

export function Jobs() {
  const jobs = useAppStore((s) => s.jobs)

  const [query, setQuery] = useState('')
  const [areas, setAreas] = useState<JobArea[]>([])
  const [modalities, setModalities] = useState<JobModality[]>([])
  const [types, setTypes] = useState<JobType[]>([])

  function toggleIn<T>(arr: T[], v: T, setter: (next: T[]) => void) {
    setter(arr.includes(v) ? arr.filter((x) => x !== v) : [...arr, v])
  }

  const filtered = useMemo(() => {
    return jobs.filter((j) => {
      if (query && !`${j.title} ${j.company}`.toLowerCase().includes(query.toLowerCase())) return false
      if (areas.length > 0 && !areas.includes(j.area)) return false
      if (modalities.length > 0 && !modalities.includes(j.modality)) return false
      if (types.length > 0 && !types.includes(j.type)) return false
      return true
    })
  }, [jobs, query, areas, modalities, types])

  const hasFilters = areas.length + modalities.length + types.length > 0 || !!query
  const clearAll = () => {
    setQuery('')
    setAreas([])
    setModalities([])
    setTypes([])
  }

  return (
    <div className="space-y-5 animate-fade-in">
      <Card className="bg-accent-50 border-accent-100">
        <CardContent className="p-4 flex items-start gap-3">
          <div className="shrink-0 mt-0.5 text-accent-700">
            <Plug className="h-5 w-5" />
          </div>
          <div className="text-sm text-ink">
            <strong className="font-medium">Em breve:</strong> vagas atualizadas em tempo real via
            integração com APIs externas e cadastro direto de empresas parceiras.
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-5">
        <aside className="space-y-3 lg:sticky lg:top-20 self-start">
          <Card>
            <CardContent className="p-5 space-y-5">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-display font-semibold text-ink">Filtros</h3>
                  {hasFilters && (
                    <button
                      type="button"
                      onClick={clearAll}
                      className="text-xs text-info hover:underline"
                    >
                      Limpar
                    </button>
                  )}
                </div>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-ink-muted" />
                  <Input
                    placeholder="Buscar..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="pl-9"
                  />
                </div>
              </div>

              <FilterGroup
                label="Área"
                options={AREAS}
                selected={areas}
                onToggle={(v) => toggleIn(areas, v, setAreas)}
              />
              <FilterGroup
                label="Modalidade"
                options={MODALITIES}
                selected={modalities}
                onToggle={(v) => toggleIn(modalities, v, setModalities)}
              />
              <FilterGroup
                label="Tipo"
                options={TYPES}
                selected={types}
                onToggle={(v) => toggleIn(types, v, setTypes)}
              />
            </CardContent>
          </Card>
        </aside>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <p className="text-sm text-ink-muted">
              {filtered.length} {filtered.length === 1 ? 'vaga encontrada' : 'vagas encontradas'}
            </p>
            {hasFilters && (
              <Button size="sm" variant="ghost" onClick={clearAll}>
                <X className="h-3 w-3" />
                Limpar filtros
              </Button>
            )}
          </div>

          {filtered.length === 0 ? (
            <Card>
              <CardContent className="p-10 text-center text-ink-muted text-sm">
                Nenhuma vaga corresponde aos filtros. Tente afrouxar a busca.
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-3">
              {filtered.map((j) => <JobCard key={j.id} job={j} />)}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function FilterGroup<T extends string>({
  label,
  options,
  selected,
  onToggle,
}: {
  label: string
  options: readonly T[]
  selected: T[]
  onToggle: (v: T) => void
}) {
  return (
    <div>
      <h4 className="text-xs font-medium text-ink-muted uppercase tracking-wider mb-2">{label}</h4>
      <div className="flex flex-wrap gap-1.5">
        {options.map((o) => {
          const isActive = selected.includes(o)
          return (
            <button
              key={o}
              type="button"
              onClick={() => onToggle(o)}
              className={cn(
                'inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium transition-colors',
                isActive
                  ? 'border-brand bg-brand-50 text-brand-700'
                  : 'border-border bg-white text-ink-muted hover:text-ink',
              )}
            >
              {o}
            </button>
          )
        })}
      </div>
    </div>
  )
}
