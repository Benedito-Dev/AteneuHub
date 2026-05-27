import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { PersonCard } from '@/components/people/PersonCard'
import { users } from '@/data/users'
import { cn } from '@/lib/utils'

const COURSES = Array.from(new Set(users.map((u) => u.course))).sort()

export function People() {
  const [query, setQuery] = useState('')
  const [course, setCourse] = useState<string | null>(null)
  const [semester, setSemester] = useState<number | null>(null)

  const filtered = useMemo(() => {
    return users.filter((u) => {
      if (query && !u.name.toLowerCase().includes(query.toLowerCase())) return false
      if (course && u.course !== course) return false
      if (semester != null && u.semester !== semester) return false
      return true
    })
  }, [query, course, semester])

  return (
    <div className="space-y-5 animate-fade-in">
      <Card>
        <CardContent className="p-5 space-y-4">
          <div>
            <h2 className="font-display text-xl font-semibold text-ink">Encontre colegas</h2>
            <p className="text-sm text-ink-muted">
              Conecte-se com pessoas do seu curso, semestre ou área de interesse.
            </p>
          </div>

          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-ink-muted" />
            <Input
              placeholder="Buscar por nome..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-9"
            />
          </div>

          <div className="space-y-3">
            <FilterRow
              label="Curso"
              options={COURSES.map((c) => ({ value: c, label: c }))}
              selected={course}
              onSelect={(v) => setCourse(course === v ? null : v)}
            />
            <FilterRow
              label="Semestre"
              options={[2, 3, 5, 6, 7, 8].map((s) => ({ value: String(s), label: `${s}º` }))}
              selected={semester != null ? String(semester) : null}
              onSelect={(v) => setSemester(semester === Number(v) ? null : Number(v))}
            />
          </div>
        </CardContent>
      </Card>

      <p className="text-sm text-ink-muted">
        {filtered.length} {filtered.length === 1 ? 'aluno encontrado' : 'alunos encontrados'}
      </p>

      {filtered.length === 0 ? (
        <Card>
          <CardContent className="p-10 text-center text-ink-muted text-sm">
            Nenhuma pessoa corresponde aos filtros.
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((u) => <PersonCard key={u.id} user={u} />)}
        </div>
      )}
    </div>
  )
}

interface FilterRowProps {
  label: string
  options: { value: string; label: string }[]
  selected: string | null
  onSelect: (v: string) => void
}

function FilterRow({ label, options, selected, onSelect }: FilterRowProps) {
  return (
    <div>
      <h4 className="text-xs font-medium text-ink-muted uppercase tracking-wider mb-2">{label}</h4>
      <div className="flex flex-wrap gap-1.5">
        {options.map((o) => {
          const isActive = selected === o.value
          return (
            <button
              key={o.value}
              type="button"
              onClick={() => onSelect(o.value)}
              className={cn(
                'inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium transition-colors',
                isActive
                  ? 'border-brand bg-brand-50 text-brand-700'
                  : 'border-border bg-white text-ink-muted hover:text-ink',
              )}
            >
              {o.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}
