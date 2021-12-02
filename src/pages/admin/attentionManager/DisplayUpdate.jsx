import React,{useState,useEffect} from 'react'
import AttentionMap from '../../Home/attention/AttentionMap'
import axios from '../../../utils/axios'

function DisplayUpdate() {
    const [attention,setAttention] = useState([])

    useEffect(async()=>{
        try { const res = axios.get("/attentions")
        .then((res) => {
          const { data } = res;
          setAttention(data)
        })
        .catch((error) => {
          alert(error.message);
        });
        } catch (error) {
        }

    },[])

    return (
        <div className="col-8 border-bottom border-top border-end border-3 border-dark">
           <AttentionMap attentions={attention} />
        </div>
    )
}

export default DisplayUpdate
