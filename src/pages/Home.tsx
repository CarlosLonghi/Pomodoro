import { Play } from '@phosphor-icons/react'

const spanTimerStyle =
  'py-8 px-4 bg-gray-500 rounded overflow-hidden cursor-default'

export function Home() {
  return (
    <main className="flex justify-center h-full">
      <form className="flex flex-col gap-14 items-center justify-center">
        <div className="text-gray-100 text-base flex gap-2 items-center flex-wrap">
          <label htmlFor="task">Vou trabalhar em</label>
          <input
            className="mx-2 border-b-2 border-gray-100 outline-none focus:border-green-500"
            type="text"
            id="task"
          />

          <label htmlFor="minutesAmount">durante</label>
          <input
            className="mx-2 border-b-2 border-gray-100 outline-none focus:border-green-500"
            type="number"
            id="minutesAmount"
          />

          <span>minutos.</span>
        </div>

        <div className="flex items-center justify-between w-full font-timer text-gray-100 text-9xl">
          <span className={spanTimerStyle}>0</span>
          <span className={spanTimerStyle}>0</span>
          <span className="text-green-500 overflow-hidden cursor-default">
            :
          </span>
          <span className={spanTimerStyle}>0</span>
          <span className={spanTimerStyle}>0</span>
        </div>

        <button
          className="flex items-center justify-center gap-2 text-gray-100 px-8 py-4 w-full bg-green-500 rounded-lg"
          type="submit"
        >
          <Play size={30} />
          Iniciar
        </button>
      </form>
    </main>
  )
}
