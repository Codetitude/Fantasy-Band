import './App.css'
//import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import { useState } from 'react'

const App = () => {
  const [currentPage, setCurrentPage] = useState(0)

  const initialState = {
    name: '',
    bandOrigin: '',
    image: '',
    role: '',
    rating: 0
  }
  const [formState, setFormState] = useState(initialState)

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  const incrementPage = () => {
    setCurrentPage((prevState) => prevState + 1)
  }

  return (
    <div>
      <NavBar />
      <main>
        <Home
          currentPage={currentPage}
          name={formState.name}
          bandOrigin={formState.bandOrigin}
          role={formState.role}
          rating={formState.rating}
          incrementPage={incrementPage}
          handleChange={handleChange}
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
