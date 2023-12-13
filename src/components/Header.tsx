import { Timer, Scroll } from '@phosphor-icons/react'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <header className="flex justify-end">
      <nav className="flex items-center gap-4">
        <NavLink
          title="Tempo"
          to="/"
          className="text-white border-b-2 pb-1 border-b-gray-500 hover:border-b-green-500 transition ease-in-out"
        >
          <Timer size={30} />
        </NavLink>

        <NavLink
          title="Histórico"
          to="history"
          className="text-white border-b-2 pb-1 border-b-gray-500 hover:border-b-green-500 transition ease-in-out"
        >
          <Scroll size={30} />
        </NavLink>
      </nav>
    </header>
  )
}
