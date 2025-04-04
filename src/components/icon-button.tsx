import type { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface IconButtonProps extends ComponentProps<'button'> {
  transparent?: boolean
}

export function IconButton({ transparent, ...props }: IconButtonProps) {
  return (
    <button
      {...props}
      className={twMerge(
        'border-white/10 rounded-md p-1.5 hover:cursor-pointer',
        transparent ? 'bg-black/20' : 'bg-white/10',
        props.disabled ? 'opacity-50 hover:cursor-not-allowed' : null
      )}
    />
  )
}
