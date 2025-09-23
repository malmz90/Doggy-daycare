import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto">
   
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
          Welcome to <span className="text-blue-600">Doggy Daycare</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Your trusted partner in providing loving care and attention for your furry family members. 
          We ensure every dog feels at home while you're away.
        </p>
        <Link 
          to="/catalog" 
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
        >
          View Our Dogs
        </Link>
      </div>


     
    </div>
  )
}
