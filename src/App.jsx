import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Catalog from './pages/Catalog'
import Dog from './pages/Dog'
import Navbar from './components/Navbar'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/dog/:id" element={<Dog />} />
        </Routes>
      </main>

 
    </div>
  )
}
