import type { ComponentProps } from 'react'

interface NavLinkProps extends ComponentProps<'a'> {
  children: string
}

export function NavLink({ children, ...props }: NavLinkProps) {
  return (
    <a {...props} className="font-medium text-sm text-zinc-300">
      {children}
    </a>
  )
}
