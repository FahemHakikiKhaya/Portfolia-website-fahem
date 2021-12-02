import React,{useState,useEffect} from 'react'
import axios from '../../../utils/axios';


function Manager() {
    const [Attention,setAttention] = useState([])
    const [formState,setFormState] = useState({
        image:"",
        title:"",
        singer:"",
        desc:"",
    })


    const FetchAttention = async()=>{
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
    useEffect(()=>{
        FetchAttention()
    })
    }

    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
      };
      
    const onSaveButton = () => {
        const {image,title,singer,desc} = formState
        const newData = {image,title,singer,desc}
        axios
        .patch(`/attentions/${image}`,formState)
        .then((res) => {
          FetchAttention()
        })
        .catch((err) => console.log(err));
    };
   

    return (
        <div className="col-4 border border-3 border-dark px-0">
            
            <div className="d-flex row border border-dark w-100 mx-0 ">
                <h4 className="bg-info border border-1 my-auto border-dark align-text">Music</h4>
                <input 
                name="image"
                placeholder="Image"
                type="text"
                onChange={handleChange}/>
                <input 
                name="title"
                placeholder="Title"
                type="text"
                onChange={handleChange} />
                <input
                name="singer"
                placeholder="Singer"
                type="text" 
                onChange={handleChange}/>
                <input 
                name="desc"
                placeholder="Description"
                type="text" 
                onChange={handleChange}/>
                <button
                onClick= {onSaveButton}
                className="btn btn-success">Save</button>
                <button 
                className="btn btn-danger">Clear</button>
            </div>
          
        </div>
    )
}

export default Manager
