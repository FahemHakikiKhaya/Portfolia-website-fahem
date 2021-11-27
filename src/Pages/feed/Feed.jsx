import React from 'react'

function Feed() {
    return (
        <div className="row Feed py-5">
        <div className="Feed-1 col-7 feed-padding border-end border-dark">
            <div className="Feed-Wrap d-flex border border-1 border-dark">
            <div className="Feed-image w-40">
            <img src="Fahem-BlockM.jpg" className="w-100" alt=""/>
            </div>
            <div className="Feed-desc w-60">
            <a href="#" className="text-decoration-none text-dark">Do Not Leave Tokyo Before Eating Ramen</a>
            <a href="#" className="text-decoration-none text-dark"> Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....</a>
            </div>
            </div>
        </div>

        <div className="Feed-3 col-5 p-5">

        </div>
        </div>
    )
}

export default Feed
