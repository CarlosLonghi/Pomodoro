import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'
import { CyclesContext } from '../../contexts/CyclesContext'

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

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
