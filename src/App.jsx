import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home' 
import About from './components/About' // Import About component
import Notestate from './context/notes/Notestate'

function App() {
  return (
    <Router>
      <Notestate>
      <Navbar />
      <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      </div>
    </Notestate>
    </Router>
  )
}

export default App
