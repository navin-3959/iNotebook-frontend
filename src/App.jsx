import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home' 
import About from './components/About' // Import About component
import Notestate from './context/notes/Notestate'
// import Alert from './components/Alert'
import Login from './components/Login'
import Signup from './components/Signup'
function App() {

  return (
    <Router>
      <Notestate>
        <Navbar />
        {/* alert */}
        <div className="container">
          <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/about" element={ <About /> } />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </Notestate>
    </Router>
  );
}

export default App;
