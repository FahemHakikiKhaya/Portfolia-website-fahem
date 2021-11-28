import React from 'react'
import Feed from './Feed';
function FeedMap(props) {

    const renderFeeds = () => {
        return props.feeds.map((feed) => (
          <Feed key={feed.id} feed={feed} />
        ));
      };
    
      return <div>{renderFeeds()}</div>;
}

export default FeedMap
