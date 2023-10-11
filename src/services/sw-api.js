const baseUrl = 'http://swapi.dev/api'

export async function getAllStarships(){
  const res = await fetch(`${baseUrl}/starships`)
  return res.json()
}

export async function getStarshipDetails(shipId){
  const res = await fetch(`${baseUrl}/starships/${shipId}`)
  return res.json()
}