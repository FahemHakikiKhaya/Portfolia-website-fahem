import React from 'react'
import './Feed.css'



function FeedCard(props) {
    const {image,month,date,year,desc,title} = props.feed
    
  
  
    return (
        <div className="row Feed py-5">
        <div className="Feed-1 col-7 feed-padding border-end border-dark">
            <div className="row d-flex mx-5 border border-1 border-dark">
            <div className="col-7 w-45 px-0 ">
            <img src={image} className="w-100" alt=""/>
            </div>
            <div className="col-5 d-flex-column w-55 p-5">
            <p>{month} - {date} - {year}</p>
            <p className="text-decoration-none text-dark feed-title"><p>{title}</p></p>
            <p className="text-decoration-none text-dark feed-desc" >{desc}</p>
            </div>
            </div>
        </div>

        <div className="Feed-3 col-5 p-5">

        </div>
        </div>
    )
}

export default FeedCard
