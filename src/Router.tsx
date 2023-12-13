import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { History } from './pages/History'
import { Login } from './pages/Login'

import { DefaultLayout } from './layouts/DefaultLayout'
import { DefaultLayoutAdmin } from './layouts/DefaultLayoutAdmin'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="history" element={<History />} />
      </Route>

      {/* Access using http://localhost:5173/admin/login */}
      <Route path="admin" element={<DefaultLayoutAdmin />}>
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  )
}
