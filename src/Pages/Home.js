import React from 'react'
import "bootstrap/dist/css/bootstrap.css"
import Header from './header/Header.jsx'
import NavBar from './navbar/NavBar.jsx'
import Attention from './attention/Attention.jsx'
import Border_one from './border/Border_one.jsx'
import Feed from './feed/Feed.jsx'
import FeedList from './feed/FeedList.jsx'
import FeedMap from './feed/FeedMap.jsx'


function Home() {
  return (
    <div className="container">
      <Header />
      <NavBar />
      <Attention />
      <Border_one/>
      <Feed />
      <FeedList/>
      <FeedMap/>
    </div>
  )
}

export default Home
