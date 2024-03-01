import { Play, HandPalm } from '@phosphor-icons/react'
import { createContext, useEffect, useState } from 'react'
import { NewCycleForm } from './NewCycleForm'
import { Countdown } from './Countdown'

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
  markCurrentCycleAsFinished: () => void
}

export const CyclesContext = createContext({} as CyclesContextType)

export function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

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

  // function handleCreateCycle(data: CycleData) {
  //   const newCycle: Cycle = {
  //     id: String(new Date().getTime()),
  //     task: data.task,
  //     minutesAmount: data.minutesAmount,
  //     startDate: new Date(),
  //   }

  //   setCycles((state) => [...state, newCycle])
  //   setActiveCycleId(newCycle.id)
  //   setAmountSecondsPassed(0)

  //   reset()
  // }

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

  // const isSubmitDisabled = watch('task')

  return (
    <main className="flex justify-center h-full">
      <form
        // onSubmit={handleSubmit(handleCreateCycle)}
        action=""
        className="flex flex-col gap-14 items-center justify-center"
      >
        <CyclesContext.Provider
          value={{ activeCycle, activeCycleId, markCurrentCycleAsFinished }}
        >
          {/* <NewCycleForm /> */}
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
            // disabled={!isSubmitDisabled}
          >
            <Play size={30} />
            Iniciar
          </button>
        )}
      </form>
    </main>
  )
}
