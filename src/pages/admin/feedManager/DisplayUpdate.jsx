import React,{useState,useEffect} from 'react'
import axios from '../../../utils/axios'
import FeedCard from '../../../component/feedcard/FeedCard'
import FeedMap from '../../Home/feed/FeedMap'


function DisplayUpdate() {
  const [feeds, setFeeds] = useState([])
  useEffect(()=>{
    axios
    .get("/feeds")
    .then((res) => {
      const { data } = res;
      setFeeds(data);
    })
    .catch((error) => {
      alert(error.message);
    });

  },[])
     
    return (
        <div className="col-8 border-bottom border-top border-end border-3 border-dark">
           <FeedMap feeds={feeds} />
        </div>
    )
}

export default DisplayUpdate
