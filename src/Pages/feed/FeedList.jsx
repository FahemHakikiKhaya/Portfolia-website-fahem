import React,{useState,useEffect} from 'react'
import Feed from './Feed';
import axios from '../../utils/axios'

function FeedList() {
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

export default FeedList
