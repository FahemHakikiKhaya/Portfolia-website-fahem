import React,{useState,useEffect} from 'react'
import axios from '../../../utils/axios'

function DisplayUpdate() {

    // useEffect(async()=>{
    //     try { const res = axios.get("/feeds")
    //     .then((res) => {
    //       const { data } = res;
    //       setFeeds(data);
    //     })
    //     .catch((error) => {
    //       alert(error.message);
    //     });
            
    //     } catch (error) {
            
    //     }

    // },[])

    return (
        <div className="col-8 border-bottom border-top border-3 border-dark">
            <h1>I display update</h1>
        </div>
    )
}

export default DisplayUpdate
