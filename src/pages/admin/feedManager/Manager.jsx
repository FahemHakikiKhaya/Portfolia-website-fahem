import React,{useState,useEffect} from 'react'


function Manager(props) {

    const [formState,setFormState] = useState({
        image:"",
        month:"",
        date:"",
        year:"",
        desc:"",
        title:"",
    })

    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
      };
    
    const onSaveButton = () => {
        props.updateData(formState)
        };


    return (
        <div className="col-4 border border-3 border-dark px-0">
            
             
            <div className="d-flex row border border-dark w-100 mx-0 ">
                <h4 className="bg-info border border-1 my-auto border-dark align-text">Edit Feed</h4>
                <input 
                name="image"
                placeholder="Image"
                type="text"
                onChange={handleChange}/>
                <input 
                name="month"
                placeholder="Month"
                type="text"
                onChange={handleChange} />
                <input
                name="date"
                placeholder="Date"
                type="text" 
                onChange={handleChange}/>
                <input 
                name="year"
                placeholder="Year"
                type="text" 
                onChange={handleChange}/>
                <input 
                name="desc"
                placeholder="Description"
                type="text" 
                onChange={handleChange}/>
                <input 
                name="title"
                placeholder="Title"
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
