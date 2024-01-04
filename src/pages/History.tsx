import { StatusTask } from '../components/StatusTask'

export function History() {
  return (
    <main className="flex-1 px-12 py-8 flex flex-col">
      <h1 className="text-2xl text-gray-100 text-center">Histórico</h1>

      <div className="flex-1 overflow-auto mt-8">
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
            <tr>
              <td>Tarefa 1</td>
              <td>10 minutos</td>
              <td>há 1 mês</td>
              <StatusTask complete />
            </tr>

            <tr>
              <td>Tarefa 2</td>
              <td>10 minutos</td>
              <td>há 1 mês</td>
              <StatusTask progress />
            </tr>

            <tr>
              <td>Tarefa 3</td>
              <td>10 minutos</td>
              <td>há 1 mês</td>
              <StatusTask interrupt />
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  )
}
