import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'

export function DefaultLayout() {
  return (
    <div className="font-display h-screen bg-gray-700">
      <Header />
      {/* Em Outlet é o espaço onde será inserido o conteúdo especifico de uma página */}
      <Outlet />
    </div>
  )
}
