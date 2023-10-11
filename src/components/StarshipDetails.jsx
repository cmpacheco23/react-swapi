import { Link } from "react-router-dom"
const StarshipDetails = ({starship}) => {
  console.log(starship)
  console.log(starship.url)

  return (
    <main className="card">
    <div className="card-container">
      <Link className="link" to={`/ships/${starship.url.match(/\d+/)}`}>{starship.name} </Link>
    </div>




    </main>
  );
}
export default StarshipDetails;