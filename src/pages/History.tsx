import { useContext } from 'react'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { StatusTask } from '../components/StatusTask'
import { CyclesContext } from '../contexts/CyclesContext'

export function History() {
  const { cycles } = useContext(CyclesContext)
  return (
    <main className="flex-1 overflow-auto py-8 flex flex-col">
      <h1 className="text-2xl text-gray-100 text-center">Histórico</h1>

      <div className="flex-1 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-600 overflow-x-auto mt-8">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Inicio</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {cycles.map((cycle) => {
              return (
                <tr key={cycle.id}>
                  <td>{cycle.task}</td>
                  <td>{cycle.minutesAmount} minutos</td>
                  <td>
                    {formatDistanceToNow(cycle.startDate, {
                      addSuffix: true,
                      locale: ptBR,
                    })}
                  </td>
                  {cycle.finishedDate && <StatusTask complete />}
                  {cycle.interruptedDate && <StatusTask interrupt />}
                  {!cycle.finishedDate && !cycle.interruptedDate && (
                    <StatusTask progress />
                  )}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </main>
  )
}
