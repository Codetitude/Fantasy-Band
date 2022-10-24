import './App.css'
import { Route, Routes } from 'react-router-dom'
import NameBand from './pages/NameBand'
import NavBar from './components/NavBar'
import PickSinger from './pages/PickSinger'
import PickGuitarist from './pages/PickGuitarist'
import PickBassist from './pages/PickBassist'
import PickDrummer from './pages/PickDrummer'

const App = () => {
  return (
    <div>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<NameBand />} />
          <Route path="/PickSinger" element={<PickSinger />} />
          <Route path="/PickGuitarist" element={<PickGuitarist />} />
          <Route path="/PickBassist" element={<PickBassist />} />
          <Route path="/PickDrummer" element={<PickDrummer />} />
          <Route path="/" element={<NameBand />} />
          <Route path="/" element={<NameBand />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
