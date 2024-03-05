import { Play, HandPalm } from '@phosphor-icons/react'
import { NewCycleForm } from './NewCycleForm'
import { Countdown } from './Countdown'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import * as zod from 'zod'
import { useContext } from 'react'
import { CyclesContext } from '../../contexts/CyclesContext'

const cycleSchema = zod.object({
  task: zod.string().min(2, 'Informe a tarefa!'),
  minutesAmount: zod
    .number()
    .min(5, 'O cronômetro deve ser no mínimo 5 minutos!')
    .max(90, 'O cronômetro deve ser no máximo 90 minutos!'),
})

// Faz a tipagem automática dos valores dos inputs do formulário com base no cycleSchema
type CycleData = zod.infer<typeof cycleSchema>

export function Home() {
  const { createCycle, interruptCycle, activeCycle } = useContext(CyclesContext)

  const newCycleForm = useForm<CycleData>({
    resolver: zodResolver(cycleSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })
  const { handleSubmit, watch /*, reset */ } = newCycleForm

  const isSubmitDisabled = watch('task')

  return (
    <main className="flex justify-center h-full">
      <form
        onSubmit={handleSubmit(createCycle)}
        action=""
        className="flex flex-col gap-14 items-center justify-center"
      >
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>
        <Countdown />

        {activeCycle ? (
          <button
            className="flex items-center justify-center gap-2 text-gray-100 px-8 py-4 w-full bg-red-600/90 rounded-lg disabled:brightness-75 disabled:cursor-not-allowed focus:bg-red-700 focus-visible:outline-none hover:bg-red-700 transition ease-in-out"
            type="button"
            onClick={interruptCycle}
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
