import { Link } from "react-router-dom";

export default function DogCard({ dog }) {
  return (
    <Link
      key={dog.chipNumber} 
      to={`/dog/${dog.chipNumber}`}  
      className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group"
    >
      <div className="relative">
        <img
          src={dog.img}
          alt={dog.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className={`absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-medium ${
          dog.present 
            ? 'bg-green-100 text-green-800' 
            : 'bg-gray-100 text-gray-800'
        }`}>
          {dog.present ? 'Present' : 'Away'}
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-1">{dog.name}</h3>
        <p className="text-gray-600 text-sm mb-2 capitalize">{dog.breed}</p>
        
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {dog.age} year{dog.age !== 1 ? 's' : ''} old
          </span>
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            {dog.sex}
          </span>
        </div>
        
        <div className="mt-3 pt-3 border-t border-gray-100">
          <p className="text-xs text-gray-500">Owner: {dog.owner.name} {dog.owner.lastName}</p>
        </div>
      </div>
    </Link>
  )
}
