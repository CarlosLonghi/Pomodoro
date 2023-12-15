import { Play } from '@phosphor-icons/react'

export function Home() {
  return (
    <main className="flex justify-center h-full">
      <form className="flex flex-col gap-14 items-center justify-center">
        <div className="text-gray-100 text-base flex gap-2 items-center flex-wrap">
          <label htmlFor="task">Vou trabalhar em</label>
          <input
            className="input-task mx-2 border-b-2 border-gray-100 outline-none focus:border-green-500"
            type="text"
            id="task"
            list="task-suggestions"
            placeholder="Dê um nome ao projeto"
          />
          <datalist id="task-suggestions">
            <option value="Projeto 1" />
            <option value="Projeto 2" />
            <option value="Projeto 3" />
          </datalist>

          <label htmlFor="minutesAmount">durante</label>
          <input
            className="input-minutes mx-2 w-16 border-b-2 border-gray-100 outline-none focus:border-green-500"
            type="number"
            id="minutesAmount"
            placeholder="00"
            step={5}
            min={5}
            max={120}
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

        <button className="button-timer-submit" type="submit">
          <Play size={30} />
          Iniciar
        </button>
      </form>
    </main>
  )
}
