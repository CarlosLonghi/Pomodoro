import { Timer, Scroll } from '@phosphor-icons/react'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <header className="flex justify-end">
      <nav className="flex items-center gap-4">
        <NavLink title="Tempo" to="/" className="nav-link">
          <Timer size={30} />
        </NavLink>

        <NavLink title="Histórico" to="history" className="nav-link">
          <Scroll size={30} />
        </NavLink>
      </nav>
    </header>
  )
}
