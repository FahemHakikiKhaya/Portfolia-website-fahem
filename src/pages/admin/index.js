import React from 'react'
import NavBar from '../../component/navigation/NavBar'
import DisplayUpdate from './Display/DisplayUpdate'
import Manager from './Manager/Manager'

import Header from './Heading/Heading'

function Index() {
    return (
        <>
        <div>
            <NavBar/>
            <Header/>
       
        </div>
        <div className="d-flex row ">
            <Manager/>
            <DisplayUpdate/>
        </div>
        </>
    )
}

export default Index
