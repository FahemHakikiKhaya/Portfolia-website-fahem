import React from 'react'
import AttentionCard from '../../component/attentionCard/AttentionCard';

function AttentionMap(props) {
    const renderAttention = () => {
        return props.attention.map((attention) => (
          <AttentionCard image={attention.image} />
        ));
      };
    
      return <div>{renderAttention()}</div>
}

export default AttentionMap
