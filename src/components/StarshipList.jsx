import { useState, useEffect } from 'react'
import * as apiService from '../services/sw-api'
import StarshipDetails from './StarshipDetails'

function StarshipList() {
    const [starShipList, setStarShipList] = useState([])
  
    useEffect(() => {
      
      const fetchStarshipList = async () => {
        const starShipData = await apiService.getAllStarships()
        setStarShipList(starShipData.results)
      }
      fetchStarshipList()
  
    },[])
    if (!starShipList.length) return <h2>Please wait... Loading Ships...</h2>
  return (
    <main>
    
      <h1> STAR WARS STARSHIPS</h1>
      <div className="container">
      {starShipList.map(starship => 
        <StarshipDetails key={starship.name} starship={starship}/>
      )
      }
      </div>


    </main>
  )
}

export default StarshipList
