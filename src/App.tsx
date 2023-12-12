import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

export function App() {
  return (
    <div className="font-display h-screen bg-gray-700">
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  )
}
