import React,{useState,useEffect} from 'react'
import NavBar from '../../../component/navigation/NavBar'
import DisplayUpdate from './DisplayUpdate'
import Manager from './Manager'
import axios from '../../../utils/axios'

import Header from '../Heading/Heading'

function Index() {
    const [attention,setAttention] = useState([])
    
    const FetchAttention = async()=>{
      try { const res = await axios.get("/attentions")
        const { data } = res;
        setAttention(data)
      }
      catch (error) {
        alert(error.message);
      };
    
    }
    
    useEffect(()=>{
        FetchAttention()
    },[])

    const updateData = (formState) => {
        axios
        .patch(`/attentions/1`,formState)
        .then((res) => {
            FetchAttention()
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
            <Manager updateData={updateData}  />
            <DisplayUpdate attention={attention}/>
        </div>
        </div>
    )
}

export default Index
