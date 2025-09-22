import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Catalog() {
  const [dogs, setDogs] = useState([]);
  console.log(dogs);

  useEffect(() => {
    fetch("https://api.jsonbin.io/v3/b/68d1168e43b1c97be94b3fbb")
      .then((res) => res.json())
      .then((data) => setDogs(data.record));
  }, []);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Dog Catalog</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {dogs.map((dog) => (
          <Link
            key={dog.chipNumber} 
            to={`/dog/${dog.chipNumber}`}  
            className="bg-white p-4 rounded shadow hover:shadow-lg"
          >
            <img
              src={dog.img}
              alt={dog.name}
              className="w-full h-48 object-cover mb-2 rounded"
            />
            <p className="text-lg font-medium">{dog.name}</p>
            <p className="text-gray-600">{dog.breed}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
