import React from 'react'
import FahemBlokM from '../../database/Pictures/Fahem-BlockM.jpg'
import './Feed.css'



function Feed(props) {
    const {id,image,month,date,year,desc,title} = props.feeds
    console.log(id)
  
  
    return (
        <div className="row Feed py-5">
        <div className="Feed-1 col-7 feed-padding border-end border-dark">
            <div className="row d-flex mx-5 border border-1 border-dark">
            <div className="col-7 w-45 px-0 ">
            <img src={FahemBlokM} className="w-100" alt=""/>
            </div>
            <div className="col-5 d-flex-column w-55 p-5">
            <p>Nov - 10 - 2021</p>
            <p className="text-decoration-none text-dark feed-title"><p>Do Not Leave China Before Eating Dimsum</p></p>
            <p className="text-decoration-none text-dark feed-desc" >A wholesome experience eating dimsum with my friends on the weekend</p>
            </div>
            </div>
        </div>

        <div className="Feed-3 col-5 p-5">

        </div>
        </div>
    )
}

export default Feed
