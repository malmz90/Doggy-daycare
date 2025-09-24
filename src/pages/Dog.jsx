import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import LoadingSpinner from '../components/LoadingSpinner'
import BackButton from '../components/BackButton'

export default function Dog() {
  const { id } = useParams()
  const [dog, setDog] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://api.jsonbin.io/v3/b/68d1168e43b1c97be94b3fbb')
      .then(res => res.json())
      .then(data => {
        const foundDog = data.record.find(dog => dog.chipNumber === id);
        setDog(foundDog);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching dog:", error);
        setLoading(false);
      });
  }, [id])

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!dog) {
    return (
      <div className="max-w-2xl mx-auto text-center py-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Dog Not Found</h2>
        <p className="text-gray-600 mb-6">The dog you're looking for doesn't exist in our system.</p>
        <Link 
          to="/catalog" 
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
        >
          Back to Catalog
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
     
      <div className="mb-6">
        <BackButton />
      </div>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
    
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-8 text-white">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="relative">
              <img
                src={dog.img}
                alt={dog.name}
                className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
              />
              <div className={`absolute -bottom-2 -right-2 w-8 h-8 rounded-full border-4 border-white flex items-center justify-center ${
                dog.present ? 'bg-green-500' : 'bg-gray-400'
              }`}>
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-4xl font-bold mb-2">{dog.name}</h1>
              <p className="text-xl text-blue-100 capitalize">{dog.breed}</p>
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mt-4 ${
                dog.present 
                  ? 'bg-green-500 text-white' 
                  : 'bg-gray-500 text-white'
              }`}>
                <div className="w-2 h-2 bg-white rounded-full"></div>
                {dog.present ? 'Currently Present' : 'Not Present'}
              </div>
            </div>
          </div>
        </div>

     
        <div className="p-8">
          <div className="grid md:grid-cols-2 gap-8">
         
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Dog Information</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Chip Number</p>
                    <p className="font-semibold text-gray-800">{dog.chipNumber}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Age</p>
                    <p className="font-semibold text-gray-800">{dog.age} year{dog.age !== 1 ? 's' : ''} old</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Sex</p>
                    <p className="font-semibold text-gray-800 capitalize">{dog.sex}</p>
                  </div>
                </div>
              </div>
            </div>

         
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Owner Information</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Owner Name</p>
                    <p className="font-semibold text-gray-800">{dog.owner.name} {dog.owner.lastName}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone Number</p>
                    <a 
                      href={`tel:${dog.owner.phoneNumber}`}
                      className="font-semibold text-blue-600 hover:text-blue-700 transition-colors duration-200"
                    >
                      {dog.owner.phoneNumber}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

       
        </div>
      </div>
    </div>
  )
}
