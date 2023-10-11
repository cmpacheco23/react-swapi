import { Link } from "react-router-dom"

const StarshipDetails = ({starship}) => {
  console.log(starship)
  console.log(starship.url)

  return (
    <>
    <div>
      <Link to={`/ships/${starship.url.match(/\d+/)}`}>{starship.name} </Link>
    </div>
    </>
  );
}
export default StarshipDetails;