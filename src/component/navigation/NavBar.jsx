import React from 'react'
import './NavBarStyle.css'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'

function NavBar() {
    const username = useSelector(state => state.auth.username)
    return (

       
                <div className="Nav-Bar body-font px-5">
                    
                <Link tag={Link} to="/" className=" text-decoration-none text-black py-3 px-4 border-inline">myHOMEPAGE</Link>
                <a href="" className="text-decoration-none text-black py-3 px-4">myEXPERIENCE</a>
                <a href="" className="text-decoration-none text-black py-3 px-4 border-inline">myPHILOSOPHY</a>
                <Link tag={Link} to="/Login"className="text-decoration-none text-black py-3 px-4 border-right">{username ? `Hello ${username}` : 'loginAdmin'} </Link>
                

                <div className="Icon-list pt-lg-2 px-3 icon-size d-flex ">
                <a href="https:www.instagram.com/fahemkhaya/"><i className="fa fa-instagram"></i></a>
                <a href=""><i className="fa fa-twitter-square"></i></a>
                <a href=""><i className="fa fa-facebook"></i></a>
                <a href=""><i className="fa fa-pinterest"></i></a>
                </div>

                 </div>
      
    )
}

export default NavBar
