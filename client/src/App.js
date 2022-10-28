import './App.css'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import { useState } from 'react'
import PastBands from './pages/PastBands'

const App = () => {
  const [currentPage, setCurrentPage] = useState(0)

  const incrementPage = () => {
    setCurrentPage((prevState) => prevState + 1)
  }

  const [newBand, setNewBand] = useState({
    name: '',
    members: [],
    totalRating: 0
  })

  const [newMember, setNewMember] = useState({
    ChooseAnArtist: '',
    bandOrigin: '',
    role: '',
    rating: 0
  })

  return (
    <div>
      <NavBar setCurrentPage={setCurrentPage} />
      <main className="main body">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                currentPage={currentPage}
                incrementPage={incrementPage}
                newBand={newBand}
                setNewBand={setNewBand}
                newMember={newMember}
                setNewMember={setNewMember}
              />
            }
          />
          <Route path="/PastBands" element={<PastBands />} />
        </Routes>
        <img
          className="crowd"
          src="https://i.imgur.com/BMqTWii.jpg"
          alt="footer"
        />
      </main>
    </div>
  )
}

export default App
