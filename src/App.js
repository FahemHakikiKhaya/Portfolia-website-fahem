import React from 'react'
import Home from './pages/Home'
import Login from './pages/login/index.jsx'
import MusicAdmin from './pages/admin/attentionManager/index'
import FeedAdmin from './pages/admin/feedManager/index'
import "bootstrap/dist/css/bootstrap.css";
import './Font.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'


function App() {
    return (
       <Router>
          <Routes>
             <Route path="/" element={<Home/>}/>
             <Route path="/Login" element={<Login/>}/>
             <Route path="/MusicAdmin" element={<MusicAdmin/>}/>
             <Route path="/FeedAdmin" element={<FeedAdmin/>}/>
          </Routes>
       </Router>
    
        
       
    )
}

export default App
