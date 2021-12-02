import React from 'react'
import NavBar from '../../../component/navigation/NavBar'
import DisplayUpdate from './DisplayUpdate'
import Manager from './Manager'

import Header from '../Heading/Heading'

function Index() {
    return (
        <div className="container">
        <div >
            <NavBar/>
            <Header/>
       
        </div>
        <div className="d-flex row mx-0 ">
            <Manager/>
            <DisplayUpdate/>
        </div>
        </div>
    )
}

export default Index
