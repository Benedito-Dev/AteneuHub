import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-colors disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 focus-visible:ring-offset-2',
  {
    variants: {
      variant: {
        primary: 'bg-brand text-white hover:bg-brand-600 active:bg-brand-700 shadow-sm',
        secondary: 'bg-white border border-border text-ink hover:bg-surface-subtle',
        ghost: 'text-ink hover:bg-surface-subtle',
        info: 'bg-info text-white hover:bg-info-600',
        outline: 'border border-brand text-brand hover:bg-brand-50',
        danger: 'bg-red-600 text-white hover:bg-red-700',
        link: 'text-info underline-offset-4 hover:underline',
      },
      size: {
        sm: 'h-8 px-3 text-sm',
        md: 'h-10 px-4',
        lg: 'h-11 px-6 text-base',
        icon: 'h-10 w-10',
        iconSm: 'h-8 w-8',
      },
    },
    defaultVariants: { variant: 'primary', size: 'md' },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return <Comp ref={ref} className={cn(buttonVariants({ variant, size }), className)} {...props} />
  },
)
Button.displayName = 'Button'

export { buttonVariants }
