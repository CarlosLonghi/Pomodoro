import { Play, HandPalm } from '@phosphor-icons/react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useEffect, useState } from 'react'
import { differenceInSeconds } from 'date-fns'

const cycleSchema = zod.object({
  task: zod.string().min(2, 'Informe a tarefa!'),
  minutesAmount: zod
    .number()
    .min(5, 'O cronômetro deve ser no mínimo 5 minutos!')
    .max(90, 'O cronômetro deve ser no máximo 90 minutos!'),
})

// Faz a tipagem automática dos valores dos inputs do formulário com base no cycleSchema
type CycleData = zod.infer<typeof cycleSchema>

interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interruptedDate?: Date
}

export function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

  const { register, handleSubmit, watch, reset } = useForm<CycleData>({
    resolver: zodResolver(cycleSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  useEffect(() => {
    let interval: number
    if (activeCycle) {
      interval = setInterval(() => {
        setAmountSecondsPassed(
          differenceInSeconds(new Date(), activeCycle.startDate),
        )
      }, 1000)
    }

    return () => {
      clearInterval(interval)
    }
  }, [activeCycle])

  function handleCreateCycle(data: CycleData) {
    const newCycle: Cycle = {
      id: String(new Date().getTime()),
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    }

    setCycles((state) => [...state, newCycle])
    setActiveCycleId(newCycle.id)
    setAmountSecondsPassed(0)

    reset()
  }

  function handleInterruptCycle() {
    setCycles(
      cycles.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, interruptedDate: new Date() }
        } else {
          return cycle
        }
      }),
    )
    setActiveCycleId(null)
  }

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0
  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0

  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60

  const minutes = String(minutesAmount).padStart(2, '0')
  const seconds = String(secondsAmount).padStart(2, '0')

  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutes}:${seconds}`
    }
  }, [minutes, seconds, activeCycle])

  const isSubmitDisabled = watch('task')

  return (
    <main className="flex justify-center h-full">
      <form
        onSubmit={handleSubmit(handleCreateCycle)}
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

        <div className="flex items-center justify-between w-full font-timer text-gray-100 text-9xl">
          <span className="span-timer">{minutes[0]}</span>
          <span className="span-timer">{minutes[1]}</span>
          <span className="text-green-500 overflow-hidden cursor-default">
            :
          </span>
          <span className="span-timer">{seconds[0]}</span>
          <span className="span-timer">{seconds[1]}</span>
        </div>

        {activeCycle ? (
          <button
            className="flex items-center justify-center gap-2 text-gray-100 px-8 py-4 w-full bg-red-600/90 rounded-lg disabled:brightness-75 disabled:cursor-not-allowed focus:bg-red-700 focus-visible:outline-none hover:bg-red-700 transition ease-in-out"
            type="button"
            onClick={handleInterruptCycle}
          >
            <HandPalm size={30} />
            Interromper
          </button>
        ) : (
          <button
            className="flex items-center justify-center gap-2 text-gray-100 px-8 py-4 w-full bg-green-500 rounded-lg disabled:brightness-75 disabled:cursor-not-allowed focus:bg-green-700 focus-visible:outline-none"
            type="submit"
            disabled={!isSubmitDisabled}
          >
            <Play size={30} />
            Iniciar
          </button>
        )}
      </form>
    </main>
  )
}
