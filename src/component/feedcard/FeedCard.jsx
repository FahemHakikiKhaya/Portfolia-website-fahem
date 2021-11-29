import React from 'react'
import './Feed.css'



function FeedCard(props) {
    const {image,month,date,year,desc,title} = props.feed
    
  
  
    return (
        <div className="row Feed py-5">
        <div className="Feed-1 w-60 feed-padding border-end border-dark">
            <div className="row d-flex mx-5 border border-1 border-dark">
            <div className="col-5 w-45 px-0 ">
            <img src={image} className="w-100 h-100 img-thumbnail " alt=""/>
            </div>
            <div className="col-7 d-flex-column p-5">
            <p>{month} - {date} - {year}</p>
            <p className="text-decoration-none text-dark feed-title"><p>{title}</p></p>
            <p className="text-decoration-none text-dark feed-desc" >{desc}</p>
            </div>
            </div>
        </div>


        </div>
    )
}

export default FeedCard
