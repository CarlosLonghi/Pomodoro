import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'

export function DefaultLayout() {
  return (
    <div className="font-display h-screen flex justify-center items-center bg-gray-700 antialiased">
      <div className="flex flex-col bg-gray-600 h-5/6 w-11/12 md:w-5/6 max-w-6xl rounded py-10 px-4 sm:px-8 md:px-14 lg:px-20 xl:px-40 lg:py-16">
        <Header />

        {/* Em Outlet é o espaço onde será inserido o conteúdo especifico de uma página */}
        <Outlet />
      </div>
    </div>
  )
}
