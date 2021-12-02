import React from 'react'


function Manager() {
    return (
        <div className="col-4 border border-3 border-dark px-0">
            
            <div className="d-flex row border border-dark w-100 mx-0 ">
                <h4 className="bg-info border border-1 my-auto border-dark align-text">Music</h4>
                <input placeholder="Image"type="text" />
                <input placeholder="Title"type="text" />
                <input placeholder="Singer"type="text" />
                <input placeholder="Description"type="text" />
                <button className="btn btn-success">Save</button>
                <button className="btn btn-danger">Cancel</button>
            </div>
          
        </div>
    )
}

export default Manager
