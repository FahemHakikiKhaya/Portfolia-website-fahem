import React from 'react'
import "bootstrap/dist/css/bootstrap.css"
import Header from './header/Header.jsx'
import NavBar from './navbar/NavBar.jsx'
import Attention from './attention/Attention.jsx'
import Border_one from './border/Border_one.jsx'
import Feed from './feed/Feed.jsx'

function Home() {
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

export default Home
