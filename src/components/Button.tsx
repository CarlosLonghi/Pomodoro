import { ComponentProps } from 'react'
import { CheckCircle } from '@phosphor-icons/react'
import { tv, VariantProps } from 'tailwind-variants'

const button = tv({
  base: 'bg-gray-200 flex items-center justify-center rounded text-sm font-medium text-gray-500 hover:bg-white hover:text-gray-700',
  variants: {
    size: {
      default: 'h-10 px-4',
      sm: 'h-8 px-3',
      xs: 'h-6 px-2 text-xs',
    },
    // primary: {}, //A variação primary pode ser definida na base
    secondary: {
      true: 'bg-gray-400 text-gray-100 hover:bg-gray-500 hover:text-white',
    },
    success: {
      true: 'bg-green-400 hover:bg-green-500',
    },
    danger: {
      true: 'bg-red-500 text-white hover:bg-red-700 hover:text-gray-100',
    },
  },
  defaultVariants: {
    size: 'default',
    success: false,
  },
})

export type ButtonProps = ComponentProps<'button'> & VariantProps<typeof button>

export function Button({
  success,
  danger,
  secondary,
  size,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      data-success={success}
      className={button({ success, danger, secondary, size, className })}
      {...props}
    >
      {success ? <CheckCircle className="w-5 h-5" /> : props.children}
    </button>
  )
}
