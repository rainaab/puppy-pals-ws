import './App.css'
import {puppyList} from './data.js'
import { useState } from 'react'

function App() {

  const [puppies, setPuppies] = useState(puppyList)
  console.log(puppies)

return (
    <>
     <h1>Puppy Pal Workshop</h1>
     <div>
      {
        puppies.map((puppy) => {
          return <p key={puppy.id}>{puppy.name}</p>
        })
      }
     </div>
    </>
  )
}

export default App
