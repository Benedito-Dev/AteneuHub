import { cn } from '@/lib/utils'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export function Logo({ size = 'md', className }: LogoProps) {
  const text = size === 'sm' ? 'text-base' : size === 'lg' ? 'text-3xl' : 'text-xl'
  const mark = size === 'sm' ? 'h-6 w-6' : size === 'lg' ? 'h-11 w-11' : 'h-8 w-8'

  return (
    <div className={cn('inline-flex items-center gap-2 select-none', className)}>
      <img
        src="/logo.png"
        alt="AteneuHub"
        className={cn('object-contain shrink-0', mark)}
      />
      <span className={cn('font-display font-bold tracking-tight', text)}>
        <span className="text-ink">Ateneu</span>
        <span className="text-brand">Hub</span>
      </span>
    </div>
  )
}
