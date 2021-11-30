import React, { useState } from 'react'
import NavBar from '../../component/navigation/NavBar'
import './login.css'
import axios from '../../utils/axios'
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from '../../store/actions';

function index() {
    const dispatch = useDispatch()
    const username = useSelector((state)=>{state.auth.username});
    const [formState,setFormState] = useState({
        username="",
        password=""
    })

    const onHandleChange = (e) => {
        setFormState({...formState,[e.target.name]: e.target.value})
    }

    const onLoginClick = () => {
        axios
        .get("/users",{
        params:{username:formState.username,password:formState.password}
        })
        .then((res)=>{
        const {id,username,role} = res.data[0]
        loginAction({id,username,role,dispatch})
        })
        .catch((err) => console.log({ err }));
    }

    return (
      <div>

      <NavBar/>

        <div className="col-md-6 login-form-1 mx-auto mt-5">
        
            <h3>Admin</h3>
                    
                <div className="form-group">
                <input onChange={onHandleChange} name="username" type="text" className="form-control" placeholder="Your Email *" />
                </div>
                <div className="form-group mt-2">
                <input onChange={onHandleChange} name="password"type="password" className="form-control" placeholder="Your Password *" />
                </div>

                <div className="d-flex mt-2 ">
                <button  onClick={onLoginClick} className="btn btn-primary  w-75">
                Login
                </button>
                <a href="" className="ms-2 pt-1">Register</a>
                </div>
                    
        </div>

      </div>
 
      )
}

export default index
