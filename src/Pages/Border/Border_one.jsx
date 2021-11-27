import React from 'react'


function Border_one() {
    return (
        <div className="row justify-content-center align-items-center py-5 border-top  border-bottom border-dark">
            <h2 className="col-5 title-font pt-4">Never Miss a New Post</h2>
                <div className="col-2">
                    <label className="form-label">Enter Your Email</label>
                    <input  className="form-control mb-1"/>
                </div>
            <button className="col-2 mt-4 btn-primary py-1" >Enter</button>
        </div>
    )
}

export default Border_one
