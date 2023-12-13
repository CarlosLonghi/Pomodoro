import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'

export function DefaultLayout() {
  return (
    <div className="font-display h-screen flex justify-center px-40 py-20 bg-gray-700">
      <div className="flex flex-col bg-gray-500 w-screen max-w-6xl rounded py-10 px-8">
        <Header />

        {/* Em Outlet é o espaço onde será inserido o conteúdo especifico de uma página */}
        <Outlet />
      </div>
    </div>
  )
}
