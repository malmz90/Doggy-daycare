import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function Dog() {
  const { id } = useParams()
  const [dog, setDog] = useState(null)

  useEffect(() => {
    fetch('https://api.jsonbin.io/v3/b/68d1168e43b1c97be94b3fbb')
      .then(res => res.json())
      .then(data => {
        const foundDog = data.record.find(dog => dog.chipNumber === id);
        setDog(foundDog);
})
  }, [id])

  if (!dog) return <p>Loading…</p>

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-2">{dog.name}</h2>
    </div>
  )
}
