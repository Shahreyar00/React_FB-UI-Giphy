import React from 'react';
import CreatingPost from '../creatingPost/CreatingPost';
import Posts from '../posts/Posts';
import StoryReel from '../storyreel/StoryReel';
import "./feed.scss";

const Feed = () => {
    return (
        <div className="feedContainer">
            <div className="feedWrapper">
                <StoryReel />
                <CreatingPost />
                <Posts />
            </div>
        </div>
    )
}

export default Feed