import { useState, useEffect } from "react";
import LoadingSpinner from "../components/LoadingSpinner";
import DogCard from "../components/DogCard";

export default function Catalog() {
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBreed, setSelectedBreed] = useState("");
  const [minAge, setMinAge] = useState("");
  const [maxAge, setMaxAge] = useState("");
  const [selectedSex, setSelectedSex] = useState("");

  useEffect(() => {
    fetch("https://api.jsonbin.io/v3/b/68d1168e43b1c97be94b3fbb")
      .then((res) => res.json())
      .then((data) => {
        setDogs(data.record);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching dogs:", error);
        setLoading(false);
      });
  }, []);

  const uniqueBreeds = [...new Set(dogs.map(dog => dog.breed))].sort();

  const filteredDogs = dogs.filter(dog => {
    const matchesSearch = dog.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBreed = !selectedBreed || dog.breed === selectedBreed;
    const matchesMinAge = !minAge || dog.age >= parseInt(minAge);
    const matchesMaxAge = !maxAge || dog.age <= parseInt(maxAge);
    const matchesSex = !selectedSex || dog.sex === selectedSex;
    
    return matchesSearch && matchesBreed && matchesMinAge && matchesMaxAge && matchesSex;
  });

  if (loading) {
    return <LoadingSpinner />;
  }
  console.log(filteredDogs)
  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Our Dog Family</h1>
        <p className="text-gray-600">Meet all the wonderful dogs in our care</p>
        <div className="mt-4 flex items-center gap-4 text-sm text-gray-500">
          <span className="flex items-center gap-1">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            Present: {filteredDogs.filter(dog => dog.present).length}
          </span>
          <span className="flex items-center gap-1">
            <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
            Away: {filteredDogs.filter(dog => !dog.present).length}
          </span>
          <span>Showing: {filteredDogs.length} of {dogs.length} dogs</span>
        </div>
      </div>

      <div className="mb-8 bg-white p-6 rounded-lg shadow-sm border">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Search & Filter</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Search by name</label>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Enter dog name..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Breed</label>
            <select
              value={selectedBreed}
              onChange={(e) => setSelectedBreed(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">All breeds</option>
              {uniqueBreeds.map(breed => (
                <option key={breed} value={breed}>{breed}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Min age</label>
            <input
              type="number"
              value={minAge}
              onChange={(e) => setMinAge(e.target.value)}
              placeholder="0"
              min="0"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Max age</label>
            <input
              type="number"
              value={maxAge}
              onChange={(e) => setMaxAge(e.target.value)}
              placeholder="20"
              min="0"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Sex</label>
            <select
              value={selectedSex}
              onChange={(e) => setSelectedSex(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">All</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
        </div>

        {(searchTerm || selectedBreed || minAge || maxAge || selectedSex) && (
          <div className="mt-4">
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedBreed("");
                setMinAge("");
                setMaxAge("");
                setSelectedSex("");
              }}
              className="px-4 py-2 text-sm text-blue-600 hover:text-blue-800 underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredDogs.map((dog) => (
          <DogCard key={dog.chipNumber} dog={dog} />
        ))}
      </div>

      {filteredDogs.length === 0 && !loading && (
        <div className="text-center py-12">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-600 mb-2">No dogs found</h3>
          <p className="text-gray-500">
            {dogs.length === 0 
              ? "There are currently no dogs in our system." 
              : "No dogs match your current search and filter criteria. Try adjusting your filters."}
          </p>
        </div>
      )}
    </div>
  );
}
