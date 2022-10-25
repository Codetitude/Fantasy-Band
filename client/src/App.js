import './App.css'
//import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import { useState } from 'react'

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

  return (
    <div>
      <NavBar />
      <main>
        <Home
          currentPage={currentPage}
          incrementPage={incrementPage}
          newBand={newBand}
          setNewBand={setNewBand}
        />
      </main>
    </div>
  )
}

export default App

/*<Routes>
<Route path="/" element={<AddBand />} />
<Route path="/PickSinger" element={<PickSinger />} />
<Route path="/PickGuitarist" element={<PickGuitarist />} />
<Route path="/PickBassist" element={<PickBassist />} />
<Route path="/PickDrummer" element={<PickDrummer />} />
<Route path="/BandConfirm" element={<BandConfirm />} />
<Route path="/Stage" element={<Stage />} />
<Route path="/PastBands" element={<PastBands />} />
</Routes>*/
