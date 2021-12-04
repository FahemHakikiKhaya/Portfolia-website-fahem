import React,{useState,useEffect} from 'react'
import axios from '../../../utils/axios'
import NavBar from '../../../component/navigation/NavBar'
import DisplayUpdate from './DisplayUpdate'
import Manager from './Manager'

import Header from '../Heading/Heading'

function Index() {
    const [feeds, setFeeds] = useState([])
    const [paginationState,setPaginationState] = useState({
        page:1,
        maxPage:0,
        itemPerPage:1,
        /*
        Rencana paginationState:
        1.Setiap feed editor akan mengakses satu feed
        2.Akan dibuat paginationState untuk mengedit feed berikutnya 
        */
    })

    const { id,image,month,date,year,desc,title } = feeds

    
    
    const fetchFeeds = ()=>{
      axios
      .get("/feeds")
      .then((res) => {
        const { data } = res;
        setFeeds(data);
        setPaginationState({
            ...paginationState,
            maxPage: Math.ceil(data.length / paginationState.itemPerPage),
          });
        
      })
      .catch((error) => {
        alert(error.message);
      });
    }


  
    useEffect(() => {
      fetchFeeds()
    }, [])

    const updateData = (formState) => {
        axios
        .patch(`/feeds/`,formState)
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
            <Manager updateData={updateData} />
            <DisplayUpdate 
            feeds={feeds} 
            paginationState={paginationState}
            setPaginationState={setPaginationState}
            />
        </div>
        </div>
    )
}

export default Index
