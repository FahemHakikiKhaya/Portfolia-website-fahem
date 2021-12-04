import React,{useState,useEffect} from 'react'
import axios from '../../../utils/axios'
import NavBar from '../../../component/navigation/NavBar'
import DisplayUpdate from './DisplayUpdate'
import Manager from './Manager'

import Header from '../Heading/Heading'

function Index() {
    const [feeds, setFeeds] = useState([])
    
    const fetchFeeds = ()=>{
      axios
      .get("/feeds")
      .then((res) => {
        const { data } = res;
        setFeeds(data);
      })
      .catch((error) => {
        alert(error.message);
      });
  
    useEffect(() => {
      fetchFeeds()
    }, [])

    const updatedData = (formState) => {
        axios
        .patch(`/feeds/1`,formState)
        .then((res) => {
            fetchFeeds()
        })
        .catch((err) => console.log(err));
    }
    
    return (
        <div className="container">
        <div >
            <NavBar/>
            <Header/>
       
        </div>
        <div className="d-flex row mx-0 ">
            <Manager/>
            <DisplayUpdate feeds={feeds}/>
        </div>
        </div>
    )
}

export default Index
