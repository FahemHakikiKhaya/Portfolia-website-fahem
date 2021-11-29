import React from 'react'
import NavBar from '../../component/navigation/NavBar'
import './login.css'

function index() {
    return (
      <div>
      <NavBar/>
      <div className="col-md-6 login-form-1 mx-auto mt-5">
        
                    <h3>Admin</h3>
                    
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Your Email *" />
                        </div>
                        <div className="form-group mt-2">
                            <input type="password" className="form-control" placeholder="Your Password *" />
                        </div>
                        <div className="d-flex mt-2 ">
                        <button  className="btn btn-primary  w-75">
                        Login
                        </button>
                        <a href="" className="ms-2 pt-1">Register</a>
                        </div>
                    
      </div>
      </div>
 
      )
}

export default index
