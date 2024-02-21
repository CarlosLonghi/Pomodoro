import { Play } from '@phosphor-icons/react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

const newStopwatchSchema = zod.object({
  task: zod.string().min(2, 'Informe a tarefa!'),
  minutesAmount: zod
    .number()
    .min(5, 'O cronômetro deve ser no mínimo 5 minutos!')
    .max(120, 'O cronômetro deve ser no máximo 120 minutos!'),
})

// Faz a tipagem automática dos valores dos inputs do formulário com base no newStopwatchSchema
type NewStopwatchData = zod.infer<typeof newStopwatchSchema>

export function Home() {
  const { register, handleSubmit, watch, reset } = useForm<NewStopwatchData>({
    resolver: zodResolver(newStopwatchSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  function handleCreateStopwatch(data: NewStopwatchData) {
    console.log(data)
    reset()
  }
  const isSubmitDisabled = watch('task')

  return (
    <main className="flex justify-center h-full">
      <form
        onSubmit={handleSubmit(handleCreateStopwatch)}
        action=""
        className="flex flex-col gap-14 items-center justify-center"
      >
        <div className="text-gray-100 text-base flex gap-2 items-center flex-wrap">
          <label htmlFor="task">Vou trabalhar em</label>
          <input
            className="input-task mx-2"
            type="text"
            id="task"
            list="task-suggestions"
            placeholder="Dê um nome ao projeto"
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
            max={120}
            {...register('minutesAmount', { valueAsNumber: true })}
          />

          <span>minutos.</span>
        </div>

        <div className="flex items-center justify-between w-full font-timer text-gray-100 text-9xl">
          <span className="span-timer">0</span>
          <span className="span-timer">0</span>
          <span className="text-green-500 overflow-hidden cursor-default">
            :
          </span>
          <span className="span-timer">0</span>
          <span className="span-timer">0</span>
        </div>

        <button
          className="flex items-center justify-center gap-2 text-gray-100 px-8 py-4 w-full bg-green-500 rounded-lg disabled:brightness-75 disabled:cursor-not-allowed focus:bg-green-700 focus-visible:outline-none"
          type="submit"
          disabled={!isSubmitDisabled}
        >
          <Play size={30} />
          Iniciar
        </button>
      </form>
    </main>
  )
}
