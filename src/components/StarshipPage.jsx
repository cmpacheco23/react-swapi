import { useEffect, useState } from 'react'
import { getAllStarships } from './services/sw-api'
import { Link } from 'react-router-dom'

const Starships = () => {
  const [starShipList, setStarShipList] = useState([])

  useEffect(() => {
    
    const fetchStarshipList = async () => {
      const starShipData = await getAllStarships()
      setStarShipList(starShipData)
    }
    fetchStarshipList()

  })

  return ( 
    <>
    <h1> STAR WARS STARSHIPS</h1>
    
    </>
  );
}

export default Starships