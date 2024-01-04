import { ComponentProps } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const status = tv({
  base: 'flex items-center whitespace-nowrap relative pl-4 before:absolute before:left-0 before:h-2 before:w-2 before:rounded-full',
  variants: {
    progress: {
      true: 'before:bg-yellow-500',
    },
    interrupt: {
      true: 'before:bg-red-500',
    },
    complete: {
      true: 'before:bg-green-500',
    },
  },
  defaultVariants: {
    progress: true,
  },
})

export type StatusProps = ComponentProps<'span'> & VariantProps<typeof status>

export function StatusTask({
  progress,
  interrupt,
  complete,
  className,
  ...props
}: StatusProps) {
  return (
    <td>
      <span
        className={status({
          progress,
          interrupt,
          complete,
          className,
        })}
        {...props}
      >
        {complete ? 'Concluído' : interrupt ? 'Interrompido' : 'Em progresso'}
      </span>
    </td>
  )
}
