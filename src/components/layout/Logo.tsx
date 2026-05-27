import { cn } from '@/lib/utils'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export function Logo({ size = 'md', className }: LogoProps) {
  const text = size === 'sm' ? 'text-base' : size === 'lg' ? 'text-3xl' : 'text-xl'
  const dot = size === 'sm' ? 'h-5 w-5' : size === 'lg' ? 'h-10 w-10' : 'h-7 w-7'

  return (
    <div className={cn('inline-flex items-center gap-2 select-none', className)}>
      <span
        className={cn(
          'relative inline-flex items-center justify-center rounded-full bg-brand',
          dot,
        )}
      >
        <span
          className={cn(
            'rounded-full bg-accent',
            size === 'sm' ? 'h-1.5 w-1.5' : size === 'lg' ? 'h-3 w-3' : 'h-2 w-2',
          )}
        />
      </span>
      <span className={cn('font-display font-bold tracking-tight', text)}>
        <span className="text-ink">Ateneu</span>
        <span className="text-brand">Hub</span>
      </span>
    </div>
  )
}
