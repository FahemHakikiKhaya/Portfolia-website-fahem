import React from 'react'
import FeedCard from '../../../component/feedcard/FeedCard';
function FeedMap(props) {

    const renderFeeds = () => {
        return props.feeds.map((feed) => (
          <FeedCard key={feed.id} feed={feed} />
        ));
      };
    
      return <div>{renderFeeds()}</div>;
}

export default FeedMap
