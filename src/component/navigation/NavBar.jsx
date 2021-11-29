import React from 'react'
import './NavBarStyle.css'


function NavBar() {
    return (

                <div className="Nav-Bar body-font">
                <a href="" className=" text-decoration-none text-black py-3 px-4 border-inline">myHOMEPAGE</a>
                <a href="" className="text-decoration-none text-black py-3 px-4">myEXPERIENCE</a>
                <a href="" className="text-decoration-none text-black py-3 px-4 border-inline">myPHILOSOPHY</a>
                <a href="" className="text-decoration-none text-black py-3 px-4 border-right">myROUTINES</a>
           
                <div className="input-group rounded search-button">
                    <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search"
                    aria-describedby="search-addon" />
                    <span className="input-group-text border-0" id="search-addon">
                    <i className="fas fa-search"></i>
                    </span>
                </div>

                <div className="Icon-list pt-lg-2 px-3 icon-size">
                <a href="https:www.instagram.com/fahemkhaya/"><i className="fa fa-instagram"></i></a>
                <a href=""><i className="fa fa-twitter-square"></i></a>
                <a href=""><i className="fa fa-facebook"></i></a>
                <a href=""><i className="fa fa-pinterest"></i></a>
                </div>
         </div>
      
    )
}

export default NavBar
