import React from 'react'
import './Attention.css'


function AttentionCard(props) {
    const {image,title,singer,desc} = props.attentions

    
    
    return (
        <div className="Attention">
           
            <div className="Attention-title body-font">ON TRACK</div>

                <div className="Attention-content">
                <div className="Attention-image">
                <img src={image} alt="Guitar"/>
                </div>
                <div className="Attention-info">
                <h1 className="title-font">{`${title}-${singer}`}</h1>
                <p className="body-font">{desc}</p>
                </div>
            </div>

        

        </div>
    )
}

export default AttentionCard
