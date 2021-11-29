import React,{useState,useEffect} from 'react'
import FeedMap from './FeedMap'
import axios from '../../utils/axios'

function Index() {
    const [feeds, setFeeds] = useState([])
    const fetchFeeds = () => {
        axios
          .get("/feeds")
          .then((res) => {
            const { data } = res;
            setFeeds(data);
          })
          .catch((error) => {
            alert(error.message);
          });
      };

      useEffect(()=>{
        fetchFeeds();
      },[])

    return (
        <div>
            <FeedMap feeds = {feeds}/>
        </div>
    )
}

export default Index
