import {Route, Routes } from 'react-router-dom'
import './App.css'
import StarshipList from './components/StarshipList'
import Starship from './components/Starship'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<StarshipList />} />
      <Route path="/ships/:shipId" element={<Starship />} />
    </Routes>


    </>
  )
}

export default App
