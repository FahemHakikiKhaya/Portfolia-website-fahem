import React from 'react'
import Home from './pages/Home'
import Login from './pages/login/index.jsx'
import "bootstrap/dist/css/bootstrap.css";
import './Font.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'


function App() {
    return (
       <Router>
          <Routes>
             <Route path="/" element={<Home/>}/>
             <Route path="/Login" element={<Login/>}/>
          </Routes>
       </Router>
    
        
       
    )
}

export default App
