import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Catalog from './pages/Catalog'
import Dog from './pages/Dog'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow p-4 flex justify-between">
        <h1 className="text-xl font-bold">Doggy Daycare</h1>
        <nav className="space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/catalog" className="hover:underline">Catalog</Link>
        </nav>
      </header>

      <main className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/dog/:id" element={<Dog />} />
        </Routes>
      </main>
    </div>
  )
}
