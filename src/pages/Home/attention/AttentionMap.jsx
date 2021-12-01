import React from 'react'
import AttentionCard from '../../../component/attentionCard/AttentionCard';

function AttentionMap(props) {
    const renderAttention = () => {
        return props.attentions.map((attention) => (
          <AttentionCard attentions={attention} />
        ));
      };
    
      return <div>{renderAttention()}</div>
}

export default AttentionMap
