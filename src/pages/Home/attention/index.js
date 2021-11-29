import React,{useState,useEffect} from 'react'
import AttentionMap from './AttentionMap';
import axios from '../../../utils/axios'

function Index() {
    const [attention, setAttention] = useState([])
    const fetchAttention = () => {
        axios
          .get("/attentions")
          .then((res) => {
            const { data } = res;
            setAttention(data);
          })
          .catch((error) => {
            alert(error.message);
          });
      };

      useEffect(()=>{
        fetchAttention();
      },[])

    return (
        <div>
            <AttentionMap attention={attention} />
        </div>
    )
}

export default Index
