import { useState } from 'react'
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import './index.css'
import Navbar from './components/navbar'
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/Register';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<HomePage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
      </Routes>
    </Router>
  )
}

export default App
