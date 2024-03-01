import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as zod from 'zod'

const cycleSchema = zod.object({
  task: zod.string().min(2, 'Informe a tarefa!'),
  minutesAmount: zod
    .number()
    .min(5, 'O cronômetro deve ser no mínimo 5 minutos!')
    .max(90, 'O cronômetro deve ser no máximo 90 minutos!'),
})

// Faz a tipagem automática dos valores dos inputs do formulário com base no cycleSchema
type CycleData = zod.infer<typeof cycleSchema>

export function NewCycleForm() {
  const { register, handleSubmit, watch, reset } = useForm<CycleData>({
    resolver: zodResolver(cycleSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  return (
    <div className="text-gray-100 text-base flex gap-2 items-center flex-wrap">
      <label htmlFor="task">Vou trabalhar em</label>
      <input
        className="input-task mx-2"
        type="text"
        id="task"
        list="task-suggestions"
        placeholder="Dê um nome ao projeto"
        disabled={!!activeCycle}
        {...register('task')}
      />
      <datalist id="task-suggestions">
        <option value="Projeto 1" />
        <option value="Projeto 2" />
        <option value="Projeto 3" />
      </datalist>

      <label htmlFor="minutesAmount">durante</label>
      <input
        className="input-minutes mx-2 w-16"
        type="number"
        id="minutesAmount"
        placeholder="00"
        step={5}
        min={5}
        max={90}
        disabled={!!activeCycle}
        {...register('minutesAmount', { valueAsNumber: true })}
      />

      <span>minutos.</span>
    </div>
  )
}
