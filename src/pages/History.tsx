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
              <td>Tarefa exemplo</td>
              <td>10 minutos</td>
              <td>há 1 mês</td>
              <td>Concluído</td>
            </tr>

            <tr>
              <td>Tarefa exemplo</td>
              <td>10 minutos</td>
              <td>há 1 mês</td>
              <td>Concluído</td>
            </tr>

            <tr>
              <td>Tarefa exemplo</td>
              <td>10 minutos</td>
              <td>há 1 mês</td>
              <td>Concluído</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  )
}
