import './App.css'
import Navbar from './components/Navbar'
import Automotive from './pages/Automotive'
import Bookings from './pages/Bookings'
import Editorials from './pages/Editorial'
import Landing from './pages/Landing'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Street from './pages/Street'


function App() {

  return (
    <>
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path='/' element={<Landing />}/> {/* Landing Page */}
            <Route path='/bookings' element={<Bookings />}/>
            <Route path='/automotive' element={<Automotive />}/>
            <Route path='/editorial' element={<Editorials />}/>
            <Route path='/street' element={<Street />}/>
          </Routes>
        </main>
      </Router>
    </>
  )
}

export default App
