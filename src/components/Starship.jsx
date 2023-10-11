import { useEffect } from "react";
import { Link, useParams } from "react-router-dom"
import * as apiService from '../services/sw-api'
import { useState } from "react";


const Starship = () => {
  const {shipId} = useParams()
  const [shipInfo, setStarshipInfo] = useState({})

  useEffect(() => {
    const fetchShipInfo = async () => {
      const shipDetailsData = await apiService.getStarshipDetails(shipId)
      setStarshipInfo(shipDetailsData)
    }
    fetchShipInfo()
  })

  if (!shipInfo.name) return <h2>Please wait... Loading Ship...</h2>
  return ( 
    <>
    <h2>Name: {shipInfo.name}</h2>
    <h2>Model: {shipInfo.model}</h2>
    <Link to='/'> Return</Link>

    </>
  );
}
export default Starship ;