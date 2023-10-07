import { Route, Routes } from 'react-router-dom'

import './App.css'
import Starships from './components/StarshipPage'
import StarshipPage from './components/Starships'

function App() {


  return (
    <>
    <Routes>
      <Route path='/starships' element={<Starships/>}/>
      <Route path='/starships/:starshipId' element={<StarshipPage/>}/>
    </Routes>

    </>
  )
}

export default App
