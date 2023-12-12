import { ComponentProps } from 'react'
import { CheckCircle } from '@phosphor-icons/react'
import { tv, VariantProps } from 'tailwind-variants'

const button = tv({
  base: 'bg-zinc-100 flex items-center justify-center rounded text-sm font-medium text-zinc-900 hover:bg-slate-400',
  variants: {
    size: {
      default: 'h-10 px-4',
      sm: 'h-8 px-3',
      xs: 'h-6 px-2 text-xs'
    },
    // primary: {}, //A variação primary pode ser definida na base
    secondary: {
      true: 'bg-blue-400 hover:bg-blue-500',
    },
    success: {
      true: 'bg-emerald-600 hover:bg-emerald-400',
    },
    danger: {
      true: 'bg-red-600 hover:bg-red-500 text-white'
    }
  },
  defaultVariants: {
    size: 'default',
    success: false
  },
})

export type ButtonProps = ComponentProps<'button'> & VariantProps<typeof button>

export function Button({ success, danger, secondary, size, className, ...props }: ButtonProps) {
  return (
    <button
      data-success={success}
      className={button({ success, danger, secondary, size, className })}
      {...props}
    >
      {success ? <CheckCircle className='w-5 h-5'/> : props.children}
    </button>
  )
}