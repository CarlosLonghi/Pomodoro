import { Outlet } from 'react-router-dom'

export function DefaultLayoutAdmin() {
  return (
    <div className="font-display h-screen bg-green-700">
      <Outlet />
    </div>
  )
}
