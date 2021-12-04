import React from 'react'
import AttentionMap from '../../Home/attention/AttentionMap'



function DisplayUpdate(props) {
   
    return (
        <div className="col-8 border-bottom border-top border-end border-3 border-dark">
           <AttentionMap attentions={props.attention} />
        </div>
    )

    }


export default DisplayUpdate
