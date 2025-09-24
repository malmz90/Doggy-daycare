import { useState, useEffect } from "react";
import LoadingSpinner from "../components/LoadingSpinner";
import DogCard from "../components/DogCard";

export default function Catalog() {
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(true);

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

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Our Dog Family</h1>
        <p className="text-gray-600">Meet all the wonderful dogs in our care</p>
        <div className="mt-4 flex items-center gap-4 text-sm text-gray-500">
          <span className="flex items-center gap-1">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            Present: {dogs.filter(dog => dog.present).length}
          </span>
          <span className="flex items-center gap-1">
            <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
            Away: {dogs.filter(dog => !dog.present).length}
          </span>
          <span>Total: {dogs.length} dogs</span>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {dogs.map((dog) => (
          <DogCard key={dog.chipNumber} dog={dog} />
        ))}
      </div>

      {dogs.length === 0 && !loading && (
        <div className="text-center py-12">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-600 mb-2">No dogs found</h3>
          <p className="text-gray-500">There are currently no dogs in our system.</p>
        </div>
      )}
    </div>
  );
}
