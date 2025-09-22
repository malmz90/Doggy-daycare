import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-semibold mb-4">Welcome to Doggy Daycare</h2>
      <Link to="/catalog" className="bg-blue-600 text-white px-4 py-2 rounded">
        View Dogs
      </Link>
    </div>
  )
}
