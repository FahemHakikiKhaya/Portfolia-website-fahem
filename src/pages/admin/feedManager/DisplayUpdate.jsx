import React,{useState,useEffect} from 'react'
import axios from '../../../utils/axios'
import FeedMap from '../../Home/feed/FeedMap'


function DisplayUpdate(props) {
  
     
    return (
        <div className="col-8 border-bottom border-top border-end border-3 border-dark">
           <FeedMap feeds={props.feeds} />
        </div>
    )
}

export default DisplayUpdate
