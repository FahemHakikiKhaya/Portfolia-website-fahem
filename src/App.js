import React from 'react'
import "bootstrap/dist/css/bootstrap.css"
import Header from './Pages/header/Header.jsx'
import NavBar from './Pages/navbar/NavBar.jsx'
import Attention from './Pages/attention/Attention.jsx'
import Border_one from './Pages/border/Border_one.jsx'
import Feed from './Pages/feed/Feed.jsx'

function App() {
  return (
    <div className="container">
      <Header />
      <NavBar />
      <Attention />
      <Border_one/>
      <Feed />
    </div>
  )
}

export default App
