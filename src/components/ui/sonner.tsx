import { Toaster as SonnerToaster } from 'sonner'

export function Toaster() {
  return (
    <SonnerToaster
      position="bottom-right"
      toastOptions={{
        classNames: {
          toast:
            'bg-white border border-border shadow-cardHover text-ink rounded-xl px-4 py-3 font-sans text-sm',
          title: 'font-medium',
          description: 'text-ink-muted',
          actionButton: 'bg-brand text-white',
        },
      }}
    />
  )
}
