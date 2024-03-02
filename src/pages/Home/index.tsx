import { Play, HandPalm } from '@phosphor-icons/react'
import { createContext, useState } from 'react'
import { NewCycleForm } from './NewCycleForm'
import { Countdown } from './Countdown'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import * as zod from 'zod'

interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interruptedDate?: Date
  finishedDate?: Date
}

interface CyclesContextType {
  activeCycle: Cycle | undefined
  activeCycleId: string | null
  amountSecondsPassed: number
  markCurrentCycleAsFinished: () => void
  setSecondsPassed: (seconds: number) => void
}

const cycleSchema = zod.object({
  task: zod.string().min(2, 'Informe a tarefa!'),
  minutesAmount: zod
    .number()
    .min(5, 'O cronômetro deve ser no mínimo 5 minutos!')
    .max(90, 'O cronômetro deve ser no máximo 90 minutos!'),
})

// Faz a tipagem automática dos valores dos inputs do formulário com base no cycleSchema
type CycleData = zod.infer<typeof cycleSchema>

export const CyclesContext = createContext({} as CyclesContextType)

export function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

  const newCycleForm = useForm<CycleData>({
    resolver: zodResolver(cycleSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })
  const { handleSubmit, watch, reset } = newCycleForm

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  function setSecondsPassed(seconds: number) {
    setAmountSecondsPassed(seconds)
  }

  function markCurrentCycleAsFinished() {
    setCycles((state) =>
      state.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, finishedDate: new Date() }
        } else {
          return cycle
        }
      }),
    )
    setActiveCycleId(null)
  }

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
    setCycles((state) =>
      state.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, interruptedDate: new Date() }
        } else {
          return cycle
        }
      }),
    )
    setActiveCycleId(null)
  }

  const isSubmitDisabled = watch('task')

  return (
    <main className="flex justify-center h-full">
      <form
        onSubmit={handleSubmit(handleCreateCycle)}
        action=""
        className="flex flex-col gap-14 items-center justify-center"
      >
        <CyclesContext.Provider
          value={{
            activeCycle,
            activeCycleId,
            amountSecondsPassed,
            markCurrentCycleAsFinished,
            setSecondsPassed,
          }}
        >
          <FormProvider {...newCycleForm}>
            <NewCycleForm />
          </FormProvider>
          <Countdown />
        </CyclesContext.Provider>

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
