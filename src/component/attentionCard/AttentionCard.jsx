import React from 'react'
import './Attention.css'


function AttentionCard(props) {

    
    
    return (
        <div className="Attention">
           
        <div className="Attention-title body-font">ON TRACK</div>

            <div className="Attention-content">
            <div className="Attention-image">
            <img src={props.image} alt="Guitar"/>
            </div>
            <div className="Attention-info">
            <h1 className="title-font">Paragraphs - Luke Chiang</h1>
            <p className="body-font">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa aut neque debitis? Sunt natus saepe eligendi earum? Natus, distinctio aut!</p>
            </div>
        </div>

        

        </div>
    )
}

export default AttentionCard
