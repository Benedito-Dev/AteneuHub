import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium border',
  {
    variants: {
      variant: {
        default: 'bg-surface-subtle text-ink border-border',
        brand: 'bg-brand-50 text-brand-700 border-brand-100',
        accent: 'bg-accent-50 text-accent-800 border-accent-100',
        info: 'bg-info-50 text-info-700 border-info-100',
        outline: 'bg-transparent text-ink-muted border-border',
        solid: 'bg-brand text-white border-brand',
      },
    },
    defaultVariants: { variant: 'default' },
  },
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />
}
