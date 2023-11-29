import './App.css'
import {puppyList} from './data.js'
import { useState } from 'react'

function App() {

  const [puppies, setPuppies] = useState(puppyList)
  const [featPupId, setFeatPupId] = useState(null)
  const featuredPup = puppies.find((pup)=> pup.id === featPupId)

return (
    <>
     <h1>Puppy Pal Workshop</h1>
     <div className='App'>
      {
        puppies.map((puppy) => {
          return (
             <p onClick={()=>{setFeatPupId(puppy.id)}} key={puppy.id}>{puppy.name}</p>
          ) 
        })
      }
      {featPupId && (
        <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
     </div>
    </>
  )
}

export default App
